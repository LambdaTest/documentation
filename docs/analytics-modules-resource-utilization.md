---
id: analytics-modules-resource-utilization
title: Concurrency Usage Insights
sidebar_label: Concurrency Usage Insights
description: Optimize resource use with TestMu AI's Concurrency Usage Insights. Monitor concurrency trends at Org, Group, SubOrg levels and track custom concurrency with custom KPIs.
keywords:
  - analytics
  - concurrency trends
  - custom concurrency trends
  - resource utilization
  - parallel tests
  - insights widget
url: https://www.testmuai.com/support/docs/analytics-modules-resource-utilization/
site_name: TestMu AI
slug: analytics-modules-resource-utilization/
canonical: https://www.testmuai.com/support/docs/analytics-modules-resource-utilization/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';


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
          "name": "Concurrency Usage Insights",
          "item": `${BRAND_URL}/support/docs/analytics-modules-resource-utilization/`
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
      "@id": "https://www.testmuai.com/support/docs/analytics-modules-resource-utilization/"
    },
    "headline": "Concurrency Usage Insights",
    "description": "Optimize resource use with TestMu AI's Concurrency Usage Insights. Monitor concurrency trends at Org, Group, SubOrg levels and track custom concurrency with custom KPIs.",
    "url": "https://www.testmuai.com/support/docs/analytics-modules-resource-utilization/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Insights",
    "keywords": [
      "analytics",
      "concurrency trends",
      "custom concurrency trends"
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
    "dateModified": "2026-10-01T12:00:00+05:30"
  }) }}
/>

The Concurrency Usage Insights module enables QA Managers to get an overview of <BrandName /> resources being utilized by their teams. It provides widgets to monitor concurrency trends at different levels and track peak usage patterns.

## Available Widgets

| Widget | Description |
|--------|-------------|
| Concurrency Trends | Org-level view of concurrent sessions over time |
| Group Concurrency Trends | Group-level concurrency utilization |
| SubOrg Concurrency Trends | Sub-organization level concurrency utilization |
| Custom Concurrency Trends | Custom KPI-based concurrency with dimension breakdowns |

---

## Concurrency Trends (Org Level)

<img loading="lazy" src={require('../assets/images/analytics/resource-utilization-1.png').default} alt="Concurrency Trends" width="768" height="373" className="doc_img"/>

The Concurrency Trends widget provides a visual representation of your parallel test execution at the organization level on the <BrandName /> platform. It allows you to monitor the number of concurrent sessions running over time, helping you optimize resource utilization and identify peak testing periods.

### Chart Axes

- **X-Axis**: Represents the time intervals at which the concurrent sessions are measured
- **Y-Axis**: Represents the number of concurrent sessions, categorized into "Queued" and "In Use" sessions

### How It Works

- The widget tracks the number of concurrent sessions running on the platform over a specified time period
- It presents the concurrency trends in a graph format, displaying the number of sessions in use and the number of sessions queued at each time interval
- You can hover over specific data points to view the exact number of sessions in use and queued at that particular time

---

## Group Concurrency Trends

The Group Concurrency Trends widget provides concurrency utilization data segmented by groups within your organization. This helps you understand how different teams or groups are utilizing the parallel test execution capacity.

### Key Insights

- View concurrency patterns for each group
- Compare resource utilization across different groups
- Identify which groups have higher queue times

---

## SubOrg Concurrency Trends

The SubOrg Concurrency Trends widget provides concurrency utilization data at the sub-organization level. This is useful for organizations with multiple sub-organizations to track and compare resource usage.

### Key Insights

- Monitor concurrency at sub-organization level
- Track queued vs in-use sessions per sub-organization
- Optimize resource allocation across sub-organizations

---

## Custom Concurrency Trends

The Custom Concurrency Trends widget visualizes queued and running concurrency over time, for your whole organization or broken down by a KPI such as project, browser, or OS. Each point shows the peak number of queued and running items in that interval, and you can click any bar to see exactly which tasks or tests were behind it.

<img loading="lazy" src={require('../assets/images/analytics/custom-concurrency-trends.webp').default} alt="Custom Concurrency Trends Widget" width="768" height="373" className="doc_img"/>

Unlike the standard Concurrency Trends widgets, Custom Concurrency Trends allows you to break down concurrency data by specific dimensions (KPIs), giving you granular insights into resource utilization patterns.

### Key Features

