import React, { useState } from 'react';
import { Clock, MapPin, Waves, Footprints, Bike, CheckCircle, User, ArrowRight, AlertCircle } from 'lucide-react';

const SectionsPage = () => {
  const [activeTab, setActiveTab] = useState('adultes');

  // Données des plannings
  const scheduleAdults = [
    { day: "Lundi", time: "20h00 - 21h15", sport: "Natation", location: "Piscine Yverdon", icon: Waves },
    { day: "Mardi", time: "18h30 - 19h30", sport: "Course à pied", location: "Stade USY", icon: Footprints },
    { day: "Mercredi", time: "19h15 - 21h00", sport: "Renforcement + Natation", location: "Piscine Yverdon", icon: Waves },
    { day: "Jeudi", time: "20h00 - 21h00", sport: "Condition physique", location: "CPNV", icon: CheckCircle },
    { day: "Samedi", time: "08h00 - 10h00", sport: "Natation + Course", location: "Piscine / Extérieur", icon: Footprints },
  ];

  const scheduleJeunesComp = [
    { day: "Lundi", time: "17h00 - 19h00", sport: "Natation + Course", location: "Piscine / Stade", icon: Waves },
    { day: "Mercredi", time: "15h45 - 18h00", sport: "Renforcement + Natation", location: "Piscine", icon: CheckCircle },
    { day: "Vendredi", time: "17h00 - 19h15", sport: "Natation + Course", location: "Piscine / Stade", icon: Footprints },
    { day: "Samedi", time: "14h30 - 16h30", sport: "Enchaînements (Été)", location: "Extérieur", icon: Bike },
  ];

  const scheduleJeunesEcole = [
    { day: "Mercredi", time: "17h00 - 18h00", sport: "Natation", location: "Piscine Yverdon", icon: Waves },
    { day: "Jeudi", time: "18h00 - 18h45", sport: "Course à pied (Hiver)", location: "Stade USY", icon: Footprints },
    { day: "Jeudi", time: "17h30 - 19h00", sport: "VTT (Été)", location: "Stade USY", icon: Bike },
  ];

  // Composant réutilisable pour les cartes de planning
  const ScheduleCard = ({ item }) => (
    <div className="bg-white border border-gray-100 p-6 hover:border-[#26b6c1] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-[#26b6c1]/10 transition-colors"></div>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-2xl font-['Anton'] uppercase text-[#1a1a1a]">{item.day}</h4>
        <item.icon className="text-gray-300 group-hover:text-[#26b6c1] transition-colors" size={24} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[#26b6c1] font-bold text-sm uppercase tracking-wider">
          <Clock size={16} /> {item.time}
        </div>
        <div className="font-medium text-gray-800">{item.sport}</div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin size={14} /> {item.location}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-['Space_Grotesk'] pb-24">
      
      {/* 1. HERO & SÉLECTEUR MASSIF */}
      <section className="bg-[#1a1a1a] pt-40 pb-20 px-4 rounded-b-[3rem]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-['Anton'] uppercase text-white mb-6">
            Votre <span className="text-[#26b6c1]">Programme</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16">
            Des entraînements structurés et encadrés pour tous les âges et tous les niveaux. Choisissez votre section pour découvrir le planning.
          </p>

          {/* Toggle Switch UI */}
          <div className="inline-flex bg-white/10 p-2 rounded-full backdrop-blur-md relative z-10 mx-auto border border-white/20">
            <button 
              onClick={() => setActiveTab('adultes')}
              className={`relative z-10 px-8 md:px-12 py-4 rounded-full font-['Anton'] text-xl uppercase tracking-wider transition-all duration-300 ${activeTab === 'adultes' ? 'text-black' : 'text-white hover:text-[#26b6c1]'}`}
            >
              Section Adultes
            </button>
            <button 
              onClick={() => setActiveTab('jeunes')}
              className={`relative z-10 px-8 md:px-12 py-4 rounded-full font-['Anton'] text-xl uppercase tracking-wider transition-all duration-300 ${activeTab === 'jeunes' ? 'text-black' : 'text-white hover:text-[#26b6c1]'}`}
            >
              Section Jeunesse
            </button>
            {/* Pilule d'arrière-plan animée */}
            <div 
              className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-[#26b6c1] rounded-full transition-transform duration-500 ease-out z-0 ${activeTab === 'adultes' ? 'translate-x-0' : 'translate-x-full'}`}
            ></div>
          </div>
        </div>
      </section>

      {/* 2. CONTENU DYNAMIQUE DES SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* === VUE ADULTES === */}
        {activeTab === 'adultes' && (
          <div className="animate-fade-in-up space-y-16">
            
            {/* Coach Card */}
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl flex flex-col md:flex-row items-center gap-8 border-t-4 border-[#26b6c1]">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={40} className="text-[#26b6c1]" />
              </div>
              <div>
                <div className="inline-block bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3 rounded-full">Entraîneur Principal</div>
                <h2 className="text-4xl font-['Anton'] uppercase text-[#1a1a1a] mb-2">Jeff Cook</h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  Les entraînements adultes sont rythmés par un programme commun envoyé par e-mail chaque semaine. De la préparation hivernale aux compétitions estivales, chaque séance a un objectif précis.
                </p>
              </div>
            </div>

            {/* Planning Grid */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-['Anton'] uppercase text-[#1a1a1a]">Planning Hivernal</h3>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduleAdults.map((item, idx) => <ScheduleCard key={idx} item={item} />)}
              </div>
            </div>
          </div>
        )}

        {/* === VUE JEUNESSE === */}
        {activeTab === 'jeunes' && (
          <div className="animate-fade-in-up space-y-16">
            
            {/* Intro Jeunesse */}
            <div className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl border-t-4 border-[#1a1a1a]">
              <h2 className="text-4xl font-['Anton'] uppercase text-[#1a1a1a] mb-6">La Relève du TRYverdon</h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mb-8">
                La section jeunesse est divisée en deux groupes pour s'adapter au développement de chaque jeune : l'École de Triathlon pour l'apprentissage ludique dès 9 ans, et le groupe Compétition pour se perfectionner.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full font-bold text-sm"><User size={16} className="text-[#26b6c1]"/> Gilles Vaucher (Compétition)</div>
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full font-bold text-sm"><User size={16} className="text-[#26b6c1]"/> Theo (École de Tri)</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Colonne Compétition */}
              <div>
                <h3 className="text-3xl font-['Anton'] uppercase text-[#1a1a1a] mb-2">Groupe Compétition</h3>
                <p className="text-[#26b6c1] font-bold text-sm uppercase tracking-widest mb-6">Avec Gilles</p>
                <div className="space-y-4">
                  {scheduleJeunesComp.map((item, idx) => <ScheduleCard key={idx} item={item} />)}
                </div>
              </div>

              {/* Colonne École */}
              <div>
                <h3 className="text-3xl font-['Anton'] uppercase text-[#1a1a1a] mb-2">École de Triathlon</h3>
                <p className="text-[#26b6c1] font-bold text-sm uppercase tracking-widest mb-6">Avec Theo (Dès 9 ans)</p>
                <div className="space-y-4">
                  {scheduleJeunesEcole.map((item, idx) => <ScheduleCard key={idx} item={item} />)}
                </div>
                
                <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl flex gap-4 items-start">
                  <AlertCircle className="text-blue-500 flex-shrink-0" />
                  <p className="text-sm text-blue-800 font-medium">Les horaires d'été du Jeudi remplacent la course à pied par le VTT pour profiter des beaux jours !</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. CHECK-LIST MATÉRIEL (COMMUNE) */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
            <CheckCircle size={400} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-['Anton'] uppercase mb-4">Le Starter Pack</h2>
            <p className="text-gray-400 mb-12 max-w-xl">L'équipement obligatoire pour participer aux entraînements en toute sécurité, quelle que soit la section.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <Waves className="text-[#26b6c1] mb-4" size={32} />
                <h3 className="font-['Anton'] text-xl uppercase mb-3">Natation (Piscine)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Lunettes de natation</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Bonnet TRYverdon</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Maillot de bain serré</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <Footprints className="text-[#26b6c1] mb-4" size={32} />
                <h3 className="font-['Anton'] text-xl uppercase mb-3">Course à pied</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Bonnes chaussures</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Habits adaptés météo</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Hiver : Gants & Bonnet</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <Bike className="text-[#26b6c1] mb-4" size={32} />
                <h3 className="font-['Anton'] text-xl uppercase mb-3">Vélo (Route/VTT)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Vélo en bon état</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Casque (Obligatoire)</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-[#26b6c1]" /> Lunettes de soleil</li>
                </ul>
              </div>

              <div className="bg-[#26b6c1]/10 border border-[#26b6c1]/30 p-6 hover:bg-[#26b6c1]/20 transition-colors">
                <AlertCircle className="text-[#26b6c1] mb-4" size={32} />
                <h3 className="font-['Anton'] text-xl uppercase mb-3 text-[#26b6c1]">Milieu Naturel (Lac)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-white" /> Bonnet couleur vive</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-white" /> Trifonction</li>
                  <li className="flex gap-2 items-start"><ArrowRight size={14} className="mt-1 flex-shrink-0 text-white" /> Chaussures serrage rapide</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SectionsPage;