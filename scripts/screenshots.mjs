// Renders the card with mock data and saves the README screenshots.
// Usage: npm run build && npm run screenshots
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("..", import.meta.url));
// Fixed clock and time zone: "Ends at …" in the captures does not depend on when they are taken.
const NOW = Date.parse("2026-10-24T08:44:00Z");
const cardJs = readFileSync(`${root}dist/home-connect-card.js`, "utf8");

const THEMES = {
  light: {
    "--primary-background-color": "#e8eaed",
    "--secondary-background-color": "#ececec",
    "--card-background-color": "#ffffff",
    "--primary-text-color": "#212121",
    "--secondary-text-color": "#727272",
    "--divider-color": "rgba(0,0,0,.12)",
  },
  dark: {
    "--primary-background-color": "#111111",
    "--secondary-background-color": "#282828",
    "--card-background-color": "#1c1c1c",
    "--primary-text-color": "#e1e1e1",
    "--secondary-text-color": "#9b9b9b",
    "--divider-color": "rgba(225,225,225,.12)",
  },
};
const COMMON = {
  "--primary-color": "#03a9f4",
  "--info-color": "#039be5",
  "--success-color": "#43a047",
  "--warning-color": "#ffa600",
  "--error-color": "#db4437",
  "--text-primary-color": "#ffffff",
};

// Minimal stand-ins for Home Assistant's <ha-card> and <ha-icon> (Material Design Icons paths below).
const haElements = (icons) => `
const ICONS = ${JSON.stringify(icons)};
customElements.define("ha-card", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML =
      "<style>:host{display:block;background:var(--card-background-color);border-radius:12px;" +
      "border:1px solid var(--divider-color);color:var(--primary-text-color);overflow:hidden}</style><slot></slot>";
  }
});
customElements.define("ha-icon", class extends HTMLElement {
  static get observedAttributes() { return ["icon"]; }
  connectedCallback() { this._draw(); }
  attributeChangedCallback() { this._draw(); }
  _draw() {
    const path = ICONS[(this.getAttribute("icon") || "").replace("mdi:", "")] || "";
    this.style.display = "inline-flex";
    this.innerHTML = '<svg viewBox="0 0 24 24" style="width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);fill:currentColor"><path d="' + path + '"/></svg>';
  }
});`;

const pageHtml = (theme, width) => `<!doctype html><html><head><meta charset="utf-8">
<style>
  :root { ${Object.entries({ ...THEMES[theme], ...COMMON }).map(([k, v]) => `${k}:${v};`).join("")} }
  body { margin: 0; padding: 16px; background: var(--primary-background-color); color: var(--primary-text-color);
         font-family: Roboto, "Segoe UI", Helvetica, Arial, sans-serif; width: ${width}px; }
</style></head><body><div id="root"></div></body></html>`;

// Opens one shot { file, type, theme, width, config, hass? } on a fresh page (re-running the scripts in the same
// realm would redeclare their globals) and mounts the card. extra: more stand-in elements, as script source.
async function openCard(browser, s, { icons = {}, hass = {}, extra = "" }) {
  const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1000, height: 2000 }, timezoneId: "UTC" });
  page.on("pageerror", (err) => console.error(`${s.file}: ${err.message}`));
  page.on("console", (msg) => msg.type() === "error" && console.error(`${s.file}: ${msg.text()}`));
  await page.clock.setFixedTime(NOW);
  await page.setContent(pageHtml(s.theme, s.width));
  await page.addScriptTag({ content: haElements(icons) + extra });
  await page.addScriptTag({ content: cardJs });
  await page.evaluate(
    ({ type, config, hass, dark }) => {
      const el = document.createElement(type);
      el.setConfig({ type: `custom:${type}`, ...config });
      el.hass = { states: {}, entities: {}, devices: {}, language: "en", locale: { language: "en" },
                  themes: { darkMode: dark }, callService: async () => {}, callWS: async () => ({}), ...hass };
      document.getElementById("root").appendChild(el);
    },
    { type: s.type, config: s.config || {}, hass: { ...hass, ...(s.hass || {}) }, dark: s.theme === "dark" }
  );
  return page;
}

