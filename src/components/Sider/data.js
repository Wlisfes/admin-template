const menu = [
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

export default menu;