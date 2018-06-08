<template>
  <span class="vue-contextmenu-listWrapper" :class="'vue-contextmenuName-' + contextMenuData.menuName">
    <li v-for="(item,index) in contextMenuData.menulists" class="context-menu-list" style="position:relative;" :key="index">
      <button @click.stop="fnHandler(item)" @mouseenter="mouseenter(item,$event)" @mouseleave="mouseleave(item,$event)">
        <i :class="item.icoName"></i>
        <span>{{item.btnName}}</span>
        <TreeMenu :ref="item.menuName" :name="item.menuName" :axios="axios" :parentaxios="contextMenuData.axios" :child="item.child" @fnHandler="fnHandler"></TreeMenu>
      </button>
    </li>
  </span>
</template>
<script>
  import TreeMenu from './TreeMenu.vue'
  export default {
    name: 'ContextMenu',
    data() {
      return {
        axios: {
          x: 0,
          y: 0
        }
      }
    },
    props: {
      contextMenuData: {
        type: Object,
        requred: false,
        default: {}
      },
      transferIndex: {
        type: Number,
        default: 0
      }
    },
    watch: {
      'contextMenuData.axios' (val) {
        var x = val.x
        var y = val.y
        var _this = this
        var index = _this.transferIndex
        var menuName = 'vue-contextmenuName-' + _this.contextMenuData.menuName
        var menu = document.getElementsByClassName(menuName)[index]
        menu.style.display = 'block'
        menu.style.left = (x + 1) + 'px'
        menu.style.top = (y + 1) + 'px'
        document.addEventListener('mouseup', function (e) {
          // 解决mac电脑在鼠标右键后会执行mouseup事件
          if (e.button === 0) {
            menu.style.display = 'none'
          }
        }, false)
      }
    },
    methods: {
      fnHandler (item) {
        if (!item.child || item.child.length === 0) {
          this.$emit(item.fnHandler)
        }
      },
      mouseenter (item, e) {
      if (!item.child || item.child.length === 0) {
  
      } else {
          let x = e.clientX
          let y = e.clientY
          this.axios = {
            x, y
          }
      }
    },
      mouseleave (item, e) {
      if (!item.child || item.child.length === 0) {
  
      } else {
        let childmenu = this.$refs[item.menuName][0].$refs[`vue-contextmenuName-${item.menuName}`]
        childmenu.style.display = 'none'
        childmenu.style.left = null
        childmenu.style.top = null
      }
    }
    },
    components: {
      TreeMenu
    }
  }
</script>
<style>
  .vue-contextmenu-listWrapper {
    box-shadow: 2px 2px 2px #cccccc;
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
  }
  .vue-contextmenu-listWrapper .context-menu-list {
    width: 150px;
    height: 32px;
    border-radius: 4px;
    background: #F3F3F3;
    text-decoration: none;
    list-style: none;
  }
  .vue-contextmenu-listWrapper .context-menu-list button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: block;
    outline: 0;
    border: 0;
  }
  .vue-contextmenu-listWrapper .context-menu-list button i,  .vue-contextmenu-listWrapper .context-menu-list button span {
    float: left;
  }
  .vue-contextmenu-listWrapper .context-menu-list button i{
    padding: 0 10px 0 10px;
  }
  .vue-contextmenu-listWrapper .context-menu-list button:hover {
    box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
    color: #ffffff;
    border-radius: 4px;
    background: -webkit-linear-gradient(bottom, #5a6a76 , #2e3940); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, #5a6a76, #2e3940); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, #5a6a76, #2e3940); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #5a6a76 , #2e3940);
  }
</style>
