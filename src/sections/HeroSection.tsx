import { useMemo } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { roughPath } from "../utils/rough";
import Edge from "../components/Edge";

/** A painted-looking sun that sinks behind the hills as you scroll. */
function Sun() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 360]);
  const fill = useTransform(scrollY, [0, 800], ["#f9b62a", "#ea8455"]);

  return (
    <motion.div
      className="sun"
      aria-hidden="true"
      style={reduce ? undefined : { y }}
    >
      <svg viewBox="0 0 200 200" overflow="visible">
        <defs>
          <filter id="sun-wobble" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" scale="8" />
          </filter>
          <radialGradient id="sun-halo">
            <stop offset="55%" stopColor="#fbcf5b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fbcf5b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#sun-halo)" />
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          filter="url(#sun-wobble)"
          style={{ fill: reduce ? "#f9b62a" : fill }}
        />
      </svg>
    </motion.div>
  );
}

function Hills() {
  const far = useMemo(
    () => roughPath({ seed: 11, height: 200, base: 0.38, amp: 0.16, waves: 1.2, jitter: 0.03, step: 14 }),
    []
  );
  const near = useMemo(
    () => roughPath({ seed: 23, height: 200, base: 0.62, amp: 0.12, waves: 0.9, jitter: 0.03, step: 14 }),
    []
  );
  return (
    <svg
      className="hills"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={far} style={{ fill: "var(--sage)" }} />
      <path d={near} style={{ fill: "var(--forest)" }} />
    </svg>
  );
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function HeroSection() {
  return (
    <section id="top" className="hero sky--morning">
      <Sun />
      <Hills />

      <div className="wrap hero__content">
        <motion.p className="label" {...rise(0.1)}>
          Heartwin Haveluck · Senior Software Engineer
        </motion.p>

        <motion.h1 className="mega" {...rise(0.2)}>
          Sketched at dawn.
          <br />
          <span className="forest">Shipped at dusk.</span>
        </motion.h1>

        <motion.p className="lede muted" {...rise(0.35)}>
          Web, mobile and AI, end to end. Somewhere between the coffee and
          the sunset, it ships.
        </motion.p>

        <motion.div className="hero__ctas" {...rise(0.5)}>
          <a href="#work" className="btn">
            See the work <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn--ghost">
            Say hello
          </a>
        </motion.div>
      </div>

      <Edge next="--noon" seed={2} />
    </section>
  );
}

export default HeroSection;