- **Stacked Visualization**: View concurrency data as stacked bar charts or stacked area charts. In-Use is stacked at the bottom and Queued on top, the same as the Concurrency Trends widget.
- **Whole-organization or KPI view**: See one combined series for the whole organization, or break it down by project, browser, or OS.
- **Queued vs In-Use Metrics**: Track queued and running concurrency separately.
- **Peak Usage Identification**: Each point is the peak of its interval, so spikes are never averaged away.
- **Drilldown**: Click a bar to list the tasks or tests that were queued or running at that peak, or at any time in that interval.
- **Flexible Time Range**: Analyze trends across daily, weekly, or custom time periods.

### How Concurrency Is Counted

The widget counts differently depending on the product, so that the numbers match how each product queues work:

| Product | What is counted | Queued | In Use (running) |
|---------|-----------------|--------|------------------|
| HyperExecute | **Tasks** | From when the task is created until it starts running (or until it ends, for a task that never started) | From when the task starts running until it ends |
| Web Automation, App Automation | **Tests** | From when the test is created until it starts | From when the test starts until it ends |

HyperExecute counts tasks because concurrency in HyperExecute is reserved per task: a task's tests do not exist until the task starts running, so counting tests would hide the time your work spent waiting in the queue. A task created up to 2 days before your selected time range that is still queued or running inside it is included.

For Web and App Automation, tests that ended as **Lambda Error**, **Cancelled**, **Queue Timeout**, or **Error** are not counted. HyperExecute counts every task, including cancelled and queue-timeout tasks, because those are often the ones that waited longest.

:::note Reading stacked bars
Each bar stacks that interval's **peak** In-Use value and its **peak** Queued value. The two peaks can occur at different moments within the interval, so the total height of a bar is not the load at a single instant. To see the queue peak, read the Queued segment on its own, or hover over it.
:::

### Supported KPIs

| KPI | Web Automation | App Automation | HyperExecute |
|-----|----------------|----------------|--------------|
| Project Name | Yes | Yes | Yes |
| Browser | Yes | No | No |
| OS | Yes | Yes | Yes |
| None (whole org) | Yes | Yes | Yes |

**None (whole org)** shows one Queued series and one In-Use series for your entire organization, which is the best view for spotting overall queue build-ups. Its legend reads **Tasks - Queued** and **Tasks - In-Use** on HyperExecute, and **Tests - Queued** and **Tests - In-Use** on Web and App Automation. When grouped by a KPI, each value gets its own pair of series, named after the value (for example, **Checkout - Queued** and **Checkout - In-Use**).

HyperExecute does not offer Browser, because a single task can run tests on several browsers. A HyperExecute widget that was previously saved with Browser shows the whole organization instead.

### How to Create a Dashboard with Custom Concurrency Trends

**Step 1:** Log in to your <a href="https://www.testmuai.com/login/" onClick={CookieTrackingLogin}>TestMu AI account</a> and navigate to **Insights** from the left sidebar.

**Step 2:** Click on the **+ Create New** button and select **Pre-built Widgets**.

**Step 3:** Select your product: **Web Automation**, **App Automation**, or **HyperExecute**.

**Step 4:** From the widget list, select **Custom Concurrency Trends**, enter a Dashboard Name, and click **Create Dashboard**.


### Configure Widget

Click on the three-dot menu (⋯) on the widget and select **Configure** to customize the widget.

<img loading="lazy" src={require('../assets/images/analytics/custom-concurrency-trends-configure-widget.webp').default} alt="Configure Custom Concurrency Trends Widget" width="768" height="373" className="doc_img"/>

#### Supported Filters

| Filter Category | Filter Options |
|-----------------|----------------|
| General | Project Names, Build Names, Test Names |
| Status | Test execution status. On HyperExecute, this is the **task** status. |
| Browser & OS | Browser, Operating System |
| Users | Users, Groups, Teams |
| SubOrgs | Sub-organizations |
| Tags | Build Tags, Test Tags |

#### Display Options

