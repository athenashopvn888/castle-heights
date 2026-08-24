export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

const locationFaqs = [
  {
    q: "Where is Castle Heights Cannabis?",
    a: "Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8.",
  },
  {
    q: "When is Castle Heights Cannabis open?",
    a: "The Ottawa store is open 24 hours. Adult shoppers can call (343) 308-9488 before visiting when a particular product matters.",
  },
];

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "ottawa-weed-dispensary",
    title: "Ottawa Weed Dispensary — Castle Heights Cannabis | Open 24 Hours",
    metaDescription: "Visit Castle Heights Cannabis at 605 Center St in Ottawa. Open 24 hours with listed flower, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories.",
    h1: "Ottawa Weed Dispensary — Castle Heights Cannabis",
    icon: "✨",
    heroTagline: "605 Center St, Ottawa · Open 24 Hours · Adults 19+",
    sections: [
      {
        heading: "Cannabis and Smoke Essentials on Center Street",
        body: "Adult shoppers can compare listed flower across five menu tiers alongside edibles, vape pens, disposable vapes, concentrates, pre-rolls, cigarettes, and accessories. Call ahead when a particular item is important to your visit.",
      },
      {
        heading: "Compare Flower by Tier",
        body: "Exotic, Premium, AAA+, AA, and Budget collections provide distinct starting points for flower shopping. Supplied strain type, THC details, sizes, and prices are shown when provided for an individual listing.",
      },
      {
        heading: "Visit Any Time",
        body: "Castle Heights Cannabis is open 24 hours at 605 Center St, Ottawa, ON K1K 2N8. Call (343) 308-9488 or get directions before leaving.",
      },
    ],
    faqs: [
      ...locationFaqs,
      {
        q: "What product formats are listed?",
        a: "The published menu includes flower, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories. Listings can change, so call ahead about a particular item.",
      },
    ],
  },
  {
    slug: "cheap-weed-ottawa",
    title: "Cheap Weed Ottawa | Budget Flower at Castle Heights Cannabis",
    metaDescription: "Compare Budget, AA, and AAA+ flower listings at Castle Heights Cannabis, 605 Center St in Ottawa. Open 24 hours; call ahead about a particular option.",
    h1: "Cheap Weed Ottawa — Budget Cannabis Options",
    icon: "💚",
    heroTagline: "Budget, AA and AAA+ Flower · 605 Center St · Open 24 Hours",
    sections: [
      {
        heading: "Start with Budget, AA, or AAA+ Flower",
        body: "Budget, AA, and AAA+ collections give value-focused adult shoppers three clear flower groups to compare. Each listing shows supplied strain details and package prices when provided.",
      },
      {
        heading: "Compare the Listed Package Price",
        body: "Flower sizes and prices can differ by listing. Review the published details and call (343) 308-9488 before travelling when a specific strain, size, or price matters.",
      },
      {
        heading: "Open 24 Hours in Ottawa",
        body: "Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8 and is open 24 hours for adult shoppers.",
      },
    ],
    faqs: [
      ...locationFaqs,
      {
        q: "Which flower tiers are useful for value-focused shopping?",
        a: "Budget, AA, and AAA+ are three distinct menu groups. Compare the supplied size and price information, then call ahead when a particular option matters.",
      },
    ],
  },
  {
    slug: "native-cigarettes-ottawa",
    title: "Native Cigarettes Ottawa | Castle Heights Cannabis",
    metaDescription: "Compare listed Native cigarette and smoke-product options at Castle Heights Cannabis, 605 Center St in Ottawa. Open 24 hours; call ahead about a particular listing.",
    h1: "Native Cigarettes Ottawa",
    icon: "🏷️",
    heroTagline: "Listed Cigarette Options · 605 Center St · Open 24 Hours",
    sections: [
      {
        heading: "Native Cigarette Listings in Ottawa",
        body: "Adult shoppers can compare supplied cigarette names and package details before visiting Castle Heights Cannabis. Selection can change, so call ahead when a particular brand or variety matters.",
      },
      {
        heading: "Grabba, Backwoods, and Accessories",
        body: "The smoke-product selection also includes listed Grabba, Backwoods, and accessory options. Separate product-format collections make it easier to focus on the item needed for the visit.",
      },
      {
        heading: "Visit Center Street Any Time",
        body: "Castle Heights Cannabis is open 24 hours at 605 Center St, Ottawa, ON K1K 2N8. Call (343) 308-9488 for help confirming a particular listing.",
      },
    ],
    faqs: [
      ...locationFaqs,
      {
        q: "Can cigarette listings change?",
        a: "Yes. Call (343) 308-9488 before travelling when a particular cigarette brand or variety matters.",
      },
    ],
  },
  {
    slug: "weed-store-near-gatineau",
    title: "Weed Store Near Gatineau | Castle Heights Cannabis Ottawa",
    metaDescription: "Castle Heights Cannabis is an Ottawa weed store at 605 Center St, open 24 hours. Get current directions from Gatineau, Hull, or Aylmer and call ahead about a particular item.",
    h1: "Weed Store Near Gatineau — Castle Heights Cannabis",
    icon: "🌉",
    heroTagline: "Ottawa Store · 605 Center St · Open 24 Hours",
    sections: [
      {
        heading: "An Ottawa Cannabis Store for Cross-Border Shoppers",
        body: "Castle Heights Cannabis is physically located in Ottawa at 605 Center St. Adults travelling from Gatineau, Hull, or Aylmer should use current map directions and allow for traffic, construction, and their actual starting point.",
      },
      {
        heading: "Compare Cannabis and Smoke-Product Formats",
        body: "The published menu includes flower, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories. Call ahead when a particular product is important to the trip because listings can change.",
      },
      {
        heading: "Open 24 Hours in Ottawa",
        body: "The Center Street store is open 24 hours. Call (343) 308-9488 or get current directions before crossing into Ottawa.",
      },
    ],
    faqs: [
      {
        q: "Is Castle Heights Cannabis located in Quebec?",
        a: "No. Castle Heights Cannabis is located in Ottawa, Ontario at 605 Center St.",
      },
      {
        q: "How long does the drive from Gatineau take?",
        a: "Travel time depends on the starting point, route, traffic, and construction. Use current directions before leaving.",
      },
      {
        q: "Can I call before travelling from Gatineau?",
        a: "Yes. Call (343) 308-9488 to ask about a particular listing before visiting the Ottawa store.",
      },
    ],
  },
  {
    slug: "dispensary-near-me-ottawa",
    title: "Cannabis Dispensary Near Me Ottawa | Castle Heights Cannabis",
    metaDescription: "Visit Castle Heights Cannabis at 605 Center St in Ottawa. Open 24 hours with listed flower, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories.",
    h1: "Cannabis Dispensary Near Me — Ottawa",
    icon: "🗺️",
    heroTagline: "605 Center St, Ottawa · Open 24 Hours · Adults 19+",
    sections: [
      {
        heading: "Find Castle Heights Cannabis in Ottawa",
        body: "Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8. Use current directions from your starting point and call ahead when a particular product matters.",
      },
      {
        heading: "Flower, Edibles, Vapes, and More",
        body: "Adult shoppers can compare listed flower tiers, edibles, vapes, concentrates, pre-rolls, cigarettes, and accessories. Supplied product details and prices appear when provided.",
      },
      {
        heading: "Open 24 Hours",
        body: "The Ottawa store is open 24 hours. Call (343) 308-9488 or get directions before visiting.",
      },
    ],
    faqs: [
      ...locationFaqs,
      {
        q: "Can I ask about a particular item before visiting?",
        a: "Yes. Call (343) 308-9488 before travelling when a specific product matters.",
      },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
