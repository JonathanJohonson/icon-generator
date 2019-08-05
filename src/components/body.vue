<template>
  <div id="body">
    <homeNav></homeNav>
    <inputArea></inputArea>
    <br>
    <imgDisplayer :imgs='imgs'></imgDisplayer>
  </div>
</template>

<script>
import inputArea from './inputArea'
import imgDisplayer from './imgDisplayer'
import homeNav from './nav'
export default {
  name: 'homeBody',
  data: function () {
    return {
      imgs: []
    }
  },
  components: {
    inputArea,
    imgDisplayer,
    homeNav
  },
  mounted: function () {
    var basePath = '../../static/images/'
    var format = '.png'
    var fileName = ['aria', 'irina', 'miku', 'mio', 'nameless', 'irina', 'miku', 'mio', 'nameless', 'irina', 'miku', 'mio', 'nameless']
    for (let name of fileName) {
      this.imgs.push(basePath + name + format)
    }
  }
}
</script>

<style>
#body {
  margin-top: 1rem;
  height: 100%;
  background: radial-gradient(800px,rgb(57, 136, 160), #2c3e50, #2c3e50);
  background: linear-gradient(rgb(57, 136, 160), #2c3e50);
  margin: 0 auto;
  /* width: 60rem; */
  max-width: 100%;
  padding-bottom: 2rem;
}
</style>
