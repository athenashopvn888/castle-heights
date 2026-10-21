import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import ts from "typescript";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("tier ranges use sale price per gram and source THC only", () => {
  const source = read("app/lib/tierPriceRanges.ts");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const compiled = { exports: {} };
  new Function("module", "exports", output)(compiled, compiled.exports);
  const ranges = compiled.exports;
  const value = ranges.storeTierRange([{ tier: "EXOTIC", thc: "35-39%", price3g: { regular: 42, sale: 36 }, price28g: { regular: 196, sale: null } }], "EXOTIC");
  assert.equal(ranges.tierRangeText(value), "From $7 to $12 a gram · THC about 35 to 39%");
  assert.equal(ranges.tierRangeText(ranges.storeTierRange([], "EXOTIC")), null);
});

test("coming-soon price rules are wired without delivery surfaces", () => {
  const home = read("app/page.tsx");
  const tier = read("app/[tier]/page.tsx");
  const faq = read("app/faq/page.tsx");
  for (const source of [home, tier]) {
    assert.match(source, /IN-STORE PRICES ONLY\./);
    assert.match(source, /Delivery coming soon\./);
    assert.doesNotMatch(source, /DELIVERY PRICES ONLY/);
  }
  assert.match(faq, /id=\{faq\.q === "Can I get the store price on a delivery order\?" \? "delivery-price-rule"/);
  assert.match(faq, /open=\{faq\.q === "Can I get the store price on a delivery order\?"\}/);
  assert.match(faq, /Delivery is coming soon\. In-store prices are for purchases made in the store, and delivery orders will have their own prices\./);
  assert.equal(fs.existsSync(new URL("../app/menu", import.meta.url)), false);
  assert.equal(fs.existsSync(new URL("../app/delivery", import.meta.url)), false);
});
