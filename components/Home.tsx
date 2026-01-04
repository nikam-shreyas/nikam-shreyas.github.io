import React, { useState, useEffect, useMemo } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowUpRight,
  Terminal,
  MapPin,
  Briefcase,
  Globe,
  Phone,
  Lightbulb,
  Heart,
  Clock,
  Copy,
  Check,
  User,
} from "lucide-react";
import { ThreeDIcon } from "./ThreeDIcon";
import { LeetCodeIcon } from "./icons/LeetCodeIcon";
import { DiamondGrid } from "./DiamondGrid";
import { EarthWireframe } from "./shapes/Wireframes";

interface HomeProps {
  setPage: (page: string) => void;
}

// Custom 4-point Star/Sparkle Icon
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
  </svg>
);

const ContactRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex items-center gap-4 group cursor-pointer select-none"
      onClick={handleCopy}
    >
      <div className="p-3 bg-gray-900 border border-gray-800 rounded-full group-hover:bg-white group-hover:text-black transition-colors shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs text-gray-500 uppercase tracking-wider block mb-0.5">
          {label}
        </span>
        <span className="font-mono text-gray-300 group-hover:text-white transition-colors truncate block">
          {value}
        </span>
      </div>

      {/* Copy Icon - Hidden by default, visible on hover */}
      <div
        className={`p-2 rounded-lg bg-white/10 border border-white/5 text-gray-300 transition-all duration-300 ${
          copied
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
        }`}
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </div>
    </div>
  );
};

// Static skills data with randomized proficiency for the session
const SKILLS_DATA = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "FastAPI",
  "PyTorch",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Redis",
  "RAG",
  "LangChain",
].map((skill) => ({
  name: skill,
  // Random proficiency between 60% and 95%
  proficiency: Math.floor(Math.random() * (95 - 60 + 1)) + 60,
}));

