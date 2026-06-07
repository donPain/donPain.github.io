import {
  Code,
  Lightning,
  WaveSine,
  Graph,
  CloudArrowUp,
  Plant,
} from "@phosphor-icons/react/dist/ssr";
import { content } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";
import type { ReactNode } from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; weight?: "thin" | "light" | "regular" | "bold" | "fill"; className?: string }>> = {
  Code,
  Lightning,
  WaveSine,
  GraphBold: Graph,
  CloudArrowUp,
  Plant,
};

function CodeDecoration() {
  return (
    <pre className="font-mono text-[10.5px] leading-[1.65] text-text-faint">
      <code>
        <span className="text-text-subtle">@RestController</span>
        {"\n"}
        <span className="text-text-subtle">public class</span>{" "}
        <span className="text-accent/70">StreamController</span> {"{"}
        {"\n"}
        {"  "}<span className="text-text-subtle">@PostMapping</span>
        <span className="text-text-faint">(&quot;/events&quot;)</span>
        {"\n"}
        {"  "}<span className="text-text-subtle">public</span>{" "}
        <span className="text-accent/60">Mono&lt;Ack&gt;</span> publish(
        {"\n"}
        {"    "}<span className="text-text-subtle">@Valid</span> Event event
        {"\n"}
        {"  "}) {"{"}
        {"\n"}
        {"    return"} producer.publish(event);
        {"\n"}
        {"  "}{"}"}
        {"\n"}
        {"}"}
      </code>
    </pre>
  );
}

function FieldDecoration() {
  return (
    <svg
      viewBox="0 0 200 100"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* Field rows — perspective lines */}
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.6">
        <path d="M 0 100 L 70 30" />
        <path d="M 40 100 L 85 30" />
        <path d="M 80 100 L 100 30" />
        <path d="M 120 100 L 115 30" />
        <path d="M 160 100 L 130 30" />
        <path d="M 200 100 L 145 30" />
      </g>
      {/* Horizontal field bands */}
      <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.4">
        <path d="M 0 100 L 200 100" />
        <path d="M 25 75 L 175 75" />
        <path d="M 45 55 L 155 55" />
        <path d="M 65 38 L 135 38" />
      </g>
      {/* Data sensor points */}
      <circle cx="60" cy="78" r="1.5" fill="#00E599" opacity="0.85" />
      <circle cx="60" cy="78" r="4" fill="#00E599" opacity="0.15" />
      <circle cx="110" cy="65" r="1.2" fill="rgba(255,255,255,0.7)" />
      <circle cx="150" cy="58" r="1.2" fill="rgba(255,255,255,0.7)" />
      <circle cx="85" cy="48" r="1" fill="rgba(255,255,255,0.5)" />
      <circle cx="125" cy="45" r="1" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

type CardProps = {
  icon: string;
  title: string;
  body: string;
  tags: readonly string[];
  decoration: string | null;
  className: string;
  delay: number;
  variant?: "default" | "hero";
};

function Card({
  icon,
  title,
  body,
  tags,
  decoration,
  className,
  delay,
  variant = "default",
}: CardProps) {
  const Icon = iconMap[icon] ?? Code;

  const decorationEl: ReactNode | null = decoration === "code" ? (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 overflow-hidden rounded-b-[16px] md:block">
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/95 to-transparent" />
      <div className="relative h-full p-6 pl-8 md:p-8">
        <CodeDecoration />
      </div>
    </div>
  ) : decoration === "field" ? (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/5 overflow-hidden rounded-b-[16px] md:block">
      <FieldDecoration />
      <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-transparent via-surface/30 to-surface" />
    </div>
  ) : null;

  return (
    <Reveal delay={delay} className={className}>
      <div className="group relative h-full rounded-[20px] border border-white/[0.06] bg-white/[0.015] p-1.5 transition-colors duration-300 hover:border-white/[0.12]">
        <div className="relative h-full overflow-hidden rounded-[14px] bg-surface p-6 md:p-7 ring-1 ring-inset ring-white/[0.02]">
          {decorationEl}

          <div
            className={`relative flex h-full flex-col ${
              variant === "hero" ? "min-h-[280px] md:min-h-[360px]" : "min-h-[180px]"
            }`}
          >
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] text-accent">
              <Icon size={16} weight="regular" />
            </div>

            <h3 className="text-lg font-medium tracking-[-0.015em] text-text md:text-xl">
              {title}
            </h3>
            <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.6] text-text-muted">
              {body}
            </p>

            {variant === "hero" && tags.length > 0 && (
              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Pill key={tag} variant="mono">
                      {tag}
                    </Pill>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Expertise() {
  const [hero, ...rest] = content.expertise.cards;

  return (
    <section
      id="expertise"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Reveal as="header" className="mb-12 max-w-3xl md:mb-16">
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-5xl">
            Expertise
          </h2>
          <p className="mt-5 max-w-[55ch] text-base leading-[1.65] text-text-muted md:text-lg">
            Six areas where I spend most of my engineering time — and the
            technical commitments behind each.
          </p>
        </Reveal>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[auto_auto_auto]">
          {/* Cell 1 — Hero tile (Backend Engineering) */}
          <Card
            {...hero}
            icon={hero.icon}
            tags={hero.tags}
            decoration={hero.decoration}
            className="md:col-span-7 md:row-span-2"
            variant="hero"
            delay={0}
          />

          {/* Cell 2 — Event-Driven (top right) */}
          <Card
            {...rest[0]}
            icon={rest[0].icon}
            tags={rest[0].tags}
            decoration={rest[0].decoration}
            className="md:col-span-5"
            delay={0.05}
          />

          {/* Cell 3 — Streaming (middle right) */}
          <Card
            {...rest[1]}
            icon={rest[1].icon}
            tags={rest[1].tags}
            decoration={rest[1].decoration}
            className="md:col-span-5"
            delay={0.1}
          />

          {/* Cell 4 — Microservices (bottom 1/3) */}
          <Card
            {...rest[2]}
            icon={rest[2].icon}
            tags={rest[2].tags}
            decoration={rest[2].decoration}
            className="md:col-span-4"
            delay={0.15}
          />

          {/* Cell 5 — Cloud (bottom 2/3) */}
          <Card
            {...rest[3]}
            icon={rest[3].icon}
            tags={rest[3].tags}
            decoration={rest[3].decoration}
            className="md:col-span-4"
            delay={0.2}
          />

          {/* Cell 6 — AgTech (bottom 3/3, with field decoration) */}
          <Card
            {...rest[4]}
            icon={rest[4].icon}
            tags={rest[4].tags}
            decoration={rest[4].decoration}
            className="md:col-span-4"
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
}