// Renders each shot { file, type, theme, width, config, hass?, after? } into screenshots/<file>.png.
export async function render(shots, { icons = {}, hass = {}, extra = "" } = {}) {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  for (const s of shots) {
    const page = await openCard(browser, s, { icons, hass, extra });
    if (s.after) await s.after(page);
    await page.waitForTimeout(400);
    // The card plus the 16px page padding around it, on the theme background.
    const box = await page.locator("#root").boundingBox();
    await page.screenshot({
      path: `${root}screenshots/${s.file}.png`,
      clip: { x: 0, y: 0, width: s.width + 32, height: Math.ceil(box.height) + 32 },
      animations: "disabled",
    });
    console.log(`screenshots/${s.file}.png`);
    await page.close();
  }
  await browser.close();
}

// Records one shot as a looping GIF (screenshots/<file>.gif) — needs ffmpeg on PATH. Every animation is paused and
// stepped frame by frame, so the GIF is identical whatever the machine's speed.
export async function animate(shot, { icons = {}, hass = {}, extra = "", fps = 20, seconds = 3 } = {}) {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await openCard(browser, shot, { icons, hass, extra });
  await page.waitForTimeout(300);
  const box = await page.locator("#root").boundingBox();
  const clip = { x: 0, y: 0, width: shot.width + 32, height: Math.ceil(box.height) + 32 };
  const dir = mkdtempSync(join(tmpdir(), "hc-frames-"));
  const frames = Math.round(fps * seconds);
  for (let i = 0; i < frames; i++) {
    await page.evaluate((t) => {
      for (const a of document.getAnimations()) {
        a.pause();
        a.currentTime = t;
      }
    }, (i * 1000) / fps);
    await page.screenshot({ path: join(dir, `f${String(i).padStart(3, "0")}.png`), clip });
  }
  await browser.close();
  const out = `${root}screenshots/${shot.file}.gif`;
  // Halve the retina capture and build a per-clip palette: the colours stay clean and the file stays small.
  execFileSync("ffmpeg", [
    "-y", "-loglevel", "error", "-framerate", String(fps), "-i", join(dir, "f%03d.png"),
    "-vf", `scale=${clip.width}:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=bayer:bayer_scale=4`,
    "-loop", "0", out,
  ]);
  rmSync(dir, { recursive: true });
  console.log(`screenshots/${shot.file}.gif`);
}

