import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  LayoutGrid,
  Phone,
} from "lucide-react";
import { LeetCodeIcon } from "./icons/LeetCodeIcon";
import { ThreeDIcon } from "./ThreeDIcon";
import { Icosahedron, Sphere } from "./shapes/Wireframes";

export const Intro: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 h-[70vh] w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] pointer-events-none"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 right-[10%] opacity-20 animate-spin-slow pointer-events-none z-0">
        <Icosahedron className="w-48 h-48 text-gray-700" />
      </div>
      <div className="absolute bottom-40 left-[10%] opacity-10 animate-float pointer-events-none z-0">
        <Sphere className="w-64 h-64 text-gray-600" />
      </div>

      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[35vw] font-bold text-[#111111] leading-none tracking-tighter">
          SN
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-12 animate-fade-in-up">
        {/* Headings */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl">
            Shreyas Nikam
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto tracking-wide leading-relaxed">
            Software Engineer | Architecting Scalable AI Solutions
            @QuantUniversity
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-4 w-full justify-center">
          <a
            href="Shreyas Nikam Resume - Software Engineer.pdf"
            download="Shreyas_Nikam_Resume.pdf"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-lg font-bold hover:bg-gray-200 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </a>

          <button
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-black border border-gray-700 text-gray-300 text-lg font-medium hover:border-white hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(50,50,50,0.5)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            onClick={scrollToProjects}
          >
            <LayoutGrid className="w-5 h-5" />
            <span>Show Projects</span>
          </button>
        </div>

        {/* 3D Social Icons Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-10">
          <ThreeDIcon
            href="https://www.github.com/shreyas-nikam"
            label="GitHub"
            color="#ffffff" // White glow for GitHub
            icon={<Github />}
          />

          <ThreeDIcon
            href="https://www.linkedin.com/in/nikam-shreyas"
            label="LinkedIn"
            color="#0077b5" // LinkedIn Blue
            icon={<Linkedin />}
          />

          <ThreeDIcon
            href="https://www.leetcode.com/u/nikamshreyas"
            label="LeetCode"
            color="#FFA116" // LeetCode Orange
            icon={<LeetCodeIcon />}
          />

          <ThreeDIcon
            href="mailto:shreyas.s.nikam@gmail.com"
            label="Email"
            color="#EA4335" // Gmail Red
            icon={<Mail />}
          />

          <ThreeDIcon
            href="tel:+18572044757"
            label="Phone"
            color="#34D399" // Emerald Green for Phone
            icon={<Phone />}
          />
        </div>
      </div>
    </section>
  );
};
