import { content } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Research() {
  const { research, community } = content;

  return (
    <section
      id="research"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Reveal as="header" className="mb-14 max-w-3xl md:mb-20">
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-5xl">
            Research &amp; Community
          </h2>
          <p className="mt-5 max-w-[55ch] text-base leading-[1.65] text-text-muted md:text-lg">
            Scientific work on robotics and Big Data in agriculture, plus the
            conversations I show up for.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* Research */}
          <Reveal className="md:col-span-7" delay={0}>
            <div className="relative h-full rounded-[20px] border border-white/[0.06] bg-white/[0.015] p-1.5">
              <div className="h-full rounded-[14px] bg-surface p-7 md:p-10 ring-1 ring-inset ring-white/[0.02]">
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-text-subtle">
                  PUBLICATION
                </span>
                <h3 className="mt-5 max-w-[28ch] text-2xl font-medium tracking-[-0.015em] text-text md:text-[1.6rem]">
                  {research.publication.title}
                </h3>
                <p className="mt-3 font-mono text-[12px] tracking-wide text-text-faint">
                  {research.publication.coAuthor}
                </p>
                <p className="mt-7 max-w-[55ch] text-[15px] leading-[1.7] text-text-muted">
                  {research.body}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-subtle">
                  {research.publication.topics.map((topic, i) => (
                    <span key={topic} className="flex items-center gap-3">
                      <span>{topic}</span>
                      {i < research.publication.topics.length - 1 && (
                        <span className="text-text-faint">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Community */}
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="relative h-full rounded-[20px] border border-white/[0.06] bg-white/[0.015] p-1.5">
              <div className="h-full rounded-[14px] bg-surface p-7 md:p-10 ring-1 ring-inset ring-white/[0.02]">
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-text-subtle">
                  COMMUNITY
                </span>
                <h3 className="mt-5 max-w-[18ch] text-2xl font-medium tracking-[-0.015em] text-text md:text-[1.6rem]">
                  Notes, talks, and events I follow.
                </h3>
                <p className="mt-7 max-w-[40ch] text-[15px] leading-[1.7] text-text-muted">
                  {community.body}
                </p>
                <div className="mt-8 flex flex-col gap-2.5">
                  {community.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 text-[13.5px] text-text"
                    >
                      <span
                        className="h-1 w-1 rounded-full bg-accent/70"
                        aria-hidden="true"
                      />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
