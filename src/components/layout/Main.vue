<!--
 * @Date: 2020-01-14 16:00:13
 * @Author: 情雨随风
 * @LastEditors  : 情雨随风
 * @LastEditTime : 2020-01-14 16:30:29
 * @Description: 首页布局容器
 -->

<script>
import { mixin, mixinDevice } from '@/utils/mixin';
import { Layout, Drawer } from 'ant-design-vue';
import { Content, SiderMenu, SiderDrawer } from '@/components/sider';

export default {
	name: 'Main',
	mixins: [mixin, mixinDevice],
	render() {
		return (
			<Layout class="Main">
				<SiderDrawer />
				<SiderMenu />
				<Content />
			</Layout>
		);
	}
};
</script>

<style lang="less" scoped>
.Main {
	/deep/ .trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
		&:hover {
			color: #1890ff;
		}
	}
}
</style>
