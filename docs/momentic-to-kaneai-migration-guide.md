---
id: momentic-to-kaneai-migration-guide
title: How to migrate from Momentic to KaneAI
hide_title: true
sidebar_label: Momentic To KaneAI Migration
description: Plan your Momentic migration to KaneAI. Collect your YAML tests, run any ejected Playwright code on TestMu AI, and re-create each test in natural language.
keywords:
  - momentic migration to kaneai
  - momentic to kaneai migration
  - migrate from momentic to kaneai
  - how to migrate from momentic to kaneai
  - momentic yaml tests to kaneai
url: https://www.testmuai.com/support/docs/momentic-to-kaneai-migration-guide/
site_name: TestMu AI
slug: momentic-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/momentic-to-kaneai-migration-guide/
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
          "name": "Momentic to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/momentic-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/momentic-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from Momentic to KaneAI",
    "description": "Plan your Momentic migration to KaneAI. Collect your YAML tests, run any ejected Playwright code on TestMu AI, and re-create each test in natural language.",
    "url": "https://www.testmuai.com/support/docs/momentic-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "momentic migration to kaneai",
      "momentic to kaneai migration",
      "migrate from momentic to kaneai"
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
        "name": "Pull dashboard-managed Momentic web tests into your repository",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx momentic import"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "List Momentic web and mobile test files",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx momentic list\nnpx momentic-mobile list"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Connect Playwright to the TestMu AI CDP endpoint",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test');\n\n(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n    }\n  }\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`\n  })\n\n  // Test code ...\n\n  await browser.close()\n})()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Momentic web test (checkout.test.yaml)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "fileType: momentic/test/v2\nid: silver-river-lantern\nurl: https://shop.example.com\nsteps:\n  - click: Checkout\n  - type:\n      text: jeff@example.com\n      into: Email input\n  - assert: An order confirmation is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The same flow rewritten as a Kane CLI test (checkout_test.md)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\nmode: testing\nurl: https://shop.example.com\n---\n\n# Checkout confirmation\n\n## Start checkout\nClick the Checkout button.\n\n## Enter the email\nType \"jeff@example.com\" into the Email input.\nVerify an order confirmation is visible."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Trigger a KaneAI test run on HyperExecute from CI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Basic <Base64Auth>' \\\n--data '{\n    \"test_run_id\": \"YOUR_TEST_RUN_ID\",\n    \"concurrency\": 1\n}'"
      }
    ],
    "dateModified": "2026-10-19T08:00:00+05:30"
  }) }}
></script>

# Migrating From Momentic To KaneAI
* * *
This guide covers your Momentic migration to KaneAI: how to re-create your end-to-end tests and run them on <BrandName />. KaneAI is the <BrandName /> testing agent that authors web and mobile tests from natural language.


<b>[Note: KaneAI does not import or convert Momentic tests. This guide follows a manual path. You keep your Momentic YAML files as the reference and run any Playwright code from Momentic on <BrandName />. Then you re-create each test in KaneAI in natural language.]</b>



***
## What Moves From Momentic and Where It Goes

| Momentic asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Web tests (`*.test.yaml`) | KaneAI web tests | Re-create each test in natural language |
| Mobile tests (`momentic-mobile`) | KaneAI app tests | Upload your app, then re-create the steps |
| Modules (`*.module.yaml`) | [KaneAI modules](/support/docs/kane-ai-modules/) | Save authored steps as a module |
| Environments, variables and secrets | [KaneAI variables](/support/docs/kane-ai-using-variables/) and [secrets](/support/docs/kane-ai-secrets/) | Re-create the values |
| `assert` steps | [Natural-language assertions](/support/docs/kaneai-kb-assertions-and-validation/) | Write each check as an assertion |
| `if` and `while` steps | [If / Else-If / Else blocks](/support/docs/kaneai-conditional-logic/) and [While Loops](/support/docs/kaneai-while-loops/) | Insert them from the `/` menu. If **While Loop** is missing, ask Support to enable it |
| `javascript` steps | [JavaScript steps](/support/docs/kane-ai-javascript-execution/) | Paste page-level code, and rework Node sandbox code |
| `request` steps | [API steps](/support/docs/kane-ai-api-testing/) | Rewrite each request as a curl command and paste it |
| `visualDiff` steps | [Visual Comparison steps](/support/docs/kaneai-smartui-visual-testing/) | Add the step; its first run sets a baseline |
| Playwright code from an Enterprise eject | <BrandName /> cloud grid | Connect to the CDP endpoint |

