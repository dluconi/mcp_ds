import json

def extract_button_details():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    comp_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not comp_page: return

    button_set = None
    def find_set(node):
        nonlocal button_set
        if node.get("type") == "COMPONENT_SET" and node.get("name") == "button":
            button_set = node
            return True
        if "children" in node:
            for child in node["children"]:
                if find_set(child): return True
        return False

    find_set(comp_page)
    
    if not button_set:
        print("Component Set 'button' não encontrado.")
        return

    print(f"--- Detalhes do Component Set: {button_set['name']} ---")
    
    variants = {}
    for variant in button_set.get("children", []):
        v_name = variant.get("name", "unknown")
        # Pega cores de preenchimento
        fills = variant.get("fills", [])
        color_hex = "N/A"
        for fill in fills:
            if fill.get("type") == "SOLID":
                c = fill.get("color", {})
                r, g, b = int(c.get("r", 0)*255), int(c.get("g", 0)*255), int(c.get("b", 0)*255)
                color_hex = "#{:02x}{:02x}{:02x}".format(r, g, b)
        
        # Pega padding, border radius
        padding = {
            "top": variant.get("paddingTop", 0),
            "right": variant.get("paddingRight", 0),
            "bottom": variant.get("paddingBottom", 0),
            "left": variant.get("paddingLeft", 0)
        }
        radius = variant.get("cornerRadius", 0)
        
        variants[v_name] = {
            "color": color_hex,
            "padding": padding,
            "radius": radius,
            "layoutMode": variant.get("layoutMode", "NONE")
        }

    print(json.dumps(variants, indent=2))

if __name__ == "__main__":
    extract_button_details()
