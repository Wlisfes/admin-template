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
			}
		]
	},
	{
		path: '/login',
		component: () => import('@/views/Login/Login')
	}
];

export default routes;
