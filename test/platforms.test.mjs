import assert from "node:assert/strict";
import { test } from "node:test";
import { loadCard } from "./load.mjs";

const { SmartApplianceCard, SmartApplianceMiniCard, hcKindOf, hcNormState, hcBrand, customElements } = loadCard("smart-appliance-card.js", [
  "SmartApplianceCard",
  "SmartApplianceMiniCard",
  "hcKindOf",
  "hcNormState",
  "hcBrand",
]);

const st = (state, attributes = {}) => ({ state, attributes });
// Calls are recorded from inside the card's sandbox: compare them as plain data.
const plain = (v) => JSON.parse(JSON.stringify(v));

// One device built from [entity_id, state, attributes, registry extras] rows, as an integration exposes it.
function device(platform, devInfo, rows) {
  const states = {};
  const entities = {};
  const calls = [];
  for (const [id, state, attributes = {}, extra = {}] of rows) {
    states[id] = st(state, attributes);
    entities[id] = { entity_id: id, device_id: "a1", platform, ...extra };
  }
  return {
    language: "en",
    states,
    entities,
    devices: { a1: { name: "Appliance", ...devInfo } },
    callService: (domain, service, data) => {
      calls.push([domain, service, data]);
      return Promise.resolve();
    },
    calls,
  };
}

function render(hass, config = {}, Card = SmartApplianceCard) {
  const card = new Card();
  card.setConfig(config);
  card.hass = hass;
  return { card, html: card.shadowRoot.innerHTML };
}

const inMinutes = (m) => new Date(Date.now() + m * 60000).toISOString();

const miele = (status = "in_use") =>
  device("miele", { manufacturer: "Miele", model: "Washing machine" }, [
    ["sensor.washing_machine", status, { options: ["off", "on", "in_use", "pause", "program_ended", "not_connected"] }, { translation_key: "status" }],
    ["sensor.washing_machine_program", "cottons", {}, { translation_key: "program_id" }],
    ["sensor.washing_machine_program_phase", "main_wash", {}, { translation_key: "program_phase" }],
    ["sensor.washing_machine_remaining_time", "30", { unit_of_measurement: "min" }, { translation_key: "remaining_time" }],
    ["sensor.washing_machine_elapsed_time", "90", { unit_of_measurement: "min" }, { translation_key: "elapsed_time" }],
    ["binary_sensor.washing_machine_door", "off", { device_class: "door" }],
    ["button.washing_machine_start", "unknown", {}, { translation_key: "start" }],
    ["button.washing_machine_pause", "unknown", {}, { translation_key: "pause" }],
    ["button.washing_machine_stop", "unknown", {}, { translation_key: "stop" }],
    ["switch.washing_machine_power", "on", {}, { translation_key: "power" }],
  ]);

test("Miele: type from the model, progress from elapsed and remaining time, Pause button pressed", async () => {
  const hass = miele();
  assert.equal(hcKindOf(hass, "a1"), "washer");
  const { card, html } = render(hass);
  assert.match(html, /75<small> %<\/small>/, "90 min elapsed, 30 left");
  assert.match(html, /Main wash/, "the phase says more than Running");
  assert.match(html, /Door closed/);
  assert.match(html, /title="Miele"/, "Miele badge");
  card._send("pause");
  await new Promise((r) => setTimeout(r));
  assert.deepEqual(plain(hass.calls[0]), ["button", "press", { entity_id: "button.washing_machine_pause" }]);
});

test("Miele: paused resumes with Start, not connected is offline", async () => {
  const paused = render(miele("pause")).html;
  assert.match(paused, /data-action="resume"/);
  const off = render(miele("not_connected")).html;
  assert.match(off, /Unavailable/);
});