<!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 -->
<!-- Source: https://momentic.ai/docs/core-concepts/file-format, checked 2026-10-16 -->
<!-- Source: https://momentic.ai/docs/reference/commands/index, checked 2026-10-16 -->
<!-- Source: https://momentic.ai/docs/configuration/environments, checked 2026-10-16 -->
<!-- Source: https://momentic.ai/docs/get-started/how-momentic-works, checked 2026-10-16 -->

## Before You Start

You need:

- A <BrandName /> account. Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>.
- KaneAI access, which the **Automate with KaneAI** action requires.
- Your <BrandName /> username and access key, from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- For Kane CLI, Google Chrome, plus Node.js 18 or higher for an npm install ([Installing Kane CLI](/support/docs/kane-cli-installation/)).
- The Momentic CLI with an existing project config, signed in with `momentic login` or `MOMENTIC_API_KEY`. <!-- Source: https://momentic.ai/docs/cli-reference/momentic/commands/import, checked 2026-10-16 --> It requires Node.js 22.12.0 or later in the 22.x line, or 24.0.0 or later. If you have no project config, the Momentic onboarding wizard (`npx @momentic/wizard@latest`) creates one. <!-- Source: https://momentic.ai/docs/get-started/cloud-deprecation, checked 2026-10-16 -->
- For Playwright code, a Momentic Enterprise contract. Enterprise customers can ask for a one-time eject at contract termination. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 -->
- For KaneAI app tests, your app as an APK for Android or an IPA for iOS. KaneAI test runs put native apps on Real Devices. Kane CLI runs apps on the iOS Simulator or Android Emulator instead, so it takes a `.zip` simulator build or an `.apk`, not an `.ipa` ([Mobile Testing with Kane CLI](/support/docs/kane-cli-mobile/)).

## Step 1: Collect Your Momentic Test Files

Momentic tests and modules are `*.test.yaml` and `*.module.yaml` files in your repository. Momentic ships no exporter, and those files need none. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 -->

To pull web tests that are still managed in the Momentic dashboard into your repository, run `momentic import` from the web project root:

<VerifiedTag value="Verified" />

```bash
npx momentic import
```

With no arguments, it imports the workspace's web tests, their referenced modules and environments. It skips mobile tests and unused standalone modules. Imported environment variables can contain plaintext secrets, so move them to runtime secrets before you commit. <!-- Source: https://momentic.ai/docs/cli-reference/momentic/commands/import, checked 2026-10-16 --> Mobile tests use the separate `momentic-mobile` CLI, which has no cloud import command. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 -->

To build your inventory, list the test files. Each command prints one path per line.

<VerifiedTag value="Verified" />

```bash
npx momentic list
npx momentic-mobile list
```

<!-- Source: https://momentic.ai/docs/cli-reference/momentic/commands/list, checked 2026-10-16 -->
<!-- Source: https://momentic.ai/docs/cli-reference/momentic-mobile/commands/list, checked 2026-10-16 -->

## Step 2: Run Ejected Playwright Code on <BrandName />

Enterprise customers can ask their Momentic account team for a one-time eject to open-source Playwright at contract termination. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 --> Otherwise, skip this step.

If the code launches a local browser with `chromium.launch`, replace that call with a connection to the <BrandName /> CDP endpoint. Set `LT_USERNAME` and `LT_ACCESS_KEY` to your username and access key first.

<VerifiedTag value="Verified" />

```javascript
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  // Test code ...

  await browser.close()
})()
```

The `capabilities` object selects the browser, browser version and platform, and the comment lists the allowed browser names. See [How to Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/), [Playwright With Python](/support/docs/python-with-playwright/) and [Playwright Test Runner](/support/docs/playwright-test-runner/).

## Step 3: Re-create Your Tests in KaneAI

