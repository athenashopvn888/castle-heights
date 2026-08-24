import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.castleheightscannabis.ca"),
  title: {
    default: "Castle Heights Cannabis | Ottawa Cannabis Dispensary",
    template: "%s | Castle Heights Cannabis",
  },
  description:
    "Castle Heights Cannabis is an Ottawa cannabis dispensary on Center St with menu categories, local store details, and adult 19+ shopping info. Open 24 Hours.",
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
    url: "https://www.castleheightscannabis.ca",
    siteName: "Castle Heights Cannabis",
    title: "Castle Heights Cannabis — Premium Ottawa Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Ottawa's uplifting dispensary at 605 Center St. Open 24 Hours.",
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
    description: "200+ strains from $3/g. Open 24 Hours at 605 Center St, Ottawa.",
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
    canonical: "https://www.castleheightscannabis.ca",
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
  "@id": "https://www.castleheightscannabis.ca/#store",
  name: "Castle Heights Cannabis",
  description: "Cannabis dispensary at 605 Center St in Ottawa, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://www.castleheightscannabis.ca",
  telephone: "+13433089488",
  image: "https://www.castleheightscannabis.ca/banners/chc-storefront.webp",
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
    latitude: 45.4419717,
    longitude: -75.6428139,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  paymentAccepted: "Cash, Credit Card, Interac, Contactless Tap",
  amenityFeature: {
    "@type": "LocationFeatureSpecification",
    name: "24/7 ATM on site",
    value: true,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ottawa East" },
    { "@type": "AdministrativeArea", name: "Vanier" },
    { "@type": "AdministrativeArea", name: "Overbrook" },
    { "@type": "AdministrativeArea", name: "Castle Heights" },
    { "@type": "AdministrativeArea", name: "Cyrville" },
    { "@type": "AdministrativeArea", name: "Gloucester" },
    { "@type": "AdministrativeArea", name: "Orleans" },
    { "@type": "AdministrativeArea", name: "Blackburn Hamlet" },
    { "@type": "AdministrativeArea", name: "Navan" },
    { "@type": "AdministrativeArea", name: "Rockcliffe Park" },
    { "@type": "AdministrativeArea", name: "Manor Park" },
    { "@type": "AdministrativeArea", name: "Beacon Hill" },
    { "@type": "AdministrativeArea", name: "Pineview" },
    { "@type": "AdministrativeArea", name: "Innes" },
    { "@type": "AdministrativeArea", name: "Cumberland" },
    { "@type": "AdministrativeArea", name: "Rockland" },
  ],
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
