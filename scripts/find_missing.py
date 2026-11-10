import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def get_node_details(node_id):
    url = f"https://api.figma.com/v1/files/{FILE_ID}/nodes?ids={node_id}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    return response.json()

def find_specific_items():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    keywords = ["rocco", "tile", "brand", "quick", "action"]
    found = []

    def scan(node):
        name = node.get("name", "").lower()
        if any(kw in name for kw in keywords):
            found.append({"id": node["id"], "name": node["name"], "type": node["type"]})
        if "children" in node:
            for child in node["children"]: scan(child)

    scan(data["document"])
    
    # Imprimir detalhes dos nós encontrados
    print(f"Items encontrados: {len(found)}")
    for item in found:
        print(f"[{item['type']}] {item['name']} (ID: {item['id']})")

if __name__ == "__main__":
    find_specific_items()
