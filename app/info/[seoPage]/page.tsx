import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SEO_PAGES, getSeoPageBySlug } from "../../lib/seoPages";
import { TIER_CONFIG } from "../../lib/products";
import styles from "./seo.module.css";

/* ── Generate all SEO pages ── */
export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ seoPage: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}): Promise<Metadata> {
  const { seoPage: slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};

  const pageUrl = `https://www.castleheightscannabis.ca/info/${slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: pageUrl,
    },
  };
}

/* ── Page ── */
export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}) {
  const { seoPage: slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const tiers = Object.values(TIER_CONFIG);
  const pageUrl = `https://www.castleheightscannabis.ca/info/${slug}`;
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.metaDescription,
    about: { "@id": "https://www.castleheightscannabis.ca/#store" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Castle Heights Cannabis",
        item: "https://www.castleheightscannabis.ca/",
      },
      { "@type": "ListItem", position: 2, name: page.h1, item: pageUrl },
    ],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroIcon}>{page.icon}</span>
          <h1 className={styles.heroH1}>{page.h1}</h1>
          <p className={styles.heroTagline}>{page.heroTagline}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className={styles.content}>
        <div className={styles.container}>
          {page.sections.map((s, i) => (
            <div key={i} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.heading}</h2>
              <p className={styles.sectionBody}>{s.body}</p>
            </div>
          ))}

          {/* Tier Grid */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Compare Five Flower Tiers</h2>
            <div className={styles.tierGrid}>
              {tiers.map((tier) => (
                <Link
                  key={tier.slug}
                  href={`/${tier.slug}`}
                  className={styles.tierCard}
                  style={{ "--tier-color": tier.color } as React.CSSProperties}
                >
                  <div className={styles.tierLabel} style={{ color: tier.color }}>
                    {tier.icon} {tier.name}
                  </div>
                  <p className={styles.tierDesc}>{tier.tagline}</p>
                  <span className={styles.tierLink}>Browse {tier.name} →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us</h2>
            <div className={styles.mapWrap}>
              Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8.
            </div>
            <div className={styles.visitBtns}>
              <a href="tel:+13433089488">Call (343) 308-9488</a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=605%20Center%20St%2C%20Ottawa%2C%20ON%20K1K%202N8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* FAQ */}
          {page.faqs.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              {page.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
