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
  banner: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Castle Heights Cannabis Resources",
    seoTitle: "Castle Heights Cannabis Resources | Ottawa Menu And Visit Guides",
    description: "Castle Heights Cannabis guides for Castle Heights, Overbrook, Vanier, St. Laurent, Ottawa East, menu categories, flower shelves, and visit planning.",
    eyebrow: "Castle Heights Resource Hub",
    intro: "Planning a Center Street visit is easier when local details and menu choices are separated into short guides. Start with Castle Heights and Overbrook context, choose the right category, then use the current store page for directions and timing before leaving.",
    banner: "/banners/homepage_hero.webp",
    cards: [
      { title: "Castle Heights And Overbrook Visit Guide", href: "/resources/castle-heights-overbrook-visit-guide", text: "Plan a visit from Castle Heights, Overbrook, Vanier, St. Laurent, or another Ottawa East starting point." },
      { title: "Ottawa East Menu Guide", href: "/resources/ottawa-east-menu-guide", text: "Move from visit intent to flower, pre-rolls, edibles, vapes, concentrates, magic, cigarettes, or accessories." },
      { title: "Flower Shelf Guide", href: "/resources/flower-shelf-guide", text: "Compare Exotic, Premium, AAA+, AA, and Budget as separate shelf lanes." },
      { title: "Smoke And Accessory Guide", href: "/resources/smoke-accessory-guide", text: "Find the current paths for cigarettes, grabba, Backwoods, nicotine pouches, and accessories." },
      { title: "Transit And Parking Planner", href: "/resources/transit-parking-planner", text: "Use the store's OC Transpo and parking notes as a final planning check." },
    ],
    sections: [
      { heading: "A Resource Hub For Ottawa East", body: "Castle Heights Cannabis serves a different trip than a downtown stop. These pages keep Castle Heights, Overbrook, Vanier, St. Laurent, Donald Street, and Ottawa East context close to the actual menu paths shoppers need." },
      { heading: "Choose A Guide, Then Check The Current Page", body: "The guides explain where to start. Current category pages carry the menu details, while the store and Contact pages carry visit information. That keeps the hub useful without repeating changing menu data." },
    ],
  },
  {
    slug: "castle-heights-overbrook-visit-guide",
    title: "Castle Heights And Overbrook Visit Guide",
    seoTitle: "Castle Heights And Overbrook Cannabis Visit Guide | Ottawa",
    description: "Plan a Castle Heights Cannabis visit from Castle Heights, Overbrook, Vanier, St. Laurent, Donald Street, or Ottawa East.",
    eyebrow: "Ottawa East Visit Guide",
    intro: "This guide is for adults planning the Center Street stop from Castle Heights, Overbrook, Vanier, St. Laurent, Donald Street, or elsewhere in Ottawa East. Confirm the route first, then keep one menu category open for the visit.",
    banner: "/banners/08_Contact_Us.webp",
    cards: [
      { title: "Ottawa Store Page", href: "/weed-dispensary-ottawa", text: "Review current directions, contact options, and local store details." },
      { title: "Ottawa East Menu Guide", href: "/resources/ottawa-east-menu-guide", text: "Choose a format before opening individual menu cards." },
      { title: "Transit And Parking Planner", href: "/resources/transit-parking-planner", text: "Check the store's transit and parking notes before leaving." },
    ],
    sections: [
      { heading: "Start With The Route", body: "Castle Heights and Overbrook shoppers may approach Center Street differently from Vanier or St. Laurent shoppers. Open directions from the actual starting point instead of relying on a neighbourhood label alone." },
      { heading: "Finish With One Menu Lane", body: "If the visit is flower-first, use the shelf guide. If the format is already known, open its category. This keeps a local trip planner connected to the real menu rather than turning it into a generic Ottawa page." },
    ],
  },
  {
    slug: "ottawa-east-menu-guide",
    title: "Ottawa East Menu Guide",
    seoTitle: "Castle Heights Cannabis Menu Guide | Ottawa East",
    description: "Navigate Castle Heights Cannabis menu categories for flower, pre-rolls, edibles, vapes, concentrates, magic, cigarettes, and accessories.",
    eyebrow: "Menu Guide",
    intro: "The Castle Heights menu is easier to scan when each format has its own lane. Pick the reason for the visit first, then open the current category page for the cards shown today.",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    cards: [
      { title: "Flower Shelf Guide", href: "/resources/flower-shelf-guide", text: "Use shelf level as the first filter for flower." },
      { title: "Pre-Rolls", href: "/items/prerolls", text: "Open the ready-to-smoke menu lane." },
      { title: "Edibles", href: "/items/edibles", text: "Keep edible browsing separate from inhaled formats." },
      { title: "Vapes", href: "/items/vapes", text: "Open the current vape category." },
      { title: "Concentrates", href: "/items/concentrates", text: "Use the concentrates lane for extract-format browsing." },
      { title: "Magic", href: "/items/magic", text: "Use the current Magic Stuff category when that is the intended menu path." },
    ],
    sections: [
      { heading: "Format First, Product Second", body: "A category-first route prevents flower, pre-rolls, edibles, vapes, concentrates, and accessories from becoming one long comparison. Once the format is clear, the current cards are easier to scan." },
      { heading: "Keep Visit Details Separate", body: "Use the Ottawa store page for directions and contact information. Use this guide for menu navigation. Separating those jobs makes both pages faster to use." },
    ],
  },
  {
    slug: "flower-shelf-guide",
    title: "Castle Heights Flower Shelf Guide",
    seoTitle: "Castle Heights Flower Shelf Guide | Exotic Premium AAA AA Budget",
    description: "Compare Castle Heights Cannabis flower shelves: Exotic, Premium, AAA+, AA, and Budget.",
    eyebrow: "Flower Guide",
    intro: "Castle Heights flower browsing starts with five shelf lanes. Open one tier, compare the current strain cards inside it, and move shelves only when the first lane does not fit the visit.",
    banner: "/banners/premium_banner.webp",
    cards: [
      { title: "Exotic", href: "/exotic", text: "Open the Exotic shelf and its current cards." },
      { title: "Premium", href: "/premium", text: "Browse the Premium shelf separately." },
      { title: "AAA+", href: "/aaa", text: "Use AAA+ as a middle flower lane." },
      { title: "AA", href: "/aa", text: "Open the AA shelf for value-focused browsing." },
      { title: "Budget", href: "/budget", text: "Start here when the visit is price-conscious." },
    ],
    sections: [
      { heading: "The Shelf Is The First Filter", body: "Shelf lanes provide structure before strain names enter the decision. This is especially useful when the home menu contains many flower cards." },
      { heading: "Use Current Cards For Current Details", body: "The tier pages are the source for the names and package details displayed now. The resource guide stays focused on navigation and does not imply live availability." },
    ],
  },
  {
    slug: "smoke-accessory-guide",
    title: "Castle Heights Smoke And Accessory Guide",
    seoTitle: "Castle Heights Cigarette Grabba And Accessory Guide | Ottawa",
    description: "Find Castle Heights Cannabis menu paths for cigarettes, grabba, Backwoods, nicotine pouches, and accessories.",
    eyebrow: "Smoke Shop Guide",
    intro: "Cigarettes, grabba, Backwoods, nicotine pouches, and accessories are easier to browse when they do not compete with the flower menu. Start with the matching current category, then return to cannabis formats only if needed.",
    banner: "/banners/06_Cigarettes.webp",
    cards: [
      { title: "Cigarettes", href: "/items/cigarettes", text: "Open the current cigarette and smoke-menu lane." },
      { title: "Accessories", href: "/items/add-ons", text: "Check papers, lighters, and related add-ons separately." },
      { title: "Grabba Guide", href: "/grabba-leaf-shakers", text: "Use the dedicated grabba and shaker guide." },
      { title: "Nicotine Pouches", href: "/nicotine-pouches-ottawa", text: "Open the dedicated Ottawa pouch guide." },
    ],
    sections: [
      { heading: "Separate Smoke-Shop And Cannabis Decisions", body: "A shopper looking for papers or grabba should not have to move through every flower tier. These links keep the smoke-shop path short while leaving cannabis categories available from the main menu." },
      { heading: "Confirm From The Current Category", body: "Use the live category or dedicated guide for the details displayed today. This page organizes the route without making stock claims." },
    ],
  },
  {
    slug: "transit-parking-planner",
    title: "Castle Heights Transit And Parking Planner",
    seoTitle: "Castle Heights Cannabis Transit And Parking Planner | Ottawa",
    description: "Review Castle Heights Cannabis transit and parking context before a Center Street visit in Ottawa East.",
    eyebrow: "Route Planner",
    intro: "The store page lists OC Transpo access and on-site lot parking. Use those notes as a starting point, then check the route and posted conditions for the actual time of the visit.",
    banner: "/banners/08_Contact_Us.webp",
    cards: [
      { title: "Ottawa Store Page", href: "/weed-dispensary-ottawa", text: "Review current store details and directions." },
      { title: "Contact", href: "/contact", text: "Use Contact if a route detail needs confirmation." },
      { title: "Castle Heights Visit Guide", href: "/resources/castle-heights-overbrook-visit-guide", text: "Return to the neighbourhood-based planner." },
    ],
    sections: [
      { heading: "OC Transpo Context", body: "The current store information notes OC Transpo service in nearby Ottawa neighbourhoods. Route numbers and timing can change, so plan from the actual starting point before leaving." },
      { heading: "Parking Context", body: "The current store information lists an on-site lot. Availability and posted conditions can vary, so treat that as planning context rather than a guaranteed space." },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
