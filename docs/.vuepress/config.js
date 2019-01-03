module.exports = {
    title: 'Vuetils',
    description: 'Utils lib for Vue App',
    base: '/vuetils/',
    serviceWorker: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Install', link: '/install/' },
        ],
        sidebar: [
            '/',
            '/install/',
            '/api/methods/',
            '/api/components/',
        ]
    },
    markdown: {
        config: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-include'))
        }
    }
};