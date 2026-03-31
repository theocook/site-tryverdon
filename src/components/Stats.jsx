import React from 'react';

const Stats = () => {
  const stats = [
    { value: "120", label: "Adultes", bg: "bg-white", text: "text-[#1a1a1a]", hoverText: "group-hover:text-[#26b6c1]", border: "border-gray-200" },
    { value: "54", label: "Jeunes", bg: "bg-[#1a1a1a]", text: "text-white", hoverText: "group-hover:text-[#26b6c1]", border: "border-gray-800" },
    { value: "43%", label: "Femmes", bg: "bg-white", text: "text-[#1a1a1a]", hoverText: "group-hover:text-[#26b6c1]", border: "border-gray-200" },
    { value: "16", label: "Podiums", bg: "bg-[#26b6c1]", text: "text-white", hoverText: "text-white/90", border: "border-[#26b6c1]" },
  ];

  return (
    <section id="club" className="py-24 bg-[#f3f4f6] px-4 md:px-12 relative font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-['Anton'] uppercase leading-none mb-4">
            NOS <span className="text-[#26b6c1]">CHIFFRES</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600">
            Plus qu'un club, une communauté grandissante passionnée par le triple effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${stat.bg} p-10 border ${stat.border} hover:-translate-y-2 transition-transform duration-300 shadow-xl group text-center`}>
              <span className={`block text-6xl font-['Anton'] ${stat.text} mb-2 ${stat.hoverText} transition-colors`}>{stat.value}</span>
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;