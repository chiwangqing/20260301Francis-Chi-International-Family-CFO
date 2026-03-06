import React, { useState, useEffect } from 'react';
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
import ScrollingAlbum from './components/sections/ScrollingAlbum';
import CoreValues from './components/sections/CoreValues';
import QualificationsBar from './components/sections/QualificationsBar';
import FloatingActionButton from './components/ui/FloatingActionButton';
import WealthDiagnosis from './components/sections/WealthDiagnosis';
import { Language } from './translations';

const AppContent: React.FC = () => {
  const { lang, t } = useLanguage();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    why: false,
    pillars: false,
    offers: false
  });
  const [expandedDiagnosis, setExpandedDiagnosis] = useState<number | null>(null);
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  const toggleSection = (section: string) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    if (t.seo) {
      document.title = t.seo.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', t.seo.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = t.seo.description;
        document.head.appendChild(meta);
      }
    }
  }, [lang, t.seo]);

  return (
    <div className="min-h-screen bg-midnight selection:bg-gold selection:text-midnight overflow-x-hidden">
      <Header onOpenDiagnosis={() => setShowDiagnosis(true)} />

      <main className="pt-20">
        <Hero onOpenDiagnosis={() => setShowDiagnosis(true)} />

        <QualificationsBar />

        {/* 5. Service Pillars (Section B) */}
        <section id="pillars" className="py-16 px-6 bg-midnight/80">
          <div className="max-w-screen-2xl mx-auto">
            <div 
              className="flex flex-col items-center justify-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-center text-gold-light uppercase tracking-[0.2em]">{t.pillars.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {t.pillars.items.map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-[3rem] p-10 md:p-16 flex flex-col items-center text-center group border border-white/5 hover:border-gold/30 transition-all"
                >
                  <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                  
                  {/* Pillar Title - 300% relative to base or just very large */}
                  <h3 className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4 tracking-tighter">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gold/60 text-lg md:text-xl font-medium mb-12 uppercase tracking-widest">
                    {pillar.desc}
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-12" />

                  {/* 6 Products List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
                    {(pillar as any).products?.map((product: string, j: number) => (
                      <div key={j} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/40 group-hover/item:bg-gold transition-colors shrink-0" />
                        <span className="text-soft-white/70 text-sm md:text-base group-hover/item:text-soft-white transition-colors">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ScrollingAlbum />

        <BrandStory />

        <CoreValues />

        {/* 3. The 'Why' Section */}
        <section id="why" className="py-16 px-6 bg-midnight/50">
          <div className="max-w-screen-2xl mx-auto">
            <div 
              className="flex flex-col items-center justify-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-center leading-tight text-soft-white">
                {t.why.title}
              </h2>
            </div>
            
            <div className="overflow-hidden">
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
            </div>
          </div>
        </section>

        {/* 4. 3D Diagnosis (Section A) */}
        <section id="diagnosis" className="py-16 px-6 relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">{t.diagnosis.title}</h2>
            <p className="text-soft-white/60 text-center max-w-2xl mb-16 leading-relaxed">
              {t.diagnosis.intro}
            </p>
            
            <div className="grid grid-cols-1 gap-12 items-center w-full max-w-4xl">
              {/* Interactive 3D Pyramid removed to save space */}
              
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
                
                <button 
                  onClick={() => setShowDiagnosis(true)}
                  className="w-full gold-gradient text-midnight font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all mt-8"
                >
                  <Stethoscope className="w-5 h-5" />
                  {t.diagnosis.btn}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Special Offers (Section C) */}
        <section id="top3" className="py-16 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div 
              className="flex flex-col items-center justify-center mb-16"
            >
              <h2 className="text-3xl font-serif text-center text-soft-white">{t.offers.title}</h2>
            </div>
            
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                {t.offers.items.map((offer, i) => {
                  const images = [
                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
                  ];
                  return (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="glass rounded-[2.5rem] p-0 border-white/5 hover:border-gold/30 transition-all group relative overflow-hidden flex flex-col h-full"
                    >
                      {/* Artistic Number */}
                      <div className="absolute top-2 left-4 text-8xl font-serif font-black text-gold/20 select-none z-0">
                        {i + 1}
                      </div>

                      {/* Image Header */}
                      <div className="h-48 w-full overflow-hidden relative z-10">
                        <img 
                          src={images[i]} 
                          alt={offer.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                      </div>

                      <div className="p-8 pt-4 relative z-10 flex-1 flex flex-col">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-gold-light leading-tight">
                          {offer.title}
                        </h3>
                        <p className="text-soft-white/70 text-base leading-relaxed mb-8 flex-1">
                          {offer.desc}
                        </p>
                        <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest mt-auto group-hover:gap-4 transition-all">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 7. VIP 8 Major Privileges (Section D) */}
        <section id="vip" className="py-16 px-6 bg-gradient-to-b from-midnight to-black relative z-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-gold-light mb-4">{t.pricing.title}</h2>
              <p className="text-soft-white/60 text-lg max-w-2xl mx-auto">{t.pricing.intro}</p>
            </div>

            <div className="space-y-8 mb-20">
              {t.pricing.privileges.map((privilege, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 hover:border-gold/30 transition-all overflow-hidden flex flex-col md:flex-row gap-8 items-center relative">
                    {/* Index Number - Left */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-8xl md:text-9xl font-black text-white/10 select-none font-serif z-0">
                      {i + 1}
                    </div>

                    {/* Background Accent */}
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all" />
                    
                    {/* Icon/Number */}
                    <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-5xl md:text-6xl shadow-inner relative z-10">
                      {privilege.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left relative z-10">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gold">{privilege.title}</h3>
                        <span className="text-gold/60 text-sm md:text-base font-medium font-serif italic">{privilege.value}</span>
                      </div>
                      <p className="text-soft-white/80 text-lg md:text-xl leading-relaxed">
                        {privilege.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 border border-gold/20 shadow-2xl relative overflow-hidden text-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
              
              <div className="mb-10">
                <span className="text-soft-white/40 text-sm uppercase tracking-[0.3em] block mb-4">{t.pricing.original}</span>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-5xl md:text-7xl font-bold text-gold">{t.pricing.current}</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowDiagnosis(true)}
                className="w-full max-w-md mx-auto gold-gradient text-midnight font-bold py-6 rounded-2xl shadow-2xl shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all text-xl flex items-center justify-center gap-3 mb-8"
              >
                <MessageCircle className="w-7 h-7" />
                {t.pricing.cta}
              </button>
              
              <p className="text-soft-white/40 text-xs uppercase tracking-[0.2em] mb-12">
                Limited to 5 families per month • Bespoke SLA Service
              </p>

              {/* Social Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
                <button className="flex items-center justify-center gap-3 py-5 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all font-bold text-lg">
                  <MessageCircle className="w-6 h-6" />
                  WeChat: 75108282
                </button>
                <button className="flex items-center justify-center gap-3 py-5 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20 transition-all font-bold text-lg">
                  <PhoneCall className="w-6 h-6" />
                  WhatsApp: 62644926
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-soft-white/40 text-xs">
        <p>{t.footer.copy}</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-gold transition-colors">{t.footer.privacy}</a>
          <a href="#" className="hover:text-gold transition-colors">{t.footer.terms}</a>
        </div>
      </footer>

      <FloatingActionButton onOpenDiagnosis={() => setShowDiagnosis(true)} />

      <AnimatePresence>
        {showDiagnosis && (
          <WealthDiagnosis onClose={() => setShowDiagnosis(false)} />
        )}
      </AnimatePresence>

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