const icons = {
  "arrow-collapse": "M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z",
  "arrow-expand": "M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z",
  "clock-outline": "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",
  "tune-variant": "M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z",
  "checkbox-blank-circle-outline": "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  "checkbox-marked-circle": "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  "cloud-off-outline": "M19.8 22.6L17.15 20H6.5Q4.2 20 2.6 18.4T1 14.5Q1 12.58 2.19 11.08 3.38 9.57 5.25 9.15 5.33 8.95 5.4 8.76 5.5 8.57 5.55 8.35L1.4 4.2L2.8 2.8L21.2 21.2M6.5 18H15.15L7.1 9.95Q7.05 10.23 7.03 10.5 7 10.73 7 11H6.5Q5.05 11 4.03 12.03 3 13.05 3 14.5 3 15.95 4.03 17 5.05 18 6.5 18M11.13 14M21.6 18.75L20.15 17.35Q20.58 17 20.79 16.54 21 16.08 21 15.5 21 14.45 20.27 13.73 19.55 13 18.5 13H17V11Q17 8.93 15.54 7.46 14.08 6 12 6 11.33 6 10.7 6.16 10.07 6.33 9.5 6.68L8.05 5.23Q8.93 4.63 9.91 4.31 10.9 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 16.5 22.63 17.31 22.25 18.15 21.6 18.75M14.83 12.03Z",
  "dishwasher": "M18,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2M10,4A1,1 0 0,1 11,5A1,1 0 0,1 10,6A1,1 0 0,1 9,5A1,1 0 0,1 10,4M7,4A1,1 0 0,1 8,5A1,1 0 0,1 7,6A1,1 0 0,1 6,5A1,1 0 0,1 7,4M18,20H6V8H18V20M14.67,15.33C14.69,16.03 14.41,16.71 13.91,17.21C12.86,18.26 11.15,18.27 10.09,17.21C9.59,16.71 9.31,16.03 9.33,15.33C9.4,14.62 9.63,13.94 10,13.33C10.37,12.5 10.81,11.73 11.33,11L12,10C13.79,12.59 14.67,14.36 14.67,15.33",
  "door-closed": "M16,11H18V13H16V11M12,3H19C20.11,3 21,3.89 21,5V19H22V21H2V19H10V5C10,3.89 10.89,3 12,3M12,5V19H19V5H12Z",
  "door-closed-lock": "M16 11H18V13H16V11M12 3H19A2 2 0 0 1 21 5V19H22V21H2V19H10V5A2 2 0 0 1 12 3M12 5V19H19V5M6.2 5H2.8V4.5A1.7 1.7 0 0 1 6.2 4.5M7 5V4.5A2.5 2.5 0 0 0 2 4.5V5A1 1 0 0 0 1 6V10A1 1 0 0 0 2 11H7A1 1 0 0 0 8 10V6A1 1 0 0 0 7 5",
  "door-open": "M12,3C10.89,3 10,3.89 10,5H3V19H2V21H22V19H21V5C21,3.89 20.11,3 19,3H12M12,5H19V19H12V5M5,11H7V13H5V11Z",
  "information-outline": "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",
  "pause": "M14,19H18V5H14M6,19H10V5H6V19Z",
  "play": "M8,5.14V19.14L19,12.14L8,5.14Z",
  "power": "M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",
  "refresh": "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",
  "shaker-outline": "M16.88 4L16.88 4L19.03 6.1L13.5 10.5L12.5 9.5L16.87 4L16.88 4M16.88 2C16.3 2 15.73 2.24 15.33 2.72L9.8 9.65L13.34 13.19L20.28 7.67C21.18 6.91 21.25 5.54 20.41 4.7L18.3 2.59C17.9 2.19 17.39 2 16.88 2M9.1 10.36L8.39 11.07C8 11.46 8 12.09 8.39 12.5L10.5 14.6C10.71 14.8 10.96 14.89 11.22 14.89S11.73 14.8 11.93 14.6L12.63 13.9L9.1 10.36M6 15C5.45 15 5 15.45 5 16C5 16.55 5.45 17 6 17C6.55 17 7 16.55 7 16C7 15.45 6.55 15 6 15M9 16C8.45 16 8 16.45 8 17S8.45 18 9 18C9.55 18 10 17.55 10 17S9.55 16 9 16M4 18C3.45 18 3 18.45 3 19S3.45 20 4 20C4.55 20 5 19.55 5 19S4.55 18 4 18M7 19C6.45 19 6 19.45 6 20S6.45 21 7 21C7.55 21 8 20.55 8 20S7.55 19 7 19Z",
  "stop": "M18,18H6V6H18V18Z",
  "washing-machine": "M14.83,11.17C16.39,12.73 16.39,15.27 14.83,16.83C13.27,18.39 10.73,18.39 9.17,16.83L14.83,11.17M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M7,4A1,1 0 0,0 6,5A1,1 0 0,0 7,6A1,1 0 0,0 8,5A1,1 0 0,0 7,4M10,4A1,1 0 0,0 9,5A1,1 0 0,0 10,6A1,1 0 0,0 11,5A1,1 0 0,0 10,4M12,8A6,6 0 0,0 6,14A6,6 0 0,0 12,20A6,6 0 0,0 18,14A6,6 0 0,0 12,8Z",
  "water-alert-outline": "M10 3.25C10 3.25 4 10 4 14C4 17.31 6.69 20 10 20S16 17.31 16 14C16 10 10 3.25 10 3.25M10 18C7.79 18 6 16.21 6 14C6 12.23 8 8.96 10 6.39C12 8.95 14 12.23 14 14C14 16.21 12.21 18 10 18M20 7V13H18V7H20M18 17H20V15H18V17Z"
};

// Mock Home Connect devices: entity registry (device_id + translation_key) and states.
const entities = {};
const states = {};
const add = (device, id, key, state, attributes = {}) => {
  entities[id] = { entity_id: id, device_id: device, translation_key: key };
  states[id] = { entity_id: id, state, attributes: { friendly_name: id, ...attributes } };
};
const inMinutes = (m) => new Date(NOW + m * 60000).toISOString();

// Dishwasher, running Eco 50 °C.
add("dw", "sensor.dishwasher_operation_state", "operation_state", "run", { options: ["inactive", "ready", "run", "pause", "finished", "error"] });
add("dw", "sensor.dishwasher_door", "door", "closed", { options: ["open", "closed", "locked"] });
add("dw", "sensor.dishwasher_program_progress", "program_progress", "62", { unit_of_measurement: "%" });
add("dw", "sensor.dishwasher_program_finish_time", "program_finish_time", inMinutes(48), { device_class: "timestamp" });
add("dw", "select.dishwasher_active_program", "active_program", "dishcare_dishwasher_program_eco_50",
  { options: ["dishcare_dishwasher_program_eco_50", "dishcare_dishwasher_program_auto_2", "dishcare_dishwasher_program_quick_45"] });
