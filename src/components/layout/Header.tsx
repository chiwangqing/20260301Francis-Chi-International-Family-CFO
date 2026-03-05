import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Header: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'glass py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
              Francis Chi
            </span>
            <span className="hidden md:inline-block w-px h-6 bg-gold/30 mx-1"></span>
            <span className="font-serif text-sm md:text-lg text-gold/80 font-medium tracking-wide">
              國際家庭 CFO
            </span>
          </a>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-4 md:gap-10">
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">Home</a>
            <a href="#diagnosis" onClick={(e) => { e.preventDefault(); onOpenDiagnosis(); }} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">3D Diagnosis</a>
            <a href="#services" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">Services</a>
            <a href="#vip" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">VIP</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 text-gold text-xs font-bold hover:bg-gold/10 transition-all"
            >
              WeChat: 75108282
            </button>
            <button 
              onClick={onOpenDiagnosis}
              className="bg-gold hover:bg-gold-light text-midnight text-xs font-bold px-5 py-2.5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
            >
              {t.nav.book}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
