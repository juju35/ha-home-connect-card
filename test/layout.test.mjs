// Narrow widths: the rules that keep the header and the mini card readable at their smallest declared size
// (6 columns of a Sections view, about 160-250 px). The rendering itself was measured in Chromium (see the PR).
import assert from "node:assert/strict";
import { test } from "node:test";
import { loadCard } from "./load.mjs";

const { HomeConnectWasherCard, customElements } = loadCard("home-connect-card.js", ["HomeConnectWasherCard"]);

const css = new HomeConnectWasherCard()._styles();

// The declarations of a top-level rule (outside any @container / @media block) whose selector list is exactly `sel`.
function rule(sel, source = css) {
  const esc = sel.replace(/[.()*+?[\]]/g, "\\$&");
  const m = source.match(new RegExp(`(?:^|[}>])\\s*${esc} \\{([^{}]*)\\}`));
  assert.ok(m, `no "${sel}" rule`);
  return m[1];
}

// The body of an @container block, with its condition.
function containers() {
  return [...css.matchAll(/@container \(max-width: (\d+)px\) \{((?:[^{}]*\{[^{}]*\})*)\s*\}/g)].map((m) => ({ px: Number(m[1]), body: m[2] }));
}

test("the card is a size container, so its layout follows its own width (Sections columns, mini card)", () => {
  assert.match(rule("ha-card"), /container-type: inline-size/);
});

test("size container: the card keeps a usable width in intrinsic-width hosts (inline-block, auto grid column, flex row)", () => {
  // Inline-size containment makes the card's own content width 0: without an intrinsic size it fell to its
  // 24 px of padding in layout-card, button-card or an `auto` grid column (measured in Chromium, see the PR).
  const m = rule("ha-card").match(/contain-intrinsic-inline-size: (\d+)px/);
  assert.ok(m, "no contain-intrinsic-inline-size on the size container");
  assert.ok(Number(m[1]) >= 200 && Number(m[1]) <= 320, `intrinsic width ${m[1]} px`);
});

test("size container: the intrinsic width never stops the card from shrinking in a `1fr 1fr` grid or a flex row", () => {
  // The intrinsic width becomes the host's min-content width: without `min-width: 0` on the host, two cards in a
  // `1fr 1fr` grid (layout-card, grid card) or a horizontal stack kept 300 px each and overflowed a 320-500 px row.
  const host = rule(":host");
  assert.match(host, /min-width: 0;/);
  assert.doesNotMatch(host, /min-width: [1-9]\d*px/, "a px min-width on the host overflows narrow rows");
});

test("header: the title block shrinks with an ellipsis but always keeps a few characters", () => {
  const t = rule(".titles");
  // flex-basis 0: the title takes what is left once the pill and the buttons are laid out, so it no longer
  // squeezes the pill ("Ready" cut to "Re…" on a 320 px card); its min-width keeps a few characters.
  assert.match(t, /flex: 1 1 0(px)?;/);
  assert.match(t, /min-width: \d+(\.\d+)?ch/);
  const n = rule(".name");
  for (const d of [/overflow: hidden/, /text-overflow: ellipsis/, /white-space: nowrap/]) assert.match(n, d);
});

test("header: the status pill shrinks (at most half the header) and truncates its text", () => {
  const s = rule(".st");
  assert.match(s, /flex: 0 1 auto/);
  assert.match(s, /min-width: 0/);
  assert.match(s, /max-width: 50%/);
  assert.match(s, /overflow: hidden/);
  assert.doesNotMatch(s, /flex-shrink: 0/);
  const stt = rule(".stt");
  for (const d of [/overflow: hidden/, /text-overflow: ellipsis/, /white-space: nowrap/]) assert.match(stt, d);
  assert.match(rule(".dot"), /flex: none/);
});

test("header and mini card: icon buttons never shrink", () => {
  for (const sel of [".logo-link", ".power", ".zoom", ".round"]) assert.match(rule(sel), /flex: none/, `${sel} can shrink`);
});

test("narrow card: the pill only shows its dot, the logo steps aside, the mini card's buttons go under its text", () => {
  const blocks = containers();
  assert.ok(blocks.length >= 2, "no @container breakpoints");
  const all = blocks.map((b) => b.body).join("\n");
  // The pill's text is hidden visually only: it stays in the accessibility tree (and in the pill's title).
  const hidden = all.match(/\.stt \{([^}]*)\}/);
  assert.ok(hidden, "the pill text never hides");
  assert.match(hidden[1], /clip-path: inset\(50%\)|clip: rect\(0/);
  assert.doesNotMatch(hidden[1], /display: none/);
  assert.match(all, /\.logo-link \{[^}]*display: none/);
  // Mini card: the state is spelt out in the text column instead (hidden from screen readers, which read the pill).
  assert.match(rule(".mstate"), /display: none/);
  assert.match(all, /ha-card\.mini \.mstate \{[^}]*display: flex/);
  // Mini card: the round buttons take their own row, so the info column gets the card's width back.
  assert.match(all, /ha-card\.mini \.content \{[^}]*flex-wrap: wrap/);
  assert.match(all, /ha-card\.mini \.mcontrols \{[^}]*flex: 1 1 100%/);
});

test("values wrap instead of being cut: state, finish time, program (6 columns on a phone, and 280-364 px)", () => {
  // Measured in Chromium: "Wymagane działanie" / "Niedostępne" ended in "…" on a 156-280 px full card, and the
  // mini card's finish time ("Koniec o 10:56 · zostało 2 h 12") on a 364 px one.
  for (const sel of [".big .state", ".state-big", ".line span"]) {
    const r = rule(sel);
    assert.doesNotMatch(r, /white-space: nowrap|text-overflow: ellipsis/, `${sel} is cut`);
    assert.match(r, /min-width: 0/, `${sel} can't shrink`);
    assert.match(r, /overflow-wrap: (break-word|anywhere)/, `${sel}: a long word overflows`);
  }
});

test("option pills never get wider than the card: a long label wraps inside the pill", () => {
  const t = rule(".toggle");
  assert.match(t, /max-width: 100%/);
  assert.match(t, /box-sizing: border-box/);
  assert.match(t, /overflow-wrap: anywhere/);
});

test("mini card: the minimum width stays 6 columns (it is readable there now)", () => {
  const Mini = customElements.get("home-connect-washer-mini-card");
  assert.deepEqual({ ...new Mini().getGridOptions() }, { columns: 6, min_columns: 6 });
});
