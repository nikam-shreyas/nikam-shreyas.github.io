export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startQuarter: string; // Format: "Q[1-4] YYYY"
  endQuarter?: string;
  focus: string; // Short summary
  description: string; // Long description for modal
  technologies: string[];
  icon: string; // Identifier for the icon component
}

export const experienceData: ExperienceItem[] = [
  {
    id: "quant-lead",
    company: "QuantUniversity",
    role: "AI Software Engineer | Tech Lead",
    startQuarter: "Q4 2024",
    focus: "Architecture, Cost, & Leadership",
    description: "Architected end-to-end LLM platforms using RAG, agents, and tool routing. Designed LLM integration layers with prompt versioning and fallback routing. Reduced inference costs by 50%+ through cost-aware model selection. Led CI/CD strategy enabling zero-downtime, multi-server deployments.",
    technologies: ["Python", "RAG", "LLM Agents", "CI/CD", "AWS"],
    icon: "brain"
  },
  {
    id: "quant-se",
    company: "QuantUniversity",
    role: "Software Engineer",
    startQuarter: "Q2 2024",
    focus: "System Ownership & Scale",
    description: "Designed and deployed LLM-powered services supporting internal platforms. Built RAG pipelines integrating retrieval, prompt templates, and response validation. Automated deployments using Docker and GitHub Actions. Implemented real-time updates and background jobs using Redis.",
    technologies: ["Docker", "GitHub Actions", "Redis", "Task Queues"],
    icon: "server"
  },
  {
    id: "quant-intern",
    company: "QuantUniversity",
    role: "Software Engineer Intern",
    startQuarter: "Q1 2024",
    focus: "Execution & Production Systems",
    description: "Implemented backend features and APIs using Python and FastAPI. Assisted in building LLM-powered content generation workflows. Wrote data processing logic and validation layers for AI pipelines. Learned production workflows across Docker, AWS, and CI/CD.",
    technologies: ["Python", "FastAPI", "AWS", "Validation Layers"],
    icon: "code"
  },
  {
    id: "changing-present",
    company: "Changing The Present",
    role: "Data Science Intern",
    startQuarter: "Q3 2023",
    focus: "Production Mindset & Dashboards",
    description: "Scaled data collection to 400k+ profiles across 100+ universities. Designed end-to-end ML data pipelines supporting analytics. Built Streamlit dashboards to expose ML outputs. Introduced real-time updates using Redis and WebSockets for live task monitoring.",
    technologies: ["Python", "Streamlit", "Redis", "WebSockets"],
    icon: "dashboard"
  },
  {
    id: "neu-guide",
    company: "Northeastern University",
    role: "Student Success Guide",
    startQuarter: "Q1 2022",
    focus: "Technical Communication",
    description: "Supported a graduate-level Human-Computer Interaction (HCI) course focused on user-centered system design. Reviewed and provided feedback on HCI projects, prototypes, and user research artifacts. Helped students translate technical system constraints into clear, usable interfaces.",
    technologies: ["HCI", "User Research", "System Design"],
    icon: "users"
  },
  {
    id: "neu-ta",
    company: "Northeastern University",
    role: "Graduate Teaching Assistant",
    startQuarter: "Q1 2022",
    focus: "Mentorship & Leadership",
    description: "Mentored 100+ graduate students navigating academic, cultural, and technical transitions. Provided structured guidance on problem-solving, time management, and technical growth. Acted as a bridge between students and faculty.",
    technologies: ["Mentorship", "Technical Education"],
    icon: "school"
  },
  {
    id: "boompanda",
    company: "BoomPanda",
    role: "Data Science Researcher",
    startQuarter: "Q1 2021",
    focus: "Data Engineering → Applied ML",
    description: "Scaled data ingestion by scraping 150k+ event listings, formalizing earlier ETL patterns. Orchestrated Airflow DAGs to convert unstructured data into model-ready datasets. Trained and evaluated a content-based recommender system using curated features.",
    technologies: ["Airflow", "ETL", "Recommender Systems", "Python"],
    icon: "database"
  },
  {
    id: "electrofield",
    company: "Electrofield Infotech",
    role: "Software Engineer Intern",
    startQuarter: "Q1 2020",
    focus: "Backend Fundamentals",
    description: "Developed backend services and APIs using Python for internal and client-facing applications. Integrated relational databases and optimized queries. Strengthened fundamentals in software design, debugging, and version control.",
    technologies: ["Python", "SQL", "APIs", "Version Control"],
    icon: "terminal"
  },
  {
    id: "tech-square",
    company: "TECH SQUARE",
    role: "Software Developer",
    startQuarter: "Q2 2019",
    focus: "Real-time Data & Reliability",
    description: "Extended batch data concepts into real-time systems ingesting MQTT/Modbus streams from 20+ industrial sensors. Built live dashboards to visualize streaming data. Implemented rule-based anomaly detection, identifying failures within 2 seconds.",
    technologies: ["MQTT", "Modbus", "IoT", "Real-time Systems"],
    icon: "activity"
  },
  {
    id: "riskpro",
    company: "Riskpro Management",
    role: "Software Development Intern",
    startQuarter: "Q1 2019",
    focus: "Automation & Data Pipelines",
    description: "Automated large-scale data collection by scraping 1.2M+ credit records. Learned how raw data is sourced and structured. Built Python-based ETL workflows to clean, validate, and load data into SQL databases. Reduced manual data errors and cut ingestion time.",
    technologies: ["Python", "ETL", "SQL", "Automation"],
    icon: "search"
  }
];