import React, { useState } from 'react';
import { Cpu, Terminal, Zap, ArrowRight, ShieldCheck, Server, Workflow, Check } from 'lucide-react';
import { Cube } from './shapes/Wireframes';

export const About: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shreyas.s.nikam@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section className="w-full bg-black py-24 border-t border-gray-900 relative overflow-hidden">
      
      {/* Toast Notification */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow-2xl transform transition-all duration-300 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
         <Check className="w-4 h-4 text-green-600" />
         <span className="text-sm font-medium">Copied email id</span>
      </div>

      {/* Background Shape */}
      <div className="absolute top-1/4 -left-16 opacity-[0.07] animate-spin-slow pointer-events-none z-0">
        <Cube className="w-80 h-80 text-white" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header - Standardized */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Profile
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            About Me
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Software Engineer & Architect based in Boston, specializing in scalable AI solutions and production-grade systems.
          </p>
        </div>

        {/* TLDR Block */}
        <div className="bg-[#0a0a0a] border-l-2 border-white p-8 mb-16 relative">
          <span className="absolute top-0 right-0 p-4 text-[10px] font-bold tracking-widest text-gray-600 uppercase">TL;DR</span>
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            I earned senior responsibility by owning hard problems.
          </p>
        </div>

        {/* Long Version */}
        <div className="space-y-12">
          
          <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
            <h4 className="text-white text-xl font-bold tracking-tight flex items-center gap-3">
              The Longer Version
            </h4>
            <p>
              I’m a software engineer building production-grade AI systems: from backend foundations to large-scale LLM platforms.
            </p>
            <p>
              Over 4+ years, I’ve worked across backend engineering, data pipelines, and applied ML, and I currently serve as a Tech Lead at QuantUniversity, where I design and ship LLM-powered systems used in real-world financial and educational products.
            </p>
          </div>

          {/* Focus Areas Grid */}
          <div className="bg-[#0f0f0f] border border-gray-900 rounded-sm p-8">
             <h5 className="text-white font-medium mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
               <Cpu className="w-5 h-5" />
               My focus is on making LLMs work in production:
            </h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <li className="flex items-start gap-3">
                 <Workflow className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                 <span className="text-gray-300 font-light">RAG pipelines, agents, and tool routing</span>
              </li>
              <li className="flex items-start gap-3">
                 <Terminal className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                 <span className="text-gray-300 font-light">Prompt versioning, fallback strategies, and observability</span>
              </li>
              <li className="flex items-start gap-3">
                 <Zap className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                 <span className="text-gray-300 font-light">Cost-aware model selection (50–65% inference cost reduction)</span>
              </li>
              <li className="flex items-start gap-3">
                 <Server className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                 <span className="text-gray-300 font-light">CI/CD and zero-downtime, multi-server deployments</span>
              </li>
              <li className="flex items-start gap-3">
                 <ShieldCheck className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                 <span className="text-gray-300 font-light">Bias auditing and compliance tooling (NYC Local Law 144)</span>
              </li>
            </ul>
          </div>

          {/* Closing */}
          <div className="space-y-6">
            <p className="text-lg text-gray-400 font-light">
              I’ve owned systems end to end <span className="text-gray-600 mx-2">→</span> <span className="text-white border-b border-gray-800 pb-0.5">APIs, background workers, real-time pipelines, and data workflows.</span>
            </p>
            
            <button 
                onClick={handleCopyEmail}
                className="group flex items-center gap-2 pt-4 text-white font-medium hover:text-blue-400 transition-colors focus:outline-none cursor-pointer text-left"
            >
              Feel free to reach out, I reply fast.
              <ArrowRight className="w-4 h-4 animate-pulse group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};