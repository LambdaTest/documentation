# Create and Execute your Test Run for KaneAI Generated Tests on HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This documentation outlines the steps to create a test run for KaneAI generated tests using Test Manager. The steps include selecting test cases, setting configurations, and running tests with HyperExecute for efficient execution. Follow the instructions carefully to ensure seamless execution of the process.

## Prerequisites
- Access to Test Manager.
- A project with KaneAI-generated test cases.
- Credentials for TestMu AI platform.

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

All KaneAI test cases with generated code are available for selection here, regardless of whether Sample Run Execution has been triggered or its outcome. Test cases where code generation has not started or is still in progress will not be available.

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
| **Tunnel** | Add the tunnel name if you want to run using TestMu AI Tunnel for private applications. Either tunnel, dedicated proxy, or geolocation can be used in a single execution. See [Tunnel Support](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel-support) for details. |
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
| **Android App ID** | Specify an Android app ID (`lt://`) to override the existing app in the test instance configuration. |
| **iOS App ID** | Specify an iOS app ID (`lt://`) to override the existing app in the test instance configuration. |
| **Visual Regression** | Add visual testing configuration — select browsers, viewports, devices, and orientation. See [Visual Testing with SmartUI](/support/docs/kaneai-smartui-visual-testing/) for details. |
| **Accessibility** | Enable accessibility checks (WCAG 2.1 AA) with best practices and needs review options. Available for web with Chrome and Edge browsers only. May slow down execution time. |
| **Report Enabled** | Set to true to enable report generation for the test run. Select either HTML or Extent report format — only one can be active at a time. Reports are accessible from the HyperExecute Job page after execution. See [below](#reports). |
| **Report Email To** | An array of email addresses to receive the test run report via email after execution. Maximum 10 email addresses. Only works when report is enabled. |

Test case failure retries are supported only for code exported from **May 10, 2026 onwards**. For previously exported code, retries are triggered only on test runner command failure. To use this capability, regenerate the code export for your test cases in Test Manager.

### Reports

Enable the **Reports** option in Advanced Configurations to generate reports for your test run. You can enable either an HTML report or an Extent report — only one can be active at a time. Reports are supported for both web and mobile test executions.

- **Generate HTML Report** — Toggle to **Yes** to generate an HTML report for the test run, available in the HyperExecute dashboard after execution.
- **Generate Extent Report** — Toggle to **Yes** to generate an Extent report for the test run, available in the HyperExecute dashboard after execution.
- **Email Addresses** — Add one or more email addresses (separated by space or enter) to receive the report via email after execution. You can add up to **10 email addresses**.

**Accessing the Report**

Once your test run execution is complete, you can access the generated HTML report from the HyperExecute Job page. Navigate to the job and click on the **Reports** section to view or download the report.

**HTML Report Overview**

The generated HTML report includes:

- **Summary** — Job metadata (job number, labels, username, build time, date), test summary with pass/fail counts and donut charts, scenario summary, task analytics, and browser-level breakdown.
- **Test Cases** — A detailed list of all test cases with their status (pass/fail), OS, OS version, browser, duration, and links to view the test or watch the video recording.

**Extent Report Overview**

The generated Extent report provides a rich interactive view of test execution results, accessible from the HyperExecute Job page. It includes:

- **Dashboard** — A visual summary of the test run with pass/fail statistics and trend data.
- **Test Details** — Step-by-step breakdown of each test case with status and screenshots.

**Email Report**

If you added email addresses, recipients receive an email with a summary of the test run results along with the HTML report as an attachment.

Reports are also available when configuring [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).

- Click **Execute** to run the tests.

### Monitor Execution on HyperExecute
- Navigate to the HyperExecute page.
- Observe the discovery and rapid execution of test cases.

## Video Explanation
