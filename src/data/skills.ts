export interface SkillGroup {
  name: string;
  note: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    note: "Where most of the hours go.",
    skills: ["Vue.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    name: "Mobile",
    note: "One codebase, two app stores.",
    skills: ["Flutter", "Dart", "React Native"],
  },
  {
    name: "Backend",
    note: "The part nobody sees until it breaks.",
    skills: ["Node.js", "Python", "Django", "REST APIs", "GraphQL"],
  },
  {
    name: "AI / ML",
    note: "The part that breaks in interesting ways.",
    skills: ["LLM agents", "LangChain", "LangGraph", "NLP", "Computer Vision", "TensorFlow"],
  },
  {
    name: "Data",
    note: "Somewhere to put it all.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    name: "Tools & DevOps",
    note: "Getting it out the door.",
    skills: ["Git", "Docker", "CI/CD", "AWS"],
  },
];
