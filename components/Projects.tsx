import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Github,
  Layout,
  Box,
  ArrowRight,
  Layers,
  Star,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  Search,
  Filter,
  Smartphone,
  Cloud,
  Zap,
  Server,
  Database,
  Workflow,
  Terminal,
  Code,
  Globe,
  Cpu,
  Network,
  ShieldCheck,
  FileJson,
  Hash,
  Coffee,
  Atom,
  Activity,
  FlaskConical,
  Brain,
} from "lucide-react";
import { projectsData, ProjectItem, ProjectDomain } from "../data/projects";
import { Icosahedron } from "./shapes/Wireframes";

// --- Types & Configuration ---

// Diagram Nodes
type NodeType = "tech";

interface DiagramNode {
  id: string;
  type: NodeType;
  label: string;
  x: number;
  y: number;
  icon: React.ElementType;
  color: string;
}

// Diagram Configuration (400x600 canvas)
// Grid Layout: 3 Columns (80, 200, 320)
// Adjusted Y positions: Compressed vertical spacing (70px) to ensure top/bottom visibility
const NODES: DiagramNode[] = [
  // --- Row 1 (AI) ---
  {
    id: "python",
    type: "tech",
    label: "Python",
    x: 80,
    y: 70,
    icon: FileJson,
    color: "blue",
  },
  {
    id: "ml_dl",
    type: "tech",
    label: "Deep Learning",
    x: 200,
    y: 70,
    icon: Brain,
    color: "blue",
  },
  {
    id: "ml_sklearn",
    type: "tech",
    label: "Scikit-Learn",
    x: 320,
    y: 70,
    icon: Network,
    color: "blue",
  },

  // --- Row 2 (AI/Data) ---
  {
    id: "data_ts",
    type: "tech",
    label: "Time Series",
    x: 80,
    y: 140,
    icon: Activity,
    color: "blue",
  },
  {
    id: "flask",
    type: "tech",
    label: "Flask",
    x: 320,
    y: 140,
    icon: FlaskConical,
    color: "blue",
  },

  // --- Row 3 (Web Front) ---
  {
    id: "js",
    type: "tech",
    label: "JS / TS",
    x: 80,
    y: 210,
    icon: Code,
    color: "purple",
  },
  {
    id: "react",
    type: "tech",
    label: "React / Redux",
    x: 320,
    y: 210,
    icon: Atom,
    color: "purple",
  },

  // --- Row 4 (Web Back / Center Project Area) ---
  // Center at (200, 280) is reserved for the Project Node
  {
    id: "node",
    type: "tech",
    label: "Node / Express",
    x: 80,
    y: 280,
    icon: Server,
    color: "purple",
  },
  {
    id: "angular",
    type: "tech",
    label: "Angular",
    x: 320,
    y: 280,
    icon: ShieldCheck,
    color: "purple",
  },

  // --- Row 5 (Web/DB) ---
  {
    id: "web3",
    type: "tech",
    label: "Web3 / Meta",
    x: 80,
    y: 350,
    icon: Hash,
    color: "purple",
  },
  {
    id: "mongo",
    type: "tech",
    label: "MongoDB",
    x: 320,
    y: 350,
    icon: Database,
    color: "purple",
  },

  // --- Row 6 (Script/Mobile) ---
  {
    id: "java",
    type: "tech",
    label: "Java",
    x: 80,
    y: 420,
    icon: Coffee,
    color: "emerald",
  },
  {
    id: "android",
    type: "tech",
    label: "Android",
    x: 320,
    y: 420,
    icon: Smartphone,
    color: "emerald",
  },

  // --- Row 7 (Legacy/Systems) ---
  {
    id: "servlet",
    type: "tech",
    label: "Servlet",
    x: 140,
    y: 490,
    icon: Server,
    color: "emerald",
  },
  {
    id: "php",
    type: "tech",
    label: "PHP",
    x: 260,
    y: 490,
    icon: Code,
    color: "emerald",
  },
];

