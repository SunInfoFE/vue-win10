<template>
  <div class="win10-block-tmp tmp3" ref="tmp3">
    <div class="tmp-wrap fade" :style="{'top':`${tmpWrapTop}px`,'height':`${tmpWrapHeight}px`}">
      <div class="tmp-wrap-item" v-for="(item, index) in model" :key="index">
        <div v-if="index === 0 " class="tmp-wrap-card" :style="{backgroundColor: (item.backgroundColor) || '#00000000'}">
          <img class="iconimage" :src="item.image" alt="">
          <p v-if="item.text.show" :style="{'color':item.text.color}">{{name}}</p>
        </div>
        <div v-if="index === 1 " class="tmp-wrap-card">
          <div class="fullimage"><img :src="item.fullImage" alt=""></div>
          <p v-if="item.text.show" :style="{'color':item.text.color}">{{name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tmp3',
  data() {
    return {
      tmpWrapTop: 0,
      tmpWrapHeight: null
    };
  },
  props: {
    model: {
      type: Array
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    getTmpWrapHeight() {
      return this.model.length * 110;
    },
    getRandom() {
      return Math.floor(Math.random() * 5000);
    },
    slide() {
      this.tmpWrapHeight = this.getTmpWrapHeight();
      if (this.model.length > 1) {
        let time = 2000;
        for (let i = 0; i < (this.model.length - 1) * 2; i++) {
          (() => {
            time += this.getRandom() * 10 + this.getRandom() * 10 + 2000;
            setTimeout(() => {
              if (i / (this.model.length - 1) * 2 < 0.5) {
                this.tmpWrapTop += -110;
              } else {
                this.tmpWrapTop += 110;
              }
            }, time);
          })();
        }
      }
    }
  },
  mounted() {
    this.slide();
  }
};
</script>

<style scoped>
.win10-block-tmp.tmp3 .iconimage {
  position: absolute;
  height: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.win10-block-tmp.tmp3 .fullimage {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  margin: auto;
}
.win10-block-tmp.tmp3 .fullimage img {
  width: 100%;
}
.win10-block-tmp.tmp3 p {
  position: absolute;
  left: 6px;
  bottom: 3px;
  margin: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}
</style>
