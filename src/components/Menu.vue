<template>
  <div class="win10-menu" :style="{bottom: bottom}"> menu</div>
</template>

<script>
export default {
  computed: {
    bottom () {
      return this.$store.state.showMenu ? '0' : '-480px';
    }
  }
};
</script>

<style>
.win10-menu {
  width: 680px;
  height: 480px;
  position: fixed;
  bottom: -480px;
  left: 0;
  color: white;
  background-color: rgba(19, 23, 28, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 8;
  transition: all 0.5s;
}
</style>
