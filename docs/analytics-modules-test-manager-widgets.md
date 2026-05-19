---
id: analytics-modules-test-manager-widgets
title: Test Manager Dashboard Widgets
sidebar_label: Test Manager
description: Discover TestMu AI's Test Manager Analytics widgets for comprehensive test cases insights. Optimize your testing efforts today.
keywords:
 - analytics
 - Test cases management
 - Test Manager analytics
 - Test Cases trends
 - Test Case Run Status
 - Milestone Trends
 - Execution Progress
 - Test Execution Burndown
 - Defects by Severity
 - Tester Assignment

url: https://www.testmuai.com/support/docs/analytics-modules-test-manager-widgets/
site_name: TestMu AI
slug: analytics-modules-test-manager-widgets/
canonical: https://www.testmuai.com/support/docs/analytics-modules-test-manager-widgets/
---

import NewTag from '../src/component/newTag';
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
          "name": "Test Overview",
          "item": `${BRAND_URL}/support/docs/analytics-modules-test-manager-widgets/`
        }]
      })
    }}
></script>
<BrandName /> Test Manager Dashboard widgets provide comprehensive insights into your test automation or manual efforts. These widgets help you optimize your testing efforts by providing detailed insights into your test execution, test case insights, and more.

:::note
The Test Manager Widgets module is currently in  <NewTag value="BETA" bgColor="#ffec02" color="#000" />. If you have any feedback or suggestions, please feel free to reach out to us at [support@testmuai.com](mailto:support@testmuai.com).
:::


<img loading="lazy" src={require('../assets/images/analytics/tms-widgets-dashboard.webp').default} alt="Test Manager Snapshot" width="768" height="373" className="doc_img"/>

:::tip Filtering Widgets
Every widget supports configurable filters. Click the **three-dot menu** on any widget to apply filters and narrow down the displayed results based on your specific criteria.
:::

:::tip Drill Down into Data
All widgets support drill-down. Click on any data point in a chart — such as a segment in a pie chart, a bar in a bar chart, or a status value — to view the underlying list of associated records (e.g., test cases, test runs, or issues) that make up that data point.
:::

## Test Cases Summary

The Test Cases Summary widget displays the total count of test cases and the split between **Automated** and **Manual** test cases. The classification is determined by the **Automation Status** field on each test case — if set to *Automated*, it is counted under Automated; all others fall into the Manual category.

### How it works?

* View the total number of unique test cases created in your project.
* See the breakdown between Automated and Manual test cases based on the Automation Status field.

### Value Proposition

This widget gives you a quick snapshot of your test case inventory and the balance between automated and manual coverage, helping you plan your testing strategy.

## Test Cases Trend

The Test Cases Trend widget tracks the number of test cases created over a period of time, helping you visualize how your test suite is growing.

### How it works?

* Displays a trend line of test cases created over the selected time period.
* Use this to monitor the pace of test case creation across your team.

### Value Proposition

This widget helps you track how your test suite evolves over time, identify periods of high or low activity, and ensure consistent test coverage as your product grows.

## Test Runs Summary

The Test Runs Summary widget provides an overall summary of your test runs, with the data split by test instance statuses and their counts.

### How it works?

* Displays the total number of test runs and the breakdown of test instances by status (Not Started, Passed, Failed, Skipped, and custom statuses).
* Quickly identify test runs with the highest number of failed or pending instances.

### Value Proposition

This widget gives you a high-level view of test run health across your project, helping you prioritize runs that need attention and track overall execution progress.

## Milestone Trends

The Milestone Trends widget displays a stacked bar chart of milestones, with each bar broken down by test instance statuses from the associated test runs.

### How it works?

* Each bar represents a milestone, with stacked segments showing the count of test instances by status.
* Supported statuses include **Not Started**, **Passed**, **Failed**, **Skipped**, as well as any **custom statuses** created for your manual test runs.
* Filter the data by date range to analyze milestone performance over specific time periods.

### Value Proposition

This widget helps you quickly assess milestone health, identify milestones with high failure rates, and monitor release readiness. By tracking status trends across milestones, you can spot regressions early and make data-driven decisions about testing effort.

## Issue Summary

The Issue Summary widget shows the trend of issues and requirements linked to test cases or raised during test runs in Test Manager.

### How it works?

* Tracks issues linked to test cases as well as issues raised directly within test runs.
* Visualize whether issues are increasing or decreasing over time.

### Value Proposition

This widget helps you monitor the volume and trend of issues across your testing efforts, enabling you to identify patterns and prioritize resolution.

## Test Cases Types

The Test Cases Types widget displays a pie chart of test cases split by their **Type** field (e.g., Regression, Smoke, Sanity, or any custom type defined in your project).

### How it works?

* Each segment of the pie chart represents a test case type, based on the **Type** field of each test case.
* Quickly see the distribution of test case types across your project.

### Value Proposition

This widget helps you understand the composition of your test suite and ensure the right balance of test types (Regression, Smoke, Sanity, etc.) for effective coverage.

## Execution Progress

