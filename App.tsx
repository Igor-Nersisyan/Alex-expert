import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <div className="min-h-screen text-slate-50 selection:bg-indigo-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Portfolio />
        <Process />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}

export default App;