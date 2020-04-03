module.exports = {
    base: '/blog/', // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它
    dest: '/',
    title: '苍耳的博客', // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
    description: '', // 网站的描述，它将会以 meta 标签渲染到当前页面的 HTML 中
    // head: [
    //     ['link', {
    //         rel: 'icon',
    //         // href: '/logo_1024.png'
    //     }],
    // ],
    host: '127.0.0.1',
    port: '8080',
    themeConfig: {
        nav: [
            {
                text: 'Vue',
                link: '/vue/intro'
            },
        ],
        sidebar: {
            '/vue/': [
                {
                    title: '介绍',
                    collapsable: false,
                    children: [
                        'intro'
                    ]
                },
            ],
        },
    },
}