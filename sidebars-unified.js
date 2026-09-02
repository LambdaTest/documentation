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
  { type: 'link', label: 'Kane CLI', href: '/support/docs/kane-cli-introduction/' },
  { type: 'link', label: 'Web Scanner', href: '/support/docs/web-scanner-overview/' },
  { type: 'link', label: 'Insights', href: '/support/docs/analytics-overview/' },
  { type: 'link', label: 'Real Time', href: '/support/docs/getting-started-with-desktop-browser-real-time-testing/' },
  { type: 'link', label: 'Agent Testing Platform', href: '/support/docs/getting-started-with-agent-testing-platform/' },
  { type: 'link', label: 'Real Device', href: '/support/docs/app-testing-on-real-devices/' },
  { type: 'link', label: 'Test Manager', href: '/support/docs/test-manager/' },
  { type: 'link', label: 'Integration', href: '/support/docs/bug-tracking-tools/' },
  { type: 'link', label: 'Accessibility Testing', href: '/support/docs/accessibility-testing/' },
  { type: 'link', label: 'Testing Locally', href: '/support/docs/testmu-tunnel/' },
  { type: 'link', label: 'Setting and Security', href: '/support/docs/account-management/' },
  { type: 'link', label: 'Visual UI Testing', href: '/support/docs/visual-ui-testing/' },
  { type: 'link', label: 'LT Browser', href: '/support/docs/lt-browser/' },
  { type: 'link', label: 'Migration Guide', href: '/support/docs/testmu-capability-map/' },
  { type: 'link', label: 'Concurrency Widget', href: '/support/docs/concurrency-widget/' },
  { type: 'link', label: 'Test Logs', href: '/support/docs/test-logs/' },
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

// Newly dedicated product sidebars. Their docsSidebar entries are now links
// (above), so these docs live ONLY here and Docusaurus shows the focused
// sidebar whenever a reader is inside that product — same pattern as KaneAI.
const KaneCLISidebar = [backToDocs, ...items(s.KaneCLISidebar)];
const WebScannerSidebar = [backToDocs, ...items(s.WebScannerSidebar)];
const RealTimeBrowserTestingSidebar = [backToDocs, ...items(s.RealTimeBrowserTestingSiebar)];
const AgentToAgentSidebar = [backToDocs, ...items(s.AgentToAgentSidebar)];
const RealDeviceSidebar = [backToDocs, ...items(s.RealDeviceSidebar)];
const IntegrationsSidebar = [backToDocs, ...items(s.IntegrationsSidebar)];
const TestingLocalPagesSidebar = [backToDocs, ...items(s.TestingLocalPagesSidebar)];

