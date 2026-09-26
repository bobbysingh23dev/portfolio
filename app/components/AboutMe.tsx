"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Clock, Layers3, CircleDot } from "lucide-react";
import { SITE } from "../lib/site";
import { SectionHeading } from "./SelectedWork";

const FACTS = [
  { icon: MapPin, label: "Location", value: SITE.location },
  { icon: Clock, label: "Experience", value: SITE.experience },
  { icon: Layers3, label: "Focus", value: "Full-stack product engineering" },
  { icon: CircleDot, label: "Status", value: "Open to roles" },
];

export function AboutMe() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="01 / ABOUT"
        title="Full-stack, end to end"
        blurb="I design, build, and ship products across the whole stack — not just one slice of it."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:p-8"
        >
          <p className="text-lg leading-relaxed text-ink/90">
            I&apos;m a full-stack developer who takes products from the first{" "}
            <span className="text-cyan">screen</span> to the{" "}
            <span className="text-cyan">database</span> and the{" "}
            <span className="text-cyan">infrastructure</span> underneath. On the
            front I work in React, React Native and Next.js; behind it, Node.js
            APIs backed by <span className="text-cyan">SQL or NoSQL</span> —
            whichever the problem calls for — plus caching, cloud and CI/CD.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m not tied to one tool per layer — I pick what fits the
            problem, care about clean data models and fast APIs, and like owning
            a feature across every layer rather than handing it off at each
            boundary. {/* Personalize this paragraph. */}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={SITE.resume}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-2.5 text-sm font-semibold text-ground transition-all hover:shadow-[0_0_28px_-6px_var(--color-cyan)]"
            >
              <Download className="size-4" />
              Download résumé
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-ground/50 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              See my work
            </a>
          </div>
        </motion.div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-2 gap-3"
        >
          {FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="flex flex-col justify-between rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur-md"
              >
                <span className="flex size-9 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
                  <Icon className="size-4" strokeWidth={2} />
                </span>
                <div className="mt-6">
                  <p className="mono-label text-[10px] text-muted">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {fact.value}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
