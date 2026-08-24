import type { Metadata } from "next";
import Image from "next/image";
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
  openGraph: {
    title: "Backwoods Cigars Ottawa East | Castle Heights Cannabis",
    description:
      "Compare listed Backwoods and related smoke essentials before visiting Castle Heights Cannabis on Center St in Ottawa.",
    url: "https://www.castleheightscannabis.ca/backwoods-cigars-ottawa",
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
          <h2 className={styles.sectionTitle}>Backwoods and Smoke Essentials in Ottawa</h2>
          <p className={styles.body}>
            Adult shoppers can compare listed Backwoods names and supplied package
            details before visiting Castle Heights Cannabis at 605 Center St.
          </p>
          <p className={styles.body}>
            Grabba, cigarette, and accessory options are also listed when present in the
            published menu. Call (343) 308-9488 when a particular item matters.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Backwoods listings</h2>
          <div className={styles.listingGrid}>
            {backwoodsItems.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <Link href={`/item/${item.slug}`} className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={`${item.name} Backwoods listing at Castle Heights Cannabis in Ottawa`}
                    className={styles.image}
                    fill
                    sizes="(max-width: 640px) 88px, 96px"
                  />
                </Link>
                <div>
                  <h3 className={styles.listingName}>
                    <Link href={`/item/${item.slug}`}>{item.name}</Link>
                  </h3>
                  {item.price && <p className={styles.listingMeta}>Listed price: {item.price}</p>}
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
