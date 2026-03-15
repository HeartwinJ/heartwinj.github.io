import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const BIO_TEXT =
  "I am a passionate software developer who loves building robust web and mobile applications. Over the years, I have contributed to a variety of projects, collaborating with cross-functional teams and utilizing modern technologies to deliver impactful solutions. My journey has allowed me to work on everything from intuitive user interfaces to scalable backend systems. I am always eager to learn new tools, embrace challenges, and create products that make a difference.";

const HIGHLIGHTED_PHRASES = [
  "passionate software developer",
  "impactful solutions",
  "intuitive user interfaces",
  "scalable backend systems",
  "make a difference",
];

/** Segments the bio text into plain and highlighted spans. Computed once at module level. */
type BioSegment = { text: string; highlighted: boolean };

function buildBioSegments(source: string, phrases: string[]): BioSegment[] {
  const segments: BioSegment[] = [];
  let remaining = source;

  while (remaining.length > 0) {
    let earliestIndex = Infinity;
    let earliestPhrase = "";

    for (const phrase of phrases) {
      const idx = remaining.toLowerCase().indexOf(phrase.toLowerCase());
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        earliestPhrase = phrase;
      }
    }

    if (earliestPhrase && earliestIndex !== Infinity) {
      if (earliestIndex > 0) {
        segments.push({ text: remaining.slice(0, earliestIndex), highlighted: false });
      }
      segments.push({
        text: remaining.slice(earliestIndex, earliestIndex + earliestPhrase.length),
        highlighted: true,
      });
      remaining = remaining.slice(earliestIndex + earliestPhrase.length);
    } else {
      segments.push({ text: remaining, highlighted: false });
      remaining = "";
    }
  }

  return segments;
}

const BIO_SEGMENTS = buildBioSegments(BIO_TEXT, HIGHLIGHTED_PHRASES);

function renderBioNodes(): React.ReactNode[] {
  return BIO_SEGMENTS.map((seg, i) => (
    <span
      key={i}
      className={
        seg.highlighted
          ? "bio-word bg-gradient-to-r from-[#00d4ff] via-[#7928ca] to-[#ff0080] bg-clip-text text-transparent font-semibold"
          : "bio-word"
      }
    >
      {seg.text}
    </span>
  ));
}

function AboutSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (underlineRef.current) {
        gsap.fromTo(
          underlineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: underlineRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (bioRef.current) {
        const words = bioRef.current.querySelectorAll(".bio-word");
        gsap.fromTo(
          words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bioRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" ref={panelRef} className="relative">
      {/* Decorative geometric shapes */}
      <motion.div
        className="pointer-events-none absolute right-4 top-8 h-12 w-12 rotate-45 rounded border border-white/5 opacity-30 lg:right-8 lg:top-12"
        animate={{ rotate: [45, 135, 225, 315, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-8 left-4 h-8 w-8 rounded-full border border-white/5 opacity-20 lg:left-8"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <div className="mb-8">
        <h2
          ref={headingRef}
          className="text-3xl font-bold tracking-tight text-[#f0f0f0] md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Montserrat, sans-serif", opacity: 0 }}
        >
          About Me
        </h2>
        <div
          ref={underlineRef}
          className="mt-3 h-1 w-20 origin-left rounded-full"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
            transform: "scaleX(0)",
          }}
        />
      </div>

      {/* Bio card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
        <p
          ref={bioRef}
          className="text-base leading-relaxed text-[#a0a0b0] md:text-lg"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {renderBioNodes()}
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
