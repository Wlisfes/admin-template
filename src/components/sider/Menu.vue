<!--
 * @Date: 2020-01-14 16:19:59
 * @Author: 情雨随风
 * @LastEditors  : 情雨随风
 * @LastEditTime : 2020-01-14 16:22:06
 * @Description: 菜单组件
 -->

<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { Menu, Icon } from 'ant-design-vue';

export default {
	mixins: [mixin, mixinDevice],
	props: {
		menu: {
			type: Array,
			default: () => []
		},
		openKeys: {
			type: Array,
			default: () => []
		},
		selectedKeys: {
			type: Array,
			default: () => []
		},
		collapsed: {
			type: Boolean,
			default: () => true
		}
	},
	data() {
		return {
			MenuOpenKeys: [],
			MenuCatchOpenKeys: [],
			MenuSelectedKeys: []
		};
	},
	mounted() {
		setTimeout(() => {
			if (!this.collapsed) {
				this.MenuOpenKeys = this.openKeys;
			}
			this.MenuSelectedKeys = this.selectedKeys;
			this.MenuCatchOpenKeys = this.openKeys;
		}, 16);
	},
	methods: {
		//open菜单过滤 实现始终只打开一个菜单列表
		handelMenuOpenChenge(open) {
			const menu = this.menu.map((k) => k.key);
			const key = open.find((key) => this.MenuOpenKeys.indexOf(key) === -1);
			if (menu.indexOf(key) === -1) {
				this.MenuOpenKeys = open;
			} else {
				this.MenuOpenKeys = key ? [key] : [];
			}
		},
		handelMenuSelect(opts) {
			const { key } = opts;
			this.MenuSelectedKeys = opts.selectedKeys;
			this.$store.commit('app/setselectedKeys', opts.keyPath);

			//获取此菜单的父级
			const flter = this.menu.filter((k) => k.children.some((v) => key === v.key))[0].key;
			this.$store.commit('app/setopenKeys', [flter]);
			this.MenuCatchOpenKeys = [flter];
		}
	},
	watch: {
		//监听导航菜菜单收起展开
		collapsed() {
			if (this.collapsed) {
				this.MenuCatchOpenKeys = this.MenuOpenKeys;
				this.MenuOpenKeys = [];
			} else {
				this.MenuOpenKeys = this.MenuCatchOpenKeys;
			}
		}
	},
	render() {
		return (
			<Menu
				theme="dark"
				mode="inline"
				openKeys={this.MenuOpenKeys}
				selectedKeys={this.MenuSelectedKeys}
				onOpenChange={this.handelMenuOpenChenge}
				onSelect={this.handelMenuSelect}
			>
				{this.menu.map((ele) => (
					<Menu.SubMenu key={ele.key}>
						<span slot="title">
							<Icon type={ele.icon} />
							<span>{ele.title}</span>
						</span>
						{ele.children.map((chil) => (
							<Menu.Item key={chil.key}>
								<router-link to={chil.path}>{chil.title}</router-link>
							</Menu.Item>
						))}
					</Menu.SubMenu>
				))}
			</Menu>
		);
	}
};
</script>
