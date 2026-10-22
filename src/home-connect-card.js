var HOME_CONNECT_CARD_VERSION = '__VERSION__';

// ── i18n ──────────────────────────────────────────────────────────────────────
var HcI18n = {
  fr: {
    dishwasher: 'Lave-vaisselle',
    washer: 'Lave-linge',
    st_inactive: 'Inactif',
    st_ready: 'Prêt',
    st_delayedstart: 'Départ différé',
    st_run: 'En cours',
    st_pause: 'En pause',
    st_actionrequired: 'Action requise',
    st_finished: 'Terminé',
    st_error: 'Erreur',
    st_aborting: 'Annulation',
    st_off: 'Éteint',
    st_unavailable: 'Indisponible',
    door_open: 'Porte ouverte',
    door_closed: 'Porte fermée',
    door_locked: 'Porte verrouillée',
    program: 'Programme',
    no_program: 'Aucun programme',
    ends_at: 'Fin à',
    remaining: 'reste {t}',
    start: 'Démarrer',
    stop: 'Arrêter',
    confirm: 'Confirmer ?',
    pause: 'Pause',
    resume: 'Reprendre',
    power: 'Marche / arrêt',
    options: 'Options',
    options_not_loaded: 'Options non chargées pour ce programme',
    reload_options: 'Charger les options',
    salt: 'Sel presque vide',
    rinse_aid: 'Liquide de rinçage presque vide',
    remote_start_off: 'Démarrage à distance désactivé',
    offline: 'Appareil hors ligne',
    no_device: 'Aucun appareil Home Connect trouvé',
    ed_device: 'Appareil',
    ed_device_helper: 'Appareil de l\'intégration Home Connect',
    ed_name: 'Nom',
    ed_name_helper: 'Laisser vide pour le nom de l\'appareil',
    ed_icon: 'Icône',
    ed_show_program: 'Choix du programme',
    ed_show_controls: 'Boutons de commande',
    ed_show_options: 'Options du programme',
    ed_show_alerts: 'Alertes',
    ed_language: 'Langue',
    ed_language_helper: 'Laisser vide pour suivre la langue de Home Assistant',
    ed_entities: 'Entités (avancé)',
    ed_entities_helper: 'Détectées automatiquement depuis l\'appareil ; à renseigner seulement pour forcer une entité',
    en_operation_state: 'État de fonctionnement',
    en_door: 'Porte',
    en_progress: 'Progression',
    en_finish_time: 'Heure de fin',
    en_selected_program: 'Programme sélectionné',
    en_active_program: 'Programme actif',
    en_power: 'Alimentation',
    en_stop: 'Arrêter le programme',
    en_pause: 'Mettre en pause',
    en_resume: 'Reprendre le programme',
    en_remote_start: 'Démarrage à distance',
  },
  en: {
    dishwasher: 'Dishwasher',
    washer: 'Washing machine',
    st_inactive: 'Inactive',
    st_ready: 'Ready',
    st_delayedstart: 'Delayed start',
    st_run: 'Running',
    st_pause: 'Paused',
    st_actionrequired: 'Action required',
    st_finished: 'Finished',
    st_error: 'Error',
    st_aborting: 'Aborting',
    st_off: 'Off',
    st_unavailable: 'Unavailable',
    door_open: 'Door open',
    door_closed: 'Door closed',
    door_locked: 'Door locked',
    program: 'Program',
    no_program: 'No program',
    ends_at: 'Ends at',
    remaining: '{t} left',
    start: 'Start',
    stop: 'Stop',
    confirm: 'Confirm?',
    pause: 'Pause',
    resume: 'Resume',
    power: 'Power',
    options: 'Options',
    options_not_loaded: 'Options not loaded for this program',
    reload_options: 'Load options',
    salt: 'Salt nearly empty',
    rinse_aid: 'Rinse aid nearly empty',
    remote_start_off: 'Remote start disabled',
    offline: 'Appliance offline',
    no_device: 'No Home Connect appliance found',
    ed_device: 'Appliance',
    ed_device_helper: 'Device from the Home Connect integration',
    ed_name: 'Name',
    ed_name_helper: 'Leave empty to use the device name',
    ed_icon: 'Icon',
    ed_show_program: 'Program picker',
    ed_show_controls: 'Control buttons',
    ed_show_options: 'Program options',
    ed_show_alerts: 'Alerts',
    ed_language: 'Language',
    ed_language_helper: 'Leave empty to follow the Home Assistant language',
    ed_entities: 'Entities (advanced)',
    ed_entities_helper: 'Detected from the device automatically; only set one to override it',
    en_operation_state: 'Operation state',
    en_door: 'Door',
    en_progress: 'Progress',
    en_finish_time: 'Finish time',
    en_selected_program: 'Selected program',
    en_active_program: 'Active program',
    en_power: 'Power',
    en_stop: 'Stop program',
    en_pause: 'Pause program',
    en_resume: 'Resume program',
    en_remote_start: 'Remote start',
  },
};

