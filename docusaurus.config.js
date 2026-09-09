require('dotenv').config();
import { themes as prismThemes } from 'prism-react-renderer';
const { createSitemapItemsFilter } = require('./scripts/sitemap-exclusions');

// Fail closed: a typo like DOCS_NOINDEX=TRUE must not silently publish a staging
// build to search engines.
function docsNoIndex() {
  const raw = (process.env.DOCS_NOINDEX || '').trim().toLowerCase();
  if (raw === '') return false;
  if (raw === 'true') return true;
  if (raw === 'false') return false;
  throw new Error(`DOCS_NOINDEX must be "true" or "false" (got "${process.env.DOCS_NOINDEX}").`);
}

module.exports = {
  title: 'TestMu AI (Formerly LambdaTest)',
  tagline: 'Ensure your web-apps work seamlessly on every desktop and mobile browsers.',
  url: 'https://www.lambdatest.com',
  // DOCS_NOINDEX marks every page noindex. testmucom-prod-deployment.yml is the
  // only deploy that leaves it unset; prod-deployment.yml (lambdatest.com) and
  // testmucom-stage-deployment.yml both set it to true. It is also a sitemap
  // kill switch: @docusaurus/plugin-sitemap returns from postBuild before
  // writing anything when noIndex is set, so those builds ship no sitemap.xml.
  // Unrecognised values throw rather than quietly indexing the site.
  noIndex: docsNoIndex(),
  baseUrl: '/support/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'TestMu AI', // Usually your GitHub org/user name.
  projectName: 'TestMu AI', // Usually your repo name.
  trailingSlash: true,
  clientModules: [
    require.resolve('./custom.js'),
    require.resolve('./src/js/copy-ips.js')
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
    colorMode: {
      defaultMode: 'dark',            // fallback when the OS expresses no preference
      respectPrefersColorScheme: true, // new visitors follow their system theme
    },
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
        sitemap: {
          lastmod: 'date',
          priority: 0.9,
          // Structural routes only. Patterns here are exact — micromatch anchors
          // them — so '/support/api-doc/' excludes just the API index (which
          // redirects), not the real endpoint pages beneath it. That is intended.
          //
          // Redirecting docs are NOT listed here any more: createSitemapItems
          // finds them automatically, so the list cannot drift out of date the
          // way it had (kane-cli-mobile-emulator, kane-cli-mobile-simulator and
          // testmu-a2a-cli were all shipping in the live sitemap, and
          // accessibility-getting-started-quick-setup no longer exists).
          ignorePatterns: [
            '/support/',         // site root — redirects to /support/docs/
            '/support/api-doc/', // API index — redirects to the first endpoint
            '/support/search/',  // search UI, no content of its own
          ],
          // Drops pages that redirect: in-repo client-side <Redirect> pages, plus
          // any CDN-level redirect recorded in sitemap-live-exclusions.json by
          // `npm run sitemap-live-check -- --fix`. Noindexed pages are already
          // dropped by the plugin itself, which reads each route's rendered head.
          createSitemapItems: createSitemapItemsFilter(),
        },
      },
    ],
  ],
};

