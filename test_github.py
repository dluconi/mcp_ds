import asyncio
from src.github_client import GitHubClient
from src.config import settings

async def main():
    client = GitHubClient()
    print(f"Testando Repo: {settings.GITHUB_REPO}")
    print("\n--- Scaneando componentes recursivamente ---")
    components = await client.recursive_scan_components()
    print(f"Total encontrado: {len(components)}")
    for c in components:
        print(f"- {c['path']}")

    print("\n--- Conteúdo de src/components ---")
    try:
        root_comps = await client.get_repo_contents("src/components")
        for item in root_comps:
            print(f"Item: {item['name']} ({item['type']})")
    except Exception as e:
        print(f"Erro ao listar src/components: {e}")

if __name__ == "__main__":
    asyncio.run(main())
