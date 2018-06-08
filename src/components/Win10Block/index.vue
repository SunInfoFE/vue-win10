<template>
  <div class="win10-block" ref="win10-block">
    <grid-layout :layout="layout" :col-num="colnum" :row-height="50" :is-draggable="draggable" :is-resizable="false" :is-mirrored="false" :vertical-compact="true" :margin="[5, 5]" :use-css-transforms="true">
      <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" @resized="resized" @moved="moved" @move="move">
        <div :class="['win10-block-container','fade']">
          <Tmp1 v-if="item.type === 1" :name="item.i" :model="item.model" />
          <Tmp2 v-if="item.type === 2" :name="item.i" :model="item.model" />
          <Tmp3 v-if="item.type === 3" :name="item.i" :model="item.model" />
          <div class="win10-block-tmp-mask" :data-index="item.i" @click="blockClick(item)" @contextmenu="showMenu" />
        </div>
      </grid-item>
    </grid-layout>
    <context-menu :contextMenuData="contextMenuData" @small="editSize('small')" @mid="editSize('mid')" @big="editSize('big')" @deleteItem="deleteItem()">
    </context-menu>
  </div>
</template>

<script>
/* eslint-disable */
import { Tmp1, Tmp2, Tmp3 } from './Tmp'
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  name: 'Win10Block',
  data() {
    return {
      blockindex: 0,
      colnum: 1,
      containerWidth: 0,
      draggable: true,
      newlayout: [],
      ismoved: false,
      contextMenuData: {
        menuName: 'demo',
        axios: {
          x: null,
          y: null
        },
        menulists: [
          {
            icoName: 'fa fa-home fa-fw', // icon (icon图标 )
            btnName: '调整大小', // The name of the menu option (菜单名称)
            menuName: 'editSize',
            child: [
              {
                fnHandler: 'small',
                icoName: 'fa fa-home fa-fw',
                btnName: '小',
                menuName: 'small',
              },
              {
                fnHandler: 'mid',
                icoName: 'fa fa-home fa-fw',
                btnName: '中',
                menuName: 'mid'
              },
              {
                fnHandler: 'big',
                icoName: 'fa fa-home fa-fw',
                btnName: '大',
                menuName: 'big'
              }
            ]
          },
          {
            fnHandler: 'deleteItem',
            icoName: 'fa fa-home fa-fw',
            btnName: '删除'
          }
        ]
      }
    }
  },
  props: {
    layout: {
      type: Array,
      default: []
    }
  },
  components: { GridLayout, GridItem, Tmp1, Tmp2, Tmp3 },
  methods: {
    init() {
      this.colnum = parseInt(this.$refs['win10-block'].offsetWidth / 55)
      this.containerWidth = parseInt(this.$refs['win10-block'].offsetWidth)
    },
    move() {
      this.ismoved = true  // 修复点击事件和移动事件重复的bug
    },
    moved(i, x, y) {
      let arr = []
      this.layout.map(item => {
        if (item.i === i) {
          let obj = Object.assign({}, item)
          obj.x = x
          obj.y = y
          arr.push(obj)
        } else {
          arr.push(item)
        }
      })
      this.$emit('setlayout', arr);
      setTimeout(() => {
        this.ismoved = false // 修复点击事件和移动事件重复的bug
      }, 200);
    },
    resized(i, x, y, h, w) {
      let arr = []
      this.layout.map(item => {
        if (item.i === i) {
          let obj = Object.assign({}, item)
          obj.x = x
          obj.y = y
          obj.h = parseInt(h / 58)
          obj.y = y
          arr.push(obj)
        } else {
          arr.push(item)
        }
      })
      this.$emit('setlayout', arr);
    },
    showMenu(e) {
      e.preventDefault()
      let i = e.target.dataset.index;
      let x = e.clientX
      let y = e.clientY
      this.contextMenuData.axios = {
        x, y
      }
      this.blockindex = e.target.dataset.index
    },
    editSize(size) {
      this.$emit('editSize', size, this.blockindex)
    },
    deleteItem() {
      this.$emit('deleteItem', this.blockindex)
    },
    blockClick(item) {
      if (this.ismoved) {
        return
      }
      this.$emit('blockClick', item)
    }
  },
  mounted() {
    this.init();
  },
  beforeUpdate() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.win10-block {
  font-weight: normal;
}
.win10-block-tmp {
  position: relative;
  width: 100%;
  height: 100%;
}
.win10-block-tmp.tmp2,
.win10-block-tmp.tmp3 {
  overflow: hidden;
}
.win10-block-tmp .tmp-wrap {
  width: 100%;
  position: absolute;
}
.win10-block-tmp .tmp-wrap-card {
  position: relative;
  width: 100%;
  height: 110px;
}

.win10-block-tmp-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0%;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #00000000;
  z-index: 999;
  cursor: pointer;
}
.win10-block-tmp-mask:hover {
  border: 2px solid #fff;
}
.win10-block-tmp-mask:active {
  cursor: move;
}
.win10-block-container {
  position: relative;
  width: 100%;
  height: 100%;
}
/* .win10-block-container:active {
  box-shadow: 0px 5px 20px rgb(151, 148, 148);
} */
.win10-block-tmp .tmp-wrap.fade {
  -moz-transition: all 1s cubic-bezier(0.23, -0.01, 0.18, 1.01);
  -webkit-transition: all 1s cubic-bezier(0.23, -0.01, 0.18, 1.01);
  -o-transition: all 1s cubic-bezier(0.23, -0.01, 0.18, 1.01);
  -ms-transition: all 1s cubic-bezier(0.23, -0.01, 0.18, 1.01);
  transition: all 1s cubic-bezier(0.23, -0.01, 0.18, 1.01);
}
.win10-block-container.fade {
  -moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
