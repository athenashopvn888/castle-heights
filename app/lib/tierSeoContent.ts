export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

function tierCopy(name: string): TierSeoData {
  return {
    seoTitle: `${name} Cannabis Flower Ottawa | Castle Heights Cannabis`,
    seoIntro: `Compare the ${name} flower listings, supplied strain type, THC details, and listed package prices at Castle Heights Cannabis in Ottawa.`,
    sections: [
      {
        heading: `${name} Flower at Castle Heights Cannabis`,
        body: `The ${name} collection brings together its listed strain names, supplied flower types, THC details, images, and package prices for straightforward comparison.`,
      },
      {
        heading: "Compare Listed Sizes and Prices",
        body: `Package sizes and prices appear only when they are supplied for a strain. Listings can change, so call (343) 308-9488 before travelling when a particular ${name} option matters to your visit.`,
      },
      {
        heading: "Visit 605 Center Street",
        body: "Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8 and is open 24 hours. Adult shoppers can call ahead or get directions before visiting.",
      },
    ],
    faqs: [
      {
        q: `What information is shown for ${name} flower?`,
        a: "Published listings show the supplied strain name, type, THC detail, image, and package prices when provided.",
      },
      {
        q: `Can the ${name} listings change?`,
        a: "Yes. Call (343) 308-9488 before travelling when a particular strain or package size matters.",
      },
      {
        q: "Where is Castle Heights Cannabis?",
        a: "Visit 605 Center St, Ottawa, ON K1K 2N8. The store is open 24 hours.",
      },
    ],
  };
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: tierCopy("Exotic"),
  PREMIUM: tierCopy("Premium"),
  "AAA+": tierCopy("AAA+"),
  AA: tierCopy("AA"),
  BUDGET: tierCopy("Budget"),
};