function hcT(lang, key) {
  var strings = HcI18n[lang] || HcI18n.en;
  return strings[key] || HcI18n.en[key] || key;
}

function hcEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ── Appliance profiles ───────────────────────────────────────────────────────
var HC_STATE_COLORS = {
  run: 'var(--info-color, #039be5)',
  ready: 'var(--info-color, #039be5)',
  delayedstart: '#8e24aa',
  pause: 'var(--warning-color, #ffa600)',
  actionrequired: 'var(--warning-color, #ffa600)',
  finished: 'var(--success-color, #43a047)',
  error: 'var(--error-color, #db4437)',
  aborting: 'var(--error-color, #db4437)',
};

var HC_PROFILES = {
  dishwasher: {
    type: 'home-connect-dishwasher-card',
    icon: 'mdi:dishwasher',
    program_prefix: 'dishcare_dishwasher_program_',
  },
  washer: {
    type: 'home-connect-washer-card',
    icon: 'mdi:washing-machine',
    program_prefix: 'laundry_care_washer_program_',
  },
};

// Roles the card looks for on the device. Each matcher tries the entity registry
// translation_key first, then the entity_id suffix (French and English slugs),
// then attributes, so it works whatever language the entities were created in.
var HC_ROLES = {
  operation_state: { domain: 'sensor', keys: ['operation_state'], id: /(_etat|_operation_state|_state)$/,
    test: (s) => { var o = s.attributes.options || []; return o.indexOf('run') >= 0 && o.indexOf('finished') >= 0; } },
  door: { domain: 'sensor', keys: ['door'], id: /(_porte|_door)$/,
    test: (s) => { var o = s.attributes.options || []; return o.indexOf('open') >= 0 && o.indexOf('closed') >= 0; } },
  progress: { domain: 'sensor', keys: ['program_progress'], id: /progress|progression/,
    test: (s) => s.attributes.unit_of_measurement === '%' },
  finish_time: { domain: 'sensor', keys: ['program_finish_time', 'finish_time'], id: /(finish_time|heure_de_fin)/,
    test: (s) => s.attributes.device_class === 'timestamp' },
  selected_program: { domain: 'select', keys: ['selected_program'], id: /(selected_program|programme_selectionne)$/ },
  active_program: { domain: 'select', keys: ['active_program'], id: /(active_program|programme_actif)$/ },
  power: { domain: 'switch', keys: ['power'], id: /(_power|_alimentation|_etat)$/ },
  stop: { domain: 'button', keys: ['stop_program'], id: /(stop_program|arreter_le_programme)$/ },
  pause: { domain: 'button', keys: ['pause_program'], id: /(pause_program|mettre_en_pause.*)$/ },
  resume: { domain: 'button', keys: ['resume_program'], id: /(resume_program|reprendre_le_programme)$/ },
  remote_start: { domain: 'binary_sensor', keys: ['remote_start', 'remote_start_allowed'], id: /(remote_start|demarrage_a_distance)$/ },
  connectivity: { domain: 'binary_sensor', keys: ['connectivity'], id: /(connectivity|connectivite)$/,
    test: (s) => s.attributes.device_class === 'connectivity' },
  salt: { domain: 'sensor', keys: ['salt_nearly_empty'], id: /(salt_nearly_empty|sel_presque_vide)$/ },
  rinse_aid: { domain: 'sensor', keys: ['rinse_aid_nearly_empty'], id: /(rinse_aid_nearly_empty|liquide_de_rincage_presque_vide)$/ },
};

var HC_OVERRIDABLE = ['operation_state', 'door', 'progress', 'finish_time', 'selected_program',
  'active_program', 'power', 'stop', 'pause', 'resume', 'remote_start'];

function hcDeviceEntities(hass, deviceId) {
  if (!hass?.entities || !deviceId) return [];
  return Object.values(hass.entities).filter((e) => e.device_id === deviceId && !e.hidden && hass.states[e.entity_id]);
}

function hcFindRole(hass, list, role) {
  var m = HC_ROLES[role];
  var inDomain = list.filter((e) => e.entity_id.split('.')[0] === m.domain);
  var hit = inDomain.find((e) => m.keys.indexOf(e.translation_key) >= 0);
  if (!hit && m.id) hit = inDomain.find((e) => m.id.test(e.entity_id));
  if (!hit && m.test) hit = inDomain.find((e) => m.test(hass.states[e.entity_id]));
  return hit ? hit.entity_id : undefined;
}