test("LG ThinQ: type in the model, step as status, Start through the operation select", async () => {
  const hass = device("lg_thinq", { manufacturer: "LGE", model: "DLEX4000 (DEVICE_DRYER)" }, [
    ["sensor.dryer_current_status", "initial", { options: ["power_off", "initial", "drying", "end"] }, { translation_key: "current_state" }],
    ["sensor.dryer_remaining_time", inMinutes(20), { device_class: "timestamp" }, { translation_key: "remain" }],
    ["select.dryer_operation", "stop", { options: ["start", "stop", "power_off"] }, { translation_key: "operation_mode" }],
    ["binary_sensor.dryer_remote_start", "on", {}, { translation_key: "remote_control_enabled" }],
  ]);
  assert.equal(hcKindOf(hass, "a1"), "dryer");
  const { card, html } = render(hass);
  assert.match(html, /data-action="start"/);
  card._start();
  await new Promise((r) => setTimeout(r));
  assert.deepEqual(plain(hass.calls[0]), ["select", "select_option", { entity_id: "select.dryer_operation", option: "start" }]);
  hass.states["sensor.dryer_current_status"] = st("drying", { options: ["power_off", "initial", "drying", "end"] });
  const running = render(hass).html;
  assert.match(running, /class="picture st-run running"/);
  assert.match(running, /data-action="stop"/, "Stop is the select's stop option");
  assert.equal(hcNormState("lg_thinq", "end"), "finished");
  assert.equal(hcNormState("lg_thinq", "power_off"), "off");
});

test("SmartThings: machine and job states, start, pause and stop on the operating state select", async () => {
  const hass = device("smartthings", { manufacturer: "Samsung Electronics", model: "WW90T" }, [
    ["sensor.washer_machine_state", "run", { options: ["pause", "run", "stop"] }, { translation_key: "washer_machine_state" }],
    ["sensor.washer_job_state", "rinse", {}, { translation_key: "washer_job_state" }],
    ["sensor.washer_completion_time", inMinutes(45), { device_class: "timestamp" }, { translation_key: "completion_time" }],
    ["sensor.washer_progress", "40", { unit_of_measurement: "%" }, { translation_key: "washer_progress" }],
    ["select.washer", "run", { options: ["run", "pause", "stop"] }, { translation_key: "operating_state" }],
    ["binary_sensor.washer_remote_control", "on", {}, { translation_key: "remote_control" }],
  ]);
  assert.equal(hcKindOf(hass, "a1"), "washer");
  const { card, html } = render(hass);
  assert.match(html, /40<small> %/);
  assert.match(html, /Rinse/);
  assert.match(html, /title="Samsung"/);
  assert.match(html, /data-action="pause"/);
  card._send("pause");
  await new Promise((r) => setTimeout(r));
  assert.deepEqual(plain(hass.calls[0]), ["select", "select_option", { entity_id: "select.washer", option: "pause" }]);
  assert.equal(hcNormState("smartthings", "stop", "finish"), "finished");
  assert.equal(hcNormState("smartthings", "run", "delay_wash"), "delayedstart");
});

test("Whirlpool: washer cycle steps run, no controls, brand option for a Maytag", () => {
  const hass = device("whirlpool", { manufacturer: "Whirlpool" }, [
    ["sensor.washer_state", "cycle_spinning", {}, { translation_key: "washer_state" }],
    ["sensor.washer_end_time", inMinutes(12), { device_class: "timestamp" }, { translation_key: "end_time" }],
    ["binary_sensor.washer_door", "off", { device_class: "door" }],
  ]);
  assert.equal(hcKindOf(hass, "a1"), "washer");
  const { html } = render(hass, { brand: "maytag" });
  assert.match(html, /class="picture st-run running"/);
  assert.doesNotMatch(html, /data-action="(start|pause|stop)"/);
  assert.match(html, /title="Maytag"/);
  assert.equal(hcNormState("whirlpool", "complete"), "finished");
  assert.equal(hcNormState("whirlpool", "delay_countdown"), "delayedstart");
});

