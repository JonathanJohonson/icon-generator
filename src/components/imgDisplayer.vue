<template>
  <div>
    <div class="large-img-holder">
      <img class="large-img" :src="imgs[selected]">
    </div>
    <div class="small-img-holder">
      <img v-for="(img,index) in imgs"
        :class="{active:selected===index, 'small-img':true}"
        :key="index"
        :src="img"
        @mousedown ="selected=index"
        >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: Array
  },
  name: 'imgDisplayer',
  data: function () {
    return {
      selected: 0
    }
  }
}
</script>

<style>
.active {
  border: 2px solid wheat;
}
.small-img {
  margin: 0.13em;
  width: 128px;
  /* width: 32px;
  height: 32px; */
}
.large-img {
  /* width: 320px;
  height: 320px; */
  width: 50%;
  max-width: 100%;
  max-height: 100%;
}
.large-img-holder {
  padding: auto;
  /* border: 2px solid red; */
}
.small-img-holder {
  height: 120px;
  /* border: 2px solid red; */
}
</style>
