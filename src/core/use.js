import Vue from 'vue';
import Storage from 'vue-ls';
import { notification, message } from 'ant-design-vue';
import '@/assets/style/common.less';

Vue.config.productionTip = false;
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.use(Storage, {
	namespace: 'vuejs__',
	name: 'ls',
	storage: 'local'
});

message.config({
	duration: 3,
	maxCount: 3
});

notification.config({
	duration: 3
});
