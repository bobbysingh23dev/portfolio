"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  ExternalLink,
  Layers,
  Server,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { GitHubIcon } from "./BrandIcons";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  accent: string; // gradient used when there's no screenshot
  // Fill these in with your real material — each is optional and only
  // renders when present, so nothing shows a dead link or fake metric.
  image?: string; // e.g. "/projects/mobile.png" (place file in /public)
  demo?: string; // live demo URL
  repo?: string; // GitHub repo URL
  impact?: string; // one-line outcome, e.g. "Cut p95 latency 320ms → 90ms"
};

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Cross-Platform Mobile App",
    description:
      "A React Native client backed by a real-time Node service — presence, live sync, and offline-first state across iOS and Android.",
    tech: ["React Native", "Node.js", "WebSockets", "PostgreSQL"],
    icon: Smartphone,
    accent:
      "radial-gradient(120% 120% at 20% 10%, rgba(56,189,248,0.28), transparent 55%), linear-gradient(160deg, #0e1626, #0a0d14)",
  },
  {
    id: "02",
    title: "Next.js Web Portal",
    description:
      "A server-rendered dashboard on the App Router — typed routes, streamed data, and a component system built for speed and clarity.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    icon: Layers,
    accent:
      "radial-gradient(120% 120% at 80% 10%, rgba(14,165,233,0.30), transparent 55%), linear-gradient(160deg, #101a2c, #0a0d14)",
  },
  {
    id: "03",
    title: "Node.js Real-Time API",
    description:
      "An Express service pushing sub-second updates with Redis pub/sub and Postgres as the source of truth — built to stay fast under load.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    icon: Server,
    accent:
      "radial-gradient(120% 120% at 30% 90%, rgba(56,189,248,0.24), transparent 55%), linear-gradient(160deg, #0d1524, #0a0d14)",
  },
  {
    id: "04",
    title: "PostgreSQL Relational Schema",
    description:
      "A normalized data model with type-safe access through Drizzle ORM — migrations, constraints, and indexes designed to scale cleanly.",
    tech: ["PostgreSQL", "SQL", "Drizzle ORM"],
    icon: Database,
    accent:
      "radial-gradient(120% 120% at 70% 90%, rgba(14,165,233,0.26), transparent 55%), linear-gradient(160deg, #0f1826, #0a0d14)",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="02 / SELECTED WORK"
        title="Curated full-stack projects"
        blurb="Four builds that span the whole stack — mobile client, web portal, real-time API, and the schema underneath."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const hasLinks = Boolean(project.demo || project.repo);
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur-md transition-colors hover:border-cyan/50"
    >
      {/* Preview panel — real screenshot if provided, else gradient */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-line sm:h-52">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: project.accent }}
          >
            <div aria-hidden className="absolute inset-0 opacity-40 grid-backdrop" />
            <Icon
              className="size-14 text-cyan/80 transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.3}
            />
          </div>
        )}
        <span className="mono-label absolute left-4 top-4 z-10 rounded-md border border-line bg-ground/70 px-2 py-1 text-[10px] text-cyan backdrop-blur-sm">
          PROJECT {project.id}
        </span>
        {(project.demo ?? project.repo) && (
          <a
            href={project.demo ?? project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-md border border-line bg-ground/70 text-muted backdrop-blur-sm transition-all hover:border-cyan/60 hover:text-cyan"
          >
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.impact && (
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan">
            <TrendingUp className="size-4 shrink-0" />
            {project.impact}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="mono-label rounded-md border border-line bg-ground/50 px-2.5 py-1 text-[10px] text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>

        {hasLinks && (
          <div className="mt-5 flex flex-wrap gap-3 border-t border-line pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cyan"
              >
                <ExternalLink className="size-4" />
                Live demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-cyan"
              >
                <GitHubIcon className="size-4" />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function SectionHeading({
  index,
  title,
  blurb,
}: {
  index: string;
  title: string;
  blurb: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="mono-label text-[11px] text-cyan">{index}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {blurb}
      </p>
    </div>
  );
}
