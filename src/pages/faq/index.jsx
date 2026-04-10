import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import SharedSidebar from '@site/src/component/SharedSidebar/SharedSidebar';
import CopyPageButton from '@site/src/component/CopyPageButton/CopyPageButton';
import faqStyles from './styles.module.css';


function FaqSidebarLink() {
  return (
    <a
      href="/support/faq/"
      style={{
        display: 'block',
        padding: '6px 12px',
        borderRadius: '6px',
        background: 'rgba(237,95,0,0.08)',
        color: '#ED5F00',
        fontWeight: 600,
        fontSize: '14px',
        textDecoration: 'none',
      }}
    >
      FAQ
    </a>
  );
}

const TABS = [
  { id: 'realtime', label: 'Real Time Testing' },
  { id: 'developer', label: 'Developer' },
  { id: 'automation', label: 'Automation Testing' },
  { id: 'hye', label: 'HyperExecute' },
  { id: 'automated', label: 'Automated Screenshot' },
  { id: 'responsive', label: 'Realtime App Testing' },
  { id: 'realdevice', label: 'App & Browser Testing' },
  { id: 'ltbrowser', label: 'LT Browser' },
  { id: 'security', label: 'Data & Security' },
  { id: 'billing', label: 'Plans & Billing' },
];

const HYE_SUB_TABS = [
  { id: 'gen', label: 'General FAQs' },
  { id: 'yaml', label: 'YAML FAQs' },
  { id: 'cli', label: 'CLI FAQs' },
  { id: 'feat', label: 'Features FAQs' },
  { id: 'plat', label: 'Platform FAQs' },
  { id: 'price', label: 'Pricing FAQs' },
  { id: 'sec', label: 'Security FAQs' },
  { id: 'ent', label: 'Enterprise FAQs' },
];

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState('realtime');
  const [activeHyeTab, setActiveHyeTab] = useState('gen');

  return (
    <Layout
      title="TestMu AI FAQ Documentation"
      description="List of frequently asked questions by TestMu AI's users regarding our product offerings."
    >
      <div className={faqStyles.faqLayout}>
        <SharedSidebar><FaqSidebarLink /></SharedSidebar>

        <main className={faqStyles.faqCenter}>
          <div className={faqStyles.faqHeader}>
            <h1 className={faqStyles.faqTitle}>Frequently Asked Questions</h1>
            <CopyPageButton />
          </div>

          {/* ── Tab Bar ── */}
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

          {/* ── Real Time Testing ── */}
          {activeTab === 'realtime' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>Would I need to install a software or extension to use <BrandName /> virtual machines?</summary>
                <p>No. You don't need to install any software or extension or plugin or setting configurations of any type. Just need to login to <BrandName />, open the virtual machine through launcher, and start testing. That's the beauty of cloud. It gets you started super quick.</p>
              </details>
              <details><summary>Which operating systems, browsers, and browser versions are you providing for cross browser testing?</summary>
                <p>There are 3000+ browsers, browser versions, operating systems, devices, and resolutions to choose from. To find out about the complete list of available browsers, check out <a href="https://www.lambdatest.com/list-of-browsers">list of browsers</a> page.</p>
              </details>
              <details><summary>Are the sessions really running on real browsers or are they just emulators?</summary>
                <p>All desktop session right now are running on real browsers and operating system and are powered by real machines. Mobile browsers right now are running on both emulators/simulators as well as on real devices.</p>
              </details>
              <details><summary>Why are you running Windows server edition? It is the same as Windows desktop edition?</summary>
                <p>Microsoft Windows Desktop Editions licences does not support remote access to users. So we use Windows Server editions and implement Desktop experience in it. It has exactly the same experience as Windows desktop editions and they are running Internet Explorers made for desktop editions.</p>
              </details>
              <details><summary>How much time it takes <BrandName /> to add new browser version when it's released?</summary>
                <p>Whenever a new stable browser version is released we usually implement it in our platform within a week. We also test them ourselves first before providing it to customers to make sure that testing experience is optimum for all users.</p>
              </details>
              <details><summary>Are operating systems 32 bit or 64 bit?</summary>
                <p>Here are the operating systems and browsers running on 32 Bit Operating systems. Windows XP: Internet Explorer 8, Firefox, Chrome, Safari, Opera. Windows 7: Internet Explorer 8, Firefox, Chrome, Safari, Opera. Here are the operating system and browsers running on 64 Bit operating systems. Windows 7: Internet Explorer 10, Firefox, Chrome, Safari, Opera. Windows 8: Internet Explorer 10, Firefox, Chrome, Safari, Opera. Windows 10: Internet Explorer 11, Firefox, Chrome, Safari, Opera. All Mac Operating systems run on 64 Bit operating systems.</p>
              </details>
              <details><summary>Which Rich Internet Applications (RIA) would be pre-installed in the browsers?</summary>
                <p>All our virtual machines comes with pre-installed latest versions of Adobe Flash, Adobe Shockwave, Adobe Reader, JAVA Runtime Environment, Microsoft Silverlight, and Quicktime.</p>
              </details>
              <details><summary>Would I be able to use keyboard shortcuts like copy paste in remote desktops?</summary>
                <p>You would have full access to all keyboard shortcuts. For people using same operating systems on both their local computer and virtual machine won't have any problems. However people who are using Mac machines to access Windows VM or Windows machine to access Mac VM, would have to careful about OS specific shortcuts.</p>
              </details>
              <details><summary>Would I be able to download and upload files in the remote browser?</summary>
                <p>Yes you can. You would have full access to download and upload functionalities. You can access Downloads folder through File - Open file, or Control+O shortcut. Be advised however, each downloaded file will be automatically erased on shutting down the sessions.</p>
              </details>
              <details><summary>Would I be able to change browser settings?</summary>
                <p>You would have full access to all browsers settings. Be advised however, if you need very specific browser settings, you would have to re-configure browser settings on starting each new session.</p>
              </details>
              <details><summary>I am not able to properly hear the sound in the virtual machine. What is happening?</summary>
                <p>For Chrome and Firefox browsers, you should be able to access audio streaming and therefore should be able to hear sounds properly. For mobile emulators, Internet Explorer, and Safari, we currently dont have support to provide you access to Audio.</p>
              </details>
              <details><summary>How many simultaneous sessions can I start using one account?</summary>
                <p>In the free plan you can run only one session at a time. Paid plan users can run multiple sessions depending upon their plan. Visit <a href="https://www.lambdatest.com/pricing"><BrandName /> Pricing page</a> to checkout multiple session plans and their pricing.</p>
              </details>
              <details><summary>It is showing 'Session Limit reached' error even though I am not running a session.</summary>
                <p>The number of sessions is limited by number of sessions running by a organization, not by user. Therefore it is entirely possible that you reach out of session limit even if only one or two users are using <BrandName /> tool. Co-ordinate with your teammates in this case.</p>
              </details>
              <details><summary>What happens when I leave the session idle?</summary>
                <p>By default, if you leave the session idle for 5 minutes, the app will prompt a reminder. If no action is taken then <BrandName /> would close the live session. You can change this setting from Live settings options.</p>
              </details>
              <details><summary>What happens when I switch to another tab in my browser?</summary>
                <p>Switching tab won't stop or pause the Live session. If left idle for 5 minutes or more, <BrandName /> will prompt a reminder and if unanswered will close the session.</p>
              </details>
              <details><summary>When you give the machine to somebody else would they be able to access my history and saved passwords?</summary>
                <p>The moment you close the session, <BrandName /> automatically sanitize the whole virtual machine. We delete all historical data, downloads, installed extensions, saved passwords, etc. We reset the browsers to factory settings.</p>
              </details>
              <details><summary>Would I have to reset and re-configure browser settings everytime I create a new session?</summary>
                <p>Yes! Every time you close a session we would reset all settings. We are working on a way to help you change and save a set of customized default browser settings.</p>
              </details>
              <details><summary>It is showing that my IP is blocked. Why did this happen? How do I unblock it?</summary>
                <p>There may be a number of reasons why this happened which include: <BrandName /> test flagged the IP for excessive spam registrations, or flagged the IP for violating terms of use. If you think that your IP has been flagged erroneously, raise a ticket at our support centre.</p>
              </details>
              <details><summary>It is showing parallel user limit reached. What does that mean?</summary>
                <p><BrandName /> test system allows only a limited number of concurrent running sessions per organization. This limit is defined by the plan that you have subscribed. If you need more concurrent sessions, you can change your plan, or contact one of our sales executive.</p>
              </details>
              <details><summary>I found a bug and now I want to take a screenshot of the webpage running on <BrandName /> real time browser. How can I do that?</summary>
                <p>In real time browser, on left side you will find multiple action buttons in the controller. One of them will be a screenshot button with camera icon. Just click that and in no time your screenshot will be recorded.</p>
              </details>
              <details><summary>How do I report the issue to my team?</summary>
                <p>By going to the <a href="https://issues.lambdatest.com/">Issue tracker</a>, you can add your teammates as watchers for the particular issue and you can also assign them the issue by marking them as 'assignee'.</p>
              </details>
            </div>
          )}

          {/* ── Developer ── */}
          {activeTab === 'developer' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>What developer tools come pre-installed in each <BrandName /> Live remote session browser?</summary>
                <p><BrandName /> Live has all major developer debugging tools like Firebug, Web Developer, YSlow etc.</p>
              </details>
              <details><summary>Can I install any additional tool that I like?</summary>
                <p>Yes! You have full access to browser extensions and therefore can install any additional tool you like. However that tool will be deleted once you close the Live session and you would have to reinstall it again in next session to use.</p>
              </details>
            </div>
          )}

          {/* ── Automation Testing ── */}
          {activeTab === 'automation' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>What is WebDriverIO?</summary>
                <p>WebdriverIO is a browser and automation test framework based in Node.js. It can run both on WebDriver protocol and Chrome Devtools protocol, making it efficient for both Selenium Webdriver based cross browser testing or Chromium based automation.</p>
              </details>
              <details><summary>Can I Mark My Test As Pass Or Fail?</summary>
                <p>The <BrandName /> Selenium grid doesn't identify if your test 'passed' or 'failed'. The user would have to pass on these parameters to <BrandName /> platform. Make use of <BrandName /> API or <BrandName /> Annotations for pushing additional metadata.</p>
              </details>
              <details><summary>Can I Run Parallel Testing using JUnit Framework?</summary>
                <p>Yes! One of the key features of <BrandName /> Selenium grid is the ability to run your test cases in parallel. You can execute numerous automation test cases altogether and cut down on test times.</p>
              </details>
              <details><summary>What Is The Maximum Queuing Capacity?</summary>
                <p>Maximum number of test cases that can be queued = n + 150 where n = number of concurrent sessions. For instance, if you have up to 10 concurrent sessions, the maximum queued test cases will be 10 + 150 = 160.</p>
              </details>
              <details><summary>How Many Parallel Sessions Do I Need?</summary>
                <p><a href="https://www.lambdatest.com/concurrency-calculator/"><BrandName /> Concurrency Calculator</a> is here to help you calculate the number of parallel sessions you need for your test coverage.</p>
              </details>
              <details><summary>What is Live interaction?</summary>
                <p>By using Live-Interaction, you can take over the automation test execution manually. You can abort the automation test session and debug in real-time.</p>
              </details>
              <details><summary>What is the pre-requisite for Live interaction?</summary>
                <p>You should be on five parallel sessions or above.</p>
              </details>
              <details><summary>How can I access Live interaction while running an automation test?</summary>
                <p>To interact with a browser manually in an automation test, visit the <BrandName /> Automation dashboard and click on <b>Click to view live test</b> to take control of the browser.</p>
              </details>
              <details><summary>Is there any maximum time limit for Live interaction?</summary>
                <p>The maximum time limit for Live interaction is 15 minutes.</p>
              </details>
              <details><summary>What platforms are available for Live interaction?</summary>
                <p>The Live interaction is accessible across all browsers except Safari for Windows 11, 10, 8.1, and 8, and macOS Big Sur.</p>
              </details>
              <details><summary>What would be the status of a test involving Live interaction?</summary>
                <p>The status of the test changes to <code>idle_timeout</code> if you abort it using Live interaction.</p>
              </details>
              <details><summary>Does idle_timeout capability work with Live interaction?</summary>
                <p>Once you access Live interaction and abort a test, the test will time out within one minute if no keyboard or mouse events are recorded.</p>
              </details>
              <details><summary>Is there any limit on how many tests can be accessed for Live interaction?</summary>
                <p>In this case, there is no such limit.</p>
              </details>
            </div>
          )}

          {/* ── HyperExecute ── */}
          {activeTab === 'hye' && (
            <div>
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
                  <details><summary>Which testing frameworks does HyperExecute support?</summary>
                    <p>HyperExecute has deep support for Selenium, Cypress, Playwright, CDP, Taiko and other web browser testing frameworks. Core orchestration features and real time logs are native to the platform.</p>
                  </details>
                  <details><summary>Can I run a specific command before running tests on HyperExecute?</summary>
                    <p>HyperExecute provides smart CI features where you can run any command before and after running tests using pre and post steps.</p>
                  </details>
                  <details><summary>Where will HyperExecute run my tests?</summary>
                    <p>HyperExecute takes your test scripts and places them in virtual machines having all the components required to run your tests and collect logs and metrics.</p>
                  </details>
                  <details><summary>How to use HyperExecute?</summary>
                    <p>Tests are triggered on HyperExecute using HyperExecute CLI using a YAML file to configure the executing settings including target OS, concurrency and other CI level information.</p>
                  </details>
                  <details><summary>Why is HyperExecute faster than other end to end testing platforms?</summary>
                    <p>HyperExecute puts all the components and the test script in a single isolated environment to run the tests in the fastest and the most efficient way, eliminating latency from multiple hops.</p>
                  </details>
                  <details><summary>How does HyperExecute help me debug my tests faster?</summary>
                    <p>HyperExecute collects every possible log for every single test and stores them separately. It also streams these test logs in real time to drastically reduce time wasted in debugging failed tests.</p>
                  </details>
                  <details><summary>Does HyperExecute provide the ability to store test artifacts?</summary>
                    <p>Yes, HyperExecute provides convenient artifact management where you can upload test artifacts or any files or folders generated during test execution.</p>
                  </details>
                  <details><summary>Can I run parallel tests using HyperExecute?</summary>
                    <p>Absolutely, HyperExecute's core feature is to provide a massively parallel testing infrastructure where the platform intelligently distributes tests across multiple nodes.</p>
                  </details>
                  <details><summary>What are the configurations for HyperExecute virtual machines?</summary>
                    <p>Windows: 7 GB memory, 4 cores. Linux: 4 GB memory, 2 cores. Mac: 7 GB memory, 4 cores.</p>
                  </details>
                  <details><summary>Can I group my tests to run in sequence?</summary>
                    <p>Yes, HyperExecute provides directives to group dependent tests together which need to run in sequence.</p>
                  </details>
                  <details><summary>In which regions does HyperExecute provide its testing infrastructure?</summary>
                    <p>HyperExecute is available in more than 40 cloud availability regions across the globe.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'yaml' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>What can I do with pre steps and post steps in the YAML file?</summary>
                    <p>Pre and post steps open doors to large amounts of flexibility. You can add certificates just before running tests, start a background process, compile applications, download dependencies and more.</p>
                  </details>
                  <details><summary>How can I install private artifactory dependencies on HyperExecute Machines?</summary>
                    <p>You can use a tunnel to connect with your organization's private network with the HyperExecute machines by <a href='https://www.lambdatest.com/support/docs/hyperexecute-yaml-faqs/#3-how-can-i-install-private-artifactory-dependencies-that-can-only-be-accessed-on-my-organizations-internal-network-on-hyperexecute-machines'>setting the tunnel flag to true</a> in the YAML file.</p>
                  </details>
                  <details><summary>How can I use the Jenkins job choice parameters in the YAML file?</summary>
                    <p>You can <a href='https://www.lambdatest.com/support/docs/hyperexecute-yaml-faqs/#8-how-can-i-use-the-jenkins-job-choice-parameters-in-the-yaml-file'>directly call the parameter keys</a> in the HyperExecute YAML file.</p>
                  </details>
                  <details><summary>Is there any way I can run my tests without specifying the same configurations over and over again?</summary>
                    <p>You can use HyperExecute's inheritance feature which allows you to inherit the configurations of a base YAML file. Learn more at <a href='https://www.lambdatest.com/support/docs/hyperexecute-inherit-config/'>this page</a>.</p>
                  </details>
                  <details><summary>I want to test the code in my Git repository. Is there a way I can do that with HyperExecute?</summary>
                    <p>You can use the "sourcePayload" flag. Your test code is directly sourced from your Git provider with secure access tokens. Learn more at <a href='https://www.lambdatest.com/support/docs/hyperexecute-how-to-configure-sourcePayload/'>this page</a>.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'cli' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>Can HyperExecute CLI download test artifacts generated during execution?</summary>
                    <p>Yes, HyperExecute can download the artifacts generated during the test execution. It also has APIs to download artifacts for a particular job.</p>
                  </details>
                  <details><summary>I am not able to open HyperExecute on MacOS because the developer is not verified. What do I do?</summary>
                    <p>The binary for Mac is unsigned. Use the command: <code>chmod u+x ./hyperexecute</code>. Then allow it from System Preferences → Security & Privacy → General tab.</p>
                  </details>
                  <details><summary>Is there a way I can follow all steps in my test run on HyperExecute?</summary>
                    <p>Every time you run a test via the HyperExecute CLI, a <code>hyperexecute-cli.log</code> file is generated in the parent directory of your test.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'feat' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>What smart CI features does HyperExecute provide?</summary>
                    <p>HyperExecute provides pre and post steps, custom environment variables, deep dependency caching, specific language runtime versions, artifacts management, and more.</p>
                  </details>
                  <details><summary>Can I test my private web applications on HyperExecute?</summary>
                    <p>Absolutely. HyperExecute allows multiple provisions to test private applications by automatically running tunnels using the CLI, and by creating dedicated NAT for organizations.</p>
                  </details>
                  <details><summary>Can I do geolocation testing on HyperExecute?</summary>
                    <p>Yes, HyperExecute provides geolocation testing by providing capabilities in Selenium, Playwright, and Cypress tests.</p>
                  </details>
                  <details><summary>Can HyperExecute run my tests on virtual machines with custom specifications?</summary>
                    <p>Yes, with the enterprise version, HyperExecute provides directives to use custom virtual machines based on the HyperExecute base virtual machine image.</p>
                  </details>
                  <details><summary>How is HyperExecute different from other testing clouds?</summary>
                    <p>HyperExecute is a smart orchestration cloud where the platform decides the best execution plan to finish the jobs in the least amount of time by distributing tests smartly on available resources.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'plat' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>What OS does HyperExecute provide to execute tests?</summary>
                    <p>HyperExecute provides the latest Windows, MacOS and Linux based virtual machines to run your tests.</p>
                  </details>
                  <details><summary>What browsers are available on HyperExecute to run cross browser tests?</summary>
                    <p>HyperExecute provides all versions of Chrome, Firefox, Edge, Opera, and Safari (Mac only) on the latest Windows, MacOS and Linux versions.</p>
                  </details>
                  <details><summary>Is HyperExecute available as an on-prem tool?</summary>
                    <p>Yes, HyperExecute is available as a dedicated cloud and on-prem mode option on Azure, AWS and GCP.</p>
                  </details>
                  <details><summary>What analytics does HyperExecute provide for test execution?</summary>
                    <p>HyperExecute provides fine-grained analytics over test steps, jobs, browser trends, consistently failing tests and error categorizations in the analytics dashboard.</p>
                  </details>
                  <details><summary>Can I access the file system while running my tests?</summary>
                    <p>Yes, with HyperExecute you get access to all the underlying virtual machines to completely customize the testing environment.</p>
                  </details>
                  <details><summary>Can I customize the testing environment?</summary>
                    <p>Yes, with HyperExecute, you can completely customize the test environment using pre and post steps in the YAML.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'price' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>Is there any limit on parallel testing on HyperExecute?</summary>
                    <p>No, HyperExecute can provide virtually unlimited nodes for massive parallel testing as it is backed and spanned across multiple clouds.</p>
                  </details>
                  <details><summary>How does the licensing for HyperExecute work?</summary>
                    <p>Each parallel test execution consumes a single HyperExecute license. If you have 10 licenses and trigger 50 tests, only 10 will run in parallel and the rest will be queued.</p>
                  </details>
                  <details><summary>How many parallel tests can I run on a single HyperExecute license?</summary>
                    <p>Each parallel test execution consumes a single HyperExecute license. HyperExecute puts no capping on the number of parallel tests that can run simultaneously.</p>
                  </details>
                  <details><summary>Can I use the standard <BrandName /> automation platform with the HyperExecute license?</summary>
                    <p>Each HyperExecute license provides access to standard automation platforms and features.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'sec' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>How secure is HyperExecute?</summary>
                    <p>HyperExecute is built with security at its core. It provides fresh virtual machines every time a new job is triggered and deletes the infrastructure after test execution completes.</p>
                  </details>
                  <details><summary>Does HyperExecute provide the ability to define secrets?</summary>
                    <p>Yes, HyperExecute provides a vault service to securely store client side secrets instead of hardcoding them in YAML or test script files.</p>
                  </details>
                  <details><summary>What's the retention period of logs on HyperExecute?</summary>
                    <p>By default, HyperExecute has a retention period of 60 days. After the retention period, the logs and records are deleted permanently.</p>
                  </details>
                  <details><summary>How do I download private dependencies on HyperExecute?</summary>
                    <p>HyperExecute provides multiple methods to connect to private artifactories using automatic tunnel, dedicated NAT and using pre-steps to use VPN.</p>
                  </details>
                </div>
              )}

              {activeHyeTab === 'ent' && (
                <div className={faqStyles.accordionGroup}>
                  <details><summary>Does HyperExecute provide enterprise level features?</summary>
                    <p>HyperExecute provides SSO, dedicated chat support, on-prem and dedicated cloud setups, custom retention period, usage analytics, advance access control, workflow management, and much more.</p>
                  </details>
                  <details><summary>Can I use my own vault for testing with HyperExecute?</summary>
                    <p>Yes, HyperExecute enterprise version allows organizations to integrate their custom vaults with the HyperExecute testing infrastructure.</p>
                  </details>
                </div>
              )}
            </div>
          )}

          {/* ── Automated Screenshot ── */}
          {activeTab === 'automated' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>What resolutions, browsers, operating systems and devices are supported by <BrandName /> Automated Screenshot testing?</summary>
                <p>To know more about browsers, OS, and devices supported, checkout <a href="https://www.lambdatest.com/list-of-browsers">list of browsers</a> page.</p>
              </details>
              <details><summary>Can I share these screenshots with my team?</summary>
                <p>Yes. You can share these screenshots with your team. Check out this tutorial on <a href="https://www.lambdatest.com/support/docs/automated-screenshot-testing/">Automated Screenshot testing</a>.</p>
              </details>
              <details><summary>Is there anyway I can take screenshot of pages behind firewall or authenticated pages?</summary>
                <p><BrandName /> comes with enterprise level local tunneling features. You can connect your local or production servers with <BrandName /> Servers via secure SSH protocols.</p>
              </details>
              <details><summary>What happens when I switch tabs during when screenshots are being generated?</summary>
                <p><BrandName /> won't stop or pause the screenshot generation process. <BrandName /> Automated Screenshot feature will generate screenshots and then will wait for your further actions.</p>
              </details>
            </div>
          )}

          {/* ── Realtime App Testing ── */}
          {activeTab === 'responsive' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>What type of file formats does <BrandName /> Realtime Native App testing support?</summary>
                <p>Currently, we support: For iOS, <code>.app</code> and <code>.zip</code> format. For Android-x86, <code>.apk</code> format.</p>
              </details>
              <details><summary>Can I test apps from Google Play Store/App Store on emulators/simulators?</summary>
                <p>Currently, we don't support the testing of apps from the Google Play Store/App Store on emulators/simulators.</p>
              </details>
              <details><summary>Can I test ipa file on Realtime Native App testing?</summary>
                <p>For now, we don't support ipa files on iOS simulators.</p>
              </details>
              <details><summary>What privileges do I get with the freemium plan?</summary>
                <p>As a part of the freemium plan, you get one-time, non-renewable access to a limited set of devices (emulators and simulators). It limits to a maximum of 5 app uploads and 100 free minutes.</p>
              </details>
              <details><summary>Can I access the camera and the mic on emulators/simulators?</summary>
                <p>Accessing hardware peripherals like camera and mic is currently not supported on emulators/simulators.</p>
              </details>
              <details><summary>Do you support gestures like pinch to zoom on emulators/simulators?</summary>
                <p>Gesture is currently not supported on emulators/simulators.</p>
              </details>
              <details><summary>Can I use Developer Tools for Realtime Native App testing?</summary>
                <p>Yes! You can use Developer Tools for viewing the device logs, network logs, and app logs.</p>
              </details>
              <details><summary>How long does my app remain uploaded on <BrandName /> cloud?</summary>
                <p>As per our data retention policy, all uploaded apps will be deleted after sixty days.</p>
              </details>
            </div>
          )}

          {/* ── App & Browser Testing on Real Devices ── */}
          {activeTab === 'realdevice' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>What type of file formats does <BrandName /> App testing on real devices support?</summary>
                <p>For iOS: <code>.ipa</code> format. For Android: <code>.apk</code> and <code>.aab</code> format.</p>
              </details>
              <details><summary>What test automation frameworks are supported for App automation?</summary>
                <p>Currently, we support Appium framework. Support for other frameworks will be rolled out soon.</p>
              </details>
              <details><summary>Do you support QR code scanning of apps?</summary>
                <p>Currently, we don't support the QR code scanning of apps on real devices.</p>
              </details>
              <details><summary>Can I test biometric authentication like Fingerprint sensor, Face ID?</summary>
                <p>Accessing hardware sensors for biometric authentication is currently not supported on real devices.</p>
              </details>
              <details><summary>Can I monitor network traffic using Charles Proxy?</summary>
                <p>Currently, the Charles proxy for network traffic monitoring is not supported on <BrandName />.</p>
              </details>
              <details><summary>What logs are available for debugging test failures?</summary>
                <p>For debugging test failures, <BrandName /> App testing supports Appium logs, Visual logs, Device logs, Network logs, and Command logs.</p>
              </details>
              <details><summary>Do you support Network throttling?</summary>
                <p>Yes. Network throttling is supported on <BrandName /> real device cloud platform.</p>
              </details>
              <details><summary>Can I simulate GPS location while performing Geolocation testing?</summary>
                <p>Yes! You can test location-based cases for your app with GPS Geolocation testing.</p>
              </details>
              <details><summary>What is the maximum session duration of Appium tests?</summary>
                <p>The maximum session duration of Appium tests is 4 hours.</p>
              </details>
              <details><summary>How long a test session can run on each device?</summary>
                <p>You can run a test for 6 hours uninterrupted on a device.</p>
              </details>
              <details><summary>Do you support Performance testing frameworks for App automation?</summary>
                <p>Currently, we don't support Performance testing frameworks.</p>
              </details>
              <details><summary>Does your public cloud plan offer access to iOS device settings?</summary>
                <p>As of now, accessing settings on iOS is restricted with the public cloud plan. You can access iOS device settings with our private cloud plan.</p>
              </details>
              <details><summary>Can I test video calls on <BrandName /> real devices?</summary>
                <p>Yes, you can test video calling apps on <BrandName />'s Real Devices but as the Camera is taped due to security reasons it will show black image and audio will be blank.</p>
              </details>
            </div>
          )}

          {/* ── LT Browser ── */}
          {activeTab === 'ltbrowser' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>Can I record video of a test session?</summary>
                <p>Yes. Open your website in any device and click on the video recording button. A timer will start and you will be able to record your interaction. The timer will continue to run unless you stop the recording.</p>
              </details>
              <details><summary>Can I test locally hosted websites using LT Browser?</summary>
                <p>Yes. All you need to do is provide the localhost string as the URL in the header of your LT browser and you'll be able to access your localhost server.</p>
              </details>
              <details><summary>How To Debug My Website In LT Browser?</summary>
                <p>With LT Browser, you can evaluate how your responsive web design looks over 50+ pre-installed device viewports and also debug your web-application to figure out the root cause behind a browser or UI bug.</p>
              </details>
            </div>
          )}

          {/* ── Data & Security ── */}
          {activeTab === 'security' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>Briefly describe your security policies.</summary>
                <p><BrandName /> is a firm believer in secure experience and multifaceted security protocols. The application is protected by AWS's firewalls and <BrandName />'s own application firewall protocols. All data including cookies, registry, caches, and running processes are deleted after each session. All machines have strict security protocols prohibiting installation of any external software.</p>
              </details>
              <details><summary>Do you have a disaster recovery (DR) or Business Continuity Plan (BCP)?</summary>
                <p><BrandName /> has a formal BCP and DRP defined and implemented. The BC and DR Plan is tested and reviewed on a yearly basis. Recovery Time Objective (RTO) is 4 hours and Recovery Point Objective (RPO) is under 1 hour.</p>
              </details>
              <details><summary>Do your employees sign/agree to a confidentiality statement?</summary>
                <p>Yes. All our employees sign confidentiality agreements which extends to user agreements between <BrandName /> and Clients.</p>
              </details>
              <details><summary>Do you hold any certifications related to information or system security?</summary>
                <p>Yes, we have Service Organisation Control (SOC2), CCPA and GDPR report compliance certification.</p>
              </details>
              <details><summary>How is your application architected?</summary>
                <p>Our application is microservices-based. Database is restricted from public access. It is only accessible to the application through encrypted authentication-based APIs over a secure private network.</p>
              </details>
              <details><summary>Do you perform web application vulnerability testing or intrusion detection?</summary>
                <p>We periodically test our applications for vulnerability both through automated and manual means. We perform regular audits of databases to check for irregularities.</p>
              </details>
              <details><summary>How do you manage access to production systems?</summary>
                <p>Access to production system is strictly controlled through role-based authentication. No <BrandName /> employee has complete access to all data. After termination we revoke complete access to the application.</p>
              </details>
              <details><summary>How is user data stored? What encryption is used?</summary>
                <p>All user data is stored as encrypted data in secure AWS storage. We use AWS S3 for data storage with advanced 2048bit Public Key encryption for Data at Rest. For Data in transit we use VNC and WSS security protocols.</p>
              </details>
              <details><summary>What is your incident response process?</summary>
                <p>We follow a 6-step incident response process: preparation, identification, containment, eradication, recovery, and learning. We test our response workflow once a month.</p>
              </details>
            </div>
          )}

          {/* ── Plans & Billing ── */}
          {activeTab === 'billing' && (
            <div className={faqStyles.accordionGroup}>
              <details><summary>What do I get with a Free Trial?</summary>
                <p>When you sign up with <BrandName />, you receive 60 mins/month Realtime Browser Testing, 100 Automation Minutes for 15 days, 10 Screenshot Tests per month, 10 Responsive Tests per month, 24x7 Support, and 3rd Party App Integrations.</p>
              </details>
              <details><summary>How does the FREE trial work?</summary>
                <p>When you sign up, you instantly get access to our Freemium plan. This plan has no trial time limit. In the freemium plan you get 60 minutes of <BrandName /> Live testing usage which gets renewed per month.</p>
              </details>
              <details><summary>How can I upgrade my <BrandName /> subscription?</summary>
                <p>You can add more user accounts to your existing plan, or upgrade to another plan from the <a href="https://www.lambdatest.com/pricing">Pricing page</a>. Upgrades can be done any time, and are charged on a prorated basis.</p>
              </details>
              <details><summary>What forms of payment do you accept?</summary>
                <p>We accept all types of credit and debit cards for payment. We also have a PayPal payment method.</p>
              </details>
              <details><summary>Will I get invoice for my subscription?</summary>
                <p>Yes, you will receive the invoice for the subscription opted. Invoice will be sent by default to the email ID used during sign up.</p>
              </details>
              <details><summary>What do you mean by parallel session?</summary>
                <p>Live parallel sessions indicate the number of tests you can conduct at the same time. For example, if you have opted for 2 parallel sessions, two members of your team can execute live testing simultaneously.</p>
              </details>
              <details><summary>Is the pricing based on users or parallel sessions?</summary>
                <p>Pricing is purely based on parallel sessions. User limit is an add-on which comes along with the editions.</p>
              </details>
              <details><summary>Can I upgrade or downgrade my subscription later?</summary>
                <p><BrandName /> price is based on plan level and the number of parallel sessions. You can upgrade and downgrade at any time. However, changes will not take effect until your next billing cycle.</p>
              </details>
              <details><summary>What is an On Demand Pass and how does it work?</summary>
                <p>An On Demand Pass is a one-time payment option. You get 120 Minutes of testing time with full access to <BrandName /> features for 30 days at a price of just $10. This is a non-recurring payment.</p>
              </details>
            </div>
          )}

          <div style={{ height: '80px' }} />
        </main>
      </div>
    </Layout>
  );
}
