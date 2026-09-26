"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Layout, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SelectedWork";

type Column = {
  icon: LucideIcon;
  label: string;
  title: string;
  skills: { name: string; level: number }[];
};

const COLUMNS: Column[] = [
  {
    icon: Layout,
    label: "CLIENT",
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "React Native", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 93 },
    ],
  },
  {
    icon: Cpu,
    label: "SERVER",
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Express", level: 90 },
      { name: "REST / WebSockets", level: 88 },
      { name: "Redis", level: 80 },
      { name: "Auth & Sessions", level: 85 },
    ],
  },
  {
    icon: Database,
    label: "STORAGE",
    title: "Database & Systems",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "SQL", level: 90 },
      { name: "Drizzle ORM", level: 86 },
      { name: "Schema Design", level: 89 },
      { name: "Git / CI", level: 84 },
    ],
  },
];

export function TechMatrix() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden border-y border-line bg-panel/60"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading
          index="03 / PROFICIENCY MATRIX"
          title="Telemetry system matrix"
          blurb="Core competencies across the three layers I ship in — measured, not decorative."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {COLUMNS.map((col, i) => (
            <MatrixColumn key={col.title} column={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MatrixColumn({ column, index }: { column: Column; index: number }) {
  const Icon = column.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 border-b border-line pb-4">
        <span className="flex size-10 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
          <Icon className="size-5" strokeWidth={2} />
        </span>
        <div>
          <p className="mono-label text-[10px] text-muted">{column.label}</p>
          <h3 className="text-base font-semibold text-white">{column.title}</h3>
        </div>
      </div>

      <ul className="mt-5 space-y-4">
        {column.skills.map((skill, si) => (
          <li key={skill.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm text-ink/90">{skill.name}</span>
              <span className="mono-label text-[10px] text-muted">
                {skill.level}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-ground">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-dim to-cyan"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.1 + si * 0.06,
                  ease: "easeOut",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
