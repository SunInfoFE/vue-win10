<template>
  <div class="win10-button" @click="handleClick" :title="title">
    <i :class='"s-icon-" + icon'></i>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style>
.win10-button {
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: white;
  text-align: center;
  transition: all 0.3s;
}
.win10-button:hover {
  background-color: rgba(106, 105, 100, 0.7);
  cursor: pointer;
}
</style>
