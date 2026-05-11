---
id: kaneai-hyperexecute-test-run-execution
title: Create and Execute your Test Run for KaneAI Generated Tests on HyperExecute
hide_title: false
sidebar_label: Execute Test Runs on HyperExecute
description: Learn how to execute KaneAI-generated test runs directly on HyperExecute with this step-by-step guide for efficient and rapid test execution.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai guided walkthrough
  - kane ai test runs
  - hyperexecute
  - test run
  - test manager
  - generate and manage test cases
url: https://www.testmuai.com/support/docs/kaneai-hyperexecute-test-run-execution/
site_name: TestMu AI
slug: kaneai-hyperexecute-test-run-execution/
canonical: https://www.testmuai.com/support/docs/kaneai-hyperexecute-test-run-execution/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "KaneAI Test Run",
          "item": `${BRAND_URL}/support/docs/kaneai-hyperexecute-test-run-execution`
        }]
      })
    }}
></script>
This documentation outlines the steps to create a test run for KaneAI generated tests using Test Manager. The steps include selecting test cases, setting configurations, and running tests with HyperExecute for efficient execution. Follow the instructions carefully to ensure seamless execution of the process.

## Prerequisites
- Access to Test Manager.
- A project with KaneAI-generated test cases.
- Credentials for <BrandName /> platform.

## Step-by-Step Guide
### Step 1: Navigate to the Projects Page
- Log in to Test Manager. Navigate to the Projects page and select the desired project.
- Proceed to the Test Cases section.

### Step 2: Create a Test Run
- Go to the Test Run section within the project.
- Click on Create Test Run.
- Provide the following details:
    - **Name :** e.g., Demo Test Run 123.
    - **Description :** A brief overview of the run.
    - **Tags :** Any label to differentiate your test run.
    - **Type :** Choose KaneAI Generated Test Cases.

### Step 3: Select and Add Test Cases
- Click Next to view available test cases.
- Select the required test cases for the run.
- Click Add Test Case to include them.

:::tip
Only KaneAI test cases for which code generation has been successful will be available for selection here.
:::

### Step 4: Assign and Configure Test Cases
- On the test run page, review the added test cases.
- Assign team members in bulk.
- Update configurations as required.

#### Set Configurations
- Choose from available desktop browser and mobile app configurations. If a new configuration is needed, click on Create Configuration button and choose from thousands of configuration options.

#### Create New Configuration
- Enter **configuration name** and the following details to create a new Desktop configuration:
    - **OS :** e.g., macOS.
    - **OS Version :** e.g., Monterey.
    - **Browser :** e.g., Chrome.
    - **Browser Version :** e.g., 131.
    - **Resolution :** e.g., 1440x900.
- Enter **configuration name** and the following details to create a new Real Device configuration:
    - **OS :** e.g., android.
    - **Manufacturer :** e.g., Samsung.
    - **Device :** e.g., Galaxy S24.
    - **OS Version :** e.g., 14.
    - **App :** e.g., Proverbial.
- Click on Create Configuration

### Step 5: Run with HyperExecute
- Initiate the run using HyperExecute by clicking **Run with HyperExecute**.
- View all test instances in the dashboard.
- Set the desired concurrency level, e.g., 5.

## Advanced Configurations

Before clicking **Execute**, you can optionally click **Advanced Configurations** to customize your test execution. The following settings are available:

