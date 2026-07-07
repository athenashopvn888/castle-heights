import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getItemsByCategory } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Backwoods Cigars Ottawa East | Castle Heights Cannabis",
  description:
    "Browse Backwoods and smoke essentials at Castle Heights Cannabis on Center St in Ottawa.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/backwoods-cigars-ottawa",
  },
};

const backwoodsItems = getItemsByCategory("CIGARETTES").filter((item) => {
  const text = `${item.name} ${item.slug}`.toLowerCase();
  return /(backwood|woods)/.test(text);
});

export default function BackwoodsCigarsOttawaPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Backwoods Cigars Ottawa East</h1>
          <p className={styles.subtitle}>
            Browse Backwoods and related smoke essentials at Castle Heights Cannabis
            before planning a quick visit to 605 Center St.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Backwoods and smoke accessories near Ottawa East</h2>
          <p className={styles.body}>
            Castle Heights Cannabis keeps Backwoods, grabba, cigarette, and accessory
            listings close to the main cannabis menu so adult shoppers can compare
            everything in one visit-planning flow.
          </p>
          <p className={styles.body}>
            Use this page for a faster route into the smoke-essential section if you are
            visiting from Vanier, Overbrook, Cyrville, Gloucester, Rockcliffe Park,
            Beacon Hill, Pineview, Orleans, or Blackburn Hamlet.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Backwoods listings</h2>
          <div className={styles.listingGrid}>
            {backwoodsItems.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  <img
                    src={item.image}
                    alt={`${item.name} Backwoods listing at Castle Heights Cannabis Ottawa East`}
                    className={styles.image}
                    loading="lazy"
                  />
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
            <Link href="/grabba-leaf-shakers" className={styles.linkCard}>Browse grabba and shakers</Link>
            <Link href="/items/cigarettes" className={styles.linkCard}>Open the cigarette menu</Link>
            <Link href="/weed-dispensary-ottawa" className={styles.linkCard}>Plan a Castle Heights visit</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
