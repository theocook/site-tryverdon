import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Award, ArrowRight, Bike, Medal } from 'lucide-react';

// Import des composants standards
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import News from '../components/News';
import Sponsors from '../components/Partners'; 

// Import de nos nouveaux composants d'animation
import { 
  ScrollReveal, 
  AnimatedNumber, 
  TextReveal, 
  ParallaxElement, 
  MagneticWrapper 
} from '../components/Animations';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  // Gestion du scroll pour les effets parallaxe complexes si besoin
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero & Marquee (Visibles au chargement) */}
      <Hero />
      <Marquee />
      
      {/* 2. LE CLUB EN CHIFFRES */}
      <section className="py-32 bg-white relative font-['Space_Grotesk']">
        {/* Effet Parallaxe sur le texte de fond */}
        <div className="absolute top-0 right-10 bottom-0 flex items-center pointer-events-none select-none z-0 overflow-hidden">
          <ParallaxElement speed={0.15} className="text-[15vw] font-['Anton'] uppercase text-gray-50 leading-none">
            IMPACT
          </ParallaxElement>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-['Anton'] uppercase text-[#1a1a1a] mb-6">
                TRYverdon en <span className="text-[#26b6c1]">Chiffres</span>
              </h2>
              <div className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed flex justify-center">
                Créé en 2008, le TRYverdon réunit des passionnés de tous âges et de tous niveaux autour de la natation, du vélo et de la course à pied.
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Carte 1 */}
            <ScrollReveal delay={0} direction="up">
              <div className="group bg-white p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#26b6c1]/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#26b6c1] transition-colors duration-500"></div>
                <Calendar className="w-12 h-12 text-[#26b6c1] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                <div className="text-6xl font-['Anton'] mb-2 text-[#1a1a1a] group-hover:text-[#26b6c1] transition-colors duration-500">
                  <AnimatedNumber end={2008} duration={2000} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Année de création</div>
              </div>
            </ScrollReveal>
            
            {/* Carte 2 */}
            <ScrollReveal delay={150} direction="up">
              <div className="group bg-white p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#26b6c1]/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#26b6c1] transition-colors duration-500"></div>
                <Users className="w-12 h-12 text-[#26b6c1] mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
                <div className="text-6xl font-['Anton'] mb-2 text-[#1a1a1a] group-hover:text-[#26b6c1] transition-colors duration-500">
                  <AnimatedNumber end={100} prefix="+" duration={2000} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Membres Actifs</div>
              </div>
            </ScrollReveal>
            
            {/* Carte 3 */}
            <ScrollReveal delay={300} direction="up">
              <div className="group bg-white p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[#26b6c1]/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden h-full rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#26b6c1] transition-colors duration-500"></div>
                <Award className="w-12 h-12 text-[#26b6c1] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                <div className="text-6xl font-['Anton'] mb-2 text-[#1a1a1a] group-hover:text-[#26b6c1] transition-colors duration-500">
                  <AnimatedNumber end={5} duration={1500} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400">Valeurs Fondamentales</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. NOS SECTIONS */}
      <section className="py-24 bg-gray-50 font-['Space_Grotesk'] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/3">
              <ScrollReveal direction="left">
                <h3 className="text-5xl font-['Anton'] uppercase mb-6 text-[#1a1a1a]">Choisir sa <span className="text-[#26b6c1]">Voie</span></h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Des entraînements adaptés pour les Adultes (Loisir & Compétition) et pour la Jeunesse (École de Triathlon dès 9 ans). Trouvez la structure qui vous correspond.
                </p>
                
                {/* Bouton Magnétique au survol */}
                <MagneticWrapper strength={15}>
                  <Link to="/sections" className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#26b6c1] transition-colors w-max group shadow-lg">
                    Tous les plannings <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticWrapper>
              </ScrollReveal>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <ScrollReveal delay={0} direction="right">
                <Link to="/sections" className="group relative h-[400px] overflow-hidden bg-black flex items-end block rounded-xl">
                  <div className="absolute inset-0 bg-cover bg-center grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-60 group-hover:opacity-80"
                       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="relative z-10 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-4xl font-['Anton'] uppercase text-white mb-2">Section Adultes</h4>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Dès 16 ans. Du loisir à la compétition.</p>
                    <span className="text-[#26b6c1] font-bold text-xs uppercase tracking-widest flex items-center gap-2">Découvrir <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={200} direction="right">
                <Link to="/sections" className="group relative h-[400px] overflow-hidden bg-black flex items-end block rounded-xl">
                  <div className="absolute inset-0 bg-cover bg-center grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-60 group-hover:opacity-80"
                       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=1974&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="relative z-10 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-4xl font-['Anton'] uppercase text-white mb-2">Section Jeunesse</h4>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Dès 6 ans. École de Tri et Compétition.</p>
                    <span className="text-[#26b6c1] font-bold text-xs uppercase tracking-widest flex items-center gap-2">Découvrir <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOS ACTIVITÉS */}
      <section className="py-32 bg-[#1a1a1a] text-white relative overflow-hidden font-['Space_Grotesk']">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <ParallaxElement speed={-0.2} className="text-[15vw] font-['Anton'] uppercase text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}>
            ACTION
          </ParallaxElement>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal direction="scale">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-['Anton'] uppercase mb-6">Nos <span className="text-[#26b6c1]">Activités</span></h2>
              <p className="text-gray-400 max-w-xl mx-auto">Le club ne s'arrête pas aux entraînements. Nous faisons vivre le triathlon au quotidien.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal delay={0} direction="up">
              <div className="bg-white/5 border border-white/10 p-10 md:p-12 group hover:bg-white/10 hover:border-[#26b6c1]/50 transition-all duration-500 h-full rounded-2xl">
                <div className="w-16 h-16 bg-[#26b6c1]/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#26b6c1] transition-colors duration-500">
                  <Medal size={32} className="text-[#26b6c1] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-['Anton'] uppercase mb-4 text-white">Régio League</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Le TRYverdon est un acteur majeur de la région. Nous participons et organisons des étapes de la Régio League, une série de triathlons dédiés aux jeunes de la région romande pour encourager la relève.
                </p>
                <span className="text-[#26b6c1] font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">Compétition Jeunesse</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} direction="up">
              <div className="bg-white/5 border border-white/10 p-10 md:p-12 group hover:bg-white/10 hover:border-[#26b6c1]/50 transition-all duration-500 md:mt-12 h-full rounded-2xl">
                <div className="w-16 h-16 bg-[#26b6c1]/20 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#26b6c1] transition-colors duration-500">
                  <Bike size={32} className="text-[#26b6c1] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-['Anton'] uppercase mb-4 text-white">TRY & Friends Group Ride</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Le triathlon, c'est aussi du plaisir partagé ! Des sorties vélo conviviales sont organisées le dimanche de manière informelle par message entre les membres. L'occasion idéale de rouler en peloton et d'échanger.
                </p>
                <span className="text-[#26b6c1] font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">Sortie Conviviale</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Actualités (Animé au scroll) */}
      <ScrollReveal direction="up" delay={100}>
        <News />
      </ScrollReveal>
      
      {/* 6. Sponsors (Animé au scroll) */}
      <ScrollReveal direction="up" delay={200}>
        <Sponsors />
      </ScrollReveal>
    </div>
  );
};

export default Home;