// --- Tag Categorization for Filters ---
const TAG_CATEGORIES: Record<string, string> = {
  // AI / ML / Data
  Python: "AI & Data Science",
  "Deep Learning": "AI & Data Science",
  "U-Net": "AI & Data Science",
  "Computer Vision": "AI & Data Science",
  "Scikit-Learn": "AI & Data Science",
  SMOTE: "AI & Data Science",
  "Random Forest": "AI & Data Science",
  NLP: "AI & Data Science",
  LSTM: "AI & Data Science",
  "Time Series": "AI & Data Science",
  Selenium: "AI & Data Science",
  BeautifulSoup: "AI & Data Science",
  Automation: "AI & Data Science",
  "Google PaLM": "AI & Data Science",
  LLM: "AI & Data Science",

  // Frontend / Mobile
  React: "Frontend & Mobile",
  Redux: "Frontend & Mobile",
  Angular: "Frontend & Mobile",
  TypeScript: "Frontend & Mobile",
  JavaScript: "Frontend & Mobile",
  "HTML/CSS": "Frontend & Mobile",
  HTML: "Frontend & Mobile",
  CSS: "Frontend & Mobile",
  "Android SDK": "Frontend & Mobile",
  XML: "Frontend & Mobile",

  // Backend / Web3 / Systems
  "Node.js": "Backend & Web3",
  Express: "Backend & Web3",
  MongoDB: "Backend & Web3",
  Flask: "Backend & Web3",
  Java: "Backend & Web3",
  "Java Servlet": "Backend & Web3",
  PHP: "Backend & Web3",
  "Web Sockets": "Backend & Web3",
  "Web3.js": "Backend & Web3",
  Metamask: "Backend & Web3",
};

const CATEGORY_STYLES: Record<
  string,
  { active: string; inactive: string; label: string }
> = {
  "AI & Data Science": {
    active:
      "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/50",
    inactive:
      "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/20",
    label: "text-blue-500",
  },
  "Frontend & Mobile": {
    active:
      "bg-pink-600 border-pink-600 text-white shadow-lg shadow-pink-900/50",
    inactive:
      "bg-pink-500/10 border-pink-500/20 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/20",
    label: "text-pink-500",
  },
  "Backend & Web3": {
    active:
      "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-900/50",
    inactive:
      "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/20",
    label: "text-emerald-500",
  },
  Other: {
    active: "bg-gray-600 border-gray-600 text-white",
    inactive: "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500",
    label: "text-gray-500",
  },
};

// --- Sub-Components ---

