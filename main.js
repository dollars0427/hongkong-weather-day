import fs from 'fs';
import Weather from './lib/weather.js';

const configFile = fs.readFileSync('config.json');
const config = JSON.parse(configFile);

const baseUrl = config.apiUrl;
const format = config.format;

const HKWeather = {
  async getAllTemp(date){
    //All of the date which input by user should be formated to call API.
    const formatedDate = date.replace(/\//g, '');
    const weather = await Weather.fetchWeather(baseUrl, format, formatedDate);
    return weather;
  },
};

export default HKWeather;
