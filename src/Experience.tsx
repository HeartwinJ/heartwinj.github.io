import { CircleIcon } from "@phosphor-icons/react";

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
          <li className="mb-12 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
              <CircleIcon size={32} weight="duotone" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Company A{" "}
                <span className="text-sm font-normal text-gray-500">
                  Frontend Developer (2020-2022)
                </span>
              </h3>
              <p className="text-gray-700 mt-2">
                Worked on building scalable web applications using React and
                TypeScript.
              </p>
            </div>
          </li>
          <li className="mb-12 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
              <CircleIcon size={32} weight="duotone" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Company B{" "}
                <span className="text-sm font-normal text-gray-500">
                  Full Stack Developer (2018-2020)
                </span>
              </h3>
              <p className="text-gray-700 mt-2">
                Developed REST APIs and contributed to both backend and frontend
                projects.
              </p>
            </div>
          </li>
          <li className="ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-4 ring-4 ring-white">
              <CircleIcon size={32} weight="duotone" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Company C{" "}
                <span className="text-sm font-normal text-gray-500">
                  Intern (2017-2018)
                </span>
              </h3>
              <p className="text-gray-700 mt-2">
                Assisted in developing internal tools and automation scripts.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experience;
