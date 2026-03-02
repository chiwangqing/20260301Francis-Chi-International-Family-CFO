import React from 'react';
import { motion } from 'motion/react';
import { ASSETS } from '../../constants';

const WorkScenes: React.FC = () => {
  const scene1 = `${ASSETS.WORKING_SCENE(1)}`;
  const scene2 = `${ASSETS.WORKING_SCENE(2)}`;
  const scene3 = `${ASSETS.WORKING_SCENE(3)}`;
  
  const scenes = [scene1, scene2, scene3];

  console.log('--- Working Scenario Debug ---');
  console.log('Scene 1 URL:', scene1);
  console.log('Scene 2 URL:', scene2);
  console.log('Scene 3 URL:', scene3);
  console.log('------------------------------');

  return (
    <div className="py-12 px-6">
      <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-8">
        {scenes.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.02 }}
            className="w-full md:w-[30%] aspect-[4/3] rounded-3xl overflow-hidden border border-gold/20 shadow-2xl relative group bg-midnight/50"
          >
            <img
              src={src}
              alt={`Work Scene ${index + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/800x600/1a1a1a/D4AF37?text=Scene+${index + 1}+Unavailable`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="text-gold/10 text-4xl font-serif">Working Scenario {index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkScenes;
