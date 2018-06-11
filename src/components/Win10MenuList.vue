<template>
  <div>
    <div style="width:100%;height:100%;" :class="[(menuItem.level === 1) ? 'item': 'sub-item', !!menuItem.children? (listShow ? 'has-sub-down' : 'has-sub-up') : '']" @click="click(menuItem.click)">
      <i v-if="menuItem.level === 1 && menuItem.icon.indexOf('fa-') !== -1" :style="{'background': menuItem.iconColor}" :class="['icon','fa','fa-fw', menuItem.icon || null]"></i>
      <div v-if="menuItem.level === 1 && menuItem.icon.indexOf('fa-') === -1" class="icon" :style="{'background': menuItem.iconColor}"><img :src="menuItem.icon" :alt="menuItem.title"></div>
      <span>{{menuItem.title}}</span>
    </div>
    <div v-if="!!menuItem.children" class="child-item" v-show="listShow">
      <Win10MenuList v-for="(item, index) in menuItem.children" :key="index" :menuItem="item"></Win10MenuList>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Win10MenuList',
  data() {
    return {
      listShow: false
    };
  },
  props: {
    menuItem: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  methods: {
    click(click) {
      this.listToggle(!!this.menuItem.children);
      if (!click) return null;
      click(this.menuItem.title);
    },
    listToggle(hasChildren) {
      if (hasChildren) {
        this.listShow = !this.listShow;
      }
    }
  }
};
</script>

<style>
.win10-menu .list .item,
.win10-menu .list .sub-item {
  color: white;
  margin: 1px 0;
  line-height: 40px;
  padding: 0 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: background-color 0.3s;
  position: relative;
  width: calc(100% - 20px);
  cursor: pointer;
}

.win10-menu .list .sub-item {
  padding-left: 30px;
}

.win10-menu .list .item:hover,
.win10-menu .list .sub-item:hover {
  background: rgba(189, 187, 187, 0.3);
}
.win10-menu .list .item .icon,
.win10-menu .list .sub-item .icon {
  line-height: 36px;
  font-size: 22px;
  float: left;
  margin-right: 0.5em;
  width: 36px;
  height: 36px;
  position: relative;
  top: 2px;
  background-color: grey;
}
.win10-menu .list .item .icon img,
.win10-menu .list .sub-item .icon img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 70%;
  height: 70%;
}
.win10-menu .list .item.has-sub-down::after {
  font: normal normal normal 14px/1 FontAwesome;
  content: "\f107";
  line-height: inherit;
  position: absolute;
  right: 15px;
  top: 0;
}
.win10-menu .list .item.has-sub-up::after {
  font: normal normal normal 14px/1 FontAwesome;
  content: "\f106";
  line-height: inherit;
  position: absolute;
  right: 15px;
  top: 0;
}
</style>
