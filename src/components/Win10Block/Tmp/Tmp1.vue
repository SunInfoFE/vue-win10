<template>
  <div class="win10-block-tmp tmp1" :style="{backgroundColor: (model[0].backgroundColor) || '#00000000'}">
    <img :src="model[0].image">
  </div>
</template>

<script>
export default {
  name: 'Tmp1',
  props: {
    model: {
      type: Array
    }
  }
};
</script>

<style scoped>
.win10-block-tmp.tmp1 {
  position: relative;
}
.win10-block-tmp.tmp1 img{
  position: absolute;
  width: 50%;
  height: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto
}
</style>
