import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../translations';
import { Globe, ChevronDown } from 'lucide-react';

const langOptions: { code: Language; label: string }[] = [
  { code: 'TC', label: '繁體' },
  { code: 'SC', label: '简体' },
  { code: 'EN', label: 'EN' },
  { code: 'JP', label: '日本語' },
];

const Header: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

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
              {lang === 'EN' ? 'International Family CFO' : lang === 'JP' ? '国際ファミリーCFO' : '國際家庭 CFO'}
            </span>
          </a>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.home}</a>
            <a href="#diagnosis" onClick={(e) => { e.preventDefault(); onOpenDiagnosis(); }} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.diagnosis}</a>
            <a href="#services" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.services}</a>
            <a href="#vip" className="text-sm font-medium text-white/70 hover:text-gold transition-colors">{t.nav.vip}</a>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-white/60 text-[10px] font-bold hover:border-gold/30 hover:text-gold transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{langOptions.find(opt => opt.code === lang)?.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLang(opt.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors ${
                        lang === opt.code 
                          ? 'bg-gold/20 text-gold' 
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