// Setting & Security: one dedicated sidebar, organized into one-level category groups.
const SettingsAndSecuritySidebar = [
  backToDocs,
  {
    type: 'category', collapsed: false, label: 'Account & Organization',
    items: [
      { type: 'doc', id: 'account-management', label: 'Account Management' },
      { type: 'doc', id: 'manage-subscriptions', label: 'Manage Subscriptions' },
      { type: 'doc', id: 'credits-management', label: 'Credits Management' },
      { type: 'doc', id: 'sub-organizations', label: 'Sub Organizations' },
      { type: 'doc', id: 'service-accounts', label: 'Service Accounts' },
      { type: 'doc', id: 'manage-ai-capabilities', label: 'Manage AI Capabilities' },
      { type: 'doc', id: 'delete-lambdatest-account', label: 'Deleting TestMu AI Account' },
    ],
  },
  {
    type: 'category', collapsed: true, label: 'Users & Access',
    items: [
      { type: 'doc', id: 'user-management', label: 'User Management' },
      { type: 'doc', id: 'team-management', label: 'Team Management' },
      { type: 'doc', id: 'group-management', label: 'Group Management' },
      { type: 'doc', id: 'rbac-roles-and-permissions', label: 'Roles and Permissions (RBAC)' },
      { type: 'doc', id: 'kaneai-test-manager-access-management', label: 'Access Management' },
      { type: 'doc', id: 'support-access', label: 'Support Access' },
    ],
  },
  {
    type: 'category', collapsed: true, label: 'Security & Network',
    items: [
      { type: 'doc', id: 'multi-factor-authentication', label: 'Multi-Factor Authentication' },
      { type: 'doc', id: 'password-and-access-key-expiration-policy', label: 'Password and Access Key Expiration Policy' },
      { type: 'doc', id: 'audit-logs', label: 'Audit Logs' },
      { type: 'doc', id: 'tunnel-security', label: 'Tunnel Security' },
      { type: 'doc', id: 'network-whitelisting-and-tunnel-guide', label: 'Network Whitelisting Guide' },
      { type: 'doc', id: 'lambdatest-public-ip', label: 'TestMu AI Public IP' },
    ],
  },
  {
    type: 'category', collapsed: true, label: 'Single Sign-On (SSO)',
    items: [
      { type: 'doc', id: 'single-sign-on', label: 'Getting Started' },
      { type: 'doc', id: 'lambdatest-sso-self-serve', label: 'Create SSO Connection' },
      { type: 'doc', id: 'lambdatest-sso-manage-connection', label: 'Manage SSO Connection' },
      { type: 'doc', id: 'lambdatest-sso-okta-integration', label: 'Okta' },
      { type: 'doc', id: 'lambdatest-sso-onelogin-using-saml', label: 'OneLogin' },
      { type: 'doc', id: 'lambdatest-sso-google', label: 'Google Workspace' },
      { type: 'doc', id: 'sso-azure-integration', label: 'Azure AD' },
      { type: 'doc', id: 'lambdatest-sso-pingidentity-integration', label: 'PingIdentity' },
      { type: 'doc', id: 'lambdatest-sso-oidc', label: 'OIDC' },
    ],
  },
  {
    type: 'category', collapsed: true, label: 'SCIM Provisioning',
    items: [
      { type: 'doc', id: 'scim', label: 'Getting Started' },
      { type: 'doc', id: 'azure-scim', label: 'Azure AD' },
      { type: 'doc', id: 'okta-scim', label: 'Okta' },
      { type: 'doc', id: 'jumpcloud-scim', label: 'JumpCloud' },
      { type: 'doc', id: 'pingone-scim', label: 'PingOne' },
    ],
  },
];

// Former "Other Docs" bucket, split into one dedicated sidebar per product.
const VisualUITestingSidebar = [backToDocs, ...items(s.VisualUITestingSidebar)];
const LTBrowserSidebar = [backToDocs, ...items(s.LTBrowserSidebar)];
const LambdaTestMigrationGuideSidebar = [backToDocs, ...items(s.LambdaTestMigrationGuideSidebar)];
const ConcurrencyWidgetSidebar = [backToDocs, ...items(s.ConcurrencyWidgetSidebar)];
const TestManagementSidebar = [backToDocs, ...items(s.TestManagementSidebar)];

// Dedicated sidebar for Test Manager. Because the Test Manager entry in
// docsSidebar is now a link (above), these docs live ONLY here — so Docusaurus
// displays this dedicated sidebar whenever a reader is inside Test Manager.
const TestManagerSidebar = [backToDocs, ...items(s.TestManagerSidebar)];

// Dedicated sidebar for MCP docs. These docs surface through their own "MCP"
// navbar tab. Because they live ONLY here, Docusaurus auto-associates each MCP
// doc with this sidebar. The back link returns to the full Docs tree.
const backToMCP = {
  type: 'link',
  label: '← All Docs',
  href: '/support/docs/',
  customProps: { className: 'back-to-main-menu' },
};
const MCPServerSidebar = [backToMCP, ...items(s.LTMCPServerSidebar)];

// CDP and BiDi are standalone Web Automation pages — each gets its own focused sidebar.
const CDPTestingSidebar = [backToDocs, { type: 'doc', id: 'run-tests-with-chrome-devtools-protocol', label: 'CDP Testing' }];
const BiDiTestingSidebar = [backToDocs, { type: 'doc', id: 'run-tests-with-webdriver-bidi', label: 'BiDi Testing' }];

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
  TestManagerSidebar,
  MCPServerSidebar,
  KaneCLISidebar,
  WebScannerSidebar,
  RealTimeBrowserTestingSidebar,
  AgentToAgentSidebar,
  RealDeviceSidebar,
  IntegrationsSidebar,
  TestingLocalPagesSidebar,
  SettingsAndSecuritySidebar,
  VisualUITestingSidebar,
  LTBrowserSidebar,
  LambdaTestMigrationGuideSidebar,
  ConcurrencyWidgetSidebar,
  TestManagementSidebar,
  CDPTestingSidebar,
  BiDiTestingSidebar,
};
