require('dotenv').config();
import { themes as prismThemes } from 'prism-react-renderer';
module.exports = {
  title: 'TestMu AI (Formerly LambdaTest)',
  tagline: 'Ensure your web-apps work seamlessly on every desktop and mobile browsers.',
  url: 'https://www.testmuai.com',
  baseUrl: '/',
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
                  '<a href="https://www.testmuai.com/support/docs/llms.txt">llms.txt</a>. ' +
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
         sitemap: {
          lastmod: 'date',
          // Custom createSitemapItems function
          createSitemapItems: async ({ defaultCreateSitemapItems, ...rest }) => {
            const items = await defaultCreateSitemapItems(rest);
            const urlSet = [
              '/docs/accessibility-ai-issue-detection-agent/',
              '/docs/agent-features-and-metrics/',
              '/docs/agent-testing-platform-faqs/',
              '/docs/ai-agent-testing-platform-overview/',
              '/docs/browser-cloud-api-reference/',
              '/docs/browser-cloud-context/',
              '/docs/browser-cloud-debugging/',
              '/docs/browser-cloud-extensions/',
              '/docs/browser-cloud-files/',
              '/docs/browser-cloud-profiles/',
              '/docs/browser-cloud-quick-actions/',
              '/docs/browser-cloud-sdk-setup/',
              '/docs/browser-cloud-session-configuration/',
              '/docs/browser-cloud-session-lifecycle/',
              '/docs/browser-cloud-sessions-overview/',
              '/docs/browser-cloud-skills/',
              '/docs/browser-cloud-stealth/',
              '/docs/browser-cloud-tunnel/',
              '/docs/chat-agent-api-integration/',
              '/docs/cypress-agent-skills/',
              '/docs/getting-started-with-agent-testing-platform/',
              '/docs/getting-started-with-kane-ai/',
              '/docs/kane-ai-api-testing/',
              '/docs/kane-ai-app-test-writing-guidelines/',
              '/docs/kane-ai-app-test/',
              '/docs/kane-ai-automation-code-generation/',
              '/docs/kane-ai-click-interactions/',
              '/docs/kane-ai-command-guide/',
              '/docs/kane-ai-deeplink-support/',
              '/docs/kane-ai-drag-drop/',
              '/docs/kane-ai-free-trial-is-here/',
              '/docs/kane-ai-geolocation-tunnel-proxy/',
              '/docs/kane-ai-guided-walkthrough/',
              '/docs/kane-ai-javascript-execution/',
              '/docs/kane-ai-jira-integration/',
              '/docs/kane-ai-mobile-app-capabilities/',
              '/docs/kane-ai-modules/',
              '/docs/kane-ai-network-assertions/',
              '/docs/kane-ai-scroll-in-feature/',
              '/docs/kane-ai-secrets/',
              '/docs/kane-ai-smart-variables/',
              '/docs/kane-ai-test-plan/',
              '/docs/kane-ai-using-datasets/',
              '/docs/kane-ai-using-json-variables/',
              '/docs/kane-ai-using-parameters/',
              '/docs/kane-ai-using-variables/',
              '/docs/kane-ai-web-test-writing-guidelines/',
              '/docs/kane-ai-web-test/',
              '/docs/kane-cli-agent-mode/',
              '/docs/kane-cli-agent-output/',
              '/docs/kane-cli-api-calls/',
              '/docs/kane-cli-authentication/',
              '/docs/kane-cli-browser-state/',
              '/docs/kane-cli-changelog/',
              '/docs/kane-cli-checkpoint-devtools-clipboard/',
              '/docs/kane-cli-checkpoint-devtools-console/',
              '/docs/kane-cli-checkpoint-devtools-cookies/',
              '/docs/kane-cli-checkpoint-devtools-localstorage/',
              '/docs/kane-cli-checkpoint-devtools-network/',
              '/docs/kane-cli-checkpoint-devtools-performance/',
              '/docs/kane-cli-checkpoint-devtools/',
              '/docs/kane-cli-checkpoint-textual/',
              '/docs/kane-cli-checkpoint-title/',
              '/docs/kane-cli-checkpoint-url/',
              '/docs/kane-cli-checkpoint-visual/',
              '/docs/kane-cli-checkpoints/',
              '/docs/kane-cli-cicd/',
              '/docs/kane-cli-cli-reference/',
              '/docs/kane-cli-configuration/',
              '/docs/kane-cli-error-codes/',
              '/docs/kane-cli-generate-workflow/',
              '/docs/kane-cli-generate/',
              '/docs/kane-cli-getting-started/',
              '/docs/kane-cli-installation/',
              '/docs/kane-cli-introduction/',
              '/docs/kane-cli-modes/',
              '/docs/kane-cli-parallel-execution/',
              '/docs/kane-cli-quickstart/',
              '/docs/kane-cli-skills/',
              '/docs/kane-cli-testmd/',
              '/docs/kane-cli-tms-integration/',
              '/docs/kane-cli-troubleshooting/',
              '/docs/kane-cli-variables-and-context/',
              '/docs/kane-cli-writing-objectives/',
              '/docs/playwright-agent-skills/',
              '/docs/puppeteer-agent-skills/',
              '/docs/selenium-agent-skills/',
              '/docs/testing-your-first-ai-agent/',
              '/docs/use-cases-of-kane-ai/',
              '/docs/what-is-browser-cloud/',
              '/docs/why-we-need-kane-ai/',
            ];
            return items.map((item) => {
              if (urlSet.includes(item.url)) {
                return { ...item, priority: 1.0 }; // Highest priority for these URLs
              }
              return { ...item, priority: 0.9 }; // Default priority
            });
          },
        },
      },
    ],
  ],
};

