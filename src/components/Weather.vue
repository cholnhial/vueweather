<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center ">
      <div class="weather  justify-content-center align-self-baseline mt-5">
        <div class="main-weather">
          <span class="">
             <i :class="'main-weather-icon ' + weathercode"></i>
          <span class="temp">{{ weather.temp }}&deg;</span>
          </span>
          <p class="text-center weather-description display-medium">{{ weather.description }}</p>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-center ">
      <div class="col-3">
        <div class="weather  justify-content-center align-self-baseline mt-5">
          <div class="main-weather-mini">

          </div>
      </div>
      </div>
      <div class="col-3">
        <div class="weather  justify-content-center align-self-baseline mt-5">
          <div class="main-weather-mini">

          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="weather  justify-content-center align-self-baseline mt-5">
          <div class="main-weather-mini">
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="weather  justify-content-center align-self-baseline mt-5">
          <div class="main-weather-mini">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'weather-icons/css/weather-icons.css'

import {WeatherAPI} from '../WeatherAPI'

let weatherApi = new WeatherAPI('46bbcf85e9a2e83913ce8271ffc4a79d')

export default {
  name: 'Weather',
  data: function () {
    return {
      weather: {},
      weathercode: ''
    }
  },
  created: function () {
    const cityId = this.$route.query.id
    weatherApi.getWeatherAPIContext().setCityId(cityId)
    weatherApi.getWeatherAPIContext().getSmartJSON((err, data) => {
      if (err) {
        console.log(err)
      }

      if (data) {
        this.weather = data
        this.weathercode = weatherApi.getWeatherIcon(data.weathercode)
      }
    })
    weatherApi = new WeatherAPI('46bbcf85e9a2e83913ce8271ffc4a79d');
    weatherApi.getWeatherAPIContext().setCityId(cityId);
    weatherApi.getWeatherAPIContext().getWeatherForecast(function (err, obj) {
      console.log(obj)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.weather {
  background: rgba(112, 168, 151, 0.81);
  padding: 1.8em;
  border-radius: 1.3em;
}

.main-weather {
  font-size: 3.8em;
  font-weight: 600;
}

.main-weather-mini {
  font-size: 3.8em;
  font-weight: 600;
}

.main-weather-icon {
  color: #FFC8AA;
  padding-right: 0.3em;
}

.temp {

  color: white;
}

.weather-description {
  color: white;
  font-size: .5em;
}
</style>
