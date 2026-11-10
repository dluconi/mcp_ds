import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def global_scan():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    keywords = ["rocco", "tile", "brand", "quick", "action"]
    results = []

    def scan(node, page_name):
        name = node.get("name", "").lower()
        if any(kw in name for kw in keywords):
            if node["type"] in ["COMPONENT", "COMPONENT_SET", "FRAME"]:
                results.append(f"Page: {page_name} | [{node['type']}] {node['name']} (ID: {node['id']})")
        
        if "children" in node:
            for child in node["children"]: scan(child, page_name)

    for page in data["document"]["children"]:
        scan(page, page.get("name"))
    
    with open("figma_global_scan.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(results))
    print(f"✅ {len(results)} itens encontrados em todo o documento.")

if __name__ == "__main__":
    global_scan()
