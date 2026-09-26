"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "../lib/site";
import { Preview, type PreviewVariant } from "./CardPreviews";

type Card = {
  n: string;
  title: string;
  sub: string;
  tag: string;
  variant: PreviewVariant; // used as the placeholder render
  tone: "cyan" | "amber";
  image?: string; // real screenshot in /public, e.g. "/projects/next.png" — overrides the render
};

const CARDS: Card[] = [
  { n: "01", title: "React Native", sub: "Mobile · Expo", tag: "MOBILE", variant: "phone", tone: "cyan" },
  { n: "02", title: "Next.js 15", sub: "App Router", tag: "FLEET", variant: "chart", tone: "cyan" },
  { n: "03", title: "Node Mesh", sub: "Express API", tag: "gRPC", variant: "nodes", tone: "cyan" },
  { n: "04", title: "PostgreSQL", sub: "Drizzle · SQL", tag: "SPATIAL", variant: "nodes", tone: "amber" },
  { n: "05", title: "Tailwind UI", sub: "Design System", tag: "TOKENS", variant: "phone", tone: "cyan" },
  { n: "06", title: "Redis Cache", sub: "Key-Value", tag: "EDGE", variant: "bars", tone: "cyan" },
  { n: "07", title: "REST & Sockets", sub: "Streaming", tag: "DISTRO", variant: "chart", tone: "cyan" },
  { n: "08", title: "System Design", sub: "Topology", tag: "GRAPH", variant: "nodes", tone: "amber" },
];

const START_ANGLE = -90;
const STEP = 360 / CARDS.length;
const RADIUS = 41; // % of the square orbit container

