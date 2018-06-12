<template>
  <div id="win10" class="win10" @click="handleClick">
    <win10-window></win10-window>
    <win10-menu></win10-menu>
    <win10-message></win10-message>
    <win10-taskbar></win10-taskbar>
  </div>
</template>

<script>
import getClassName from './utils/dom.js';

let Win10Window = () => import(/* webpackChunkName: 'win10-window' */ './components/Window');
let Win10Menu = () => import(/* webpackChunkName: 'win10-menu' */ './components/Menu');
let Win10Message = () => import(/* webpackChunkName: 'win10-message' */ './components/Message');
let Win10Taskbar = () => import(/* webpackChunkName: 'win10-taskbar' */ './components/Taskbar');

export default {
  name: 'App',
  components: {
    Win10Window,
    Win10Menu,
    Win10Message,
    Win10Taskbar
  },
  methods: {
    handleClick (e) {
      let isMessage = getClassName(e.target, 'win10-message');
      let isMenu = getClassName(e.target, 'win10-menu');
      let isBtnMenu = getClassName(e.target, 'win10-button win10-btn-menu');
      let isBtnMessage = getClassName(e.target, 'win10-button win10-btn-message');
      if ((isMessage === false) && (isMenu === false) && (isBtnMenu === false) && (isBtnMessage === false)) {
        if (this.$store.state.showMenu === true) {
          this.$store.commit('toggleWin');
        }
        if (this.$store.state.showMessage === true) {
          this.$store.commit('toggleMessage');
        }
      }
    }
  }
};
</script>

<style>
@import url('../static/font/iconfont.css');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑;
}
html {
  height: 100%;
}
body {
  height: 100%;
  overflow: hidden;
}
#win10 {
  width: 100%;
  height: 100%;
  background: black url("./assets/AerialPantanal.jpg") no-repeat fixed;
  background-size: 100% 100%;
  position: relative;
}
</style>
