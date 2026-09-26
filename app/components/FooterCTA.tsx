"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { SITE } from "../lib/site";

export function FooterCTA() {
  return (
    <footer id="contact" className="relative w-full overflow-hidden">
      {/* CTA panel */}
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface/70 px-6 py-14 text-center backdrop-blur-md sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-150 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(56,189,248,0.16) 0%, transparent 65%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 grid-backdrop opacity-50" />

          <div className="relative">
            <span className="mono-label text-[11px] text-cyan">
              05 / OPEN TO WORK
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something end to end.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              I&apos;m open to full-stack engineering roles and technical
              collaboration — from mobile clients to the Postgres schema
              underneath. Let&apos;s talk.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-ground transition-all hover:shadow-[0_0_30px_-6px_var(--color-cyan)]"
              >
                <LinkedInIcon className="size-4" />
                Connect on LinkedIn
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-ground/50 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <Mail className="size-4" />
                Email me
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <div>
            <p className="mono-label text-xs text-ink">{SITE.brand}</p>
            <p className="mt-1 text-xs text-muted">
              {SITE.role} — React Native · Next.js · Node · PostgreSQL
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FooterIcon href={SITE.linkedin} label="LinkedIn">
              <LinkedInIcon className="size-4" />
            </FooterIcon>
            <FooterIcon href={SITE.github} label="GitHub">
              <GitHubIcon className="size-4" />
            </FooterIcon>
            <FooterIcon href={`mailto:${SITE.email}`} label="Email">
              <Mail className="size-4" />
            </FooterIcon>
          </div>

          <p className="mono-label text-[10px] text-muted">
            © {new Date().getFullYear()} — ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex size-9 items-center justify-center rounded-lg border border-line bg-surface/60 text-muted transition-all hover:border-cyan/50 hover:text-cyan"
    >
      {children}
    </a>
  );
}
