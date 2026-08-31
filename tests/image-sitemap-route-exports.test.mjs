import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const routePath = new URL("../app/image-sitemap.xml/route.ts", import.meta.url);

test("image sitemap route exposes only supported Next.js route exports", async () => {
  const source = await readFile(routePath, "utf8");

  assert.match(source, /export const dynamic = "force-static"/);
  assert.match(source, /export function GET\(\)/);
  assert.doesNotMatch(source, /export const imageSitemapDiagnostics/);
});

