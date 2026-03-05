import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Cpu, Globe, Fingerprint } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CoreValues: React.FC = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [expandedTransformations, setExpandedTransformations] = useState<number | null>(null);
  const [uniqueValueExpanded, setUniqueValueExpanded] = useState(false);

  return (
    <section id="core-values" className="py-24 px-6 bg-midnight/30 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div 
          className="flex flex-col items-center justify-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-center leading-tight text-soft-white">
            {t.coreValues.title}
          </h2>
        </div>

        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-soft-white/60 text-lg max-w-3xl mx-auto leading-relaxed text-center mb-16"
          >
            {t.coreValues.subtitle}
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-4 mb-20">
            {t.coreValues.transformations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-[2rem] border-gold/10 hover:border-gold/30 transition-all overflow-hidden"
              >
                <button 
                  onClick={() => setExpandedTransformations(expandedTransformations === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-serif text-gold/20 group-hover:text-gold/40 transition-colors">0{i + 1}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gold-light group-hover:text-gold transition-colors">{item.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedTransformations === i ? 180 : 0 }}
                    className="text-gold/40 group-hover:text-gold"
                  >
                    <ChevronRight className="w-6 h-6 rotate-90" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedTransformations === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-red-400/60 block mb-3">Fragmented Reality</span>
                            <p className="text-soft-white/50 text-sm md:text-base leading-relaxed">{item.pain}</p>
                          </div>
                          
                          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400/60 block mb-3">Francis Factor Solution</span>
                            <p className="text-soft-white/90 text-sm md:text-base leading-relaxed italic">{item.solution}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Unique Edge Proposition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 md:p-12 rounded-[3rem] border-gold/30 bg-gradient-to-br from-gold/5 to-transparent cursor-pointer"
            onClick={() => setUniqueValueExpanded(!uniqueValueExpanded)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl md:text-3xl font-serif text-gold">{t.coreValues.factor.title}</h3>
              <motion.div
                animate={{ rotate: uniqueValueExpanded ? 180 : 0 }}
                className="text-gold"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </motion.div>
            </div>

            <AnimatePresence>
              {uniqueValueExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-white/5">
                    <div>
                      <p className="text-soft-white/60 leading-relaxed">{t.coreValues.factor.intro}</p>
                    </div>
                    <div className="space-y-6">
                      {t.coreValues.factor.items.map((item, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all shrink-0">
                            {i === 0 ? <Cpu size={18} /> : i === 1 ? <Globe size={18} /> : <Fingerprint size={18} />}
                          </div>
                          <div>
                            <h4 className="text-soft-white font-bold text-sm mb-1">{item.label}</h4>
                            <p className="text-soft-white/40 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] -z-10" />
    </section>
  );
};

export default CoreValues;
