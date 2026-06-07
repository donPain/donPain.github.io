"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { content } from "@/lib/content";
import { Cta } from "@/components/ui/cta";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StreamGraphic } from "@/components/stream-graphic";

export function Hero() {
  const reduce = useReducedMotion();
  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay: 0.1 + i * 0.08,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background — single subtle radial orb, top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 20%, rgba(0,229,153,0.05), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 90%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — text stack */}
          <div className="lg:col-span-7">
            <motion.div {...reveal(0)} className="mb-8">
              <Eyebrow withDot>{content.hero.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              {...reveal(1)}
              className="text-[2.125rem] font-medium leading-[1.05] tracking-[-0.025em] text-text sm:text-[2.625rem] md:text-5xl lg:text-[3.75rem] lg:tracking-[-0.03em] xl:text-[4.25rem]"
            >
              {content.hero.headline}
            </motion.h1>

            <motion.p
              {...reveal(2)}
              className="mt-7 max-w-[52ch] text-base leading-[1.65] text-text-muted md:text-lg"
            >
              {content.hero.subtext}
            </motion.p>

            <motion.div
              {...reveal(3)}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Cta
                href={content.hero.primaryCta.href}
                label={content.hero.primaryCta.label}
                variant="primary"
              />
              <Cta
                href={content.hero.secondaryCta.href}
                label={content.hero.secondaryCta.label}
                variant="secondary"
              />
            </motion.div>

            <motion.div
              {...reveal(4)}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 pr-4 backdrop-blur-sm">
                <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/[0.12]">
                  <Image
                    src="/donpain-profile.jpg"
                    alt="Eduardo Donzeli"
                    fill
                    sizes="44px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
                    Author
                  </span>
                  <span className="block text-sm text-text-muted">
                    Eduardo Donzeli
                  </span>
                </div>
              </div>

              <a
                href={content.meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-text-muted transition-colors duration-200 hover:text-text"
              >
                <span>GitHub</span>
                <ArrowUpRight
                  size={11}
                  weight="bold"
                  className="opacity-50 transition-all duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-hover:opacity-100"
                />
              </a>
            </motion.div>
          </div>

          {/* Right — stream/topology decoration */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:col-span-5 lg:block"
            aria-hidden="true"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.015] to-transparent ring-1 ring-inset ring-white/[0.04]" />
              <div className="relative h-full w-full p-4">
                <StreamGraphic />
              </div>
              {/* Footer label */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
                <span>kafka · flink</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  live
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
