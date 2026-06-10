import MiswakHero from "@/components/illustrations/MiswakHero";
import WaitlistForm from "@/components/WaitlistForm";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-cream py-14 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left column — copy + form */}
          <div className="max-w-[520px]">
            {/* Pill badge */}
            <span className="inline-flex items-center rounded-full bg-moss-light text-forest text-[12px] px-3 py-1 mb-6">
              Coming soon · 2026
            </span>

            <h1
              id="hero-heading"
              className="font-heading text-ink mb-4"
              style={{
                fontSize: "clamp(30px, 5vw, 38px)",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Stop the bedtime battle.
            </h1>

            <p className="text-ink-muted mb-8" style={{ fontSize: 16, lineHeight: 1.6 }}>
              A chewable, toddler-led toothbrush inspired by the miswak — the
              stick that&rsquo;s cleaned teeth for a thousand years. Hand it to
              your kid. Let them do the rest.
            </p>

            {/* Email form */}
            <WaitlistForm variant="hero" className="max-w-[420px]" />

            <p className="mt-3 text-ink-faint" style={{ fontSize: 12, lineHeight: 1.5 }}>
              No spam. We&rsquo;ll only email when there&rsquo;s something real
              to share.
            </p>
          </div>

          {/* Right column — illustration (desktop only) */}
          <div
            className="hidden md:flex items-center justify-center w-[260px] h-[300px]"
            aria-hidden="true"
          >
            <MiswakHero />
          </div>
        </div>
      </div>
    </section>
  );
}
