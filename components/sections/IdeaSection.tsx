import { Hand, Leaf, Smile } from "lucide-react";

const features = [
  {
    Icon: Hand,
    title: "Toddler-led",
    description: "They grab it. They chew it. You don't fight them.",
  },
  {
    Icon: Leaf,
    title: "Miswak-inspired",
    description: "Soft silicone form, infused with the cleaning tradition.",
  },
  {
    Icon: Smile,
    title: "Good enough.",
    description: "Habit first. Perfection later. You're doing fine.",
  },
];

export default function IdeaSection() {
  return (
    <section
      id="the-idea"
      aria-labelledby="idea-heading"
      className="bg-cream py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <p className="eyebrow text-forest mb-4">the idea</p>

        <h2
          id="idea-heading"
          className="font-heading text-ink mb-4"
          style={{ fontSize: "clamp(22px, 3vw, 26px)", fontWeight: 500, lineHeight: 1.25 }}
        >
          The sippy cup of the toothbrush.
        </h2>

        <p className="text-ink-muted mb-12 max-w-[560px]" style={{ fontSize: 15, lineHeight: 1.6 }}>
          Twigglies isn&rsquo;t trying to replace your toothbrush — it&rsquo;s
          the in-between. A safe, chewable stick that fosters independence,
          builds the habit, and gets some of the job done while your kid feels
          like they&rsquo;re in charge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg bg-white border border-ink-faint/30 p-4"
            >
              <Icon
                size={24}
                className="text-forest mb-3"
                aria-hidden="true"
              />
              <p className="text-ink mb-1" style={{ fontSize: 14, fontWeight: 500 }}>
                {title}
              </p>
              <p className="text-ink-muted" style={{ fontSize: 13, lineHeight: 1.55 }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
