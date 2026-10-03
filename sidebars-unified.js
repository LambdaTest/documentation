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
      { type: 'category', label: 'Playwright Testing', collapsible: true, collapsed: true, items: items(s.PlaywrightTestingSidebar) },
      { type: 'link', label: 'Puppeteer Testing', href: '/docs/puppeteer-agent-skills/' },
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

// Build a dedicated sidebar: the back link followed by the product's own items.
const dedicated = (src) => [backToDocs, ...items(src)];

// The main docs index. Every product is a `link` to its landing page, so its
// docs live ONLY in the matching dedicated sidebar below — Docusaurus therefore
// shows that dedicated sidebar whenever a reader is inside the product. The four
// `category` headers (Web Automation, App Automation, Insights, Other Docs) have
// no single landing page, so they stay as groupings whose members are links.
const docsSidebar = [
  {
    type: 'category', label: 'Web Automation', collapsible: true, collapsed: true,
    items: [
      { type: 'link', label: 'Selenium Testing', href: '/docs/testmu-running-your-first-selenium-test/' },
      { type: 'link', label: 'Cypress Testing', href: '/docs/getting-started-with-cypress-testing/' },
      { type: 'link', label: 'Playwright Testing', href: '/docs/playwright-testing/' },
      { type: 'link', label: 'Puppeteer Testing', href: '/docs/puppeteer-testing/' },
      { type: 'link', label: 'K6 Testing', href: '/docs/k6-browser-testing/' },
      { type: 'link', label: 'CDP Testing', href: '/docs/run-tests-with-chrome-devtools-protocol/' },
      { type: 'link', label: 'BiDi Testing', href: '/docs/run-tests-with-webdriver-bidi/' },
    ],
  },
  {
    type: 'category', label: 'App Automation', collapsible: true, collapsed: true,
    items: [
      { type: 'link', label: 'Appium Testing', href: '/docs/getting-started-with-appium-testing/' },
      { type: 'link', label: 'Espresso Testing', href: '/docs/getting-started-with-espresso-testing/' },
      { type: 'link', label: 'XCUI Testing', href: '/docs/getting-started-with-xcuitest/' },
      { type: 'link', label: 'Mobilewright Testing', href: '/docs/mobilewright-overview/' },
      { type: 'link', label: 'Flutter Testing', href: '/docs/appium-flutter-integration/' },
      { type: 'link', label: 'Virtual Devices', href: '/docs/app-automation-on-emulators-simulators/' },
    ],
  },
  { type: 'link', label: 'HyperExecute', href: '/docs/getting-started-with-hyperexecute/' },
  { type: 'link', label: 'Browser Cloud', href: '/docs/what-is-browser-cloud/' },
  { type: 'link', label: 'SmartUI', href: '/docs/smart-visual-regression-testing/' },
  { type: 'link', label: 'KaneAI', href: '/docs/getting-started-with-kane-ai/' },
  { type: 'link', label: 'Kane CLI', href: '/docs/kane-cli-introduction/' },
  { type: 'link', label: 'Web Scanner', href: '/docs/web-scanner-overview/' },
  { type: 'link', label: 'Insights', href: '/docs/analytics-overview/' },
  { type: 'link', label: 'Real Time', href: '/docs/getting-started-with-desktop-browser-real-time-testing/' },
  { type: 'link', label: 'Agent Assurance', href: '/docs/agent-assurance-overview/' },
  { type: 'link', label: 'Agent Testing', href: '/docs/getting-started-with-agent-testing-platform/' },
  { type: 'link', label: 'Real Device', href: '/docs/app-testing-on-real-devices/' },
  { type: 'link', label: 'Test Manager', href: '/docs/test-manager/' },
  { type: 'link', label: 'TestMu AI MCP Server', href: '/docs/testmu-mcp-server/' },
  { type: 'link', label: 'Integrations', href: '/docs/bug-tracking-tools/' },
  { type: 'link', label: 'Accessibility Testing', href: '/docs/accessibility-testing/' },
  { type: 'link', label: 'Localhost Testing', href: '/docs/testmu-tunnel/' },
  { type: 'link', label: 'Settings and Security', href: '/docs/account-management/' },
  {
    type: 'category', label: 'Other Docs', collapsible: true, collapsed: true,
    items: [
      { type: 'link', label: 'Visual UI Testing', href: '/docs/visual-ui-testing/' },
      { type: 'link', label: 'LT Browser', href: '/docs/lt-browser/' },
      { type: 'link', label: 'Migration Guide', href: '/docs/testmu-capability-map/' },
      { type: 'link', label: 'Concurrency Widget', href: '/docs/concurrency-widget/' },
      { type: 'link', label: 'Test Logs', href: '/docs/test-logs/' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Dedicated sidebars — one per product. Because each product is a `link` in
// docsSidebar above (and its docs appear nowhere else), Docusaurus displays the
// matching sidebar here whenever a reader is inside that product.
// ---------------------------------------------------------------------------

// Web Automation
const SeleniumTestingSidebar = dedicated(s.SeleniumTestingSidebar);
const CypressTestingSidebar = dedicated(s.CypressTestingSidebar);
const PlaywrightTestingSidebar = dedicated(s.PlaywrightTestingSidebar);
const PuppeteerTestingSidebar = dedicated(s.PuppeteerTestingSidebar);
const K6BrowserTestingSidebar = dedicated(s.K6BrowserTestingSidebar);
// CDP and BiDi are single-page topics, so each is a one-item dedicated sidebar.
const CDPTestingSidebar = [backToDocs, { type: 'doc', id: 'run-tests-with-chrome-devtools-protocol', label: 'CDP Testing' }];
const BiDiTestingSidebar = [backToDocs, { type: 'doc', id: 'run-tests-with-webdriver-bidi', label: 'BiDi Testing' }];

// App Automation
const AppiumTestingSidebar = dedicated(s.AppiumTestingSidebar);
const EspressoTestingSidebar = dedicated(s.EspressoTestingSidebar);
const XCUITestingSidebar = dedicated(s.XCUITestingSidebar);
const FlutterTestingSidebar = dedicated(s.FlutterTestingSidebar);
const MobilewrightTestingSidebar = dedicated(s.MobilewrightTestingSidebar);
const VirtualDevicesSidebar = dedicated(s.EmuSimuSidebar);

// Standalone products
const HyperExecuteSidebar = dedicated(s.HyperExecuteSidebar);
const BrowserCloudSidebar = dedicated(s.BrowserCloudSidebar);
const SmartUISidebar = dedicated(s.VisualRegressionTestingSidebar);
const KaneAISidebar = dedicated(s.KaneAISidebar);
const KaneCLISidebar = dedicated(s.KaneCLISidebar);
const WebScannerSidebar = dedicated(s.WebScannerSidebar);
const RealTimeSidebar = dedicated(s.RealTimeBrowserTestingSiebar);
const AgentAssuranceSidebar = dedicated(s.AgentAssuranceSidebar);
const AgentTestingSidebar = dedicated(s.AgentTestingSidebar);
const MCPServerSidebar = dedicated(s.LTMCPServerSidebar);
const IntegrationsSidebar = dedicated(s.IntegrationsSidebar);
const AccessibilityTestingSidebar = dedicated(s.AccessibilityTestingSidebar);
const LocalhostTestingSidebar = dedicated(s.TestingLocalPagesSidebar);
const TestManagerSidebar = dedicated(s.TestManagerSidebar);

// Insights (Analytics + Test Intelligence combined into one dedicated sidebar,
// mirroring how Settings and Security bundles its source sidebars).
const InsightsSidebar = [backToDocs, ...items(s.Analytics), ...items(s.TestIntelligence)];

// Other Docs
const VisualUITestingSidebar = dedicated(s.VisualUITestingSidebar);
const LTBrowserSidebar = dedicated(s.LTBrowserSidebar);
const MigrationGuideSidebar = dedicated(s.LambdaTestMigrationGuideSidebar);
const ConcurrencyWidgetSidebar = dedicated(s.ConcurrencyWidgetSidebar);
const TestLogsSidebar = dedicated(s.TestManagementSidebar);

// Real Device has three bracketed groups (App / Browser / Private Cloud), so
// flatten them rather than using items(), which would keep only the first.
const RealDeviceSidebar = [backToDocs, ...s.RealDeviceSidebar.slice(1).flat()];

// Settings and Security bundles four source sidebars into one dedicated sidebar,
// grouped into categories. The account-management / single-sign-on / scim entries
// in SettingsAndSecuritySidebar duplicate the category contents below, so only its
// network docs are pulled in (under Network Access).
const SettingsAndSecuritySidebar = [
  backToDocs,
  {
    type: 'category', collapsible: true, collapsed: true, label: 'Account Management',
    items: items(s.AccountManagementSidebar),
  },
  {
    type: 'category', collapsible: true, collapsed: true, label: 'Network Access',
    items: [
      { type: 'doc', label: 'Network Whitelisting Guide', id: 'network-whitelisting-and-tunnel-guide' },
      { type: 'doc', label: 'TestMu AI Public IP Ranges', id: 'lambdatest-public-ip' },
    ],
  },
  {
    type: 'category', collapsible: true, collapsed: true, label: 'Single Sign-On (SSO)',
    items: items(s.SingleSignOnSidebar),
  },
  {
    type: 'category', collapsible: true, collapsed: true, label: 'SCIM Provisioning',
    items: items(s.ScimSidebar),
  },
];

// Cypress Testing is a link in docsSidebar (above), so its docs live ONLY in
// this dedicated sidebar — Docusaurus displays it (with the back-to-docs link)
// whenever a reader is inside a Cypress Testing page.
const CypressTestingSidebar = [backToDocs, ...items(s.CypressTestingSidebar)];

// Playwright Testing is a link in docsSidebar (above), so its docs live ONLY in
// this dedicated sidebar — Docusaurus displays it (with the back-to-docs link)
// whenever a reader is inside a Playwright Testing page.
const PlaywrightTestingSidebar = [backToDocs, ...items(s.PlaywrightTestingSidebar)];

// The shared mute-test-scenarios doc (part of the Playwright Features category)
// sets `displayed_sidebar: SeleniumTestingSidebar` in its frontmatter, so that
// name must resolve to a real sidebar here too.
const SeleniumTestingSidebar = [backToDocs, ...items(s.SeleniumTestingSidebar)];

// Puppeteer Testing is a link in docsSidebar (above), so its docs live ONLY in
// this dedicated sidebar — Docusaurus displays it (with the back-to-docs link)
// whenever a reader is inside a Puppeteer Testing page.
const PuppeteerTestingSidebar = [backToDocs, ...items(s.PuppeteerTestingSidebar)];

module.exports = {
  docsSidebar,

  // Web Automation
  SeleniumTestingSidebar,
  CypressTestingSidebar,
  PlaywrightTestingSidebar,
  PuppeteerTestingSidebar,
  K6BrowserTestingSidebar,
  CDPTestingSidebar,
  BiDiTestingSidebar,

  // App Automation
  AppiumTestingSidebar,
  EspressoTestingSidebar,
  XCUITestingSidebar,
  FlutterTestingSidebar,
  MobilewrightTestingSidebar,
  VirtualDevicesSidebar,

  // Standalone products
  HyperExecuteSidebar,
  BrowserCloudSidebar,
  SmartUISidebar,
  KaneAISidebar,
  KaneCLISidebar,
  WebScannerSidebar,
  RealTimeSidebar,
  AgentAssuranceSidebar,
  AgentTestingSidebar,
  RealDeviceSidebar,
  TestManagerSidebar,
  PuppeteerTestingSidebar,
};
