---
id: phone-agent-post-call-web-test
toc_max_heading_level: 3
title: Post-Call Web Test for Phone Caller Agents With TestMu AI
hide_title: false
sidebar_label: Post-Call Web Test (Phone Caller)
description: After each test call, check on your real website that what your phone agent said is correct. Build the web test with Kane CLI parameters and compare call and website values.
keywords:
 - post-call web test
 - phone agent fact checking
 - verify phone agent answers on website
 - kane cli parameterized test
 - voice agent end-to-end testing
url: https://www.testmuai.com/support/docs/phone-agent-post-call-web-test/
site_name: TestMu AI
slug: phone-agent-post-call-web-test/
canonical: https://www.testmuai.com/support/docs/phone-agent-post-call-web-test/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/phone-agent-post-call-web-test/"
    },
    "headline": "Post-Call Web Test for Phone Caller Agents With TestMu AI",
    "description": "After each test call, check on your real website that what your phone agent said is correct. Build the web test with Kane CLI parameters and compare call and website values.",
    "url": "https://www.testmuai.com/support/docs/phone-agent-post-call-web-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "post-call web test",
      "phone agent fact checking",
      "verify phone agent answers on website"
    ],
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
    "dateModified": "2026-11-26T12:00:00+05:30"
  }) }}
/>

A post-call web test checks your phone agent's answers against your real website. After each test call is graded, TestMu AI reads the transcript, finds the facts your agent stated, such as a product and its price, and runs a browser test on your website with those values. The call's **Web Test** tab then shows what the call said, what the website showed, and whether they match.

Use it when your agent quotes facts that your website also shows, such as prices, stock, order status, or booking details. You set up the web test once per scenario, and it runs after every graded call with nothing to enter per call.

## How the Post-Call Web Test Works

---

1. TestMu AI places the test call to your agent, as in any phone test.
2. After the call is graded, AI reads the transcript and finds the facts your agent stated.
3. It fills the web test's parameters with those values, such as a book title and its price.
4. The web test runs on your website in a real browser and checks the values.
5. The call's **Web Test** tab compares what the call said with what the website showed.

The web test is a Test Manager test case that you record with Kane CLI, and it runs on HyperExecute. The examples on this page use a bookstore agent: the caller asks about a book, and the web test checks that the price the agent quoted matches the price on the website.

## Prerequisites

---

- A Phone Caller agent with a scenario and a suite. See [Test an Inbound Phone Agent](/support/docs/phone-agent/#test-an-inbound-phone-agent-pre-analysis).
- Kane CLI, installed and signed in to your TestMu AI account. See [Kane CLI installation](https://www.testmuai.com/docs/kane-cli-installation) and [authentication](https://www.testmuai.com/docs/kane-cli-authentication).
- Access to Test Manager, where the web test and its dataset are saved.

## Create the Web Test in Test Manager

---

You build the web test once. Its parameters are the values that will come from the call.

**Step 1: Create a dataset with your parameters.** In Test Manager, open your project, select **Datasets**, and click **Create Dataset**. Add one column for each value that will come from the call, such as `book_title` and `book_price`, and add one row of sample values. Kane CLI uses this row while you record the test. Copy the dataset ID and the row ID for the next step. See [Using Datasets on Test Manager](/support/docs/kane-ai-using-datasets/).

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-dataset.webp').default} alt="Test Manager dataset with book_title and book_price columns and one sample row" width="1512" height="806" className="doc_img"/>

**Step 2: Record the test with Kane CLI.** Run the test against your website with the dataset, and write each value in the test goal as a parameter, such as `${book_title}`.

```bash
kane-cli run --url 'https://books.toscrape.com/' \
  --dataset-id YOUR_DATASET_ID \
  --dataset-row YOUR_ROW_ID \
  --code-export --headless --timeout 600 --name check-book-price \
  'Open the book titled "${book_title}" (use the "next" button until it appears).
  Assert the price shown under the title is exactly "${book_price}".'
```

- Keep the test goal in single quotes, so your shell passes `${book_title}` to Kane CLI instead of replacing it.
- Keep `--code-export`. A post-call web test can only use a test case that has code.
- When the run passes, Kane CLI saves the test case to Test Manager and prints its ID, such as TC-91.

:::caution
Write values as parameters (`${name}`), not variables (`{{global.name}}`). Only parameters are filled from the call.
:::

**Step 3: Check that the test case uses the parameters.** Open the new test case in Test Manager. The steps should show each value from the call as a parameter, and the assertion should compare the value on the website with a parameter, such as `${book_price}`. If a step shows a fixed value instead, record the test again with that value written as a parameter.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-test-case-parameters.webp').default} alt="Test case in Test Manager whose steps and assertion use the book_title and book_price parameters" width="1512" height="806" className="doc_img"/>

**Step 4: Check that the code is generated.** Open the test case's **Code** tab. One code entry is enough, even if it's marked **Unverified**. If there is none, click **Generate new code**, because test cases without code can't be picked in Agent Testing.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-code-tab.webp').default} alt="Code tab of the test case with one generated Python Playwright code entry and the Generate new code button" width="1512" height="806" className="doc_img"/>

