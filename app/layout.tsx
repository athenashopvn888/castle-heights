import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://castleheightscannabis.com"),
  title: {
    default: "Castle Heights Cannabis — Premium Cannabis Dispensary, Ottawa",
    template: "%s | Castle Heights Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Castle Heights Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Ottawa's uplifting dispensary at 605 Center St. Open daily 12 PM–4 AM.",
  keywords: [
    "cannabis dispensary Ottawa",
    "weed store Center",
    "exotic flower Ottawa",
    "premium cannabis",
    "Castle Heights Cannabis",
    "cheap weed Ottawa",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Ottawa",
    "vapes",
    "pre-rolls",
    "native cigarettes Ottawa",
    "weed store Gatineau",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://castleheightscannabis.com",
    siteName: "Castle Heights Cannabis",
    title: "Castle Heights Cannabis — Premium Ottawa Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Ottawa's uplifting dispensary at 605 Center St. Open daily 12 PM–4 AM.",
    images: [
      {
        url: "/banners/chc-storefront.webp",
        width: 1200,
        height: 630,
        alt: "Castle Heights Cannabis — Premium Cannabis Dispensary Ottawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Heights Cannabis — Ottawa's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open daily 12 PM–4 AM at 605 Center St, Ottawa.",
    images: ["/banners/chc-storefront.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://castleheightscannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://castleheightscannabis.com",
  name: "Castle Heights Cannabis",
  description: "Cannabis dispensary at 605 Center St in Ottawa, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open daily 12 PM–4 AM.",
  url: "https://castleheightscannabis.com",
  telephone: "+13435734401",
  image: "https://castleheightscannabis.com/banners/chc-storefront.webp",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "605 Center St",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K1K 2N8",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4432,
    longitude: -75.6616,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "04:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Ottawa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8YEJ9CLCCX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8YEJ9CLCCX');
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
