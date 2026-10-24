import assert from "node:assert/strict";
import { test } from "node:test";
import { loadCard } from "./load.mjs";

const { HomeConnectWasherCard, HomeConnectDishwasherCard, hcFindDevice, hcEsc } = loadCard("home-connect-card.js", [
  "HomeConnectWasherCard",
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

test("an unknown operation state is escaped in the status line", () => {
  const html = render(HomeConnectWasherCard, mockHass({ opState: '<img src=x onerror="alert(1)">' }));
  assert.doesNotMatch(html, /<img src=x/);
  assert.match(html, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/);
});

test("hcEsc escapes HTML text and attributes", () => {
  assert.equal(hcEsc(`<a href="x">'&'</a>`), "&lt;a href=&quot;x&quot;&gt;&#39;&amp;&#39;&lt;/a&gt;");
  assert.equal(hcEsc(null), "");
});
