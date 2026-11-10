import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def find_by_color(hex_color):
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    # Converter hex para RGB Figma (0-1)
    hex_color = hex_color.lstrip('#')
    r, g, b = [int(hex_color[i:i+2], 16)/255.0 for i in (0, 2, 4)]
    
    found = []

    def scan(node, path=""):
        # Check fills
        fills = node.get("fills", [])
        for fill in fills:
            color = fill.get("color", {})
            if color:
                # Compara com tolerância pequena
                if abs(color.get('r', 0) - r) < 0.02 and abs(color.get('g', 0) - g) < 0.02 and abs(color.get('b', 0) - b) < 0.02:
                    found.append({"id": node["id"], "name": node["name"], "type": node["type"], "path": path})
        
        if "children" in node:
            for child in node["children"]:
                scan(child, path + " > " + node.get("name", "noname"))

    scan(data["document"])
    
    print(f"--- Resultados para cor {hex_color} ---")
    for item in found[:10]:
        print(f"[{item['type']}] Name: {item['name']} | ID: {item['id']} | Path: {item['path']}")

if __name__ == "__main__":
    find_by_color("#3664c9")
