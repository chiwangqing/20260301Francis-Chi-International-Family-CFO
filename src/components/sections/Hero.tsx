import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC<{ onOpenDiagnosis: () => void }> = ({ onOpenDiagnosis }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      {/* Background Layers */}
      <div 
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8 tracking-tight">
          <span className="bg-gradient-to-b from-gold-light via-gold to-gold bg-clip-text text-transparent">
            用芯片級的精密度，
          </span>
          <br />
          <span className="text-white">
            為您構筑跨越週期的家族基業。
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-light">
          我是池望青（Francis）。從 <span className="text-gold font-medium">Intel 晶圓預處理工程師</span> 到管理規模超 <span className="text-gold font-medium">10 億美金</span> 的家族 CFO。拥有 10 年+ 跨境金融经验，持 CFA、RFP 及 香港保监局核心牌照。我不推销单一产品，我为您的家族资产编写最坚固的「底层安全代码」。
        </p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {[
            "前 Intel 資深工程師",
            "CFA 協會會員 / RFP",
            "香港保監局 IA 持牌人",
            "胤源集團高級總監"
          ].map((badge, i) => (
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
            <span className="relative z-10">👉 領取 1680 元 VIP 專屬 3D 財富問診</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
          
          <p className="text-gold/60 text-xs md:text-sm font-medium uppercase tracking-[0.2em] animate-pulse">
            每月僅限 5 位高淨值家族，打造專屬 SLA 服務協議。
          </p>
        </div>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gold/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;
