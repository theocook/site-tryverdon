import React from 'react';
import { Star, Bike, Footprints, Waves, Activity } from 'lucide-react';

const Sponsors = () => {
  // 1. CONFIGURATION DES LOGOS
  // Modifiez ici les noms et les extensions (.svg, .png, .jpg) 
  // pour qu'ils correspondent exactement à ce que vous avez dans le dossier /public
  const sponsorsData = {
    gold: { 
      src: "/sponsors/logoConcepto.svg", // ou "/sponsor-gold.png"
      alt: "Logo Sponsor Gold" 
    },
    silver: { 
      src: "/sponsors/cavin-baudat-black.svg", // ou "/sponsor-silver.svg"
      alt: "Logo Sponsor Silver" 
    },
    bronze: [
      { id: 1, src: "/sponsors/logo-kamtecSA.png", alt: "Logo Sponsor Bronze Kamec" },
      { id: 2, src: "/sponsors/la-dame-des-emotions.png", alt: "Logo Sponsor Bronze 2" },
      { id: 3, src: "/sponsors/VO_logo.svg", alt: "Logo Sponsor Bronze 3" },
      { id: 4, src: "/sponsors/j2o_logo.avif", alt: "Logo Sponsor Bronze 4" },
      { id: 5, src: "/sponsors/logo-ERAIKI.png", alt: "Logo Sponsor Bronze 5" },
    ]
  };

  // 2. CONFIGURATION DES PARTENAIRES
  const partenairesData = [
    { id: 1, src: "/partners/logo-red-y.svg", alt: "Logo Partenaire 1" },
    { id: 2, src: "/partners/logo-sj.svg", alt: "Logo Partenaire 2" },
    { id: 3, src: "/partners/logo-vo2.svg", alt: "Logo Partenaire 3" },
    { id: 4, src: "/partners/logo-ylb.svg", alt: "Logo Partenaire 4" },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-['Anton'] uppercase text-[#1a1a1a] mb-4">
          Nos <span className="text-[#26b6c1]">Sponsors</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-20 leading-relaxed">
          Le TRYverdon ne pourrait pas exister sans le soutien précieux de ses sponsors et partenaires. 
          Un immense merci à eux pour leur engagement à nos côtés.
        </p>

        <div className="flex flex-col items-center gap-16 mb-24">
          
          {/* ================= TIER GOLD (1 Sponsor) ================= */}
          <div className="w-full max-w-3xl">
            <div className="flex items-center justify-center gap-4 mb-8 opacity-80">
              <div className="h-px bg-yellow-400 flex-1"></div>
              <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm flex items-center gap-2">
                <Star size={16} fill="currentColor" /> Sponsor Gold
              </span>
              <div className="h-px bg-yellow-400 flex-1"></div>
            </div>
            
            <div className="bg-white/90 border-2 border-yellow-500/20 shadow-2xl p-12 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-500 group flex justify-center items-center h-64 cursor-pointer relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={sponsorsData.gold.src} 
                alt={sponsorsData.gold.alt}
                className="relative z-10 h-24 md:h-32 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
          </div>

          {/* ================= TIER SILVER (1 Sponsor) ================= */}
          <div className="w-full max-w-2xl">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">Sponsor Silver</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            
            <div className="bg-white/90 border border-white/10 shadow-xl p-8 hover:border-white/30 hover:-translate-y-1 transition-all duration-500 group flex justify-center items-center h-48 cursor-pointer relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={sponsorsData.silver.src} 
                alt={sponsorsData.silver.alt} 
                className="relative z-10 h-16 md:h-20 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            </div>
          </div>

          {/* ================= TIER BRONZE (5 Sponsors) ================= */}
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
              <div className="h-px bg-orange-200 flex-1"></div>
              <span className="text-orange-400 font-bold uppercase tracking-[0.3em] text-sm">Sponsors Bronze</span>
              <div className="h-px bg-orange-200 flex-1"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {sponsorsData.bronze.map((sponsor) => (
                <div key={sponsor.id} className="w-[calc(50%-8px)] sm:w-[calc(33.33%-16px)] lg:w-[calc(20%-20px)] min-w-[140px] bg-white/90 border border-white/5 shadow-lg p-4 md:p-6 hover:border-[#26b6c1]/30 hover:-translate-y-1 transition-all duration-500 group flex justify-center items-center h-28 md:h-32 cursor-pointer relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#26b6c1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img 
                    src={sponsor.src} 
                    alt={sponsor.alt} 
                    className="relative z-10 h-10 md:h-12 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= PARTENAIRES ================= */}
        <div className="pt-16 border-t border-gray-200">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-12">Nos Partenaires</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partenairesData.map((partenaire) => (
              <div key={partenaire.id} className="group relative flex justify-center items-center h-12 md:h-16 cursor-pointer hover:-translate-y-1 transition-transform duration-500">
                <img 
                  src={partenaire.src} 
                  alt={partenaire.alt} 
                  className="h-full w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sponsors;