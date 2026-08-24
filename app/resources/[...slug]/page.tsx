import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePage, RESOURCE_PAGES } from "../resourceData";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page) return {};
  const pageUrl = "https://www.castleheightscannabis.ca/resources/" + page.slug;
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url: pageUrl,
    },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page) notFound();
  return <ResourceView page={page} />;
}
