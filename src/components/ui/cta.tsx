import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type CtaProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function Cta({
  href,
  label,
  variant = "primary",
  external = false,
  className = "",
}: CtaProps) {
  const isMail = href.startsWith("mailto:");
  const isExternal = external || href.startsWith("http") || isMail;

  const baseClasses =
    "group inline-flex items-center gap-3 rounded-full pl-5 pr-2 py-2 text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98] will-change-transform";

  const variants = {
    primary:
      "bg-accent text-bg hover:bg-accent/90 shadow-[0_0_0_1px_rgba(0,229,153,0.2)]",
    secondary:
      "bg-white/[0.03] text-text border border-white/[0.10] hover:bg-white/[0.06] hover:border-white/[0.18]",
  };

  const iconWrapperVariants = {
    primary:
      "bg-bg/15 text-bg group-hover:bg-bg/25",
    secondary:
      "bg-white/[0.06] text-text group-hover:bg-white/[0.12]",
  };

  const content = (
    <>
      <span>{label}</span>
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ease-out group-hover:translate-x-[1px] group-hover:-translate-y-[1px] ${iconWrapperVariants[variant]}`}
      >
        <ArrowUpRight size={13} weight="bold" />
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={isMail ? undefined : "_blank"}
        rel={isMail ? undefined : "noopener noreferrer"}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </Link>
  );
}
