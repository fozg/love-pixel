const STORAGE_CONFIG_KEY = 'PIXELOVE-CONFIG';

const defaultConfig = {
  primaryColor: '#f44336',
  paintTool: 'pen'
}

export function loadConfig () {
  let stringData = localStorage.getItem(STORAGE_CONFIG_KEY);
  return Object.assign({}, defaultConfig, JSON.parse(stringData));
}

export function saveConfig(key, value) {
  let stringData = localStorage.getItem(STORAGE_CONFIG_KEY);
  let config = Object.assign({}, defaultConfig, JSON.parse(stringData));
  config[key] = value;
  localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
}