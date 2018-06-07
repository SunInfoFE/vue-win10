<template>
  <div class="win10-window">
    <div class="win10-window-header" v-text="title"></div>
    <div class="win10-window-body"></div>
    <div class="win10-window-top-left"></div>
    <div class="win10-window-top"></div>
    <div class="win10-window-top-right"></div>
    <div class="win10-window-right"></div>
    <div class="win10-window-bottom-left"></div>
    <div class="win10-window-bottom"></div>
    <div class="win10-window-bottom-right"
         :style="{right: bottomRight.right + 'px', bottom: bottomRight.bottom + 'px'}"
         @mousedown="mousedown"
         @mousemove="mousemove"
         @mouseup="mouseup">
    </div>
    <div class="win10-window-left"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  data () {
    return {
      bottomRight: {
        right: -8,
        bottom: -8
      },
      temp: {
        orgX: 0,
        orgY: 0
      }
    };
  },
  methods: {
    mousedown (e) {
      this.temp.orgX = e.clientX;
      this.temp.orgY = e.clientY;
      console.log(e.clientX);
      console.log(e.clientY);
    },
    mousemove (e) {
      // this.bottomRight.right = this.bottomRight.right + (e.clientX - this.temp.orgX);
      // this.bottomRight.bottom = this.bottomRight.bottom + (e.clientY - this.temp.orgY);
      // let x = e.clientX - this.temp.orgX;
      // let y = e.clientY - this.temp.orgY;
      console.log(e.clientX);
      console.log(e.clientY);
      console.log(e.clientX - this.temp.orgX);
      console.log(e.clientY - this.temp.orgY);
    },
    mouseup (e) {
      //
    }
  }
};
</script>

<style>
.win10-window {
  width: 800px;
  height: 600px;
  background-color: #795da3;
  position: absolute;
  top: 100px;
  left: 100px;
  display: flex;
  flex-direction: column;
}
.win10-window-header {
  height: 38px;
  padding: 8px;
}
.win10-window-body {
  flex: 1;
}
.win10-window-top-left {
  position: absolute;
  left: -8px;
  top: -8px;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
}
.win10-window-top {
  position: absolute;
  left: 8px;
  right: 8px;
  height: 16px;
  top: -8px;
  cursor: ns-resize;
}
.win10-window-top-right {
  position: absolute;
  right: -8px;
  top: -8px;
  height: 16px;
  width: 16px;
  cursor: nesw-resize;
}
.win10-window-right {
  position: absolute;
  right: -8px;
  top: 8px;
  bottom: 8px;
  width: 16px;
  cursor: ew-resize;
}
.win10-window-bottom-left {
  position: absolute;
  left: -8px;
  bottom: -8px;
  width: 16px;
  height: 16px;
  cursor: nesw-resize;
}
.win10-window-bottom {
  position: absolute;
  right: 8px;
  left: 8px;
  height: 16px;
  bottom: -8px;
  cursor: ns-resize;
}
.win10-window-bottom-right {
  position: absolute;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
  background-color: #63a35c;
}
.win10-window-left {
  position: absolute;
  left: -8px;
  bottom: 8px;
  width: 16px;
  top: 8px;
  cursor: ew-resize;
}
</style>
