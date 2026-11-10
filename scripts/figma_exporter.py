import os
import httpx
import json
import asyncio
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# Configurações do Figma
FIGMA_TOKEN = os.getenv("FIGMA_TOKEN", "")
FIGMA_FILE_ID = os.getenv("FIGMA_FILE_ID", "")

headers = {
    "X-Figma-Token": FIGMA_TOKEN
}

async def fetch_figma_file():
    url = f"https://api.figma.com/v1/files/{FIGMA_FILE_ID}"
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

async def fetch_styles():
    url = f"https://api.figma.com/v1/files/{FIGMA_FILE_ID}/styles"
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()

def ensure_dirs():
    dirs = [
        "src/tokens/primitive",
        "src/tokens/semantic",
        "src/foundations",
        "src/components/button",
        "src/patterns",
        "src/layouts"
    ]
    for d in dirs:
        Path(d).mkdir(parents=True, exist_ok=True)

async def main():
    print(f"--- Iniciando Extração do Figma ({FIGMA_FILE_ID}) ---")
    ensure_dirs()
    
    # Busca dados do arquivo
    file_data = await fetch_figma_file()
    styles_data = await fetch_styles()
    
    # Salva um snapshot para análise (opcional)
    with open("figma_snapshot.json", "w", encoding="utf-8") as f:
        json.dump(file_data, f, indent=2)
        
    print("Snapshot do Figma salvo em figma_snapshot.json")
    
    # TODO: Lógica de mapeamento de tokens e geração de componentes
    # Por enquanto, apenas confirmamos a conexão e a estrutura

if __name__ == "__main__":
    asyncio.run(main())
