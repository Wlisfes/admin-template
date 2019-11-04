const menu = [
    {
        key: 'user',
        icon: 'team',
        title: '管理员/权限',
        children: [
            {
                key: 'user-register',
                title: '用户注册',
                path: ''
            },
            {
                key: 'user-role',
                title: '角色管理',
                path: ''
            },
            {
                key: 'user-access',
                title: '权限',
                path: ''
            }
        ]
    },
    {
        key: 'sub2',
        icon: 'radar-chart',
        title: '斩·赤红之瞳',
        children: [
            {
                key: 'sub2-1',
                title: '玛茵'
            },
            {
                key: 'sub2-2',
                title: '赤瞳'
            },
            {
                key: 'sub2-3',
                title: '黑瞳'
            }
        ]
    },
    {
        key: 'sub3',
        icon: 'heat-map',
        title: '樱花庄的宠物女孩',
        children: [
            {
                key: 'sub3-1',
                title: '真白'
            }
        ]
    }
]

export default menu;