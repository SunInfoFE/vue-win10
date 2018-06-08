<template>
  <div class="win10-window"
       :style="{
          width: size.width + 'px',
          height: size.height + 'px',
          left: position.left + 'px',
          top: position.top + 'px'
        }">
    <div class="win10-window-header" @mousedown="mousedown($event, 'move')">
      <div class="win10-window-title" v-text="title"></div>
      <div class="win10-window-header-right">
        <win10-button
            icon="min"
            title="最小化">
        </win10-button>
        <win10-button
            :icon="fullScreen ? 'window-restore' : 'window-max'"
            title="最大化"
            @click="handleZoom">
        </win10-button>
        <win10-button
            icon="window-close"
            title="关闭">
        </win10-button>
      </div>
    </div>
    <div class="win10-window-body"></div>
    <div class="win10-window-top-left" @mousedown="mousedown($event, 'tl')"></div>
    <div class="win10-window-top" @mousedown="mousedown($event, 'top')"></div>
    <div class="win10-window-top-right" @mousedown="mousedown($event, 'tr')"></div>
    <div class="win10-window-right" @mousedown="mousedown($event, 'right')"></div>
    <div class="win10-window-bottom-left" @mousedown="mousedown($event, 'bl')"></div>
    <div class="win10-window-bottom" @mousedown="mousedown($event, 'bottom')"></div>
    <div class="win10-window-bottom-right" @mousedown="mousedown($event, 'br')"></div>
    <div class="win10-window-left" @mousedown="mousedown($event, 'left')"></div>
  </div>
</template>

<script>
let Win10Button = () => import('./Button');

export default {
  components: {
    Win10Button
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    minWidth: {
      type: Number,
      default: 200
    },
    minHeight: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      size: {
        width: 400,
        height: 300
      },
      position: {
        left: 100,
        top: 100
      },
      fullScreen: false
    };
  },
  methods: {
    mousedown (e, direction) {
      let that = this;
      let disX = e.clientX;
      let disY = e.clientY;
      document.onmousemove = function (e) {
        if (direction === 'tl') {
          that.size.width += (disX - e.clientX);
          that.size.height += (disY - e.clientY);
          if (that.size.width > that.minWidth) {
            that.position.left -= (disX - e.clientX);
          }
          if (that.size.height > that.minHeight) {
            that.position.top -= (disY - e.clientY);
          }
        } else if (direction === 'tr') {
          that.size.width += (e.clientX - disX);
          that.size.height += (disY - e.clientY);
          if (that.size.height > that.minHeight) {
            that.position.top -= (disY - e.clientY);
          }
        } else if (direction === 'bl') {
          that.size.width += (disX - e.clientX);
          that.size.height += (e.clientY - disY);
          if (that.size.width > that.minWidth) {
            that.position.left -= (disX - e.clientX);
          }
        } else if (direction === 'br') {
          that.size.width += (e.clientX - disX);
          that.size.height += (e.clientY - disY);
        } else if (direction === 'move') {
          that.position.left += (e.clientX - disX);
          that.position.top += (e.clientY - disY);
        } else if (direction === 'top') {
          that.size.height += (disY - e.clientY);
          if (that.size.height > that.minHeight) {
            that.position.top -= (disY - e.clientY);
          }
        } else if (direction === 'right') {
          that.size.width += (e.clientX - disX);
        } else if (direction === 'bottom') {
          that.size.height += (e.clientY - disY);
        } else if (direction === 'left') {
          that.size.width += (disX - e.clientX);
          if (that.size.width > that.minWidth) {
            that.position.left -= (disX - e.clientX);
          }
        }
        disX = e.clientX;
        disY = e.clientY;
        if (that.size.width <= that.minWidth) {
          that.size.width = that.minWidth;
        }
        if (that.size.height <= that.minHeight) {
          that.size.height = that.minHeight;
        }
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    handleZoom () {
      this.fullScreen = !this.fullScreen;
    }
  }
};
</script>

<style>
.win10-window {
  background-color: #795da3;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.win10-window-header {
  height: 40px;
  line-height: 40px;
  background-color: rgba(49, 49, 50, 0.9);
  color: #fff;
  display: flex;
}
.win10-window-title {
  flex: 1;
  padding-left: 10px;
}
.win10-window-header-right .win10-button {
  float: left;
}
.win10-window-body {
  background-color: #fff;
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
  right: -8px;
  bottom: -8px;
  width: 16px;
  height: 16px;
  cursor: nwse-resize;
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
