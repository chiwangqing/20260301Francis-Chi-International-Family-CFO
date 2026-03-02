import React from 'react';
import { Cpu, Fingerprint, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../translations';

const langOptions: { code: Language; label: string }[] = [
  { code: 'TC', label: '繁體中文' },
  { code: 'SC', label: '简体中文' },
  { code: 'EN', label: 'English' },
  { code: 'JP', label: '日本語' },
];

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 px-4 py-3">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
            <Cpu className="text-midnight w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-gold leading-none">FRANCIS CHI</span>
            <span className="text-[8px] md:text-[10px] text-gold/70 font-medium tracking-tight mt-0.5 whitespace-nowrap">
              财富池老C·Francis国际工作室（HK,CN,JP,SG,MC,TW,US)
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a 
            href="#brand-story" 
            className="flex items-center gap-2 text-soft-white/60 hover:text-gold transition-all group"
          >
            <Fingerprint className="w-6 h-6 group-hover:scale-125 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">{t.brandStory.nav}</span>
          </a>
          <a 
            href="#core-values" 
            className="flex items-center gap-2 text-soft-white/60 hover:text-gold transition-all group"
          >
            <Cpu className="w-6 h-6 group-hover:scale-125 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">{t.coreValues.title.split('？')[0]}</span>
          </a>
        </nav>
        
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="#brand-story" 
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold border border-gold/20"
          >
            <Fingerprint className="w-5 h-5" />
          </a>

          <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all ${
                  lang === opt.code 
                    ? 'bg-gold text-midnight' 
                    : 'text-soft-white/40 hover:text-gold'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          
          {/* Mobile view */}
          <div className="sm:hidden flex items-center gap-1">
             {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`text-[10px] font-bold w-7 h-7 flex items-center justify-center rounded-full transition-all border ${
                  lang === opt.code 
                    ? 'bg-gold text-midnight border-gold' 
                    : 'text-soft-white/40 border-white/10'
                }`}
              >
                {opt.code}
              </button>
            ))}
          </div>

          <button className="bg-gold hover:bg-gold-light text-midnight text-[10px] md:text-xs font-bold px-3 md:px-4 py-2 rounded-full transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
            {t.nav.book}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
