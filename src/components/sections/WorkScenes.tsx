import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

const WorkScenes: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scenes = t.workScenes.scenes.map((scene, i) => ({
    ...scene,
    src: ASSETS.WORKING_SCENE(i + 1)
  }));

  const next = () => setCurrentIndex((prev) => (prev + 1) % scenes.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full relative overflow-hidden mb-12"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative group">
          {/* Main Slider Container */}
          <div className="relative aspect-[16/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden border border-gold/20 shadow-2xl bg-midnight/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <motion.img
                  src={scenes[currentIndex].src}
                  alt={scenes[currentIndex].title}
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.15] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/1920x1080/1a1a1a/D4AF37?text=Scene+${currentIndex + 1}+Unavailable`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 transition-all rounded-full ${i === currentIndex ? 'w-10 bg-gold' : 'w-3 bg-gold/30'}`}
                />
              ))}
            </div>
          </div>

          {/* Text Description Below Image */}
          <div className="mt-4 text-center">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gold/60 text-xs font-bold tracking-[0.3em] uppercase block mb-2">
                {scenes[currentIndex].title}
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-soft-white mb-1">
                {scenes[currentIndex].subtitle}
              </h3>
              <p className="text-gold-light/80 text-xs md:text-sm font-medium tracking-wide">
                {scenes[currentIndex].desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkScenes;
