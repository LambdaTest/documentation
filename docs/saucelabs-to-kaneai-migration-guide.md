---
id: saucelabs-to-kaneai-migration-guide
title: How to migrate from Sauce Labs to KaneAI
hide_title: true
sidebar_label: Sauce Labs To KaneAI Migration
description: Plan your Sauce Labs migration to KaneAI. Run Selenium, Appium and saucectl scripts on TestMu AI, bring test cases into Test Manager, and re-create flows.
keywords:
  - sauce labs migration to kaneai
  - sauce labs to kaneai migration
  - migrate from sauce labs to kaneai
  - how to migrate from sauce labs to kaneai
  - sauce ai test authoring to kaneai
  - saucectl to testmu ai migration
  - saucectl
url: https://www.testmuai.com/support/docs/saucelabs-to-kaneai-migration-guide/
site_name: TestMu AI
slug: saucelabs-to-kaneai-migration-guide/
canonical: https://www.testmuai.com/support/docs/saucelabs-to-kaneai-migration-guide/
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
          "name": "Sauce Labs to KaneAI migration",
          "item": `${BRAND_URL}/support/docs/saucelabs-to-kaneai-migration-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/saucelabs-to-kaneai-migration-guide/"
    },
    "headline": "How to migrate from Sauce Labs to KaneAI",
    "description": "Plan your Sauce Labs migration to KaneAI. Run Selenium, Appium and saucectl scripts on TestMu AI, bring test cases into Test Manager, and re-create flows.",
    "url": "https://www.testmuai.com/support/docs/saucelabs-to-kaneai-migration-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Other Docs",
    "keywords": [
      "sauce labs migration to kaneai",
      "sauce labs to kaneai migration",
      "migrate from sauce labs to kaneai"
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
        "name": "Step 1: Collect What You Need From Sauce Labs (list jobs and download artifacts with saucectl)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "saucectl jobs list --out json\nsaucectl artifacts download <jobID> <globPattern> --target-dir my-artifacts-dir"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Collect What You Need From Sauce Labs (list and download app builds with saucectl)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "saucectl storage list --out json\nsaucectl storage download 0244d466-ff99-4fa2-bee0-64afb2c407b0 --filename app.apk"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Run Your Existing Scripts on TestMu AI (Sauce Labs Remote WebDriver Endpoint)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://ondemand.us-west-1.saucelabs.com/wd/hub"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Run Your Existing Scripts on TestMu AI (TestMu AI Selenium Grid URL)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "@hub.lambdatest.com/wd/hub"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 2: Run Your Existing Scripts on TestMu AI (TestMu AI Appium Grid URL)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "@mobile-hub.lambdatest.com/wd/hub"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Run Your KaneAI Tests (start a TestMu AI Tunnel for KaneAI)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./LT --user YOUR_LAMBDATEST_USERNAME --key YOUR_LAMBDATEST_ACCESS_KEY  --env ht-prod -v -n TUNNEL_NAME"
      }
    ],
    "dateModified": "2026-10-16T08:00:00+05:30"
  }) }}
></script>

# Migrating From Sauce Labs To KaneAI
* * *
This guide covers your Sauce Labs migration to KaneAI and shows you how to move your testing to <BrandName />. KaneAI is the <BrandName /> testing agent that turns natural language into end-to-end tests for web and mobile apps. The steps cover scripts, app builds, test cases and Sauce AI for Test Authoring tests.

<b>[Note: KaneAI does not import or convert Sauce Labs tests. You run your scripts on the <BrandName /> cloud, bring test cases into Test Manager, and re-create flows in KaneAI in natural language.]</b>

***
## What Moves From Sauce Labs and Where It Goes

| Sauce Labs asset | Where it goes on <BrandName /> | How |
|---|---|---|
| Selenium scripts <!-- Source: https://docs.saucelabs.com/web-apps/automated-testing/selenium/, checked 2026-10-16 --> | <BrandName /> Selenium grid or HyperExecute | [Sauce Labs to <BrandName /> guide](/support/docs/saucelabs-to-testmu-migration-guide/) or [Sauce Labs to HyperExecute](/support/docs/saucelabs-to-hyperexecute-migrate/) |
| Appium scripts <!-- Source: https://docs.saucelabs.com/mobile-apps/automated-testing/appium.md, checked 2026-10-16 --> | <BrandName /> Appium grid | [Migrate Appium Tests From Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/) |
| Cypress, Playwright, TestCafe, Espresso and XCUITest suites run with saucectl <!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/, checked 2026-10-16 --> | <BrandName /> cloud | Framework guides for [Cypress](/support/docs/getting-started-with-cypress-testing/), [Playwright](/support/docs/playwright-test-runner/), [TestCafe](/support/docs/npm-plugin-for-testcafe-integration-with-testmu/), [Espresso](/support/docs/getting-started-with-espresso-testing/) and [XCUITest](/support/docs/getting-started-with-xcuitest/) |
| Sauce AI for Test Authoring test cases <!-- Source: https://docs.saucelabs.com/sauce-ai/ai-authoring/, checked 2026-10-16 --> | <BrandName /> cloud for generated code, and KaneAI | Export the code (Step 1), run it (Step 2) and re-create the test (Step 4) |
| Sauce AI Data Variables <!-- Source: https://docs.saucelabs.com/sauce-ai/test-authoring/data-variables/, checked 2026-10-16 --> | KaneAI variables and secrets | Re-create them (Step 4) |
| Chrome DevTools recordings replayed with saucectl <!-- Source: https://docs.saucelabs.com/web-apps/automated-testing/replay/, checked 2026-10-16 --> | KaneAI | Perform the flow again in KaneAI (Step 4) |
| App builds in Sauce Labs App Storage <!-- Source: https://docs.saucelabs.com/mobile-apps/app-storage/, checked 2026-10-16 --> | KaneAI app tests and Appium tests | Download them (Step 1), then upload in a [KaneAI app test](/support/docs/kane-ai-app-test/), or [through the API](/support/docs/application-setup-via-api/) for Appium tests |
| Test cases created in TestRail from Sauce Labs results <!-- Source: https://docs.saucelabs.com/basics/integrations/testrail/, checked 2026-10-16 --> | Test Manager | One-click [TestRail importer](/support/docs/one-click-migration-from-testrail/) (Step 3) |
| Sauce Connect tunnels <!-- Source: https://docs.saucelabs.com/secure-connections/sauce-connect-5/, checked 2026-10-16 --> | <BrandName /> Tunnel | A [<BrandName /> Tunnel](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel-support), selected in KaneAI (Step 5) |

## Before You Start

- **A <BrandName /> account.** Create one on the <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}><BrandName /> signup page</a>. Copy your Username and Access Key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI and Test Manager access.** **Automate with KaneAI** and **Create and Automate** require KaneAI access. You create KaneAI test runs in Test Manager.
- **Support requests, if needed.** Reach out to Support to enable New Experience, or code export frameworks marked as available on request.
- **saucectl.** It reads `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` from environment variables or a `credentials.yml` file. The npm install requires Node.js 16 or higher and npm 8 or higher. <!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/, checked 2026-10-16 -->
- **Sauce AI for Test Authoring, if you use it.** It is a paid add-on for Sauce Labs Enterprise accounts. <!-- Source: https://docs.saucelabs.com/sauce-ai/ai-authoring/, checked 2026-10-16 -->

## Step 1: Collect What You Need From Sauce Labs

Sauce Labs keeps test assets, including videos, screenshots and logs, for 30 days. Test parameters and metadata remain available. <!-- Source: https://docs.saucelabs.com/test-results/viewing-test-results/, checked 2026-10-16 --> Download what you need first.

List your jobs, then download the artifacts you want to keep. The list shows 20 jobs per page by default, so add `--page` or `--size` to see more: <!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/jobs/list/, checked 2026-10-16 -->

<VerifiedTag value="Verified" />

```bash
saucectl jobs list --out json
saucectl artifacts download <jobID> <globPattern> --target-dir my-artifacts-dir
```
<!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/jobs/list/ and https://docs.saucelabs.com/dev/cli/saucectl/artifacts/download/, checked 2026-10-16 -->

The default region is `us-west-1`. Add `--region eu-central-1` for the EU Central data center. <!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/jobs/list/, checked 2026-10-16 -->

Mobile App Storage keeps uploaded apps for up to 60 days. <!-- Source: https://docs.saucelabs.com/mobile-apps/app-storage/, checked 2026-10-16 --> List your builds, then download the ones you need:

<VerifiedTag value="Verified" />

```bash
saucectl storage list --out json
saucectl storage download 0244d466-ff99-4fa2-bee0-64afb2c407b0 --filename app.apk
```
<!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/storage/list/ and https://docs.saucelabs.com/dev/cli/saucectl/storage/download/, checked 2026-10-16 -->

Replace the sample file ID and file name with values from the list.

If you use Sauce AI for Test Authoring, save two things from each test case:

1. **The script.** Open **Test Authoring** > **Test Cases and Suites** and select the test case. On the **Code** tab, pick a language and framework in **Choose language**, then click **Get Code**. Copy the script into your project. <!-- Source: https://docs.saucelabs.com/sauce-ai/test-authoring/generate-the-script-code/, checked 2026-10-16 -->
2. **The intent.** The test case workspace shows the original prompts and the intent of each step. Keep them for Step 4. <!-- Source: https://docs.saucelabs.com/sauce-ai/test-authoring/manage-your-test-cases/, checked 2026-10-16 -->

Code options include Selenium, Playwright, WebdriverIO, Appium, Espresso and XCUITest, by language and platform. The script reflects the current version of the test case, so regenerate it after any edit. <!-- Source: https://docs.saucelabs.com/sauce-ai/test-authoring/generate-the-script-code/, checked 2026-10-16 -->

## Step 2: Run Your Existing Scripts on <BrandName />

Your Selenium and Appium scripts keep their test logic. You change the credentials, the endpoint and the capabilities:

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="saucelabs-endpoint" label="Sauce Labs Remote WebDriver Endpoint" default>

```text
https://ondemand.us-west-1.saucelabs.com/wd/hub
```
</TabItem>

<TabItem value="testmu-selenium-hub" label="TestMu AI Selenium Grid URL">

```text
@hub.lambdatest.com/wd/hub
```
</TabItem>

<TabItem value="testmu-appium-hub" label="TestMu AI Appium Grid URL">

```text
@mobile-hub.lambdatest.com/wd/hub
```
</TabItem>

</Tabs>

The Sauce Labs endpoint above is for the US West data center. <!-- Source: https://docs.saucelabs.com/basics/data-center-endpoints/, checked 2026-10-16 --> For <BrandName />, put `https://YOUR_USERNAME:YOUR_ACCESS_KEY` before the grid URL.

