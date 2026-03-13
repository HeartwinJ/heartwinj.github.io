import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SkillNode from "../components/SkillNode";
import skills, { categoryColors, type SkillCategory } from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Mobile",
  "AI/ML",
  "Tools & DevOps",
  "Database",
];

/** Pre-grouped skills by category, computed once at module level. */
const skillsByCategory = new Map<SkillCategory, typeof skills>(
  CATEGORIES.map((cat) => [cat, skills.filter((s) => s.category === cat)])
);

/** Pre-computed global stagger offset per category. */
const categoryOffsets: Map<SkillCategory, number> = (() => {
  const map = new Map<SkillCategory, number>();
  let off = 0;
  for (const cat of CATEGORIES) {
    map.set(cat, off);
    off += (skillsByCategory.get(cat) ?? []).length;
  }
  return map;
})();

function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

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

      // Category labels staggered reveal
      const labels = sectionRef.current?.querySelectorAll(".category-label");
      if (labels) {
        gsap.fromTo(
          labels,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#0a0a1a" }}
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, #7928ca 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className="text-4xl font-bold tracking-tight text-[#f0f0f0] md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Montserrat, sans-serif", opacity: 0 }}
          >
            Skills &amp; Technologies
          </h2>
          <div
            ref={underlineRef}
            className="mx-auto mt-4 h-1 w-32 origin-left rounded-full"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
              transform: "scaleX(0)",
            }}
          />
        </div>

        {/* Skills by category */}
        <div className="space-y-12">
          {CATEGORIES.map((category) => {
            const categorySkills = skillsByCategory.get(category) ?? [];
            const color = categoryColors[category];
            const baseIndex = categoryOffsets.get(category) ?? 0;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Category label */}
                <div className="category-label mb-6 flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <h3
                    className="text-lg font-semibold uppercase tracking-widest"
                    style={{ color, fontFamily: "Montserrat, sans-serif" }}
                  >
                    {category}
                  </h3>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, ${color}44, transparent)`,
                    }}
                  />
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {categorySkills.map((skill, i) => (
                    <SkillNode
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      category={skill.category}
                      color={color}
                      index={baseIndex + i}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
