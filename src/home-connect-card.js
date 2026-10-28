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
    options_local: 'Réglage en cours sur l\'appareil : options indisponibles',
    starting: 'Démarrage…',
    start_rejected: 'L\'appareil a refusé le démarrage. Vérifiez la porte et le démarrage à distance, puis réessayez.',
    start_failed: 'Le programme n\'a pas pu démarrer.',
    reload_failed: 'Les options n\'ont pas pu être chargées. Réessayez dans un instant.',
    restore_failed: 'Le programme d\'origine n\'a pas pu être rétabli : vérifiez-le sur l\'appareil.',
    power_off_unsupported: 'Cet appareil ne peut pas être éteint à distance.',
    power_failed: 'L\'appareil n\'a pas répondu à la commande marche / arrêt.',
    command_failed: 'L\'appareil a refusé la commande. Réessayez dans un instant.',
    option_failed: 'L\'option n\'a pas pu être modifiée. Réessayez dans un instant.',
    salt: 'Sel presque vide',
    rinse_aid: 'Liquide de rinçage presque vide',
    remote_start_off: 'Démarrage à distance désactivé',
    offline: 'Appareil hors ligne',
    no_device: 'Aucun appareil Home Connect trouvé',
    ed_device_id: 'Appareil',
    ed_device_id_helper: 'Appareil de l\'intégration Home Connect',
    ed_name: 'Nom',
    ed_name_helper: 'Laisser vide pour le nom de l\'appareil',
    ed_icon: 'Icône',
    ed_show_program: 'Choix du programme',
    ed_show_controls: 'Boutons de commande',
    ed_show_options: 'Options du programme',
    ed_show_alerts: 'Alertes',
    ed_show_power: 'Bouton marche / arrêt',
    ed_show_logo: 'Logo Home Connect',
    ed_zoom: 'Bouton détail',
    ed_zoom_helper: 'Bouton en haut à droite qui passe la mini-carte en carte complète et inversement',
    zoom_in: 'Afficher la carte complète',
    zoom_out: 'Revenir à la vue compacte',
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
    en_remote_control: 'Contrôle à distance',
    en_connectivity: 'Connectivité',
    en_salt: 'Sel presque vide',
    en_rinse_aid: 'Liquide de rinçage presque vide',
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
    options_local: 'Being set on the appliance: options unavailable',
    starting: 'Starting…',
    start_rejected: 'The appliance refused to start. Check the door and remote start, then try again.',
    start_failed: 'The program couldn\'t start.',
    reload_failed: 'The options couldn\'t be loaded. Try again in a moment.',
    restore_failed: 'The original program couldn\'t be restored: check it on the appliance.',
    power_off_unsupported: 'This appliance can\'t be turned off remotely.',
    power_failed: 'The appliance didn\'t respond to the power command.',
    command_failed: 'The appliance refused the command. Try again in a moment.',
    option_failed: 'The option couldn\'t be changed. Try again in a moment.',
    salt: 'Salt nearly empty',
    rinse_aid: 'Rinse aid nearly empty',
    remote_start_off: 'Remote start disabled',
    offline: 'Appliance offline',
    no_device: 'No Home Connect appliance found',
    ed_device_id: 'Appliance',
    ed_device_id_helper: 'Device from the Home Connect integration',
    ed_name: 'Name',
    ed_name_helper: 'Leave empty to use the device name',
    ed_icon: 'Icon',
    ed_show_program: 'Program picker',
    ed_show_controls: 'Control buttons',
    ed_show_options: 'Program options',
    ed_show_power: 'Power button',
    ed_show_logo: 'Home Connect logo',
    ed_zoom: 'Detail button',
    ed_zoom_helper: 'Button at the top right that switches the mini card to the full card and back',
    zoom_in: 'Show the full card',
    zoom_out: 'Back to the compact view',
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
    en_remote_control: 'Remote control',
    en_connectivity: 'Connectivity',
    en_salt: 'Salt nearly empty',
    en_rinse_aid: 'Rinse aid nearly empty',
  },
  de: {
    dishwasher: 'Geschirrspüler',
    washer: 'Waschmaschine',
    st_inactive: 'Inaktiv',
    st_ready: 'Bereit',
    st_delayedstart: 'Zeitverzögerter Start',
    st_run: 'Läuft',
    st_pause: 'Pausiert',
    st_actionrequired: 'Aktion erforderlich',
    st_finished: 'Fertig',
    st_error: 'Fehler',
    st_aborting: 'Wird abgebrochen',
    st_off: 'Aus',
    st_unavailable: 'Nicht verfügbar',
    door_open: 'Tür offen',
    door_closed: 'Tür geschlossen',
    door_locked: 'Tür verriegelt',
    program: 'Programm',
    no_program: 'Kein Programm',
    ends_at: 'Endet um',
    remaining: 'Noch {t}',
    start: 'Starten',
    stop: 'Stoppen',
    confirm: 'Bestätigen?',
    pause: 'Pausieren',
    resume: 'Fortsetzen',
    power: 'Ein/Aus',
    options: 'Optionen',
    options_not_loaded: 'Für dieses Programm wurden keine Optionen geladen',
    reload_options: 'Optionen laden',
    options_local: 'Wird am Gerät eingestellt: Optionen nicht verfügbar',
    starting: 'Wird gestartet…',
    start_rejected: 'Das Gerät hat den Start abgelehnt. Überprüfe die Tür und den Fernstart und versuche es erneut.',
    start_failed: 'Das Programm konnte nicht gestartet werden.',
    reload_failed: 'Die Optionen konnten nicht geladen werden. Versuche es in Kürze erneut.',
    restore_failed: 'Das ursprüngliche Programm konnte nicht wiederhergestellt werden. Überprüfe es direkt am Gerät.',
    power_off_unsupported: 'Dieses Gerät kann nicht aus der Ferne ausgeschaltet werden.',
    power_failed: 'Das Gerät hat nicht auf den Ein-/Aus-Befehl reagiert.',
    command_failed: 'Das Gerät hat den Befehl abgelehnt. Versuche es in Kürze erneut.',
    option_failed: 'Die Option konnte nicht geändert werden. Versuche es in Kürze erneut.',
    salt: 'Salz fast leer',
    rinse_aid: 'Klarspüler fast leer',
    remote_start_off: 'Fernstart deaktiviert',
    offline: 'Gerät offline',
    no_device: 'Kein Home-Connect-Gerät gefunden',
    ed_device_id: 'Gerät',
    ed_device_id_helper: 'Gerät aus der Home-Connect-Integration',
    ed_name: 'Name',
    ed_name_helper: 'Leer lassen, um den Gerätenamen zu verwenden',
    ed_icon: 'Symbol',
    ed_show_program: 'Programmauswahl',
    ed_show_controls: 'Steuerungsschaltflächen',
    ed_show_options: 'Programmoptionen',
    ed_show_power: 'Ein-/Aus-Schaltfläche',
    ed_show_logo: 'Home-Connect-Logo',
    ed_zoom: 'Detailansicht-Schaltfläche',
    ed_zoom_helper: 'Schaltfläche oben rechts zum Wechseln zwischen kompakter und vollständiger Kartenansicht',
    zoom_in: 'Vollständige Karte anzeigen',
    zoom_out: 'Zur kompakten Ansicht zurückkehren',
    ed_show_alerts: 'Warnmeldungen',
    ed_language: 'Sprache',
    ed_language_helper: 'Leer lassen, um die in Home Assistant eingestellte Sprache zu verwenden',
    ed_entities: 'Entitäten (erweitert)',
    ed_entities_helper: 'Automatisch anhand des Geräts erkannt; nur festlegen, wenn du eine Entität überschreiben möchtest',
    en_operation_state: 'Betriebsstatus',
    en_door: 'Tür',
    en_progress: 'Fortschritt',
    en_finish_time: 'Endzeit',
    en_selected_program: 'Ausgewähltes Programm',
    en_active_program: 'Aktives Programm',
    en_power: 'Ein/Aus',
    en_stop: 'Programm stoppen',
    en_pause: 'Programm pausieren',
    en_resume: 'Programm fortsetzen',
    en_remote_start: 'Fernstart',
    en_remote_control: 'Fernsteuerung',
    en_connectivity: 'Verbindung',
    en_salt: 'Salz fast leer',
    en_rinse_aid: 'Klarspüler fast leer',
  }
};

