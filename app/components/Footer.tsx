import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>CASTLE HEIGHTS</div>
            <p className={styles.desc}>
              Your local cannabis dispensary at 605 Center St in Ottawa. Visit
              Castle Heights Cannabis for premium flower, edibles, vapes, native
              cigarettes, grabba, pouches, and smoke essentials. Open 24 hours.
            </p>
            <div className={styles.buttons}>
              <a href="tel:+13433089488" className={styles.btnPrimary}>
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=605%20Center%20St%2C%20Ottawa%2C%20ON%20K1K%202N8"
                className={styles.btnSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>605 Center St</span>
              <span>Ottawa, ON K1K 2N8</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+13433089488" style={{ color: "inherit" }}>
                  (343) 308-9488
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/cheap-weed-deals">Cheap Weed Ottawa East</Link>
              <Link href="/grabba-leaf-shakers">Grabba Leaf & Shakers</Link>
              <Link href="/native-cigarettes-ottawa">Native Cigarettes Ottawa</Link>
              <Link href="/backwoods-cigars-ottawa">Backwoods Cigars Ottawa</Link>
              <Link href="/nicotine-pouches-ottawa">Nicotine Pouches Ottawa</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.trustStrip}>
          <span>Interac Flash accepted</span>
          <span>Credit cards accepted</span>
          <span>Contactless tap</span>
          <span>24/7 ATM on site</span>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Castle Heights Cannabis. Adults 19+ only.
            Please consume responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
