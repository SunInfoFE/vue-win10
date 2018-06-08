// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';

// 以下三行是右键菜单
import ContextMenu from '@/components/ContextMenu';
import './components/ContextMenu/style/css/font-awesome.min.css';

Vue.config.productionTip = false; ;
Vue.use(ContextMenu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
});
