<template>
  <div class="container d-flex justify-content-center h-100">
    <div class="weather rounded justify-content-center align-self-baseline mt-5">
        <div class="main-weather">
          <span class="">
             <i :class="'main-weather-icon ' + weathercode"></i>
          <span class="temp">{{ weather.temp }}&deg;</span>
          </span>
          <p class="text-center  display-medium">{{ weather.description }}</p>
        </div>
    </div>
  </div>
</template>const name = this.$route.query.name;

<script>
import 'weather-icons/css/weather-icons.css'

import {WeatherAPI} from '../WeatherAPI'

const weatherApi = new WeatherAPI('a45ae09cab0dc5983275de1c4e64dcf0')

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
        this.weather = data;
        this.weathercode = weatherApi.getWeatherIcon(data.weathercode);
      }
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
}

.main-weather {
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
</style>
