---
id: test-cards-in-linear
title: Test Cards in Linear
hide_title: true
sidebar_label: Test Cards in Linear
description: Show Test Manager test cases and test runs as live cards on Linear issues, with the latest results, steps, and a coverage summary that update automatically.
keywords:
  - test cards in linear
  - linear test cases
  - linear test results
  - test manager linear integration
  - linear test coverage
url: https://www.testmuai.com/support/docs/test-cards-in-linear/
site_name: TestMu AI
slug: test-cards-in-linear/
canonical: https://www.testmuai.com/support/docs/test-cards-in-linear/
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
          "name": "Test Cards in Linear",
          "item": `${BRAND_URL}/support/docs/test-cards-in-linear/`
        }]
      })
    }}
></script>

# Test Cards in Linear

Test cards bring your Test Manager results into Linear. Link a test case or a test run to a Linear issue, and the issue shows its latest results as cards that update automatically. Your team can see what was tested and whether it passed without leaving Linear.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linear-issue-test-cards.png').default} alt="A Linear issue showing test case, test run, and coverage cards under Resources" className="doc_img"/>

### Before you begin

- A Linear account and a Linear personal API key.
- Access to Test Manager, to link tests to Linear issues.
- An admin role, if you want to share the Linear connection with your whole organization.

### Step 1: Connect Linear

1. Go to **Integrations** and find **Linear App**. Click **Connect**.
2. In Linear, go to **Settings > API**, create a personal API key, and copy it.
3. Paste the key into **API Token** and click **Install**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linear-app-setup.png').default} alt="Linear App setup form with the API Token field" className="doc_img"/>

For a detailed walkthrough, see [Linear App Integration](/support/docs/linear-app-integration/).

### Step 2: Turn on test cards

1. On the **Linear App** card, click **⋯** and choose **Info**.
2. Switch on **Test cards in Linear**.

The section shows **Healthy** when your cards are up to date.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/test-cards-toggle.png').default} alt="Linear App connection details with Test cards in Linear turned on" className="doc_img"/>

:::tip Share with your team
Admins can click **⋯** > **Share** on the Linear App card, so everyone in the organization gets test cards without connecting Linear themselves.
:::

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linear-app-menu.png').default} alt="Linear App card menu with Info and sharing options" className="doc_img"/>

:::note
If a teammate connects Linear with their own API key, they need to turn on test cards for their own connection too.
:::

### Step 3: Link tests to a Linear issue

1. In Test Manager, open a test case or a test run.
2. Open the **Issues** tab and click **Link Issue**.
3. Select **Linear**, enter the issue key (for example, `QA-165`) or paste the issue link, and click **Link Issue**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/link-issue-dialog.png').default} alt="Link Issues dialog with Linear selected and an issue key entered" className="doc_img"/>

Within a few seconds, the cards appear under **Resources** in the Linear issue. To learn more about linking, see [Link Linear Issues with Test Manager](/support/docs/link-linear-issues-with-test-manager/).

### What the cards show

Click any card in Linear to open it. Each card has an **Open in** link that takes you to the same item in Test Manager.

#### Test case card

Shows the latest result of a test case and everything needed to run it again:

- The latest result, the test run it came from, and the browser and OS it ran on.
- Priority, preconditions, and each step with its expected outcome.
- Earlier results, when the test case ran in more than one test run.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/test-case-card-side-by-side.png').default} alt="A test case in Test Manager next to its test case card in Linear" className="doc_img"/>

#### Test run card

Shows how a test run is going:

- The overall result, progress, and pass rate.
- The result of every test in the run, grouped by browser and OS.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/test-run-card-side-by-side.png').default} alt="A test run in Test Manager next to its test run card in Linear" className="doc_img"/>

#### Coverage card

One summary of everything linked to the issue:

- **Health**: **Healthy** when all linked tests pass, **Failing** when any test fails, and **Incomplete** when some tests have not passed yet.
- **Needs attention**: the tests that failed, and where they failed.
- A results chart, plus every linked test, every execution, and every run.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/coverage-card.png').default} alt="The coverage card with health, tests that need attention, a results chart, and runs" className="doc_img"/>

### Keeping cards up to date

Cards update on their own within seconds when you record a result, rename a test or test run, edit steps, or link and unlink tests in Test Manager. When you unlink a test, its card is removed from the issue.

- **To refresh all cards**, open **Info** on the Linear App card and click **Sync test cards**.
- **To stop updates**, switch off **Test cards in Linear**. Cards already in Linear stay as they are. Turn it back on to bring them up to date.

### Troubleshooting

**Cards do not appear on an issue.** Check that **Test cards in Linear** is on, and that the test is linked to the correct issue key in Test Manager. If you connected Linear with your own API key, turn on test cards for your connection.

**The connection shows Needs attention.** Follow the **Next step** shown in the **Test cards in Linear** section, for example, reconnecting Linear.

**A card looks out of date.** Click **Sync test cards** in the Linear App connection details.

**Who can see the cards?** Anyone who can see the Linear issue.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
       Test Cards in Linear
      </span>
    </li>
  </ul>
</nav>
