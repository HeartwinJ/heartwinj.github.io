import { type CSSProperties, type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  animated?: boolean;
  className?: string;
}

function GradientText({
  children,
  animated = false,
  className = "",
}: GradientTextProps) {
  const baseStyle: CSSProperties = {
    backgroundImage:
      "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080, #00d4ff)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    ...(animated
      ? {
          backgroundSize: "300% 300%",
          animation: "gradient-shift 6s ease infinite",
        }
      : {}),
  };

  return (
    <span className={className} style={baseStyle}>
      {children}
    </span>
  );
}

export default GradientText;
