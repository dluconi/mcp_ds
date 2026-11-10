import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def list_pages():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    pages = []
    for page in data["document"]["children"]:
        pages.append(f"Page Name: {page.get('name')} | ID: {page.get('id')}")
    
    with open("figma_pages.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(pages))
    print(f"✅ {len(pages)} páginas salvas em figma_pages.txt")

if __name__ == "__main__":
    list_pages()
