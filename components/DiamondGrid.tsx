import React, { useEffect, useRef } from 'react';

interface DiamondGridProps {
  className?: string;
  dotColor?: string;
  spacing?: number;
  baseRadius?: number;
  maxRadius?: number;
  influenceRadius?: number;
}

export const DiamondGrid: React.FC<DiamondGridProps> = ({ 
    className,
    dotColor = 'rgba(255, 255, 255, 0.15)', 
    spacing = 20,
    baseRadius = 1,
    maxRadius = 3,
    influenceRadius = 150
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Attach listeners to the parent element so the interaction works over the whole card
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          
          // Manhattan Distance creates the diamond shape
          const dist = Math.abs(x - mouseX) + Math.abs(y - mouseY);

          let radius = baseRadius;
          
          if (dist < influenceRadius) {
            const scale = 1 - (dist / influenceRadius);
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

    window.addEventListener('resize', resize);
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotColor, spacing, baseRadius, maxRadius, influenceRadius]);

  return (
    <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 pointer-events-none z-0 ${className || ''}`}
    />
  );
};