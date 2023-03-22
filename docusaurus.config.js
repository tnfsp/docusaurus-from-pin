const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {

  title: '春熊の心臟醫學',
  tagline: '心臟外科醫師的挑戰與修練',
  favicon: 'img/favicon1.png',

  // Set the production url of your site here
  url: 'https://wilsonchao.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/comments', // 您希望將評論顯示在哪個路徑下
            from: '/api/v1/comments',
          },
        ],
      },
    ],
  ],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tnfsp/docusaurus-from-pin/edit/master/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    algolia: {
      contextualSearch: true,
      // The application ID provided by Algolia
      appId: 'J2BVI05PDX',

      // Public API key: it is safe to commit it
      apiKey: 'b666b8ea7267e3a15a0e978d105f4af3',

      indexName: 'wilsonchao',


      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    metadata: [{name: 'keywords', content: '心臟外科、重症醫學、心臟超音波'}],
    image: 'img/favicon1.png',
    navbar: {
      title: '春熊の心臟醫學',
      logo: {
        alt: '春熊の心臟醫學',
        src: 'img/favicon1.png',
      },
      items: [
        {
          to: '/blog',
          position: 'left',
          label: '文章 Blog',
        },
        {
          to: '/snapshot',
          position: 'left',
          label: '短想法 Snapshots',
        },
        {
          to: '/collection',
          position: 'left',
          label: '蒐集 Collection',
        },
        {
          type: 'search',
          position: 'right',
        },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hsiang0401',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/momobear_doctor/',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/momobeardoctor',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 春熊の心臟醫學`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
