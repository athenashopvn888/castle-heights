import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getItemsByCategory } from "../lib/products";
import styles from "./native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Native Cigarettes Ottawa | Castle Heights Cannabis",
  description:
    "Review native cigarette catalog listings at Castle Heights Cannabis on Center St in Ottawa. Built for adult 19+ customers planning a local store visit.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/native-cigarettes-ottawa",
  },
};

const nativeCigaretteListings = getItemsByCategory("CIGARETTES").filter((item) => {
  const text = `${item.name} ${item.slug}`.toLowerCase();
  return !/(nicotine|pouch|velo|pablo|killa|zyn|grabba|backwood)/.test(text);
});

export default function NativeCigarettesOttawaPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Native Cigarettes Ottawa</h1>
          <p className={styles.subtitle}>
            A focused adult 19+ guide for native cigarette catalog listings at Castle Heights Cannabis on Center St in Ottawa.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Native cigarette catalog guide</h2>
          <p className={styles.body}>
            This page is built for adult customers comparing native cigarette options before visiting Castle Heights Cannabis. It keeps native cigarette cartons separate from Grabba, Backwoods, nicotine pouches, and other smoke products so the page stays clear and easy to scan.
          </p>
          <p className={styles.body}>
            Castle Heights Cannabis is listed at 605 Center St in Ottawa. Use the catalog listings below as store-reference information, then confirm current shelf details with staff before relying on a specific brand or variety.
          </p>
          <div className={styles.note}>
            Product entries are shown as catalog references, not a live availability guarantee. This page does not change store hours, address, phone, menu code, category routes, or Google Business Profile details.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Native cigarette listings</h2>
          <p className={styles.listingIntro}>
            The listings below are pulled from the Castle Heights site catalog and filtered to show native cigarette products only.
          </p>
          <div className={styles.listingGrid}>
            {nativeCigaretteListings.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  <img
                    src={item.image}
                    alt={`${item.name} native cigarette catalog listing at Castle Heights Cannabis`}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.listingName}>{item.name}</h3>
                  <p className={styles.listingMeta}>Catalog reference</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Helpful next steps</h2>
          <p className={styles.body}>
            Use these store-scoped links if you want to compare the native cigarette guide with the broader Castle Heights site before visiting.
          </p>
          <div className={styles.linkGrid}>
            <Link href="/items/cigarettes" className={styles.linkCard}>
              Browse cigarette catalog
            </Link>
            <Link href="/info/native-cigarettes-ottawa" className={styles.linkCard}>
              Read the native cigarettes info guide
            </Link>
            <Link href="/weed-dispensary-ottawa" className={styles.linkCard}>
              Plan a Castle Heights visit
            </Link>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>Does this page show Grabba or Backwoods?</summary>
              <p className={styles.faqAnswer}>
                No. This direct page is focused on native cigarette listings only. Grabba, Backwoods, and nicotine pouch products are intentionally kept out of this list.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>Are these live shelf availability claims?</summary>
              <p className={styles.faqAnswer}>
                No. The products are catalog references from the site data. Adult customers should confirm current shelf details with staff before visiting for a specific item.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>Where is Castle Heights Cannabis?</summary>
              <p className={styles.faqAnswer}>
                Castle Heights Cannabis is listed at 605 Center St in Ottawa. This page does not change the store name, address, phone number, or official hours.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
