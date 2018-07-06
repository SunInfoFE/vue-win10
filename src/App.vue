<template>
  <div id="win10" class="win10" @click="handleClick">
    <div class="win10-shortcut">
      <win10-shortcut
        v-for="(item, index) in shortcuts"
        :obj="item"
        :key="index"
        @dblclick="handleDblclick">
      </win10-shortcut>
    </div>
    <win10-window
      v-for="item in winArr"
      :obj="item"
      :key="item.name">
    </win10-window>
    <win10-menu></win10-menu>
    <win10-message></win10-message>
    <win10-taskbar></win10-taskbar>
  </div>
</template>

<script>
import {getClassName, getWinName} from './utils/dom.js';
import {mapState} from 'vuex';

let Win10Menu = () => import(/* webpackChunkName: 'win10-menu' */ './components/Menu');
let Win10Message = () => import(/* webpackChunkName: 'win10-message' */ './components/Message');
let Win10Shortcut = () => import(/* webpackChunkName: 'win10-shortcut' */ './components/Shortcut');
let Win10Taskbar = () => import(/* webpackChunkName: 'win10-taskbar' */ './components/Taskbar');
let Win10Window = () => import(/* webpackChunkName: 'win10-window' */ './components/Window');

export default {
  name: 'App',
  components: {
    Win10Menu,
    Win10Message,
    Win10Taskbar,
    Win10Shortcut,
    Win10Window
  },
  data () {
    return {
      shortcuts: [
        {name: 'assets-management', alt: '资产管理'},
        {name: 'assets-monitor', alt: '资产监控'},
        {name: '', alt: '授权策略'},
        {name: '', alt: '访问规则'},
        {name: '', alt: '告警统计'},
        {name: '', alt: '我的待办'},
        {name: '', alt: '系统设置'},
        {name: '', alt: '资产巡检'},
        {name: '', alt: '资产发现'},
        {name: '', alt: '业务服务'},
        {name: '', alt: '电视墙'}
      ]
    };
  },
  computed: {
    ...mapState([
      'winArr'
    ])
  },
  mounted: function () {
    let that = this;
    this.getWinSize();
    window.onresize = function () {
      that.getWinSize();
    };
  },
  methods: {
    handleClick (e) {
      let isMessage = getClassName(e.target, 'win10-message');
      let isMenu = getClassName(e.target, 'win10-menu');
      let isBtnMenu = getClassName(e.target, 'win10-button win10-btn-menu');
      let isBtnMessage = getClassName(e.target, 'win10-button win10-btn-message');
      // 控制菜单和消息展示隐藏
      if ((isMessage === false) && (isMenu === false) && (isBtnMenu === false) && (isBtnMessage === false)) {
        if (this.$store.state.showMenu === true) {
          this.$store.commit('toggleMenu');
        }
        if (this.$store.state.showMessage === true) {
          this.$store.commit('toggleMessage');
        }
      }
      // 控制win窗口的zIndex
      let isWindow = getClassName(e.target, 'win10-window');
      if (isWindow === true) {
        this.$store.commit('setZIndex', {
          name: getWinName(e.target, 'win10-window')
        });
      }
    },
    getWinSize () {
      this.$store.commit('setWinSize', {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      });
    },
    handleDblclick (obj) {
      this.$store.commit('newWin', obj);
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
  padding-bottom: 40px;
}
.win10-shortcut {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 80px;
}
</style>
