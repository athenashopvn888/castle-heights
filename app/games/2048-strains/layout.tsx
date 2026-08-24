import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "2048 Strains | Castle Heights Arcade" },
  robots: { index: false, follow: false },
};

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return children;
}
