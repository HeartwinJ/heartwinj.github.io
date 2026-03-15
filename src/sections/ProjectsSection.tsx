import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

type FilterCategory = "all" | "web" | "mobile" | "ai" | "other";

const filterTabs: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI", value: "ai" },
  { label: "Other", value: "other" },
];

function ProjectsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll("[data-project-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: "#0a0a1a" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent opacity-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
          }}
        >
          Projects
        </h2>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeFilter === tab.value
                  ? "text-white"
                  : "text-[#a0a0b0] hover:text-[#f0f0f0]"
              }`}
            >
              {activeFilter === tab.value && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(121,40,202,0.2))",
                    border: "1px solid rgba(0,212,255,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  data-project-card
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty"
                className="col-span-full py-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-[#a0a0b0]">
                  No projects in this category yet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
