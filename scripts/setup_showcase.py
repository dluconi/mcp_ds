import os
import re

def sanitize_name(name):
    clean = re.sub(r'[^a-zA-Z0-9]', ' ', name)
    return "".join(word.capitalize() for word in clean.split())

def setup_showcase():
    comp_dir = "src/components"
    if not os.path.exists(comp_dir):
        print(f"Erro: {comp_dir} não encontrado.")
        return

    components = []
    for item in os.listdir(comp_dir):
        if os.path.isdir(os.path.join(comp_dir, item)):
            components.append(item)

    print(f"Encontrados {len(components)} componentes.")

    import_lines = ["import React from 'react';"]
    render_lines = []

    for comp in components:
        # O nome do diretório já está em PascalCase se veio do extrator refinado
        # Mas vamos garantir
        class_name = comp
        import_lines.append(f"import {{ {class_name} }} from './components/{comp}/{class_name}';")
        
        render_lines.append(f"""
        <section className="p-6 border border-slate-700 rounded-xl bg-slate-800/50">
          <h2 className="text-xl font-bold mb-4 text-slate-200 capitalize">{comp.replace('-', ' ')}</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <{class_name} variant="default">{comp}</{class_name}>
            <{class_name} variant="primary">Primary</{class_name}>
            <{class_name} variant="outline">Outline</{class_name}>
          </div>
        </section>""")

    app_code = f"""
{" ".join(import_lines)}
import './index.css';

function App() {{
  return (
    <div className="min-h-screen bg-slate-900 border-t-4 border-blue-500 p-8 text-white">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
          Comolatti Design System
        </h1>
        <p className="text-slate-400 text-lg">
          Mostruário automático sincronizado com Figma (Rocco, Branding & UI)
        </p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {"".join(render_lines)}
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur border-t border-slate-800 p-4 text-center text-slate-400 text-sm italic">
        Powered by Antigravity AI & Figma API | 2026
      </footer>
    </div>
  );
}}

export default App;
"""

    with open("src/App.tsx", "w", encoding="utf-8") as f:
        f.write(app_code.strip())
    
    print(f"✅ App.tsx gerado com sucesso para {len(components)} componentes.")

if __name__ == "__main__":
    # O script deve ser executado de dentro da pasta showcase
    if os.path.exists("src"):
        setup_showcase()
    else:
        print("Executando a partir da raiz, ajustando caminhos...")
        os.chdir("showcase")
        setup_showcase()
