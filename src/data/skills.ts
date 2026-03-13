export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "AI/ML"
  | "Tools & DevOps"
  | "Database";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export const categoryColors: Record<SkillCategory, string> = {
  Frontend: "#00d4ff",
  Backend: "#7928ca",
  Mobile: "#ff0080",
  "AI/ML": "#00d4ff",
  "Tools & DevOps": "#00d4ff",
  Database: "#7928ca",
};

const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: "React" },
  { name: "Vue.js", category: "Frontend", icon: "Vue" },
  { name: "TypeScript", category: "Frontend", icon: "TypeScript" },
  { name: "JavaScript", category: "Frontend", icon: "JavaScript" },
  { name: "HTML5", category: "Frontend", icon: "HTML5" },
  { name: "CSS3", category: "Frontend", icon: "CSS3" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Tailwind" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "Node" },
  { name: "Python", category: "Backend", icon: "Python" },
  { name: "REST APIs", category: "Backend", icon: "REST" },
  { name: "GraphQL", category: "Backend", icon: "GraphQL" },

  // Mobile
  { name: "Flutter", category: "Mobile", icon: "Flutter" },
  { name: "Dart", category: "Mobile", icon: "Dart" },
  { name: "React Native", category: "Mobile", icon: "ReactNative" },

  // AI/ML
  { name: "Machine Learning", category: "AI/ML", icon: "ML" },
  { name: "TensorFlow", category: "AI/ML", icon: "TensorFlow" },
  { name: "NLP", category: "AI/ML", icon: "NLP" },
  { name: "Computer Vision", category: "AI/ML", icon: "CV" },

  // Tools & DevOps
  { name: "Git", category: "Tools & DevOps", icon: "Git" },
  { name: "Docker", category: "Tools & DevOps", icon: "Docker" },
  { name: "CI/CD", category: "Tools & DevOps", icon: "CICD" },
  { name: "AWS", category: "Tools & DevOps", icon: "AWS" },
  { name: "Firebase", category: "Tools & DevOps", icon: "Firebase" },

  // Database
  { name: "MongoDB", category: "Database", icon: "MongoDB" },
  { name: "PostgreSQL", category: "Database", icon: "PostgreSQL" },
  { name: "Redis", category: "Database", icon: "Redis" },
];

export default skills;