add("dw", "select.dishwasher_selected_program", "selected_program", "dishcare_dishwasher_program_eco_50",
  { options: ["dishcare_dishwasher_program_eco_50", "dishcare_dishwasher_program_auto_2", "dishcare_dishwasher_program_quick_45"] });
add("dw", "switch.dishwasher_power", "power", "on");
add("dw", "binary_sensor.dishwasher_connectivity", "connectivity", "on", { device_class: "connectivity" });
add("dw", "sensor.dishwasher_rinse_aid_nearly_empty", "rinse_aid_nearly_empty", "present");
add("dw", "button.dishwasher_stop_program", "stop_program", "unknown");
add("dw", "switch.dishwasher_intensiv_zone", "intensiv_zone", "on", { friendly_name: "Dishwasher Intensive zone" });
add("dw", "switch.dishwasher_hygiene_plus", "hygiene_plus", "off", { friendly_name: "Dishwasher Hygiene plus" });
add("dw", "switch.dishwasher_extra_dry", "extra_dry", "on", { friendly_name: "Dishwasher Extra dry" });

// Washing machine, ready with a program selected.
add("wm", "sensor.washer_operation_state", "operation_state", "ready", { options: ["inactive", "ready", "run", "pause", "finished", "error"] });
add("wm", "sensor.washer_door", "door", "closed", { options: ["open", "closed", "locked"] });
add("wm", "select.washer_selected_program", "selected_program", "laundry_care_washer_program_cotton",
  { options: ["laundry_care_washer_program_cotton", "laundry_care_washer_program_mix", "laundry_care_washer_program_wool"] });
add("wm", "select.washer_active_program", "active_program", "unavailable",
  { options: ["laundry_care_washer_program_cotton", "laundry_care_washer_program_mix", "laundry_care_washer_program_wool"] });
add("wm", "select.washer_temperature", "temperature", "laundry_care_washer_enum_type_temperature_g_c_40",
  { friendly_name: "Washer Temperature", options: ["laundry_care_washer_enum_type_temperature_g_c_30", "laundry_care_washer_enum_type_temperature_g_c_40", "laundry_care_washer_enum_type_temperature_g_c_60"] });
add("wm", "select.washer_spin_speed", "spin_speed", "laundry_care_washer_enum_type_spin_speed_r_p_m_1200",
  { friendly_name: "Washer Spin speed", options: ["laundry_care_washer_enum_type_spin_speed_r_p_m_800", "laundry_care_washer_enum_type_spin_speed_r_p_m_1200", "laundry_care_washer_enum_type_spin_speed_r_p_m_1400"] });
add("wm", "switch.washer_power", "power", "on");
add("wm", "switch.washer_prewash", "prewash", "off", { friendly_name: "Washer Prewash" });
add("wm", "switch.washer_speed_perfect", "speed_perfect", "on", { friendly_name: "Washer SpeedPerfect" });
add("wm", "binary_sensor.washer_connectivity", "connectivity", "on", { device_class: "connectivity" });
add("wm", "button.washer_start_program", "start_program", "unknown");
add("wm", "button.washer_pause_program", "pause_program", "unknown");
add("wm", "button.washer_resume_program", "resume_program", "unknown");
add("wm", "button.washer_stop_program", "stop_program", "unknown");
add("wm", "sensor.washer_program_progress", "program_progress", "unavailable", { unit_of_measurement: "%" });
add("wm", "sensor.washer_program_finish_time", "program_finish_time", "unavailable", { device_class: "timestamp" });

const devices = { dw: { id: "dw", name: "Dishwasher" }, wm: { id: "wm", name: "Washer" } };
const hass = { states, entities, devices };

// Same dishwasher, switched on and waiting for a program: the options are shown.
const ready = structuredClone(states);
ready["sensor.dishwasher_operation_state"].state = "ready";
ready["select.dishwasher_active_program"].state = "unavailable";
ready["sensor.dishwasher_program_progress"].state = "unavailable";

// Washing machine mid-cycle: the drum turns, water waves behind the porthole and suds rise.
const washerRunning = structuredClone(states);
washerRunning["sensor.washer_operation_state"].state = "run";
washerRunning["sensor.washer_program_progress"].state = "45";
washerRunning["sensor.washer_program_finish_time"].state = inMinutes(72);
washerRunning["select.washer_active_program"].state = "laundry_care_washer_program_cotton";

// Washer paused mid-cycle: the badge breathes and Resume replaces Pause.
const washerPaused = structuredClone(washerRunning);
washerPaused["sensor.washer_operation_state"].state = "pause";

