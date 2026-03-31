import React from 'react';

const Logo = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    {/* Exemple de tracé dont la couleur (fill) hérite du texte parent ou change au survol */}
    <path className="fill-current group-hover:fill-[#26b6c1] transition-colors duration-300" d="M10 10 H 90 V 90 H 10 Z" />
  </svg>
);

export default Logo;