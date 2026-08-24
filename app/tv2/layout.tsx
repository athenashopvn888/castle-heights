import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Castle Heights In-Store Item Display" },
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
