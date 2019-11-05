/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:06:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-05 22:53:02
 * @Description: 界面路由配置
 */

import BasicLayout from "@/layout/BasicLayout";
import UserLayout from "@/layout/UserLayout";


const Routes = [
    {
        path: "/",
        name: "BasicLayout",
        redirect: '/home',
        meta: {

        },
        component: BasicLayout,
        children: [
            {
                path: 'home',
                name: 'home-index',
                meta: {
                    title: '首页',
                    key: 'home'
                },
                component: () => import('@/views/home/Home')
            },
            {
                path: 'admin/register',
                name: 'admin-register',
                meta: {
                    title: '用户注册',
                    key: 'admin'
                },
                component: () => import('@/views/admin/Register')
            },
            {
                path: 'admin/role',
                name: 'admin-role',
                meta: {
                    title: '角色管理',
                    key: 'admin'
                },
                component: () => import('@/views/admin/Role')
            },
            {
                path: 'admin/access',
                name: 'admin-access',
                meta: {
                    title: '权限管理',
                    key: 'admin'
                },
                component: () => import('@/views/admin/Access')
            },
            {
                path: 'add/article',
                name: 'add-article',
                meta: {
                    title: '新增文章',
                    key: 'article'
                },
                component: () => import('@/views/article/Article')
            },
            {
                path: 'article/list',
                name: 'article-list',
                meta: {
                    title: '文章列表',
                    key: 'article'
                },
                component: () => import('@/views/article/ArticleList')
            },
            {
                path: 'add/note',
                name: 'add-note',
                meta: {
                    title: '新增笔记',
                    key: 'note'
                },
                component: () => import('@/views/note/Note')
            },
            {
                path: 'note/list',
                name: 'note-list',
                meta: {
                    title: '笔记列表',
                    key: 'note'
                },
                component: () => import('@/views/note/NoteList')
            }

        ]
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