## Turn On the Web Test in a Scenario

---

**Step 5: Turn on the web test and choose test cases.** In Agent Testing, open the Phone Caller agent, select **Scenarios**, and open the scenario. Turn on **Run a web test after the call**, choose the **Test Manager project**, and select one or more test cases. After each call, TestMu AI runs only the test cases that the conversation is about.

**Step 6: Check the parameters.** **Parameters the tests read** lists each parameter of the selected test cases with its sample value. TestMu AI fills them from every call, so you only need **Add a hint** when a value gets picked wrong.

- If the panel warns that a selected test reads no parameters, that test case has nothing to fill from the call. Record it again with parameters, as in Step 2.
- A test case whose value isn't mentioned in the call is skipped for that call.
- Under **Start the web test**, set a delay of 0 to 15 minutes after the call is graded. 0 starts the test right away. Add a delay if your website takes time to show what happened on the call, such as a new booking.
- The web test runs in the browser set in Test Manager. To use another browser, change it on the test run in Test Manager.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-scenario-settings.webp').default} alt="Scenario with Run a web test after the call turned on, a Test Manager project and test case selected, the parameters the tests read, and the start delay" width="1512" height="806" className="doc_img"/>

**Step 7: Save the scenario.** Click **Save Changes**. The web test runs in Test Manager under your TestMu AI account.

**Step 8: Run a call.** On the **Suites** tab, click **Run** on a suite that contains the scenario, then trigger the calls. After each call ends and is graded, its web test starts on its own.

## Read the Web Test Results

---

Open a call from the suite results. TestMu AI fills the parameters from the call's transcript, so check the **Recording** tab to see what your agent actually said.

### Web Test Tab

The **Web Test** tab shows the overall result and one card for each test case that ran. Each card lists the values taken from the call, the value the website showed, and the check that passed or failed. A test case is reported as matching the call only when the run confirms that it used the call's values.

Web test results don't change the call verdict. A call can fail its quality checks while its web test passes, and the other way round.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-tab-passed.webp').default} alt="Web Test tab of a call with a passed web test, where the price from the call matches the price on the website" width="1512" height="806" className="doc_img"/>

When your agent states a wrong fact, the web test fails and shows both values. Here, the agent quoted £50.77 on the call, but the website shows £51.77.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-tab-failed.webp').default} alt="Web Test tab of a call with a failed web test, where the price from the call differs from the price on the website" width="1512" height="806" className="doc_img"/>

### Test Manager Run

Click **Test Manager run** on the **Web Test** tab. Each call gets its own test run in Test Manager, named **A2A call** followed by the call ID. Open the test instance to see the video, screenshots, and steps of the browser test.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-test-manager-run.webp').default} alt="Test Manager test run started after a phone call, with one passed test instance" width="1512" height="806" className="doc_img"/>

### HyperExecute Log

To confirm which values the test compared, click **HyperExecute job** on the **Web Test** tab, select **Scenarios**, open the test, and search the log for `[var]`.

- The `[set_var]` line holds the value the test read on the website.
- A `[var]` line such as `${book_price} → £51.77` holds the value from the call that the check used.

<img loading="lazy" src={require('../assets/images/agent-to-agent/phone-web-test-hyperexecute-log.webp').default} alt="HyperExecute job log filtered for var lines, showing the price read on the website and the price from the call used in the assertion" width="1512" height="806" className="doc_img"/>

## Troubleshooting

---

| Problem | What to do |
|---|---|
| A test case isn't listed when you pick test cases in the scenario | The test case has no code. Open its **Code** tab in Test Manager and click **Generate new code**. |
| The recorded test case has empty values where the parameters should be | The test goal was in double quotes, so your shell replaced `${book_title}` before Kane CLI received it. Record the test again with the goal in single quotes. |
| A value from the call isn't used in the test | The test case uses a variable, such as `{{global.name}}`. Record it again with the value written as a parameter, such as `${name}`. |
| A parameter gets the wrong value from the call | In the scenario, click **Add a hint** next to the parameter. |
| A test case didn't run after a call | Its values weren't mentioned in the call, so it was skipped. Check the transcript on the **Recording** tab. |
| The web test failed, but your agent's answer looks right | Compare the values on the **Web Test** tab, then check the `[var]` lines in the HyperExecute log to see which value came from the call and which from the website. |

## Related TestMu AI Guides

---

- See how to [test inbound and outbound phone agents](/support/docs/phone-agent/).
- See how Kane CLI [saves test cases to Test Manager and exports code](https://www.testmuai.com/docs/kane-cli-tms-integration#code-export).
- See how to [check a chat agent's facts against your API](/support/docs/data-validation/).
- See [every feature and metric by agent type](/support/docs/agent-features-and-metrics/).
