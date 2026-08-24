import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./delivery.module.css";

export default function DeliveryContent() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <span className={styles.icon}>📍</span>
        <h1 className={styles.pageTitle}>Ordering and Delivery Information</h1>
        <p className={styles.pageSubtitle}>
          Call Castle Heights Cannabis to confirm the current ordering options before
          making plans. The Ottawa storefront is open 24 hours at 605 Center St.
        </p>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Confirm the Current Options</h2>
          <p className={styles.formDesc}>
            Ordering and delivery details can change. Call (343) 308-9488 for current
            information or get directions to the Ottawa store.
          </p>
          <div className={styles.inputRow}>
            <a className={styles.submitBtn} href="tel:+13433089488">
              Call (343) 308-9488
            </a>
            <Link className={styles.submitBtn} href="/contact">
              Store Hours and Address
            </Link>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🕒</span>
            <h2 className={styles.infoTitle}>Open 24 Hours</h2>
            <p className={styles.infoDesc}>Visit the storefront any time at 605 Center St.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>📞</span>
            <h2 className={styles.infoTitle}>Call Ahead</h2>
            <p className={styles.infoDesc}>Ask about a particular listing before travelling.</p>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoIcon}>🗺️</span>
            <h2 className={styles.infoTitle}>Ottawa Store</h2>
            <p className={styles.infoDesc}>605 Center St, Ottawa, ON K1K 2N8.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
