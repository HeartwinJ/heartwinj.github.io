import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional coloured glow around the card border */
  glow?: "cyan" | "purple" | "pink" | "none";
}

const glowShadows: Record<NonNullable<GlassCardProps["glow"]>, string> = {
  cyan: "0 0 20px rgba(0, 212, 255, 0.25), 0 0 60px rgba(0, 212, 255, 0.08)",
  purple:
    "0 0 20px rgba(121, 40, 202, 0.25), 0 0 60px rgba(121, 40, 202, 0.08)",
  pink: "0 0 20px rgba(255, 0, 128, 0.25), 0 0 60px rgba(255, 0, 128, 0.08)",
  none: "none",
};

/**
 * Simple glassmorphic panel — translucent background with blur and a
 * subtle white border. Use the `glow` prop for a coloured halo.
 */
function GlassCard({
  children,
  className = "",
  glow = "none",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-[1rem] bg-white/5 backdrop-blur-xl border border-white/10 ${className}`}
      style={{ boxShadow: glowShadows[glow] }}
    >
      {children}
    </div>
  );
}

export default GlassCard;
