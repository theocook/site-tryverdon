import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Activity, Facebook, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-8 relative overflow-hidden font-['Space_Grotesk'] border-t border-white/10">
      
      {/* Filigrane géant en arrière-plan */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-5 pointer-events-none select-none flex justify-center">
        <h1 className="text-[15vw] font-['Anton'] uppercase text-white whitespace-nowrap">
          TRYVERDON
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Logo & À propos */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src="/logo.svg" 
                alt="Logo TRYverdon complet" 
                className="h-16 w-auto mb-6 transition-transform hover:scale-105 brightness-0 invert" 
                // Note : si votre logo est foncé et ne se voit pas sur fond noir, ajoutez la classe "brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 font-medium text-sm mb-8 max-w-md leading-relaxed">
              Le club de triathlon d'Yverdon-les-Bains. Notre philosophie repose sur la découverte, le partage, la performance adaptée, le respect et l'amitié.
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/tryverdon?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#26b6c1] hover:border-[#26b6c1] hover:text-white transition-all duration-300 group">
                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.strava.com/clubs/tryverdon-24416" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#26b6c1] hover:border-[#26b6c1] hover:text-white transition-all duration-300 group">
                <Activity size={20} className="text-gray-400 group-hover:text-white transition-colors" /> {/* Strava */}
              </a>
              <a href="https://www.facebook.com/tryverdon" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#26b6c1] hover:border-[#26b6c1] hover:text-white transition-all duration-300 group">
                <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* 2. Navigation Rapide */}
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-[#26b6c1]">Navigation</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
              <li>
                <Link to="/" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowRight size={14} className="text-[#26b6c1] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/club" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowRight size={14} className="text-[#26b6c1] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Le Club
                </Link>
              </li>
              <li>
                <Link to="/sections" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowRight size={14} className="text-[#26b6c1] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Sections
                </Link>
              </li>
              <li>
                <Link to="/news" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ArrowRight size={14} className="text-[#26b6c1] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact & Infos */}
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-[#26b6c1]">Contact</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li>
                <a href="mailto:president@tryverdon.ch" className="flex items-center gap-3 hover:text-[#26b6c1] transition-colors">
                  <Mail size={16} className="text-white/50" /> president@tryverdon.ch
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-white/50 mt-1 flex-shrink-0" /> 
                  <span>
                    TRYverdon<br/>
                    1400 Yverdon-les-Bains<br/>
                    Suisse
                  </span>
                </div>
              </li>
            </ul>
            
            <Link to="/join" className="inline-block mt-8 border-b-2 border-[#26b6c1] pb-1 text-sm font-bold uppercase tracking-widest hover:text-[#26b6c1] transition-colors">
              Nous Rejoindre
            </Link>
          </div>
        </div>
        
        {/* Bas de page (Légal) */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500 gap-4">
          <p>&copy; {currentYear} TRYverdon. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;