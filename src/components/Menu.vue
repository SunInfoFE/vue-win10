<template>
  <div class="win10-menu" :style="{bottom: bottom}">
    <div class="list win10-menu-hidden animated animated-slideOutLeft">
      <div class="item">
        <i class="red icon fa fa-wrench fa-fw"></i>
        <span>API测试</span>
      </div>
      <div class="sub-item" onclick="Win10.openUrl('./child.html','子页')">父子页沟通</div>
      <div class="sub-item" onclick="Win10.commandCenterOpen()">打开消息中心</div>
      <div class="sub-item" onclick="Win10.newMsg('API测试','通过API可以发送消息至消息中心，自定义标题与内容(点击我试试)',function() {alert('click')})">发送带回调的消息</div>
      <div class="sub-item" onclick="Win10.menuClose()">关闭菜单</div>
      <div class="item">
        <i class="blue icon fa fa-gavel fa-fw"></i>辅助工具</div>
      <div class="sub-item" onclick="Win10.openUrl('win10ui.yuri2.cn/src/tools/builder-shortcut.html','图标代码生成器')">桌面图标代码生成器</div>
      <div class="sub-item" onclick="Win10.openUrl('win10ui.yuri2.cn/src/tools/builder-tile.html','磁贴代码生成器')">磁贴代码生成器</div>
      <div class="sub-item" onclick="Win10.openUrl('win10ui.yuri2.cn/src/tools/builder-menu.html','菜单代码生成器')">菜单代码生成器</div>
      <div class="item" onclick="Win10.aboutUs()">
        <i class="purple icon fa fa-info-circle fa-fw"></i>关于</div>
      <div class="item" onclick="layer.open({
                title:'支持作者',
                type: 1,
                area:'300px',
                offset:'50px',
                shadeClose:true,
                content: '<img width=\'300\' src=\'./img/presentation/donation.jpg\' />'
            })">
        <i class="green icon fa fa-thumbs-up fa-fw"></i>捐赠</div>
      <div class="item" onclick=" Win10.exit();">
        <i class="black icon fa fa-power-off fa-fw"></i>关闭</div>
    </div>
    <div class="blocks">
      <Win10Block :layout="layout" @setlayout="setlayout" @blockClick="blockClick" @editSize="editSize" @deleteItem="deleteItem"></Win10Block>
    </div>
  </div>
</template>

<script>
// import MenuList from './MenuList'
import Win10Block from '@/components/Win10Block/index';
import defaultdata from './default';

export default {
  data() {
    return {
      layout: defaultdata
    };
  },
  components: {
    Win10Block
  },
  computed: {
    bottom() {
      return this.$store.state.showMenu ? '40px' : '-480px';
    }
  },
  methods: {
    setlayout(arr) {
      this.layout = arr;
      console.log(JSON.stringify(arr));
      // window.localStorage.block = JSON.stringify(arr)
    },
    editSize(size, index) {
      switch (size) {
        case 'small':
          let arr1 = [];
          this.layout.map((item) => {
            if (item.i === index) {
              let obj = Object.assign({}, item);
              obj.w = 1;
              obj.h = 1;
              obj.type = 1;
              arr1.push(obj);
            } else {
              arr1.push(item);
            }
          });
          this.setlayout(arr1);
          break;
        case 'mid':
          let arr2 = [];
          this.layout.map((item) => {
            if (item.i === index) {
              let obj = Object.assign({}, item);
              obj.w = 2;
              obj.h = 2;
              obj.type = 2;
              arr2.push(obj);
            } else {
              arr2.push(item);
            }
          });
          this.setlayout(arr2);
          break;
        case 'big':
          let arr3 = [];
          this.layout.map((item) => {
            if (item.i === index) {
              let obj = Object.assign({}, item);
              obj.w = 4;
              obj.h = 2;
              obj.type = 3;
              arr3.push(obj);
            } else {
              arr3.push(item);
            }
          });
          this.setlayout(arr3);
          break;
        default:
          break;
      }
    },
    deleteItem(index) {
      let arr = [];
      this.layout.map((item) => {
        if (item.i !== index) {
          arr.push(item);
        }
      });
      this.setlayout(arr);
    },
    blockClick(item) {
      console.log(item);
      this.showDiyPage = true;
      setTimeout(() => {
        this.diypageopacity = 1;
      }, 100);
    }
  }
};
</script>

<style>
.win10-menu {
  width: 800px;
  height: 480px;
  position: fixed;
  bottom: -480px;
  left: 0;
  color: white;
  background-color: rgba(19, 23, 28, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 8;
  transition: all 0.5s;
}
.win10-menu .list {
  width: 240px;
  padding: 0 10px;
  padding-top: 5px;
  font-size: 12px;
  height: 100%;
}
.win10-menu .blocks {
  max-width: 770px;
  width: calc(100% - 230px);
  margin-top: 40px;
}
.win10-menu .list,
.blocks {
  float: left;
  width: 230px;
  height: 100%;
  overflow: auto;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}

.win10-menu .list .item, .sub-item {
    color: white;
    margin: 1px 0;
    line-height: 40px;
    padding: 0 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    transition: background-color 0.3s;
    position: relative;
    width: calc(100% - 20px);
}

.win10-menu .list .item:hover, .sub-item:hover {
background: rgba(189, 187, 187, 0.3);
}

</style>
