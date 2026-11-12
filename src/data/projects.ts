export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Logo shown on the card. Omit to show the title as a big word instead. */
  image?: string;
  /** Background behind the logo. Defaults to the category colour. */
  imageBg?: string;
  category: "web" | "mobile" | "ai" | "other";
  wide?: boolean;
}

export const projects: ProjectItem[] = [
  {
    title: "LLM Agents for Social Simulation",
    description:
      "A custom multi-agent framework where LLM agents with their own temperaments and appetite for risk talk, trade and decide. Like a group chat, but you get to measure it.",
    techStack: ["Python", "LLMs", "Multi-Agent Systems"],
    githubUrl: "https://github.com/HeartwinJ/llm-social-sim",
    category: "ai",
    wide: true,
  },
  {
    title: "HOPE",
    description:
      "A multilingual job and services portal for migrant workers, built for a Government of Puducherry initiative. Real users, real stakes.",
    techStack: ["Flutter", "Firebase"],
    githubUrl: "https://gitlab.com/HeartwinJ/hope",
    image: "/images/hope-logo.png",
    imageBg: "#ffffff",
    category: "mobile",
  },
  {
    title: "Pitstop Bot",
    description:
      "Ask a Telegram bot about F1 in plain English: races, drivers, standings. LangGraph agents dig up the answer so you don't have to.",
    techStack: ["Python", "LangChain", "LangGraph"],
    liveUrl: "https://t.me/f1_pitstop_bot",
    category: "ai",
  },
  {
    title: "SoothuBot",
    description:
      "A Discord music bot with proper queues, playback controls and audio that doesn't sound like a tin can. Lavalink does the heavy lifting.",
    techStack: ["TypeScript", "Discord.js", "Lavalink", "Redis"],
    liveUrl:
      "https://discord.com/oauth2/authorize?client_id=1368968023527919726&permissions=3500032&integration_type=0&scope=bot+applications.commands",
    category: "other",
  },
  {
    title: "Unipile n8n Node",
    description:
      "An n8n community node for the Unipile API. LinkedIn, email and WhatsApp automation from one node. On npm, if you want it.",
    techStack: ["TypeScript", "n8n", "Unipile API"],
    githubUrl: "https://github.com/HeartwinJ/n8n-nodes-unipile",
    liveUrl: "https://www.npmjs.com/package/n8n-nodes-unipile",
    image: "/images/n8n-logo.png",
    imageBg: "#ffffff",
    category: "other",
  },
  {
    title: "NITPY Web Presence",
    description:
      "Started the web team at NIT Puducherry, then built the institute's website plus its alumni, results and faculty recruitment portals. A good chunk of the campus internet.",
    techStack: ["Angular", "Django", "MySQL"],
    liveUrl: "https://nitpy.ac.in",
    image: "/images/nitpy-logo.png",
    imageBg: "#ffffff",
    category: "web",
    wide: true,
  },
  {
    title: "Timeless Tuition",
    description:
      "A site for a local tutoring business: courses, tutor profiles and an enquiry flow that puts students in touch with the right teacher.",
    techStack: ["Vue 3", "Supabase"],
    liveUrl: "https://timelesstuition.com",
    image: "/images/timeless-tuition-logo.svg",
    imageBg: "url(/images/timeless-tuition-bg.svg) center/cover",
    category: "web",
    wide: true,
  },
  {
    title: "This website",
    description:
      "You're looking at it. React, a sunset, and more opinions about paper texture than strictly necessary.",
    techStack: ["React", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/heartwinj/heartwinj.github.io",
    liveUrl: "https://heartwinj.github.io",
    category: "web",
    wide: true,
  },
];
