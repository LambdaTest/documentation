---
id: testrigor-to-kaneai-migration-guide
title: How to migrate from testRigor to KaneAI
hide_title: true
sidebar_label: testRigor To KaneAI Migration
description: Plan your testRigor migration to KaneAI. Collect steps with the testRigor MCP server, bring data sets over as CSV, and re-create each test in natural language.
keywords:
  - testrigor migration to kaneai
  - testrigor to kaneai migration
  - migrate from testrigor to kaneai
  - how to migrate from testrigor to kaneai
  - testrigor mcp server get test case
  - testrigor data set csv export
  - testrigor reusable rules to kaneai modules
url: https://www.testmuai.com/support/docs/testrigor-to-kaneai-migration-guide/
site_name: TestMu AI
slug: testrigor-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/testrigor-to-kaneai-migration-guide/
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
          "name": "testRigor to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/testrigor-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/testrigor-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from testRigor to KaneAI",
    "description": "Plan your testRigor migration to KaneAI. Collect steps with the testRigor MCP server, bring data sets over as CSV, and re-create each test in natural language.",
    "url": "https://www.testmuai.com/support/docs/testrigor-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "testrigor migration to kaneai",
      "testrigor to kaneai migration",
      "migrate from testrigor to kaneai"
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
        "name": "Step 1: Collect Your testRigor Test Cases and Data (Connect the testRigor MCP server)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "claude mcp add --transport http testrigor https://api2.testrigor.com/api/v1/mcp --header \"personal-access-token: <your-token>\" -s user"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Re-create API Steps (testRigor API Step)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "call api get \"https://jsonplaceholder.typicode.com/users/10\" with headers \"Content-Type:application/json\" and \"Accept:application/json\" and get \"$..catchPhrase\" and save it as \"searchWord\" and then check that http code is 200"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Re-create API Steps (curl Command for KaneAI)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "curl -X GET \"https://jsonplaceholder.typicode.com/users/10\" \\\n  -H \"Content-Type: application/json\" \\\n  -H \"Accept: application/json\""
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From testRigor To KaneAI
* * *
This guide covers your testRigor migration to KaneAI, the <BrandName /> testing agent that builds tests from natural language instructions. The guide covers what to collect from testRigor, where each asset goes on <BrandName />, and how to run the re-created tests.

testRigor tests are written as steps in what testRigor calls "plain English". <!-- Source: https://testrigor.com/, checked 2026-10-16 --> KaneAI also takes natural language instructions. You re-create each testRigor step as an instruction in a KaneAI session.

<b>[Note: KaneAI does not import or convert testRigor tests. You collect your steps and data with testRigor's own tools, optionally bring test cases into Test Manager, and re-create each test in KaneAI.]</b>

***
## What Moves From testRigor and Where It Goes

| testRigor asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Test case steps | KaneAI test cases | Re-create the steps in a KaneAI session |
| Test case names and steps, for tracking | Test Manager test cases | Build a CSV from the collected steps and import it |
| Reusable rules | KaneAI modules | Re-create the steps once and save them as a module |
| Test Data (global variables) | KaneAI variables and secrets | Re-create each value |
| Data Sets | Datasets in Test Manager | Download as CSV in testRigor, then import in the dataset editor |
| `call api` steps | API steps in a KaneAI test | Paste a curl command for the same request |
| Authenticator-app 2FA | KaneAI TOTP variables | Add the Base32 secret key |
| Test case files in a repo (`.txt`, `.yaml`) | Kane CLI `_test.md` files | Re-write browser test steps as a [Markdown test](/support/docs/kane-cli-testmd/) |
| Run history and execution reports | Stay in testRigor | Export what you need from testRigor first |

<!-- Source: https://testrigor.com/how-to-utilise-testrigors-mcp-server/, checked 2026-10-16 -->
<!-- Source: https://testrigor.com/releases/release-notes-error-navigation-export-data-sets-background-jobs/, checked 2026-10-16 -->
<!-- Source: https://testrigor.com/how-to-articles/how-to-do-api-testing-using-testrigor/, checked 2026-10-16 -->
<!-- Source: https://github.com/TestRigor/skills/blob/main/testrigor-write-tests/SKILL.md, checked 2026-10-16 -->
<!-- Source: https://testrigor.com/, checked 2026-10-16 -->
<!-- Source: https://testrigor.com/blog/release-notes-multiple-db-connections-export-executions-scroll-wheel-video-validation-auto-apply-rules-rerun-confirmation-popup/, checked 2026-10-16 -->

## Before You Start

- A <BrandName /> account with KaneAI access. Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>.
- A Test Manager project for the re-created tests and datasets.
- Your <BrandName /> username and access key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey). The testRigor integration and CI runs use them.
- A testRigor account with access to your suites.
- A testRigor Personal Authentication Token. In testRigor, click your username, select **API Tokens**, and click **Generate New Token**. <!-- Source: https://testrigor.com/command-line/, checked 2026-10-16 -->
- An MCP client. testRigor's MCP guide covers Claude Code and Cursor. <!-- Source: https://testrigor.com/how-to-utilise-testrigors-mcp-server/, checked 2026-10-16 -->