// Washer waiting on a delayed start: the badge's clock hands turn, no progress yet.
const washerDelayed = structuredClone(states);
washerDelayed["sensor.washer_operation_state"].state = "delayedstart";

// Washer at the end of its cycle: the tick is drawn in and sparkles twinkle around it.
const washerFinished = structuredClone(states);
washerFinished["sensor.washer_operation_state"].state = "finished";

// Dishwasher at the end of its cycle: the tick is drawn in and sparkles twinkle around it.
const finished = structuredClone(states);
finished["sensor.dishwasher_operation_state"].state = "finished";

// Dishwasher paused mid-cycle: the program badge pulses gently while it waits.
const dishwasherPaused = structuredClone(states);
dishwasherPaused["sensor.dishwasher_operation_state"].state = "pause";

// Dishwasher waiting on a delayed start: the badge's clock hands turn, no progress yet.
const dishwasherDelayed = structuredClone(states);
dishwasherDelayed["sensor.dishwasher_operation_state"].state = "delayedstart";
dishwasherDelayed["sensor.dishwasher_program_progress"].state = "unavailable";

// Each appliance idle with its door open: the dishwasher's door lowered on its racks, the washer's porthole swung aside.
const dishwasherOpen = structuredClone(states);
dishwasherOpen["sensor.dishwasher_operation_state"].state = "ready";
dishwasherOpen["sensor.dishwasher_door"].state = "open";
const washerOpen = structuredClone(states);
washerOpen["sensor.washer_door"].state = "open";

await render(
  [
    { file: "dishwasher", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {} },
    { file: "dishwasher-dark", type: "home-connect-dishwasher-card", theme: "dark", width: 460, config: {} },
    { file: "dishwasher-options", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {}, hass: { states: ready } },
    { file: "dishwasher-open", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {}, hass: { states: dishwasherOpen } },
    { file: "washer", type: "home-connect-washer-card", theme: "light", width: 460, config: {} },
    { file: "washer-dark", type: "home-connect-washer-card", theme: "dark", width: 460, config: {} },
    { file: "washer-open", type: "home-connect-washer-card", theme: "light", width: 460, config: {}, hass: { states: washerOpen } },
    { file: "dishwasher-mini", type: "home-connect-dishwasher-mini-card", theme: "light", width: 380, config: {} },
    { file: "dishwasher-mini-dark", type: "home-connect-dishwasher-mini-card", theme: "dark", width: 380, config: {} },
    { file: "washer-mini", type: "home-connect-washer-mini-card", theme: "light", width: 380, config: {} },
    {
      file: "washer-mini-zoom", type: "home-connect-washer-mini-card", theme: "light", width: 460, config: {},
      after: async (page) => {
        await page.locator("home-connect-washer-mini-card .zoom").click();
        await page.mouse.move(0, 0);
      },
    },
  ],
  { icons, hass }
);

// One looping GIF per distinct animated state and per appliance — the two illustrations differ,
// so the paused / delayed / finished badges are recorded on both. The dishwasher mid-cycle (its
// default mock state is "run") sprays water, raises steam and glows its floor light; the washer
// running turns the drum and waves the water; a finished appliance draws its tick and twinkles
// sparkles; the paused badge breathes; the delayed-start badge turns its clock hands. Each
// reuses openCard through animate(), so no mount is duplicated.
await animate(
  { file: "dishwasher-running", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {} },
  { icons, hass }
);
await animate(
  { file: "washer-running", type: "home-connect-washer-card", theme: "light", width: 460, config: {}, hass: { states: washerRunning } },
  { icons, hass }
);
await animate(
  { file: "dishwasher-finished", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {}, hass: { states: finished } },
  { icons, hass }
);
await animate(
  { file: "washer-finished", type: "home-connect-washer-card", theme: "light", width: 460, config: {}, hass: { states: washerFinished } },
  { icons, hass }
);
await animate(
  { file: "dishwasher-paused", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {}, hass: { states: dishwasherPaused } },
  { icons, hass }
);
await animate(
  { file: "washer-paused", type: "home-connect-washer-card", theme: "light", width: 460, config: {}, hass: { states: washerPaused } },
  { icons, hass }
);
await animate(
  { file: "dishwasher-delayed", type: "home-connect-dishwasher-card", theme: "light", width: 460, config: {}, hass: { states: dishwasherDelayed } },
  { icons, hass }
);
await animate(
  { file: "washer-delayed", type: "home-connect-washer-card", theme: "light", width: 460, config: {}, hass: { states: washerDelayed } },
  { icons, hass }
);