Re-create each Momentic test as a new KaneAI test written in natural language. Keep your Momentic suite running until each replacement covers the same checks.

### Start a New Test

Open [KaneAI](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective) and click **Author Browser Test**. For a mobile app, click **Author App Test**, select the **Android** or **iOS** tab, and add your app. Write each YAML step as an instruction, such as `Click the Checkout button`, then save the test to a project and folder.

Write each `assert` step as a natural-language assertion, such as `assert "Your order has been placed" is displayed`. Momentic AI actions describe a goal rather than steps. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 --> KaneAI's guidance is that more specific instructions give more accurate tests, so break each goal into explicit steps. See [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/) and [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/).

### Start From a Test Case

You can also start in Test Manager. Create a test case, add each YAML step as a test step with its check as the expected result, and save it. Then click **Automate with KaneAI** in the test case's **Automate** section. KaneAI opens a session pre-filled with the steps, where you author and run the test. The action works on one saved test case at a time, and the test case needs steps. See [Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai).

### Rebuild Modules, Variables and Secrets

Re-create each Momentic module as a KaneAI module. Author the steps, pause the session, select the steps and click **Create Module**. In other tests, type `/` and select **Add Module**. Modules support variables, parameters and secrets.

A Momentic environment holds a base URL and variables. <!-- Source: https://momentic.ai/docs/configuration/environments, checked 2026-10-16 --> Re-create those values as KaneAI [environment variables](/support/docs/kane-ai-using-variables/#environments). Selecting an environment before an authoring session starts is available on request, so ask Support to enable it. Store passwords and tokens as [KaneAI secrets](/support/docs/kane-ai-secrets/).

### Keep Tests in Your Repository With Kane CLI

If your team keeps tests next to the code, [Kane CLI](/support/docs/kane-cli-testmd/) stores tests as `_test.md` Markdown files that you commit. Each `##` heading marks a step, and the agent reads the natural-language text under it. Kane CLI does not read Momentic YAML as a test, so you rewrite each step.

<Tabs className="docs__val">

<TabItem value="momentic-yaml" label="Momentic test (checkout.test.yaml)" default>

```yaml
fileType: momentic/test/v2
id: silver-river-lantern
url: https://shop.example.com
steps:
  - click: Checkout
  - type:
      text: jeff@example.com
      into: Email input
  - assert: An order confirmation is visible
```

<!-- Source: https://momentic.ai/docs/core-concepts/file-format, checked 2026-10-16 -->

</TabItem>

<TabItem value="kane-cli-testmd" label="Kane CLI test (checkout_test.md)">

```markdown
---
mode: testing
url: https://shop.example.com
---

# Checkout confirmation

## Start checkout
Click the Checkout button.

## Enter the email
Type "jeff@example.com" into the Email input.
Verify an order confirmation is visible.
```

</TabItem>

</Tabs>

Install Kane CLI, sign in, and run the test:

```bash
npm install -g @testmuai/kane-cli
kane-cli login --oauth
kane-cli testmd run checkout_test.md --agent
```

The first run authors each step and saves a recording, and later runs replay from cache. Shared flows, such as a login, go in helper files pulled in with [`@import`](/support/docs/kane-cli-testmd-composition/).

Kane CLI runs web tests in Chrome. It runs app tests on an Android Emulator or iOS Simulator, on macOS Apple Silicon or on the HyperExecute grid with `kane-cli testrun run --remote`. A remote run needs a <BrandName /> plan that includes HyperExecute, with macOS runner concurrency, and the `remote-execution` plugin. See [Remote runs on the cloud grid](/support/docs/kane-cli-remote-execution/).

In Kane CLI 0.6.1 or later, `kane-cli context ingest` also accepts `.yaml` and `.yml` files as requirement sources. `kane-cli context extract` then proposes use-cases that cite the file's lines, and it consumes credits. From Kane CLI 0.7.1, ingest in a terminal continues straight into extraction. This gives the agent context for new tests. It does not import the Momentic test. See [Requirement Sources](/support/docs/kane-cli-assurance-sources/).

### Generate Code

KaneAI generates code for a test saved as **Ready**, where every step has run and passed. The frameworks available depend on the authoring experience:

