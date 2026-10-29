import assert from "node:assert/strict";
import { test } from "node:test";
import { loadCard } from "./load.mjs";

const { HomeConnectWasherCard, HomeConnectDishwasherCard, HomeConnectCardEditor, hcFindDevice, hcEsc, customElements } = loadCard("home-connect-card.js", [
  "HomeConnectWasherCard",
  "HomeConnectCardEditor",
  "HomeConnectDishwasherCard",
  "hcFindDevice",
  "hcEsc",
]);

const st = (state, attributes = {}) => ({ state, attributes });

// One dishwasher (d1) and one washer (d2), as the Home Connect integration exposes them.
function mockHass({ washerState = "run", pauseState = "unknown", opState } = {}) {
  const states = {
    "select.dw_selected_program": st("dishcare_dishwasher_program_eco_50", { options: ["dishcare_dishwasher_program_eco_50"] }),
    "select.wm_selected_program": st("laundry_care_washer_program_cotton", {
      options: ["laundry_care_washer_program_cotton", "laundry_care_washer_program_mix"],
    }),
    "select.wm_active_program": st("laundry_care_washer_program_cotton", { options: ["laundry_care_washer_program_cotton"] }),
    "sensor.wm_operation_state": st(opState || washerState, { options: ["inactive", "ready", "run", "pause", "finished"] }),
    "switch.wm_power": st("on"),
    "button.wm_pause_program": st(pauseState),
    "button.wm_resume_program": st("unknown"),
    "button.wm_stop_program": st("unknown"),
  };
  const entities = {};
  for (const id of Object.keys(states)) entities[id] = { entity_id: id, device_id: id.includes(".dw_") ? "d1" : "d2" };
  entities["select.wm_selected_program"].translation_key = "selected_program";
  entities["select.wm_active_program"].translation_key = "active_program";
  entities["switch.wm_power"].translation_key = "power";
  entities["button.wm_pause_program"].translation_key = "pause_program";
  entities["button.wm_resume_program"].translation_key = "resume_program";
  entities["button.wm_stop_program"].translation_key = "stop_program";
  return {
    language: "en",
    states,
    entities,
    devices: { d1: { name: "Dishwasher" }, d2: { name: "Washer" } },
    callService: () => Promise.resolve(),
  };
}

function render(Card, hass, config = {}) {
  const card = new Card();
  card.setConfig(config);
  card.hass = hass;
  return card.shadowRoot.innerHTML;
}

test("washer card: stub config and editor use the washer profile", () => {
  const hass = mockHass();
  assert.deepEqual({ ...HomeConnectWasherCard.getStubConfig(hass) }, { device_id: "d2" });
  assert.deepEqual({ ...HomeConnectDishwasherCard.getStubConfig(hass) }, { device_id: "d1" });
  assert.equal(HomeConnectWasherCard.getConfigElement().kind, "washer");
  assert.equal(HomeConnectDishwasherCard.getConfigElement().kind, "dishwasher");
});

test("hcFindDevice follows registry changes", () => {
  const hass = mockHass();
  assert.equal(hcFindDevice(hass, "washer"), "d2");
  const devices = { d1: hass.devices.d1 };
  assert.equal(hcFindDevice({ ...hass, devices }, "washer"), undefined);
});

test("Pause shows for a never-pressed (unknown) button, not for an unavailable one", () => {
  assert.match(render(HomeConnectWasherCard, mockHass({ pauseState: "unknown" })), /data-action="pause"/);
  assert.match(render(HomeConnectWasherCard, mockHass({ pauseState: "2026-10-01T10:00:00+00:00" })), /data-action="pause"/);
  assert.doesNotMatch(render(HomeConnectWasherCard, mockHass({ pauseState: "unavailable" })), /data-action="pause"/);
});

test("show_power: false hides the power button", () => {
  assert.match(render(HomeConnectWasherCard, mockHass()), /data-action="power"/);
  assert.doesNotMatch(render(HomeConnectWasherCard, mockHass(), { show_power: false }), /data-action="power"/);
});

