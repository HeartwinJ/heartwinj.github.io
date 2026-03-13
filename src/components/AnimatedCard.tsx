import { useRef, type ReactNode, type MouseEvent, useCallback } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Maximum tilt angle in degrees (default: 8) */
  maxTilt?: number;
  /** Perspective distance in px (default: 1000) */
  perspective?: number;
  /** Glow color that follows the cursor (default: "rgba(0, 212, 255, 0.15)") */
  glowColor?: string;
}

/**
 * Glassmorphic card with a 3D tilt effect that tracks the pointer.
 * Uses vanilla pointer math for smooth, performant animation.
 */
function AnimatedCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 1000,
  glowColor = "rgba(0, 212, 255, 0.15)",
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Normalised offset (-1 … 1)
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      const rotateX = ((centerY - y) / centerY) * maxTilt;

      card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Move glow highlight to follow cursor
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`;
    },
    [maxTilt, perspective, glowColor]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
    glow.style.opacity = "0";
  }, [perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[1rem] bg-white/5 backdrop-blur-xl border border-white/10 transition-transform duration-300 ease-out ${className}`}
    >
      {/* Cursor-following glow overlay */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default AnimatedCard;
