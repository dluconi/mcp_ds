import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def find_by_text(search_text):
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    found = []

    def scan(node, path=""):
        name = node.get("name", "")
        ntype = node.get("type", "")
        characters = node.get("characters", "")
        
        if search_text.lower() in characters.lower() or search_text.lower() in name.lower():
            found.append({
                "id": node["id"],
                "name": name,
                "type": ntype,
                "text": characters,
                "path": path
            })
            
        if "children" in node:
            for child in node["children"]:
                scan(child, path + " > " + name)

    scan(data["document"])
    
    print(f"--- Resultados para '{search_text}' ---")
    for item in found:
        print(f"[{item['type']}] Name: {item['name']} | ID: {item['id']} | Text: {item['text'][:50]}")

if __name__ == "__main__":
    find_by_text("Rocco")
    find_by_text("Gemini")
    find_by_text("Todos os direitos")
