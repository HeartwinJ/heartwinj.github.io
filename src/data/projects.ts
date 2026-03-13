export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  category: "web" | "mobile" | "ai";
}

export const projects: ProjectItem[] = [
  {
    title: "MedTrack",
    description:
      "A cross-platform mobile application for tracking medication schedules, health vitals, and doctor appointments with push notification reminders.",
    techStack: ["Flutter", "Dart", "Firebase", "Hive"],
    githubUrl: "https://github.com/heartwinj/medtrack",
    image: "medtrack-placeholder",
    category: "mobile",
  },
  {
    title: "ShopFlow Dashboard",
    description:
      "An analytics dashboard for e-commerce businesses featuring real-time sales tracking, inventory management, and interactive data visualizations.",
    techStack: ["Vue.js", "TypeScript", "TailwindCSS", "Chart.js"],
    githubUrl: "https://github.com/heartwinj/shopflow-dashboard",
    liveUrl: "https://shopflow-demo.vercel.app",
    image: "shopflow-placeholder",
    category: "web",
  },
  {
    title: "SentimentLens",
    description:
      "An NLP-powered sentiment analysis tool that processes customer reviews and social media mentions to generate actionable brand insights.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React"],
    githubUrl: "https://github.com/heartwinj/sentimentlens",
    liveUrl: "https://sentimentlens.vercel.app",
    image: "sentimentlens-placeholder",
    category: "ai",
  },
  {
    title: "TaskForge",
    description:
      "A full-stack project management platform with real-time collaboration, Kanban boards, and team workload analytics built for agile teams.",
    techStack: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/heartwinj/taskforge",
    liveUrl: "https://taskforge-app.vercel.app",
    image: "taskforge-placeholder",
    category: "web",
  },
  {
    title: "heartwinj.github.io",
    description:
      "This personal portfolio website featuring 3D visuals, GSAP animations, glassmorphic UI, and a cosmic design theme built with React 19.",
    techStack: ["React", "TypeScript", "TailwindCSS", "GSAP", "Three.js"],
    githubUrl: "https://github.com/heartwinj/heartwinj.github.io",
    liveUrl: "https://heartwinj.github.io",
    image: "portfolio-placeholder",
    category: "web",
  },
  {
    title: "CloudQueue API",
    description:
      "A high-performance message queue service with RESTful endpoints, rate limiting, webhook integrations, and robust retry mechanisms.",
    techStack: ["Node.js", "Express", "Redis", "Docker", "Jest"],
    githubUrl: "https://github.com/heartwinj/cloudqueue-api",
    image: "cloudqueue-placeholder",
    category: "web",
  },
];
