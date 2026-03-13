import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import type { ProjectItem } from "../data/projects";

type ProjectCardProps = ProjectItem;

const categoryGradients: Record<ProjectItem["category"], string> = {
  web: "linear-gradient(135deg, #00d4ff 0%, #7928ca 100%)",
  mobile: "linear-gradient(135deg, #7928ca 0%, #ff0080 100%)",
  ai: "linear-gradient(135deg, #ff0080 0%, #00d4ff 100%)",
};

function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
  category,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;

      setTilt({ x: y, y: x });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] h-full flex flex-col"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image placeholder */}
        <div
          className="h-44 w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background: categoryGradients[category],
          }}
        >
          <span className="text-white/30 text-sm font-medium tracking-wider uppercase">
            {image}
          </span>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-[#f0f0f0]">{title}</h3>
          <p className="text-[#a0a0b0] text-sm mt-2 leading-relaxed flex-1">
            {description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-[#00d4ff] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#a0a0b0] hover:text-[#00d4ff] transition-colors duration-200"
            >
              <GithubLogo size={18} weight="bold" />
              <span>Source</span>
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#a0a0b0] hover:text-[#ff0080] transition-colors duration-200"
              >
                <ArrowSquareOut size={18} weight="bold" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
