import type { Metadata } from "next";
import { siteConfig } from "@/content/marketing";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "" }: PageMeta): Metadata {
  const url = `${siteConfig.domain}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
