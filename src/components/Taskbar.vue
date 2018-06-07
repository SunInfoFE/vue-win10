<template>
  <div class="win10-taskbar">
    <div class="win10-taskbar-group-left">
      <div class="win10-taskbar-btn" @click="handleWinBtn">
        <i class="s-icon-windows"></i>
      </div>
    </div>
    <div class="win10-taskbar-group-middle">
      <div class="win10-a"></div>
    </div>
    <div class="win10-taskbar-group-right">
      <div class="win10-taskbar-btn win10-taskbar-time" v-html="display"></div>
      <div class="win10-taskbar-btn" @click="handleMessageBtn">
        <i class="s-icon-message"></i>
      </div>
      <div class="win10-taskbar-btn-show-desktop" title="显示桌面"></div>
    </div>
  </div>
</template>

<script>
export default {
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
      let mm = date.getMinutes();
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
  position: fixed;
  bottom: 0;
  height: 40px;
  background-color: rgba(19, 23, 28, 0.9);
  z-index: 8;
  display: flex
}
.win10-taskbar-btn {
  float: left;
  color: white;
  text-align: center;
  width: 48px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  transition: all 0.3s;
}
.win10-taskbar-btn:hover {
  background-color: rgba(106, 105, 100, 0.7);
  cursor: pointer;
}
.win10-taskbar-group-left {
}
.win10-taskbar-group-middle {
  flex: 1;
}
.win10-taskbar-time {
  width: auto;
  font-size: 14px;
  line-height: 20px;
  padding: 0 10px;
}
.win10-taskbar-btn-show-desktop {
  float: left;
  width: 10px;
  height: 40px;
  margin-left: 6px;
  border-left: 1px solid #808080;
  transition: all 0.3s;
}
.win10-taskbar-btn-show-desktop:hover {
  background-color: rgba(106, 105, 100, 0.7);
}
</style>
