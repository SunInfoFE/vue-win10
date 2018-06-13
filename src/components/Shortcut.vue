<template>
  <div class="win10-shortcut-item">
    <img src="../assets/logo.png" :alt="name">
    <div v-text="name"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '快捷方式'
    }
  }
};
</script>

<style>
.win10-shortcut-item {
  width: 80px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s;
}
.win10-shortcut-item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.win10-shortcut-item img {
  width: 50px;
  height: 50px;
  margin: 5px 15px;
  display: block;
}
.win10-shortcut-item div {
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  margin-bottom: 5px;
}
</style>
