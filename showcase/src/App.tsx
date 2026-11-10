import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [lastSync, setLastSync] = useState<number | null>(null);
  const [realCount, setRealCount] = useState<number>(0);
  const [serverStatus, setServerStatus] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'library' | 'tools'>('library');
  const [mcpTools, setMcpTools] = useState<any[]>([]);
  const [palette, setPalette] = useState<any>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/sync_status.json?t=' + Date.now());
        if (res.ok) {
          const data = await res.json();
          if (data.last_sync) setLastSync(new Date(data.last_sync).getTime());
          if (data.components_count) setRealCount(data.components_count);
          if (data.status) setServerStatus(data.status);
        }
        
        const toolsRes = await fetch('/tools.json');
        if (toolsRes.ok) setMcpTools(await toolsRes.json());
        
        const colorsRes = await fetch('/tools/get_colors');
        if (colorsRes.ok) setPalette(await colorsRes.json());
      } catch (e) {}
    };
    fetchStatus();
    const poller = setInterval(fetchStatus, 10000);
    return () => clearInterval(poller);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
       if (lastSync) {
          const next = lastSync + (60 * 60 * 1000); // 1 hora
          const diff = next - Date.now();
          setTimeLeft(diff > 0 ? diff : 0);
       }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastSync]);

  const mins = Math.floor(timeLeft / 60000);
  const secs = Math.floor((timeLeft % 60000) / 1000);
  
  const isSyncing = serverStatus !== "Idle" && serverStatus !== "";
  const timerDisplay = lastSync ? (isSyncing ? serverStatus : `${mins}:${secs.toString().padStart(2, '0')}`) : "Lendo backend...";

  // Carrega dinamicamente todos os componentes extraídos do Figma na pasta components
  const modules = import.meta.glob('./components/*/*.tsx', { eager: true }) as Record<string, any>;
  const dynamicComponents = Object.entries(modules).map(([path, module]) => {
     const componentName = Object.keys(module).find(k => /^[A-Z]/.test(k));
     return {
        name: componentName || path.split('/').slice(-2, -1)[0],
        Component: componentName ? module[componentName] : null,
        path
     };
  }).filter(c => c.Component && typeof c.Component === 'function');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30 antialiased">

      <header className="relative z-10 border-b-2 border-slate-100 bg-white px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <span className="font-bold text-xl text-white tracking-tighter">DS</span>
              </div>
              <h1 className="text-2xl font-black text-black tracking-tight uppercase">Design <span className="text-blue-600">System</span></h1>
            </div>
            
            <nav className="hidden md:flex items-center bg-slate-50 border-2 border-slate-100 p-1">
               <button 
                onClick={() => setActiveTab('library')}
                className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'library' ? 'bg-white text-blue-600 shadow-sm border-2 border-slate-100' : 'text-slate-400 hover:text-black'}`}>
                 Biblioteca
               </button>
               <button 
                onClick={() => setActiveTab('tools')}
                className={`px-6 py-2 text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'tools' ? 'bg-white text-blue-600 shadow-sm border-2 border-slate-100' : 'text-slate-400 hover:text-black'}`}>
                 MCP Tools
               </button>
            </nav>
          </div>

          <div className="flex items-center gap-4 bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_#e2e8f0]">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 animate-pulse" />
                <span className="text-xs font-black text-black tracking-widest uppercase">Pipeline Live</span>
             </div>
             <div className="h-4 w-[2px] bg-slate-200" />
             <span className="text-xs font-bold text-slate-500 tracking-tight flex items-center gap-1">
                Próxima sync em <span className="text-blue-600 tabular-nums">{timerDisplay}</span>
             </span>
          </div>
        </div>
      </header>
      
      <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 py-16 space-y-16">
        
        {activeTab === 'library' ? (
          <>
            <section className="space-y-4">
              <h2 className="text-5xl font-black text-black uppercase tracking-tighter">Figma Live Library</h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl">
                  Sincronização em tempo real com o Design System oficial da Comolatti no Figma.
              </p>
              <div className="flex items-center gap-2 bg-slate-100 w-fit px-3 py-1 rounded-full text-xs font-bold text-slate-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
                  {realCount} VARIANTES DETECTADAS
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dynamicComponents.length > 0 ? (
                dynamicComponents.map(({ name, Component, path }) => (
                    <div key={path} className="group bg-white border-2 border-slate-100 p-8 flex flex-col items-center hover:border-blue-600 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute -right-8 -top-8 w-16 h-16 bg-slate-50 group-hover:bg-blue-50 rotate-45 transition-colors" />
                      <div className="text-[10px] font-black text-slate-300 group-hover:text-blue-300 tracking-tighter uppercase mb-6 w-full text-left">
                          Component ID: {name.split('-')[0]}
                      </div>
                      <div className="w-full flex-1 flex items-center justify-center min-h-[160px] [&_svg]:max-w-full [&_svg]:max-h-32">
                          {Component && <Component />}
                      </div>
                      <div className="mt-8 w-full">
                          <span className="text-xs font-black text-black tracking-widest uppercase block truncate mb-1">{name.replace(/-/g, ' ')}</span>
                          <div className="h-1 w-8 bg-blue-600" />
                      </div>
                    </div>
                ))
              ) : (
                <div className="col-span-full py-32 flex flex-col items-center justify-center border-4 border-dashed border-slate-100">
                    <div className="text-slate-300 text-6xl mb-4 font-black">?</div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest">Nenhum componente detectado ainda...</p>
                </div>
              )}
            </section>
          </>
        ) : (
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-5xl font-black text-black uppercase tracking-tighter">MCP Agent Capabilities</h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl">
                  Ferramentas expostas via Model Context Protocol para automação e IA.
              </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Available Tools</h3>
                {mcpTools.map(tool => (
                  <div key={tool.name} className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_#000] space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black" />
                      <span className="font-black uppercase text-sm tracking-tight">{tool.name}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">{tool.description}</p>
                    <div className="pt-2">
                      <span className="text-[10px] bg-slate-100 px-2 py-1 font-black text-slate-400 uppercase">Input: {tool.parameters.type}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Tool Output: get_colors</h3>
                <div className="bg-[#0f172a] rounded-xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                  <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">colors.json</span>
                  </div>
                  <div className="p-6 overflow-auto max-h-[600px]">
                    <pre className="text-blue-400 font-mono text-sm leading-relaxed">
                      {palette ? JSON.stringify(palette, null, 2) : "// Carregando paleta..."}
                    </pre>
                  </div>
                </div>
                
                {palette?.primitive && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 pt-8">
                    {Object.entries(palette.primitive).map(([group, values]: [string, any]) => (
                      typeof values === 'object' ? (
                        Object.entries(values).map(([shade, color]: [string, any]) => (
                          <div key={`${group}-${shade}`} className="space-y-2">
                            <div 
                              className="h-16 w-full border-2 border-slate-100 shadow-sm"
                              style={{ backgroundColor: color }}
                            />
                            <div className="text-[10px] font-black uppercase text-slate-400 truncate">
                              {group} {shade}
                            </div>
                            <div className="text-[9px] font-mono font-bold text-slate-300">{color}</div>
                          </div>
                        ))
                      ) : (
                        <div key={group} className="space-y-2">
                          <div 
                            className="h-16 w-full border-2 border-slate-100 shadow-sm"
                            style={{ backgroundColor: values }}
                          />
                          <div className="text-[10px] font-black uppercase text-slate-400 truncate">
                            {group}
                          </div>
                          <div className="text-[9px] font-mono font-bold text-slate-300">{values}</div>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="relative z-10 max-w-7xl mx-auto px-8 py-16 mt-20 border-t-2 border-slate-100 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-slate-500 text-sm font-medium">
              <p>© 2026 Grupo Comolatti. All assets synced with Figma API via Rocco Assistant.</p>
           </div>
           <div className="flex items-center gap-8 text-slate-900 font-bold text-sm">
             <span className="hover:text-blue-600 cursor-pointer transition-colors">Documentation</span>
             <span className="hover:text-blue-600 cursor-pointer transition-colors">GitHub</span>
             <span className="hover:text-blue-600 cursor-pointer transition-colors">Figma</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
