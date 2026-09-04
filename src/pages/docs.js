import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TestMu AI",
  "legalName": "LambdaTest, Inc.",
  "alternateName": ["LambdaTest", "LambdaTesting", "Lambda Test", "TestMu AI"],
  "url": "https://www.testmuai.com",
  "logo": "https://www.testmuai.com/logo.png",
  "description": "TestMu AI - AI Powered Testing Tool | AI Testing Agents On Cloud",
  "foundingDate": "2017",
  "founder": [
    { "@type": "Person", "name": "Asad Khan", "jobTitle": "Co-Founder & CEO" },
    { "@type": "Person", "name": "Jay Singh", "jobTitle": "Co-Founder & Chief Customer Officer" },
    { "@type": "Person", "name": "Mayank Bhola", "jobTitle": "Co-Founder & Head of Product" },
    { "@type": "Person", "name": "Mudit Singh", "jobTitle": "Co-Founder & Head of Growth" }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "California",
      "postalCode": "94102",
      "streetAddress": "Suite 200, 1390 market Street San Francisco",
      "addressCountry": "USA"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Noida One, Tower A, 2nd Floor, KLJ, Sector 62",
      "addressLocality": "Noida",
      "postalCode": "201309",
      "addressCountry": "India"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/testmu-ai/",
    "https://www.linkedin.com/company/lambdatest/",
    "https://www.instagram.com/testmuai/",
    "https://www.facebook.com/testmuai/",
    "https://x.com/testmuai",
    "https://www.youtube.com/@TestMuAI",
    "https://www.pinterest.com/testmuai/",
    "https://github.com/lambdaTest"
  ]
};

function NewTag({ value }) {
  return (
    <span className="newTagColor" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
      {value}
    </span>
  );
}

function Icon({ light, dark, alt }) {
  const l = useBaseUrl(`img/support/${light}`);
  const d = useBaseUrl(`img/support/${dark}`);
  return (
    <>
      <img src={l} alt={alt} className="home_icons home_light_icon" role="presentation" />
      <img src={d} alt={alt} className="home_icons home_dark_icon" role="presentation" />
    </>
  );
}

