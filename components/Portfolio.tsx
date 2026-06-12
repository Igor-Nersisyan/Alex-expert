import React, { useState, useEffect } from 'react';
import { ExternalLink, Maximize2, ArrowLeft, ArrowRight, Construction, Tag } from 'lucide-react';
import { PROJECTS } from '../constants';
import ImageViewer from './ImageViewer';

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentProject = PROJECTS[currentIndex];

  return (
    <section id="portfolio" className="py-24 bg-transparent overflow-hidden relative">
      <ImageViewer 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        src={selectedImage || ''} 
        alt="Project screenshot" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Избранные проекты</h2>
            <p className="text-slate-400 text-xl max-w-2xl">
              Реальные кейсы внедрения AI и автоматизации в бизнес-процессы.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all focus:outline-none backdrop-blur-md"
              aria-label="Previous project"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all focus:outline-none"
              aria-label="Next project"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative group">
           {/* Massive Glow Effect behind card */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-indigo-600/10 blur-[80px] rounded-[3rem] transition-all duration-700 pointer-events-none" />

           <div 
             key={currentIndex}
             className="premium-card overflow-hidden shadow-2xl animate-fade-in"
           >
             <div className="grid lg:grid-cols-5 gap-0">
               
               {/* Image Section (3/5 width on desktop) */}
               <div className="lg:col-span-3 relative aspect-video lg:aspect-auto overflow-hidden bg-slate-900 cursor-pointer min-h-[300px] lg:min-h-[500px]" onClick={() => setSelectedImage(currentProject.imageUrl)}>
                 {/* Blurred Background to fill space */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center blur-xl opacity-40 scale-110"
                   style={{ backgroundImage: `url(${currentProject.imageUrl})` }}
                 />

                 <img 
                   src={currentProject.imageUrl} 
                   alt={currentProject.title} 
                   className="relative z-10 w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                 />
                 
                 {/* Internal Gradient Overlay for Text Visibility */}
                 <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                 
                 {/* View Icon Overlay */}
                 <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-slate-900/60 p-5 rounded-full backdrop-blur-md text-white border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      <Maximize2 size={32} />
                    </div>
                 </div>
               </div>

               {/* Info Section (2/5 width on desktop) */}
               <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5 bg-gradient-to-b from-slate-900/40 to-slate-900/80 relative">
                 
                 {/* Header Row: Tags + Price (Flexbox Layout) */}
                 <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                   <div className="flex flex-wrap gap-2">
                     {currentProject.tags.map((tag) => (
                       <span key={tag} className="text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                         {tag}
                       </span>
                     ))}
                   </div>

                   {/* Price Badge - Now in flow */}
                   <div className="flex-shrink-0 self-start">
                     <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-md rounded-lg border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] whitespace-nowrap">
                       <Tag size={16} className="text-indigo-400" />
                       <span className="text-lg font-bold text-white tracking-wide">{currentProject.price}</span>
                     </div>
                   </div>
                 </div>
                 
                 <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                   {currentProject.title}
                 </h3>
                 
                 <p className="text-slate-400 text-xl leading-relaxed mb-10">
                   {currentProject.description}
                 </p>

                 <div className="mt-auto">
                    {currentProject.link ? (
                      <a 
                       href={currentProject.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-indigo-50 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                     >
                       <span>Смотреть кейс</span>
                       <ExternalLink size={20} />
                     </a>
                    ) : (
                      <button 
                        disabled
                        className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/50 text-slate-500 rounded-xl font-medium border border-slate-700 cursor-not-allowed"
                      >
                        <Construction size={20} />
                        <span>В разработке</span>
                      </button>
                    )}
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-8">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-indigo-500 shadow-[0_0_10px_#6366f1]' 
                  : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;