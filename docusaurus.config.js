require('dotenv').config();
import { themes as prismThemes } from 'prism-react-renderer';
module.exports = {
  title: 'TestMu AI (Formerly LambdaTest)',
  tagline: 'Ensure your web-apps work seamlessly on every desktop and mobile browsers.',
  url: 'https://www.testmuai.com',
  baseUrl: '/support/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'TestMu AI', // Usually your GitHub org/user name.
  projectName: 'TestMu AI', // Usually your repo name.
  trailingSlash: true,
  clientModules: [
    require.resolve('./custom.js'),
  ],
  scripts: [
  
    {
      src: 'https://assets.testmuai.com/resources/js/salesforce_chatwidget.js',
      defer: true,
    },
    {
      src: 'https://assets.testmuai.com/resources/js/testmu_gtm.js',
      defer: true,
    },
    {
      src: 'https://assets.testmuai.com/resources/js/sf_chat.js',
      defer: true,
      onload: "sf_messaging()",
    },
   
  ],
  themes: ['docusaurus-theme-search-typesense','docusaurus-theme-github-codeblock'],
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwind',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    // Injects a visually-hidden, server-rendered directive near the top of every
    // page's HTML so AI agents/crawlers can discover llms.txt and the per-page
    // Markdown (.md) versions. preBodyTags places it right after <body>.
    function llmsTxtDirectivePlugin() {
      return {
        name: 'llms-txt-directive',
        injectHtmlTags() {
          return {
            preBodyTags: [
              {
                tagName: 'div',
                attributes: {
                  'data-llms-txt': 'true',
                  style:
                    'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;',
                },
                innerHTML:
                  'For AI agents and LLMs: a machine-readable index is available at ' +
                  '<a href="https://stage.testmuinternal.ai/support/docs/llms.txt">llms.txt</a>. ' +
                  'A plain-Markdown version of any documentation page is available by appending .md to its URL.',
              },
            ],
          };
        },
      };
    },
  ],
  themeConfig: {
    zoom: {
      selector: 'img:not(.no-zoom)',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    typesense: {
      typesenseCollectionName: process.env.TYPESENSE_COLLECTION_NAME || 'lambdatest-internal',
      typesenseServerConfig: {
        nodes: [
          {
            host: process.env.HOST ,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: process.env.API,
      },
      typesenseSearchParameters: {
        enable_analytics: true,
      },
      contextualSearch: true,
    },

    prism: {
      additionalLanguages: ['powershell', 'java', 'csharp', 'php', 'ruby', 'robotframework'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    navbar: {
      title: null,
      hideOnScroll: false,
      logo: {
        alt: 'LambdaTest',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: 'https://www.testmuai.com',
        target: '_self',
        width: '147',
        height: '26',
        className: 'no-zoom'
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars-unified.js'),
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
};

