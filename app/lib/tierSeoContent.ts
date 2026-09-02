export interface TierSeoData {
  seoTitle: string;
  metaDescription: string;
  socialTitle: string;
  socialDescription: string;
  h1: string;
  imageAlt: string;
  strainHeading: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_LINKS = [
  { href: "/exotic", label: "Exotic Weed & Flower" },
  { href: "/premium", label: "Premium Weed & Flower" },
  { href: "/aaa", label: "AAA+ Weed & Flower" },
  { href: "/aa", label: "AA Weed & Flower" },
  { href: "/budget", label: "Budget Weed & Flower" },
] as const;

export const TIER_COMPARE = {
  heading: "Compare Castle Heights Weed & Flower Tiers",
  body: "Explore the existing Budget, AA, AAA+, Premium and Exotic tier pages to move between Castle Heights Cannabis flower categories while keeping each tier distinct.",
  ownerSentence: "For the broader Castle Heights Cannabis Weed category, visit our Weed Dispensary in Ottawa page:",
  ownerHref: "/weed-dispensary-ottawa/",
  ownerLabel: "Weed Dispensary in Ottawa",
} as const;

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed & Cannabis Flower in Ottawa | Castle Heights Cannabis",
    metaDescription: "Explore the Exotic weed and cannabis flower tier at Castle Heights Cannabis in Ottawa through its dedicated flower category route.",
    socialTitle: "Exotic Weed & Cannabis Flower | Castle Heights Cannabis",
    socialDescription: "Explore the Exotic cannabis flower tier at Castle Heights Cannabis in Ottawa.",
    h1: "Exotic Weed & Cannabis Flower in Ottawa",
    imageAlt: "Exotic weed and cannabis flower tier at Castle Heights Cannabis",
    strainHeading: "Browse the Exotic Flower Category",
    seoIntro: "Castle Heights Cannabis gives Exotic a dedicated route within its existing flower structure. The page is designed for Exotic-specific browsing and remains separate from the broader Weed Dispensary in Ottawa owner.",
    sections: [
      { heading: "Exotic Has Its Own Castle Heights Route", body: "The Exotic category is kept distinct from Premium, AAA+, AA and Budget so visitors can move directly into this tier without turning the page into a general Weed landing page." },
      { heading: "Exotic as Part of the Castle Heights Flower Map", body: "Each of the five existing tier routes has a separate role in the site architecture. Exotic is one focused destination within that larger flower structure." },
    ],
    faqs: [
      { q: "What is the Exotic tier at Castle Heights Cannabis?", a: "Exotic is one of Castle Heights Cannabis's five dedicated cannabis flower tiers." },
      { q: "Is this Castle Heights Cannabis's broad Weed page?", a: "No. This page is specific to Exotic, while the Weed Dispensary in Ottawa page remains the broad Weed owner." },
      { q: "Which other Castle Heights flower tiers have separate pages?", a: "Premium, AAA+, AA and Budget each have their own dedicated routes." },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed & Cannabis Flower in Ottawa | Castle Heights Cannabis",
    metaDescription: "Explore the Premium weed and cannabis flower tier at Castle Heights Cannabis in Ottawa through its dedicated category page.",
    socialTitle: "Premium Weed & Cannabis Flower | Castle Heights Cannabis",
    socialDescription: "Explore the Premium cannabis flower tier at Castle Heights Cannabis in Ottawa.",
    h1: "Premium Weed & Cannabis Flower in Ottawa",
    imageAlt: "Premium weed and cannabis flower tier at Castle Heights Cannabis",
    strainHeading: "Explore the Premium Flower Category",
    seoIntro: "Premium has its own dedicated route within the Castle Heights Cannabis flower architecture. This keeps Premium-specific browsing separate from both the other flower tiers and the site's broad Ottawa Weed page.",
    sections: [
      { heading: "A Defined Place for Premium", body: "Premium is separated from Exotic, AAA+, AA and Budget within the existing tier structure. The dedicated page gives this category a clear and narrow purpose." },
      { heading: "Premium Within the Castle Heights Site", body: "The tier system divides flower into focused category destinations. Premium is one of those routes and does not replace the broader Weed Dispensary in Ottawa page." },
    ],
    faqs: [
      { q: "What is the Premium tier at Castle Heights Cannabis?", a: "Premium is one of Castle Heights Cannabis's dedicated cannabis flower tiers." },
      { q: "Why is Premium on a separate page?", a: "The dedicated route keeps Premium browsing distinct from the other flower categories." },
      { q: "What other Castle Heights tiers can be browsed separately?", a: "Castle Heights Cannabis also has Exotic, AAA+, AA and Budget tier pages." },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed & Cannabis Flower in Ottawa | Castle Heights Cannabis",
    metaDescription: "Explore the AAA+ weed and cannabis flower tier at Castle Heights Cannabis in Ottawa as a dedicated part of its flower structure.",
    socialTitle: "AAA+ Weed & Cannabis Flower | Castle Heights Cannabis",
    socialDescription: "Explore the AAA+ cannabis flower tier at Castle Heights Cannabis in Ottawa.",
    h1: "AAA+ Weed & Cannabis Flower in Ottawa",
    imageAlt: "AAA+ weed and cannabis flower tier at Castle Heights Cannabis",
    strainHeading: "Browse the AAA+ Flower Tier",
    seoIntro: "Castle Heights Cannabis gives AAA+ a focused flower route so this tier remains distinct inside the site's five-category structure. The page stays narrow and leaves broader Weed intent with the established Ottawa Weed owner.",
    sections: [
      { heading: "AAA+ as a Dedicated Castle Heights Tier", body: "AAA+ is kept separate from Exotic, Premium, AA and Budget. Its own route gives the category a defined role without repeating general store-level Weed content." },
      { heading: "Use AAA+ for Tier-Specific Browsing", body: "This page serves visitors who are navigating directly into the AAA+ category. The broader Weed page continues to handle wider Weed discovery." },
    ],
    faqs: [
      { q: "What is AAA+ at Castle Heights Cannabis?", a: "AAA+ is one of Castle Heights Cannabis's five dedicated cannabis flower tiers." },
      { q: "Does AAA+ replace the main Weed page?", a: "No. AAA+ is a tier-specific destination and remains subordinate to the broad Weed owner." },
      { q: "Which other tiers are separate from AAA+?", a: "Exotic, Premium, AA and Budget each have dedicated Castle Heights Cannabis pages." },
    ],
  },
  AA: {
    seoTitle: "AA Weed & Cannabis Flower in Ottawa | Castle Heights Cannabis",
    metaDescription: "Explore the AA weed and cannabis flower tier at Castle Heights Cannabis in Ottawa on its dedicated flower category page.",
    socialTitle: "AA Weed & Cannabis Flower | Castle Heights Cannabis",
    socialDescription: "Explore the AA cannabis flower tier at Castle Heights Cannabis in Ottawa.",
    h1: "AA Weed & Cannabis Flower in Ottawa",
    imageAlt: "AA weed and cannabis flower tier at Castle Heights Cannabis",
    strainHeading: "Explore the AA Flower Category",
    seoIntro: "The AA route gives Castle Heights Cannabis a focused destination for this specific cannabis flower tier. It remains separate from the site's broad Weed owner and from the four other established tier routes.",
    sections: [
      { heading: "AA Has a Focused Category Role", body: "AA is organized independently from Exotic, Premium, AAA+ and Budget so it can serve one clearly defined browsing purpose." },
      { heading: "AA Within the Castle Heights Tier Structure", body: "The AA route is one part of Castle Heights Cannabis's wider flower architecture. General Weed intent continues to belong to the Weed Dispensary in Ottawa page." },
    ],
    faqs: [
      { q: "What is the AA tier at Castle Heights Cannabis?", a: "AA is one of Castle Heights Cannabis's dedicated cannabis flower tiers." },
      { q: "Is AA the broad Castle Heights Weed page?", a: "No. It is a specific flower-tier page and remains subordinate to the broad Weed owner." },
      { q: "What other flower tiers have dedicated routes?", a: "Castle Heights Cannabis also has dedicated Exotic, Premium, AAA+ and Budget pages." },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed & Flower in Ottawa | Castle Heights Cannabis",
    metaDescription: "Explore the Budget Weed & Flower tier at Castle Heights Cannabis in Ottawa and compare it with the existing AA, AAA+, Premium and Exotic flower categories.",
    socialTitle: "Budget Weed & Flower | Castle Heights Cannabis",
    socialDescription: "Browse the Castle Heights Cannabis Budget flower tier and move between the existing Weed & Flower categories.",
    h1: "Budget Weed & Flower at Castle Heights Cannabis",
    imageAlt: "Budget Weed and flower category at Castle Heights Cannabis",
    strainHeading: "Browse the Budget Weed & Flower Tier",
    seoIntro: "Castle Heights Cannabis keeps Budget as its own established flower tier within a broader Weed and Flower structure. This page gives shoppers a clear Budget-focused path while keeping the main Weed Dispensary in Ottawa page broad.",
    sections: [
      { heading: "A Dedicated Budget Flower Tier", body: "Use this page when you want to browse the Budget tier specifically. Castle Heights Cannabis keeps it separate from AA, AAA+, Premium and Exotic so each existing flower category has a clear purpose." },
      { heading: "Move Between Castle Heights Flower Tiers", body: "From Budget, shoppers can continue through the existing AA, AAA+, Premium and Exotic Weed & Flower pages without turning every flower category into the same broad Weed page." },
    ],
    faqs: [
      { q: "What is the Castle Heights Cannabis Budget page?", a: "It is the dedicated page for the existing Budget Weed & Flower tier at Castle Heights Cannabis." },
      { q: "Is Budget the same as the main Castle Heights Weed page?", a: "No. Budget is a specific flower tier, while the Weed Dispensary in Ottawa page remains the broader Weed-focused owner page." },
      { q: "What other flower tiers can I browse?", a: "Castle Heights Cannabis also has existing AA, AAA+, Premium and Exotic tier pages." },
    ],
  },
};
