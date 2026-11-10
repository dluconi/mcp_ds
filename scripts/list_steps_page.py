import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def list_steps_page():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    target_page = next((c for c in data["document"]["children"] if c["id"] == "151:2771"), None)
    if not target_page: return

    items = []
    def scan(node, depth=0):
        if node["type"] in ["COMPONENT", "COMPONENT_SET", "FRAME"] and depth <= 2:
            items.append(f"{'  '*depth}[{node['type']}] {node['name']} (ID: {node['id']})")
        if "children" in node:
            for child in node["children"]: scan(child, depth + 1)

    scan(target_page)
    
    with open("figma_steps_page.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(items))
    print(f"✅ Itens da página Steps salvos em figma_steps_page.txt")

if __name__ == "__main__":
    list_steps_page()
