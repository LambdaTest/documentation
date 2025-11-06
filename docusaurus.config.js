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

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  
  scripts: [
    // {
    //   src: 'https://www.lambdatest.com/resources/js/zohoscript.js',
    //   defer: true,
    // },
    {
      src: 'https://staging.lambdatestinternal.com/resources/js/salesforce_chatwidget.js',
      defer: true,
    },
    {
      src: 'https://staging.lambdatestinternal.com/resources/js/lambda_gtm.js',
      defer: true,
    },
    {
      src: 'https://staging.lambdatestinternal.com/resources/js/sf_chat.js',
      defer: true,
      onload: "sf_messaging()",
    },
    // {
    //   src: 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js',
    //   defer: true,
    // }
  ],
  themes: ['docusaurus-theme-search-typesense', 'docusaurus-theme-github-codeblock'],

  themeConfig: {
    // docs: {
    //   sidebar: {
    //     hideable: true,
    //   },
    // },
    zoom: {
      selector: 'img:not(.no-zoom)',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    typesense: {
      // Replace this with the name of your index/collection.
      // It should match the "index_name" entry in the scraper's "config.json" file.
      typesenseCollectionName: 'lambdatest-internal',

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

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {
        enable_analytics: true,
      },

      // Optional
      contextualSearch: true,
    },
    
    prism: {
        additionalLanguages: ['powershell','java','csharp','php','ruby','robotframework'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // algolia: {
    //   apiKey: '21e5be14ef037223a329241ae6ac5678',
    //   indexName: 'lambdatest',
    //   appId: 'LTX5ENOXAD',
    //   // Optional: see doc section bellow
    //   // contextualSearch: true,
    //   contextualSearch: false,
    //   // Optional: Algolia search parameters
    //   searchParameters: {},
    //   //... other Algolia params
    // },
    navbar: {
      title: null,
      hideOnScroll: true,
      logo: {
        alt: 'LambdaTest',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: 'https://www.lambdatest.com',
        target:'_self',
        width:'147',
        height:'26'
      },
      items: [
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<a role="button" tabindex="0" id="signbtn" href="https://stage-accounts.lambdatestinternal.com/register" class="getstart_btn">Get Started</a>',
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
          value: '<a role="button" tabindex="0" href="https://github.com/LambdaTest" target="_blank" class="navbar__item navbar__link" style="padding-left:0;padding-right:0;">GitHub<img src="https://staging.lambdatestinternal.com/support/img/Github.svg" alt="" role="presentation" title="LambdaTest GitHub" width="12" height="12" class="head_gitimg" style="margin-left:5px;"/></a>',
        },
        // {
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
          breadcrumbs: true,      
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      },
    ],
  ],
};
