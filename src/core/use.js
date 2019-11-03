import Vue from 'vue';
import Storage from 'vue-ls';
import api from "@/api";
import { notification } from 'ant-design-vue';
import "@/assets/style/common.css";





Vue.config.productionTip = false;
Vue.prototype.api = api;
Vue.prototype.$notification = notification;
Vue.use(Storage, {
    namespace: 'vuejs__',
    name: 'ls',
    storage: 'local'
})
