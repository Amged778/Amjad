import React from 'react';
import { motion } from 'motion/react';

export const Navigation = () => {
  return (
    <nav className="pointer-events-auto absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-8 mix-blend-difference sm:mix-blend-normal">
      {/* Logo A. */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center"
      >
        <img 
          src="https://res.cloudinary.com/da6bl2ofx/image/upload/v1777938494/ChatGPT_Image_May_5_2026_02_48_00_AM_jbyinp.png" 
          alt="Amjad Logo" 
          className="h-10 w-auto object-contain"
        />
      </motion.div>

      {/* Nav Links */}
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex items-center space-x-12 text-xs font-semibold tracking-[0.15em] text-gray-300"
      >
        <li className="relative text-white cursor-pointer group hover:text-white transition-colors duration-300">
          <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9d4edd] opacity-100" />
          <a href="#home">HOME</a>
        </li>
        <li className="cursor-pointer hover:text-white transition-colors duration-300"><a href="#work">WORK</a></li>
        <li className="cursor-pointer hover:text-white transition-colors duration-300"><a href="#about">ABOUT</a></li>
        <li className="cursor-pointer hover:text-white transition-colors duration-300"><a href="#contact">CONTACT</a></li>
      </motion.ul>

      {/* Let's Talk Button */}
      <motion.a 
        href="#contact"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-semibold tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group mix-blend-difference"
      >
        <span className="relative z-10 flex items-center gap-2">
          LET'S TALK
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </motion.a>
    </nav>
  );
};
