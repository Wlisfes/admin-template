import '@babel/polyfill'

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/core/use'
import bootstrap from '@/core/bootstrap'
import '@/permission'

console.log(process.env)

new Vue({
	router,
	store,
	created: bootstrap,
	render: h => h(App)
}).$mount('#app')
