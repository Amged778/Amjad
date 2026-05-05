import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#05020a] flex flex-col items-center justify-center overflow-hidden" id="contact">
      
      {/* Background Motion Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-gradient-to-tr from-[#7209b7]/10 via-[#9d4edd]/5 to-[#48cae4]/10 filter blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#48cae4]/5 filter blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        
        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-display font-medium text-white tracking-tighter leading-[1.1] mb-6"
        >
          Let’s create something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48cae4] to-[#9d4edd] italic font-semibold">unforgettable.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-400 mb-12 sm:mb-16"
        >
          Got an idea? Let’s turn it into an experience.
        </motion.p>

        {/* CTA Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <a href="mailto:amgedalhade3@gmail.com" className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-[#9d4edd]/50 hover:shadow-[0_0_40px_rgba(157,78,221,0.2)]">
             <span className="relative z-10 text-sm font-semibold tracking-widest text-white flex items-center gap-3">
               START A PROJECT
               <span className="w-2 h-2 rounded-full bg-[#48cae4] group-hover:bg-[#9d4edd] transition-colors duration-300 shadow-[0_0_10px_currentColor]" />
             </span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>
        </motion.div>
        
        {/* Email Contact Directly Visible */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
           className="mt-16 flex flex-col items-center gap-6"
        >
           <a href="mailto:amgedalhade3@gmail.com" className="text-lg md:text-xl font-mono text-gray-400 hover:text-white transition-colors duration-300">
             amgedalhade3@gmail.com
           </a>
           
           <a href="https://wa.me/201212764668" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-mono text-gray-400 hover:text-[#48cae4] transition-colors duration-300">
             +20 121 276 4668
           </a>
           
           {/* Socials */}
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-xs font-semibold tracking-widest text-gray-600 mt-4">
              <a href="https://www.behance.net/zoolhade/editor" target="_blank" rel="noopener noreferrer" className="hover:text-[#9d4edd] transition-colors duration-300">BEHANCE</a>
              <a href="https://www.instagram.com/mejo_i_creative/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9d4edd] transition-colors duration-300">INSTAGRAM</a>
              <a href="https://www.facebook.com/profile.php?id=61575485084772" target="_blank" rel="noopener noreferrer" className="hover:text-[#9d4edd] transition-colors duration-300">FACEBOOK</a>
              <a href="https://wa.me/201212764668" target="_blank" rel="noopener noreferrer" className="hover:text-[#48cae4] transition-colors duration-300">WHATSAPP</a>
              <a href="https://www.linkedin.com/in/amjad-elhadi-3058a9407" target="_blank" rel="noopener noreferrer" className="hover:text-[#9d4edd] transition-colors duration-300">LINKEDIN</a>
           </div>
        </motion.div>

      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
         <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-700 uppercase">
           © {new Date().getFullYear()} AMJAD. ALL RIGHTS RESERVED.
         </p>
      </div>
    </section>
  );
};
