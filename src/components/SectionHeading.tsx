import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle below the heading */
  subtitle?: string;
  /** Additional CSS classes for the wrapper */
  className?: string;
  /** Text alignment (default: "left") */
  align?: "left" | "center" | "right";
}

const alignClasses = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
} as const;

/**
 * Section heading with a gradient underline that animates in width
 * when the element scrolls into view.
 */
function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = underlineRef.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className={`flex flex-col gap-2 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold text-[#f0f0f0]">
        {title}
      </h2>

      {/* Gradient underline */}
      <span
        ref={underlineRef}
        className="block h-1 w-24 md:w-32 rounded-full origin-left"
        style={{
          background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
          transform: "scaleX(0)",
        }}
      />

      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-[#a0a0b0] max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