## Step 1: Collect Your testRigor Test Cases and Data

Connect testRigor's MCP server to your MCP client. testRigor documents this command for Claude Code:

<VerifiedTag value="Verified" />

```bash
claude mcp add --transport http testrigor https://api2.testrigor.com/api/v1/mcp --header "personal-access-token: <your-token>" -s user
```

<!-- Source: https://testrigor.com/how-to-utilise-testrigors-mcp-server/, checked 2026-10-16 -->

Other MCP clients use the same endpoint with a `personal-access-token` header. <!-- Source: https://github.com/TestRigor/skills (README, linked from https://testrigor.com/write-run-maintain-testrigor-tests-with-claude-code/), checked 2026-10-16 --> Then use these testRigor tools:

- **List test suites** lists your test suites.
- **List test cases** lists the test cases in a suite.
- **Get test case** returns details such as the description, UUID and steps. Save each test's steps as text.
- **List rules** and **Get rule** return your reusable rules.
- **List global variables** returns what the testRigor UI calls Test Data.
- **Get data set** returns a data set's full schema and row values.

<!-- Source: https://testrigor.com/how-to-utilise-testrigors-mcp-server/, checked 2026-10-16 -->

To save a Data Set as a file, open the **Test Data** page in testRigor, go to **Data Sets**, and download it as CSV. <!-- Source: https://testrigor.com/releases/release-notes-error-navigation-export-data-sets-background-jobs/, checked 2026-10-16 -->

If you keep tests as files for the testRigor CLI, a `.txt` test case holds only steps, and a `.yaml` one holds them under `customSteps`. <!-- Source: https://github.com/TestRigor/skills/blob/main/testrigor-write-tests/SKILL.md, checked 2026-10-16 --> testRigor's Test Automation Blueprint also mentions exporting YAML or txt files from a suite. <!-- Source: https://testrigor.com/test-automation-blueprint/, checked 2026-10-16 -->

## Step 2: Keep Running testRigor Tests on <BrandName /> (Optional)

While you re-create tests, testRigor can keep running your existing suite on the <BrandName /> cloud through its integration.

1. In testRigor, go to **Settings** > **Integrations**. Enable the integration, enter your <BrandName /> username and access key, and click **Save**.
2. Open **Settings** > **Multiple browsers** for desktop web, or **Settings** > **Multiple devices** for mobile.
3. Select the provider, add browsers or devices, and click **Save**. testRigor's guide labels the provider `LAMBDA_TEST`.

<!-- Source: https://testrigor.com/lambdatest-integration/, checked 2026-10-16 -->

For each test case run, testRigor creates one build on <BrandName /> per browser or device. <!-- Source: https://testrigor.com/lambdatest-integration/, checked 2026-10-16 --> See [testRigor Integration](/support/docs/testrigor-integration/).

## Step 3: Bring Test Cases Into Test Manager (Optional)

testRigor documents CSV exports for Data Sets and run summaries, not test case steps. <!-- Source: https://testrigor.com/releases/release-notes-error-navigation-export-data-sets-background-jobs/, checked 2026-10-16 --> <!-- Source: https://support.testrigor.com/support/solutions/articles/154000204617-august-23-2024-release-notes-download-test-run-summary-dynamic-hidden-variables-, checked 2026-10-16 --> To load your cases into Test Manager, build the CSV yourself.

