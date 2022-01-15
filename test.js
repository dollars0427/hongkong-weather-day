/* This file is for testing the function of library. */

import HKWeather from './main.js';

testing();

async function testing(){
  //const temps = HKWeather.getAllTemp('2021/11/21');
  const raining = await HKWeather.getRainfall('2021/11/21');
  console.log(raining);
}
