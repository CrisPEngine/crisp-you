import { finalCta, cta, siteConfig } from "@/content/marketing";
import { Button } from "./Button";

export function CTASection() {
  return (
    <section className="bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {finalCta.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{finalCta.body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={siteConfig.urls.signup}
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
