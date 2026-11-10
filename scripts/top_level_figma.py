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

    # O primeiro filho da página costuma ser um frame que contém os componentes
    main_frame = target_page["children"][0]
    
    print(f"--- Top-Level Nodes in {main_frame['name']} ---")
    for node in main_frame.get("children", []):
        print(f"[{node['type']}] {node['name']} (ID: {node['id']})")

if __name__ == "__main__":
    list_top_level()
