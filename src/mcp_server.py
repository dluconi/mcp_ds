import asyncio
import logging
import os
from datetime import datetime, timedelta
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from src.github_client import GitHubClient
from src.config import settings
from scripts.figma_to_git import orchestrate
import json


# Configuração de logs
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("mcp-server")

app = FastAPI(title="MCP Design System Server")

# Estado global da sincronização
sync_status = {
    "last_sync": None,
    "next_sync": None,
    "status": "Iniciando...",
    "components_count": 0,
    "components_list": [],
    "errors": []
}

github = GitHubClient()

# Ferramentas MCP (Simulação/Registro)
mcp_tools = [
    {
        "name": "get_colors",
        "description": "Retorna a paleta de cores oficial do Design System (Primitive e Semantic).",
        "parameters": {
            "type": "object",
            "properties": {
                "type": {"type": "string", "enum": ["primitive", "semantic", "all"]}
            }
        }
    },
    {
        "name": "sync_figma",
        "description": "Inicia uma sincronização forçada com o Figma.",
        "parameters": {"type": "object", "properties": {}}
    }
]


async def perform_refresh():
    """Lógica para atualizar o cache local a partir do GitHub."""
    try:
        sync_status["status"] = "Sincronizando GitHub..."
        logger.info("Iniciando sincronização automática com o GitHub...")
        components = await github.recursive_scan_components()
        sync_status["components_list"] = components
        sync_status["components_count"] = len(components)
        sync_status["last_sync"] = datetime.now().isoformat()
        sync_status["status"] = "Idle"
        logger.info(f"Sincronização concluída: {len(components)} componentes processados.")
    except Exception as e:
        logger.error(f"Erro na sincronização: {str(e)}")
        sync_status["status"] = "Erro"
        sync_status["errors"].append(str(e))

async def background_refresh_task():
    """Loop que executa o refresh periodicamente."""
    # Inicializa o cache com o que já está no GitHub antes de começar o loop pesado
    await perform_refresh()
    
    while True:
        try:
            # 1. Figma ➔ GitHub
            sync_status["status"] = "Extraindo Figma..."
            logger.info("Iniciando orquestração automática: Figma ➔ GitHub...")
            await asyncio.to_thread(orchestrate)
            
            # 2. GitHub ➔ Cache
            logger.info("Orquestração Figma ➔ GitHub concluída. Atualizando cache local...")
            await perform_refresh()
            
        except Exception as e:
            logger.error(f"Erro no ciclo de atualização: {str(e)}")
            sync_status["status"] = "Erro Parcial"
            sync_status["errors"].append(str(e))
            # Garante que tentamos atualizar o dashboard mesmo se o Passo 1 falhar
            await perform_refresh()

        # Calcula próxima execução
        interval = settings.AUTO_REFRESH_MINUTES
        sync_status["next_sync"] = (datetime.now() + timedelta(minutes=interval)).isoformat()
        logger.info(f"Próxima sincronização em {interval} minutos.")
        await asyncio.sleep(interval * 60)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(background_refresh_task())

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "mcp-server"}

@app.get("/sync_status.json")
async def get_sync_status():
    return JSONResponse(content=sync_status)

@app.get("/components.json")
async def get_components_json():
    # Retorna a lista completa de componentes formatada para o dashboard
    return JSONResponse(content=sync_status["components_list"])

@app.get("/tools.json")
async def get_tools():
    return JSONResponse(content=mcp_tools)

@app.get("/tools/get_colors")
async def get_colors_tool(type: str = "all"):
    colors = {}
    try:
        if type in ["primitive", "all"]:
            p_path = "Design_System/src/tokens/primitive/colors.json"
            if os.path.exists(p_path):
                with open(p_path, "r") as f:
                    colors["primitive"] = json.load(f)
        if type in ["semantic", "all"]:
            s_path = "Design_System/src/tokens/semantic/colors.json"
            if os.path.exists(s_path):
                with open(s_path, "r") as f:
                    colors["semantic"] = json.load(f)
        return JSONResponse(content=colors)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)


# Serve o dashboard estático
# IMPORTANTE: Manter no final para não interceptar rotas de API
if os.path.exists("showcase/dist"):
    app.mount("/", StaticFiles(directory="showcase/dist", html=True), name="dashboard")
else:
    @app.get("/")
    async def root():
        return HTMLResponse("<h1>MCP Server Online</h1><p>Dashboard (showcase/dist) não encontrado.</p>")
