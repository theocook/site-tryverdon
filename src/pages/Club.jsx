import React, { useState } from 'react';
import { Target, Smile, Star, Mail, Briefcase, Award } from 'lucide-react';

// Composant pour les cartes du comité
const CommitteeCard = ({ name, role, email }) => (
  <div className="group relative bg-white border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden font-['Space_Grotesk']">
    <div className="absolute inset-0 bg-gradient-to-t from-[#26b6c1] via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div className="mb-6">
        <div className="flex items-center gap-3 text-gray-400 mb-2 group-hover:text-[#26b6c1] transition-colors">
          <Briefcase size={16} />
          <span className="text-sm font-bold uppercase tracking-wider">{role}</span>
        </div>
        <h3 className="text-3xl font-['Anton'] uppercase leading-none text-[#1a1a1a] mb-3 group-hover:text-[#26b6c1] transition-colors">{name}</h3>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600 border-t border-gray-100 pt-4 group-hover:border-[#26b6c1]/20 transition-colors">
        <Mail size={16} className="text-[#26b6c1]" />
        {email}
      </div>
    </div>
  </div>
);

// Composant pour les entraîneurs
const CoachCard = ({ name, role, photo, excerpt }) => (
  <div className="bg-[#1a1a1a] text-white p-10 border border-white/10 hover:border-[#26b6c1] transition-colors group">
    <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
      <img src={photo} alt={name} className="w-24 h-24 rounded-full object-cover border-4 border-white group-hover:border-[#26b6c1] transition-colors" />
      <div>
        <h3 className="text-4xl font-['Anton'] uppercase leading-none mb-1 text-[#26b6c1]">{name}</h3>
        <p className="font-['Space_Grotesk'] text-sm uppercase tracking-widest text-white/70">{role}</p>
      </div>
    </div>
    <p className="text-gray-400 text-sm font-['Space_Grotesk'] leading-relaxed">{excerpt}</p>
  </div>
);

const Club = () => {
  // État pour gérer l'année sélectionnée
  const [activeTab, setActiveTab] = useState(0);

  const history = [
    { year: "2006", title: "L'Idée Fondatrice", text: "Discussion entre partenaires financiers et sportifs sur l'utilité de créer un club de Triathlon." },
    { year: "2007", title: "Le Projet se dessine", text: "Prise de contact avec les clubs locaux (USY, ACN, CNY). Recherche de fonds, établissement du budget et mise en place du premier comité." },
    { year: "2008", title: "La Naissance Officielle", text: "La structure est en place. Identité visuelle créée. Arrivée des premiers athlètes dont le professionnel Didier Brocard." },
    { year: "2010", title: "Développement Sportif", text: "Nouveaux membres rejoignent les rangs. Présence accrue partout en Suisse et obtention de résultats très satisfaisants." },
    { year: "2011", title: "TRYverdon à domicile", text: "La ville reprend l'organisation du triathlon d'Yverdon. Le club court devant son public avec ses nouvelles couleurs." },
    { year: "2013", title: "Focus sur la Jeunesse", text: "Plus de 70 athlètes actifs. Création de la section jeunesse pour assurer la relève et transmettre la passion." },
    { year: "2014", title: "L'Ascension Locale", text: "Domination au triathlon d'Yverdon : le club monte 12 fois sur le podium, dont 8 victoires éclatantes." },
    { year: "2015", title: "L'Avenir s'écrit", text: "Nouvelles tenues, nouveaux jeunes motivés... L'histoire du TRYverdon ne fait que commencer." }
  ];

  const comite = [
    { name: "Renaud de Pury", role: "Président", email: "president@tryverdon.ch" },
    { name: "Daniel Raffo", role: "Secrétaire", email: "daniel.raffo@outlook.com" },
    { name: "Didier Guignard", role: "Caissier", email: "caissier@tryverdon.ch" },
    { name: "Olivier Kratzer", role: "Communication", email: "media@tryverdon.ch" },
    { name: "Jeff Cook", role: "Resp. Technique", email: "coach@tryverdon.ch" },
    { name: "Gilles Vaucher", role: "Resp. Jeunesse", email: "98vaucher@gmail.com" },
    { name: "Laurent Borgognon", role: "Webmaster", email: "webmaster@tryverdon.ch" }
  ];

  const coaches = [
    { name: "Jeff Cook", role: "Entraîneur Principal Adultes", photo: "https://v2.tryverdon.ch/wp-content/uploads/2023/11/Jeff-1024x1024.jpg", excerpt: "Triathlète longue distance pro, passionné par la transmission de l'expérience acquise en structure pro à Milan." },
    { name: "Gilles Vaucher", role: "Resp. Section Jeunesse", photo: "https://v2.tryverdon.ch/wp-content/uploads/2023/11/Gilles-1024x1024.jpg", excerpt: "Enseignant d'éducation physique, il s'épanouit dans son rôle de moniteur J+S depuis 2022." },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] scroll-smooth">
      {/* Balise style pour l'animation personnalisée de l'historique */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-32 bg-[#1a1a1a] text-white flex items-center min-h-[70vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <h1 className="text-[20vw] font-['Anton'] uppercase leading-none whitespace-nowrap" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
            TRYVERDON
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-[#26b6c1]"></div>
            <span className="text-[#26b6c1] font-bold tracking-[0.2em] uppercase text-sm">Depuis 2008</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-['Anton'] uppercase leading-none mb-8">
            L'Esprit <br/><span className="text-[#26b6c1]">Du Club</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            Plus qu'une équipe sportive, nous sommes une communauté unie par la passion du triple effort sur les rives de Neuchâtel.
          </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="py-24 bg-gray-50 font-['Space_Grotesk']">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <h2 className="text-6xl md:text-7xl font-['Anton'] uppercase text-[#1a1a1a] leading-none mb-6">Notre <span className="text-[#26b6c1]">Philosophie</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Pas seulement un club, une tribu de passionnés unis par trois piliers fondamentaux.
            </p>
            <div className="absolute -top-16 -right-16 text-[200px] font-['Anton'] uppercase text-transparent pointer-events-none opacity-10" style={{ WebkitTextStroke: '2px #000' }}>
              03
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-100 shadow-xl border-t-4 border-[#26b6c1]">
              <Target className="w-12 h-12 text-[#26b6c1] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Performance Adaptée</h3>
              <p className="text-gray-600 text-sm">Du débutant à l'Ironman, chacun progresse à son rythme, soutenu par nos entraîneurs.</p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-xl border-t-4 border-[#1a1a1a]">
              <Smile className="w-12 h-12 text-[#1a1a1a] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Convivialité Active</h3>
              <p className="text-gray-600 text-sm">Parce qu'un entraînement est plus efficace dans une bonne ambiance et en bonne compagnie.</p>
            </div>
            <div className="bg-white p-8 border border-gray-100 shadow-xl border-t-4 border-[#1a1a1a] sm:col-span-2">
              <Star className="w-12 h-12 text-[#1a1a1a] mb-6" />
              <h3 className="text-2xl font-bold mb-3">Team Spirit</h3>
              <p className="text-gray-600 text-sm">Le ciment du club. L'entraide, le plaisir partagé avant, pendant et après les entraînements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW SELECTABLE HISTORY SECTION */}
      <section className="py-32 bg-white font-['Space_Grotesk']">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-['Anton'] uppercase text-[#1a1a1a]">
              Notre <span className="text-[#26b6c1]">Parcours</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 max-w-6xl mx-auto items-start">
            
            {/* Menu de sélection (Gauche / Haut) */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col overflow-x-auto gap-2 pb-4 md:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {history.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center p-5 border-l-4 transition-all duration-300 text-left whitespace-nowrap md:whitespace-normal group ${
                    activeTab === idx 
                    ? 'border-[#26b6c1] bg-gray-50 text-[#26b6c1]' 
                    : 'border-transparent hover:border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-900'
                  }`}
                >
                  <span className={`text-3xl font-['Anton'] w-24 ${activeTab === idx ? 'text-[#26b6c1]' : 'text-gray-300 group-hover:text-gray-600'} transition-colors`}>
                    {item.year}
                  </span>
                  <span className="font-bold uppercase tracking-wide text-sm hidden md:block">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Zone d'affichage du contenu (Droite / Bas) */}
            <div className="w-full md:w-2/3">
              <div className="bg-gray-50 p-10 md:p-16 shadow-lg border-t-4 border-[#26b6c1] min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                
                {/* Année géante en arrière-plan */}
                <div 
                  key={`bg-${activeTab}`}
                  className="absolute -bottom-10 -right-10 text-[180px] font-['Anton'] text-transparent pointer-events-none animate-fade-in-up" 
                  style={{ WebkitTextStroke: '3px rgba(38, 182, 193, 0.1)' }}
                >
                  {history[activeTab].year}
                </div>

                {/* Contenu textuel */}
                <div key={activeTab} className="animate-fade-in-up relative z-10">
                  <div className="inline-block px-4 py-1 bg-[#1a1a1a] text-white font-bold tracking-widest text-sm mb-8">
                    ANNÉE {history[activeTab].year}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-['Anton'] uppercase leading-none mb-6 text-[#1a1a1a]">
                    {history[activeTab].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium max-w-2xl">
                    {history[activeTab].text}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MANAGEMENT */}
      <section className="py-24 bg-[#1a1a1a] text-white relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 pt-16">
          <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-6">
            <h2 className="text-5xl md:text-7xl font-['Anton'] uppercase text-white leading-none">L'ÉQUIPE <span className="text-[#26b6c1]">DIRECTIONNELLE</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-xs font-['Space_Grotesk'] font-bold uppercase tracking-[0.3em] text-[#26b6c1] mb-12">Le Comité</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {comite.map((member, idx) => (
                  <CommitteeCard key={idx} {...member} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-['Space_Grotesk'] font-bold uppercase tracking-[0.3em] text-[#26b6c1] mb-12">Les Entraîneurs</h3>
              <div className="space-y-6 lg:sticky lg:top-32">
                {coaches.map((coach, idx) => (
                  <CoachCard key={idx} {...coach} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HONOR COMMITTEE */}
      <section className="py-24 bg-white relative font-['Space_Grotesk']">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 relative">
              <h2 className="text-6xl md:text-7xl font-['Anton'] uppercase text-[#1a1a1a] leading-none mb-6">Comité <span className="text-[#26b6c1]">d'Honneur</span></h2>
              <p className="text-gray-600 max-w-sm">Reconnaissance de ceux qui ont posé les fondations ou marqué l'histoire du TRYverdon.</p>
              <div className="absolute -bottom-16 -left-16 text-[200px] font-['Anton'] uppercase text-transparent pointer-events-none opacity-10" style={{ WebkitTextStroke: '2px #000' }}>
                06
              </div>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[ { name: "Jean-Daniel Carrard", role: "Membre fondateur" }, { name: "Pierre Gasser", role: "Membre fondateur" }, { name: "Pedro Camps", role: "Membre fondateur" }, { name: "Joël Maillefer", role: "Ancien Entraîneur" }, { name: "Marc-Henry Cuendet", role: "Ancien Président" }, { name: "Didier Brocard", role: "Membre d'honneur" } ].map((nom, idx) => (
                <div key={idx} className="p-6 bg-gray-50 border border-gray-200 hover:border-[#26b6c1] hover:-translate-y-1 transition-all group flex items-center gap-3">
                    <Award className="w-8 h-8 text-[#26b6c1] flex-shrink-0" />
                    <div>
                        <div className="font-bold text-gray-900 group-hover:text-[#26b6c1] transition-colors">{nom.name}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">{nom.role}</div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Club;