import React, {createContext, useContext} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import {BRAND_URL} from '@site/src/component/BrandName';

// Breadcrumb trail for every /support/docs/ page: Home > Docs > <section> > page, rendered where Docusaurus puts
// its own breadcrumbs (top of the doc article) plus a BreadcrumbList JSON-LD with the same items. Docs pages no
// longer carry their own breadcrumb <script> or <nav> blocks.
//
// The doc's metadata comes from DocTrailContext, which src/theme/DocItem fills from its props. Do NOT switch this
// to useDoc()/useSidebarBreadcrumbs(): site code importing @docusaurus/plugin-content-docs gets a second, hoisted
// copy of that package and SSG fails with "Hook useDoc is called outside the <DocProvider>" (see
// src/theme/DocItem/index.js). The site's CSS hides the first breadcrumb item (.breadcrumbs__item:first-child), so
// "Home" is in the HTML and the JSON-LD but the visible trail starts at "Docs".
export const DocTrailContext = createContext(null);

const DOCS_PATH = '/support/docs/';

// Section landing page by doc slug prefix; first match wins. A doc that matches no rule (or is the landing page
// itself) gets no section level. kane-cli-* docs moved to /docs/ (they 301 there), so they get none.
const SECTIONS = [
  [/^kane-cli-/, null],
  [/^agent-assurance-overview$/, 'Agent Testing', 'getting-started-with-agent-testing-platform'],
  [/^(kaneai-|kane-ai-)/, 'KaneAI', 'getting-started-with-kane-ai'],
  [/^accessibility-/, 'Accessibility', 'accessibility-testing'],
  [/^hyperexecute-|-on-hyperexecute-grid$/, 'HyperExecute', 'getting-started-with-hyperexecute'],
  [/^(smartui-|smart-ui-|smart-visual-)/, 'SmartUI', 'smartui-guided-walkthrough'],
  [/^(analytics-|insights-|test-intelligence-)/, 'Analytics', 'analytics-overview'],
  [/^appium-|^smart-heal-appium$/, 'Appium', 'getting-started-with-appium-testing'],
  [/^(agent-assurance-|rook-)/, 'Agent Assurance', 'agent-assurance-overview'],
  [/^playwright-|-with-playwright$/, 'Playwright', 'playwright-testing'],
  [/^selenium-|-with-selenium-/, 'Selenium', 'getting-started-with-selenium-4'],
  [/^browser-cloud-/, 'Browser Cloud', 'what-is-browser-cloud'],
  [/^cypress/, 'Cypress', 'getting-started-with-cypress-testing'],
  [/^espresso-/, 'Espresso', 'getting-started-with-espresso-testing'],
  [/^(agent-testing-|agent-features-and-metrics$|agent-skills$|ai-agent-testing-platform-)/, 'Agent Testing', 'getting-started-with-agent-testing-platform'],
  [/^(app-|real-device|real-time-mobile-app-|live-interactive-mobile-app-)/, 'Real Devices', 'getting-started-with-mobile-app-real-time-testing'],
  [/^real-time-/, 'Real Time Testing', 'getting-started-with-desktop-browser-real-time-testing'],
];

export function docsSection(slug) {
  for (const [pattern, name, landing] of SECTIONS) {
    if (pattern.test(slug)) {
      return name && landing !== slug ? {name, slug: landing} : null;
    }
  }
  return null;
}

export default function DocBreadcrumbs() {
  const doc = useContext(DocTrailContext);
  const permalink = (doc && doc.permalink) || '';
  if (!permalink.startsWith(DOCS_PATH) || permalink === DOCS_PATH || !doc.title) {
    return null;
  }
  const slug = permalink.slice(DOCS_PATH.length).replace(/\/+$/, '');
  const section = docsSection(slug);
  const crumbs = [
    {name: 'Home', url: BRAND_URL},
    {name: 'Docs', url: `${BRAND_URL}${DOCS_PATH}`, to: '/docs/'},
    ...(section
      ? [{name: section.name, url: `${BRAND_URL}${DOCS_PATH}${section.slug}/`, to: `/docs/${section.slug}/`}]
      : []),
    {name: doc.title, url: `${BRAND_URL}${permalink}`},
  ];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <nav className="theme-doc-breadcrumbs" aria-label="breadcrumb">
        <ul className="breadcrumbs">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li
                key={crumb.url}
                className={isLast ? 'breadcrumbs__item breadcrumbs__item--active' : 'breadcrumbs__item'}>
                {isLast ? (
                  <span className="breadcrumbs__link">{crumb.name}</span>
                ) : crumb.to ? (
                  <Link className="breadcrumbs__link" to={crumb.to}>
                    {crumb.name}
                  </Link>
                ) : (
                  <a className="breadcrumbs__link" target="_self" href={crumb.url}>
                    {crumb.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
