import React from 'react';
import { motion } from 'motion/react';

export const ScrollIndicator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex items-center space-x-6 px-10 pb-12"
    >
      <div className="relative w-7 h-20 border border-white/20 rounded-full flex justify-center py-2">
        <motion.div 
          className="w-1.5 h-1.5 bg-white rounded-full"
          animate={{ y: [0, 50, 0], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute -bottom-4 text-[#9d4edd] text-[10px]">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
        Scroll Down
      </span>
    </motion.div>
  );
};
