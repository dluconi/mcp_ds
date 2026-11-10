import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def list_all_components():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    target_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not target_page: return

    components = []

    def scan(node):
        if node["type"] in ["COMPONENT", "COMPONENT_SET"]:
            components.append({"id": node["id"], "name": node["name"], "type": node["type"]})
        if "children" in node:
            for child in node["children"]: scan(child)

    scan(target_page)
    
    print(f"--- Total de Componentes Encontrados: {len(components)} ---")
    for cp in components:
        print(f"[{cp['type']}] {cp['name']} (ID: {cp['id']})")

if __name__ == "__main__":
    list_all_components()
