<template>
    <div id="app">
      <b-container>
      <div class="page mt-2">
        <router-view></router-view>
      </div>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /** base color : 549431 **/

#app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}

.page {
  background-color: rgba(255, 255, 255, 0.5);
  height: 35.5em;
  width: 100%;
  border-radius: 1.5em;
}

body {
  background: url("assets/beautiful-weather.jpg")  no-repeat center center fixed;
  background-size:cover;
}
</style>
