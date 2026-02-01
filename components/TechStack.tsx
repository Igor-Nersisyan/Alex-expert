import React from 'react';
import { 
  Cpu, 
  Database, 
  Layers, 
  Code, 
  Zap, 
  Bot, 
  Terminal, 
  Sparkles, 
  Layout, 
  MousePointer2,
  Brain
} from 'lucide-react';

const TECH_ITEMS = [
  { name: 'Replit', icon: Terminal },
  { name: 'Google AI Studio', icon: Cpu },
  { name: 'Cursor', icon: MousePointer2 },
  { name: 'n8n', icon: Zap },
  { name: 'Weweb', icon: Layout },
  { name: 'Python', icon: Code },
  { name: 'RAG', icon: Layers },
  { name: 'OpenAI', icon: Bot },
  { name: 'Claude', icon: Brain },
  { name: 'Gemini', icon: Sparkles },
  { name: 'Supabase', icon: Database },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-10 bg-slate-900 border-y border-slate-800 overflow-hidden relative">
      {/* Gradient masks for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* 
        Seamless Loop Logic:
        We create two identical lists side-by-side. 
        Each list has 'animate-scroll' which moves it -100% to the left.
        The 'pr-16' (padding-right) acts as the gap between the end of list 1 and start of list 2.
        When list 1 moves completely out of view, list 2 takes its place exactly, 
        and the animation resets instantly to 0 without the user noticing.
      */}
      <div className="flex w-full select-none">
        <div className="flex shrink-0 animate-scroll items-center gap-16 pr-16">
          {TECH_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-400 group cursor-default">
              <item.icon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
              <span className="text-lg font-semibold whitespace-nowrap group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate List */}
        <div className="flex shrink-0 animate-scroll items-center gap-16 pr-16" aria-hidden="true">
          {TECH_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-400 group cursor-default">
              <item.icon className="w-6 h-6 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
              <span className="text-lg font-semibold whitespace-nowrap group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;