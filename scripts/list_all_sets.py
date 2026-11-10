import json

def list_all_components():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    comp_page = next((c for c in data["document"]["children"] if c["id"] == "37:50"), None)
    if not comp_page: return

    component_sets = []
    def find_sets(node):
        if node.get("type") == "COMPONENT_SET":
            component_sets.append(node.get("name", "Unknown"))
        if "children" in node:
            for child in node["children"]:
                find_sets(child)
    
    find_sets(comp_page)
    print("Component Sets encontrados no Figma:")
    for s in sorted(component_sets):
        print(f"- {s}")

if __name__ == "__main__":
    list_all_components()