function hcT(lang, key) {
  var strings = HcI18n[lang] || HcI18n.en;
  return strings[key] || HcI18n.en[key] || key;
}

function hcEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Service call errors from Home Assistant: a websocket error object ({ code, message }) or an Error.
function hcErrText(err) {
  if (!err) return '';
  return String(err.message || err.error?.message || err.code || err);
}

// Rejections an appliance often sends for a moment (busy, just woken up): worth one retry.
var HC_RETRYABLE = /BadRequest|WrongOperationState|\b40[09]\b/;
var HC_RETRY_DELAY = 3000;
var HC_ERROR_TIMEOUT = 10000;
var HC_NO_POWER_OFF = /does not support turning off|standby/i;
// Appliances that refused to be turned off, remembered for this page only.
var hcNoPowerOff = new Set();

function hcDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  remote_control: { domain: 'binary_sensor', keys: ['remote_control'], id: /(_remote_control|_controle_a_distance)$/ },
  connectivity: { domain: 'binary_sensor', keys: ['connectivity'], id: /(connectivity|connectivite)$/,
    test: (s) => s.attributes.device_class === 'connectivity' },
  salt: { domain: 'sensor', keys: ['salt_nearly_empty'], id: /(salt_nearly_empty|sel_presque_vide)$/ },
  rinse_aid: { domain: 'sensor', keys: ['rinse_aid_nearly_empty'], id: /(rinse_aid_nearly_empty|liquide_de_rincage_presque_vide)$/ },
};

var HC_OVERRIDABLE = ['operation_state', 'door', 'progress', 'finish_time', 'selected_program',
  'active_program', 'power', 'stop', 'pause', 'resume', 'remote_start', 'remote_control', 'connectivity', 'salt', 'rinse_aid'];

// Registry entries grouped by device, built once per `hass.entities` object (it only changes with the registry).
var hcRegistryIndex = new WeakMap();
function hcRegistryByDevice(reg) {
  var index = hcRegistryIndex.get(reg);
  if (!index) {
    index = new Map();
    Object.values(reg).forEach((e) => {
      if (!e.device_id || e.hidden) return;
      if (!index.has(e.device_id)) index.set(e.device_id, []);
      index.get(e.device_id).push(e);
    });
    hcRegistryIndex.set(reg, index);
  }
  return index;
}

function hcDeviceEntities(hass, deviceId) {
  if (!hass?.entities || !deviceId) return [];
  return (hcRegistryByDevice(hass.entities).get(deviceId) || []).filter((e) => hass.states[e.entity_id]);
}

// Role matching for a device, cached per `hass.entities` object like the registry index above:
// the result only depends on the registry and on which entities have a state yet (hence the
// count guard), not on the states themselves, so it isn't redone on every state change.
var hcRoleIndex = new WeakMap();
var HC_NO_ROLES = { count: 0, roles: {}, switches: [], selects: [] };
function hcDeviceRoles(hass, deviceId) {
  if (!hass?.entities || !deviceId) return HC_NO_ROLES;
  var byDevice = hcRoleIndex.get(hass.entities);
  if (!byDevice) hcRoleIndex.set(hass.entities, (byDevice = new Map()));
  var list = hcDeviceEntities(hass, deviceId);
  var cached = byDevice.get(deviceId);
  if (cached && cached.count === list.length) return cached;
  var roles = {};
  Object.keys(HC_ROLES).forEach((role) => { roles[role] = hcFindRole(hass, list, role); });
  var ids = list.map((e) => e.entity_id);
  cached = {
    count: list.length,
    roles: roles,
    switches: ids.filter((id) => id.indexOf('switch.') === 0),
    selects: ids.filter((id) => id.indexOf('select.') === 0),
  };
  byDevice.set(deviceId, cached);
  return cached;
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
    var st = hass.states[list[i].entity_id];
    var opts = ((st?.attributes.options) || []).join(' ');
    if (opts.indexOf('dishcare_dishwasher_program') >= 0) return 'dishwasher';
    if (opts.indexOf('laundry_care_washer_program') >= 0) return 'washer';
  }
  return null;
}

