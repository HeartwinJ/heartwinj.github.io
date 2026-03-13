import {
  useRef,
  useCallback,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";

interface MagneticButtonProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** How strongly the button is attracted (0–1, default 0.35) */
  strength?: number;
  /** Click handler */
  onClick?: () => void;
  /** Optional inline styles */
  style?: CSSProperties;
}

/**
 * Button that subtly shifts toward the cursor on hover, creating a
 * "magnetic" feel. Springs back smoothly when the cursor leaves.
 */
function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  onClick,
  style,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const btn = btnRef.current;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = (e.clientX - centerX) * strength;
      const dy = (e.clientY - centerY) * strength;

      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = "translate(0px, 0px)";
  }, []);

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-[#f0f0f0] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3),0_0_60px_rgba(0,212,255,0.1)] ${className}`}
      style={style}
    >
      {/* Gradient border overlay — visible on hover via group */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        aria-hidden
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default MagneticButton;