function hcProgramKind(hass, deviceId) {
  var list = hcDeviceEntities(hass, deviceId);
  for (var i = 0; i < list.length; i++) {
    if (list[i].entity_id.indexOf('select.') !== 0) continue;
    var opts = (hass.states[list[i].entity_id].attributes.options || []).join(' ');
    if (opts.indexOf('dishcare_dishwasher_program') >= 0) return 'dishwasher';
    if (opts.indexOf('laundry_care_washer_program') >= 0) return 'washer';
  }
  return null;
}

function hcFindDevice(hass, kind) {
  if (!hass?.devices) return undefined;
  return Object.keys(hass.devices).find((id) => hcProgramKind(hass, id) === kind);
}

// Fallback label for a Home Connect enum value when HA has no translation for it:
// "laundry_care_washer_enum_type_spin_speed_r_p_m_1200" → "1200 rpm".
function hcHumanize(value) {
  var v = String(value || '');
  var m = v.match(/_g_c_(\d+)$/);
  if (m) return `${m[1]} °C`;
  m = v.match(/_r_p_m_(\d+)$/);
  if (m) return `${m[1]} rpm`;
  v = v.replace(/^.*_program_/, '')
    .replace(/^.*_enum_type_(temperature|spin_speed|vario_perfect|drying_target|[a-z]+)_/, '')
    .replace(/^ul_/, '');
  v = v.replace(/_/g, ' ').trim();
  return v.charAt(0).toUpperCase() + v.slice(1);
}

// Home Connect logo: a blue speech bubble with a white house.
var HC_LOGO = '<svg class="logo" viewBox="0 0 292 292" role="img" aria-label="Home Connect"><title>Home Connect</title>' +
  '<defs><linearGradient id="hc-logo-g" x1="0" y1="0" x2="292" y2="292" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#304ae2"/><stop offset="1" stop-color="#5fc9ff"/></linearGradient></defs>' +
  '<path fill="url(#hc-logo-g)" d="M146 .5A145.5 145.5 0 1 0 215 272L278 285Q288 287 286 277L270 220A145.5 145.5 0 0 0 146 .5Z"/>' +
  '<path fill="#fff" stroke="#fff" stroke-width="8" stroke-linejoin="round" d="M147.5 64L200 108.5V202H95V108.5Z"/></svg>';

// ── Base card ────────────────────────────────────────────────────────────────
class HomeConnectBaseCard extends HTMLElement {
  static get kind() { return 'dishwasher'; }

  static getConfigElement() {
    var el = document.createElement('home-connect-card-editor');
    el.kind = HomeConnectBaseCard.kind;
    return el;
  }