1. Create a CSV with one row per test case: the test name in one column and the numbered steps in another.
2. In your Test Manager project, go to **Add Test Case > Import CSV**.
3. Select **Test cases use a single row**, where a test case's steps are combined in one row and numbered.
4. Map the name column to **Title**, which is mandatory, and the steps column to **Steps**.
5. Map the values, review the preview, and start the import. Each file can be up to 10 MB.

See [Import Test Cases from CSV](/support/docs/csv-import/).

## Step 4: Re-create Your Tests in KaneAI

### Start From a Test Case

Open a saved test case and click **Automate with KaneAI** in its **Automate** section. This opens a KaneAI session pre-filled with the test case's steps, where you author the automated test and then execute it. This works on one test case at a time, and the test case must have steps. See [Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai).

### Start a New Test

You can also start in KaneAI. Match each testRigor suite type to a KaneAI test:

- **Desktop Web Testing:** create a [web test](/support/docs/kane-ai-web-test/).
- **Mobile Web Testing:** create a [mobile browser test](/support/docs/author-your-first-mobile-browser-test/). KaneAI test runs do not run mobile browsers on Real Devices (see Step 5). Run the test with **Execute test case** after you save it.
- **Native and Hybrid Mobile:** for a native Android or iOS app, create an [app test](/support/docs/kane-ai-app-test/) and upload the app.

<!-- Source: https://testrigor.com/how-to-articles/how-to-do-api-testing-using-testrigor/, checked 2026-10-16 -->

Type each testRigor step as a natural language instruction and run it in the session.

### Rebuild Rules, Test Data and Data Sets

- **Reusable rules:** A module groups test steps into one reusable unit. Author and run the rule's steps, pause the session, select them, and click **Create Module**. Add it to other tests with `/` and **Add Module**. See [Modules](/support/docs/kane-ai-modules/).
- **Test Data:** Global variables work across test cases in your organization, and environment variables change by environment. Create them with `/` and **Add a variable**, or on the Variables page. A step such as `Set username as John` creates a local variable. See [Variables in KaneAI](/support/docs/kane-ai-using-variables/) and [Secrets](/support/docs/kane-ai-secrets/).
- **Data Sets:** In your Test Manager project, open **Datasets**. Use **Import Data** in the dataset editor to load the testRigor CSV, verify the data, and save. See [Datasets](/support/docs/kane-ai-using-datasets/).
- **Authenticator-app 2FA:** Create a TOTP variable from the Base32 secret key, then use `{{totp.variable_name}}` in a step. See [TOTP Authentication](/support/docs/kaneai-totp/).

### Re-create API Steps

Re-create each testRigor `call api` step as a KaneAI API step. Add an API through the slash command, paste a curl command, and validate it. KaneAI fills in the request details and stores a successful response as a [JSON variable](/support/docs/kaneai-kb-api-testing-and-network-assertions/). See [API Testing](/support/docs/kane-ai-api-testing/).

<Tabs className="docs__val">

<TabItem value="testrigor-api-step" label="testRigor API Step" default>

```text
call api get "https://jsonplaceholder.typicode.com/users/10" with headers "Content-Type:application/json" and "Accept:application/json" and get "$..catchPhrase" and save it as "searchWord" and then check that http code is 200
```

</TabItem>

<TabItem value="kaneai-curl-command" label="curl Command for KaneAI">

