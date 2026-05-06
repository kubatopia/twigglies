import WaitlistForm from "@/components/WaitlistForm";

export default function CtaSection() {
  return (
    <section
      id="notify"
      aria-labelledby="cta-heading"
      className="bg-forest py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <h2
          id="cta-heading"
          className="font-heading text-moss-light mb-4"
          style={{ fontSize: "clamp(22px, 3vw, 26px)", fontWeight: 500, lineHeight: 1.25 }}
        >
          Be first in line.
        </h2>

        <p
          className="text-moss mb-8 max-w-[360px]"
          style={{ fontSize: 15, lineHeight: 1.6 }}
        >
          Help us build it. Early subscribers get a free Twigglies when we
          launch.
        </p>

        <WaitlistForm variant="cta" className="w-full max-w-[420px]" />
      </div>
    </section>
  );
}
