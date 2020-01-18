<!--
 * @Date: 2020-01-14 16:21:48
 * @Author: 情雨随风
 * @LastEditors  : 情雨随风
 * @LastEditTime : 2020-01-17 14:08:47
 * @Description: 大屏侧边导航栏组件
 -->

<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Layout } from 'ant-design-vue';
import { Menu } from '@/components/sider';

export default {
	mixins: [mixin, mixinDevice],
	computed: {
		...mapState({
			collapsed: (state) => state.app.collapsed,
			openKeys: (state) => state.app.openKeys,
			selectedKeys: (state) => state.app.selectedKeys
		})
	},
	data() {
		return {
			menu: [
				{
					key: 'home',
					icon: 'home',
					title: '主页',
					children: [
						{
							key: 'home-index',
							title: '首页',
							path: '/'
						}
					]
				},
				{
					key: 'admin',
					icon: 'team',
					title: '管理员/权限',
					children: [
						{
							key: 'admin-register',
							title: '用户注册',
							path: '/user'
						},
						{
							key: 'admin-role',
							title: '角色管理',
							path: '/'
						},
						{
							key: 'admin-access',
							title: '权限管理',
							path: '/'
						}
					]
				},
				{
					key: 'article',
					icon: 'chrome',
					title: '文章管理',
					children: [
						{
							key: 'add-article',
							title: '新增文章',
							path: '/'
						},
						{
							key: 'article-list',
							title: '文章列表',
							path: '/'
						}
					]
				},
				{
					key: 'note',
					icon: 'chrome',
					title: '笔记管理',
					children: [
						{
							key: 'add-note',
							title: '新增笔记',
							path: '/'
						},
						{
							key: 'note-list',
							title: '笔记列表',
							path: '/'
						}
					]
				}
			]
		};
	},
	methods: {
		//监听视口更改响应式布局
		handelbreakpoint(Boll) {
			this.$store.commit('app/setcollapsed', Boll);
		}
	},
	render() {
		const props = {
			menu: this.menu,
			openKeys: this.openKeys,
			selectedKeys: this.selectedKeys,
			collapsed: this.collapsed
		};

		return (
			!this.isMobile() && (
				<Layout.Sider
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
		);
	}
};
</script>
