import * as weather from 'openweather-apis'

/***
 * 1. Get current forecast
 * 2. Get weekly forecast
 * 3. Location Search
 */
export class WeatherAPI {
  constructor (apiKey) {
    weather.setAPPID(apiKey)
    weather.setUnits('metric')
    weather.setLang('en')
  }

  getWeatherAPIContext () {
    return weather
  }

  getWeatherIcon (code) {
    return code + '.png'
  }
}
