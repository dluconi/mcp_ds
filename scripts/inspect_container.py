import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def inspect_container(node_id):
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}/nodes?ids={node_id}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    print(f"--- Detalhes do Container {node_id} ---")
    node = data["nodes"][node_id]["document"]
    
    for child in node.get("children", []):
        print(f"[{child['type']}] {child['name']} (ID: {child['id']})")
        if "children" in child:
            for sub in child["children"]:
                print(f"  - [{sub['type']}] {sub['name']} (ID: {sub['id']})")

if __name__ == "__main__":
    inspect_container("144:4893")
