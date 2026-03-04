import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../../constants';

const WorkScenes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scenes = [
    {
      src: ASSETS.WORKING_SCENE(1),
      title: 'SCENARIO 1',
      subtitle: 'The Mastermind Consultation',
      desc: '全景決策 | Strategic Alignment'
    },
    {
      src: ASSETS.WORKING_SCENE(2),
      title: 'SCENARIO 2',
      subtitle: 'The Wealth Engineer',
      desc: '工程師視角 | Precision Architecture'
    },
    {
      src: ASSETS.WORKING_SCENE(3),
      title: 'SCENARIO 3',
      subtitle: 'The Trust Handshake',
      desc: '交付與承諾 | Fiduciary Bond'
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % scenes.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length);

  return (
    <section className="py-12 bg-midnight relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="relative group">
          {/* Main Slider Container */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-gold/20 shadow-2xl bg-midnight/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={scenes[currentIndex].src}
                  alt={scenes[currentIndex].title}
                  className="w-full h-full object-cover"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-all z-10 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {scenes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all rounded-full ${i === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-gold/30'}`}
                />
              ))}
            </div>
          </div>

          {/* Text Description Below Image */}
          <div className="mt-8 text-center">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gold/60 text-xs font-bold tracking-[0.3em] uppercase block mb-2">
                {scenes[currentIndex].title}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-soft-white mb-2">
                {scenes[currentIndex].subtitle}
              </h3>
              <p className="text-gold-light/80 text-sm md:text-base font-medium tracking-wide">
                {scenes[currentIndex].desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkScenes;
