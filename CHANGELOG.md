# Changelog

## 1.6.1

### Fixes
- The illustration, default name and subtitle follow the appliance's own programs: a washing machine shown with the dishwasher card type now gets the washer illustration and its animations.

## 1.6.0

### Changes
- New mini cards `home-connect-dishwasher-mini-card` and `home-connect-washer-mini-card`, like the Roborock mini card: appliance, state, program, progress, alerts and round buttons; the detail button (`zoom`, on by default) unfolds the full card and a click elsewhere folds it back.
- New header like the Roborock card: Home Connect logo on the left (links to home-connect.com, hide it with `show_logo: false`), program as subtitle.
- Appliance illustration next to the state: while a program runs, the washer shakes, its drum tumbles the laundry and bubbles rise, and the dishwasher steams, sprays and lights the floor; the display blinks. A badge marks a paused appliance (pause, breathing), a delayed start (turning clock) and a finished program (check mark drawn in, with sparkles); no animation with reduced motion; the display takes the state color. Progress now shows as a large percentage with the state and finish time. Setting `icon` puts the icon back instead of the illustration.
- New `show_power` option (default `true`, also in the visual editor) to hide the power button, e.g. for a washing machine that can't be turned on / off remotely.

## 1.5.3

### Fixes
- **Start** no longer fails on a momentary refusal from the appliance (`BadRequest`, `WrongOperationState`): the card retries once after 3 seconds, with a disabled "Starting…" button meanwhile. If it still fails, a short translated message shows in the card (technical detail in its tooltip) instead of Home Assistant's raw error; it goes away on the next state change or after 10 seconds.
- While a program is being set on the appliance itself (*Remote control* off), the options section says so and **Load options** is disabled until remote control is back; the card never reloads the options by itself. A failed reload shows a message in the card and the original program is always restored.
- An appliance that refuses to be turned off gets a message in the card instead of a raw error, and its power button stays disabled while it's on; turning it on still works.

### Changes
- New `remote_control` entity override (auto-detected, documented in the README and offered in the editor).

## 1.5.2

### Maintenance
- Lint warnings on the editor and card-picker lookups silenced so an automatic Biome fix cannot give the washer card the dishwasher profile again; duplication checks run on Node 22. Nothing changes for users.

## 1.5.1

### Maintenance
- Deterministic screenshots (fixed clock and time zone), each rendered in a fresh page; duplication checks no longer scan the tests. Nothing changes for users.

## 1.5.0

### Changes
- The visual editor follows the card's `language` option.
- `connectivity`, `salt` and `rinse_aid` entity overrides documented in the README and offered in the editor (salt and rinse aid on the dishwasher card only).

### Fixes
- A washer card added from the card picker gets a washer instead of the first dishwasher, and its editor keeps the `pause` / `resume` overrides.
- The Pause button shows from the start: a button entity never pressed yet (`unknown`) no longer hides it; it still hides when `unavailable`.
- The 30 s refresh only redraws the card while a program with a finish time runs, instead of rebuilding it every 30 s when idle.
- Lighter updates: the appliance's entities are no longer looked up in the whole entity registry on every Home Assistant update.
- The status text and the config values (icon, entity ids) are HTML-escaped.

### Maintenance
- CI hardening: actions pinned by commit SHA, read-only workflow token, monthly Dependabot updates, duplication findings annotated in pull requests.
- Unit tests (`npm test`) run in CI; `package-lock.json` version synced. Nothing changes for users.

## 1.4.1

### Maintenance
- Tooling only, no functional change: Biome linting, pre-commit and a Lint CI (duplication checks). Card source modernized (optional chaining, template literals), identical behavior.

## 1.4.0

### Changes
- More compact layout with the same information, like the other ha-* cards: 12 px card padding, 36 px header icon, 16 px name and 12 px subtitle, 11 px pills, tighter tiles and sections.
- Appliance icon and power button 40 → 36 px, lower program selector, options and buttons, 4 px progress bar.

## 1.3.3

### Changes
- HACS now asks for Home Assistant 2024.8 or later, the version that brought the sections view the card supports; the README says so under **Prerequisites**.

## 1.3.2

### Maintenance
- Merged branches are deleted automatically (new `cleanup-branches` workflow). Nothing changes for users.

## 1.3.1

### Development
- The built card is no longer committed in `dist/`: CI builds it on every push, and the release workflow builds it and attaches it to the release, which is where HACS downloads it from. Nothing changes for users.

## 1.3.0

### Changes
- State colors come from the Home Assistant theme (`--info-color` running, `--warning-color` paused or action required, `--success-color` finished, `--error-color` error) with the Home Assistant defaults as fallbacks; the Stop button and the open-door chip follow them too.
- Header aligned with the other ha-* cards: 40px badge, name 18px.
- Chips, toggles, fields and the progress bar use the shared sizes and radii (12px pills, 10px fields, 6px bar).

### Development
- The card source moves to `src/home-connect-card.js`; `npm run build` stamps the version from `package.json` into `dist/home-connect-card.js`, and CI checks that `dist/` is up to date.
- `npm run screenshots` renders the README screenshots with mock Home Connect devices.
- Releases are published when `version` in `package.json` has no tag yet.

## 1.2.0

### What's new
- Home Connect logo next to the appliance name.

## 1.1.0

### Fixes
- Program options (intensive zone, brilliance dry, speed perfect, hygiene plus…) no longer disappear when Home Connect hasn't loaded them: they stay visible, greyed out, until they're available.

### What's new
- **Load options** button when no option is loaded yet, for example after a Home Assistant restart. It switches to another program and back, which makes Home Connect send the options.
- New README screenshot of the dishwasher with its program options.

## 1.0.0

First public release.

### What's new
- Two cards for the Home Connect integration: `home-connect-dishwasher-card` and `home-connect-washer-card`.
- Pick the appliance once: every entity (state, door, progress, finish time, programs, power, stop/pause/resume, alerts) is found automatically from the device, and any of them can be overridden.
- Status with color, progress bar, finish time and time left while a program runs.
- Program picker and Start button (when remote start is enabled on the appliance), Pause/Resume for washers, Stop with a confirmation tap.
- Program options before starting: temperature, spin speed, Vario Perfect, intensive zone, hygiene and so on, whatever the appliance exposes.
- Door state, salt and rinse aid alerts.
- Visual editor in the dashboard UI, labels in English and French.
- Light and dark theme compatible, installable via HACS.
