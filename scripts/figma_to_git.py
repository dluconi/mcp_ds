import os
import subprocess
import shutil
from dotenv import load_dotenv

# Carrega variáveis
load_dotenv()

def run_command(cmd, cwd="."):
    print(f"Executando: {cmd}")
    env = os.environ.copy()
    env["GIT_TERMINAL_PROMPT"] = "0"
    
    # Mudança: Remove capture_output para ver o log em tempo real
    result = subprocess.run(cmd, shell=True, cwd=cwd, env=env)
    return result.returncode == 0

def orchestrate():
    # Detecta base path
    base = "/app" if os.path.exists("/app") else os.getcwd()
    print(f"Base path detectado: {base}")

    # 1. Extração do Figma
    print("\n--- PASSO 1: Extraindo do Figma ---")
    if not run_command("python3 scripts/refined_deep_extract.py", cwd=base):
        return

    # 2. Sincronização Local
    print("\n--- PASSO 2: Sincronizando com Repositório Local ---")
    if not run_command("python3 scripts/sync_to_repo.py", cwd=base):
        return

    # 3. Git Push
    print("\n--- PASSO 3: Enviando para o GitHub ---")
    repo_name = "Design_System"
    repo_path = os.path.join(base, repo_name)
    
    if os.path.exists(repo_path):
        # Fix: Adiciona diretório como seguro
        run_command(f"git config --global --add safe.directory {repo_path}")
        
        # Garante que o remote esteja correto (conforme o print do Dani)
        repo_url = os.getenv("GITHUB_REPO", "http-www-comolatti-com-br/Design_System")
        token = os.getenv("GITHUB_TOKEN")
        remote_url = f"https://x-access-token:{token}@github.com/{repo_url}.git"
        run_command(f"git remote set-url origin {remote_url}", cwd=repo_path)

        # Alinhamento obrigatório
        run_command("git pull origin main", cwd=repo_path)
        run_command("git add .", cwd=repo_path)
        
        status = subprocess.run("git status --porcelain", shell=True, cwd=repo_path, capture_output=True, text=True)
        if status.stdout.strip():
            run_command('git commit -m "feat: design system sync updated with all components"', cwd=repo_path)
            if run_command("git push origin main", cwd=repo_path):
                print("\n✅ SUCESSO ABSOLUTO! Figma sincronizado com GitHub.")
            else:
                print("\n❌ FALHA no push para o GitHub.")
        else:
            print("\nℹ️ Nenhuma mudança detectada para commit.")
    else:
        print(f"\n❌ Erro: Pasta do repositório não encontrada em '{repo_path}'.")

if __name__ == "__main__":
    orchestrate()
