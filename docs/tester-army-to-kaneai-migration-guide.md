---
id: tester-army-to-kaneai-migration-guide
title: How to migrate from Tester Army to KaneAI
hide_title: true
sidebar_label: Tester Army To KaneAI Migration
description: Plan your Tester Army migration to KaneAI. Retrieve test steps with the Tester Army CLI or API, import them into Test Manager, and re-create them in KaneAI.
keywords:
  - tester army migration to kaneai
  - tester army to kaneai migration
  - migrate from tester army to kaneai
  - how to migrate from tester army to kaneai
  - testerarmy to kaneai
  - export tester army tests
url: https://www.testmuai.com/support/docs/tester-army-to-kaneai-migration-guide/
site_name: TestMu AI
slug: tester-army-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/tester-army-to-kaneai-migration-guide/
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
          "name": "Tester Army to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/tester-army-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/tester-army-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from Tester Army to KaneAI",
    "description": "Plan your Tester Army migration to KaneAI. Retrieve test steps with the Tester Army CLI or API, import them into Test Manager, and re-create them in KaneAI.",
    "url": "https://www.testmuai.com/support/docs/tester-army-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "tester army migration to kaneai",
      "tester army to kaneai migration",
      "migrate from tester army to kaneai"
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
        "name": "Step 1: Retrieve your Tester Army tests (Tester Army CLI)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "npm install -g testerarmy\nta auth\nta projects list --json\nta tests list --project <projectId> --all --json\nta tests get <testId> --json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Retrieve your Tester Army tests (Tester Army API)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "# One test with its steps\ncurl https://tester.army/api/v1/tests/<testId> \\\n  -H \"Authorization: Bearer $TESTERARMY_API_KEY\"\n\n# Tests in a project, up to 100 per page\ncurl \"https://tester.army/api/v1/tests?projectId=<projectId>&limit=100\" \\\n  -H \"Authorization: Bearer $TESTERARMY_API_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Import tests into Test Manager (Tester Army test JSON, trimmed)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"title\": \"Billing plan check\",\n  \"steps\": [\n    { \"title\": \"Log in with the saved admin account.\", \"type\": \"login\" },\n    { \"title\": \"Open the billing settings page.\", \"type\": \"act\" },\n    { \"title\": \"Verify the billing page shows the current plan.\", \"type\": \"assert\" }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Import tests into Test Manager (Test Manager CSV)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "CSV",
        "text": "Title,Steps\nBilling plan check,\"1. Log in with the saved admin account. 2. Open the billing settings page. 3. Verify the billing page shows the current plan.\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Re-create tests as Kane CLI files (test.md file)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\nmode: testing\nurl: https://app.example.com\n---\n\n# Billing plan check\n\n## Log in\nLog in with {{admin_email}} and {{admin_password}}. Verify the dashboard loads.\n\n## Check the current plan\nOpen the billing settings page. Verify the billing page shows the current plan."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Re-create tests as Kane CLI files (install, sign in and run)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "npm install -g @testmuai/kane-cli\nkane-cli login --oauth\nkane-cli testmd run billing_test.md --variables-file ./vars.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Kane CLI suites on the cloud grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "kane-cli plugin install remote-execution\nkane-cli testrun run tests/web/ --remote --parallel 4 --on-failure fail-fast"
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From Tester Army To KaneAI
* * *
This guide covers your Tester Army migration to KaneAI: retrieving tests, importing them into Test Manager, and re-creating them in KaneAI or Kane CLI. Tester Army (written TesterArmy in its own docs) uses AI agents to run natural language test steps on web and mobile apps. <!-- Sources: https://docs.tester.army/llms.txt, https://docs.tester.army/guides/writing-test-steps, checked 2026-10-16 -->


