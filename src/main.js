import "@babel/polyfill";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button,Spin,Layout,Icon,Menu,Avatar } from 'ant-design-vue';


Vue.use(Button)
Vue.use(Spin)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Avatar)








Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");