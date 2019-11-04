/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:06:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-03 17:09:51
 * @Description: 界面路由配置
 */

import BasicLayout from "@/layout/BasicLayout";
import UserLayout from "@/layout/UserLayout";


const Routes = [
    {
        path: "/",
        name: "BasicLayout",
        meta: {

        },
        component: BasicLayout
    },
    {
        path: "/user",
        name: "UserLayout",
        redirect: '/user/login',
        meta: {},
        component: UserLayout,
        children: [
            {
                path: 'login',
                name: 'login',
                meta: {},
                component: () => import('@/views/user/Login')
            },
            {
                path: 'register',
                name: 'register',
                meta: {},
                component: () => import('@/views/user/Register')
            }
        ]
    }
]


export default Routes;

