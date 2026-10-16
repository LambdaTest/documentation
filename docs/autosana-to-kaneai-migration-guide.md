---
id: autosana-to-kaneai-migration-guide
title: How to migrate from Autosana to KaneAI
hide_title: true
sidebar_label: Autosana To KaneAI Migration
description: Plan your Autosana migration to KaneAI. Export flows with the Autosana CLI, import them into Test Manager through CSV, then re-create them as KaneAI tests.
keywords:
  - autosana migration to kaneai
  - autosana to kaneai migration
  - migrate from autosana to kaneai
  - how to migrate from autosana to kaneai
  - export autosana flows
  - autosana flow.yaml
url: https://www.testmuai.com/support/docs/autosana-to-kaneai-migration-guide/
site_name: TestMu AI
slug: autosana-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/autosana-to-kaneai-migration-guide/
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
          "name": "Autosana to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/autosana-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/autosana-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from Autosana to KaneAI",
    "description": "Plan your Autosana migration to KaneAI. Export flows with the Autosana CLI, import them into Test Manager through CSV, then re-create them as KaneAI tests.",
    "url": "https://www.testmuai.com/support/docs/autosana-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "autosana migration to kaneai",
      "autosana to kaneai migration",
      "migrate from autosana to kaneai"
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
        "name": "Step 1: Export your Autosana flows (Autosana CLI export commands)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "# Write every dashboard flow, suite, and their hooks to ./.autosana (with explicit keys)\nautosana flows export --all\n\n# Or export a single suite and its flows\nautosana flows export --suite \"Smoke Tests\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Export your Autosana flows (Autosana List Flows API request)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Bash",
        "text": "# Get all flows\ncurl -X GET https://backend.autosana.ai/api/v1/flows \\\n  -H \"X-API-Key: YOUR_API_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Import flows into Test Manager (Autosana flow file)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "name: Checkout happy path\nsetup_hooks:\n  - seed-db\nteardown_hooks:\n  - reset-test-env\ninstructions:\n  - Add an item to the cart and check out\n  - Verify the order confirmation appears"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Import flows into Test Manager (Test Manager CSV)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "CSV",
        "text": "Title,Steps\nCheckout happy path,\"1. Add an item to the cart and check out 2. Verify the order confirmation appears\""
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>


# Migrating From Autosana To KaneAI
* * *
This guide covers your Autosana migration to KaneAI: exporting your flows, importing them into Test Manager, and re-creating and running them in KaneAI. In Autosana, you write end-to-end tests, called flows, in natural language for mobile apps and websites. <!-- Sources: https://docs.autosana.ai/introduction, https://docs.autosana.ai/flows, checked 2026-10-16 --> KaneAI also builds tests from natural language instructions, so your flow text is a useful starting point.


<b>[Note: KaneAI does not import or convert Autosana tests. You export flows with the Autosana CLI and import them into Test Manager through a CSV that you build. Then you re-create each flow in KaneAI.]</b>



***
## What Moves From Autosana and Where It Goes

| Autosana asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Mobile app flows | KaneAI app tests for Android and iOS | Re-create each flow from its instructions |
| Web flows | KaneAI web tests | Re-create each flow with **Create a Web Test** |
| Flow names and instructions | Test Manager test cases | Build a CSV from the export and import it |
| Suites | Test Manager folders and test runs | Map suite names to folders, then group tests in a test run |
| Suite Auth Instructions | A KaneAI module | Save the login steps as a module and reuse it |
| Variables and environment values | KaneAI variables and secrets | Create them again in KaneAI |
| Hooks | Not carried over | Re-create the setup they perform |
| Automations | Scheduled test runs and CI | Schedule a test run, or start it from CI through the API |
| Real-device runs | KaneAI test runs on real devices | Use a Real Device configuration with the KaneAI toggle on |
| Simulator and emulator runs | Not available for KaneAI test runs | Move that coverage to real devices, or run it with Kane CLI |
| Run history, recordings and Issues | Stay in Autosana | Not part of the export |

<!-- Sources: https://docs.autosana.ai/introduction, https://docs.autosana.ai/web-testing, https://docs.autosana.ai/suites, https://docs.autosana.ai/variables, https://docs.autosana.ai/hooks, https://docs.autosana.ai/automations, https://docs.autosana.ai/real-device-testing, https://docs.autosana.ai/issues, https://docs.autosana.ai/api-runs, https://docs.autosana.ai/code-managed-migrate, checked 2026-10-16 -->

## Before You Start

