import Vue from 'vue';
import router from '@/router';
import store from '@/store';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
	NProgress.start();

	next();
});

router.afterEach(() => {
	NProgress.done();
});
