export default function MiswakOrigin() {
  return (
    <svg
      viewBox="0 0 300 300"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Twig group rotated -12° */}
      <g transform="rotate(-12, 150, 155)">
        {/* Main stick */}
        <rect x="142" y="48" width="16" height="214" rx="8" fill="#854F0B" />
        <line
          x1="150"
          y1="72"
          x2="150"
          y2="234"
          stroke="#6B3E08"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Bristles */}
        <line x1="142" y1="62" x2="129" y2="22" stroke="#A8640F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="146" y1="56" x2="139" y2="14" stroke="#9B5A0A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="150" y1="52" x2="150" y2="10" stroke="#A8640F" strokeWidth="3"   strokeLinecap="round" />
        <line x1="154" y1="56" x2="161" y2="15" stroke="#9B5A0A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="158" y1="62" x2="169" y2="24" stroke="#A8640F" strokeWidth="2.5" strokeLinecap="round" />

        {/* Leaf 1 — upper, grows left */}
        <path
          d="M142 122 C122 103 117 87 128 83 C138 79 142 101 142 122Z"
          fill="#3B6D11"
        />

        {/* Leaf 2 — lower, grows right */}
        <path
          d="M158 178 C178 157 184 140 174 136 C164 132 158 155 158 178Z"
          fill="#4A8A18"
        />
      </g>

      {/* Sparkle accents in sky-deep */}
      {/* Large sparkle — top left */}
      <path
        d="M58 76 L61 68 L64 76 L72 79 L64 82 L61 90 L58 82 L50 79Z"
        fill="#185FA5"
      />
      {/* Medium sparkle — top right */}
      <path
        d="M230 46 L232.5 40 L235 46 L241 48.5 L235 51 L232.5 57 L230 51 L224 48.5Z"
        fill="#185FA5"
      />
      {/* Small sparkle — right mid */}
      <path
        d="M252 178 L253.8 173 L255.6 178 L260.6 179.8 L255.6 181.6 L253.8 186.6 L252 181.6 L247 179.8Z"
        fill="#185FA5"
      />
      {/* Tiny sparkle — bottom left */}
      <path
        d="M46 228 L47.6 223.8 L49.2 228 L53.4 229.6 L49.2 231.2 L47.6 235.4 L46 231.2 L41.8 229.6Z"
        fill="#185FA5"
        opacity="0.65"
      />

      {/* Dot accents */}
      <circle cx="88" cy="38"  r="3"   fill="#185FA5" opacity="0.5" />
      <circle cx="256" cy="115" r="2.5" fill="#185FA5" opacity="0.4" />
      <circle cx="218" cy="254" r="2"   fill="#185FA5" opacity="0.5" />
    </svg>
  );
}
