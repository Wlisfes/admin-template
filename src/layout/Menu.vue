
<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Menu,Icon } from 'ant-design-vue';
const { SubMenu,Item } = Menu
export default {
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapState({
            collapsed: state => state.app.collapsed,
            menuOpenKeys: state => state.app.menuOpenKeys,
            menuSelectedKeys: state => state.app.menuSelectedKeys
        })
    },
    data () {
        return {
            rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
            openKeys: ['sub1'],
            selectedKeys: ['sub1-1'],

            MenuRoute: [
                {
                    key: 'sub1',
                    icon: 'pie-chart',
                    title: '刀剑神域',
                    children: [
                        {
                            key: 'sub1-1',
                            title: '桐谷和人'
                        },
                        {
                            key: 'sub1-2',
                            title: '结诚明月奈'
                        },
                        {
                            key: 'sub1-3',
                            title: '西莉卡'
                        }
                    ]
                },
                {
                    key: 'sub2',
                    icon: 'radar-chart',
                    title: '斩·赤红之瞳',
                    children: [
                        {
                            key: 'sub2-1',
                            title: '玛茵'
                        },
                        {
                            key: 'sub1-2',
                            title: '赤瞳'
                        },
                        {
                            key: 'sub1-3',
                            title: '黑瞳'
                        }
                    ]
                },
                {
                    key: 'sub3',
                    icon: 'heat-map',
                    title: '樱花庄的宠物女孩',
                    children: [
                        {
                            key: 'sub3-1',
                            title: '真白'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        //open菜单过滤
        handelMenuOpenChenge(openKeys) {
            console.log(openKeys)
            const latestOpenKey = openKeys.find(key => this.menuOpenKeys.indexOf(key) === -1)

            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                // this.$store.commit('setmenuOpenKeys', openKeys)
                this.openKeys = openKeys
            }
            else {
                const MeunOpenKeys = latestOpenKey ? [latestOpenKey] : []
                // this.$store.commit('setmenuOpenKeys', MeunOpenKeys)
                this.openKeys = MeunOpenKeys
            }
        },
        handelMenuSelect(e) {
            console.log(e)
            this.selectedKeys = e.selectedKeys
            // this.$store.commit('setmenuSelectedKeys', e.keyPath)
        }
    },
    watch: {
        collapsed() {
            if (this.collapsed) {
                this.openKeys = []
            } else {
                
            }
        }
    },
    render() {
        const MenuRoute = this.MenuRoute
        return (
            <Menu
                theme="dark"
                mode="inline"
                openKeys={this.openKeys}
                selectedKeys={this.selectedKeys}
                onOpenChange={this.handelMenuOpenChenge}
                onSelect={this.handelMenuSelect}
            >
                {MenuRoute.map(ele => (
                    <SubMenu key={ele.key}>
                        <span slot="title"><Icon type={ele.icon} /><span>{ele.title}</span></span>
                        {ele.children.map(chil => (
                            <Item key={chil.key}>{chil.title}</Item>
                        ))}
                    </SubMenu>
                ))}
            </Menu>
        )
    }
}


</script>