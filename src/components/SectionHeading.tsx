import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: ReactNode;
  sub?: ReactNode;
}

function SectionHeading({ index, label, title, sub }: SectionHeadingProps) {
  return (
    <Reveal className="section-head">
      <p className="label section-head__rule">
        {index} / {label}
      </p>
      <h2 className="h2">{title}</h2>
      {sub && <p className="lede muted">{sub}</p>}
    </Reveal>
  );
}

export default SectionHeading;
