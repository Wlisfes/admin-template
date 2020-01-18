import Vue from 'vue';
import router from '@/router';
import store from '@/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach(async (to, from, next) => {
	NProgress.start();
	const user = Vue.ls.get('user');

	if (user) {
		if ('/login' === to.path) {
			next({
				redirect: true,
				path: '/'
			});
			NProgress.done();
		} else {
			const hasRoutes = store.state.permission.addRoutes;
			if (hasRoutes.length > 0) {
				next();
			} else {
				const accessRoutes = await store.dispatch('permission/getRouter');
				router.addRoutes(accessRoutes);
				next({ ...to, replace: true });
			}
		}
	} else {
		if ('/login' !== to.path) {
			next({
				redirect: true,
				path: '/login'
			});
			NProgress.done();
		} else {
			next();
		}
	}
});

router.afterEach(() => {
	NProgress.done();
});
