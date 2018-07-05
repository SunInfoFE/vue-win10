import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showMenu: false,
    showMessage: false,
    winSize: {
      width: 0,
      height: 0
    },
    winArr: [],
    zIndex: 1001
  },
  mutations: {
    toggleWin (state) {
      state.showMessage = false;
      state.showMenu = !state.showMenu;
    },
    toggleMessage (state) {
      state.showMenu = false;
      state.showMessage = !state.showMessage;
    },
    setWinSize (state, payload) {
      state.winSize.width = payload.width;
      state.winSize.height = payload.height;
    },
    newWin (state, payload) {
      for (let i = 0; i < state.winArr.length; i++) {
        if (state.winArr[i].name === payload.name) { // 如果当前业务已打开，则前置显示
          state.winArr[i].zIndex = state.zIndex;
          state.zIndex++;
          state.winArr = JSON.parse(JSON.stringify(state.winArr));
          return false;
        }
      }
      // 当前业务未打开，需要打开
      state.winArr.push({
        name: payload.name,
        alt: payload.alt,
        zIndex: state.zIndex
      });
      state.zIndex++;
    },
    destroyWin (state, payload) {
      for (let i = 0; i < state.winArr.length; i++) {
        if (state.winArr[i].name === payload.name) {
          state.winArr.splice(i, 1);
          return false;
        }
      }
    },
    setZIndex (state, payload) {
      for (let i = 0; i < state.winArr.length; i++) {
        if (state.winArr[i].name === payload.name) {
          state.winArr[i].zIndex = state.zIndex;
          state.zIndex++;
          state.winArr = JSON.parse(JSON.stringify(state.winArr));
          return false;
        }
      }
    }
  }
});

export default store;
