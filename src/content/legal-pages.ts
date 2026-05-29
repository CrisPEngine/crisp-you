/**
 * Product-ready policy drafts for CRISP Content Engine.
 * Legal review is recommended before final paid launch.
 */

export type LegalTable = {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
};

export type LegalCard = {
  title: string;
  body: string;
};

export type LegalSection = {
  heading: string;
  paragraphs?: readonly string[];
  table?: LegalTable;
  cards?: readonly LegalCard[];
  /** Renders a paragraph with an inline internal link. */
  inlineLink?: {
    before: string;
    label: string;
    href: string;
    after: string;
  };
  contactLines?: readonly string[];
  productEnquiry?: string;
  browserLinks?: readonly { label: string; href: string }[];
};

export type LegalPageContent = {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
  updated: string;
  intro: readonly string[];
  sections: readonly LegalSection[];
};

export const privacyPolicyPage: LegalPageContent = {
  title: "Privacy Policy",
  seoTitle: "Privacy Policy | CRISP Content Engine",
  description:
    "Read how CRISP Content Engine collects, uses and protects personal data, account information, brand content and connected publishing data.",
  path: "/privacy",
  updated: "Updated: 29 May 2026",
  intro: [
    "This Privacy Policy explains how CRISP Content Engine collects, uses and protects personal data when you visit crisp.you, use app.crispdigital.io or interact with CRISP Content Engine services. CRISP Content Engine is created and developed by CrisP Digital trading as ABL International FZE, registered in the United Arab Emirates.",
  ],
  sections: [
    {
      heading: "Who this policy applies to",
      paragraphs: [
        "This policy applies to users and visitors of CRISP Content Engine, including the public website at crisp.you, the application at app.crispdigital.io and related product communications, forms, support channels and publishing workflows.",
      ],
      table: {
        headers: ["Area", "What it covers"],
        rows: [
          ["Website visitors", "Use of crisp.you, blog pages, landing pages and contact forms."],
          [
            "App users",
            "Accounts, brand profiles, content workflows, billing and connected publishing features.",
          ],
          [
            "Connected accounts",
            "Third-party platform connections such as LinkedIn, Meta platforms or other publishing services where supported.",
          ],
        ],
      },
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect information needed to provide, improve, secure and support CRISP Content Engine. The type of information depends on how you use the website, app and connected services.",
      ],
      cards: [
        {
          title: "Account information",
          body: "Name, email address, login details and account settings.",
        },
        {
          title: "Brand and content information",
          body: "Brand profiles, tone rules, audience details, offers, keywords, exclusions, drafts, prompts, image direction, review notes and publishing workflow data.",
        },
        {
          title: "Billing information",
          body: "Subscription, plan and billing details. Payment processing is handled by Stripe, and we do not store full payment card details.",
        },
        {
          title: "Usage and device information",
          body: "Pages visited, feature usage, browser information, device type, approximate location, referral source and analytics events.",
        },
        {
          title: "Support and communication data",
          body: "Messages, enquiries, feedback and other information you send to us.",
        },
        {
          title: "Connected publishing data",
          body: "Limited information from connected third-party platforms, such as account identifiers, page identifiers, permissions, publishing status and access tokens where required to provide publishing features.",
        },
      ],
    },
    {
      heading: "How we use information",
      paragraphs: [
        "We use personal data and product data to operate CRISP Content Engine, provide the requested workflows and improve the reliability of the service.",
      ],
      table: {
        headers: ["Purpose", "Examples"],
        rows: [
          [
            "Provide the product",
            "Create accounts, save brand profiles, generate content, manage queues and support export or publishing workflows.",
          ],
          [
            "Support connected publishing",
            "Connect approved accounts, use permitted API scopes and publish or prepare content only where the user has approved the workflow.",
          ],
          [
            "Process payments",
            "Manage subscriptions, invoices, plan access and billing status through Stripe.",
          ],
          [
            "Improve the service",
            "Understand feature usage, diagnose errors, improve performance and develop product functionality.",
          ],
          [
            "Communicate with users",
            "Send product updates, support responses, billing notices and service-related messages.",
          ],
          [
            "Protect the platform",
            "Prevent abuse, investigate security issues and enforce acceptable use standards.",
          ],
        ],
      },
    },
    {
      heading: "Connected third-party platforms",
      paragraphs: [
        "CRISP Content Engine may allow users to connect third-party platforms for publishing, account connection or workflow purposes. These may include LinkedIn, Meta platforms such as Facebook and Instagram and other services added over time.",
        "When a user connects a third-party service, CRISP only uses the permissions required for the approved workflow. We do not receive the user's password for third-party platforms. Access can usually be revoked through the third-party platform or product settings.",
      ],
    },
    {
      heading: "AI-assisted processing",
      paragraphs: [
        "CRISP Content Engine uses AI-assisted workflows to help users create drafts, image prompts, content ideas and related outputs. Brand profiles, prompts, content drafts and other context may be processed by AI providers or infrastructure services when required to deliver the requested product functionality.",
        "Users remain responsible for reviewing, approving and deciding whether content is suitable before export or publishing.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "We use cookies and similar technologies to operate the website, understand usage and improve performance. Some cookies may be essential, while others may support analytics, preferences or marketing measurement.",
      ],
      inlineLink: {
        before: "More detail is available in the ",
        label: "Cookies Policy",
        href: "/cookies",
        after: ".",
      },
    },
    {
      heading: "How we share information",
      paragraphs: [
        "We do not sell personal data. We may share information only where needed to operate the service, comply with legal obligations or support approved integrations.",
      ],
      table: {
        headers: ["Recipient type", "Reason"],
        rows: [
          [
            "Hosting and infrastructure providers",
            "To host the website, app, database, storage and related systems.",
          ],
          [
            "Analytics and performance providers",
            "To understand usage, diagnose issues and improve the service.",
          ],
          ["Payment providers", "To process subscriptions and billing."],
          [
            "AI and automation providers",
            "To generate requested outputs and support product workflows.",
          ],
          [
            "Publishing platforms",
            "To connect approved accounts and perform actions requested or approved by the user.",
          ],
          [
            "Legal or regulatory authorities",
            "To comply with applicable law, court orders or lawful requests.",
          ],
        ],
      },
    },
    {
      heading: "Data storage and security",
      paragraphs: [
        "We take reasonable steps to protect personal data and product data through access controls, secure infrastructure and appropriate technical safeguards. Sensitive tokens and credentials should be encrypted or protected where stored. No system can be guaranteed to be completely secure, so users should also protect their account access and connected services.",
      ],
    },
    {
      heading: "Data retention",
      paragraphs: [
        "We retain information for as long as needed to provide CRISP Content Engine, meet legal and accounting obligations, resolve disputes, maintain security and improve the product. Users may request deletion of their data, subject to legal, security and operational requirements.",
      ],
    },
    {
      heading: "User rights and deletion requests",
      paragraphs: [
        "Depending on location and applicable law, users may have rights to access, correct, delete or restrict use of their personal data. Users may also request disconnection of connected publishing accounts.",
        "Contact: privacy@abl.international",
      ],
    },
    {
      heading: "International transfers",
      paragraphs: [
        "CRISP Content Engine is operated from the United Arab Emirates and may use service providers in other countries. By using the service, users understand that information may be processed in locations where our service providers operate, subject to applicable safeguards and legal requirements.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "CRISP Content Engine is intended for business and professional use. Users must be able to enter into a binding agreement or have appropriate authority to use the service on behalf of an organisation.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in the product, legal requirements or operational practices. Updated versions will be posted on this page with a revised date.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["For privacy enquiries or data requests, contact:"],
      contactLines: [
        "ABL International FZE",
        "Dubai, United Arab Emirates",
        "Email: privacy@abl.international",
      ],
      productEnquiry: "enquiries@crispdigital.io",
    },
  ],
};

