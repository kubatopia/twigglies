export default function MiswakHero() {
  return (
    <svg
      viewBox="0 0 320 360"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Sand ellipse — ground shadow */}
      <ellipse cx="160" cy="318" rx="112" ry="28" fill="#F1EFE8" />

      {/* Twig group rotated -20° around its center */}
      <g transform="rotate(-20, 160, 190)">
        {/* Main stick body */}
        <rect x="152" y="78" width="16" height="224" rx="8" fill="#854F0B" />
        {/* Subtle grain line */}
        <line
          x1="160"
          y1="100"
          x2="160"
          y2="272"
          stroke="#6B3E08"
          strokeWidth="1"
          strokeOpacity="0.35"
        />

        {/* Frayed bristles — chewed end at top */}
        <line x1="152" y1="92" x2="137" y2="50" stroke="#A8640F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="155" y1="86" x2="145" y2="42" stroke="#9B5A0A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="160" y1="82" x2="158" y2="36" stroke="#A8640F" strokeWidth="3"   strokeLinecap="round" />
        <line x1="165" y1="84" x2="173" y2="40" stroke="#9B5A0A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="168" y1="91" x2="181" y2="52" stroke="#A8640F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="157" y1="88" x2="151" y2="46" stroke="#8D4F09" strokeWidth="2"   strokeLinecap="round" />
        <line x1="163" y1="86" x2="165" y2="44" stroke="#8D4F09" strokeWidth="2"   strokeLinecap="round" />

        {/* Leaf 1 — upper section, grows left */}
        <path
          d="M152 140 C133 122 128 106 138 102 C148 98 152 120 152 140Z"
          fill="#3B6D11"
        />

        {/* Leaf 2 — mid section, grows right */}
        <path
          d="M168 180 C188 160 194 143 184 139 C174 135 168 158 168 180Z"
          fill="#4A8A18"
        />

        {/* Leaf 3 — lower section, grows left */}
        <path
          d="M152 222 C132 202 126 184 137 181 C148 178 152 200 152 222Z"
          fill="#3B6D11"
        />
      </g>
    </svg>
  );
}