test("header shows the Home Connect logo unless show_logo is false, and the appliance illustration", () => {
  const html = render(HomeConnectWasherCard, mockHass());
  assert.match(html, /class="logo-link"/);
  assert.match(html, /class="drum"/);
  assert.doesNotMatch(render(HomeConnectWasherCard, mockHass(), { show_logo: false }), /class="logo-link"/);
  assert.match(render(HomeConnectWasherCard, mockHass(), { icon: "mdi:washing-machine" }), /class="badge"/);
});

test("mini card: compact view, detail button toggles the full card", () => {
  const Mini = customElements.get("home-connect-washer-mini-card");
  const card = new Mini();
  card.setConfig({});
  card.hass = mockHass();
  assert.match(card.shadowRoot.innerHTML, /ha-card class="mini"/);
  assert.match(card.shadowRoot.innerHTML, /data-action="zoom"[^>]*><ha-icon icon="mdi:arrow-expand"/);
  assert.doesNotMatch(card.shadowRoot.innerHTML, /data-select=/);
  assert.deepEqual({ ...card.getGridOptions() }, { columns: 6, min_columns: 6 });
  card._setZoom(true);
  assert.doesNotMatch(card.shadowRoot.innerHTML, /ha-card class="mini"/);
  assert.match(card.shadowRoot.innerHTML, /mdi:arrow-collapse/);
  card._setZoom(false);
  assert.match(card.shadowRoot.innerHTML, /ha-card class="mini"/);
  const noZoom = new Mini();
  noZoom.setConfig({ zoom: false });
  noZoom.hass = mockHass();
  assert.doesNotMatch(noZoom.shadowRoot.innerHTML, /data-action="zoom"/);
  assert.equal(Mini.getConfigElement().mini, true);
  assert.equal(Mini.getConfigElement().kind, "washer");
});

test("state badge on the illustration when paused, delayed or finished", () => {
  assert.match(render(HomeConnectWasherCard, mockHass({ washerState: "pause" })), /class="picture st-pause"[\s\S]*class="pbadge"/);
  assert.match(render(HomeConnectWasherCard, mockHass({ washerState: "finished" })), /class="sparkles"/);
  assert.doesNotMatch(render(HomeConnectWasherCard, mockHass({ washerState: "run" })), /class="pbadge"/);
  assert.doesNotMatch(render(HomeConnectWasherCard, mockHass({ washerState: "pause" }), { icon: "mdi:washing-machine" }), /class="pbadge"/);
});

test("the washer gets the washer illustration even in a dishwasher card", () => {
  const html = render(HomeConnectDishwasherCard, mockHass(), { device_id: "d2" });
  assert.match(html, /class="drum"/);
  assert.doesNotMatch(html, /class="steam"/);
});

