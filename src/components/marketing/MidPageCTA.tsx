import { cta } from "@/config/site";
import { site } from "@/config/site";
import { Button } from "./Button";

export function MidPageCTA() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-6 py-8 shadow-sm sm:flex-row sm:px-8">
        <p className="text-center text-base font-medium text-navy sm:text-left">
          Build the brand profile once, then create from strategy every week.
        </p>
        <Button href={site.startUrl} className="shrink-0">
          {cta.primary}
        </Button>
      </div>
    </div>
  );
}
