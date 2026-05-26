import { finalCta } from "@/content/marketing";
import { site } from "@/config/site";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent-light">
            Free, no card required
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {finalCta.heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-300">{finalCta.body}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={site.startUrl} variant="dark" size="lg">
            Start free, no card required
          </Button>
          <Button
            href="/pricing"
            variant="secondary"
            size="lg"
            className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
