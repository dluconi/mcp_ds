import json

def extract_buttons():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    comp_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not comp_page: 
        print("Página Components não encontrada.")
        return

    buttons = []

    def walk(node):
        name = node.get("name", "")
        ntype = node.get("type", "")
        
        if ntype in ["COMPONENT", "COMPONENT_SET", "INSTANCE"] and "Button" in name:
            buttons.append({
                "id": node["id"],
                "name": name,
                "type": ntype,
                "properties": node.get("componentPropertyDefinitions", {})
            })
            # Se for COMPONENT_SET, os filhos são as variantes
            if ntype == "COMPONENT_SET":
                for child in node.get("children", []):
                    buttons.append({
                        "id": child["id"],
                        "name": child["name"],
                        "type": "VARIANT",
                        "parent": name
                    })
            return # Não precisa descer mais se achou o componente

        if "children" in node:
            for child in node["children"]:
                walk(child)

    walk(comp_page)
    
    print(f"Encontrados {len(buttons)} nós de botão.")
    for b in buttons[:20]: # Print top 20
        print(f"  - [{b['type']}] {b['name']} (ID: {b['id']})")

if __name__ == "__main__":
    extract_buttons()
