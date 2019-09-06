
<script>
import { mapState } from 'vuex';
import { Menu,Icon } from 'ant-design-vue';
const { SubMenu,Item } = Menu
export default {
    computed: {
        ...mapState({
            collapsed: state => state.app.collapsed,
            menuOpenKeys: state => state.app.menuOpenKeys,
            menuSelectedKeys: state => state.app.menuSelectedKeys
        })  
    },
    data () {
        return {
            rootSubmenuKeys: ['sub1', 'sub2', 'sub3']
        }
    },
    methods: {
        //open菜单过滤
        handelMenuOpenChenge(openKeys) {
            const latestOpenKey = openKeys.find(key => this.menuOpenKeys.indexOf(key) === -1)
            console.log(openKeys, latestOpenKey)

            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.$store.commit('setmenuOpenKeys', openKeys)
            }
            else {
                const MeunOpenKeys = latestOpenKey ? [latestOpenKey] : []
                this.$store.commit('setmenuOpenKeys', MeunOpenKeys)
            }
        },
        handelMenuSelect(e) {
            // this.$store.commit('setmenuSelectedKeys', e.keyPath)
        }
    },
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                // inlineCollapsed={this.collapsed}
                // openKeys={this.menuOpenKeys}
                selectedKeys={this.menuSelectedKeys}
                onOpenChange={this.handelMenuOpenChenge}
                onSelect={this.handelMenuSelect}
            >
                <SubMenu key="sub1">
                    <span slot="title"><Icon type="appstore" /><span>Navigation Two</span></span>
                    <Item key="sub1-1">sub1-1</Item>
                    <Item key="sub1-2">sub1-2</Item>
                </SubMenu>
                <SubMenu key="sub2">
                    <span slot="title"><Icon type="appstore" /><span>Navigation Two</span></span>
                    <Item key="sub2-1">sub2-1</Item>
                    <Item key="sub2-2">sub2-2</Item>
                </SubMenu>
                <SubMenu key="sub3">
                    <span slot="title"><Icon type="appstore" /><span>Navigation Two</span></span>
                    <Item key="sub3-1">sub3-1</Item>
                    <Item key="sub3-2">sub3-2</Item>
                </SubMenu>
            </Menu>
        )
    }
}

</script>
