import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  number?: string;
  heading: string;
  standfirst?: string;
  align?: "split" | "stacked";
  className?: string;
};

export function SectionHeading({
  number,
  heading,
  standfirst,
  align = "split",
  className = "",
}: SectionHeadingProps) {
  if (align === "stacked") {
    return (
      <Reveal as="header" className={`mb-14 max-w-2xl ${className}`}>
        {number && (
          <div className="mb-4 flex items-center gap-3 font-mono text-[10.5px] tracking-[0.22em] text-text-faint">
            <span>{number}</span>
            <span className="h-px w-10 bg-white/10" />
          </div>
        )}
        <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        {standfirst && (
          <p className="mt-5 max-w-xl text-base text-text-muted md:text-lg">
            {standfirst}
          </p>
        )}
      </Reveal>
    );
  }

  return (
    <Reveal as="header" className={`mb-14 grid gap-8 md:grid-cols-12 ${className}`}>
      <div className="md:col-span-5">
        {number && (
          <div className="mb-4 flex items-center gap-3 font-mono text-[10.5px] tracking-[0.22em] text-text-faint">
            <span>{number}</span>
            <span className="h-px w-10 bg-white/10" />
          </div>
        )}
        <h2 className="text-3xl font-medium tracking-[-0.025em] text-text md:text-4xl lg:text-5xl">
          {heading}
        </h2>
      </div>
      {standfirst && (
        <div className="md:col-span-7 md:pt-3">
          <p className="max-w-[55ch] text-base leading-[1.65] text-text-muted md:text-lg">
            {standfirst}
          </p>
        </div>
      )}
    </Reveal>
  );
}
