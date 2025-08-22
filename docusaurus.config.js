require('dotenv').config();
import { themes as prismThemes } from 'prism-react-renderer';
module.exports = {
  title: 'LambdaTest',
  tagline: 'Ensure your web-apps work seamlessly on every desktop and mobile browsers.',
  url: 'https://www.lambdatest.com',
  baseUrl: '/support/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Lambdatest', // Usually your GitHub org/user name.
  projectName: 'Lambdatest', // Usually your repo name.
  clientModules: [
    require.resolve('./custom.js'),
  ],
  scripts: [
    // {
    //   src: 'https://www.lambdatest.com/resources/js/zohoscript.js',
    //   defer: true,
    // },
    {
      src: 'https://www.lambdatest.com/resources/js/salesforce_chatwidget.js',
      defer: true,
    },
    {
      src: 'https://www.lambdatest.com/resources/js/lambda_gtm.js',
      defer: true,
    },
    {
      src: 'https://www.lambdatest.com/resources/js/sf_chat.js',
      defer: true,
      onload: "sf_messaging()",
    },
    // {
    //   src: 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js',
    //   defer: true,
    // }
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
            host: process.env.HOST,
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: process.env.API,
      },
      typesenseSearchParameters: {},
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
        href: 'https://www.lambdatest.com',
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
        //         {
        //   type: 'html',
        //   position: 'left',
        //   value: '<a role="button" tabindex="0" href="https://www.lambdatest.com/testmuconf-2025/" target="_blank" class="navbar__item navbar__link" style="padding-left:0;padding-right:0;" onclick="sendAmplitudeEvents(\'click CTA - web pages\', {cta_text: \'Register Now - Testmu\', cta_type: \'NavbarCTA\', page_category: \'Document header\'})">TestMu Conf 2025<img loading="lazy" src="https://www.lambdatest.com/resources/images/fire.svg" class="ml-5 " alt="TestMu Conference 2025" width="15" height="15" style="margin-left:5px;"></a>',
        // }
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