- **Graph Type**: Stacked Area or Stacked Bar (default)
- **Concurrency KPI**: Project Name (default), Browser, OS, or None (whole org). See [Supported KPIs](#supported-kpis).
- **Select legends to show**: In Use, Queued (both selected by default)

### Recommended Usage

#### Viewing Multiple Dimensions (All Projects)

When visualizing concurrency trends across all dimensions (e.g., all projects at once), display **either In-Use or Queued**, not both simultaneously. This provides a cleaner view for comparing usage patterns across different projects. To see the organization's total queue instead, set **Concurrency KPI** to **None (whole org)**.

**How to configure:**
1. Open **Configure Widget** > **Display Options**
2. Under **Select legends to show**, uncheck either "In Use" or "Queued" to show only one metric
3. Click **Apply Filters**

#### Viewing Single Dimension (Specific Project)

When focusing on a single dimension (e.g., one specific project), keep **both In-Use and Queued visible**. This gives you a complete picture of concurrency utilization for that specific project.

<img loading="lazy" src={require('../assets/images/analytics/custom-concurrency-trends-single-dimension.webp').default} alt="Custom Concurrency Trends Single Dimension" width="768" height="373" className="doc_img"/>

**How to configure:**
1. Open **Configure Widget** > **General**
2. Filter by the specific **Project Name** you want to analyze
3. Under **Display Options**, ensure both "In Use" and "Queued" are selected in **Select legends to show**
4. Click **Apply Filters**

### Drilldown

In the **Stacked Bar** view, click the **Queued** or **In-Use** segment of any bar to open the drilldown. It lists the HyperExecute tasks, or the Web and App Automation tests, behind that segment.

#### Choose the time window

Use the **Show** dropdown at the top of the drilldown:

- **At peak** (default): the tasks or tests that were queued (or running) at the bar's peak moment. The count matches the bar's value.
- **Whole bucket**: every task or test that was queued (or running) at any time during that interval.
- **Selected range**: shown after you pick a range in the date picker. It lists everything queued (or running) during that range. A range longer than 93 days is shortened to its last 93 days.

Hover over the info icon next to the count to see exactly which window is shown, for example *"Tasks queued at 2026-09-10 16:09:59, the peak of this bucket."*

#### HyperExecute: task rows

Each row shows:

- **Task**: the task number as HyperExecute shows it (for example, **Task #6**), or **Global Pre Task**, **Discovery Task**, or **Global Post Task**. Click it to open the task in HyperExecute.
- **Job #**: click to open the job in HyperExecute.
- **Project**, and the browser, OS, resolution, and device of the task's tests.
- **Queued** time: hover over it to see when the task entered the queue and when it left (**Queue started … · Queue ended …**).
- **Ran** time: hover over it to see when the task started and ended.
- The time the task was created, and the job labels.

Filters: **Status** (task status), **Project**, **Users**, and **Job Labels**.

#### Web and App Automation: test rows

Each row matches the Test Summary drilldown: test status and name, build, browser or device, OS, resolution, duration, smart tags, user tags, and remarks. Failed tests have **Choose Test Failure Type** and **Generate RCA**. A **Queued** item shows how long the test waited; hover over it to see when it was created and when it started.

The header shows **Avg Run Time** and **Max. Run Time**. Filters: **Status**, **Test Name**, **Builds**, **Browsers**, **OS**, and **Project**.

#### Filters, sorting, and export

- When you click a series grouped by Project (or by Browser or OS on Web and App Automation), that value is pre-selected in the matching filter. The filter still lists every value in the widget's date range, so you can widen or change the selection, or reset it.
- On HyperExecute, a series grouped by OS has no OS filter in the drilldown; the rows are limited to the clicked OS automatically.
- Sort by **Date Ascending** or **Date Descending**.
- Use **Export As > CSV** to download up to 1,000 rows of the current view.

:::note
The drilldown lists up to the first 10,000 rows of a window. Drilldown is not available on shared dashboards.
:::

---

:::tip Minute-Level Granularity
When you apply a time filter of **1 day or less**, the concurrency data is displayed at **minute-level granularity**. This is useful for pinpointing exact concurrency spikes, debugging queue buildups during specific test runs, or analyzing resource usage during dedicated time windows.
:::

## Value Proposition

By analyzing the concurrency trends, you can make informed decisions about scaling your testing infrastructure, ensuring efficient resource allocation, and minimizing queuing times. These widgets empower you to strike the right balance between test execution speed and cost-effectiveness.

:::tip Use Case
John is a QA Manager, and his team runs more than 50,000 Jobs in a month across various <BrandName /> products like Web Automation, App Automation, and HyperExecute.

John wants to know the duration of the tests kept in queue and the duration of tests put in running state. With the Concurrency Trends widgets he can easily track the duration and make a decision to optimize the <BrandName /> plan currently subscribed by his team. Using Custom Concurrency Trends, he can further drill down into which projects are consuming the most concurrency and schedule test runs more efficiently.
:::

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
      Concurrency Usage Insights
      </span>
    </li>
  </ul>
</nav>
