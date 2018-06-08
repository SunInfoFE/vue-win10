<template>
  <span class="vue-contextmenu-listWrapper" :ref="`vue-contextmenuName-${name}`" :class="`vue-contextmenuName-${name}`">
    <li v-for="(item, index) in child" class="context-menu-list" style="position:relative;" :key="index">
      <button @click.stop="fnHandler(item)" @mouseenter="mouseenter(item,$event)" @mouseleave="mouseleave(item,$event)">
        <i :class="item.icoName"></i>
        <span>{{item.btnName}}</span>
        <TreeMenu :ref="item.menuName" :name="item.menuName" :axios="newaxios" :parentaxios="{'x':parentaxios.x+150,'y':parentaxios.y}" :child="item.child" @fnHandler="fnHandler"></TreeMenu>
      </button>
    </li>
  </span>
</template>
<script>
export default {
  name: 'TreeMenu',
  data() {
    return {
      newaxios: {
        x: 0,
        y: 0
      }
    }
  },
  props: {
    child: {
      type: Array,
      default: () => []
    },
    axios: {
      type: Object,
      default: { x: 0, y: 0 }
    },
    parentaxios: {
      type: Object,
      default: { x: 0, y: 0 }
    },
    name: {
      type: String,
      default: ''
    }
  },
  watch: {
    'axios'(val) {
      var x = this.parentaxios.x
      var y = this.parentaxios.y
      var menu = document.getElementsByClassName(`vue-contextmenuName-${this.name}`)[0];
      if (menu.childNodes.length !== 0) {
        menu.style.display = 'block'
        menu.style.left = (x + 150) + 'px'
        menu.style.top = (y) + 'px'
      }
      document.addEventListener('mouseup', function (e) {
        // 解决mac电脑在鼠标右键后会执行mouseup事件
        if (e.button === 0) {
          menu.style.display = 'none'
        }
      }, false)
    }
  },
  methods: {
    fnHandler(item) {
      if (!item.child || item.child.length === 0) {
        this.$emit('fnHandler', item)
      }
    },
    mouseenter(item, e) {
      if (!item.child || item.child.length === 0) {
        return null
      } else {
        let x = e.clientX
        let y = e.clientY
        this.newaxios = {
          x, y
        }
      }
    },
    mouseleave(item, e) {
      if (!item.child || item.child.length === 0) {
        return null
      } else {
        let childmenu = this.$refs[item.menuName][0].$refs[`vue-contextmenuName-${item.menuName}`]
        childmenu.style.display = 'none'
        childmenu.style.left = null
        childmenu.style.top = null
      }
    }
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
  background: #f3f3f3;
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
.vue-contextmenu-listWrapper .context-menu-list button i,
.vue-contextmenu-listWrapper .context-menu-list button span {
  float: left;
}
.vue-contextmenu-listWrapper .context-menu-list button i {
  padding: 0 10px 0 10px;
}
.vue-contextmenu-listWrapper .context-menu-list button:hover {
  box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
  color: #ffffff;
  border-radius: 4px;
  background: -webkit-linear-gradient(
    bottom,
    #5a6a76,
    #2e3940
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    bottom,
    #5a6a76,
    #2e3940
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    bottom,
    #5a6a76,
    #2e3940
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to bottom, #5a6a76, #2e3940);
}
</style>
