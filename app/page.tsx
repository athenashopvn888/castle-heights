import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import HiringCallout from "./components/HiringCallout";
import Footer from "./components/Footer";
import { allFlowers } from "./lib/products";

function flowerTierCount(tier: string) {
  return allFlowers.filter((flower) => flower.tier.toUpperCase() === tier).length;
}

/* ── Tier data (will come from Supabase later) ── */
const TIERS = [
  {
    name: "EXOTIC",
    slug: "exotic",
    tagline: "Ultra-rare, top-shelf genetics",
    thc: "35-39%",
    unitPrice: 20,
    deal3g: "3g bundle for $40",
    deal6g: "6g bundle for $60",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.2)",
    icon: "🔥",
    count: flowerTierCount("EXOTIC"),
  },
  {
    name: "PREMIUM",
    slug: "premium",
    tagline: "Hand-picked connoisseur grade",
    thc: "32-34%",
    unitPrice: 15,
    deal3g: "3g bundle for $30",
    deal6g: "6g bundle for $45",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.2)",
    icon: "💎",
    count: flowerTierCount("PREMIUM"),
  },
  {
    name: "AAA+",
    slug: "aaa",
    tagline: "Heavy hitters, proven strains",
    thc: "30-32%",
    unitPrice: 10,
    deal3g: "3g bundle for $20",
    deal6g: "6g bundle for $30",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.2)",
    icon: "⚡",
    count: flowerTierCount("AAA+"),
  },
  {
    name: "AA",
    slug: "aa",
    tagline: "Quality daily drivers",
    thc: "27-29%",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.2)",
    icon: "✦",
    count: flowerTierCount("AA"),
  },
  {
    name: "BUDGET",
    slug: "budget",
    tagline: "Shreds & value OZs",
    thc: "24-27%",
    unitPrice: 3,
    deal3g: "3g bundle for $10",
    deal6g: null,
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.15)",
    icon: "💰",
    count: flowerTierCount("BUDGET"),
  },
  {
    name: "EDIBLES & MORE",
    slug: "items/edibles",
    tagline: "Gummies, vapes, pre-rolls, hash",
    thc: "Up to 98%",
    unitPrice: null,
    deal3g: null,
    deal6g: null,
    color: "#fb923c",
    glow: "rgba(251, 146, 60, 0.2)",
    icon: "🍬",
    count: null,
  },
];

/* ── Build featured strains dynamically from real inventory ── */
function buildFeatured() {
  // Prioritize: hot strains first, then sale, then highest THC
  const hot = allFlowers.filter((f) => f.isHot);
  const sale = allFlowers.filter((f) => f.isSale && !f.isHot);
  const rest = allFlowers
    .filter((f) => !f.isHot && !f.isSale && f.image)
    .sort((a, b) => parseFloat(b.thc) - parseFloat(a.thc));

  const pool = [...hot, ...sale, ...rest];
  // Pick up to 8, ensuring variety across tiers
  const picked: typeof pool = [];
  const tierCounts: Record<string, number> = {};
  const seenSlugs = new Set<string>();
  for (const f of pool) {
    if (picked.length >= 8) break;
    if (seenSlugs.has(f.slug)) continue;
    const tc = tierCounts[f.tier] || 0;
    if (tc >= 3) continue; // max 3 per tier
    if (!f.image) continue; // skip strains without images
    picked.push(f);
    seenSlugs.add(f.slug);
    tierCounts[f.tier] = tc + 1;
  }
  return picked.map((f) => ({
    name: f.name,
    slug: f.slug,
    sku: f.sku,
    tier: f.tier.toUpperCase(),
    thc: f.thc,
    type: f.type === "indica" ? "IH" : f.type === "sativa" ? "SH" : "H",
    price3g: f.price3g ? `$${f.price3g.sale ?? f.price3g.regular}` : "—",
    image: f.image,
  }));
}

const FEATURED_STRAINS = buildFeatured();

const FEATURED_HIGHLIGHTS = [
  {
    href: "/grabba-leaf-shakers",
    title: "Grabba Leaf & Shakers",
    text: "Compare the Grabba and Grabba Shaker options listed for adult shoppers at Castle Heights Cannabis on Center St.",
    anchor: "Compare grabba options",
  },
  {
    href: "/native-cigarettes-ottawa",
    title: "Native Cigarettes Ottawa",
    text: "Review Native cigarette carton information and cigarette menu options before a trip to 605 Center St.",
    anchor: "Review native cigarettes",
  },
  {
    href: "/nicotine-pouches-ottawa",
    title: "Nicotine Pouches & Vapes",
    text: "Compare nicotine pouch and vape information for an adult shopping stop near Vanier, Overbrook, and Gloucester.",
    anchor: "Compare pouches and vapes",
  },
  {
    href: "/cheap-weed-deals",
    title: "Cheap Weed & Budget Ounces",
    text: "Compare Budget, AA, AAA+, Premium, and Exotic flower tiers before visiting Castle Heights Cannabis.",
    anchor: "Compare budget options",
  },
];

function getTypeLabel(type: string) {
  if (type.startsWith("IH")) return "Indica";
  if (type.startsWith("SH")) return "Sativa";
  return "Hybrid";
}

function getTypeClass(type: string) {
  if (type.startsWith("IH")) return styles.badgeIndica;
  if (type.startsWith("SH")) return styles.badgeSativa;
  return styles.badgeHybrid;
}

