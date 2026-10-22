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

Test cards bring your Test Manager results into the Linear issues your team works on. When you link a test case or a test run to a Linear issue, the issue shows a card with the latest results, steps, and progress. Cards update on their own as your team tests, so everyone in Linear sees the current state of testing without switching tools.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linear-issue-test-cards.webp').default} alt="A Linear issue showing test case, test run, and coverage cards under Resources" className="doc_img"/>

### Why use test cards

- **See test results where the work happens.** Developers and product managers see whether a fix or feature passed testing directly on the Linear issue.
- **Always current.** Results, names, and steps update within seconds of a change in Test Manager. Nobody has to copy results by hand.
- **Know what is covered.** A coverage card on each issue sums up every linked test, what failed, and which runs they belong to.
- **One click back to the details.** Every card links to the same test case or test run in Test Manager.

### How it works

1. You connect Linear to <BrandName /> and turn on test cards.
2. In Test Manager, you link a test case or a test run to a Linear issue.
3. <BrandName /> adds cards to that issue under **Resources**, and keeps them up to date as results come in.

:::info Prerequisites
- A Linear account with access to the issues you want to link, and a Linear personal API key.
- Access to Test Manager in <BrandName />.
- An admin role, if you want to share the Linear connection with your whole organization.
:::

### Step 1: Connect Linear

If Linear is already connected to your account, skip to [Step 2](#step-2-turn-on-test-cards).

1. In <BrandName />, go to **Integrations**.
2. Find **Linear App** under **Project Management** and click **Connect**.
3. In Linear, open **Settings > API**. Under **Personal API keys**, create a key and copy it.
4. Back in <BrandName />, paste the key into **API Token** and click **Install**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linear-app-setup.webp').default} alt="Linear App setup form with the API Token field" className="doc_img"/>

When the connection is ready, the **Linear App** card shows **Connected**. For more details, see [Linear App Integration](/support/docs/linear-app-integration/).

### Step 2: Turn on test cards

Test cards are off by default. The owner of the Linear connection turns them on.

1. In **Integrations**, click **⋯** on the **Linear App** card and choose **Info**.
2. In the **Test cards in Linear** section, switch the toggle on.
3. Wait a few seconds until the section shows **Healthy**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/test-cards-toggle.webp').default} alt="Linear App connection details with Test cards in Linear turned on and Healthy" className="doc_img"/>

When you turn test cards on, every Linear issue that already has tests linked in Test Manager gets its cards.

#### Share the connection with your team (optional)

Admins can share their Linear connection, so everyone in the organization gets test cards without connecting Linear themselves.

1. In **Integrations**, click **⋯** on the **Linear App** card.
2. Click **Share**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linear-app-menu.webp').default} alt="Linear App card menu with Info and sharing options" className="doc_img"/>

:::note
Each person's links use their own Linear connection if they have one, otherwise the shared connection. If a teammate connected Linear with their own API key, they need to turn on test cards for their own connection too.
:::

### Step 3: Link tests to a Linear issue

You can link a single test case, or a whole test run, to a Linear issue.

#### Link a test case

1. In Test Manager, open the test case.
2. Open the **Issues** tab and click **Link Issue**.
3. Select **Linear**.
4. Enter the issue key (for example, `QA-165`) or paste the issue link, and click **Link Issue**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/link-issue-dialog.webp').default} alt="Link Issues dialog with Linear selected and an issue key entered" className="doc_img"/>

The issue appears in the test case's list of linked issues.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/linked-issue-list.webp').default} alt="A test case with a linked Linear issue listed under Linear" className="doc_img"/>

#### Link a test run

1. In Test Manager, open the test run.
2. Open the **Issues** tab and click **Link Issue**.
3. Select **Linear**, enter the issue key or link, and click **Link Issue**.

Within a few seconds, the cards appear under **Resources** in the Linear issue. You can link several test cases and test runs to the same issue. To learn more about linking, see [Link Linear Issues with Test Manager](/support/docs/link-linear-issues-with-test-manager/).

