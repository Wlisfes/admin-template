import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import defaultRouter from '@/router/defaultRouter';

Vue.use(VueRouter);

const createRouter = () =>
	new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes: defaultRouter
	});

export const asyncRoutes = routes;

const router = createRouter();

export const resetRouter = () => {
	const newRouter = createRouter();
	router.matcher = newRouter.matcher;
};

export default router;
