import Link from "next/link";

function TwigMark() {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden="true"
      className="w-7 h-7 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(-18, 14, 14)">
        {/* Stick body */}
        <rect x="11" y="3" width="6" height="22" rx="3" fill="#3B6D11" />
        {/* Bristles */}
        <line x1="11" y1="6.5" x2="7"  y2="1"   stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="4.5" x2="13" y2="0"   stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="17" y1="6.5" x2="21" y2="1.5" stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round" />
        {/* Small leaf */}
        <path d="M11 13 C6 10 5.5 6.5 8 6 C10.5 5.5 11 10 11 13Z" fill="#4A8A18" />
      </g>
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm">
          <TwigMark />
          <span
            className="font-heading text-ink"
            style={{ fontSize: 17, fontWeight: 500, lineHeight: 1 }}
          >
            twigglies
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Page navigation">
          <a
            href="#our-roots"
            className="text-[13px] text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            The story
          </a>
          <a
            href="#the-idea"
            className="text-[13px] text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            How it works
          </a>
          <a
            href="#notify"
            className="text-[13px] text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
          >
            Notify me
          </a>
        </nav>
      </div>
    </header>
  );
}