<b>[Note: KaneAI does not import or convert Tester Army tests. You retrieve each test's steps with the Tester Army CLI or API and import them into Test Manager through a CSV file. Then you re-create each test in natural language.]</b>



***
## What Moves From Tester Army and Where It Goes

| Tester Army asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Saved web and mobile tests | KaneAI tests or Kane CLI `_test.md` files | Re-create from the steps |
| Test titles and steps | Test Manager test cases | Import a CSV that you build |
| `login` steps and test accounts | KaneAI secrets and TOTP variables | Enter the values again |
| Preparation Test | A KaneAI module | Author the login once |
| `files` steps | KaneAI Files | Upload each file again |
| Groups | Test Manager test runs | Add the test cases |
| Production Monitoring | Scheduled test runs | Schedule the test run |
| Group webhooks | The KaneAI test run API | Call it from your pipeline |
| Run history and Issues | Stay in Tester Army | Not part of a test |

<!-- Sources: https://docs.tester.army/get-started/core-concepts, https://docs.tester.army/guides/writing-test-steps, https://docs.tester.army/run/prep-test, https://docs.tester.army/run/groups, https://docs.tester.army/run/production-monitoring, https://docs.tester.army/run/group-webhooks, https://docs.tester.army/run/results, https://docs.tester.army/run/issues, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account with KaneAI access.** The **Automate with KaneAI** action requires it. Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your username and access key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **The Tester Army CLI or an API key.** Step 1 covers the CLI. Create API keys under **Settings > API Keys** in Tester Army. <!-- Source: https://docs.tester.army/cli, checked 2026-10-16 --> Tester Army lists the CLI and the API in every plan, including Free. <!-- Source: https://docs.tester.army/account/plans-and-pricing, checked 2026-10-16 -->
- **Your test account details.** Tester Army's API returns each saved credential's label and username, but not its password or authenticator secret. <!-- Source: https://docs.tester.army/api-reference/projects/list-project-credentials, checked 2026-10-16 -->
- **A device build for KaneAI app tests.** Tester Army uses simulator and emulator builds, "not an `.ipa` built for physical devices". <!-- Source: https://docs.tester.army/mobile/overview, checked 2026-10-16 --> KaneAI app tests run on real devices, so upload an APK for Android or an IPA for iOS.
- **Kane CLI, if you want tests as files.** It needs Google Chrome, and Node.js 18 or higher for npm. See [Installing Kane CLI](/support/docs/kane-cli-installation/).

## Step 1: Retrieve Your Tester Army Tests

A Tester Army test describes one user flow as 1 to 30 ordered steps. <!-- Sources: https://docs.tester.army/get-started/core-concepts, https://docs.tester.army/cli/commands, checked 2026-10-16 --> The `ta tests get` command returns one test with its steps, and `ta tests list` lists a project's tests. Add `--json` for machine-readable output. <!-- Source: https://docs.tester.army/cli/commands, checked 2026-10-16 --> With the API, pass the returned `nextCursor` as `cursor` to get the next page. <!-- Source: https://docs.tester.army/api-reference/tests/list-tests, checked 2026-10-16 -->

<Tabs className="docs__val">

<TabItem value="tester-army-cli" label="Tester Army CLI" default>

```bash
npm install -g testerarmy
ta auth
ta projects list --json
ta tests list --project <projectId> --all --json
ta tests get <testId> --json
```
</TabItem>

<TabItem value="tester-army-api" label="Tester Army API">

```bash
# One test with its steps
curl https://tester.army/api/v1/tests/<testId> \
  -H "Authorization: Bearer $TESTERARMY_API_KEY"

# Tests in a project, up to 100 per page
curl "https://tester.army/api/v1/tests?projectId=<projectId>&limit=100" \
  -H "Authorization: Bearer $TESTERARMY_API_KEY"
```
</TabItem>

</Tabs>

<!-- Sources: https://docs.tester.army/cli, https://docs.tester.army/cli/commands, https://docs.tester.army/api-reference/introduction, https://docs.tester.army/api-reference/tests/get-a-test, https://docs.tester.army/api-reference/tests/list-tests, checked 2026-10-16 -->

Each test has a `title`, a `platform` of `web` or `mobile`, and a `steps` list. Each step has a `type`: `act`, `assert`, `login`, `files`, `screenshot`, `javascript` or `microphone`. The `act`, `assert`, `login` and `files` steps carry their text in a `title`. Every run skips a step marked `disabled: true`. <!-- Sources: https://docs.tester.army/api-reference/tests/get-a-test, https://docs.tester.army/guides/writing-test-steps, checked 2026-10-16 -->

Tests saved in Tester Army are natural language steps, not framework scripts. <!-- Source: https://tester.army/llms.txt, checked 2026-10-16 --> They have no exported code to run on the <BrandName /> cloud grid. This guide does not cover Tester Army's separate open source e2e framework. <!-- Source: https://tester.army/e2e.md, checked 2026-10-16 --> To run e2e web tests on <BrandName /> cloud Chrome, see [e2e by TesterArmy](https://www.testmuai.com/blog/e2e-by-testerarmy/).

## Step 2: Import Tests Into Test Manager

Test Manager has no importer for Tester Army tests, but it imports test cases from CSV. Build a CSV with one test per row. Put the test `title` in one column and the step titles, numbered `1. ... 2. ...`, in another. <!-- Source: https://docs.tester.army/guides/writing-test-steps (example step texts), checked 2026-10-16 -->

<Tabs className="docs__val">

<TabItem value="tester-army-json" label="Tester Army test (JSON, trimmed)" default>

```json
{
  "title": "Billing plan check",
  "steps": [
    { "title": "Log in with the saved admin account.", "type": "login" },
    { "title": "Open the billing settings page.", "type": "act" },
    { "title": "Verify the billing page shows the current plan.", "type": "assert" }
  ]
}
```
</TabItem>

<TabItem value="test-manager-csv" label="Test Manager CSV">

```csv
Title,Steps
Billing plan check,"1. Log in with the saved admin account. 2. Open the billing settings page. 3. Verify the billing page shows the current plan."
```
</TabItem>

</Tabs>

Then import the file:

1. In your Test Manager project, go to **Add Test Case > Import CSV**.
2. Upload the file and select the **Test cases use a single row** layout.
3. Map your columns to **Title** and **Steps**. Mapping at least one CSV header to **Title** is mandatory.
4. Map the values, review the preview, and start the import.

Each file can be up to 10 MB. See [Import Test Cases from CSV](/support/docs/csv-import/).

Alternatively, attach the JSON in the [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) through **Generate With AI**. It writes new test cases from the file instead of importing your tests.

## Step 3: Re-create Your Tests in KaneAI

### Start From a Test Case

Open an imported test case and click **Automate with KaneAI** in its **Automate** section. A KaneAI session opens with the test case's steps pre-filled, where you author the test and then execute it. This works on one saved test case at a time, and the test case must have steps. See [Create & Manage Test Cases](/support/docs/manual-test-case-creation/#automate-with-kaneai).

### Start a New Test

On the KaneAI homepage, click **Create a Web Test**, or **Create an App Test** for a mobile app. Then write each step in natural language. See [Author your First Test](/support/docs/kane-ai-web-test/) and [App Test](/support/docs/kane-ai-app-test/).

### Rewrite Each Step Type

- **`act` and `assert`:** Write actions as instructions and checks as natural language assertions, such as `assert "Your order has been placed" is displayed`. See [Assertions & Validation](/support/docs/kaneai-kb-assertions-and-validation/).
- **`login`:** Store passwords as [secrets](/support/docs/kane-ai-secrets/) and reference them with double curly braces. For authenticator codes, create a [TOTP variable](/support/docs/kaneai-totp/) from the Base32 key that Tester Army calls the authenticator secret. <!-- Source: https://docs.tester.army/auth/credentials, checked 2026-10-16 -->
- **`files`:** In a web test, add the file under **KaneAI > Variables > Files** and reference it as `{{file.alias}}`. In an app test, upload the file to the session, and KaneAI injects it into the device's storage. See [Upload and Download Files](/support/docs/kaneai-upload-and-download-files/).
- **`screenshot`:** A [test run instance](/support/docs/kaneai-test-run-instance-view/) shows a screenshot for each executed step. For baseline comparisons, add a [Visual Comparison](/support/docs/kaneai-smartui-visual-testing/) step.
- **`javascript`:** In a web test, type `/`, choose JavaScript, and paste the code. Tester Army fails this step when the code throws or returns `{ success: false, reason }`. <!-- Source: https://docs.tester.army/api-reference/tests/get-a-test, checked 2026-10-16 --> KaneAI stores a returned value in a variable, so add assertions for those checks. See [JavaScript Execution](/support/docs/kane-ai-javascript-execution/).

### Reuse Login Steps

A Tester Army Preparation Test logs in once and shares that session with the tests in a group. <!-- Source: https://docs.tester.army/run/prep-test, checked 2026-10-16 --> In KaneAI, save the login steps as a [module](/support/docs/kane-ai-modules/). Add it to other tests by typing `/` and selecting **Add Module**.

### Generate Code

A test saved as **Ready**, where every step has run and passed, generates code. In New Experience, which is being rolled out in phases, web tests generate Playwright Python or JavaScript. In Classic, Selenium Python is the default, and Selenium Java and Playwright are available on request. App tests generate Appium Python in Classic, which is "Coming soon" in New Experience. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).

