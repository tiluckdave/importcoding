// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/* @type { import('@docusaurus/types').Config } */
const config = {
  title: "FlatifyCSS",
  tagline: "Modern Flat Design Framework",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  url: "https://flatifycss.com",
  baseUrl: "/",
  // organizationName: "amir2mi", // Usually your GitHub org/user name.
  // projectName: "flatifycss", // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    (
      {
        navbar: {
          title: "FlatifyCSS",
          hideOnScroll: true,
          logo: {
            alt: "FlatifyCSS logo",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Documentation",
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
};

module.exports = config;
