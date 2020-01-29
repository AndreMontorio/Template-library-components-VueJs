module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'FiveStar Components 🥂',
      description: 'Documentação da biblioteca de componentes Vue'
    }
  },
  themeConfig: {
    repoLabel: 'Contribua!',
    // git repo here... gitlab, github
    repo: 'https://github.com/AndreMontorio/Template-library-components-VueJs',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Ajude-nos a melhorar esta página!',
    search: false,
    locales: {
      '/': {
        rel: "stylesheet",
        href: "http://cdn.consinco.com.br/fivestyle/css/style.min.css",
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Components', link: '/components/' },
          // external link to git repo...again
          {
            text: 'GitHub',
            link: 'https://github.com/siegerts/vue-component-library-template'
          }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['standard-component','functional-component', 'sidenav-component']
            }
          ]
        }
      }
    }
  }
}
