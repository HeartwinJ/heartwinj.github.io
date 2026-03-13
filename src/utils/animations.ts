import type { Variants, Transition } from "framer-motion";

/* ── Easing presets ──────────────────────────────────────────── */

export const easings = {
  /** Smooth deceleration — ideal for entrances */
  smooth: "power3.out",
  /** Snappy with slight overshoot */
  snappy: "back.out(1.4)",
  /** Elastic spring feel */
  elastic: "elastic.out(1, 0.5)",
  /** Gentle ease for subtle motions */
  gentle: "power2.inOut",
  /** CSS cubic-bezier equivalents for Framer Motion */
  smoothCubic: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  snappyCubic: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number],
} as const;

/* ── GSAP ScrollTrigger defaults ─────────────────────────────── */

/** Default fade-in-up animation for scroll-triggered elements. */
export const scrollFadeInUp = {
  from: { opacity: 0, y: 60 },
  to: { opacity: 1, y: 0, duration: 1, ease: easings.smooth },
  scrollTrigger: {
    start: "top 85%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
} as const;

/** Staggered children animation for scroll-triggered containers. */
export const scrollStagger = {
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0, duration: 0.8, ease: easings.smooth, stagger: 0.15 },
  scrollTrigger: {
    start: "top 85%",
    end: "top 20%",
    toggleActions: "play none none reverse",
  },
} as const;

/** Scale-in animation for scroll-triggered elements. */
export const scrollScaleIn = {
  from: { opacity: 0, scale: 0.9 },
  to: { opacity: 1, scale: 1, duration: 1, ease: easings.smooth },
  scrollTrigger: {
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
} as const;

/* ── Framer Motion spring transitions ────────────────────────── */

export const springTransition: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 300,
};

export const gentleSpringTransition: Transition = {
  type: "spring",
  damping: 30,
  stiffness: 200,
};

/* ── Framer Motion variants ──────────────────────────────────── */

/** Section entrance — fades up when the section scrolls into view. */
export const sectionEntrance: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.smoothCubic },
  },
};

/** Stagger container — use on parent, children use `staggerChild`. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/** Stagger child — pair with `staggerContainer` on the parent. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smoothCubic },
  },
};

/** Card hover — scale up with subtle lift. */
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -4,
    transition: { duration: 0.3, ease: easings.smoothCubic },
  },
};

/** Text reveal — character-by-character or word-by-word appearance. */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.5, ease: easings.smoothCubic },
  }),
};

/** Fade-in variant for simple opacity transitions. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smoothCubic },
  },
};
