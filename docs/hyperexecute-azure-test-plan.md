---
id: hyperexecute-azure-test-plan
title: Azure Test Plan Integration with HyperExecute
toc_max_heading_level: 2
hide_title: false
sidebar_label: "Azure Test Plan"
description: Seamless Azure Test Plan integration with HyperExecute for efficient test management and execution. Boost software quality effortlessly.
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - azure test plan
    - azure integration
url: https://www.testmuai.com/support/docs/hyperexecute-azure-test-plan/
site_name: TestMu AI
slug: hyperexecute-azure-test-plan/
canonical: https://www.testmuai.com/support/docs/hyperexecute-azure-test-plan/
---


import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Azure Test Plan Integration with HyperExecute",
          "item": `${BRAND_URL}/support/docs/hyperexecute-azure-test-plan/`
        }]
      })
    }}
></script>
> It is a **Premium** feature of Azure. You will have to buy access to [Azure Test Plans](https://learn.microsoft.com/en-us/azure/devops/organizations/billing/buy-access-tfs-test-hub?view=azure-devops-2022#buy-monthly-access-to-azure-test-plans)

In this fast-paced world of software development, ensuring fast and quality testing cycle in not an option anymore, but a necessity. Imagine a scenario where your team is diligently working on a project, but managing test plans, suites, spreadsheets, and cases becomes a maze of complexity. This is where Azure Test Plan comes in as your bestfriend.

Azure Test Plan is a Microsoft Azure cloud-based testing service that allows you to manage test plans, test suites, and test cases for your web and desktop applications. Using test plans, you can Azure Test Plans also provides a browser extension for exploratory testing and gathering feedback from stakeholders.

It includes other features as well to assist you in improving the quality of your software, including:

- **Test Case Management:** You can create, edit, and organize your test cases in a central location.
- **Test Execution:** Run your test cases manually or using automated tools.
- **Defect Tracking:** You can track and manage bugs and other issues found during testing.
- **Reporting:** Generate reports to track your testing progress and identify areas for improvement.

## Steps to Integrate Test Plan with HyperExecute

Integrate the Azure Test Plan with HyperExecute in just 3 simple steps 🚀

### Step 1: Setup the Azure Test Plan

> You need to first [**setup the Azure Test Plan**](https://learn.microsoft.com/en-us/azure/devops/test/create-a-test-plan?view=azure-devops#prerequisites) Project before integrating HyperExecute with it.

**Step 1:** Login to your [Azure DevOps](https://dev.azure.com/) account.

**Step 2:** Click on the New Project button. Enter the basic details like **Project Name**, **Visibility**. Click on **Create Project** button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step1.png').default} alt="Image"  className="doc_img" />

**Step 3:** Click on Test Plans option in the left pane. Then, click on New Test Plan to start creating new Test Plan.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step3.png').default} alt="Image"  className="doc_img" />

**Step 4:** Enter the **Name** of the Test Plan, choose the **Area Path**, and select the **iteration**. Click on Create button.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step4.png').default} alt="Image"  className="doc_img" />

<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step6.png').default} alt="Image"  className="doc_img" /> -->

**Step 5:** Now, hover over the test plan name and click on the three-dots. Click on **New Suite** >> **Static Suite**. Set a name for the Suite.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step5.png').default} alt="Image"  className="doc_img" />

**Step 6:** Your test suite is now created. Click on **New Test Case** button and create a new test case. Once created, click on **Save and Close**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step7.png').default} alt="Image"  className="doc_img" />

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step8.png').default} alt="Image"  className="doc_img" />

Once created, you will see a screen something similar to below

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step1/step9.png').default} alt="Image"  className="doc_img" />

### Step 2: Associate the Test Cases with Azure Test Plan

> Test Plan works in Association with specific [**Visual Studio subscriptions**](https://learn.microsoft.com/en-us/azure/devops/test/create-a-test-plan?view=azure-devops#:~:text=Basic%20%2B%20Test%20Plans%20access%20level%20to%20add%20test%20plans%20and%20test%20suites%2C%20delete%20test%20artifacts%2C%20and%20define%20test%20configurations.%20Or%2C%20have%20one%20of%20the%20following%20Visual%20Studio%20subscriptions).

After setting up a Test Plan, now you need to associate your test cases as well with the Test Plan. To perform the same, we must have a Visual Studio IDE installed in our local machine. Login with same credentials for Visual Studio as in Test Plan.

Follow the steps below to compelete the test case association:

**Step 1:** In your Visual Studio Code IDE, click on a **sln** file in a **C# project**.

> **NOTE :** Login with the same credentials for Visual Studio as in the Test Plan.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step1.png').default} alt="Image"  className="doc_img" />

**Step 2:** Navigate to the Team Explorer view.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step2.png').default} alt="Image"  className="doc_img" />

**Step 3:** Click the **Home** icon and pull down the list to the right of Home icon.

- Select the **Projects and My Teams** >> **Manage Connections**.

- Click on **Manage Connections** >> **Connect to a Project**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step3.png').default} alt="Image"  className="doc_img" />

**Step 4:** Select your repository, click the right button of your mouse, and then click the **Connect** button.

> **NOTE :** The connection might ask you to connect with GitHub; please provide access to GitHub as well.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step4.png').default} alt="Image"  className="doc_img" />

**Step 5:** Once connected, click on the **Test** menu, then **Test Explorer**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step5.png').default} alt="Image"  className="doc_img" />

**Step 6:** Inside the Test Explorer, select any test, right click and select **Associate to Test Case**.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step6.png').default} alt="Image"  className="doc_img" />

**Step 7:** Enter the **Test Case ID**, click on **Add Association**, and then click the **Save** button. This will associate the test with the Test Case ID in the Test Plan.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step7.png').default} alt="Image"  className="doc_img" />

**Step 8:** You can check the associated test in test plan by hovering on three dots beside test case name and click on Open Test Case.

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step8.png').default} alt="Image"  className="doc_img" />

Associated test cases will look like this:

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/azure-test-plan/step2/step9.png').default} alt="Image"  className="doc_img" />

### Step 3: Integrate the Test Plan with HyperExecute

> Test Distribution of the suite is recommended to be at **test level** such that each HyperExecute stage has one test.

To execute the Test Plan with HyperExecute, you will have to follow the below mentioned steps:

**Step 1:** Download these exeutable files and place it in the root directory of your test suite.

| Binary | Download Link |
|--------|---------------|
| Testplan Discovery | https://downloads.lambdatest.com/hyperexecute/testplan-discovery-win.exe |
| Testplan Status | https://downloads.lambdatest.com/hyperexecute/testplan-status-update-win.exe |
| Test Link Attachment | https://downloads.lambdatest.com/hyperexecute/test-link-attach-win.exe |

**Step 2:** Add the following command in your YAML file

```yaml
testDiscovery:
  command: testplan-discovery-win.exe <test_plan_id> <test_suite_id> <azure_org> <azure_project> <azure_access_token>
  mode: static
  type: raw
```

**Step 3:** To keep the test case distribution perfectly, make sure you pass the `dynamicAllocation` flag as `true`.

```yaml
dynamicAllocation: true
```

**Step 4:** Now, you need to pass the following command in your YAML file. 

```yaml
testRunnerCommand: dotnet test path\of\dll --settings path\of\runsettings --filter '"Name=$test"' ; ./testplan-status-update-win.exe <testplan_id> <test_suite_id> <azure_org> <azure_project> <azure_access_token> <lt_username> <lt_access_key> ; ./test-link-attach-win.exe <azure_org_name> <azure_project_name> <azure_access_token>
```

**Step 5:** Trigger your test plan on HyperExecute.

- Download the HyperExecute CLI Binary based on the OS you use.

| Platform | Download Link |
|-----------|--------------|
| Windows |	https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS |	https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux |	https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

- Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

> In case of MAC, if you get a permission denied warning while executing CLI, simply run `chmod u+x ./hyperexecute` to allow permission. In case you get a security popup, allow it from your **System Preferences → Security & Privacy → General tab**.

- Run the below command in your terminal at the root folder of the project

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

```bash
./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```
