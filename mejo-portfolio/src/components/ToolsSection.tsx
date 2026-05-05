import React from 'react';
import { motion } from 'motion/react';

const tools = [
  "Photoshop",
  "Illustrator",
  "InDesign"
];

export const ToolsSection = () => {
  return (
    <section className="relative w-full z-10 py-24 px-6 md:px-20 bg-[#05020a] overflow-hidden" id="tools">
      {/* Immersive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen opacity-[0.03] select-none">
        <h2 className="text-[25vw] md:text-[30vw] font-display font-black text-white whitespace-nowrap tracking-tighter">
          TOOLS
        </h2>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white/40 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-12 sm:mb-16 text-center"
        >
          Crafted using
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 md:gap-32 w-full">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0px 0px 20px rgba(157, 78, 221, 0.5)" 
              }}
              className="group cursor-default relative"
            >
              <h3 className="text-3xl md:text-5xl font-display font-light text-gray-300 transition-colors duration-500 group-hover:text-white tracking-tight">
                {tool}
              </h3>
              {/* Subtle accent glow bubble behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-[#9d4edd] opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
