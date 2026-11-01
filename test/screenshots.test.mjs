// The screenshot script only rewrites a capture whose decoded pixels changed: a re-encode of the same picture
// (other zlib / GIF encoder, other metadata) must not show up as a changed file in the screenshot commit.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

const script = readFileSync(new URL("../scripts/screenshots.mjs", import.meta.url), "utf8");
let ffmpeg = true;
try {
  execFileSync("ffmpeg", ["-version"], { stdio: "ignore" });
} catch {
  ffmpeg = false;
}

test("captures go through a temporary file and are kept only when their pixels changed", () => {
  assert.match(script, /from "\.\/pixels\.mjs"/);
  // Both the PNG and the GIF paths end in writeIfChanged, never in a direct write to screenshots/.
  assert.equal((script.match(/writeIfChanged\(/g) || []).length, 2);
  assert.doesNotMatch(script, /path: `\$\{root\}screenshots\//);
  assert.doesNotMatch(script, /"-loop", "0", out,/);
});

test("GIFs are deterministic: ordered (Bayer) dithering, never the random-looking error diffusion default", () => {
  assert.match(script, /paletteuse=dither=bayer/);
  assert.doesNotMatch(script, /paletteuse(?!=dither=(bayer|none))/);
});

test("writeIfChanged keeps the old file for the same pixels and replaces it for different ones", { skip: !ffmpeg && "no ffmpeg" }, async () => {
  const { writeIfChanged } = await import("../scripts/pixels.mjs");
  const dir = mkdtempSync(join(tmpdir(), "hc-pixels-"));
  try {
    const png = (name, color, extra = []) => {
      const f = join(dir, name);
      execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-f", "lavfi", "-i", `color=c=${color}:s=8x8`, "-frames:v", "1", ...extra, f]);
      return f;
    };
    const out = join(dir, "shot.png");
    // Same pixels, different bytes (another compression level).
    writeFileSync(out, readFileSync(png("a.png", "red", ["-compression_level", "0"])));
    const before = readFileSync(out);
    const same = png("b.png", "red", ["-compression_level", "9"]);
    assert.notDeepEqual(readFileSync(same), before, "the fixture should differ in bytes");
    assert.equal(writeIfChanged(same, out), false);
    assert.deepEqual(readFileSync(out), before);
    assert.equal(existsSync(same), false, "the temporary file is removed");
    // Different pixels: replaced.
    const other = png("c.png", "blue");
    const otherBytes = readFileSync(other);
    assert.equal(writeIfChanged(other, out), true);
    assert.deepEqual(readFileSync(out), otherBytes);
    // No previous file: written.
    const fresh = join(dir, "new.png");
    assert.equal(writeIfChanged(png("d.png", "green"), fresh), true);
    assert.ok(existsSync(fresh));
  } finally {
    rmSync(dir, { recursive: true });
  }
});
