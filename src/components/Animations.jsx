import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. SCROLL REVEAL (Apparition Directionnelle)
// ==========================================
export const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Définition des classes en fonction de la direction choisie
  let baseClass = "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ";
  
  if (!isVisible) {
    baseClass += "opacity-0 ";
    if (direction === "up") baseClass += "translate-y-16";
    if (direction === "down") baseClass += "-translate-y-16";
    if (direction === "left") baseClass += "-translate-x-16";
    if (direction === "right") baseClass += "translate-x-16";
    if (direction === "scale") baseClass += "scale-90";
  } else {
    baseClass += "opacity-100 translate-y-0 translate-x-0 scale-100";
  }

  return (
    <div ref={ref} className={baseClass} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// ==========================================
// 2. ANIMATED NUMBER (Compteur Dynamique)
// ==========================================
export const AnimatedNumber = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// ==========================================
// 3. TEXT REVEAL (Apparition mot par mot)
// ==========================================
export const TextReveal = ({ text, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em] mb-1 pb-1">
          <span 
            className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`} 
            style={{ transitionDelay: `${delay + (i * 100)}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

// ==========================================
// 4. PARALLAX ELEMENT (Décalage au scroll)
// ==========================================
export const ParallaxElement = ({ children, speed = 0.2, className = "" }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      // Calcule la distance par rapport au centre de l'écran
      const rect = ref.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight / 2 - (rect.top + rect.height / 2);
      setOffset(scrollPosition * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Appel initial pour placer l'élément correctement
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s ease-out' }}>
      {children}
    </div>
  );
};

// ==========================================
// 5. MAGNETIC WRAPPER (Effet aimant au survol)
// ==========================================
export const MagneticWrapper = ({ children, strength = 20, className = "" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    // Calcul de la distance du curseur par rapport au centre de l'élément
    const x = ((clientX - left) / width - 0.5) * strength;
    const y = ((clientY - top) / height - 0.5) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    // Retour à la position initiale
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </div>
  );
};





