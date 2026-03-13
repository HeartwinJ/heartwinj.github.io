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
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
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

      // Gradient underline animation
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

      // Bio text word-by-word reveal
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

      // Parallax on decorative orbs
      const orbRefs = [orb1Ref, orb2Ref, orb3Ref];
      const speeds = [60, -40, 50];
      orbRefs.forEach((ref, i) => {
        if (ref.current) {
          gsap.to(ref.current, {
            y: speeds[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#0a0a1a" }}
    >
      {/* Decorative floating orbs */}
      <div
        ref={orb1Ref}
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
        }}
      />
      <div
        ref={orb2Ref}
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7928ca 0%, transparent 70%)",
        }}
      />
      <div
        ref={orb3Ref}
        className="pointer-events-none absolute bottom-10 left-1/3 h-48 w-48 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #ff0080 0%, transparent 70%)",
        }}
      />

      {/* Decorative geometric shapes */}
      <motion.div
        className="pointer-events-none absolute right-16 top-32 h-16 w-16 rotate-45 rounded border border-white/5 opacity-30"
        animate={{ rotate: [45, 135, 225, 315, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-32 left-16 h-12 w-12 rounded-full border border-white/5 opacity-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className="text-4xl font-bold tracking-tight text-[#f0f0f0] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Montserrat, sans-serif", opacity: 0 }}
          >
            About Me
          </h2>
          <div
            ref={underlineRef}
            className="mx-auto mt-4 h-1 w-24 origin-left rounded-full"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
              transform: "scaleX(0)",
            }}
          />
        </div>

        {/* Bio card */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
            <p
              ref={bioRef}
              className="text-lg leading-relaxed text-[#a0a0b0] md:text-xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {renderBioNodes()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
