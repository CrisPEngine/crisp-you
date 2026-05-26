import { site, socialLinks } from "@/config/site";
import { faq } from "@/content/marketing";
import { pricingContent } from "@/config/pricing";
import type { BlogPost } from "@/content/blog";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.domain,
    email: site.contactEmail,
    parentOrganization: {
      "@type": "Organization",
      name: site.creator,
    },
    sameAs: socialLinks.map((link) => link.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    description:
      "A content operating system for founders, consultants and lean teams.",
    publisher: {
      "@type": "Organization",
      name: site.creator,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.startUrl,
    offers: pricingContent.tiers
      .filter((t) => t.id !== "scale")
      .map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        price: tier.monthlyPrice === 0 ? "0" : String(tier.monthlyPrice ?? 0),
        priceCurrency: "USD",
        url: site.billingUrl,
        availability: "https://schema.org/InStock",
      })),
    description:
      "Turn brand strategy into consistent content across LinkedIn, X, Meta and blog.",
  };
}

export function pricingProductSchema() {
  const offers: Record<string, unknown>[] = [];

  for (const tier of pricingContent.tiers) {
    if (tier.id === "scale") {
      offers.push({
        "@type": "Offer",
        name: `${tier.name} Plan`,
        price: "0",
        priceCurrency: "USD",
        url: site.contactUrl,
        availability: "https://schema.org/PreOrder",
        description: "Custom pricing. Contact sales.",
      });
      continue;
    }
    offers.push({
      "@type": "Offer",
      name: `${tier.name} Monthly`,
      price: String(tier.monthlyPrice ?? 0),
      priceCurrency: "USD",
      url: site.billingUrl,
      availability: "https://schema.org/InStock",
    });
    if (tier.annualPrice != null && tier.annualPrice > 0) {
      offers.push({
        "@type": "Offer",
        name: `${tier.name} Annual`,
        price: String(tier.annualPrice),
        priceCurrency: "USD",
        url: site.billingUrl,
        availability: "https://schema.org/InStock",
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.name,
    description: "Content operating system with tiered plans for founders and teams.",
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    offers,
  };
}

export function faqPageSchema(items?: readonly { question: string; answer: string }[]) {
  const faqItems = items ?? faq.items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: site.creator,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    mainEntityOfPage: `${site.domain}/blog/${post.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path}`,
    })),
  };
}

export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Content Systems Blog",
    url: `${site.domain}/blog`,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}
