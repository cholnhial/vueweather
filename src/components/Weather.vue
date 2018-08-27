<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center ">
      <div class="weather  justify-content-center align-self-baseline mt-5">
        <div class="main-weather">
          <span class="">
         <!--    <img :src="'assets/icons/' + weather.WeatherIcon + '.png'">
          <span class="temp">{{ weather.Temperature.Value }}&deg;</span>-->
          </span>
          <p class="text-center weather-description display-medium">{{ weather.WeatherText }}</p>
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
import {getCityWeatherByLocationKey} from '../api/weather'

export default {
  name: 'Weather',
  data: function () {
    return {
      weather: {}
    }
  },
  created: function () {
    const cityId = this.$route.query.id;
    getCityWeatherByLocationKey(cityId).then(response => {
      this.weather = response.body[0];
      console.log(this.weather);
    }, response => {
      // error
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
