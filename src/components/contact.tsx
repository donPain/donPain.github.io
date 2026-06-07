import { content } from "@/lib/content";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.05] py-24 md:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0,229,153,0.04), transparent 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <Reveal className="mb-12 text-center md:mb-16">
          <h2 className="mx-auto max-w-[20ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-text md:text-5xl lg:text-6xl">
            {content.contact.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-[52ch] text-base leading-[1.65] text-text-muted md:text-lg">
            {content.contact.sub}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col items-center gap-8">
          <Cta
            href={content.contact.primaryCta.href}
            label={content.contact.primaryCta.label}
            variant="primary"
          />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2">
            {content.contact.secondary.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-1.5 font-mono text-[11.5px] tracking-[0.18em] text-text-muted uppercase transition-colors duration-200 hover:text-text"
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  size={11}
                  weight="bold"
                  className="opacity-50 transition-all duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
