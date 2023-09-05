import localConfig from './localConfig.js';
const config = {
  DEBUG: localConfig?.DEBUG,
  developmentENV: localConfig?.developmentENV || 'stg',
  showTahuTextInput: localConfig?.showTahu || false,
  codePushDev: localConfig?.codePushDev || false,
  codePushProd: localConfig?.codePushProd || false,
  stgApiURL: 'http://192.168.18.106:4000',
  apiURL: 'https://api.artetisapps.com',
};

export default config;
