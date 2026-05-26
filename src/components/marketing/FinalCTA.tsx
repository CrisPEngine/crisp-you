import { finalCta, cta } from "@/content/marketing";
import { site } from "@/config/site";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-10 invert" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{finalCta.body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={site.startUrl}
            className="bg-accent text-white hover:bg-accent-hover"
          >
            {cta.primary}
          </Button>
          <Button
            href="/pricing"
            variant="secondary"
            className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
          >
            {cta.pricing}
          </Button>
        </div>
      </div>
    </section>
  );
}
