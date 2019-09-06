<script>
import { Drawer } from 'ant-design-vue';
import { mapState } from 'vuex';
import { mixin, mixinDevice } from '@/utils/mixin';

export default {
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapState({
            collapsed: state => state.app.collapsed
        })  
    },
    methods: {
        //关闭侧边栏 
        handelClose() {
            this.$store.commit('setcollapsed', !this.collapsed)
        }  
    },
    render() {
        return (
            this.isMobile() && <Drawer
                placement='left'
                closable={false}
                visible={!this.collapsed}
                onClose={this.handelClose}
            >
            
            </Drawer>
        )
    }
}
</script>