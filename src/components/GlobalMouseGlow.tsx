import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const GlobalMouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  
  const springConfigGlow = { damping: 40, stiffness: 100, mass: 1 };
  const springConfigCursorText = { damping: 25, stiffness: 300, mass: 0.5 };
  
  const springX = useSpring(-100, springConfigGlow);
  const springY = useSpring(-100, springConfigGlow);
  const cursorX = useSpring(-100, springConfigCursorText);
  const cursorY = useSpring(-100, springConfigCursorText);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition, springX, springY, cursorX, cursorY]);

  // Only show custom cursor on non-touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Background Glow */}
      <motion.div 
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen z-10 opacity-30"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(114, 9, 183, 0.15) 0%, rgba(72, 202, 228, 0.05) 40%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />
      
      {/* Inner Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      
      {/* Outer Ring */}
      <motion.div 
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/50 mix-blend-difference flex items-center justify-center overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={{ width: 32, height: 32 }}
        animate={{ 
          width: isHovering ? 64 : 32, 
          height: isHovering ? 64 : 32,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
          mixBlendMode: isHovering ? 'difference' : 'normal'
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] font-mono text-black font-bold tracking-widest whitespace-nowrap uppercase"
        >
          View
        </motion.span>
      </motion.div>
    </>
  );
};
