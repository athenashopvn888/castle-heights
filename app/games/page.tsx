import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Castle Heights Cannabis | Ottawa",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Castle Heights Cannabis.",
  alternates: {
    canonical: "https://castleheightscannabis.com/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