### Understand the cards

Each linked Linear issue can show three kinds of cards. Click a card in Linear to open it, and click **Open in** on the card to go to the same item in Test Manager.

| Card | Added when you link |
|---|---|
| Test case card | a test case |
| Test run card | a test run |
| Coverage card | anything (one per issue) |

#### Test case card

The test case card shows the latest result of a test case and everything needed to run it again.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/test-case-card.webp').default} alt="Test case card in Linear showing the result, priority, steps, preconditions, and the latest run" className="doc_img"/>

- **Result, Kind, Priority, Steps**: the latest result, the type of test case, its priority, and how many steps it has.
- **Latest result**: the result, the test run it came from, and the browser and OS it ran on.
- **Earlier results**: when the test case ran in more than one test run, each run with its result.
- **Preconditions and steps**: each step with its expected outcome. Click **steps** to expand them.

#### Test run card

The test run card shows how a test run is going.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/test-run-card.webp').default} alt="Test run card in Linear showing progress, pass rate, and results grouped by browser and OS" className="doc_img"/>

- **Result**: the worst result in the run so far. For example, **Failed** if any test failed.
- **Progress and Pass rate**: how many tests have a result out of the total, and the share of those that passed.
- **Passed, Failed, Not Started**: how many tests are in each state.
- **Results by configuration**: every test in the run with its result, grouped by browser and OS.

#### Coverage card

The coverage card gives one summary of everything linked to the issue.

<img loading="lazy" src={require('../assets/images/test-manager/linear/test-cards/coverage-card.webp').default} alt="Coverage card in Linear with health, tests that need attention, a results chart, tests, executions, and runs" className="doc_img"/>

- **Health**: **Healthy** when all linked tests pass, **Failing** when any test fails, and **Incomplete** when some tests have not passed yet.
- **Needs attention**: the tests that failed, with the run and the browser and OS where they failed.
- **Results**: a chart of the linked tests by their latest result.
- **All tests**, **Executions**, and **Runs**: every linked test with its latest result, every result in every run, and each run with its progress.

#### Result colors

Every result on a card has a colored marker:

- 🟢 Passed
- 🔴 Failed
- 🔵 Not Started or In Progress
- 🟡 Timed Out
- 🟣 Lambda Error
- 🟠 Aborted
- ⚪ Skipped, or not yet added to a test run

### Keep cards up to date

Cards update on their own within seconds when you:

- Record a result in a test run.
- Rename a test case or a test run.
- Edit a test case's steps, preconditions, or priority.
- Link or unlink a test case or a test run.

#### Refresh all cards

If a card looks out of date, refresh every linked issue at once.

1. In **Integrations**, click **⋯** on the **Linear App** card and choose **Info**.
2. Click **Sync test cards**.

#### Remove a card

Unlink the test case or test run from the issue in Test Manager. Its card is removed from the Linear issue. When nothing is linked to an issue any more, all of its cards are removed.

#### Turn off test cards

Switch off **Test cards in Linear** in the Linear App connection details. Updates stop, and the cards already in Linear stay as they are. When you turn it back on, every linked issue is brought up to date.

### Troubleshooting

**Cards do not appear on an issue.**
- Check that **Test cards in Linear** is on and shows **Healthy**.
- Check that the test is linked to the correct issue key in Test Manager.
- If you connected Linear with your own API key, turn on test cards for your connection.

**The connection shows Needs attention.**
Follow the **Next step** shown in the **Test cards in Linear** section, for example, reconnecting Linear with a key that can write to Linear.

**A card looks out of date.**
Click **Sync test cards** in the Linear App connection details.

### FAQ

**Who can see the cards?**
Anyone who can see the Linear issue.

**Can I edit a card in Linear?**
Make the change in Test Manager instead. The card follows within seconds. Cards only carry information from Test Manager to Linear.

**Does turning off test cards delete existing cards?**
No. The cards stay in Linear but stop updating until you turn test cards back on.

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
