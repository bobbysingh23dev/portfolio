"use client";

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
const START_ANGLE = -90;
const STEP = 360 / ORBIT.length;
const RADIUS = 41; // % of the square orbit container

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

      {/* ---------- Desktop / tablet: rotating radial orbit ---------- */}
      <div className="relative z-10 hidden aspect-square w-[min(94vw,780px)] md:block">
        {/* Faint guide ring */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 size-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/40"
        />

        {/* Center identity — stays fixed while the ring turns */}
        <div className="absolute left-1/2 top-1/2 z-30 w-[min(80vw,420px)] -translate-x-1/2 -translate-y-1/2 text-center">
          <Identity />
        </div>

        {/* Rotating ring of cards */}
        <div className="orbit-ring absolute inset-0 z-10">
          {ORBIT.map((card, i) => {
            const angle = ((START_ANGLE + i * STEP) * Math.PI) / 180;
            const x = 50 + RADIUS * Math.cos(angle);
            const y = 50 + RADIUS * Math.sin(angle);
            return (
              <motion.div
                key={card.id}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              >
                {/* Center the card on its orbit point */}
                <div className="-translate-x-1/2 -translate-y-1/2">
                  {/* Counter-rotate so the content stays upright */}
                  <div className="orbit-upright">
                    <OrbitCardButton card={card} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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

/** Shared inner content — cyan accent driven by the parent `group` hover. */
function CardBody({ card }: { card: OrbitCard }) {
  const Icon = card.icon;
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-md border border-line bg-ground/60 text-ink transition-colors group-hover:border-cyan/60 group-hover:bg-cyan/10 group-hover:text-cyan group-focus-visible:border-cyan/60 group-focus-visible:bg-cyan/10 group-focus-visible:text-cyan sm:size-11">
          <Icon className="size-4.5 sm:size-6" strokeWidth={2} />
        </span>
        <span className="mono-label text-[10px] text-muted">{card.label}</span>
      </div>
      <p className="mt-3 text-[15px] font-semibold text-white sm:text-lg">
        {card.title}
      </p>
      <p className="mono-label mt-1 text-[10px] text-muted">{card.meta}</p>
    </>
  );
}

/** A card in the rotating ring. Scales up + glows on hover, in place. */
function OrbitCardButton({ card }: { card: OrbitCard }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.2, zIndex: 40 }}
      whileFocus={{ scale: 1.2, zIndex: 40 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative w-44.5 rounded-2xl border border-line bg-surface/85 p-4 text-left shadow-[0_10px_30px_-18px_#000] backdrop-blur-md transition-[border-color,box-shadow] hover:border-cyan/70 hover:shadow-[0_0_34px_-6px_var(--color-cyan)] focus-visible:border-cyan/70 focus-visible:shadow-[0_0_34px_-6px_var(--color-cyan)] focus-visible:outline-none sm:p-5"
    >
      <CardBody card={card} />
    </motion.button>
  );
}

/** A card in the mobile stacked grid (no rotation). */
function StackCard({ card, delay }: { card: OrbitCard; delay: number }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      className="group rounded-xl border border-line bg-surface/80 p-3 text-left backdrop-blur-md transition-colors hover:border-cyan/60 focus-visible:border-cyan/60 focus-visible:outline-none"
    >
      <CardBody card={card} />
    </motion.button>
  );
}
