"use client";

import { motion } from "framer-motion";
import { Bot, Check, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SelectedWork";

type Col = {
  icon: LucideIcon;
  label: string;
  title: string;
  blurb: string;
  points: string[];
};

const COLUMNS: Col[] = [
  {
    icon: Sparkles,
    label: "AUGMENTED WORKFLOW",
    title: "I build with AI",
    blurb: "AI is part of how I ship — a force multiplier, not a gimmick.",
    points: [
      "AI pair programming with Claude Code, Cursor & Copilot",
      "AI-assisted code review, refactors & test generation",
      "Rapid prototyping and scaffolding to move faster",
      "Automated docs and commit / PR summaries",
    ],
  },
  {
    icon: Bot,
    label: "PRODUCT FEATURES",
    title: "I build AI in",
    blurb: "And I ship AI as a product feature, end to end.",
    points: [
      "LLM-powered chat, copilots & assistants",
      "RAG / semantic search over your own data",
      "Structured extraction & classification pipelines",
      "Agents with tool-calling and function execution",
      "Prompt design, guardrails & evals for reliability",
    ],
  },
];

const TOOLKIT = [
  "LLM APIs",
  "RAG",
  "Embeddings",
  "Vector DBs",
  "AI SDK",
  "Function calling",
  "Agents",
  "Prompt Engineering",
  "Evals",
];

export function AiEngineering() {
  return (
    <section id="ai" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="04 / AI ENGINEERING"
        title="Full-stack in the AI era"
        blurb="Two sides of the same skill — I use AI to build faster, and I build AI into the products I ship."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {COLUMNS.map((col, i) => (
          <ColumnCard key={col.title} col={col} index={i} />
        ))}
      </div>

      {/* AI toolkit */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="mt-5 flex flex-col gap-4 rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center"
      >
        <span className="mono-label shrink-0 text-[10px] text-cyan">
          AI TOOLKIT
        </span>
        <ul className="flex flex-wrap gap-2">
          {TOOLKIT.map((t) => (
            <li
              key={t}
              className="mono-label rounded-md border border-line bg-ground/50 px-3 py-1.5 text-[11px] text-ink/80 transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

function ColumnCard({ col, index }: { col: Col; index: number }) {
  const Icon = col.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
          <Icon className="size-5" strokeWidth={2} />
        </span>
        <div>
          <p className="mono-label text-[10px] text-muted">{col.label}</p>
          <h3 className="text-lg font-semibold text-white">{col.title}</h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{col.blurb}</p>

      <ul className="mt-5 space-y-3">
        {col.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-ink/90">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-cyan/30 bg-cyan/10 text-cyan">
              <Check className="size-3" strokeWidth={3} />
            </span>
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
