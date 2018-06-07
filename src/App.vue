<template>
  <div id="win10">
    <win10-window></win10-window>
    <win10-menu></win10-menu>
    <win10-message></win10-message>
    <win10-taskbar></win10-taskbar>
  </div>
</template>

<script>
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
