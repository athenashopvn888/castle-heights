import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
const flowers = readFileSync(new URL("../app/lib/flowers.json", import.meta.url), "utf8");

test("TV protected tiers display 6g while AA continues to display 5g", () => {
  assert.match(tv, /isTop3 \? "6g" : "5g"/);
  assert.match(tv, /\$20 5g AA/);
  assert.match(tv, /\["EXOTIC","PREMIUM","AAA\+"\]\.includes\(tier\)/);
});

test("the correction preserves the backend price5g field", () => {
  assert.match(tv, /hi\.price5g/);
  assert.match(flowers, /"price5g"/);
});
