import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#030712] text-slate-200 selection:bg-cyan-500/30 flex flex-col font-sans">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header / Logo */}
      <nav className="relative w-full max-w-7xl mx-auto px-8 h-20 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center text-slate-950 font-black text-sm">
            FP
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">fpalacios<span className="text-cyan-400">.dev</span></span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="p-2 hover:text-cyan-400 transition-colors"><FiGithub size={20} /></a>
          <a href="#" className="p-2 hover:text-cyan-400 transition-colors"><FiLinkedin size={20} /></a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-8 z-10">
        <div className="max-w-4xl w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-slate-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-2 rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            OPERATIONAL_STATUS: ACTIVE_2026
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Consultant</span> & Fullstack Developer
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Consultoría técnica y desarrollo de aplicaciones web de alto impacto.
            Especializado en crear soluciones Fullstack modernas, escalables y orientadas a resultados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-white text-slate-950 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 transition-all active:scale-95">
              Ver Proyectos <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">
              Hablemos
            </button>
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="relative w-full py-8 border-t border-white/5 text-center z-10">
        <p className="text-xs font-mono text-slate-500 tracking-widest uppercase">
          © 2025 fpalacios.dev // Built with React 19 + Tailwind v4
        </p>
      </footer>
    </div>
  );
}

export default App;