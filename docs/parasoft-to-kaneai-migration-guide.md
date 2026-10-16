---
id: parasoft-to-kaneai-migration-guide
title: How to migrate from Parasoft to KaneAI
hide_title: true
sidebar_label: Parasoft To KaneAI Migration
description: Plan your Parasoft migration to KaneAI. Run Selenic tests on the TestMu AI Selenium grid, bring test cases into Test Manager, and re-create flows and API calls.
keywords:
  - parasoft migration to kaneai
  - parasoft to kaneai migration
  - migrate from parasoft to kaneai
  - how to migrate from parasoft to kaneai
  - parasoft selenic selenium grid
  - parasoft soatest api tests
url: https://www.testmuai.com/support/docs/parasoft-to-kaneai-migration-guide/
site_name: TestMu AI
slug: parasoft-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/parasoft-to-kaneai-migration-guide/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';
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
          "name": "Parasoft to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/parasoft-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/parasoft-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from Parasoft to KaneAI",
    "description": "Plan your Parasoft migration to KaneAI. Run Selenic tests on the TestMu AI Selenium grid, bring test cases into Test Manager, and re-create flows and API calls.",
    "url": "https://www.testmuai.com/support/docs/parasoft-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "parasoft migration to kaneai",
      "parasoft to kaneai migration",
      "migrate from parasoft to kaneai"
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
        "name": "Step 1: Your current commands (Selenic command line)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "mvn test -DargLine=-javaagent:/path/to/selenic_agent.jar=captureDom=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Your current commands (SOAtest command line)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "soatestcli.exe -config \"user://Example Configuration\" -resource \"tests/myTest.tst\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Set your credentials (TestMu AI Selenium Grid Credentials)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "LT_USERNAME=\"<your_username>\"\nLT_ACCESS_KEY=\"<your_access_key>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Change the hub URL (TestMu AI Selenium Grid URL)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "@hub.lambdatest.com/wd/hub"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Set your capabilities (TestMu AI Selenium 4 Capabilities)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "SafariOptions browserOptions = new SafariOptions();\nbrowserOptions.setPlatformName(\"MacOS Tahoe\");\nbrowserOptions.setBrowserVersion(\"26\");\nHashMap<String, Object> ltOptions = new HashMap<String, Object>();\nltOptions.put(\"username\", \"<your_username>\");\nltOptions.put(\"accessKey\", \"<your_access_key>\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Rebuild SOAtest REST calls as API steps (curl command for a POST request)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "curl -X POST \"https://api.example.com/users\" \\\n  -H \"Authorization: Bearer {{secret.api_token}}\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\n    \"name\": \"John Doe\",\n    \"email\": \"john@example.com\",\n    \"role\": \"admin\"\n  }'"
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From Parasoft To KaneAI
* * *
This guide covers your Parasoft migration to KaneAI for Selenic Selenium web UI tests in Java and SOAtest API tests. It does not cover Parasoft Virtualize, Jtest, C/C++test or dotTEST. <!-- Sources: https://docs.parasoft.com/display/SEL20261/System+Requirements, https://www.parasoft.com/integrations/lambdatest/ (product menu: "SOAtest: Manage test suites for API, load, & security testing."), checked 2026-10-16 --> You run Selenic tests on the <BrandName /> Selenium grid, bring test cases into Test Manager, and re-create web flows and API calls in KaneAI.

Parasoft lists LambdaTest (now <BrandName />) as a Selenic integration. Its integration page describes Selenic self-healing during test runs in the LambdaTest cloud. <!-- Sources: https://www.parasoft.com/integrations/lambdatest/, https://www.parasoft.com/wp-json/wp/v2/integration/13025 (products: Selenic), checked 2026-10-16 -->


<b>[Note: KaneAI does not import or convert Parasoft tests. Selenic tests keep running as Selenium Java code on the <BrandName /> grid. You re-create flows in KaneAI in natural language, and rebuild SOAtest REST calls as KaneAI API steps from curl commands.]</b>



***
## What Moves From Parasoft and Where It Goes

| Parasoft asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Selenic tests (Selenium Java with JUnit, TestNG or Cucumber) | <BrandName /> Selenium grid | Change the hub URL and set `LT:Options` |
| Selenic runs on the grid | Test Manager test cases | Automatic linking, or the `tms.tc_id` capability |
| SOAtest structure reports (XML) | Test Manager test cases | AI Test Case Generator |
| SOAtest REST Client requests | API steps in a KaneAI web test | One curl command per request |
| Web flows you maintain going forward | KaneAI web tests | **Automate with KaneAI**, or steps in natural language |
| Selenic recorded data, SOAtest tools and DTP results | Stay in Parasoft | See [What Does Not Carry Over](#what-does-not-carry-over) |

<!-- Sources: https://docs.parasoft.com/display/SEL20261/System+Requirements, https://docs.parasoft.com/display/SEL20261/Command+Line, https://docs.parasoft.com/display/SOA20261/Creating+a+Report+of+the+Test+Suite+Structure, https://docs.parasoft.com/display/SOA20261/REST+Client, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account.** Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your Username and Access Key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI and Test Manager access.** The **Automate with KaneAI** action requires KaneAI access.
- **Selenic.** It supports Selenium 3 (starting with 3.10) and Selenium 4, on Java 11, 17 or 21. You can use its command line after you configure the license. <!-- Sources: https://docs.parasoft.com/display/SEL20261/System+Requirements, https://docs.parasoft.com/display/SEL20261/Installation, checked 2026-10-16 -->
- **SOAtest.** You save structure reports from the Test Case Explorer. `soatestcli` requires a command line interface license, available with SOAtest Automation Edition. <!-- Sources: https://docs.parasoft.com/display/SOA20261/Creating+a+Report+of+the+Test+Suite+Structure, https://docs.parasoft.com/display/SOA20261/SOAtest+CLI+Overview, checked 2026-10-16 -->
- **Private apps.** For locally hosted applications, see [<BrandName /> Tunnel](/support/docs/testmu-tunnel/) and [KaneAI tunnel support](/support/docs/kane-ai-geolocation-tunnel-proxy/).

## Step 1: Collect Your Selenic Tests and SOAtest Files

### Selenic Tests

Selenic works on Selenium tests in your own Java project, so there is nothing to export. Tests that Selenic creates from Parasoft Recorder files also live in a Java project. <!-- Sources: https://docs.parasoft.com/display/SEL20261/Parasoft+Selenic, https://docs.parasoft.com/display/SEL20261/Creating+Selenium+Test+Projects+from+Recorded+Actions, checked 2026-10-16 --> Find where each test class creates its WebDriver, because Step 2 changes that code.

### SOAtest Files

SOAtest keeps tests in `.tst` files inside workspace projects. Each `.tst` file can include test suites or scenarios, tools, and inputs. <!-- Source: https://docs.parasoft.com/display/SOA20261/Creating+Projects+and+tst+Test+Files, checked 2026-10-16 --> Since version 2024.2, new workspaces save `.tst` files in YAML format by default. <!-- Source: https://docs.parasoft.com/display/SOA20261/SOAtest%2C+Virtualize%2C+and+CTP+2024.2, checked 2026-10-16 -->

Save a structure report for each `.tst` file you plan to re-create. Right-click the `.tst` node in the Test Case Explorer and choose **Structure Report > Default Structure Report > Save As XML**. The report lists test suites, test cases, endpoints tested, requirements and data sources. <!-- Source: https://docs.parasoft.com/display/SOA20261/Creating+a+Report+of+the+Test+Suite+Structure, checked 2026-10-16 -->

### Your Current Commands

These commands come from Parasoft's docs. In `soatestcli`, the `-resource` option specifies the test suites to run. <!-- Source: https://docs.parasoft.com/display/SOA20261/CLI+Usage, checked 2026-10-16 --> Check it to see which `.tst` files your pipeline runs.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="selenic-cli" label="Selenic command line" default>

```bash
mvn test -DargLine=-javaagent:/path/to/selenic_agent.jar=captureDom=true
```
</TabItem>

<TabItem value="soatest-cli" label="SOAtest command line">

```bash
soatestcli.exe -config "user://Example Configuration" -resource "tests/myTest.tst"
```
</TabItem>

</Tabs>

<!-- Sources: https://docs.parasoft.com/display/SEL20261/Command+Line, https://docs.parasoft.com/display/SOA20261/CLI+Usage, checked 2026-10-16 -->

## Step 2: Run Selenic Tests on the <BrandName /> Selenium Grid

Selenic supports parallel test execution in JUnit, TestNG and Cucumber, including environments that use Selenium Grid. <!-- Source: https://docs.parasoft.com/display/SEL20261/System+Requirements, checked 2026-10-16 --> On <BrandName />, the driver is a `RemoteWebDriver` pointed at the grid, and your browser and OS choices go in its capabilities. [Migrate Your Selenium Suite](/support/docs/migrate-selenium-test-suite/) walks through the same changes for any Selenium project.

### Set Your Credentials

Create a `.env` file in the root of your project with your Username and Access Key. Make sure your tests read these values at runtime:

<VerifiedTag value="Verified" />

```text
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```

### Change the Hub URL

Where your tests create a local driver, create a `RemoteWebDriver` that uses this hub instead:

<VerifiedTag value="Verified" />

```text
@hub.lambdatest.com/wd/hub
```

Put `https://` and your credentials in front of it: `https://<your_username>:<your_access_key>@hub.lambdatest.com/wd/hub`.

### Set Your Capabilities

Set the browser, browser version and platform on your browser options, and your credentials in `LT:Options`. A Selenium 4 example:

<VerifiedTag value="Verified" />

```java
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

Build other combinations with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). For Selenium 3, see [Selenium Capabilities](/support/docs/selenium-automation-capabilities/). For full JUnit, TestNG and Cucumber projects, see [Selenium With Java](/support/docs/java-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/) and the [Capability Map](/support/docs/testmu-capability-map/).

### Keep Selenic in the Run

To keep Selenic recommendations or self-healing, leave the `-javaagent` argument from Step 1 on your command. Add `selfHealing=true` to the agent options to enable self-healing. Recommendations come from running `selenic_analyzer.jar` after the run. <!-- Source: https://docs.parasoft.com/display/SEL20261/Command+Line, checked 2026-10-16 --> View your test execution results on the <BrandName /> Web Automation dashboard.

## Step 3: Bring Test Cases Into Test Manager

### Link Selenic Runs

When a Selenium run on the grid completes, Test Manager creates a **<BrandName /> Automation** project. It holds a test case titled from the run, with BDD Scenarios created from the run's command logs. This automatic linking is supported for Selenium Web frameworks. Use it to track your Selenic runs in Test Manager.

To link a run to an existing test case instead, add the `tms.tc_id` key, and optionally `project`, to the `LT:Options` map from Step 2. The Test Manager docs spell it `lt:Options`, so do not add a second map. See [Managing Automated Tests with Test Manager](/support/docs/automated-test-cases-with-ai/).

### Generate Test Cases From SOAtest Reports

1. In your Test Manager project, open the **Test Case Listing** page and click **Generate With AI**.
2. Click the pin icon, select **Upload from device**, and attach your XML structure reports. The generator accepts JSON or XML files, up to 10 files of 50 MB each.
3. Review the generated test cases, select the ones you want, and click **Create**.

The generator writes new test cases from your reports. It does not import your SOAtest tests. See [Generate Test Cases with AI](/support/docs/generate-test-cases-with-ai/).

## Step 4: Re-create Your Tests in KaneAI

### Start From a Test Case

Open a saved test case and click **Automate with KaneAI** in its **Automate** section. This opens a KaneAI session pre-filled with the test case's steps. The action works on one test case at a time, in the Manual Test Steps or Behaviour Driven Development template. The test case must have steps or scenarios. The docs do not describe this action on test cases created from Selenium runs. See [Create & Manage Test Cases](/support/docs/manual-test-case-creation/#automate-with-kaneai).

### Start a New Web Test

On the KaneAI homepage, click **Create a Web Test**. You add steps by typing instructions in natural language, by running slash commands, or by interacting with the application directly. Use your Selenic test steps as a guide. See [Author your First Test](/support/docs/kane-ai-web-test/).

To record steps as you click and type, use [Manual Interaction](/support/docs/kaneai-manual-interaction/). Verify and assert steps must still be written instructions.

### Rebuild SOAtest REST Calls as API Steps

KaneAI API steps live inside a web test. Add an API through the slash command, open the API module, and paste a curl command. KaneAI populates the request details.

Write one curl command for each SOAtest REST Client you keep, using its URL, method, headers and payload. The REST Client's **Resolved URL** field shows how environment variables in the URL resolve. <!-- Source: https://docs.parasoft.com/display/SOA20261/REST+Client, checked 2026-10-16 --> This POST example comes from [API Testing & Network Assertions](/support/docs/kaneai-kb-api-testing-and-network-assertions/):

```bash
curl -X POST "https://api.example.com/users" \
  -H "Authorization: Bearer {{secret.api_token}}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin"
  }'
```

Click **validate** to check the response. A 200 response adds the API to your test steps. A 400 Bad Request or other error is not added automatically, so review it and add it manually if needed. You can paste multiple curl commands at once. KaneAI supports GET, POST, PUT, PATCH and DELETE. The KaneAI docs do not describe the OPTIONS, HEAD, TRACE or custom methods a SOAtest REST Client can send. See [KaneAI API Testing](/support/docs/kane-ai-api-testing/).

### Reuse Steps and Data

- **Modules:** Author shared steps, such as a login, once as a [module](/support/docs/kane-ai-modules/). A module groups a sequence of test steps into a single reusable unit.
- **Variables:** Re-create SOAtest environment variables as KaneAI [environment variables](/support/docs/kane-ai-using-variables/). <!-- Source: https://docs.parasoft.com/display/SOA20261/Configuring+Testing+in+Different+Environments, checked 2026-10-16 --> JSON variables are auto-generated from API calls, so later steps can reuse response values.

### Generate Code

A test saved as **Ready**, where every step has run and passed, generates code. Selenium Java is "Available on request" in Classic and "Not available" in New Experience. To turn it on, reach out to Support. Selenium Python is "Available (default)" in Classic. Playwright Python and JavaScript are "Available" in New Experience. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).

## Step 5: Run Your KaneAI Tests

1. In your Test Manager project, go to the **Test Run** section and click **Create Test Run**. Set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign the test cases and set their configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

To start a run from CI, copy the Test Run ID from the test run URL. Send it as `test_run_id` in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`, with Basic Authentication using your username and access key. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

[Configurations in KaneAI & Test Manager](/support/docs/test-runs-configurations/) describes the device scope. With the KaneAI toggle on, the available platforms are Desktop and Real Device. The doc also states:

- "Native app testing on Real Devices is available only for KaneAI-generated test runs."
- "Mobile browser testing on Real Devices is available for non-KaneAI test runs only."
- "Virtual Mobile configurations are available for non-KaneAI test runs only."

## What Does Not Carry Over

- **Selenic recorded data.** Selenic saves test execution data to `<USER_HOME>/parasoft/recorded_data` and builds recommendations from it. That data stays with Selenic, and KaneAI tests do not use it. <!-- Source: https://docs.parasoft.com/display/SEL20261/Command+Line, checked 2026-10-16 -->
- **SOAtest tools and data sources.** Tools in your `.tst` files, such as the JSON Assertor and JSON Data Bank, stay in SOAtest. So do suite, project and global data sources. Re-create the checks you need as KaneAI steps. <!-- Sources: https://docs.parasoft.com/display/SOA20261/JSON+Assertor, https://docs.parasoft.com/display/SOA20261/JSON+Data+Bank, https://docs.parasoft.com/display/SOA20261/Adding+a+Data+Source+at+the+Test+Suite+Project+or+Global+Level+soa, checked 2026-10-16 -->
- **Results and history.** Results that Selenic or `soatestcli` published to Parasoft DTP stay in DTP. <!-- Sources: https://docs.parasoft.com/display/SEL20261/Command+Line, https://docs.parasoft.com/display/SOA20261/CLI+Usage, checked 2026-10-16 -->

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Parasoft To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Migrate Your Selenium Suite](/support/docs/migrate-selenium-test-suite/): run an existing Selenium suite on the <BrandName /> cloud grid.
- [<BrandName /> Capability Map](/support/docs/testmu-capability-map/): capability mapping for moves from BrowserStack and Sauce Labs.
- [Sauce Labs To KaneAI Migration](/support/docs/saucelabs-to-kaneai-migration-guide/): move from Sauce Labs to KaneAI.
- [BrowserStack To KaneAI Migration](/support/docs/browserstack-to-kaneai-migration-guide/): move from BrowserStack to KaneAI.
