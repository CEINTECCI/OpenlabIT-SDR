// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenLab',
  tagline: 'SDR',
  favicon: 'img/favicon.ico',

  url: ' https://CEINTECCI.github.io/',
  baseUrl: '/OpenlabIT-SDR/',
  organizationName: 'CEINTECCI', // Usually your GitHub org/user name.
  projectName: 'OpenlabIT-SDR', // Usually your repo name.

  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenLab',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Inicio',
          },
          ////////////////////////////////////// BOTON DE ARRIBA AL LADO DEL INICIO /////////////////////////////////////////////////
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://ceintecci.github.io/',
          //   label: 'CEINTECCI',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'SDR',// esto es lo de abajo del inicio cambiar cuando este completo 
                to: '/docs/SDR',
              },
              {
                label: 'Tutorial instalación',// esto es lo de abajo del inicio cambiar cuando este completo 
                to: '/docs/Inicio',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CEINTECCI',
              },
              {
                label: 'CEINTECCI',
                href: 'https://ceintecci.github.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Reserva Blab',
                href: 'https://forms.gle/snUwdTGedjBbZjZT7',
              },
              {
                label: 'Laboratorio de simulación y ciencia de datos',
                href: 'https://forms.gle/AoBvjysndeZ3NdYa7',
              },
              {
                label: 'Laboratorio IT',
                href: 'https://forms.gle/1PrpEudnjKDL28w29',
              },
              {
                label: 'Laboratorio realidad virtual y aumentada',
                href: 'https://forms.gle/9wuFJfFtsuBRBwyZ6',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
