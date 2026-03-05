import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../translations';
import { Globe, ChevronDown } from 'lucide-react';

const langOptions: { code: Language; label: string; flag: string }[] = [
  { code: 'TC', label: '繁中', flag: '🇭🇰' },
  { code: 'SC', label: '简中', flag: '🇨🇳' },
  { code: 'EN', label: 'EN', flag: '🇺🇸' },
  { code: 'JP', label: '日本語', flag: '🇯🇵' },
];

const Header: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  const { lang, setLang, t } = useLanguage();
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
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
                Francis Chi
              </span>
              <span className="hidden md:inline-block w-px h-6 bg-gold/30 mx-1"></span>
              <span className="font-serif text-sm md:text-lg text-gold/80 font-medium tracking-wide">
                {lang === 'EN' ? 'International Family CFO' : lang === 'JP' ? '国際ファミリーCFO' : '國際家庭 CFO'}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-xs text-white/40 font-medium whitespace-nowrap">
              {t.nav.tagline}
            </span>
            <a 
              href="#top3" 
              className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold animate-pulse hover:bg-red-500/20 transition-all"
            >
              🔥 {t.offers.title}
            </a>
          </div>
        </div>

        {/* Right: Navigation & Lang */}
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden xl:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.home}</a>
            <a href="#diagnosis" onClick={(e) => { e.preventDefault(); onOpenDiagnosis(); }} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.diagnosis}</a>
            <a href="#pillars" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.services}</a>
            <a href="#vip" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.vip}</a>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Expanded Language Switcher */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                    lang === opt.code 
                      ? 'bg-gold text-midnight shadow-lg' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{opt.flag}</span>
                  <span className="hidden lg:inline">{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Lang Button (Keep simple) */}
            <div className="md:hidden">
              <button 
                onClick={() => setLang(lang === 'TC' ? 'SC' : lang === 'SC' ? 'EN' : lang === 'EN' ? 'JP' : 'TC')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/60 text-[10px] font-bold"
              >
                {langOptions.find(o => o.code === lang)?.flag}
              </button>
            </div>

            <button 
              onClick={onOpenDiagnosis}
              className="bg-gold hover:bg-gold-light text-midnight text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-gold/20 whitespace-nowrap"
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
