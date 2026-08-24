import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

const PAGE_URL = "https://www.castleheightscannabis.ca/faq";

export const metadata: Metadata = {
  title: "Castle Heights Cannabis FAQ | Ottawa Store Information",
  description:
    "Answers about Castle Heights Cannabis hours, Ottawa address, listed product formats, call-ahead information, and directions to 605 Center St.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Castle Heights Cannabis FAQ | Ottawa Store Information",
    description:
      "Hours, address, product formats, call-ahead information, and directions for Castle Heights Cannabis in Ottawa.",
    url: PAGE_URL,
  },
};

const FAQ_CATEGORIES = [
  {
    title: "Location and Hours",
    faqs: [
      {
        q: "Where is Castle Heights Cannabis?",
        a: "Castle Heights Cannabis is at 605 Center St, Ottawa, ON K1K 2N8.",
      },
      {
        q: "What are the store hours?",
        a: "The Ottawa store is open 24 hours.",
      },
      {
        q: "How should I plan a visit from Gatineau?",
        a: "Use current directions from your actual starting point. Travel time depends on the route, traffic, and construction, so allow enough time before crossing into Ottawa.",
      },
    ],
  },
  {
    title: "Products and Menu",
    faqs: [
      {
        q: "What product formats are listed?",
        a: "The published menu includes flower, edibles, vape pens, disposable vapes, concentrates, pre-rolls, cigarettes, and accessories.",
      },
      {
        q: "How is flower organized?",
        a: "Flower is grouped into Exotic, Premium, AAA+, AA, and Budget collections. Supplied strain type, THC details, sizes, and prices appear when provided.",
      },
      {
        q: "Can product listings change?",
        a: "Yes. Call (343) 308-9488 before travelling when a particular product, size, or price matters to your visit.",
      },
      {
        q: "Are cigarette and Grabba products listed?",
        a: "The published menu includes cigarette and smoke-product listings, including Grabba items when present in the current menu snapshot. Call ahead about a particular option.",
      },
    ],
  },
  {
    title: "Planning Your Visit",
    faqs: [
      {
        q: "Do I need an appointment?",
        a: "Adults can visit during the store's open hours. Call (343) 308-9488 if you need help before travelling.",
      },
      {
        q: "Can I call about a particular listing?",
        a: "Yes. Call (343) 308-9488 before visiting when a particular product matters.",
      },
      {
        q: "Where can I get directions?",
        a: "Use the directions link for a current route to 605 Center St, Ottawa, ON K1K 2N8.",
      },
    ],
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: FAQ_CATEGORIES.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Store hours, address, product formats, and visit information for Castle
            Heights Cannabis at 605 Center St in Ottawa.
          </p>

          {FAQ_CATEGORIES.map((category) => (
            <section key={category.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              {category.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </section>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Need a quick answer before visiting?</h2>
            <p className={styles.ctaText}>
              Call <a href="tel:+13433089488">(343) 308-9488</a> or get directions to
              605 Center St, Ottawa.
            </p>
            <Link href="/contact">View contact and store hours</Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
