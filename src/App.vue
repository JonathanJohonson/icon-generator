<template>
  <div id="background">
    <div id="app">
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
  max-width: 800px;
  margin: auto;
}
#header {
  background-color: dimgray;
  height: 3.5rem;
  width: 100%;
}
#background {
  background-color: skyblue;
  background-size: auto;
  height: 100%;
}
</style>
