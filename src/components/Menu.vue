<template>
  <div class="win10-menu" :style="{bottom: bottom}">
    <div class="list scrollbar">
      <Win10MenuList v-for="(item,index) in menuList" :key="index" :menuItem="item"></Win10MenuList>
    </div>
    <div class="blocks scrollbar">
      <Win10Block :layout="layout" @setlayout="setlayout" @blockClick="blockClick" @editSize="editSize" @deleteItem="deleteItem"></Win10Block>
    </div>
  </div>
</template>

<script>
// import MenuList from './MenuList'
import Win10Block from '@/components/Win10Block/index';
import Win10MenuList from '@/components/Win10MenuList';
import defaultdata from './default';

export default {
  data() {
    const _this = this;
    return {
      layout: defaultdata,
      menuList: [
        {
          title: 'api测试',
          icon: require('../assets/logo.png'),
          iconColor: '#FF5722',
          level: 1,
          click: _this.menuListClick,
          children: [
            {
              title: '父子沟通',
              icon: require('../assets/logo.png'),
              level: 2
            },
            {
              title: '打开消息中心',
              icon: require('../assets/logo.png'),
              level: 2
            },
            {
              title: '返回带回调消息',
              icon: require('../assets/logo.png'),
              level: 2
            }
          ]
        },
        {
          title: '辅助工具',
          icon: require('../assets/logo.png'),
          level: 1,
          iconColor: '#1E9FFF',
          click: _this.menuListClick,
          children: [
            {
              title: '父子沟通',
              icon: require('../assets/logo.png'),
              level: 2
            },
            {
              title: '打开消息中心',
              icon: require('../assets/logo.png'),
              level: 2
            },
            {
              title: '返回带回调消息',
              icon: require('../assets/logo.png'),
              level: 2
            }
          ]
        },
        { title: '关于', icon: 'fa-info-circle', level: 1, iconColor: '#1E9FFF', click: _this.menuListClick },
        { title: '捐赠', icon: require('../assets/logo.png'), level: 1, iconColor: '#1E9FFF', click: _this.menuListClick },
        { title: '关闭', icon: 'fa-power-off', level: 1, iconColor: '#1E9FFF', click: _this.menuListClick }
      ]
    };
  },
  components: {
    Win10Block, Win10MenuList
  },
  computed: {
    bottom() {
      return this.$store.state.showMenu ? '40px' : '-480px';
    }
  },
  methods: {
    setlayout(arr) {
      this.layout = arr;
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
    },
    menuListClick(type, params) {
      // type必须，params可选
      if (!type) return null;
      switch (type) {
        case '关闭':
          alert('关机');
          break;
        case '捐赠':
          alert('捐赠');
          break;
        case '关于':
          alert('关于');
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
.win10-menu {
  width: 790px;
  height: 480px;
  position: fixed;
  bottom: -480px;
  left: 0;
  color: white;
  background-color: rgba(19, 23, 28, 0.8);
  overflow: hidden;
  z-index: 8;
  transition: all 0.5s;
}
.win10-menu .list {
  width: 210px;
  padding: 0 10px;
  padding-top: 5px;
  font-size: 12px;
  height: 100%;
}
.win10-menu .blocks {
  max-width: 770px;
  height: 100%;
  width: calc(100% - 210px);
  padding-top: 20px;
  padding-bottom: 30px;
}
.win10-menu .list,
.blocks {
  float: left;
  height: 100%;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}

.scrollbar {
  overflow: auto;
  margin-bottom: 20px;
}
.scrollbar::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.scrollbar::-webkit-scrollbar-track {
  background: #00000000;
  border-radius: 2px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background: #747474;
  border-radius: 2px;
}
.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
.scrollbar::-webkit-scrollbar-corner {
  background: #00000000;
}
</style>