export default function Home() {
  const homeLight = useBaseUrl('img/support/home_light.png');
  const homeDark  = useBaseUrl('img/support/home_dark.png');

  return (
    <Layout
      title="TestMu AI Documentation"
      description="Explore guides, API docs, and examples for TestMu AI (Formerly LambdaTest) - the AI-native quality engineering platform.
"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <div style={{ overflow: 'hidden' }}>
      {/* Hero */}
      <div className="Doc_intro_cta">
        <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', width: '100%', position: 'relative', zIndex: 9 }}>
          <div className="Doc_intro_cta_text">
            <h1>TestMu AI (Formerly LambdaTest) Documentation</h1>
            <p>Explore guides, API references, and tutorials in one place.</p>
          </div>
          <div className="Doc_intro_cta_image">
            <img loading="eager" src={homeLight} alt="" width="701" height="576" className="home_light_cta no-zoom" role="presentation" />
            <img loading="eager" src={homeDark}  alt="" width="701" height="576" className="home_dark_cta no-zoom"  role="presentation" />
          </div>
        </div>
      </div>
     
      <div className="primary_main">
      <div className="container">

        {/* Product grid */}
        <div className="product_sections">
                    <div className="product_section">
            <h2 className="product_section_label"><Icon light="automation-light-icon.svg" dark="automation-dark-icon.svg" alt="" />Web Automation</h2>
            <div className="product_grid">
              <a href="/support/docs/testmu-running-your-first-selenium-test/"><span className="ps_title">Selenium Testing</span><span className="ps_desc">Run Selenium tests on cloud</span></a>
              <a href="/support/docs/playwright-testing/"><span className="ps_title">Playwright Testing</span><span className="ps_desc">Cross-browser Playwright on the cloud</span></a>
              <a href="/support/docs/puppeteer-testing/"><span className="ps_title">Puppeteer Testing</span><span className="ps_desc">Headless Chrome automation testing</span></a>
              <a href="/support/docs/getting-started-with-cypress-testing/"><span className="ps_title">Cypress Testing</span><span className="ps_desc">Run Cypress in the cloud</span></a>
              <a href="/support/docs/k6-browser-testing/"><span className="ps_title">K6 Testing</span><span className="ps_desc">Browser performance and load testing</span></a>
              <a href="/support/docs/run-tests-with-chrome-devtools-protocol/"><span className="ps_title">CDP Testing</span><span className="ps_desc">Chrome DevTools Protocol testing</span></a>
              <a href="/support/docs/run-tests-with-webdriver-bidi/"><span className="ps_title">BiDi Testing</span><span className="ps_desc">WebDriver BiDi protocol testing</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="appAutomation-light-icon.svg" dark="appAutomation-dark-icon.svg" alt="" />App Automation</h2>
            <div className="product_grid">
              <a href="/support/docs/getting-started-with-appium-testing/"><span className="ps_title">Appium Testing</span><span className="ps_desc">Native and hybrid app testing</span></a>
              <a href="/support/docs/getting-started-with-espresso-testing/"><span className="ps_title">Espresso Testing</span><span className="ps_desc">Android native UI automation</span></a>
              <a href="/support/docs/getting-started-with-xcuitest/"><span className="ps_title">XCUI Testing</span><span className="ps_desc">iOS native UI automation</span></a>
              <a href="/support/docs/getting-started-with-flutter-dart-android-automation/"><span className="ps_title">Flutter Testing</span><span className="ps_desc">Automate Flutter mobile apps</span></a>
              <a href="/support/docs/app-automation-on-emulators-simulators/"><span className="ps_title">Virtual Devices</span><span className="ps_desc">Emulators and simulators at scale</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="testManager-light.svg" dark="testManager-dark.svg" alt="" />Test Manager</h2>
            <div className="product_grid">
              <a href="/support/docs/test-manager/"><span className="ps_title">Get Started</span><span className="ps_desc">Create projects and test cases</span></a>
              <a href="/support/docs/csv-import/"><span className="ps_title">Import Test Cases</span><span className="ps_desc">Migrate from CSV, TestRail, Zephyr</span></a>
              <a href="/support/docs/generate-test-cases-with-ai/"><span className="ps_title">Manage Test Cases</span><span className="ps_desc">Organize, version, and reuse cases</span></a>
              <a href="/support/docs/test-run-creation-and-management/"><span className="ps_title">Test Runs</span><span className="ps_desc">Plan, execute, and track runs</span></a>
              <a href="/support/docs/link-jira-issues-with-test-manager/"><span className="ps_title">Integrations</span><span className="ps_desc">Sync Jira and issue trackers</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />KaneAI</h2>
            <div className="product_grid">
              <a href="/support/docs/getting-started-with-kane-ai/"><span className="ps_title">Get Started</span><span className="ps_desc">Author your first AI test</span></a>
              <a href="/support/docs/kaneai-kb-finding-and-interacting-with-elements/"><span className="ps_title">Author Tests</span><span className="ps_desc">Build tests in natural language</span></a>
              <a href="/support/docs/kaneai-advanced-settings/"><span className="ps_title">Configure Tests</span><span className="ps_desc">Settings, headers, and geolocation</span></a>
              <a href="/support/docs/kane-ai-automation-code-generation/"><span className="ps_title">Run & Analyze</span><span className="ps_desc">Execute and review test results</span></a>
              <a href="/support/docs/kane-ai-jira-integration/"><span className="ps_title">Integrations</span><span className="ps_desc">Jira, Azure DevOps, and CI/CD</span></a>
              <a href="/support/docs/kane-ai-command-guide/"><span className="ps_title">Reference</span><span className="ps_desc">Command guide and reference</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />Kane CLI</h2>
            <div className="product_grid">
              <a href="/support/docs/kane-cli-introduction/"><span className="ps_title">Getting Started</span><span className="ps_desc">Install and run first test</span></a>
              <a href="/support/docs/kane-cli-modes/"><span className="ps_title">Core Concepts</span><span className="ps_desc">Modes, objectives, and configuration</span></a>
              <a href="/support/docs/kane-cli-mobile/"><span className="ps_title">Mobile Testing</span><span className="ps_desc">Test iOS and Android locally</span></a>
              <a href="/support/docs/kane-cli-use-cases/"><span className="ps_title">Use Cases</span><span className="ps_desc">API testing and AI agents</span></a>
              <a href="/support/docs/kane-cli-generate/"><span className="ps_title">Generate Test Cases</span><span className="ps_desc">Create tests from plain objectives</span></a>
              <a href="/support/docs/kane-cli-assurance/"><span className="ps_title">Assurance</span><span className="ps_desc">Continuous test suite coverage</span></a>
              <a href="/support/docs/kane-cli-evidence/"><span className="ps_title">Evidence</span><span className="ps_desc">Capture and validate run evidence</span></a>
              <a href="/support/docs/kane-cli-checkpoints/"><span className="ps_title">Checkpoints</span><span className="ps_desc">Add visual and data checks</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />Agent Assurance Platform</h2>
            <div className="product_grid">
              <a href="/support/docs/getting-started-with-agent-testing-platform/"><span className="ps_title">Conversational Agent Testing</span><span className="ps_desc">Test chat, voice, video, and phone agents</span></a>
              <a href="/support/docs/agent-assurance-overview/"><span className="ps_title">Autonomous Agent Testing &nbsp;<NewTag value="NEW" /></span><span className="ps_desc">Validate coding agents with Rook</span></a>
              <a href="/support/docs/testing-your-first-ai-agent/"><span className="ps_title">Conversational Quickstart</span><span className="ps_desc">Test your first conversational agent</span></a>
              <a href="/support/docs/agent-assurance-quickstart/"><span className="ps_title">Rook Quickstart</span><span className="ps_desc">Run your first autonomous-agent test</span></a>
              <a href="/support/docs/rook-architecture/"><span className="ps_title">Rook Architecture</span><span className="ps_desc">Understand local and cloud boundaries</span></a>
              <a href="/support/docs/rook-profiles-and-hooks/"><span className="ps_title">Profiles, Phases & Hooks</span><span className="ps_desc">Control setup, prompts, and lifecycle behavior</span></a>
              <a href="/support/docs/agent-assurance-command-reference/"><span className="ps_title">Rook Command Reference</span><span className="ps_desc">Browse CLI and TUI commands</span></a>
              <a href="/support/docs/agent-testing-platform-faqs/"><span className="ps_title">Frequently Asked Questions</span><span className="ps_desc">Common agent assurance questions</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="hyp-light-icon.svg" dark="hyp-dark-icon.svg" alt="" />HyperExecute</h2>
            <div className="product_grid">
              <a href="/support/docs/getting-started-with-hyperexecute/"><span className="ps_title">Get Started</span><span className="ps_desc">Run your first HyperExecute job</span></a>
              <a href="/support/docs/hyperexecute-selenium-testing/"><span className="ps_title">Languages & Frameworks</span><span className="ps_desc">Selenium, Playwright, Appium, and more</span></a>
              <a href="/support/docs/hyperexecute-test-splitting-and-multiplexing/"><span className="ps_title">Features</span><span className="ps_desc">Test splitting, artifacts, auto-heal</span></a>
              <a href="/support/docs/hyperexecute-how-to-save-and-manage-secrets/"><span className="ps_title">Guides</span><span className="ps_desc">Secrets, tunnels, and concurrency</span></a>
              <a href="/support/docs/aws-codepipeline-with-hyperexecute/"><span className="ps_title">Integrations</span><span className="ps_desc">CI/CD and cloud pipelines</span></a>
              <a href="/support/docs/hyperexecute-private-cloud-setup/"><span className="ps_title">Private Cloud</span><span className="ps_desc">Run on your own infrastructure</span></a>
              <a href="/support/docs/hyperexecute-yaml-parameters/"><span className="ps_title">References</span><span className="ps_desc">YAML and CLI reference</span></a>
              <a href="/support/docs/hyperexecute-release-notes/"><span className="ps_title">Release Notes</span><span className="ps_desc">Latest updates and changes</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="visual-light-icon.svg" dark="visual-dark-icon.svg" alt="" />SmartUI</h2>
            <div className="product_grid">
              <a href="/support/docs/smart-visual-regression-testing/"><span className="ps_title">Getting Started</span><span className="ps_desc">Run your first visual test</span></a>
              <a href="/support/docs/smartui-selenium-js-sdk/"><span className="ps_title">Test With SDKs</span><span className="ps_desc">Selenium, Cypress, Playwright SDKs</span></a>
              <a href="/support/docs/selenium-visual-regression/"><span className="ps_title">Test With Hooks</span><span className="ps_desc">Framework-native visual checks</span></a>
              <a href="/support/docs/smart-ui-storybook/"><span className="ps_title">Storybook Testing</span><span className="ps_desc">Component visual regression testing</span></a>
              <a href="/support/docs/smartui-cli-figma/"><span className="ps_title">Figma Testing</span><span className="ps_desc">Compare designs to live builds</span></a>
              <a href="/support/docs/smartui-pdf-comparison/"><span className="ps_title">PDF Testing</span><span className="ps_desc">Compare PDF documents visually</span></a>
              <a href="/support/docs/smartui-comparison-capabilities/"><span className="ps_title">Features</span><span className="ps_desc">Comparison capabilities and options</span></a>
              <a href="/support/docs/smartui-git-branching-strategy/"><span className="ps_title">Git & Branching</span><span className="ps_desc">Branch-based visual baselines</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="automation-light-icon.svg" dark="automation-dark-icon.svg" alt="" />Browser Cloud</h2>
            <div className="product_grid">
              <a href="/support/docs/what-is-browser-cloud/"><span className="ps_title">Get Started</span><span className="ps_desc">Launch your first cloud session</span></a>
              <a href="/support/docs/browser-cloud-sessions-overview/"><span className="ps_title">Manage Your Sessions</span><span className="ps_desc">Session lifecycle and API</span></a>
              <a href="/support/docs/browser-cloud-context/"><span className="ps_title">Preserve Browser State</span><span className="ps_desc">Cookies, storage, and profiles</span></a>
              <a href="/support/docs/browser-cloud-stealth/"><span className="ps_title">Extend Your Browser</span><span className="ps_desc">Stealth, files, and extensions</span></a>
              <a href="/support/docs/browser-cloud-debugging/"><span className="ps_title">Debug and Troubleshoot</span><span className="ps_desc">Replay and inspect sessions</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="accessibility-light.svg" dark="accessibility-dark.svg" alt="" />Accessibility Testing</h2>
            <div className="product_grid">
              <a href="/support/docs/accessibility-testing/"><span className="ps_title">Getting Started</span><span className="ps_desc">Run your first accessibility scan</span></a>
              <a href="/support/docs/accessibility-testng-test/"><span className="ps_title">Languages & Frameworks</span><span className="ps_desc">Automate in your test suite</span></a>
              <a href="/support/docs/accessibility-hide-restore-issues/"><span className="ps_title">Features</span><span className="ps_desc">Manage and triage issues</span></a>
              <a href="/support/docs/accessibility-web-what-we-cover/"><span className="ps_title">Checklist</span><span className="ps_desc">What we cover and check</span></a>
              <a href="/support/docs/accessibility-rule-repository/"><span className="ps_title">Rule Repository</span><span className="ps_desc">Accessibility rules reference</span></a>
              <a href="/support/docs/web-scanner-getting-started/"><span className="ps_title">Web Scanner</span><span className="ps_desc">Scan sites for accessibility</span></a>
              <a href="/support/docs/accessibility-cicd-integration-guide/"><span className="ps_title">Integrations</span><span className="ps_desc">CI/CD accessibility integrations</span></a>
              <a href="/support/docs/accessibility-faq/"><span className="ps_title">References</span><span className="ps_desc">FAQs and reference docs</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="webscanner-light-icon.svg" dark="webscanner-dark-icon.svg" alt="" />Web Scanner</h2>
            <div className="product_grid">
              <a href="/support/docs/web-scanner-overview/"><span className="ps_title">Overview</span><span className="ps_desc">Scan sites for UI, accessibility</span></a>
              <a href="/support/docs/web-scanner-getting-started/"><span className="ps_title">Getting Started</span><span className="ps_desc">Set up your first scan</span></a>
              <a href="/support/docs/web-scanner-visual-scan/"><span className="ps_title">Visual UI Scans</span><span className="ps_desc">Detect visual regressions automatically</span></a>
              <a href="/support/docs/web-scanner-accessibility-scan/"><span className="ps_title">Accessibility Scans</span><span className="ps_desc">Find accessibility violations fast</span></a>
              <a href="/support/docs/web-scanner-adding-urls/"><span className="ps_title">Adding URLs</span><span className="ps_desc">Configure the pages to scan</span></a>
              <a href="/support/docs/web-scanner-scheduling-options/"><span className="ps_title">Scheduling Options</span><span className="ps_desc">Automate recurring scheduled scans</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="analytics-light-icon.svg" dark="analytics-dark-icon.svg" alt="" />Insights</h2>
            <div className="product_grid">
              <a href="/support/docs/analytics-dashboard-templates/"><span className="ps_title">Getting Started</span><span className="ps_desc">Prebuilt analytics dashboards</span></a>
              <a href="/support/docs/analytics-dashboard-copilot/"><span className="ps_title">Dashboards</span><span className="ps_desc">Build and customize your views</span></a>
              <a href="/support/docs/analytics-widgets/"><span className="ps_title">Widgets</span><span className="ps_desc">Add metrics and charts</span></a>
              <a href="/support/docs/analytics-test-insights/"><span className="ps_title">Test Intelligence - AI</span><span className="ps_desc">Flaky and failure analysis</span></a>
              <a href="/support/docs/insights-usage-report/"><span className="ps_title">Reports</span><span className="ps_desc">Usage and execution reports</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />Real Time</h2>
            <div className="product_grid">
              <a href="/support/docs/getting-started-with-desktop-browser-real-time-testing/"><span className="ps_title">Web Browser Testing</span><span className="ps_desc">Live desktop browser testing</span></a>
              <a href="/support/docs/getting-started-with-mobile-browser-real-time-testing/"><span className="ps_title">Mobile Browser Testing</span><span className="ps_desc">Live mobile web testing</span></a>
              <a href="/support/docs/getting-started-with-mobile-app-real-time-testing/"><span className="ps_title">Mobile App Testing</span><span className="ps_desc">Live native app testing</span></a>
              <a href="/support/docs/chrome-os-testing/"><span className="ps_title">ChromeOS Testing</span><span className="ps_desc">Test on ChromeOS devices</span></a>
              <a href="/support/docs/developer-tools/"><span className="ps_title">Key Features</span><span className="ps_desc">DevTools, screenshots, and more</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="realDevice-light.svg" dark="realDevice-dark.svg" alt="" />Real Device</h2>
            <div className="product_grid">
              <a href="/support/docs/app-testing-on-real-devices/"><span className="ps_title">Real Device App Testing</span><span className="ps_desc">Test apps on real devices</span></a>
              <a href="/support/docs/browser-testing-on-real-devices/"><span className="ps_title">Real Device Browser Testing</span><span className="ps_desc">Browser testing on real devices</span></a>
              <a href="/support/docs/public-cloud-vs-private-cloud/"><span className="ps_title">Private Cloud</span><span className="ps_desc">Dedicated real device cloud</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="Integration-light-icon.svg" dark="Integration-dark-icon.svg" alt="" />Integrations</h2>
            <div className="product_grid">
              <a href="/support/docs/bug-tracking-tools/"><span className="ps_title">Bug Tracking Tools</span><span className="ps_desc">Jira, GitHub, Azure Boards</span></a>
              <a href="/support/docs/integrations-with-project-management-tools/"><span className="ps_title">Project Management Tools</span><span className="ps_desc">Asana, Trello, and ClickUp</span></a>
              <a href="/support/docs/datadog-integration/"><span className="ps_title">Analytics Tools</span><span className="ps_desc">Datadog and observability tools</span></a>
              <a href="/support/docs/team-communication-tools/"><span className="ps_title">Team Communication Tools</span><span className="ps_desc">Slack, Teams, and more</span></a>
              <a href="/support/docs/integrations-with-ci-cd-tools/"><span className="ps_title">Integrations With CI/CD Tools</span><span className="ps_desc">Jenkins, GitLab, and CircleCI</span></a>
              <a href="/support/docs/codeless-automation-tools/"><span className="ps_title">Codeless Automation Tools</span><span className="ps_desc">No-code testing integrations</span></a>
              <a href="/support/docs/deque-integration/"><span className="ps_title">Accessibility Testing Tools</span><span className="ps_desc">Deque and axe integrations</span></a>
              <a href="/support/docs/integrate-test-reporting-test-management-tools/"><span className="ps_title">Test Reporting & Test Management Tools</span><span className="ps_desc">Reporting and management integrations</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="testing-locally-light-icon.svg" dark="testing-locally-dark-icon.svg" alt="" />Localhost Testing</h2>
            <div className="product_grid">
              <a href="/support/docs/testmu-tunnel/"><span className="ps_title">Getting started with Tunnel</span><span className="ps_desc">Set up the local tunnel</span></a>
              <a href="/support/docs/lambda-tunnel-modifiers/"><span className="ps_title">Configuration and Modifiers</span><span className="ps_desc">Tunnel flags and options</span></a>
              <a href="/support/docs/underpass-tunnel-application/"><span className="ps_title">GUI Application: Underpass</span><span className="ps_desc">Desktop tunnel application</span></a>
              <a href="/support/docs/hyperexecute-how-to-configure-tunnel/"><span className="ps_title">Integration and Automation</span><span className="ps_desc">Run tunnel in CI/CD</span></a>
              <a href="/support/docs/docker-tunnel/"><span className="ps_title">Docker Integration</span><span className="ps_desc">Run the tunnel in Docker</span></a>
              <a href="/support/docs/sharing-lambda-tunnel/"><span className="ps_title">Advanced Features</span><span className="ps_desc">Sharing and load balancing</span></a>
              <a href="/support/docs/troubleshooting-lambda-tunnel/"><span className="ps_title">Troubleshooting</span><span className="ps_desc">Fix common tunnel issues</span></a>
              <a href="/support/docs/tunnel-release-notes/"><span className="ps_title">Release Notes</span><span className="ps_desc">Latest tunnel updates</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="settings-light-icon.svg" dark="settings-dark-icon.svg" alt="" />Settings and Security</h2>
            <div className="product_grid">
              <a href="/support/docs/account-management/"><span className="ps_title">Account & Organization</span><span className="ps_desc">Account, billing, and sub-orgs</span></a>
              <a href="/support/docs/user-management/"><span className="ps_title">Users & Access</span><span className="ps_desc">Users, teams, and roles</span></a>
              <a href="/support/docs/multi-factor-authentication/"><span className="ps_title">Security & Network</span><span className="ps_desc">MFA, audit logs, whitelisting</span></a>
              <a href="/support/docs/single-sign-on/"><span className="ps_title">Single Sign-On (SSO)</span><span className="ps_desc">SAML and OIDC single sign-on</span></a>
              <a href="/support/docs/scim/"><span className="ps_title">SCIM Provisioning</span><span className="ps_desc">Automated user provisioning</span></a>
            </div>
          </div>
          <div className="product_section">
            <h2 className="product_section_label"><Icon light="other-light-icon.svg" dark="other-dark-icon.svg" alt="" />Other Docs</h2>
            <div className="product_grid">
              <a href="/support/docs/lt-browser/"><span className="ps_title">LT Browser</span><span className="ps_desc">Responsive testing browser tool</span></a>
              <a href="/support/docs/test-intelligence-overview/"><span className="ps_title">Test Intelligence</span><span className="ps_desc">Test analytics and insights</span></a>
              <a href="/support/docs/concurrency-widget/"><span className="ps_title">Concurrency Widget</span><span className="ps_desc">Calculate parallel test needs</span></a>
            </div>
          </div>
        </div>

        <div className="docs_help_footer">
          <p>Questions? <a href="https://www.testmuai.com/contact-us/">Contact Sales</a>.</p>
          <p>Building with an LLM? <a href="https://www.testmuai.com/support/docs/llms.txt">Read llms.txt</a>.</p>
        </div>

      </div>{/* /container */}
      </div>{/* /primary_main */}
      </div>{/* /overflow:hidden */}
    </Layout>
  );
}