| Setting | Description |
|---|---|
| **Region** | Choose a region for web tests such as _eastus_ or _centralindia_ to select the region from where the VM is allocated. |
| **Mobile Region** | Choose a region for mobile app tests such as _us_, _ap_, or _eu_ to select the region from where the device is allocated. |
| **Tunnel** | Add the tunnel name if you want to run using <BrandName /> Tunnel for private applications. Either tunnel, dedicated proxy, or geolocation can be used in a single execution. See [Tunnel Support](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel-support) for details. |
| **Dedicated Proxy** | Add the region of the dedicated proxy such as _us_ or _eu_. Either tunnel, dedicated proxy, or geolocation can be used in a single execution. |
| **Geolocation** | Set the geolocation from which you want to run your tests. See the list of supported geolocations [here](/support/docs/selenium-geolocation-capabilities/). Either tunnel, dedicated proxy, or geolocation can be used in a single execution. |
| **Console Log** | Enable console log capture for web tests. Options: `false`, `error`, `warn`, `info`, `true`. |
| **Network Logs** | Enable capture of network calls during the test. |
| **Network Full HAR** | Capture complete network requests and responses during web tests. |
| **Network Throttle** | Enable network throttling for mobile tests by defining download speed, upload speed, and latency. |
| **Timezone** | Define the timezone for web test runs (e.g., UTC+01:00 format). |
| **Retry on Failure** | Enable to retry on failure. When enabled, retries are triggered both on [testRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#testrunnercommand) failure and individual test case failure. Defaults to true. See [Retry on Failure](/support/docs/deep-dive-into-hyperexecute-yaml/#retryonfailure) for details. |
| **Max Retries** | Define the maximum number of retries when retry on failure is enabled. Max value 5, default 1. See [Max Retries](/support/docs/deep-dive-into-hyperexecute-yaml/#maxretries) for details. |
| **Replace URL** | Dynamically replace any pattern URL in test cases with a replacement URL for the entire test run. See [Dynamic URL Replacement](/support/docs/kaneai-dynamic-url-replacement/) for details. |
| **Performance** | Enable Lighthouse performance reports for web tests. Supported on limited OS browser combinations. May slow down execution time. See [Lighthouse Performance Metrics](/support/docs/view-lighthouse-performance-metrics/) for details. |
| **App Profiling** | Enable app performance metrics tracking for native mobile app tests. See [App Performance Analytics](/support/docs/appium-app-performance-analytics/) for details. |
| **Android App ID** | Specify an Android app ID (`lt://<APP_ID>`) to override the existing app in the test instance configuration. |
| **iOS App ID** | Specify an iOS app ID (`lt://<APP_ID>`) to override the existing app in the test instance configuration. |
| **Visual Regression** | Add visual testing configuration — select browsers, viewports, devices, and orientation. See [Visual Testing with SmartUI](/support/docs/kaneai-smartui-visual-testing/) for details. |
| **Accessibility** | Enable accessibility checks (WCAG 2.1 AA) with best practices and needs review options. Available for web with Chrome and Edge browsers only. May slow down execution time. |
| **Report Enabled** | Set to true to generate an HTML report for the test run. The report can be accessed from the HyperExecute Job page after execution. See [below](#reports). |
| **Report Email To** | An array of email addresses to receive the test run report via email after execution. Maximum 10 email addresses. Only works when report is enabled. |

:::note
Test case failure retries are supported only for code exported from **May 10, 2026 onwards**. For previously exported code, retries are triggered only on test runner command failure. To use this capability, regenerate the code export for your test cases in Test Manager.
:::

### Reports

Enable the **Reports** option in Advanced Configurations to generate an HTML report for your test run. Reports are supported for both web and mobile test executions.

- **Generate HTML Report** — Toggle to **Yes** to enable report generation.
- **Email Addresses** — Add one or more email addresses (separated by space or enter) to receive the report via email after execution. You can add up to **10 email addresses**.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/reports-advanced-config.png').default} alt="Reports option in Advanced Configurations" className="doc_img"/>

**Accessing the Report**

Once your test run execution is complete, you can access the generated HTML report from the HyperExecute Job page. Navigate to the job and click on the **Reports** section to view or download the report.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/reports-hyperexecute-job.png').default} alt="HTML report on HyperExecute Job page" className="doc_img"/>

**HTML Report Overview**

The generated HTML report includes:

- **Summary** — Job metadata (job number, labels, username, build time, date), test summary with pass/fail counts and donut charts, scenario summary, task analytics, and browser-level breakdown.
- **Test Cases** — A detailed list of all test cases with their status (pass/fail), OS, OS version, browser, duration, and links to view the test or watch the video recording.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/reports-html-summary.png').default} alt="HTML report summary page" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/reports-html-test-cases.png').default} alt="HTML report test cases page" className="doc_img"/>

**Email Report**

If you added email addresses, recipients receive an email with a summary of the test run results along with the HTML report as an attachment.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/reports-email.png').default} alt="Test run report received via email" className="doc_img"/>

:::tip
Reports are also available when configuring [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).
:::

- Click **Execute** to run the tests.

### Monitor Execution on HyperExecute
- Navigate to the HyperExecute page.
- Observe the discovery and rapid execution of test cases.


## Video Explanation
<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/test-manager/test-plan-execute-hyperexecute/output.mp4').default} type="video/mp4" />
</video>
