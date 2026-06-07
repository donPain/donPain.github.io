import { content } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Stack() {
  return (
    <section
      id="stack"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Reveal as="header" className="mb-14 max-w-3xl md:mb-20">
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-5xl">
            Stack
          </h2>
          <p className="mt-5 max-w-[55ch] text-base leading-[1.65] text-text-muted md:text-lg">
            The tools I reach for first. Selected for fit, not novelty.
          </p>
        </Reveal>

        <ul className="divide-y divide-white/[0.05]">
          {content.stack.groups.map((group, i) => (
            <Reveal as="li" key={group.label} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-6 py-7 md:grid-cols-12 md:gap-8 md:py-8">
                <div className="md:col-span-3">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-text-subtle">
                    {group.label}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                    {group.items.map((item, j) => (
                      <span
                        key={item}
                        className="flex items-center gap-3 text-[15px] text-text md:text-base"
                      >
                        <span>{item}</span>
                        {j < group.items.length - 1 && (
                          <span className="text-text-faint" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
