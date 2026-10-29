import assert from "node:assert/strict";
import { afterEach, beforeEach, mock, test } from "node:test";
import { loadCard } from "./load.mjs";

const { HomeConnectWasherCard } = loadCard("home-connect-card.js", ["HomeConnectWasherCard"]);

const st = (state, attributes = {}) => ({ state, attributes });

// A washer running a program, with its Stop button.
function mockHass() {
  const states = {
    "select.wm_selected_program": st("laundry_care_washer_program_cotton", { options: ["laundry_care_washer_program_cotton"] }),
    "select.wm_active_program": st("laundry_care_washer_program_cotton", { options: ["laundry_care_washer_program_cotton"] }),
    "sensor.wm_operation_state": st("run", { options: ["inactive", "ready", "run", "pause", "finished"] }),
    "switch.wm_power": st("on"),
    "button.wm_pause_program": st("unknown"),
    "button.wm_resume_program": st("unknown"),
    "button.wm_stop_program": st("unknown"),
  };
  const keys = {
    "select.wm_selected_program": "selected_program",
    "select.wm_active_program": "active_program",
    "sensor.wm_operation_state": "operation_state",
    "switch.wm_power": "power",
    "button.wm_pause_program": "pause_program",
    "button.wm_resume_program": "resume_program",
    "button.wm_stop_program": "stop_program",
  };
  const entities = {};
  for (const id of Object.keys(states)) entities[id] = { entity_id: id, device_id: "d2", translation_key: keys[id] };
  const calls = [];
  return {
    language: "en",
    states,
    entities,
    devices: { d2: { name: "Washer" } },
    calls,
    callService(domain, service, data) {
      calls.push({ domain, service, data });
      return Promise.resolve();
    },
  };
}

function card(hass) {
  const c = new HomeConnectWasherCard();
  c.setConfig({ device_id: "d2" });
  c.hass = hass;
  c.connectedCallback();
  return c;
}

function click(c, action) {
  const m = c.shadowRoot.innerHTML.match(new RegExp(`<button[^>]*data-action="${action}"[^>]*>`));
  assert.ok(m, `no ${action} button`);
  c._onClick({ composedPath: () => [{ dataset: { action }, disabled: / disabled[ >]/.test(m[0]) }] });
}

const dispatch = (c, type, ev = {}) => {
  for (const fn of c.shadowRoot.listeners[type] || []) fn(ev);
};

beforeEach(() => mock.timers.enable({ apis: ["setTimeout"] }));
afterEach(() => mock.timers.reset());

test("Stop armed then the card leaves the view: back on screen it is disarmed, one tap doesn't stop", () => {
  const hass = mockHass();
  const c = card(hass);
  click(c, "stop");
  assert.match(c.shadowRoot.innerHTML, /Confirm\?/);
  c.disconnectedCallback();
  mock.timers.tick(3500);
  c.connectedCallback();
  assert.doesNotMatch(c.shadowRoot.innerHTML, /Confirm\?/);
  click(c, "stop");
  assert.equal(hass.calls.length, 0, "a single tap must only arm Stop");
});

test("an error shown when the card leaves the view is gone when it comes back", () => {
  const hass = mockHass();
  const c = card(hass);
  c._showError("err_start", { message: "Boom" });
  c._update();
  assert.match(c.shadowRoot.innerHTML, /class="error"/);
  c.disconnectedCallback();
  mock.timers.tick(15000);
  c.connectedCallback();
  assert.doesNotMatch(c.shadowRoot.innerHTML, /class="error"/);
});

test("Stop armed and confirmed without leaving the view still stops the program", () => {
  const hass = mockHass();
  const c = card(hass);
  click(c, "stop");
  click(c, "stop");
  assert.equal(hass.calls.length, 1);
  assert.equal(hass.calls[0].data.entity_id, "button.wm_stop_program");
});

test("a drop-down closed without a change (touch) releases the frozen render", () => {
  const hass = mockHass();
  const c = card(hass);
  const select = { tagName: "SELECT", blur() {} };
  c.shadowRoot.activeElement = select;
  hass.states["sensor.wm_operation_state"] = st("pause", hass.states["sensor.wm_operation_state"].attributes);
  c.hass = { ...hass, states: { ...hass.states } };
  assert.doesNotMatch(c.shadowRoot.innerHTML, /data-action="resume"/, "frozen while the select is focused");
  // The drop-down closes: focus leaves the select, no change event.
  c.shadowRoot.activeElement = null;
  dispatch(c, "focusout", { target: select });
  mock.timers.tick(0);
  assert.match(c.shadowRoot.innerHTML, /data-action="resume"/);
});

test("focus moving from one drop-down to another keeps the render frozen", () => {
  const hass = mockHass();
  const c = card(hass);
  const first = { tagName: "SELECT", blur() {} };
  c.shadowRoot.activeElement = first;
  hass.states["sensor.wm_operation_state"] = st("pause", hass.states["sensor.wm_operation_state"].attributes);
  c.hass = { ...hass, states: { ...hass.states } };
  c.shadowRoot.activeElement = { tagName: "SELECT", blur() {} };
  dispatch(c, "focusout", { target: first });
  mock.timers.tick(0);
  assert.doesNotMatch(c.shadowRoot.innerHTML, /data-action="resume"/);
});

test("attaching the card before its config or hass doesn't throw", () => {
  const c = new HomeConnectWasherCard();
  c.connectedCallback();
  c.disconnectedCallback();
  c.setConfig({ device_id: "d2" });
  c.connectedCallback();
  c.hass = mockHass();
  assert.match(c.shadowRoot.innerHTML, /data-action="stop"/);
});
