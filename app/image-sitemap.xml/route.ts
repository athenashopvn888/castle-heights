import {
  allFlowers,
  allItems,
  isGrabbaItem,
  isGrabbaShakerItem,
} from "../lib/products";

const BASE = "https://www.castleheightscannabis.ca";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absoluteImageUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${BASE}${value.startsWith("/") ? value : `/${value}`}`;
}

function addImage(
  entries: Map<string, Set<string>>,
  page: string,
  image: string | undefined
) {
  if (!image) return;
  const pageImages = entries.get(page) || new Set<string>();
  pageImages.add(absoluteImageUrl(image));
  entries.set(page, pageImages);
}

export const dynamic = "force-static";

export function GET() {
  const entries = new Map<string, Set<string>>();
  addImage(entries, BASE, "/banners/chc-homepage.webp");

  const grabbaItems = allItems.filter(isGrabbaItem);
  grabbaItems.forEach((item) =>
    addImage(entries, `${BASE}/grabba-leaf-shakers`, item.image)
  );

  const nativeCigarette = allItems.find((item) => {
    const text = `${item.name} ${item.slug}`.toLowerCase();
    return (
      item.category.toUpperCase() === "CIGARETTES" &&
      !isGrabbaItem(item) &&
      !/(backwood|pouch|velo|pablo|killa|zyn)/.test(text)
    );
  });
  addImage(
    entries,
    `${BASE}/native-cigarettes-ottawa`,
    nativeCigarette?.image
  );

  allFlowers.forEach((flower) =>
    addImage(entries, `${BASE}/flower/${flower.slug}`, flower.image)
  );
  allItems.forEach((item) =>
    addImage(entries, `${BASE}/item/${item.slug}`, item.image)
  );

  const urls = [...entries.entries()]
    .map(
      ([page, images]) =>
        `  <url>\n    <loc>${escapeXml(page)}</loc>\n${[...images]
          .map(
            (image) =>
              `    <image:image>\n      <image:loc>${escapeXml(image)}</image:loc>\n    </image:image>`
          )
          .join("\n")}\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export const imageSitemapDiagnostics = {
  hasGrabbaShaker: allItems.some(isGrabbaShakerItem),
};
