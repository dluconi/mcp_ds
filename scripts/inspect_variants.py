import os
import requests
import sys
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def inspect_variants(node_id):
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}/nodes?ids={node_id}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    print(f"--- Variantes do Component Set {node_id} ---")
    node = data["nodes"][node_id]["document"]
    
    for child in node.get("children", []):
        print(f"ID: {child['id']} | Name: {child['name']}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        inspect_variants(sys.argv[1])
    else:
        print("Uso: python inspect_variants.py <node_id>")
