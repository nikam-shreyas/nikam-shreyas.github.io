export type ProjectDomain = "ai" | "web" | "script";

export interface ProjectItem {
  id: string;
  title: string;
  date: string;
  association?: string;
  description: string | string[];
  skills: string[];
  link?: string;
  hasImage?: boolean;
  highlight?: boolean;
  impact: string;
  question: string;
  solution: string;
  domain: ProjectDomain;
  techIds: string[]; // Maps to the diagram nodes
}

export const projectsData: ProjectItem[] = [
  {
    id: "repo-health-ai",
    title: "Repository Health AI",
    date: "2023",
    description: [
      "Analyzes the health of Python packages within GitHub repositories and offers AI-generated insights to guide improvement.",
      "Features a 'Package Expert' chat powered by Google's PaLM model to provide tailored advice on dependencies and vulnerabilities.",
      "Visualizes package health status and identifies potential security risks automatically.",
    ],
    skills: ["Python", "Google PaLM", "React", "Node.js", "LLM"],
    link: "https://github.com/nikam-shreyas/github-package-health",
    highlight: true,
    impact: "Empowering developers to maintain healthy repositories.",
    question:
      "How can developers proactively monitor and improve repository health?",
    solution:
      "A full-stack application leveraging Google's PaLM LLM to scan dependencies, visualize health metrics, and provide conversational expert guidance.",
    domain: "ai",
    techIds: ["python", "react", "node", "ml_dl", "js"],
  },
  // --- AI & Data Science ---
  {
    id: "bokehlicious",
    title: "Bokehlicious",
    date: "Sep 2022 – Dec 2022",
    association: "Northeastern University",
    description: [
      "Developed a deep learning-based method for creating shallow depth of field in images with an accuracy of 0.993 deploying U-Net architecture.",
      "Utilized portrait segmentation and depth estimation to achieve bokeh effect similar to portrait mode in smartphone cameras.",
    ],
    skills: ["Python", "Deep Learning", "U-Net", "Computer Vision"],
    link: "https://github.com/RohitAwate/Bokehlicious",
    highlight: true,
    impact: "99.3% accuracy in synthetic depth of field generation.",
    question: "Can software replicate DSLR hardware depth-of-field?",
    solution:
      "A U-Net deep learning model that segments portraits and generates synthetic depth maps.",
    domain: "ai",
    techIds: ["python", "ml_dl"],
  },
  {
    id: "cc-fraud",
    title: "Credit Card Fraud Detection",
    date: "Mar 2022 – May 2022",
    association: "Northeastern University",
    description: [
      "Performed binary classification for identifying fraudulent transactions using an ensemble of classifiers.",
      "Addressed extreme class imbalance (0.57% fraud) using SMOTE oversampling.",
    ],
    skills: ["Python", "Scikit-Learn", "SMOTE", "Random Forest"],
    link: "https://github.com/nikam-shreyas/MLProjectCreditCardFraud",
    highlight: true,
    impact: "Successfully modeled rare anomalies in 1.2M+ transactions.",
    question: "How do you catch fraud in 1.2M transactions?",
    solution:
      "An ensemble of classifiers (SVM, RF) trained on SMOTE-balanced data to isolate anomalies.",
    domain: "ai",
    techIds: ["python", "ml_sklearn"],
  },
  {
    id: "vyakaran",
    title: "Vyakaran",
    date: "Aug 2020 – May 2021",
    association: "Pune Institute of Computer Technology",
    description: [
      "Built a Neural Machine Translation model (LSTM with Attention) for Hindi grammar correction.",
      "Developed a full-stack React application to serve the model in real-time.",
    ],
    skills: ["Python", "NLP", "React", "LSTM", "Deep Learning"],
    link: "https://github.com/nikam-shreyas/vyakaranfrontend",
    highlight: true,
    impact: "Real-time grammar correction using custom NMT models.",
    question: "Can we build a real-time 'Grammarly' for Hindi?",
    solution: "Bidirectional LSTM-Attention model served via a React frontend.",
    domain: "ai",
    techIds: ["python", "ml_dl", "react", "js"],
  },
  {
    id: "fxsimplified",
    title: "FXSimplified",
    date: "Sep 2020 – Dec 2020",
    description:
      "A forex aggregator pipeline combining data from 1100+ sources to predict currency trends using time-series analysis.",
    skills: ["Python", "Flask", "React", "Time Series"],
    link: "https://github.com/nikam-shreyas/WUTechathon",
    impact: "Aggregated 1100+ currency trends for predictions.",
    question: "Can we predict tomorrow's currency trends?",
    solution:
      "Data pipeline feeding a time-series prediction engine, visualized via React.",
    domain: "ai",
    techIds: ["python", "data_ts", "flask", "react", "js"],
  },

  // --- Full Stack & Web Dev ---
  {
    id: "ims",
    title: "Internship Management System",
    date: "May 2020 – Apr 2021",
    association: "Pune Institute of Computer Technology",
    description:
      "A comprehensive MERN stack application to digitize and manage the student internship application workflow.",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/nikam-shreyas/IMS/",
    impact: "Digitized workflow for university coordinators.",
    question: "How do we digitize a messy paper-based workflow?",
    solution:
      "Role-based MERN application centralizing student applications and approvals.",
    domain: "web",
    techIds: ["js", "react", "node", "mongo"],
  },
  {
    id: "pms",
    title: "Project Management System",
    date: "2020",
    description:
      "A system for managing academic projects, tracking milestones, and submissions.",
    skills: ["JavaScript", "Node.js", "MongoDB"],
    link: "",
    impact: "Streamlined academic project tracking.",
    question: "How do we track student project milestones effectively?",
    solution:
      "Backend system for milestone tracking and submission management.",
    domain: "web",
    techIds: ["js", "node", "mongo"],
  },
  {
    id: "skypey",
    title: "Skypey",
    date: "May 2020",
    description:
      "A Skype-like chat application interface focusing on complex state management using Redux.",
    skills: ["React", "Redux", "Web Sockets"],
    link: "https://github.com/ZeroNP/ReactReduxChatAppSkypey",
    impact: "Recreated real-time communication patterns.",
    question: "How do we manage complex real-time chat state?",
    solution:
      "Redux-powered client for predictable state management across chat threads.",
    domain: "web",
    techIds: ["js", "react"],
  },
  {
    id: "web3-dapp",
    title: "Web3Info DAPP",
    date: "2021",
    description:
      "Decentralized Application interface interacting with blockchain network configurations using Metamask.",
    skills: ["React", "Web3.js", "Metamask"],
    link: "",
    impact: "Interface for decentralized network config.",
    question: "How do users interact with blockchain configs?",
    solution:
      "React frontend integrating with Metamask and OpenZeppelin contracts.",
    domain: "web",
    techIds: ["js", "react", "web3"],
  },
  {
    id: "jogging-tracker",
    title: "Jogging Tracker",
    date: "2020",
    description: "An activity tracking application built with Angular.",
    skills: ["Angular", "TypeScript"],
    link: "",
    impact: "Tracked fitness metrics effectively.",
    question: "How do we visualize workout progress?",
    solution: "Angular-based SPA for logging and viewing jogging sessions.",
    domain: "web",
    techIds: ["js", "angular"],
  },

  // --- Scripting & Utilities ---
  {
    id: "web-scrapers",
    title: "Web Scraper Compilation",
    date: "May 2020 – Jun 2020",
    association: "BoomPanda",
    description:
      "Modular suite of scrapers handling diverse DOM structures, anti-bot measures, and DIN number extraction.",
    skills: ["Python", "Selenium", "BeautifulSoup", "Automation"],
    link: "https://github.com/ZeroNP/WebScraping",
    impact: "Versatile suite of extraction tools.",
    question: "How do we mine data from the unstructured web?",
    solution:
      "Modular Python scrapers for diverse data sources including financial portals.",
    domain: "script",
    techIds: ["python"],
  },
  {
    id: "edunomics",
    title: "Edunomics App",
    date: "2019",
    description: "Native Android application for educational content delivery.",
    skills: ["Java", "Android SDK", "XML"],
    link: "",
    impact: "Mobile learning access.",
    question: "How do we deliver content to mobile users?",
    solution: "Native Android app built with Java.",
    domain: "script",
    techIds: ["java", "android"],
  },
  {
    id: "illustrator-login",
    title: "Illustrator Login",
    date: "2019",
    description: "Authentication module using Java Servlets.",
    skills: ["Java Servlet", "HTML/CSS"],
    link: "",
    impact: "Secure access control.",
    question: "How do we handle secure sessions in legacy stacks?",
    solution: "Java Servlet based authentication flow.",
    domain: "script",
    techIds: ["java", "servlet"],
  },
  {
    id: "smart-tech",
    title: "Smart Tech Page",
    date: "2019",
    description: "Static web portal built with PHP.",
    skills: ["PHP", "HTML", "CSS"],
    link: "",
    impact: "Digital presence established.",
    question: "Simple dynamic content serving?",
    solution: "PHP-based web page.",
    domain: "script",
    techIds: ["php"],
  },
];
