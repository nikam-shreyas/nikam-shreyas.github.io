import React from 'react';
import { Lightbulb, Sparkles, Brain, Eye, Layout, Clock, Calendar, Users, HandMetal, ChefHat, FolderTree, Mail } from 'lucide-react';
import { Icosahedron } from './shapes/Wireframes';

interface IdeaItem {
  title: string;
  date: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const IDEAS_DATA: IdeaItem[] = [
  {
    title: "Resume GPT",
    date: "Sep 2023",
    category: "LLMs",
    description: "Tailoring resumes to each job is tedious. This online resume editor will leverage LLMs to analyze job descriptions and automatically customize resumes, quantifying accomplishments and identifying relevant skills to pass applicant tracking system screening. This allows efficient generation of targeted resumes emphasized with the right keywords.",
    icon: Brain
  },
  {
    title: "Google Drive Visualizer",
    date: "Aug 2023",
    category: "Visualization",
    description: "Navigating expansive and complex Google Drive storage can prove challenging without proper visualization tools. The project will perform an in-depth analysis of Google Drive contents and structures. It then generates a detailed interactive map of your cloud folders, files, sharing permissions, and more. This provides users with a comprehensive bird's-eye view of their storage hierarchy.",
    icon: FolderTree
  },
  {
    title: "GPT + Portfolio",
    date: "Jun 2023",
    category: "LLMs",
    description: "Static career profiles often fail to convey candidates' qualifications effectively. The project enables natural language conversations between hiring managers and candidate portfolios. By simulating an interactive dialog, the AI will help share comprehensive details regarding candidates' educational backgrounds, prior roles and responsibilities, technical abilities, and other relevant experiences.",
    icon: Sparkles
  },
  {
    title: "Snap Jobs",
    date: "May 2023",
    category: "LLMs",
    description: "Inspired by Snapchat, Snap Jobs provides time-bound and applicant-capped job postings, ensuring employers connect to best-fit talent without administrative overload. By systematically limiting application windows, Snap Jobs reduces wasted efforts and enables tightly aligned, efficient hiring.",
    icon: Clock
  },
  {
    title: "Recipe CV",
    date: "Feb 2023",
    category: "Computer Vision",
    description: "A mobile application that harnesses advanced vision transformers to provide real-time assistance during cooking. The AI monitors ingredients and provides natural language prompts to users, notifying them when sautéed items reach the optimal shade or when meats achieve the target level of doneness per the recipe.",
    icon: ChefHat
  },
  {
    title: "Timeline Habit Tracker",
    date: "Jan 2023",
    category: "Atomic Habits",
    description: "Our application empowers habit formation through visualized timelines branching off from the current moment. Users input their daily goals which the app associates with potential timelines. Completing a task moves the user on a better timeline, while skipping it shifts them to less desirable futures.",
    icon: Layout
  },
  {
    title: "Student's Financial Tutorial",
    date: "Jan 2023",
    category: "Finances",
    description: "An adaptive educational application delivers financial literacy curriculum through interactive simulations that scaffold students' learning in manageable steps. Learners build real-world money management skills by exploring progressively deeper tutorials and engaging exercises that apply core concepts to life situations.",
    icon: Users
  },
  {
    title: "Task Scheduler for roommates",
    date: "Sep 2022",
    category: "Task Scheduling",
    description: "The application will streamline delegation and tracking of recurring duties through automated schedules, location-based task assignments, and progress notifications. By equitably distributing and providing accountability for chores like cleaning, grocery shopping, and trash removal, users enjoy improved communication.",
    icon: Calendar
  },
  {
    title: "Gesture controlled shortcuts",
    date: "Aug 2022",
    category: "CV and NLP",
    description: "Touchless control of device functions via hand gestures, using computer vision and natural language processing. Users can execute shortcuts like switching browser tabs, capturing screenshots, deleting items, or adjusting volume simply by holding their hand in defined positions.",
    icon: HandMetal
  }
];

export const Ideas: React.FC = () => {
  return (
    <section className="w-full bg-black py-24 border-t border-gray-900 relative min-h-screen">
      
      {/* Background Shape */}
      <div className="absolute top-40 left-0 opacity-[0.03] animate-spin-reverse-slow pointer-events-none z-0">
          <Icosahedron className="w-[500px] h-[500px] text-white" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header - Standardized */}
        <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Innovation Lab
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Uncharted Ideas
            </h2>
            <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 md:p-8">
                <div className="flex justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-yellow-500 fill-yellow-500/10" />
                </div>
                <p className="text-gray-300 font-light text-lg leading-relaxed">
                    Explore my treasure trove of uncharted software project ideas! From cutting-edge apps to game-changing platforms, these concepts are waiting for their coding maestro.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-800">
                    <a 
                        href="mailto:shreyas.s.nikam@gmail.com?subject=Lets%20build%20together!"
                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors uppercase tracking-widest"
                    >
                        <Mail className="w-4 h-4" />
                        Feeling inspired? Let's team up
                    </a>
                </div>
            </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IDEAS_DATA.map((idea, index) => {
                const Icon = idea.icon;
                return (
                    <div 
                        key={index}
                        className="group flex flex-col bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                        <div className="relative z-10 flex justify-between items-start mb-6">
                            <div className="p-3 bg-black border border-gray-800 rounded-xl group-hover:border-gray-600 transition-colors">
                                <Icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </div>
                            <span className="text-xs font-mono text-gray-600 border border-gray-900 bg-black/50 px-2 py-1 rounded">
                                {idea.date}
                            </span>
                        </div>

                        <div className="relative z-10 mb-4">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                                {idea.title}
                            </h3>
                            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-400/80 bg-blue-900/10 px-2 py-0.5 rounded border border-blue-500/10">
                                {idea.category}
                            </span>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                {idea.description}
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