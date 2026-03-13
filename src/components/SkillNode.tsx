import { motion } from "framer-motion";
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

interface SkillNodeProps {
  name: string;
  icon: string;
  category: SkillCategory;
  color: string;
  index: number;
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

function SkillNode({ name, icon, category, color, index }: SkillNodeProps) {
  const IconComponent = iconMap[icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className="group relative"
    >
      <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-xl transition-colors duration-300 group-hover:border-transparent">
        {/* Hover glow border */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 20px ${color}33, inset 0 0 20px ${color}11`,
            border: `1px solid ${color}66`,
            borderRadius: "1rem",
          }}
        />

        {/* Icon */}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
          style={{
            background: `${color}15`,
          }}
        >
          <IconComponent
            size={28}
            weight="duotone"
            className="transition-colors duration-300"
            style={{ color: color }}
          />
        </div>

        {/* Skill name */}
        <span className="text-sm font-medium text-[#f0f0f0] transition-colors duration-300">
          {name}
        </span>

        {/* Category tag revealed on hover */}
        <span
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:-bottom-3 group-hover:opacity-100"
          style={{
            background: `${color}22`,
            color: color,
            border: `1px solid ${color}44`,
          }}
        >
          {category}
        </span>
      </div>
    </motion.div>
  );
}

export default SkillNode;
