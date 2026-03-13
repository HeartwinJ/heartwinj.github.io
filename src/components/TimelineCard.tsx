import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ExperienceItem } from "../data/experience";

gsap.registerPlugin(ScrollTrigger);

interface TimelineCardProps extends ExperienceItem {
  index: number;
  isLeft: boolean;
}

function TimelineCard({
  companyName,
  position,
  period,
  description,
  index,
  isLeft,
}: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const dot = dotRef.current;
    if (!card || !dot) return;

    const xStart = isLeft ? -80 : 80;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, x: xStart },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index, isLeft]);

  return (
    <div
      className={`relative flex items-center w-full mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Card */}
      <div
        ref={cardRef}
        className={`w-full md:w-[calc(50%-2rem)] opacity-0 ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        } ml-8 md:ml-0`}
      >
        <div className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
          {/* Connector line (desktop) */}
          <div
            className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px ${
              isLeft ? "-right-8" : "-left-8"
            }`}
            style={{
              background:
                "linear-gradient(90deg, rgba(0,212,255,0.5), rgba(121,40,202,0.5))",
            }}
          />

          <h3
            className="text-lg font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
            }}
          >
            {companyName}
          </h3>
          <p className="text-[#f0f0f0] font-medium mt-1">{position}</p>
          <p className="text-sm text-[#a0a0b0] mt-1">{period}</p>
          <p className="text-[#a0a0b0] mt-3 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Timeline dot */}
      <div
        ref={dotRef}
        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center"
      >
        <div className="w-4 h-4 rounded-full border-2 border-[#00d4ff] bg-[#0a0a1a] shadow-[0_0_12px_rgba(0,212,255,0.5)]" />
      </div>
    </div>
  );
}

export default TimelineCard;
