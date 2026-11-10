import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def list_top_level():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    target_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not target_page: return
    main_frame = target_page["children"][0]
    
    nodes = []
    for node in main_frame.get("children", []):
        nodes.append(f"[{node['type']}] {node['name']} (ID: {node['id']})")
    
    with open("top_level_nodes.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(nodes))
    print(f"✅ {len(nodes)} nós de topo salvos em top_level_nodes.txt")

if __name__ == "__main__":
    list_top_level()
