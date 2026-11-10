import json
import os

def extract_tokens():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Tentativa de carregar estilos do arquivo
    # Nota: estilos globais podem estar em data["styles"]
    styles = data.get("styles", {})
    
    primitive = {"color": {}, "spacing": {}, "typography": {}}
    semantic = {"color": {}}

    # Mapeamento simplificado baseado em nomes (ex: "Primitive/Blue/500" ou "Semantic/Primary/Default")
    # Para uma POC, vamos focar em encontrar ninhos de cores
    
    for style_id, style_info in styles.items():
        name = style_info.get("name", "")
        if "Primitive" in name:
            parts = name.split("/")
            # Ex: Primitive/Gray/500 -> primitive["color"]["Gray"]["500"]
            current = primitive["color"]
            for part in parts[1:-1]:
                if part not in current: current[part] = {}
                current = current[part]
            current[parts[-1]] = "VARIABLE_REF_OR_HEX" # TODO: Buscar o valor real
        elif "Semantic" in name:
            parts = name.split("/")
            current = semantic["color"]
            for part in parts[1:-1]:
                if part not in current: current[part] = {}
                current = current[part]
            current[parts[-1]] = "VARIABLE_REF"

    # Criando pastas
    os.makedirs("src/tokens/primitive", exist_ok=True)
    os.makedirs("src/tokens/semantic", exist_ok=True)

    with open("src/tokens/primitive/colors.json", "w", encoding="utf-8") as f:
        json.dump(primitive["color"], f, indent=2)
    with open("src/tokens/semantic/colors.json", "w", encoding="utf-8") as f:
        json.dump(semantic["color"], f, indent=2)

    print("Tokens gerados em src/tokens/")

if __name__ == "__main__":
    extract_tokens()
