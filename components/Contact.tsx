import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Radio } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Это демо-форма.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute bottom-0 left-0 w-[50%] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
               <div className="inline-flex items-center gap-2 mb-4 text-indigo-400 font-mono text-sm tracking-wider">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                  OPEN FOR WORK
               </div>
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Давайте <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient bg-[length:200%_auto]">
                    создадим будущее
                </span>
               </h2>
               <p className="text-slate-400 text-xl mb-12 max-w-md">
                 Готовы трансформировать бизнес? Заполните форму, и я свяжусь с вами в течение 24 часов.
               </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'alex.dev@example.com' },
                { icon: Phone, label: 'Телефон', value: '+7 (999) 000-00-00' },
                { icon: MapPin, label: 'Локация', value: 'Worldwide / Remote' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 group p-4 rounded-xl transition-colors hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50">
                  <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="font-medium text-slate-200 group-hover:text-white transition-colors text-xl">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side - Cyberpunk Dashboard Look */}
          <div className="relative">
            {/* Glow behind form */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-20 transform translate-y-4" />
            
            <div className="bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              {/* Header decoration */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-700/50 pb-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                 </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-slate-300 mb-2 ml-1">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-slate-600 text-lg"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-slate-300 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-slate-600 text-lg"
                    placeholder="ivan@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-semibold text-slate-300 mb-2 ml-1">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-slate-600 text-lg"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-indigo-400/20 mt-4 group text-lg"
                >
                  <span className="tracking-wide">Отправить заявку</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-center text-slate-600 mt-4">
                  Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;