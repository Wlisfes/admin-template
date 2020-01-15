import Vue from 'vue';
import router from '@/router';
import store from '@/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
	NProgress.start();
	const user = Vue.ls.get('user');

	if (user) {
		if ('/login' === to.path) {
			next({
				redirect: true,
				path: '/'
			});
		} else {
			next();
		}
	} else {
		if ('/login' !== to.path) {
			next({
				redirect: true,
				path: '/login'
			});
		} else {
			next();
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});