Follow the [Sauce Labs to <BrandName /> migration guide](/support/docs/saucelabs-to-testmu-migration-guide/) for Selenium and [Migrate Appium Tests From Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/) for Appium. Map `sauce:options` to `LT:Options` with the [capability map](/support/docs/testmu-capability-map/) and the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). <!-- Source: https://docs.saucelabs.com/dev/test-configuration-options/, checked 2026-10-16 -->

saucectl runs tests in the Sauce Labs cloud, so its `config.yml` stays behind. <!-- Source: https://docs.saucelabs.com/dev/cli/saucectl/, checked 2026-10-16 --> Use each framework's <BrandName /> guide instead. For example, the <BrandName /> Cypress CLI reads capabilities from `lambdatest-config.json`.

Treat code generated by Sauce AI like your other scripts in that framework. Replace any Sauce Labs endpoint, credentials or capabilities it contains.

## Step 3: Bring Test Cases Into Test Manager

**Automate with KaneAI** starts from a saved test case in Test Manager. Bring your test cases in first:

- **TestRail, qTest, Xray or Zephyr Scale.** Use the one-click importers for [TestRail](/support/docs/one-click-migration-from-testrail/), [qTest](/support/docs/one-click-migration-from-qtest/), [Xray](/support/docs/one-click-migration-from-xray/) (Jira Cloud) or [Zephyr Scale](/support/docs/one-click-migration-from-zephyr-scale/) (Jira Cloud). Sauce Labs documents a TestRail integration in which the TestRail CLI creates test cases from saucectl JUnit reports. <!-- Source: https://docs.saucelabs.com/basics/integrations/testrail/, checked 2026-10-16 -->
- **Spreadsheets.** Use [CSV import](/support/docs/csv-import/). Map at least one column to **Title**. Each file can be up to 10 MB.
- **Requirements.** The [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) writes test cases from text and files, including your saved Sauce AI prompts.

