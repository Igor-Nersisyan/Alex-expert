import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    name: "Мария Ковалева",
    role: "COO, Logistics Corp",
    content: "Алекс внедрил AI-автоматизацию для нашей службы поддержки за 5 дней. Это сократило время ответа на 60% и разгрузило сотрудников от рутины. Теперь операторы подключаются только к сложным кейсам.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Дмитрий Соколов",
    role: "Founder, TechStart",
    content: "Качество кода на высоте. Всё модульное, чистое и легко расширяемое. Наконец-то разработчик, который понимает бизнес-задачи, а не просто пишет код. Рекомендую для MVP и сложных систем.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Джон Дейл",
    role: "Realtor Agency",
    content: "Rent Pilot AI полностью изменил то, как мы управляем объектами. Функция голосового ввода — это просто магия, экономит часы работы каждый день. Мы масштабировались в 2 раза без найма новых людей.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Анна Петрова",
    role: "Marketing Director, BrandBoost",
    content: "Мы тратили недели на контент-планы. Решение, которое разработал Алекс, генерирует посты, сторис и статьи за минуты, сохраняя наш Tone of Voice. Это лучшая инвестиция года.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Майкл Чен",
    role: "CTO, FinTech Solutions",
    content: "Безопасность была нашим главным приоритетом. Алекс развернул локальные LLM модели на наших серверах, обеспечив полную конфиденциальность данных. Профессиональный подход к enterprise-задачам.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Елена Волкова",
    role: "CEO, EduSmart",
    content: "Персонализированный AI-тьютор для нашей платформы увеличил вовлеченность студентов на 40%. Алекс не просто написал код, но и помог дообучить модель на наших методичках.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Роберт Фокс",
    role: "Product Owner, HealthCare App",
    content: "Внедрение голосового ассистента для записи к врачу прошло безупречно. Система понимает контекст, сложные медицинские термины и даже акценты. Отличная работа с Audio API.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "София Ли",
    role: "Head of HR, PeopleFirst",
    content: "HR-бот теперь проводит первичные интервью и скоринг резюме. Это освободило рекрутеров от сотен часов звонков. Система работает 24/7 и никогда не устает.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
      setTimeout(checkScroll, 300);
    }
  };

  // Drag to scroll logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
    checkScroll();
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950/50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Отзывы клиентов</h2>
            <p className="text-slate-400 text-xl">
              Истории успеха тех, кто уже внедрил новые технологии.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-slate-700 bg-slate-900/50 transition-all ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed text-slate-600' : 'text-slate-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-slate-700 bg-slate-900/50 transition-all ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed text-slate-600' : 'text-slate-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
          {/* Fade Gradients for visual cues */}
          <div className={`absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 px-6 md:px-4 snap-x snap-mandatory no-scrollbar items-start cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={checkScroll}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {REVIEWS.map((review, index) => (
              <div 
                key={index} 
                className="min-w-[320px] md:min-w-[400px] max-w-[400px] snap-center glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] group flex flex-col relative overflow-hidden select-none"
              >
                {/* Subtle top gradient on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <Quote className="absolute top-6 right-8 text-slate-800 group-hover:text-indigo-500/20 transition-colors duration-500 transform group-hover:scale-110" size={64} />
                
                <div className="mb-6 flex items-center gap-4 relative z-10">
                  <div className="relative flex-shrink-0">
                     <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-indigo-500 to-slate-800 group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-500 shadow-lg">
                      <img 
                          src={review.imageUrl} 
                          alt={review.name}
                          className="w-full h-full rounded-full object-cover border-2 border-slate-950 pointer-events-none"
                      />
                     </div>
                     <div className="absolute bottom-0 right-0 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div>
                     </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold leading-tight text-xl group-hover:text-indigo-200 transition-colors">{review.name}</h4>
                    <p className="text-indigo-400/80 text-base font-medium">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed relative z-10 flex-grow group-hover:text-white transition-colors duration-300">
                  "{review.content}"
                </p>
              </div>
            ))}
            {/* Spacer for right padding */}
            <div className="min-w-[1px] h-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;