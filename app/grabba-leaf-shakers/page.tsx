import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allItems, isGrabbaItem, isGrabbaShakerItem } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

const PAGE_URL = "https://www.castleheightscannabis.ca/grabba-leaf-shakers";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=605%20Center%20St%2C%20Ottawa%2C%20ON%20K1K%202N8";
const grabbaItems = allItems.filter(isGrabbaItem);
const shakerItem = grabbaItems.find(isGrabbaShakerItem);
const leafItem = grabbaItems.find((item) => !isGrabbaShakerItem(item));
const hasShaker = Boolean(shakerItem);
const menuDescription = hasShaker
  ? "Compare Grabba leaf and Grabba Shaker formats at Castle Heights Cannabis in Ottawa East."
  : "Compare Grabba leaf and ask Castle Heights Cannabis about Grabba Shaker options in Ottawa East.";

export const metadata: Metadata = {
  title: "Grabba Leaf & Grabba Shakers Ottawa East",
  description: `${menuDescription} Visit 605 Center St, open 24 hours near Vanier and Overbrook.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Grabba Leaf & Grabba Shakers Ottawa East",
    description: `${menuDescription} Open 24 hours.`,
    url: PAGE_URL,
    images: [
      {
        url:
          (hasShaker ? shakerItem?.image : leafItem?.image) ||
          "https://www.castleheightscannabis.ca/storeFavicon.webp",
        alt: hasShaker
          ? "Grabba Shaker at Castle Heights Cannabis in Ottawa East"
          : "Grabba leaf product at Castle Heights Cannabis in Ottawa East",
      },
    ],
  },
};

function displayName(name: string) {
  return name.replace(/\*/g, "").replace(/\s+/g, " ").trim();
}

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Grabba Leaf & Grabba Shakers Ottawa East",
  description: menuDescription,
  about: { "@id": "https://www.castleheightscannabis.ca/#store" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Castle Heights Cannabis",
      item: "https://www.castleheightscannabis.ca",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Grabba Leaf & Shakers",
      item: PAGE_URL,
    },
  ],
};

export default function GrabbaLeafShakersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className={styles.page}>
        <Navbar />

        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Castle Heights Cannabis · Adults 19+</span>
            <h1 className={styles.title}>Grabba Leaf &amp; Grabba Shakers in Ottawa East</h1>
            <p className={styles.subtitle}>
              Choose the Grabba format that suits your smoke at Castle Heights
              Cannabis, 605 Center St. The Ottawa store is open 24 hours.
            </p>
            <div className={styles.actions}>
              <a href="tel:+13433089488" className={styles.primaryAction}>
                Call (343) 308-9488
              </a>
              <a
                href={DIRECTIONS_URL}
                className={styles.secondaryAction}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions to 605 Center St
              </a>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {hasShaker
                ? "Choose Grabba or a Grabba Shaker"
                : "Ask About Grabba Shaker Options"}
            </h2>
            {hasShaker ? (
              <p className={styles.body}>
                Choose loose Grabba leaf or a Grabba Shaker based on the format you
                prefer. RedRose and Red Herring are the named options, and listed
                prices help you compare before visiting. Call ahead when a specific
                choice matters.
              </p>
            ) : (
              <p className={styles.body}>
                Grabba leaf is the menu option currently shown. If you prefer a Grabba
                Shaker, call (343) 308-9488 before visiting to ask about shaker options.
                Prices and selection can change.
              </p>
            )}

            <div className={styles.listingGrid}>
              {grabbaItems.map((item) => {
                return (
                  <article key={item.slug} className={styles.listingCard}>
                    <Link href={`/item/${item.slug}`} className={styles.imageWrap}>
                      <Image
                        src={item.image}
                        alt={`${displayName(item.name)} at Castle Heights Cannabis in Ottawa`}
                        fill
                        sizes="(max-width: 640px) 88px, 96px"
                        className={styles.image}
                      />
                    </Link>
                    <div>
                      <h3 className={styles.listingName}>
                        <Link href={`/item/${item.slug}`}>{displayName(item.name)}</Link>
                      </h3>
                      {item.price && (
                        <p className={styles.listingMeta}>Listed price: {item.price}</p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Grabba Near Vanier, Overbrook, Orléans, Blackburn Hamlet &amp; Gloucester
            </h2>
            <p className={styles.body}>
              Castle Heights Cannabis is located in Ottawa at 605 Center St. Adult
              shoppers travelling from Vanier, Overbrook, Orléans, Blackburn Hamlet,
              or Gloucester can use current directions and call ahead before leaving.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Open 24 Hours on Center Street</h2>
            <p className={styles.body}>
              The 24-hour schedule gives adult shoppers flexibility for daytime,
              evening, and late-night visits. Call (343) 308-9488 to ask about a
              particular Grabba option before travelling to the store.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>More Smoke &amp; Cannabis Options</h2>
            <div className={styles.linkGrid}>
              <Link href="/items/cigarettes" className={styles.linkCard}>
                Cigarettes &amp; smoke essentials
              </Link>
              <Link href="/native-cigarettes-ottawa" className={styles.linkCard}>
                Native cigarette information
              </Link>
              <Link href="/cheap-weed-deals" className={styles.linkCard}>
                Budget flower options
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Grabba FAQ</h2>
            <div className={styles.faqList}>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>Which Grabba formats can I compare?</summary>
                <p className={styles.faqAnswer}>
                  {hasShaker
                    ? "Choose loose Grabba leaf or a Grabba Shaker in RedRose and Red Herring variants. Call ahead when a specific choice matters."
                    : "Grabba leaf is currently shown. Call (343) 308-9488 to ask about Grabba Shaker options before visiting."}
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary className={styles.faqQuestion}>Where is Castle Heights Cannabis?</summary>
                <p className={styles.faqAnswer}>
                  Visit 605 Center St, Ottawa, ON K1K 2N8. The store is open 24 hours.
                </p>
              </details>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
