import {
  Atom,
  Brain,
  CloudArrowUp,
  Code,
  Database,
  DeviceMobile,
  Eye,
  FileCss,
  FileHtml,
  FileJs,
  FileTs,
  Fire,
  GitBranch,
  Globe,
  GlobeHemisphereWest,
  Graph,
  GraphicsCard,
  Lightning,
  Package,
  Rows,
  TreeStructure,
  type Icon,
} from "@phosphor-icons/react";
import type { SkillCategory } from "../data/skills";

interface SkillChipProps {
  name: string;
  icon: string;
  category: SkillCategory;
  color: string;
}

const iconMap: Record<string, Icon> = {
  React: Atom,
  Vue: Globe,
  TypeScript: FileTs,
  JavaScript: FileJs,
  HTML5: FileHtml,
  CSS3: FileCss,
  Tailwind: Lightning,
  Node: GraphicsCard,
  Python: Code,
  REST: GlobeHemisphereWest,
  GraphQL: Graph,
  Flutter: DeviceMobile,
  Dart: Code,
  ReactNative: Atom,
  ML: Brain,
  TensorFlow: TreeStructure,
  NLP: Brain,
  CV: Eye,
  Git: GitBranch,
  Docker: Package,
  CICD: Rows,
  AWS: CloudArrowUp,
  Firebase: Fire,
  MongoDB: Database,
  PostgreSQL: Database,
  Redis: Database,
};

function SkillChip({ name, icon, color }: SkillChipProps) {
  const IconComponent = iconMap[icon] || Code;

  return (
    <div
      className="skill-chip group flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105"
      style={{
        borderColor: `${color}30`,
        background: `${color}08`,
        color: "#e0e0e0",
      }}
    >
      <IconComponent
        size={14}
        weight="duotone"
        style={{ color, flexShrink: 0 }}
      />
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
}

export default SkillChip;
