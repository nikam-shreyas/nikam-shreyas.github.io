import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { ThreeDIcon } from './ThreeDIcon';

export const Education: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    // Configuration
    const spacing = 30;         // Space between dots
    const baseRadius = 1.2;     // Normal size of dots
    const maxRadius = 4.0;      // Size of dots under the mouse
    const influenceRadius = 250; // Size of the diamond shape (Manhattan distance)
    const dotColor = '#333333'; // Dark grey for normal dots

    const resize = () => {
      // Ensure canvas matches the section size exactly
      const rect = section.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Iterate over the grid
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          
          // Calculate Manhattan Distance: |x1 - x2| + |y1 - y2|
          // This creates a diamond shape field of influence
          const dist = Math.abs(x - mouseX) + Math.abs(y - mouseY);

          let radius = baseRadius;
          
          // Apply enlargement if within the diamond region
          if (dist < influenceRadius) {
            // Linear interpolation: 1 at center, 0 at boundary
            const scale = 1 - (dist / influenceRadius);
            // Ease out slightly for smoother visual
            const easedScale = scale * scale; 
            radius = baseRadius + (maxRadius - baseRadius) * easedScale;
          }

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initial setup
    resize();
    draw();

    // Event Listeners
    window.addEventListener('resize', resize);
    // Attach mouse events to the section to track position even over content
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-24 border-t border-gray-900 relative overflow-hidden">
        
       {/* Interactive Dot Grid Background */}
       <canvas 
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
       />

       <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
          {/* Header - Standardized */}
          <div className="text-center mb-20">
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Academic Background
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
              Education
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              My academic foundation in Computer Science and Artificial Intelligence, where I honed my research and engineering skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Northeastern University */}
            <div className="group relative p-8 bg-[#0a0a0a] border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-2px]">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-32 h-32 text-white" />
               </div>
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-mono text-gray-400 mb-6 group-hover:border-gray-700 transition-colors">
                    <Calendar className="w-3 h-3" />
                    <span>SEP 2021 – MAY 2023</span>
                 </div>

                 <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Northeastern University</h3>
                 <p className="text-lg text-gray-400 mb-8 font-light">Master's degree, Artificial Intelligence</p>
                 
                 {/* GPA with 3D Effect */}
                 <div className="flex items-center gap-5 mt-8">
                   <ThreeDIcon 
                     icon={<Award />} 
                     color="#EAB308" // Yellow-500
                     label="GPA 4.0"
                     className="w-12 h-12 md:w-14 md:h-14" // Slightly smaller than intro icons
                   />
                   <div className="flex flex-col">
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">GPA</span>
                     <span className="text-xl md:text-2xl font-bold text-white tracking-tight">4.00 / 4.00</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Pune Institute of Computer Technology */}
            <div className="group relative p-8 bg-[#0a0a0a] border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:translate-y-[-2px]">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-32 h-32 text-white" />
               </div>
               
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-mono text-gray-400 mb-6 group-hover:border-gray-700 transition-colors">
                    <Calendar className="w-3 h-3" />
                    <span>AUG 2017 – MAY 2021</span>
                 </div>

                 <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Pune Institute of Computer Technology</h3>
                 <p className="text-lg text-gray-400 mb-8 font-light">Bachelor of Engineering - BE, Computer Science</p>
                 
                 {/* GPA with 3D Effect */}
                 <div className="flex items-center gap-5 mt-8">
                   <ThreeDIcon 
                     icon={<Award />} 
                     color="#60A5FA" // Blue-400
                     label="GPA 3.87"
                     className="w-12 h-12 md:w-14 md:h-14"
                   />
                   <div className="flex flex-col">
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">GPA</span>
                     <span className="text-xl md:text-2xl font-bold text-white tracking-tight">3.87 / 4.00</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
       </div>
    </section>
  );
};