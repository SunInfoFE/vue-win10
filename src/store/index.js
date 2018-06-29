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
    }
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
    }
  }
});

export default store;
