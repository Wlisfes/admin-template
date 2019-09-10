/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:06:28 
 * @Last Modified by:  情雨随风 
 * @Last Modified time: 2019-09-09 23:06:28 
 * @Description: 登陆注册布局组件
 */


<script>
import { mixinDevice } from '@/utils/mixin'
const logo = require('@/assets/logo.svg')
export default {
    name: 'UserLayout',
    mixins: [mixinDevice],
    render() {
        return (
            <div id="userLayout" class={{ 'user-layout-wrapper': true, [this.device]: true }}>
                <div class="container">
                    {
                        <div class="top">
                            <div class="header">
                                <a href="/">
                                    <img src={logo} class="logo" alt="logo"/>
                                    <span class="title">Ant Design</span>
                                </a>
                            </div>
                            <div class="desc">
                                Swpe Ant Design ©2019 Created by Wlisfes
                            </div>
                        </div>
                    }
                    {
                        <router-view />
                    }
                    {
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
        background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
        background-size: 100%;
        padding: 110px 0 144px;
        position: relative;
        a {
            text-decoration: none;
        }
        .top {
            text-align: center;
            .header {
                height: 48px;
                line-height: 48px;
                .badge {
                    position: absolute;
                    display: inline-block;
                    line-height: 1;
                    vertical-align: middle;
                    margin-left: -12px;
                    margin-top: -10px;
                    opacity: 0.8;
                }
                .logo {
                    height: 48px;
                    vertical-align: top;
                    margin-right: 16px;
                    border-style: none;
                }
                .title {
                    font-size: 33px;
                    color: rgba(0, 0, 0, .85);
                    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
                    font-weight: 600;
                    position: relative;
                    top: 2px;
                }
            }
            .desc {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
                margin-top: 12px;
                margin-bottom: 40px;
            }
        }

        .main {
            min-width: 260px;
            width: 368px;
            margin: 0 auto;
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