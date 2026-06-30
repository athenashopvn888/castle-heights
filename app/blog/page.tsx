import type { Metadata } from "next";
import { managerBlogConfig } from "../lib/managerBlogConfig";
import { listPublishedManagerBlogPosts } from "../lib/managerBlogStorage";
import BlogContent from "./BlogContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides - Castle Heights Cannabis | Ottawa",
  description: "Read the latest cannabis guides and store updates from Castle Heights Cannabis in Ottawa.",
  alternates: {
    canonical: "https://castleheightscannabis.com/blog",
  },
};

export default async function BlogPage() {
  const managerPosts = await listPublishedManagerBlogPosts();
  return <BlogContent managerPosts={managerPosts} storeCode={managerBlogConfig.storeCode} storeName={managerBlogConfig.storeName} />;
}


