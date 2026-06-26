import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Castle Heights Cannabis | Ottawa",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Castle Heights Cannabis in Ottawa.",
  alternates: {
    canonical: "https://castleheightscannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
