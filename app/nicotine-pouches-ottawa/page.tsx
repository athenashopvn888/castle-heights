import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allItems, getItemsByCategory } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Nicotine Pouches Ottawa East | Castle Heights Cannabis",
  description:
    "Browse nicotine pouches, disposable vapes, and smoke essentials at Castle Heights Cannabis on Center St in Ottawa.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/nicotine-pouches-ottawa",
  },
};

const pouchAndVapeItems = [
  ...allItems.filter((item) => `${item.name} ${item.slug}`.toLowerCase().includes("pouch")),
  ...getItemsByCategory("VAPE PENS").slice(0, 4),
  ...getItemsByCategory("VAPE DISPOSABLE").slice(0, 4),
].filter((item, index, items) => items.findIndex((candidate) => candidate.slug === item.slug) === index);

export default function NicotinePouchesOttawaPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Nicotine Pouches Ottawa East</h1>
          <p className={styles.subtitle}>
            Compare nicotine pouch, disposable vape, and smoke-accessory options before
            visiting Castle Heights Cannabis near Vanier, Overbrook, and Gloucester.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Pouches, vapes, and quick visit planning</h2>
          <p className={styles.body}>
            Castle Heights Cannabis helps adult 19+ customers plan a quick pouch or vape
            stop at 605 Center St. This page brings the key pouch and vape listings into
            one easy-to-scan shopper guide.
          </p>
          <p className={styles.body}>
            Use it when comparing options from Vanier, Overbrook, Cyrville, Gloucester,
            Beacon Hill, Pineview, Orleans, Blackburn Hamlet, Navan, or other Ottawa East
            routes.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Nicotine pouch and vape listings</h2>
          <div className={styles.listingGrid}>
            {pouchAndVapeItems.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} listing at Castle Heights Cannabis in Ottawa`}
                      className={styles.image}
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div>
                  <h3 className={styles.listingName}>{item.name}</h3>
                  <p className={styles.listingMeta}>{item.price} menu listing</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Helpful next steps</h2>
          <div className={styles.linkGrid}>
            <Link href="/items/vapes" className={styles.linkCard}>Browse vape pens</Link>
            <Link href="/items/vape-disposables" className={styles.linkCard}>Browse disposable vapes</Link>
            <Link href="/grabba-leaf-shakers" className={styles.linkCard}>Compare smoke essentials</Link>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>Can I browse pouches and vapes before visiting?</summary>
              <p className={styles.faqAnswer}>
                Yes. This page highlights pouch and vape-related listings from the Castle
                Heights catalog, with links into the full menu categories.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>What is the fastest way to plan a visit?</summary>
              <p className={styles.faqAnswer}>
                Use the top Call Now or Directions buttons, then open the relevant menu
                category to compare current choices before visiting 605 Center St.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
