---
id: automated-test-cases-with-ai
title: Managing Automated Tests with Test Manager
hide_title: false
sidebar_label: Automate Test Cases with AI
description: Streamline testing with Test Manager! Manage automated tests, auto-generate BDD scenarios, and link automation runs seamlessly for Selenium Web frameworks.
keywords:
  - automated test cases
  - automated test cases with ai 
  - test cases
url: https://www.testmuai.com/support/docs/automated-test-cases-with-ai/
site_name: TestMu AI
slug: automated-test-cases-with-ai/
canonical: https://www.testmuai.com/support/docs/automated-test-cases-with-ai/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Automated Test Cases with AI",
          "item": `${BRAND_URL}/support/docs/automated-test-cases-with-ai/`
        }]
      })
    }}
></script>
Test Manager enables the creation and management of automated test cases directly within its platform. This feature not only streamlines test case development but also integrates AI to auto-generate BDD Scenarios from automated test runs, further optimizing the management of testing activities.

You can link an automation run to a test case in three ways: **automatically** when a run completes, **manually** from the automation dashboard, or directly from your test script using a **capability** (`tms.tc_id`). Each approach is covered below.

## Automatic Linking of Automation Runs {#automatic-linking}

1. Initiate the automation script and once it completes, proceed to the automation dashboard. The automation test run will be visible.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/automation-one.webp').default} alt="Completed automation test run in the automation dashboard"  className="doc_img" width="1366" height="629"/>

2. Open the Test Manager dashboard, and in the **Projects** section, you will find the **<BrandName /> Automation** project automatically created.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/automation-project-two.webp').default} alt="Auto-created Automation project in the Test Manager Projects section"  className="doc_img" width="1366" height="629"/>

3. Upon opening the newly created project, the automatically generated test case title from the automation process will be visible. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/automation-project-three.webp').default} alt="Auto-generated test case in the new project"  className="doc_img" width="1366" height="629"/>

4. In the Test Case section, **BDD Scenarios** will be automatically visible in the Test Case that is created from the command logs of the linked automated test run.

> Currently, this feature is supported for Selenium Web frameworks.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/select-bdd-scenarios.webp').default} alt="BDD scenarios auto-generated from the run's command logs"  className="doc_img" width="1366" height="629"/>

## Manual Linking from the Automation Dashboard {#manual-linking}

1. On the right side of the automation dashboard, there are two toggle buttons: one to open the **Test Case** and another to **Unlink Test**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-using-dashboard.webp').default} alt="Link Test Case and Unlink Test toggles on the automation dashboard"  className="doc_img" width="1366" height="629"/>

2. To link a test case, click on **Link Test Case**. You can browse the test cases or add new test cases by clicking on **Create new Test Case** for your automation script. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-using-dashboard-two.webp').default} alt="Browsing or creating a test case to link"  className="doc_img" width="1366" height="629"/>

3. Initiate bug reporting directly from the automation dashboard by selecting **Raise a bug**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-using-dashboard-three.webp').default} alt="Raising a bug from the automation dashboard"  className="doc_img" width="1600" height="726"/>

4. It will open an instance window, enter the details required to automatically link the bug to your Jira account, streamlining the issue creation process.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/link-using-dashboard-four.webp').default} alt="Entering bug details to link with Jira"  className="doc_img" width="1600" height="730"/>

5. Once logged, the issue is immediately reflected in the **Issues** section of the corresponding test case.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/issue-logged.webp').default} alt="Logged issue shown in the test case Issues section"  className="doc_img" width="1600" height="730"/>

## Linking via Capabilities (tms.tc_id) {#capability-linking}

Test Manager supports linking automated test runs directly to specific test cases using Test Case IDs. This feature enables better traceability and management of your automated testing workflow.

> Currently, this feature is supported on [HyperExecute](/support/docs/getting-started-with-hyperexecute/) and Web Automation tests.

### How to Link a Test Case ID

To link an automated test run with a specific test case, add the `tms.tc_id` key in the `lt:Options` section of your test capabilities. Here is a sample configuration demonstrating how to include the `tms.tc_id` key in your script:

```javascript
const capabilities = {
  "lt:Options": {
      "project": "Your Project Name", // Specify the project where the test run should be created
      "tms.tc_id": "TC-1470" // Link the test execution to the Test Case ID 'TC-1470'
  }
};
```

- `lt:Options` : A JSON object containing additional options for <BrandName /> configurations.
- `project` : The name of the project in Test Manager where the test run should be created. If not specified, the test run will be created under **LambdaTest Default Project**.
- `tms.tc_id` : The key used to link a test case in Test Manager. Replace "TC-1470" with your desired Test Case ID.

### Specifying Target Project

When you link a test case using `tms.tc_id`, a test run is automatically created with your build name. By default, this test run is created under **LambdaTest Default Project**.

To ensure the test run is created in the correct project, use the `project` capability along with `tms.tc_id`:

```javascript
const capabilities = {
  "browserName": "Chrome",
  "browserVersion": "latest",
  "lt:Options": {
      "platform": "Windows 10",
      "build": "Playwright Build",
      "name": "Sample Test",
      "project": "Demo-Project", // Target project name
      "tms.tc_id": "TC-95668" // Test case ID from the target project
  }
};
```

:::warning
The `project` name must match exactly as it appears in Test Manager. If the project name is incorrect or doesn't exist, the test run will be created under **LambdaTest Default Project**.
:::

:::info NOTE
- Ensure the Test Case ID exists in Test Manager before linking.
- The Test Case ID format should match exactly as shown in Test Manager
- Each automated test run can be linked to one test case at a time
- The test case specified in `tms.tc_id` should belong to the project specified in `project` capability
:::
