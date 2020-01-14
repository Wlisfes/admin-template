import Vue from 'vue';
import Storage from 'vue-ls';
import { notification } from 'ant-design-vue';
import '@/assets/style/common.less';

Vue.config.productionTip = false;
Vue.prototype.$notification = notification;
Vue.use(Storage, {
	namespace: 'vuejs__',
	name: 'ls',
	storage: 'local'
});
