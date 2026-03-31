import React from 'react';
import { Info, Trophy } from 'lucide-react';

const Marquee = () => (
  <div className="bg-[#26b6c1] py-3 overflow-hidden border-y border-black">
    <div className="whitespace-nowrap flex animate-marquee">
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-2xl font-['Anton'] uppercase text-white mx-8 flex items-center gap-2"><Info size={20} /> INSCRIPTIONS SAISON 2024 OUVERTES</span>
          <span className="text-2xl font-['Anton'] uppercase text-black mx-8">/// PROCHAIN STAGE : ESPAGNE (AVRIL)</span>
          <span className="text-2xl font-['Anton'] uppercase text-white mx-8 flex items-center gap-2"><Trophy size={20} /> RÉSULTATS : 3 PODIUMS CE WEEKEND</span>
          <span className="text-2xl font-['Anton'] uppercase text-black mx-8">/// ASSEMBLÉE GÉNÉRALE : 15 DÉCEMBRE</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Marquee;