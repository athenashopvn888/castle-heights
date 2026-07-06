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
            Browse native cigarette menu listings at Castle Heights Cannabis on Center St in Ottawa, with quick links for adult shoppers planning a local visit.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Native cigarette menu guide</h2>
          <p className={styles.body}>
            Castle Heights Cannabis carries native cigarette options for adult customers visiting Ottawa. This page keeps the cigarette section easy to scan, with product cards pulled from the Castle Heights menu so shoppers can quickly compare the main native cigarette listings.
          </p>
          <p className={styles.body}>
            The full menu page is still the source for current stock details. Use this guide to find the right cigarette section faster, then open the cigarette menu or visit the store at 605 Center St for the latest shelf selection.
          </p>
          <div className={styles.note}>
            Looking for related smoke products? Use the cigarette menu for the complete section, while this page stays focused on native cigarette listings.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Native cigarette listings</h2>
          <p className={styles.listingIntro}>
            These cigarette listings are pulled from the Castle Heights menu data and presented in a smaller card layout so more products are visible without heavy scrolling.
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
                  <p className={styles.listingMeta}>Menu listing</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Helpful next steps</h2>
          <p className={styles.body}>
            Use these Castle Heights links to move from the guide into the live menu, store information, and visit-planning pages.
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
              <summary className={styles.faqQuestion}>What native cigarette listings can customers browse?</summary>
              <p className={styles.faqAnswer}>
                Customers can browse Castle Heights menu listings such as Canadian Lights, Canadian Full, Canadian Goose, Canadian Classics, Nexus, Time, Putters, Rolled Gold, and premium mix cigarette options.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>How do I check what is currently in stock?</summary>
              <p className={styles.faqAnswer}>
                Use the Castle Heights cigarette menu link on this page to review the current menu section. Staff can also confirm the latest shelf details when you visit.
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
