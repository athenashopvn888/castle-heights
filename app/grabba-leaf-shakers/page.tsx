import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getItemsByCategory } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Grabba Leaf & Grabba Shakers Ottawa East | Castle Heights Cannabis",
  description:
    "Browse grabba leaf, grabba shakers, Backwoods, and smoke essentials at Castle Heights Cannabis on Center St in Ottawa.",
  alternates: {
    canonical: "https://castleheightscannabis.ca/grabba-leaf-shakers",
  },
};

const smokeItems = getItemsByCategory("CIGARETTES").filter((item) => {
  const text = `${item.name} ${item.slug}`.toLowerCase();
  return /(grabba|backwood|woods|shaker|raw)/.test(text);
});

export default function GrabbaLeafShakersPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Grabba Leaf & Grabba Shakers Ottawa East</h1>
          <p className={styles.subtitle}>
            Browse grabba, shakers, Backwoods, and smoke essentials before visiting
            Castle Heights Cannabis at 605 Center St in Ottawa.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Smoke essentials near Vanier and Ottawa East</h2>
          <p className={styles.body}>
            Castle Heights Cannabis gives adult 19+ shoppers a simple place to compare
            grabba leaf, crushed grabba shakers, Backwoods, and cigarette accessories
            alongside the broader cannabis menu.
          </p>
          <p className={styles.body}>
            The store is positioned for quick visits from Vanier, Overbrook, Cyrville,
            Gloucester, Rockcliffe Park, Manor Park, Beacon Hill, Pineview, and other
            Ottawa East routes.
          </p>
          <div className={styles.note}>
            For the fastest visit, open the current menu section, choose the smoke
            essentials you want to compare, then use the top Directions or Call Now
            buttons before heading to 605 Center St.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Grabba and Backwoods listings</h2>
          <p className={styles.listingIntro}>
            These listings come from the Castle Heights product catalog so shoppers
            can scan the smoke-essential section without hunting through the full menu.
          </p>
          <div className={styles.listingGrid}>
            {smokeItems.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  <img
                    src={item.image}
                    alt={`${item.name} smoke essential listing at Castle Heights Cannabis Ottawa East`}
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
            <Link href="/items/cigarettes" className={styles.linkCard}>Browse cigarette and smoke essentials</Link>
            <Link href="/native-cigarettes-ottawa" className={styles.linkCard}>Compare native cigarettes</Link>
            <Link href="/weed-dispensary-ottawa" className={styles.linkCard}>Plan a Castle Heights visit</Link>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>What can customers browse on this page?</summary>
              <p className={styles.faqAnswer}>
                Adult shoppers can browse grabba, shakers, Backwoods, and related
                smoke essentials from the Castle Heights catalog.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>How do I check current stock?</summary>
              <p className={styles.faqAnswer}>
                Use the menu links on this page or ask staff at 605 Center St to confirm
                the latest shelf selection before checkout.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
