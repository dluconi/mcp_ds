import json

def find_foundations_tokens():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Encontra a página Foundations
    foundations_page = None
    for child in data["document"]["children"]:
        if child["id"] == "1:3": # ID confirmado antes
            foundations_page = child
            break
            
    if not foundations_page:
        print("Página Foundations não encontrada.")
        return

    tokens = {"primitive": {}, "semantic": {}}

    def walk(node):
        name = node.get("name", "")
        # Se o nome tiver o padrão "Token/..." (ajustar conforme o figma real)
        # Vamos imprimir nomes interessantes
        if "children" in node:
            for child in node["children"]:
                walk(child)
        
        # Tenta pegar a cor se for um retângulo ou frame com nome de token
        if node.get("type") in ["RECTANGLE", "FRAME", "VECTOR"] and ("/" in name or " " in name):
            fills = node.get("fills", [])
            for fill in fills:
                if fill.get("type") == "SOLID":
                    color = fill.get("color", {})
                    # Converter 0-1 para 0-255 ou Hex
                    r, g, b = int(color.get("r", 0)*255), int(color.get("g", 0)*255), int(color.get("b", 0)*255)
                    hex_val = "#{:02x}{:02x}{:02x}".format(r, g, b)
                    
                    if "Primitive" in name or "P/" in name:
                        tokens["primitive"][name] = hex_val
                    elif "Semantic" in name or "S/" in name:
                        tokens["semantic"][name] = hex_val
                    else:
                        # Fallback: se estiver na página foundations, provável que seja token
                        tokens["primitive"][name] = hex_val

    walk(foundations_page)
    
    print(f"Encontrados {len(tokens['primitive'])} primitive e {len(tokens['semantic'])} semantic tokens.")
    
    with open("src/tokens/foundations_debug.json", "w", encoding="utf-8") as f:
        json.dump(tokens, f, indent=2)

if __name__ == "__main__":
    find_foundations_tokens()