export const cookiesPolicyPage: LegalPageContent = {
  title: "Cookies Policy",
  seoTitle: "Cookies Policy | CRISP Content Engine",
  description:
    "Read how CRISP Content Engine uses cookies and similar technologies for essential site functions, analytics, preferences and marketing measurement.",
  path: "/cookies",
  updated: "Updated: 29 May 2026",
  intro: [
    "This Cookies Policy explains how CRISP Content Engine uses cookies and similar technologies on crisp.you, app.crispdigital.io and related product pages. CRISP Content Engine is created and developed by CrisP Digital trading as ABL International FZE.",
  ],
  sections: [
    {
      heading: "What cookies are",
      paragraphs: [
        "Cookies are small text files placed on a device when a user visits a website. They can help the site remember preferences, support security, understand usage and improve performance.",
      ],
    },
    {
      heading: "Types of cookies we may use",
      table: {
        headers: ["Cookie type", "Purpose", "Examples"],
        rows: [
          [
            "Essential cookies",
            "Required for basic site or app functionality.",
            "Security, authentication, page navigation and form handling.",
          ],
          [
            "Analytics cookies",
            "Help us understand how visitors and users interact with the site and product.",
            "Page views, traffic sources, feature usage and performance signals.",
          ],
          [
            "Functional cookies",
            "Remember choices that improve the user experience.",
            "Preferences, region or previous interactions.",
          ],
          [
            "Marketing cookies",
            "Help measure campaigns or deliver more relevant messages where used.",
            "Referral attribution, advertising measurement and campaign performance.",
          ],
        ],
      },
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "Some cookies or similar technologies may be placed by third-party services used by CRISP Content Engine, such as analytics, hosting, performance monitoring, advertising platforms, embedded content or product tools. These third-party services may process information according to their own policies.",
        "Examples may include:",
      ],
      cards: [
        { title: "Analytics services", body: "Usage measurement and product performance insights." },
        { title: "Payment providers", body: "Billing, checkout and subscription management." },
        {
          title: "Advertising and measurement platforms",
          body: "Campaign attribution and marketing measurement where used.",
        },
        { title: "Embedded media or product tools", body: "Features embedded in the site or app experience." },
        {
          title: "Publishing or authentication providers",
          body: "Connected account login, permissions and publishing workflows.",
        },
      ],
    },
    {
      heading: "How to manage cookies",
      paragraphs: [
        "Users can manage or delete cookies through their browser settings. Most browsers allow users to block cookies, delete existing cookies or set preferences for specific websites. Blocking some cookies may affect site functionality or product features.",
      ],
      browserLinks: [
        {
          label: "Google Chrome",
          href: "https://support.google.com/chrome/answer/95647",
        },
        {
          label: "Safari",
          href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
        },
        {
          label: "Firefox",
          href: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox",
        },
        {
          label: "Microsoft Edge",
          href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
        },
      ],
    },
    {
      heading: "Cookie consent",
      paragraphs: [
        "Where required, we may show a cookie banner or consent option when users first visit the site. Users may be able to accept, reject or manage non-essential cookies depending on the tools active on the site.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this Cookies Policy from time to time to reflect changes in technology, tools, legal requirements or product functionality. Updated versions will be posted on this page with a revised date.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["For cookie or privacy questions, contact:"],
      contactLines: [
        "ABL International FZE",
        "Dubai, United Arab Emirates",
        "Email: privacy@abl.international",
      ],
      productEnquiry: "enquiries@crispdigital.io",
    },
  ],
};