### Re-create Tests as Kane CLI Files

Kane CLI runs natural language Markdown tests from `_test.md` files in your repository. Each `##` heading marks a step, and the agent reads the body under it. A step body should end in a check, so merge each `act` step with the `assert` step after it:

```markdown
---
mode: testing
url: https://app.example.com
---

# Billing plan check

## Log in
Log in with {{admin_email}} and {{admin_password}}. Verify the dashboard loads.

## Check the current plan
Open the billing settings page. Verify the billing page shows the current plan.
```

Save the file as `billing_test.md`. Then install Kane CLI, sign in, and run the test:

```bash
npm install -g @testmuai/kane-cli
kane-cli login --oauth
kane-cli testmd run billing_test.md --variables-file ./vars.json
```

The variables file supplies `{{admin_email}}` and `{{admin_password}}`. Set `"secret": true` on the password to mask it in logs. See [Variables & Context](/support/docs/kane-cli-variables-and-context/). The first run authors each step and saves a recording, and later runs replay from the cache. See [Test.md](/support/docs/kane-cli-testmd/).

- **Code export:** Add `--code-export --code-language python` or `javascript` to generate Playwright code. It requires a successful upload to Test Manager. See [Running test.md files](/support/docs/kane-cli-testmd-running/#code-export).
- **Shared login and guidance:** Move the login into a helper file that you add with `@import ./helpers/login.md`. Copy project memory and agent instructions into a context file such as `.testmuai/context.md`. <!-- Sources: https://docs.tester.army/guides/project-memory, https://docs.tester.army/run/agent-instructions, checked 2026-10-16 -->
- **Mobile apps:** Kane CLI runs mobile tests on virtual devices only, the iOS Simulator and the Android Emulator. Local mobile runs need macOS on Apple Silicon. See [Mobile Testing with Kane CLI](/support/docs/kane-cli-mobile/).

## Step 4: Run Your Tests

### KaneAI Test Runs

A Tester Army group of tests maps to a Test Manager test run. <!-- Source: https://docs.tester.army/run/groups, checked 2026-10-16 -->

1. In your project, open **Test Runs**, click **Create Test Run**, and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign the test cases and set their configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

[Configurations in KaneAI & Test Manager](/support/docs/test-runs-configurations/) sets the scope. With the KaneAI toggle on, the platforms are Desktop and Real Device. The doc also states:

- "Native app testing on Real Devices is available only for KaneAI-generated test runs."
- "Mobile browser testing on Real Devices is available for non-KaneAI test runs only."
- "Virtual Mobile configurations are available for non-KaneAI test runs only."

So in KaneAI test runs, you run your Tester Army simulator and emulator coverage on real devices. <!-- Source: https://docs.tester.army/mobile/overview, checked 2026-10-16 -->

Other Tester Army triggers and environments:

- **Production Monitoring:** Click the three dots next to a test run and select **Create Schedule**. See [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).
- **Group webhooks:** POST the test run ID from its URL to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Use Basic Authentication with your <BrandName /> username and access key. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).
- **Environments:** For web tests, fill **Replace Test Execution URL** when you run on HyperExecute. See [Dynamic URL Replacement](/support/docs/kaneai-dynamic-url-replacement/).

