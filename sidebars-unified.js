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
    type: 'html',
    value: '<span class="sidebar-section-label">Web Automation</span>',
    defaultStyle: true,
    className: 'sidebar-section-label-item',
  },
  { type: 'link', label: 'Selenium Testing', href: '/support/docs/testmu-running-your-first-selenium-test/' },
  { type: 'link', label: 'Cypress Testing', href: '/support/docs/getting-started-with-cypress-testing/' },
  { type: 'link', label: 'Playwright Testing', href: '/support/docs/playwright-agent-skills/' },
  { type: 'link', label: 'Puppeteer Testing', href: '/support/docs/puppeteer-agent-skills/' },
  { type: 'link', label: 'K6 Testing', href: '/support/docs/k6-browser-testing/' },
  { type: 'link', label: 'CDP Testing', href: '/support/docs/run-tests-with-chrome-devtools-protocol/' },
  { type: 'link', label: 'BiDi Testing', href: '/support/docs/run-tests-with-webdriver-bidi/' },
  {
    type: 'html',
    value: '<span class="sidebar-section-label">App Automation</span>',
    defaultStyle: true,
    className: 'sidebar-section-label-item',
  },
  { type: 'link', label: 'Appium Testing', href: '/support/docs/getting-started-with-appium-testing/' },
  { type: 'link', label: 'Espresso Testing', href: '/support/docs/getting-started-with-espresso-testing/' },
  { type: 'link', label: 'XCUI Testing', href: '/support/docs/getting-started-with-xcuitest/' },
  { type: 'link', label: 'Flutter Testing', href: '/support/docs/getting-started-with-flutter-dart-android-automation/' },
  { type: 'link', label: 'Virtual Devices', href: '/support/docs/app-automation-on-emulators-simulators/' },
  { type: 'link', label: 'HyperExecute', href: '/support/docs/getting-started-with-hyperexecute/' },
  { type: 'link', label: 'Browser Cloud', href: '/support/docs/what-is-browser-cloud/' },
  { type: 'link', label: 'SmartUI', href: '/support/docs/smartui-running-your-first-project/' },
  { type: 'link', label: 'KaneAI', href: '/support/docs/getting-started-with-kane-ai/' },
  {
    type: 'category', label: 'Kane CLI', collapsible: true, collapsed: true,
    items: items(s.KaneCLISidebar),
  },
  {
    type: 'category', label: 'Web Scanner', collapsible: true, collapsed: true,
    items: items(s.WebScannerSidebar),
  },
  { type: 'link', label: 'Insights', href: '/support/docs/analytics-overview/' },
  {
    type: 'category', label: 'Real Time', collapsible: true, collapsed: true,
    items: items(s.RealTimeBrowserTestingSiebar),
  },
  {
    type: 'category', label: 'Agent Testing Platform', collapsible: true, collapsed: true,
    items: items(s.AgentToAgentSidebar),
  },
  {
    type: 'category', label: 'Real Device', collapsible: true, collapsed: true,
    items: s.RealDeviceSidebar.slice(1).flat(),
  },
  {
    type: 'category', label: 'Test Manager', collapsible: true, collapsed: true,
    items: items(s.TestManagerSidebar),
  },
  {
    type: 'category', label: 'Integration', collapsible: true, collapsed: true,
    items: items(s.IntegrationsSidebar),
  },
  { type: 'link', label: 'Accessibility Testing', href: '/support/docs/accessibility-testing/' },
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