// The device found for a kind — or the miss — is remembered per `hass.devices` object, so a card
// without an appliance doesn't rescan every device on each state change. A miss is still retried
// every 30 s: the select options a kind is detected from may simply not be loaded yet.
var hcFoundDevices = new WeakMap();
var HC_MISS_RETRY = 30000;
function hcFindDevice(hass, kind) {
  if (!hass?.devices) return undefined;
  var found = hcFoundDevices.get(hass.devices);
  if (!found) hcFoundDevices.set(hass.devices, (found = {}));
  var id = found[kind];
  if (id && hass.devices[id] && hcProgramKind(hass, id) === kind) return id;
  if (id === null && Date.now() < found[`retry_${kind}`]) return undefined;
  id = Object.keys(hass.devices).find((d) => hcProgramKind(hass, d) === kind);
  found[kind] = id || null;
  if (!id) found[`retry_${kind}`] = Date.now() + HC_MISS_RETRY;
  return id;
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

var HC_SITE = 'https://www.home-connect.com';

// Appliance illustrations (front view). The state color lights the display; when running the
// washer drum turns and the dishwasher projects its floor light, like the real appliances.
var HC_ART = {
  washer: '<svg viewBox="0 0 80 94" aria-hidden="true">' +
    '<defs><linearGradient id="hc-wb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2e6eb"/></linearGradient>' +
    '<linearGradient id="hc-wr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dfe4ea"/><stop offset="1" stop-color="#97a2ae"/></linearGradient>' +
    '<radialGradient id="hc-wg" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#9edbff"/><stop offset=".55" stop-color="#3b8fe0"/><stop offset="1" stop-color="#1c4c97"/></radialGradient>' +
    '<clipPath id="hc-wc"><circle cx="40" cy="55" r="17"/></clipPath></defs><g class="shake">' +
    '<rect x="10" y="88" width="9" height="4" rx="1.5" fill="#8f9aa6"/><rect x="61" y="88" width="9" height="4" rx="1.5" fill="#8f9aa6"/>' +
    '<rect x="4" y="2" width="72" height="87" rx="9" fill="url(#hc-wb)" stroke="#c3cad2" stroke-width="1.2"/>' +
    '<path d="M4.6 21H75.4" stroke="#c3cad2" stroke-width="1.2"/>' +
    '<rect x="10" y="8" width="17" height="8" rx="2" fill="#fff" stroke="#c3cad2"/><path d="M13 12h11" stroke="#c3cad2" stroke-linecap="round"/>' +
    '<rect x="33" y="8.5" width="17" height="7" rx="2" fill="#1d2632"/><rect class="led" x="35.5" y="11" width="9" height="2" rx="1"/>' +
    '<circle cx="64" cy="12" r="5.2" fill="#fff" stroke="#aeb7c2" stroke-width="1.2"/><path d="M64 12V8.6" stroke="#7d8894" stroke-width="1.4" stroke-linecap="round"/>' +
    '<circle cx="40" cy="55" r="25" fill="url(#hc-wr)"/><circle cx="40" cy="55" r="21" fill="#eef2f6"/><circle cx="40" cy="55" r="17" fill="url(#hc-wg)"/>' +
    '<g clip-path="url(#hc-wc)"><path class="wave" d="M14 58q6.5-4 13 0t13 0 13 0 13 0V80H14Z" fill="#7fd0ff" opacity=".55"/>' +
      '<g class="drum"><circle cx="33" cy="61" r="5.5" fill="#ff8a65" opacity=".9"/><circle cx="46" cy="63" r="4.5" fill="#fff59d" opacity=".9"/>' +
      '<circle cx="41" cy="47" r="3.5" fill="#ffffff" opacity=".55"/><circle cx="31" cy="50" r="3" fill="#80cbc4" opacity=".9"/><circle cx="40" cy="55" r="12" fill="none" stroke="#fff" stroke-opacity=".25" stroke-dasharray="2 4"/></g></g>' +
    '<g class="bubbles"><circle cx="34" cy="62" r="1.6"/><circle cx="44" cy="64" r="1.2"/><circle cx="39" cy="60" r="1"/></g>' +
    '<path d="M28 44a16 16 0 0 1 12-6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>' +
    '<rect x="62.5" y="50" width="3" height="10" rx="1.5" fill="#aeb7c2"/></g></svg>',
  dishwasher: '<svg viewBox="0 0 80 94" aria-hidden="true">' +
    '<defs><linearGradient id="hc-db" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f8fa"/><stop offset=".6" stop-color="#e3e7ec"/><stop offset="1" stop-color="#cfd5dc"/></linearGradient>' +
    '<linearGradient id="hc-dp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#36404d"/><stop offset="1" stop-color="#1b222b"/></linearGradient>' +
    '<linearGradient id="hc-dh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6f8"/><stop offset="1" stop-color="#9aa5b1"/></linearGradient>' +
    '<radialGradient id="hc-df" cx=".5" cy=".5" r=".5"><stop offset="0" class="floor-c" stop-opacity=".55"/><stop offset="1" class="floor-c" stop-opacity="0"/></radialGradient></defs>' +
    '<ellipse class="floor" cx="40" cy="90" rx="30" ry="4" fill="url(#hc-df)"/>' +
    '<g class="steam" fill="none" stroke="#b0bec5" stroke-width="2.2" stroke-linecap="round">' +
      '<path d="M26 0q-3-4 0-8t0-8"/><path d="M40 0q-3-4 0-8t0-8"/><path d="M54 0q-3-4 0-8t0-8"/></g>' +
    '<rect x="4" y="2" width="72" height="86" rx="7" fill="url(#hc-db)" stroke="#bac2cb" stroke-width="1.2"/>' +
    '<path d="M11 2h58a7 7 0 0 1 7 7v9H4V9a7 7 0 0 1 7-7Z" fill="url(#hc-dp)"/>' +
    '<rect x="10" y="7.5" width="16" height="6" rx="2" fill="#0d1218"/><rect class="led" x="12" y="9.5" width="8" height="2" rx="1"/>' +
    '<circle cx="45" cy="10.5" r="1.6" fill="#7d8894"/><circle cx="52" cy="10.5" r="1.6" fill="#7d8894"/><circle cx="59" cy="10.5" r="1.6" fill="#7d8894"/><circle cx="67" cy="10.5" r="2.2" fill="none" stroke="#9aa5b1" stroke-width="1.2"/>' +
    '<rect x="14" y="23" width="52" height="5" rx="2.5" fill="url(#hc-dh)" stroke="#9aa5b1" stroke-width=".8"/>' +
    '<rect x="10" y="33" width="60" height="44" rx="4" fill="none" stroke="#fff" stroke-opacity=".75"/>' +
    '<path d="M18 36l20 38M30 36l20 38" stroke="#fff" stroke-width="5" stroke-opacity=".22" stroke-linecap="round"/>' +
    '<g class="drops" fill="#64b5f6"><circle cx="24" cy="50" r="1.4"/><circle cx="40" cy="44" r="1.4"/><circle cx="56" cy="50" r="1.4"/>' +
      '<circle cx="32" cy="62" r="1.2"/><circle cx="48" cy="62" r="1.2"/></g>' +
    '<rect x="4.6" y="80" width="70.8" height="7.4" rx="0" fill="#c3cad2" opacity=".6"/></svg>',
};

// Door open: the washer's porthole swung aside on the empty drum, the dishwasher's door lowered on its racks.
var HC_ART_OPEN = {
  washer: '<svg viewBox="0 0 80 94" aria-hidden="true">' +
    '<defs><linearGradient id="hc-wbo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2e6eb"/></linearGradient>' +
    '<radialGradient id="hc-wd" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#cfd6de"/><stop offset=".7" stop-color="#8d98a5"/><stop offset="1" stop-color="#5d6874"/></radialGradient>' +
    '<linearGradient id="hc-wro" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#97a2ae"/><stop offset="1" stop-color="#e3e8ee"/></linearGradient>' +
    '<linearGradient id="hc-wgo" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f6fc0"/><stop offset="1" stop-color="#9edbff"/></linearGradient></defs>' +
    '<rect x="10" y="88" width="9" height="4" rx="1.5" fill="#8f9aa6"/><rect x="61" y="88" width="9" height="4" rx="1.5" fill="#8f9aa6"/>' +
    '<rect x="4" y="2" width="72" height="87" rx="9" fill="url(#hc-wbo)" stroke="#c3cad2" stroke-width="1.2"/>' +
    '<path d="M4.6 21H75.4" stroke="#c3cad2" stroke-width="1.2"/>' +
    '<rect x="10" y="8" width="17" height="8" rx="2" fill="#fff" stroke="#c3cad2"/><path d="M13 12h11" stroke="#c3cad2" stroke-linecap="round"/>' +
    '<rect x="33" y="8.5" width="17" height="7" rx="2" fill="#1d2632"/><rect class="led" x="35.5" y="11" width="9" height="2" rx="1"/>' +
    '<circle cx="64" cy="12" r="5.2" fill="#fff" stroke="#aeb7c2" stroke-width="1.2"/><path d="M64 12V8.6" stroke="#7d8894" stroke-width="1.4" stroke-linecap="round"/>' +
    '<circle cx="40" cy="55" r="22" fill="#d5dbe2"/><circle cx="40" cy="55" r="19" fill="url(#hc-wd)"/>' +
    '<g fill="#5d6874" opacity=".55"><circle cx="40" cy="44" r="1"/><circle cx="31" cy="50" r="1"/><circle cx="49" cy="50" r="1"/><circle cx="34" cy="61" r="1"/><circle cx="46" cy="61" r="1"/><circle cx="40" cy="66" r="1"/></g>' +
    '<path d="M40 38l3 6h-6Z" fill="#aeb7c2"/>' +
    '<ellipse cx="11" cy="55" rx="8" ry="24" fill="url(#hc-wro)" stroke="#8f9aa6" stroke-width=".8"/>' +
    '<ellipse cx="11.5" cy="55" rx="5" ry="18" fill="url(#hc-wgo)" opacity=".85"/>' +
    '<path d="M9.5 42q-1.5 6 0 12" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>' +
    '<rect x="16.5" y="52" width="3" height="7" rx="1.5" fill="#aeb7c2"/></svg>',
  dishwasher: '<svg viewBox="0 0 80 94" aria-hidden="true">' +
    '<defs><linearGradient id="hc-dbo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f8fa"/><stop offset=".6" stop-color="#e3e7ec"/><stop offset="1" stop-color="#cfd5dc"/></linearGradient>' +
    '<linearGradient id="hc-dpo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#36404d"/><stop offset="1" stop-color="#1b222b"/></linearGradient>' +
    '<linearGradient id="hc-dio" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7d8894"/><stop offset="1" stop-color="#b6bfc9"/></linearGradient>' +
    '<linearGradient id="hc-ddo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9d0d8"/><stop offset="1" stop-color="#eef1f4"/></linearGradient></defs>' +
    '<rect x="4" y="2" width="72" height="62" rx="7" fill="url(#hc-dbo)" stroke="#bac2cb" stroke-width="1.2"/>' +
    '<path d="M11 2h58a7 7 0 0 1 7 7v9H4V9a7 7 0 0 1 7-7Z" fill="url(#hc-dpo)"/>' +
    '<rect x="10" y="7.5" width="16" height="6" rx="2" fill="#0d1218"/><rect class="led" x="12" y="9.5" width="8" height="2" rx="1"/>' +
    '<circle cx="45" cy="10.5" r="1.6" fill="#7d8894"/><circle cx="52" cy="10.5" r="1.6" fill="#7d8894"/><circle cx="59" cy="10.5" r="1.6" fill="#7d8894"/><circle cx="67" cy="10.5" r="2.2" fill="none" stroke="#9aa5b1" stroke-width="1.2"/>' +
    '<rect x="9" y="20" width="62" height="44" fill="url(#hc-dio)"/>' +
    '<path d="M11 36h58M11 58h58" stroke="#e3e7ec" stroke-width="1.4"/>' +
    '<g fill="#ffffff" stroke="#b6bfc9" stroke-width=".6"><rect x="16" y="27" width="7" height="9" rx="2"/><rect x="27" y="27" width="7" height="9" rx="2"/><rect x="38" y="25" width="5" height="11" rx="2.5"/><rect x="47" y="27" width="7" height="9" rx="2"/><rect x="58" y="25" width="5" height="11" rx="2.5"/></g>' +
    '<g fill="#ffffff" stroke="#b6bfc9" stroke-width=".6"><ellipse cx="17" cy="49" rx="3" ry="9.5"/><ellipse cx="24" cy="49" rx="3" ry="9.5"/><ellipse cx="31" cy="49" rx="3" ry="9.5"/><ellipse cx="38" cy="49" rx="3" ry="9.5"/>' +
      '<ellipse cx="50" cy="51" rx="2.6" ry="7.5"/><ellipse cx="56" cy="51" rx="2.6" ry="7.5"/><ellipse cx="62" cy="51" rx="2.6" ry="7.5"/></g>' +
    '<path d="M4 64h72l3.5 22H.5Z" fill="url(#hc-ddo)" stroke="#bac2cb" stroke-width="1.2" stroke-linejoin="round"/>' +
    '<path d="M9 67h62l2.4 15H6.6Z" fill="#dfe4ea" stroke="#fff" stroke-opacity=".8"/>' +
    '<rect x="14" y="86.5" width="52" height="4" rx="2" fill="#aab4bf"/></svg>',
};

// State badge over the illustration: paused, waiting for a delayed start, or done.
var HC_STATE_BADGE = {
  pause: '<svg viewBox="0 0 24 24"><rect x="7" y="6" width="3.6" height="12" rx="1.2"/><rect x="13.4" y="6" width="3.6" height="12" rx="1.2"/></svg>',
  delayedstart: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5" fill="none" stroke="#fff" stroke-width="2"/>' +
    '<path class="hand-h" d="M12 12V8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' +
    '<path class="hand-m" d="M12 12h4" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
  finished: '<svg viewBox="0 0 24 24"><path class="check" d="M6.5 12.5l3.6 3.6 7.4-8" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
// Sparkles around a finished appliance.
var HC_SPARKLES = '<svg class="sparkles" viewBox="0 0 80 94" aria-hidden="true">' +
  '<path d="M8 14l1.6 4 4 1.6-4 1.6L8 25.2l-1.6-4-4-1.6 4-1.6Z"/><path d="M72 30l1.2 3 3 1.2-3 1.2L72 38.4l-1.2-3-3-1.2 3-1.2Z"/>' +
  '<path d="M68 2l1 2.4 2.4 1-2.4 1L68 8.8l-1-2.4-2.4-1 2.4-1Z"/></svg>';

// The illustration with its state: animated while running, a badge when paused, delayed or done.
var hcPicture = (art, state, illustrated) => {
  var badge = illustrated && HC_STATE_BADGE[state]
    ? `<span class="pbadge">${HC_STATE_BADGE[state]}</span>${state === 'finished' ? HC_SPARKLES : ''}` : '';
  return `<div class="picture st-${hcEsc(state)}${state === 'run' ? ' running' : ''}">${art}${badge}</div>`;
};

// ── Base card ────────────────────────────────────────────────────────────────
class HomeConnectBaseCard extends HTMLElement {
  static get kind() { return 'dishwasher'; }

  static getConfigElement() {
    var el = document.createElement('home-connect-card-editor');
    // biome-ignore lint/complexity/noThisInStatic: subclasses override static kind
    el.kind = this.kind;
    return el;
  }

  static getStubConfig(hass) {
    // biome-ignore lint/complexity/noThisInStatic: subclasses override static kind
    var id = hcFindDevice(hass, this.kind);
    return id ? { device_id: id } : {};
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = Object.assign({
      show_program: true, show_controls: true, show_options: true, show_alerts: true, show_power: true, show_logo: true,
    }, config);
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.addEventListener('click', (ev) => this._onClick(ev));
      this.shadowRoot.addEventListener('change', (ev) => this._onChange(ev));
      // A focused <select> blocks re-renders (see _update): Escape or leaving the card releases it.
      var unfreeze = () => {
        var a = this.shadowRoot.activeElement;
        if (a && a.tagName === 'SELECT') {
          a.blur();
          this._update();
        }
      };
      this.shadowRoot.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') unfreeze(); });
      this.addEventListener('mouseleave', unfreeze);
    }
    this._sig = null;
    this._update();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  connectedCallback() {
    // Refresh the remaining time every 30 s while a program with a finish time runs and the card is on screen.
    clearInterval(this._timer);
    this._timer = setInterval(() => {
      if (!this._ticking) return;
      this._sig = null;
      this._update();
    }, 30000);
  }

  disconnectedCallback() {
    clearInterval(this._timer);
    clearTimeout(this._confirmTimer);
    clearTimeout(this._errorTimer);
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
    var deviceId = this._deviceId();
    var found = hcDeviceRoles(this._hass, deviceId);
    var over = this._config.entities || {};
    var ent = {};
    Object.keys(HC_ROLES).forEach((role) => {
      ent[role] = over[role] || found.roles[role];
    });
    var used = Object.values(ent);
    // Everything else the integration exposes as a switch or select is a program option.
    ent.option_switches = found.switches.filter((id) => used.indexOf(id) < 0);
    ent.option_selects = found.selects.filter((id) => used.indexOf(id) < 0);
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
      r.ent.active_program, r.ent.power, r.ent.remote_start, r.ent.remote_control, r.ent.connectivity, r.ent.salt, r.ent.rinse_aid,
      r.ent.stop, r.ent.pause, r.ent.resume].concat(r.ent.option_switches, r.ent.option_selects);
    var hass = this._hass;
    var states = JSON.stringify(ids.map((id) => {
      var s = id && hass.states[id];
      return s ? [id, s.state, s.attributes.options] : null;
    }));
    // An error message goes away as soon as the appliance's state changes.
    if (this._error) {
      if (this._error.states == null) this._error.states = states;
      else if (this._error.states !== states) this._clearError();
    }
    var sig = JSON.stringify([this._lang(), r.deviceId, this._zoomed, this._confirming, this._reloading, this._starting,
      this._error ? [this._error.key, this._error.detail] : null, hcNoPowerOff.has(this._powerKey(r)), states]);
    if (sig === this._sig) return;
    // Don't rebuild while a dropdown is open in the card.
    var active = this.shadowRoot.activeElement;
    if (active && active.tagName === 'SELECT') return;
    this._sig = sig;
    this._r = r;
    this._render(r);
  }

  _powerKey(r) { return r.deviceId || r.ent.power; }

  // Overridden by the mini cards.
  _compact() { return false; }

  _zoomButton() { return ''; }

  // "Ends at 10:32 · 48 min left", shared between the full and mini layouts. The 12 h / 24 h
  // preference follows the Home Assistant locale; the card language only picks the words.
  _timeLine(finish) {
    var mins = Math.max(0, Math.round((finish.getTime() - Date.now()) / 60000));
    var h = Math.floor(mins / 60), m = mins % 60;
    var left = h ? `${h} h ${String(m).padStart(2, '0')}` : `${m} min`;
    var opts = { hour: '2-digit', minute: '2-digit' };
    var tf = this._hass.locale?.time_format;
    if (tf === '12' || tf === '24') opts.hour12 = tf === '12';
    var at = finish.toLocaleTimeString(this._lang(), opts);
    return `${this._t('ends_at')} ${at} · ${this._t('remaining').replace('{t}', left)}`;
  }

  // Start / Pause / Resume, drawn as labelled bars (full card) or round icons (mini card).
  _actionButtons(ent, state, running, round) {
    var btn = (action, icon, labelKey, primary, disabled, title) => {
      var label = this._t(labelKey);
      return round
        ? `<button class="round${primary ? ' primary' : ''}" data-action="${action}" title="${hcEsc(title || label)}" aria-label="${hcEsc(label)}"${disabled ? ' disabled' : ''}><ha-icon icon="${icon}"></ha-icon></button>`
        : `<button class="btn${primary ? ' primary' : ''}" data-action="${action}"${disabled ? ' disabled' : ''}${title ? ` title="${hcEsc(title)}"` : ''}><ha-icon icon="${icon}"></ha-icon>${hcEsc(label)}</button>`;
    };
    var btns = [];
    var remoteOk = !ent.remote_start || this._val(ent.remote_start) === 'on';
    if (!running && ent.active_program && this._avail(ent.selected_program)) {
      btns.push(btn('start', 'mdi:play', this._starting ? 'starting' : 'start', true,
        !remoteOk || this._starting || this._reloading, remoteOk ? '' : this._t('remote_start_off')));
    }
    // A button entity stays `unknown` until first pressed: only `unavailable` hides it.
    var pauseVal = this._val(ent.pause);
    if (state === 'run' && ent.pause && pauseVal !== undefined && pauseVal !== 'unavailable') {
      btns.push(btn('pause', 'mdi:pause', 'pause', false, false, ''));
    }
    if (state === 'pause' && ent.resume && this._val(ent.resume) !== 'unavailable') {
      btns.push(btn('resume', 'mdi:play', 'resume', true, false, ''));
    }
    return { btns: btns, remoteOk: remoteOk };
  }

  _render(r) {
    var c = this._config, ent = r.ent, hass = this._hass;
    // The appliance's own programs decide the look, whichever card type was picked for it.
    var kind = (r.deviceId && hcProgramKind(hass, r.deviceId)) || this.constructor.kind;
    var profile = HC_PROFILES[kind];
    var dev = r.deviceId && hass.devices ? hass.devices[r.deviceId] : null;
    var deviceName = dev ? String(dev.name_by_user || dev.name || '').trim() : '';
    var name = c.name || deviceName || this._t(kind);
    var icon = c.icon || profile.icon;
    this._ticking = false;

    if (!r.deviceId && !c.entities) {
      this.shadowRoot.innerHTML = `${this._styles()}<ha-card><div class="empty"><ha-icon icon="${hcEsc(icon)}"></ha-icon>${this._t('no_device')}</div></ha-card>`;
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
    var timeLine = running && finish ? this._timeLine(finish) : '';
    this._ticking = !!(running && finish);

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
        programHtml = `<label class="field"><span>${this._t('program')}</span><select data-select="${hcEsc(ent.selected_program)}">${placeholder}${opts}</select></label>`;
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
        return `<label class="field small"><span>${hcEsc(this._entityLabel(id, deviceName))}</span><select data-select="${hcEsc(id)}"${ok ? '' : ' disabled'}>${o}</select></label>`;
      }).join('');
      var toggles = ent.option_switches.filter((id) => this._st(id)).map((id) => {
        var ok = this._avail(id), on = ok && this._val(id) === 'on';
        return '<button class="toggle' + (on ? ' on' : '') + '" data-toggle="' + hcEsc(id) + '"' + (ok ? '' : ' disabled') + '>' +
          '<ha-icon icon="' + (on ? 'mdi:checkbox-marked-circle' : 'mdi:checkbox-blank-circle-outline') + '"></ha-icon>' + hcEsc(this._entityLabel(id, deviceName)) + '</button>';
      }).join('');
      // Home Connect only loads options when the selected program changes, so after
      // a Home Assistant restart they all stay unavailable until then.
      var reload = '';
      if (optIds.length && !anyAvail) {
        var canReload = this._avail(ent.selected_program) && (this._st(ent.selected_program).attributes.options || []).length > 1;
        // While someone turns the dial on the appliance, Home Assistant can't read the options and
        // switching programs from here is refused: the button waits for remote control to come back.
        var local = this._localControl(ent);
        var reloadOff = this._reloading || this._starting || local;
        reload = '<div class="reload"><span>' + this._t(local ? 'options_local' : 'options_not_loaded') + '</span>' +
          (canReload ? `<button class="link" data-action="reload_options"${reloadOff ? ' disabled' : ''}${local ? ` title="${hcEsc(this._t('options_local'))}"` : ''}><ha-icon icon="mdi:refresh"></ha-icon>${this._t('reload_options')}</button>` : '') + '</div>';
      }
      if (selects || toggles) {
        optionsHtml = '<div class="section"><div class="section-title"><ha-icon icon="mdi:tune-variant"></ha-icon>' + this._t('options') + '</div>' +
          (selects ? `<div class="grid">${selects}</div>` : '') +
          (toggles ? `<div class="toggles">${toggles}</div>` : '') + reload + '</div>';
      }
    }

    // Controls.
    var controls = '';
    if (c.show_controls && online && powerOn) {
      var ab = this._actionButtons(ent, state, running, false);
      var btns = ab.btns;
      if (running && ent.stop && this._val(ent.stop) !== 'unavailable') {
        var confirming = this._confirming === 'stop';
        btns.push(`<button class="btn danger${confirming ? ' armed' : ''}" data-action="stop"><ha-icon icon="mdi:stop"></ha-icon>${this._t(confirming ? 'confirm' : 'stop')}</button>`);
      }
      if (btns.length) controls = `<div class="controls">${btns.join('')}</div>`;
      if (!running && !ab.remoteOk && btns.length) controls += `<div class="hint"><ha-icon icon="mdi:information-outline"></ha-icon>${this._t('remote_start_off')}</div>`;
    }

    // Once an appliance refused to turn off, the button only serves to turn it on.
    var noOff = powerOn && hcNoPowerOff.has(this._powerKey(r));
    var powerTitle = this._t(noOff ? 'power_off_unsupported' : 'power');
    var powerBtn = c.show_power && ent.power && online
      ? `<button class="power${powerOn ? ' on' : ''}" data-action="power" title="${hcEsc(powerTitle)}" aria-label="${this._t('power')}"${noOff ? ' disabled' : ''}><ha-icon icon="mdi:power"></ha-icon></button>`
      : '';

    var errorHtml = this._error
      ? `<div class="error" role="alert" title="${hcEsc(this._error.detail)}"><ha-icon icon="mdi:alert-circle-outline"></ha-icon><span>${hcEsc(this._t(this._error.key))}</span></div>`
      : '';

    // Hero: the appliance next to its state (and progress while a program runs).
    var big = '';
    if (running || state === 'finished') {
      var pct = state === 'finished' ? 100 : (progress == null ? 0 : progress);
      big = '<div class="big"><span class="pct">' + Math.round(pct) + '<small> %</small></span><span class="state">' + hcEsc(statusText) + '</span></div>' +
        '<div class="bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
        (timeLine ? `<div class="time">${hcEsc(timeLine)}</div>` : '');
    } else {
      big = `<div class="big"><span class="state-big">${hcEsc(statusText)}</span></div>`;
    }
    var art = c.icon
      ? `<div class="badge"><ha-icon icon="${hcEsc(icon)}"></ha-icon></div>`
      : ((door === 'open' && HC_ART_OPEN[kind]) || HC_ART[kind] || HC_ART.dishwasher);
    var heroHtml = '<div class="hero">' + hcPicture(art, state, !c.icon) +
      '<div class="info">' + big + (chips.length ? `<div class="chips">${chips.join('')}</div>` : '') + '</div></div>';

    var logo = c.show_logo === false ? ''
      : `<a class="logo-link" href="${HC_SITE}" target="_blank" rel="noopener noreferrer" title="Home Connect">${HC_LOGO}</a>`;
    var sub = progLabel || this._t(kind);

    if (this._compact()) {
      this.shadowRoot.innerHTML = this._miniHtml({ c, ent, name, color, state, statusText, running, online, powerOn, progress,
        finish, progLabel, chips: chips.filter((x) => x.indexOf('chip warn') >= 0 || !online), art, logo, powerBtn });
      return;
    }

    this.shadowRoot.innerHTML = this._styles(color) + '<ha-card>' +
      '<div class="header">' + logo +
        '<div class="titles"><div class="name">' + hcEsc(name) + '</div><div class="sub">' + hcEsc(sub) + '</div></div>' +
        powerBtn + this._zoomButton() +
      '</div>' +
      heroHtml + programHtml + optionsHtml + errorHtml + controls +
    '</ha-card>';
  }

  _styles(color) {
    return '<style>' +
      ':host { display: block; height: 100%; --hc-color: ' + (color || 'var(--disabled-text-color, #9e9e9e)') + '; }' +
      'ha-card { height: 100%; box-sizing: border-box; padding: 12px; display: flex; flex-direction: column; gap: 10px; }' +
      '.empty { display: flex; align-items: center; gap: 10px; color: var(--secondary-text-color); }' +
      // The body starts 8px under the header (the card gap is 10px between body blocks).
      '.header { display: flex; align-items: center; gap: 10px; margin-bottom: -2px; }' +
      '.logo-link { display: flex; flex-shrink: 0; }' +
      '.logo { width: 40px; height: 40px; }' +
      '.titles { flex: 1; min-width: 0; }' +
      '.name { font-size: 16px; font-weight: 500; line-height: 1.25; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.sub { font-size: 12px; color: var(--secondary-text-color); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.hero { display: flex; align-items: center; gap: 14px; }' +
      '.picture { width: 72px; height: 84px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }' +
      '.picture svg { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.18)); }' +
      '.picture .led { fill: var(--hc-color); }' +
      '.picture { position: relative; }' +
      '.pbadge { position: absolute; right: -4px; bottom: 2px; width: 30%; aspect-ratio: 1; min-width: 20px; border-radius: 50%; display: grid; place-items: center;' +
        ' background: var(--hc-color); fill: #fff; box-shadow: 0 0 0 2px var(--card-background-color, #fff), 0 2px 6px rgba(0,0,0,0.25);' +
        ' animation: hc-pop 0.35s cubic-bezier(.3,1.6,.6,1) both; }' +
      '.pbadge svg { width: 72%; height: 72%; filter: none; overflow: visible; }' +
      '.st-pause .pbadge { animation: hc-pop 0.35s cubic-bezier(.3,1.6,.6,1) both, hc-breathe 2s ease-in-out 0.4s infinite; }' +
      '.pbadge .hand-h, .pbadge .hand-m { transform-box: view-box; transform-origin: 12px 12px; }' +
      '.st-delayedstart .pbadge .hand-m { animation: hc-spin 3s linear infinite; }' +
      '.st-delayedstart .pbadge .hand-h { animation: hc-spin 36s linear infinite; }' +
      '.pbadge .check { stroke-dasharray: 20; stroke-dashoffset: 0; animation: hc-draw 0.5s ease-out 0.2s both; }' +
      '.picture .sparkles { position: absolute; inset: 0; width: 100%; height: 100%; fill: var(--hc-color); pointer-events: none; filter: none; }' +
      '.sparkles path { transform-box: fill-box; transform-origin: center; animation: hc-twinkle 1.8s ease-in-out infinite; }' +
      '.sparkles path:nth-child(2) { animation-delay: 0.6s; } .sparkles path:nth-child(3) { animation-delay: 1.2s; }' +
      '.st-pause svg:not(.sparkles):first-child, .st-delayedstart svg:first-child { opacity: 0.85; }' +
      '@keyframes hc-pop { from { transform: scale(0); } to { transform: scale(1); } }' +
      '@keyframes hc-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.88); } }' +
      '@keyframes hc-draw { from { stroke-dashoffset: 20; } to { stroke-dashoffset: 0; } }' +
      '@keyframes hc-twinkle { 0%, 100% { opacity: 0; transform: scale(0.4) rotate(0); } 50% { opacity: 1; transform: scale(1) rotate(45deg); } }' +
      '.picture .floor { opacity: 0; transition: opacity 0.6s; } .picture .floor-c { stop-color: var(--hc-color); }' +
      '.picture.running .floor { opacity: 1; }' +
      '.picture .drum, .picture .wave { transform-box: view-box; }' +
      '.picture .drum { transform-origin: 40px 55px; }' +
      '.picture .shake, .picture .steam path, .picture .drops, .picture .bubbles { transform-box: view-box; }' +
      '.picture .shake { transform-origin: 40px 92px; }' +
      '.picture .steam path, .picture .drops, .picture .bubbles { opacity: 0; }' +
      '.picture .bubbles { fill: #fff; }' +
      '.picture.running .drum { animation: hc-spin 1.2s linear infinite; }' +
      '.picture.running .wave { animation: hc-wave 0.8s ease-in-out infinite alternate; }' +
      '.picture.running .shake { animation: hc-shake 0.3s ease-in-out infinite; }' +
      '.picture.running .bubbles { animation: hc-rise 1.6s ease-in infinite; }' +
      '.picture.running .led { animation: hc-blink 1.6s ease-in-out infinite; }' +
      '.picture.running .floor { animation: hc-glow 2.2s ease-in-out infinite alternate; }' +
      '.picture.running .steam path { animation: hc-steam 2.4s ease-out infinite; }' +
      '.picture.running .steam path:nth-child(2) { animation-delay: 0.8s; }' +
      '.picture.running .steam path:nth-child(3) { animation-delay: 1.6s; }' +
      '.picture.running .drops { animation: hc-spray 1.1s ease-in-out infinite; }' +
      '@keyframes hc-spin { to { transform: rotate(360deg); } }' +
      '@keyframes hc-wave { from { transform: translateX(-6px); } to { transform: translateX(6px); } }' +
      '@keyframes hc-shake { 0%, 100% { transform: translateX(0) rotate(0); } 25% { transform: translateX(-0.6px) rotate(-0.5deg); } 75% { transform: translateX(0.6px) rotate(0.5deg); } }' +
      '@keyframes hc-rise { 0% { opacity: 0; transform: translateY(4px); } 30% { opacity: 0.8; } 100% { opacity: 0; transform: translateY(-14px); } }' +
      '@keyframes hc-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }' +
      '@keyframes hc-glow { from { opacity: 0.45; } to { opacity: 1; } }' +
      '@keyframes hc-steam { 0% { opacity: 0; transform: translateY(2px); } 30% { opacity: 0.7; } 100% { opacity: 0; transform: translateY(-10px); } }' +
      '@keyframes hc-spray { 0%, 100% { opacity: 0; transform: translateY(6px); } 40% { opacity: 0.85; } 70% { opacity: 0.5; transform: translateY(-4px); } }' +
      '@media (prefers-reduced-motion: reduce) { .picture.running *, .pbadge, .pbadge *, .sparkles path { animation: none !important; } .sparkles path { opacity: 1; } .picture.running .floor { opacity: 1; } }' +
      '.badge { width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center;' +
        ' background: color-mix(in srgb, var(--hc-color) 15%, transparent); color: var(--hc-color); }' +
      '.badge ha-icon { --mdc-icon-size: 32px; }' +
      '.info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }' +
      '.big { display: flex; align-items: baseline; gap: 8px; min-width: 0; }' +
      '.big .pct { font-size: 30px; font-weight: 400; line-height: 1.1; color: var(--primary-text-color); }' +
      '.big .pct small { font-size: 15px; color: var(--secondary-text-color); }' +
      '.big .state { font-size: 13px; font-weight: 500; color: var(--hc-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.state-big { font-size: 22px; font-weight: 400; line-height: 1.2; color: var(--hc-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }' +
      '.time { font-size: 12px; color: var(--secondary-text-color); }' +
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
      '.bar { height: 4px; border-radius: 3px; background: var(--secondary-background-color, rgba(128,128,128,0.15)); overflow: hidden; }' +
      '.fill { height: 100%; border-radius: 3px; background: var(--hc-color); transition: width 0.6s ease; }' +
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
      '.section-title { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; text-transform: uppercase;' +
        ' letter-spacing: .04em; color: var(--secondary-text-color); }' +
      '.section-title ha-icon { --mdc-icon-size: 16px; }' +
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
      '.btn.primary, .round.primary { background: color-mix(in srgb, var(--primary-color, #03a9f4) 16%, transparent); color: var(--primary-color, #03a9f4); }' +
      '.btn.primary:hover:not(:disabled), .round.primary:hover:not(:disabled) { background: color-mix(in srgb, var(--primary-color, #03a9f4) 24%, transparent); }' +
      '.btn.danger { background: color-mix(in srgb, var(--error-color, #db4437) 16%, transparent); color: var(--error-color, #db4437); }' +
      '.btn.danger:hover { background: color-mix(in srgb, var(--error-color, #db4437) 24%, transparent); }' +
      // Armed (second click confirms): stronger tint and an inner ring, still no solid fill.
      '.btn.danger.armed { background: color-mix(in srgb, var(--error-color, #db4437) 24%, transparent); box-shadow: inset 0 0 0 1px var(--error-color, #db4437); }' +
      '.hint { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--secondary-text-color); margin-top: -6px; }' +
      '.hint ha-icon { --mdc-icon-size: 16px; }' +
      '.error { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--error-color, #db4437); }' +
      '.error ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }' +
      '.zoom { all: unset; flex-shrink: 0; cursor: pointer; width: 24px; height: 24px; margin: -4px -4px -4px 0; border-radius: 50%;' +
        ' display: grid; place-items: center; color: var(--secondary-text-color); }' +
      '.zoom ha-icon { --mdc-icon-size: 16px; }' +
      '.zoom:hover { background: color-mix(in srgb, var(--secondary-text-color) 16%, transparent); color: var(--primary-text-color); }' +
      '.zoom:focus-visible { outline: 2px solid var(--primary-color, #03a9f4); outline-offset: 1px; }' +
      'ha-card.mini .logo { width: 32px; height: 32px; }' +
      '.st { display: inline-flex; align-items: center; gap: 4px; flex-shrink: 0; padding: 1px 8px; border-radius: 12px; font-size: 11px; font-weight: 500;' +
        ' white-space: nowrap; background: color-mix(in srgb, var(--hc-color) 15%, transparent); color: var(--hc-color); }' +
      '.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--hc-color); }' +
      '.content { display: flex; align-items: center; gap: 12px; }' +
      'ha-card.mini .picture { width: 56px; height: 66px; }' +
      '.mbar { display: flex; align-items: center; gap: 8px; font-size: 13px; }' +
      '.mbar .bar { flex: 1; }' +
      '.mbar .v { font-weight: 500; min-width: 40px; text-align: right; color: var(--primary-text-color); }' +
      '.line { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--secondary-text-color); min-width: 0; }' +
      '.line ha-icon { --mdc-icon-size: 14px; flex-shrink: 0; }' +
      '.line span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }' +
      '.mcontrols { display: flex; gap: 6px; flex-shrink: 0; }' +
      '.round { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center;' +
        ' background: var(--secondary-background-color, rgba(128,128,128,0.12)); color: var(--primary-text-color); }' +
      '.round ha-icon { --mdc-icon-size: 20px; }' +
      'ha-card.mini .power { width: 40px; height: 40px; }' +
    '</style>';
  }

  _onClick(ev) {
    var btn = ev.composedPath().find((n) => n.dataset && (n.dataset.action || n.dataset.toggle));
    if (!btn || btn.disabled) return;
    var ent = this._r.ent;
    if (btn.dataset.toggle) {
      this._option('switch', 'toggle', { entity_id: btn.dataset.toggle });
      return;
    }
    switch (btn.dataset.action) {
      case 'zoom':
        this._toggleZoom(ev);
        break;
      case 'power':
        this._power();
        break;
      case 'start':
        this._start();
        break;
      case 'reload_options':
        this._reloadOptions();
        break;
      case 'pause':
        this._press(ent.pause);
        break;
      case 'resume':
        this._press(ent.resume);
        break;
      case 'stop':
        if (this._confirming !== 'stop') {
          this._confirming = 'stop';
          clearTimeout(this._confirmTimer);
          this._confirmTimer = setTimeout(() => { this._confirming = null; this._update(); }, 3000);
        } else {
          this._confirming = null;
          clearTimeout(this._confirmTimer);
          this._press(ent.stop);
        }
        this._update();
        break;
    }
  }

  _localControl(ent) { return !!ent.remote_control && this._val(ent.remote_control) === 'off'; }

  _showError(key, err) {
    clearTimeout(this._errorTimer);
    this._error = { key: key, detail: hcErrText(err), states: null };
    this._errorTimer = setTimeout(() => { this._clearError(); this._update(); }, HC_ERROR_TIMEOUT);
  }

  _clearError() {
    clearTimeout(this._errorTimer);
    this._error = null;
  }

  // Service call without Home Assistant's raw toast: the card shows its own message.
  _call(domain, service, data) {
    return this._hass.callService(domain, service, data, undefined, false);
  }

  // Retries once after a short delay when the appliance rejects the command for a moment
  // (or on any error with `always`).
  async _callRetry(domain, service, data, always) {
    try {
      return await this._call(domain, service, data);
    } catch (err) {
      if (!always && !HC_RETRYABLE.test(hcErrText(err))) throw err;
      await hcDelay(HC_RETRY_DELAY);
      return this._call(domain, service, data);
    }
  }

  // Pause / resume / stop and the option controls go through the same retry and in-card message
  // as Start: appliances reject them just as readily for a moment (WrongOperationState).
  async _press(id) {
    try {
      await this._callRetry('button', 'press', { entity_id: id });
    } catch (err) {
      this._showError('command_failed', err);
      this._update();
    }
  }

  async _option(domain, service, data) {
    try {
      await this._callRetry(domain, service, data);
    } catch (err) {
      this._showError('option_failed', err);
      this._update();
    }
  }

  // Selecting an option on the "active program" select starts it.
  async _start() {
    var ent = this._r.ent;
    if (this._starting || this._reloading) return;
    var data = { entity_id: ent.active_program, option: this._val(ent.selected_program) };
    this._starting = true;
    this._clearError();
    this._update();
    try {
      await this._callRetry('select', 'select_option', data);
    } catch (err) {
      this._showError(HC_RETRYABLE.test(hcErrText(err)) ? 'start_rejected' : 'start_failed', err);
    } finally {
      this._starting = false;
      this._update();
    }
  }

  async _power() {
    var r = this._r, key = this._powerKey(r);
    var on = this._val(r.ent.power) === 'on';
    if (on && hcNoPowerOff.has(key)) return;
    try {
      await this._call('switch', 'toggle', { entity_id: r.ent.power });
    } catch (err) {
      var noOff = on && HC_NO_POWER_OFF.test(hcErrText(err));
      if (noOff) hcNoPowerOff.add(key);
      this._showError(noOff ? 'power_off_unsupported' : 'power_failed', err);
      this._update();
    }
  }

  // Switch to another program and back: that's what makes Home Connect send the options.
  async _reloadOptions() {
    var ent = this._r.ent, id = ent.selected_program, s = this._st(id);
    if (!s || this._reloading || this._starting || this._localControl(ent)) return;
    var current = s.state;
    var other = (s.attributes.options || []).find((o) => o !== current);
    if (!other) return;
    this._reloading = true;
    this._clearError();
    this._update();
    try {
      await this._callRetry('select', 'select_option', { entity_id: id, option: other });
    } catch (err) {
      // Nothing changed on the appliance.
      this._showError('reload_failed', err);
      this._endReload();
      return;
    }
    try {
      // The appliance must get its program back, so any error is retried once.
      await this._callRetry('select', 'select_option', { entity_id: id, option: current }, true);
    } catch (err) {
      this._showError('restore_failed', err);
    }
    this._endReload();
  }

  _endReload() {
    this._reloading = false;
    this._sig = null;
    this._update();
  }

  _onChange(ev) {
    var el = ev.target;
    if (!el?.dataset?.select) return;
    this._option('select', 'select_option', { entity_id: el.dataset.select, option: el.value });
    el.blur();
  }
}

