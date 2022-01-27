// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/* @type {import('@docusaurus/types').Config} */
const config = {
  title: "FlatifyCSS",
  tagline: "Modern Flat Design Framework",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
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
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "FlatifyCSS",
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

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
      footer: {
        copyright: `Created with ❤️ by FlatifyCSS's team and its contributors.`,
      },
    }),
};

module.exports = config;
