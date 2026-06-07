import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-6 font-mono text-[11px] tracking-[0.18em] text-text-faint sm:flex-row sm:items-center sm:justify-between md:px-10">
        <div className="uppercase">
          {content.meta.shortName} · {content.meta.year}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 uppercase">
          <a
            href={content.meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            LinkedIn
          </a>
          <span className="text-text-faint/40" aria-hidden="true">·</span>
          <a
            href={content.meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            GitHub
          </a>
          <span className="text-text-faint/40" aria-hidden="true">·</span>
          <a
            href={`mailto:${content.meta.email}`}
            className="transition-colors hover:text-text"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