const TONE_BG: Record<Card["tone"], string> = {
  cyan: "radial-gradient(120% 100% at 50% 0%, rgba(56,189,248,0.16), transparent 60%), #0b1120",
  amber: "radial-gradient(120% 100% at 50% 0%, rgba(251,191,36,0.16), transparent 60%), #0b1120",
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full flex-col overflow-hidden"
    >
      {/* Backgrounds */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(120vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.04) 38%, transparent 68%)",
        }}
      />
      <Radar />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ground" />

      {/* Background wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 flex select-none flex-col items-center justify-center"
      >
        <span className="whitespace-nowrap text-[clamp(3.5rem,13vw,12rem)] font-bold leading-none tracking-tight text-white/4">
          BOBBY SINGH
        </span>
        <span className="mt-2 whitespace-nowrap text-[clamp(1.1rem,5vw,4.6rem)] font-bold tracking-[0.18em] text-cyan/7">
          FULL STACK DEVELOPER
        </span>
      </div>

      {/* HUD status strip */}
      <div className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-5 pb-2 pt-20 sm:px-8">
        <span className="mono-label flex items-center gap-2 text-[9px] text-muted">
          <span className="size-1.5 animate-pulse rounded-full bg-cyan" />
          SYS.STATUS: <span className="text-cyan">OPERATIONAL</span>
          <span className="hidden text-muted/80 sm:inline">{"// OPEN TO WORK"}</span>
        </span>
        <span className="mono-label flex items-center gap-3 text-[9px] text-muted">
          <span className="hidden sm:inline">NODE · POSTGRES · REACT</span>
          <span className="rounded border border-line px-2 py-0.5 text-cyan/80">
            REV 2026.1
          </span>
        </span>
      </div>

      {/* ---------- Desktop / tablet: rotating image-card orbit ---------- */}
      <div className="relative z-20 hidden flex-1 items-center justify-center md:flex">
        <div className="relative aspect-square w-[min(92vw,720px)]">
          {/* Center identity — fixed while the ring turns */}
          <div className="absolute left-1/2 top-1/2 z-30 w-[min(70vw,300px)] -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="mono-label text-[11px] text-cyan">{SITE.brand}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Building production web apps, cross-platform mobile, and scalable
                database architectures.
              </p>
            </motion.div>
          </div>

          {/* Rotating ring */}
          <div className="orbit-ring absolute inset-0 z-20">
            {CARDS.map((card, i) => {
              const angle = ((START_ANGLE + i * STEP) * Math.PI) / 180;
              const x = 50 + RADIUS * Math.cos(angle);
              const y = 50 + RADIUS * Math.sin(angle);
              return (
                <motion.div
                  key={card.n}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2">
                    <div className="orbit-upright">
                      <OrbitCard card={card} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- Mobile: stacked identity + card grid ---------- */}
      <div className="relative z-20 flex flex-1 flex-col items-center justify-center px-5 py-8 text-center md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold leading-none tracking-tight text-white">
            {SITE.name}
          </h1>
          <p className="mono-label mt-3 text-sm text-cyan">{SITE.role}</p>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Building production web apps, cross-platform mobile, and scalable
            database architectures.
          </p>
        </motion.div>
        <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-3">
          {CARDS.map((card, i) => (
            <StackCard key={card.n} card={card} delay={0.1 + i * 0.05} />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#work"
        className="relative z-30 mx-auto mb-8 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-cyan"
      >
        View selected work <ArrowUpRight className="size-3.5" />
      </a>
    </section>
  );
}

function CardInner({ card }: { card: Card }) {
  return (
    <>
      <div
        className={`relative h-24 border-b border-line ${
          card.tone === "amber" ? "text-amber-400" : "text-cyan"
        }`}
        style={{ background: TONE_BG[card.tone] }}
      >
        <div aria-hidden className="absolute inset-0 opacity-30 grid-backdrop" />
        {card.image ? (
          <Image
            src={card.image}
            alt={`${card.title} preview`}
            fill
            sizes="180px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 p-2 opacity-90">
            <Preview variant={card.variant} />
          </div>
        )}
        <span className="mono-label absolute right-2 top-2 rounded border border-line bg-ground/70 px-1.5 py-0.5 text-[8px] text-muted backdrop-blur-sm">
          {card.tag}
        </span>
      </div>
      <div className="p-2.5">
        <p className="mono-label text-[10px] text-cyan">
          {card.n} / {card.title.toUpperCase()}
        </p>
        <p className="mono-label mt-0.5 text-[8px] text-muted">{card.sub}</p>
      </div>
    </>
  );
}

function OrbitCard({ card }: { card: Card }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.14, zIndex: 40 }}
      whileFocus={{ scale: 1.14, zIndex: 40 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group w-40 overflow-hidden rounded-xl border border-line bg-surface/85 text-left shadow-[0_12px_34px_-18px_#000] backdrop-blur-md transition-[border-color,box-shadow] hover:border-cyan/70 hover:shadow-[0_0_38px_-8px_var(--color-cyan)] focus-visible:border-cyan/70 focus-visible:shadow-[0_0_38px_-8px_var(--color-cyan)] focus-visible:outline-none"
    >
      <CardInner card={card} />
    </motion.button>
  );
}

function StackCard({ card, delay }: { card: Card; delay: number }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileTap={{ scale: 0.97 }}
      className="group overflow-hidden rounded-xl border border-line bg-surface/85 text-left backdrop-blur-md transition-colors hover:border-cyan/60 focus-visible:border-cyan/60 focus-visible:outline-none"
    >
      <CardInner card={card} />
    </motion.button>
  );
}

function Radar() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className="pointer-events-none absolute left-1/2 top-1/2 size-[min(110vw,860px)] -translate-x-1/2 -translate-y-1/2 text-cyan"
      fill="none"
    >
      {[20, 32, 44].map((r) => (
        <circle key={r} cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="0.15" opacity="0.18" />
      ))}
      <line x1="50" y1="4" x2="50" y2="96" stroke="currentColor" strokeWidth="0.12" opacity="0.12" />
      <line x1="4" y1="50" x2="96" y2="50" stroke="currentColor" strokeWidth="0.12" opacity="0.12" />
    </svg>
  );
}