If you keep running scripts on <BrandName />, Test Manager can also track those runs:

- **Automatic linking.** Test Manager can create test cases from completed runs in an automatically created **<BrandName /> Automation** project. Their BDD scenarios are generated from each run's command logs. This works for Selenium Web frameworks only. See [automatic linking](/support/docs/automated-test-cases-with-ai/#automatic-linking).
- **Capability linking.** Add the `tms.tc_id` key to `lt:Options` to link a run to a test case, on HyperExecute and Web Automation tests. See [capability linking](/support/docs/automated-test-cases-linked-using-capability/).

## Step 4: Re-create Your Flows in KaneAI

In a KaneAI session, you add steps in natural language, with slash commands or by interacting with your app. Start from what you have:

- **A test case in Test Manager.** Open it and click **Automate with KaneAI** in its **Automate** section. KaneAI opens a session pre-filled with the steps, where you author and run the test. The action works on one test case at a time. It works with the Manual Test Steps and Behaviour Driven Development templates, and the test case must have steps or scenarios. See [Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai).
- **Generated test cases.** In the AI Test Case Generator, **Create and Automate** saves the selected test cases and sends them to KaneAI. It is experimental, so review the authored steps.
- **A Sauce AI test case.** Create a [KaneAI web test](/support/docs/kane-ai-web-test/) or [app test](/support/docs/kane-ai-app-test/). Write the objective in natural language from the prompts and step intents you saved.
- **A recorded or manual flow.** [Manual Interaction](/support/docs/kaneai-manual-interaction/) records the clicks, typing and navigation you perform in a KaneAI session as steps. It works on desktop web, Android apps and iOS apps in portrait, not mobile browsers. Write checks as instructions, because interactions cannot record assertions.

