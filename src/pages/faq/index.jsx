import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React, { useState } from 'react';
import Layout from '@theme/Layout';
            import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

export default function index() {

  return (

    <Layout title="TestMu AI FAQ Documentation" description="List of frequently asked questions by TestMu AI's users regarding our product offerings. Use them to find instant help on using TestMu AI FAQ Documentation.">
      <div className="col__faq">
        <Tabs
          className="tabs_main"
          defaultValue="realtime"
          values={[
            { label: 'Real Time Testing', value: 'realtime' },
            { label: 'Automation Testing', value: 'automation' },
            { label: 'HyperExecute', value: 'hye' },
            { label: 'Automated Screenshots', value: 'automated' },
            { label: 'Realtime App Testing On Emulators & Simulators', value: 'responsive' },
            { label: 'App & Browser Testing On Real Devices', value: 'realdevice' },
            { label: 'LT Browser', value: 'ltbrowser' },
            { label: 'Data & Security', value: 'security' },
            { label: 'Plans & Billing', value: 'billing' },
          ]}>


          <TabItem value="realtime">
            <details>
              <summary>Would I need to install a software or extension to use <BrandName /> virtual machines?
              </summary>
              <p>No. You don't need to install any software or extension or plugin or setting configurations of any type. Just need to login to <BrandName />, open the virtual machine through launcher, and start testing. That's the beauty of cloud. It gets you started super quick.</p>
            </details>
            <details>
              <summary>Which operating systems, browsers, and browser versions are you providing for cross browser testing?
              </summary>
              <p>There are 3000+ browsers, browser versions, operating systems, devices, and resolutions to choose from. To find out about the complete list of available browsers, check out <a href="https://www.lambdatest.com/list-of-browsers">list of browsers</a> page.</p>
            </details>
            <details>
              <summary>Are the sessions really running on real browsers or are they just emulators?
              </summary>
              <p>All desktop session right now are running on real browsers and operating system and are powered by real machines. Mobile browsers right now are running on both emulators/simulators as well as on real devices.</p>
            </details>
            <details>
              <summary>Why are you running Windows server edition? It is the same as Windows desktop edition?
              </summary>
              <p>Microsoft Windows Desktop Editions licences does not support remote access to users. So we use Windows Server editions and implement Desktop experience in it. It has exactly the same experience as Windows desktop editions and they are running Internet Explorers made for desktop editions.</p>
            </details>
            <details>
              <summary>How much time it takes <BrandName /> to add new browser version when it's released?
              </summary>
              <p>Whenever a new stable browser version is released we usually implement it in our platform within a week. We also test them ourselves first before providing it to customers to make sure that testing experience is optimum for all users.</p>
            </details>
            <details>
              <summary>Are operating systems 32 bit or 64 bit?
              </summary>
              <p>Here are the operating systems and browsers running on 32 Bit Operating systems.

                Windows XP: Internet Explorer 8 , Firefox, Chrome, Safari, Opera Windows 7: Internet Explorer 8, Firefox, Chrome, Safari, Opera

                Here are the operating system and browsers running on 64 Bit operating systems.
                Windows 7: Internet Explorer 10, Firefox, Chrome, Safari, Opera Windows 8: Internet Explorer 10, Firefox, Chrome, Safari, Opera Windows 10: Internet Explorer 11, Firefox, Chrome, Safari, Opera
                All Mac Operating systems run on 64 Bit operating systems.</p>
            </details>
            <details>
              <summary>Which Rich Internet Applications (RIA) would be pre-installed in the browsers?
              </summary>
              <p>All our virtual machines comes with pre-installed latest versions of Adobe Flash, Adobe Shockwave, Adobe Reader, JAVA Runtime Environment, Microsoft Silverlight, and Quicktime.</p>
            </details>
            <details>
              <summary>Would I be able to use keyboard shortcuts like copy paste in remote desktops?
              </summary>
              <p>You would have full access to all keyboard shortcuts. For people using same operating systems on both their local computer and virtual machine won't have any problems. However people who are using Mac machines to access Windows VM or Windows machine to access Mac VM, would have to careful about OS specific shortcuts. For example when working on Mac OS, use Control Key instead of command key for copy pasting.</p>
            </details>
            <details>
              <summary>Would I be able to download and upload files in the remote browser?
              </summary>
              <p>Yes you can. You would have full access to download and upload functionalities. You can access Downloads folder through File - Open file, or Control+O shortcut. Be advised however, each downloaded file will be automatically erased on shutting down the sessions.</p>
            </details>
            <details>
              <summary>Would I be able to change browser settings?
              </summary>
              <p>You would have full access to all browsers settings. Be advised however, if you need very specific browser settings, you would have to re-configure browser settings on starting each new session.</p>
            </details>
            <details>
              <summary>I am not able to properly hear the sound in the virtual machine. What is happening?
              </summary>
              <p>For Chrome and Firefox browsers, you should be able to access audio streaming and therefore should be able to hear sounds properly. For mobile emulators, Internet Explorer, and Safari, we currently dont have support to provide you access to Audio. It's because of the inherent technology involved in these browsers. We are working on a workaround though so let's see.</p>
            </details>
            <details>
              <summary>How many simultaneous sessions can I start using one account?
              </summary>
              <p>In the free plan you can run only one session at a time. Paid plan users can run multiple sessions depending upon their plan. Visit <a href="https://www.lambdatest.com/pricing"><BrandName /> Pricing page</a> to checkout multiple session plans and their pricing.

              </p>
            </details>
            <details>
              <summary>It is showing 'Session Limit reached' error even though I am not running a session.
              </summary>
              <p>The number of sessions is limited by number of sessions running by a organization, not by user. Therefore it is entirely possible that you reach out of session limit even if only one or two users are using <BrandName /> tool. Co-ordinate with your teammates in this case. If you are sure there is session issue from our end, you can raise a ticket at our support portal. Don't worry, we have a very fast turnaround time.</p>
            </details>
            <details>
              <summary>What happens when I leave the session idle?
              </summary>
              <p>By default, if you leave the Lamdatest Live session idle for 5 minutes, the app will prompt a reminder. If no action is taken then <BrandName /> would close the live session. You can change this setting from Live settings options. Checkout this link to understand more about it.</p>
            </details>
            <details>
              <summary>What happens when I switch to another tab in my browser?
              </summary>
              <p>Switching tab won't stop or pause the Live session. If left idle for 5 minutes or more, <BrandName /> will prompt a reminder and if unanswered will close the session.</p>
            </details>
            <details>
              <summary>When you give the machine to somebody else would they be able to access my history and saved passwords?
              </summary>
              <p>The moment you close the session, <BrandName /> automatically sanitize the whole virtual machine. What that means is that we delete all historical data, downloads, installed extensions, saved passwords, etc. We reset the browsers to factory settings. This automatically logs you out of all pages and auto deletes all data that you may have saved. You would still have access to screenshots and issues you may have generated during the session.</p>
            </details>
            <details>
              <summary>Would i have to reset and re-configure browser settings everytime I create a new session?
              </summary>
              <p>Yes! Every time you close a session we would reset all settings. We are working on a way to help you change and save a set of customized default browser settings. If your need is critical and changing browser settings in each new session takes a lot of your time, send us a message from here. We will try to find a solution for you.</p>
            </details>
            <details>
              <summary>It is showing that my IP is blocked. Why did this happen? How do I unblock it?
              </summary>
              <p>There may be a number of reasons why this happened which include

                <BrandName /> test flagged the IP for excessive spam registrations. <BrandName /> flagged the IP for violating terms of use or privacy policy To prevent our system from spam or security threats
                If you think that your IP has been flagged erroneously, raise a ticket at our support centre.</p>
            </details>
            <details>
              <summary>It is showing parallel user limit reached. What does that mean?
              </summary>
              <p><BrandName /> test system allows only a limited number of concurrent running sessions per organization. This limit is defined by the plan that you have subscribed. If you need more concurrent sessions, you can change your plan, or contact one of our sales executive.</p>
            </details>
            <details>
              <summary>I found a bug and now I want to take a screenshot of the webpage running on <BrandName /> real time browser. How can I do that? Where are they saved?
              </summary>
              <p>It's simple. In real time browser, on left side you will find multiple action buttons in the controller. One of them will be a screenshot button with camera icon. Just click that and in no time your screenshot will be recorded. Once recorded, an image editor will pop up where you can edit the screenshot, mark it as a bug and comment about the details. Lastly, you can find them anytime in test logs section of the menu.</p>
            </details>
            <details>
              <summary>How do I report the issue to my team? How can I check the issues created by my organization and team? And can I still report a bug if I am the only one in team?
              </summary>
              <p>By going to the <a href="https://issues.lambdatest.com/">Issue tracker</a>, you can add your teammates as watchers for the particular issue and you can also assign them the issue by marking them as 'assignee'. Incase the team-mate is not added yet, you will also find an option in the tracker to invite them.</p>
            </details>
          </TabItem>
          <TabItem value="developer">
            <details>
              <summary>What developer tools come pre-installed in each <BrandName /> Live remote session browser?
              </summary>
              <p><BrandName /> Live has all major developer debugging tools like Firebug, Web Developer, YSlow etc.</p>
            </details>
            <details>
              <summary>Can I install any additional tool that I like
              </summary>
              <p>Yes! You have full access to browser extensions and therefore can install any additional tool you like. However that tool be deleted once you close the Live session and you would have to reinstall it again in next session to use. If you are facing any problem around installing a tool on browser, raise an issue in <BrandName /> Support portal and we would be glad to help you out.</p>
            </details>
          </TabItem>
          <TabItem value="automation">

            <details>
              <summary>What is WebDriverIO
              </summary>
              <p>WebdriverIO is a browser and automation test framework based in Node.js. Adding helper functions in WebDriverIO is really simple in WebDriverIO. Also, it can run both on WebDriver protocol and Chrome Devtools protocol, making it efficient for both Selenium Webdriver based cross browser testing or Chromium based automation. To top it off, since WebDriverIO is open source, you get a bunch of plugins for your automation needs.</p>
            </details>

            <details>
              <summary>Can I Mark My Test As Pass Or Fail?
              </summary>
              <p>The <BrandName /> Selenium grid doesn’t identify if you test ‘passed’ or ‘failed’. It only identifies whether a test has executed to it’s last command or whether it has stopped/timed-out before it. The user would have to pass on these parameters to <BrandName /> platform to make it possible for tracking these values at <BrandName /> platform. Make use of <BrandName /> API or <BrandName /> Annotations, for pushing additional metadata to <BrandName /> or to track the pass/fail status of a test.</p>
            </details>

            <details>
              <summary>Can I Run Parallel Testing using JUnit Framework?
              </summary>
              <p>Yes! One of the key features of <BrandName /> Selenium grid is the ability to run your test cases in parallel. Which means you can execute numerous automation test cases altogether and enable you to cut down on test times. With <BrandName /> Selenium grid you can run a single test scenario across different browsers or different test scenarios with the same browser (or any other combinations). Wondering how many parallel test cases can you run? That depends entirely on the number of concurrent sessions under your opted plan.</p>
            </details>

            <details>
              <summary>What Is The Maximum Queuing Capacity?
              </summary>
              <p>Maximum number of test cases that can be queued = n + 150 Here, n = number of concurrent sessions. For instance, if you are opting for pricing where you can avail up to 10 concurrent sessions. Then the maximum number of test cases that can be queued will be equal to 10 + 150 i.e. 160 queued test cases. <BrandName /> would automatically schedule and execute test cases for you.

                We have added a capacity constraint on the number of tests that can be queued to prevent over-exploitation of the platform. Refer <BrandName /> Queuing Policy to know more.</p>
            </details>

            <details>
              <summary>How Many Parallel Sessions Do I Need?
              </summary>
              <p><a href="https://www.lambdatest.com/concurrency-calculator/"><BrandName /> Concurrency Calculator</a> is here to help you calculate the number of parallel sessions you need for your test coverage. Feed the information to our Concurrency Calculator, and it would suggest to you the appropriate number of parallel sessions.</p>
            </details>

            <details>
              <summary>What is Live interaction?
              </summary>
              <p>By using Live-Interaction, you can take over the automation test execution manually. You can abort the automation test session and debug in real-time.</p>
            </details>

            <details>
              <summary>What is the pre-requisite for Live interaction?
              </summary>
              <p>You should be on five parallel sessions or above.</p>
            </details>

            <details>
              <summary>How can I access Live interaction while running an automation test?
              </summary>
              <p>To interact with a browser manually in an automation test, you can visit the <BrandName /> Automation dashboard and then click on <b>Click to view live test</b> to take control of the browser.
              </p>
            </details>



            <details>
              <summary>Is there any maximum time limit for Live interaction?
              </summary>
              <p>The maximum time limit for Live interaction is 15 minutes.

              </p>
            </details>



            <details>
              <summary>What platforms are available for Live interaction?
              </summary>
              <p>The Live interaction is accessible across all browsers except Safari for Windows 11, 10, 8.1, and 8, and macOS Big Sur. <br /><b>Note:</b> <i>The Live interaction support on Safari browsers will be available soon.</i></p>
            </details>

            <details>
              <summary>What would be the status of a test involving Live interaction?
              </summary>
              <p>The status of the test changes to `idle_timeout`` if you abort it using Live interaction.</p>
            </details>

            <details>
              <summary>Does idle_timeout capability work with Live interaction?
              </summary>
              <p>Once you access Live interaction, and abort a test, the test will time out within one minute if no keyboard or mouse events are recorded on your respective machine.</p>
            </details>

            <details>
              <summary>Is there any limit on how many tests can be accessed for Live interaction?
              </summary>
              <p>In this case, there is no such limit.</p>
            </details>

          </TabItem>
          <TabItem value="hye">
            <Tabs
              className="hyperexecute"
              defaultValue="gen"
              values={[
                { label: 'General FAQs', value: 'gen' },
                { label: 'YAML FAQs', value: 'yaml' },
                { label: 'CLI FAQs', value: 'cli' },
                { label: 'Features FAQs', value: 'feat' },
                { label: 'Platform FAQs', value: 'plat' },
                { label: 'Pricing FAQs', value: 'price' },
                { label: 'Security FAQs', value: 'sec' },
                { label: 'Enterprise FAQs', value: 'ent' },
              ]}>
              <TabItem value="gen">
                <details>
                  <summary>Which testing frameworks does HyperExecute support?
                  </summary>
                  <p>Though HyperExecute has a <a href='https://www.lambdatest.com/support/docs/hyperexecute-supported-languages-and-frameworks/'>very deep support</a> for Selenium, Cypress, Playwright, CDP, Taiko and other web browser testing frameworks, nothing stops it from running any other tests over the HyperExecute platform using YAML. Core orchestration features and real time logs are native to the platform and will be available over any kind of testing.</p>
                </details>
                <details>
                  <summary>Can I run a specific command before running tests on HyperExecute?
                  </summary>
                  <p>HyperExecute provides you with smart CI features where you can run any command before and after running tests using pre and post steps. Common use cases include, building/ compiling binaries, downloading dependencies, starting services in the background or any other arbitrary command.</p>
                </details>
                <details>
                  <summary>Where will HyperExecute run my tests?
                  </summary>
                  <p>HyperExecute takes your test scripts and places them in virtual machines having all the components required to run your tests and collect logs and metrics. These virtual machines are hosted by HyperExecute in its secure cloud environment. HyperExecute is also available on dedicated and private clouds where virtual machines can run in your personal cloud accounts.</p>
                </details>
                <details>
                  <summary>How to use HyperExecute?
                  </summary>
                  <p>Tests are triggered on HyperExecute using HyperExecute CLI using a YAML file to configure the executing settings including target OS, concurrency and other CI level information. This YAML file can be generated easily using a web based YAML generator that supports multiple languages and frameworks. As a user you need to focus on writing tests and running the CLI with YAML, everything else is taken care of by the orchestration platform.</p>
                </details>
                <details>
                  <summary>Why is HyperExecute faster than other end to end testing platforms?
                  </summary>
                  <p>Traditional end to end testing platforms add a lot of latency in test execution due to the fragmented components by adding multiple hops. Each and every request has to travel through multiple hops before it can be served by the application under test. This doesn’t just slow tests down, but adds a lot of platform-induced flakiness. HyperExecute puts all the components and the test script in a single isolated environment to run the tests in the fastest and the most efficient way.</p>
                </details>
                <details>
                  <summary>How does HyperExecute help me debug my tests faster?
                  </summary>
                  <p>HyperExecute collects every possible log, including terminal logs, selenium and more (for every single test), and stores them separately from each other. These isolated logs ensure that the end user is not spending time in filtering useful logs and focuses on getting the insights from the logs as fast as possible. HyperExecute also streams these test logs in real time to drastically reduce time wasted in debugging failed tests.</p>
                </details>
                <details>
                  <summary>Does HyperExecute provide the ability to store test artifacts?
                  </summary>
                  <p>Yes, HyperExecute provides convenient artifact management where you can upload test artifacts or any files or folders generated during test execution. These artifacts are stored on HyperExecute. HyperExecute exposes APIs to access these as well.</p>
                </details>
                <details>
                  <summary>Can I run parallel tests using HyperExecute?
                  </summary>
                  <p>Absolutely, HyperExecute’s core feature is to provide a massively parallel testing infrastructure where the platform intelligently distributes tests across multiple nodes.</p>
                </details>
                <details>
                  <summary>What are the configurations for HyperExecute virtual machines?
                  </summary>
                  <p>HyperExecute provides a generous configuration for virtual machines to run your tests. Windows comes with 7 GB of memory and 4 cores of processors, Linux comes with 4 GB of memory and 2 cores of processors, Mac comes with 7 GB of memory and 4 cores of processors. HyperExecute also provides the ability to customize the execution environment for enterprise accounts.</p>
                </details>
                <details>
                  <summary>Can I group my tests to run in sequence instead of randomly distributing them?
                  </summary>
                  <p>Yes, HyperExecute provides directives to group dependent tests together which need to run in sequence. Using dynamic test discovery, users can write unique test discovery commands for every node, where dependent tests will run in sequence. HyperExecute allows various directives to construct sophisticated testing pipelines to fulfill your use cases.</p>
                </details>
                <details>
                  <summary>In which regions does HyperExecute provide its testing infrastructure?
                  </summary>
                  <p>HyperExecute is available in more than 40 cloud availability regions across the globe. HyperExecute is supported by multiple hyper clouds which makes it available in most of the availability zones across the globe.</p>
                </details>
              </TabItem>
              <TabItem value="yaml">
                <details>
                  <summary>What can I do with pre steps and post steps in the YAML file?
                  </summary>
                  <p>Pre and post steps open doors to large amounts of flexibility. You can add certificates just before running tests, start a background process to facilitate testing, compile applications, download dependencies and everything else that you need to do just before and after running your tests in the CI or your system.</p>
                </details>
                <details>
                  <summary>How can I install private artifactory dependencies that can only be accessed on my organization’s internal network on HyperExecute Machines?
                  </summary>
                  <p>You can use a tunnel to connect with your organization's private network with the HyperExecute machines. You can do this by <a href='https://www.lambdatest.com/support/docs/hyperexecute-yaml-faqs/#3-how-can-i-install-private-artifactory-dependencies-that-can-only-be-accessed-on-my-organizations-internal-network-on-hyperexecute-machines'>setting the tunnel flag to true </a> in HyperExecute’s YAML file.</p>
                </details>
                <details>
                  <summary>How can I use the Jenkins job choice parameters in the YAML file?
                  </summary>
                  <p>You can do this by <a href='https://www.lambdatest.com/support/docs/hyperexecute-yaml-faqs/#8-how-can-i-use-the-jenkins-job-choice-parameters-in-the-yaml-file'>directly calling the parameter keys</a> in the HyperExecute YAML file and use the Jenkins choice parameters.</p>
                </details>
                <details>
                  <summary>I run a lot of tests with the same YAML configurations. Is there any way where I can run my tests without specifying the same configurations over and over again?
                  </summary>
                  <p>You can solve this problem by using HyperExecute's inheritance feature. This feature allows you to inherit the configurations of a base YAML file and saves you the time of configuring the YAML file multiple times. To learn more about how to use this feature, go through <a href='https://www.lambdatest.com/support/docs/hyperexecute-inherit-config/'>this page</a>.</p>
                </details>
                <details>
                  <summary>I want to test the code in my Git repository. Is there a way where I can accomplish that with HyperExecute?
                  </summary>
                  <p>You can use the "sourcePayload" flag to use HyperExecute's Yaml. With this, your test code is directly sourced from your Git provider with the help of secure access tokens and only your HyperExecute YAML file is encrypted and uploaded through the HyperExecute CLI. To learn more about how this feature works, go through <a href='https://www.lambdatest.com/support/docs/hyperexecute-how-to-configure-sourcePayload/'>this page</a>.</p>
                </details>
              </TabItem>
              <TabItem value="cli">
                <details>
                  <summary>Can HyperExecute CLI download test artifacts generated during execution?
                  </summary>
                  <p>Yes, HyperExecute can download the artifacts generated during the test execution. In addition, HyperExecute has APIs to download artifacts for a particular job.</p>
                </details>
                <details>
                  <summary>I am not able to open HyperExecute on MacOS because the developer is not verified. What do I do?
                  </summary>
                  <p>The binary for Mac is unsigned. You might get a permission denied warning while executing HyperExecute on macOS and linux machines. To allow permissions you can use the following command: "chmod u+x ./hyperexecute". Thus, you might see a security popup on whether to allow the execution of the tool or not. You can allow it from your System Preferences → Security & Privacy → General tab.</p>
                </details>
                <details>
                  <summary>Is there a way where I can follow all of the steps in my test run on HyperExecute?
                  </summary>
                  <p>Every time you run a test via the HyperExecute CLI, a hyperexecute-cli.log file is generated. It is present in the parent directory of your test and contains the details of your entire test run. This hyperexecute-cli.log file will also help you in debugging any issues with your tests. You can view the file and figure out exactly where your test run failed. If you want more help with debugging your issues, you can always contact support@testmu.ai and provide them with this file along with your Job ID.</p>
                </details>
              </TabItem>
              <TabItem value="feat">
                <details>
                  <summary>What smart CI features does HyperExecute provide?
                  </summary>
                  <p>HyperExecute provides you with the option to run pre and post steps that allow users to run any command before and after running tests on every VM, define custom environment variables, deep dependency caching, pick a specific version of language runtimes, artifacts management, and more. HyperExecute allows you to move your sophisticated pipelines for end to end testing completely. Triggering and execution of tests happens entirely on HyperExecute infrastructure and frees your CI or local system to do other meaningful tasks.</p>
                </details>
                <details>
                  <summary>Can I test my private web applications on HyperExecute?
                  </summary>
                  <p>Absolutely. HyperExecute allows multiple provisions to test private applications by the following directives: automatically running tunnels using the CLI, and by creating dedicated NAT for organizations that can be whitelisted by their firewalls. We have users who are able to run VPN clients in the pre steps before starting their tests which allows them to securely connect to their private workloads.</p>
                </details>
                <details>
                  <summary>Can I do geolocation testing on HyperExecute?
                  </summary>
                  <p>Yes, HyperExecute provides geolocation testing by providing capabilities in selenium, playwright, and cypress tests. All the geolocation testing features available on the standard platform are available on HyperExecute.</p>
                </details>
                <details>
                  <summary>Can HyperExecute run my tests on virtual machines with custom specifications?
                  </summary>
                  <p>Yes, with the enterprise version, HyperExecute provides directives to use custom virtual machines based on the HyperExecute base virtual machine image. This allows for greater flexibility to run customer frameworks.</p>
                </details>
                <details>
                  <summary>How is HyperExecute different from other testing clouds?
                  </summary>
                  <p>While other testing platforms throw infrastructure at the users to run their tests, HyperExecute is a smart orchestration cloud where the platform decides the best execution plan to finish the jobs in the least amount of time. HyperExecute accomplishes this by distributing tests smartly on available resources, providing other features, such as, retrying failed scenarios, automatic reordering and more. HyperExecute acts as a co-pilot for developers to run and triage their tests as fast as possible.</p>
                </details>

              </TabItem>
              <TabItem value="plat">
                <details>
                  <summary>What OS does HyperExecute provide to execute tests?
                  </summary>
                  <p>HyperExecute provides the latest Windows, MacOS and Linux based virtual machines to run your tests. HyperExecute supports multiple versions of Windows, Linux and MacOS.</p>
                </details>
                <details>
                  <summary>What browsers are available on HyperExecute to run cross browsers tests?
                  </summary>
                  <p>HyperExecute provides all the versions of Chrome, Firefox, Edge, Opera, and Safari (Mac only) available to run on the latest windows, MacOS and linux versions.</p>
                </details>
                <details>
                  <summary>Is HyperExecute available as an on-prem tool?
                  </summary>
                  <p>Yes, HyperExecute is available as a dedicated cloud and on-prem mode option on Azure, AWS and GCP.</p>
                </details>
                <details>
                  <summary>What analytics does HyperExecute provide for test execution?
                  </summary>
                  <p>HyperExecute provides fine-grained analytics over test steps, jobs, browser trends, consistently failing tests and error categorizations, and a lot more in the analytics dashboard. In addition to this, it provides a detailed downloadable html report for every job triggered. This report can be downloaded by the CLI after the job is completed or via the reports API.</p>
                </details>
                <details>
                  <summary>Can I access the file system while running my tests?
                  </summary>
                  <p>Yes, with HyperExecute you get access to all the underlying virtual machines to completely customize the testing environment. Generating or reading files for your test case is very convenient with HyperExecute.</p>
                </details>
                <details>
                  <summary>Do I have access to the underlying OS while running tests?
                  </summary>
                  <p>Yes, with HyperExecute, you get access to all the underlying virtual machines to completely customize the testing environment. Some good use cases of this are changing registry settings, downloading files, starting processes and more.</p>
                </details>
                <details>
                  <summary>Can I customize the testing environment?
                  </summary>
                  <p>Yes, with HyperExecute, you can completely customize the test environment using pre and post steps in the YAML. For enterprise accounts, HyperExecute provides the ability to define custom virtual machine images for all the OS for deeper level customizations to the testing environments. Enterprise customers can create their own customized virtual machine images over HyperExecute base images as per their use case.</p>
                </details>
                <details>
                  <summary>Can I create custom virtual machine images for my testing?
                  </summary>
                  <p>Yes. It’s very easy to integrate HyperExecute with your reporting tool by hitting their APIs in the post-steps using the YAML. HyperExecute is also bringing more integrations with popular reporting tools. You can request new integrations by emailing us at hyperexecute@lambdatest.com.</p>
                </details>

              </TabItem>
              <TabItem value="price">
                <details>
                  <summary>Is there any limit on parallel testing on HyperExecute?
                  </summary>
                  <p>No, HyperExecute can provide virtually unlimited nodes to you for massive parallel testing as it is backed and spanned across multiple clouds. We have users distributing tests across thousands of nodes.</p>
                </details>
                <details>
                  <summary>How does the licensing for HyperExecute work?
                  </summary>
                  <p>Each parallel test execution consumes a single HyperExecute license. For example, if you want to run 50 tests in parallel, you need 50 HyperExecute licenses. If you have 10 HyperExecute licenses and trigger 50 tests, only 10 will run in parallel and the rest 40 will be queued by the platform. Once every test finishes the execution, it will be dequeued and moved to the running state.</p>
                </details>
                <details>
                  <summary>How many parallel tests can I run on a single HyperExecute license?
                  </summary>
                  <p>Each parallel test execution consumes a single HyperExecute license. HyperExecute puts no capping on the number of parallel tests that can run simultaneously. We have users running thousands of tests in parallel.</p>
                </details>
                <details>
                  <summary>Can I use the standard <BrandName /> automation platform with the HyperExecute license?
                  </summary>
                  <p>Each HyperExecute license provides access to standard automation platforms and features. This makes transitioning to HyperExecute easier and makes sure that the best cross-browser platform features are still available to users purchasing a HyperExecute license.</p>
                </details>
              </TabItem>
              <TabItem value="sec">
                <details>
                  <summary>How secure is HyperExecute?
                  </summary>
                  <p>HyperExecute is built with security at its core and provides industry standard security on the entire infrastructure. HyperExecute provides fresh virtual machines every time a new job is triggered and deletes the infrastructure after the test execution of the job is completed. Dozens of microservices ensure that test scripts are deleted after the retention period and uniquely encrypted during their retention period. HyperExecute uses a powerful vault to store client side secrets for the users. Enterprise version enables users to add their own security policies over the HyperExecute infrastructure.</p>
                </details>
                <details>
                  <summary>Does HyperExecute provide the ability to define secrets?
                  </summary>
                  <p>Yes, HyperExecute provides a vault service to securely store client side secrets instead of hardcoding them in the yaml or test script files. In enterprise versions, organizations can pick the vault of their choice.</p>
                </details>
                <details>
                  <summary>What’s the retention period of logs on HyperExecute?
                  </summary>
                  <p>By default, HyperExecute has a retention period of 60 days where it keeps records and test execution logs. After the retention period, the logs and records are deleted permanently. Enterprise version allows a custom retention period to be defined.</p>
                </details>
                <details>
                  <summary>How do I download private dependencies on HyperExecute?
                  </summary>
                  <p>HyperExecute provides multiple methods to connect to private artifactories and private package modules using automatic tunnel, dedicated NAT and using pre-steps to use VPN. Users usually add their private package management keys in the HyperExecute vault to fetch private repositories.</p>
                </details>

              </TabItem>
              <TabItem value="ent">
                <details>
                  <summary>Does HyperExecute provide enterprise level features?
                  </summary>
                  <p>HyperExecute provides you with the best in class enterprise features including SSO, dedicated chat support, on-prem and dedicated cloud setups, custom retention period, usage analytics, advance access control, workflow management, and much more.</p>
                </details>
                <details>
                  <summary>Can I use my own vault for testing with HyperExecute?
                  </summary>
                  <p>Yes, HyperExecute enterprise version allows organizations to integrate their custom vaults with the HyperExecute testing infrastructure for greater flexibility.</p>
                </details>

              </TabItem>
            </Tabs>
          </TabItem>
          <TabItem value="automated">

            <details>
              <summary>What resolutions, browsers, operating systems and devices are supported by the <BrandName /> Automated Screenshot testing?
              </summary>
              <p>To know more about browsers, OS, and devices supported by <BrandName /> Automated Screenshot testinf, checkout <a href="https://www.lambdatest.com/list-of-browsers">list of browsers</a> page.
              </p>
            </details>
            <details>
              <summary>Can I share these screenshots with my team?
              </summary>
              <p>Yes. You can share these screenshots with your team. To know more about how you can do it, check out this tutorial guide on <a href="https://www.lambdatest.com/support/docs/automated-screenshot-testing/">Automated Screenshot testing</a>.</p>
            </details>
            <details>
              <summary>Is there anyway I can take screenshot of pages behind firewall or authenticated pages?
              </summary>
              <p><BrandName /> comes with enterprise level local tunneling features. You can connect your local or production servers with <BrandName /> Servers via secure SSH protocols and test your secure pages easily.</p>
            </details>
            <details>
              <summary>What happens when I switch tabs during when screenshots are being generated?
              </summary>
              <p><BrandName /> won't stop or pause the screenshot generation process. <BrandName /> Automated Screenshot feature will generate screenshots and then will wait for your further actions.</p>
            </details>
          </TabItem>
          <TabItem value="responsive">

            <details>
              <summary>What type of file formats does <BrandName /> Realtime Native App testing support??
              </summary>
              <p>Currently, we support the following file formats for Realtime Native Mobile App testing:
                <ul>
                  <li>For iOS, <code>.app </code>and <code>.zip</code> format.</li>
                  <li>For Android-x86, <code>.apk</code> format.</li>
                </ul>
              </p>
            </details>
            <details>
              <summary>Can I test apps from Google Play Store/App Store on emulators/simulators?
              </summary>
              <p>Currently, we don’t support the testing of apps from the Google Play Store/App Store on emulators/simulators.</p>
            </details>

            <details>
              <summary>Can I test ipa file on Realtime Native App testing?
              </summary>
              <p>For now, we don’t support ipa files on iOS simulators.</p>
            </details>
            <details>
              <summary>What privileges do I get with the freemium plan?
              </summary>
              <p>As a part of the freemium plan, you get one-time, non-renewable access to a limited set of devices (emulators and simulators). It limits to a maximum of 5 app uploads and 100 free minutes.</p>
            </details>
            <details>
              <summary>Can I access the camera and the mic on emulators/simulators?
              </summary>
              <p>Accessing hardware peripherals like camera and mic is currently not supported on emulators/simulators.</p>
            </details>

            <details>
              <summary>Do you support gestures like pinch to zoom in, double tap on emulators/simulators?
              </summary>
              <p>Gesture is currently not supported on emulators/simulators.</p>
            </details>
            <details>
              <summary>Can I use Developer Tools for Realtime Native App testing?
              </summary>
              <p>Yes! you can use Developer Tools for viewing the device logs, network logs, and app logs. Inspect element is currently not available on emulators/simulators.</p>
            </details>
            <details>
              <summary>Why I am getting ‘App Not Found error’ ?
              </summary>
              <p>As ipa files are not supported on iOS simulators, you would encounter ‘App Not Found error’.</p>
            </details>
            <details>
              <summary>Can I test my app that uses dependent app (e.g. Google Maps) using Realtime Native App testing?
              </summary>
              <p>You need to install the app being tested and the dependent app (e.g. Google Maps) in the same session.</p>
            </details>
            <details>
              <summary>How long does my app remain uploaded on <BrandName /> cloud?
              </summary>
              <p>As per our data retention policy, all uploaded apps will be deleted after sixty days.</p>
            </details>
            <details>
              <summary>Which architecture do you support for <code>.apk</code> file for App testing?
              </summary>
              <p>Emulators on which App testing is performed work on the x86 architecture. Hence, your .apk file should be built for x86 architecture to ensure seamless testing on <BrandName /> platform.</p>
            </details>
            <details>
              <summary>Which plan do I need to buy to get access to Realtime Native App testing?
              </summary>
              <p>Any premium plan will allow you to test apps on emulators/simulators. The number of parallel sessions will depend on your parallel session plan. Refer to our <a href="https://www.lambdatest.com/pricing">plans and pricing</a>  page for further information.</p>
            </details>
            <details>
              <summary>Does On-demand pass covers access to Realtime Native App testing on emulators/simulators?
              </summary>
              <p>Through On-demand pass you can get 120 minutes of manual testing time on <BrandName /> platform at $10 for 30 days. Currently, On-demand pass is not covered for Realtime Native App testing.</p>
            </details>
            <details>
              <summary>How does the concurrency for Realtime Native App testing works?
              </summary>
              <p>You need not opt for a seperate App Testing Plan, as parallelism (or concurrency) for app testing is synced with Realtime Browser testing. To run native mobile app tests parallely (or concurrently) with Realtime Browser testing, you need to ‘at least’ be on a two (or more) parallel session plan.</p>
            </details>
          </TabItem>

          <TabItem value="realdevice">

            <details>
              <summary>What type of file formats does <BrandName /> App testing on real devices support?
              </summary>
              <p>Currently, we support the following file formats for App testing on real devices:
                <ul>
                  <li>For iOS, <code>.ipa </code> format.</li>
                  <li>For Android, <code>.apk</code> and <code> .aab</code> format.</li>
                </ul>
              </p>
            </details>
            <details>
              <summary>Do I need to use <code>appreset</code> or <code>fullReset</code> capability while performing App testing on real devices?
              </summary>
              <p>No! Following each test session, the devices are thoroughly cleaned. During this phase, we uninstall the app and clear the user data and configurations generated on the device during the test session.</p>
            </details>

            <details>
              <summary>What test automation frameworks are supported by <BrandName /> for App automation?
              </summary>
              <p>Currently, we support Appium framework. However, support for other frameworks will be rolled out soon </p>
            </details>
            <details>
              <summary>Do you support QR code scanning of apps?
              </summary>
              <p>Currently, we don’t support the QR code scanning of apps on real devices.
              </p>
            </details>
            <details>
              <summary>Can I test biometric authentication like Fingerprint sensor, Face ID?
              </summary>
              <p>Accessing hardware sensors for biometric authentication is currently not supported on real devices.</p>
            </details>

            
            <details>
              <summary>How do I access camera for capturing the images?
              </summary>
              <p>The app file <code>.apk</code> can be generated using the command → <code>./gradlew assemble</code> which saves the generated file in this directory → <code>app/build/outputs/apk/debug/</code>. The Test Suite file .apk can be generated using the command → <code>./gradlew assembleAndroidTest</code> which saves the generated file in this directory → app/build/outputs/apk/androidTest/debug/</p>
            </details>


            <details>
              <summary>Can I monitor network traffic using Charles Proxy?
              </summary>
              <p>Currently, the Charles proxy for network traffic monitoring is not supported on <BrandName />.</p>
            </details>
            <details>
              <summary>What logs are available for debugging test failures ?
              </summary>
              <p>For debugging test failures, <BrandName /> App testing supports Appium logs, Visual logs, Device logs, Network logs, and Command logs.</p>
            </details>
            <details>
              <summary>How can I test locally hosted or private app URLs?
              </summary>
              <p>You can test locally hosted and apps behind firewall by performing local testing through <BrandName /> tunnel.</p>
            </details>
            <details>
              <summary>Do you support Network throttling?
              </summary>
              <p>Yes. Network throttling is supported on <BrandName /> real device cloud platform.</p>
            </details>
            <details>
              <summary>Can I simulate GPS location while performing Geolocation testing?
              </summary>
              <p>Yes! You can test location-based cases for your app with GPS Geolocation testing.</p>
            </details>
            <details>
              <summary>Can I select the subversions for Android and iOS while testing on real devices?
              </summary>
              <p>No! Only major versions of the Android and iOS are supported.</p>
            </details>
            <details>
              <summary>Do you support browser version on real devices?
              </summary>
              <p>We provide the latest browser versions on real devices. However, the choice for browser versions like Chrome 94 or Firefox sub-versions are not available.</p>
            </details>
            <details>
              <summary>What developer tools are supported for Browser testing?
              </summary>
              <p>We support the following developer tools for Browser testing:
                <ul>
                  <li>Android - Chrome</li>
                  <li>iOS - Safari and Chrome</li>
                </ul>

              </p>
            </details>

            <details>
              <summary>How do I test SMS verification and OTP based scenarios?
              </summary>
              <p>Currently, our real devices do not support SIM cards/eSIM. Therefore, phone calls or SMS cannot be received on the device. You can test OTP-based cases, but the SIM card must be present and accessible to the user in their local device.</p>

            </details>

            <details>
              <summary>Can I view App profiling data for resource consumption?
              </summary>
              <p>Currently, App profiling data on real devices are not supported </p>

            </details>

            <details>
              <summary>Can I test in-app browsers and Hybrid apps?
              </summary>
              <p>Yes, you can test both in-app browsers and Hybrid apps on our real device cloud.</p>

            </details>

            <details>
              <summary>Do you support private or dedicated devices for an organzation/account?
              </summary>
              <p>As of now, the dedicated devices are not supported on the <BrandName /> platform.</p>

            </details>

            <details>
              <summary>Do you support App Automation on Emulators and Simulators?
              </summary>
              <p>Currently, we don't support Mobile App automation on Emulators and Simulators.</p>

            </details>

            <details>
              <summary>What is the maximum session duration of Appium tests?
              </summary>
              <p>The maximum session duration of Appium tests is 4 hours.</p>

            </details>

            <details>
              <summary>How do I upload files from the app installed on devices?
              </summary>
              <p>As of now, we don't support uploading files from the app installed on real devices.</p>

            </details>

            <details>
              <summary>Can I upload and download files while perform Manual App testing?
              </summary>
              <p>Currently, we don't support uploading and downloading files while perform Manual App testing on real devices.</p>
            </details>

            <details>
              <summary>How to open pre-installed apps?
              </summary>
              <p>To open the pre-installed apps, run the below command.<br />
                <code>driver.activateApp("package_name");</code>
              </p>
            </details>

            <details>
              <summary>Why I can't see the apps inside Google Playstore on Android?
              </summary>
              <p>To see the apps, you will need to login on the Google Playstore.
              </p>
            </details>

            <details>
              <summary>My app requires access to Apple Pay. Can I test this on real devices?
              </summary>
              <p>As of now, Apple Pay functionality is not supported on real devices.
              </p>
            </details>

            <details>
              <summary>Do you support Performance testing frameworks for App automation?
              </summary>
              <p>Currently, we don't support Performance testing frameworks.
              </p>
            </details>

            <details>
              <summary>Can I test my captive portal browsers?
              </summary>
              <p>If the captive portal requires the device to be connected to a specific WiFi network, you cannot test it on real devices. However, if the same webpage can be accessed using the default WiFi network or tunnel, you can test it on real devices.
              </p>
            </details>

            <details>
              <summary>What is ADB? Does <BrandName /> support ADB commands execution?
              </summary>
              <p>ADB (Android debug bridge) is a command-line tool for communicating with Android devices. The ADB command enables a variety of device actions, like installing apps, granting permissions, copying files, performance profiling, and so on.<br />We do not expose the ADB shell to protect the security of devices and users. However, the same functionality can be achieved by using an equivalent Appium capability or <BrandName /> customer capabilities.
              </p>
            </details>

            <details>
              <summary>Can I interact with the app permission popups during Manual testing on iOS devices?
              </summary>
              <p>Yes, you can interact with the <i>alert</i> or <i>actionSheet</i> popups that are configured in your iOS application.
              </p>
            </details>

            <details>
              <summary>How can I generate "app_url" using the cURL command?
              </summary>
              <p>To generate "app_url" using the cURL command, please refer to our <a href="https://www.lambdatest.com/support/docs/getting-started-with-appium-testing/#step-1-upload-your-application">Appium testing documentation</a>.
              </p>
            </details>

            <details>
              <summary>How do I resolve the localhost URL when using the <BrandName /> tunnel?
              </summary>
              <p>For resolving the localhost URL for the real device, you can use <code>localhost.lambdatest.com</code>.
              </p>
            </details>

            <details>
              <summary>How long are screenshots retained on our system?
              </summary>
              <p>60 days
              </p>
            </details>

            <details>
              <summary>Why can't I see the password entered into my iOS device?
              </summary>
              <p>For iOS 13 and above, Apple prevents the streaming of the keyboard and the streaming of the password field whenever a password is being entered. This is part of its enhanced security features. Therefore, even if the password is entered successfully, you will not be able to see the keyboard, keystrokes, or characters entering the password.
              </p>
            </details>


            <details>
              <summary>How can I generate "app_url" using the cURL command?
              </summary>
              <p>To generate "app_url" using the cURL command, please refer to our <a href="https://www.lambdatest.com/support/docs/getting-started-with-appium-testing/#step-1-upload-your-application">Appium testing documentation</a>.
              </p>
            </details>

            <details>
              <summary>How do I resolve the localhost URL when using the <BrandName /> tunnel?
              </summary>
              <p>For resolving the localhost URL for the real device, you can use <code>localhost.lambdatest.com</code>.
              </p>
            </details>

            <details>
              <summary>How long are screenshots retained on our system?
              </summary>
              <p>60 days
              </p>
            </details>

            <details>
              <summary>Why can't I see the password entered into my iOS device?
              </summary>
              <p>For iOS 13 and above, Apple prevents the streaming of the keyboard and the streaming of the password field whenever a password is being entered. This is part of its enhanced security features. Therefore, even if the password is entered successfully, you will not be able to see the keyboard, keystrokes, or characters entering the password.
              </p>
            </details>

            <details>
              <summary>Why am I encountering Network log issues when performing App automation?
              </summary>
              <p>Network logs on Real Devices and specifically on Android devices have some known limitations. Enhancements are currently under development and will be communicated to you based on your use cases.
              </p>
            </details>

            <details>
              <summary>How can I generate "app_url" using the cURL command?
              </summary>
              <p>To generate "app_url" using the cURL command, please refer to our <a href="https://www.lambdatest.com/support/docs/getting-started-with-appium-testing/#step-1-upload-your-application">Appium testing documentation</a>.
              </p>
            </details>

            <details>
              <summary>How do I resolve the localhost URL when using the <BrandName /> tunnel?
              </summary>
              <p>For resolving the localhost URL for the real device, you can use <code>localhost.lambdatest.com</code>.
              </p>
            </details>

            <details>
              <summary>How long are screenshots retained on our system?
              </summary>
              <p>60 days
              </p>
            </details>

            <details>
              <summary>Why can't I see the password entered into my iOS device?
              </summary>
              <p>For iOS 13 and above, Apple prevents the streaming of the keyboard and the streaming of the password field whenever a password is being entered. This is part of its enhanced security features. Therefore, even if the password is entered successfully, you will not be able to see the keyboard, keystrokes, or characters entering the password.
              </p>
            </details>

            <details>
              <summary>Why am I encountering Network log issues when performing App automation?
              </summary>
              <p>Network logs on Real Devices and specifically on Android devices have some known limitations. Enhancements are currently under development and will be communicated to you based on your use cases.
              </p>
            </details>

            <details>
              <summary>What different types of logs are supported on real devices?
              </summary>
              <p>We currently support Appium logs, Visual logs, Device logs, Network logs, and Command logs on real devices.
              </p>
            </details>

            <details>
              <summary>How do I compile the Test Suite as an apk in Espresso app automation?
              </summary>
              <p>The app file <code>.apk</code> can be generated with the command <code>./gradlew assemble</code>, which saves the generated file in the directory <code>app/build/outputs/apk/debug/</code><br />. The Test Suite file <code>.apk</code> can be generated using the command <code>./gradlew assembleAndroidTest</code>, which saves the file in the directory <code>app/build/outputs/apk/androidTest/debug</code>.
              </p>
            </details>

            <details>
              <summary>How long a test session can run on each device?
              </summary>
              <p>You can run test for 6 hrs uninterrupted on a device.
              </p>
            </details>

            <details>
              <summary>How can we trigger long press gesture on real-time testing?
              </summary>
              <p>For Android, long press can be accessed by intimating long press on your mouse/trackpad. For iOS, the action can be triggered via CMD+click for macOS and via CTRL+ click for Windows.
              </p>
            </details>

          

            <details>
              <summary>How long does it take to take to add support for new device?
              </summary>
              <p>The new device addition requests can be catered to in 6-8 weeks’ time.
              </p>
            </details>



            <details>
              <summary>Can I test my smart device (similar to Amazon Alexa) on <BrandName /> platform with Real device? Also, I would need to connect this smart device with the Bluetooth of your mobile devices. Is this applicable?
              </summary>
              <p>This use case is not feasible at the moment as we do not support testing of Smart devices(Amazon Alexa) on the <BrandName /> platform.
              </p>
            </details>

            <details>
              <summary>Can I test video calls on <BrandName /> real devices?
              </summary>
              <p>Yes, you can test video calling apps on <BrandName />'s Real Devices but as the Camera is taped due to security reasons so it will show black image and audio will be blank as well.
              </p>
            </details>

            <details>
              <summary>Does your public cloud plan offer access to iOS device settings?
              </summary>
              <p>As of now, accessing settings on iOS is restricted with the public cloud plan. However, you can access iOS device settings with our private cloud plan.
              </p>
            </details>


            <details>
              <summary>How I can handle the location pop-up on iOS devices?
              </summary>
              <p>In order to handle the location pop-up, you can use below capability in the script and the location will be auto handle in the test.<br/>
              
              <code>caps.setCapability("autoAcceptAlerts", true);</code> <br/><br/>
              
              Please note that <code>autoAcceptAlerts: true</code> won't work on iOS devices with iOS 14. This is a <a href="https://github.com/appium/appium/issues/14741">known issue</a> and already raised on Appium.<br/><br/>

  <b>Note</b>: For iOS 13 and above, pop-ups can have more than two buttons. When there are more than two buttons on popups, autoDismissAlerts and autoAcceptAlerts behavior is flipped. For such popups, use autoAcceptAlerts to automatically dismiss all popups and autoDismissAlerts to automatically accept all popups.
              </p>
            </details>


          </TabItem>

          <TabItem value="ltbrowser">
            <details>
              <summary>Can I record video of a test session?
              </summary>
              <p>Yes. Open you website in any device and click on the video recording button, a timer will start and you will be able to record your interaction of the website within the device. The timer will continue to run unless you stop the recording by clicking over the same video recording button.
              </p>
            </details>

            <details>
              <summary>Can I test locally hosted websites using LT Browser?
              </summary>
              <p>Yes. All you need to do for testing your locally hosted web-apps or websites, is to provide the localhost string as the URL in the header of your LT browser and you’ll be able to access your localhost server.
              </p>
            </details>
            <details>
              <summary>How To Debug My Website In LT Browser?
              </summary>
              <p>With LT Browser, not only can you evaluate how your responsive web design might look over 50+ pre-installed device viewports but you can also debug your web-application to figure out the root cause behind a browser or UI bug.
              </p>
            </details>
          </TabItem>

          <TabItem value="security">
            <details>
              <summary>Briefly describe your security policies.</summary>
              <p><BrandName /> is a firm believer in secure experience and multifaceted security protocols, to ensure that every aspect including architecture, engineering, testing, and deployment, follows and complies with industry leading standards of security. As first line of defense, <BrandName /> application is protected by AWS&#8217;s firewalls which are tasked with countering regular DDoS attacks and malicious network intrusions. The next line of defense is <BrandName />&#8217;s own application firewall protocols which are tasked with protecting the application against spam, ill-intent users, and malicious IP. We have also implemented secure user access policies for accessing <BrandName /> platform and only users with valid user credentials can access the application. We have also implemented role based access to the application, each role having different access levels.</p>
              <p>Whenever a user initiates a test at <BrandName /> platform, they are allotted a thoroughly sanitized virtual machine. And as soon as a session ends, all data including cookies, registry, caches, and running processes are deleted and all browser settings are reset to default values. Each virtual machine has to pass a series of automated tests before it is used again. Any machine that fails a test gets redacted from the pool for auditing and manual cleaning. At the time of test only the user has access to machine and not even <BrandName /> has access to the user&#8217;s running test session. All machines have strict security protocols that prohibit any user from installing any external software in the machines.</p>
              <p>In our application we have implemented HTTPS by default, and use VNC protocols for secure data transfer. This data is also encrypted to ensure that data is not compromised in-transit.</p>
              <p>All our hosting centers are chosen based on their record of established security policies and excellent history. Our selection process is rigorous and we partner with only the best providers across globe that have been certified by major compliance regulators.</p>
              <p>All data saved in our application like login credentials, secure access keys, usage logs, test history, and billing details, are stored in an encrypted format.</p>
              <p>We have implemented strict 24&#215;7 security protections at our on-premise development centers. Only authorized individuals have access to building and <BrandName /> office premises. Our application data is hosted on industry leading hosts like Amazon Web Services, who have been thoroughly tested by multiple third party auditors for security. You can also read more about Amazon Web Service&#8217;s Security <a href="https://aws.amazon.com/security/">AWS Cloud Security</a></p>
            </details>
            <details>
              <summary>Do you have a disaster recovery (DR) or Business Continuity Plan (BCP) plan? How often is it tested?</summary>
              <p><BrandName /> has a formal Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) defined and implemented to enable people, process, and technology support during any crisis or business interruptions. The BC and DR Plan is tested and reviewed on a yearly basis.

                And, Disaster Recovery (DR) program ensures that our Services remain available and are easily recoverable in the case of a disaster. This is accomplished through building a robust technical environment and creating Disaster Recovery plans and testing activities. In the event of a disaster, the following objectives apply:</p>

              <ol>
                <li><b>4-hour Recovery Time Objective (RTO)</b>: <BrandName /> will aim to restore normal operations for your <BrandName /> platform account within four hours from the time a disaster is declared, unless a disaster, or multiple disasters, impacts all of the Availability Zones used on an account.</li>

                <li> <b>Under 1-hour Recovery Point Objective (RPO)</b>: <BrandName /> will target one hour or less of data loss for your account. This is calculated from the point of the disruption, not from <BrandName />’s disaster declaration.</li><br />

                <p>Also, <BrandName /> employs service clustering and network redundancies to eliminate single points of failure. Our strict backup regime and/or our Disaster Recovery service offering allows us to deliver a high service availability, as customer or test data is replicated across availability zones.

                  <br /> <br />For more details, please refer to <a href="https://www.lambdatest.com/trust/security#business-continuity-and-disaster-recovery"><BrandName /> Trust</a> page.</p>

              </ol>



            </details>
            <details>
              <summary>Do your employees sign/agree to a confidentiality statement?</summary>
              <p> Yes. All our employees sign confidentiality agreements which extends to user agreements between <BrandName /> and Clients. Also, we have strict user role based access to all our customer data therefore, only most important employees have access to only relevant data.</p>
            </details>
            <details>
              <summary>Do you hold any certifications related to information or system security? Can we see the audit reports?</summary>
              <p> Yes, we have Service Organisation Control (SOC2), CCPA and GDPR report compliance certification.</p>
            </details>
            <details>
              <summary>How is your application architected, in particular is it separated between publicly accessible parts of the application from the data storage?</summary>
              <p>Our application is micros-services based product. Database is restricted from public access. It is only accessible to the application though encrypted authentication based APIs and that also over a secure private network.</p>
            </details>
            <details>
              <summary>Describe your coding, testing, and deployment practices.</summary>
              <p>We at <BrandName /> follow Agile development methodologies with dedicated teams for automated deployment and testing. We use Jenkins as our preferred Continuous integration platform and use Sonar Cube for automated code quality control. We ensure maximum possible code coverage in our automated tests and each release is passed only before it pass all test scenarios.</p>
            </details>
            <details>
              <summary>Do you perform web application vulnerability testing or intrusion detection?</summary>
              <p>We periodically tests our applications for vulnerability both through automated and manual means. We perform regular audits of databases to check for irregularities, and our ELK stack implementation gives real-time insights on any possible attacks.</p>
            </details>
            <details>
              <summary>How do you manage access to production systems? Do you have a staff termination/offboarding policy and process? What is it? Do you log and audit performance of this process?</summary>
              <p>Access to production system is strictly controlled though role based authentication access. No <BrandName /> employee has complete access to all data, each having their relevant role based access to data. Each employee has his/her own email based authentication passwords for accessing applications and after termination we revoke their complete access to the application. In addition we maintain automated logs of each database ingress and regularly monitor the logs to find discrepancies.</p>
            </details>
            <details>
              <summary>Do you have an enforced password policy for admin accounts? Do you require MFA for admin accounts?</summary>
              <p>All user access is password protected. In addition user sign-ups are verified through a two-step verification workflow.</p>
            </details>
            <details>
              <summary>What logging do systems perform? How are logs protected? What encryption is used? Do you have BI systems? Do they hold PII?</summary>
              <p>At <BrandName />, we maintain a variety of logs such as syslog (system logs), auth (authentication) logs, firewall logs, web server logs, application server logs, database server logs, netflows etc. We have an inhouse implementation of ELK stack for logging and business intelligence. Our implementation gathers and consolidates data from all micro-applications into a secure private network. The data is used for product analysis by product team through our custom log processing and BI system. The BI system in turn is secured thorugh a IP based access policy. In addition only authorized <BrandName /> employees has access to relevant pieces of data based on their role. All log data is saved in encrypted format private storage volumes that is encrypted usign DM-Crypt disk encryption system</p>
            </details>
            <details>
              <summary>What is your system patching regime?</summary>
              <p>We follow SemVer versioning standards and publish hot-fixes and patches as it is required.</p>
            </details>
            <details>
              <summary>Do you have separate production, qa, test, dev environments?</summary>
              <p>Yes. We have separate Production, Dev, and Test Environments. Each Environment is hosted in separate instances and is secured behind a private network.</p>
            </details>
            <details>
              <summary>Are these systems separated from your corporate network and each other?</summary>
              <p>All environments are hosted on independent AWS instances. Only Live environment has critical user data. Rest of the environments have dummy or simulated data that covers all use cases.</p>
            </details>
            <details>
              <summary>Do you perform system vulnerability scans and penetration testing?</summary>
              <p>We perform periodic system vulnerability scans, both automated and manual, using a OpenVAS based solution. We check for all major vulnerabilities and security risks as enlisted in open source databases like <a href="https://nvd.nist.gov/">national vulnerability database</a>.</p>
            </details>
            <details>
              <summary>What type of firewalls/DDoS defense do you use?</summary>
              <p>Our application is hosted on Amazon Web Services and we follow all DDoS mitigation guidelines detailed by AWS in this <a href="https://d1.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf">documentation paper</a>. We use services such as Amazon Route 53, Amazon CloudFront, Elastic Load Balancing, and AWS WAF to control and absorb traffic, and deflect unwanted requests. We also have a Cisco ASA firewall in place as added security measure. In additon to all this we have put into place custom firewall and security measures based on Fail2Ban intrusion protection framework to prevent brute-force attacks.</p>
            </details>
            <details>
              <summary>How do you monitor your systems and networks?</summary>
              <p>We have implemented advanced analytics using Kibana, Kubernetics, and AWS data tools. We monitor all our networks constantly for suspicious activity. We also use Elastic.co&#8217;s Beats product for shipping data. Beats comes with in-built monitoring and data visualization tools that help in real-time monitoring of application.</p>
            </details>
            <details>
              <summary>Are user passwords stored in manner compliant with NIST Special publication 800-63B Digital Identity Guidelines</summary>
              <p>Yes. All user credentials are stored in a manner compliant with all NIST guidelines as defined in <a href="https://pages.nist.gov/800-63-3/sp800-63b.html">NIST special publication</a>.</p>
            </details>
            <details>
              <summary>How is user data stored? What encryption is used for data at rest? What about data in transit?</summary>
              <p>All user data is stored as encrypted data in secure AWS storage hosted databases. We use AWS S3 for data storage and have enabled advanced 2048bit Public Key encryption standards for Data at Rest. For Data in transit we use VNC and WSS security and encryption protocols.</p>
            </details>
            <details>
              <summary>Can unprotected user data be accessed by your staff? Is this access audited?</summary>
              <p>All data such as user credentials are secured in encrypted format and no <BrandName /> employee can access it, including administrators. User data such as company details, user contact details, test logs, etc. can be access by only relevant developers. We have strict user role based data access and only relevant developers have access to parts of user data. This security access is audited every month based on development and testing sprint plans.</p>
            </details>
            <details>
              <summary>How are backups managed? What encryption is used? How are they destroyed when no longer needed?</summary>
              <p>We use AWS services like AWS S3 to store and take backups of our data. All data stored on AWS instances are stored using advanced AES256 encryption standards. Any data that is not critically required gets deleted through standard DELETE requests on S3 buckets. However we have implemented versioning and rollback steps to prevent accidental deletion of data. Therefore, even delete requests do not immediately delete all data. For that we have implemented provisions to scrub all data including the historical backup data on client requests.</p>
            </details>
            <details>
              <summary>Do you operate physical infrastructure? If so what certifications do they hold related to physical security? Can we see the audit/certification reports?</summary>
              <p>Our application is hosted entirely on third party hosting providers like AWS, Hetzner, etc. All our hosting partners have very high security protocols. For example checkout <a href="https://aws.amazon.com/security/">AWS security protocols</a>, or Hetzner Security protocols.</p>
              </details>
            <details>
              <summary>What is your incident response process?</summary>
              <p>We, here, at <BrandName /> follow a 6 step incident reponse process. The various stages of the response proces are prepration, identification, containment, eradication, recovery, and learning. We use industry leading practices for each step and test our response workflow once a month.</p>
            </details>
            <details>
              <summary>What are your policies and processes around notification of a security breach?</summary>
              <p>In case of an identified breach, all related users are notified of the breach immediately so that they can take necessary measures to prevent further loss. We share this information with our signup users through our email channels, and also notify users through social media platforms like <a href="https://www.linkedin.com/company/13282763/">LinkedIn</a>, <a href="https://www.facebook.com/lambdatest/">Facebook</a>, and <a href="https://twitter.com/Lambdatesting">Twitter</a>.</p>
            </details>
            <details>
              <summary><BrandName /> Tunnel connects your servers with my system. How much of our local PC is exposed to your system?</summary>
              <p>None. Only web requests initiated on <BrandName /> platform are transported to your localsystem via SSH tunnel created by our tunnel binary. The data at rest and data at transit are both encrypted. Only web browsing data generated by a  webbrowser selected on <BrandName /> platform can send data to your system. As such your system is not exposed to public. In addition, every tunnel created using Lambda Tunnel binary is isolated to users of the same account. All Information of the remote tunnel is secured by accesstoken and we employ latest technology in encrypted tokens. This information is only provided to the browser fired the user. With that said, <BrandName /> recommends using test data instead of production data as best practice.</p>
            </details></TabItem>

          <TabItem value="billing">


            <details>
              <summary>What do I get with a Free Trial?
              </summary>
              <p>When you sign up with <BrandName />, you receive 60 mins/month Realtime Browser Testing (6 Sessions of 10 minutes each), 100 Automation Minutes for 15 days, 10 Screenshot Tests per month, 10 Responsive Tests per month, 24x7 Support, and 3rd Party App Integrations. The Free Trial is the best way to get a feel for <BrandName /> and how it works. <BrandName /> is ideal for teams, and therefore you can invite any number of users to be part of your <BrandName /> Team for testing.</p>
            </details>

            <details>
              <summary>How does the FREE trial work?
              </summary>
              <p>When you sign up, you instantly get access to our Freemium plan. This plan has no trial time limit, it's there for you for Life. In the freemium plan you get 60 minutes of <BrandName /> Live testing usage which gets renewed per month. You can anytime upgrade your plan for more robust features and unlimited access to <BrandName /> Live Testing machines.</p>
            </details>

            <details>
              <summary>How can I upgrade my <BrandName /> subscription?
              </summary>
              <p>You can add more user accounts to your existing plan, or upgrade to another plan from the <a href="https://www.lambdatest.com/pricing">Pricing page</a>. Upgrades can be done any time, and are charged on a prorated basis. Thus, if your subscription is changed during a billing cycle, your billed amount for the month will be prorated. To know more, visit <a href="https://www.lambdatest.com/support/docs/manage-subscriptions/"><BrandName /> Manage Subscription</a> documentation.</p>
            </details>

            <details>
              <summary>What forms of payment do you accept?
              </summary>
              <p>We accept all types of credit and debit cards for payment. We have provision of payment using PayPal payment method as well.</p>
            </details>

            <details>
              <summary>Will I get invoice for my subscription?
              </summary>
              <p>Yes, you will receive the invoice for the subscription opted. Invoice will be sent by default to the email ID that was used during sign up. You can also download the invoice from from your user account.</p>
            </details>

            <details>
              <summary>What do you mean by parallel session?
              </summary>
              <p>Live parallel sessions indicate the number of tests you can conduct at the same time. For example, if you have opted for 2 parallel sessions, two members of your team can execute live testing simultaneously. Or a single member can run 2 parallel sessions.</p>
            </details>

            <details>
              <summary>Is the pricing based on users or parallel sessions?
              </summary>
              <p>Pricing is purely based on parallel sessions. User limit is an add-on which comes along with the editions.</p>
            </details>

            <details>
              <summary>Can I upgrade or downgrade my subscription later?
              </summary>
              <p><BrandName /> price is based on plan level and the no. of parallel sessions. As per your need you can upgrade and downgrade at any time. However, changes will not take effect until your next billing cycle.</p>
            </details>

            <details>
              <summary>What is a On Demand Pass and how does it work?
              </summary>
              <p>An On Demand Pass is a one time payment option for to those who wish to use <BrandName /> for a shorter duration. With On Demand Pass, you get 120 Minutes of testing time with full access to <BrandName /> features for 30 days at a price of just $10. This is a non recurring payment ,i.e. if you wish to continue this plan you would have to purchase On Demand Pass again.</p>
            </details>

          </TabItem>
        </Tabs>
      </div>
    </Layout>
  )
}
