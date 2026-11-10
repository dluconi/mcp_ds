import os
import time
import requests
import json
import re
from dotenv import load_dotenv

# Carrega variáveis
load_dotenv()

FIGMA_TOKEN = os.getenv("FIGMA_TOKEN")
FILE_ID = os.getenv("FIGMA_FILE_ID")

def get_figma_data(endpoint):
    url = f"https://api.figma.com/v1/{endpoint}"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    for i in range(5):
        try:
            resp = requests.get(url, headers=headers)
            if resp.status_code == 429:
                print(f"⚠️ Rate limit atingido no arquivo principal. Aguardando 30s (Tentativa {i+1}/5)...", flush=True)
                time.sleep(30)
                continue
            resp.raise_for_status()
            return resp.json()
        except Exception as e:
            print(f"⚠️ Tentativa {i+1} falhou: {e}", flush=True)
            time.sleep(10)
    return None

def download_svg(node_id, component_name, file_name, paths):
    url = f"https://api.figma.com/v1/images/{FILE_ID}?ids={node_id}&format=svg"
    headers = {"X-Figma-Token": FIGMA_TOKEN}
    
    for attempt in range(3):
        try:
            time.sleep(1.2) 
            resp = requests.get(url, headers=headers)
            if resp.status_code == 429:
                wait_time = 30 + (attempt * 30)
                print(f"⚠️ Rate limit no componente '{component_name}'. Aguardando {wait_time}s...", flush=True)
                time.sleep(wait_time)
                continue
                
            resp.raise_for_status()
            img_url = resp.json().get("images", {}).get(node_id)
            
            if img_url:
                svg_resp = requests.get(img_url)
                svg_resp.raise_for_status()
                svg_content = svg_resp.text
                
                for base_path in paths:
                    asset_path = f"{base_path}/{component_name}/assets"
                    os.makedirs(asset_path, exist_ok=True)
                    with open(f"{asset_path}/{file_name}", "w", encoding="utf-8") as f:
                        f.write(svg_content)
                return True
        except Exception as e:
            print(f"❌ Erro ao baixar SVG {node_id}: {e}", flush=True)
            time.sleep(5)
    return False

def write_files(name, node_id=None):
    # BLINDAGEM TOTAL: Aceita apenas letras, números e traços.
    # Converte tudo para minúsculo, troca espaços/especiais por traço e remove duplicados de traço.
    safe_name = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    
    # Nome da classe (CamelCase) - Remove traços e capitaliza
    comp_class = ''.join(word.capitalize() for word in safe_name.split('-'))
    
    # Destinos
    output_paths = ["Design_System/src/components", "showcase/src/components"]
    
    for base in output_paths:
        os.makedirs(f"{base}/{safe_name}", exist_ok=True)

    if node_id:
        file_name = f"{safe_name.split('-')[0]}.svg"
        download_svg(node_id, safe_name, file_name, output_paths)

    tsx_content = f"""import React from 'react';
import './{safe_name}.css';
import icon from './assets/{safe_name.split('-')[0]}.svg';

export const {comp_class}: React.FC = () => {{
  return (
    <div className="ds-component ds-{safe_name}">
      <img src={{icon}} className="h-full w-auto object-contain" alt="{name}" />
    </div>
  );
}};
"""
    css_content = f"""/* Design System: {name} */
.ds-{safe_name} {{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}}
"""

    for base in output_paths:
        with open(f"{base}/{safe_name}/{comp_class}.tsx", "w", encoding="utf-8") as f:
            f.write(tsx_content)
        with open(f"{base}/{safe_name}/{safe_name}.css", "w", encoding="utf-8") as f:
            f.write(css_content)

def full_extract():
    print("🚀 Iniciando EXTRAÇÃO BLINDADA (Regex Protection)...", flush=True)
    data = get_figma_data(f"files/{FILE_ID}")
    if not data: return

    components_found = data.get("components", {})
    sorted_components = sorted(components_found.items(), key=lambda x: x[1].get("name", ""))
    total = len(sorted_components)

    for i, (node_id, info) in enumerate(sorted_components):
        name = info.get("name", "Component")
        print(f"  -> [{i+1}/{total}] Extraindo: {name}", flush=True)
        write_files(name, node_id=node_id)

    print("✅ Extração concluída com SUCESSO ABSOLUTO.", flush=True)

if __name__ == "__main__":
    full_extract()
