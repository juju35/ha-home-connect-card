# Changelog

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