```bash
curl -X GET "https://jsonplaceholder.typicode.com/users/10" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

</TabItem>

</Tabs>

<!-- Source: https://testrigor.com/how-to-articles/how-to-do-api-testing-using-testrigor/, checked 2026-10-16 -->

The curl command covers only the request. Validating it shows the response status. To re-create the value extraction, reference the stored JSON variable in a later step.

### Generate Code

KaneAI generates code only for a test saved as **Ready**, which means every step has run and passed. Framework support depends on the authoring experience:

| Framework | Language | Classic | New Experience |
|---|---|---|---|
| Selenium | Python | Available (default) | Not available |
| Selenium | Java | Available on request | Not available |
| Playwright | Python | Available on request | Available |
| Playwright | C# | Available on request | Not available |
| Playwright | JavaScript | Available on request | Available |
| Appium | Python | Available (default) | Coming soon |

To enable an option marked "Available on request", or the New Experience, contact support. See [Code Generation](/support/docs/kane-ai-automation-code-generation/).

## Step 5: Run Your KaneAI Tests

1. In your Test Manager project, go to **Test Runs**, click **Create Test Run**, and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign each test case, add configurations, and save the run.
4. Click **Run on HyperExecute** and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

With the **KaneAI** toggle on, test run configurations offer **Desktop** and **Real Device**. As [Configurations](/support/docs/test-runs-configurations/) states:

- "Native app testing on Real Devices is available only for KaneAI-generated test runs."
- "Mobile browser testing on Real Devices is available for non-KaneAI test runs only."
- "Virtual Mobile configurations are available for non-KaneAI test runs only."

To trigger a saved run from CI/CD tools such as GitHub Actions or Jenkins, send a POST request with its test run ID to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Copy the ID from the test run's URL, and authenticate with your <BrandName /> username and access key. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

In place of testRigor's localhost tunnel, KaneAI supports tunneling for websites hosted locally or behind a firewall. <!-- Source: https://testrigor.com/command-line/, checked 2026-10-16 --> See [Geolocation, Tunnel and Proxy](/support/docs/kane-ai-geolocation-tunnel-proxy/).

## What Does Not Carry Over

- **Tests, rules and test data.** KaneAI does not import or convert testRigor tests. You re-create each test, rule and value.
- **Run history and reports.** testRigor exports executions as `.docx` or `.pdf` files and run summaries as CSV. These stay as files. <!-- Source: https://testrigor.com/blog/release-notes-multiple-db-connections-export-executions-scroll-wheel-video-validation-auto-apply-rules-rerun-confirmation-popup/, checked 2026-10-16 --> <!-- Source: https://support.testrigor.com/support/solutions/articles/154000204617-august-23-2024-release-notes-download-test-run-summary-dynamic-hidden-variables-, checked 2026-10-16 -->
- **Version history.** testRigor's Version History for each test case stays in testRigor. <!-- Source: https://testrigor.com/releases/release-notes-version-control-rerun-failed-team-folders/, checked 2026-10-16 -->
- **Native Windows apps and mainframe tests.** testRigor covers native Windows applications in paid versions, and mainframe apps. <!-- Source: https://testrigor.com/, checked 2026-10-16 --> [Code Generation](/support/docs/kane-ai-automation-code-generation/) says KaneAI "is available for desktop web applications as well as native mobile applications currently". These tests have no KaneAI target.
- **Email, SMS and phone calls.** testRigor runs these through its own commands and a Twilio integration. <!-- Source: https://testrigor.com/, checked 2026-10-16 --> This guide does not map them to KaneAI. [TOTP variables](/support/docs/kaneai-totp/) generate authenticator-app codes from a shared secret key.
- **Mobile browser runs on real devices.** Per [Configurations](/support/docs/test-runs-configurations/), "Mobile browser testing on Real Devices is available for non-KaneAI test runs only."
- **Labels.** testRigor labels do not transfer. <!-- Source: https://testrigor.com/test-automation-blueprint/, checked 2026-10-16 --> Add tags when you save each KaneAI test.

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
       testRigor To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Import Test Cases from CSV](/support/docs/csv-import/): load test case titles and steps into Test Manager.
- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): the one-click importer for Katalon Studio desktop web tests.
- [Testim To KaneAI Migration](/support/docs/testim-to-kaneai-migration-guide/): the matching guide for Testim tests.
- [mabl To KaneAI Migration](/support/docs/mabl-to-kaneai-migration-guide/): the matching guide for mabl tests.
- [Momentic To KaneAI Migration](/support/docs/momentic-to-kaneai-migration-guide/): the matching guide for Momentic tests.
- [Autosana To KaneAI Migration](/support/docs/autosana-to-kaneai-migration-guide/): the matching guide for Autosana flows.
- [ACCELQ To KaneAI Migration](/support/docs/accelq-to-kaneai-migration-guide/): the matching guide for ACCELQ tests.
