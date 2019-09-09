/*
 * @Author: 情雨随风 
 * @Date: 2019-09-09 23:04:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-09-09 23:05:04
 * @Description: 小屏幕抽屉式菜单栏组件
 */


import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Drawer,Layout } from 'ant-design-vue';
import Menu from '@/components/Sider/Menu';
import menu from './data'
export default {
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapState({
            collapsed: state => state.app.collapsed,
            openKeys: state => state.app.openKeys,
            selectedKeys: state => state.app.selectedKeys
        })  
    },
    data () {
        return {
            menu
        }
    },
    methods: {
        //关闭侧边栏 
        handelClose() {
            this.$store.commit('app/setcollapsed', !this.collapsed)
        }  
    },
    render() {
        const props = {
            menu: this.menu,
            openKeys: this.openKeys,
            selectedKeys: this.selectedKeys,
            collapsed: this.collapsed
        }
        return (
            this.isMobile() && <Drawer
                wrapClassName="Drawer-Container"
                placement='left'
                closable={false}
                visible={!this.collapsed}
                onClose={this.handelClose}
            >   
                <Layout.Sider
                    width={256}
                    style={{ minHeight: '100vh' }}
                >
                    <Menu {...{ props }}></Menu>
                </Layout.Sider>
            </Drawer>
        )
    }
}


