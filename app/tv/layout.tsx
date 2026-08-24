import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Castle Heights In-Store Flower Display" },
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: { children: React.ReactNode }) {
  return children;
}
