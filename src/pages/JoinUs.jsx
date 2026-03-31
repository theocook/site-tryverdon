import React from 'react';
import { Mail, CheckCircle, FileText, UserPlus, ArrowRight, Download, Send } from 'lucide-react';

const JoinUs = () => {
  return (
    <div className="bg-white font-['Space_Grotesk'] overflow-hidden">
      
      {/* 1. HERO SECTION (Sombre pour la lisibilité de la Navbar) */}
      <section className="relative pt-40 pb-32 bg-[#1a1a1a] text-white flex items-center min-h-[60vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
          <h1 className="text-[20vw] font-['Anton'] uppercase leading-none whitespace-nowrap" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
            LA TRIBU
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-[#26b6c1]"></div>
            <span className="text-[#26b6c1] font-bold tracking-[0.2em] uppercase text-sm">Saison 2024 Ouverte</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-['Anton'] uppercase leading-none mb-8">
            Rejoindre <br/><span className="text-[#26b6c1]">Le Club</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            Que vous visiez votre premier triathlon Découverte ou une qualification Ironman, vous avez votre place parmi nous.
          </p>
        </div>
      </section>

      {/* 2. LE PROCESSUS EN 3 ÉTAPES */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-['Anton'] uppercase text-[#1a1a1a] mb-4">Comment S'inscrire ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un processus simple pour vous intégrer rapidement dans les meilleures conditions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Ligne de connexion (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

            {/* Étape 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-100 shadow-lg group-hover:border-[#26b6c1] transition-colors mb-6 text-[#1a1a1a] group-hover:text-[#26b6c1]">
                <UserPlus size={32} />
              </div>
              <h3 className="text-2xl font-['Anton'] uppercase mb-3">1. L'Essai</h3>
              <p className="text-gray-600 text-sm max-w-xs">Contactez l'entraîneur de votre section pour venir faire un entraînement de découverte gratuit et sans engagement.</p>
            </div>

            {/* Étape 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-100 shadow-lg group-hover:border-[#26b6c1] transition-colors mb-6 text-[#1a1a1a] group-hover:text-[#26b6c1]">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-['Anton'] uppercase mb-3">2. Le Dossier</h3>
              <p className="text-gray-600 text-sm max-w-xs">Téléchargez le formulaire d'inscription, préparez votre certificat médical et votre photo d'identité.</p>
            </div>

            {/* Étape 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center border-4 border-gray-100 shadow-lg group-hover:bg-[#26b6c1] group-hover:border-[#26b6c1] transition-colors mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-['Anton'] uppercase mb-3">3. La Validation</h3>
              <p className="text-gray-600 text-sm max-w-xs">Réglez votre cotisation annuelle. Votre licence fédérale sera générée et vous ferez officiellement partie du TRYverdon !</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES COTISATIONS & SECTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Carte Adultes */}
            <div className="bg-[#1a1a1a] text-white p-10 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <UserPlus size={250} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-[#26b6c1]/20 text-[#26b6c1] text-xs font-bold uppercase tracking-widest mb-6">Dès 16 ans</span>
                <h3 className="text-4xl lg:text-5xl font-['Anton'] uppercase mb-4">Section Adultes</h3>
                <p className="text-gray-400 mb-8 min-h-[80px]">Rejoignez le groupe pour des entraînements réguliers, du loisir à la compétition longue distance.</p>
                
                <div className="space-y-4 mb-10 border-t border-white/10 pt-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-2">
                    <span className="font-medium">Licence Compétition</span>
                    <span className="text-[#26b6c1] font-['Anton'] text-2xl">~ 190 CHF</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-2">
                    <span className="font-medium">Licence Loisir</span>
                    <span className="text-[#26b6c1] font-['Anton'] text-2xl">~ 140 CHF</span>
                  </div>
                </div>

                <a href="mailto:coach@tryverdon.ch" className="inline-flex items-center gap-3 bg-[#26b6c1] text-white px-6 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#1a1a1a] transition-colors w-full justify-center">
                  <Mail size={18} /> Contacter Jeff Cook
                </a>
              </div>
            </div>

            {/* Carte Jeunesse */}
            <div className="bg-gray-50 border border-gray-200 text-[#1a1a1a] p-10 lg:p-12 relative overflow-hidden group hover:shadow-2xl transition-shadow hover:border-[#26b6c1]">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-[#26b6c1]">
                <UserPlus size={250} />
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6">De 6 à 15 ans</span>
                <h3 className="text-4xl lg:text-5xl font-['Anton'] uppercase mb-4">Section Jeunesse</h3>
                <p className="text-gray-600 mb-8 min-h-[80px]">École de triathlon et groupe compétition. Apprentissage ludique et développement athlétique.</p>
                
                <div className="space-y-4 mb-10 border-t border-gray-200 pt-8">
                  <div className="flex justify-between items-end border-b border-gray-200 pb-2">
                    <span className="font-medium">Cotisation annuelle</span>
                    <span className="text-[#1a1a1a] font-['Anton'] text-2xl">~ 110 CHF</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-gray-200 pb-2 opacity-0 select-none">
                    {/* Placeholder pour alignement avec la carte adultes */}
                    <span className="font-medium">Placeholder</span>
                    <span className="text-[#1a1a1a] font-['Anton'] text-2xl">0</span>
                  </div>
                </div>

                <a href="mailto:98vaucher@gmail.com" className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-6 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#26b6c1] transition-colors w-full justify-center">
                  <Mail size={18} /> Contacter Gilles Vaucher
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FORMULAIRE & DOCUMENTS */}
      <section className="py-24 bg-[#1a1a1a] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Documents & Info */}
            <div className="lg:col-span-4 lg:col-start-2">
              <h3 className="text-4xl font-['Anton'] uppercase mb-8 text-[#26b6c1]">Les Documents</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Pour valider votre inscription après votre séance d'essai, nous aurons besoin de plusieurs documents officiels pour la licence Swiss Triathlon.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3 p-4 bg-white/5 border border-white/10">
                  <CheckCircle size={24} className="text-[#26b6c1] flex-shrink-0" />
                  <div>
                    <span className="font-bold block mb-1">Certificat Médical</span>
                    <span className="text-sm text-gray-400">Datant de moins de 3 mois avec la mention "apte à la pratique du triathlon en compétition".</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white/5 border border-white/10">
                  <CheckCircle size={24} className="text-[#26b6c1] flex-shrink-0" />
                  <div>
                    <span className="font-bold block mb-1">Photo d'identité</span>
                    <span className="text-sm text-gray-400">Format numérique standard pour la création de votre carte de membre.</span>
                  </div>
                </li>
              </ul>

              <button className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:text-[#26b6c1] transition-colors pb-1 border-b border-white/30 hover:border-[#26b6c1]">
                <Download size={18} /> Télécharger le formulaire PDF
              </button>
            </div>

            {/* Formulaire de pré-inscription */}
            <div className="lg:col-span-6 bg-white text-[#1a1a1a] p-8 md:p-12 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#26b6c1]"></div>
              <h3 className="text-3xl font-['Anton'] uppercase mb-2">Pré-inscription</h3>
              <p className="text-gray-500 mb-8">Envoyez-nous vos informations pour préparer votre arrivée ou poser une question.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Prénom</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-[#26b6c1] transition-colors" placeholder="Jean" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nom</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-[#26b6c1] transition-colors" placeholder="Dupont" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Adresse E-mail</label>
                  <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-[#26b6c1] transition-colors" placeholder="jean.dupont@email.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Section souhaitée</label>
                  <select className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-[#26b6c1] transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Choisissez une section...</option>
                    <option value="adulte">Section Adultes</option>
                    <option value="jeunesse">Section Jeunesse / École de Triathlon</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Votre Message (Optionnel)</label>
                  <textarea rows="4" className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-[#26b6c1] transition-colors resize-none" placeholder="Bonjour, j'aimerais venir faire un essai jeudi prochain..."></textarea>
                </div>

                <button type="button" className="w-full bg-[#1a1a1a] text-white p-5 font-bold uppercase tracking-widest hover:bg-[#26b6c1] transition-colors flex justify-center items-center gap-2">
                  <Send size={18} /> Envoyer la demande
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default JoinUs;