- **A <BrandName /> account.** Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your username and access key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI and Test Manager access.** **Automate with KaneAI** requires KaneAI access, and test runs live in Test Manager.
- **Your app build.** KaneAI app tests take an APK for Android or an IPA for iOS. Autosana runs an iOS `.app` build on simulators only, so you may need an `.ipa` built for physical devices. <!-- Source: https://docs.autosana.ai/real-device-testing, checked 2026-10-16 -->
- **The Autosana CLI.** Install it with `curl -fsSL https://get.autosana.ai | sh` or `pipx install autosana`, then run `autosana login`. <!-- Source: https://docs.autosana.ai/install-cli, checked 2026-10-16 --> Autosana's pricing page lists the CLI and tests as code on every plan. <!-- Source: https://autosana.ai/pricing, checked 2026-10-16 -->
- **An Autosana API key, for the API only.** Create it under **Settings > API Keys** in Autosana, or with `autosana keys create`. <!-- Sources: https://docs.autosana.ai/api-reference, https://docs.autosana.ai/install-cli, checked 2026-10-16 -->

## Step 1: Export Your Autosana Flows

Export your dashboard flows to files with the Autosana CLI. These commands come from Autosana's "Migrating Existing Flows" page:

<VerifiedTag value="Verified" />

```bash
# Write every dashboard flow, suite, and their hooks to ./.autosana (with explicit keys)
autosana flows export --all

# Or export a single suite and its flows
autosana flows export --suite "Smoke Tests"
```
<!-- Source: https://docs.autosana.ai/code-managed-migrate, checked 2026-10-16 -->

The export writes each flow as a `*.flow.yaml` file, each suite as a `_suite.yaml` manifest, and their setup and teardown hooks under `hooks/`. cURL hooks have no file form, so they stay in the Autosana dashboard. <!-- Source: https://docs.autosana.ai/code-managed-migrate, checked 2026-10-16 -->

A flow file needs only `name` and `instructions`. The instructions are one multiline prompt or a list of steps, which Autosana numbers into a single prompt. <!-- Source: https://docs.autosana.ai/code-managed-files, checked 2026-10-16 -->

If you prefer JSON, the Autosana List Flows API returns each flow's name and natural language instructions:

<VerifiedTag value="Verified" />

```bash
# Get all flows
curl -X GET https://backend.autosana.ai/api/v1/flows \
  -H "X-API-Key: YOUR_API_KEY"
```
<!-- Source: https://docs.autosana.ai/api-suites-flows, checked 2026-10-16 -->

The export holds natural language flows and hook files, not framework test code. So there is no exported code to run on the <BrandName /> cloud grid.

## Step 2: Import Flows Into Test Manager

Test Manager has no importer for Autosana files, but it imports test cases from CSV. Build one CSV from your exported flows, with one flow per row:

- A title column with the flow `name`.
- A steps column with the instructions, numbered as `1. ... 2. ...` in one cell.
- Optionally, a folder column with the suite name.

For example, the Autosana flow file below maps to the CSV row in the second tab.

<Tabs className="docs__val">

<TabItem value="autosana-flow-file" label="Autosana flow file" default>

```yaml
name: Checkout happy path
setup_hooks:
  - seed-db
teardown_hooks:
  - reset-test-env
instructions:
  - Add an item to the cart and check out
  - Verify the order confirmation appears
```
</TabItem>

<TabItem value="test-manager-csv" label="Test Manager CSV">

```csv
Title,Steps
Checkout happy path,"1. Add an item to the cart and check out 2. Verify the order confirmation appears"
```
</TabItem>

</Tabs>

<!-- Source for the flow file: https://docs.autosana.ai/code-managed-files, checked 2026-10-16 -->

Then import the file:

1. In your Test Manager project, go to **Add Test Case > Import CSV**.
2. Upload the file and select the **Test cases use a single row** layout.
3. Map your title column to **Title**, which is mandatory, and your steps column to **Steps**. If you added a folder column, map it to **Folder**.
4. Map the values, review the preview, and start the import.

Each file can be up to 10 MB. See [Import Test Cases from CSV](/support/docs/csv-import/) for the full workflow.

Autosana references such as `${env:LOGIN_PASSWORD}` are Autosana syntax. <!-- Source: https://docs.autosana.ai/code-managed-files, checked 2026-10-16 --> To reference a KaneAI variable or secret in a test case step, type `{{` and select it from the list. A pasted environment variable reference is not recognized. Using variables and secrets in test case steps is available on request. See [Use Variables, Parameters, and Secrets in Manual Test Cases and Modules](/support/docs/test-manager-variables-parameters-secrets/).

## Step 3: Re-create Your Flows in KaneAI

Re-create each flow as a KaneAI test. You can start from an imported test case or from a new test.

### Start From a Test Case

Open an imported test case and click **Automate with KaneAI** in its **Automate** section. This opens a KaneAI session pre-filled with the test case's steps, where you author the automated test and then execute it. It works on one saved test case at a time, and the test case must have steps.

