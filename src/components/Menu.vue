<template>
  <div class="win10-menu" :style="{bottom: bottom}">
    <div>
      <Win10Block :layout="layout" @setlayout="setlayout" @blockClick="blockClick" @editSize="editSize" @deleteItem="deleteItem"></Win10Block>
    </div>
  </div>
</template>

<script>
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
      return this.$store.state.showMenu ? '0' : '-480px';
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
    }
  }
};
</script>

<style>
.win10-menu {
  width: 680px;
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
</style>
