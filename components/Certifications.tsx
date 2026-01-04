import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData, CertificationItem } from '../data/certifications';
import { Hourglass } from './shapes/Wireframes';

// Split data into two rows
const midpoint = Math.ceil(certificationsData.length / 2);
const row1 = certificationsData.slice(0, midpoint);
const row2 = certificationsData.slice(midpoint);

const CertificationCard: React.FC<{ item: CertificationItem }> = ({ item }) => {
  const Wrapper = item.link ? 'a' : 'div';
  const wrapperProps = item.link
    ? {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex flex-col w-[400px] h-[220px] bg-[#0a0a0a] border border-gray-800 p-6 hover:border-gray-500 hover:bg-[#111] transition-all duration-300 cursor-pointer flex-shrink-0 mx-4 relative overflow-hidden"
      }
    : {
        className: "group flex flex-col w-[400px] h-[220px] bg-[#0a0a0a] border border-gray-800 p-6 hover:border-gray-700 transition-colors cursor-default flex-shrink-0 mx-4 relative overflow-hidden"
      };

  return (
    <Wrapper {...wrapperProps}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
         <Award className="w-24 h-24" />
      </div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-2 bg-gray-900 border border-gray-800 rounded-lg group-hover:border-gray-600 transition-colors">
          <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-white" />
        </div>
        {item.link && (
          <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
        )}
      </div>

      <div className="flex-grow relative z-10">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 font-mono">{item.issuer}</p>
      </div>

      <div className="relative z-10 pt-4 border-t border-gray-800/50 mt-auto flex justify-between items-end">
         <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-2">
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
            </div>
            {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1">
                    {item.skills.slice(0, 2).map((skill, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider text-gray-500 bg-gray-900/80 px-1.5 py-0.5 rounded border border-gray-800">
                        {skill}
                    </span>
                    ))}
                    {item.skills.length > 2 && (
                        <span className="text-[10px] text-gray-600 px-1 py-0.5">+{item.skills.length - 2}</span>
                    )}
                </div>
            )}
         </div>
      </div>
    </Wrapper>
  );
};

interface MarqueeRowProps {
    items: CertificationItem[];
    direction: 'left' | 'right';
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction }) => {
    // We duplicate the items to create a seamless loop.
    // The animation translates -50% (which covers exactly one set of items).
    const displayItems = [...items, ...items];
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
        <div className="w-full overflow-hidden py-4 group/marquee relative">
            {/* Fade gradients on edges to smooth the entrance/exit */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            
            <div className={`flex w-max ${animationClass} group-hover/marquee:[animation-play-state:paused]`}>
                {displayItems.map((item, idx) => (
                    <CertificationCard key={`${item.title}-${idx}`} item={item} />
                ))}
            </div>
        </div>
    );
};

export const Certifications: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 border-t border-gray-900 relative overflow-hidden">
        
       {/* Background Shape */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.04] animate-float pointer-events-none z-0">
          <Hourglass className="w-56 h-56 text-gray-500" />
       </div>

      <div className="w-full relative z-10">
        
        {/* Header - Centered for this layout */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16 text-center">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Continuous Learning
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Credentials & Certifications
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Verified expertise in Machine Learning, Cloud Computing, and Data Science from top institutions and platforms.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="flex flex-col gap-6">
            <MarqueeRow items={row1} direction="left" />
            <MarqueeRow items={row2} direction="right" />
        </div>
        
        {/* Helper Text */}
        <div className="text-center mt-8 opacity-40">
            <span className="text-[10px] uppercase tracking-widest text-gray-500">
                Hover to pause • Click to verify
            </span>
        </div>

      </div>
    </section>
  );
};