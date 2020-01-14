const state = {
	device: 'desktop', //视口

	collapsed: false, //菜单是否收起

	openKeys: ['home'], //初始展开的 SubMenu 菜单项 key 数组

	selectedKeys: ['home-index'] //初始选中的 Item 菜单项 key 数组
};

const mutations = {
	setdevice: (state, device) => {
		state.device = device;
	},
	setcollapsed: (state, collapsed) => {
		state.collapsed = collapsed;
	},
	setopenKeys: (state, openKeys) => {
		state.openKeys = openKeys;
	},
	setselectedKeys: (state, selectedKeys) => {
		state.selectedKeys = selectedKeys;
	}
};

const actions = {};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
