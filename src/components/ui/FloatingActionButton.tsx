import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, PhoneCall, QrCode } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FloatingActionButton: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const [showWhatsAppQR, setShowWhatsAppQR] = useState(false);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* FAB Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full gold-gradient shadow-[0_10px_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-midnight group"
        id="fab-book"
      >
        <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-12 right-0 bg-gold text-midnight text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          {t.nav.book}
        </span>
      </motion.button>

      {/* Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-28 right-8 z-[80] w-[320px] glass rounded-[2.5rem] border-gold/30 p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-serif text-gold mb-1">{t.nav.book}</h3>
                  <p className="text-soft-white/40 text-[10px] uppercase tracking-widest font-bold">Connect with Francis</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 text-soft-white/40 hover:text-gold transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* WeChat Option */}
                <div className="relative">
                  <button 
                    onClick={() => setShowWeChatQR(!showWeChatQR)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-bold ${
                      showWeChatQR 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${showWeChatQR ? 'bg-white/20' : 'bg-emerald-500/20'}`}>
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm">WeChat</div>
                      <div className="text-[10px] opacity-60 font-medium">
                        {showWeChatQR ? 'Click to Hide' : 'Click to Show QR'}
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {showWeChatQR && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white p-4 rounded-2xl shadow-inner mt-2 flex flex-col items-center gap-2">
                          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                            <img 
                              src="./assets/Francis%20Wechat.jpg" 
                              alt="WeChat QR" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <p className="text-[10px] text-midnight/60 font-bold text-center px-2">
                            长按识别，即刻启动您的全球财富秩序设计
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* WhatsApp Option */}
                <div className="relative">
                  <button 
                    onClick={() => setShowWhatsAppQR(!showWhatsAppQR)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-bold ${
                      showWhatsAppQR 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-blue-500/10 border border-emerald-500/20 text-blue-500 hover:bg-blue-500/20'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${showWhatsAppQR ? 'bg-white/20' : 'bg-blue-500/20'}`}>
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm">WhatsApp</div>
                      <div className="text-[10px] opacity-60 font-medium">
                        {showWhatsAppQR ? 'Click to Hide' : 'Click to Show QR'}
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {showWhatsAppQR && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white p-4 rounded-2xl shadow-inner mt-2 flex flex-col items-center gap-2">
                          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                            <img 
                              src="./assets/Francis%20Whatsapp.jpg" 
                              alt="WhatsApp QR" 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <p className="text-[10px] text-midnight/60 font-bold text-center px-2">
                            长按识别，即刻启动您的全球财富秩序设计
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button 
                    onClick={scrollToPricing}
                    className="w-full py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60 hover:text-gold hover:bg-gold/5 transition-all"
                  >
                    View Service Details
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActionButton;
