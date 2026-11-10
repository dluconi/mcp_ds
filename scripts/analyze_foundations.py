import json

def analyze_foundations_nodes():
    with open("figma_snapshot.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    
    foundations_page = next((c for c in data["document"]["children"] if c["id"] == "1:3"), None)
    if not foundations_page: return

    for child in foundations_page.get("children", []):
        print(f"Top node in Foundations: {child['name']} ({child['id']})")
        if "children" in child:
            for sub in child["children"]:
                print(f"  - Sub node: {sub['name']} ({sub['id']}) type: {sub['type']}")

if __name__ == "__main__":
    analyze_foundations_nodes()
