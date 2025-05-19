import { CircleIcon } from "@phosphor-icons/react";

const experiences = [
  {
    companyName: "Winjit Technologies",
    position: "Full Stack Developer (Jan 2022 - Present)",
    description:
      "Led and launched core projects, improved web presence, and maintained code quality using VueJS and TailwindCSS.",
  },
  {
    companyName: "Serturner",
    position: "Full Stack Developer (Apr 2021 - Sep 2021)",
    description:
      "Implemented various optimization techniques to improve performance of the company's website and webstore",
  },
  {
    companyName: "Frelance Developer",
    position: "Multiple roles (2021 - Present)",
    description:
      "Worked on various freelance projects, including web and mobile applications, using technologies like React, Node.js, and Flutter.",
  },
  {
    companyName: "Insfyre",
    position: "Intern Flutter Developer (Oct 2020 - Feb 2021)",
    description:
      "Designed and developed multiple mobile applications using Flutter, contributing to the startup's product offerings",
  },
];

function Experience() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">My Experience</h1>
        <p className="mb-8 text-gray-600">
          I have worked on various projects, ranging from web applications to
          mobile apps. Here are some highlights of my professional journey.
        </p>
        <ol className="relative border-l border-gray-300">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
                <CircleIcon size={32} weight="duotone" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.companyName}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    {exp.position}
                  </span>
                </h3>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