  static getStubConfig(hass) {
    var id = hcFindDevice(hass, HomeConnectBaseCard.kind);
    return id ? { device_id: id } : {};
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = Object.assign({
      show_program: true, show_controls: true, show_options: true, show_alerts: true,
    }, config);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.addEventListener('click', (ev) => this._onClick(ev));
      this.shadowRoot.addEventListener('change', (ev) => this._onChange(ev));
    }
    this._sig = null;
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    // Refresh the remaining time once a minute while the card is on screen.
    this._timer = setInterval(() => { this._sig = null; this._update(); }, 30000);
  }

  disconnectedCallback() {
    clearInterval(this._timer);
  }

  getCardSize() { return 4; }

  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  _lang() {
    var l = (this._config?.language) || (this._hass?.language) || document.documentElement.lang || 'en';
    l = l.split('-')[0];
    return HcI18n[l] ? l : 'en';
  }

  _t(k) { return hcT(this._lang(), k); }

  _deviceId() {
    var hass = this._hass, c = this._config;
    if (c.device_id) return c.device_id;
    if (c.entity && hass.entities?.[c.entity]) return hass.entities[c.entity].device_id;
    return hcFindDevice(hass, this.constructor.kind);
  }

  _resolve() {
    var hass = this._hass, c = this._config;
    var deviceId = this._deviceId();
    var list = hcDeviceEntities(hass, deviceId);
    var over = c.entities || {};
    var ent = {};
    Object.keys(HC_ROLES).forEach((role) => {
      ent[role] = over[role] || hcFindRole(hass, list, role);
    });
    var used = Object.values(ent);
    // Everything else the integration exposes as a switch or select is a program option.
    ent.option_switches = list.map((e) => e.entity_id).filter((id) => id.indexOf('switch.') === 0 && used.indexOf(id) < 0);
    ent.option_selects = list.map((e) => e.entity_id).filter((id) => id.indexOf('select.') === 0 && used.indexOf(id) < 0);
    return { deviceId: deviceId, ent: ent };
  }

  _st(id) { return id && this._hass.states[id]; }

  _val(id) { var s = this._st(id); return s ? s.state : undefined; }

  _avail(id) { var v = this._val(id); return v !== undefined && v !== 'unavailable' && v !== 'unknown'; }

  _fmt(id, value) {
    var s = this._st(id);
    if (!s) return hcHumanize(value);
    var v = value === undefined ? s.state : value;
    if (this._hass.formatEntityState) {
      var out = this._hass.formatEntityState(s, v);
      // Without a translation HA echoes the raw key back.
      if (out && out !== v) return out;
    }
    return hcHumanize(v);
  }

  _entityLabel(id, deviceName) {
    var s = this._st(id);
    var name = (s?.attributes.friendly_name) || id;
    if (deviceName && name.indexOf(deviceName) === 0) name = name.slice(deviceName.length).trim();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  _update() {
    if (!this._config || !this._hass || !this.shadowRoot) return;
    var r = this._resolve();
    var ids = [r.ent.operation_state, r.ent.door, r.ent.progress, r.ent.finish_time, r.ent.selected_program,
      r.ent.active_program, r.ent.power, r.ent.remote_start, r.ent.connectivity, r.ent.salt, r.ent.rinse_aid,
      r.ent.stop, r.ent.pause, r.ent.resume].concat(r.ent.option_switches, r.ent.option_selects);
    var hass = this._hass;
    var sig = JSON.stringify([this._lang(), r.deviceId, this._confirming, this._reloading, ids.map((id) => {
      var s = id && hass.states[id];
      return s ? [id, s.state, s.attributes.options] : null;
    })]);
    if (sig === this._sig) return;
    // Don't rebuild while a dropdown is open in the card.
    var active = this.shadowRoot.activeElement;
    if (active && active.tagName === 'SELECT') return;
    this._sig = sig;
    this._r = r;
    this._render(r);
  }

  _render(r) {
    var c = this._config, ent = r.ent, hass = this._hass;
    var profile = HC_PROFILES[this.constructor.kind];
    var dev = r.deviceId && hass.devices ? hass.devices[r.deviceId] : null;
    var deviceName = dev ? String(dev.name_by_user || dev.name || '').trim() : '';
    var name = c.name || deviceName || this._t(this.constructor.kind);
    var icon = c.icon || profile.icon;

    if (!r.deviceId && !c.entities) {
      this.shadowRoot.innerHTML = `${this._styles()}<ha-card><div class="empty"><ha-icon icon="${icon}"></ha-icon>${this._t('no_device')}</div></ha-card>`;
      return;
    }

    var opState = this._val(ent.operation_state);
    var online = ent.connectivity ? this._val(ent.connectivity) === 'on' : this._avail(ent.operation_state);
    var powerOn = ent.power ? this._val(ent.power) === 'on' : (opState && opState !== 'inactive');
    var state = !online ? 'unavailable' : (!powerOn && (!opState || opState === 'inactive') ? 'off' : (opState || 'off'));
    var running = state === 'run' || state === 'pause' || state === 'delayedstart' || state === 'actionrequired';
    var color = HC_STATE_COLORS[state] || 'var(--disabled-text-color, #9e9e9e)';

    // Program shown: the running one if any, else the selected one.
    var progId = this._avail(ent.active_program) ? ent.active_program : ent.selected_program;
    var progLabel = this._avail(progId) ? this._fmt(progId) : '';

    // Progress and finish time.
    var progress = this._avail(ent.progress) ? Math.max(0, Math.min(100, Number(this._val(ent.progress)))) : null;
    var finish = this._avail(ent.finish_time) ? new Date(this._val(ent.finish_time)) : null;
    if (finish && Number.isNaN(finish.getTime())) finish = null;
    var timeLine = '';
    if (running && finish) {
      var mins = Math.max(0, Math.round((finish.getTime() - Date.now()) / 60000));
      var h = Math.floor(mins / 60), m = mins % 60;
      var left = h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
      var at = finish.toLocaleTimeString(this._lang(), { hour: '2-digit', minute: '2-digit' });
      timeLine = `${this._t('ends_at')} ${at} · ${this._t('remaining').replace('{t}', left)}`;
    }

    var statusText = this._t(`st_${state}`);
    if (statusText === `st_${state}`) statusText = this._fmt(ent.operation_state);

    // Header chips: door + alerts.
    var chips = [];
    var door = this._val(ent.door);
    if (online && door && ['open', 'closed', 'locked'].indexOf(door) >= 0) {
      var dIcon = door === 'open' ? 'mdi:door-open' : (door === 'locked' ? 'mdi:door-closed-lock' : 'mdi:door-closed');
      chips.push(`<span class="chip${door === 'open' ? ' warn' : ''}"><ha-icon icon="${dIcon}"></ha-icon>${this._t(`door_${door}`)}</span>`);
    }
    if (c.show_alerts) {
      [['salt', 'mdi:shaker-outline'], ['rinse_aid', 'mdi:water-alert-outline']].forEach((a) => {
        var v = this._val(ent[a[0]]);
        if (v === 'present' || v === 'on') chips.push(`<span class="chip warn"><ha-icon icon="${a[1]}"></ha-icon>${this._t(a[0])}</span>`);
      });
    }
    if (!online) chips.push(`<span class="chip"><ha-icon icon="mdi:cloud-off-outline"></ha-icon>${this._t('offline')}</span>`);

    // Program picker.
    var programHtml = '';
    if (c.show_program && online && powerOn) {
      if (!running && this._st(ent.selected_program)) {
        var sel = this._st(ent.selected_program);
        var opts = (sel.attributes.options || []).map((o) =>
          `<option value="${hcEsc(o)}"${o === sel.state ? ' selected' : ''}>${hcEsc(this._fmt(ent.selected_program, o))}</option>`).join('');
        var placeholder = this._avail(ent.selected_program) ? '' : `<option value="" selected disabled>${this._t('no_program')}</option>`;
        programHtml = `<label class="field"><span>${this._t('program')}</span><select data-select="${ent.selected_program}">${placeholder}${opts}</select></label>`;
      } else if (progLabel && !running) {
        programHtml = `<div class="field"><span>${this._t('program')}</span><div class="prog">${hcEsc(progLabel)}</div></div>`;
      }
    }

    // Program options: selects (temperature, spin…) and switches (intensive zone, hygiene…).
    var optionsHtml = '';
    // Options can't be changed once a program runs, so they're only shown before starting.
    if (c.show_options && online && powerOn && !running) {
      // Options the selected program doesn't support (or not loaded yet) stay visible, greyed out.
      var optIds = ent.option_selects.concat(ent.option_switches).filter((id) => this._st(id));
      var anyAvail = optIds.some((id) => this._avail(id));
      var selects = ent.option_selects.filter((id) => this._st(id)).map((id) => {
        var s = this._st(id), ok = this._avail(id);
        var o = ok
          ? (s.attributes.options || []).map((v) =>
            `<option value="${hcEsc(v)}"${v === s.state ? ' selected' : ''}>${hcEsc(this._fmt(id, v))}</option>`).join('')
          : '<option selected>—</option>';
        return `<label class="field small"><span>${hcEsc(this._entityLabel(id, deviceName))}</span><select data-select="${id}"${ok ? '' : ' disabled'}>${o}</select></label>`;
      }).join('');
      var toggles = ent.option_switches.filter((id) => this._st(id)).map((id) => {
        var ok = this._avail(id), on = ok && this._val(id) === 'on';
        return '<button class="toggle' + (on ? ' on' : '') + '" data-toggle="' + id + '"' + (ok ? '' : ' disabled') + '>' +
          '<ha-icon icon="' + (on ? 'mdi:checkbox-marked-circle' : 'mdi:checkbox-blank-circle-outline') + '"></ha-icon>' + hcEsc(this._entityLabel(id, deviceName)) + '</button>';
      }).join('');
      // Home Connect only loads options when the selected program changes, so after
      // a Home Assistant restart they all stay unavailable until then.
      var reload = '';
      if (optIds.length && !anyAvail) {
        var canReload = this._avail(ent.selected_program) && (this._st(ent.selected_program).attributes.options || []).length > 1;
        reload = '<div class="reload"><span>' + this._t('options_not_loaded') + '</span>' +
          (canReload ? `<button class="link" data-action="reload_options"${this._reloading ? ' disabled' : ''}><ha-icon icon="mdi:refresh"></ha-icon>${this._t('reload_options')}</button>` : '') + '</div>';
      }
      if (selects || toggles) {
        optionsHtml = '<div class="section"><div class="section-title">' + this._t('options') + '</div>' +
          (selects ? `<div class="grid">${selects}</div>` : '') +
          (toggles ? `<div class="toggles">${toggles}</div>` : '') + reload + '</div>';
      }
    }

    // Controls.
    var controls = '';
    if (c.show_controls && online && powerOn) {
      var btns = [];
      var remoteOk = !ent.remote_start || this._val(ent.remote_start) === 'on';
      if (!running && ent.active_program && this._avail(ent.selected_program)) {
        btns.push(`<button class="btn primary" data-action="start"${remoteOk ? '' : ` disabled title="${this._t('remote_start_off')}"`}><ha-icon icon="mdi:play"></ha-icon>${this._t('start')}</button>`);
      }
      if (state === 'run' && this._avail(ent.pause)) {
        btns.push(`<button class="btn" data-action="pause"><ha-icon icon="mdi:pause"></ha-icon>${this._t('pause')}</button>`);
      }
      if (state === 'pause' && ent.resume && this._val(ent.resume) !== 'unavailable') {
        btns.push(`<button class="btn primary" data-action="resume"><ha-icon icon="mdi:play"></ha-icon>${this._t('resume')}</button>`);
      }
      if (running && ent.stop && this._val(ent.stop) !== 'unavailable') {
        var confirming = this._confirming === 'stop';
        btns.push(`<button class="btn danger${confirming ? ' armed' : ''}" data-action="stop"><ha-icon icon="mdi:stop"></ha-icon>${this._t(confirming ? 'confirm' : 'stop')}</button>`);
      }
      if (btns.length) controls = `<div class="controls">${btns.join('')}</div>`;
      if (!running && !remoteOk && btns.length) controls += `<div class="hint"><ha-icon icon="mdi:information-outline"></ha-icon>${this._t('remote_start_off')}</div>`;
    }

    var powerBtn = ent.power && online
      ? `<button class="power${powerOn ? ' on' : ''}" data-action="power" title="${this._t('power')}" aria-label="${this._t('power')}"><ha-icon icon="mdi:power"></ha-icon></button>`
      : '';

    var subtitle = statusText + (running && progLabel ? ` · ${hcEsc(progLabel)}` : '');

    var progressHtml = '';
    if (running || state === 'finished') {
      var pct = state === 'finished' ? 100 : (progress == null ? 0 : progress);
      progressHtml = '<div class="progress"><div class="bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
        '<div class="progress-info"><span class="pct">' + Math.round(pct) + ' %</span><span>' + hcEsc(timeLine) + '</span></div></div>';
    }

    this.shadowRoot.innerHTML = this._styles(color) + '<ha-card>' +
      '<div class="header">' +
        '<div class="badge' + (state === 'run' ? ' running' : '') + '"><ha-icon icon="' + hcEsc(icon) + '"></ha-icon></div>' +
        '<div class="titles"><div class="name"><span>' + hcEsc(name) + '</span>' + HC_LOGO + '</div><div class="status">' + subtitle + '</div></div>' +
        powerBtn +
      '</div>' +
      (chips.length ? `<div class="chips">${chips.join('')}</div>` : '') +
      progressHtml + programHtml + optionsHtml + controls +
    '</ha-card>';
  }

  _styles(color) {
    return '<style>' +
      ':host { display: block; height: 100%; --hc-color: ' + (color || 'var(--disabled-text-color, #9e9e9e)') + '; }' +
      'ha-card { height: 100%; box-sizing: border-box; padding: 12px; display: flex; flex-direction: column; gap: 10px; }' +
      '.empty { display: flex; align-items: center; gap: 10px; color: var(--secondary-text-color); }' +
      '.header { display: flex; align-items: center; gap: 10px; }' +
      '.badge { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;' +
        ' background: color-mix(in srgb, var(--hc-color) 15%, transparent); color: var(--hc-color); }' +
      '.badge ha-icon { --mdc-icon-size: 24px; }' +
      '.badge.running ha-icon { animation: hc-pulse 2s ease-in-out infinite; }' +
      '@keyframes hc-pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(0.88); opacity: 0.7; } }' +
      '.titles { flex: 1; min-width: 0; }' +
      '.name { display: flex; align-items: center; gap: 6px; font-size: 16px; font-weight: 500; line-height: 1.25; color: var(--primary-text-color); }' +
      '.name span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.name .logo { width: 18px; height: 18px; flex-shrink: 0; }' +
      '.status { font-size: 12px; color: var(--hc-color); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      'button { font: inherit; cursor: pointer; border: none; }' +
      'button:disabled { cursor: default; opacity: 0.5; }' +
      '.power { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.power.on { background: color-mix(in srgb, var(--hc-color) 15%, transparent); color: var(--hc-color); }' +
      '.chips { display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.chip { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 1px 8px 1px 5px; border-radius: 12px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.chip ha-icon { --mdc-icon-size: 13px; }' +
      '.chip.warn { background: color-mix(in srgb, var(--warning-color, #ffa600) 15%, transparent); color: var(--warning-color, #ffa600); }' +
      '.progress { display: flex; flex-direction: column; gap: 4px; }' +
      '.bar { height: 4px; border-radius: 3px; background: var(--secondary-background-color, rgba(128,128,128,0.15)); overflow: hidden; }' +
      '.fill { height: 100%; border-radius: 3px; background: var(--hc-color); transition: width 0.6s ease; }' +
      '.progress-info { display: flex; justify-content: space-between; gap: 8px; font-size: 12px; color: var(--secondary-text-color); }' +
      '.pct { font-weight: 500; color: var(--primary-text-color); }' +
      '.field { display: flex; flex-direction: column; gap: 4px; min-width: 0; }' +
      '.field > span { font-size: 11px; color: var(--secondary-text-color); }' +
      '.prog { font-size: 13px; font-weight: 500; color: var(--primary-text-color); padding: 6px 10px; border-radius: 10px;' +
        ' background: var(--secondary-background-color, rgba(127,127,127,.08)); }' +
      'select { font: inherit; font-size: 13px; color: var(--primary-text-color); padding: 6px 30px 6px 10px; border-radius: 10px; width: 100%;' +
        ' border: 1px solid var(--divider-color, rgba(128,128,128,0.25)); appearance: none; -webkit-appearance: none; cursor: pointer;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.1)) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath fill=\'%23888\' d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E") no-repeat right 8px center / 20px; }' +
      'select:disabled { opacity: 0.6; cursor: default; }' +
      '.field.small select { font-size: 13px; padding: 7px 28px 7px 10px; }' +
      '.section { display: flex; flex-direction: column; gap: 6px; }' +
      '.section-title { font-size: 12px; font-weight: 500; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.04em; }' +
      '.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px, 1fr)); gap: 6px; }' +
      '.toggles { display: flex; flex-wrap: wrap; gap: 6px; }' +
      '.toggle { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 500; padding: 3px 8px 3px 5px; border-radius: 12px;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--secondary-text-color); }' +
      '.toggle ha-icon { --mdc-icon-size: 16px; }' +
      '.toggle:disabled { opacity: 0.45; }' +
      '.reload { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; font-size: 12px; color: var(--secondary-text-color); }' +
      '.link { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 500; padding: 4px 8px; border-radius: 10px; background: none; color: var(--primary-color, #03a9f4); }' +
      '.link ha-icon { --mdc-icon-size: 16px; }' +
      '.toggle.on { background: color-mix(in srgb, var(--primary-color, #03a9f4) 15%, transparent); color: var(--primary-color, #03a9f4); }' +
      '.controls { display: flex; gap: 6px; }' +
      '.btn { flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 13px; font-weight: 500;' +
        ' padding: 7px 10px; border-radius: 10px; background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--primary-text-color); }' +
      '.btn ha-icon { --mdc-icon-size: 18px; }' +
      '.btn.primary { background: var(--primary-color, #03a9f4); color: var(--text-primary-color, #fff); }' +
      '.btn.danger { background: color-mix(in srgb, var(--error-color, #db4437) 15%, transparent); color: var(--error-color, #db4437); }' +
      '.btn.danger.armed { background: var(--error-color, #db4437); color: #fff; }' +
      '.hint { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--secondary-text-color); margin-top: -6px; }' +
      '.hint ha-icon { --mdc-icon-size: 16px; }' +
    '</style>';
  }

  _onClick(ev) {
    var btn = ev.composedPath().find((n) => n.dataset && (n.dataset.action || n.dataset.toggle));
    if (!btn || btn.disabled) return;
    var ent = this._r.ent, hass = this._hass;
    if (btn.dataset.toggle) {
      hass.callService('switch', 'toggle', { entity_id: btn.dataset.toggle });
      return;
    }
    switch (btn.dataset.action) {
      case 'power':
        hass.callService('switch', 'toggle', { entity_id: ent.power });
        break;
      case 'start':
        // Selecting an option on the "active program" select starts it.
        hass.callService('select', 'select_option', { entity_id: ent.active_program, option: this._val(ent.selected_program) });
        break;
      case 'reload_options':
        this._reloadOptions();
        break;
      case 'pause':
        hass.callService('button', 'press', { entity_id: ent.pause });
        break;
      case 'resume':
        hass.callService('button', 'press', { entity_id: ent.resume });
        break;
      case 'stop':
        if (this._confirming !== 'stop') {
          this._confirming = 'stop';
          clearTimeout(this._confirmTimer);
          this._confirmTimer = setTimeout(() => { this._confirming = null; this._update(); }, 3000);
        } else {
          this._confirming = null;
          clearTimeout(this._confirmTimer);
          hass.callService('button', 'press', { entity_id: ent.stop });
        }
        this._update();
        break;
    }
  }

  // Switch to another program and back: that's what makes Home Connect send the options.
  async _reloadOptions() {
    var id = this._r.ent.selected_program, s = this._st(id);
    if (!s || this._reloading) return;
    var current = s.state;
    var other = (s.attributes.options || []).find((o) => o !== current);
    if (!other) return;
    this._reloading = true;
    this._update();
    try {
      await this._hass.callService('select', 'select_option', { entity_id: id, option: other });
      await this._hass.callService('select', 'select_option', { entity_id: id, option: current });
    } finally {
      this._reloading = false;
      this._sig = null;
      this._update();
    }
  }

  _onChange(ev) {
    var el = ev.target;
    if (!el?.dataset?.select) return;
    this._hass.callService('select', 'select_option', { entity_id: el.dataset.select, option: el.value });
    el.blur();
  }
}

