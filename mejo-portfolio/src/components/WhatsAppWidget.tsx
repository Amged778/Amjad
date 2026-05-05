import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget = () => {
  return (
    <motion.a
      href="https://wa.me/201234567890" 
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-[150] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow pointer-events-auto cursor-pointer"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={28} className="text-white fill-current" />
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
    </motion.a>
  );
};
