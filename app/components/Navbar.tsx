"use client";

import { useEffect, useState } from "react";
import { FileText, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { SITE } from "../lib/site";

const LINKS = [
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line/70 bg-ground/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label={SITE.brand}>
          <span className="flex size-8 items-center justify-center rounded-md border border-line bg-surface/80 text-cyan shadow-[0_0_18px_-6px_var(--color-cyan)]">
            <Terminal className="size-4" strokeWidth={2.2} />
          </span>
          <span className="mono-label text-[11px] text-ink/90 transition-colors group-hover:text-cyan sm:text-xs">
            {SITE.brand}
          </span>
          <span className="mono-label hidden text-[10px] text-muted lg:inline">
            ED.2026
          </span>
        </a>

        {/* Center section links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono-label text-[11px] text-muted transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.resume}
            download
            className="mono-label hidden items-center gap-1.5 rounded-md border border-line bg-surface/60 px-3 py-1.5 text-[10px] text-ink transition-all hover:border-cyan/50 hover:text-cyan sm:inline-flex"
          >
            <FileText className="size-3.5" />
            RÉSUMÉ
          </a>
          <NavIcon href={SITE.linkedin} label="LinkedIn">
            <LinkedInIcon className="size-4" />
          </NavIcon>
          <NavIcon href={SITE.github} label="GitHub">
            <GitHubIcon className="size-4" />
          </NavIcon>
        </div>
      </nav>
    </header>
  );
}

function NavIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-md border border-line bg-surface/60 text-muted transition-all hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_20px_-8px_var(--color-cyan)]"
    >
      {children}
    </a>
  );
}