class HomeConnectDishwasherCard extends HomeConnectBaseCard {
  static get kind() { return 'dishwasher'; }
}

class HomeConnectWasherCard extends HomeConnectBaseCard {
  static get kind() { return 'washer'; }
}

// ── home-connect-card-editor (visual editor, built on HA's ha-form) ──────────
var HC_EDITOR_DEFAULTS = { show_program: true, show_controls: true, show_options: true, show_alerts: true };

class HomeConnectCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = Object.assign({}, config);
    this._render();
  }

  set hass(hass) {
    var prevLang = this._hass?.language;
    this._hass = hass;
    if (this._form && prevLang === (hass?.language)) {
      this._form.hass = hass;
    } else {
      this._render();
    }
  }

  _lang() {
    var lang = this._hass?.language ? this._hass.language.split('-')[0] : 'en';
    return HcI18n[lang] ? lang : 'en';
  }

  _schema() {
    var t = (k) => hcT(this._lang(), k);
    var kind = this.kind || (this._config.type === 'custom:home-connect-washer-card' ? 'washer' : 'dishwasher');
    var domains = { operation_state: 'sensor', door: 'sensor', progress: 'sensor', finish_time: 'sensor',
      selected_program: 'select', active_program: 'select', power: 'switch', stop: 'button',
      pause: 'button', resume: 'button', remote_start: 'binary_sensor' };
    var roles = HC_OVERRIDABLE.filter((r) => kind === 'washer' || (r !== 'pause' && r !== 'resume'));
    return [
      { name: 'device_id', selector: { device: { integration: 'home_connect' } } },
      {
        type: 'grid', name: '', schema: [
          { name: 'name', selector: { text: {} } },
          { name: 'icon', selector: { icon: {} } },
        ],
      },
      {
        type: 'grid', name: '', schema: [
          { name: 'show_program', selector: { boolean: {} } },
          { name: 'show_controls', selector: { boolean: {} } },
          { name: 'show_options', selector: { boolean: {} } },
          { name: 'show_alerts', selector: { boolean: {} } },
        ],
      },
      {
        name: 'language',
        selector: { select: { mode: 'dropdown', options: [{ value: 'fr', label: 'Français' }, { value: 'en', label: 'English' }] } },
      },
      {
        type: 'expandable', name: 'entities', title: t('ed_entities'), flatten: false,
        schema: roles.map((r) => ({ name: r, selector: { entity: { domain: domains[r] } } })),
      },
    ];
  }

  _render() {
    if (!this._config || !this._hass) return;
    if (!this._form) {
      this._form = document.createElement('ha-form');
      this._form.addEventListener('value-changed', (ev) => this._valueChanged(ev));
      this.appendChild(this._form);
    }
    var lang = this._lang();
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.computeLabel = (s) => {
      if (HC_ROLES[s.name]) return hcT(lang, `en_${s.name}`);
      return hcT(lang, `ed_${s.name}`);
    };
    this._form.computeHelper = (s) => {
      var key = `ed_${s.name}_helper`;
      var txt = hcT(lang, key);
      return txt === key ? undefined : txt;
    };
    this._form.data = Object.assign({}, HC_EDITOR_DEFAULTS, this._config);
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    var value = Object.assign({}, ev.detail.value);
    // Keep the YAML short: drop options left empty or at their default.
    Object.keys(value).forEach((key) => {
      if (value[key] === '' || value[key] === null || value[key] === undefined) delete value[key];
    });
    Object.keys(HC_EDITOR_DEFAULTS).forEach((key) => {
      if (value[key] === HC_EDITOR_DEFAULTS[key]) delete value[key];
    });
    if (value.entities) {
      var e = Object.assign({}, value.entities);
      Object.keys(e).forEach((k) => { if (!e[k]) delete e[k]; });
      if (Object.keys(e).length) value.entities = e; else delete value.entities;
    }
    if (this._config.type) value = Object.assign({ type: this._config.type }, value);
    this._config = value;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: value }, bubbles: true, composed: true }));
  }
}

