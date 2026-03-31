import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Club', path: '/club' },
    { name: 'Sections', path: '/sections' },
    { name: 'Actualités', path: '/news' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className={`
            flex items-center gap-4 md:gap-8 px-6 py-3 rounded-full transition-all duration-500
            ${scrolled 
              ? 'bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 text-[#1a1a1a]' 
              : 'bg-transparent text-white'}
          `}>
            
            {/* Logo SVG */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo_try.svg" 
                alt="Logo TRYverdon" 
                className={`h-10 w-auto transition-all duration-300 transform group-hover:scale-110 ${scrolled ? '' : 'brightness-0 invert'}`} 
              />
            </Link>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider font-['Space_Grotesk']">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`relative py-1 group overflow-hidden ${isActive ? 'text-[#26b6c1]' : scrolled ? 'hover:text-[#26b6c1]' : 'text-white hover:text-[#26b6c1]'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#26b6c1] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <Link 
              to="/join" 
              className={`
                hidden md:flex px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 items-center gap-2 font-['Space_Grotesk']
                ${scrolled 
                  ? 'bg-[#1a1a1a] text-white hover:bg-[#26b6c1]' 
                  : 'bg-white text-[#1a1a1a] hover:bg-[#26b6c1] hover:text-white'}
              `}
            >
              Nous Rejoindre <ArrowRight size={16} className="-rotate-45" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden ${scrolled ? 'text-black' : 'text-white'}`} 
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu - Scrollable */}
      <div className={`fixed inset-0 bg-[#1a1a1a] z-[60] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="min-h-full flex flex-col p-6">
          
          {/* Header du menu mobile */}
          <div className="flex justify-between items-center flex-shrink-0">
            <img src="/logo_try.svg" alt="Logo TRYverdon" className="h-10 w-auto brightness-0 invert" />
            <button 
              className="text-white hover:text-[#26b6c1] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={40} />
            </button>
          </div>

          {/* Liens du menu mobile */}
          <div className="flex-grow flex flex-col justify-center items-center gap-6 md:gap-8 py-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-4xl sm:text-5xl font-['Anton'] uppercase transition-colors ${isActive ? 'text-[#26b6c1]' : 'text-white hover:text-[#26b6c1]'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/join" 
              className="mt-4 bg-[#26b6c1] text-white px-8 py-4 rounded-full font-['Space_Grotesk'] font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#1a1a1a] transition-colors flex items-center justify-center gap-2"
            >
              Nous Rejoindre <ArrowRight size={20} className="-rotate-45" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;