| Framework and language | Classic | New Experience |
|---|---|---|
| Selenium Python | Available (default) | Not available |
| Selenium Java | Available on request | Not available |
| Playwright Python | Available on request | Available |
| Playwright C# | Available on request | Not available |
| Playwright JavaScript | Available on request | Available |
| Appium Python | Available (default) | Coming soon |

"Available on request" means you ask Support to enable it. To save the code, click **Download** on the test's **Code** tab. Kane CLI exports Playwright code in Python or JavaScript with `--code-export`, after a successful upload to Test Manager. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/) and [Kane CLI code export](/support/docs/kane-cli-tms-integration/#code-export).

## Step 4: Run Your KaneAI Tests

Momentic runs web tests on Chromium, Google Chrome or Chrome for Testing, and mobile tests on emulators and simulators. <!-- Source: https://momentic.ai/docs/quickstart/web, checked 2026-10-16 --> <!-- Source: https://momentic.ai/docs/quickstart/android, checked 2026-10-16 --> <!-- Source: https://momentic.ai/docs/quickstart/ios, checked 2026-10-16 --> On <BrandName />, KaneAI test runs execute on HyperExecute against the configurations you choose.

### Create a Test Run on HyperExecute

1. In Test Manager, open your project's test runs and click **Create Test Run**.
2. Choose **KaneAI Generated Test Cases** as the type.
3. Add test cases that have generated code, then assign people and configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

With the **KaneAI** toggle on, configurations offer the **Desktop** and **Real Device** platforms. Desktop configurations cover browsers such as Chrome, Firefox, Safari and Edge. Native app testing on Real Devices is available only for KaneAI-generated test runs. Virtual Mobile configurations are available for non-KaneAI test runs only. See [Configurations](/support/docs/test-runs-configurations/) and [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

### Trigger Test Runs From CI

To start a saved test run from GitHub Actions, Jenkins or another CI tool, copy the test run ID from its URL. Then call the Test Manager API with Basic Authentication from your username and access key:

```bash
curl --location 'https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic <Base64Auth>' \
--data '{
    "test_run_id": "YOUR_TEST_RUN_ID",
    "concurrency": 1
}'
```

The response returns links to the HyperExecute jobs. For apps on localhost or behind a firewall, start a [<BrandName /> Tunnel](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel-support) and pass its name in the `tunnel` parameter. See [Automating Test Runs Execution with CI/CD](/support/docs/kaneai-ci-cd-automation/).

## What Does Not Carry Over

- **Test source.** KaneAI and Kane CLI do not import or convert Momentic YAML. KaneAI imports tests only from Katalon, for desktop web tests ([Migration from Katalon](/support/docs/one-click-migration-from-katalon/)).
- **Momentic state.** Dashboard run history, AI memory and step caches stay in Momentic. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 -->
- **Results.** For standard report files, pass `--reporter junit` or `--reporter json` to `momentic run` or `momentic-mobile run`. Web runs also support `--reporter playwright-json`. <!-- Source: https://momentic.ai/docs/running-tests/results, checked 2026-10-16 -->
- **AI steps in a Playwright eject.** Momentic says AI actions, AI checks, the step cache, in-flow classification and auto-maintenance have no open-source equivalent. A Playwright port must express each as code, or drop it. <!-- Source: https://momentic.ai/docs/get-started/test-portability, checked 2026-10-16 -->
- **Visual baselines.** Momentic `visualDiff` golden files do not move. A KaneAI Visual Comparison step captures a new baseline on its first run. <!-- Source: https://momentic.ai/docs/reference/commands/index, checked 2026-10-16 -->
- **Emulators in KaneAI test runs.** Virtual Mobile configurations are for non-KaneAI test runs only. Use Kane CLI for emulator and simulator runs.

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
       Momentic To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [How to Migrate Existing Playwright Tests to <BrandName />](/support/docs/migrate-existing-playwright-tests/): run Playwright scripts through the CDP endpoint.
- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): import Katalon Studio desktop web test cases into KaneAI New Experience.
- [mabl To KaneAI Migration](/support/docs/mabl-to-kaneai-migration-guide/): re-create mabl tests in KaneAI.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): re-create testRigor tests in KaneAI.
