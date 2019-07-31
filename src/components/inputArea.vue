<template>
  <div style="">
    <label for="inputer" class="input-label">Input Area</label><br>
    <input
      type="text"
      id="textarea"
      name="inputer"
      v-model="requirement"
      placeholder="enter your requirements here.">
      <span style="dispay:inlineblock; padding-right:5%">
        <button @click="submitRequire" style="height: 1.5rem">
          submit
        </button>
      </span>
  </div>
</template>

<script>
export default {
  name: 'inputArea',
  data: function () {
    return {
      requirement: ''
    }
  },
  methods: {
    submitRequire () {
      //  用ajax向后台接口发送输入框的内容
      var xmlhttp = new XMLHttpRequest()
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          //  处理返回的json对象
          var res = JSON.parse(xmlhttp.responseText)
          alert('resepon:' + res.id)
        } else {
          console.log('requesting:' + xmlhttp.readyState)
        }
      }
      //  组织数据
      var require = new FormData()
      require.append('userRqst', this.requirement)
      //  发送请求
      xmlhttp.open('GET', 'http://localhost:8080/static/test.txt', true)
      xmlhttp.send(require)
      this.requirement = ''
    }
  }
}
</script>

<style scoped>
.input-label {
  color: rgba(15, 11, 13, 0.856);
  font-size: 1.5rem;
  font-weight: bold;
}
#textarea {
  display: inline-block;
  margin-left: 3rem;
  border-width: 0;
  width: 30rem;
  max-width: 50%;
  height: 1.25rem;
  padding-left: 0.5rem;
}
</style>
