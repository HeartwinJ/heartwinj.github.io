import Edge from "../components/Edge";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experience";

function ExperienceSection() {
  return (
    <section id="experience" className="sky sky--dusk">
      <div className="wrap">
        <SectionHeading
          index="03"
          label="Experience"
          title="Where I've been."
          sub="The short version. The long version comes with coffee."
        />

        <ol className="jobs">
          {experiences.map((job, i) => (
            <Reveal as="li" key={job.companyName} delay={i * 0.05} className="job">
              <p className="label">{job.period}</p>
              <div>
                <h3 className="h3">{job.companyName}</h3>
                <p className="job__role">{job.position}</p>
              </div>
              <p>{job.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <Edge next="--twilight" seed={13} />
    </section>
  );
}

export default ExperienceSection;