If the steps use environment variables, choose the environment first. It cannot be changed once the session starts. See [Create & Manage Test Cases](/support/docs/manual-test-case-creation/#automate-with-kaneai).

### Start a New App Test

On the KaneAI homepage, click **Create an App Test**. Choose Android or iOS, select a real device, and upload your app. Then write each step in natural language, using your Autosana instructions as a guide. For web flows, click **Create a Web Test** instead. See [App Test](/support/docs/kane-ai-app-test/), [Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/) and the [app test writing guidelines](/support/docs/kane-ai-app-test-writing-guidelines/).

[Manual Interaction](/support/docs/kaneai-manual-interaction/) also records actions you perform on the app, such as clicks and typing, as steps. It supports Android apps, and iOS apps in portrait. Verify and assert steps must still be written instructions.

### Reuse Steps and Data

- **Modules:** Autosana Auth Instructions run your login once at the start of a suite. <!-- Source: https://docs.autosana.ai/suites, checked 2026-10-16 --> In KaneAI, author the login steps once and save them as a [module](/support/docs/kane-ai-modules/). Add it to other tests by typing `/` and selecting **Add Module**.
- **Variables and secrets:** Re-create Autosana variables as KaneAI [variables](/support/docs/kane-ai-using-variables/). Keep passwords and tokens as [secrets](/support/docs/kane-ai-secrets/).

### Generate Code

A test saved as **Ready**, where every step has run and passed, generates code. For native app tests, Appium Python is "Available (default)" in Classic and "Coming soon" in New Experience. For web tests, Classic generates Selenium Python by default, and New Experience generates Playwright Python and JavaScript. Other Classic web frameworks are available on request. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).

:::note
With Kane CLI, you write tests as natural language `_test.md` files and commit them to your repository. Kane CLI does not run Autosana `.flow.yaml` files, so you write each test again in that format. For mobile, Kane CLI runs on virtual devices only: the iOS Simulator and the Android Emulator. Local runs need macOS on Apple Silicon, and remote runs need HyperExecute with macOS runners. See [Test.md](/support/docs/kane-cli-testmd/) and [Mobile Testing with Kane CLI](/support/docs/kane-cli-mobile/).
:::

## Step 4: Run Your KaneAI Tests

Run KaneAI tests through a test run in Test Manager:

1. In your project, open **Test Runs** and click **Create Test Run**. Set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign the test cases and set their configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

[Configurations in KaneAI & Test Manager](/support/docs/test-runs-configurations/) describes the device scope. With the KaneAI toggle on, the available platforms are Desktop and Real Device. The doc also states:

- "Native app testing on Real Devices is available only for KaneAI-generated test runs."
- "Mobile browser testing on Real Devices is available for non-KaneAI test runs only."
- "Virtual Mobile configurations are available for non-KaneAI test runs only."

So in KaneAI test runs, you run your Autosana simulator and emulator coverage on real devices. Selecting several manufacturers, devices and OS versions in one configuration creates a larger device pool. A run can then proceed even if specific devices are unavailable.

To replace Autosana Automations, click the three dots next to a test run and select **Create Schedule**. See [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).

To replace the Autosana GitHub Action, call the test run API from your pipeline. <!-- Source: https://docs.autosana.ai/ci-cd-integration, checked 2026-10-16 --> Copy the Test Run ID from the test run URL. Send it in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Use your <BrandName /> username and access key for Basic Authentication. The response links to the HyperExecute job. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

## What Does Not Carry Over

- **Run history and results.** The export writes flows, suites and hooks only. Run history, recordings and the Issues list stay in Autosana. Its Runs API retrieves run results if you need a record. <!-- Sources: https://docs.autosana.ai/code-managed-migrate, https://docs.autosana.ai/issues, https://docs.autosana.ai/api-runs, checked 2026-10-16 -->
- **Hooks.** Script and launch-argument hooks export as files, and cURL hooks stay in the dashboard. KaneAI tests do not run Autosana hooks, so re-create the setup they perform. <!-- Sources: https://docs.autosana.ai/code-managed-files, https://docs.autosana.ai/code-managed-migrate, checked 2026-10-16 -->
- **Autosana syntax in instructions.** References such as `${hooks:...}`, `${file:...}` and `${env:...}`, and actions such as Run Appium Script, belong to Autosana. Rewrite those steps for KaneAI. <!-- Sources: https://docs.autosana.ai/flows, https://docs.autosana.ai/variables, checked 2026-10-16 -->
- **Run settings.** Run caching, auto-retries, two-device flows and parallel suites are Autosana settings. They do not transfer to KaneAI. For retries in CI, the test run API takes `retry_on_failure` and `max_retries`. <!-- Sources: https://docs.autosana.ai/flows, https://docs.autosana.ai/suites, checked 2026-10-16 -->

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
       Autosana To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Import Test Cases from CSV](/support/docs/csv-import/): bring test cases into Test Manager from a CSV file.
- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): import Katalon Studio desktop web test cases into KaneAI.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): move from testRigor to KaneAI.
- [Momentic To KaneAI Migration](/support/docs/momentic-to-kaneai-migration-guide/): move from Momentic to KaneAI.
- [mabl To KaneAI Migration](/support/docs/mabl-to-kaneai-migration-guide/): move from mabl to KaneAI.
- [Tester Army To KaneAI Migration](/support/docs/tester-army-to-kaneai-migration-guide/): move from Tester Army to KaneAI.
