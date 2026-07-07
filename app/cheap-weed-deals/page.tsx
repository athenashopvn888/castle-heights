import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getFlowersByTier } from "../lib/products";
import styles from "../native-cigarettes-ottawa/native-cigarettes.module.css";

export const metadata: Metadata = {
  title: "Cheap Weed Ottawa East | Budget Cannabis at Castle Heights",
  description:
    "Compare Budget, AA, AAA+, Premium, and Exotic flower tiers at Castle Heights Cannabis on Center St in Ottawa.",
  alternates: {
    canonical: "https://castleheightscannabis.ca/cheap-weed-deals",
  },
};

const budgetFlowers = [
  ...getFlowersByTier("BUDGET").slice(0, 4),
  ...getFlowersByTier("AA").slice(0, 4),
  ...getFlowersByTier("AAA+").slice(0, 4),
];

export default function CheapWeedDealsPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Castle Heights Cannabis</span>
          <h1 className={styles.title}>Cheap Weed Ottawa East</h1>
          <p className={styles.subtitle}>
            Compare Budget, AA, AAA+, Premium, and Exotic flower tiers before
            visiting Castle Heights Cannabis at 605 Center St.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Budget cannabis menu planning near Vanier</h2>
          <p className={styles.body}>
            Castle Heights Cannabis gives adult 19+ shoppers a clear tier system for
            comparing value flower, daily-driver AA options, AAA+ picks, Premium flower,
            and Exotic strains in Ottawa East.
          </p>
          <p className={styles.body}>
            Use this page when planning a quick visit from Vanier, Overbrook, Castle
            Heights, Cyrville, Gloucester, Pineview, Orleans, Blackburn Hamlet, Navan,
            Rockcliffe Park, Manor Park, or Beacon Hill.
          </p>
          <div className={styles.note}>
            The live menu is the best place to compare current flower listings, sizes,
            and tier pricing before you head to the store.
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Budget and daily-driver listings</h2>
          <div className={styles.listingGrid}>
            {budgetFlowers.map((item) => (
              <article key={item.slug} className={styles.listingCard}>
                <div className={styles.imageWrap}>
                  <img
                    src={item.image}
                    alt={`${item.name} ${item.tier} flower listing at Castle Heights Cannabis Ottawa`}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className={styles.listingName}>{item.name}</h3>
                  <p className={styles.listingMeta}>{item.tier} flower listing</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Helpful next steps</h2>
          <div className={styles.linkGrid}>
            <Link href="/budget" className={styles.linkCard}>Open Budget flower</Link>
            <Link href="/aa" className={styles.linkCard}>Compare AA flower</Link>
            <Link href="/aaa" className={styles.linkCard}>Compare AAA+ flower</Link>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>FAQ</h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>How should I compare value flower before visiting?</summary>
              <p className={styles.faqAnswer}>
                Start with Budget, AA, and AAA+ tiers, then compare the live flower menu
                for current options and ask staff for help matching your visit plan.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>Where is Castle Heights Cannabis located?</summary>
              <p className={styles.faqAnswer}>
                Castle Heights Cannabis is at 605 Center St in Ottawa, with quick access
                for adult shoppers across Ottawa East.
              </p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
