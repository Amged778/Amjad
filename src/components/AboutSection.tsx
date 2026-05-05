import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a tall container to allow for scrolling through the screens
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring to smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate Opacity and Y transforms for 7 Screens evenly distributed
  const opacity1 = useTransform(smoothProgress, [0, 0.08, 0.13], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.13], [0, -50]);

  const opacity2 = useTransform(smoothProgress, [0.12, 0.16, 0.25, 0.28], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.12, 0.16, 0.28], [50, 0, -50]);

  const opacity3 = useTransform(smoothProgress, [0.28, 0.32, 0.39, 0.42], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.28, 0.32, 0.42], [50, 0, -50]);

  const opacity4 = useTransform(smoothProgress, [0.42, 0.46, 0.53, 0.57], [0, 1, 1, 0]);
  const y4 = useTransform(smoothProgress, [0.42, 0.46, 0.57], [50, 0, -50]);

  const opacity5 = useTransform(smoothProgress, [0.57, 0.61, 0.68, 0.71], [0, 1, 1, 0]);
  const y5 = useTransform(smoothProgress, [0.57, 0.61, 0.71], [50, 0, -50]);

  const opacity6 = useTransform(smoothProgress, [0.71, 0.75, 0.82, 0.85], [0, 1, 1, 0]);
  const y6 = useTransform(smoothProgress, [0.71, 0.75, 0.85], [50, 0, -50]);

  const opacity7 = useTransform(smoothProgress, [0.85, 0.89, 0.95, 1], [0, 1, 1, 0]);
  const y7 = useTransform(smoothProgress, [0.85, 0.89, 1], [50, 0, -50]);

  return (
    <section ref={containerRef} className="relative w-full h-[800vh] bg-[#05020a]" id="about">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.1]"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/da6bl2ofx/image/upload/v1777862834/%D8%A7%D8%AC%D8%B9%D9%84%D9%87%D8%A7_%D8%A7%D8%A8%D9%8A%D8%B6_%D9%88%D8%A7%D8%B3%D9%88%D8%AF_%D9%85%D8%A7_%D8%B9%D8%AF%D8%A7_202605040547_dtz0ua.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[800px] h-[800px] bg-gradient-to-b from-[#9d4edd]/5 to-transparent rounded-full blur-[120px] opacity-70" />
        </div>

        {/* Ambient Moving Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: ['100vh', '-100vh'], opacity: [0, 0.5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute left-[15%] w-[1px] h-[40vh] bg-gradient-to-t from-transparent via-[#9d4edd]/20 to-transparent"
          />
          <motion.div 
            animate={{ y: ['100vh', '-100vh'], opacity: [0, 0.4, 0] }}
            transition={{ duration: 20, repeat: Infinity, delay: 5, ease: "linear" }}
            className="absolute right-[20%] w-[1px] h-[30vh] bg-gradient-to-t from-transparent via-[#48cae4]/20 to-transparent"
          />
          <motion.div 
            animate={{ y: ['100vh', '-100vh'], opacity: [0, 0.3, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 9, ease: "linear" }}
            className="absolute left-[50%] w-[2px] h-[15vh] bg-gradient-to-t from-transparent via-white/10 to-transparent"
          />
        </div>

        {/* Screen 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-sans font-light text-gray-400 tracking-tight leading-[1.1] text-center max-w-5xl mx-auto">
            Most designers <br className="md:hidden" />
            <span className="text-white italic">follow trends.</span>
          </h2>
        </motion.div>

        {/* Screen 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-display font-bold text-white tracking-tighter leading-none text-center">
            I <span className="text-[#9d4edd]">DON’T.</span>
          </h2>
        </motion.div>

        {/* Screen 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none flex-col gap-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-sans font-light text-gray-400 tracking-tight text-center">
            I study them…
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium text-white tracking-tighter text-center">
            then <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#9d4edd] to-[#48cae4]">destroy them.</span>
          </h2>
        </motion.div>

        {/* Screen 4 */}
        <motion.div 
          style={{ opacity: opacity4, y: y4 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-bold text-gray-300 tracking-tight leading-[1.3] text-center" dir="rtl">
            أنا ما بصمم علشان <span className="italic font-light text-gray-500">يعجبك.</span>
          </h2>
        </motion.div>

        {/* Screen 5 */}
        <motion.div 
          style={{ opacity: opacity5, y: y5 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white tracking-tighter leading-[1.3] text-center" dir="rtl">
            أنا بصمم علشان <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48cae4] to-[#9d4edd]">تحس.</span>
          </h2>
        </motion.div>

        {/* Screen 6 */}
        <motion.div 
          style={{ opacity: opacity6, y: y6 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-sans font-light text-gray-400 tracking-tight leading-[1.1] text-center max-w-5xl mx-auto">
            Because design isn’t what you <span className="text-white">see.</span>
          </h2>
        </motion.div>

        {/* Screen 7 */}
        <motion.div 
          style={{ opacity: opacity7, y: y7 }}
          className="absolute w-full px-6 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#48cae4] to-[#9d4edd] tracking-tighter leading-[1.1] text-center max-w-6xl mx-auto italic">
            It’s what stays with you <br/> after you leave.
          </h2>
        </motion.div>

      </div>
    </section>
  );
};
