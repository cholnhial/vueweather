<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex  search-box-padding">
      <div class="search-box d-flex flex-column">
        <!--<b-form-input class="align-self-center mt-5 mb-2" v-model="cityName"
                      type="text"
                      placeholder="e.g. London"></b-form-input>-->
     <!--   <autocomplete
          url="http://api.openweathermap.org/data/2.5/find?q="
          anchor="list"
          label="name"
          placeholder="e.g. London"
          name="autocomplete"
          :classes="{'input': 'form-control align-self-center mt-5 mb-2'}"
          :customParams="{'appid': 'a45ae09cab0dc5983275de1c4e64dcf0'}"
          :onShouldGetData="onCitySelected"
          :on-select="onCitySelected()">
        </autocomplete>-->
        <autocomplete
          url="http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
          anchor="city"
          label="country"
          placeholder="e.g. London"
          name="autocomplete"
          :classes="{'input': 'form-control align-self-center mt-5 mb-2'}"
          :customParams="{'apikey': 'r0RszRlcQ1cGdK9UxDUBZJzVl4vk2ukO', 'language': 'en-au'}"
          :process="process"
          :on-select="onCitySelected"
        >
        </autocomplete>
        <div class="align-self-center mt-0">
          <b-button v-on:click="onSearchWeather" variant="outline-success">
            <font-awesome-icon icon="search"/> Show Weather
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from 'vue2-autocomplete-js'
require('vue2-autocomplete-js//dist/style/vue2-autocomplete.css')

export default {
  name: 'Home',
  components: { Autocomplete },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      searchResults: {}
    }
  },
  methods: {
    onSearchWeather () {
      this.$router.push({path: 'weather', query: {id: this.searchResults.cityId, name: this.searchResults.city}})
    },
    onCitySelected (data) {
      this.searchResults = data
    },
    process (json) {
      var results = []
      if (json) {
        results = json.map(e => {
          return { city: e.LocalizedName, country: e.Country.LocalizedName, cityId: e.Key }
        })
      }
      return results
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .search-box-padding {
    padding-top: 5.5em;
  }

  .search-box {
    opacity: revert;
    border-radius: 1.3em;
    background: white;
    height: 15em;
    width: 30em;
    padding: 1.5em;
  }
</style>
<style>
  .autocomplete ul {
    width: 100%;
    position: relative;
  }
</style>
