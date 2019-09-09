
<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Layout } from 'ant-design-vue';
import Menu from '@/layout/Menu';
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
        //监听视口更改响应式布局
        handelbreakpoint(Boll) {
            this.$store.commit('app/setcollapsed', Boll)
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
            !this.isMobile() && <Layout.Sider
                trigger={null}
                collapsible
                collapsed={this.collapsed}
                breakpoint="lg"
                onBreakpoint={this.handelbreakpoint}
                width={256}
            >
                <Menu {...{ props }}></Menu>
            </Layout.Sider>
        )
    }
}
</script>

<style lang="less" scoped>

</style>