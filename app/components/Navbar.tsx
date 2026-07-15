"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const ALL_LINKS = [
  { href: "/careers/budtender", label: "Join Team" },
  { href: "/exotic", label: "Exotic" },
  { href: "/premium", label: "Premium" },
  { href: "/aaa", label: "AAA+" },
  { href: "/aa", label: "AA" },
  { href: "/budget", label: "Budget" },
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "Nic Vape" },
  { href: "/items/vape-disposables", label: "THC Vape" },
  { href: "/items/concentrates", label: "Extracts" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
  { href: "/delivery", label: "Delivery" },
  { href: "/faq", label: "FAQ" },
  { href: "/games", label: "Games" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar} id="main-nav">
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo}>
          <img
            src="/banners/logo.jpg"
            alt="Castle Heights Cannabis Ottawa dispensary logo"
            className={styles.logoImg}
          />
        </Link>
        <div className={styles.topBarRight}>
          <a href="tel:+13435734401" className={styles.actionBtn}>
            Call Now
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=605%20Center%20St%2C%20Ottawa%2C%20ON%20K1K%202N8"
            className={styles.actionBtnGhost}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
          </a>
          <Link href="/games" className={styles.gamesBtn}>
            Play Games
          </Link>
          <span className={styles.open}>
            <span className={styles.dot}></span>
            Open Now
          </span>
        </div>
      </div>

      <div className={styles.scrollBar}>
        <div className={styles.scrollInner}>
          {ALL_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
