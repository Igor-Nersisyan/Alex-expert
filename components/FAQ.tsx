import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Частые вопросы</h2>
          <p className="text-slate-400 text-xl">
            Всё, что вы хотели узнать перед стартом работы.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-slate-900 border rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/10' : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-xl font-medium transition-colors ${
                  openIndex === index ? 'text-white' : 'text-slate-300'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${
                  openIndex === index ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'
                }`}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden min-h-0">
                  <div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;