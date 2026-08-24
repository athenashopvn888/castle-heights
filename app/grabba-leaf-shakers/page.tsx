import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allItems } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

const PAGE_URL = "https://www.castleheightscannabis.ca/grabba-leaf-shakers";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=605%20Center%20St%2C%20Ottawa%2C%20ON%20K1K%202N8";

export const metadata: Metadata = {
  title: "Grabba Leaf & Grabba Shakers Ottawa East",
  description:
    "Compare Grabba and Grabba Shaker menu options at Castle Heights Cannabis, 605 Center St in Ottawa. Open 24 hours near Vanier and Overbrook.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Grabba Leaf & Grabba Shakers Ottawa East",
    description:
      "Grabba and Grabba Shaker menu options at Castle Heights Cannabis on Center St in Ottawa. Open 24 hours.",
    url: PAGE_URL,
    images: [
      {
        url: "https://www.castleheightscannabis.ca/products/GrabbaShaker.webp",
        width: 800,
        height: 800,
        alt: "Grabba Shaker at Castle Heights Cannabis in Ottawa East",
      },
    ],
  },
};

const imageDetails: Record<
  string,
  { src: string; width: number; height: number; alt: string }
> = {
  grabba: {
    src: "/products/GRABBA-2G.webp",
    width: 600,
    height: 600,
    alt: "Grabba leaf product at Castle Heights Cannabis in Ottawa East",
  },
  "grabba-shaker-redrose-red-herring": {
    src: "/products/GrabbaShaker.webp",
    width: 800,
    height: 800,
    alt: "Grabba Shaker RedRose and Red Herring options at Castle Heights Cannabis Ottawa",
  },
};

const grabbaItems = allItems
  .filter((item) => /grabba/i.test(`${item.name} ${item.slug}`))
  .filter((item) => imageDetails[item.slug]);

function displayName(name: string) {
  return name.replace(/\*/g, "").replace(/\s+/g, " ").trim();
}

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Grabba Leaf & Grabba Shakers Ottawa East",
  description:
    "Grabba and Grabba Shaker menu options at Castle Heights Cannabis in Ottawa.",
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
              Compare the Grabba options listed by Castle Heights Cannabis at 605
              Center St. The Ottawa storefront is open 24 hours near Vanier and Overbrook.
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
            <h2 className={styles.sectionTitle}>Choose Grabba or a Grabba Shaker</h2>
            <p className={styles.body}>
              The site menu lists a Grabba item and a Grabba Shaker with
              RedRose and Red Herring variants. Listed prices appear below; selection
              and pricing can change, so call ahead when a specific option matters.
            </p>

            <div className={styles.listingGrid}>
              {grabbaItems.map((item) => {
                const image = imageDetails[item.slug];
                return (
                  <article key={item.slug} className={styles.listingCard}>
                    <Link href={`/item/${item.slug}`} className={styles.imageWrap}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="70px"
                        className={styles.image}
                      />
                    </Link>
                    <div>
                      <h3 className={styles.listingName}>
                        <Link href={`/item/${item.slug}`}>{displayName(item.name)}</Link>
                      </h3>
                      {item.price && (
                        <p className={styles.listingMeta}>Listed menu price: {item.price}</p>
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
              Castle Heights Cannabis is located in Ottawa at 605 Center St. Shoppers
              coming from Vanier and Overbrook have a nearby Ottawa East stop, while
              visitors travelling from Orléans, Blackburn Hamlet, or Gloucester can
              check current directions before leaving.
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
                <summary className={styles.faqQuestion}>Which Grabba products are listed?</summary>
                <p className={styles.faqAnswer}>
                  The site menu lists Grabba and a Grabba Shaker with RedRose
                  and Red Herring variants. Selection can change.
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
