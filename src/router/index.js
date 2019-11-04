import Vue from "vue";
import Router from "vue-router";
import store from '@/store';
import routes from '@/router/routes';
import NProgress from "nprogress";
import "nprogress/nprogress.css";


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if(Vue.ls.get('Access-Token')) {
        if (to.path === '/user/login') {
            next({ path: '/' })
            NProgress.done()
        }
        else {
            next()
        }
    }
    else {
        const whiteList = ['login', 'register']
        if(whiteList.includes(to.name)) {
            next()
        }
        else {
            next({ path: '/user/login' })
            NProgress.done()
        }
    }
});


router.afterEach(() => {
    NProgress.done()
});


export default router;