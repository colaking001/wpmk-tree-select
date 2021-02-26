import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import { Select, Option, Tree } from 'element-ui';
import treeSelect from '@/index';
Vue.use(Select);
Vue.use(Option);
Vue.use(Tree);
Vue.use(treeSelect);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
