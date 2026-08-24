import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getItemsByCategory } from "../lib/products";
import styles from "./native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Native Cigarettes Ottawa | Castle Heights Cannabis on Center St",
  description:
    "Browse native cigarette carton listings, smoke essentials, and visit-planning links for Castle Heights Cannabis on Center St in Ottawa.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/native-cigarettes-ottawa",
  },
  openGraph: {
    title: "Native Cigarettes Ottawa | Castle Heights Cannabis on Center St",
    description:
      "Compare listed native cigarette and smoke-product options before visiting Castle Heights Cannabis in Ottawa.",
    url: "https://www.castleheightscannabis.ca/native-cigarettes-ottawa",
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
          <h2 className={styles.sectionTitle}>Native Cigarette Options in Ottawa</h2>
          <p className={styles.body}>
            Adult shoppers can compare supplied cigarette names and package details
            before visiting Castle Heights Cannabis at 605 Center St in Ottawa.
          </p>
          <p className={styles.body}>
            Listings can change. Call (343) 308-9488 before travelling when a
            particular brand or variety matters to your visit.
          </p>
          <div className={styles.note}>
            The store is open 24 hours and also lists Grabba, Backwoods, and other
            smoke essentials when present in the published menu.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Native cigarette listings</h2>
          <div className={styles.listingGrid}>
            {nativeCigaretteListings.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={`${item.name} cigarette listing at Castle Heights Cannabis in Ottawa`}
                    className={styles.image}
                    fill
                    sizes="(max-width: 640px) 88px, 96px"
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
            Compare related smoke products or get store information before visiting
            Center Street.
          </p>
          <div className={styles.linkGrid}>
            <Link href="/items/cigarettes" className={styles.linkCard}>
              Browse cigarette catalog
            </Link>
            <Link href="/grabba-leaf-shakers" className={styles.linkCard}>
              Browse grabba and shakers
            </Link>
            <Link href="/backwoods-cigars-ottawa" className={styles.linkCard}>
              Compare Backwoods
            </Link>
            <Link href="/nicotine-pouches-ottawa" className={styles.linkCard}>
              View nicotine pouches
            </Link>
            <Link href="/weed-dispensary-ottawa" className={styles.linkCard}>
              Plan a Castle Heights visit
            </Link>
            <Link href="/cheap-weed-deals" className={styles.linkCard}>
              Compare budget cannabis
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
              <summary className={styles.faqQuestion}>Can cigarette listings change?</summary>
              <p className={styles.faqAnswer}>
                Yes. Call (343) 308-9488 before travelling when a particular cigarette
                brand or variety matters.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>Where is Castle Heights Cannabis?</summary>
              <p className={styles.faqAnswer}>
                Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8 and
                is open 24 hours.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
