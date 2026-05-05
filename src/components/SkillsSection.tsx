import React from 'react';
import { motion } from 'motion/react';

const capabilities = [
  {
    id: "01",
    title: "Brand Identity",
    desc: "I don’t just design logos.\nI build visual systems that people recognize instantly.",
    bgWord: "BRAND",
    color: "#9d4edd"
  },
  {
    id: "02",
    title: "Posters & Visual Campaigns",
    desc: "I turn ideas into visuals that stop people mid-scroll.",
    bgWord: "POSTER",
    color: "#48cae4"
  },
  {
    id: "03",
    title: "Creative Direction",
    desc: "I don’t just execute.\nI decide how everything should feel.",
    bgWord: "DIRECT",
    color: "#7209b7"
  },
  {
    id: "04",
    title: "Motion & Interaction",
    desc: "Design is not static.\nI bring it to life.",
    bgWord: "MOTION",
    color: "#00b4d8"
  }
];

export const SkillsSection = () => {
  return (
    <section className="relative w-full z-10 py-32 px-6 md:px-20 bg-[#05020a]" id="capabilities">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
        {capabilities.map((cap, index) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full group cursor-default"
          >
            {/* Huge Faded Background Word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-screen opacity-5 md:opacity-10 transition-opacity duration-700 group-hover:opacity-20">
              <h2 className="text-[25vw] sm:text-[12rem] md:text-[20rem] font-display font-black text-white whitespace-nowrap tracking-tighter w-full text-center">
                {cap.bgWord}
              </h2>
            </div>
            
            {/* Interactive Block Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-20 py-10 md:py-24 border-b border-white/5 transition-colors duration-500 hover:border-white/20">
              
              {/* Title Section */}
              <div className="flex flex-col gap-2 md:gap-4">
                <span className="text-white/30 font-mono text-xs sm:text-sm tracking-widest">{cap.id} //</span>
                <motion.h3 
                  className="text-3xl sm:text-4xl md:text-7xl font-display font-medium text-white tracking-tight"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="relative inline-block">
                    {cap.title}
                    {/* Subtle underline glow on hover */}
                    <span 
                      className="absolute -bottom-2 left-0 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-full opacity-60 filter blur-[2px]"
                      style={{ backgroundColor: cap.color }}
                    />
                  </span>
                </motion.h3>
              </div>

              {/* Description Section */}
              <div className="md:max-w-md text-lg sm:text-xl md:text-2xl font-light text-gray-400 leading-relaxed whitespace-pre-line group-hover:text-gray-200 transition-colors duration-500">
                {cap.desc}
              </div>

              {/* Ambient Glow tied to Accent Color */}
              <div 
                className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[30vh] h-[30vh] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: cap.color }}
              />

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
