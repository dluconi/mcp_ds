import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def deep_scan_architecture():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    target_page = next((c for c in data["document"]["children"] if c["id"] == "122:463"), None)
    if not target_page: return

    items = []
    def scan(node, depth=0):
        if depth > 5: return
        name = node.get("name", "")
        ntype = node.get("type", "")
        
        # Guardar se for Frame ou Componente
        if ntype in ["FRAME", "COMPONENT", "COMPONENT_SET", "INSTANCE"]:
             items.append(f"{'  '*depth}[{ntype}] {name} (ID: {node['id']})")
             
        if "children" in node:
            for child in node["children"]: scan(child, depth + 1)

    scan(target_page)
    
    with open("figma_arch_deep.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(items))
    print(f"✅ {len(items)} nós escaneados em Architecture.")

if __name__ == "__main__":
    deep_scan_architecture()