export const termsOfServicePage: LegalPageContent = {
  title: "Terms of Service",
  seoTitle: "Terms of Service | CRISP Content Engine",
  description:
    "Read the terms that govern access to and use of CRISP Content Engine, including accounts, subscriptions, content, publishing integrations and acceptable use.",
  path: "/terms",
  updated: "Updated: 29 May 2026",
  intro: [
    "These Terms of Service govern access to and use of CRISP Content Engine, including the public website at crisp.you, the application at app.crispdigital.io and related product features, tools, workflows and services. CRISP Content Engine is created and developed by CrisP Digital trading as ABL International FZE, registered in the United Arab Emirates.",
    "By accessing or using CRISP Content Engine, users agree to these Terms. If a user does not agree, they should not use the service.",
  ],
  sections: [
    {
      heading: "Services provided",
      paragraphs: [
        "CRISP Content Engine provides content workflow tools that may include brand profiles, AI-assisted content generation, content queues, image prompts, review workflows, export features, connected publishing paths, analytics or reporting features and related services.",
        "Some features may depend on the user's plan, third-party platform permissions, account connections, geographic availability or current product rollout.",
      ],
    },
    {
      heading: "Eligibility and authority",
      paragraphs: [
        "Users must be at least 18 years old or otherwise legally able to enter into a binding agreement. If using CRISP Content Engine on behalf of a company, client or organisation, the user confirms they have authority to do so.",
      ],
    },
    {
      heading: "Accounts and security",
      paragraphs: [
        "Users are responsible for providing accurate account information, protecting login credentials and all activity that occurs under their account. Users should notify us if they believe their account has been accessed without authorisation.",
      ],
    },
    {
      heading: "Plans, subscriptions and billing",
      paragraphs: [
        "CRISP Content Engine may offer free and paid plans. Paid plans, billing terms, limits and included features are shown on the pricing page and inside the billing area of the app. Payments may be processed by Stripe or another payment provider.",
      ],
      table: {
        headers: ["Billing area", "Policy"],
        rows: [
          [
            "Free plan",
            "The free plan is provided with limited usage and may be subject to fair use, product limits and changes over time.",
          ],
          [
            "Paid plans",
            "Paid subscriptions provide access to plan-specific limits and features.",
          ],
          [
            "Plan changes",
            "Users may upgrade, downgrade or cancel according to the available billing workflow.",
          ],
          [
            "Refunds",
            "Payments are non-refundable unless required by law or explicitly stated otherwise.",
          ],
          [
            "Pricing changes",
            "We may update pricing or plan features with reasonable notice where required.",
          ],
        ],
      },
    },
    {
      heading: "User content and ownership",
      paragraphs: [
        "Users retain ownership of the content, brand information, prompts, drafts, images, files and other materials they submit to or create with CRISP Content Engine.",
        "By using the service, users grant us the limited rights needed to host, process, display, transmit and operate the submitted content for the purpose of providing and improving CRISP Content Engine.",
        "Users are responsible for ensuring that content they create, approve, export or publish is accurate, lawful, appropriate and compliant with applicable third-party platform policies.",
      ],
    },
    {
      heading: "AI-assisted outputs",
      paragraphs: [
        "CRISP Content Engine may use AI-assisted systems to generate drafts, image prompts, content ideas, outlines and other outputs. AI-assisted outputs may contain errors, incomplete information or unsuitable suggestions.",
        "Users are responsible for reviewing and approving any content before using, exporting or publishing it. CRISP Content Engine does not guarantee that AI-assisted outputs will be accurate, compliant, original or suitable for every use case.",
      ],
    },
    {
      heading: "Connected third-party platforms",
      paragraphs: [
        "CRISP Content Engine may allow users to connect third-party services such as LinkedIn, Meta platforms or other publishing and workflow tools. By connecting a third-party service, the user authorises CRISP Content Engine to access and use the approved permissions for the requested workflow.",
        "Publishing may fail or be delayed due to permissions, platform outages, token expiry, API changes, rate limits, account restrictions or content policy decisions made by third-party platforms.",
      ],
    },
    {
      heading: "Publishing and scheduling",
      paragraphs: [
        "CRISP Content Engine may support export or auto-publishing depending on the user's plan, channel, connected accounts and product availability. The user remains responsible for reviewing content before it is published and for ensuring that published content complies with applicable laws and platform rules.",
        "We do not guarantee exact publish times, successful delivery, platform acceptance or continued availability of third-party publishing integrations.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: ["Users agree not to use CRISP Content Engine for unlawful, harmful, misleading, infringing, abusive or deceptive activity."],
      cards: [
        { title: "Illegal activity", body: "Do not use the service to violate laws or regulations." },
        {
          title: "Infringing content",
          body: "Do not upload, generate or publish content that violates intellectual property rights.",
        },
        { title: "Spam or abuse", body: "Do not use the service for spam, deceptive automation or platform manipulation." },
        {
          title: "Security misuse",
          body: "Do not attempt unauthorised access, scraping, reverse engineering or interference with the service.",
        },
        {
          title: "Platform violations",
          body: "Do not use CRISP Content Engine to bypass third-party platform rules, rate limits or safeguards.",
        },
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "CRISP Content Engine, including its software, branding, interface, design, workflows, documentation and related materials, is owned by ABL International FZE or its licensors. Users may not copy, modify, reverse engineer, resell or exploit the service except as permitted by these Terms or agreed in writing.",
      ],
    },
    {
      heading: "Service availability and changes",
      paragraphs: [
        "We aim to provide reliable access to CRISP Content Engine, but we do not guarantee uninterrupted or error-free service. We may update, modify, suspend or discontinue features where needed for security, product development, operational reasons or legal compliance.",
      ],
    },
    {
      heading: "Termination",
      paragraphs: [
        "Users may stop using CRISP Content Engine at any time. We may suspend or terminate access if a user breaches these Terms, creates risk for the service, violates platform policies, fails to pay applicable fees or uses the service in a harmful or unlawful way.",
      ],
    },
    {
      heading: "Disclaimers",
      paragraphs: [
        'CRISP Content Engine is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, non-infringement and uninterrupted availability.',
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, CRISP Content Engine, CrisP Digital and ABL International FZE shall not be liable for indirect, incidental, consequential or special damages, loss of profits, loss of data, loss of business or failures caused by third-party platforms.",
        "Our total liability shall not exceed the amount paid by the user to CRISP Content Engine in the preceding 12 months, unless a higher amount is required by applicable law.",
      ],
    },
    {
      heading: "Indemnity",
      paragraphs: [
        "Users agree to indemnify and hold harmless CRISP Content Engine, CrisP Digital, ABL International FZE and related parties from claims, losses, damages, liabilities and expenses arising from user content, misuse of the service, breach of these Terms or violation of third-party rights or platform policies.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise required by applicable law.",
      ],
    },
    {
      heading: "Changes to these Terms",
      paragraphs: [
        "We may update these Terms from time to time. Updated versions will be posted on this page with a revised date. Continued use of CRISP Content Engine after changes are posted means the user accepts the updated Terms.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["For legal questions, contact:"],
      contactLines: [
        "ABL International FZE",
        "Dubai, United Arab Emirates",
        "Email: legal@abl.international",
      ],
      productEnquiry: "enquiries@crispdigital.io",
    },
  ],
};

export type LegalPageKey = "privacy" | "cookies" | "terms";

export const legalPagesByKey = {
  privacy: privacyPolicyPage,
  cookies: cookiesPolicyPage,
  terms: termsOfServicePage,
} as const satisfies Record<LegalPageKey, LegalPageContent>;
