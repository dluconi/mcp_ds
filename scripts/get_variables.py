import os
import httpx
import json
import asyncio
from dotenv import load_dotenv

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN", "")
FIGMA_FILE_ID = os.getenv("FIGMA_FILE_ID", "")
headers = {"X-Figma-Token": FIGMA_TOKEN}

async def get_variables():
    url = f"https://api.figma.com/v1/files/{FIGMA_FILE_ID}/variables/local"
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        if response.status_code != 200:
            print(f"Erro ao buscar variáveis: {response.status_code}")
            return None
        return response.json()

async def main():
    data = await get_variables()
    if data:
        with open("figma_variables.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
        print("Variáveis salvas em figma_variables.json")
    else:
        print("Nenhuma variável encontrada.")

if __name__ == "__main__":
    asyncio.run(main())
