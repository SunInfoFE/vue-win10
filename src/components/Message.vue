<template>
  <div class="win10-message" :style="{right: right}">
    <div class="win10-message-header">
      消息中心
      <span>全部清除</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    right () {
      return this.$store.state.showMessage ? '0' : '-360px';
    }
  }
};
</script>

<style>
.win10-message {
  width: 360px;
  height: calc(100% - 40px);
  position: fixed;
  right: -360px;
  top: 0;
  color: white;
  background-color: rgba(19, 23, 28, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 8;
  transition: all 0.5s;
}
.win10-message-header {
  height: 60px;
  line-height: 54px;
  font-size: 18px;
  font-weight: bolder;
  position: relative;
  padding: 6px;
}
.win10-message-header span {
  position: absolute;
  right: 6px;
  bottom: 6px;
  font-size: 14px;
  color: #808080;
  line-height: 1;
}
.win10-message-header span:hover {
  color: #fff;
  cursor: pointer;
}
</style>
