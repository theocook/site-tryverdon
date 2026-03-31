import React from 'react';

const Sections = () => {
  return (
    <section id="sections" className="py-12 bg-white font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-5xl md:text-6xl font-['Anton'] uppercase text-[#1a1a1a]">
          Choisissez votre <span className="text-transparent font-bold" style={{ WebkitTextStroke: '1px #26b6c1' }}>Section</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Adults */}
        <div className="group relative overflow-hidden bg-[#1a1a1a] border-r border-white/10">
          <div className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 scale-105 group-hover:scale-100"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599553765106-9382216eb254?q=80&w=2070&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-12 w-full">
            <h3 className="text-6xl font-['Anton'] uppercase text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Adultes</h3>
            <p className="text-gray-300 mb-8 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Du débutant à l'Ironman. Entraînements structurés, sorties groupées et esprit d'équipe.
            </p>
            <button className="bg-[#26b6c1] text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Découvrir
            </button>
          </div>
        </div>

        {/* Youth */}
        <div className="group relative overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 scale-105 group-hover:scale-100"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:from-white/90 md:via-white/20 md:to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-12 w-full text-white md:text-black">
            <h3 className="text-6xl font-['Anton'] uppercase mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Jeunes</h3>
            <p className="mb-8 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
              École de Triathlon (6-16 ans). Apprentissage ludique, technique et développement physique.
            </p>
            <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#26b6c1] transition-colors">
              Découvrir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;