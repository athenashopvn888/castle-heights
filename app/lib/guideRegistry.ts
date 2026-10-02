import { allFlowers, allItems, type FlowerProduct, type ItemProduct } from "./products";

export type GuideLane = "strain" | "native_cig" | "nic_vape" | "thc_vape";

export type GuideEntry = {
  slug: string;
  lane: GuideLane;
  name: string;
  title: string;
  preferredCategoryPath: string;
  preferredProductSlug?: string;
  relatedSlugs: string[];
  stockSource: "flowers.json" | "items.json";
};

type GuideSeed = Omit<GuideEntry, "relatedSlugs">;

const seeds: GuideSeed[] = [
  { slug: "og-kush", lane: "strain", name: "OG Kush", title: "OG Kush at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "og-kush-aaa", stockSource: "flowers.json" },
  { slug: "gorilla-glue", lane: "strain", name: "Gorilla Glue", title: "Gorilla Glue at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aa-weed", preferredProductSlug: "gorilla-glue-4", stockSource: "flowers.json" },
  { slug: "purple-punch", lane: "strain", name: "Purple Punch", title: "Purple Punch at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "purple-punch", stockSource: "flowers.json" },
  { slug: "master-kush", lane: "strain", name: "Master Kush", title: "Master Kush at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "master-kush-aaa", stockSource: "flowers.json" },
  { slug: "permanent-marker", lane: "strain", name: "Permanent Marker", title: "Permanent Marker at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/exotic-weed", preferredProductSlug: "pink-permanent-marker", stockSource: "flowers.json" },
  { slug: "slurricane", lane: "strain", name: "Slurricane", title: "Slurricane at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aa-weed", preferredProductSlug: "slurricane", stockSource: "flowers.json" },
  { slug: "mku", lane: "strain", name: "MKU", title: "MKU at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "mku", stockSource: "flowers.json" },
  { slug: "island-pink", lane: "strain", name: "Island Pink", title: "Island Pink at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/premium-weed", preferredProductSlug: "island-pink", stockSource: "flowers.json" },
  { slug: "pink-rockstar", lane: "strain", name: "Pink Rockstar", title: "Pink Rockstar at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aaa-weed", preferredProductSlug: "pink-rockstar", stockSource: "flowers.json" },
  { slug: "red-congolese", lane: "strain", name: "Red Congolese", title: "Red Congolese at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/premium-weed", preferredProductSlug: "red-congolese", stockSource: "flowers.json" },
  { slug: "tequila-sunrise", lane: "strain", name: "Tequila Sunrise", title: "Tequila Sunrise at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/exotic-weed", preferredProductSlug: "tequila-sunrise-s", stockSource: "flowers.json" },
  { slug: "royal-gorilla", lane: "strain", name: "Royal Gorilla", title: "Royal Gorilla at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/aa-weed", preferredProductSlug: "royal-gorilla", stockSource: "flowers.json" },
  { slug: "lavender-kush", lane: "strain", name: "Lavender Kush", title: "Lavender Kush at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/budget-weed", preferredProductSlug: "lavender-kush", stockSource: "flowers.json" },
  { slug: "canadian-cigarettes", lane: "native_cig", name: "Canadian", title: "Canadian Native Cigarettes at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "canadian-menthol", stockSource: "items.json" },
  { slug: "backwoods", lane: "native_cig", name: "Backwoods", title: "Backwoods Native Cigarettes at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "backwoods-assorted-flavors-20-25", stockSource: "items.json" },
  { slug: "grabba", lane: "native_cig", name: "Grabba", title: "Grabba Native Cigarettes at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/cigarettes", preferredProductSlug: "grabba", stockSource: "items.json" },
  { slug: "ovns-vape", lane: "nic_vape", name: "OVNS", title: "OVNS Nicotine Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vapes", preferredProductSlug: "ovns-10000-5-10k-puffs-nvape", stockSource: "items.json" },
  { slug: "geek-bar-vape", lane: "nic_vape", name: "Geek Bar", title: "Geek Bar Nicotine Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vapes", preferredProductSlug: "geek-promax-5-30k-puffs-nvape", stockSource: "items.json" },
  { slug: "elf-bar-vape", lane: "nic_vape", name: "Elf Bar", title: "Elf Bar Nicotine Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vapes", preferredProductSlug: "elf-bar-10k-nvape", stockSource: "items.json" },
  { slug: "level-x-vape", lane: "nic_vape", name: "Level X", title: "Level X Nicotine Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vapes", preferredProductSlug: "level-x-g2-pod-nvape", stockSource: "items.json" },
  { slug: "envi-dripn-vape", lane: "nic_vape", name: "ENVI Drip'n", title: "ENVI Drip'n Nicotine Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vapes", preferredProductSlug: "envi-dripn-5-28k-puffs-nvape", stockSource: "items.json" },
  { slug: "zpods-vape", lane: "nic_vape", name: "Zpods", title: "Zpods Nicotine Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vapes", preferredProductSlug: "zpods-zpods-mango-pineapple-32-ml-pods-5-synthetic-nic", stockSource: "items.json" },
  { slug: "gas-gang-thc-vape", lane: "thc_vape", name: "Gas Gang", title: "Gas Gang THC Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vape-disposables", preferredProductSlug: "2g-gas-gang-vol3-hybrid-thcvape", stockSource: "items.json" },
  { slug: "drizzle-thc-vape", lane: "thc_vape", name: "Drizzle", title: "Drizzle THC Vape at Castle Heights Cannabis | Center St Ottawa", preferredCategoryPath: "/items/vape-disposables", preferredProductSlug: "drizzle-switch-3in1-2g-thcvape", stockSource: "items.json" },
];

const clusterFor = (seed: GuideSeed) =>
  seeds
    .filter((candidate) => candidate.lane === seed.lane && candidate.slug !== seed.slug)
    .slice(0, seed.lane === "strain" ? 4 : 3)
    .map((candidate) => candidate.slug);

export const GUIDE_REGISTRY: GuideEntry[] = seeds.map((seed) => ({
  ...seed,
  relatedSlugs: clusterFor(seed),
}));

export function getGuide(slug: string) {
  return GUIDE_REGISTRY.find((guide) => guide.slug === slug);
}

export function resolveGuideProduct(guide: GuideEntry): FlowerProduct | ItemProduct | undefined {
  if (!guide.preferredProductSlug) return undefined;
  const products = guide.lane === "strain" ? allFlowers : allItems;
  return products.find((product) => product.slug === guide.preferredProductSlug);
}

export function getTierGuideLinks(categoryPath: string, limit = 6) {
  return GUIDE_REGISTRY
    .filter((guide) => guide.lane === "strain" && guide.preferredCategoryPath === categoryPath)
    .slice(0, limit);
}

export function getCategoryGuideGroups(categoryPath: string) {
  if (categoryPath === "/items/cigarettes") {
    return [{ label: "Native Cigarettes guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "native_cig").slice(0, 11) }];
  }
  if (categoryPath === "/items/vapes") {
    return [
      { label: "Nicotine Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "nic_vape").slice(0, 8) },
      { label: "Separate THC Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "thc_vape").slice(0, 2) },
    ];
  }
  if (categoryPath === "/items/vape-disposables") {
    return [{ label: "THC Vape guides", guides: GUIDE_REGISTRY.filter((guide) => guide.lane === "thc_vape").slice(0, 8) }];
  }
  return [];
}

