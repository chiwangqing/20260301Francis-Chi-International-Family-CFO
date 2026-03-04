import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../constants';

const ScrollingAlbum: React.FC = () => {
  const storyNames = [
    'story-1', 'story-2', 'story-3', 'story-4', 'story-5', 'story-6', 'story-7', 'story-8', 
    'story-10', 'story-11', 'story-12', 'story-15', 'story-17', 
    'story-19', 'story-20', 'story-21', 'story-22', 'story-23', 
    'story-24', 'story-25'
  ];
  
  const images = storyNames.map(name => ({
    src: ASSETS.STORY_IMAGE(name),
    name: name.replace('story-', 'Story ')
  }));

  return (
    <section className="py-12 bg-midnight overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -5000] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-4 px-4"
        >
          {images.concat(images).map((item, index) => (
            <div
              key={index}
              className="w-80 h-48 md:w-96 md:h-60 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-midnight/50 relative group"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/800x600/1a1a1a/D4AF37?text=${item.name}+Unavailable`;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                 <span className="text-gold/40 text-sm font-serif">{item.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingAlbum;
