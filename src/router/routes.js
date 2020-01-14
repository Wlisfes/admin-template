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
	}
];

export default routes;
