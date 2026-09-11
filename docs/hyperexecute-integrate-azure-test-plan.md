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
url: https://www.testmuai.com/support/docs/hyperexecute-integrate-azure-test-plan/
site_name: TestMu AI
slug: hyperexecute-integrate-azure-test-plan/
canonical: https://www.testmuai.com/support/docs/hyperexecute-integrate-azure-test-plan/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "item": `${BRAND_URL}/support/docs/hyperexecute-integrate-azure-test-plan/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-integrate-azure-test-plan/"
    },
    "headline": "Integrate Test Cases",
    "description": "To ensure effective test execution, integrate your test plan with HyperExecute by downloading the required executable files, configuring YAML files, and starting your test plan.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-integrate-azure-test-plan/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "hyperexecute integrations",
      "hyperexecute integrations with products",
      "products"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "To execute the Test Plan with HyperExecute, you will have to follow the below mentioned steps",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "testDiscovery:\n  command: testplan-discovery-win.exe <test_plan_id> <test_suite_id> <azure_org> <azure_project> <azure_access_token>\n  mode: static\n  type: raw"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Integrate the Test Plan with HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "dynamicAllocation: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "testRunnerCommand: dotnet test path\\of\\dll --settings path\\of\\runsettings --filter '\"Name=$test\"' ; ./testplan-status-update-win.exe <testplan_id> <test_suite_id> <azure_org> <azure_project> <azure_access_token> <lt_username> <lt_access_key> ; ./test-link-attach-win.exe <azure_org_name> <azure_project_name> <azure_access_token>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

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

<VerifiedTag value="Verified" />

```yaml
testDiscovery:
  command: testplan-discovery-win.exe <test_plan_id> <test_suite_id> <azure_org> <azure_project> <azure_access_token>
  mode: static
  type: raw
```

**Step 3:** To keep the test case distribution perfectly, make sure you pass the `dynamicAllocation` flag as `true`.

<VerifiedTag value="Verified" />

```yaml
dynamicAllocation: true
```

**Step 4:** Now, you need to pass the following command in your YAML file. 

<VerifiedTag value="Verified" />

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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

<VerifiedTag value="Verified" />

```bash
./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```
