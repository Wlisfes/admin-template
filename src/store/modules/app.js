
const app = {
    state: {
        //视口
        device: 'desktop',
        //菜单是否收起
        collapsed: false,
        //初始展开的 SubMenu 菜单项 key 数组
        menuOpenKeys: ['sub1'],
        //初始选中的 Item 菜单项 key 数组
        menuSelectedKeys: ['sub1-2']


    },
    mutations: {
        setdevice: (state, device) => {
            state.device = device
        },
        setcollapsed: (state, collapsed) => {
            state.collapsed = collapsed
        },
        setmenuOpenKeys: (state, meunOpenKeys) => {
            state.meunOpenKeys = meunOpenKeys
        },
        setmenuSelectedKeys: (state, meunSelectedKeys) => {
            state.meunSelectedKeys = meunSelectedKeys
        }
    }
}

export default app