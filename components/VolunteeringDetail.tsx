import React, { useEffect } from "react";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { VolunteeringPost } from "../data/volunteering";

interface VolunteeringDetailProps {
  post: VolunteeringPost;
  onBack: () => void;
}

export const VolunteeringDetail: React.FC<VolunteeringDetailProps> = ({
  post,
  onBack,
}) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const colorClasses = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
  };

  return (
    <section className="w-full min-h-screen bg-black py-24 border-t border-gray-900 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Volunteering</span>
        </button>

        {/* Article Header */}
        <header className="mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${
              colorClasses[post.color]
            }`}
          >
            <span>{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-500 text-sm font-mono border-b border-gray-800 pb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} read</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
          {post.content}
        </article>

        {/* Footer / Share (Visual only) */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center">
          <span className="text-gray-500 text-sm">Thanks for reading.</span>
        </div>
      </div>
    </section>
  );
};
