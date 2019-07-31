<template>
  <div id="app">
    <div id="main">
      <img src="@root/static/images/logo_rhine.png" style="max-width:50%; margin-top:5%">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  background-color: #2c3e50; */
  max-width: 100%;
}

#main {
  background: radial-gradient(800px,rgb(57, 136, 160), #2c3e50, #2c3e50);
  background: linear-gradient(rgb(57, 136, 160), #2c3e50);
  margin: auto;
  /* width: 60rem; */
  max-width: 100%;
}
</style>
