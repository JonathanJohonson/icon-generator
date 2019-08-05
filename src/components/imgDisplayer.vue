<template>
<div id="imgComponent">
  <!-- 大图显示 -->
    <!-- 上一个 -->
    <div class="large-img-holder">
      <img src="@root/static/images/left.png" id="pre" @click="previousImg">
      <img class="large-img" :src="imgs[selected]">
      <img src="@root/static/images/right.png" id="next" @click="nextImg">
    </div>
    <!-- 下一个 -->
  <div>
    <!-- 缩略图展示 -->
    <div class="small-img-holder">
      <img v-for="(img,index) in imgs"
        :class="{ active:selected===index, 'small-img':true }"
        :key="index"
        :src="img"
        @mousedown ="selected=index"
        >
    </div>
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
  },
  methods: {
    previousImg () {
      this.selected = this.selected === 0 ? 0 : this.selected - 1
    },
    nextImg () {
      this.selected = this.selected === this.imgs.length - 1 ? this.imgs.length - 1 : this.selected + 1
    }
  }
}
</script>

<style>
#imgComponent {
  width: 100%;
  margin: 0;
}
.active {
  border: 2px solid wheat;
}
.small-img {
  margin-left: 2px;
  max-width: 19.5%;
  /* width: 32px;
  height: 32px; */
}
.large-img {
  /* height: 320px; */
  width: 320px;
  max-width: 55%;
  max-height: 100%;
  margin: 0;
}
.large-img-holder {
  display: flex;
  width: 576px;
  max-width: 90%;
  margin: 0 auto;
}
.small-img-holder {
  flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  width: 576px;
  max-width: 90%;
}
#pre,#next {
  margin:0;
  width: 128px;
  max-width: 22%;
}
</style>
