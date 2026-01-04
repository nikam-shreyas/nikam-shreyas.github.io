import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { volunteeringData } from '../data/volunteering';

interface VolunteeringProps {
  onViewPost: (id: string) => void;
}

export const Volunteering: React.FC<VolunteeringProps> = ({ onViewPost }) => {
  return (
    <section className="w-full min-h-screen bg-black py-24 border-t border-gray-900 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Header - Standardized */}
        <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Giving Back
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter flex items-center justify-center gap-4 mb-4">
              Volunteering <Heart className="text-red-500 fill-red-500 w-8 h-8" />
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Contributing to social causes through technology, data science, and mentorship to empower communities.
            </p>
        </div>

        <div className="space-y-6">
            {volunteeringData.map((post) => {
                const Icon = post.icon;
                const hoverBorderColor = 
                    post.color === 'blue' ? 'group-hover:border-blue-500/30' : 
                    post.color === 'yellow' ? 'group-hover:border-yellow-500/30' : 
                    'group-hover:border-green-500/30';
                
                const iconColor = 
                    post.color === 'blue' ? 'text-blue-400 border-blue-500/20 bg-blue-900/20' : 
                    post.color === 'yellow' ? 'text-yellow-400 border-yellow-500/20 bg-yellow-900/20' : 
                    'text-green-400 border-green-500/20 bg-green-900/20';

                return (
                    <div 
                        key={post.id}
                        onClick={() => onViewPost(post.id)}
                        className={`group flex flex-col md:flex-row gap-6 p-8 bg-[#0a0a0a] border border-gray-800 rounded-2xl ${hoverBorderColor} transition-all cursor-pointer relative overflow-hidden`}
                    >
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className={`min-w-16 h-16 rounded-full flex items-center justify-center border group-hover:scale-110 transition-transform ${iconColor}`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                                <div className="flex items-center gap-3">
                                    <h4 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{post.title}</h4>
                                    <span className="text-xs border border-gray-700 rounded px-2 py-1 text-gray-500 bg-black uppercase tracking-wider font-bold">
                                        {post.category}
                                    </span>
                                </div>
                                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-2 transition-all" />
                            </div>
                            
                            <p className="text-sm text-gray-500 font-mono mb-4">
                                {post.date} • {post.readTime} read
                            </p>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {post.summary}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};