class HomeConnectDishwasherCard extends HomeConnectBaseCard {
  static get kind() { return 'dishwasher'; }
}

class HomeConnectWasherCard extends HomeConnectBaseCard {
  static get kind() { return 'washer'; }
}

// ── Mini cards ───────────────────────────────────────────────────────────────
// A mini card is a full card drawn compact, like ha-roborock-card: its detail button (top right, `zoom: false`
// removes it) switches it to the full card and back, and a click anywhere else on the page folds it again.
var hcInDialog = (ev) => ev.composedPath().some((n) => ['ha-more-info-dialog', 'ha-dialog', 'dialog'].indexOf(n.localName) >= 0);

var hcMini = (Base) => class extends Base {
  static get mini() { return true; }

  static getConfigElement() {
    var el = Base.getConfigElement();
    el.mini = true;
    return el;
  }

  constructor() {
    super();
    this._onUnzoom = (ev) => {
      if (this._zoomed && !ev.composedPath().includes(this) && !hcInDialog(ev)) this._setZoom(false);
    };
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._onUnzoom, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onUnzoom, true);
  }

  getCardSize() { return this._zoomed ? super.getCardSize() : 2; }

  getGridOptions() { return this._zoomed ? super.getGridOptions() : { columns: 6, min_columns: 6 }; }

  _compact() { return !this._zoomed; }

  _zoomButton() {
    if (this._config.zoom === false) return '';
    var z = !!this._zoomed;
    var label = hcEsc(this._t(z ? 'zoom_out' : 'zoom_in'));
    return `<button class="zoom" data-action="zoom" title="${label}" aria-label="${label}"><ha-icon icon="${z ? 'mdi:arrow-collapse' : 'mdi:arrow-expand'}"></ha-icon></button>`;
  }

  _setZoom(on) {
    this._zoomed = on;
    this._update();
  }

  // From the keyboard (Enter / Space: no click count), the focus follows to the button that replaced this one.
  _toggleZoom(ev) {
    this._setZoom(!this._zoomed);
    if (ev.detail === 0) this.shadowRoot.querySelector('.zoom')?.focus();
  }

  _miniHtml(m) {
    var c = m.c, ent = m.ent, lines = [];
    var bar = '';
    if (m.running || m.state === 'finished') {
      var pct = m.state === 'finished' ? 100 : (m.progress == null ? 0 : m.progress);
      bar = `<div class="mbar"><div class="bar"><div class="fill" style="width:${pct}%"></div></div><span class="v">${Math.round(pct)} %</span></div>`;
    }
    if (m.progLabel && m.online && m.powerOn) lines.push(`<div class="line"><ha-icon icon="mdi:tune-variant"></ha-icon><span>${hcEsc(m.progLabel)}</span></div>`);
    if (m.running && m.finish) {
      lines.push(`<div class="line"><ha-icon icon="mdi:clock-outline"></ha-icon><span>${hcEsc(this._timeLine(m.finish))}</span></div>`);
    }
    if (m.chips.length) lines.push(`<div class="chips">${m.chips.join('')}</div>`);

    // Round buttons: start (or pause / resume) and power.
    var btns = c.show_controls && m.online && m.powerOn ? this._actionButtons(ent, m.state, m.running, true).btns : [];
    if (m.powerBtn) btns.push(m.powerBtn);

    var errorHtml = this._error
      ? `<div class="error" role="alert" title="${hcEsc(this._error.detail)}"><ha-icon icon="mdi:alert-circle-outline"></ha-icon><span>${hcEsc(this._t(this._error.key))}</span></div>`
      : '';

    return this._styles(m.color) + '<ha-card class="mini">' +
      '<div class="header">' + m.logo +
        '<div class="titles"><div class="name">' + hcEsc(m.name) + '</div></div>' +
        `<span class="st"><span class="dot"></span>${hcEsc(m.statusText)}</span>` + this._zoomButton() +
      '</div>' +
      '<div class="content">' + hcPicture(m.art, m.state, !c.icon) +
        '<div class="info">' + bar + lines.join('') + '</div>' +
        (btns.length ? `<div class="mcontrols">${btns.join('')}</div>` : '') +
      '</div>' + errorHtml +
    '</ha-card>';
  }
};

