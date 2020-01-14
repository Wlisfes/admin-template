<!--
 * @Date: 2020-01-14 16:09:04
 * @Author: 情雨随风
 * @LastEditors  : 情雨随风
 * @LastEditTime : 2020-01-14 16:41:18
 * @Description: Content容器组件
 -->

<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Layout, Icon, Form } from 'ant-design-vue';

export default {
	name: 'Content',
	mixins: [mixin, mixinDevice],
	computed: {
		...mapState({
			collapsed: (state) => state.app.collapsed
		})
	},
	methods: {
		//手动更改响应式布局
		handelcollapsed() {
			this.$store.commit('app/setcollapsed', !this.collapsed);
		}
	},
	render() {
		return (
			<Layout>
				<Layout.Header style={{ background: '#fff', padding: '0' }}>
					<Icon
						class="trigger"
						type={this.collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={this.handelcollapsed}
					/>
				</Layout.Header>
				<Layout.Content
					style={{ background: '#fff', margin: this.isMobile() ? '24px 0' : '24px' }}
				>
					<router-view></router-view>
				</Layout.Content>
				<Layout.Footer>Footer</Layout.Footer>
			</Layout>
		);
	}
};
</script>
