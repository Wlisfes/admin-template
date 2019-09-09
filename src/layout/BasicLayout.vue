/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:06:28 
 * @Last Modified by:  情雨随风 
 * @Last Modified time: 2019-09-09 23:06:28 
 * @Description: 后台首页布局组件
 */


<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { Layout,Drawer } from 'ant-design-vue';

import SiderMenu from '@/components/Sider/SiderMenu';
import SiderDrawer from '@/components/Sider/SiderDrawer';
import Content from '@/components/Sider/Content';
export default {
    name: 'BasicLayout',
    mixins: [mixin, mixinDevice],
    methods: {
        
    },
    render() {
        return (
            <Layout class="BasicLayout">
                <SiderDrawer></SiderDrawer>
                <SiderMenu></SiderMenu>
                <Content></Content>
            </Layout>
        )
    }
}
</script>

<style lang="less">
.BasicLayout {
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
        &:hover {
            color: #1890ff;
        }
    }
}
</style>