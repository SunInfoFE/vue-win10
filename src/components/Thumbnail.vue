<template>
  <div class="win10-thumbnail" :style="{width: width}">{{obj.alt}}</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState([
      'winArr'
    ]),
    width: function () {
      let per = 100 / (this.winArr.length);
      return `calc(${per}% - 1px)`;
    }
  }
};
</script>

<style>
.win10-thumbnail {
  float: left;
  color: white;
  text-align: center;
  height: 40px;
  line-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: background-color 0.2s;
  max-width: 140px;
  border-bottom: 4px solid #707070;
  font-size: 14px;
  word-break: keep-all;
  padding: 0 6px;
  margin-right: 1px;
}
.win10-thumbnail:hover {
  background-color: rgba(106, 105, 100, 0.7);
  cursor: pointer;
}
</style>
