# ha-home-connect-card

[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![HACS Validation](https://github.com/juju35/ha-home-connect-card/actions/workflows/hacs.yml/badge.svg)](https://github.com/juju35/ha-home-connect-card/actions/workflows/hacs.yml)
[![Validate](https://github.com/juju35/ha-home-connect-card/actions/workflows/validate.yml/badge.svg)](https://github.com/juju35/ha-home-connect-card/actions/workflows/validate.yml)
[![Release](https://img.shields.io/github/v/release/juju35/ha-home-connect-card)](https://github.com/juju35/ha-home-connect-card/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Custom Lovelace cards for Home Assistant's [Home Connect](https://www.home-assistant.io/integrations/home_connect/) integration (Bosch, Siemens, Neff, Gaggenau): **one card per appliance type**, a dishwasher card and a washing machine card.

Pick the appliance, the card finds all its entities by itself.

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-home-connect-card&category=plugin)

| Dishwasher | Washing machine |
|---|---|
| ![Dishwasher card](https://raw.githubusercontent.com/juju35/ha-home-connect-card/main/screenshots/dishwasher.png) | ![Washing machine card](https://raw.githubusercontent.com/juju35/ha-home-connect-card/main/screenshots/washer.png) |

## Features

- Two cards: `home-connect-dishwasher-card` and `home-connect-washer-card`
- Automatic entity discovery from the Home Connect device (works with English or French entity IDs), each entity can be overridden
- Status with color, progress bar, finish time and time left
- Program picker and **Start** button (when remote start is enabled on the appliance), **Pause / Resume** for washers, **Stop** with a confirmation tap
- Program options before starting: temperature, spin speed, Vario Perfect for washers; intensive zone, brilliance dry, speed perfect, hygiene plus for dishwashers… whatever your appliance exposes. Options the selected program doesn't support are greyed out
- Door state, salt and rinse aid alerts
- Visual editor in the dashboard UI (no YAML needed)
- English and French, follows the Home Assistant language
- Light and dark theme compatible
- Single file, no dependencies, HACS-ready

## Prerequisites

- Home Assistant 2024.8 or later with the [Home Connect](https://www.home-assistant.io/integrations/home_connect/) integration set up
- To start a program from Home Assistant, **Remote start** must be enabled on the appliance itself (the card shows a hint when it isn't)

## Installation

### Via HACS (recommended)

Click the button below to add the repository directly:

[![Add to HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=juju35&repository=ha-home-connect-card&category=plugin)

Or manually:

1. Open HACS → **Frontend** → **⋮** → **Custom repositories**
2. Add `https://github.com/juju35/ha-home-connect-card` — Category: **Dashboard** (Lovelace)
3. Search for **Home Connect Card** and install it
4. Clear your browser cache and refresh

HACS registers the dashboard resource for you.

### Manual

1. Download `home-connect-card.js` from the [latest release](https://github.com/juju35/ha-home-connect-card/releases/latest)
2. Copy it to `/config/www/home-connect-card.js`
3. Go to **Settings → Dashboards → Resources** → Add resource:
   - URL: `/local/home-connect-card.js`
   - Type: **JavaScript Module**
4. Clear your browser cache and refresh

## Configuration

### Visual editor

Add the card from the dashboard (**Add card** → **Home Connect Dishwasher Card** or **Home Connect Washer Card**). The first matching appliance is picked automatically; change it with the **Appliance** field, then set the name, icon and the sections to show. The **Entities (advanced)** panel lets you force any entity if auto-detection picks the wrong one. Options left at their default are not written to the YAML.

### Minimal

```yaml
type: custom:home-connect-dishwasher-card
device_id: bad11e7fd00845a2fb485b38c97cf675
```

```yaml
type: custom:home-connect-washer-card
entity: sensor.washing_machine_operation_state
```

Use either `device_id` (what the visual editor writes) or `entity` (any entity of the appliance). With neither, the card uses the first dishwasher / washing machine it finds.

### Full options

```yaml
type: custom:home-connect-washer-card
device_id: 5c3a4c7f80e0aa935477ebca6e7b915b
name: Washing machine
icon: mdi:washing-machine
show_program: true
show_options: true
show_controls: true
show_alerts: true
language: en
entities:
  operation_state: sensor.washing_machine_operation_state
  selected_program: select.washing_machine_selected_program
  active_program: select.washing_machine_active_program
```

### Options reference

| Option | Required | Default | Description |
|---|---|---|---|
| `device_id` | ❌* | Auto | Home Connect device (*or `entity`; the first matching appliance is used if both are missing) |
| `entity` | ❌ | — | Any entity of the appliance, used to find the device |
| `name` | ❌ | Device name | Card title |
| `icon` | ❌ | `mdi:dishwasher` / `mdi:washing-machine` | Card icon |
| `show_program` | ❌ | `true` | Show the program picker |
| `show_options` | ❌ | `true` | Show program options (only before a program starts) |
| `show_controls` | ❌ | `true` | Show Start / Pause / Resume / Stop buttons |
| `show_alerts` | ❌ | `true` | Show salt and rinse aid alerts |
| `language` | ❌ | Auto | Force language: `fr` or `en` (auto-detects from HA settings) |
| `entities` | ❌ | Auto | Override detected entities (see below) |

### Entity overrides

Keys accepted under `entities`:

| Key | Domain | Used for |
|---|---|---|
| `operation_state` | `sensor` | Status (ready, running, finished…) |
| `door` | `sensor` | Door chip |
| `progress` | `sensor` | Progress bar |
| `finish_time` | `sensor` | Finish time and time left |
| `selected_program` | `select` | Program picker |
| `active_program` | `select` | Running program, and Start |
| `power` | `switch` | Power button |
| `stop` | `button` | Stop |
| `pause` / `resume` | `button` | Pause / Resume (washers) |
| `remote_start` | `binary_sensor` | Enables the Start button |

Every other `switch` and `select` of the device is shown as a program option.

## Screenshots

| Dishwasher | Washing machine |
|---|---|
| ![dishwasher](screenshots/dishwasher.png) | ![washer](screenshots/washer.png) |
| ![dishwasher dark](screenshots/dishwasher-dark.png) | ![washer dark](screenshots/washer-dark.png) |
| ![dishwasher with program options](screenshots/dishwasher-options.png) | |

Dark screenshots are in French.

## How it works

The card reads the entity registry to list the entities of the chosen device, then matches each role by its translation key, then by its entity ID (English and French slugs), then by its attributes. Program and option labels use Home Assistant's own translations.

Home Connect only sends program options when the selected program changes, so after a Home Assistant restart they all stay unavailable. The card then shows them greyed out with a **Load options** button, which switches to another program and back to load them.

**Start** selects the chosen program on the *Active program* entity, which is how the Home Connect integration starts a program. **Stop** asks for a second tap within 3 seconds.

## Development

```bash
npm install
npm run build        # stamps the version of package.json into dist/home-connect-card.js
npm run check        # builds and checks the card (run in CI)
npm run screenshots  # renders the cards with mock Home Connect devices into screenshots/
```

`dist/` is not committed: `npm run build` creates it locally, CI builds it on every push, and the release workflow attaches the built file to the release, which is where HACS downloads it from.

### Releasing

1. Bump `version` in `package.json`
2. Add a `## <version>` section at the top of [CHANGELOG.md](CHANGELOG.md)
3. Push to `main`: the **Release** workflow builds the card, creates the tag and the GitHub release with the changelog section as notes, and attaches `home-connect-card.js`

## Translations

The card auto-detects the language from your Home Assistant settings. Currently supported:

| Language | Code |
|---|---|
| English | `en` |
| Français | `fr` |

Contributions for additional languages are welcome!

## License

[MIT](LICENSE)
