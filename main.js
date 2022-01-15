import fs from 'fs';
import Weather from './lib/weather.js';

const HKWeather = {
  baseUrl: 'https://www.hko.gov.hk/wxinfo/dailywx/yeswx/DYN_DAT_MINDS_RYES',
  format: 'json',
  async getAllTemp(date){
    //All of the date which input by user should be formated to call API.
    const formatedDate = date.replace(/\//g, '');
    const weather = await Weather.fetchWeather(this.baseUrl, this.format, formatedDate);
    return weather;
  },
  async getAreaTemp(date, area){
    const formatedDate = date.replace(/\//g, '');
    const weather = await Weather.fetchWeather(this.baseUrl, this.format, formatedDate);
    return weather;
  },
  async getRainfall(date){
    const formatedDate = date.replace(/\//g, '');
    const weather = await Weather.fetchWeather(this.baseUrl, this.format, formatedDate);
    const raining = weather['DYN_DAT_MINDS_RYES']['HKOReadingsRainfall']['Val_Eng'];
    return raining;
  },
};

export default HKWeather;
