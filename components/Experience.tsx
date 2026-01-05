import React, { useState, useRef } from "react";
import {
  X,
  ChevronRightIcon,
  Briefcase,
  Brain,
  Server,
  Code,
  LayoutDashboard,
  Users,
  GraduationCap,
  Database,
  Terminal,
  Activity,
  Search,
  ChevronUpIcon,
} from "lucide-react";
import { experienceData, ExperienceItem } from "../data/experience";
import { Pyramid } from "./shapes/Wireframes";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  brain: Brain,
  server: Server,
  code: Code,
  dashboard: LayoutDashboard,
  users: Users,
  school: GraduationCap,
  database: Database,
  terminal: Terminal,
  activity: Activity,
  search: Search,
  default: Briefcase,
};

export const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (
    e: React.MouseEvent<HTMLDivElement>,
    experience: ExperienceItem
  ) => {
    // 1. Smooth scroll to center
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    // 2. Wait for scroll animation to mostly finish before opening modal
    setTimeout(() => {
      setSelectedExperience(experience);
    }, 500);
  };

  return (
    <section className="w-full min-h-[60vh] bg-black py-24 border-t border-gray-900 relative flex flex-col justify-center overflow-hidden">
      {/* Background Shape */}
      <div className="absolute -bottom-20 right-0 opacity-[0.08] animate-float-delayed pointer-events-none z-0">
        <Pyramid className="w-96 h-96 text-gray-500" />
      </div>

      {/* Section Header - Standardized */}
      <div className="px-6 md:px-20 mb-20 text-center relative z-10">
        <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
          Career Path
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
          Work Timeline
        </h2>
        <p className="text-gray-400 font-light max-w-2xl mx-auto">
          A chronological journey through my professional roles, leadership
          experiences, and technical contributions.
        </p>
      </div>

      {/* Scroll Indicator (Visual Cue) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/4 z-30 hidden md:flex flex-col items-center gap-4 animate-bounce pointer-events-none opacity-60">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 rotate-90 origin-center whitespace-nowrap">
          Scroll
        </span>
        <ChevronUpIcon className="w-5 h-5 text-gray-400 rotate-90" />
      </div>

      {/* Timeline Container */}
      <div className="relative w-full z-10">
        {/* Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-12 pt-12 no-scrollbar cursor-grab active:cursor-grabbing px-[50vw] md:px-[40vw]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-start min-w-max">
            {experienceData.map((experience, index) => {
              const IconComponent = iconMap[experience.icon] || iconMap.default;

              return (
                <React.Fragment key={experience.id}>
                  {/* Experience Node */}
                  <div
                    className="group flex flex-col items-center cursor-pointer transition-all duration-500 w-[180px] flex-shrink-0"
                    onClick={(e) => handleItemClick(e, experience)}
                  >
                    {/* Top Label */}
                    <span className="text-sm font-mono text-gray-500 mb-4 group-hover:text-white transition-colors duration-300 tracking-widest uppercase">
                      {experience.startQuarter}
                    </span>

                    {/* Main Tick (Active Marker) */}
                    <div className="relative flex flex-col items-center">
                      {/* The tall tick */}
                      <div className="w-[1px] h-10 bg-gray-700 group-hover:bg-white group-hover:h-14 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300 ease-out" />

                      {/* Icon */}
                      <div className="mt-3 p-3 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-white/50 group-hover:bg-gray-800 transition-all duration-300 group-hover:scale-110 shadow-xl">
                        <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>

                    {/* Bottom Info Card */}
                    <div className="mt-6 text-center px-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-1">
                      <h4 className="text-lg font-bold text-white mb-1 leading-tight line-clamp-2 min-h-[3rem] flex items-center justify-center">
                        {experience.company}
                      </h4>
                      <p className="text-gray-400 font-medium text-xs mb-2 truncate">
                        {experience.role}
                      </p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest border-t border-gray-800 pt-2 mt-2 mx-auto max-w-[140px] truncate">
                        {experience.focus}
                      </p>
                    </div>
                  </div>

                  {/* Gap Tickers (if not last item) */}
                  {index < experienceData.length - 1 && (
                    <div className="flex gap-2 h-8 items-center justify-center mx-0 self-center -mt-28 opacity-30 select-none w-[40px]">
                      {/* Larger and tighter tickers */}
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-[1px] h-3 bg-gray-600 rounded-full"
                        />
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedExperience(null)}
          />
          <div className="relative bg-[#0f0f0f] border border-gray-800 w-full max-w-2xl p-8 shadow-2xl animate-fade-in-up rounded-sm max-h-[90vh] overflow-y-auto z-10">
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-8">
              <div className="border-l-2 border-white pl-6">
                <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {selectedExperience.startQuarter}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  {selectedExperience.company}
                </h3>
                <h4 className="text-lg md:text-xl text-gray-400 font-light">
                  {selectedExperience.role}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h5 className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Description
                    </h5>
                    <p className="text-gray-300 leading-relaxed font-light text-base md:text-lg">
                      {selectedExperience.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                      Focus
                    </h5>
                    <p className="text-white text-sm font-medium leading-relaxed">
                      {selectedExperience.focus}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                      Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-900 border border-gray-800 text-gray-400 text-xs rounded hover:border-gray-600 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
