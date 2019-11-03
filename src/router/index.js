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

var ACCESS_TOKEN = false

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const token = store.state.user.token
    if(token) {
        if(to.path === '/user/login' || to.path === '/user/register') {
            next({ path: '/' })
        }
        else {
            next()
        }
    }
    else {
        if(to.path === '/user/login' || to.path === '/user/register') {
            next()
        }
        else {
            next({ path: '/user/login' })
        }
    }
});


router.afterEach(() => {
    NProgress.done()
});


export default router;