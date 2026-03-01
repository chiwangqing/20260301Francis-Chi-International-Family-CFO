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

            {/* Personal Gallery - Past, Present, Future */}
            <div className="mb-16 -mx-4 md:-mx-8">
              <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 md:px-8 pb-4 snap-x snap-mandatory">
                {t.brandStory.gallery.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="min-w-[280px] md:min-w-[400px] aspect-[4/3] relative rounded-2xl overflow-hidden snap-center group shrink-0 border border-white/10"
                  >
                    <img 
                      src={`https://picsum.photos/seed/${item.seed}/800/600`} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-6 text-left">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase mb-1 block">{item.title}</span>
                      <h4 className="text-xl font-serif text-soft-white">{item.desc}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {t.brandStory.gallery.map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                ))}
              </div>
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
