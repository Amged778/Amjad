import React from 'react';
import { motion } from 'motion/react';

export const LocationWidget = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="absolute bottom-12 right-24 z-40 hidden md:block w-48 p-4 rounded-xl border border-white/5 bg-black/20 backdrop-blur-md"
    >
      <div className="text-[9px] font-bold tracking-widest text-gray-400 mb-1">
        BASED IN
      </div>
      <div className="text-xs font-semibold tracking-widest text-white flex items-center">
        ANOTHER <span className="w-1.5 h-1.5 bg-[#9d4edd] rounded-full mx-2" />
      </div>
      <div className="text-[#9d4edd] text-xs font-semibold tracking-widest">
        DIMENSION
      </div>
      
      {/* Tiny Map Pattern */}
      <div className="mt-4 grid grid-cols-[repeat(15,1fr)] gap-[1px] opacity-30">
        {Array.from({ length: 45 }).map((_, i) => (
          <div key={i} className={`h-[2px] w-[2px] ${Math.random() > 0.4 ? 'bg-white' : 'bg-transparent'}`} />
        ))}
      </div>
    </motion.div>
  );
};
