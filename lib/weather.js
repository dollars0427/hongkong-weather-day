const fetch = require('node-fetch');

const weather = {
  fetchWeather(apiUrl, format, date){
    return new Promise((resolve, reject) => {
      const fullUrl = `${apiUrl}${date}.${format}`;
      fetch(fullUrl, {method: 'GET'})
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        resolve(result);
      })
      .catch(error => console.error(error));
    });
  },
};

module.exports = weather;
