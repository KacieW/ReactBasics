import axios from 'axios';

var rootUrl = 'http://api.openweathermap.org/data/2.5/';
var APIKEY = '0c5b4e66465b2074716541e19344bcee';

const getQueryStringData = (city)=>{
  return {
    q:city,
    type: 'accurate',
    APPID: APIKEY,
    cnt:6
  }
}
const preURL = (type, queryStringData)=>{
  return rootUrl + type +'?'+routeParams(queryStringData);
}
const routeParams = (queryStringData)=>{
  const tempUrl = Object.keys(queryStringData).map(
    (x)=>{return x+'='+encodeURIComponent(queryStringData[x]);}
  ).join('&');
  return tempUrl;
}
module.exports = {
  getCurrentWeather: function (city){
    var queryStringData = getQueryStringData(city);
    var url = preURL('weather', queryStringData);

    return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    })
  },
  getForecast: function getForecast (city) {
  var queryStringData = getQueryStringData(city);
  var url = preURL('forecast/daily', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data
    })
}
};
