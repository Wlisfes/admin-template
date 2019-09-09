
<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex'
import { Layout,Icon,Form } from 'ant-design-vue';
const { Header,Content,Footer } = Layout;

export default {
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapState({
            collapsed: state => state.app.collapsed
        })  
    },
    methods: {
        //手动更改响应式布局
        handelcollapsed() {
            this.$store.commit('app/setcollapsed', !this.collapsed)
        }
    },
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: '0' }}>
                    <Icon
                        class="trigger"
                        type={this.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.handelcollapsed}
                    />
                </Header>
                <Content style={{ background: '#fff', margin: this.isMobile() ? '24px 0' : '24px' }}>
                
                    
                </Content>
                <Footer></Footer>
            </Layout>
        )
    }
}

</script>