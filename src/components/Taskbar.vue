<template>
  <div class="win10-taskbar">
    <div class="win10-taskbar-group-left">
      <win10-button
          icon="windows"
          title="菜单"
          class="win10-btn-menu"
          @click="handleWinBtn">
      </win10-button>
    </div>
    <div class="win10-taskbar-group-middle">
      <div class="win10-a"></div>
    </div>
    <div class="win10-taskbar-group-right">
      <div class="win10-taskbar-time" v-html="display"></div>
      <win10-button
          icon="message"
          title="消息"
          class="win10-btn-message"
          @click="handleMessageBtn">
      </win10-button>
      <div class="win10-taskbar-show-desktop" title="显示桌面"></div>
    </div>
  </div>
</template>

<script>
let Win10Button = () => import(/* webpackChunkName: 'win10-button' */ './Button');

export default {
  components: {
    Win10Button
  },
  data () {
    return {
      time: Date.now()
    };
  },
  computed: {
    display () {
      let date = new Date(this.time);
      let yyyy = date.getFullYear();
      let MM = date.getMonth() + 1;
      let dd = date.getDay();
      let hh = date.getHours();
      if (hh < 10) {
        hh = '0' + hh;
      }
      let mm = date.getMinutes();
      if (mm < 10) {
        mm = '0' + mm;
      }
      return `${hh}:${mm}<br>${yyyy}/${MM}/${dd}`;
    }
  },
  created () {
    setInterval(() => {
      this.time = Date.now();
    }, 1000);
  },
  methods: {
    handleWinBtn () {
      this.$store.commit('toggleWin');
    },
    handleMessageBtn () {
      this.$store.commit('toggleMessage');
    }
  }
};
</script>

<style>
.win10-taskbar {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  background-color: rgba(19, 23, 28, 0.9);
  z-index: 999;
  display: flex
}
.win10-taskbar .win10-button {
  float: left;
}
.win10-taskbar-group-middle {
  flex: 1;
}
.win10-taskbar-time {
  width: auto;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  padding: 0 10px;
  transition: all 0.3s;
  float: left;
  user-select: none;
}
.win10-taskbar-time:hover {
  background-color: rgba(106, 105, 100, 0.7);
}
.win10-taskbar-show-desktop {
  float: left;
  width: 10px;
  height: 40px;
  margin-left: 6px;
  border-left: 1px solid #808080;
  transition: all 0.3s;
}
.win10-taskbar-show-desktop:hover {
  background-color: rgba(106, 105, 100, 0.7);
  cursor: pointer;
}
</style>
