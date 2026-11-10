import os
import shutil

def sync():
    # Detecta a raiz do projeto de forma robusta
    BASE_DIR = os.getcwd()
    print(f"Executando sincronização em: {BASE_DIR}")
    
    # Nome exato do repositório no GitHub
    repo_dir = os.path.join(BASE_DIR, "Design_System")
    src_dir = os.path.join(BASE_DIR, "src")
    
    print(f"Sincronizando de {src_dir} para {repo_dir}...")
    
    # Criar pastas no repo
    target_tokens = os.path.join(repo_dir, "src", "tokens")
    target_components = os.path.join(repo_dir, "src", "components")
    
    os.makedirs(target_tokens, exist_ok=True)
    os.makedirs(target_components, exist_ok=True)
    
    # Copiar recursivamente
    # Tokens
    for item in ["primitive", "semantic"]:
        s = os.path.join(src_dir, "tokens", item)
        d = os.path.join(target_tokens, item)
        if os.path.exists(s):
            if os.path.exists(d): shutil.rmtree(d)
            shutil.copytree(s, d)
            
    # Componentes (Todas as subpastas)
    s_comp = os.path.join(src_dir, "components")
    if os.path.exists(s_comp):
        for item in os.listdir(s_comp):
            s = os.path.join(s_comp, item)
            d = os.path.join(target_components, item)
            if os.path.isdir(s):
                if os.path.exists(d): shutil.rmtree(d)
                shutil.copytree(s, d)
                print(f"Copiado: components/{item}")
    
    print("✅ Sincronização local concluída.")

if __name__ == "__main__":
    sync()
