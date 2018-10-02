<template>
  <div class="container px-0 h-100">
    <div class="city text-center">
      <h4 class="mt-1">{{city}}</h4>
    </div>
    <div class="row px-3 ">
      <div class="col-12">
        <div class="d-flex justify-content-center ">
          <div class="weather  justify-content-center align-self-baseline mt-5">
            <div class="main-weather">
              <h3 class="text-center text-day border-bottom">{{ currentDay }}</h3>
              <span class="">
             <img :src="'static/icons/' + weather.WeatherIcon + '.png'">
          <span class="temp">{{ weather.Temperature.Metric.Value }}&deg;</span>
          </span>
              <p class="text-center weather-description display-medium">{{ weather.WeatherText }}</p>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center ">
          <div class="col" v-for="forecast in forecasts">
            <div  v-bind:class="{'weather-mini-border': forecast.ForecastDay === currentDay}" class="weather justify-content-center align-self-baseline mt-5">
              <img class="mini-weather-icon" :src="'static/icons/' + forecast.Day.Icon + '.png'">
              <div class="text-center no-gutters">
                <span class="mini-weather-temp">{{ forecast.Temperature.Maximum.Value }}&deg;</span>
                <span class="mini-weather-temp text-muted">{{ forecast.Temperature.Minimum.Value }}&deg;</span>
              </div>
              <h6 class="text-center mt-0 text-day border-bottom">{{ forecast.ForecastDay }}</h6>
            </div>
          </div>
        </div>
      </div>
      </div>
    <div class="bottom-bar p-2 mt-1 ">
      <a class="btn btn-outline-success btn-lg">    <font-awesome-icon icon="arrow-left" />Back</a>
    </div>
    </div>

</template>

<script>
import 'weather-icons/css/weather-icons.css'

import {getCityWeatherByLocationKey, getCityFiveDayForeCastByLocationKey } from '../api/weather'
import * as moment from 'moment'

export default {
  name: 'Weather',
  data: function () {
    return {
      weather: {},
      forecasts: {},
      currentDay: '',
      city: ''
    }
  },
  created: function () {
    const cityId = this.$route.query.id
    this.city = this.$route.query.name;
    getCityWeatherByLocationKey(cityId).then(response => {
      this.weather = response.body[0]
      this.currentDay = moment().format('dddd')
    }, response => {
      // error
    })

    getCityFiveDayForeCastByLocationKey(cityId).then(response => {
      this.forecasts = response.body.DailyForecasts
      this.forecasts.map((f) => {
        f['ForecastDay'] = moment(f.Date).format('dddd')
        return f
      })
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
  color: #D3E7E1;
}

.weather-mini-border {
  border: solid 5px #D3E7E1;
}

.main-weather-icon {
  color: #FFC8AA;
  padding-right: 0.3em;
}

.mini-weather-icon {
  height: 34px;
  width: 45px;
}

.temp {

  color: #F2A137 ;
}


.text-day {
  color: #2B4B6F !important;
}

.mini-weather-temp {
  font-size: 1.5em;
  font-weight: 300;
  color: #D3E7E1;
}

.weather-description {
  color: #D3E7E1;
  font-size: .5em;
}

.city {
  background-color: white;
  height: 2.5em;
  width: 100%;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  color: #F2A137;
}

.bottom-bar {
  background-color: white;
  height: 4.5em;
  width: 100%;
  border-bottom-left-radius: 1.5em;
  border-bottom-right-radius: 1.5em;
  border-top: solid 1px #ccc;
}
</style>
