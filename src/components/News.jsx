import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsCard = ({ image, category, date, title, excerpt, btnText, dark = true }) => (
  <div className={`snap-start min-w-[300px] md:min-w-[400px] ${dark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border group cursor-pointer transition-colors font-['Space_Grotesk']`}>
    <div className="h-64 overflow-hidden relative">
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" alt={title} />
      <div className={`absolute top-4 left-4 ${category === 'Résultats' || category === 'Compétition' ? 'bg-[#26b6c1] text-white' : 'bg-white text-black'} text-xs font-bold px-3 py-1 uppercase`}>
        {category}
      </div>
    </div>
    <div className="p-8">
      <span className="text-[#26b6c1] text-xs font-bold mb-2 block">{date}</span>
      <h3 className={`text-3xl font-['Anton'] uppercase leading-none mb-4 ${dark ? 'text-white' : 'text-[#1a1a1a]'}`}>{title}</h3>
      <p className={`text-sm mb-6 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{excerpt}</p>
      <span className={`text-xs font-bold uppercase tracking-widest border-b ${dark ? 'border-white/30 text-white' : 'border-black/30 text-black'} pb-1`}>{btnText}</span>
    </div>
  </div>
);

const News = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop",
      category: "Compétition",
      date: "12 NOV 2023",
      title: "Championnat Régional",
      excerpt: "Nos athlètes ont brillé ce week-end avec 3 podiums et une qualification nationale.",
      btnText: "Lire l'article"
    },
    {
      image: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1974&auto=format&fit=crop",
      category: "Entraînement",
      date: "05 NOV 2023",
      title: "Stage Hivernal",
      excerpt: "Inscriptions ouvertes pour le stage vélo en Espagne. Places limitées.",
      btnText: "S'inscrire"
    },
    {
      image: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=1974&auto=format&fit=crop",
      category: "Événement",
      date: "28 OCT 2023",
      title: "Soirée du Club",
      excerpt: "Rejoignez-nous pour célébrer la fin de saison et récompenser les athlètes.",
      btnText: "Détails"
    },
    {
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
      category: "Résultats",
      date: "15 OCT 2023",
      title: "Ironman Kona",
      excerpt: "Résumé des performances de nos 3 qualifiés aux championnats du monde.",
      btnText: "Lire l'article"
    }
  ];

  return (
    <section id="news" className="bg-[#1a1a1a] text-white py-24 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-5xl md:text-6xl font-['Anton'] uppercase text-white">Actualités</h2>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#26b6c1] hover:border-[#26b6c1] transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#26b6c1] hover:border-[#26b6c1] transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8">
          {newsItems.map((item, idx) => (
            <NewsCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;