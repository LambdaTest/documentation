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
      { type: 'category', label: 'Puppeteer Testing', collapsible: true, collapsed: true, items: items(s.PuppeteerTestingSidebar) },
      { type: 'category', label: 'K6 Testing', collapsible: true, collapsed: true, items: items(s.K6BrowserTestingSidebar) },
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
    type: 'category', label: 'SmartUI', collapsible: true, collapsed: true,
    items: items(s.VisualRegressionTestingSidebar),
  },
  {
    type: 'category', label: 'KaneAI', collapsible: true, collapsed: true,
    items: items(s.KaneAISidebar),
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
    type: 'category', label: 'Agent To Agent', collapsible: true, collapsed: true,
    items: items(s.AgentToAgentSidebar),
  },
  {
    type: 'category', label: 'Real Device', collapsible: true, collapsed: true,
    items: items(s.RealDeviceSidebar),
  },
  {
    type: 'category', label: 'Test Manager', collapsible: true, collapsed: true,
    items: items(s.TestManagerSidebar),
  },
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

module.exports = {
  docsSidebar,
};
