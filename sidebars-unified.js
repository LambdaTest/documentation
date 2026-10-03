// Unified sidebar for the Docs section.
// Wraps all existing per-product sidebars into one tree matching the stage-mintlify navigation structure.
// Update docusaurus.config.js to use this file: sidebarPath: require.resolve('./sidebars-unified.js')

const s = require('./sidebars.js');

// Each sidebar is [backLink, [items...]]. Extract just the items array.
function items(sidebar) {
  if (!sidebar) return [];
  const rest = sidebar.slice(1);
  return Array.isArray(rest[0]) ? rest[0] : rest;
}

const docsSidebar = [
  {
    type: 'category', label: 'Web Automation', collapsible: true, collapsed: true,
    items: [
      { type: 'category', label: 'Selenium Testing', collapsible: true, collapsed: true, items: items(s.SeleniumTestingSidebar) },
      { type: 'category', label: 'Cypress Testing', collapsible: true, collapsed: true, items: items(s.CypressTestingSidebar) },
      { type: 'link', label: 'Playwright Testing', href: '/docs/playwright-agent-skills/' },
      { type: 'category', label: 'Puppeteer Testing', collapsible: true, collapsed: true, items: items(s.PuppeteerTestingSidebar) },
      { type: 'category', label: 'K6 Testing', collapsible: true, collapsed: true, items: items(s.K6BrowserTestingSidebar) },
      { type: 'doc', id: 'run-tests-with-chrome-devtools-protocol', label: 'CDP Testing' },
      { type: 'doc', id: 'run-tests-with-webdriver-bidi', label: 'BiDi Testing' },
    ],
  },
  {
    type: 'category', label: 'App Automation', collapsible: true, collapsed: true,
    items: [
      { type: 'category', label: 'Appium Testing', collapsible: true, collapsed: true, items: items(s.AppiumTestingSidebar) },
      { type: 'category', label: 'Espresso Testing', collapsible: true, collapsed: true, items: items(s.EspressoTestingSidebar) },
      { type: 'category', label: 'XCUI Testing', collapsible: true, collapsed: true, items: items(s.XCUITestingSidebar) },
      { type: 'category', label: 'Flutter Testing', collapsible: true, collapsed: true, items: items(s.FlutterTestingSidebar) },
      { type: 'category', label: 'Virtual Devices', collapsible: true, collapsed: true, items: items(s.EmuSimuSidebar) },
    ],
  },
  {
    type: 'category', label: 'HyperExecute', collapsible: true, collapsed: true,
    items: items(s.HyperExecuteSidebar),
  },
  {
    type: 'category', label: 'Browser Cloud', collapsible: true, collapsed: true,
    items: items(s.BrowserCloudSidebar),
  },
  {
    type: 'category', label: 'SmartUI', collapsible: true, collapsed: true,
    items: items(s.VisualRegressionTestingSidebar),
  },
  {
    type: 'category', label: 'KaneAI', collapsible: true, collapsed: true,
    items: items(s.KaneAISidebar),
  },
  {
    type: 'category', label: 'Kane CLI', collapsible: true, collapsed: true,
    items: items(s.KaneCLISidebar),
  },
  {
    type: 'category', label: 'Web Scanner', collapsible: true, collapsed: true,
    items: items(s.WebScannerSidebar),
  },
  {
    type: 'category', label: 'Insights', collapsible: true, collapsed: true,
    items: [
      ...items(s.Analytics),
      ...items(s.TestIntelligence),
    ],
  },
  {
    type: 'category', label: 'Real Time', collapsible: true, collapsed: true,
    items: items(s.RealTimeBrowserTestingSiebar),
  },
  {
    type: 'category', label: 'Agent Assurance', collapsible: true, collapsed: true,
    items: items(s.AgentAssuranceSidebar),
  },
  {
    type: 'category', label: 'Agent Testing', collapsible: true, collapsed: true,
    items: items(s.AgentTestingSidebar),
  },
  {
    type: 'category', label: 'Real Device', collapsible: true, collapsed: true,
    items: s.RealDeviceSidebar.slice(1).flat(),
  },
  { type: 'link', label: 'Test Manager', href: '/docs/test-manager/' },
  {
    type: 'category', label: 'TestMu AI MCP Server', collapsible: true, collapsed: true,
    items: items(s.LTMCPServerSidebar),
  },
  {
    type: 'category', label: 'Integration', collapsible: true, collapsed: true,
    items: items(s.IntegrationsSidebar),
  },
  {
    type: 'category', label: 'Accessibility Testing', collapsible: true, collapsed: true,
    items: items(s.AccessibilityTestingSidebar),
  },
  {
    type: 'category', label: 'Testing Locally', collapsible: true, collapsed: true,
    items: items(s.TestingLocalPagesSidebar),
  },
  {
    type: 'category', label: 'Setting and Security', collapsible: true, collapsed: true,
    items: [
      ...items(s.SettingsAndSecuritySidebar),
      ...items(s.AccountManagementSidebar),
      ...items(s.ScimSidebar),
      ...items(s.SingleSignOnSidebar),
    ],
  },
  {
    type: 'category', label: 'Other Docs', collapsible: true, collapsed: true,
    items: [
      ...items(s.VisualUITestingSidebar),
      ...items(s.LTBrowserSidebar),
      ...items(s.LambdaTestMigrationGuideSidebar),
      ...items(s.ConcurrencyWidgetSidebar),
      ...items(s.TestManagementSidebar),
    ],
  },
];

// Dedicated sidebar for Test Manager. Because the Test Manager entry in
// docsSidebar is now a link (above), these docs live ONLY here — so Docusaurus
// displays this dedicated sidebar whenever a reader is inside Test Manager.
const backToDocs = {
  type: 'link',
  label: '← All Docs',
  href: '/docs/',
  customProps: { className: 'back-to-main-menu' },
};
const TestManagerSidebar = [backToDocs, ...items(s.TestManagerSidebar)];

// Playwright Testing is a link in docsSidebar (above), so its docs live ONLY in
// this dedicated sidebar — Docusaurus displays it (with the back-to-docs link)
// whenever a reader is inside a Playwright Testing page.
const PlaywrightTestingSidebar = [backToDocs, ...items(s.PlaywrightTestingSidebar)];

// The shared mute-test-scenarios doc (part of the Playwright Features category)
// sets `displayed_sidebar: SeleniumTestingSidebar` in its frontmatter, so that
// name must resolve to a real sidebar here too.
const SeleniumTestingSidebar = [backToDocs, ...items(s.SeleniumTestingSidebar)];

module.exports = {
  docsSidebar,
  TestManagerSidebar,
  PlaywrightTestingSidebar,
  SeleniumTestingSidebar,
};
