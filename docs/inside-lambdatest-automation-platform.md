---
id: inside-lambdatest-automation-platform
title: Explore the Automation Dashboard
sidebar_label: Explore the Dashboard
description: Navigate the TestMu AI Automation Dashboard. View test results, video recordings, command logs, network logs, and build timelines.
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

The left panel lists all test cases within a build. Each entry shows the test status, execution time, and configuration.

You can sort by date, status, or duration. Use the search bar to find a specific test, or filter by browser, OS, status, or tags.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/test.png').default} alt="Test list panel with filters" className="doc_img" style={{ width: '100%' }}/>

### Test Summary

The summary section gives you a quick overview of the selected test.

It displays:
- **Build name** and **test name**
- **Status** - passed or failed
- **Execution time**
- **Configuration** - resolution, browser, OS, framework
- **Last updated** timestamp

Use the action buttons next to the test ID to copy the ID, create an issue, rename, share, or delete the test.

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

Watch a full video playback of your test execution to see exactly what happened in the browser.

<img loading="lazy" src={require('../assets/images/selenium/guided-walkthrough/testVideo.png').default} alt="Test video recording playback" className="doc_img" style={{ width: '100%' }}/>

## Next Steps
---

Now that you know how to read the dashboard, explore more ways to manage and debug your tests.

- [Filter your tests](/support/docs/filter-your-selenium-tests/) - narrow down results by browser, OS, status, or tags
- [Share test results](/support/docs/sharing-test-results/) - send results to teammates
- [Mark as bug](/support/docs/mark-as-bug-in-automation-testing/) - file a bug directly from a test session
- [Debug your tests](/support/docs/debugging-options/) - enable extended logging for deeper analysis
- [Group tests with tags](/support/docs/group-tests-using-custom-tags/) - organize tests using custom tags

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