The Execution Progress widget displays overall test execution progress as a percentage on a visual gauge, alongside a breakdown of total, executed, and remaining test run instances.

<img loading="lazy" src={require('../assets/images/analytics/tms-execution-progress-burndown.webp').default} alt="Execution Progress and Test Execution Burndown widgets" width="1516" height="214" className="doc_img"/>

### How it works?

* The gauge shows the completion percentage, computed as **(Total test run instances − Not Started instances) / Total test run instances**.
* Any test instance in a status other than *Not Started* (such as Passed, Failed, Skipped, Blocked, or custom statuses) is counted under **Executed**.
* A side panel next to the gauge displays three counters:
    * **Total** — the total number of test run instances in scope.
    * **Executed** — instances that have moved out of the *Not Started* status.
    * **Remaining** — instances still in the *Not Started* status.
* Apply filters from the three-dot menu to scope the widget to a specific test run, phase, or stage.

### Value Proposition

This widget gives you a single at-a-glance metric for test execution progress, making it easy to track how close a release, milestone, or phase is to completion and to communicate status to stakeholders without drilling into individual runs.

## Test Execution Burndown

The Test Execution Burndown widget tracks how remaining test executions trend down over the duration of a test run, and surfaces a rich footer strip of delivery metrics so you can forecast whether execution will complete on time.

### How it works?

* The **X-axis** represents dates across the selected execution window, and the **Y-axis** represents the number of remaining test run instances (instances still in *Not Started* status).
* Three trend lines are plotted:
    * **Actual** (solid blue) — remaining *Not Started* instances per day, reflecting real execution progress up to today.
    * **Expected** (dashed grey) — an ideal linear burndown from the total instance count on Day 0 down to zero on the final day.
    * **Projected** (dashed blue) — a forward-looking extrapolation from today to the end date, based on your current velocity, so you can see where execution will land if the current pace holds.
* A **Today** marker highlights the current date on the chart, making it easy to see where the Actual line hands off to the Projected line relative to the Expected ideal.
* Hovering over any point on the chart opens a tooltip showing, for that day:
    * **Remaining** — remaining instances on that date.
    * **Ideal** — the expected remaining count for that date.
    * **Gap** — how far ahead or behind the ideal line you are.
    * **Executed today** — the number of instances executed on that day.
    * **7-day avg** — the trailing 7-day execution velocity.
* The **footer strip** below the chart summarises execution health at a glance — **Total**, **Executed**, **Remaining**, **Complete** (percentage), **Status** (ahead or behind by N instances), **Velocity** (instances/day), projected **Finish** date, and the **Pace needed** (instances/day required to hit the target).
* Use the **date range picker** in the widget header to change the execution window. Use the **filter icon** (next to the *Test Manager* badge) or the three-dot menu to filter by test run, phase, or stage.

### Drill down into remaining instances

Clicking any point on the Actual line opens a drill-down modal titled **Test Execution Burndown**, which lists every test run instance that was still *Remaining* as of that date. From the modal you can:

* See the exact count of remaining instances for the selected date (e.g. *Remaining as of Mar 14: 1000*).
* Adjust the date range and apply additional filters — **Project**, **Test Run Instance Name**, and **Milestone Name**.
* Browse the paginated list of instances with their current status, project, and last-updated timestamp.
* **Export** the list for sharing or offline analysis.

### Value Proposition

By comparing the actual burndown against the expected line and watching the footer metrics, you can quickly see whether execution is ahead, on track, or slipping — enabling early course correction, better capacity planning, and more reliable release predictions. The drill-down makes it easy to go from a high-level slip directly to the specific instances that are holding the run back.

## Defects by Severity

The Defects by Severity widget displays a bar chart of Jira defects linked to your test cases and test runs, grouped by their severity level.

### How it works?

* Each bar represents a severity level — **Critical**, **High**, **Medium**, and **Low** — with its value showing the count of linked Jira defects at that severity.
* Defects are sourced from Jira issues linked to test cases or raised during test runs in Test Manager.
* Click any bar to drill down into the underlying list of issues for that severity.
* Apply filters from the three-dot menu to scope the widget to a specific test run, phase, or stage.

### Value Proposition

This widget helps you assess release risk at a glance by surfacing how many high-impact defects are outstanding. By focusing on Critical and High severity bars first, you can prioritize the issues most likely to block a release.

## Tester Assignment

The Tester Assignment widget displays a horizontal stacked bar chart with one bar per assigned tester, showing the workload and execution progress of each tester side by side.

### How it works?

* Each bar represents a tester, and its length reflects the total number of test run instances assigned to them.
* Each bar is broken down into stacked segments by test instance status — **Not Started**, **Passed**, **Failed**, **Skipped**, as well as any **custom statuses** created for your manual test runs.
* Click any segment to drill down into the underlying list of test run instances for that tester and status.
* Apply filters from the three-dot menu to scope the widget to a specific test run, phase, or stage.

### Value Proposition

This widget lets you compare workload and execution progress across testers at a glance, making it easy to spot uneven assignment, identify testers who are behind, and rebalance effort to keep a release on track.


