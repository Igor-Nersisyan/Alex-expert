import React from 'react';
import { Check, Star } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

const Pricing: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    
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
    <section id="pricing" className="py-24 bg-transparent relative overflow-hidden">
       {/* Decorative bg */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(99,102,241,0.15)]">
             Инвестиции
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Прозрачная <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 text-glow">Стоимость</span>
          </h2>
          <p className="text-slate-400 text-xl">
            Честные цены за результат. Без скрытых платежей.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`relative rounded-3xl p-8 transition-all duration-500 group flex flex-col ${
                tier.recommended 
                  ? 'premium-card shadow-[0_0_40px_rgba(79,70,229,0.15)] hover:shadow-[0_0_60px_rgba(79,70,229,0.3)] translate-y-[-10px]' 
                  : 'glass-card hover:-translate-y-2'
              }`}
            >
              {/* Highlight Glow for Recommended */}
              {tier.recommended && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-3xl pointer-events-none" />
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center gap-2 z-20">
                    <Star size={12} fill="white" /> Популярный
                  </div>
                </>
              )}

              <div className="mb-8 relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${tier.recommended ? 'text-indigo-300' : 'text-slate-200'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-md">{tier.price}</span>
                  {tier.id !== 'enterprise' && <span className="text-slate-500 font-medium text-lg">/ проект</span>}
                </div>
                <p className="text-slate-400 text-lg mt-4 min-h-[40px] leading-relaxed opacity-80">{tier.description}</p>
              </div>

              <div className={`h-px w-full mb-8 ${tier.recommended ? 'bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent' : 'bg-slate-700/50'}`} />

              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <div className={`mt-1 min-w-[20px] h-[20px] rounded-full flex items-center justify-center transition-colors ${
                      tier.recommended 
                        ? 'bg-indigo-500/20 text-indigo-400 group-hover/item:bg-indigo-500 group-hover/item:text-white shadow-[0_0_5px_rgba(99,102,241,0.2)]' 
                        : 'bg-slate-800 text-slate-500 group-hover/item:bg-slate-700 group-hover/item:text-slate-300'
                    }`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-300 text-base group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                onClick={handleScroll}
                className={`relative z-10 w-full block text-center py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                  tier.recommended
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-500'
                }`}
              >
                Выбрать тариф
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;