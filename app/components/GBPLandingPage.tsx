import Link from "next/link";
import styles from "./GBPLandingPage.module.css";
import { gbpLocation } from "../lib/gbp-location";

const categoryLinks: Record<string, string> = {
  Flower: "/#menu",
  "Pre-rolls": "/items/prerolls",
  Edibles: "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  Concentrates: "/items/concentrates",
  Accessories: "/items/add-ons",
};

const helpfulLinks = [
  {
    href: "/cheap-weed-deals",
    label: "Ottawa East Flower Tiers",
    description: "Compare listed Budget, AA, AAA+, Premium, and Exotic flower options.",
  },
  {
    href: "/grabba-leaf-shakers",
    label: "Grabba Leaf & Shakers",
    description: "Compare listed Grabba leaf and shaker formats or call ahead.",
  },
  {
    href: "/native-cigarettes-ottawa",
    label: "Native Cigarettes Ottawa",
    description: "Review listed cigarette cartons and related smoke products for adults.",
  },
  {
    href: "/nicotine-pouches-ottawa",
    label: "Nicotine Pouches Ottawa",
    description: "Review listed nicotine pouch and vape formats before visiting.",
  },
  {
    href: "/backwoods-cigars-ottawa",
    label: "Backwoods Cigars Ottawa",
    description: "Review the dedicated Backwoods and smoke-essential information.",
  },
  {
    href: "/resources",
    label: "Ottawa East Shopping Resources",
    description: "Find store, category, and adult shopping information in one place.",
  },
];

const PAGE_URL = "https://www.castleheightscannabis.ca/weed-dispensary-ottawa";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=605%20Center%20St%2C%20Ottawa%2C%20ON%20K1K%202N8";

export function GBPLandingPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: gbpLocation.seoTitle,
    description: gbpLocation.metaDescription,
    about: { "@id": "https://www.castleheightscannabis.ca/#store" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Castle Heights Cannabis", item: "https://www.castleheightscannabis.ca" },
      { "@type": "ListItem", position: 2, name: "Ottawa Dispensary", item: PAGE_URL },
    ],
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className={styles.hero}>
        <h1 className={styles.h1}>Castle Heights Cannabis — Weed Dispensary in Ottawa</h1>
        <p className={styles.heroTagline}>605 Center St · Open 24 Hours · Adults 19+</p>
      </header>

      <div className={styles.btnRow}>
        <Link href="/#menu" className={`${styles.btn} ${styles.btnPrimary}`}>
          View Menu
        </Link>
        <a href={`tel:${gbpLocation.phoneIntl}`} className={`${styles.btn} ${styles.btnSecondary}`}>
          Call Store
        </a>
        <a href={DIRECTIONS_URL} className={`${styles.btn} ${styles.btnSecondary}`} target="_blank" rel="noopener noreferrer">
          Directions
        </a>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Local Weed Dispensary at 605 Center St</h2>
        <p className={styles.introText}>
          Castle Heights Cannabis is at 605 Center St in Ottawa. The store is
          open 24 hours for adults 19+ who want to compare flower and other
          listed menu categories before visiting.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Weed and Cannabis Menu Categories</h2>
        <p className={styles.infoText}>
          Compare five flower tiers plus listed pre-rolls, edibles, vape
          products, concentrates, and accessories. Listings and prices can
          change, so call ahead when a particular product matters.
        </p>
        <div className={styles.productGrid}>
          {gbpLocation.products.map((product) => (
            <Link key={product} href={categoryLinks[product] || "/#menu"} className={styles.productCard}>
              {product}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Plan a Visit Near Castle Heights</h2>
        <p className={styles.infoText}>
          The address is 605 Center St in Ottawa, near Castle Heights,
          Overbrook, and Vanier. Use the directions link for a route from your
          actual starting point, or call the store if you need help locating it.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Compare Flower, Edibles, Vapes and More</h2>
        <div className={styles.seoLinkGrid}>
          {helpfulLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.seoLinkCard}>
              <span className={styles.seoLinkTitle}>{link.label}</span>
              <span className={styles.seoLinkDescription}>{link.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Visit Castle Heights Cannabis in Ottawa</h2>
        <div className={styles.napGrid}>
          <div className={styles.napDetails}>
            <div className={styles.napItem}><span className={styles.napLabel}>Store Name</span><strong>{gbpLocation.storeName}</strong></div>
            <div className={styles.napItem}><span className={styles.napLabel}>Address</span><span>{gbpLocation.address}</span></div>
            <div className={styles.napItem}><span className={styles.napLabel}>Phone</span><a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a></div>
            <div className={styles.napItem}><span className={styles.napLabel}>Store Hours</span><span>Open 24 Hours</span></div>
          </div>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <h2 className={styles.h2}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Where is Castle Heights Cannabis?</h3>
            <p className={styles.faqAnswer}>Castle Heights Cannabis is at {gbpLocation.address}.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>When is the store open?</h3>
            <p className={styles.faqAnswer}>The Ottawa store is open 24 hours a day, seven days a week for adults 19+.</p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Can product listings change?</h3>
            <p className={styles.faqAnswer}>Yes. Call {gbpLocation.phone} before travelling when a particular product or listed price matters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
