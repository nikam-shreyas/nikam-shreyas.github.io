import React, { useState } from 'react';
import { 
  X, BookOpen, Clock, Briefcase, 
  Code2, Database, Layout, Terminal, Cpu, Cloud,
  GraduationCap, Building2, Server
} from 'lucide-react';

// --- Types ---

type CategoryType = 'AI/ML' | 'Backend' | 'Frontend' | 'DevOps' | 'Data';

interface SkillItem {
  name: string;
  category: CategoryType;
  experience: string;
  learntAt: string[];
  usedAt: string[]; // Companies or Projects
  importance: number; // 1-5, determines font size
}

// --- Data Derived from Resume ---

const SKILLS_DATA: SkillItem[] = [
  // AI & ML
  { 
    name: 'Python', 
    category: 'AI/ML', 
    experience: '5+ Years', 
    learntAt: ['Self-Taught', 'Pune Institute of Computer Technology'], 
    usedAt: ['QuantUniversity', 'BoomPanda', 'Electrofield', 'Changing The Present'], 
    importance: 5 
  },
  { 
    name: 'LLMs & RAG', 
    category: 'AI/ML', 
    experience: '2 Years', 
    learntAt: ['Northeastern University', 'QuantUniversity'], 
    usedAt: ['QuantUniversity'], 
    importance: 5 
  },
  { 
    name: 'PyTorch', 
    category: 'AI/ML', 
    experience: '3 Years', 
    learntAt: ['Northeastern University'], 
    usedAt: ['Bokehlicious', 'QuantUniversity'], 
    importance: 4 
  },
  { 
    name: 'LangChain', 
    category: 'AI/ML', 
    experience: '1.5 Years', 
    learntAt: ['QuantUniversity', 'Self-Taught'], 
    usedAt: ['QuantUniversity'], 
    importance: 4 
  },
  { 
    name: 'Agents', 
    category: 'AI/ML', 
    experience: '1 Year', 
    learntAt: ['QuantUniversity'], 
    usedAt: ['QuantUniversity'], 
    importance: 3 
  },
  { 
    name: 'Scikit-Learn', 
    category: 'AI/ML', 
    experience: '4 Years', 
    learntAt: ['Northeastern University', 'Kaggle'], 
    usedAt: ['Credit Card Fraud Detection', 'BoomPanda'], 
    importance: 3 
  },
  { 
    name: 'Pandas', 
    category: 'Data', 
    experience: '4 Years', 
    learntAt: ['Kaggle', 'Self-Taught'], 
    usedAt: ['Changing The Present', 'BoomPanda', 'Riskpro'], 
    importance: 4 
  },
  
  // Backend & Data
  { 
    name: 'FastAPI', 
    category: 'Backend', 
    experience: '2 Years', 
    learntAt: ['QuantUniversity'], 
    usedAt: ['QuantUniversity'], 
    importance: 4 
  },
  { 
    name: 'SQL (PostgreSQL)', 
    category: 'Backend', 
    experience: '4+ Years', 
    learntAt: ['Pune Institute of Computer Technology'], 
    usedAt: ['Riskpro', 'Electrofield', 'IMS'], 
    importance: 4 
  },
  { 
    name: 'Redis', 
    category: 'Backend', 
    experience: '2 Years', 
    learntAt: ['Changing The Present'], 
    usedAt: ['QuantUniversity', 'Changing The Present'], 
    importance: 3 
  },
  { 
    name: 'Airflow', 
    category: 'Data', 
    experience: '1 Year', 
    learntAt: ['BoomPanda'], 
    usedAt: ['BoomPanda'], 
    importance: 3 
  },
  { 
    name: 'ETL Pipelines', 
    category: 'Data', 
    experience: '3 Years', 
    learntAt: ['Riskpro', 'BoomPanda'], 
    usedAt: ['Riskpro', 'BoomPanda', 'Changing The Present'], 
    importance: 3 
  },

  // Frontend
  { 
    name: 'React', 
    category: 'Frontend', 
    experience: '4 Years', 
    learntAt: ['Self-Taught', 'Pune Institute of Computer Technology'], 
    usedAt: ['Vyakaran', 'IMS', 'FXSimplified'], 
    importance: 4 
  },
  { 
    name: 'TypeScript', 
    category: 'Frontend', 
    experience: '3 Years', 
    learntAt: ['Self-Taught'], 
    usedAt: ['Personal Portfolio', 'IMS'], 
    importance: 3 
  },
  { 
    name: 'JavaScript', 
    category: 'Frontend', 
    experience: '5 Years', 
    learntAt: ['Pune Institute of Computer Technology'], 
    usedAt: ['IMS', 'Project Management System'], 
    importance: 3 
  },

  // DevOps & Cloud
  { 
    name: 'AWS', 
    category: 'DevOps', 
    experience: '2 Years', 
    learntAt: ['QuantUniversity', 'Coursera'], 
    usedAt: ['QuantUniversity'], 
    importance: 4 
  },
  { 
    name: 'Docker', 
    category: 'DevOps', 
    experience: '2 Years', 
    learntAt: ['QuantUniversity'], 
    usedAt: ['QuantUniversity'], 
    importance: 4 
  },
  { 
    name: 'CI/CD', 
    category: 'DevOps', 
    experience: '3 Years', 
    learntAt: ['QuantUniversity'], 
    usedAt: ['QuantUniversity'], 
    importance: 4 
  },
  { 
    name: 'Git', 
    category: 'DevOps', 
    experience: '5 Years', 
    learntAt: ['Self-Taught'], 
    usedAt: ['All Projects'], 
    importance: 3 
  },
  
  // Others
  { 
    name: 'System Design', 
    category: 'Backend', 
    experience: '3 Years', 
    learntAt: ['Northeastern University', 'Work Experience'], 
    usedAt: ['QuantUniversity', 'IMS'], 
    importance: 4 
  },
  { 
    name: 'HCI', 
    category: 'Frontend', 
    experience: '1.5 Years', 
    learntAt: ['Northeastern University'], 
    usedAt: ['Student Success Guide (NEU)'], 
    importance: 2 
  },
  { 
    name: 'MQTT/Modbus', 
    category: 'Backend', 
    experience: '1 Year', 
    learntAt: ['TECH SQUARE'], 
    usedAt: ['TECH SQUARE'], 
    importance: 2 
  }
];

