import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Import des composants communs
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import des Pages
import Home from './pages/Home';
import Club from './pages/Club';
import SectionsPage from './pages/SectionsPage';
import NewsPage from './pages/NewsPage';
import JoinUs from './pages/JoinUs';

// Composant pour remonter en haut de page lors du changement de route
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  // Injection des polices (comme avant)
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@300;400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    const style = document.createElement('style');
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="scroll-smooth bg-white text-[#1a1a1a] font-sans antialiased selection:bg-[#26b6c1] selection:text-white flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club" element={<Club />} />
            <Route path="/sections" element={<SectionsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/join" element={<JoinUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}