if (!customElements.get('home-connect-card-editor')) {
  customElements.define('home-connect-card-editor', HomeConnectCardEditor);
}

window.customCards = window.customCards || [];
if (!customElements.get('home-connect-dishwasher-card')) {
  customElements.define('home-connect-dishwasher-card', HomeConnectDishwasherCard);
  window.customCards.push({
    type: 'home-connect-dishwasher-card',
    name: 'Home Connect Dishwasher Card',
    description: 'Dishwasher card for the Home Connect integration (Bosch, Siemens, Neff, Gaggenau)',
    preview: true,
    documentationURL: 'https://github.com/juju35/ha-home-connect-card',
  });
}
if (!customElements.get('home-connect-washer-card')) {
  customElements.define('home-connect-washer-card', HomeConnectWasherCard);
  window.customCards.push({
    type: 'home-connect-washer-card',
    name: 'Home Connect Washer Card',
    description: 'Washing machine card for the Home Connect integration (Bosch, Siemens, Neff, Gaggenau)',
    preview: true,
    documentationURL: 'https://github.com/juju35/ha-home-connect-card',
  });
}

console.info(`%c HOME-CONNECT-CARD %c v${HOME_CONNECT_CARD_VERSION} `, 'color:#fff;background:#1e88e5;font-weight:700', 'color:#1e88e5;background:#fff');
