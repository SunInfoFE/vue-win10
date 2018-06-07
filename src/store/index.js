import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showMenu: false,
    showMessage: false
  },
  mutations: {
    toggleWin (state) {
      state.showMessage = false;
      state.showMenu = !state.showMenu;
    },
    toggleMessage (state) {
      state.showMenu = false;
      state.showMessage = !state.showMessage;
    }
  }
});

export default store;
