import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def extract_colors():
    print("🎨 Extraindo estilos de cores do Figma...", flush=True)
    url = f"https://api.figma.com/v1/files/{FILE_ID}/styles"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    
    try:
        resp = requests.get(url, headers=headers)
        resp.raise_for_status()
        styles = resp.json().get("meta", {}).get("styles", [])
        
        # Filtra apenas estilos de cores (FILL)
        color_styles = [s for s in styles if s.get("style_type") == "FILL"]
        
        # Como o endpoint /styles não dá o valor HEX direto, 
        # precisaríamos do endpoint /nodes para pegar os valores reais.
        # Por enquanto, vamos mapear os nomes e IDs.
        
        tokens = {
            "last_updated": os.popen('date /t').read().strip() + " " + os.popen('time /t').read().strip(),
            "colors": []
        }
        
        for s in color_styles:
            tokens["colors"].append({
                "name": s.get("name"),
                "figma_id": s.get("node_id"),
                "description": s.get("description")
            })

        output_dir = "Design_System/src/tokens"
        os.makedirs(output_dir, exist_ok=True)
        
        with open(f"{output_dir}/colors.json", "w", encoding="utf-8") as f:
            json.dump(tokens, f, indent=2, ensure_ascii=False)
            
        print(f"✅ {len(color_styles)} estilos de cores mapeados em {output_dir}/colors.json", flush=True)
        return tokens
    except Exception as e:
        print(f"❌ Erro ao extrair cores: {e}", flush=True)
        return None

if __name__ == "__main__":
    extract_colors()
