export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  imageBg?: string;
  category: "web" | "mobile" | "ai" | "other";
}

export const projects: ProjectItem[] = [
  {
    title: "heartwinj.github.io",
    description:
      "This personal portfolio website featuring GSAP animations, glassmorphic UI, and a cosmic design theme built with React 19.",
    techStack: ["React", "TypeScript", "TailwindCSS", "GSAP"],
    githubUrl: "https://github.com/heartwinj/heartwinj.github.io",
    liveUrl: "https://heartwinj.github.io",
    image: "portfolio-placeholder",
    category: "web",
  },
  {
    title: "LLM Agents for Social Simulation",
    description:
      "Designed and implemented autonomous AI agents using a custom framework to simulate social interactions in multi-agent environments, incorporating risk aversion models and behavioral characteristics to analyze decision-making dynamics.",
    techStack: ["Python", "LLMs", "Multi-Agent Systems"],
    githubUrl: "https://github.com/HeartwinJ/llm-social-sim",
    image: "llm-agents-placeholder",
    category: "ai",
  },
  {
    title: "HOPE",
    description:
      "Built a multilingual job and resource portal for migrant workers as part of a government-sponsored initiative by the Government of Puducherry to improve access to employment and public services.",
    techStack: ["Flutter", "Firebase"],
    githubUrl: "https://gitlab.com/HeartwinJ/hope",
    image: "/images/hope-logo.png",
    imageBg: "#ffffff",
    category: "mobile",
  },
  {
    title: "Pitstop Bot",
    description:
      "A Telegram bot for F1 data and analysis using natural language. Ask questions about races, drivers, standings, and more — powered by LLMs and agentic workflows.",
    techStack: ["Python", "LangChain", "LangGraph"],
    liveUrl: "https://t.me/f1_pitstop_bot",
    image: "pitstop-placeholder",
    category: "ai",
  },
  {
    title: "SoothuBot",
    description:
      "A feature-rich music bot for Discord servers with queue management, playback controls, and high-quality audio streaming powered by Lavalink.",
    techStack: ["TypeScript", "Discord.js", "Lavalink", "Redis"],
    liveUrl: "https://discord.com/oauth2/authorize?client_id=1368968023527919726&permissions=3500032&integration_type=0&scope=bot+applications.commands",
    image: "soothubot-placeholder",
    category: "other",
  },
  {
    title: "Unipile n8n Node",
    description:
      "A community node for n8n that integrates the Unipile API, enabling workflow automation across LinkedIn, email, WhatsApp, and other messaging platforms through a unified interface.",
    techStack: ["TypeScript", "n8n", "Unipile API"],
    githubUrl: "https://github.com/HeartwinJ/n8n-nodes-unipile",
    liveUrl: "https://www.npmjs.com/package/n8n-nodes-unipile",
    image: "/images/n8n-logo.png",
    imageBg: "#ffffff",
    category: "other",
  },
  {
    title: "NITPY Website",
    description:
      "Developed the official website for NIT Puducherry, featuring academic program listings, faculty directories, event management, and campus information for students and stakeholders.",
    techStack: ["Angular", "Django", "MySQL"],
    liveUrl: "https://nitpy.ac.in",
    image: "/images/nitpy-logo.png",
    imageBg: "#ffffff",
    category: "web",
  },
  {
    title: "Timeless Tuition",
    description:
      "A website built for a local tutoring business, featuring course listings, instructor profiles, and an enquiry system to connect students with personalized learning services.",
    techStack: ["Vue 3", "Supabase"],
    liveUrl: "https://timelesstuition.com",
    image: "/images/timeless-tuition-logo.svg",
    imageBg: "url(/images/timeless-tuition-bg.svg) center/cover",
    category: "web",
  },
];
