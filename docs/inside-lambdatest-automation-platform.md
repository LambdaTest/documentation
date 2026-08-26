---
id: inside-lambdatest-automation-platform
title: How to View Selenium Test Results on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "View Test Results"
description: "View and analyze Selenium test results on the TestMu AI Automation Dashboard: command logs, video, screenshots, and test details."
keywords:
  - automation dashboard
  - testmu ai dashboard
  - test results dashboard
  - selenium test logs
  - test video recording
  - automation test analytics
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/inside-testmu-platform/
site_name: TestMu AI
slug: inside-testmu-platform/
canonical: https://www.testmuai.com/support/docs/inside-testmu-platform/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Explore the Automation Dashboard",
          "item": `${BRAND_URL}/support/docs/inside-testmu-platform/`
        }]
      })
    }}
></script>

# How to View Selenium Test Results on TestMu AI
---


The [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) is where you view results, debug failures, and track every test you run on the grid. This page walks you through each section of the dashboard.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/homepage-guide.gif').default} alt="TestMu AI Automation Dashboard overview" className="doc_img" style={{ width: '100%' }}/>

## Build and Test Views
---

Filter and browse your tests using either the Build view or the Test view.

The dashboard groups your tests by build. Click any build to see its individual test cases. You can switch between Build and Test views depending on whether you want to see results grouped by build or listed individually.

## Test Detail Page
---

Click any test to open its detail page with full execution data.

Each test detail page shows the build name, test status (pass/fail), execution time, browser and OS configuration, resolution, and framework used.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testPage.png').default} alt="Test detail page showing execution data" className="doc_img" style={{ width: '100%' }}/>

### Test List Panel
---

The left panel lists all test cases within a build. Each entry shows the test status, execution time, and configuration.

You can sort by date, status, or duration. Use the search bar to find a specific test, or filter by browser, OS, status, or tags.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/test.png').default} alt="Test list panel with filters" className="doc_img" style={{ width: '100%' }}/>

### Test Summary
---

The summary section gives you a quick overview of the selected test.

It displays:
- **Build name** and **test name**
- **Status** - passed or failed
- **Execution time**
- **Configuration** - resolution, browser, OS, framework
- **Last updated** timestamp

Use the action buttons next to the test ID to copy the ID, create an issue, rename, share, or delete the test.

Use the **Re-Run** button to execute the test again from the dashboard. See [Re-Run Automation Tests](/support/docs/debugging-options/#re-run-automation-tests).

Use **Mute Test...** in the test's options menu to keep a known-broken or known-flaky test out of the build's pass/fail verdict and counts. The test still runs and still reports its real result. See [Mute Test Scenarios](/support/docs/mute-test-scenarios/).

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testSummary.png').default} alt="Test summary section" className="doc_img" style={{ width: '100%' }}/>

### Command Logs and Network
---

View every command executed during the test and all associated logs.

The right panel contains three tabs:

- **All Commands** - Every Selenium command that ran during the test. Hover on a command to see its parameters.
- **Logs** - Toggle between Console Logs, Terminal Logs, and Test Framework Logs.
- **Network** - View all network requests and responses captured during execution.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/commandLogsAndVideos.png').default} alt="Command logs and network tab" className="doc_img" style={{ width: '100%' }}/>

### Video Recording
---

Watch a full video playback of your test execution to see exactly what happened in the browser.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testVideo.png').default} alt="Test video recording playback" className="doc_img" style={{ width: '100%' }}/>

## Next Steps
---

Continue with these related guides:

- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
- [Debugging Options](/support/docs/debugging-options/)
- [Error Messages](/support/docs/error-messages/)

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
        Explore the Automation Dashboard
      </span>
    </li>
  </ul>
</nav>
