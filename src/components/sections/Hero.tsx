import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import WorkScenes from './WorkScenes';

const Hero: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-12 pb-32 text-center overflow-hidden">
      {/* Background Layers */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/90 to-slate-900 pointer-events-none z-0" />
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Main Headline */}
        <h1 className="font-serif leading-[1.2] mb-12 tracking-tight">
          {t.hero.title.split('\n').map((line, index, allLines) => {
            const isTagline = allLines.length > 2 && index === 0;
            const isName = (allLines.length > 2 && index === 1) || (allLines.length <= 2 && index === 0);
            const isRoles = index === allLines.length - 1;

            if (isTagline) {
              return (
                <span key={index} className="text-gold/80 block mb-6 text-base sm:text-xl md:text-3xl lg:text-4xl font-medium max-w-4xl mx-auto leading-relaxed px-4">
                  {line}
                </span>
              );
            }

            if (isName) {
              return (
                <span key={index} className="bg-gradient-to-b from-gold-light via-gold to-gold bg-clip-text text-transparent block mb-8 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
                  {line}
                </span>
              );
            }
            
            const segments = line.split(/[╳╳]/);
            const keywords = ['醫生', '工程師', '翻譯官', 'Doctor', 'Engineer', 'Interpreter', 'ドクター', 'エンジニア', '通訳官', '医生', '工程师', '翻译官'];
            const regex = new RegExp(`(${keywords.join('|')})`, 'g');

            const isEnOrJp = lang === 'EN' || lang === 'JP';

            return (
              <span key={index} className={`text-white/90 font-light block mt-8 leading-tight tracking-wide ${isEnOrJp ? 'text-sm sm:text-2xl md:text-4xl lg:text-5xl' : 'text-xl sm:text-2xl md:text-4xl lg:text-5xl'}`}>
                <div className={`flex ${isEnOrJp ? 'flex-row flex-wrap' : 'flex-col md:flex-row'} items-center justify-center gap-y-2 md:gap-y-0 gap-x-2 md:gap-x-0`}>
                  {segments.map((segment, i) => {
                    const parts = segment.trim().split(regex);
                    const keyword = parts.find(p => keywords.includes(p));
                    const prefix = segment.includes('您的家庭') ? '您的家庭' : 
                                 segment.includes('Your Family') ? 'Your Family' : 
                                 segment.includes('あなたの家庭') ? 'あなたの家庭の' : '';
                    const wealth = segment.includes('財富') ? '財富' : 
                                 segment.includes('财富') ? '财富' : 
                                 segment.includes('Wealth') ? 'Wealth ' : '';

                    return (
                      <React.Fragment key={i}>
                        {i > 0 && (
                          <span className={`${isEnOrJp ? 'inline' : 'md:hidden block'} text-gold/40 my-1 text-xl font-light`}>
                            {isEnOrJp ? '╳' : '×'}
                          </span>
                        )}
                        
                        <div className="flex flex-col md:flex-row items-center">
                          {i === 0 && prefix ? (
                            <>
                              <span className={`${isEnOrJp ? 'inline' : 'block md:inline'} mb-1 md:mb-0`}>{prefix}</span>
                              <div className="flex items-center">
                                <span className="md:inline">{wealth}</span>
                                <span className="text-gold-light font-black inline-block mx-1 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-110">
                                  {keyword}
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center">
                              <span className="md:inline">{wealth}</span>
                              <span className="text-gold-light font-black inline-block mx-1 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-110">
                                {keyword}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {i < segments.length - 1 && (
                          <span className="hidden md:inline mx-4 text-gold/30">╳</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </span>
            );
          })}
        </h1>
        
        <WorkScenes />

        {/* Sub-headline */}
        <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-light">
          {t.hero.subtitle}
        </p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-16 max-w-4xl mx-auto px-4">
          {t.hero.badges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/5 font-medium text-white/80 transition-all hover:border-gold/30
                ${i % 3 === 0 ? 'text-[8px] md:text-sm' : i % 2 === 0 ? 'text-[9px] md:text-sm' : 'text-[10px] md:text-sm'}
                md:px-4 md:py-2
              `}
            >
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-gold" />
              {badge}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenDiagnosis}
            className="gold-gradient text-midnight font-bold px-10 py-5 rounded-full text-lg md:text-xl shadow-2xl shadow-gold/20 flex items-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
          
          <p className="text-gold/60 text-xs md:text-sm font-medium uppercase tracking-[0.2em] animate-pulse">
            {t.hero.limit}
          </p>
        </div>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gold/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
