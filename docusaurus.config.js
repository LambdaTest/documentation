require('dotenv').config();
import { themes as prismThemes } from 'prism-react-renderer';
module.exports = {
  title: 'TestMu AI (Formerly LambdaTest)',
  tagline: 'Ensure your web-apps work seamlessly on every desktop and mobile browsers.',
  url: 'https://www.testmu.ai',
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
      src: 'https://assets.testmu.ai/resources/js/salesforce_chatwidget.js',
      defer: true,
    },
    {
      src: 'https://assets.testmu.ai/resources/js/lambda_gtm.js',
      defer: true,
    },
    {
      src: 'https://assets.testmu.ai/resources/js/sf_chat.js',
      defer: true,
      onload: "sf_messaging()",
    },
   
  ],
  themes: ['docusaurus-theme-search-typesense','docusaurus-theme-github-codeblock'],
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
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
      typesenseCollectionName: 'lambdatest',
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
      hideOnScroll: true,
      logo: {
        alt: 'LambdaTest',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: 'https://www.testmu.ai',
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
        {
          type: 'html',
          position: 'right',
          value: '<a id="signbtn" href="https://accounts.lambdatest.com/register" class="getstart_btn">Get Started</a>',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api-doc/',
          activeBasePath: 'api-doc',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: 'faq/',
          activeBasePath: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'html',
          position: 'left',
          value: '<a role="button" tabindex="0" href="https://github.com/LambdaTest" target="_blank" class="navbar__item navbar__link">GitHub<img src="https://www.lambdatest.com/support/img/Github.svg" alt="" role="presentation" title="LambdaTest GitHub" width="12" height="12" class="head_gitimg no-zoom" style="margin-left:5px;"/></a>',
        },
     
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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

