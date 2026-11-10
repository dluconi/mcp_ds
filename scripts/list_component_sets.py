import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def list_component_sets():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    results = []
    def scan(node):
        if node["type"] == "COMPONENT_SET":
            results.append(f"Name: {node['name']} | ID: {node['id']}")
        if "children" in node:
            for child in node["children"]: scan(child)

    scan(data["document"])
    
    print("--- Todos os COMPONENT_SET ---")
    for r in results: print(r)

if __name__ == "__main__":
    list_component_sets()
