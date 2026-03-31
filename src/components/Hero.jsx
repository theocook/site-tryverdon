import React from 'react';
import { Calendar, Timer, CheckCircle } from 'lucide-react';

const HeroPanel = ({ image, icon: Icon, badgeText, title, hoverTitle, hoverSubtitle, link }) => (
  <div 
    className="group relative flex-1 hover:flex-[2] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-r border-white/10 h-[33vh] md:h-auto overflow-hidden cursor-pointer"
    onClick={() => window.location.href = link}
  >
    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
         style={{ backgroundImage: `url('${image}')` }}></div>
    {/* MODIFICATION ICI : Overlay noir doux au survol pour garder la lisibilité du menu */}
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500"></div>
    
    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
      <div className="bg-white text-black text-xs font-bold px-2 py-1 uppercase inline-flex items-center gap-2 w-max mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 font-['Space_Grotesk']">
        <Icon size={12} /> {badgeText}
      </div>
      
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-['Anton'] text-white uppercase leading-none transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
        {title}
      </h2>
      
      <div className="text-white mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block font-['Space_Grotesk']">
        <p className="font-bold text-lg border-l-2 border-white pl-3 mb-2">{hoverTitle}</p>
        <p className="text-sm">{hoverSubtitle}</p>
        <span className="text-xs font-bold uppercase tracking-widest mt-4 inline-block underline">En savoir plus</span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <header id="home" className="h-screen w-full flex flex-col md:flex-row overflow-hidden relative bg-black z-10">
      <HeroPanel 
        image="https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=1974&auto=format&fit=crop"
        icon={Calendar}
        badgeText="Prochain événement"
        title="Agenda"
        hoverTitle="Triathlon de Paris"
        hoverSubtitle="Dimanche 24 Juin • 08h00"
        link="#news"
      />
      <HeroPanel 
        image="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
        icon={Timer}
        badgeText="Cette semaine"
        title="Planning"
        hoverTitle="Aujourd'hui : Natation"
        hoverSubtitle="19h00 - 20h30 • Piscine Olympique"
        link="/sections"
      />
      <HeroPanel 
        image="https://images.unsplash.com/photo-1552674605-4694c0427b3d?q=80&w=1974&auto=format&fit=crop"
        icon={CheckCircle}
        badgeText="Saison 2024"
        title="Adhésion"
        hoverTitle="Rejoignez la Tribu"
        hoverSubtitle="Licences ouvertes. Places limitées."
        link="/join"
      />
    </header>
  );
};

export default Hero;