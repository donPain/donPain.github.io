export function StreamGraphic() {
  return (
    <svg
      viewBox="0 0 480 360"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="stream-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="20%" stopColor="rgba(255,255,255,1)" />
          <stop offset="80%" stopColor="rgba(255,255,255,1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <mask id="fade-mask">
          <rect width="480" height="360" fill="url(#stream-fade)" />
        </mask>

        <pattern
          id="dash-pattern"
          x="0"
          y="0"
          width="32"
          height="2"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="20" height="2" fill="currentColor" />
        </pattern>

        <pattern
          id="dash-pattern-accent"
          x="0"
          y="0"
          width="24"
          height="2"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="14" height="2" fill="#00E599" />
        </pattern>
      </defs>

      <g mask="url(#fade-mask)" className="text-white/15">
        <g className="stream-line">
          <rect x="-120" y="48" width="720" height="1.5" fill="url(#dash-pattern)" />
        </g>
        <g className="stream-line" style={{ animationDelay: "-4s" }}>
          <rect x="-120" y="80" width="720" height="1.5" fill="url(#dash-pattern)" />
        </g>
        <g
          className="stream-line"
          style={{ animationDelay: "-2s", animationDuration: "14s" }}
        >
          <rect
            x="-120"
            y="112"
            width="720"
            height="1.5"
            fill="url(#dash-pattern-accent)"
          />
        </g>
        <g className="stream-line" style={{ animationDelay: "-8s" }}>
          <rect x="-120" y="144" width="720" height="1.5" fill="url(#dash-pattern)" />
        </g>
        <g
          className="stream-line"
          style={{ animationDelay: "-6s", animationDuration: "22s" }}
        >
          <rect x="-120" y="176" width="720" height="1.5" fill="url(#dash-pattern)" />
        </g>
      </g>

      {/* Topology nodes */}
      <g transform="translate(40, 230)">
        <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
          <line x1="40" y1="40" x2="160" y2="20" />
          <line x1="40" y1="40" x2="160" y2="80" />
          <line x1="160" y1="20" x2="280" y2="60" />
          <line x1="160" y1="80" x2="280" y2="60" />
          <line x1="280" y1="60" x2="400" y2="40" />
        </g>

        <g>
          <circle cx="40" cy="40" r="5" fill="#00E599" />
          <circle cx="40" cy="40" r="10" fill="#00E599" opacity="0.15" />
        </g>
        <circle cx="160" cy="20" r="4" fill="rgba(255,255,255,0.6)" />
        <circle cx="160" cy="80" r="4" fill="rgba(255,255,255,0.6)" />
        <circle cx="280" cy="60" r="4" fill="rgba(255,255,255,0.6)" />
        <circle cx="400" cy="40" r="4" fill="rgba(255,255,255,0.6)" />

        <text
          x="40"
          y="68"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          fill="rgba(255,255,255,0.35)"
          textAnchor="middle"
        >
          producer
        </text>
        <text
          x="280"
          y="84"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          fill="rgba(255,255,255,0.35)"
          textAnchor="middle"
        >
          broker
        </text>
        <text
          x="400"
          y="22"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          fill="rgba(255,255,255,0.35)"
          textAnchor="middle"
        >
          consumer
        </text>
      </g>

      {/* Partition labels */}
      <g
        fontFamily="var(--font-mono), monospace"
        fontSize="9"
        fill="rgba(255,255,255,0.25)"
      >
        <text x="10" y="52">p0</text>
        <text x="10" y="84">p1</text>
        <text x="10" y="116" fill="rgba(0,229,153,0.65)">p2</text>
        <text x="10" y="148">p3</text>
        <text x="10" y="180">p4</text>
      </g>
    </svg>
  );
}
