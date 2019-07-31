<template>
  <div id="body">
    <inputArea></inputArea>
    <br>
    <imgDisplayer :imgs='imgs'></imgDisplayer>
  </div>
</template>

<script>
import inputArea from './inputArea'
import imgDisplayer from './imgDisplayer'
export default {
  name: 'homeBody',
  data: function () {
    return {
      imgs: []
    }
  },
  components: {
    inputArea,
    imgDisplayer
  },
  mounted: function () {
    var basePath = '../../static/images/'
    var format = '.png'
    var fileName = ['aria', 'irina', 'miku', 'mio', 'nameless']
    for (let name of fileName) {
      this.imgs.push(basePath + name + format)
    }
  }
}
</script>

<style>
#body {
  margin-top: 1rem
}
</style>
