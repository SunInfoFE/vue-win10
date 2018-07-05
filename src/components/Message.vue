<template>
  <div class="win10-message" :style="{right: right}">
    <div class="win10-message-header">
      消息中心
      <span @click="closeAllMsg">全部清除</span>
    </div>
    <div class="win10-message-content">
      <MessageList :messageList="messageList"></MessageList>
    </div>
  </div>
</template>

<script>
let MessageList = () => import('./MessageList.vue');

export default {
  components: {
    MessageList
  },
  data () {
    return {
      messageList: [
        {
          title: 'IT运维统计报表界面',
          text: 'IT运维统计报表界面，点击会话id为409的查询按钮，在会话回显界面，exit命令的显示结果中有乱码显示；',
          uuid: '00001'
        },
        {
          title: 'IT运维统计报表界面',
          text: 'IT运维统计报表界面，点击会话id为409的查询按钮，在会话回显界面，exit命令的显示结果中有乱码显示；',
          uuid: '00002'
        },
        {
          title: 'fa',
          text: 'faknk',
          uuid: '00003'
        },
        {
          title: 'fa',
          text: 'faknk',
          uuid: '00004'
        }
      ]
    };
  },
  computed: {
    right () {
      return this.$store.state.showMessage ? '0' : '-360px';
    }
  },
  methods: {
    closeAllMsg () {
      this.messageList = [];
    }
  }
};
</script>

<style>
.win10-message {
  width: 360px;
  height: calc(100% - 40px);
  position: fixed;
  right: -360px;
  top: 0;
  color: white;
  background-color: rgba(19, 23, 28, 0.8);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 9990;
  transition: all 0.5s;
}
.win10-message-header {
  height: 60px;
  line-height: 54px;
  font-size: 18px;
  font-weight: bolder;
  position: relative;
  padding: 6px;
}
.win10-message-header span {
  position: absolute;
  right: 6px;
  bottom: 6px;
  font-size: 14px;
  color: #808080;
  line-height: 1;
}
.win10-message-header span:hover {
  color: #fff;
  cursor: pointer;
}
.win10-message-content {
  font-weight: normal;
  color: #666666;
  line-height: normal;
}
</style>
