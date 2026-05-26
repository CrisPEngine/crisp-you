import type { Metadata } from "next";
import { brand } from "@/config/site";
import { siteConfig } from "@/content/marketing";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  ogImage = brand.ogImage,
}: PageMeta): Metadata {
  const url = `${siteConfig.domain}${path}`;
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteConfig.domain}${ogImage}`;

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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
