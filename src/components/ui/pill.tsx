type PillProps = {
  children: React.ReactNode;
  variant?: "default" | "mono" | "accent";
  className?: string;
};

export function Pill({ children, variant = "default", className = "" }: PillProps) {
  const variants = {
    default:
      "border border-white/[0.08] bg-white/[0.02] text-text-muted text-[12px]",
    mono:
      "border border-white/[0.08] bg-white/[0.02] text-text-muted font-mono text-[11px] tracking-wide",
    accent:
      "border border-accent/30 bg-accent-soft text-accent font-mono text-[11px] tracking-wide",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
