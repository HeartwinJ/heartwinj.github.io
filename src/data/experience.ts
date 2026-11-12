export interface ExperienceItem {
  companyName: string;
  position: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    companyName: "Winjit Technologies",
    position: "Senior Software Engineer",
    period: "Jan 2022 – Now",
    description:
      "Own core projects from first commit to launch: make the architecture calls, review the code, and keep the codebase honest as it grows. Also the reason the company's web presence got sharper.",
  },
  {
    companyName: "Freelance",
    position: "Whatever the project needs",
    period: "2021 – Now",
    description:
      "Web and mobile apps for people who needed one, built with React, Node.js and Flutter.",
  },
  {
    companyName: "Serturner",
    position: "Full Stack Developer",
    period: "Apr – Sep 2021",
    description:
      "Made the company website and web store faster, one optimisation at a time.",
  },
  {
    companyName: "Insfyre",
    position: "Flutter Developer, Intern",
    period: "Oct 2020 – Feb 2021",
    description:
      "Designed and built several Flutter apps for a young startup's product line. Where Flutter and I got serious.",
  },
];
