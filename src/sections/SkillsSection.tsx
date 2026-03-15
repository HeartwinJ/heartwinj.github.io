import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillChip from "../components/SkillNode";
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

const skillsByCategory = new Map<SkillCategory, typeof skills>(
  CATEGORIES.map((cat) => [cat, skills.filter((s) => s.category === cat)])
);

function SkillsSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const backpackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
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
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: underlineRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (backpackRef.current) {
        gsap.fromTo(
          backpackRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: backpackRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const rows = panelRef.current?.querySelectorAll(".skill-row");
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: backpackRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, panelRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="skills" ref={panelRef}>
      {/* Heading */}
      <div className="mb-8">
        <h2
          ref={headingRef}
          className="text-3xl font-bold tracking-tight text-[#f0f0f0] md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Montserrat, sans-serif", opacity: 0 }}
        >
          Skills Backpack
        </h2>
        <div
          ref={underlineRef}
          className="mt-3 h-1 w-24 origin-left rounded-full"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
            transform: "scaleX(0)",
          }}
        />
      </div>

      {/* Backpack container */}
      <div
        ref={backpackRef}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:p-6"
        style={{ opacity: 0 }}
      >
        <div className="space-y-3">
          {CATEGORIES.map((category) => {
            const categorySkills = skillsByCategory.get(category) ?? [];
            const color = categoryColors[category];

            return (
              <div
                key={category}
                className="skill-row grid items-start gap-x-3 gap-y-2"
                style={{ gridTemplateColumns: "7rem 1fr", opacity: 0 }}
              >
                {/* Category label */}
                <span
                  className="pt-1.5 text-[11px] font-semibold uppercase tracking-widest"
                  style={{ color: `${color}cc` }}
                >
                  {category}
                </span>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillChip
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      category={skill.category}
                      color={color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
