"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { content } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
        <nav
          aria-label="Primary"
          className={`pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-6 rounded-full border border-white/[0.08] backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-bg/70 px-3 py-2"
              : "bg-white/[0.025] px-4 py-2.5"
          }`}
        >
          <Link
            href="#top"
            className="flex items-center gap-2.5 pl-2 text-sm font-medium tracking-tight"
          >
            <span className="font-mono text-[11px] text-text-subtle">ED</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="hidden text-text-muted sm:inline">Eduardo Donzeli</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {content.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-[13px] text-text-muted transition-colors duration-200 hover:bg-white/[0.04] hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={content.contact.primaryCta.href}
            className="hidden items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1.5 text-[13px] text-text transition-colors duration-200 hover:bg-white/[0.10] md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span>Available</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-text-muted transition-colors hover:bg-white/[0.04] hover:text-text md:hidden"
          >
            {open ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-bg/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
            {content.nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-medium tracking-tight text-text transition-opacity hover:text-accent"
                style={{
                  opacity: 0,
                  animation: `reveal-in 600ms cubic-bezier(0.16,1,0.3,1) ${
                    i * 60
                  }ms forwards`,
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 flex items-center gap-2 text-sm text-text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                Available for hire
              </span>
            </div>
          </div>
          <style>{`@keyframes reveal-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
        </div>
      )}
    </>
  );
}