class HomeConnectDishwasherMiniCard extends hcMini(HomeConnectDishwasherCard) {}

class HomeConnectWasherMiniCard extends hcMini(HomeConnectWasherCard) {}

// ── home-connect-card-editor (visual editor, built on HA's ha-form) ──────────
var HC_EDITOR_DEFAULTS = { show_program: true, show_controls: true, show_options: true, show_alerts: true, show_power: true, show_logo: true, zoom: true };

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
    var lang = ((this._config?.language) || (this._hass?.language) || 'en').split('-')[0];
    return HcI18n[lang] ? lang : 'en';
  }

  _schema() {
    var t = (k) => hcT(this._lang(), k);
    var kind = this.kind || (/washer-/.test(this._config.type || '') ? 'washer' : 'dishwasher');
    var domains = { operation_state: 'sensor', door: 'sensor', progress: 'sensor', finish_time: 'sensor',
      selected_program: 'select', active_program: 'select', power: 'switch', stop: 'button',
      pause: 'button', resume: 'button', remote_start: 'binary_sensor', remote_control: 'binary_sensor', connectivity: 'binary_sensor',
      salt: 'sensor', rinse_aid: 'sensor' };
    // Pause / resume only exist on washers, salt / rinse aid only on dishwashers.
    var only = { pause: 'washer', resume: 'washer', salt: 'dishwasher', rinse_aid: 'dishwasher' };
    var roles = HC_OVERRIDABLE.filter((r) => !only[r] || only[r] === kind);
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
          { name: 'show_power', selector: { boolean: {} } },
          { name: 'show_logo', selector: { boolean: {} } },
        ].concat(this.mini || /-mini-card$/.test(this._config.type || '') ? [{ name: 'zoom', selector: { boolean: {} } }] : []),
      },
      {
        name: 'language',
        selector: { select: { mode: 'dropdown', options: [{ value: 'fr', label: 'Français' }, { value: 'en', label: 'English' }, { value: 'de', label: 'Deutsch' }] } },
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
    var lang = this._lang();
    this._config = value;
    // A new language option relabels the form.
    if (lang !== this._lang()) this._render();
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

[
  ['home-connect-dishwasher-mini-card', HomeConnectDishwasherMiniCard, 'Home Connect Dishwasher Mini Card', 'Compact dishwasher card that unfolds into the full card'],
  ['home-connect-washer-mini-card', HomeConnectWasherMiniCard, 'Home Connect Washer Mini Card', 'Compact washing machine card that unfolds into the full card'],
].forEach(([type, cls, name, description]) => {
  if (customElements.get(type)) return;
  customElements.define(type, cls);
  window.customCards.push({ type, name, description, preview: true, documentationURL: 'https://github.com/juju35/ha-home-connect-card' });
});

console.info(`%c HOME-CONNECT-CARD %c v${HOME_CONNECT_CARD_VERSION} `, 'color:#fff;background:#1e88e5;font-weight:700', 'color:#1e88e5;background:#fff');
