<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex  search-box-padding">
      <div class="search-box d-flex flex-column">
        <b-form-input class="align-self-center mt-5 mb-2"  v-model="text1"
                      type="text"
                      placeholder="e.g. London"></b-form-input>
        <div class="align-self-center mt-0">
          <b-button v-on:click="onSearchWeather"  variant="outline-success">
            Show Weather
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onSearchWeather () {
      this.$router.push('weather')
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
