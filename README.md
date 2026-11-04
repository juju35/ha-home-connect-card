# ha-smart-appliance-card

[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![HACS Validation](https://github.com/juju35/ha-smart-appliance-card/actions/workflows/hacs.yml/badge.svg)](https://github.com/juju35/ha-smart-appliance-card/actions/workflows/hacs.yml)
[![Validate](https://github.com/juju35/ha-smart-appliance-card/actions/workflows/validate.yml/badge.svg)](https://github.com/juju35/ha-smart-appliance-card/actions/workflows/validate.yml)
[![Lint](https://github.com/juju35/ha-smart-appliance-card/actions/workflows/lint.yml/badge.svg)](https://github.com/juju35/ha-smart-appliance-card/actions/workflows/lint.yml)
[![Release](https://img.shields.io/github/v/release/juju35/ha-smart-appliance-card)](https://github.com/juju35/ha-smart-appliance-card/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/julienstep9)

<p align="center">
  <img src="logos/bosch.svg" alt="Bosch" height="20">&nbsp;&nbsp;
  <img src="logos/siemens.svg" alt="Siemens" height="15">&nbsp;&nbsp;
  <img src="logos/neff.svg" alt="Neff" height="22">&nbsp;&nbsp;
  <img src="logos/gaggenau.svg" alt="Gaggenau" height="14">
  <br><br>
  <img src="logos/miele.svg" alt="Miele" height="20">&nbsp;&nbsp;
  <img src="logos/samsung.svg" alt="Samsung" height="15">&nbsp;&nbsp;
  <img src="logos/lg.svg" alt="LG" height="26">&nbsp;&nbsp;
  <img src="logos/whirlpool.svg" alt="Whirlpool" height="20">&nbsp;&nbsp;
  <img src="logos/kitchenaid.svg" alt="KitchenAid" height="13">
</p>

Animated Lovelace cards for home appliances in Home Assistant: washing machines, tumble dryers, washer-dryers, dishwashers, ovens, microwaves, hobs, coffee machines, cooker hoods, fridges, freezers, wine cabinets and the LG Styler. They work with [Home Connect](https://www.home-assistant.io/integrations/home_connect/), [Miele](https://www.home-assistant.io/integrations/miele/), [SmartThings](https://www.home-assistant.io/integrations/smartthings/), [LG ThinQ](https://www.home-assistant.io/integrations/lg_thinq/), [Whirlpool](https://www.home-assistant.io/integrations/whirlpool/) and [Matter](https://www.home-assistant.io/integrations/matter/).

Pick the appliance: the card works out its type and its brand, and finds all its entities by itself.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-smart-appliance-card&category=plugin)

| <img src="logos/bosch.svg" alt="" height="14"> Dishwasher | <img src="logos/siemens.svg" alt="" height="11"> Washing machine | <img src="logos/miele.svg" alt="" height="14"> Tumble dryer |
|---|---|---|
| ![Dishwasher card](https://raw.githubusercontent.com/juju35/ha-smart-appliance-card/main/screenshots/dishwasher.png) | ![Washing machine card](https://raw.githubusercontent.com/juju35/ha-smart-appliance-card/main/screenshots/washer.png) | ![Tumble dryer card](https://raw.githubusercontent.com/juju35/ha-smart-appliance-card/main/screenshots/dryer.png) |

> Formerly **ha-home-connect-card**. The `home-connect-dishwasher-card`, `home-connect-washer-card` and their mini card types still work in existing dashboards.

## Features

- One card, `smart-appliance-card`, and its compact version `smart-appliance-mini-card` (a detail button unfolds the full card)
- 13 appliance types, each with its own illustration animated by what it is doing: drum turning, laundry tumbling, water spraying, oven glowing, coffee pouring, hood drawing air, frost on a fridge in super mode…
- Type detected from the appliance (its programs, its model or its entities), or set with `kind`
- The appliance's brand next to its title: its logo (Bosch, Siemens, Neff, Gaggenau, Miele, Samsung, LG, Whirlpool, KitchenAid), or a badge with its initial on the header icon for the others (Constructa, Maytag…); main buttons in the brand's colour
- Status with colour, progress bar, finish time and time left, the program step when the integration reports it (spinning, drying…)
- Program picker and **Start** (when remote start is enabled), **Pause / Resume**, **Stop** with a confirmation tap, whatever the integration offers
- Program options before starting, and the settings of appliances without programs (super modes, fan stage…)
- Temperatures of fridges, freezers and wine cabinets, and of ovens while cooking
- Door state, salt and rinse aid alerts, coffee machine bean container, water tank and drip tray alerts
- Visual editor in the dashboard UI (no YAML needed)
- English, French, German, Spanish, Serbian (Cyrillic and Latin), Italian, Dutch, European Portuguese, Polish, Romanian, Danish, Swedish, Bulgarian, Russian, Ukrainian, Hungarian, Slovak, Czech, Slovenian, Latvian and Greek, follows the Home Assistant language
- Light and dark theme compatible
- Single file, no dependencies, HACS-ready

## Supported integrations

| Integration | Appliances | What the cards show |
|---|---|---|
| [Home Connect](https://www.home-assistant.io/integrations/home_connect/) (built in) — Bosch, Siemens, Neff, Gaggenau, Constructa | Dishwashers, washing machines, tumble dryers, washer-dryers, ovens, microwaves, coffee machines, cooker hoods, fridges, freezers, wine cabinets | Status, progress, finish time, program picker with its options, **Start** (remote start enabled), **Pause / Resume**, **Stop**, door, salt and rinse aid alerts, coffee machine alerts, oven temperature, fridge setpoints and super modes, hood fan stage and light |
| [Miele](https://www.home-assistant.io/integrations/miele/) (built in) | Washing machines, tumble dryers, washer-dryers, dishwashers, ovens (steam and combi included), microwaves, hobs, coffee machines, cooker hoods, fridges, freezers, wine cabinets | Status and program phase, program, progress and finish time from the elapsed and remaining times, **Start**, **Pause**, **Stop**, power, door, zone temperatures, super cooling and super freezing |
| [SmartThings](https://www.home-assistant.io/integrations/smartthings/) (built in) — Samsung | Washing machines, tumble dryers, washer-dryers, dishwashers, ovens, cooker hoods, fridges, freezers | Machine and job state, progress, finish time, **Start / Pause / Resume / Stop** through the operating state, dishwasher course picker, door, temperatures, rapid cooling and freezing |
| [LG ThinQ](https://www.home-assistant.io/integrations/lg_thinq/) (built in) — LG | Washing machines, tumble dryers, WashTower and WashCombo, dishwashers, ovens, microwaves, hobs, cooker hoods, fridges, wine cabinets, Styler | Current state and step, progress and finish time, **Start** and **Stop** through the operation mode, power, remote start, door, temperatures, express modes |
| [Whirlpool](https://www.home-assistant.io/integrations/whirlpool/) (built in) — Whirlpool, Maytag, KitchenAid, Consul | Washing machines, tumble dryers, ovens, fridges | Washer and dryer state, finish time and door; oven state, temperature and **Stop** (set `brand` for a Maytag, KitchenAid or Consul: the integration doesn't say) |
| [Matter](https://www.home-assistant.io/integrations/matter/) (built in) | Dishwashers, washing machines, tumble dryers (Matter 1.2+) | Operational state and phase, finish time, **Start / Pause / Resume / Stop**, power, program options (set `kind` when the appliance type can't be told from its entities) |

Air conditioners, purifiers and robot vacuums are left out: they have their own cards.

### Appliance types

Each type is detected by itself; `kind` is the value to set when it can't be (a Matter appliance whose entities don't give it away, for instance).

| Appliance | `kind` | Home Connect | Miele | SmartThings | LG ThinQ | Whirlpool | Matter |
|---|---|---|---|---|---|---|---|
| Dishwasher | `dishwasher` | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Washing machine | `washer` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tumble dryer | `dryer` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Washer-dryer | `washer_dryer` | ✅ | ✅ | ✅ | ✅ | — | — |
| Oven | `oven` | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Microwave | `microwave` | ✅ | ✅ | — | ✅ | — | — |
| Hob | `hob` | — | ✅ | — | ✅ | — | — |
| Coffee machine | `coffee_maker` | ✅ | ✅ | — | — | — | — |
| Cooker hood | `hood` | ✅ | ✅ | ✅ | ✅ | — | — |
| Fridge | `fridge` | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Freezer | `freezer` | ✅ | ✅ | ✅ | — | — | — |
| Wine cabinet | `wine_cooler` | ✅ | ✅ | — | ✅ | — | — |
| LG Styler | `styler` | — | — | — | ✅ | — | — |

## Prerequisites

- Home Assistant 2024.8 or later with one of the [supported integrations](#supported-integrations) set up
- To start a program from Home Assistant, **Remote start** (or the integration's equivalent) must be enabled on the appliance itself (the card shows a hint when it isn't)

## Installation

### Via HACS (recommended)

Click the button below to add the repository directly:

[![Add to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-smart-appliance-card&category=plugin)

Or manually:

1. Open HACS → **⋮** → **Custom repositories**
2. Add `https://github.com/juju35/ha-smart-appliance-card` — Type: **Dashboard**
3. Search for **Smart Appliance Card** and install it
4. Clear your browser cache and refresh

HACS registers the dashboard resource for you.

### Manual

1. Download `smart-appliance-card.js` from the [latest release](https://github.com/juju35/ha-smart-appliance-card/releases/latest)
2. Copy it to `/config/www/smart-appliance-card.js`
3. Go to **Settings → Dashboards → Resources** → Add resource:
   - URL: `/local/smart-appliance-card.js`
   - Type: **JavaScript Module**
4. Clear your browser cache and refresh

### Upgrading from ha-home-connect-card (1.x)

The repository was renamed from `ha-home-connect-card` to `ha-smart-appliance-card` (GitHub redirects the former address, HACS keeps updating it) and the file from `home-connect-card.js` to `smart-appliance-card.js`. HACS may keep installing into the former folder until the repository is added again under its new name, so after the update check that **Settings → Dashboards → ⋮ → Resources** has exactly one resource for the card, pointing to the file that is really installed:

- `/hacsfiles/ha-home-connect-card/smart-appliance-card.js` for an existing install updated in place,
- `/hacsfiles/ha-smart-appliance-card/smart-appliance-card.js` for a new install (or after removing the card from HACS and adding `https://github.com/juju35/ha-smart-appliance-card` as a custom repository),

and remove the former `home-connect-card.js` resource. A resource pointing to a file that isn't there shows `Custom element doesn't exist: smart-appliance-card`. For a manual install, replace the file and the resource URL as above; the releases still carry a `home-connect-card.js` copy for the transition. Dashboards using `custom:home-connect-*-card` keep working: the former types stay registered (see [Legacy card types](#legacy-card-types)).

## Configuration

### Visual editor

Add the card from the dashboard (**Add card** → **Smart Appliance Card**). The first supported appliance is picked automatically; change it with the **Appliance** field, then set the name, icon and the sections to show. **Appliance type** and **Brand** are only needed when the integration doesn't give them away. The **Entities (advanced)** panel lets you force any entity if auto-detection picks the wrong one. Options left at their default are not written to the YAML.

### Minimal

```yaml
type: custom:smart-appliance-card
device_id: bad11e7fd00845a2fb485b38c97cf675
```

```yaml
type: custom:smart-appliance-card
entity: sensor.washing_machine_operation_state
```

### Mini cards

```yaml
type: custom:smart-appliance-mini-card
device_id: bad11e7fd00845a2fb485b38c97cf675
```

The mini card shows the appliance, its state, the program, the progress and finish time, the alerts, and round Start / Pause / Resume and power buttons. The detail button (top right) unfolds the full card with every option; a click anywhere else on the page folds it back. It takes the same options as the full card, which apply once unfolded, plus `zoom`. At its default size in a Sections view (6 columns), the round buttons sit under the text and the status pill shows only its coloured dot, the state being written above the program.

Use either `device_id` (what the visual editor writes) or `entity` (any entity of the appliance). With neither, the card uses the first supported appliance it finds (of the `kind` given, if any).

### Full options

```yaml
type: custom:smart-appliance-card
device_id: 5c3a4c7f80e0aa935477ebca6e7b915b
name: Washing machine
kind: washer
brand: maytag
show_program: true
show_options: true
show_controls: true
show_alerts: true
show_power: true
language: en
entities:
  operation_state: sensor.washing_machine_operation_state
  selected_program: select.washing_machine_selected_program
  active_program: select.washing_machine_active_program
```

### Options reference

| Option | Required | Default | Description |
|---|---|---|---|
| `device_id` | ❌* | Auto | Appliance device (*or `entity`; the first supported appliance is used if both are missing) |
| `entity` | ❌ | — | Any entity of the appliance, used to find the device |
| `name` | ❌ | Device name | Card title |
| `kind` | ❌ | Auto | Appliance type when it can't be detected: `dishwasher`, `washer`, `dryer`, `washer_dryer`, `oven`, `microwave`, `hob`, `coffee_maker`, `hood`, `fridge`, `freezer`, `wine_cooler`, `styler` |
| `brand` | ❌ | Auto | Brand for the badge and button colour when the integration doesn't give it: `bosch`, `siemens`, `neff`, `gaggenau`, `constructa`, `miele`, `samsung`, `lg`, `whirlpool`, `maytag`, `kitchenaid`, `consul` |
| `icon` | ❌ | Illustration | Replaces the appliance illustration with an icon |
| `show_program` | ❌ | `true` | Show the program picker |
| `show_options` | ❌ | `true` | Show program options (only before a program starts) |
| `show_controls` | ❌ | `true` | Show Start / Pause / Resume / Stop buttons |
| `show_alerts` | ❌ | `true` | Show salt, rinse aid and coffee machine alerts |
| `show_power` | ❌ | `true` | Show the power button (turn off for appliances that can't be switched on / off remotely) |
| `zoom` | ❌ | `true` | Mini cards only: detail button at the top right that unfolds the full card (a click elsewhere folds it back) |
| `language` | ❌ | Auto | Force language: `fr`, `en`, `de`, `es`, `sr`, `sr-Latn`, `it`, `nl`, `pt`, `pl`, `ro`, `da`, `sv`, `bg`, `ru`, `uk`, `hu`, `sk`, `cs`, `sl`, `lv` or `el` (auto-detects from HA settings) |
| `entities` | ❌ | Auto | Override detected entities (see below) |

### Entity overrides

Keys accepted under `entities`:

| Key | Domain | Used for |
|---|---|---|
| `operation_state` | `sensor` | Status (ready, running, finished…) |
| `door` | `sensor` or `binary_sensor` | Door chip |
| `progress` | `sensor` | Progress bar |
| `finish_time` | `sensor` | Finish time and time left |
| `selected_program` | `select` | Program picker |
| `active_program` | `select` | Running program, and Start |
| `power` | `switch` | Power button |
| `stop` | `button` | Stop |
| `pause` / `resume` | `button` | Pause / Resume |
| `remote_start` | `binary_sensor` | Enables the Start button |
| `remote_control` | `binary_sensor` | Detects a program being set on the appliance itself |
| `connectivity` | `binary_sensor` | Online / offline state |
| `salt` / `rinse_aid` | `sensor` | Salt and rinse aid alerts (dishwashers) |

Every other `switch` and `select` of the device is shown as a program option (or as a setting, on appliances without programs).

### Legacy card types

`home-connect-dishwasher-card`, `home-connect-washer-card`, `home-connect-dishwasher-mini-card` and `home-connect-washer-mini-card` are kept so that existing dashboards keep working. They are the same card with the appliance type fixed; new dashboards should use `smart-appliance-card`.

## Screenshots

### Animations

While an appliance is at work its illustration comes alive, and each one animates differently: the drum turns, the laundry tumbles, water sprays, the oven glows, coffee pours, the hood draws air, frost sparkles… (the card honours `prefers-reduced-motion` and falls back to a still image). Each brand below shows its appliances at work.

The other states animate the badge on the illustration, the same for every appliance. When a cycle finishes the motion stops, a tick is drawn into the badge and sparkles twinkle around the appliance; paused, the badge breathes in and out (Resume replaces Pause); waiting on a delayed start, the badge becomes a little clock whose hands turn:

| | Dishwasher | Washing machine |
|---|---|---|
| Finished | ![dishwasher finished](screenshots/dishwasher-finished.gif) | ![washer finished](screenshots/washer-finished.gif) |
| Finished, dark | ![dishwasher finished dark](screenshots/dishwasher-finished-dark.gif) | ![washer finished dark](screenshots/washer-finished-dark.gif) |
| Paused | ![dishwasher paused](screenshots/dishwasher-paused.gif) | ![washer paused](screenshots/washer-paused.gif) |
| Paused, dark | ![dishwasher paused dark](screenshots/dishwasher-paused-dark.gif) | ![washer paused dark](screenshots/washer-paused-dark.gif) |
| Delayed start | ![dishwasher delayed start](screenshots/dishwasher-delayed.gif) | ![washer delayed start](screenshots/washer-delayed.gif) |
| Delayed start, dark | ![dishwasher delayed start dark](screenshots/dishwasher-delayed-dark.gif) | ![washer delayed start dark](screenshots/washer-delayed-dark.gif) |

Door open, the dishwasher's door lowered on its racks, the washing machine's porthole swung aside; program options before starting; the mini card unfolded:

| | Light | Dark |
|---|---|---|
| Dishwasher, door open | ![dishwasher door open](screenshots/dishwasher-open.png) | ![dishwasher door open dark](screenshots/dishwasher-open-dark.png) |
| Washing machine, door open | ![washer door open](screenshots/washer-open.png) | ![washer door open dark](screenshots/washer-open-dark.png) |
| Dishwasher program options | ![dishwasher with program options](screenshots/dishwasher-options.png) | ![dishwasher with program options dark](screenshots/dishwasher-options-dark.png) |
| Mini card unfolded | ![washer mini card unfolded](screenshots/washer-mini-zoom.png) | ![washer mini card unfolded dark](screenshots/washer-mini-zoom-dark.png) |

### <img src="logos/bosch.svg" alt="" height="22"> Bosch

Home Connect: a dishwasher mid-cycle, spraying water and glowing on the floor, and a fridge-freezer in super cooling with its two setpoints.

| | Light | Dark |
|---|---|---|
| Dishwasher | ![dishwasher](screenshots/dishwasher.png) | ![dishwasher dark](screenshots/dishwasher-dark.png) |
| Dishwasher, at work | ![dishwasher, at work](screenshots/dishwasher-running.gif) | ![dishwasher, at work dark](screenshots/dishwasher-running-dark.gif) |
| Fridge-freezer | ![fridge-freezer](screenshots/fridge.png) | ![fridge-freezer dark](screenshots/fridge-dark.png) |
| Fridge-freezer, at work | ![fridge-freezer, at work](screenshots/fridge-running.gif) | ![fridge-freezer, at work dark](screenshots/fridge-running-dark.gif) |
| Dishwasher mini card | ![dishwasher mini card](screenshots/dishwasher-mini.png) | ![dishwasher mini card dark](screenshots/dishwasher-mini-dark.png) |
| Fridge-freezer mini card | ![fridge-freezer mini card](screenshots/mini-bosch.png) | ![fridge-freezer mini card dark](screenshots/mini-bosch-dark.png) |

### <img src="logos/siemens.svg" alt="" height="16"> Siemens

Home Connect: a washing machine ready with its program options, and a coffee machine pouring a cappuccino.

| | Light | Dark |
|---|---|---|
| Washing machine | ![washing machine](screenshots/washer.png) | ![washing machine dark](screenshots/washer-dark.png) |
| Washing machine, at work | ![washing machine, at work](screenshots/washer-running.gif) | ![washing machine, at work dark](screenshots/washer-running-dark.gif) |
| Coffee machine | ![coffee machine](screenshots/coffee-machine.png) | ![coffee machine dark](screenshots/coffee-machine-dark.png) |
| Coffee machine, at work | ![coffee machine, at work](screenshots/coffee-machine-running.gif) | ![coffee machine, at work dark](screenshots/coffee-machine-running-dark.gif) |
| Washing machine mini card | ![washing machine mini card](screenshots/washer-mini.png) | ![washing machine mini card dark](screenshots/washer-mini-dark.png) |
| Coffee machine mini card | ![coffee machine mini card](screenshots/mini-siemens.png) | ![coffee machine mini card dark](screenshots/mini-siemens-dark.png) |

### <img src="logos/neff.svg" alt="" height="18"> Neff

Home Connect: an oven on hot air, its cavity temperature as a chip.

| | Light | Dark |
|---|---|---|
| Oven | ![oven](screenshots/oven.png) | ![oven dark](screenshots/oven-dark.png) |
| Oven, at work | ![oven, at work](screenshots/oven-running.gif) | ![oven, at work dark](screenshots/oven-running-dark.gif) |
| Oven mini card | ![oven mini card](screenshots/mini-neff.png) | ![oven mini card dark](screenshots/mini-neff-dark.png) |

### <img src="logos/gaggenau.svg" alt="" height="14"> Gaggenau

Home Connect: a cooker hood venting at stage 2 with its lights on.

| | Light | Dark |
|---|---|---|
| Cooker hood | ![cooker hood](screenshots/hood.png) | ![cooker hood dark](screenshots/hood-dark.png) |
| Cooker hood, at work | ![cooker hood, at work](screenshots/hood-running.gif) | ![cooker hood, at work dark](screenshots/hood-running-dark.gif) |
| Cooker hood mini card | ![cooker hood mini card](screenshots/mini-gaggenau.png) | ![cooker hood mini card dark](screenshots/mini-gaggenau-dark.png) |

### <img src="logos/miele.svg" alt="" height="22"> Miele

Miele integration: a tumble dryer drying (progress from the elapsed and remaining times), a freezer in super freezing and a two-zone wine cabinet with its light on.

| | Light | Dark |
|---|---|---|
| Tumble dryer | ![tumble dryer](screenshots/dryer.png) | ![tumble dryer dark](screenshots/dryer-dark.png) |
| Tumble dryer, at work | ![tumble dryer, at work](screenshots/dryer-running.gif) | ![tumble dryer, at work dark](screenshots/dryer-running-dark.gif) |
| Freezer | ![freezer](screenshots/freezer.png) | ![freezer dark](screenshots/freezer-dark.png) |
| Freezer, at work | ![freezer, at work](screenshots/freezer-running.gif) | ![freezer, at work dark](screenshots/freezer-running-dark.gif) |
| Wine cabinet | ![wine cabinet](screenshots/wine-cabinet.png) | ![wine cabinet dark](screenshots/wine-cabinet-dark.png) |
| Wine cabinet, at work | ![wine cabinet, at work](screenshots/wine-cabinet-running.gif) | ![wine cabinet, at work dark](screenshots/wine-cabinet-running-dark.gif) |
| Tumble dryer mini card | ![tumble dryer mini card](screenshots/mini-miele.png) | ![tumble dryer mini card dark](screenshots/mini-miele-dark.png) |

### <img src="logos/samsung.svg" alt="" height="16"> Samsung

SmartThings: a washing machine rinsing, Pause and Stop sent through its operating state.

| | Light | Dark |
|---|---|---|
| Washing machine | ![washing machine](screenshots/samsung-washer.png) | ![washing machine dark](screenshots/samsung-washer-dark.png) |
| Washing machine, at work | ![washing machine, at work](screenshots/samsung-washer-running.gif) | ![washing machine, at work dark](screenshots/samsung-washer-running-dark.gif) |
| Washing machine mini card | ![washing machine mini card](screenshots/mini-samsung.png) | ![washing machine mini card dark](screenshots/mini-samsung-dark.png) |

### <img src="logos/lg.svg" alt="" height="28"> LG

LG ThinQ: a WashCombo drying (progress from the finish time and total duration), a microwave, a hob and a Styler.

| | Light | Dark |
|---|---|---|
| Washer-dryer | ![washer-dryer](screenshots/washer-dryer.png) | ![washer-dryer dark](screenshots/washer-dryer-dark.png) |
| Washer-dryer, at work | ![washer-dryer, at work](screenshots/washer-dryer-running.gif) | ![washer-dryer, at work dark](screenshots/washer-dryer-running-dark.gif) |
| Microwave | ![microwave](screenshots/microwave.png) | ![microwave dark](screenshots/microwave-dark.png) |
| Microwave, at work | ![microwave, at work](screenshots/microwave-running.gif) | ![microwave, at work dark](screenshots/microwave-running-dark.gif) |
| Hob | ![hob](screenshots/hob.png) | ![hob dark](screenshots/hob-dark.png) |
| Hob, at work | ![hob, at work](screenshots/hob-running.gif) | ![hob, at work dark](screenshots/hob-running-dark.gif) |
| Styler | ![styler](screenshots/styler.png) | ![styler dark](screenshots/styler-dark.png) |
| Styler, at work | ![styler, at work](screenshots/styler-running.gif) | ![styler, at work dark](screenshots/styler-running-dark.gif) |
| Styler mini card | ![styler mini card](screenshots/mini-lg.png) | ![styler mini card dark](screenshots/mini-lg-dark.png) |

### <img src="logos/whirlpool.svg" alt="" height="18"> Whirlpool, Maytag, <img src="logos/kitchenaid.svg" alt="" height="14"> KitchenAid

Whirlpool integration, which doesn't say the brand: `brand: maytag` on a dryer, `brand: kitchenaid` on a wall oven baking, Stop through its button. No progress from this integration: the state stands alone with the finish time.

| | Light | Dark |
|---|---|---|
| Tumble dryer (Maytag) | ![tumble dryer (maytag)](screenshots/maytag-dryer.png) | ![tumble dryer (maytag) dark](screenshots/maytag-dryer-dark.png) |
| Tumble dryer (Maytag), at work | ![tumble dryer (maytag), at work](screenshots/maytag-dryer-running.gif) | ![tumble dryer (maytag), at work dark](screenshots/maytag-dryer-running-dark.gif) |
| Wall oven (KitchenAid) | ![wall oven (kitchenaid)](screenshots/kitchenaid-oven.png) | ![wall oven (kitchenaid) dark](screenshots/kitchenaid-oven-dark.png) |
| Wall oven (KitchenAid), at work | ![wall oven (kitchenaid), at work](screenshots/kitchenaid-oven-running.gif) | ![wall oven (kitchenaid), at work dark](screenshots/kitchenaid-oven-running-dark.gif) |
| Wall oven mini card | ![wall oven mini card](screenshots/mini-whirlpool.png) | ![wall oven mini card dark](screenshots/mini-whirlpool-dark.png) |

## How it works

The card reads the entity registry to list the entities of the chosen device and tells its integration from them. It then matches each role by its translation key, then by its entity ID (English and French slugs), then by its attributes (a door's device class, a timestamp…). Program and option labels use Home Assistant's own translations.

The appliance type comes from what the integration says about the device (Miele's model, LG's device type), else from its Home Connect programs, else from the entities only one kind of appliance has (a fridge's setpoints, a hood's fan stage). Each integration's states are folded into one set (ready, delayed start, running, paused, action required, finished, error), and when the integration reports the current step (rinse, spin, drying…), the card shows it instead of "Running". Commands go through what each integration offers: buttons (Home Connect, Miele, Matter, SmartThings dishwashers) or an operation select (SmartThings, LG ThinQ). The progress is computed from the elapsed and remaining times, or from the finish time and total duration, when the integration has no percentage.

Home Connect only sends program options when the selected program changes, so after a Home Assistant restart they all stay unavailable. The card then shows them greyed out with a **Load options** button, which switches to another program and back to load them. While someone turns the dial on the appliance (*Remote control* off), Home Assistant can't read the options: the card says so and disables the button until remote control is back. It never reloads them by itself, since that changes the program on the appliance. If loading fails, the original program is restored.

With Home Connect, **Start** selects the chosen program on the *Active program* entity, which is how that integration starts a program. Appliances sometimes reject a start for a moment (`BadRequest`, `WrongOperationState`): the card then retries once after 3 seconds, and if it fails again shows a short message in the card instead of Home Assistant's raw error (the technical detail is in its tooltip). **Stop** asks for a second tap within 3 seconds.

Some appliances can't be turned off remotely: after a first refusal, the card says so and keeps the power button disabled while the appliance is on (until the page is reloaded); turning it on still works.

## Development

```bash
npm install
npm run build        # stamps the version of package.json into dist/smart-appliance-card.js and embeds logos/
npm run check        # builds and checks the card (run in CI)
npm run screenshots  # renders the cards (and the animation GIFs, needs ffmpeg) with mock devices into screenshots/
```

Brand logos live in `logos/`, one `<brand>.svg` or `.png` per key of the `brand` option; the build embeds them in the card, which stays a single file. A brand without a file gets the badge with its initial. The logos are the trademarks of their owners, shown only to identify the appliance's brand.

`dist/` is not committed: `npm run build` creates it locally, CI builds it on every push, and the release workflow attaches the built file to the release, which is where HACS downloads it from.

### Releasing

1. Bump `version` in `package.json`
2. Add a `## <version>` section at the top of [CHANGELOG.md](CHANGELOG.md)
3. Push to `main`: the **Release** workflow builds the card, creates the tag and the GitHub release with the changelog section as notes, and attaches `smart-appliance-card.js`

## Translations

The card auto-detects the language from your Home Assistant settings. Currently supported:

| Language | Code |
|---|---|
| English | `en` |
| Français | `fr` |
| Deutsch | `de` |
| Español | `es` |
| Српски | `sr` |
| Srpski (latinica) | `sr-Latn` |
| Italiano | `it` |
| Nederlands | `nl` |
| Português (Portugal), also used for `pt-BR` | `pt` |
| Polski | `pl` |
| Română | `ro` |
| Dansk | `da` |
| Svenska | `sv` |
| Български | `bg` |
| Русский | `ru` |
| Українська | `uk` |
| Magyar | `hu` |
| Slovenčina | `sk` |
| Čeština | `cs` |
| Slovenščina | `sl` |
| Latviešu | `lv` |
| Ελληνικά | `el` |

Contributions for additional languages are welcome!

## License

[MIT](LICENSE)

## Support

If you find this project useful, you can support its development:

<a href="https://buymeacoffee.com/julienstep9"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" height="50"></a>
