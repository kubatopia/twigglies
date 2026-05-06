import MiswakOrigin from "@/components/illustrations/MiswakOrigin";

export default function OriginSection() {
  return (
    <section
      id="our-roots"
      aria-labelledby="origin-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-center">
          {/* Left — illustration */}
          <div
            className="aspect-square rounded-lg bg-sand flex items-center justify-center p-8"
            aria-hidden="true"
          >
            <MiswakOrigin />
          </div>

          {/* Right — copy */}
          <div>
            <p className="eyebrow text-sky-deep mb-4">our roots</p>

            <h2
              id="origin-heading"
              className="font-heading text-ink mb-5"
              style={{ fontSize: "clamp(22px, 3vw, 26px)", fontWeight: 500, lineHeight: 1.25 }}
            >
              Inspired by a thousand-year tradition.
            </h2>

            <p className="text-ink-muted mb-4" style={{ fontSize: 15, lineHeight: 1.6 }}>
              The miswak — a chewing stick from the{" "}
              <em>Salvadora persica</em> tree — has been used across the Middle
              East and Africa for centuries. Studies show it can rival fluoride
              toothpaste for plaque reduction.
            </p>

            <p className="text-ink-muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
              We&rsquo;re not selling miswak. We&rsquo;re learning from it —
              and giving back to the communities that have stewarded it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
