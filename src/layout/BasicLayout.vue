
<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { Layout,Drawer } from 'ant-design-vue';

import SiderMenu from '@/layout/SiderMenu';
import SiderDrawer from '@/layout/SiderDrawer';
import Content from '@/layout/Content';
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