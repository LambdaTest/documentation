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
            <p>Build, run, and scale tests on TestMu AI, the AI-native quality engineering platform. Setup guides, API references, and tutorials in one place.</p>
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
        <div className="home_main">
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="automation-light-icon.svg" dark="automation-dark-icon.svg" alt="" />Web Automation</h2>
            <div className="home_inners">
              <a href="/support/docs/getting-started-with-testmu-automation/"><p className="p_home_inners">Selenium Testing</p></a>
              <a href="/support/docs/getting-started-with-cypress-testing/"><p className="p_home_inners">Cypress Testing</p></a>
              <a href="/support/docs/playwright-testing/"><p className="p_home_inners">Playwright Testing</p></a>
              <a href="/support/docs/puppeteer-testing/"><p className="p_home_inners">Puppeteer Testing</p></a>
              <a href="/support/docs/k6-browser-testing/"><p className="p_home_inners">K6 Testing</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="appAutomation-light-icon.svg" dark="appAutomation-dark-icon.svg" alt="" />App Automation</h2>
            <div className="home_inners">
              <a href="/support/docs/getting-started-with-appium-testing/"><p className="p_home_inners">Appium Testing</p></a>
              <a href="/support/docs/getting-started-with-espresso-testing/"><p className="p_home_inners">Espresso Testing</p></a>
              <a href="/support/docs/getting-started-with-xcuitest/"><p className="p_home_inners">XCUI Testing</p></a>
              <a href="/support/docs/getting-started-with-flutter-dart-android-automation/"><p className="p_home_inners">Flutter Testing</p></a>
              <a href="/support/docs/app-automation-on-emulators-simulators/"><p className="p_home_inners">Virtual Devices</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="hyp-light-icon.svg" dark="hyp-dark-icon.svg" alt="" />HyperExecute</h2>
            <div className="home_inners">
              <a href="/support/docs/getting-started-with-hyperexecute/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/hyperexecute-yaml-parameters/"><p className="p_home_inners">HyperExecute YAML</p></a>
              <a href="/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/"><p className="p_home_inners">HyperExecute CLI</p></a>
              <a href="/support/docs/hyperexecute-cli-gui/"><p className="p_home_inners">HyperExecute GUI &nbsp;<NewTag value="BETA" /></p></a>
              <a href="/support/docs/hyperexecute-mcp-server/"><p className="p_home_inners">HyperExecute MCP Server</p></a>
              <a href="/support/docs/key-features-of-hyperexecute/"><p className="p_home_inners">Features</p></a>
              <a href="/support/docs/integration-with-hyperexecute/"><p className="p_home_inners">Integrations</p></a>
              <a href="/support/docs/hyperexecute-private-cloud-setup/"><p className="p_home_inners">Private Cloud</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="analytics-light-icon.svg" dark="analytics-dark-icon.svg" alt="" />Insights</h2>
            <div className="home_inners">
              <a href="/support/docs/analytics-dashboard-templates/"><p className="p_home_inners">Pre-built Dashboards</p></a>
              <a href="/support/docs/analytics-create-dashboard/"><p className="p_home_inners">Custom Dashboards</p></a>
              <a href="/support/docs/analytics-widgets/"><p className="p_home_inners">Widgets</p></a>
              <a href="/support/docs/analytics-dashboard-copilot/"><p className="p_home_inners">Dashboard CoPilot AI</p></a>
              <a href="/support/docs/analytics-test-case-insights/"><p className="p_home_inners">Test Case Insights</p></a>
              <a href="/support/docs/analytics-build-comparison/"><p className="p_home_inners">Build Insights</p></a>
              <a href="/support/docs/analytics-modules-test-intelligence-flaky-test-analytics/"><p className="p_home_inners">Flaky Test Insights</p></a>
              <a href="/support/docs/analytics-modules-test-intelligence-command-logs-analytics/"><p className="p_home_inners">Command Logs Insights</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="automation-light-icon.svg" dark="automation-dark-icon.svg" alt="" />Browser Cloud &nbsp;<NewTag value="NEW" /></h2>
            <div className="home_inners">
              <a href="/support/docs/what-is-browser-cloud/"><p className="p_home_inners">What is Browser Cloud</p></a>
              <a href="/support/docs/launch-first-session/"><p className="p_home_inners">Launch Session With SDK</p></a>
              <a href="/support/docs/browser-cloud-skills/"><p className="p_home_inners">Launch Session With Agent Skills</p></a>
              <a href="/support/docs/connect-to-session/"><p className="p_home_inners">Connect to a Session</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="visual-light-icon.svg" dark="visual-dark-icon.svg" alt="" />SmartUI</h2>
            <div className="home_inners">
              <a href="/support/docs/smart-visual-regression-testing/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/smartui-selenium-js-sdk/"><p className="p_home_inners">Explore SDKs</p></a>
              <a href="/support/docs/smartui-cli/"><p className="p_home_inners">CLI</p></a>
              <a href="/support/docs/smartui-upload-api-v2/"><p className="p_home_inners">Upload Screenshots</p></a>
              <a href="/support/docs/smartui-pdf-comparison/"><p className="p_home_inners">Smart PDF Comparison</p></a>
              <a href="/support/docs/smart-ui-build-options/"><p className="p_home_inners">Build Config and Options</p></a>
              <a href="/support/docs/test-settings-options/"><p className="p_home_inners">Advance Comparison Options</p></a>
              <a href="/support/docs/html-dom-smartui-options/"><p className="p_home_inners">Handling Dynamic Data</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />KaneAI</h2>
            <div className="home_inners">
              <a href="/support/docs/getting-started-with-kane-ai/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/author-your-first-desktop-browser-test/"><p className="p_home_inners">Author Desktop Browser Test</p></a>
              <a href="/support/docs/author-your-first-mobile-app-test/"><p className="p_home_inners">Author Mobile App Test</p></a>
              <a href="/support/docs/kane-ai-api-testing/"><p className="p_home_inners">API Testing</p></a>
              <a href="/support/docs/kane-ai-command-guide/"><p className="p_home_inners">Command Types</p></a>
              <a href="/support/docs/kaneai-ci-cd-automation/"><p className="p_home_inners">Test Automation with CI/CD</p></a>
              <a href="/support/docs/kaneai-faqs/"><p className="p_home_inners">FAQs</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />Kane CLI &nbsp;<NewTag value="NEW" /></h2>
            <div className="home_inners">
              <a href="/support/docs/kane-cli-introduction/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/kane-cli-installation/"><p className="p_home_inners">Installation</p></a>
              <a href="/support/docs/kane-cli-quickstart/"><p className="p_home_inners">Quick Start</p></a>
              <a href="/support/docs/kane-cli-writing-objectives/"><p className="p_home_inners">Writing Objectives</p></a>
              <a href="/support/docs/kane-cli-generate/"><p className="p_home_inners">Generate Test Cases</p></a>
              <a href="/support/docs/kane-cli-checkpoints/"><p className="p_home_inners">Checkpoints</p></a>
              <a href="/support/docs/kane-cli-agent-mode/"><p className="p_home_inners">Agent Mode</p></a>
              <a href="/support/docs/kane-cli-cli-reference/"><p className="p_home_inners">CLI Reference</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="webscanner-light-icon.svg" dark="webscanner-dark-icon.svg" alt="" />Web Scanner &nbsp;<NewTag value="NEW" /></h2>
            <div className="home_inners">
              <a href="/support/docs/web-scanner-overview/"><p className="p_home_inners">Overview</p></a>
              <a href="/support/docs/web-scanner-getting-started/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/web-scanner-visual-scan/"><p className="p_home_inners">Visual UI Scans</p></a>
              <a href="/support/docs/web-scanner-accessibility-scan/"><p className="p_home_inners">Accessibility Scans</p></a>
              <a href="/support/docs/web-scanner-adding-urls/"><p className="p_home_inners">Adding URLs</p></a>
              <a href="/support/docs/web-scanner-scheduling-options/"><p className="p_home_inners">Scheduling Options</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />Agent Testing Platform &nbsp;<NewTag value="BETA" /></h2>
            <div className="home_inners">
              <a href="/support/docs/getting-started-with-agent-testing-platform/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/testing-your-first-ai-agent/"><p className="p_home_inners">Test Your First AI Agent</p></a>
              <a href="/support/docs/agent-testing-platform-faqs/"><p className="p_home_inners">FAQs</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="Realtime-light-icon.svg" dark="Realtime-dark-icon.svg" alt="" />Real Time</h2>
            <div className="home_inners">
              <a href="/support/docs/getting-started-with-desktop-browser-real-time-testing/"><p className="p_home_inners">Web Browser Testing</p></a>
              <a href="/support/docs/getting-started-with-mobile-browser-real-time-testing/"><p className="p_home_inners">Mobile Browser Testing</p></a>
              <a href="/support/docs/getting-started-with-mobile-app-real-time-testing/"><p className="p_home_inners">Mobile App Testing</p></a>
              <a href="/support/docs/chrome-os-web-browser-testing/"><p className="p_home_inners">ChromeOS Web Browser Testing</p></a>
              <a href="/support/docs/chrome-os-app-testing/"><p className="p_home_inners">ChromeOS App Testing</p></a>
              <a href="/support/docs/developer-tools/"><p className="p_home_inners">Key Features</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="realDevice-light.svg" dark="realDevice-dark.svg" alt="" />Real Device</h2>
            <div className="home_inners">
              <a href="/support/docs/app-testing-on-real-devices/"><p className="p_home_inners">Real Device App Testing</p></a>
              <a href="/support/docs/browser-testing-on-real-devices/"><p className="p_home_inners">Real Device Browser Testing</p></a>
              <a href="/support/docs/public-cloud-vs-private-cloud/"><p className="p_home_inners">Private Cloud</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="testManager-light.svg" dark="testManager-dark.svg" alt="" />Test Manager &nbsp;<NewTag value="NEW" /></h2>
            <div className="home_inners">
              <a href="/support/docs/create-projects/"><p className="p_home_inners">Create Projects</p></a>
              <a href="/support/docs/insights-dashboard/"><p className="p_home_inners">Insights Dashboard</p></a>
              <a href="/support/docs/manual-test-case-creation/"><p className="p_home_inners">Manual Test Cases</p></a>
              <a href="/support/docs/automated-test-cases-with-ai/"><p className="p_home_inners">Automated Test Cases</p></a>
              <a href="/support/docs/test-run-creation-and-management/"><p className="p_home_inners">Test Run</p></a>
              <a href="/support/docs/milestone-creation-and-management/"><p className="p_home_inners">Milestones</p></a>
              <a href="/support/docs/link-jira-issues-with-test-manager/"><p className="p_home_inners">Issue Tracker Integration</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="testManager-light.svg" dark="testManager-dark.svg" alt="" />TestMu AI MCP Server &nbsp;<NewTag value="NEW" /></h2>
            <div className="home_inners">
              <a href="/support/docs/lambdatest-mcp-server/"><p className="p_home_inners">Setting up TestMu AI MCP Server</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="Integration-light-icon.svg" dark="Integration-dark-icon.svg" alt="" />Integrations</h2>
            <div className="home_inners">
              <a href="/support/docs/bug-tracking-tools/"><p className="p_home_inners">Bug Tracking</p></a>
              <a href="/support/docs/integrations-with-project-management-tools/"><p className="p_home_inners">Project Management</p></a>
              <a href="/support/docs/integrations-with-ci-cd-tools/"><p className="p_home_inners">CI / CD Integration</p></a>
              <a href="/support/docs/integrate-test-reporting-test-management-tools/"><p className="p_home_inners">Test Reporting</p></a>
              <a href="/support/docs/team-communication-tools/"><p className="p_home_inners">Communication Tools</p></a>
              <a href="/support/docs/plugins-and-extensions/"><p className="p_home_inners">Plugin and Extensions</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="accessibility-light.svg" dark="accessibility-dark.svg" alt="" />Accessibility Testing</h2>
            <div className="home_inners">
              <a href="/support/docs/accessibility-testing/"><p className="p_home_inners">Getting Started</p></a>
              <a href="/support/docs/accessibility-devtools/"><p className="p_home_inners">Accessibility DevTools</p></a>
              <a href="/support/docs/accessibility-automation/"><p className="p_home_inners">Accessibility Web Automation</p></a>
              <a href="/support/docs/accessibility-test-scheduling/"><p className="p_home_inners">Sitemap Scheduling</p></a>
              <a href="/support/docs/accessibility-app-scanner/"><p className="p_home_inners">Native App Scanner</p></a>
              <a href="/support/docs/accessibility-native-app-automation-test/"><p className="p_home_inners">Native App Automation</p></a>
              <a href="/support/docs/screen-reader-on-accessibility/"><p className="p_home_inners">Screen Reader</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="testing-locally-light-icon.svg" dark="testing-locally-dark-icon.svg" alt="" />Testing Locally</h2>
            <div className="home_inners">
              <a href="/support/docs/testing-locally-hosted-pages/"><p className="p_home_inners">Testing Locally Hosted Pages</p></a>
              <a href="/support/docs/lambda-tunnel-modifiers/"><p className="p_home_inners">TestMu AI Tunnel Modifiers</p></a>
              <a href="/support/docs/docker-tunnel/"><p className="p_home_inners">Docker Tunnel</p></a>
              <a href="/support/docs/troubleshooting-lambda-tunnel/"><p className="p_home_inners">Troubleshooting Tunnel</p></a>
              <a href="/support/docs/load-balancing-in-lambda-tunnel/"><p className="p_home_inners">Load Balancing in Tunnel</p></a>
              <a href="/support/docs/dedicated-proxy/"><p className="p_home_inners">IP Whitelisting</p></a>
              <a href="/support/docs/charles-proxy/"><p className="p_home_inners">Charles Proxy</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="settings-light-icon.svg" dark="settings-dark-icon.svg" alt="" />Settings and Security</h2>
            <div className="home_inners">
              <a href="/support/docs/account-management/"><p className="p_home_inners">Account Management</p></a>
              <a href="/support/docs/network-whitelisting-and-tunnel-guide/"><p className="p_home_inners">Network Whitelisting Guide</p></a>
              <a href="/support/docs/testmu-public-ip/"><p className="p_home_inners">TestMu AI Public IP</p></a>
              <a href="/support/docs/single-sign-on/"><p className="p_home_inners">Single Sign On</p></a>
              <a href="/support/docs/scim/"><p className="p_home_inners">SCIM</p></a>
            </div>
          </div>
          <div className="home_inners_box">
            <h2 className="homeMain_h2"><Icon light="other-light-icon.svg" dark="other-dark-icon.svg" alt="" />Other Docs</h2>
            <div className="home_inners">
              <a href="/support/docs/lt-browser/"><p className="p_home_inners">LT Browser</p></a>
              <a href="/support/docs/test-logs/"><p className="p_home_inners">Test Logs</p></a>
              <a href="/support/docs/test-intelligence-overview/"><p className="p_home_inners">Test Intelligence</p></a>
              <a href="/support/docs/automated-screenshot-testing/"><p className="p_home_inners">Screenshot Testing</p></a>
              <a href="/support/docs/responsive-testing/"><p className="p_home_inners">Responsive Testing</p></a>
              <a href="/support/docs/concurrency-widget/"><p className="p_home_inners">Concurrency Widget</p></a>
            </div>
          </div>
        </div>

      </div>{/* /container */}
      </div>{/* /primary_main */}
      </div>{/* /overflow:hidden */}
    </Layout>
  );
}
