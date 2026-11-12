import Edge from "../components/Edge";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { projects, type ProjectItem } from "../data/projects";

const categoryArt: Record<ProjectItem["category"], { bg: string; label: string }> = {
  ai: { bg: "var(--forest)", label: "AI" },
  mobile: { bg: "var(--stamp)", label: "Mobile" },
  web: { bg: "var(--sun-deep)", label: "Web" },
  other: { bg: "var(--twilight)", label: "Tooling" },
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const art = categoryArt[project.category];

  return (
    <Reveal
      as="li"
      delay={(index % 3) * 0.06}
      className={`card ${project.wide ? "card--wide" : ""}`}
    >
      <div
        className="card__art"
        style={{ background: project.imageBg ?? art.bg }}
      >
        {project.image ? (
          <img src={project.image} alt="" loading="lazy" />
        ) : (
          <span className="card__art-word" aria-hidden="true">
            {project.title}
          </span>
        )}
        <span className="stamp">{art.label}</span>
      </div>

      <div className="card__body">
        <h3 className="h3">{project.title}</h3>
        <p>{project.description}</p>
        <p className="label card__stack">{project.techStack.join(" · ")}</p>

        {(project.githubUrl || project.liveUrl) && (
          <div className="card__links">
            {project.githubUrl && (
              <a
                className="link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                className="link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.liveUrl.includes("discord.com") ? "Add to Discord ↗" : "Visit ↗"}
              </a>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

function ProjectsSection() {
  return (
    <section id="work" className="sky sky--golden">
      <div className="wrap">
        <SectionHeading
          index="02"
          label="Work"
          title="Things I've built."
          sub="Some for clients, one for a government, one for Formula 1 fans. Most of them shipped."
        />

        <ul className="cards">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </ul>
      </div>

      <Edge next="--dusk" seed={8} />
    </section>
  );
}

export default ProjectsSection;
