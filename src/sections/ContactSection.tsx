import { useState } from "react";
import Edge from "../components/Edge";
import Reveal from "../components/Reveal";
import { socialLinks } from "../components/socialLinks";

const EMAIL = "heartwinhaveluck@gmail.com";

/** A handful of fixed stars. The sun has set. */
const STARS = [
  [8, 18, 1.4], [16, 62, 1], [24, 30, 1.8], [33, 12, 1], [41, 74, 1.2],
  [52, 22, 1], [58, 84, 1.6], [64, 40, 1], [72, 8, 1.2], [79, 66, 1],
  [86, 28, 1.4], [92, 52, 1], [12, 88, 1], [46, 50, 0.8], [96, 86, 1.2],
];

function Moon() {
  return (
    <svg className="moon" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <mask id="moon-cut">
          <rect width="200" height="200" fill="#fff" />
          <circle cx="132" cy="78" r="70" fill="#000" />
        </mask>
      </defs>
      <circle cx="100" cy="100" r="74" fill="var(--night-ink)" mask="url(#moon-cut)" />
    </svg>
  );
}

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="sky sky--night contact">
      <svg className="stars" aria-hidden="true">
        {STARS.map(([x, y, r], i) => (
          <circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={r}
            fill="var(--night-ink)"
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
      </svg>
      <Moon />

      <div className="wrap contact__content">
        <Reveal>
          <p className="label section-head__rule">05 / Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mega">
            Say hello.
            <br />
            <span className="sunny">I'm up.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede muted">
            Got a project, a role, or a slightly strange idea? My inbox is
            open.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="contact__row">
          <a href={`mailto:${EMAIL}`} className="btn btn--sun">
            Write me an email <span className="arrow" aria-hidden="true">→</span>
          </a>
          <button type="button" className="btn btn--ghost-night" onClick={copyEmail}>
            <span aria-live="polite">{copied ? "Copied. Over to you." : "Copy address"}</span>
          </button>
        </Reveal>
        <Reveal delay={0.2} className="contact__socials">
          {socialLinks
            .filter((l) => !l.href.startsWith("mailto:"))
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {link.label} ↗
              </a>
            ))}
        </Reveal>
      </div>

      <Edge next="--night-deep" seed={21} />
    </section>
  );
}

export default ContactSection;
