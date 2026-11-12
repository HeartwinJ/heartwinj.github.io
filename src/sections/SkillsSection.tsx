import Edge from "../components/Edge";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { skillGroups } from "../data/skills";

function SkillsSection() {
  return (
    <section id="skills" className="sky sky--twilight">
      <div className="wrap">
        <SectionHeading
          index="04"
          label="Skills"
          title={
            <>
              Tools of the trade.
              <br />
              <span className="sunny">All of them used for real.</span>
            </>
          }
        />

        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name} delay={(i % 3) * 0.06} className="skill-group">
              <p className="label">{group.name}</p>
              <p className="muted small">{group.note}</p>
              <ul className="chips">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <Edge next="--night" seed={17} />
    </section>
  );
}

export default SkillsSection;
