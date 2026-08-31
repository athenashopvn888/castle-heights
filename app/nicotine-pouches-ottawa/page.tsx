import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allItems, getItemsByCategory } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Castle Heights Cannabis | Nicotine Pouches Ottawa East | $10 Sale Tins",
  description:
    "Nicotine pouch tins are currently listed on sale for $10 at Castle Heights Cannabis in Ottawa East. Check the live menu before visiting because pricing and selection can change.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/nicotine-pouches-ottawa",
  },
  openGraph: {
    title: "Castle Heights Cannabis | Nicotine Pouches Ottawa East | $10 Sale Tins",
    description:
      "Nicotine pouch tins are currently listed on sale for $10 at Castle Heights Cannabis in Ottawa East. Check the live menu before visiting because pricing and selection can change.",
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
export default function NicotinePouchesOttawaPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Nicotine Pouches in Ottawa East — $10 Sale Tins</h1>
          <p className={styles.subtitle}>
            Nicotine pouch tins are currently listed on sale for $10 each at Castle Heights Cannabis in Ottawa East.
            Check the <Link href="/items/cigarettes">live Cigarettes menu</Link> before visiting because pricing and selection can change.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            $10 Nicotine Pouch Tins in Ottawa East
          </h2>
          <p className={styles.body}>
            Check the <Link href="/items/cigarettes">live Cigarettes menu</Link> for the current nicotine pouch selection and pricing,
            as sale prices and availability can change.
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
                  <p className={styles.listingMeta}>
                    {pouchItems.some((pouch) => pouch.slug === item.slug)
                      ? "See the live Cigarettes menu for the current sale price"
                      : `${item.price} menu listing`}
                  </p>
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
              <summary className={styles.faqQuestion}>Are nicotine pouch tins $10 at Castle Heights Cannabis?</summary>
              <p className={styles.faqAnswer}>
                The live Castle Heights Cannabis menu currently lists nicotine pouch tins at $10 each. This is sale pricing and may change,
                so check the <Link href="/items/cigarettes">live Cigarettes menu</Link> for the latest price and selection.
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

