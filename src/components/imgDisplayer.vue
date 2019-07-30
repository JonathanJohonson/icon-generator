<template>
  <div>
    <img height="300px" :src="urls[selected]">
    <div style="display: flex">
      <img v-for="(img,index) in urls"
        :class="{active:selected===index, img:true}"
        :key="index" width="128px"
        height="72"
        :src="img"
        @mousedown ="selected=index"
        >
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgDisplayer',
  data: function () {
    return {
      selected: 0,
      urls: []
    }
  },
  methods: {

  },
  mounted: function () {
    var basePath = '../../static/images/'
    var format = '.png'
    var fileName = ['aria', 'irina', 'miku', 'mio', 'nameless']
    for (let name of fileName) {
      this.urls.push(basePath + name + format)
    }
  }
}
</script>

<style>
.img {
  margin: 0.13em;
}
.active {
  border: 2px solid wheat
}
</style>
