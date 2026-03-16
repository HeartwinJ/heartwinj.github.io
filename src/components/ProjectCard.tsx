import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import type { ProjectItem } from "../data/projects";

function GitlabIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M230.15 117.1 210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41L25.85 117.1a57.19 57.19 0 0 0 22.7 60.66l73.27 51.76a11.91 11.91 0 0 0 12.36 0l73.27-51.76a57.19 57.19 0 0 0 22.7-60.66Z" />
    </svg>
  );
}

type ProjectCardProps = ProjectItem;

const categoryGradients: Record<ProjectItem["category"], string> = {
  web: "linear-gradient(135deg, #00d4ff 0%, #7928ca 100%)",
  mobile: "linear-gradient(135deg, #7928ca 0%, #ff0080 100%)",
  ai: "linear-gradient(135deg, #ff0080 0%, #00d4ff 100%)",
  other: "linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)",
};

function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
  imageBg,
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
        {/* Image / placeholder */}
        <div
          className="h-44 w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background: imageBg || categoryGradients[category],
          }}
        >
          {image && !image.endsWith("-placeholder") ? (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-contain p-6"
              loading="lazy"
            />
          ) : (
            <span className="text-white/30 text-sm font-medium tracking-wider uppercase">
              {title}
            </span>
          )}
          {!imageBg && (
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          )}
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
          {(githubUrl || liveUrl) && (
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[#a0a0b0] hover:text-[#00d4ff] transition-colors duration-200"
                >
                  {githubUrl.includes("gitlab.com") ? (
                    <GitlabIcon size={18} />
                  ) : (
                    <GithubLogo size={18} weight="bold" />
                  )}
                  <span>Source</span>
                </a>
              )}
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
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
