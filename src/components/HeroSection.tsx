import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ScrollIndicator } from './ScrollIndicator';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const characterY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const characterOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative w-full min-h-[100dvh] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start px-4 sm:px-10 md:px-20 pt-[8vh] md:pt-[18vh] overflow-hidden pb-8 md:pb-0">
      
      {/* Background massive AMJAD for depth */}
      <motion.div 
        className="absolute top-[40%] -translate-y-1/2 left-0 w-full text-center font-display font-black text-[30vw] leading-none opacity-[0.03] select-none pointer-events-none"
        style={{ letterSpacing: '-0.05em', y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
      >
        AMJAD
      </motion.div>

      <motion.div 
        className="relative max-w-4xl z-20 pointer-events-auto order-2 md:order-1 w-full text-center md:text-left flex flex-col items-center md:items-start -mt-4 sm:-mt-8 md:mt-0"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-300 md:mb-2 md:ml-1">
            HELLO, <span className="text-[#9d4edd]">I'M</span>
          </p>

          <h1 
            className="font-display text-[22vw] sm:text-[15vw] md:text-[150px] lg:text-[180px] leading-[0.8] tracking-[-0.04em] text-texture pb-2 sm:pb-4 mt-2"
          >
            AMJAD
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 sm:mt-6 flex flex-wrap justify-center md:justify-start items-center gap-3 text-[10px] md:text-sm font-medium tracking-widest text-gray-400 uppercase relative z-20 md:ml-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9d4edd] shadow-[0_0_10px_#9d4edd]" />
          <span>Graphic Designer</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-xl relative z-20 text-center md:text-left md:ml-2"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-gray-200 leading-snug lg:leading-tight">
            I DESIGN VISUALS THAT <br className="hidden sm:block"/>
            FEEL ALIVE AND LEAVE <span className="text-[#9d4edd] font-medium tracking-normal text-texture inline-block mt-2 sm:mt-0">IMPACT.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-12 md:ml-2"
        >
          <a href="#work" className="inline-block group relative px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:border-[#9d4edd]/50 hover:bg-[#9d4edd]/10 overflow-hidden transition-all duration-500">
            <span className="relative text-[10px] md:text-xs font-semibold tracking-widest text-white flex items-center gap-3 md:gap-4">
              EXPLORE MY WORK
              <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Character Image */}
      <motion.div 
        className="relative md:absolute bottom-0 md:-right-10 md:right-[5%] lg:right-[10%] w-[100%] sm:w-[80%] md:w-[70vw] lg:w-[60vw] max-w-[850px] z-10 pointer-events-none origin-bottom order-1 md:order-2 self-center md:self-auto h-[45vh] sm:h-[50vh] md:h-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        style={{ y: characterY, opacity: characterOpacity }}
      >
        <motion.div 
          className="relative w-full h-full flex flex-col items-center justify-end"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="https://res.cloudinary.com/da6bl2ofx/image/upload/v1777937211/character_bbwshh.png" 
            alt="Amjad Character" 
            className="w-full h-full object-contain object-bottom mix-blend-normal relative z-10"
            style={{
               WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
               maskImage: 'linear-gradient(to top, transparent 0%, black 15%)'
            }}
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <ScrollIndicator />
      </div>
    </section>
  );
};