Then reuse what you can:

- Group repeated steps into [modules](/support/docs/kane-ai-modules/).
- Re-create Data Variables as [KaneAI variables](/support/docs/kane-ai-using-variables/), and passwords or tokens as [secrets](/support/docs/kane-ai-secrets/).
- Replace Sauce Visual checks with a [Visual Comparison step](/support/docs/kaneai-smartui-visual-testing/). <!-- Source: https://docs.saucelabs.com/visual-testing/, checked 2026-10-16 --> Its first run captures a new baseline.

A test saved as **Ready**, with every step run and passed, generates code. The [code generation](/support/docs/kane-ai-automation-code-generation/) frameworks depend on the authoring experience:

- **Classic:** Selenium Python and Appium Python by default. Selenium Java and Playwright Python, C# and JavaScript on request.
- **New Experience:** Playwright Python and Playwright JavaScript. Appium Python is coming soon.

## Step 5: Run Your KaneAI Tests

Run KaneAI tests in a Test Manager test run on HyperExecute:

1. In your project, open **Test Runs**, click **Create Test Run** and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign each test case and give it at least one configuration. Click **Save test run**.
4. Click **Run on HyperExecute** and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/). Replace Sauce AI schedules with **Schedule Test Run** or your CI pipeline. <!-- Source: https://docs.saucelabs.com/sauce-ai/ai-authoring/, checked 2026-10-16 -->

With the **KaneAI** toggle ON, configurations offer the Desktop and Real Device platforms. Native app testing on Real Devices is available only for KaneAI-generated test runs. Mobile browser testing on real devices and Virtual Mobile configurations are available for non-KaneAI test runs only. See [Configurations in KaneAI & Test Manager](/support/docs/test-runs-configurations/).

From CI, copy the Test Run ID from the test run URL and send it in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Use your <BrandName /> username and access key for Basic Authentication. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

For a KaneAI web test on a site behind a firewall, start a tunnel with `--env ht-prod` and select it under **Advanced Settings**:

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()}  --env ht-prod -v -n TUNNEL_NAME`}
</CodeBlock>
</div>

In CI, pass the tunnel name in the `tunnel` field. See [KaneAI tunnel support](/support/docs/kane-ai-geolocation-tunnel-proxy/).

## What Does Not Carry Over

- **Run history.** No <BrandName /> importer reads Sauce Labs job history, so your runs start a new history. Sauce Labs purges job asset files after 30 days. <!-- Source: https://docs.saucelabs.com/dev/api/jobs/, checked 2026-10-16 -->
- **Sauce AI test cases, suites and schedules.** KaneAI does not import them. You re-create them. <!-- Source: https://docs.saucelabs.com/sauce-ai/ai-authoring/, checked 2026-10-16 -->
- **Hidden Data Variables.** Their values cannot be viewed after they are created. <!-- Source: https://docs.saucelabs.com/sauce-ai/test-authoring/data-variables/, checked 2026-10-16 --> Take them from your own records.
- **saucectl files, recordings and tunnels.** KaneAI does not import saucectl `config.yml` files, Chrome DevTools recordings or Sauce Connect settings. See the table above.
- **Sauce Visual baselines.** A baseline is what a snapshot is compared to. <!-- Source: https://docs.saucelabs.com/visual-testing/, checked 2026-10-16 --> KaneAI captures a new baseline on the first run of each Visual Comparison step.
- **Cypress and WebdriverIO code export.** KaneAI does not generate Cypress or WebdriverIO code. Keep those suites as scripts on the <BrandName /> cloud.
- **Other products.** This guide does not cover Sauce Labs Error Reporting or Mobile App Distribution. <!-- Source: https://docs.saucelabs.com/llms.txt, checked 2026-10-16 -->

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
       Sauce Labs To KaneAI Migration
      </span>
    </li>
  </ul>
</nav>

## Related migration guides

- [Sauce Labs To <BrandName /> Migration](/support/docs/saucelabs-to-testmu-migration-guide/): Selenium 4 and Selenium 3 scripts.
- [Migrate Appium Tests From Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/): Appium mobile test suites.
- [Sauce Labs to HyperExecute](/support/docs/saucelabs-to-hyperexecute-migrate/): Selenium suites on HyperExecute.
- [<BrandName /> Capability Map](/support/docs/testmu-capability-map/): capability mapping for Sauce Labs users.
- [BrowserStack To KaneAI Migration](/support/docs/browserstack-to-kaneai-migration-guide/): the same path for BrowserStack users.
- [Parasoft To KaneAI Migration](/support/docs/parasoft-to-kaneai-migration-guide/): move from Parasoft Selenic and SOAtest to KaneAI.
