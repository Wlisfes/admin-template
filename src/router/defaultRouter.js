import { Main } from '@/components/layout';

const defaultRouter = [
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

export default defaultRouter;
