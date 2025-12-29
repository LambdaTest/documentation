---
id: hyperexecute-integrate-azure-test-plan
title: Integrate Test Cases 
hide_title: true
sidebar_label: Integrate the Test Cases
description: To ensure effective test execution, integrate your test plan with HyperExecute by downloading the required executable files, configuring YAML files, and starting your test plan.
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - azure test plan
    - azure integration
    - test cases
    - azure binaries
    - azure test plan integration
url: https://www.testmu.ai/support/docs/hyperexecute-integrate-azure-test-plan
site_name: LambdaTest
slug: hyperexecute-integrate-azure-test-plan
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Azure Test Plan Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-integrate-azure-test-plan/"
        }]
      })
    }}
></script>

# Step 3: Integrate the Test Plan with HyperExecute

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

- Download the Hyperexecute CLI Binary based on the OS you use.

| Platform | Download Link |
|-----------|--------------|
| Windows |	https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS |	https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux |	https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

- Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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