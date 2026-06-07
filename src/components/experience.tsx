import { content } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Pill } from "@/components/ui/pill";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Reveal as="header" className="mb-14 max-w-3xl md:mb-20">
          <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-5xl">
            Experience
          </h2>
          <p className="mt-5 max-w-[55ch] text-base leading-[1.65] text-text-muted md:text-lg">
            Currently focused on building data-intensive backend systems for
            agribusiness operations.
          </p>
        </Reveal>

        <div className="space-y-6">
          {content.experience.roles.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.08}>
              <article className="group relative rounded-[20px] border border-white/[0.06] bg-white/[0.015] p-1.5 transition-colors duration-300 hover:border-white/[0.12]">
                <div className="relative overflow-hidden rounded-[14px] bg-surface p-7 md:p-10 ring-1 ring-inset ring-white/[0.02]">
                  <div className="grid gap-10 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-4">
                      <div className="mb-4 font-mono text-[11px] tracking-[0.22em] text-text-subtle">
                        {role.period}
                      </div>
                      <div className="mb-2 text-2xl font-medium tracking-[-0.015em] text-text">
                        {role.company}
                      </div>
                      <div className="font-mono text-[11px] tracking-wide text-text-faint">
                        {role.companyNote} · {role.location}
                      </div>
                    </div>

                    <div className="md:col-span-8">
                      <h3 className="mb-5 text-lg font-medium tracking-[-0.01em] text-text md:text-xl">
                        {role.title}
                      </h3>
                      <div className="space-y-4 text-[15px] leading-[1.7] text-text-muted">
                        {role.paragraphs.map((p, j) => (
                          <p key={j} className="max-w-[62ch]">
                            {p}
                          </p>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {role.tech.map((t) => (
                          <Pill key={t} variant="mono">
                            {t}
                          </Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
