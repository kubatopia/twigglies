export default function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-ink/10 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-ink-faint" style={{ fontSize: 12 }}>
          &copy; Twigglies Inc. &middot; Made for tiny humans.
        </p>
        <nav aria-label="Footer navigation" className="flex gap-5">
          <a
            href="/privacy"
            className="text-ink-faint hover:text-ink-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
            style={{ fontSize: 12 }}
          >
            Privacy
          </a>
          <a
            href="mailto:hello@twigglies.com"
            className="text-ink-faint hover:text-ink-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm"
            style={{ fontSize: 12 }}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