### Kane CLI Suites on the Cloud Grid

The `kane-cli testrun run --remote` command sends a suite of `_test.md` files to HyperExecute. Web suites run on Chrome, and mobile suites run on a virtual emulator or simulator. Your plan must include HyperExecute with macOS runner concurrency.

<VerifiedTag value="Verified" />

```bash
kane-cli plugin install remote-execution
kane-cli testrun run tests/web/ --remote --parallel 4 --on-failure fail-fast
```

See [Remote runs on the cloud grid](/support/docs/kane-cli-remote-execution/).

## What Does Not Carry Over

- **Run history and Issues.** Verdicts, videos, transcripts, logs and the deduplicated Issues list stay in Tester Army. It exports group runs as JUnit XML. <!-- Sources: https://docs.tester.army/run/results, https://docs.tester.army/run/issues, https://docs.tester.army/integrations/testrail, checked 2026-10-16 -->
- **Email inboxes and phone numbers.** Tester Army supplies these for verification codes. <!-- Source: https://docs.tester.army/get-started/introduction, checked 2026-10-16 --> Plan another way to receive those codes.
- **Exploration agent and discovery runs.** They have no saved steps to copy. <!-- Sources: https://docs.tester.army/get-started/core-concepts, https://docs.tester.army/run/discovery-runs, checked 2026-10-16 -->
- **`microphone` steps.** KaneAI has no documented microphone step. Its [Chrome Options](/support/docs/kaneai-chrome-options/) for web tests list `--use-file-for-fake-audio-capture` as an example switch.
- **Mobile viewports.** Tester Army can run web tests at a 390 x 844 `mobile` viewport. <!-- Source: https://docs.tester.army/run/viewport-size, checked 2026-10-16 --> With the KaneAI toggle on, mobile browser testing is not available.

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
       Tester Army To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Import Test Cases from CSV](/support/docs/csv-import/): CSV import in Test Manager.
- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): Katalon Studio web tests into KaneAI.
- [Autosana To KaneAI Migration](/support/docs/autosana-to-kaneai-migration-guide/): from Autosana flows.
- [Momentic To KaneAI Migration](/support/docs/momentic-to-kaneai-migration-guide/): from Momentic tests.
- [mabl To KaneAI Migration](/support/docs/mabl-to-kaneai-migration-guide/): from mabl tests.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): from testRigor tests.
