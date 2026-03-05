import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../constants';

const ScrollingAlbum: React.FC = () => {
  const storyNames = Array.from({ length: 30 }, (_, i) => `story-${i + 1}`);
  
  const images = storyNames.map(name => ({
    src: ASSETS.STORY_IMAGE(name),
    name: name.replace('story-', 'Story ')
  }));

  const itemWidth = 384; // md:w-96
  const totalWidth = images.length * itemWidth;

  return (
    <section className="py-12 bg-midnight overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -totalWidth] }}
          transition={{
            duration: images.length * 3, // Adjust speed based on number of images
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
                  const currentSrc = target.src;
                  
                  // Extract the base URL without the extension and cache buster
                  // e.g., .../story-1.png?v=123 -> .../story-1
                  const baseUrl = currentSrc.split('?')[0].replace(/\.(png|jpg|jpeg)$/, '');
                  const cacheBuster = currentSrc.includes('?') ? '?' + currentSrc.split('?')[1] : '';

                  if (currentSrc.includes('.png')) {
                    target.src = `${baseUrl}.jpg${cacheBuster}`;
                  } else if (currentSrc.includes('.jpg') && !currentSrc.includes('.jpeg')) {
                    target.src = `${baseUrl}.jpeg${cacheBuster}`;
                  } else {
                    // If all formats fail, show placeholder
                    target.src = `https://placehold.co/800x600/1a1a1a/D4AF37?text=${item.name}+Unavailable`;
                  }
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
