type EyebrowProps = {
  children: React.ReactNode;
  withDot?: boolean;
  className?: string;
};

export function Eyebrow({ children, withDot = false, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-text-subtle ${className}`}
    >
      {withDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </span>
  );
}
