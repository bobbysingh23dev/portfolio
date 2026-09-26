"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Database,
  Layers,
  Server,
  Smartphone,
  Component,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "../lib/site";

type OrbitCard = {
  id: string;
  label: string;
  title: string;
  meta: string;
  icon: LucideIcon;
};

const ORBIT: OrbitCard[] = [
  { id: "RN", label: "MOBILE", title: "React Native", meta: "iOS · Android", icon: Smartphone },
  { id: "RJS", label: "UI LAYER", title: "React.js", meta: "Component systems", icon: Component },
  { id: "NXT", label: "FRAMEWORK", title: "Next.js", meta: "App Router · SSR", icon: Layers },
  { id: "NODE", label: "RUNTIME", title: "Node.js", meta: "APIs · WebSockets", icon: Server },
  { id: "PG", label: "DATA", title: "PostgreSQL", meta: "Relational core", icon: Database },
  { id: "TS", label: "TYPES", title: "TypeScript", meta: "End-to-end safety", icon: Braces },
];

// Distribute 6 cards evenly around a circle, starting from the top (-90deg).
// Keeping the left/right axis clear leaves horizontal room for the name.
const START_ANGLE = -90;
const STEP = 360 / ORBIT.length;
const RADIUS = 41; // % of the square orbit container
// Gentle resting tilt per card for an organic, industrial feel.
const REST_TILT = [-8, 6, -5, 7, -6, 5];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-5 pb-10 pt-24 md:pt-16"
    >
      {/* Ambient radial glow + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(56,189,248,0.05) 35%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ground"
      />

      {/* ---------- Desktop / tablet: radial orbit ---------- */}
      <div className="relative z-10 hidden aspect-square w-[min(92vw,720px)] md:block">
        <div className="absolute left-1/2 top-1/2 z-20 w-[min(80vw,420px)] -translate-x-1/2 -translate-y-1/2 text-center">
          <Identity />
        </div>

        {ORBIT.map((card, i) => {
          const angle = ((START_ANGLE + i * STEP) * Math.PI) / 180;
          const x = 50 + RADIUS * Math.cos(angle);
          const y = 50 + RADIUS * Math.sin(angle);
          return (
            <OrbitCardView
              key={card.id}
              card={card}
              x={x}
              y={y}
              tilt={REST_TILT[i]}
              delay={0.2 + i * 0.08}
            />
          );
        })}
      </div>

      {/* ---------- Mobile: stacked identity + card grid ---------- */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center md:hidden">
        <Identity />
        <div className="mt-10 grid w-full grid-cols-2 gap-3">
          {ORBIT.map((card, i) => (
            <StackCard key={card.id} card={card} delay={0.15 + i * 0.06} />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#work"
        className="relative z-10 mt-10 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-cyan md:mt-2"
      >
        View selected work <ArrowUpRight className="size-3.5" />
      </a>
    </section>
  );
}

function Identity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="mono-label inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-[10px] text-cyan backdrop-blur-md">
        <span className="size-1.5 animate-pulse rounded-full bg-cyan" />
        Available for full-stack roles
      </span>
      <h1 className="mt-5 text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl">
        {SITE.name}
      </h1>
      <p className="mono-label mt-3 text-sm text-cyan sm:text-base">{SITE.role}</p>
      <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted">
        I build products end to end — from the mobile screen to the Postgres
        schema.
      </p>
    </motion.div>
  );
}

/** Shared inner content for both orbit and stacked cards. */
function CardBody({ card, active }: { card: OrbitCard; active: boolean }) {
  const Icon = card.icon;
  return (
    <>
      <div className="flex items-center gap-2">
        <span
          className={`flex size-8 items-center justify-center rounded-md border transition-colors sm:size-9 ${
            active
              ? "border-cyan/60 bg-cyan/10 text-cyan"
              : "border-line bg-ground/60 text-ink"
          }`}
        >
          <Icon className="size-4 sm:size-[18px]" strokeWidth={2} />
        </span>
        <span className="mono-label text-[9px] text-muted">{card.label}</span>
      </div>
      <p className="mt-2.5 text-sm font-semibold text-white sm:text-[15px]">
        {card.title}
      </p>
      <p className="mono-label mt-0.5 text-[9px] text-muted">{card.meta}</p>
    </>
  );
}

function OrbitCardView({
  card,
  x,
  y,
  tilt,
  delay,
}: {
  card: OrbitCard;
  x: number;
  y: number;
  tilt: number;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute z-10"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 14 }}
    >
      <motion.button
        type="button"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        animate={{
          rotate: hovered ? 0 : tilt,
          scale: hovered ? 1.2 : 1,
          zIndex: hovered ? 40 : 10,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={`group relative -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-surface/80 p-3 text-left backdrop-blur-md sm:p-4 ${
          hovered
            ? "border-cyan/70 shadow-[0_0_34px_-6px_var(--color-cyan)]"
            : "border-line shadow-[0_10px_30px_-18px_#000]"
        }`}
      >
        <CardBody card={card} active={hovered} />
      </motion.button>
    </motion.div>
  );
}

function StackCard({ card, delay }: { card: OrbitCard; delay: number }) {
  const [active, setActive] = useState(false);
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`rounded-xl border bg-surface/80 p-3 text-left backdrop-blur-md transition-colors ${
        active ? "border-cyan/60" : "border-line"
      }`}
    >
      <CardBody card={card} active={active} />
    </motion.button>
  );
}