// --- Sub-Components ---

const CategoryBadge: React.FC<{ category: CategoryType }> = ({ category }) => {
  const colors = {
    'AI/ML': 'bg-purple-900/30 text-purple-300 border-purple-500/20',
    'Backend': 'bg-blue-900/30 text-blue-300 border-blue-500/20',
    'Frontend': 'bg-pink-900/30 text-pink-300 border-pink-500/20',
    'DevOps': 'bg-orange-900/30 text-orange-300 border-orange-500/20',
    'Data': 'bg-emerald-900/30 text-emerald-300 border-emerald-500/20',
  };

  const icons = {
    'AI/ML': Cpu,
    'Backend': Server, // Replaced Terminal with Server/Database concepts
    'Frontend': Layout,
    'DevOps': Cloud,
    'Data': Database
  };

  const Icon = icons[category];

  return (
    <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${colors[category]}`}>
      <Icon className="w-3 h-3" />
      {category}
    </span>
  );
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Grouping for the Cloud (Optional, but here we just render them all mixed for the "Cloud" feel)
  // We can sort them so important ones are somewhat central or mixed.
  const sortedSkills = [...SKILLS_DATA].sort((a, b) => b.importance - a.importance);

  return (
    <section className="w-full min-h-screen bg-black py-24 border-t border-gray-900 relative flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,30,30,0.2),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center">
         
         {/* Header */}
         <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Technical Arsenal
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Skills & Tools
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
               The languages, frameworks, and paradigms I've mastered across my academic and professional journey.
            </p>
         </div>

         {/* Word Cloud Container */}
         <div className="flex flex-wrap justify-center gap-4 md:gap-6 p-4">
            {sortedSkills.map((skill) => {
                // Dynamic Sizing based on importance
                const sizeClasses = {
                    5: 'text-3xl md:text-5xl font-bold opacity-100',
                    4: 'text-2xl md:text-4xl font-semibold opacity-90',
                    3: 'text-xl md:text-2xl font-medium opacity-70',
                    2: 'text-lg md:text-xl font-normal opacity-60',
                    1: 'text-base font-light opacity-50',
                };

                return (
                    <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`
                            relative group transition-all duration-300 ease-out hover:scale-110 hover:opacity-100 hover:z-10
                            ${sizeClasses[skill.importance as keyof typeof sizeClasses]}
                            text-gray-300 hover:text-white
                        `}
                    >
                        {/* Text */}
                        <span className="relative z-10">{skill.name}</span>
                        
                        {/* Underline on Hover */}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                );
            })}
         </div>

         <div className="mt-16 text-center opacity-40">
             <span className="text-[10px] uppercase tracking-widest text-gray-500">
                 Click on any skill to view details
             </span>
         </div>

      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedSkill(null)}
          />
          
          <div className="relative bg-[#0f0f0f] border border-gray-800 w-full max-w-md p-8 rounded-xl shadow-2xl animate-fade-in-up transform transition-all">
             
             {/* Close Button */}
             <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
             >
                <X className="w-5 h-5" />
             </button>

             {/* Modal Header */}
             <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <CategoryBadge category={selectedSkill.category} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedSkill.name}</h3>
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
             </div>

             {/* Details Grid */}
             <div className="space-y-6">
                 
                 {/* Experience */}
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-900 rounded-lg border border-gray-800">
                        <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Experience</h4>
                        <p className="text-white font-mono">{selectedSkill.experience}</p>
                    </div>
                 </div>

                 {/* Learnt At */}
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-900 rounded-lg border border-gray-800">
                        <BookOpen className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Where I Learnt It</h4>
                        <div className="flex flex-col gap-1">
                            {selectedSkill.learntAt.map((place, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                    {place.includes('University') || place.includes('Institute') ? (
                                        <GraduationCap className="w-3 h-3 text-blue-400" />
                                    ) : place.includes('Self') ? (
                                        <Code2 className="w-3 h-3 text-green-400" />
                                    ) : (
                                        <Briefcase className="w-3 h-3 text-purple-400" />
                                    )}
                                    <span>{place}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>

                 {/* Used At */}
                 <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-900 rounded-lg border border-gray-800">
                        <Building2 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Where I Used It</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {selectedSkill.usedAt.map((place, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-gray-900 border border-gray-800 rounded text-gray-300">
                                    {place}
                                </span>
                            ))}
                        </div>
                    </div>
                 </div>

             </div>

          </div>
        </div>
      )}

    </section>
  );
};