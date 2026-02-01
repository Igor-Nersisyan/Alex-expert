import React from 'react';
import { 
  MessageSquareDot, 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  Code2, 
  Rocket, 
  Handshake, 
  CheckCircle2
} from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

// Mapping icons to steps
const STEP_ICONS = [
  MessageSquareDot,
  FileText,
  ShieldCheck,
  CreditCard,
  Code2,
  Rocket,
  Handshake
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-indigo-300 text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.1)]">
             Workflow
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            Путь к вашему <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Продукту</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Прозрачный процесс разработки: от первой идеи до финального запуска.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* SVG Definitions for Gradients */}
          <svg className="absolute w-0 h-0">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Steps Container */}
          <div className="relative flex flex-col">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index] || CheckCircle2;
              const isLast = index === PROCESS_STEPS.length - 1;
              const isEven = index % 2 === 0; // 0, 2, 4 (Content Left, Node Right)
              
              // Coordinates for Bezier Curve (Percentages based on column width)
              // Node Center positions approx: Left ~21%, Right ~79%
              const curvePath = isEven 
                ? "M 79 0 C 79 50 21 50 21 100"  // Right to Left
                : "M 21 0 C 21 50 79 50 79 100"; // Left to Right

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group mb-12 md:mb-0`}
                >
                  {/* --- CARD CONTENT SIDE --- */}
                  <div className="w-full md:w-[calc(50%-3rem)] mb-8 md:mb-24 relative z-10">
                    <div 
                      className={`relative p-8 rounded-2xl glass-card border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-800/60 overflow-hidden group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] ${isEven ? 'md:text-right' : 'md:text-left'}`}
                    >
                      {/* Hover Glow */}
                      <div className={`absolute top-0 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none transition-all duration-700 opacity-0 group-hover:opacity-100 ${isEven ? 'right-0' : 'left-0'}`} />

                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                         <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-indigo-400 shadow-lg group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                           <Icon size={24} />
                         </div>
                         <h3 className="text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                           {step.title}
                         </h3>
                      </div>

                      <p className="text-slate-400 text-lg leading-relaxed relative z-10">
                        {step.description}
                      </p>
                      
                      {/* Step Number Background */}
                      <div className={`absolute -bottom-4 text-8xl font-black text-slate-800/30 select-none pointer-events-none transition-colors group-hover:text-indigo-900/20 ${isEven ? 'left-4' : 'right-4'}`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* --- CENTRAL ZIGZAG COLUMN (Desktop Only) --- */}
                  <div className="hidden md:flex w-24 relative justify-center flex-shrink-0">
                      {/* The Node */}
                      <div className={`absolute top-0 w-6 h-6 rounded-full bg-slate-900 border-4 border-indigo-500 z-20 shadow-[0_0_15px_#6366f1] transition-transform duration-500 group-hover:scale-150 ${isEven ? 'right-2' : 'left-2'}`}>
                         <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                      </div>

                      {/* The Zigzag Connector (Smooth Curve) */}
                      {!isLast && (
                        <div className="absolute top-[12px] w-full h-full pointer-events-none z-0">
                           <svg 
                              className="w-full h-full overflow-visible" 
                              viewBox="0 0 100 100" 
                              preserveAspectRatio="none"
                           >
                             {/* Base Path */}
                             <path 
                               d={curvePath}
                               fill="none" 
                               stroke="url(#lineGradient)" 
                               strokeWidth="3"
                               vectorEffect="non-scaling-stroke"
                               className="opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                               filter="url(#glow)"
                             />
                             {/* Animated Pulse Path Overlay */}
                             <path 
                               d={curvePath}
                               fill="none" 
                               stroke="white" 
                               strokeWidth="2"
                               vectorEffect="non-scaling-stroke"
                               strokeDasharray="4 8"
                               className="opacity-0 group-hover:opacity-40 animate-pulse"
                             />
                           </svg>
                        </div>
                      )}
                  </div>

                  {/* --- MOBILE LINE (Mobile Only) --- */}
                  <div className="md:hidden absolute left-4 top-12 bottom-0 w-0.5 bg-slate-800">
                    {!isLast && <div className="absolute top-0 w-full h-full bg-gradient-to-b from-indigo-500 to-transparent opacity-50" />}
                  </div>
                  <div className="md:hidden absolute left-[10px] top-0 w-4 h-4 rounded-full bg-indigo-600 shadow-[0_0_10px_#6366f1]" />

                  {/* --- EMPTY SIDE FOR BALANCE --- */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                  
                </div>
              );
            })}
            
            {/* Final Dot Anchor */}
             <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700/50" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;