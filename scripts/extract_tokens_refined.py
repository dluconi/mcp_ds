import json

def extract_tokens_from_all():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    tokens = {"primitive": {}, "semantic": {}}

    def walk(node):
        name = node.get("name", "").lower()
        # Procura por "color", "gray", "blue", "red", "brand" em Foundations
        if node.get("type") in ["RECTANGLE", "VECTOR", "FRAME"]:
            fills = node.get("fills", [])
            for fill in fills:
                if fill.get("type") == "SOLID":
                    color = fill.get("color", {})
                    r, g, b = int(color.get("r", 0)*255), int(color.get("g", 0)*255), int(color.get("b", 0)*255)
                    hex_val = "#{:02x}{:02x}{:02x}".format(r, g, b)
                    
                    # Lógica de categorização simples por nome
                    full_name = node.get("name", "")
                    if "primitive" in name or "p/" in name:
                        tokens["primitive"][full_name] = hex_val
                    elif "semantic" in name or "s/" in name:
                        tokens["semantic"][full_name] = hex_val
                    elif any(c in name for c in ["blue", "gray", "red", "green", "white", "black"]):
                        tokens["primitive"][full_name] = hex_val

        if "children" in node:
            for child in node["children"]:
                walk(child)

    # Walk only Foundations page (1:3)
    foundations = next((c for c in data["document"]["children"] if c["id"] == "1:3"), None)
    if foundations:
        walk(foundations)
    
    # Save tokens
    with open("src/tokens/primitive/colors.json", "w", encoding="utf-8") as f:
        json.dump(tokens["primitive"], f, indent=2)
    with open("src/tokens/semantic/colors.json", "w", encoding="utf-8") as f:
        json.dump(tokens["semantic"], f, indent=2)

    print(f"Tokens extraídos: {len(tokens['primitive'])} primitivos, {len(tokens['semantic'])} semânticos.")

if __name__ == "__main__":
    extract_tokens_from_all()
