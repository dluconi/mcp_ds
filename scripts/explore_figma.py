import os
import requests
from dotenv import load_dotenv

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def explore_nodes():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    if response.status_code != 200: return
    data = response.json()

    # Página alvo
    target_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not target_page:
        print("Página 37:50 não encontrada.")
        return

    print(f"--- Mapeamento Página 37:50 ({target_page.get('name')}) ---")
    
    found = []

    def scan(node, depth=0):
        name = node.get("name", "")
        ntype = node.get("type", "")
        
        # Filtro para componentes, conjuntos de componentes ou frames de topo
        if ntype in ["COMPONENT", "COMPONENT_SET", "FRAME"] and depth <= 3:
            found.append(f"{'  ' * depth}[{ntype}] {name} (ID: {node.get('id')})")
        
        if "children" in node:
            for child in node["children"]:
                scan(child, depth + 1)

    scan(target_page)
    
    for item in found:
        print(item)

if __name__ == "__main__":
    explore_nodes()
