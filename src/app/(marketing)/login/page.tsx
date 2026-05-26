import Link from "next/link";
import { siteConfig } from "@/content/marketing";
import { Section } from "@/components/marketing/Section";
import { Button } from "@/components/marketing/Button";

export default function LoginPage() {
  return (
    <Section className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Login</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The app login page is a placeholder. Connect this route to your authentication flow when ready.
        </p>
        <div className="mt-8">
          <Button href={siteConfig.urls.signup}>Start building your content system</Button>
        </div>
        <p className="mt-6">
          <Link href="/" className="text-sm text-accent hover:text-accent-hover">
            Back to homepage
          </Link>
        </p>
      </div>
    </Section>
  );
}
