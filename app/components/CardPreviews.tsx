// On-brand SVG placeholders that stand in for real project screenshots.
// Swap a card's `image` for a real file in /public when you have one.

export type PreviewVariant = "phone" | "chart" | "nodes" | "bars";

export function Preview({ variant }: { variant: PreviewVariant }) {
  return (
    <svg
      viewBox="0 0 160 92"
      className="h-full w-full"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {variant === "chart" && <ChartArt />}
      {variant === "nodes" && <NodesArt />}
      {variant === "phone" && <PhoneArt />}
      {variant === "bars" && <BarsArt />}
    </svg>
  );
}

function ChartArt() {
  return (
    <g stroke="currentColor">
      <line x1="16" y1="16" x2="16" y2="74" strokeWidth="1" opacity="0.35" />
      <line x1="16" y1="74" x2="146" y2="74" strokeWidth="1" opacity="0.35" />
      <path
        d="M16 74 L16 58 L40 50 L64 60 L88 34 L112 42 L146 22 L146 74 Z"
        fill="currentColor"
        opacity="0.12"
        stroke="none"
      />
      <path
        d="M16 58 L40 50 L64 60 L88 34 L112 42 L146 22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[16, 40, 64, 88, 112, 146].map((x, i) => (
        <circle key={i} cx={x} cy={[58, 50, 60, 34, 42, 22][i]} r="2.2" fill="currentColor" stroke="none" />
      ))}
    </g>
  );
}

function BarsArt() {
  const bars = [30, 48, 22, 56, 38, 62, 44];
  return (
    <g>
      <line x1="16" y1="74" x2="146" y2="74" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={18 + i * 18}
          y={74 - h}
          width="11"
          height={h}
          rx="2"
          fill="currentColor"
          opacity={0.35 + (i % 3) * 0.2}
        />
      ))}
    </g>
  );
}

function NodesArt() {
  const nodes: [number, number][] = [
    [30, 30], [80, 20], [130, 34], [50, 62], [104, 66], [80, 46],
  ];
  const edges: [number, number][] = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 3], [2, 4], [1, 2],
  ];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 5 ? 5 : 3.5}
          fill="currentColor"
          opacity={i === 5 ? 1 : 0.7}
        />
      ))}
    </g>
  );
}

function PhoneArt() {
  return (
    <g stroke="currentColor">
      <rect x="62" y="14" width="36" height="64" rx="7" strokeWidth="2" opacity="0.8" />
      <line x1="74" y1="20" x2="86" y2="20" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="68" y="28" width="24" height="14" rx="2" fill="currentColor" stroke="none" opacity="0.18" />
      <line x1="68" y1="50" x2="92" y2="50" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="68" y1="57" x2="88" y2="57" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="68" y1="64" x2="90" y2="64" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </g>
  );
}
