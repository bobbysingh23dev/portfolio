"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { SITE } from "../lib/site";

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
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={SITE.brand}
        >
          <span className="flex size-8 items-center justify-center rounded-md border border-line bg-surface/80 text-cyan shadow-[0_0_18px_-6px_var(--color-cyan)]">
            <Terminal className="size-4" strokeWidth={2.2} />
          </span>
          <span className="mono-label text-[11px] text-ink/90 transition-colors group-hover:text-cyan sm:text-xs">
            {SITE.brand}
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavButton href={SITE.linkedin} label="LinkedIn">
            <LinkedInIcon className="size-4" />
          </NavButton>
          <NavButton href={SITE.github} label="GitHub">
            <GitHubIcon className="size-4" />
          </NavButton>
        </div>
      </nav>
    </header>
  );
}

function NavButton({
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
      className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted transition-all hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_20px_-8px_var(--color-cyan)]"
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
