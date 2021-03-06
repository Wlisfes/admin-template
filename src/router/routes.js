import { Main } from '@/components/layout';

const routes = [
	{
		path: '/',
		redirect: '/home',
		component: Main,
		children: [
			{
				path: 'home',
				component: () => import('@/views/Home/Home')
			},
			{
				path: 'user',
				component: () => import('@/views/User/User')
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/Login/Login')
	},
	{
		path: '/404',
		component: () => import('@/views/Error/404')
	},
	{
		path: '*',
		redirect: '/404'
	}
];

export default routes;
