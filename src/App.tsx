import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  Stethoscope, 
  MessageCircle, 
  PhoneCall,
  AlertCircle,
  ArrowRight,
  Fingerprint,
  Quote
} from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import BrandStory from './components/sections/BrandStory';
import QualificationsBar from './components/sections/QualificationsBar';
import FloatingActionButton from './components/ui/FloatingActionButton';
import { Language } from './translations';

const langOptions: { code: Language; label: string }[] = [
  { code: 'TC', label: '繁體中文' },
  { code: 'SC', label: '简体中文' },
  { code: 'EN', label: 'English' },
  { code: 'JP', label: '日本語' },
];

const AppContent: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    why: false,
    coreValues: false,
    uniqueValue: false,
    pillars: false,
    offers: false,
    pricing: false
  });
  const [expandedTransformations, setExpandedTransformations] = useState<number | null>(null);
  const [expandedDiagnosis, setExpandedDiagnosis] = useState<number | null>(null);

  const toggleSection = (section: string) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-midnight selection:bg-gold selection:text-midnight overflow-x-hidden">
      <Header />

      <main className="pt-20">
        {/* Language Selection Section */}
        <section className="py-8 px-6 border-b border-white/5 bg-midnight/30">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-soft-white/40 text-[10px] uppercase tracking-widest font-bold">
              <Globe className="w-3 h-3" />
              Select Language
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {langOptions.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => setLang(opt.code)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    lang === opt.code 
                      ? 'bg-gold/10 text-gold border-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
                      : 'text-soft-white/40 border-white/5 hover:border-white/20 hover:text-soft-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <Hero />

        <QualificationsBar />

        <BrandStory />

        {/* Core Values Section */}
        <section id="core-values" className="py-24 px-6 bg-midnight/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div 
              className="cursor-pointer group flex flex-col items-center justify-center mb-16"
              onClick={() => toggleSection('coreValues')}
            >
              <h2 className={`text-3xl md:text-5xl font-serif text-center leading-tight transition-all ${!expanded.coreValues ? 'animate-pulse text-gold' : 'text-soft-white'}`}>
                {t.coreValues.title}
              </h2>
              <motion.div
                animate={{ rotate: expanded.coreValues ? 180 : 0 }}
                className="mt-4 text-gold/40 group-hover:text-gold"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </motion.div>
            </div>

            <AnimatePresence>
              {expanded.coreValues && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
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
                    onClick={() => toggleSection('uniqueValue')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl md:text-3xl font-serif text-gold">{t.coreValues.factor.title}</h3>
                      <motion.div
                        animate={{ rotate: expanded.uniqueValue ? 180 : 0 }}
                        className="text-gold"
                      >
                        <ChevronRight className="w-8 h-8 rotate-90" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expanded.uniqueValue && (
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] -z-10" />
        </section>

        {/* 3. The 'Why' Section */}
        <section className="py-24 px-6 bg-midnight/50">
          <div className="max-w-7xl mx-auto">
            <div 
              className="cursor-pointer group flex flex-col items-center justify-center mb-16"
              onClick={() => toggleSection('why')}
            >
              <h2 className={`text-3xl md:text-4xl font-serif text-center leading-tight transition-all ${!expanded.why ? 'animate-pulse text-gold' : 'text-soft-white'}`}>
                {t.why.title}
              </h2>
              <motion.div
                animate={{ rotate: expanded.why ? 180 : 0 }}
                className="mt-4 text-gold/40 group-hover:text-gold"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {expanded.why && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
                    {/* Pain Card */}
                    <div className="glass rounded-3xl p-8 border-red-500/20 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <AlertCircle className="w-24 h-24 text-red-500" />
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                        <AlertCircle className="text-red-500 w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-6 text-red-100">{t.why.pain.title}</h3>
                      <p className="text-soft-white/60 leading-relaxed text-lg">
                        {t.why.pain.desc}
                      </p>
                    </div>

                    {/* Solution Card */}
                    <div className="glass rounded-3xl p-8 border-gold/30 relative overflow-hidden">
                      <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                        <Cpu className="text-gold w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-8 text-gold-light">{t.why.solution.title}</h3>
                      
                      <div className="space-y-8">
                        {t.why.solution.points.map((point, i) => (
                          <div key={i} className="relative pl-8 border-l border-gold/20">
                            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                            <h4 className="font-bold text-soft-white mb-2">{point.label}</h4>
                            <p className="text-soft-white/60 text-sm leading-relaxed">{point.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 4. 3D Diagnosis (Section A) */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">{t.diagnosis.title}</h2>
            <p className="text-soft-white/60 text-center max-w-2xl mb-16 leading-relaxed">
              {t.diagnosis.intro}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              {/* Interactive 3D Pyramid */}
              <div className="relative w-full aspect-square max-w-md mx-auto perspective-1000">
                <motion.div 
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full relative preserve-3d"
                >
                  {[0, 90, 180, 270].map((deg) => (
                    <div 
                      key={deg}
                      className="absolute inset-0 origin-bottom flex items-center justify-center"
                      style={{ 
                        transform: `rotateY(${deg}deg) translateZ(64px) rotateX(30deg)`,
                        background: 'linear-gradient(to top, rgba(212, 175, 55, 0.4), transparent)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full animate-pulse" />
                </motion.div>
              </div>

              {/* Diagnosis Dimensions */}
              <div className="space-y-6">
                {t.diagnosis.dimensions.map((dim, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="glass rounded-2xl border-white/5 overflow-hidden"
                  >
                    <button 
                      onClick={() => setExpandedDiagnosis(expandedDiagnosis === i ? null : i)}
                      className="w-full p-6 flex items-center justify-between text-left group"
                    >
                      <h4 className="text-gold font-bold flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        {dim.name}
                      </h4>
                      <motion.div
                        animate={{ rotate: expandedDiagnosis === i ? 180 : 0 }}
                        className="text-gold/40 group-hover:text-gold"
                      >
                        <ChevronRight className="w-5 h-5 rotate-90" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedDiagnosis === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <p className="text-soft-white/60 text-sm leading-relaxed">{dim.desc}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                
                <button className="w-full gold-gradient text-midnight font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all mt-8">
                  <Stethoscope className="w-5 h-5" />
                  {t.diagnosis.btn}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Service Pillars (Section B) */}
        <section className="py-24 px-6 bg-midnight/80">
          <div className="max-w-7xl mx-auto">
            <div 
              className="cursor-pointer group flex flex-col items-center justify-center mb-16"
              onClick={() => toggleSection('pillars')}
            >
              <h2 className="text-3xl font-serif text-center">{t.pillars.title}</h2>
              <motion.div
                animate={{ rotate: expanded.pillars ? 180 : 0 }}
                className="mt-4 text-gold/40 group-hover:text-gold"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {expanded.pillars && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                    {t.pillars.items.map((pillar, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="glass rounded-3xl p-8 flex flex-col gap-4 group"
                      >
                        <div className="text-4xl mb-2">{pillar.icon}</div>
                        <h3 className="text-xl font-bold text-gold-light group-hover:text-gold transition-colors">{pillar.title}</h3>
                        <p className="text-soft-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 6. Special Offers (Section C) */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div 
              className="cursor-pointer group flex flex-col items-center justify-center mb-16"
              onClick={() => toggleSection('offers')}
            >
              <h2 className="text-3xl font-serif text-center">{t.offers.title}</h2>
              <motion.div
                animate={{ rotate: expanded.offers ? 180 : 0 }}
                className="mt-4 text-gold/40 group-hover:text-gold"
              >
                <ChevronRight className="w-8 h-8 rotate-90" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {expanded.offers && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
                    {t.offers.items.map((offer, i) => (
                      <div key={i} className="glass rounded-3xl p-8 border-white/5 hover:border-gold/30 transition-colors group relative overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors" />
                        <h3 className="text-xl font-bold mb-4 text-gold-light">{offer.title}</h3>
                        <p className="text-soft-white/60 text-sm leading-relaxed mb-6">{offer.desc}</p>
                        <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 7. CTA & Pricing (Section D) */}
        <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-midnight to-black">
          <div className="max-w-3xl mx-auto">
            {/* Black Card UI */}
            <motion.div 
              initial={{ rotateX: 10, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 border border-zinc-800 shadow-2xl relative overflow-hidden"
            >
              {/* Card Chip Motif */}
              <div className="absolute top-12 right-12 w-16 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-light opacity-80 shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
              
              <div 
                className="cursor-pointer group flex flex-col items-center justify-center mb-8"
                onClick={() => toggleSection('pricing')}
              >
                <h2 className="text-2xl md:text-3xl font-serif text-gold-light text-center">{t.pricing.title}</h2>
                <motion.div
                  animate={{ rotate: expanded.pricing ? 180 : 0 }}
                  className="mt-4 text-gold/40 group-hover:text-gold"
                >
                  <ChevronRight className="w-6 h-6 rotate-90" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded.pricing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-soft-white/50 text-sm mb-12 italic text-center">{t.pricing.intro}</p>
                    
                    <div className="space-y-4 mb-12">
                      {t.pricing.privileges.map((privilege, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all group"
                        >
                          <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform">{privilege.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-gold-light font-bold text-sm md:text-base mb-1">{privilege.title}</h4>
                            <p className="text-soft-white font-medium text-xs md:text-sm mb-1">{privilege.value}</p>
                            <p className="text-soft-white/40 text-[10px] md:text-xs leading-relaxed">{privilege.detail}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col items-center gap-6 pt-8 border-t border-white/5">
                      <div className="text-center">
                        <span className="text-soft-white/40 text-sm uppercase tracking-widest block mb-1">{t.pricing.original}</span>
                        <span className="text-4xl font-bold text-gold">{t.pricing.current}</span>
                      </div>
                      
                      <button className="w-full gold-gradient text-midnight font-bold py-5 rounded-2xl shadow-2xl shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-lg flex items-center justify-center gap-3">
                        <MessageCircle className="w-6 h-6" />
                        {t.pricing.cta}
                      </button>
                      
                      <p className="text-soft-white/40 text-[10px] uppercase tracking-[0.2em]">
                        Limited to 5 families per month
                      </p>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-12">
                      <button className="flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all font-bold">
                        <MessageCircle className="w-5 h-5" />
                        WeChat
                      </button>
                      <button className="flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20 transition-all font-bold">
                        <PhoneCall className="w-5 h-5" />
                        WhatsApp
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-soft-white/40 text-xs">
        <p>© 2024 Francis Chi - Family Office Wealth Engineer. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </footer>

      <FloatingActionButton />

      <style>{`
        html { scroll-behavior: smooth; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
