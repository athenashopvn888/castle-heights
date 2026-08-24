import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Castle Heights Cannabis | Ottawa",
  description: "Play Castle Heights Cannabis arcade games including Flappy Bud, Snake Munchies, Brick Breaker, Memory Match, and 2048 Strains.",
  alternates: {
    canonical: "https://www.castleheightscannabis.ca/games",
  },
  openGraph: {
    title: "Cannabis Arcade Games — Castle Heights Cannabis | Ottawa",
    description: "Play five Castle Heights Cannabis browser games.",
    url: "https://www.castleheightscannabis.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