// Animation Component for Welcome Block
const FallingCircles = () => {
  const circles = useMemo(() => {
    // Vibrant colors for the circles
    const colors = [
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#eab308",
      "#10b981",
      "#06b6d4",
    ];

    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      // Position %
      left: Math.floor(Math.random() * 100),
      // Size px
      size: Math.floor(Math.random() * 50) + 10,
      // Color
      color: colors[Math.floor(Math.random() * colors.length)],
      // Animation Duration (2-5s)
      duration: Math.random() * 3 + 2,
      // Animation Delay (0-2s)
      delay: Math.random() * 2,
      // Opacity (0.05 - 0.15)
      opacity: Math.random() * 0.1 + 0.05,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
      {circles.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-full hidden group-hover:block animate-fall"
          style={{
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            opacity: c.opacity,
            top: "-60px", // Start above container
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const bostonTime = now.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  const yourTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      {/* 
        Grid Layout Configuration:
        - Mobile: Single column, auto height rows.
        - Desktop (md): 4 columns, explicit rows logic based on DOM order.
        - max-w-7xl ensures it doesn't stretch too wide on ultrawide monitors.
      */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
        {/* 1. Welcome Card (2x2 on Desktop) */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[450px]">
          {/* Background Effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          {/* Falling Circles Animation on Hover */}
          <FallingCircles />

          <div className="space-y-6 z-10 relative">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-gray-400 font-mono text-xs tracking-widest uppercase">
                Welcome
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Shreyas Nikam
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
              Software Engineer & Architect specializing in Scalable AI
              Solutions, RAG pipelines, and full-stack systems.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-10 z-10 relative">
            {/* Resume Button */}
            <a
              href="Shreyas Nikam Resume - Software Engineer.pdf"
              download="Shreyas_Nikam_Resume.pdf"
              className="w-fit flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons - Flex wrap handles overflow */}
            <div className="flex flex-wrap gap-4">
              <ThreeDIcon
                href="https://github.com/shreyas-nikam"
                color="#ffffff"
                icon={<Github />}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <ThreeDIcon
                href="https://linkedin.com/in/nikam-shreyas"
                color="#0077b5"
                icon={<Linkedin />}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <ThreeDIcon
                href="https://leetcode.com/u/nikamshreyas"
                color="#FFA116"
                icon={<LeetCodeIcon />}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <ThreeDIcon
                href="mailto:shreyas.s.nikam@gmail.com"
                color="#EA4335"
                icon={<Mail />}
                className="w-12 h-12 md:w-14 md:h-14"
              />
            </div>
          </div>
        </div>

        {/* 2. Column: About Me + Skills (1x2 on Desktop) */}
        <div className="col-span-1 md:col-span-1 md:row-span-2 flex flex-col gap-4">
          {/* Top: About Me + Tech Stack (With Comet Border) */}
          <div
            className="relative flex flex-col flex-[1.5] rounded-3xl overflow-hidden group cursor-pointer"
            onClick={() => setPage("about")}
          >
            {/* 1. Comet Border Layer (Spinning Gradient) */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full animate-spin-medium bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]" />
              </div>
            </div>

            {/* 2. Inner Background (Masks the center of the comet) */}
            {/* Inset by 1px to reveal the spinning border */}
            <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 to-black rounded-[23px] z-10" />

            {/* 3. Static Border Fallback (Visible when not hovering) */}
            <div className="absolute inset-0 rounded-3xl border border-gray-800 z-20 pointer-events-none group-hover:border-transparent transition-colors duration-500" />

            {/* 4. Content */}
            <div className="relative z-30 p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                      <User className="w-5 h-5 text-gray-300" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Profile</h2>
                  </div>
                  <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-5 h-5" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Turning complex algorithms into intuitive, high-performance
                  software experiences.
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {["AI Architect", "Full Stack", "Cloud Native"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-black/50 border border-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Skills */}
          <div
            className="flex-1 bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 flex flex-col justify-center gap-4 hover:border-gray-600 transition-all cursor-pointer group"
            onClick={() => setPage("skills")}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Skills
              </h3>
              <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-4 h-4" />
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.map((skill, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden px-2.5 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs"
                >
                  {/* Background Fill Animation */}
                  <div
                    className="absolute inset-y-0 left-0 bg-gray-700 transition-all duration-1000 ease-out w-0 group-hover:w-[var(--prof)]"
                    style={
                      {
                        "--prof": `${skill.proficiency}%`,
                      } as React.CSSProperties
                    }
                  ></div>

                  {/* Text Content */}
                  <span className="relative z-10 text-gray-400 group-hover:text-gray-100 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Time / Location (1x1 on Desktop) */}
        <div className="col-span-1 md:col-span-1 md:row-span-1 bg-gradient-to-br from-slate-900/40 to-indigo-950/20 border border-gray-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-indigo-500/30 transition-all min-h-[180px] relative overflow-hidden">
          {/* Globe Background - Axis Rotation */}
          <div className="absolute -right-12 -bottom-12 opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none z-0">
            {/* Removed animate-spin-slow, now handled internally by EarthWireframe */}
            <EarthWireframe className="w-48 h-48 text-indigo-500" />
          </div>

          <div className="flex justify-between items-start mb-2 relative z-10">
            <div className="p-2 bg-indigo-500/20 rounded-xl text-indigo-400 ring-1 ring-indigo-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="p-1 rounded-full bg-white/5 opacity-50">
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col gap-2 relative z-10 mt-auto">
            {/* Top: Location Badge */}
            <div className="w-fit text-[10px] text-indigo-300 font-mono bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 mb-2">
              Boston, MA
            </div>

            {/* Middle: My Time */}
            <div>
              <div className="text-xs text-gray-500 font-mono uppercase mb-0.5">
                My Time
              </div>
              <div className="text-2xl font-bold text-white font-mono tabular-nums tracking-tight">
                {bostonTime}
              </div>
            </div>

            {/* Bottom: Your Time */}
            <div className="pt-2 mt-1">
              <div className="text-xs text-gray-600 font-mono uppercase mb-0.5">
                Your Time
              </div>
              <div className="text-lg text-gray-400 font-mono tabular-nums">
                {yourTime}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Projects & Ideas Split (1x1 on Desktop - Stacked Vertical Flex) */}
        <div className="col-span-1 md:col-span-1 md:row-span-1 flex flex-col gap-4">
          {/* Projects (Top Half) */}
          <div
            className="flex-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800 rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:border-blue-500/50 transition-all min-h-[140px] relative overflow-hidden"
            onClick={() => setPage("projects")}
          >
            {/* Checks/Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

            <div className="flex justify-between items-start relative z-10">
              <div className="p-2 bg-blue-500/20 rounded-xl text-blue-400 ring-1 ring-blue-500/30">
                <Terminal className="w-5 h-5" />
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-4 h-4" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-0.5">Projects</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                Architecture & Code
              </p>
            </div>
          </div>

          {/* Ideas (Bottom Half) */}
          <div
            className="flex-1 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 border border-gray-800 rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all min-h-[140px] relative"
            onClick={() => setPage("project-ideas")}
          >
            {/* Sparkle Decorations (Show on Hover) */}

            {/* Top Left (Small) */}
            <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-twinkle pointer-events-none">
              <SparkleIcon className="w-4 h-4 text-white" />
            </div>

            {/* Left Mid (Small) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 animate-twinkle pointer-events-none">
              <SparkleIcon className="w-3 h-3 text-purple-300" />
            </div>

            {/* Bottom Right (Large) */}
            <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 animate-twinkle pointer-events-none">
              <SparkleIcon className="w-8 h-8 text-fuchsia-400" />
            </div>

            <div className="flex justify-between items-start">
              <div className="p-2 bg-purple-500/20 rounded-xl text-purple-400 ring-1 ring-purple-500/30">
                <Lightbulb className="w-5 h-5" />
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-0.5">Ideas</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">
                Lab & Prototypes
              </p>
            </div>
          </div>
        </div>

        {/* 5. Experience & Education Split (1x1 on Desktop - Stacked Vertical Flex) */}
        <div className="col-span-1 md:col-span-1 md:row-span-1 flex flex-col gap-4">
          {/* Experience (Top Half) */}
          <div
            className="flex-1 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-gray-800 rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:border-emerald-500/50 transition-all min-h-[140px] relative overflow-hidden"
            onClick={() => setPage("experience")}
          >
            {/* Hover Effect: Rising Bars */}
            <div className="absolute right-6 bottom-6 flex items-end gap-1.5 h-12 pointer-events-none z-0">
              <div className="w-1.5 bg-emerald-500/20 rounded-t-sm h-[30%] group-hover:h-[70%] group-hover:bg-emerald-400/60 transition-all duration-300 ease-out"></div>
              <div className="w-1.5 bg-emerald-500/20 rounded-t-sm h-[50%] group-hover:h-[100%] group-hover:bg-emerald-400/60 transition-all duration-300 delay-75 ease-out"></div>
              <div className="w-1.5 bg-emerald-500/20 rounded-t-sm h-[20%] group-hover:h-[50%] group-hover:bg-emerald-400/60 transition-all duration-300 delay-150 ease-out"></div>
              <div className="w-1.5 bg-emerald-500/20 rounded-t-sm h-[40%] group-hover:h-[80%] group-hover:bg-emerald-400/60 transition-all duration-300 delay-200 ease-out"></div>
            </div>

            <div className="flex justify-between items-start relative z-10">
              <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400 ring-1 ring-emerald-500/30">
                <Briefcase className="w-5 h-5" />
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-4 h-4" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white">Experience</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide truncate">
                QuantUniversity...
              </p>
            </div>
          </div>

          {/* Education (Bottom Half) */}
          <div
            className="flex-1 bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-gray-800 rounded-3xl p-5 flex flex-col justify-between group cursor-pointer hover:border-amber-500/50 transition-all min-h-[140px] relative overflow-hidden"
            onClick={() => setPage("education")}
          >
            <DiamondGrid className="opacity-50" />
            <div className="flex justify-between items-start relative z-10">
              <div className="p-2 bg-amber-500/20 rounded-xl text-amber-400 ring-1 ring-amber-500/30">
                <Globe className="w-5 h-5" />
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors w-4 h-4" />
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white">Education</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide truncate">
                Northeastern...
              </p>
            </div>
          </div>
        </div>

        {/* 6. Volunteering (1x1 on Desktop) */}
        <div
          className="col-span-1 md:col-span-1 md:row-span-1 bg-gradient-to-br from-rose-900/20 to-red-900/20 border border-gray-800 rounded-3xl p-6 flex flex-col justify-between group cursor-pointer hover:border-rose-500/50 transition-all min-h-[296px] relative overflow-hidden"
          onClick={() => setPage("volunteering")}
        >
          {/* Background Hearts - Static */}
          <div className="absolute top-8 right-6 opacity-10 rotate-12 pointer-events-none">
            <Heart className="w-24 h-24 text-rose-500" fill="currentColor" />
          </div>

          {/* Background Hearts - Ripple Animation (On Hover) */}
          <div className="absolute top-8 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rotate-12">
            <Heart
              className="w-24 h-24 text-rose-500 animate-heartbeat-ripple"
              fill="currentColor"
            />
          </div>

          <div className="absolute bottom-6 left-6 opacity-5 -rotate-12 pointer-events-none">
            <Heart className="w-16 h-16 text-rose-500" fill="currentColor" />
          </div>

          <div className="flex justify-between items-start relative z-10">
            <div className="p-2 bg-rose-500/20 rounded-xl text-rose-400 ring-1 ring-rose-500/30">
              <Heart className="w-6 h-6" />
            </div>
            <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" />
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">Volunteering</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                <span>Changing The Present</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                <span>Scribing for exams</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                <span>Project Minus One</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Contact (2x1 on Desktop) */}
        <div className="col-span-1 md:col-span-2 md:row-span-1 bg-gradient-to-br from-[#0f0f0f] to-black border border-gray-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center min-h-[200px]">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Let's start working together!
          </h2>
          {/* Stacked Vertical Layout */}
          <div className="flex flex-col gap-4">
            <ContactRow
              icon={Mail}
              label="Email"
              value="shreyas.s.nikam@gmail.com"
            />
            <ContactRow icon={Phone} label="Phone" value="+1 (857) 204-4757" />
          </div>
        </div>
      </div>
    </div>
  );
};
