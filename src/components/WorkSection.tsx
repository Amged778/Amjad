import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { projects } from '../data/projects.ts';

export const WorkSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate zigzag scrolling layout
  const numCols = Math.ceil(projects.length / 2);
  const row1Items = numCols;
  const row2Items = projects.length - numCols;
  const hasRow2 = row2Items > 0;
  
  const horizontalSteps1 = Math.max(0, row1Items - 1);
  const verticalSteps = hasRow2 ? 1 : 0;
  const horizontalSteps2 = hasRow2 ? Math.max(0, row2Items - 1) : 0;
  const totalSteps = horizontalSteps1 + verticalSteps + horizontalSteps2;
  
  const p1 = totalSteps === 0 ? 0 : horizontalSteps1 / totalSteps;
  const p2 = totalSteps === 0 ? 0 : (horizontalSteps1 + verticalSteps) / totalSteps;
  
  const xOutput = hasRow2 
    ? ["0vw", `-${horizontalSteps1 * 100}vw`, `-${horizontalSteps1 * 100}vw`, `-${(horizontalSteps1 - horizontalSteps2) * 100}vw`]
    : ["0vw", `-${horizontalSteps1 * 100}vw`, `-${horizontalSteps1 * 100}vw`, `-${horizontalSteps1 * 100}vw`];

  const yOutput = hasRow2
    ? ["0vh", "0vh", "-100vh", "-100vh"]
    : ["0vh", "0vh", "0vh", "0vh"];

  const x = useTransform(scrollYProgress, [0, p1, p2, 1], xOutput);
  const y = useTransform(scrollYProgress, [0, p1, p2, 1], yOutput);

  // Split into rows and arrange row2 for a continuous reverse track
  const row1 = projects.slice(0, numCols);
  const row2Base = projects.slice(numCols);
  const row2Reversed = [...row2Base].reverse();
  const padCount = numCols - row2Reversed.length;
  const row2Visual = [...Array(padCount).fill(null), ...row2Reversed];
  
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when project is active
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeProject]);

  const renderProjectCard = (project: typeof projects[0] | null, idx: number) => {
    if (!project) {
      return <div key={`empty-${idx}`} className="w-screen h-screen shrink-0 pointer-events-none" />;
    }
    return (
      <div key={project.id} className="w-screen h-screen flex items-center justify-center p-6 md:p-16 pt-32 pb-16 shrink-0">
         <motion.div 
            layoutId={`project-container-${project.id}`}
            onClick={() => setActiveProject(project)}
            className="relative w-full h-full max-h-[850px] overflow-hidden rounded-xl md:rounded-3xl cursor-pointer group transform-gpu"
            style={{ willChange: "transform" }}
         >
            <motion.div layoutId={`bg-${project.id}`} className="absolute inset-0 bg-black">
               <img 
                  src={project.image} 
                  alt={project.title} 
                  decoding="async"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-100 transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform" 
               />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#05020a]/90 via-[#05020a]/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-10 left-8 md:bottom-20 md:left-20 pointer-events-none z-10 pr-8">
               <motion.p 
                  layoutId={`cat-${project.id}`} 
                  className="text-xs md:text-sm font-mono tracking-[0.2em] mb-4 uppercase" 
                  style={{ color: project.color }}
               >
                 {project.category}
               </motion.p>
               <motion.h3 
                  layoutId={`title-${project.id}`} 
                  className="text-4xl sm:text-5xl md:text-[7vw] font-display font-bold text-white uppercase leading-[0.85] tracking-tight group-hover:translate-x-2 transition-transform duration-500 origin-bottom-left"
               >
                 {project.title}
               </motion.h3>
            </div>

            <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
               <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
            </div>

            <div className="absolute inset-0 pointer-events-none rounded-xl md:rounded-3xl border border-white/5" />
         </motion.div>
      </div>
    );
  };

  return (
    <>
      <div id="work" className="w-full h-[15vh] pointer-events-none" />
      <section ref={containerRef} className="relative w-full bg-transparent" style={{ height: `${(totalSteps + 1) * 100}vh` }}>
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-start justify-start bg-[#05020a]">
          
          {/* Section Header */}
          <div className="absolute top-10 left-10 md:left-20 z-50 pointer-events-none mix-blend-difference">
             <h2 className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-white/50 mb-2">SELECTED WORKS</h2>
             <div className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white opacity-80">
               MY LATEST WORK THIS MONTH
             </div>
          </div>

          {/* Slider Area mapping two rows into a 200vh flexcol container */}
          <motion.div 
             style={{ x, y, width: `${numCols * 100}vw` }} 
             className="flex flex-col h-[200vh] will-change-transform transform-gpu"
          >
            {/* Row 1 */}
            <div className="flex h-screen w-full shrink-0">
              {row1.map((p, i) => renderProjectCard(p, i))}
            </div>
            {/* Row 2 */}
            {hasRow2 && (
              <div className="flex h-screen w-full shrink-0">
                {row2Visual.map((p, i) => renderProjectCard(p, i + numCols))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Full Screen Interactive Portal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[200] bg-[#05020a] flex flex-col pt-safe overflow-hidden"
          >
             {/* Dynamic Ambient Background Glow */}
             <div 
               className="absolute top-0 left-0 w-full h-[50vh] filter blur-[150px] opacity-20 pointer-events-none"
               style={{ backgroundColor: activeProject.color }}
             />

             {/* Close Button */}
             <div className="absolute top-8 right-8 md:top-12 md:right-12 z-50">
               <button 
                  onClick={() => setActiveProject(null)} 
                  className="group flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
               >
                   <X className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-500" />
               </button>
             </div>

             <div className="w-full h-full overflow-y-auto" data-lenis-prevent="true">
               {/* Hero Banner inside Project View */}
               <motion.div layoutId={`project-container-${activeProject.id}`} className="relative w-full h-[70vh] md:h-[85vh] flex-shrink-0 origin-top">
                 <motion.div layoutId={`bg-${activeProject.id}`} className="absolute inset-0 bg-black">
                   <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover opacity-80" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#05020a] via-[#05020a]/40 to-transparent" />
                 </motion.div>
                 
                 <div className="absolute bottom-10 left-8 md:bottom-24 md:left-24 z-10 pr-8">
                    <motion.p 
                       layoutId={`cat-${activeProject.id}`} 
                       className="text-xs md:text-sm font-mono tracking-[0.2em] mb-6 uppercase" 
                       style={{ color: activeProject.color }}
                    >
                       {activeProject.category}
                    </motion.p>
                    <motion.h3 
                       layoutId={`title-${activeProject.id}`} 
                       className="text-4xl sm:text-5xl md:text-[8vw] font-display font-bold text-white uppercase leading-[0.85] tracking-tight origin-bottom-left"
                    >
                       {activeProject.title}
                    </motion.h3>
                 </div>
               </motion.div>

               {/* Extended Details Content */}
               <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="px-8 md:px-24 py-20 pb-40 flex flex-col items-start relative z-10"
               >
                  <div className="max-w-5xl">
                     <h4 className="text-3xl md:text-5xl text-gray-200 font-light leading-tight tracking-tight mb-12">
                       {activeProject.description}
                     </h4>
                     
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-400">
                        <div className="md:col-span-2 text-lg leading-relaxed space-y-6">
                           {(activeProject as any).content ? (
                             (activeProject as any).content.map((paragraph: string, idx: number) => (
                               <p key={idx}>{paragraph}</p>
                             ))
                           ) : (
                             <>
                               <p>
                                 Nulla facilisi. Praesent viverra vulputate velit. Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                               </p>
                               <p>
                                 Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                               </p>
                             </>
                           )}
                        </div>
                        
                        <div className="space-y-8 pl-0 md:pl-12 md:border-l border-white/10">
                           <div>
                              <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-2">Client</p>
                              <p className="text-white text-sm font-semibold tracking-wider uppercase">{activeProject.client}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-2">Role</p>
                              <p className="text-white text-sm font-semibold tracking-wider uppercase">{activeProject.role}</p>
                           </div>
                           <div>
                              <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-2">Year</p>
                              <p className="text-white text-sm font-semibold tracking-wider uppercase">{activeProject.year}</p>
                           </div>
                        </div>
                     </div>

                     {activeProject.gallery && activeProject.gallery.length > 0 && (
                        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                          {activeProject.gallery.map((imgUrl, i) => (
                             <div key={i} className={`w-full overflow-hidden rounded-xl ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
                                <img src={imgUrl} alt={`Gallery image ${i + 1}`} className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
                             </div>
                          ))}
                        </div>
                     )}
                     
                  </div>
               </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
