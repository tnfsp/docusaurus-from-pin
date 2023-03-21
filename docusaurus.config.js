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
          to: '/life',
          position: 'left',
          label: '日常 Life',
        },
        {
          to: '/medicine',
          position: 'left',
          label: '醫學 Medicine',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.hsiang0401',
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