// 1. Architecture Graph (Left Panel)
const ArchitectureGraph: React.FC<{ activeProject: ProjectItem | null }> = ({
  activeProject,
}) => {
  const DIAGRAM_WIDTH = 400;
  const DIAGRAM_HEIGHT = 600;

  // Helper to render paths
  const Path = ({
    from,
    to,
    active,
    dashed = false,
  }: {
    from: { x: number; y: number };
    to: { x: number; y: number };
    active: boolean;
    dashed?: boolean;
  }) => {
    const midX = (from.x + to.x) / 2;
    // Adjust control points for smoother curves depending on vertical distance
    const d = `M${from.x} ${from.y} C${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;

    return (
      <path
        d={d}
        fill="none"
        stroke={active ? "url(#gradient-path)" : "#222"}
        strokeWidth={active ? "2" : "1"}
        strokeDasharray={dashed ? "4,4" : "none"}
        className={`transition-all duration-500 ${
          active ? "opacity-100" : "opacity-20"
        }`}
      />
    );
  };

  // Helper to render Nodes
  const Node = ({
    node,
    isActive,
    isProjectNode,
  }: {
    node: DiagramNode | any;
    isActive: boolean;
    isProjectNode?: boolean;
  }) => {
    const Icon = node.icon;

    // Map abstract color names to Tailwind classes
    const colorStyles: Record<string, string> = {
      blue: isActive
        ? "border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        : "border-gray-800 text-gray-600",
      purple: isActive
        ? "border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        : "border-gray-800 text-gray-600",
      emerald: isActive
        ? "border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        : "border-gray-800 text-gray-600",
      white: isActive
        ? "border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        : "border-gray-800 text-gray-600",
      gray: isActive
        ? "border-gray-500 text-gray-300"
        : "border-gray-800 text-gray-600",
    };

    const activeStyle = colorStyles[node.color] || colorStyles.gray;

    return (
      <div
        className={`absolute flex flex-col items-center justify-center transition-all duration-500 z-20 ${
          isActive ? "scale-100 opacity-100" : "scale-90 opacity-30 grayscale"
        }`}
        style={{
          left: node.x,
          top: node.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`
                    ${
                      isProjectNode
                        ? "w-24 h-24 border-2 bg-black"
                        : "w-10 h-10 bg-[#0a0a0a] border"
                    } 
                    rounded-xl flex items-center justify-center shadow-xl relative transition-all duration-500
                    ${activeStyle}
                `}
        >
          {isProjectNode ? (
            <div className="text-center p-2">
              <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1">
                Active Project
              </span>
              <span className="text-xs font-bold text-white leading-tight block">
                {node.label}
              </span>
            </div>
          ) : (
            <Icon className="w-5 h-5" />
          )}
        </div>
        {!isProjectNode && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-0.5 rounded border border-gray-900 z-30">
            <span
              className={`text-[9px] font-bold uppercase tracking-wider ${
                isActive ? "text-white" : "text-gray-600"
              }`}
            >
              {node.label}
            </span>
          </div>
        )}
      </div>
    );
  };

  // Central Project Node Position (Aligned with Row 4)
  const centerNode = { x: 200, y: 280 };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#050505] relative overflow-hidden rounded-2xl border border-gray-900">
      {/* Badge moved to top-right to avoid Row 1 nodes */}
      <div className="absolute top-4 right-4 z-30">
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest border border-gray-800 px-2 py-1 rounded bg-black/50">
          Ecosystem v3.0
        </span>
      </div>

      {/* Horizontal Legend at Bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-black/90 backdrop-blur border-t border-gray-800 py-3 px-4 z-30 flex justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
          <span className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-wider">
            AI & Data
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
          <span className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-wider">
            Full Stack
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
          <span className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-wider">
            Scripting
          </span>
        </div>
      </div>

      <div
        className="relative transform transition-transform duration-500 scale-[0.8] xl:scale-100 origin-center pb-12"
        style={{ width: DIAGRAM_WIDTH, height: DIAGRAM_HEIGHT }}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox={`0 0 ${DIAGRAM_WIDTH} ${DIAGRAM_HEIGHT}`}
        >
          <defs>
            <linearGradient
              id="gradient-path"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Connections from Center -> Tech Stack */}
          {NODES.map((techNode) => {
            const isActive = activeProject
              ? activeProject.techIds.includes(techNode.id)
              : false;
            return (
              <Path
                key={`path-${techNode.id}`}
                from={centerNode}
                to={techNode}
                active={isActive}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {NODES.map((node) => {
          let isActive = false;
          if (activeProject) {
            isActive = activeProject.techIds.includes(node.id);
          }
          return <Node key={node.id} node={node} isActive={isActive} />;
        })}

        {/* Center Node (Active Project Placeholder) */}
        <Node
          node={{
            label: activeProject?.title || "Select Project",
            icon: Box,
            color: "white",
            x: centerNode.x,
            y: centerNode.y,
          }}
          isActive={true}
          isProjectNode={true}
        />
      </div>
    </div>
  );
};

// --- Main Component ---

export const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "architecture">(
    "architecture"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // Architecture View State
  const [activeProjectId, setActiveProjectId] = useState<string>(
    projectsData[0].id
  );
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Derived state for active project object
  const activeProjectObj = useMemo(
    () => projectsData.find((p) => p.id === activeProjectId) || projectsData[0],
    [activeProjectId]
  );

  // Sorting for Architecture View: Group by Domain for smoother scrolling
  const architectureProjects = useMemo(() => {
    // Group: AI -> Web -> Script
    const domainOrder: Record<string, number> = { ai: 0, web: 1, script: 2 };
    return [...projectsData].sort(
      (a, b) => domainOrder[a.domain] - domainOrder[b.domain]
    );
  }, []);

  // Group tags for the filter UI
  const groupedTags = useMemo(() => {
    const groups: Record<string, string[]> = {
      "AI & Data Science": [],
      "Frontend & Mobile": [],
      "Backend & Web3": [],
      Other: [],
    };

    // Get unique tags
    const uniqueTags = new Set<string>();
    projectsData.forEach((p) => p.skills.forEach((s) => uniqueTags.add(s)));

    Array.from(uniqueTags)
      .sort()
      .forEach((tag) => {
        const category = TAG_CATEGORIES[tag] || "Other";
        if (groups[category]) {
          groups[category].push(tag);
        } else {
          groups["Other"].push(tag);
        }
      });

    // Remove empty groups
    return Object.fromEntries(
      Object.entries(groups).filter(([_, tags]) => tags.length > 0)
    );
  }, []);

  // Setup Observer for Architecture View scrolling
  useEffect(() => {
    if (viewMode !== "architecture") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            const project = architectureProjects[index];
            if (project) {
              setActiveProjectId(project.id);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Center focused
        threshold: 0.1,
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [viewMode, architectureProjects]);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const searchLower = searchQuery.toLowerCase();
      const textMatch =
        project.title.toLowerCase().includes(searchLower) ||
        project.solution.toLowerCase().includes(searchLower);
      const tagMatch =
        selectedTags.length === 0 ||
        project.skills.some((skill) => selectedTags.includes(skill));
      return textMatch && tagMatch;
    });
  }, [searchQuery, selectedTags]);

  const visibleGridProjects =
    isExpanded || searchQuery || selectedTags.length > 0
      ? filteredProjects
      : filteredProjects.slice(0, 6);

  const openProjectModal = (project: ProjectItem) =>
    setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="w-full bg-black py-24 border-t border-gray-900 relative min-h-screen"
    >
      {/* Background Shape */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 opacity-[0.03] animate-spin-reverse-slow z-0">
          <Icosahedron className="w-96 h-96 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header - Standardized */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-3">
            Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Projects & Architecture
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto mb-8">
            A showcase of my technical projects, featuring system architecture
            diagrams and detailed problem-solution breakdowns.
          </p>

          {/* View Mode Toggle Centered */}
          <div className="inline-flex bg-[#0f0f0f] p-1 rounded-lg border border-gray-800">
            <button
              onClick={() => setViewMode("architecture")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === "architecture"
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Network className="w-4 h-4" />
              Architecture
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-white text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Layout className="w-4 h-4" />
              Grid
            </button>
          </div>
        </div>

        {/* --- GRID VIEW --- */}
        {viewMode === "grid" && (
          <div className="animate-fade-in-up">
            {/* Search & Filter Controls */}
            <div className="mb-12 space-y-4">
              <div className="flex gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a0a] border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-all"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                    isFiltersOpen
                      ? "bg-white text-black border-white"
                      : "bg-[#0a0a0a] text-gray-400 border-gray-800 hover:text-white"
                  }`}
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden md:inline">Filters</span>
                  {selectedTags.length > 0 && (
                    <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold bg-blue-600 text-white rounded-full">
                      {selectedTags.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Grouped Tags Filter Area */}
              {isFiltersOpen && (
                <div className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-lg animate-fade-in-up space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Filter by Tech Stack
                    </span>
                    {selectedTags.length > 0 && (
                      <button
                        onClick={() => setSelectedTags([])}
                        className="text-xs px-2 py-1 text-red-400 hover:text-red-300 flex items-center gap-1 hover:bg-red-900/20 rounded transition-colors"
                      >
                        <X className="w-3 h-3" /> Clear All
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(groupedTags).map(([category, tags]) => {
                      const styles =
                        CATEGORY_STYLES[category] || CATEGORY_STYLES["Other"];
                      return (
                        <div key={category} className="space-y-3">
                          <h4
                            className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${styles.label}`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-current`}
                            />
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <button
                                key={tag}
                                onClick={() => {
                                  if (selectedTags.includes(tag)) {
                                    setSelectedTags(
                                      selectedTags.filter((t) => t !== tag)
                                    );
                                  } else {
                                    setSelectedTags([...selectedTags, tag]);
                                  }
                                }}
                                className={`text-xs px-2.5 py-1 rounded border transition-all duration-300 ${
                                  selectedTags.includes(tag)
                                    ? styles.active
                                    : styles.inactive
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleGridProjects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => openProjectModal(project)}
                  className="group flex flex-col bg-[#0a0a0a] border border-gray-800 hover:border-gray-500 transition-all duration-300 rounded-xl overflow-hidden hover:-translate-y-1 cursor-pointer h-full"
                >
                  <div className="p-6 pb-2 relative">
                    <h4 className="text-sm font-medium text-gray-400 italic mb-2 pr-4 border-l-2 border-gray-700 pl-3 group-hover:border-white transition-colors">
                      "{project.question}"
                    </h4>
                    <h3 className="text-xl font-bold text-white mt-4 flex items-center gap-2">
                      {project.title}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </h3>
                  </div>
                  <div className="px-6 py-2 flex-grow">
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {project.solution}
                    </p>
                  </div>
                  <div className="p-6 pt-4 mt-auto border-t border-gray-800/50 flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {project.skills.slice(0, 3).map((s, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-gray-900 border border-gray-800 px-1.5 py-0.5 rounded text-gray-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {project.highlight && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {!isFiltersOpen && filteredProjects.length > 6 && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 px-6 py-2 bg-[#111] border border-gray-800 text-white rounded-full hover:bg-white hover:text-black transition-all"
                >
                  {isExpanded ? "Show Less" : "Show All"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* --- ARCHITECTURE VIEW --- */}
        {viewMode === "architecture" && (
          <div className="relative flex flex-col md:flex-row gap-0">
            {/* Left: Diagram (Sticky Container) */}
            {/* self-stretch ensures this column is as tall as the content column */}
            <div className="hidden md:block w-1/2 self-stretch relative">
              {/* The sticky element. top-24 gives it some breathing room from the top of viewport */}
              <div className="sticky top-24 h-[calc(100vh-6rem)] flex flex-col items-center justify-center p-8 z-10">
                <div className="relative w-full h-full max-h-[600px] bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 to-black z-0"></div>
                  <div className="relative z-10 w-full h-full">
                    <ArchitectureGraph activeProject={activeProjectObj} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project List */}
            <div className="w-full md:w-1/2">
              <div className="md:hidden sticky top-20 z-20 bg-black/90 backdrop-blur border-b border-gray-800 p-4 mb-8">
                <p className="text-xs font-mono text-gray-500 text-center">
                  Mobile View: Diagrams hidden
                </p>
              </div>

              <div className="animate-fade-in-up pb-20">
                {architectureProjects.map((project, index) => (
                  <div
                    key={project.id}
                    ref={(el) => {
                      projectRefs.current[index] = el;
                    }}
                    data-index={index}
                    className={`min-h-[60vh] flex flex-col justify-center p-8 md:p-12 border-b border-gray-900/50 transition-all duration-500 ${
                      activeProjectId === project.id
                        ? "opacity-100"
                        : "opacity-30 blur-[1px]"
                    }`}
                  >
                    <div
                      onClick={() => openProjectModal(project)}
                      className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-xl hover:border-gray-500 transition-colors cursor-pointer relative overflow-hidden group"
                    >
                      {/* Domain Label */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`text-[10px] font-bold uppercase px-2 py-1 rounded border 
                                            ${
                                              project.domain === "ai"
                                                ? "text-blue-400 border-blue-500/30 bg-blue-500/10"
                                                : project.domain === "web"
                                                ? "text-purple-400 border-purple-500/30 bg-purple-500/10"
                                                : "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                                            }`}
                        >
                          {project.domain === "ai"
                            ? "AI & Data"
                            : project.domain === "web"
                            ? "Full Stack"
                            : "Scripting"}
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-mono text-gray-600">
                          {project.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      <div className="pl-4 border-l-2 border-gray-700 mb-6">
                        <p className="text-gray-400 italic text-lg">
                          "{project.question}"
                        </p>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.solution}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 5).map((s) => (
                          <span
                            key={s}
                            className="text-xs border border-gray-700 px-2 py-1 rounded text-gray-500 bg-black"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
            onClick={closeProjectModal}
          />
          <div className="relative bg-[#0f0f0f] border border-gray-800 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-fade-in-up z-10 flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#0f0f0f]/95 backdrop-blur z-20 border-b border-gray-800 p-6 flex justify-between items-start">
              <div>
                <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  {selectedProject.date}
                </span>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h2>
                {selectedProject.association && (
                  <p className="text-gray-500 text-sm mt-1">
                    {selectedProject.association}
                  </p>
                )}
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 text-gray-500 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Amazing One-Liner */}
              <div className="relative bg-gradient-to-r from-gray-900 to-black p-6 rounded-lg border-l-4 border-blue-500">
                <div className="absolute -top-3 -left-3 bg-blue-600 p-1.5 rounded-full shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed">
                  "{selectedProject.impact}"
                </p>
              </div>

              {/* Problem & Solution Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-lg">
                  <h5 className="text-red-400 text-xs font-bold uppercase mb-2">
                    The Problem
                  </h5>
                  <p className="text-gray-300 text-sm">
                    {selectedProject.question}
                  </p>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-lg">
                  <h5 className="text-emerald-400 text-xs font-bold uppercase mb-2">
                    The Solution
                  </h5>
                  <p className="text-gray-300 text-sm">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2">
                  Deep Dive
                </h4>
                <div className="text-gray-300 leading-relaxed text-base space-y-4">
                  {Array.isArray(selectedProject.description) ? (
                    <ul className="list-disc list-outside ml-4 space-y-2">
                      {selectedProject.description.map((desc, i) => (
                        <li key={i} className="pl-1">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{selectedProject.description}</p>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-2 mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill) => {
                    return (
                      <span
                        key={skill}
                        className={`text-xs px-3 py-1.5 rounded border bg-gray-900 border-gray-700 text-gray-300`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Action Footer */}
              {selectedProject.link && (
                <div className="pt-8 mt-4 border-t border-gray-800 flex justify-end">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
