export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Castle Heights Cannabis Resources",
    seoTitle: "Castle Heights Cannabis Resources | Ottawa Store and Menu Help",
    description: "Helpful Castle Heights Cannabis information for Ottawa visits, flower tiers, product formats, smoke essentials, and current directions.",
    eyebrow: "Ottawa Store Information",
    intro: "Choose flower by tier, compare a specific product format, or confirm the address and hours before visiting Castle Heights Cannabis at 605 Center St.",
    cards: [
      { title: "Ottawa East Visit Information", href: "/resources/castle-heights-overbrook-visit-guide", text: "Address, hours, call-ahead information, and current directions for the Center Street store." },
      { title: "Product Format Overview", href: "/resources/ottawa-east-menu-guide", text: "Compare flower, pre-roll, edible, vape, concentrate, cigarette, and accessory formats." },
      { title: "Flower Tier Comparison", href: "/resources/flower-shelf-guide", text: "Understand the five named flower collections before comparing individual listings." },
      { title: "Smoke Essentials", href: "/resources/smoke-accessory-guide", text: "Find cigarettes, Grabba, Backwoods, nicotine pouch information, and accessories." },
      { title: "Directions and Arrival", href: "/resources/transit-parking-planner", text: "Plan a route from your actual starting point and confirm details before leaving." },
    ],
    sections: [
      { heading: "Visit 605 Center Street", body: "Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8 and is open 24 hours. Adults can call (343) 308-9488 before travelling when a particular product matters." },
      { heading: "Compare the Format That Fits the Visit", body: "Flower, pre-rolls, edibles, vape pens, disposable vapes, concentrates, cigarettes, and accessories each have different supplied product details. Start with the format you want, then compare the names, sizes, and prices provided for its listings." },
    ],
  },
  {
    slug: "castle-heights-overbrook-visit-guide",
    title: "Castle Heights and Overbrook Visit Information",
    seoTitle: "Castle Heights and Overbrook Cannabis Visit Information | Ottawa",
    description: "Plan an adult visit to Castle Heights Cannabis at 605 Center St from Castle Heights, Overbrook, Vanier, or another Ottawa starting point.",
    eyebrow: "Ottawa East Visit Information",
    intro: "Castle Heights Cannabis is open 24 hours at 605 Center St. Use current directions from your actual starting point and call ahead when a particular product matters.",
    cards: [
      { title: "Ottawa Store Details", href: "/weed-dispensary-ottawa", text: "Address, hours, telephone number, and store information." },
      { title: "Contact Castle Heights", href: "/contact", text: "Call the store or review the full 24-hour schedule." },
      { title: "Product Format Overview", href: "/resources/ottawa-east-menu-guide", text: "Compare the principal flower and item formats." },
    ],
    sections: [
      { heading: "Use Current Directions", body: "Travel time varies with the starting point, traffic, road work, and route. Current map directions provide a more useful estimate than a fixed neighbourhood travel claim." },
      { heading: "Call Ahead for a Particular Listing", body: "Published product listings can change. Call (343) 308-9488 before leaving when a specific strain, product, size, or price matters to the visit." },
    ],
  },
  {
    slug: "ottawa-east-menu-guide",
    title: "Castle Heights Product Format Overview",
    seoTitle: "Castle Heights Cannabis Product Formats | Ottawa",
    description: "Compare the flower, pre-roll, edible, vape, concentrate, cigarette, and accessory formats listed by Castle Heights Cannabis in Ottawa.",
    eyebrow: "Product Formats",
    intro: "Adult shoppers can compare flower separately from pre-rolls, edibles, vape pens, disposable vapes, concentrates, cigarettes, and accessories.",
    cards: [
      { title: "Flower Tier Comparison", href: "/resources/flower-shelf-guide", text: "Compare Exotic, Premium, AAA+, AA, and Budget collections." },
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Compare supplied pre-roll names, package details, and prices." },
      { title: "Edibles", href: "/items/edibles", text: "Compare supplied edible names, package details, and prices." },
      { title: "Vape Pens", href: "/items/vapes", text: "Compare supplied vape-pen product details." },
      { title: "Disposable Vapes", href: "/items/vape-disposables", text: "Compare supplied disposable-vape product details." },
      { title: "Concentrates", href: "/items/concentrates", text: "Compare supplied concentrate names and package details." },
    ],
    sections: [
      { heading: "Product Details Vary by Format", body: "Names, package descriptions, THC or MG details, and prices appear only when supplied for an individual listing. Call ahead when one specific option matters." },
      { heading: "Store Information", body: "Castle Heights Cannabis is open 24 hours at 605 Center St, Ottawa, ON K1K 2N8. The store phone number is (343) 308-9488." },
    ],
  },
  {
    slug: "flower-shelf-guide",
    title: "Castle Heights Flower Tier Comparison",
    seoTitle: "Castle Heights Flower Tiers | Exotic Premium AAA+ AA Budget",
    description: "Compare the five Castle Heights Cannabis flower collections: Exotic, Premium, AAA+, AA, and Budget.",
    eyebrow: "Flower Collections",
    intro: "Castle Heights Cannabis groups flower into five named collections. Compare the supplied strain type, THC detail, package sizes, and prices within the collection that interests you.",
    cards: [
      { title: "Exotic", href: "/exotic", text: "Compare listed Exotic flower options." },
      { title: "Premium", href: "/premium", text: "Compare listed Premium flower options." },
      { title: "AAA+", href: "/aaa", text: "Compare listed AAA+ flower options." },
      { title: "AA", href: "/aa", text: "Compare listed AA flower options." },
      { title: "Budget", href: "/budget", text: "Compare listed Budget flower options." },
    ],
    sections: [
      { heading: "Use Supplied Strain Details", body: "Each flower listing can include its supplied type, THC detail, image, and package prices. Those details are more useful than assigning effects that are not present in the menu data." },
      { heading: "Confirm a Specific Option", body: "Flower listings can change. Call (343) 308-9488 before travelling when a particular strain or package size matters." },
    ],
  },
  {
    slug: "smoke-accessory-guide",
    title: "Castle Heights Smoke Essentials",
    seoTitle: "Castle Heights Cigarettes Grabba Backwoods and Accessories | Ottawa",
    description: "Compare cigarette, Grabba, Backwoods, nicotine pouch information, and accessory options at Castle Heights Cannabis in Ottawa.",
    eyebrow: "Smoke Essentials",
    intro: "Adult shoppers can compare listed cigarette, Grabba, Backwoods, nicotine-related, and accessory options before visiting the 24-hour Center Street store.",
    cards: [
      { title: "Cigarettes", href: "/items/cigarettes", text: "Compare supplied cigarette and smoke-product details." },
      { title: "Grabba", href: "/grabba-leaf-shakers", text: "Compare listed Grabba and Grabba Shaker options." },
      { title: "Backwoods", href: "/backwoods-cigars-ottawa", text: "Compare listed Backwoods options." },
      { title: "Nicotine Pouch Information", href: "/nicotine-pouches-ottawa", text: "Check published pouch information and related vape listings." },
      { title: "Accessories", href: "/items/add-ons", text: "Compare supplied accessory names and prices." },
    ],
    sections: [
      { heading: "Check the Product Name and Package Detail", body: "Supplied product names, package details, and prices help distinguish smoke essentials before a visit. Listings can change, so call ahead about a particular brand or format." },
      { heading: "Open 24 Hours", body: "Castle Heights Cannabis is open 24 hours at 605 Center St in Ottawa. Call (343) 308-9488 before travelling when a specific product matters." },
    ],
  },
  {
    slug: "transit-parking-planner",
    title: "Castle Heights Directions and Arrival Information",
    seoTitle: "Castle Heights Cannabis Directions and Arrival Information | Ottawa",
    description: "Use current directions and confirm arrival details before visiting Castle Heights Cannabis at 605 Center St in Ottawa.",
    eyebrow: "Directions and Arrival",
    intro: "Plan from your actual starting point because route and travel time can change. Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8.",
    cards: [
      { title: "Ottawa Store Details", href: "/weed-dispensary-ottawa", text: "Review the address, hours, phone number, and store information." },
      { title: "Contact", href: "/contact", text: "Call the store before leaving when an arrival detail needs confirmation." },
      { title: "Visit Information", href: "/resources/castle-heights-overbrook-visit-guide", text: "Review call-ahead and route-planning information." },
    ],
    sections: [
      { heading: "Plan from the Actual Starting Point", body: "Traffic, construction, transit schedules, and route conditions can change. Use a current map or transit service rather than relying on a fixed travel-time estimate." },
      { heading: "Confirm Uncertain Details", body: "Call (343) 308-9488 before travelling if you need to confirm an arrival detail. The store is open 24 hours at 605 Center St." },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
