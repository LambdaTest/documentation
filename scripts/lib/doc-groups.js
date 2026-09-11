/**
 * Product taxonomy for the docs llms.txt index.
 *
 * The docs live as ~1,400 flat files in /docs, so there is no directory
 * structure to group by. The authored sidebar tree in sidebars.js IS the
 * taxonomy the docs team already maintains, so this module reuses it rather
 * than inventing a second one that would drift.
 *
 * Resolution order for a doc:
 *   1. the sidebar that claims it (explicit, authored, highest confidence)
 *   2. an ordered slug-pattern fallback, for docs no sidebar references
 *   3. the "other" group, so nothing is ever silently dropped
 *
 * Sidebar claims are keyed by the LAST path segment of the Docusaurus doc id
 * (frontmatter `id`, else the file name), because that is what sidebars.js
 * references. Slug patterns are matched against the URL slug, which is what
 * the index links to. The two differ for ~200 docs, so they must never be
 * looked up in each other's namespace.
 */

const path = require('path');

/** Shipping groups, in emit order. */
const GROUPS = [
  {
    key: 'kane',
    name: 'KaneAI and Kane CLI',
    summary:
      'The GenAI-native testing agent and its terminal companion: author tests in natural language, run them locally or on the cloud grid, and evolve them as the app changes.',
    scope:
      'KaneAI test authoring, Kane CLI commands and flags, credits, and CI usage.',
    sidebars: ['KaneAISidebar', 'KaneCLISidebar'],
    patterns: [/^kaneai/, /^kane-cli/, /^kane-/],
  },
  {
    key: 'agents-and-mcp',
    name: 'Agent Testing, MCP Server, and Browser Cloud',
    summary:
      'Test AI agents across chat, voice, and multimodal channels, connect AI clients to TestMu AI through the MCP server, and give agents a real cloud browser.',
    scope:
      'Agent testing and assurance, MCP server setup and tools, Browser Cloud sessions and SDKs.',
    sidebars: ['AgentToAgentSidebar', 'LTMCPServerSidebar', 'BrowserCloudSidebar'],
    patterns: [/^browser-cloud/, /^mcp/, /^agent-/, /agent-testing/, /connect-to-session/],
  },
  {
    key: 'hyperexecute',
    name: 'HyperExecute',
    summary:
      'AI-native test orchestration: YAML configuration, matrix and auto-split strategies, job and stage control, artifacts, and CI integration.',
    scope: 'HyperExecute YAML, execution strategies, jobs, artifacts, and CI setup.',
    sidebars: ['HyperExecuteSidebar'],
    patterns: [/^hyperexecute/, /^he-/, /hyperexecute/],
  },
  {
    key: 'web-automation',
    name: 'Web Automation Frameworks',
    summary:
      'Run Selenium, Playwright, Cypress, Puppeteer, WebdriverIO, and K6 tests on the cloud grid, plus real-time browser testing and LT Browser.',
    scope:
      'Framework setup, capabilities, parallel execution, and debugging for web automation.',
    sidebars: [
      'SeleniumTestingSidebar',
      'PlaywrightTestingSidebar',
      'CypressTestingSidebar',
      'PuppeteerTestingSidebar',
      'K6BrowserTestingSidebar',
      'RealTimeBrowserTestingSiebar',
      'LTBrowserSidebar',
    ],
    patterns: [
      /^selenium/, /^playwright/, /^cypress/, /^puppeteer/, /^k6/,
      /^webdriverio/, /^lt-browser/, /^testcafe/, /^nightwatch/, /^protractor/,
      /selenium/, /playwright/, /cypress/, /puppeteer/, /webdriver/,
      /^capabilities-for-/, /^run-.*-tests/, /^getting-started-with-selenium/,
      /^generate-multiple-lighthouse/, /^custom-headers/,
    ],
  },
  {
    key: 'app-testing',
    name: 'Mobile App Testing',
    summary:
      'Appium, Espresso, XCUITest, and Flutter automation on 10,000+ real Android and iOS devices, plus emulators and simulators.',
    scope:
      'App upload, real device and emulator execution, native app automation frameworks.',
    sidebars: [
      'RealDeviceSidebar',
      'AppiumTestingSidebar',
      'EspressoTestingSidebar',
      'XCUITestingSidebar',
      'FlutterTestingSidebar',
      'EmuSimuSidebar',
    ],
    patterns: [
      /^appium/, /^espresso/, /^xcui/, /^flutter/, /^real-device/,
      /^app-/, /^android/, /^ios-/, /emulator/, /simulator/,
      /espresso/, /xcuitest/, /appium/, /-on-android/, /ios-app/, /mobile-app/,
    ],
  },
  {
    key: 'visual-testing',
    name: 'SmartUI and Visual Testing',
    summary:
      'Visual regression testing with SmartUI: capture screenshots, compare against baselines, and triage pixel, layout, and DOM differences.',
    scope: 'SmartUI CLI and SDKs, baselines, comparisons, and visual review workflows.',
    sidebars: ['VisualRegressionTestingSidebar', 'VisualUITestingSidebar'],
    patterns: [/^smartui/, /visual-regression/, /^screenshot/, /screenshot/, /responsive-testing/],
  },
  {
    key: 'accessibility',
    name: 'Accessibility Testing',
    summary:
      'Automated and manual accessibility testing for web and mobile against WCAG, ADA, and Section 508, through DevTools, CI/CD, and real devices.',
    scope: 'Accessibility automation, DevTools, app scanner, rules, and reporting.',
    sidebars: ['AccessibilityTestingSidebar', 'WebScannerSidebar'],
    patterns: [/^accessibility/, /^a11y/, /^web-scanner/],
  },
  {
    key: 'integrations',
    name: 'Integrations',
    summary:
      'Connect TestMu AI to the tools you already use: project management, CI/CD, communication, codeless automation, and bug tracking.',
    scope: 'Per-tool setup for Jira, Slack, GitHub, GitLab, Jenkins, Azure, and many more.',
    sidebars: ['IntegrationsSidebar'],
    patterns: [
      /integration$/, /-integration-with-/, /^integrate-/, /-integration-/,
      /^jira/, /^slack/, /^github/, /^gitlab/, /^jenkins/,
      /^azure-(devops|pipeline)/, /^asana/, /^trello/, /^bitbucket/, /^circleci/, /^travis/,
      /^aws-codepipeline/, /^bamboo/, /^drone-ci/, /^gocd/, /^buildkite/,
      /^codefresh/, /^codeship/, /^gradle/, /^katalon/, /^ranorex/, /^leapwork/,
      /^ghost-inspector/, /^applitools/, /^breeze/, /^oxygen/, /^testrail/,
    ],
  },
  {
    key: 'analytics',
    name: 'Test Analytics and Test Manager',
    summary:
      'Test Insights dashboards, AI-native Test Intelligence for flaky test detection, and the Test Manager case and run lifecycle.',
    scope: 'Dashboards and widgets, flaky test analysis, test cases, runs, and milestones.',
    sidebars: ['Analytics', 'TestIntelligence', 'TestManagerSidebar', 'TestManagementSidebar'],
    patterns: [/^analytics/, /^test-intelligence/, /^test-manager/, /^insights/,
      /failure-analysis/, /defect-analysis/, /^auto-healing/, /-report$/, /^custom-.*-report/,
    ],
  },
  {
    key: 'platform-and-security',
    name: 'Platform, Access, and Security',
    summary:
      'Tunnel and local page testing, single sign-on, SCIM provisioning, account and organisation management, billing, and concurrency.',
    scope: 'Tunnel setup, SSO and SCIM, account and org settings, billing, and concurrency.',
    sidebars: [
      'TestingLocalPagesSidebar',
      'AccountManagementSidebar',
      'SettingsAndSecuritySidebar',
      'ScimSidebar',
      'SingleSignOnSidebar',
      'ConcurrencyWidgetSidebar',
      'LambdaTestMigrationGuideSidebar',
    ],
    patterns: [
      /^tunnel/, /^sso/, /^scim/, /^security/, /^billing/, /^account/,
      /^organization/, /^concurrency/, /^single-sign/, /^migration/,
      /tunnel/, /-sso/, /(^|-)sso-/, /migration-guide/, /^migrate-/, /data-retention/,
      /^delete-testmu-account/, /^enterprise-ready/, /shared-cloud-usage/,
    ],
  },
];

