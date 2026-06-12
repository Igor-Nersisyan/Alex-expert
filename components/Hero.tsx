import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_INFO } from '../constants';
import ImageViewer from './ImageViewer';

const BENEFITS = [
  "Архитектура, готовая к масштабированию",
  "LLM-интеграции под реальные бизнес-задачи",
  "Чистый код + понятная логика",
  "Минимум зависимостей, максимум контроля",
  "Передача проекта без vendor lock-in"
];

const Hero: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <ImageViewer 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
        src={DEVELOPER_INFO.avatarUrl} 
        alt={DEVELOPER_INFO.name} 
      />

      {/* Enhanced Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      
      {/* Central glow for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] bg-indigo-900/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
            </span>
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Доступен для проектов</span>
          </div>

          <div>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white mb-6 drop-shadow-2xl">
              {DEVELOPER_INFO.name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-purple-400 drop-shadow-sm">
                Dev & AI Expert
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-500/50"></span>
              Разработчик нового поколения
            </h2>
          </div>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl border-l-2 border-indigo-500/50 pl-6 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-r-lg py-2">
            {DEVELOPER_INFO.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_auto] animate-gradient" />
              <span className="relative z-10 flex items-center gap-2">
                Обсудить проект <ArrowRight size={22} />
              </span>
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => handleScroll(e, '#portfolio')}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-slate-900/50 border border-slate-700/50 hover:border-slate-500 text-white rounded-full font-semibold text-lg transition-all hover:bg-slate-800 backdrop-blur-sm cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              Смотреть работы
            </a>
          </div>

          {/* Key Benefits Bullets */}
          <div className="pt-6 space-y-3">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-400 group">
                <CheckCircle2 size={20} className="text-indigo-500 group-hover:text-indigo-400 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.3)] rounded-full" />
                <span className="text-base md:text-lg font-medium group-hover:text-slate-200 transition-colors">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="relative group cursor-pointer perspective-1000" onClick={() => setIsViewerOpen(true)}>
           {/* Decorative frames & Glows */}
          <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500" />
          <div className="absolute -inset-4 bg-indigo-600/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />
          
          <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/50">
            <img 
              src={DEVELOPER_INFO.avatarUrl} 
              alt={DEVELOPER_INFO.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/60 backdrop-blur-xl rounded-xl border border-white/10 flex items-center gap-4 shadow-lg group-hover:border-indigo-500/30 transition-colors">
               <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                 <Sparkles size={24} />
               </div>
               <div>
                 <p className="text-xs text-indigo-200 uppercase tracking-wider font-semibold">Стек технологий</p>
                 <p className="text-base font-bold text-white tracking-wide">React • LLM • Automation</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;