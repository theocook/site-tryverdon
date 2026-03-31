import React from 'react';
import News from '../components/News';

const NewsPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-6xl md:text-8xl font-['Anton'] uppercase text-white">
          Derniers <span className="text-[#26b6c1]">Articles</span>
        </h1>
      </div>
      <News />
    </div>
  );
};

export default NewsPage;