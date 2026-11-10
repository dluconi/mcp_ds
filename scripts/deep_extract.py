import json

def deep_extract():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    tokens = {"primitive": {}, "semantic": {}}
    
    # 1. Extração de Tokens na Foundations (1:3)
    foundations = next((c for c in data["document"]["children"] if c["id"] == "1:3"), None)
    if foundations:
        def walk_foundations(node, current_path=""):
            name = node.get("name", "")
            if node.get("type") in ["RECTANGLE", "VECTOR", "FRAME"]:
                fills = node.get("fills", [])
                for fill in fills:
                    if fill.get("type") == "SOLID":
                        c = fill.get("color", {})
                        r, g, b = int(c.get("r", 0)*255), int(c.get("g", 0)*255), int(c.get("b", 0)*255)
                        hex_val = "#{:02x}{:02x}{:02x}".format(r, g, b)
                        # Se o nome parece token (ex: "500", "gray", "primary")
                        tokens["primitive"][name] = hex_val
            
            if "children" in node:
                for child in node["children"]:
                    walk_foundations(child)
        walk_foundations(foundations)

    # 2. Extração de Botão na Components (37:50)
    comp_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    button_details = {}
    if comp_page:
        def find_button_set(node):
            if node.get("type") == "COMPONENT_SET" and "button" in node.get("name", "").lower():
                for variant in node.get("children", []):
                    v_name = variant.get("name", "")
                    # Pega o primeiro fill sólido que encontrar nos filhos
                    v_color = "N/A"
                    def find_fill(n):
                        nonlocal v_color
                        for fill in n.get("fills", []):
                            if fill.get("type") == "SOLID":
                                c = fill.get("color", {})
                                r, g, b = int(c.get("r", 0)*255), int(c.get("g", 0)*255), int(c.get("b", 0)*255)
                                v_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
                                return True
                        if "children" in n:
                            for child in n["children"]:
                                if find_fill(child): return True
                        return False
                    find_fill(variant)
                    button_details[v_name] = {"color": v_color}
                return True
            if "children" in node:
                for child in node["children"]:
                    if find_button_set(child): return True
            return False
        find_button_set(comp_page)

    with open("src/tokens/extracted_debug.json", "w") as f:
        json.dump({"tokens": tokens, "buttons": button_details}, f, indent=2)
    
    print(f"Deep Extract concluído. Tokens: {len(tokens['primitive'])}. Botões: {len(button_details)}")

if __name__ == "__main__":
    deep_extract()
