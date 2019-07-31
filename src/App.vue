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
  color: #2c3e50;
  background-color: #2c3e50;
  max-width: 100%;
}

#main {
  background-color: rgb(92, 170, 201);
  margin: auto;
  width: 60rem;
  max-width: 100%;
}
</style>
