import Edge from "../components/Edge";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const GITHUB_AVATAR = "https://github.com/HeartwinJ.png";

function AboutSection() {
  return (
    <section id="about" className="sky sky--noon">
      <div className="wrap">
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              Hi. I'm Heartwin.
              <br />
              <span className="forest">I make software work.</span>
            </>
          }
        />

        <div className="about">
          <Reveal className="about__copy">
            <p className="lede">
              I build software end to end: the interface you tap, the API
              behind it, and the database behind that.
            </p>
            <p className="muted">
              Mostly Vue and React on the web, Flutter on phones, Python and
              Node on servers. Lately a lot of LLMs too: agents that simulate
              people, a bot that knows its F1, automations that clear out the
              busywork. Useful, sometimes surprising, rarely boring.
            </p>
            <p className="muted">
              I like learning new tools, and I like it more when they end up
              in something people use.
            </p>

            <dl className="facts">
              <dt className="label">Now</dt>
              <dd>Senior Software Engineer at Winjit Technologies</dd>
              <dt className="label">Since</dt>
              <dd>2020</dd>
              <dt className="label">Usual stack</dt>
              <dd>Vue · React · Flutter · Python · Node</dd>
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <figure className="polaroid">
              <span className="stamp label">Est. 2020</span>
              <img
                src={GITHUB_AVATAR}
                alt="Heartwin Haveluck"
                width={320}
                height={320}
                loading="lazy"
              />
              <figcaption>fig. 1: the developer, in natural light</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <Edge next="--golden" seed={5} />
    </section>
  );
}

export default AboutSection;
