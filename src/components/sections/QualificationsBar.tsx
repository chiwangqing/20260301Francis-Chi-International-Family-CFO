import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const QualificationsBar: React.FC = () => {
  const { t } = useLanguage();
  const items = t.qualifications || [];
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // Calculate width of one set of items
      const firstSet = containerRef.current.children[0] as HTMLElement;
      if (firstSet) {
        setContentWidth(firstSet.offsetWidth);
      }
    }
  }, [items, t]);

  // Triple the items to ensure enough coverage for any screen width
  const displayItems = [...items, ...items, ...items];

  return (
    <section className="py-8 overflow-hidden bg-midnight/30 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-6 mb-4">
        <div className="flex items-center gap-2 text-gold/60 text-[10px] uppercase tracking-[0.3em] font-bold">
          <div className="w-8 h-px bg-gold/30" />
          {t.qualificationsLabel}
        </div>
      </div>
      
      <div className="relative flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
        <motion.div
          ref={containerRef}
          animate={{
            x: contentWidth ? [0, -contentWidth] : 0,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-6 px-6"
        >
          {/* First Set */}
          <div className="flex gap-6 shrink-0">
            {items.map((item, i) => (
              <div
                key={`set1-${i}`}
                className="glass px-6 py-3 rounded-2xl flex items-center gap-3 shrink-0 shadow-xl shadow-gold/5 border-white/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs md:text-sm font-bold tracking-wider text-soft-white/90">
                  {item}
                </span>
              </div>
            ))}
          </div>
          
          {/* Second Set (for seamless loop) */}
          <div className="flex gap-6 shrink-0">
            {items.map((item, i) => (
              <div
                key={`set2-${i}`}
                className="glass px-6 py-3 rounded-2xl flex items-center gap-3 shrink-0 shadow-xl shadow-gold/5 border-white/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs md:text-sm font-bold tracking-wider text-soft-white/90">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Third Set (for extra coverage) */}
          <div className="flex gap-6 shrink-0">
            {items.map((item, i) => (
              <div
                key={`set3-${i}`}
                className="glass px-6 py-3 rounded-2xl flex items-center gap-3 shrink-0 shadow-xl shadow-gold/5 border-white/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-xs md:text-sm font-bold tracking-wider text-soft-white/90">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualificationsBar;
