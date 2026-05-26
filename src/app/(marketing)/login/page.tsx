import { createMetadata } from "@/lib/metadata";
import { site, cta } from "@/config/site";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";

export const metadata = createMetadata({
  title: "Login | CRISP Content Engine",
  description: "Sign in to CRISP Content Engine to manage your brand profile, content queue and publishing workflow.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Login</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Sign in to CRISP Content Engine to manage your brand profile, content queue and publishing workflow.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <Button href={site.loginUrl} event="cce_login_click">
            Go to app login
          </Button>
          <Button href={site.startUrl} variant="secondary" event="cce_start_free_click">
            {cta.primary}
          </Button>
        </div>
      </div>
    </Section>
  );
}
