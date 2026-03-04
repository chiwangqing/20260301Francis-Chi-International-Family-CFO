import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 text-center circuit-pattern">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 bg-gradient-to-b from-soft-white to-soft-white/60 bg-clip-text text-transparent">
          {t.hero.title}
        </h1>
        <p className="text-soft-white/80 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {t.hero.badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass text-[10px] md:text-[11px] font-medium text-soft-white/90 border border-white/5">
              <ShieldCheck className="w-3 h-3 text-gold shrink-0" />
              <span className="whitespace-nowrap">{badge}</span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenDiagnosis}
          className="gold-gradient text-midnight font-bold px-8 py-4 rounded-full shadow-lg shadow-gold/20 flex items-center gap-2 mx-auto"
        >
          {t.nav.book}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-gold/10 to-transparent blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
