export type AnalyticsEvent =
  | "cce_start_free_click"
  | "cce_login_click"
  | "cce_pricing_cta_click"
  | "cce_contact_sales_click"
  | "cce_blog_cta_click"
  | "cce_feature_cta_click";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | null>,
) {
  if (typeof window === "undefined") return;

  try {
    void import("@vercel/analytics").then(({ track }) => {
      track(event, properties);
    });
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.debug("[analytics]", event, properties);
    }
  }
}
