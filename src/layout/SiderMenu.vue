
<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Layout } from 'ant-design-vue';
import Menu from '@/layout/Menu';
export default {
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapState({
            collapsed: state => state.app.collapsed
        })  
    },
    methods: {
        //监听视口更改响应式布局
        handelbreakpoint(Boll) {
            this.$store.commit('setcollapsed', Boll)
        }
    },
    render() {
        return (
            !this.isMobile() && <Layout.Sider
                trigger={null}
                collapsible
                collapsed={this.collapsed}
                breakpoint="lg"
                onBreakpoint={this.handelbreakpoint}
                width={256}
            >
                <Menu></Menu>
            </Layout.Sider>
        )
    }
}
</script>

<style lang="less" scoped>

</style>