test("Matter: operational state and buttons; the card's kind when nothing gives the type away", async () => {
  const hass = device("matter", { manufacturer: "Acme" }, [
    ["sensor.dishwasher_operational_state", "running", {}, { translation_key: "operational_state" }],
    ["sensor.dishwasher_estimated_end_time", inMinutes(30), { device_class: "timestamp" }, { translation_key: "estimated_end_time" }],
    ["button.dishwasher_pause", "unknown", {}, { translation_key: "pause" }],
    ["button.dishwasher_stop", "unknown", {}, { translation_key: "stop" }],
  ]);
  assert.equal(hcKindOf(hass, "a1"), null);
  const { card, html } = render(hass, { device_id: "a1", kind: "dishwasher" });
  assert.match(html, /mdi:dishwasher/);
  assert.match(html, /data-action="pause"/);
  card._send("stop");
  await new Promise((r) => setTimeout(r));
  assert.deepEqual(plain(hass.calls[0]), ["button", "press", { entity_id: "button.dishwasher_stop" }]);
});

test("Home Connect fridge: no program, setpoints as chips, super mode runs the animation and stays a setting", () => {
  const rows = (superOn) => [
    ["number.fridge_refrigerator_temperature", "4", { unit_of_measurement: "°C" }, { translation_key: "refrigerator_setpoint_temperature" }],
    ["number.fridge_freezer_temperature", "-18", { unit_of_measurement: "°C" }, { translation_key: "freezer_setpoint_temperature" }],
    ["switch.fridge_super_mode", superOn ? "on" : "off", {}, { translation_key: "refrigerator_super_mode" }],
    ["binary_sensor.fridge_connectivity", "on", { device_class: "connectivity" }],
  ];
  const idle = device("home_connect", { manufacturer: "BOSCH", model: "KGN39" }, rows(false));
  assert.equal(hcKindOf(idle, "a1"), "fridge");
  const html = render(idle).html;
  assert.match(html, /mdi:fridge/);
  assert.match(html, /mdi:snowflake/, "the freezer setpoint gets a snowflake");
  assert.match(html, /data-toggle="switch.fridge_super_mode"/, "super mode can be switched from the card");
  assert.doesNotMatch(html, /class="picture[^"]*running/);
  assert.match(html, /title="Bosch"/);
  const busy = render(device("home_connect", { manufacturer: "BOSCH" }, rows(true))).html;
  assert.match(busy, /class="picture st-run running"/);
  assert.match(busy, /Super cooling/);
});

test("Home Connect programs give oven, coffee machine, hood, dryer and washer-dryer apart", () => {
  const kind = (opt) =>
    hcKindOf(device("home_connect", {}, [["select.x_selected_program", opt, { options: [opt] }, { translation_key: "selected_program" }]]), "a1");
  assert.equal(kind("cooking_oven_program_heating_mode_hot_air"), "oven");
  assert.equal(kind("cooking_oven_program_microwave_600_watt"), "microwave");
  assert.equal(kind("consumer_products_coffee_maker_program_beverage_espresso"), "coffee_maker");
  assert.equal(kind("cooking_common_program_hood_venting"), "hood");
  assert.equal(kind("laundry_care_dryer_program_cotton"), "dryer");
  assert.equal(kind("laundry_care_washer_dryer_program_cotton"), "washer_dryer");
});

test("brands: Home Connect manufacturers, LGE and an unknown maker", () => {
  assert.equal(hcBrand({ manufacturer: "SIEMENS" }).name, "Siemens");
  assert.equal(hcBrand({ manufacturer: "LGE" }).name, "LG");
  assert.equal(hcBrand({ manufacturer: "Acme" }).key, "other");
  assert.equal(hcBrand({}), null);
});

test("single card and mini card registered, former Home Connect types still defined", () => {
  for (const t of ["smart-appliance-card", "smart-appliance-mini-card", "home-connect-dishwasher-card", "home-connect-washer-card",
    "home-connect-dishwasher-mini-card", "home-connect-washer-mini-card"]) {
    assert.ok(customElements.get(t), t);
  }
  assert.equal(customElements.get("smart-appliance-mini-card"), SmartApplianceMiniCard);
  assert.deepEqual({ ...SmartApplianceCard.getStubConfig(miele()) }, { device_id: "a1" });
});