function getTierColor(tier: string) {
  const t = TIERS.find((t) => t.name === tier);
  return t?.color || "#94a3b8";
}

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* ── NAVBAR ── */}
      <Navbar />
      <HiringCallout />

      {/* ── HERO BANNER ── */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBanner}>
          <Image
            src="/banners/chc-homepage.webp"
            alt="Castle Heights Cannabis branded welcome graphic"
            width={2172}
            height={724}
            sizes="100vw"
            preload
            className={styles.heroBannerImg}
          />
          <div className={styles.heroBannerOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            OTTAWA&apos;S FORTRESS OF CANNABIS
          </div>
          <h1 className={styles.heroTitle}>
            Premium Cannabis.
            <br />
            <span className={styles.heroFire}>Ascend to New Heights.</span>{" "}
            <span className={styles.heroLit}>Castle Heights.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {allFlowers.length} listed flower options · Exotic to Budget · THC up to 39% ·
            605 Center St, Ottawa
          </p>
          <div className={styles.heroButtons}>
            <a href="#menu" className={styles.heroBtn}>
              Browse Menu
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <Link href="/games" className={styles.heroBtnGhost}>
              Play Games
            </Link>
          </div>

          {/* Stats bar */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>{allFlowers.length}</span>
              <span className={styles.heroStatLabel}>Flower Options</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>39%</span>
              <span className={styles.heroStatLabel}>Max THC</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>$3</span>
              <span className={styles.heroStatLabel}>From /g</span>
            </div>
            <div className={styles.heroStatDivider}></div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>Late</span>
              <span className={styles.heroStatLabel}>Open</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY TIER BANNER ── */}
      <section className={styles.highlightSection} aria-labelledby="featured-specialties">
        <div className={styles.container}>
          <div className={styles.highlightHeader}>
            <span className={styles.highlightEyebrow}>Castle Heights Cannabis</span>
            <h2 id="featured-specialties" className={styles.highlightTitle}>
              Featured Products &amp; Ottawa East Specialties
            </h2>
            <p className={styles.highlightIntro}>
              Adult 19+ shoppers can compare grabba, Native cigarettes, nicotine
              pouches, vapes, and value-focused flower tiers before visiting 605
              Center St in Ottawa.
            </p>
          </div>
          <div className={styles.highlightGrid}>
            {FEATURED_HIGHLIGHTS.map((item) => (
              <Link key={item.href} href={item.href} className={styles.highlightCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.anchor}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.tierSection} id="menu">
        <div className={styles.container}>
          <div className={styles.tierGrid}>
            {TIERS.map((tier, i) => (
              <a
                key={tier.slug}
                href={`/${tier.slug}`}
                className={styles.tierCard}
                style={
                  {
                    "--tier-color": tier.color,
                    "--tier-glow": tier.glow,
                    animationDelay: `${i * 0.1}s`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.tierCardBody}>
                  <h3
                    className={styles.tierCardName}
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h3>
                  <div className={styles.tierCardMeta}>
                    <span className={styles.tierCardThc}>
                      THC {tier.thc}
                    </span>
                    {tier.count !== null && (
                      <span className={styles.tierCardCount}>
                        {tier.count} flower options
                      </span>
                    )}
                  </div>
                  <div className={styles.tierCardPrice}>
                    {tier.unitPrice !== null && (
                      <span className={styles.tierCardUnitPrice}>
                        ${tier.unitPrice}/g
                      </span>
                    )}
                  </div>
                  {tier.deal3g && (
                    <div className={styles.tierCardDeals}>
                      <span className={styles.tierCardDeal}>{tier.deal3g}</span>
                      {tier.deal6g && <span className={styles.tierCardDeal}>{tier.deal6g}</span>}
                    </div>
                  )}
                </div>
                <div className={styles.tierCardArrow}>→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOT RIGHT NOW ── */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.featuredGrid}>
            {FEATURED_STRAINS.map((strain, i) => (
              <Link
                key={strain.slug}
                href={`/flower/${strain.slug}`}
                className={styles.productCard}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.productMedia}>
                  <img
                    src={strain.image}
                    alt={strain.name}
                    loading="lazy"
                    className={styles.productImg}
                  />
                  <div className={styles.productBadges}>
                    <span className={styles.productBadgeThc}>
                      THC {strain.thc}
                    </span>
                    <span
                      className={`${styles.productBadgeTier}`}
                      style={{
                        background: `linear-gradient(135deg, ${getTierColor(strain.tier)}, ${getTierColor(strain.tier)}dd)`,
                        color: strain.tier === "BUDGET" ? "#1e293b" : "white",
                      }}
                    >
                      {strain.tier}
                    </span>
                  </div>
                </div>
                <div className={styles.productBody}>
                  <span
                    className={`${styles.productType} ${getTypeClass(strain.type)}`}
                  >
                    {getTypeLabel(strain.type)}
                  </span>
                  <h3 className={styles.productName}>{strain.name}</h3>
                  <div className={styles.productPricing}>
                    <span className={styles.productPrice}>
                      {strain.price3g}
                    </span>
                    <span className={styles.productPriceUnit}>/ 3g</span>
                  </div>
                  <div className={styles.productCta}>View Strain</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORE INFO ── */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Visit <span className="text-gradient-neon">Castle Heights</span>
            </h2>
          </div>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>Location</div>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                605 Center St
                <br />
                Ottawa, ON K1K 2N8
                <br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>Hours</div>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>Open 24 Hours</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <div className={styles.storeIcon}>Walk In</div>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>
                  Center St, Ottawa
                </span>
              </p>
            </div>
          </div>

          {/* Embedded map */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
