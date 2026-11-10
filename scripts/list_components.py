import json

def list_component_names():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    comp_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not comp_page: return

    def walk(node, depth=0):
        name = node.get("name", "")
        ntype = node.get("type", "")
        if ntype in ["COMPONENT", "COMPONENT_SET"]:
            print(f"{'  '*depth}- [{ntype}] {name}")
        
        if "children" in node and depth < 3: # Limita profundidade
            for child in node["children"]:
                walk(child, depth + 1)

    walk(comp_page)

if __name__ == "__main__":
    list_component_names()
