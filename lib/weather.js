import fetch from 'node-fetch';

const weather = {
  fetchWeather(apiUrl, format, date){
    return new Promise((resolve, reject) => {
      const fullUrl = `${apiUrl}${date}.${format}`;
      console.log(fullUrl);
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

export default weather;
