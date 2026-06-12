import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { BRAND_URL } from '@site/src/component/BrandName';
import SharedSidebar from '@site/src/component/SharedSidebar/SharedSidebar';
import CopyPageButton from '@site/src/component/CopyPageButton/CopyPageButton';
import faqStyles from './styles.module.css';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I mark my test as passed or failed in TestMu AI?",
      "acceptedAnswer": { "@type": "Answer", "text": "The TestMu AI Selenium grid does not automatically detect pass or fail. Use TestMu AI Annotations or the TestMu AI API to push pass/fail status from your test code." }
    },
    {
      "@type": "Question",
      "name": "What is the default idle timeout for Selenium sessions on TestMu AI?",
      "acceptedAnswer": { "@type": "Answer", "text": "By default, if the TestMu AI Selenium grid receives no command for 120 seconds, the session is terminated. Use the idleTimeout capability to extend this up to 1800 seconds (30 minutes)." }
    },
    {
      "@type": "Question",
      "name": "What test automation frameworks does TestMu AI support for app automation?",
      "acceptedAnswer": { "@type": "Answer", "text": "TestMu AI supports Appium, Espresso (Android), and XCUITest (iOS) for app automation on real devices." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum queuing capacity for Appium tests on TestMu AI?",
      "acceptedAnswer": { "@type": "Answer", "text": "Maximum queued Appium tests = n + 150, where n is your concurrent session count. Tests that stay queued for more than 15 minutes are timed out and not executed." }
    },
    {
      "@type": "Question",
      "name": "Which testing frameworks does HyperExecute support?",
      "acceptedAnswer": { "@type": "Answer", "text": "HyperExecute has deep support for Selenium, Cypress, Playwright, CDP, Taiko, and other web browser testing frameworks, and can run any other tests using YAML." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum session duration on TestMu AI real devices?",
      "acceptedAnswer": { "@type": "Answer", "text": "A single session (manual or Appium-automated) can run for up to 6 hours uninterrupted on the public cloud real device platform." }
    },
    {
      "@type": "Question",
      "name": "Does KaneAI automatically fix broken test locators when the UI changes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. KaneAI's Auto-Heal feature finds new locators at runtime when element IDs, XPaths, or CSS selectors break. Auto-Heal applies when KaneAI-generated tests run via HyperExecute." }
    },
    {
      "@type": "Question",
      "name": "Can I run KaneAI tests in CI/CD pipelines?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. KaneAI test runs can be triggered from GitHub Actions and Jenkins using the TestMu AI API." }
    },
    {
      "@type": "Question",
      "name": "How do I install Kane CLI?",
      "acceptedAnswer": { "@type": "Answer", "text": "Run: npm install -g @testmuai/kane-cli. Requires Node.js 18 or higher and Google Chrome. Authenticate with: kane-cli login" }
    },
    {
      "@type": "Question",
      "name": "What are the three modes of Kane CLI?",
      "acceptedAnswer": { "@type": "Answer", "text": "Kane CLI has three modes: Interactive TUI (kane-cli --tui) for development, Non-Interactive CLI (kane-cli run ... --headless) for CI/CD pipelines, and Agent Mode (kane-cli run ... --agent) for AI coding agents like Claude Code, Codex, and Gemini." }
    },
    {
      "@type": "Question",
      "name": "How do I set up my first SmartUI visual regression test?",
      "acceptedAnswer": { "@type": "Answer", "text": "Create a SmartUI project, install the SDK, set your project token as an environment variable, add smartuiSnapshot calls to your existing test, then run the suite. Requires Node.js v20.3+ for CLI v4.x.x." }
    },
    {
      "@type": "Question",
      "name": "How do I stop false positives from dynamic content like timestamps in SmartUI?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use ignoreDOM to exclude specific elements from comparison, or selectDOM to compare only a specific portion of the page. Both accept CSS selectors, XPath, element IDs, and class names." }
    },
    {
      "@type": "Question",
      "name": "Can I run accessibility checks as part of my automated Selenium or Playwright test suite?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Accessibility Automation integrates with Selenium and Playwright on the TestMu AI cloud grid. Add the accessibility capability to your existing test configuration. Note: Playwright requires Chrome; pw-chromium is not supported." }
    },
    {
      "@type": "Question",
      "name": "How do I identify flaky tests in TestMu AI Insights?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use the Flaky Tests AI module in Insights. It categorizes tests by severity: High (over 75% flake rate), Medium (50-75%), and Low (under 50%). The Flakiness Trends widget shows changes over time." }
    },
    {
      "@type": "Question",
      "name": "How do I import existing test cases into Test Manager?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use the CSV import flow: upload your CSV file, map column headers to Test Manager fields, preview the mapping, and finalize the import. Both single-row and multi-row CSV formats are supported." }
    },
    {
      "@type": "Question",
      "name": "Is TestMu AI pricing based on users or parallel sessions?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pricing is based on parallel sessions. The user limit is an add-on that comes with each edition." }
    },
    {
      "@type": "Question",
      "name": "What paid plans does TestMu AI offer?",
      "acceptedAnswer": { "@type": "Answer", "text": "TestMu AI offers three paid tiers billed annually: Virtual Live at $15/month, ChromeOS Live at $29/month, and Real Device Plus Live at $39/month. Enterprise pricing is custom." }
    },
    {
      "@type": "Question",
      "name": "What security certifications does TestMu AI hold?",
      "acceptedAnswer": { "@type": "Answer", "text": "TestMu AI holds SOC 2 Type II, ISO 27001, ISO 27017, and ISO 27701 certifications. The platform is also GDPR, CCPA, and HIPAA-ready compliant." }
    },
    {
      "@type": "Question",
      "name": "Does TestMu AI have a disaster recovery plan?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. TestMu AI maintains a formal Business Continuity Plan and Disaster Recovery Plan tested annually. Recovery Time Objective (RTO) is 4 hours and Recovery Point Objective (RPO) is under 1 hour." }
    }
  ]
};

const BRAND_NAME = 'TestMu AI';

function FaqSidebarLink() {
  return (
    <a
      href="/support/faq/"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '6px 16px',
        borderRadius: '6px',
        background: 'rgba(237,95,0,0.08)',
        color: '#ED5F00',
        fontWeight: 600,
        fontSize: '14px',
        textDecoration: 'none',
        lineHeight: '1.5rem',
      }}
    >
      FAQ
    </a>
  );
}

const TABS = [
  { id: 'webautomation', label: 'Web Automation' },
  { id: 'appautomation', label: 'App Automation' },
  { id: 'hye', label: 'HyperExecute' },
  { id: 'realdevice', label: 'Real Device' },
  { id: 'responsive', label: 'Virtual Device' },
  { id: 'kaneai', label: 'KaneAI' },
  { id: 'kanecli', label: 'Kane CLI' },
  { id: 'smartui', label: 'SmartUI' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'analytics', label: 'Insights' },
  { id: 'testmanager', label: 'Test Manager' },
  { id: 'realtime', label: 'Real Time' },
  { id: 'billing', label: 'Plans & Billing' },
  { id: 'security', label: 'Data & Security' },
  { id: 'ltbrowser', label: 'LT Browser' },
];

