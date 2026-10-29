# Changelog

## 1.11.2 - 2026-10-29
### Fixes
- Leaving the view right after tapping Stop no longer leaves the button armed: back on the view it shows Stop again, so a single tap can't stop the program. An error message no longer stays on screen either.
- On touch screens, closing a drop-down without picking anything no longer freezes the progress, state and finish time until the next tap elsewhere.

## 1.11.1 - 2026-10-29
### Fixes
- An option switch whose entity id ends in `_etat` is no longer mistaken for the power switch (it stays in the options).
- Renaming the appliance or switching Home Assistant between 12 h and 24 h now updates the card right away.
- Translations: the Spanish power button reads "Encendido/apagado", the German delayed-start badge is shorter ("Verzögerter Start") so the mini card keeps room for the appliance name, and the German editor uses Home Assistant's "Konnektivität".

### Maintenance
- CI: screenshots checkout no longer falls back to a ref fork PRs cannot resolve; the Chromium download is time-boxed and retried, and the browser deps step fails explicitly after three failed attempts.
- CI: after pushing refreshed screenshots to a pull request, the Screenshots workflow re-runs Lint, Validate and HACS on that commit (via `workflow_dispatch`, which a `GITHUB_TOKEN` push can trigger); Lint gains a `workflow_dispatch` trigger.

## 1.11.0 - 2026-10-28
### Changes
- Spanish translation (cards and visual editor); the editor's language picker offers Español.

## 1.10.0 - 2026-10-28
### Changes
- German translation (cards and visual editor), contributed by domwu0001.

## 1.9.0 - 2026-10-28
### Changes
- Option toggles / selects, Pause, Resume, Stop and the program select now retry and show their errors in the card (like Start) instead of Home Assistant's toast.
- The finish time follows the Home Assistant locale's 12 h / 24 h preference.
- Faster updates: entity role matching and appliance detection are cached instead of being recomputed on every state change in Home Assistant.

### Fixes
- The visual editor's Appliance field shows its label and helper instead of the raw `ed_device_id` key.
- A focused drop-down no longer freezes the card's updates until a click elsewhere: Escape or leaving the card releases it.

### Maintenance
- README: new GIFs of the running, paused, delayed-start and finished animations for both appliances; all screenshots regenerated.
- CI: fork-safe screenshots workflow, release gated on the tests, Dependabot also watches npm.

## 1.8.0 - 2026-10-26
### Changes
- The mini card's progress bar is now built with a template literal instead of string concatenation, matching the rest of the file. No change to the rendered output or behavior.

