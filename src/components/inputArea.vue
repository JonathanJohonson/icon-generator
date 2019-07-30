<template>
  <div style="display: flex">
    <label for="inputer" class="input-label">requirements :</label>
    <textarea
      id="textarea"
      name="inputer"
      placeholder="enter your requirements here.">
      </textarea>
  </div>
</template>

<script>
export default {
  name: 'inputArea'
}
</script>

<style scoped>
.input-label {
  color: black;
}
#textarea {
  resize: none;
  border-width: 0;
  width: 80%;
  height: 5rem;
}
</style>
