import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Castle Heights Cannabis | 605 Center St, Ottawa",
  description:
    "Visit Castle Heights Cannabis at 605 Center St, Ottawa, ON K1K 2N8. Open 24 Hours. Walk-ins welcome.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/contact",
  },
  openGraph: {
    title: "Contact Castle Heights Cannabis — Ottawa Dispensary",
    description:
      "Visit 605 Center St in Ottawa. Castle Heights Cannabis is open 24 hours.",
    url: "https://www.castleheightscannabis.ca/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Visit <span className={styles.heroAccent}>Castle Heights</span>
          </h1>
          <p className={styles.heroSub}>
            605 Center St · Ottawa, ON K1K 2N8
          </p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>
                605 Center St
                <br />
                Ottawa, ON K1K 2N8
                <br />
                <span className={styles.infoMuted}>Ottawa, Ontario</span>
              </p>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h2 className={styles.infoTitle}>Hours</h2>
              <div className={styles.hoursTable}>
                <div className={styles.hoursRow}>
                  <span>Monday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Tuesday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Wednesday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Thursday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Friday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Saturday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
                <div className={styles.hoursRow}>
                  <span>Sunday</span>
                  <span className={styles.hoursTime}>Open 24 Hours</span>
                </div>
              </div>
              <div className={styles.openBadge}>
                <span className={styles.openDot}></span>
                Open 24 Hours
              </div>
            </div>

            {/* Walk-in */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🔥</div>
              <h2 className={styles.infoTitle}>Walk In</h2>
              <p className={styles.infoText}>
                No appointment needed.
                <br />
                Just walk in and our staff will
                <br />
                help with the listed menu options.
              </p>
              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Five flower collections
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Listed flower and item details
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Call-ahead product questions
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  Open 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
