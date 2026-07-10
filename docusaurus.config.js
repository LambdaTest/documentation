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
  themes: ['docusaurus-theme-search-typesense', 'docusaurus-theme-github-codeblock'],
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
            host: process.env.HOST,
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
              '/support/docs/accessibility-ai-issue-detection-agent/',
              '/support/docs/agent-features-and-metrics/',
              '/support/docs/agent-testing-platform-faqs/',
              '/support/docs/ai-agent-testing-platform-overview/',
              '/support/docs/browser-cloud-api-reference/',
              '/support/docs/browser-cloud-context/',
              '/support/docs/browser-cloud-debugging/',
              '/support/docs/browser-cloud-extensions/',
              '/support/docs/browser-cloud-files/',
              '/support/docs/browser-cloud-profiles/',
              '/support/docs/browser-cloud-quick-actions/',
              '/support/docs/browser-cloud-sdk-setup/',
              '/support/docs/browser-cloud-session-configuration/',
              '/support/docs/browser-cloud-session-lifecycle/',
              '/support/docs/browser-cloud-sessions-overview/',
              '/support/docs/browser-cloud-skills/',
              '/support/docs/browser-cloud-stealth/',
              '/support/docs/browser-cloud-tunnel/',
              '/support/docs/chat-agent-api-integration/',
              '/support/docs/cypress-agent-skills/',
              '/support/docs/getting-started-with-agent-testing-platform/',
              '/support/docs/getting-started-with-kane-ai/',
              '/support/docs/kane-ai-api-testing/',
              '/support/docs/kane-ai-app-test-writing-guidelines/',
              '/support/docs/kane-ai-app-test/',
              '/support/docs/kane-ai-automation-code-generation/',
              '/support/docs/kane-ai-click-interactions/',
              '/support/docs/kane-ai-command-guide/',
              '/support/docs/kane-ai-deeplink-support/',
              '/support/docs/kane-ai-drag-drop/',
              '/support/docs/kane-ai-free-trial-is-here/',
              '/support/docs/kane-ai-geolocation-tunnel-proxy/',
              '/support/docs/kane-ai-guided-walkthrough/',
              '/support/docs/kane-ai-javascript-execution/',
              '/support/docs/kane-ai-jira-integration/',
              '/support/docs/kane-ai-mobile-app-capabilities/',
              '/support/docs/kane-ai-modules/',
              '/support/docs/kane-ai-network-assertions/',
              '/support/docs/kane-ai-scroll-in-feature/',
              '/support/docs/kane-ai-secrets/',
              '/support/docs/kane-ai-smart-variables/',
              '/support/docs/kane-ai-test-plan/',
              '/support/docs/kane-ai-using-datasets/',
              '/support/docs/kane-ai-using-json-variables/',
              '/support/docs/kane-ai-using-parameters/',
              '/support/docs/kane-ai-using-variables/',
              '/support/docs/kane-ai-web-test-writing-guidelines/',
              '/support/docs/kane-ai-web-test/',
              '/support/docs/kane-cli-agent-mode/',
              '/support/docs/kane-cli-agent-output/',
              '/support/docs/kane-cli-api-calls/',
              '/support/docs/kane-cli-authentication/',
              '/support/docs/kane-cli-browser-state/',
              '/support/docs/kane-cli-changelog/',
              '/support/docs/kane-cli-checkpoint-devtools-clipboard/',
              '/support/docs/kane-cli-checkpoint-devtools-console/',
              '/support/docs/kane-cli-checkpoint-devtools-cookies/',
              '/support/docs/kane-cli-checkpoint-devtools-localstorage/',
              '/support/docs/kane-cli-checkpoint-devtools-network/',
              '/support/docs/kane-cli-checkpoint-devtools-performance/',
              '/support/docs/kane-cli-checkpoint-devtools/',
              '/support/docs/kane-cli-checkpoint-textual/',
              '/support/docs/kane-cli-checkpoint-title/',
              '/support/docs/kane-cli-checkpoint-url/',
              '/support/docs/kane-cli-checkpoint-visual/',
              '/support/docs/kane-cli-checkpoints/',
              '/support/docs/kane-cli-cicd/',
              '/support/docs/kane-cli-cli-reference/',
              '/support/docs/kane-cli-configuration/',
              '/support/docs/kane-cli-error-codes/',
              '/support/docs/kane-cli-generate-workflow/',
              '/support/docs/kane-cli-generate/',
              '/support/docs/kane-cli-getting-started/',
              '/support/docs/kane-cli-installation/',
              '/support/docs/kane-cli-introduction/',
              '/support/docs/kane-cli-modes/',
              '/support/docs/kane-cli-parallel-execution/',
              '/support/docs/kane-cli-quickstart/',
              '/support/docs/kane-cli-skills/',
              '/support/docs/kane-cli-testmd/',
              '/support/docs/kane-cli-tms-integration/',
              '/support/docs/kane-cli-troubleshooting/',
              '/support/docs/kane-cli-variables-and-context/',
              '/support/docs/kane-cli-writing-objectives/',
              '/support/docs/playwright-agent-skills/',
              '/support/docs/puppeteer-agent-skills/',
              '/support/docs/selenium-agent-skills/',
              '/support/docs/testing-your-first-ai-agent/',
              '/support/docs/use-cases-of-kane-ai/',
              '/support/docs/what-is-browser-cloud/',
              '/support/docs/why-we-need-kane-ai/',
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

