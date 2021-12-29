const fs = require('fs');
const Weather = require('./lib/weather');

const configFile = fs.readFileSync('config.json');
const config = JSON.parse(configFile);

const baseUrl = config.apiUrl;
