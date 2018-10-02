import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/***
 * 1. Get current forecast
 * 2. Get weekly forecast
 */
const config = {
  apiKey: 'r0RszRlcQ1cGdK9UxDUBZJzVl4vk2ukO',
  languageLocale: 'en-au'
}
export const getCityWeatherByLocationKey = (locationKey) => {
  var url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?` +
    `apikey=${config.apiKey}&language=${config.languageLocale}&details=false`

  return Vue.http.get(url)
}

export const getCityFiveDayForeCastByLocationKey = (locationKey) => {
  var url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?` +
    `apikey=${config.apiKey}&language=${config.languageLocale}&details=false&metric=true`;

  return Vue.http.get(url)
}
