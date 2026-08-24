/* ── Geo-targeted SEO landing pages for Ottawa keywords ── */

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "ottawa-weed-dispensary",
    title: "Ottawa Weed Dispensary — Castle Heights Cannabis | 24 Hours | Center St",
    metaDescription: "Castle Heights Cannabis is Ottawa's premium late-night weed dispensary at 605 Center St in Vanier area. 200+ strains, THC up to 39%, edibles, vapes, concentrates & more. Walk in anytime.",
    h1: "Ottawa Weed Dispensary — Castle Heights Cannabis",
    icon: "✨",
    heroTagline: "Premium Cannabis on Center St · Open 24 Hours · Walk-In Welcome",
    banner: "/banners/chc-ottawa-dispensary.webp",
    sections: [
      {
        heading: "Ottawa's Premier Cannabis Destination",
        body: "Castle Heights Cannabis is a premium cannabis dispensary located at 605 Center St in the heart of Ottawa's vibrant Vanier area neighbourhood. We carry over 200 hand-picked cannabis strains across five quality tiers — from ultra-rare Exotic genetics with THC up to 39% to affordable Budget flower starting at just $3/g. Whether you're a connoisseur seeking the rarest strains or a daily smoker looking for reliable value, Castle Heights has the perfect flower for you. We're proud to be one of Ottawa's most trusted dispensaries, serving the Vanier area community 24 hours a day.",
      },
      {
        heading: "Five Tiers of Quality Cannabis — Transparent Pricing",
        body: "Our unique tier system ensures transparent pricing and quality grading so you always know what you're getting. Exotic ($10-$12/g) features top-shelf, ultra-rare genetics with THC levels reaching 35-39% — these are the strains connoisseurs travel across Ottawa to find. Premium ($7-$10/g) offers connoisseur-grade strains at THC 32-34%, balancing quality and value. AAA+ ($5-$6/g) delivers heavy hitters at THC 30-32% — our most popular tier for experienced users. AA ($4/g) provides quality daily drivers at THC 27-29%, perfect for regular consumption. Budget ($3/g) offers value ounces from $40 without sacrificing reliability. Every tier is lab-tested, properly cured, and freshly rotated.",
      },
      {
        heading: "Beyond Flower — Edibles, Vapes, Concentrates & More",
        body: "Castle Heights Cannabis is more than just a flower shop. We carry a comprehensive selection of cannabis edibles (gummies, chocolates, baked goods), vape pens and disposable vapes, concentrates (shatter, wax, hash, diamonds, live resin), pre-rolled joints, native cigarettes, rolling papers, and accessories. Our live digital menu at castleheightscannabis.com updates in real time so you always know exactly what's in stock before you make the trip.",
      },
      {
        heading: "Open 24 Hours in Vanier area",
        body: "Castle Heights Cannabis is open 24 hours a day. Whether you're finishing a late shift or heading out for the night, our doors are open late. We're centrally located at 605 Center St, steps from the Vanier area, near major OC Transpo bus routes, and minutes from the Rideau Centre and Parliament Hill. Free street parking is available in the evenings.",
      },
      {
        heading: "Clear Bundle Pricing on Flower",
        body: "Every purchase at Castle Heights Cannabis uses clear flower bundle pricing. The 3g bundle offer applies to every single tier — the 3g total is shown clearly before purchase. Our top three tiers (Exotic, Premium, and AAA+) also qualify for 6g bundle pricing for 6g total. Combined with our already competitive pricing, Castle Heights offers some of the best cannabis value in Ottawa and the surrounding area.",
      },
      {
        heading: "Serving Ottawa & Gatineau",
        body: "Castle Heights Cannabis proudly serves customers from across the National Capital Region. Whether you're coming from Vanier area, Sandy Hill, Lower Town, Centretown, the Glebe, Old Ottawa South, Vanier, Orleans, Kanata, Barrhaven, or across the bridge from Gatineau and Hull, we welcome you. We are open 24 hours. Call us at (343) 308-9488 or visit us at 605 Center St, Ottawa, ON K1K 2N8.",
      },
    ],
    faqs: [
      { q: "Where is Castle Heights Cannabis located?", a: "We are located at 605 Center St, Ottawa, ON K1K 2N8 — in the heart of Vanier area, one of Ottawa's most popular and accessible neighbourhoods. We're near the Rideau Centre, Parliament Hill, and major bus routes." },
      { q: "What are the hours for Castle Heights Cannabis?", a: "We are open 24 hours a day. Walk in anytime during our open hours." },
      { q: "What cannabis products does Castle Heights carry?", a: "We carry 200+ strains of cannabis flower across 5 quality tiers (Exotic, Premium, AAA+, AA, Budget), plus edibles, vapes, concentrates, pre-rolls, native cigarettes, and accessories. Our menu updates in real time online." },
      { q: "What is the cheapest weed at Castle Heights?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. The flower menu includes 3g bundle pricing, making our prices even more competitive." },
      { q: "Does Castle Heights have a live menu?", a: "Yes! Our online menu at castleheightscannabis.com updates in real time with current stock, prices, and availability. You can see exactly what we have before you visit." },
      { q: "What makes Castle Heights different from other Ottawa dispensaries?", a: "Three things set us apart: (1) We're open 24 hours, (2) our transparent 5-tier pricing system means no confusing markups, and (3) the flower menu includes 3g bundle pricing. Plus we carry one of Ottawa's largest selections with over 200 strains." },
      { q: "Can I check stock before visiting?", a: "Absolutely. Visit castleheightscannabis.com to see our live menu. All flower, edibles, vapes, and accessories are listed with real-time stock status, THC levels, and pricing." },
      { q: "Is there parking near Castle Heights Cannabis?", a: "Yes. Free street parking is available in the evenings on Center St and surrounding streets. Paid lots are available nearby during the day. We're also easily accessible via OC Transpo." },
    ],
  },

  {
    slug: "cheap-weed-ottawa",
    title: "Cheap Weed Ottawa — Budget Cannabis Deals From $3/g | Castle Heights",
    metaDescription: "Looking for cheap weed in Ottawa? Castle Heights Cannabis has budget flower from $3/g, ounces from $40, and 3g bundle pricing. Open 24 Hours at 605 Center St.",
    h1: "Cheap Weed Ottawa — Budget Cannabis Deals",
    icon: "💰",
    heroTagline: "Budget Flower From $3/g · Ounces From $40 · Always Open",
    banner: "/banners/chc-tier-pricing.webp",
    sections: [
      {
        heading: "Ottawa's Best Prices on Quality Cannabis",
        body: "Looking for cheap weed in Ottawa without sacrificing quality? Castle Heights Cannabis offers some of the most competitive cannabis prices in the city. Our Budget tier starts at just $3/g with value ounces from $40. Our AA tier ($4/g) and AAA+ tier ($5-$6/g) also deliver incredible value with THC levels from 27% to 32%. We believe great cannabis shouldn't break the bank, and our transparent tier-based pricing ensures you always get exactly what you pay for — no hidden markups, no gimmicks.",
      },
      {
        heading: "Flower Bundle Pricing",
        body: "Every tier at Castle Heights Cannabis uses clear 3g bundle pricing so the total grams and price are shown before purchase. Our top three tiers (Exotic, Premium, AAA+) also offer 6g bundle pricing for 6g total. When you combine our already low prices with these bundle offers, Castle Heights delivers the best cannabis value in Ottawa. A $15 AAA+ 3g purchase actually gets you 3g of flower — that's just $5/g for THC 30%+ cannabis.",
      },
      {
        heading: "Budget Doesn't Mean Low Quality",
        body: "At Castle Heights Cannabis, cheap doesn't mean low quality. Every strain in our Budget and AA tiers delivers reliable potency (THC 24-29%) from trusted Canadian growers. We rotate our inventory frequently to ensure freshness and maintain our quality standards across all price points. Our Budget strains are perfect for rolling, sessions, or anyone who prefers value over premium aesthetics. Our AA tier is a step up — solid daily drivers with consistent effects.",
      },
      {
        heading: "Compare Our Prices",
        body: "Budget: $3/g — $40/oz. AA: $4/g — $90/oz. AAA+: $5-$6/g — $100/oz. Premium: $7-$10/g. Exotic: $10-$12/g. Every tier includes 3g bundle pricing. Top tiers include 6g bundle pricing. These are some of the lowest prices you'll find at any dispensary in Ottawa, Vanier, Sandy Hill, Lower Town, or the Vanier area area.",
      },
    ],
    faqs: [
      { q: "What is the cheapest weed at Castle Heights Cannabis?", a: "Our Budget tier starts at $3/g with value ounces from $40. These are quality, properly-cured strains at Ottawa's most competitive prices." },
      { q: "Do you have ounce deals?", a: "Yes! Budget ounces from $40, AA ounces from $90, AAA+ ounces from $100. All with excellent quality, freshness guaranteed, and 3g bundle pricing on top." },
      { q: "Is cheap weed still good quality?", a: "Absolutely. Our Budget flower delivers THC 24-27% from trusted Canadian growers. We never sell old, dry, or improperly stored flower. Every product meets our quality standards regardless of price point." },
      { q: "Where can I buy cheap weed in Ottawa?", a: "Castle Heights Cannabis at 605 Center St, Ottawa. Open 24 Hours, walk in anytime. We're in the heart of Vanier area." },
      { q: "What bundle pricing do you offer?", a: "Every tier includes 3g bundle pricing (pay for 3g total). Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing (pay for 6g total). These bundle offers apply on every visit." },
      { q: "Do you offer bulk discounts?", a: "Yes — our ounce pricing is deeply discounted compared to per-gram rates. Budget ounces are $40, AA ounces $90, and AAA+ ounces $100. The more you buy, the more you save." },
    ],
  },

  {
    slug: "native-cigarettes-ottawa",
    title: "Native Cigarettes Ottawa — Discount Tobacco | Castle Heights Cannabis",
    metaDescription: "Buy native cigarettes in Ottawa at Castle Heights Cannabis. Wide selection of premium and value tobacco brands at the best prices. 605 Center St, Vanier area. Open 24 Hours.",
    h1: "Native Cigarettes Ottawa — Discount Tobacco",
    icon: "🏷️",
    heroTagline: "Premium & Value Brands · Best Prices in Ottawa · Open 24 Hours",
    banner: "/banners/chc-deals-vapes.webp",
    sections: [
      {
        heading: "Ottawa's Best Selection of Native Cigarettes",
        body: "Castle Heights Cannabis carries one of the widest selections of native cigarettes in Ottawa. Located at 605 Center St in the Vanier area, we stock a comprehensive range of both premium and value native cigarette brands at competitive prices. Whether you prefer full-flavour, light, menthol, or specialty blends, our tobacco selection has something for every smoker. We're proud to be one of the few stores in downtown Ottawa that combines a full cannabis dispensary with a comprehensive tobacco counter — one stop for everything you need.",
      },
      {
        heading: "Why Ottawa Smokers Choose Castle Heights",
        body: "There are three reasons Ottawa smokers keep coming back to Castle Heights for their cigarettes. First, our prices are among the lowest in the Vanier area area — we buy in volume and pass the savings to our customers. Second, our selection is comprehensive — we carry brands and varieties that many other shops simply don't stock. Third, we're open 24 hours a day, 7 days a week. Need cigarettes at midnight? 3 AM? We're here. No other tobacco shop in downtown Ottawa offers this level of convenience.",
      },
      {
        heading: "Convenient Vanier area Location",
        body: "Our shop at 605 Center St is centrally located in Ottawa's Vanier area — easily accessible from Rideau St, Sussex Dr, and all major downtown routes. Whether you're walking, driving, or taking the bus, Castle Heights is easy to reach. Free evening street parking is available on Center St and nearby streets. We serve customers from across Ottawa including Lower Town, Sandy Hill, Centretown, Vanier, and across the bridge from Gatineau.",
      },
      {
        heading: "More Than Just Cigarettes",
        body: "While you're picking up your cigarettes, browse our full cannabis menu — over 200 strains of flower, plus edibles, vapes, concentrates, pre-rolls, and accessories. Many of our customers appreciate the convenience of getting their cigarettes and cannabis in one trip. Our knowledgeable staff can help you with both sides of our inventory.",
      },
    ],
    faqs: [
      { q: "Does Castle Heights sell native cigarettes?", a: "Yes! We carry one of the widest selections of native cigarettes in downtown Ottawa, including premium brands, value brands, full-flavour, light, and menthol varieties." },
      { q: "What cigarette brands do you carry?", a: "We stock a comprehensive range of native cigarette brands in multiple varieties. Our selection rotates regularly. Visit us at 605 Center St to see our full current inventory and pricing." },
      { q: "Where can I buy cheap cigarettes in Ottawa?", a: "Castle Heights Cannabis at 605 Center St offers some of the best cigarette prices in Ottawa's Vanier area area. We're open 24 hours so you can shop on your own schedule." },
      { q: "Are you open late for cigarette purchases?", a: "We're open 24 hours a day, 7 days a week. Whether you need cigarettes at noon or 3 AM, our doors are always open." },
      { q: "Can I buy cigarettes and cannabis at Castle Heights?", a: "Absolutely. Castle Heights is both a fully-licensed cannabis dispensary and a tobacco retailer. Many customers appreciate the convenience of one stop for both products." },
      { q: "Where is Castle Heights located?", a: "605 Center St, Ottawa, ON K1K 2N8 — in the Vanier area. Near Rideau Centre, close to major bus routes, with free evening street parking available." },
    ],
  },

  {
    slug: "weed-store-near-gatineau",
    title: "Weed Store Near Gatineau — Castle Heights Cannabis | 5 Min From the Bridge",
    metaDescription: "Looking for a weed store near Gatineau? Castle Heights Cannabis at 605 Center St, Ottawa is just 5 minutes from the Portage Bridge. 200+ strains, open 24 hours.",
    h1: "Weed Store Near Gatineau — Castle Heights Cannabis",
    icon: "🌉",
    heroTagline: "Just 5 Minutes From the Portage Bridge · Open 24 Hours",
    banner: "/banners/chc-storefront.webp",
    sections: [
      {
        heading: "The Closest Quality Dispensary to Gatineau",
        body: "Castle Heights Cannabis is one of the closest cannabis dispensaries to Gatineau, Quebec. Located at 605 Center St in Ottawa's Vanier area — just 5 minutes from the Portage Bridge and 7 minutes from the Macdonald-Cartier Bridge — we're the easiest dispensary to reach when you're coming from the Quebec side. Whether you're crossing from Hull, Aylmer, downtown Gatineau, or anywhere in the Outaouais region, Castle Heights is the fastest, most convenient option for premium cannabis.",
      },
      {
        heading: "Why Cross the Bridge to Castle Heights?",
        body: "Ontario's cannabis market offers a wider selection and more competitive pricing than Quebec's SQDC. At Castle Heights, you'll find over 200 strains across five quality tiers — from ultra-rare Exotic genetics (THC 35-39%) to affordable Budget flower at just $3/g. Our 3g bundle pricing applies to every tier, and our top three tiers offer 6g bundle pricing. With prices starting at $3/g and ounces from $40, Castle Heights delivers value that's worth the 5-minute drive.",
      },
      {
        heading: "Open 24 Hours — Perfect for Cross-Border Visits",
        body: "Unlike most dispensaries with limited hours, Castle Heights Cannabis is open 24 hours a day, 7 days a week. Whether you're heading to Ottawa for dinner, a Senators game, shopping at the Rideau Centre, or just making a quick trip across the bridge, you can stop by Castle Heights anytime. Early morning, late night, weekends, holidays — we're always here.",
      },
      {
        heading: "Directions From Gatineau",
        body: "From downtown Gatineau/Hull: Take the Portage Bridge into Ottawa, turn right on Wellington St, right on Elgin/Mackenzie King Bridge, and follow to Center St. Total drive time: approximately 5-7 minutes. From Aylmer: Take Autoroute 50 to the Champlain Bridge or Portage Bridge. Total drive time: approximately 15-20 minutes. Free evening street parking is available on Center St. We're also accessible by STO (Société de transport de l'Outaouais) buses that cross into downtown Ottawa.",
      },
      {
        heading: "Full Menu — Cannabis, Edibles, Vapes & More",
        body: "When you make the trip across the bridge, make it count. Castle Heights carries a full selection including 200+ flower strains, edibles, vape pens, disposable vapes, concentrates (shatter, wax, hash, live resin), pre-rolled joints, native cigarettes, and accessories. Check our live online menu at castleheightscannabis.com before you visit to see exactly what's in stock.",
      },
    ],
    faqs: [
      { q: "How far is Castle Heights from Gatineau?", a: "We're located at 605 Center St in Ottawa's Vanier area — just 5 minutes from the Portage Bridge and 7 minutes from the Macdonald-Cartier Bridge. It's one of the closest dispensaries to the Quebec border." },
      { q: "Is it worth crossing the bridge for cannabis?", a: "Absolutely. Castle Heights offers 200+ strains, prices starting at $3/g, and bundle pricing options like 3g total that you won't find at Quebec's SQDC locations. The selection and value are significantly better." },
      { q: "Is Castle Heights Cannabis open late?", a: "We're open 24 hours a day, 7 days a week. Whether you're crossing the bridge at noon or midnight, we're open and ready to serve you." },
      { q: "What's the cheapest weed near Gatineau?", a: "Castle Heights Cannabis has Budget flower from $3/g and value ounces from $40. With our 3g bundle pricing, these are some of the best prices near the Gatineau border." },
      { q: "Is there parking at Castle Heights?", a: "Yes. Free evening street parking is available on Center St and surrounding streets. Paid parking lots are also nearby during the day." },
      { q: "Can I take the bus from Gatineau to Castle Heights?", a: "Yes! STO (Gatineau transit) buses cross into downtown Ottawa. Castle Heights is also near major OC Transpo routes. The store is walking distance from several downtown bus stops." },
      { q: "Do you carry products besides cannabis?", a: "Yes — we also carry native cigarettes, rolling papers, grinders, and other accessories. Many Gatineau customers appreciate the one-stop convenience." },
    ],
  },

  {
    slug: "dispensary-near-me-ottawa",
    title: "Cannabis Dispensary Near Me Ottawa — Castle Heights | Open 24 Hours",
    metaDescription: "Find a cannabis dispensary near you in Ottawa. Castle Heights Cannabis at 605 Center St has 200+ strains from $3/g. Open 24 Hours. Walk in anytime.",
    h1: "Cannabis Dispensary Near Me — Ottawa",
    icon: "🗺️",
    heroTagline: "Walk-In Welcome · Open 24 Hours · 200+ Strains In Stock",
    banner: "/banners/chc-storefront.webp",
    sections: [
      {
        heading: "Find Premium Cannabis Near You in Ottawa",
        body: "If you're searching for a cannabis dispensary near you in Ottawa, Castle Heights Cannabis is conveniently located at 605 Center St — in the heart of the Vanier area. We serve customers from across Ottawa and Gatineau including Sandy Hill, Lower Town, Centretown, the Glebe, Old Ottawa South, Vanier, Orleans, Kanata, Barrhaven, and across the bridge from Gatineau and Hull.",
      },
      {
        heading: "Why Choose Castle Heights Over Other Dispensaries?",
        body: "What sets Castle Heights apart from other Ottawa dispensaries is our combination of selection, pricing, and convenience. We carry 200+ strains across five clear quality tiers — no confusing markups, no inconsistent pricing. Our 3g bundle pricing applies to every tier, every purchase. And unlike most dispensaries that close at midnight, we're open 24 hours a day, 7 days a week. Whether you need flower, edibles, vapes, or concentrates at any hour, Castle Heights is here.",
      },
      {
        heading: "Areas We Serve in Ottawa & Gatineau",
        body: "Castle Heights Cannabis is centrally located and easily accessible from anywhere in Ottawa. We regularly serve customers from: Vanier area, Sandy Hill, Lower Town, Centretown, the Glebe, Old Ottawa South, Vanier, New Edinburgh, Rockcliffe, Orleans, Kanata, Barrhaven, Nepean, Stittsville, and across the bridge from Gatineau, Hull, and Aylmer. We're near major OC Transpo routes and the Rideau Centre.",
      },
    ],
    faqs: [
      { q: "Where is the closest dispensary in Vanier area?", a: "Castle Heights Cannabis at 605 Center St is conveniently located in the heart of Vanier area — one of Ottawa's most accessible neighbourhoods." },
      { q: "Is Castle Heights Cannabis walk-in friendly?", a: "Absolutely! No appointment needed. Walk in anytime — we're open 24 hours a day, 7 days a week. Our friendly staff is always ready to help." },
      { q: "What neighbourhoods does Castle Heights serve?", a: "We serve all of Ottawa including Vanier area, Sandy Hill, Lower Town, Centretown, the Glebe, Vanier, Orleans, Kanata, Barrhaven, and Gatineau/Hull across the bridge." },
      { q: "How do I check what's in stock?", a: "Visit castleheightscannabis.com for our live menu with real-time stock, pricing, and THC levels for all products." },
      { q: "Do you sell edibles and vapes?", a: "Yes! In addition to 200+ flower strains, we carry edibles (gummies, chocolates), vape pens, disposable vapes, concentrates, pre-rolls, and accessories." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
