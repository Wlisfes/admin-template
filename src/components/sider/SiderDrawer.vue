<!--
 * @Date: 2020-01-14 16:25:09
 * @Author: 情雨随风
 * @LastEditors  : 情雨随风
 * @LastEditTime : 2020-01-14 16:32:27
 * @Description: 小屏幕抽屉式菜单栏组件
 -->

<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { mapState } from 'vuex';
import { Drawer, Layout } from 'ant-design-vue';
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
							path: '/home'
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
							path: '/admin/register'
						},
						{
							key: 'admin-role',
							title: '角色管理',
							path: '/admin/role'
						},
						{
							key: 'admin-access',
							title: '权限管理',
							path: '/admin/access'
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
							path: '/add/article'
						},
						{
							key: 'article-list',
							title: '文章列表',
							path: '/article/list'
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
							path: '/add/note'
						},
						{
							key: 'note-list',
							title: '笔记列表',
							path: '/note/list'
						}
					]
				}
			]
		};
	},
	methods: {
		//关闭侧边栏
		handelClose() {
			this.$store.commit('app/setcollapsed', !this.collapsed);
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
			this.isMobile() && (
				<Drawer
					wrapClassName="Drawer-Container"
					placement="left"
					closable={false}
					visible={!this.collapsed}
					onClose={this.handelClose}
				>
					<Layout.Sider width={256} style={{ minHeight: '100vh' }}>
						<Menu {...{ props }}></Menu>
					</Layout.Sider>
				</Drawer>
			)
		);
	}
};
</script>

<style lang="less">
.Drawer-Container {
	.ant-drawer-body {
		padding: 0;
	}
}
</style>
