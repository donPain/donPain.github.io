import { content } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-[2.75rem]">
              {content.about.standfirst}
            </h2>
          </Reveal>

          <div className="md:col-span-7">
            {content.about.paragraphs.map((p, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="mb-5 max-w-[60ch] text-[15.5px] leading-[1.7] text-text-muted last:mb-0 md:text-base"
              >
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
