import { useMemo } from "react";
import { roughPath } from "../utils/rough";

interface EdgeProps {
  /** CSS custom property name of the colour below this edge, e.g. "--noon". */
  next: string;
  seed?: number;
}

/** A hand-cut torn edge at the bottom of a section, in the next section's colour. */
function Edge({ next, seed = 1 }: EdgeProps) {
  const d = useMemo(() => roughPath({ seed }), [seed]);
  return (
    <svg
      className="edge"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={d} style={{ fill: `var(${next})` }} />
    </svg>
  );
}

export default Edge;
