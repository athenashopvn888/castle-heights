import type { Metadata } from "next";
import Image from "next/image";
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
  openGraph: {
    title: "Nicotine Pouches Ottawa East | Castle Heights Cannabis",
    description:
      "Check published nicotine pouch information and compare related vape listings at Castle Heights Cannabis on Center St in Ottawa.",
    url: "https://www.castleheightscannabis.ca/nicotine-pouches-ottawa",
  },
};

const pouchItems = allItems.filter((item) =>
  `${item.name} ${item.slug}`.toLowerCase().includes("pouch")
);
const pouchAndVapeItems = [
  ...pouchItems,
  ...getItemsByCategory("VAPE PENS").slice(0, 4),
  ...getItemsByCategory("VAPE DISPOSABLE").slice(0, 4),
].filter((item, index, items) => items.findIndex((candidate) => candidate.slug === item.slug) === index);
const hasPouches = pouchItems.length > 0;

export default function NicotinePouchesOttawaPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Nicotine Pouches Ottawa East</h1>
          <p className={styles.subtitle}>
            {hasPouches
              ? "Compare listed nicotine pouch and related vape options before visiting Castle Heights Cannabis in Ottawa."
              : "Call Castle Heights Cannabis about nicotine pouch options and compare related vape listings before visiting Center Street."}
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {hasPouches ? "Nicotine Pouches and Vape Options" : "Ask About Nicotine Pouch Options"}
          </h2>
          <p className={styles.body}>
            {hasPouches
              ? "The published menu includes nicotine pouch listings alongside disposable and vape-pen options for adult shoppers."
              : "The published menu snapshot does not currently include a nicotine pouch listing. Call (343) 308-9488 to ask about pouch options before travelling."}
          </p>
          <p className={styles.body}>
            Castle Heights Cannabis is at 605 Center St in Ottawa and is open 24 hours.
            Listings can change, so call ahead when a particular product matters.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Nicotine pouch and vape listings</h2>
          <div className={styles.listingGrid}>
            {pouchAndVapeItems.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} listing at Castle Heights Cannabis in Ottawa`}
                      className={styles.image}
                      fill
                      sizes="(max-width: 640px) 88px, 96px"
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
                {hasPouches
                  ? "The published menu includes the pouch listings shown above. Listings can change, so call ahead about a particular option."
                  : "Call (343) 308-9488 to ask about nicotine pouch options before visiting. Related vape listings are shown when present in the published menu."}
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>What is the fastest way to plan a visit?</summary>
              <p className={styles.faqAnswer}>
                Call (343) 308-9488 or get directions to 605 Center St before leaving.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
