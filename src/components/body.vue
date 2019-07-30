<template>
  <div id="body">
    <inputArea></inputArea>
    <br>
    <imgDisplayer></imgDisplayer>
  </div>
</template>

<script>
import inputArea from './inputArea'
import imgDisplayer from './imgDisplayer'
export default {
  name: 'homeBody',
  components: {
    inputArea,
    imgDisplayer
  }
}
</script>

<style>
#body {
  margin-top: 3rem
}
</style>