## 1.7.0 - 2026-10-26
### Changes
- The Options section title has a leading 16px icon, like the other cards' section titles.
- Start / Resume buttons (and the mini card's round play button) are tinted with the primary color instead of filled; Stop keeps its error tint, and its confirm step is a stronger tint with a ring instead of a solid red fill.
- Header geometry: the body starts 8 px under the header (was 10 px); logo 12 px from the card's top and left edges, power / detail button at the right edge as before.

## 1.6.4 - 2026-10-25

### Changes
- Door open: the washer shows its porthole swung open on the empty drum, the dishwasher its lowered door on the loaded racks.

## 1.6.3 - 2026-10-25

### Changes
- Reverted the read-only options shown while a program runs (1.6.2): Home Connect doesn't expose them once a program has started.

## 1.6.2 - 2026-10-25

### Changes
- While a program runs, the options in use are listed read-only (temperature, spin speed… and the switched-on extras); the mini card adds them after the program name.

## 1.6.1 - 2026-10-25

### Fixes
- The illustration, default name and subtitle follow the appliance's own programs: a washing machine shown with the dishwasher card type now gets the washer illustration and its animations.

## 1.6.0 - 2026-10-25

### Changes
- New mini cards `home-connect-dishwasher-mini-card` and `home-connect-washer-mini-card`, like the Roborock mini card: appliance, state, program, progress, alerts and round buttons; the detail button (`zoom`, on by default) unfolds the full card and a click elsewhere folds it back.
- New header like the Roborock card: Home Connect logo on the left (links to home-connect.com, hide it with `show_logo: false`), program as subtitle.
- Appliance illustration next to the state: while a program runs, the washer shakes, its drum tumbles the laundry and bubbles rise, and the dishwasher steams, sprays and lights the floor; the display blinks. A badge marks a paused appliance (pause, breathing), a delayed start (turning clock) and a finished program (check mark drawn in, with sparkles); no animation with reduced motion; the display takes the state color. Progress now shows as a large percentage with the state and finish time. Setting `icon` puts the icon back instead of the illustration.
- New `show_power` option (default `true`, also in the visual editor) to hide the power button, e.g. for a washing machine that can't be turned on / off remotely.

## 1.5.3 - 2026-10-25

### Fixes
- **Start** no longer fails on a momentary refusal from the appliance (`BadRequest`, `WrongOperationState`): the card retries once after 3 seconds, with a disabled "Starting…" button meanwhile. If it still fails, a short translated message shows in the card (technical detail in its tooltip) instead of Home Assistant's raw error; it goes away on the next state change or after 10 seconds.
- While a program is being set on the appliance itself (*Remote control* off), the options section says so and **Load options** is disabled until remote control is back; the card never reloads the options by itself. A failed reload shows a message in the card and the original program is always restored.
- An appliance that refuses to be turned off gets a message in the card instead of a raw error, and its power button stays disabled while it's on; turning it on still works.

### Changes
- New `remote_control` entity override (auto-detected, documented in the README and offered in the editor).

## 1.5.2 - 2026-10-25

### Maintenance
- Lint warnings on the editor and card-picker lookups silenced so an automatic Biome fix cannot give the washer card the dishwasher profile again; duplication checks run on Node 22. Nothing changes for users.

## 1.5.1 - 2026-10-24

### Maintenance
- Deterministic screenshots (fixed clock and time zone), each rendered in a fresh page; duplication checks no longer scan the tests. Nothing changes for users.

## 1.5.0 - 2026-10-24

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

## 1.4.1 - 2026-10-22

### Maintenance
- Tooling only, no functional change: Biome linting, pre-commit and a Lint CI (duplication checks). Card source modernized (optional chaining, template literals), identical behavior.

## 1.4.0 - 2026-10-22

### Changes
- More compact layout with the same information, like the other ha-* cards: 12 px card padding, 36 px header icon, 16 px name and 12 px subtitle, 11 px pills, tighter tiles and sections.
- Appliance icon and power button 40 → 36 px, lower program selector, options and buttons, 4 px progress bar.

## 1.3.3 - 2026-10-21

### Changes
- HACS now asks for Home Assistant 2024.8 or later, the version that brought the sections view the card supports; the README says so under **Prerequisites**.

## 1.3.2 - 2026-10-21

### Maintenance
- Merged branches are deleted automatically (new `cleanup-branches` workflow). Nothing changes for users.

## 1.3.1 - 2026-10-21

### Development
- The built card is no longer committed in `dist/`: CI builds it on every push, and the release workflow builds it and attaches it to the release, which is where HACS downloads it from. Nothing changes for users.

## 1.3.0 - 2026-10-21

### Changes
- State colors come from the Home Assistant theme (`--info-color` running, `--warning-color` paused or action required, `--success-color` finished, `--error-color` error) with the Home Assistant defaults as fallbacks; the Stop button and the open-door chip follow them too.
- Header aligned with the other ha-* cards: 40px badge, name 18px.
- Chips, toggles, fields and the progress bar use the shared sizes and radii (12px pills, 10px fields, 6px bar).

### Development
- The card source moves to `src/home-connect-card.js`; `npm run build` stamps the version from `package.json` into `dist/home-connect-card.js`, and CI checks that `dist/` is up to date.
- `npm run screenshots` renders the README screenshots with mock Home Connect devices.
- Releases are published when `version` in `package.json` has no tag yet.

## 1.2.0 - 2026-10-20

### What's new
- Home Connect logo next to the appliance name.

## 1.1.0 - 2026-10-19

### Fixes
- Program options (intensive zone, brilliance dry, speed perfect, hygiene plus…) no longer disappear when Home Connect hasn't loaded them: they stay visible, greyed out, until they're available.

### What's new
- **Load options** button when no option is loaded yet, for example after a Home Assistant restart. It switches to another program and back, which makes Home Connect send the options.
- New README screenshot of the dishwasher with its program options.

## 1.0.0 - 2026-10-18

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
