export interface ExperienceItem {
  companyName: string;
  position: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    companyName: "Winjit Technologies",
    position: "Full Stack Developer",
    period: "Jan 2022 - Present",
    description:
      "Led and launched core projects, improved web presence, and maintained code quality using VueJS and TailwindCSS.",
  },
  {
    companyName: "Serturner",
    position: "Full Stack Developer",
    period: "Apr 2021 - Sep 2021",
    description:
      "Implemented various optimization techniques to improve performance of the company's website and webstore",
  },
  {
    companyName: "Freelance Developer",
    position: "Multiple roles",
    period: "2021 - Present",
    description:
      "Worked on various freelance projects, including web and mobile applications, using technologies like React, Node.js, and Flutter.",
  },
  {
    companyName: "Insfyre",
    position: "Intern Flutter Developer",
    period: "Oct 2020 - Feb 2021",
    description:
      "Designed and developed multiple mobile applications using Flutter, contributing to the startup's product offerings",
  },
];
