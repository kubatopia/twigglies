const stats = [
  { number: "1 in 10", label: "2-year-olds already has a cavity" },
  { number: "~50%", label: "of 5-year-olds have  more" },
  { number: "Every night", label: "a power struggle most parents lose" },
];

export default function ProblemSection() {
  return (
    <section
      id="the-problem"
      aria-labelledby="problem-heading"
      className="bg-white border-t border-ink/10 py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="eyebrow text-terracotta mb-4">the problem</p>

        <h2
          id="problem-heading"
          className="font-heading text-ink mb-12 max-w-[520px]"
          style={{ fontSize: "clamp(22px, 3vw, 26px)", fontWeight: 500, lineHeight: 1.25 }}
        >
          Toddlers don&rsquo;t want their teeth brushed. They want to do it
          themselves.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="rounded-lg bg-terracotta-bg p-6"
            >
              <p
                className="font-heading text-terracotta-deep mb-2"
                style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.1 }}
              >
                {stat.number}
              </p>
              <p className="text-terracotta" style={{ fontSize: 15, lineHeight: 1.5 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
