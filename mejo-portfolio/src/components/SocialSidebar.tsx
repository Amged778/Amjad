import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const SocialSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="pointer-events-auto absolute right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-8"
    >
      <div className="w-[1px] h-12 bg-white/10" />
      
      <a href="https://www.behance.net/zoolhade/editor" target="_blank" rel="noopener noreferrer" className="flex items-center group relative text-gray-400 hover:text-white transition-colors">
         <span className="text-xs font-semibold tracking-widest mr-2 group-hover:opacity-100 opacity-0 transition-opacity absolute right-6">Be</span>
         <div className="w-1.5 h-1.5 bg-[#9d4edd] rounded-full absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
         Be  {/* Using text "Be" for Behance as Lucide doesn't have it by default */}
      </a>
      
      <a href="https://www.facebook.com/profile.php?id=61575485084772" target="_blank" rel="noopener noreferrer" className="flex items-center group relative text-gray-400 hover:text-white transition-colors">
         <span className="text-xs font-semibold tracking-widest mr-2 group-hover:opacity-100 opacity-0 transition-opacity absolute right-6">Fb</span>
         <div className="w-1.5 h-1.5 bg-[#48cae4] rounded-full absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
         <Facebook className="w-4 h-4" />
      </a>
      
      <a href="https://www.linkedin.com/in/amjad-elhadi-3058a9407" target="_blank" rel="noopener noreferrer" className="flex items-center group relative text-gray-400 hover:text-white transition-colors">
         <span className="text-xs font-semibold tracking-widest mr-2 group-hover:opacity-100 opacity-0 transition-opacity absolute right-6">In</span>
         <div className="w-1.5 h-1.5 bg-[#9d4edd] rounded-full absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
         <Linkedin className="w-4 h-4" />
      </a>
      
      <a href="https://www.instagram.com/mejo_i_creative/" target="_blank" rel="noopener noreferrer" className="flex items-center group relative text-gray-400 hover:text-white transition-colors">
         <span className="text-xs font-semibold tracking-widest mr-2 group-hover:opacity-100 opacity-0 transition-opacity absolute right-6">Ig</span>
         <div className="w-1.5 h-1.5 bg-[#48cae4] rounded-full absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
         <Instagram className="w-4 h-4" />
      </a>

      <a href="https://wa.me/201212764668" target="_blank" rel="noopener noreferrer" className="flex items-center group relative text-gray-400 hover:text-white transition-colors font-mono font-medium">
         <span className="text-xs font-sans font-semibold tracking-widest mr-2 group-hover:opacity-100 opacity-0 transition-opacity absolute right-6">Wa</span>
         <div className="w-1.5 h-1.5 bg-[#9d4edd] rounded-full absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
         Wa
      </a>

      <div className="w-[1px] h-12 bg-gradient-to-b from-white/10 to-[#9d4edd]" />
      <div className="w-2 h-2 rotate-45 bg-[#9d4edd] shadow-[0_0_10px_#9d4edd]" />
    </motion.div>
  );
};