// Dedicated hub sidebar for the Web Automation area.
// A bold, non-clickable "Web Automation" label followed by links into each framework's docs.
const webAutomationSidebar = [
  {
    type: 'link',
    label: 'Back to all docs',
    href: '/support/docs/',
    customProps: { className: 'back-to-main-menu' },
  },
  {
    type: 'html',
    value: '<span class="sidebar-section-label">Web Automation</span>',
    defaultStyle: true,
    className: 'sidebar-section-label-item',
  },
  { type: 'link', label: 'Selenium Testing', href: '/support/docs/testmu-running-your-first-selenium-test/' },
  { type: 'link', label: 'Cypress Testing', href: '/support/docs/getting-started-with-cypress-testing/' },
  { type: 'link', label: 'Playwright Testing', href: '/support/docs/playwright-agent-skills/' },
  { type: 'link', label: 'Puppeteer Testing', href: '/support/docs/puppeteer-agent-skills/' },
  { type: 'link', label: 'K6 Testing', href: '/support/docs/k6-browser-testing/' },
  { type: 'link', label: 'CDP Testing', href: '/support/docs/run-tests-with-chrome-devtools-protocol/' },
  { type: 'link', label: 'BiDi Testing', href: '/support/docs/run-tests-with-webdriver-bidi/' },
];

// Dedicated per-framework sidebars for Web Automation. Each holds only that
// framework's docs plus a Back link. Because the Web Automation entries in
// docsSidebar are now links (above), these docs live ONLY here — so Docusaurus
// displays the dedicated sidebar whenever a reader is inside that framework.
const backToDocs = {
  type: 'link',
  label: '← All Docs',
  href: '/support/docs/',
  customProps: { className: 'back-to-main-menu' },
};

const SeleniumTestingSidebar = [backToDocs, ...items(s.SeleniumTestingSidebar)];
const CypressTestingSidebar = [backToDocs, ...items(s.CypressTestingSidebar)];
const PlaywrightTestingSidebar = [backToDocs, ...items(s.PlaywrightTestingSidebar)];
const PuppeteerTestingSidebar = [backToDocs, ...items(s.PuppeteerTestingSidebar)];
const K6BrowserTestingSidebar = [backToDocs, ...items(s.K6BrowserTestingSidebar)];
const AppiumTestingSidebar = [backToDocs, ...items(s.AppiumTestingSidebar)];
const EspressoTestingSidebar = [backToDocs, ...items(s.EspressoTestingSidebar)];
const XCUITestingSidebar = [backToDocs, ...items(s.XCUITestingSidebar)];
const FlutterTestingSidebar = [backToDocs, ...items(s.FlutterTestingSidebar)];
const EmuSimuSidebar = [backToDocs, ...items(s.EmuSimuSidebar)];
const HyperExecuteSidebar = [backToDocs, ...items(s.HyperExecuteSidebar)];
const VisualRegressionTestingSidebar = [backToDocs, ...items(s.VisualRegressionTestingSidebar)];
const AccessibilityTestingSidebar = [backToDocs, ...items(s.AccessibilityTestingSidebar)];
const InsightsSidebar = [backToDocs, ...items(s.Analytics)];
const BrowserCloudSidebar = [backToDocs, ...items(s.BrowserCloudSidebar)];
const KaneAISidebar = [backToDocs, ...items(s.KaneAISidebar)];

// Dedicated sidebar for MCP docs. These docs were removed from docsSidebar and
// now surface only through the "Skills & MCP" navbar tab. Because they live ONLY
// here, Docusaurus auto-associates each MCP doc with this sidebar. The back link
// returns to the Skills & MCP hub rather than the full Docs tree.
const backToSkillsMCP = {
  type: 'link',
  label: '← Skills & MCP',
  href: '/support/docs/agent-skills/',
  customProps: { className: 'back-to-main-menu' },
};
const MCPServerSidebar = [backToSkillsMCP, ...items(s.LTMCPServerSidebar)];

module.exports = {
  docsSidebar,
  webAutomationSidebar,
  SeleniumTestingSidebar,
  CypressTestingSidebar,
  PlaywrightTestingSidebar,
  PuppeteerTestingSidebar,
  K6BrowserTestingSidebar,
  AppiumTestingSidebar,
  EspressoTestingSidebar,
  XCUITestingSidebar,
  FlutterTestingSidebar,
  EmuSimuSidebar,
  HyperExecuteSidebar,
  VisualRegressionTestingSidebar,
  AccessibilityTestingSidebar,
  InsightsSidebar,
  BrowserCloudSidebar,
  KaneAISidebar,
  MCPServerSidebar,
};
