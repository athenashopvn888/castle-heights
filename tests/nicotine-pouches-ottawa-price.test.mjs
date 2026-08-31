import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const pagePath = new URL("../app/nicotine-pouches-ottawa/page.tsx", import.meta.url);

test("CHC nicotine-pouches page consistently advertises the verified $10 sale", async () => {
  const source = await readFile(pagePath, "utf8");

  assert.match(source, /Nicotine Pouches in Ottawa East — \$10 Sale Tins/);
  assert.match(source, /currently listed on sale for \$10/);
  assert.match(source, /\$10 Nicotine Pouch Tins in Ottawa East/);
  assert.match(source, /sale prices and availability can change/);
  assert.match(source, /See the live Cigarettes menu for the current sale price/);
  assert.doesNotMatch(source, /\$20/);
});

test("CHC nicotine-pouches page directs shoppers to the live FMD-fed menu", async () => {
  const source = await readFile(pagePath, "utf8");
  const menuLinks = source.match(/href="\/items\/cigarettes"/g) ?? [];

  assert.ok(menuLinks.length >= 3);
  assert.match(source, /canonical: "https:\/\/www\.castleheightscannabis\.ca\/nicotine-pouches-ottawa"/);
});

