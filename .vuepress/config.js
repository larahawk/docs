module.exports = {
    title: 'Larahawk',
    head: [
        [
            'link', {
                rel: 'icon',
                type: 'image/png',
                href: '/favicon.png'
            }
        ]
    ],
    ga: 'UA-128047706-1',
    themeConfig: {
        logo: '/larahawk-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Docs', link: '/dashboard/' },
            { text: 'Github', link: 'https://github.com/larahawk', isOutbound: true },
            { text: 'Sign In', link: 'https://app.larahawk.com', isOutbound: true }
        ],
        sidebar: {
            '/dashboard/': getSidebarConfig('Dashboard', 'Watcher')
        }
    }
}

function getSidebarConfig(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'properties',
                'events',
                'notifications'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'watcher',
                'configuration',
                'contribution'
            ]
        }
    ]
}