test("door open: open-door illustration", () => {
  const hass = mockHass({ washerState: "ready" });
  hass.states["sensor.wm_door"] = st("open", { options: ["open", "closed", "locked"] });
  hass.entities["sensor.wm_door"] = { entity_id: "sensor.wm_door", device_id: "d2", translation_key: "door" };
  assert.match(render(HomeConnectWasherCard, hass), /url\(#hc-wro\)/);
  hass.states["sensor.wm_door"] = st("closed", { options: ["open", "closed", "locked"] });
  assert.doesNotMatch(render(HomeConnectWasherCard, hass), /hc-wro/);
});

test("an unknown operation state is escaped in the status line", () => {
  const html = render(HomeConnectWasherCard, mockHass({ opState: '<img src=x onerror="alert(1)">' }));
  assert.doesNotMatch(html, /<img src=x/);
  assert.match(html, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/);
});

test("hcEsc escapes HTML text and attributes", () => {
  assert.equal(hcEsc(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
  assert.equal(hcEsc(null), "");
});

test("entity ids from the config are escaped in data attributes", () => {
  const hass = mockHass({ washerState: "ready" });
  const bad = 'select.x"><img src=x>';
  hass.states[bad] = st("a", { options: ["a"] });
  const html = render(HomeConnectWasherCard, hass, { device_id: "d2", entities: { selected_program: bad } });
  assert.doesNotMatch(html, /<img src=x>/);
  assert.match(html, /data-select="select\.x&quot;&gt;&lt;img src=x&gt;"/);
});

function editor(kind, config, language = "en") {
  const ed = new HomeConnectCardEditor();
  ed.kind = kind;
  ed.setConfig(config);
  ed.hass = { language };
  return ed;
}

test("editor labels follow the language option", () => {
  assert.equal(editor("washer", {})._form.computeLabel({ name: "name" }), "Name");
  assert.equal(editor("washer", { language: "fr" })._form.computeLabel({ name: "name" }), "Nom");
  assert.equal(editor("washer", { language: "en" }, "fr")._form.computeLabel({ name: "name" }), "Name");
});

test("editor labels the device field instead of leaking the raw key", () => {
  assert.equal(editor("washer", {})._form.computeLabel({ name: "device_id" }), "Appliance");
  assert.equal(editor("washer", { language: "fr" })._form.computeLabel({ name: "device_id" }), "Appareil");
  assert.equal(editor("washer", {})._form.computeHelper({ name: "device_id" }), "Device from the Home Connect integration");
});

test("editor lists the connectivity, salt and rinse aid overrides where they apply", () => {
  const roles = (kind) => editor(kind, {})._schema().find((s) => s.name === "entities").schema.map((s) => s.name);
  assert.ok(roles("dishwasher").includes("connectivity"));
  assert.ok(roles("dishwasher").includes("salt"));
  assert.ok(roles("dishwasher").includes("rinse_aid"));
  assert.ok(!roles("dishwasher").includes("pause"));
  assert.ok(roles("washer").includes("connectivity"));
  assert.ok(roles("washer").includes("pause"));
  assert.ok(!roles("washer").includes("salt"));
});

test("I18N parity: every language has exactly the English keys and placeholders", () => {
  const { HcI18n } = loadCard("home-connect-card.js", ["HcI18n"]);
  const ref = Object.keys(HcI18n.en).sort();
  for (const lang of ["fr", "de", "es"]) {
    assert.deepEqual(Object.keys(HcI18n[lang]).sort(), ref, `${lang} keys`);
    for (const k of ref) {
      const ph = (s) => (String(s).match(/\{\w+\}/g) || []).sort();
      assert.deepEqual(ph(HcI18n[lang][k]), ph(HcI18n.en[k]), `${lang}.${k} placeholders`);
    }
  }
});

test("editor offers Deutsch and Español and follows them", () => {
  assert.equal(editor("washer", { language: "de" })._form.computeLabel({ name: "name" }), "Name");
  assert.equal(editor("washer", { language: "es" })._form.computeLabel({ name: "name" }), "Nombre");
  assert.equal(editor("washer", {}, "es-ES")._form.computeLabel({ name: "name" }), "Nombre");
});

test("an option switch ending in _etat is never taken for the power switch", () => {
  const hass = mockHass();
  delete hass.states["switch.wm_power"];
  delete hass.entities["switch.wm_power"];
  hass.states["switch.wm_securite_enfants_etat"] = st("off");
  hass.entities["switch.wm_securite_enfants_etat"] = { entity_id: "switch.wm_securite_enfants_etat", device_id: "d2" };
  const card = new HomeConnectWasherCard();
  card.setConfig({ device_id: "d2" });
  card.hass = hass;
  assert.equal(card._resolve().ent.power, undefined);
  assert.doesNotMatch(card.shadowRoot.innerHTML, /data-action="power"/);
});

test("editor without a kind tells the dishwasher type from the washer type", () => {
  const kindOf = (type) => editor(undefined, { type })._schema().find((s) => s.name === "entities").schema.map((s) => s.name);
  assert.ok(kindOf("custom:home-connect-dishwasher-card").includes("salt"));
  assert.ok(kindOf("custom:home-connect-washer-card").includes("pause"));
  assert.ok(kindOf("custom:home-connect-washer-mini-card").includes("pause"));
});

test("renaming the device or switching 12/24 h redraws the card at once", () => {
  const hass = mockHass();
  const card = new HomeConnectWasherCard();
  card.setConfig({ device_id: "d2" });
  card.hass = hass;
  assert.match(card.shadowRoot.innerHTML, /Washer/);
  card.hass = { ...hass, devices: { ...hass.devices, d2: { name: "Washer", name_by_user: "Laundry" } } };
  assert.match(card.shadowRoot.innerHTML, /Laundry/);
  const before = card._sig;
  card.hass = { ...card._hass, locale: { time_format: "12" } };
  assert.notEqual(card._sig, before);
});
