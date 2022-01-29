// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type { import('@docusaurus/types').Config } */

const config = {
  title: "Import Coding",
  tagline: "Helping you import coding to your life!",
  favicon: "img/favicon.ico",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  url: "https://importcoding.vercel.app",
  baseUrl: "/",
  // organizationName: "amir2mi", // Usually your GitHub org/user name.
  // projectName: "flatifycss", // Usually your repo name.
  trailingSlash: false,
  scripts: [
    {
      "data-ad-client": "ca-pub-3981636219602601",
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
    }
  ],

  themeConfig:
    (
      {
        colorMode: {
          defaultMode: "dark",
        },
        navbar: {
          title: "Import Coding",
          hideOnScroll: false,
          logo: {
            alt: "Import Coding Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              href: "https://twitter.com/tiluckdave",
              position: "left",
              label: "Twitter",
            },
            {
              href: "https://github.com/tiluckdave",
              position: "left",
              label: "GitHub",
            },
          ],
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        algolia: {
          // If Algolia did not provide you any appId, use 'BH4D9OD16A'
          appId: "KVX24QMELQ",

          // Public API key: it is safe to commit it
          apiKey: "a38b9f9487cdede5e1cf7097a5b4e5a3",
          indexName: "flatifycss",
          contextualSearch: false,
          searchParameters: {},
        },
        footer: {
          links: [
            {
              label: 'Buy Me a Coffee',
              href: 'https://buymeacoffee.com/tiluckdave',
            },
          ],
          copyright: `Created with ❤️ by Tilak Dave from 🇮🇳.`,
        },
      }),
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: './projects/analog-clock',
          routeBasePath: 'projects/analog-clock',
          sidebarPath: require.resolve('./projects/analog-clock/sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: 'always',
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: 'G-18E35RFN70',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-18E35RFN70',
          anonymizeIP: false,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'email-extractor',
        path: './projects/email-extractor',
        routeBasePath: 'projects/email-extractor',
        sidebarPath: require.resolve('./projects/email-extractor/sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};

module.exports = config;
