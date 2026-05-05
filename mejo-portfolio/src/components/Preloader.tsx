import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. assets, fonts, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#05020a]"
        >
          {/* Logo or loading text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="mb-2">
              <img 
                src="https://res.cloudinary.com/da6bl2ofx/image/upload/v1777938494/ChatGPT_Image_May_5_2026_02_48_00_AM_jbyinp.png" 
                alt="Amjad Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* Loading Bar */}
            <div className="w-32 h-[2px] bg-white/20 mt-4 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="w-full h-full bg-[#9d4edd] absolute top-0 left-0"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
              className="text-[9px] font-mono tracking-widest text-[#9d4edd] uppercase mt-4"
            >
              Loading Experience
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