const HYE_SUB_TABS = [
  { id: 'gen', label: 'General' },
  { id: 'yaml', label: 'YAML' },
  { id: 'cli', label: 'CLI' },
  { id: 'feat', label: 'Features' },
  { id: 'plat', label: 'Platform' },
  { id: 'price', label: 'Pricing' },
  { id: 'sec', label: 'Security' },
  { id: 'ent', label: 'Enterprise' },
];

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState('realtime');
  const [activeHyeTab, setActiveHyeTab] = useState('gen');

  return (
    <Layout
      title="TestMu AI Product FAQs"
      description="Frequently asked questions about TestMu AI (formerly LambdaTest): automation, KaneAI, HyperExecute, SmartUI, real devices, plans, and security."
    >
      <Head>
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Head>
      <div className={faqStyles.faqLayout}>
        <SharedSidebar><FaqSidebarLink /></SharedSidebar>

        <div className={faqStyles.faqContentWrapper}><main className={faqStyles.faqCenter}>
          <div className={faqStyles.faqHeader}>
            <h1 className={faqStyles.faqTitle}>Frequently Asked Questions</h1>
            <CopyPageButton />
          </div>

          {/* Tab Bar */}
          <div className={faqStyles.tabBar}>
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`${faqStyles.tabBtn} ${activeTab === t.id ? faqStyles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Real Time Testing ──────────────────────────────────────── */}
          {activeTab === 'realtime' && (
            <div className={faqStyles.accordionGroup}>

              {/* Getting Started */}
              <details>
              <summary>Do I need to install any software or extension to use {BRAND_NAME} virtual machines?</summary>
              <p>No. You don't need to install any software, extension, or plugin. Log in to {BRAND_NAME}, open the virtual machine through the launcher, and start testing.</p>
              </details>

              <details>
              <summary>Are sessions running on real browsers or emulators?</summary>
              <p>All desktop sessions run on real browsers and operating systems on real machines. Mobile browser testing runs on both emulators/simulators and real devices.</p>
              </details>

              {/* Platform & Browsers */}
              <details>
              <summary>Which operating systems, browsers, and browser versions are available for cross-browser testing?</summary>
              <p>There are 3000+ browsers, browser versions, operating systems, devices, and resolutions to choose from. See the full <a href={`${BRAND_URL}/list-of-browsers/`}>list of browsers</a>.</p>
              </details>

              <details>
              <summary>Are operating systems 32-bit or 64-bit?</summary>
              <p>All supported operating systems on {BRAND_NAME} (Windows 10, Windows 11, and all macOS versions) run on 64-bit architecture.</p>
              </details>

              <details>
              <summary>Why does {BRAND_NAME} use Windows Server edition? Is it the same as Windows desktop?</summary>
              <p>Microsoft Windows Desktop Edition licenses do not support remote access. {BRAND_NAME} uses Windows Server with Desktop Experience, which provides the same look, feel, and browser access as a local Windows desktop machine. All browser versions are the same desktop editions you would find locally.</p>
              </details>

              <details>
              <summary>How long does it take to add a new browser version after it is released?</summary>
              <p>New stable browser versions are typically available on the platform within a week of release. Each version is tested internally before going live to ensure a consistent testing experience.</p>
              </details>

              <details>
              <summary>Which browser plugins (Flash, Silverlight, Java) are pre-installed?</summary>
              <p>Legacy plugins (Adobe Flash, Shockwave, Silverlight, and QuickTime) have reached end-of-life and are no longer supported by modern browsers. {BRAND_NAME} virtual machines run current browser versions in sandboxed environments. PDF viewing uses browsers' built-in viewers. Java is available in the testing VM for automation purposes.</p>
              </details>

              {/* Session Management */}
              <details>
              <summary>How many simultaneous sessions can I run on one account?</summary>
              <p>The free plan allows one session at a time. Paid plans support multiple concurrent sessions depending on your subscription. See the <a href={`${BRAND_URL}/pricing`}>Pricing page</a> for details.</p>
              </details>

              <details>
              <summary>What happens when I leave a session idle?</summary>
              <p>If a Live session is idle for 5 minutes, {BRAND_NAME} prompts a reminder. If no action is taken, the session closes automatically. You can configure the idle timeout from the Live settings.</p>
              </details>

              <details>
              <summary>What happens when I switch to another browser tab?</summary>
              <p>Switching tabs does not stop or pause the Live session. If the session stays idle for 5 minutes or more, {BRAND_NAME} prompts a reminder and closes the session if unanswered.</p>
              </details>

              <details>
              <summary>Will the next user be able to see my history or saved passwords?</summary>
              <p>No. When you close a session, {BRAND_NAME} wipes the entire virtual machine: browsing history, downloads, installed extensions, saved passwords, and cookies are all deleted and browsers are reset to factory settings. Your screenshots and logged issues remain accessible from the dashboard.</p>
              </details>

              {/* Features */}
              <details>
              <summary>Can I use keyboard shortcuts like copy and paste in remote sessions?</summary>
              <p>Yes, all keyboard shortcuts are available. If you are accessing a Windows VM from a Mac (or vice versa), use the equivalent OS-specific key. For example, use Ctrl instead of Cmd for copy-paste when accessing a Windows VM from macOS.</p>
              </details>

              <details>
              <summary>Can I upload and download files in the remote browser?</summary>
              <p>Yes. Upload limits: max 15 MB per file (images, video, and non-media), up to 5 files per session. Download limit: max 50 MB total per session. Uploaded files are retained for 30 days and then automatically deleted. See <a href={`${BRAND_URL}/support/docs/real-time-upload-and-download-files/`}>file upload and download limits</a> for supported formats and platform compatibility.</p>
              </details>

              <details>
              <summary>Can I change browser settings in a session?</summary>
              <p>Yes, you have full access to all browser settings. However, settings reset to defaults when the session ends, so you need to re-configure them at the start of each new session.</p>
              </details>

              <details>
              <summary>Can I install browser extensions during a session?</summary>
              <p>Yes. You can install any browser extension from the browser's extension store during a Live session. Extensions are removed when the session ends and must be reinstalled in subsequent sessions.</p>
              </details>

              <details>
              <summary>Can I use browser DevTools (Elements, Console, Network) in a Live session?</summary>
              <p>Yes. Press F12 or right-click → Inspect in any session. Chrome, Edge, and Firefox expose full DevTools panels (Elements, Console, Network, Performance, and more) exactly as they appear on a local machine.</p>
              </details>

              <details>
              <summary>How do I take a screenshot during a Live session?</summary>
              <p>Click the camera icon in the left controller panel to capture a screenshot. An image editor opens where you can annotate, mark bugs, and add comments. Screenshots are saved in the test logs section of the dashboard.</p>
              </details>

              <details>
              <summary>How do I report a bug and share it with my team?</summary>
              <p>Use the <strong>Mark as Bug</strong> button during any live session to log the issue directly to your team's project management tool — Jira, Trello, Asana, GitHub, and 20+ other integrations are supported. The bug is created with session metadata, browser details, and a screenshot automatically attached.</p>
              </details>

              {/* Troubleshooting */}
              <details>
              <summary>I cannot hear audio in the virtual machine. What is happening?</summary>
              <p>Audio streaming is supported on Chrome and Firefox in desktop real-time sessions. Safari and mobile emulator sessions have limited audio support due to browser architecture constraints.</p>
              </details>

              <details>
              <summary>I am getting a "Session Limit reached" error but I am not running a session. Why?</summary>
              <p>The session limit applies to your entire organization, not to individual users. Other teammates may be using the available sessions. Coordinate with your team to check concurrent usage. If you believe there is a platform issue, raise a ticket at the <a href={`${BRAND_URL}/support/`}>support portal</a>.</p>
              </details>

              <details>
              <summary>I am getting a "Parallel user limit reached" error. What does that mean?</summary>
              <p>{BRAND_NAME} limits concurrent sessions per organization based on your subscription plan. To increase the limit, upgrade your plan on the <a href={`${BRAND_URL}/pricing`}>Pricing page</a> or contact our sales team.</p>
              </details>

              <details>
              <summary>My IP is blocked. Why did this happen and how do I unblock it?</summary>
              <p>An IP can be blocked for several reasons:
              <ul>
              <li>The IP was flagged for excessive spam registrations.</li>
              <li>The IP was flagged for violating {BRAND_NAME} terms of use or privacy policy.</li>
              <li>The block was triggered automatically to protect the platform from spam or security threats.</li>
              </ul>
              If you believe your IP was blocked in error, raise a ticket at the <a href={`${BRAND_URL}/support/`}>support portal</a>.</p>
              </details>

            </div>
          )}

          {/* ── Web Automation ─────────────────────────────────────────── */}
          {activeTab === 'webautomation' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>Can I mark my test as passed or failed on {BRAND_NAME}?</summary>
              <p>The {BRAND_NAME} Selenium grid does not automatically detect pass or fail; it only tracks whether a test ran to its last command or stopped early. To record pass/fail status, use the <a href={`${BRAND_URL}/support/docs/lambda-hooks/`}>{BRAND_NAME} Annotations</a> or the {BRAND_NAME} API to push the status from your test code.</p>
              </details>

              <details>
              <summary>Can I run parallel tests using JUnit or other frameworks?</summary>
              <p>Yes. The {BRAND_NAME} Selenium grid supports parallel execution across browsers, versions, and OS combinations simultaneously. The number of parallel tests you can run depends on the concurrent sessions in your plan. Use the <a href={`${BRAND_URL}/concurrency-calculator/`}>Concurrency Calculator</a> to find the right number for your test suite.</p>
              </details>

              <details>
              <summary>What happens when my tests exceed the concurrent session limit?</summary>
              <p>Tests that exceed your concurrent session limit are queued. Queued tests start automatically as sessions free up. If a test remains in the queue for more than 15 minutes without starting, it is timed out and discarded. See <a href={`${BRAND_URL}/support/docs/timeouts-issues-and-resolutions/`}>how to fix Selenium timeout errors</a> for details.</p>
              </details>

              <details>
              <summary>Why do my Selenium tests randomly fail on {BRAND_NAME}?</summary>
              <p>Intermittent failures are most commonly caused by:
              <ul>
              <li><strong>Timing issues:</strong> add explicit waits so elements are ready before interaction.</li>
              <li><strong>Idle timeout:</strong> if the grid receives no command for 120 seconds, the session is automatically terminated. Use the <code>idleTimeout</code> capability to extend this (up to 1800 seconds).</li>
              <li><strong>Network latency:</strong> connections over VPN can slow command delivery past the 120-second limit.</li>
              <li><strong>Firewall restrictions:</strong> ensure your network allows connections to {BRAND_NAME} endpoints.</li>
              </ul>
              See <a href={`${BRAND_URL}/support/docs/timeouts-issues-and-resolutions/`}>how to fix Selenium timeout errors</a> for a full breakdown.</p>
              </details>

              <details>
              <summary>What is the idle timeout for automation sessions?</summary>
              <p>By default, if the {BRAND_NAME} Selenium grid receives no command from your test for <strong>120 seconds</strong>, it terminates the session. Use the <code>idleTimeout</code> capability to extend this limit. The maximum value is <strong>1800 seconds</strong> (30 minutes). The recommended range is 270–360 seconds. See <a href={`${BRAND_URL}/support/docs/timeouts-issues-and-resolutions/`}>how to configure idleTimeout</a> for examples.</p>
              </details>

              {/* Live Interaction */}
              <details>
              <summary>How do I take manual control of a running automation test?</summary>
              <p>Use Live Interaction: open the test summary page in the {BRAND_NAME} dashboard and click <strong>Click to view live test</strong>. This aborts automated execution and gives you direct browser control for debugging. The session times out within one minute if no keyboard or mouse activity is detected.</p>
              </details>

              <details>
              <summary>What is the time limit for Live Interaction?</summary>
              <p>The maximum duration for a Live Interaction session is 15 minutes.</p>
              </details>

              <details>
              <summary>Which platforms and browsers support Live Interaction?</summary>
              <p>Live Interaction is available on Windows 11, 10, 8, and 8.1, and macOS Big Sur, Monterey, and Ventura. All browsers are supported except Safari.</p>
              </details>

              <details>
              <summary>My test shows <code>idle_timeout</code> status during Live Interaction. Is that expected?</summary>
              <p>Yes. The test status changes to <code>idle_timeout</code> while Live Interaction is active. This is expected; the automated run is paused and control is with you. There is no limit on how many tests can have Live Interaction active simultaneously.</p>
              </details>

            </div>
          )}

          {/* ── App Automation ─────────────────────────────────────────── */}
          {activeTab === 'appautomation' && (
            <div className={faqStyles.accordionGroup}>

              {/* Frameworks */}
              <details>
              <summary>Which test automation frameworks does {BRAND_NAME} support for app automation?</summary>
              <p>{BRAND_NAME} supports <strong>Appium</strong>, <strong>Espresso</strong> (Android), and <strong>XCUITest</strong> (iOS) for app automation on real devices.</p>
              </details>

              <details>
              <summary>How do I upload my app and get an app URL for automation?</summary>
              <p>Upload your app via the {BRAND_NAME} REST API or the dashboard. The API returns an <code>app_url</code> in the format <code>lt://&lt;APP_ID&gt;</code> that you pass as the <code>app</code> capability in your test. See <a href={`${BRAND_URL}/support/docs/getting-started-with-appium-testing/#step-1-upload-your-application`}>how to upload your app for Appium</a> for the upload command and response format.</p>
              </details>

              <details>
              <summary>Do I need to set the <code>appReset</code> or <code>fullReset</code> capability?</summary>
              <p>No. After each test session, {BRAND_NAME} automatically uninstalls the app and clears all user data and configurations generated on the device. You do not need to set reset capabilities.</p>
              </details>

              {/* Espresso */}
              <details>
              <summary>How do I compile the Test Suite APK for Espresso?</summary>
              <p>Generate the app APK with:
              <br /><code>./gradlew assemble</code> (output: <code>app/build/outputs/apk/debug/</code>)
              <br /><br />Generate the test suite APK with:
              <br /><code>./gradlew assembleAndroidTest</code> (output: <code>app/build/outputs/apk/androidTest/debug/</code>)</p>
              </details>

              {/* Appium commands */}
              <details>
              <summary>How do I open a pre-installed app during an Appium test?</summary>
              <p>Use the <code>activateApp</code> command with the app's package name:
              <br /><br /><code>driver.activateApp("package_name");</code></p>
              </details>

              {/* Session duration & queuing */}
              <details>
              <summary>What is the maximum session duration for Appium tests?</summary>
              <p>A single Appium session can run for up to <strong>6 hours</strong> uninterrupted on the public cloud real device platform.</p>
              </details>

              <details>
              <summary>What is the maximum queuing capacity for Appium tests?</summary>
              <p>Maximum queued tests = <strong>n + 150</strong>, where n = your concurrent session count. For example, with 10 concurrent sessions, up to 160 tests can be queued. Tests that remain queued for more than <strong>15 minutes</strong> are timed out and discarded. See <a href={`${BRAND_URL}/support/docs/queuing-appium-tests/`}>Appium test queue limits and rate rules</a> for rate-limit details.</p>
              </details>

              {/* Test features */}
              <details>
              <summary>Can I inject images or simulate QR code scanning in automation?</summary>
              <p>Yes. Use the JavaScript executor to inject an image from your media library:
              <br /><br /><code>{"((JavascriptExecutor) driver).executeScript(\"lambda-image-injection=lt://MEDIA_URL\");"}</code>
              <br /><br />This works for QR code scanning and other camera-dependent test scenarios.</p>
              </details>

              <details>
              <summary>How do I handle iOS location permission pop-ups in automation?</summary>
              <p>Use the <code>autoAcceptAlerts</code> capability to automatically accept location prompts:
              <br /><br /><code>caps.setCapability("autoAcceptAlerts", true);</code>
              <br /><br />
              <strong>Note:</strong> On iOS 13 and above, popups with more than two buttons have reversed behavior; use <code>autoAcceptAlerts</code> to dismiss and <code>autoDismissAlerts</code> to accept. There is a <a href="https://github.com/appium/appium/issues/14741">known Appium issue</a> affecting <code>autoAcceptAlerts</code> on iOS 14; verify behavior on your target iOS version.</p>
              </details>

              {/* Debugging */}
              <details>
              <summary>I am seeing network log issues during app automation. Why?</summary>
              <p>Network logs on Android real devices have known limitations. Improvements are under active development. Contact <a href="mailto:support@testmuai.com">support@testmuai.com</a> to discuss your specific use case.</p>
              </details>

              <details>
              <summary>Can I view App Profiling data for resource consumption?</summary>
              <p>Yes. App profiling data is available via Advanced App Profiling on {BRAND_NAME} real devices. See <a href={`${BRAND_URL}/support/docs/insights-app-profiling/`}>how to enable Advanced App Profiling</a> for details.</p>
              </details>

              {/* Limitations */}
              <details>
              <summary>Do you support Performance testing frameworks for app automation?</summary>
              <p>Performance testing frameworks are not currently supported on the {BRAND_NAME} real device cloud.</p>
              </details>

              <details>
              <summary>Do you support mobile app automation on emulators and simulators?</summary>
              <p>Mobile app automation on emulators and simulators is not currently supported. See the <strong>Virtual Device Testing</strong> tab for manual (real-time) app testing on emulators and simulators.</p>
              </details>

            </div>
          )}

          {/* ── HyperExecute ──────────────────────────────────────────── */}
          {activeTab === 'hye' && (
            <>
              <div className={faqStyles.subTabBar}>
                {HYE_SUB_TABS.map((t) => (
                  <button
                    key={t.id}
                    className={`${faqStyles.subTabBtn} ${activeHyeTab === t.id ? faqStyles.subTabBtnActive : ''}`}
                    onClick={() => setActiveHyeTab(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {activeHyeTab === 'gen' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>Which testing frameworks does HyperExecute support?</summary>
                <p>HyperExecute has deep support for Selenium, Cypress, Playwright, CDP, Taiko, and other web browser testing frameworks. It can also run any other type of test using YAML configuration. See the full <a href={`${BRAND_URL}/support/docs/hyperexecute-supported-languages-and-frameworks/`}>HyperExecute supported frameworks list</a>.</p>
                </details>

                <details>
                <summary>How do I trigger my first HyperExecute job?</summary>
                <p>Download the HyperExecute CLI, create a YAML file defining your target OS, concurrency, and test discovery command, then run <code>./hyperexecute --config your-file.yaml</code>. The web-based YAML generator can build this file for you if you select your language and framework. See <a href={`${BRAND_URL}/support/docs/getting-started-with-hyperexecute/`}>how to run your first HyperExecute job</a> for a complete walkthrough.</p>
                </details>

                <details>
                <summary>My tests run slowly on other clouds. Will HyperExecute be faster?</summary>
                <p>Yes, for most test suites. Traditional grids route every Selenium command across the network from your machine to the browser, adding latency on every interaction. HyperExecute runs your test code and the browser in the same VM, eliminating that round-trip. The result is faster execution and fewer network-induced flaky failures.</p>
                </details>

                <details>
                <summary>Can I run a specific command before or after my tests?</summary>
                <p>Yes. HyperExecute's pre and post steps let you run any command before and after test execution on each VM: compile binaries, download dependencies, start background services, or any other setup and teardown work.</p>
                </details>

                <details>
                <summary>How do I find which test failed and why without digging through a combined log?</summary>
                <p>HyperExecute isolates logs per test; terminal output, Selenium logs, and artifacts are separated by test case, not dumped into one file. Logs stream in real time in the dashboard so you see failures as they happen. Click any failed test to jump directly to its isolated log set.</p>
                </details>

                <details>
                <summary>Can I run parallel tests on HyperExecute?</summary>
                <p>Yes. Parallel execution is HyperExecute's core feature. The platform intelligently distributes tests across multiple nodes and can scale to thousands of parallel executions backed by multiple cloud providers.</p>
                </details>

                <details>
                <summary>Does HyperExecute support storing test artifacts?</summary>
                <p>Yes. HyperExecute provides artifact management: upload any files or folders generated during execution. Artifacts are accessible via the dashboard and through the HyperExecute API.</p>
                </details>

                <details>
                <summary>What are the VM specifications for HyperExecute?</summary>
                <p>HyperExecute virtual machines are configured with 4 vCPU and 16 GB of RAM. Enterprise accounts can request custom VM specifications and images. Contact <a href="mailto:support@testmuai.com">support@testmuai.com</a> for enterprise VM options.</p>
                </details>

                <details>
                <summary>Can I keep dependent tests sequential and control run order in HyperExecute?</summary>
                <p>Yes. HyperExecute provides directives to group dependent tests so they run in sequence on the same node. Dynamic test discovery lets you write unique test discovery commands per node, giving you fine-grained control over execution order.</p>
                </details>

                <details>
                <summary>In which regions is HyperExecute available?</summary>
                <p>HyperExecute is available in more than 40 cloud availability regions globally, supported by multiple cloud providers.</p>
                </details>
                </div>
              )}

              {activeHyeTab === 'yaml' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>What can I do with pre and post steps in the YAML file?</summary>
                <p>Pre and post steps run arbitrary commands before and after test execution on each VM. Common uses: install certificates, compile applications, download private dependencies, start background services, or run any setup and cleanup commands you would otherwise run locally or in CI.</p>
                </details>

                <details>
                <summary>How do I install private artifactory dependencies only accessible on my organization's network?</summary>
                <p>Enable the tunnel flag in your HyperExecute YAML file to connect HyperExecute VMs to your organization's private network. See <a href={`${BRAND_URL}/support/docs/hyperexecute-yaml-faqs/#3-how-can-i-install-private-artifactory-dependencies-that-can-only-be-accessed-on-my-organizations-internal-network-on-hyperexecute-machines`}>how to access private artifactory in HyperExecute</a>.</p>
                </details>

                <details>
                <summary>How do I use Jenkins job choice parameters in the YAML file?</summary>
                <p>Reference the Jenkins parameter keys directly in your HyperExecute YAML file. See <a href={`${BRAND_URL}/support/docs/hyperexecute-yaml-faqs/#8-how-can-i-use-the-jenkins-job-choice-parameters-in-the-yaml-file`}>how to use Jenkins parameters in YAML</a>.</p>
                </details>

                <details>
                <summary>I use the same YAML configuration repeatedly. Can I avoid repeating it every time?</summary>
                <p>Yes. HyperExecute's inheritance feature lets you define a base YAML file and inherit its configuration in other YAML files. See <a href={`${BRAND_URL}/support/docs/hyperexecute-inherit-config/`}>how to inherit YAML configurations</a>.</p>
                </details>

                <details>
                <summary>Can I source test code directly from my Git repository?</summary>
                <p>Yes. Use the <code>sourcePayload</code> flag to source test code directly from your Git provider via secure access tokens. Only the YAML file is uploaded through the CLI; your test code never leaves your Git provider. See <a href={`${BRAND_URL}/support/docs/hyperexecute-how-to-configure-sourcePayload/`}>how to source tests from Git</a>.</p>
                </details>
                </div>
              )}

              {activeHyeTab === 'cli' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>Can the HyperExecute CLI download test artifacts after execution?</summary>
                <p>Yes. The CLI can download artifacts generated during test execution. Artifacts are also accessible via the HyperExecute API for a specific job ID.</p>
                </details>

                <details>
                <summary>macOS says the HyperExecute CLI developer is not verified. How do I fix this?</summary>
                <p>The binary is unsigned. Run the following command to grant execution permission:
                <br /><br />
                <code>chmod u+x ./hyperexecute</code>
                <br /><br />
                macOS will then show a security prompt. Allow execution from <strong>System Preferences → Security &amp; Privacy → General</strong>.</p>
                </details>

                <details>
                <summary>How do I trace every step of a test run triggered via the CLI?</summary>
                <p>Every CLI run generates a <code>hyperexecute-cli.log</code> file in the parent directory of your test. This file contains the complete run trace and is the first place to check when a job fails. Include this file and your Job ID when contacting <a href="mailto:support@testmuai.com">support@testmuai.com</a>.</p>
                </details>
                </div>
              )}

              {activeHyeTab === 'feat' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>Can HyperExecute replace my CI runner for test execution entirely?</summary>
                <p>Yes. HyperExecute supports pre and post steps, custom environment variables, dependency caching, pinnable language runtime versions, and artifact management. Full CI pipelines for end-to-end testing run entirely on HyperExecute infrastructure; your local machine or CI runner triggers the job and HyperExecute handles everything else.</p>
                </details>

                <details>
                <summary>Can I test private or internally hosted web applications on HyperExecute?</summary>
                <p>Yes. HyperExecute supports private application testing via: automatic tunnel through the CLI, dedicated NAT IP for firewall whitelisting, and VPN clients started in pre-steps.</p>
                </details>

                <details>
                <summary>Can I run geolocation tests on HyperExecute?</summary>
                <p>Yes. All geolocation testing capabilities available on the standard {BRAND_NAME} platform (Selenium, Playwright, and Cypress) are also available on HyperExecute.</p>
                </details>

                <details>
                <summary>Can HyperExecute run tests on custom VM specifications?</summary>
                <p>Yes, for enterprise accounts. HyperExecute allows custom VM images built on top of HyperExecute base images, giving you full control over the test environment for specialized frameworks or tooling.</p>
                </details>

                </div>
              )}

              {activeHyeTab === 'plat' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>Which operating systems does HyperExecute support?</summary>
                <p>HyperExecute supports the latest versions of Windows, macOS, and Linux. Multiple versions of each OS are available.</p>
                </details>

                <details>
                <summary>Which browsers are available on HyperExecute?</summary>
                <p>Chrome, Firefox, Edge, Opera, and Safari (macOS only) are available across the latest Windows, macOS, and Linux versions.</p>
                </details>

                <details>
                <summary>Is HyperExecute available on-premises or as a dedicated cloud?</summary>
                <p>Yes. HyperExecute is available as a dedicated cloud and on-premises deployment on Azure, AWS, and GCP.</p>
                </details>

                <details>
                <summary>What analytics does HyperExecute provide?</summary>
                <p>HyperExecute provides analytics over test steps, jobs, browser trends, consistently failing tests, and error categorizations. Every job produces a downloadable HTML report accessible via the CLI after completion or via the reports API.</p>
                </details>

                <details>
                <summary>Do I have access to the underlying OS and file system during tests?</summary>
                <p>Yes. You have full access to the VM's file system and OS, including registry settings, background processes, and file I/O. Enterprise accounts can build custom VM images on top of HyperExecute base images for deeper environment customization.</p>
                </details>
                </div>
              )}

              {activeHyeTab === 'price' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>Is there a limit on parallel test execution on HyperExecute?</summary>
                <p>No hard cap. HyperExecute scales across multiple cloud providers and can handle thousands of parallel nodes. Capacity is allocated based on your plan and demand.</p>
                </details>

                <details>
                <summary>How does HyperExecute licensing work?</summary>
                <p>Each parallel test execution consumes one HyperExecute license. To run 50 tests in parallel, you need 50 licenses. If you have 10 licenses and trigger 50 tests, 10 run immediately and the remaining 40 are queued until a license frees up.</p>
                </details>

                <details>
                <summary>Can I use the standard {BRAND_NAME} automation platform with a HyperExecute license?</summary>
                <p>Yes. Every HyperExecute license also provides access to the standard {BRAND_NAME} automation platform and its features, making it easy to transition to HyperExecute incrementally.</p>
                </details>
                </div>
              )}

              {activeHyeTab === 'sec' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>Is my test code visible to other HyperExecute users? Are VMs shared?</summary>
                <p>No. HyperExecute provisions a fresh, isolated VM for every job and destroys it immediately after execution. No state, files, or test code persists between jobs or across accounts. Test scripts are encrypted during their retention period and deleted when it ends.</p>
                </details>

                <details>
                <summary>How do I store secrets securely in HyperExecute?</summary>
                <p>Use the HyperExecute vault to store credentials, tokens, and other secrets instead of hardcoding them in YAML or test files. In enterprise deployments, organizations can integrate their own vault solution.</p>
                </details>

                <details>
                <summary>How long are logs and execution data retained?</summary>
                <p>Logs and records are retained for 60 days by default, then permanently deleted. Enterprise accounts can configure a custom retention period.</p>
                </details>

                <details>
                <summary>How do I access private package registries or artifactories from HyperExecute?</summary>
                <p>Use the automatic tunnel, dedicated NAT, or pre-step VPN to connect to private networks. Store private registry credentials in the HyperExecute vault and reference them in your YAML.</p>
                </details>
                </div>
              )}

              {activeHyeTab === 'ent' && (
                <div className={faqStyles.accordionGroup}>
                <details>
                <summary>What enterprise features does HyperExecute offer?</summary>
                <p>Enterprise features include SSO, dedicated chat support, on-premises and dedicated cloud deployments, custom retention periods, usage analytics, advanced access controls, workflow management, and custom VM images.</p>
                </details>

                <details>
                <summary>Can I use my organization's own vault with HyperExecute?</summary>
                <p>Yes. HyperExecute enterprise allows organizations to integrate their own vault with the testing infrastructure in place of or alongside the built-in vault.</p>
                </details>
                </div>
              )}
            </>
          )}

          {/* ── Real Device ────────────────────────────────────────────── */}
          {activeTab === 'realdevice' && (
            <div className={faqStyles.accordionGroup}>

              {/* Device Cloud */}
              <details>
              <summary>What app file formats does {BRAND_NAME} support for real device testing?</summary>
              <p>Supported formats for app testing on real devices:
              <ul>
              <li>iOS: <code>.ipa</code></li>
              <li>Android: <code>.apk</code> and <code>.aab</code></li>
              </ul>
              </p>
              </details>

              <details>
              <summary>What is the maximum session duration on real devices?</summary>
              <p>A single session (manual or Appium-automated) can run for up to <strong>6 hours</strong> uninterrupted on the public cloud real device platform.</p>
              </details>

              <details>
              <summary>Can I share an app build with other team members for testing?</summary>
              <p>Yes. When uploading an app, you can keep it private (visible only to you) or share it with your entire organization so any team member can use it for testing.</p>
              </details>

              <details>
              <summary>Can I select specific minor versions of Android or iOS?</summary>
              <p>Yes, minor OS versions are supported based on customer requirements. This is one of the most requested features from prospects and customers using {BRAND_NAME} for app automation.</p>
              </details>

              {/* Manual Testing Features */}
              <details>
              <summary>Can I test biometric authentication like Fingerprint or Face ID?</summary>
              <p>Yes. Biometric authentication (Fingerprint sensor and Face ID) is a supported and commonly tested use case on {BRAND_NAME} real devices.</p>
              </details>

              <details>
              <summary>Does {BRAND_NAME} support QR code scanning on real devices?</summary>
              <p>Yes, QR code scanning is supported in both manual and automated testing. For automation, use image injection in your test script. See the <strong>App Automation</strong> tab for the automation approach.</p>
              </details>

              <details>
              <summary>Can I test Apple Pay on real devices?</summary>
              <p>Yes. Apple Pay is supported on {BRAND_NAME} real devices and can be tested using frameworks such as WebdriverIO.</p>
              </details>

              <details>
              <summary>Can I simulate GPS location for geolocation testing?</summary>
              <p>Yes. GPS geolocation simulation is supported on {BRAND_NAME} real devices for testing location-based features in your app.</p>
              </details>

              <details>
              <summary>Can I test in-app browsers and Hybrid apps?</summary>
              <p>Yes, both in-app browsers and Hybrid apps are supported on the {BRAND_NAME} real device cloud.</p>
              </details>

              <details>
              <summary>Can I test video calls on real devices?</summary>
              <p>Yes. You can test video calling apps on {BRAND_NAME} real devices. The physical camera is covered for security, so camera input will show a black image and audio will be silent. Use image injection for camera-dependent testing scenarios.</p>
              </details>

              {/* Camera & Input */}
              <details>
              <summary>Can I access the device camera during testing?</summary>
              <p>The physical camera is covered on real devices for security reasons. For image-based testing, pre-load images onto the device or use image injection in your test scripts. For video calls, the camera shows a black image and audio is silent.</p>
              </details>

              <details>
              <summary>How do I trigger a long press gesture?</summary>
              <p>On Android, simulate a long press with a long click on your mouse or trackpad. On iOS, use Cmd+click on macOS or Ctrl+click on Windows.</p>
              </details>

              {/* Network & Connectivity */}
              <details>
              <summary>Does {BRAND_NAME} support network throttling on real devices?</summary>
              <p>Yes. Network throttling is supported on the {BRAND_NAME} real device cloud.</p>
              </details>

              <details>
              <summary>Can I monitor network traffic using Charles Proxy?</summary>
              <p>Charles Proxy is not currently supported on {BRAND_NAME} real devices.</p>
              </details>

              <details>
              <summary>How do I test locally hosted or firewall-protected apps?</summary>
              <p>Use the {BRAND_NAME} tunnel to connect your local or private network to the real device cloud. See <a href={`${BRAND_URL}/support/docs/testing-locally-hosted-pages/`}>how to set up the TestMu AI Tunnel</a> for setup instructions.</p>
              </details>

              <details>
              <summary>How do I resolve a localhost URL when using the {BRAND_NAME} tunnel?</summary>
              <p>Use <code>localhost.lambdatest.com</code> in place of <code>localhost</code> when accessing your local server from a real device session.</p>
              </details>

              <details>
              <summary>Can I test captive portal browsers?</summary>
              <p>Only if the portal can be accessed via the default WiFi network or through the {BRAND_NAME} tunnel. Portals that require the device to be connected to a specific WiFi network cannot be tested.</p>
              </details>

              {/* Device Access & Platform */}
              <details>
              <summary>What is ADB and which ADB commands does {BRAND_NAME} support?</summary>
              <p>ADB (Android Debug Bridge) is a command-line tool for communicating with Android devices. It enables actions like installing apps, granting permissions, copying files, and performance profiling. A few ADB commands are supported on the public device cloud. The majority of ADB commands are available on the private device cloud.</p>
              </details>

              <details>
              <summary>Can I interact with iOS permission popups during manual testing?</summary>
              <p>Yes. You can interact with <code>alert</code> and <code>actionSheet</code> popups configured in your iOS application.</p>
              </details>

              <details>
              <summary>How do I test SMS verification and OTP flows?</summary>
              <p>{BRAND_NAME} real devices do not have SIM cards or eSIM, so phone calls and SMS cannot be received on the device. For OTP testing, the SIM card must remain in the user's local device to receive the code.</p>
              </details>

              <details>
              <summary>Why can't I see the password I am typing on an iOS device?</summary>
              <p>iOS 13 and above prevents streaming of the keyboard and password fields during password entry as a security measure. The password is entered successfully even though the characters are not visible in the session.</p>
              </details>

              <details>
              <summary>Do you support specific browser versions on real devices?</summary>
              <p>The latest available browser version is provided on real devices. Specific sub-versions (such as Chrome 94 or specific Firefox minor versions) are not selectable.</p>
              </details>

              <details>
              <summary>What developer tools are available for browser testing on real devices?</summary>
              <p>Developer tools are available for:
              <ul>
              <li>Android: Chrome</li>
              <li>iOS: Safari and Chrome</li>
              </ul>
              </p>
              </details>

              {/* Debugging */}
              <details>
              <summary>What logs are available for debugging on real devices?</summary>
              <p>{BRAND_NAME} real device testing provides five log types: <strong>Appium logs</strong>, <strong>Visual logs</strong>, <strong>Device logs</strong>, <strong>Network logs</strong>, and <strong>Command logs</strong>. All five are available for both manual and automated sessions.</p>
              </details>

              {/* Screenshots */}
              <details>
              <summary>How long are screenshots retained?</summary>
              <p>Screenshots are retained for 60 days on {BRAND_NAME} servers, then permanently deleted.</p>
              </details>

              {/* Limitations */}
              <details>
              <summary>Do you support private or dedicated devices?</summary>
              <p>Dedicated devices are not available on the public cloud plan. Contact <a href="mailto:support@testmuai.com">support@testmuai.com</a> to discuss private cloud options.</p>
              </details>

              <details>
              <summary>Does the public cloud plan provide access to iOS device settings?</summary>
              <p>Accessing iOS device settings is restricted on the public cloud plan. It is available on the private cloud plan.</p>
              </details>

              <details>
              <summary>Can I upload files from within an app installed on a real device?</summary>
              <p>Uploading files from within an installed app is not currently supported.</p>
              </details>

              <details>
              <summary>Can I upload or download files during manual app testing?</summary>
              <p>Uploading and downloading files during manual app testing on real devices is not currently supported.</p>
              </details>

              <details>
              <summary>Why can't I see apps in Google Play Store on Android?</summary>
              <p>You need to sign in to your Google account on Google Play Store to see and install apps.</p>
              </details>

              <details>
              <summary>Can I test smart devices like Amazon Alexa on {BRAND_NAME}?</summary>
              <p>Testing smart devices such as Amazon Alexa is not supported. Bluetooth connectivity required for these devices is also not available on the platform.</p>
              </details>

              <details>
              <summary>How long does it take to add support for a new device?</summary>
              <p>New device onboarding timelines vary based on deal size and demand. Contact <a href="mailto:support@testmuai.com">support@testmuai.com</a> to discuss your specific device requirements.</p>
              </details>

            </div>
          )}

          {/* ── Virtual Device Testing ─────────────────────────────────── */}
          {activeTab === 'responsive' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>What app file formats does {BRAND_NAME} support for testing on emulators and simulators?</summary>
              <p>Supported formats for Realtime Native App testing:
              <ul>
              <li>iOS simulators: a <code>.zip</code> file containing a <code>.app</code> bundle. <code>.ipa</code> files are <strong>not</strong> supported on simulators.</li>
              <li>Android emulators: <code>.apk</code> or <code>.aab</code>.</li>
              </ul>
              </p>
              </details>

              <details>
              <summary>Why am I getting an "App Not Found" error?</summary>
              <p>This error typically occurs when an <code>.ipa</code> file is uploaded for an iOS simulator. iOS simulators only support <code>.zip</code> files containing a <code>.app</code> bundle.</p>
              </details>

              <details>
              <summary>Can I test apps from Google Play Store or App Store on emulators/simulators?</summary>
              <p>Testing apps directly from the Google Play Store or App Store on emulators/simulators is not supported. Upload your app file directly instead.</p>
              </details>

              <details>
              <summary>What privileges come with the freemium plan?</summary>
              <p>The freemium plan provides one-time, non-renewable access to a limited set of emulators and simulators, with a maximum of 5 app uploads and 100 free minutes.</p>
              </details>

              <details>
              <summary>Which plan do I need to access Realtime Native App testing?</summary>
              <p>Any premium plan includes access to emulator and simulator testing. The number of parallel sessions depends on your plan. See the <a href={`${BRAND_URL}/pricing`}>pricing page</a> for details.</p>
              </details>

              <details>
              <summary>How does concurrency work for Realtime Native App testing?</summary>
              <p>You do not need a separate App Testing plan. App testing concurrency is shared with Realtime Browser testing. To run native app tests concurrently with browser testing, you need at least a two-parallel-session plan.</p>
              </details>

              <details>
              <summary>Which architecture does {BRAND_NAME} support for <code>.apk</code> files?</summary>
              <p>Emulators run on the x86 architecture. Your <code>.apk</code> file must be built for x86 to run correctly on {BRAND_NAME} emulators.</p>
              </details>

              <details>
              <summary>Can I access the camera or microphone on emulators/simulators?</summary>
              <p>Hardware peripherals like the camera and microphone are not accessible on emulators/simulators.</p>
              </details>

              <details>
              <summary>Do you support gestures like pinch-to-zoom or double-tap?</summary>
              <p>Gesture support is not currently available on emulators/simulators.</p>
              </details>

              <details>
              <summary>Can I use Developer Tools during Realtime Native App testing?</summary>
              <p>Yes. Developer Tools are available for viewing device logs, network logs, and app logs. Inspect Element is not available on emulators/simulators.</p>
              </details>

              <details>
              <summary>Can I test an app that depends on another app (such as Google Maps)?</summary>
              <p>Yes. Install both the app under test and the dependent app in the same session.</p>
              </details>

              <details>
              <summary>How long does my uploaded app remain available on {BRAND_NAME}?</summary>
              <p>Uploaded apps are retained for 60 days and then automatically deleted per the data retention policy.</p>
              </details>

            </div>
          )}

          {/* ── KaneAI ─────────────────────────────────────────────────── */}
          {activeTab === 'kaneai' && (
            <div className={faqStyles.accordionGroup}>

              {/* Code generation */}
              <details>
              <summary>Can KaneAI generate automation code from my test?</summary>
              <p>Yes. After authoring a test in natural language, KaneAI generates runnable automation code across multiple languages and frameworks: Selenium, Playwright, Cypress, Appium, and more. The generated code is available from the test summary page and can be exported directly.</p>
              </details>

              {/* Auto-heal */}
              <details>
              <summary>How do I fix broken locators automatically when my KaneAI test breaks after a UI change?</summary>
              <p>Enable Auto-Heal by running your KaneAI tests via <strong>HyperExecute</strong>. When an element locator (ID, XPath, CSS selector) breaks at runtime, Auto-Heal uses the original natural language instruction to find a new working locator; the test continues without failing on a stale selector. See <a href={`${BRAND_URL}/support/docs/kaneai-auto-heal/`}>how to enable Auto-Heal in KaneAI</a> for setup details.</p>
              </details>

              {/* Test Manager */}
              <details>
              <summary>How do I organize, plan, and trigger KaneAI tests in bulk?</summary>
              <p>Use <strong>Test Manager</strong>, {BRAND_NAME}'s built-in test management tool. From Test Manager you can organize KaneAI tests into projects and modules, create test plans, trigger test runs across multiple tests at once, and view results. All KaneAI-authored tests are accessible from the Test Manager dashboard.</p>
              </details>

              {/* CI/CD */}
              <details>
              <summary>Can I run KaneAI tests in CI/CD pipelines?</summary>
              <p>Yes. KaneAI test runs can be triggered from CI/CD tools including GitHub Actions and Jenkins using the {BRAND_NAME} API. See <a href={`${BRAND_URL}/support/docs/kaneai-ci-cd-automation/`}>how to trigger KaneAI runs in CI</a> for a step-by-step walkthrough.</p>
              </details>

              {/* HyperExecute */}
              <details>
              <summary>How does KaneAI work with HyperExecute?</summary>
              <p>KaneAI authors and generates tests. HyperExecute executes them. When you trigger a KaneAI test run via HyperExecute, you get HyperExecute's full execution engine: parallel execution, real-time logs, and the Auto-Heal feature for broken locators. This is the recommended path for running KaneAI tests in CI.</p>
              </details>

              {/* API testing */}
              <details>
              <summary>Can I combine API calls and UI steps in the same KaneAI test?</summary>
              <p>Yes. KaneAI supports API testing within a web test flow; you can make API calls, validate responses, and chain API interactions with UI steps in a single test case. See <a href={`${BRAND_URL}/support/docs/kane-ai-api-testing/`}>how to test APIs in KaneAI</a> for details.</p>
              </details>

              {/* Modules */}
              <details>
              <summary>Can I reuse test steps across multiple tests?</summary>
              <p>Yes. KaneAI supports <strong>Modules</strong>, reusable groups of test steps that can be shared across test cases. Create a module for common flows like login, checkout, or navigation, then reference it in any test. See <a href={`${BRAND_URL}/support/docs/kane-ai-modules/`}>how to create and reuse KaneAI modules</a> for details.</p>
              </details>

              {/* Advanced features */}
              <details>
              <summary>How do I parameterize a KaneAI test when my test data changes every run?</summary>
              <p>Use KaneAI's variables and datasets. Define variables in your test, pass different values at runtime, or connect a dataset to run the same test across multiple data rows. Smart variables let you capture values from one step and use them in the next. See <a href={`${BRAND_URL}/support/docs/kane-ai-using-variables/`}>how to use variables in KaneAI</a> for syntax and examples.</p>
              </details>

              <details>
              <summary>How do I add visual regression checks to a KaneAI test?</summary>
              <p>KaneAI integrates with {BRAND_NAME}'s SmartUI. Add a visual assertion step to your test and SmartUI captures a baseline screenshot and diffs future runs against it, catching layout regressions alongside functional failures. See <a href={`${BRAND_URL}/support/docs/kaneai-smartui-visual-testing/`}>how to set up visual testing in KaneAI</a> for setup.</p>
              </details>

            </div>
          )}

          {/* ── Kane CLI ───────────────────────────────────────────────── */}
          {activeTab === 'kanecli' && (
            <div className={faqStyles.accordionGroup}>

              {/* Installation */}
              <details>
              <summary>How do I install Kane CLI?</summary>
              <p>Kane CLI is published to the npm registry as <code>@testmuai/kane-cli</code>. Install it globally:
              <br /><br />
              <code>npm install -g @testmuai/kane-cli</code>
              <br /><br />
              <strong>Requirements:</strong> Node.js 18 or higher and Google Chrome must be installed on your system. Chrome is used as the automation browser and is launched automatically when you run a test. See <a href={`${BRAND_URL}/support/docs/kane-cli-installation/`}>how to install Kane CLI</a> for platform support details.</p>
              </details>

              <details>
              <summary>Which platforms does Kane CLI support?</summary>
              <p>Kane CLI supports macOS (Apple Silicon and Intel), Linux (x64), and Windows (x64). Platform-specific native binaries are installed automatically when you run <code>npm install</code>.</p>
              </details>

              {/* Authentication */}
              <details>
              <summary>How do I authenticate Kane CLI?</summary>
              <p>Run <code>kane-cli login</code> to authenticate via OAuth: your browser opens a {BRAND_NAME} consent page, you authorize the CLI, and credentials are stored under <code>~/.testmuai/kaneai/profiles/</code>. For CI environments, use basic auth:
              <br /><br />
              <code>kane-cli login --username YOUR_USERNAME --access-key YOUR_ACCESS_KEY</code>
              <br /><br />
              See <a href={`${BRAND_URL}/support/docs/kane-cli-authentication/`}>how to authenticate with Kane CLI</a> for profile management and environment variable options.</p>
              </details>

              {/* Modes */}
              <details>
              <summary>What are the three modes of Kane CLI?</summary>
              <p>Kane CLI has three modes:
              <ul>
              <li><strong>Interactive TUI</strong> (<code>kane-cli --tui</code>): a terminal UI for development, exploration, and chained multi-run sessions.</li>
              <li><strong>Non-Interactive CLI</strong> (<code>kane-cli run "..." --headless</code>): for CI/CD pipelines and shell scripts. Outputs formatted text and JSON.</li>
              <li><strong>Agent Mode</strong> (<code>kane-cli run "..." --agent</code>): for AI coding agents (Claude, Codex, Gemini). Outputs NDJSON on stdout for agent consumption.</li>
              </ul>
              See <a href={`${BRAND_URL}/support/docs/kane-cli-modes/`}>how to choose a Kane CLI run mode</a> for details.</p>
              </details>

              {/* CI/CD */}
              <details>
              <summary>Can I use Kane CLI in a CI/CD pipeline?</summary>
              <p>Yes. Use <code>--headless</code> for non-interactive runs in CI. Kane CLI exits with standard exit codes (0 = pass, non-zero = failure) and outputs structured JSON for easy parsing. See <a href={`${BRAND_URL}/support/docs/kane-cli-cicd/`}>how to add Kane CLI to GitHub Actions and Jenkins</a> for examples.</p>
              </details>

              {/* AI agents */}
              <details>
              <summary>How do AI coding agents like Claude Code use Kane CLI?</summary>
              <p>With <code>--agent</code> flag, Kane CLI outputs NDJSON (newline-delimited JSON) on stdout: a structured event stream that AI coding agents can parse. Agents like Claude Code, Codex CLI, and Gemini CLI can invoke Kane CLI as a skill to test and verify web UIs on your behalf during development. See <a href={`${BRAND_URL}/support/docs/kane-cli-agent-mode/`}>how to use Kane CLI with AI coding agents</a> for integration details.</p>
              </details>

              {/* Variables */}
              <details>
              <summary>Can I use variables in Kane CLI objectives?</summary>
              <p>Yes. Variables let you parameterize objectives so the same test runs with different values: different users, URLs, form inputs. Variables can be set in a config file, passed on the command line, or read from environment variables. See <a href={`${BRAND_URL}/support/docs/kane-cli-variables-and-context/`}>how to parameterize Kane CLI tests with variables</a> for syntax and examples.</p>
              </details>

              {/* Test Manager */}
              <details>
              <summary>Can Kane CLI results be saved to Test Manager?</summary>
              <p>Yes. Configure a Test Manager project in your Kane CLI config, and each run is automatically uploaded to Test Manager with a shareable link, step-by-step breakdown, and session video. See <a href={`${BRAND_URL}/support/docs/kane-cli-tms-integration/`}>how to upload Kane CLI runs to Test Manager</a>.</p>
              </details>

              {/* Troubleshooting */}
              <details>
              <summary>Kane CLI says "Chrome failed to launch." How do I fix this?</summary>
              <p>Chrome is not installed, all CDP ports in the 9222–9230 range are in use, or a profile lock is held by another Chrome instance.
              <br /><br />
              Fix steps:
              <ol>
              <li>Install Google Chrome if not present.</li>
              <li>Check for processes on CDP ports: <code>lsof -i :9222-9230</code> (macOS/Linux).</li>
              <li>Quit any Chrome processes holding the 9222–9230 port range.</li>
              </ol>
              See <a href={`${BRAND_URL}/support/docs/kane-cli-troubleshooting/`}>how to fix Kane CLI Chrome and auth errors</a> for more fixes.</p>
              </details>

              <details>
              <summary>Where are Kane CLI run logs stored?</summary>
              <p>Run logs are stored under <code>~/.testmuai/kaneai/sessions/</code>. Each run produces a <code>run.log</code> text file, per-step JSON files, per-step screenshots, and a <code>run_summary.json</code>. The <code>run_end</code> event in Agent Mode includes the exact <code>session_dir</code> and <code>run_dir</code> paths.</p>
              </details>

            </div>
          )}

          {/* ── LT Browser ────────────────────────────────────────────── */}
          {activeTab === 'ltbrowser' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>Can I record a video of a test session in LT Browser?</summary>
              <p>Yes. Open your website in any device viewport and click the video recording button. A timer starts and records your interaction with the site in that viewport. Click the same button to stop recording.</p>
              </details>

              <details>
              <summary>Can I test locally hosted websites in LT Browser?</summary>
              <p>Yes. Enter your localhost URL directly in the LT Browser address bar to access and test your locally hosted web app or website.</p>
              </details>

              <details>
              <summary>How do I debug my website in LT Browser?</summary>
              <p>LT Browser includes built-in debugging tools alongside 50+ pre-installed device viewports. You can inspect responsive layouts and debug UI or browser bugs directly within the tool without switching to a separate DevTools window.</p>
              </details>

            </div>
          )}

          {/* ── SmartUI ───────────────────────────────────────────────── */}
          {activeTab === 'smartui' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>How do I set up my first SmartUI visual regression test?</summary>
              <p>Create a SmartUI project, install the SDK, set your project token as an environment variable, add <code>smartuiSnapshot</code> calls to your existing test, then run the suite. SmartUI captures baseline screenshots on the first run and diffs against them on every subsequent run. See <a href={`${BRAND_URL}/support/docs/smartui-running-your-first-project/`}>how to run your first SmartUI project</a> for a step-by-step walkthrough. Requires Node.js v20.3+ for CLI v4.x.x.</p>
              </details>

              <details>
              <summary>What is a baseline in SmartUI and how do I update it when the UI changes intentionally?</summary>
              <p>A baseline is the set of approved reference screenshots SmartUI compares new runs against. When you make an intentional UI change, approve the new screenshots in the SmartUI dashboard to promote them as the new baseline. For branch-based workflows, pass <code>--baselineBranch "branch-name"</code> on the CLI to target a specific branch baseline. See <a href={`${BRAND_URL}/support/docs/smartui-baseline-management/`}>how to manage SmartUI baselines</a> for all four baseline types (project, branch, dynamic, build).</p>
              </details>

              <details>
              <summary>My SmartUI screenshots are not appearing in the dashboard. What do I check?</summary>
              <p>The most common cause is a missing or incorrect project token. Work through this checklist:
              <ol>
              <li>Confirm <code>SMARTUI_CLIENT_TOKEN</code> is set in your environment and matches the token shown in your SmartUI project settings.</li>
              <li>Verify Node.js is v20.3 or higher: <code>node --version</code>.</li>
              <li>Check that the CLI installed correctly: <code>npx smartui --version</code>.</li>
              <li>Look for network errors in the test output; firewall or proxy rules can block uploads.</li>
              </ol>
              See <a href={`${BRAND_URL}/support/docs/smartui-troubleshooting-guide/`}>how to troubleshoot SmartUI screenshot issues</a> for a full diagnostic checklist.</p>
              </details>

              <details>
              <summary>My SmartUI screenshots show blank or partially loaded pages. How do I fix it?</summary>
              <p>The snapshot is being taken before the page finishes rendering. Increase the render wait in your SmartUI config:
              <br /><br />
              <code>waitForTimeout: 5000</code>: waits for a fixed duration before capture.<br />
              <code>waitForPageRender: 5000</code>: waits for the page render cycle to complete.<br />
              <br />
              Both values can be increased up to 10000ms or higher for slow pages. For lazy-loaded components, add an explicit wait in your test code before the snapshot call.</p>
              </details>

              <details>
              <summary>How do I stop false positives caused by dynamic content like timestamps, ads, or session tokens?</summary>
              <p>Use <code>ignoreDOM</code> to exclude specific elements from the comparison, or <code>selectDOM</code> to compare only a specific portion of the page. Both accept CSS selectors, XPath, element IDs, and class names. For example, wrap a timestamp element in <code>ignoreDOM: ['#timestamp', '.ad-banner']</code>. See <a href={`${BRAND_URL}/support/docs/smartui-handle-dynamic-data/`}>how to handle dynamic content in SmartUI</a> for all eight common scenarios.</p>
              </details>

              <details>
              <summary>How do I configure mismatch thresholds to automatically approve or reject screenshots?</summary>
              <p>SmartUI supports approval and rejection thresholds at three levels: project (lowest priority), build, and per-screenshot (highest priority). Set the approval threshold to auto-approve mismatches at or below that percentage, and the rejection threshold to auto-reject at or above it. Mismatches between the two thresholds go to manual review.
              <br /><br />
              Recommended starting values:
              <ul>
              <li>Pixel-perfect pages: 0% approval, 1% rejection</li>
              <li>Pages with minor dynamic content: 2% approval, 5% rejection</li>
              <li>Highly dynamic pages: 10% approval, 20% rejection</li>
              </ul>
              See <a href={`${BRAND_URL}/support/docs/smartui-mismatch-thresholds/`}>how to set SmartUI mismatch thresholds</a> for configuration details.</p>
              </details>

              <details>
              <summary>Which testing frameworks does SmartUI support?</summary>
              <p>SmartUI integrates with Selenium, Playwright, Cypress, Appium, Puppeteer, WebdriverIO, and Testcafe. SDKs are available for JavaScript, Java, Python, C#, and Ruby. All framework SDKs work with the same <code>smartuiSnapshot</code> API; the call is added to your existing test without changing the test logic.</p>
              </details>

              <details>
              <summary>Can SmartUI test multiple screen sizes and mobile viewports in one run?</summary>
              <p>Yes. Configure viewports in your SmartUI config file. Default web viewports are 1920px, 1366px, and 1028px. Mobile viewports like iPhone 14 and Galaxy S24 are also supported. SmartUI captures a separate screenshot for each viewport in a single test run and diffs each independently.</p>
              </details>

              <details>
              <summary>How do I programmatically set a build as the baseline from my test code?</summary>
              <p>Pass the <code>smartUI.baseline: true</code> capability in your test configuration. When set, SmartUI auto-approves the run's screenshots and marks the build as the baseline. This is useful in CI to promote a release branch build as the new reference automatically. Requires SmartUI CLI v4.1.0 or higher and SmartUI SDK for Java v1.0.7 or higher.</p>
              </details>

              <details>
              <summary>How does SmartUI handle Git branching for multi-branch teams?</summary>
              <p>Pass <code>--baselineBranch</code> on the CLI to specify which branch's approved build is used as the comparison baseline. This means feature branch runs compare against the main branch baseline rather than their own history, preventing false positives when a feature diverges from main. Git-native baseline tracking (automatic build creation from commits) is currently available for Storybook projects.</p>
              </details>

            </div>
          )}

          {/* ── Accessibility Testing ─────────────────────────────────── */}
          {activeTab === 'accessibility' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>How do I run an accessibility scan on a webpage?</summary>
              <p>Install the {BRAND_NAME} Accessibility DevTools browser extension, open your target page, open the DevTools panel, and choose a scan type: Quick Scan, Full Page, Partial Page, Multi-Page, Workflow, or Keyboard scan. Results appear in the panel immediately and are also pushed to your Accessibility dashboard. See <a href={`${BRAND_URL}/support/docs/accessibility-devtools/`}>how to run accessibility scans with DevTools</a> for setup steps.</p>
              </details>

              <details>
              <summary>What accessibility standards and guidelines does the scanner check?</summary>
              <p>The scanner checks against WCAG (Web Content Accessibility Guidelines) across multiple versions, accessibility best practices, and a "needs review" category for issues that require human judgment. You can configure which standard and which rule categories to include before running a scan from the DevTools settings panel.</p>
              </details>

              <details>
              <summary>Can I run accessibility checks as part of my automated Selenium or Playwright test suite?</summary>
              <p>Yes. Accessibility Automation integrates with Selenium and Playwright on the {BRAND_NAME} cloud grid. Add the accessibility capability to your existing test configuration; no separate test file is needed. Results appear in the Accessibility tab of your Automation dashboard. Note: Playwright Automation requires Chrome; the bundled <code>pw-chromium</code> browser is not supported because the required extension does not load in it. See <a href={`${BRAND_URL}/support/docs/accessibility-automation/`}>how to add accessibility checks to automated tests</a>.</p>
              </details>

              <details>
              <summary>How do I test mobile app accessibility on real Android and iOS devices?</summary>
              <p>Use the Accessibility App Scanner: upload your APK or IPA, select a real device, launch the session, navigate your app's critical journeys, and trigger a scan after each screen stabilizes. Issues appear in a side panel with rule text and remediation suggestions, and results are saved to your dashboard. See <a href={`${BRAND_URL}/support/docs/accessibility-app-scanner/`}>how to scan mobile apps for accessibility issues</a> for the full workflow.</p>
              </details>

              <details>
              <summary>How do I add accessibility testing to my CI/CD pipeline?</summary>
              <p>Set <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> as environment variables in your CI system, then add the accessibility capability to your existing test configuration; no changes to the test runner command itself. GitHub Actions and Jenkins are both supported. Start with a smoke slice of critical flows to keep pipeline time predictable. See <a href={`${BRAND_URL}/support/docs/accessibility-cicd-integration-guide/`}>how to integrate accessibility testing into CI/CD</a> for GitHub Actions and Jenkins examples.</p>
              </details>

              <details>
              <summary>What issue severity levels does the accessibility scanner report?</summary>
              <p>Issues are categorized into four severity levels: Critical, Serious, Moderate, and Minor. The All Issues dashboard view lets you sort and filter by severity so you can prioritize Critical and Serious issues first. Each issue includes the element context, CSS selector, and a remediation suggestion.</p>
              </details>

              <details>
              <summary>How do I triage accessibility issues and assign them to developers?</summary>
              <p>Open the All Issues view in your Accessibility dashboard, filter by severity, rule, URL, or issue state, then click any issue to see its element context and fix guidance. Create a bug report directly from the issue; it includes a deep link and screenshot. After the fix is deployed, re-run the scan and compare before/after issue counts to confirm the fix.</p>
              </details>

              <details>
              <summary>Can I suppress false positives or accepted exceptions from my report?</summary>
              <p>Yes. Use the hide/restore function in the dashboard to suppress issues you have reviewed and accepted. Hidden issues remain in the system with a documented reason and can be restored at any time; they do not permanently delete the finding or affect your audit trail.</p>
              </details>

              <details>
              <summary>How do I export and share accessibility reports with my team or for compliance audits?</summary>
              <p>Export reports as a spreadsheet, PDF, or packaged evidence bundle from the Accessibility dashboard. Exports reflect the current active issue state including any filters or hide/restore decisions applied. For audit trails, include build metadata (date, commit SHA, scan type) alongside the export. See <a href={`${BRAND_URL}/support/docs/accessibility-exporting-sharing-reports/`}>how to export and share accessibility reports</a>.</p>
              </details>

              <details>
              <summary>Does accessibility testing work alongside KaneAI or HyperExecute tests?</summary>
              <p>Yes. Accessibility Automation runs on the same {BRAND_NAME} cloud grid as Selenium and Playwright tests, so it is compatible with HyperExecute for parallel execution. Accessibility checks can be embedded in any test that runs on the grid, including tests authored in KaneAI and exported as Selenium or Playwright code.</p>
              </details>

            </div>
          )}

          {/* ── Insights ─────────────────────────────────────────────── */}
          {activeTab === 'analytics' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>How do I get started with Insights?</summary>
              <p>Log in to your {BRAND_NAME} account, navigate to the <strong>Insights</strong> section from the left sidebar, and create your first dashboard. From there you can add widgets for the products and metrics relevant to your team. See <a href={`${BRAND_URL}/support/docs/analytics-overview/`}>what the Insights platform covers</a> for a full list of available modules and widgets.</p>
              </details>

              <details>
              <summary>Which TestMu AI products does Insights cover?</summary>
              <p>Insights has widgets for Web Automation, App Automation, and HyperExecute. SmartUI, Accessibility, Real Device, and Test Manager widgets are also available in beta. Each product has its own widget set; you can mix widgets from multiple products on a single dashboard.</p>
              </details>

              <details>
              <summary>How do I add or customize widgets on a dashboard?</summary>
              <p>Open the dashboard, click <strong>Add Widget</strong>, select the widgets you want, then click <strong>Update Dashboard</strong>. To edit an existing widget, click the three-dot menu on the widget and select <strong>Edit</strong>; you can rename the widget and apply filters. Changes are saved per widget.</p>
              </details>

              <details>
              <summary>How do I schedule Insights reports to be sent to my team by email?</summary>
              <p>Open the dashboard, go to its settings, and enable the email notification toggle. Set the frequency (Daily, Weekly, or Monthly), delivery time, date range (default or custom number of days), and add recipient email addresses. You must be the dashboard creator or an admin to configure scheduling. See <a href={`${BRAND_URL}/support/docs/analytics-report-scheduling/`}>how to schedule Insights report emails</a> for steps.</p>
              </details>

              <details>
              <summary>My scheduled Insights email report is not being sent. How do I fix it?</summary>
              <p>Two common causes: the dashboard was not saved before enabling the schedule (save and refresh, then re-enable the toggle), or the delivery time reverted after saving (verify that both the hour and the AM/PM period are selected before clicking <strong>Update</strong>).</p>
              </details>

              <details>
              <summary>How do I identify flaky tests in Insights?</summary>
              <p>Use the <strong>Flaky Tests AI</strong> module. It categorizes tests by flakiness severity: High (&gt;75% flake rate), Medium (50–75%), and Low (&lt;50%). The Flakiness Trends widget shows how flakiness changes over time. You can also enable Slack alerts to get notified the first time a test is detected as flaky (disabled by default). See <a href={`${BRAND_URL}/support/docs/analytics-overview/`}>how to detect and analyze flaky tests in Insights</a>.</p>
              </details>

              <details>
              <summary>Can I filter analytics data by a custom date range?</summary>
              <p>Yes. Each dashboard has a date range selector. Choose <strong>Default</strong> for the preset range or <strong>Custom</strong> to specify a number of days (for example, the last 7 or last 30 days). Date range settings apply to all widgets on that dashboard.</p>
              </details>

              <details>
              <summary>How do I share a dashboard with a teammate?</summary>
              <p>Click the share icon to the right of the date range selector inside the dashboard. This generates a shareable link. Recipients with a {BRAND_NAME} account can view the shared dashboard directly.</p>
              </details>

              <details>
              <summary>What error analysis widgets are available?</summary>
              <p>The <strong>Error Insights</strong> module surfaces recurring error patterns across your test runs, grouped by error type, test name, and frequency. Use it to find systemic failures (infra errors, assertion errors, timeout patterns) that don't show up clearly in individual test results.</p>
              </details>

              <details>
              <summary>What is the AI Dashboard CoPilot?</summary>
              <p>AI Dashboard CoPilot is a natural-language interface for your Insights data. Ask questions about your test metrics directly (for example, "which tests failed most this week?") and CoPilot queries your dashboard data to return an answer. It is available from the Insights dashboard as a new feature.</p>
              </details>

            </div>
          )}

          {/* ── Test Manager ──────────────────────────────────────────── */}
          {activeTab === 'testmanager' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>How do I create a project in Test Manager?</summary>
              <p>Log in to Test Manager, click <strong>Create Project</strong>, enter a project name, description, and any tags, then click <strong>Create</strong>. The project becomes the top-level container for all your test cases, folders, and test plans. See <a href={`${BRAND_URL}/support/docs/create-projects/`}>how to create a Test Manager project</a> for details.</p>
              </details>

              <details>
              <summary>How do I import existing test cases from a spreadsheet into Test Manager?</summary>
              <p>Use the CSV import flow: select your project, upload the CSV file, map your column headers to Test Manager fields (title, steps, step outcomes, folder, custom fields), preview the mapping, and finalize the import. Both single-row (all steps in one row) and multi-row (one step per row) CSV formats are supported. If your test cases reference custom fields, create and link those fields to the project before importing. See <a href={`${BRAND_URL}/support/docs/csv-import/`}>how to bulk-import test cases from CSV</a>.</p>
              </details>

              <details>
              <summary>Can I link Test Manager test cases to Jira issues?</summary>
              <p>Yes. Connect your Jira account in the integrations settings, then map Jira ticket columns during CSV import or link issues manually from the test case detail view. If you import without Jira connected, you can add the links after connecting the integration.</p>
              </details>

              <details>
              <summary>How do I organize test cases into folders?</summary>
              <p>Test cases can be grouped into folders within a project. Create folders from the project view and drag test cases into them, or specify folder names during a CSV import (use a delimiter to represent nested folders). Test cases imported without a folder assignment go into an <strong>Untitled</strong> folder by default.</p>
              </details>

              <details>
              <summary>How do I create a test plan and trigger a test run?</summary>
              <p>From your project, create a test plan by selecting the test cases to include and setting run parameters. Then create a build under that plan and trigger execution. Test Manager tracks execution status per test case in real time; you can see which tests are passing, failing, or blocked as the run progresses.</p>
              </details>

              <details>
              <summary>Can I manage KaneAI-authored tests in Test Manager?</summary>
              <p>Yes. All tests authored in KaneAI are accessible from Test Manager. You can organize them into projects and folders, add them to test plans, trigger bulk runs, and view results, all from the same interface you use for manually written test cases.</p>
              </details>

              <details>
              <summary>Does Test Manager support custom fields on test cases?</summary>
              <p>Yes. Create custom fields from the project settings and link them to the project before use. Custom fields appear in the test case form and are also mappable during CSV import, so existing metadata from your spreadsheets can be preserved when migrating.</p>
              </details>

              <details>
              <summary>How do I track test execution progress in real time?</summary>
              <p>Open the active build in Test Manager. Each test case shows its current execution state: not started, in progress, passed, failed, or blocked. The build view updates in real time as testers mark results. You can use this view in standups or release reviews to spot bottlenecks before the run completes.</p>
              </details>

              <details>
              <summary>Can I use Test Manager to trigger automated tests, not just manual ones?</summary>
              <p>Yes. Test Manager supports triggering automated test runs for KaneAI-authored tests. For other automated frameworks (Selenium, Playwright, Cypress), link automated test cases to their corresponding manual test cases using the test case ID or via the {BRAND_NAME} API to record results against Test Manager test cases.</p>
              </details>

              <details>
              <summary>How do I get a history of past test runs for a project?</summary>
              <p>Each project maintains a full build history. Open the project, navigate to <strong>Builds</strong>, and select any past build to see its full execution report: which tests passed, failed, or were skipped, who ran them, and when. Results are retained so you can compare trends across releases.</p>
              </details>

            </div>
          )}

          {/* ── Plans & Billing ───────────────────────────────────────── */}
          {activeTab === 'billing' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>What do I get on the free plan?</summary>
              <p>The free plan gives you 2 parallel live testing sessions at no cost, with no expiry date. Your monthly live testing minutes renew each month. The plan also includes access to third-party integrations and 24x7 support. See the <a href={`${BRAND_URL}/pricing`}>Pricing page</a> for the current minute limits.</p>
              </details>

              <details>
              <summary>Is there a time limit on the free plan?</summary>
              <p>No. The free plan has no expiry. Live testing minutes renew monthly. You can upgrade at any time for higher limits and additional features.</p>
              </details>

              <details>
              <summary>What does a parallel session mean?</summary>
              <p>A parallel session is one concurrent test run. With 2 parallel sessions, two team members can run live tests at the same time, or a single member can run 2 tests simultaneously.</p>
              </details>

              <details>
              <summary>Is pricing based on users or parallel sessions?</summary>
              <p>Pricing is based on parallel sessions. The user limit is an add-on that comes with each edition.</p>
              </details>

              <details>
              <summary>What paid plans are available and what do they cost?</summary>
              <p>There are three paid tiers, all billed annually:
              <ul>
              <li><strong>Virtual Live</strong> at $15/month: unlimited live interactive testing across 3,000+ browsers and OS combinations.</li>
              <li><strong>ChromeOS Live</strong> at $29/month: all Virtual Live features plus ChromeOS coverage.</li>
              <li><strong>Real Device Plus Live</strong> at $39/month: live testing on 10,000+ real iOS and Android devices plus full virtual browser coverage.</li>
              </ul>
              Enterprise pricing is custom. See the <a href={`${BRAND_URL}/pricing`}>Pricing page</a> for the full feature breakdown per plan.</p>
              </details>

              <details>
              <summary>What does the Enterprise plan include?</summary>
              <p>The Enterprise plan is custom-priced and adds: SOC 2 Type II, ISO 27001, ISO 27017, and ISO 27701 certifications; GDPR, CCPA, and HIPAA-ready compliance; a dedicated success manager; a private Slack channel; on-premise device cloud options; and unlimited manual accessibility DevTools tests. Contact sales from the <a href={`${BRAND_URL}/pricing`}>Pricing page</a> for a quote.</p>
              </details>

              <details>
              <summary>How do I upgrade my {BRAND_NAME} subscription?</summary>
              <p>Upgrade at any time from the <a href={`${BRAND_URL}/pricing`}>Pricing page</a>. See <a href={`${BRAND_URL}/support/docs/manage-subscriptions/`}>how to upgrade or switch your plan</a> for billing cycle and proration details.</p>
              </details>

              <details>
              <summary>Can I downgrade my subscription?</summary>
              <p>Yes. Plan changes take effect at the start of the next billing cycle.</p>
              </details>

              <details>
              <summary>What payment methods do you accept?</summary>
              <p>All major credit and debit cards are accepted. PayPal is supported for annual billing only.</p>
              </details>

              <details>
              <summary>Will I receive an invoice for my subscription?</summary>
              <p>Yes. Invoices are sent to the email address used during sign-up and can also be downloaded from your account.</p>
              </details>

            </div>
          )}

          {/* ── Data & Security ───────────────────────────────────────── */}
          {activeTab === 'security' && (
            <div className={faqStyles.accordionGroup}>

              <details>
              <summary>How is my test data and session activity protected from other users on the platform?</summary>
              <p>{BRAND_NAME} uses network-level isolation on AWS, role-based access controls per account, and full VM wipes between sessions. All data in transit is encrypted using HTTPS and VNC/WSS protocols. Data at rest uses AES-256 encryption on AWS S3. No session data (history, cookies, or files) is accessible to other organizations on the platform.</p>
              </details>

              <details>
              <summary>Is my data safe between sessions? Can the next user see anything I did?</summary>
              <p>No. The moment you close a session, the entire virtual machine is wiped: history, cookies, saved passwords, downloads, and extensions are all deleted and browsers are reset to factory settings. Each VM passes automated checks before being reassigned. {BRAND_NAME} staff do not have access to a session while it is active.</p>
              </details>

              <details>
              <summary>How does the {BRAND_NAME} tunnel work? How much of my local machine is exposed?</summary>
              <p>Nothing. The tunnel only routes web requests initiated on the {BRAND_NAME} platform to your local machine via an SSH tunnel. Data at rest and in transit are both encrypted. Each tunnel is isolated to your account and secured by an access token. {BRAND_NAME} recommends using test data rather than production data.</p>
              </details>

              <details>
              <summary>Does {BRAND_NAME} have a disaster recovery plan?</summary>
              <p>Yes. {BRAND_NAME} maintains a formal Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP), tested and reviewed annually. Recovery Time Objective (RTO) is 4 hours. Recovery Point Objective (RPO) is under 1 hour. {BRAND_NAME} uses service clustering and network redundancy to eliminate single points of failure, with customer data replicated across availability zones. See <a href={`${BRAND_URL}/trust/security/#business-continuity-and-disaster-recovery`}>the BCP and disaster recovery details</a> on the Trust page.</p>
              </details>

              <details>
              <summary>What security certifications does {BRAND_NAME} hold?</summary>
              <p>{BRAND_NAME} holds SOC 2 Type II, ISO 27001, ISO 27017, and ISO 27701 certifications. The platform is also GDPR, CCPA, and HIPAA-ready compliant.</p>
              </details>

              <details>
              <summary>How is the {BRAND_NAME} application architected? Is the database publicly accessible?</summary>
              <p>{BRAND_NAME} is a microservices-based application. The database is not publicly accessible and is only reachable by the application through encrypted, authentication-based APIs over a secure private network.</p>
              </details>

              <details>
              <summary>Do {BRAND_NAME} employees sign confidentiality agreements?</summary>
              <p>Yes. All employees sign confidentiality agreements that extend to user agreements with clients. Role-based data access controls ensure only relevant personnel can access specific customer data.</p>
              </details>


              <details>
              <summary>Does {BRAND_NAME} perform vulnerability testing and penetration testing?</summary>
              <p>Yes. {BRAND_NAME} performs periodic vulnerability scans (both automated and manual) using an OpenVAS-based solution, checking against the <a href="https://nvd.nist.gov/">National Vulnerability Database</a>. Regular database audits and an ELK stack implementation provide real-time visibility into potential attacks.</p>
              </details>

              <details>
              <summary>What DDoS protection and firewall setup does {BRAND_NAME} use?</summary>
              <p>{BRAND_NAME} is hosted on AWS and follows AWS DDoS mitigation guidelines using Amazon Route 53, CloudFront, Elastic Load Balancing, and AWS WAF. A Cisco ASA firewall and Fail2Ban-based intrusion prevention provide additional protection layers. See the <a href="https://d1.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf">AWS DDoS whitepaper</a> for infrastructure-level details.</p>
              </details>

              <details>
              <summary>How is access to production systems managed?</summary>
              <p>Access is controlled through role-based authentication. No single employee has access to all data. Each employee uses individual email-based credentials, and access is fully revoked on termination. Automated database access logs are maintained and reviewed regularly.</p>
              </details>

              <details>
              <summary>How is user data encrypted at rest and in transit?</summary>
              <p>Data at rest is encrypted using AES-256 on AWS S3. Data in transit is encrypted using VNC and WSS protocols. User credentials are stored in encrypted format; no {BRAND_NAME} employee can access them.</p>
              </details>

              <details>
              <summary>How are backups managed and how is data deleted?</summary>
              <p>Backups are stored on AWS S3 with AES-256 encryption. Versioning and rollback controls prevent accidental deletion. On client request, {BRAND_NAME} can scrub all data including historical backup copies.</p>
              </details>

              <details>
              <summary>Do you operate physical infrastructure?</summary>
              <p>The application is hosted on AWS and Hetzner. Both are certified by major compliance regulators and follow industry-standard physical security protocols. See <a href="https://aws.amazon.com/security/">AWS Cloud Security</a> for details.</p>
              </details>

              <details>
              <summary>What is your incident response process?</summary>
              <p>{BRAND_NAME} follows a 6-step incident response process: preparation, identification, containment, eradication, recovery, and learning. The workflow is tested monthly.</p>
              </details>

              <details>
              <summary>How are users notified in case of a security breach?</summary>
              <p>All affected users are notified immediately by email when a breach is identified. Notifications are also published on {BRAND_NAME}'s official <a href="https://www.linkedin.com/company/13282763/">LinkedIn</a> channel.</p>
              </details>

              <details>
              <summary>How do you monitor systems and networks?</summary>
              <p>Monitoring uses Kibana, Kubernetes, and AWS data tools. Elastic Beats ships log data from all services into a centralized ELK stack for real-time analysis and alerting on suspicious activity.</p>
              </details>

              <details>
              <summary>Are user passwords stored in compliance with NIST SP 800-63B?</summary>
              <p>Yes. All user credentials are stored in compliance with <a href="https://pages.nist.gov/800-63-3/sp800-63b.html">NIST Special Publication 800-63B</a>.</p>
              </details>

              <details>
              <summary>Do you have separate production, QA, and development environments?</summary>
              <p>Yes. Production, Dev, and Test environments are hosted on separate AWS instances behind private networks. Only the Production environment holds real customer data; other environments use dummy or simulated data.</p>
              </details>

            </div>
          )}

        </main></div>
      </div>
    </Layout>
  );
}
