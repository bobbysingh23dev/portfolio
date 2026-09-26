"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Layout, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SelectedWork";

type Column = {
  icon: LucideIcon;
  label: string;
  title: string;
  skills: string[];
};

const COLUMNS: Column[] = [
  {
    icon: Layout,
    label: "CLIENT",
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    icon: Cpu,
    label: "SERVER",
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "REST",
      "WebSockets",
      "Redis",
      "Auth & Sessions",
    ],
  },
  {
    icon: Database,
    label: "STORAGE",
    title: "Database & Systems",
    skills: [
      "PostgreSQL",
      "SQL",
      "Drizzle ORM",
      "Schema Design",
      "Git",
      "CI/CD",
    ],
  },
  {
    icon: Sparkles,
    label: "INTELLIGENCE",
    title: "AI & LLMs",
    skills: [
      "LLM APIs",
      "RAG",
      "Embeddings",
      "Vector Search",
      "AI SDK",
      "Prompt Engineering",
      "Agents & Tools",
      "Evals",
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
          index="03 / TECH STACK"
          title="The tools I build with"
          blurb="Grouped by the layers I ship in — client, server, the data underneath, and the AI on top."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      <ul className="mt-5 flex flex-wrap gap-2">
        {column.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-line bg-ground/50 px-3 py-1.5 text-sm text-ink/90 transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
