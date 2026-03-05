import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import WorkScenes from './WorkScenes';

const Hero: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  const { t } = useLanguage();

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
          {t.hero.title.split('\n').map((line, index) => {
            if (index === 0) {
              return (
                <span key={index} className="bg-gradient-to-b from-gold-light via-gold to-gold bg-clip-text text-transparent block mb-6 text-5xl md:text-7xl lg:text-8xl font-bold">
                  {line}
                </span>
              );
            }
            
            // Highlight keywords in the second line
            const keywords = ['醫生', '工程師', '翻譯官', 'Doctor', 'Engineer', 'Interpreter', 'ドクター', 'エンジニア', '通訳官', '医生', '工程师', '翻译官'];
            const regex = new RegExp(`(${keywords.join('|')})`, 'g');
            const parts = line.split(regex);

            return (
              <span key={index} className="text-white/90 text-2xl md:text-4xl lg:text-5xl font-light block mt-4 leading-tight tracking-wide">
                {parts.map((part, i) => (
                  keywords.includes(part) ? (
                    <span key={i} className="text-gold-light font-black inline-block mx-1 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-110 transition-transform hover:scale-125 cursor-default">
                      {part}
                    </span>
                  ) : part
                ))}
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
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {t.hero.badges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5 text-xs md:text-sm font-medium text-white/80"
            >
              <ShieldCheck className="w-4 h-4 text-gold" />
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
