import os
import requests
from dotenv import load_dotenv
import json

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def find_missing_pieces():
    if not FIGMA_TOKEN or not FILE_ID: return
    url = f"https://api.figma.com/v1/files/{FILE_ID}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    response = requests.get(url, headers=headers)
    data = response.json()

    rocco_nodes = []
    tile_nodes = []

    def scan(node, path=""):
        name = node.get("name", "").lower()
        ntype = node.get("type", "")
        chars = node.get("characters", "").lower()
        
        # Rocco search
        if "rocco" in chars or "rocco" in name:
            rocco_nodes.append({"id": node["id"], "name": node["name"], "type": ntype, "path": path})
            
        # Tile search (Square components)
        if ntype in ["COMPONENT", "INSTANCE", "FRAME"]:
            bbox = node.get("absoluteBoundingBox")
            if bbox:
                w, h = bbox.get("width", 0), bbox.get("height", 0)
                # Se for quadrado e tiver tamanho razoável (ex: 80-200px)
                if abs(w - h) < 2 and 50 < w < 300:
                    tile_nodes.append({"id": node["id"], "name": node["name"], "type": ntype, "w": w, "h": h})

        if "children" in node:
            for child in node["children"]:
                scan(child, path + " > " + node.get("name", "noname"))

    scan(data["document"])
    
    print("--- Possíveis Rocco Cards ---")
    for r in rocco_nodes[:5]: print(f"ID: {r['id']} | Name: {r['name']} | Path: {r['path']}")
    
    print("\n--- Possíveis Tiles (Quadrados) ---")
    # Mostrar os que têm nomes sugestivos primeiro
    sugestivos = [t for t in tile_nodes if any(kw in t["name"].lower() for kw in ["action", "tile", "box", "card", "nav"])]
    for t in sugestivos[:10]: print(f"ID: {t['id']} | Name: {t['name']} | Size: {t['w']}x{t['h']}")

if __name__ == "__main__":
    find_missing_pieces()
