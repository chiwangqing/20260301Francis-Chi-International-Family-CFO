import React from 'react';
import { motion } from 'motion/react';
import { Fingerprint, Quote } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const BrandStory: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="brand-story" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-8 md:p-16 border-gold/20 relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-3xl bg-gold flex items-center justify-center shadow-2xl shadow-gold/20 rotate-12">
            <Fingerprint className="text-midnight w-10 h-10" />
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gold-light">{t.brandStory.title}</h2>
            
            <div className="relative mb-12">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-gold/20" />
              <p className="text-xl md:text-2xl font-serif italic text-soft-white leading-relaxed px-4">
                {t.brandStory.quote}
              </p>
              <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-gold/20 rotate-180" />
            </div>

            {/* Personal Gallery - Infinite Marquee for 25 Images */}
            <div className="mb-16 -mx-6 md:-mx-16 overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-midnight to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-midnight to-transparent z-10" />
              
              <motion.div 
                className="flex gap-4 px-4 w-max"
                animate={{ x: [0, "-50%"] }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...Array(25)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-[200px] md:w-[300px] aspect-[3/4] relative rounded-2xl overflow-hidden shrink-0 border border-white/10 group"
                  >
                    <img 
                      src={`./assets/gallery/story-${i + 1}.png?v=2026`} 
                      alt={`Story ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('.png')) {
                          target.src = target.src.replace('.png', '.jpg');
                        } else {
                          target.onerror = null;
                          target.src = `https://picsum.photos/seed/story-${i + 1}/600/800`;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[...Array(25)].map((_, i) => (
                  <div 
                    key={`dup-${i}`}
                    className="w-[200px] md:w-[300px] aspect-[3/4] relative rounded-2xl overflow-hidden shrink-0 border border-white/10 group"
                  >
                    <img 
                      src={`./assets/gallery/story-${i + 1}.png?v=2026`} 
                      alt={`Story ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('.png')) {
                          target.src = target.src.replace('.png', '.jpg');
                        } else {
                          target.onerror = null;
                          target.src = `https://picsum.photos/seed/story-${i + 1}/600/800`;
                        }
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="space-y-6 text-soft-white/70 text-base md:text-lg leading-relaxed text-left">
              {t.brandStory.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative circuit lines for brand story */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-gold/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-gold/50 to-transparent" />
    </section>
  );
};

export default BrandStory;
