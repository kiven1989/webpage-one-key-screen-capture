<template>
  <button class="btn" @click="onClick">按钮2</button>
</template>
<script>
export default {
  name: "JBtn",
  methods: {
    onClick() {
      console.log(111);
    },
  },
};
</script>
<style>
.btn {
  color: red;
  font-size: 50px;
}
</style>
