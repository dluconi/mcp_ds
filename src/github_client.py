import httpx
import logging
import base64
from src.config import settings

logger = logging.getLogger("mcp-server")

class GitHubClient:
    def __init__(self):
        self.token = settings.GITHUB_TOKEN
        self.repo = settings.GITHUB_REPO
        self.base_url = f"https://api.github.com/repos/{self.repo}"
        self.headers = {
            "Authorization": f"Bearer {self.token}",
            "Accept": "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28"
        }

    async def get_repo_contents(self, path=""):
        clean_path = path.lstrip("/")
        url = f"{self.base_url}/contents/{clean_path}"
        async with httpx.AsyncClient() as client:
            resp = await client.get(url, headers=self.headers)
            if resp.status_code == 404:
                return []
            resp.raise_for_status()
            return resp.json()

    async def recursive_scan_components(self, path="src/components"):
        """
        Escaneia as pastas de componentes de forma eficiente. 
        Retorna apenas as pastas (cada pasta = 1 componente).
        """
        try:
            # Lista apenas o primeiro nível de src/components para ganhar velocidade
            items = await self.get_repo_contents(path)
            components = []
            for item in items:
                if item["type"] == "dir":
                    components.append({
                        "name": item["name"],
                        "path": item["path"],
                        "type": "component"
                    })
            return components
        except Exception as e:
            logger.error(f"Erro no scan de componentes do GitHub: {str(e)}")
            return []

    async def get_file_content(self, path):
        clean_path = path.lstrip("/")
        url = f"{self.base_url}/contents/{clean_path}"
        async with httpx.AsyncClient() as client:
            resp = await client.get(url, headers=self.headers)
            resp.raise_for_status()
            data = resp.json()
            return base64.b64decode(data["content"]).decode("utf-8")
