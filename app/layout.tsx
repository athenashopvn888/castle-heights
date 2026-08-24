import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.castleheightscannabis.ca"),
  title: {
    default: "Castle Heights Cannabis | Ottawa Cannabis Dispensary",
    template: "%s",
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
    siteName: "Castle Heights Cannabis",
    title: "Castle Heights Cannabis | Ottawa Cannabis Dispensary",
    description:
      "Castle Heights Cannabis is at 605 Center St in Ottawa with flower, edibles, vapes, pre-rolls, smoke essentials, and adult 19+ shopping information. Open 24 hours.",
    images: [
      {
        url: "/banners/chc-homepage.webp",
        width: 2172,
        height: 724,
        alt: "Castle Heights Cannabis branded welcome graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Castle Heights Cannabis | Ottawa Cannabis Dispensary",
    description: "Visit Castle Heights Cannabis at 605 Center St in Ottawa. Open 24 hours for adults 19+.",
    images: ["/banners/chc-homepage.webp"],
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
  description: "Cannabis dispensary at 605 Center St in Ottawa, ON, with flower, edibles, pre-rolls, vapes, and smoke essentials. Open 24 hours.",
  url: "https://www.castleheightscannabis.ca",
  telephone: "+13433089488",
  image: "https://www.castleheightscannabis.ca/banners/chc-homepage.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "605 Center St",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K1K 2N8",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
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