/** Fallback bucket. Never omitted: every doc must land somewhere. */
const OTHER = {
  key: 'other',
  name: 'Other Documentation',
  summary:
    'Documentation not scoped to a single product area, including platform overviews, release notes, and general reference.',
  scope: 'Overviews, release notes, and reference material spanning several products.',
};

const GROUP_ORDER = [...GROUPS.map((g) => g.key), OTHER.key];

/** Last path segment of a doc id, matching resolveMdUrl() in the generator. */
function lastSegment(id) {
  return String(id).replace(/^\//, '').replace(/\/$/, '').split('/').pop();
}

/** Collect every doc id referenced anywhere in a sidebar subtree. */
function collectDocIds(node, acc) {
  if (typeof node === 'string') {
    acc.push(node);
    return acc;
  }
  if (Array.isArray(node)) {
    for (const child of node) collectDocIds(child, acc);
    return acc;
  }
  if (node && typeof node === 'object') {
    if (node.type === 'doc' && node.id) acc.push(node.id);
    if (node.link && node.link.type === 'doc' && node.link.id) acc.push(node.link.id);
    if (node.items) collectDocIds(node.items, acc);
  }
  return acc;
}

/**
 * Build slug -> group key from sidebars.js.
 *
 * A slug claimed by two sidebars in different groups goes to the first group in
 * GROUP_ORDER that claims it, so the emit is deterministic and no doc is
 * duplicated across files.
 */
function buildGroupMap(sidebarsPath) {
  const resolved =
    sidebarsPath || path.join(__dirname, '..', '..', 'sidebars.js');

  let sidebars;
  try {
    sidebars = require(resolved);
  } catch (err) {
    console.warn(
      `doc-groups: could not load ${resolved} (${err.message}); falling back to slug patterns only.`
    );
    return new Map();
  }

  const sidebarToGroup = new Map();
  for (const group of GROUPS) {
    for (const name of group.sidebars) sidebarToGroup.set(name, group.key);
  }

  const unknown = [];
  for (const name of Object.keys(sidebars)) {
    if (!sidebarToGroup.has(name)) unknown.push(name);
  }
  if (unknown.length) {
    console.warn(
      `doc-groups: ${unknown.length} sidebar(s) not mapped to a group, their docs fall through to patterns: ${unknown.join(', ')}`
    );
  }

  const map = new Map();
  for (const key of GROUP_ORDER) {
    for (const [name, groupKey] of sidebarToGroup) {
      if (groupKey !== key || !sidebars[name]) continue;
      for (const id of collectDocIds(sidebars[name], [])) {
        const slug = lastSegment(id);
        if (!map.has(slug)) map.set(slug, key);
      }
    }
  }
  return map;
}

/**
 * Order in which slug patterns are tried. Separate from GROUPS (emit order)
 * because precision matters here: "testrail-integration-with-testmu-selenium-grid"
 * is an integration doc, not a Selenium doc, so integrations must be tried
 * before web-automation.
 */
const MATCH_ORDER = [
  'accessibility',
  'integrations',
  'kane',
  'hyperexecute',
  'visual-testing',
  'agents-and-mcp',
  'app-testing',
  'web-automation',
  'analytics',
  'platform-and-security',
];

/**
 * Resolve one doc to a group key. Always returns a key.
 *
 * The sidebar claim is looked up by doc id only; the URL slug is never used
 * against the id-keyed map, because a slug can equal a different doc's id
 * (mark-as-bug did exactly that and was filed under the wrong product).
 *
 * Patterns run in two passes: anchored product prefixes such as /^hyperexecute/
 * across every group first, then the looser substring patterns. Without that,
 * "hyperexecute-jenkins-integration" is claimed by /integration$/ before
 * HyperExecute's own patterns are ever consulted.
 */
function groupFor(docId, slug, groupMap) {
  const claimed = groupMap.get(lastSegment(docId));
  if (claimed) return claimed;
  const key = lastSegment(slug);
  const byKey = new Map(GROUPS.map((g) => [g.key, g]));
  for (const anchoredOnly of [true, false]) {
    for (const groupKey of MATCH_ORDER) {
      const group = byKey.get(groupKey);
      if (!group) continue;
      const patterns = group.patterns.filter((re) => re.source.startsWith('^') === anchoredOnly);
      if (patterns.some((re) => re.test(key))) return group.key;
    }
  }
  return OTHER.key;
}

module.exports = { GROUPS, OTHER, GROUP_ORDER, buildGroupMap, groupFor, lastSegment };
