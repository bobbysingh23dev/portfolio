"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Dumbbell,
  ExternalLink,
  Music,
  Ticket,
  TrendingUp,
  Truck,
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

// TODO: tech tags below are my best guess from each product — correct any that
// are off, and add a screenshot per card via `image: "/projects/<name>.png"`.
const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Illumify — AI-Native ERP",
    description:
      "An AI-native ERP/MRP platform for regulated, complex industries — inventory, demand forecasting, production scheduling and compliance in one system, with web dashboards and native mobile apps.",
    tech: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AI/LLM"],
    icon: Boxes,
    accent:
      "radial-gradient(120% 120% at 20% 10%, rgba(56,189,248,0.28), transparent 55%), linear-gradient(160deg, #0e1626, #0a0d14)",
    demo: "https://illumify.com/",
  },
  {
    id: "02",
    title: "TrackiPal — Shopify × PayPal",
    description:
      "A Shopify app that syncs order tracking to PayPal in real time — cutting manual entry, lowering reserves and chargebacks, with bulk historical sync and a live status dashboard.",
    tech: ["Shopify App", "Node.js", "PayPal API", "React"],
    icon: Truck,
    accent:
      "radial-gradient(120% 120% at 80% 10%, rgba(14,165,233,0.30), transparent 55%), linear-gradient(160deg, #101a2c, #0a0d14)",
    demo: "https://www.trackipal.com/",
  },
  {
    id: "03",
    title: "FitZone — Fitness & Gym App",
    description:
      "A cross-platform fitness app — one membership across a network of gyms, class booking, tailored workout plans and in-app progress tracking, on iOS and Android.",
    tech: ["React Native", "Node.js", "REST API", "iOS · Android"],
    icon: Dumbbell,
    accent:
      "radial-gradient(120% 120% at 30% 90%, rgba(56,189,248,0.24), transparent 55%), linear-gradient(160deg, #0d1524, #0a0d14)",
    demo: "https://play.google.com/store/apps/details?id=com.infominez.fitZone&hl=en_IN",
  },
  {
    id: "04",
    title: "MusicArt — Web3 Marketplace",
    description:
      "A Web3 NFT marketplace built for musicians to tokenize and trade encrypted music — artist drops, discovery, and a planet-friendly, low-impact minting flow.",
    tech: ["Next.js", "Web3", "Smart Contracts", "NFT"],
    icon: Music,
    accent:
      "radial-gradient(120% 120% at 70% 90%, rgba(14,165,233,0.26), transparent 55%), linear-gradient(160deg, #0f1826, #0a0d14)",
    demo: "https://musicart.io/",
  },
  {
    id: "05",
    title: "EventMozo — Event Management",
    description:
      "A global, web-based event management and ticketing platform — organizers create, promote, manage and sell tickets, with QR-code check-in and on-site ticket scanning. (Frontend engineering.)",
    tech: ["React", "Next.js", "TypeScript", "QR Check-in"],
    icon: Ticket,
    accent:
      "radial-gradient(120% 120% at 50% 10%, rgba(56,189,248,0.26), transparent 55%), linear-gradient(160deg, #0e1826, #0a0d14)",
    demo: "https://eventmozo.com/",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="02 / SELECTED WORK"
        title="Shipped, in production"
        blurb="Real products across the stack — an AI-native ERP, a Shopify × PayPal app, a fitness app, a Web3 marketplace, and an event-ticketing platform."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-5">
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
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur-md transition-colors hover:border-cyan/50 sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
    >
      {/* Preview panel — real screenshot if provided, else gradient */}
      <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-line sm:h-36">
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
              className="size-10 text-cyan/80 transition-transform duration-500 group-hover:scale-110"
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
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.impact && (
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan">
            <TrendingUp className="size-4 shrink-0" />
            {project.impact}
          </p>
        )}

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="mono-label rounded-md border border-line bg-ground/50 px-2 py-0.5 text-[9px] text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>

        {hasLinks && (
          <div className="mt-4 flex flex-wrap gap-3 border-t border-line pt-4">
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
