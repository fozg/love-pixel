import {loadConfig} from './core/paintToolConfig';

export default function () {
  global.pixelConfig = {};
  global.pixelConfig = Object.assign({}, global.pixelConfig, loadConfig());
  // global.primaryColor = 'red';
}