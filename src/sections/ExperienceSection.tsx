import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineCard from "../components/TimelineCard";
import { experiences } from "../data/experience";

gsap.registerPlugin(ScrollTrigger);

function ExperienceSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const line = lineRef.current;
    if (!heading || !line) return;

    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate underline
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

      // Animate the timeline line growing
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: "#0a0a1a" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="mb-16 flex flex-col items-center">
          <h2
            ref={headingRef}
            className="text-3xl font-bold tracking-tight text-[#f0f0f0] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Montserrat, sans-serif", opacity: 0 }}
          >
            Experience
          </h2>
          <div
            ref={underlineRef}
            className="mt-3 h-1 w-20 rounded-full"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
              transform: "scaleX(0)",
            }}
          />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central vertical line */}
          <div
            ref={lineRef}
            className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, #00d4ff, #7928ca, #ff0080)",
              boxShadow:
                "0 0 8px rgba(0,212,255,0.3), 0 0 20px rgba(121,40,202,0.2)",
            }}
          />

          {/* Timeline cards */}
          {experiences.map((exp, index) => (
            <TimelineCard
              key={index}
              {...exp}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
