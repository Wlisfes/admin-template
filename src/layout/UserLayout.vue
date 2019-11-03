/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:06:28 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-11-03 22:13:55
 * @Description: 登陆注册布局组件
 */


<script>
import { mixinDevice } from '@/utils/mixin';
const logo = require('@/assets/image/logo.png');
export default {
    name: 'UserLayout',
    mixins: [mixinDevice],
    render() {
        return (
            <div id="userLayout" class={{ 'user-layout-wrapper': true, [this.device]: true }}>
                <div class="container">
                    {
                        <div class="top">
                            <img class="logo" src="http://kst.lisfes.cn/static/img/logo.c9241552.png" />
                        </div>
                    }
                    {
                        <router-view />
                    }
                    {false &&
                        <div class="footer">
                            <div class="links">
                                <a href="/">帮助</a>
                                <a href="/">隐私</a>
                                <a href="/">条款</a>
                            </div>
                            <div class="copyright">
                                Swpe Ant Design ©2019 Created by Wlisfes
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
</script>

<style lang="less">
#userLayout.user-layout-wrapper {
    height: 100vh;
    &.mobile {
        .container {
            .main {
                max-width: 368px;
                width: 98%;
            }
        }
    }
    .container {
        width: 100%;
        min-height: 100%;
        background: #f0f2f5 url('~@/assets/image/login.jpg');
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        transition: all 500ms;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 200px;
        @media (max-width: 578px) {
            padding-bottom: 0;
        }
        .top {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
            .logo {
                width: 180px;
                border-radius: 90px;
                display: block;
                cursor: pointer;
                animation: logo 10s linear 0s infinite;
                @media (max-width: 578px) {
                    width: 120px;
                    border-radius: 60px;
                }
                @keyframes logo {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            }
        }

        .main {
            min-width: 300px;
            width: 450px;
            margin: 0 auto;
            background-color: #f0f2f5;
            padding: 0 16px 16px;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .footer {
            position: absolute;
            width: 100%;
            bottom: 0;
            padding: 0 16px;
            margin: 48px 0 24px;
            text-align: center;
            .links {
                margin-bottom: 8px;
                font-size: 14px;
                a {
                    color: rgba(0, 0, 0, 0.45);
                    transition: all 0.3s;
                    &:not(:last-child) {
                        margin-right: 40px;
                    }
                }
            }
            .copyright {
                color: rgba(0, 0, 0, 0.45);
                font-size: 14px;
            }
        }
    }
}
</style>