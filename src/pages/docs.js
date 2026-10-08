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

// A single product card: title + short description.
function Card({ href, title, desc }) {
  return (
    <a className="prodCard" href={href}>
      <span className="prodCard_title">{title}</span>
      <span className="prodCard_desc">{desc}</span>
    </a>
  );
}

// A product line: heading + one-line blurb + horizontal rule + a row of cards.
function Section({ icon, title, tag, blurb, children }) {
  return (
    <section className="prodSection">
      <h2 className="prodSection_h2">
        {icon ? <Icon light={icon.light} dark={icon.dark} alt="" /> : null}
        {title}
        {tag ? <>&nbsp;<NewTag value={tag} /></> : null}
      </h2>
      {blurb ? <p className="prodSection_desc">{blurb}</p> : null}
      <hr className="prodSection_hr" />
      <div className="prodCards">{children}</div>
    </section>
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

        {/* Product catalog — one section per product line, square cards laid out horizontally */}
        <div className="prodCatalog">

          <Section icon={{ light: 'automation-light-icon.svg', dark: 'automation-dark-icon.svg' }} title="Web Automation" blurb="Run automated browser tests at scale with Selenium, Cypress, Playwright, and more.">
            <Card href="/support/docs/getting-started-with-testmu-automation/" title="Selenium Testing" desc="Run Selenium tests on cloud grid" />
            <Card href="/support/docs/getting-started-with-cypress-testing/" title="Cypress Testing" desc="Run Cypress tests across browsers" />
            <Card href="/support/docs/playwright-testing/" title="Playwright Testing" desc="Scale Playwright tests in parallel" />
            <Card href="/support/docs/puppeteer-testing/" title="Puppeteer Testing" desc="Automate Chrome with Puppeteer online" />
            <Card href="/support/docs/k6-browser-testing/" title="K6 Testing" desc="Browser performance testing with K6" />
            <Card href="/support/docs/run-tests-with-chrome-devtools-protocol/" title="CDP Testing" desc="Automate via Chrome DevTools Protocol" />
            <Card href="/support/docs/run-tests-with-webdriver-bidi/" title="BiDi Testing" desc="Cross-browser automation with WebDriver BiDi" />
          </Section>

          <Section icon={{ light: 'appAutomation-light-icon.svg', dark: 'appAutomation-dark-icon.svg' }} title="App Automation" blurb="Automate native and hybrid app tests with Appium, Espresso, XCUITest, and more.">
            <Card href="/support/docs/getting-started-with-appium-testing/" title="Appium Testing" desc="Automate native apps with Appium" />
            <Card href="/support/docs/getting-started-with-espresso-testing/" title="Espresso Testing" desc="Android UI testing with Espresso" />
            <Card href="/support/docs/getting-started-with-xcuitest/" title="XCUI Testing" desc="iOS UI testing with XCUITest" />
            <Card href="/support/docs/getting-started-with-flutter-dart-android-automation/" title="Flutter Testing" desc="Automate Flutter apps on devices" />
            <Card href="/support/docs/mobilewright-overview/" title="Mobilewright Testing" desc="Playwright-style tests on real devices" />
            <Card href="/support/docs/app-automation-on-emulators-simulators/" title="Virtual Devices" desc="Test on emulators and simulators" />
          </Section>

          <Section icon={{ light: 'hyp-light-icon.svg', dark: 'hyp-dark-icon.svg' }} title="HyperExecute" blurb="AI-native test orchestration that runs suites up to 70% faster than traditional grids.">
            <Card href="/support/docs/getting-started-with-hyperexecute/" title="Getting Started" desc="Set up your first job" />
            <Card href="/support/docs/key-features-of-hyperexecute/" title="Features" desc="Explore key HyperExecute capabilities" />
            <Card href="/support/docs/hyperexecute-yaml-parameters/" title="HyperExecute YAML" desc="Configure runs with YAML parameters" />
            <Card href="/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/" title="HyperExecute CLI" desc="Trigger jobs from the CLI" />
            <Card href="/support/docs/hyperexecute-mcp-server/" title="HyperExecute MCP" desc="Run HyperExecute via MCP server" />
            <Card href="/support/docs/hyperexecute-private-cloud-setup/" title="Private Cloud" desc="Deploy HyperExecute in private cloud" />
          </Section>

          <Section icon={{ light: 'performance-light-icon.svg', dark: 'performance-dark-icon.svg' }} title="Performance Testing" blurb="Run JMeter and Gatling load tests on scalable cloud infrastructure." tag="NEW">
            <Card href="/support/docs/hyperexecute-performance-testing/" title="Getting Started" desc="Start load and performance testing" />
            <Card href="/support/docs/hyperexecute-run-jmeter-tests/" title="JMeter Testing" desc="Run JMeter tests at scale" />
            <Card href="/support/docs/hyperexecute-gattling-testing/" title="Gatling Testing" desc="Run Gatling load tests on cloud" />
          </Section>

          <Section icon={{ light: 'analytics-light-icon.svg', dark: 'analytics-dark-icon.svg' }} title="Insights" blurb="Track quality trends with dashboards, analytics, and AI-powered insights.">
            <Card href="/support/docs/analytics-dashboard-templates/" title="Pre-built Dashboards" desc="Ready-made analytics dashboard templates" />
            <Card href="/support/docs/analytics-create-dashboard/" title="Custom Dashboards" desc="Build your own analytics dashboards" />
            <Card href="/support/docs/analytics-widgets/" title="Widgets" desc="Add widgets to track metrics" />
            <Card href="/support/docs/analytics-dashboard-copilot/" title="Dashboard CoPilot AI" desc="Generate dashboards with AI assistance" />
            <Card href="/support/docs/analytics-test-case-insights/" title="Test Case Insights" desc="Analyze test case performance trends" />
            <Card href="/support/docs/analytics-build-comparison/" title="Build Insights" desc="Compare and analyze build results" />
            <Card href="/support/docs/analytics-modules-test-intelligence-flaky-test-analytics/" title="Flaky Test Insights" desc="Detect and track flaky tests" />
            <Card href="/support/docs/analytics-modules-test-intelligence-command-logs-analytics/" title="Command Logs Insights" desc="Analyze command logs across runs" />
          </Section>

          <Section icon={{ light: 'browserCloud-light-icon.svg', dark: 'browserCloud-dark-icon.svg' }} title="Browser Cloud" blurb="Cloud browser infrastructure purpose-built for AI agents." tag="NEW">
            <Card href="/support/docs/what-is-browser-cloud/" title="What is Browser Cloud" desc="Cloud browsers built for agents" />
            <Card href="/support/docs/launch-first-session/" title="Launch Session With SDK" desc="Start a session using SDK" />
            <Card href="/support/docs/browser-cloud-skills/" title="Launch With Agent Skills" desc="Launch sessions with agent skills" />
            <Card href="/support/docs/connect-to-session/" title="Connect to a Session" desc="Connect to a running session" />
          </Section>

          <Section icon={{ light: 'visual-light-icon.svg', dark: 'visual-dark-icon.svg' }} title="SmartUI" blurb="Catch visual regressions with pixel-perfect screenshot comparison.">
            <Card href="/support/docs/smart-visual-regression-testing/" title="Getting Started" desc="Start visual regression testing fast" />
            <Card href="/support/docs/smartui-selenium-js-sdk/" title="Explore SDKs" desc="Integrate SmartUI with your SDK" />
            <Card href="/support/docs/smartui-cli/" title="CLI" desc="Run visual tests from CLI" />
            <Card href="/support/docs/smartui-upload-api-v2/" title="Upload Screenshots" desc="Upload screenshots via the API" />
            <Card href="/support/docs/smartui-pdf-comparison/" title="Smart PDF Comparison" desc="Compare PDFs for visual changes" />
            <Card href="/support/docs/smart-ui-build-options/" title="Build Config and Options" desc="Configure builds and comparison settings" />
            <Card href="/support/docs/test-settings-options/" title="Advance Comparison Options" desc="Fine-tune visual comparison settings" />
            <Card href="/support/docs/html-dom-smartui-options/" title="Handling Dynamic Data" desc="Ignore dynamic content during comparison" />
          </Section>

          <Section icon={{ light: 'kaneai-light-icon.svg', dark: 'kaneai-dark-icon.svg' }} title="KaneAI" blurb="Plan, author, and evolve tests end-to-end using natural language.">
            <Card href="/support/docs/getting-started-with-kane-ai/" title="Getting Started" desc="Create tests with natural language" />
            <Card href="/support/docs/author-your-first-desktop-browser-test/" title="Author Desktop Browser Test" desc="Author a desktop browser test" />
            <Card href="/support/docs/author-your-first-mobile-app-test/" title="Author Mobile App Test" desc="Author a mobile app test" />
            <Card href="/support/docs/kane-ai-api-testing/" title="API Testing" desc="Test APIs with KaneAI" />
            <Card href="/support/docs/kane-ai-command-guide/" title="Command Types" desc="Learn available KaneAI command types" />
            <Card href="/support/docs/kaneai-ci-cd-automation/" title="Test Automation with CI/CD" desc="Run KaneAI tests in CI/CD" />
            <Card href="/support/docs/kaneai-faqs/" title="FAQs" desc="Common KaneAI questions answered" />
          </Section>

          <Section icon={{ light: 'kanecli-light-icon.svg', dark: 'kanecli-dark-icon.svg' }} title="Kane CLI" blurb="An AI agent that proves your app works with evidence-backed verdicts." tag="NEW">
            <Card href="/support/docs/kane-cli-introduction/" title="Getting Started" desc="Introduction to the Kane CLI" />
            <Card href="/support/docs/kane-cli-installation/" title="Installation" desc="Install the Kane CLI locally" />
            <Card href="/support/docs/kane-cli-quickstart/" title="Quick Start" desc="Run your first CLI test" />
            <Card href="/support/docs/kane-cli-writing-objectives/" title="Writing Objectives" desc="Write clear test objectives" />
            <Card href="/support/docs/kane-cli-generate/" title="Generate Test Cases" desc="Generate test cases automatically" />
            <Card href="/support/docs/kane-cli-checkpoints/" title="Checkpoints" desc="Add visual and data checkpoints" />
            <Card href="/support/docs/kane-cli-agent-mode/" title="Agent Mode" desc="Run tests in agent mode" />
            <Card href="/support/docs/kane-cli-cli-reference/" title="CLI Reference" desc="Full command-line reference guide" />
          </Section>

          <Section icon={{ light: 'webscanner-light-icon.svg', dark: 'webscanner-dark-icon.svg' }} title="Web Scanner" blurb="Automatically scan websites for visual and accessibility issues.">
            <Card href="/support/docs/web-scanner-overview/" title="Overview" desc="Scan sites for UI issues" />
            <Card href="/support/docs/web-scanner-getting-started/" title="Getting Started" desc="Set up your first scan" />
            <Card href="/support/docs/web-scanner-visual-scan/" title="Visual UI Scans" desc="Catch visual UI regressions automatically" />
            <Card href="/support/docs/web-scanner-accessibility-scan/" title="Accessibility Scans" desc="Scan pages for accessibility issues" />
            <Card href="/support/docs/web-scanner-adding-urls/" title="Adding URLs" desc="Add URLs to your scans" />
            <Card href="/support/docs/web-scanner-scheduling-options/" title="Scheduling Options" desc="Schedule scans to run automatically" />
          </Section>

          <Section icon={{ light: 'agentTesting-light-icon.svg', dark: 'agentTesting-dark-icon.svg' }} title="Agent Testing" blurb="Validate AI chat, voice, phone, image, and video agents end-to-end.">
            <Card href="/support/docs/getting-started-with-agent-testing-platform/" title="Overview" desc="Test AI agents end-to-end" />
            <Card href="/support/docs/chat-agent/" title="Supported Agent Types" desc="Chat, voice, phone, image agents" />
            <Card href="/support/docs/testing-your-first-ai-agent/" title="Test Your First Agent" desc="Run your first agent test" />
            <Card href="/support/docs/agent-testing-cli/" title="Agent Testing CLI" desc="Automate agent tests via CLI" />
            <Card href="/support/docs/chat-agent-api-integration/" title="Integrate a Chat Agent" desc="Connect a chat agent API" />
            <Card href="/support/docs/agent-testing-platform-faqs/" title="FAQs" desc="Common agent testing questions" />
          </Section>

          <Section icon={{ light: 'agentAssurance-light-icon.svg', dark: 'agentAssurance-dark-icon.svg' }} title="Agent Assurance" blurb="Prove your AI agents are safe to ship, with evidence-backed verdicts." tag="NEW">
            <Card href="/support/docs/agent-assurance-overview/" title="Overview" desc="Assure agent quality with Rook" />
            <Card href="/support/docs/agent-assurance-quickstart/" title="Rook Quickstart" desc="Get started with Rook quickly" />
            <Card href="/support/docs/rook-architecture/" title="Rook Architecture" desc="How Rook works under hood" />
            <Card href="/support/docs/rook-profiles-and-hooks/" title="Profiles, Phases & Hooks" desc="Configure profiles, phases, and hooks" />
            <Card href="/support/docs/agent-assurance-command-reference/" title="Command Reference" desc="Full Rook command reference" />
          </Section>

          <Section icon={{ light: 'testManager-light.svg', dark: 'testManager-dark.svg' }} title="Test Manager" blurb="Plan, organize, and run manual and automated tests in one workspace.">
            <Card href="/support/docs/create-projects/" title="Create Projects" desc="Organize test cases into projects" />
            <Card href="/support/docs/insights-dashboard/" title="Insights Dashboard" desc="Track testing progress and metrics" />
            <Card href="/support/docs/manual-test-case-creation/" title="Manual Test Cases" desc="Create and manage manual cases" />
            <Card href="/support/docs/automated-test-cases-with-ai/" title="Automated Test Cases" desc="Link automated tests to cases" />
            <Card href="/support/docs/test-run-creation-and-management/" title="Test Run" desc="Create and manage test runs" />
            <Card href="/support/docs/milestone-creation-and-management/" title="Milestones" desc="Plan releases with milestones" />
            <Card href="/support/docs/link-jira-issues-with-test-manager/" title="Issue Tracker Integration" desc="Link issues to your tests" />
          </Section>

          <Section icon={{ light: 'accessibility-light.svg', dark: 'accessibility-dark.svg' }} title="Accessibility Testing" blurb="Find, fix, and prevent accessibility issues across web and mobile apps.">
            <Card href="/support/docs/accessibility-testing/" title="Getting Started" desc="Start accessibility testing your sites" />
            <Card href="/support/docs/accessibility-devtools/" title="Accessibility DevTools" desc="Scan pages with DevTools extension" />
            <Card href="/support/docs/accessibility-automation/" title="Accessibility Automation" desc="Automate accessibility checks in tests" />
            <Card href="/support/docs/accessibility-test-scheduling/" title="Sitemap Scheduling" desc="Schedule scans across your sitemap" />
            <Card href="/support/docs/accessibility-app-scanner/" title="Native App Scanner" desc="Scan native apps for accessibility" />
            <Card href="/support/docs/accessibility-native-app-automation-test/" title="Native App Automation" desc="Automate native app accessibility checks" />
            <Card href="/support/docs/screen-reader-on-accessibility/" title="Screen Reader" desc="Test with real screen readers" />
          </Section>

          <Section icon={{ light: 'Realtime-light-icon.svg', dark: 'Realtime-dark-icon.svg' }} title="Real Time" blurb="Live, interactive manual testing across real browsers and virtual devices.">
            <Card href="/support/docs/getting-started-with-desktop-browser-real-time-testing/" title="Web Browser Testing" desc="Live test on desktop browsers" />
            <Card href="/support/docs/getting-started-with-mobile-browser-real-time-testing/" title="Mobile Browser Testing" desc="Live test on mobile browsers" />
            <Card href="/support/docs/getting-started-with-mobile-app-real-time-testing/" title="Mobile App Testing" desc="Live test mobile apps manually" />
            <Card href="/support/docs/chrome-os-web-browser-testing/" title="ChromeOS Browser Testing" desc="Live test on ChromeOS browsers" />
            <Card href="/support/docs/chrome-os-app-testing/" title="ChromeOS App Testing" desc="Live test apps on ChromeOS" />
            <Card href="/support/docs/developer-tools/" title="Key Features" desc="Explore real-time testing features" />
          </Section>

          <Section icon={{ light: 'realDevice-light.svg', dark: 'realDevice-dark.svg' }} title="Real Device" blurb="Test apps and websites on 10,000+ real Android and iOS devices.">
            <Card href="/support/docs/app-testing-on-real-devices/" title="Real Device App Testing" desc="Test apps on real devices" />
            <Card href="/support/docs/browser-testing-on-real-devices/" title="Real Device Browser Testing" desc="Test browsers on real devices" />
            <Card href="/support/docs/public-cloud-vs-private-cloud/" title="Private Cloud" desc="Dedicated real devices for teams" />
          </Section>

          <Section icon={{ light: 'Integration-light-icon.svg', dark: 'Integration-dark-icon.svg' }} title="Integrations" blurb="Connect TestMu AI with your CI/CD, bug tracking, and collaboration tools.">
            <Card href="/support/docs/bug-tracking-tools/" title="Bug Tracking" desc="Connect your bug tracking tools" />
            <Card href="/support/docs/integrations-with-project-management-tools/" title="Project Management" desc="Integrate project management tools" />
            <Card href="/support/docs/integrations-with-ci-cd-tools/" title="CI / CD Integration" desc="Connect your CI/CD pipelines" />
            <Card href="/support/docs/integrate-test-reporting-test-management-tools/" title="Test Reporting" desc="Integrate test reporting and management" />
            <Card href="/support/docs/team-communication-tools/" title="Communication Tools" desc="Get alerts in team chat" />
            <Card href="/support/docs/plugins-and-extensions/" title="Plugins and Extensions" desc="Plugins and extensions for workflows" />
          </Section>

          <Section icon={{ light: 'testing-locally-light-icon.svg', dark: 'testing-locally-dark-icon.svg' }} title="Localhost Testing" blurb="Securely test locally hosted and internal web apps on the cloud.">
            <Card href="/support/docs/testing-locally-hosted-pages/" title="Locally Hosted Pages" desc="Test local sites on cloud" />
            <Card href="/support/docs/lambda-tunnel-modifiers/" title="Tunnel Modifiers" desc="Customize tunnel with CLI flags" />
            <Card href="/support/docs/docker-tunnel/" title="Docker Tunnel" desc="Run the tunnel in Docker" />
            <Card href="/support/docs/troubleshooting-lambda-tunnel/" title="Troubleshooting Tunnel" desc="Fix common tunnel connection issues" />
            <Card href="/support/docs/load-balancing-in-lambda-tunnel/" title="Load Balancing" desc="Balance load across tunnel instances" />
            <Card href="/support/docs/dedicated-proxy/" title="IP Whitelisting" desc="Route traffic through dedicated proxy" />
            <Card href="/support/docs/charles-proxy/" title="Charles Proxy" desc="Debug traffic with Charles proxy" />
          </Section>

          <Section icon={{ light: 'settings-light-icon.svg', dark: 'settings-dark-icon.svg' }} title="Settings and Security" blurb="Manage your account, teams, access, and enterprise security.">
            <Card href="/support/docs/account-management/" title="Account Management" desc="Manage your account and teams" />
            <Card href="/support/docs/network-whitelisting-and-tunnel-guide/" title="Network Whitelisting Guide" desc="Whitelist TestMu AI network access" />
            <Card href="/support/docs/testmu-public-ip/" title="Public IP Ranges" desc="Public IP ranges to allowlist" />
            <Card href="/support/docs/single-sign-on/" title="Single Sign On" desc="Set up SSO for teams" />
            <Card href="/support/docs/scim/" title="SCIM" desc="Automate user provisioning with SCIM" />
          </Section>

          <Section icon={{ light: 'other-light-icon.svg', dark: 'other-dark-icon.svg' }} title="Other Docs" blurb="Explore additional TestMu AI tools and capabilities.">
            <Card href="/support/docs/lt-browser/" title="LT Browser" desc="Build responsive sites with ease" />
            <Card href="/support/docs/test-logs/" title="Test Logs" desc="View detailed test execution logs" />
            <Card href="/support/docs/test-intelligence-overview/" title="Test Intelligence" desc="AI insights across your tests" />
            <Card href="/support/docs/automated-screenshot-testing/" title="Screenshot Testing" desc="Automated cross-browser screenshot testing" />
            <Card href="/support/docs/responsive-testing/" title="Responsive Testing" desc="Test responsiveness across screen sizes" />
            <Card href="/support/docs/concurrency-widget/" title="Concurrency Widget" desc="Track parallel test concurrency usage" />
          </Section>

        </div>

      </div>{/* /container */}
      </div>{/* /primary_main */}
      </div>{/* /overflow:hidden */}
    </Layout>
  );
}
