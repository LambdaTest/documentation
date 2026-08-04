---
id: insights-app-profiling
title: App Profiling Insights
sidebar_label: App Profiling
description: App Profiling Insights surface CPU, memory, frame rate, battery, network, disk and startup metrics across devices, builds and page transitions, with Average and p90 views, session-level Comparison against a baseline run, org-level SLA thresholds, saved filters and email/Slack breach alerts.
keywords:
  - analytics
  - test insights
  - app profiling
  - mobile app performance
  - cpu memory fps insights
  - device performance matrix
  - page load time
  - sla thresholds
  - p90 metrics
  - disk read write
  - threshold breach alerts
  - session comparison
  - baseline diff

url: https://www.testmuai.com/support/docs/insights-app-profiling/
site_name: LambdaTest
slug: insights-app-profiling/
canonical: https://www.testmuai.com/support/docs/insights-app-profiling/
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
          "name": "App Profiling Insights",
          "item": `${BRAND_URL}/support/docs/insights-app-profiling/`
        }]
      })
    }}
></script>

---

import NewTag from '../src/component/newTag';

## Overview

The App Profiling dashboard aggregates performance telemetry from Appium tests run with the `appProfiling` capability and surfaces it as cross-test, cross-device analytics. Use it to compare CPU, memory, frame rate, battery, network and startup behaviour across devices, app builds and page transitions, with org-level SLA thresholds rendered directly on each chart.

The data on this dashboard comes from the App Profiling capability on Appium tests. To enable App Profiling on your test runs and review per-session metrics, see [App Performance Analytics](/support/docs/appium-app-performance-analytics/).

:::note
App Profiling Insights is available for Appium tests on iOS and Android (version 9+). Set `appProfiling: true` and `resignApp: true` in your capabilities. Battery Utilization and Battery Temperature widgets are populated for Android sessions only.
:::

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-screenshot.webp').default} alt="App Profiling dashboard" width="768" height="373" className="doc_img"/>

## How to access

1. Open the **Insights** section from the left sidebar of the <BrandName /> dashboard.
2. Select **App Profiling**. The landing page lists every test that has App Profiling data.
3. Click a test name to open its dashboard.

The page is always scoped to the test you opened. Use the **Test Name** filter to add more tests to the comparison without leaving the dashboard.

The dashboard opens on two tabs:

- **Trends** — the aggregated view described below: KPI cards, trend widgets and the device matrix, averaged across every session in the filtered scope.
- **[Comparison](#comparison)** — an overlay view that plots individual test sessions against one another, run by run.

## Filter bar

The filter bar at the top of the dashboard applies to every widget on the page.

| Filter | Values | Default |
|---|---|---|
| **Test Name** | Multi-select, up to 25 tests | The test you opened (pre-selected) |
| **OS** | Android, iOS | All |
| **Device** | Specific device models recorded across the selected tests | All |
| **App Build Version** | Build versions captured during the sessions | All |
| **Page Label** | Page transition labels recorded by the test | All |
| **Date Range** | Preset windows or a custom range with a time-of-day picker | Last 30 days |

Each filter is a searchable multi-select; changes take effect when you click **Apply**, and **Reset** clears that single filter. The **OS**, **Device**, **App Build Version** and **Page Label** dropdowns only list values present in the currently selected **Test Name(s)**, so you never see options that would return no data.

Clearing the Test Name filter and clicking Apply restores the test you opened — the dashboard is never scoped to zero tests.

### Saved filters <NewTag/>

Your filter selections, the selected date range, and the widget layout — including any widgets you resize — are **auto-saved at the organisation level**. There is no Save button: when you refresh the page or return to the dashboard later, it reopens with your last-used filters, date range and layout already applied. Use the **Clear All Filters** button to reset everything back to the defaults. The KPI and Compare selections made inside individual widgets are not persisted.

## Average and p90 views <NewTag/>

An **Average / p90** toggle in the top bar of the **Trends** tab switches its widgets between two aggregations:

- **Average** — the mean value of each metric across the sessions in scope.
- **p90** — the 90th-percentile value: the level at or below which 90% of sessions fall.

Switching to **p90** re-renders the Performance Overview cards, Performance Trends, the per-metric trend widgets and the Device Performance Matrix using the 90th-percentile value for every metric. The same p90 values are also available through the App Profiling API.

### Which one to read

Average answers *"what does a typical run cost?"*. p90 answers *"how bad does it get for the unlucky one run in ten?"*. They are complementary, and a metric can look healthy on one and fail on the other.

| Read | When you are |
|---|---|
| **Average** | Tracking a trend over time, comparing builds or devices at a glance, or reporting a headline number |
| **p90** | Investigating a regression, sizing an SLA, or explaining complaints that the dashboard's averages don't reflect |

Averages hide spikes. A build whose CPU averages 12% but reaches 45% on every tenth run will look green on Average and breach on p90 — and it is the p90 run your users notice. The reverse is also informative: if Average and p90 sit close together, the metric is stable and the average is trustworthy.

:::note
p90 is computed per session at ingestion and then averaged across the sessions in scope — it is *the mean of each session's own 90th percentile*, not the 90th percentile of the whole window. Metrics with no pre-computed p90 — cold and hot startup, and the crash and ANR counts — are dropped in p90 mode and render as `—`. Frozen and janky frame counts stay on their average, because they are companion counts to the frame-rate series rather than percentile-able metrics in their own right.
:::

### p90 on the Comparison tab

The Comparison tab has **no Average / p90 toggle** — the Trends toggle does not carry across, and switching tabs will not change what Comparison shows.

It does not need one: every stats table on that tab reports **Avg, Min, Max and P90 side by side, always**, for each selected session. Where the Trends toggle makes you choose one aggregation for the whole dashboard, Comparison shows you all four at once for the handful of runs you have selected — which is the more useful shape when you are looking at individual runs rather than a population.

{/* TODO screenshot: top bar showing the Average / P90 toggle, date range and Export As — save as assets/images/analytics/app-profiling-p90-toggle.png and embed here */}

## Performance Overview

A strip of KPI cards summarising the headline metrics over the selected window.

- **Avg CPU (%)** — application CPU usage averaged across sessions in scope.
- **Avg Memory (MB)** — application memory usage averaged across sessions in scope.
- **Avg FPS** — frames per second averaged across sessions in scope.
- **Avg Cold Startup (ms)** — cold-start duration averaged across sessions in scope.

When sessions in the selected scope record crashes or ANRs, two additional cards surface:

- **Avg Crashes per Crashed Session** — `avg(crash_count)` over sessions that reported at least one crash. This is the mean crash count among already-crashed sessions, not a crash rate.
- **Avg ANRs per ANR Session** — equivalent for Application Not Responding events.

Cards are hidden automatically when the underlying metric reports zero for the filtered scope.

## Performance Trends

A single time-series chart that overlays selected metrics on dual Y-axes. The **KPIs** selector in the widget header controls which series are visible — CPU, FPS, Memory, Temperature, Battery, Network Upload, Network Download, Disk Read and Disk Write are available; CPU and Memory are on by default. Each visible KPI gets a Min / Max / Avg row in the stats panel below the chart.

**Disk Read** and **Disk Write** report the total data the application read from and wrote to disk during a session, giving visibility into storage-heavy workflows. Like every other metric, they honour the Average / p90 toggle.

The X-axis bucket size is derived from the selected date range — sub-day windows render at 5-minute or 15-minute buckets, multi-week windows aggregate to hours, and multi-month windows aggregate to days.

{/* TODO screenshot: Performance Trends KPI selector open, showing the full metric list including Disk Read / Disk Write — save as assets/images/analytics/app-profiling-kpi-metrics.png and embed here */}

## Device Performance Matrix

A table comparing performance metrics across the devices that ran in the filtered scope. One row per device.

| Column | Description |
|---|---|
| **Device** | Device model |
| **CPU App (%)** | Application CPU usage, colour-coded against the configured SLA threshold |
| **CPU System (%)** | System-level CPU usage |
| **Memory App (MB)** | Application memory, colour-coded against the configured SLA threshold |
| **Memory System (MB)** | System-level memory |
| **FPS** | Frame rate, colour-coded against the configured SLA threshold |
| **Sessions** | Session count for that device in the filtered scope |

Click any column header to sort. The dashboard-level **Device** filter intentionally does not narrow this widget — the matrix is itself the device breakdown.

## Label Page Load Time

Duration per page transition label, captured from the `label` events recorded inside the test. The widget shows the top labels by session count by default; use the label selector inside the widget to add or remove labels from the chart.

A horizontal SLA reference line is drawn at the configured threshold. The stats panel below the chart reports Min / Max / Avg duration per visible label.

## Per-metric trend widgets

Each of the eight per-metric widgets renders a time series over the selected window with the SLA threshold drawn as a coloured band, and reports Min / Max / Avg for the primary metric in the stats panel below the chart.

| Widget | Metrics | Notes |
|---|---|---|
| **CPU Utilization Trend** | CPU App (%), CPU System (%) | — |
| **Frame Rate Trends** | Current FPS, Janky Frames, Frozen Frames | — |
| **Memory Usage** | App Memory (MB), System Memory (MB) | — |
| **Battery Utilization** | Battery drain (mAh) | Android only |
| **Network Utilization** | Network Upload (KB), Network Download (KB) | Separate SLA thresholds for upload and download |
| **Battery Temperature** | Temperature (°C) | Android only |
| **Cold Startup Time** | Cold Startup (ms) | — |
| **Hot Startup Time** | Hot Startup (ms) | — |

## Compare mode

Each per-metric trend widget and Label Page Load Time supports **Compare** mode. Click **Compare** in the widget header, pick a dimension, then select up to five values to overlay on the chart.

Compare dimensions:

- **OS** — Android vs iOS
- **Device** — for example Galaxy S23 vs Pixel 8 vs iPhone 15 Pro
- **App Build Version** — for build-over-build comparisons
- **Label** — for page-transition-level breakdowns

Compare is scoped to the widget — enabling it on one chart does not affect others. Performance Overview, Performance Trends and Device Performance Matrix do not expose Compare: the first two are summary widgets (use filters to change the data scope instead), and the matrix already breaks data down per device.

## Comparison <NewTag/>

The **Comparison** tab plots individual test sessions against one another instead of averaging them. Use it to answer run-level questions the Trends tab cannot: whether a build regressed against the run before it, whether one device is slower than another on the same app, or why a single run behaved differently from the rest.

Where the Trends tab charts a metric over calendar time, Comparison charts it over **elapsed time within each run** — every session starts at `0:00`, so runs of different lengths and different start times line up and can be read against each other.

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-comparison.webp').default} alt="App Profiling Comparison view with three test sessions overlaid" width="768" className="doc_img"/>

### Complete flow

1. Open a test's App Profiling dashboard and select the **Comparison** tab. The **most recent** run of that test is selected automatically and becomes the baseline — note that this is the newest run, not necessarily the specific run you opened the dashboard from.
2. Narrow the **Test Sessions** rail on the left with the search box and filters until you can see the runs you care about.
3. Tick the checkbox on each session you want to overlay — up to **five** at a time.
4. Pick which run everything is measured against with **Set as Baseline**.
5. Read the charts and the per-metric stats tables. Leave **Baseline Diff.** on to see each session's delta against the baseline.
6. Drag on the timeline at the top to zoom into a slice of the run; every chart follows.

### Test Sessions rail

The rail lists every session that matches the current filters, with a running count in the header. Sessions you have selected for comparison are **pinned to the top** so they stay visible as you filter; everything else follows, newest first. Each card shows the pass/fail status, the test name, when it ran, a truncated Test ID, and the OS version, device and app build version it ran on.

| Control | What it does |
|---|---|
| **Search test name** | Free-text filter over the listed session names |
| **Test Name** | Multi-select of test names. At least one must stay selected — **Apply** is disabled otherwise |
| **Date range** | The same picker the Trends tab uses, with presets and a custom range including a time-of-day picker |
| **More** | **OS**, **App Build Version**, **Device** and **Status** multi-selects |
| **Clear Filters** | Resets the filters back to the opened test and the comparison back to that test's most recent run. The date range is deliberately preserved — it belongs to the shared picker, not to this filter set |
| Checkbox | Adds or removes that session from the comparison |
| **Set as Baseline** | Makes that session the reference every other session is measured against |

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-comparison-filters.webp').default} alt="Test Sessions rail with the More filter menu open showing OS, App Build Version, Device and Status" width="768" className="doc_img"/>

:::note
You can compare up to five sessions at once — deselect one to add another — and at least one session must stay selected, so the charts are never left empty.
:::

### How the graphs are drawn

Each metric renders as its own card, in this order: **CPU Utilization**, **Memory Utilization**, **Frame Rate**, **Disk**, **Network**, and **Startup Time**.

- **One series per selected session**, coloured consistently across every card — a session keeps its colour everywhere, so you can follow one run down the page.
- **A shared elapsed-time X-axis.** Dragging on the **Comparison of Test Sessions** timeline at the top zooms every chart to the same window at once, which is what makes a spike in one metric comparable against another.
- **Legend toggles.** Click a session in a card's legend to hide or show that series in that card. The last visible series cannot be hidden.
- **Variant toggles** where a metric has more than one dimension: Application / System on CPU and Memory, Read / Write on Disk, Upload / Download on Network, and Startup Time / Load Time on the startup card.
- **SLA bands and threshold lines** are drawn from the same org-level thresholds used everywhere else on the dashboard.
- **A stats table** under every chart with **Avg**, **Min**, **Max** and **P90** per session — all four at once, with no toggle. See [p90 on the Comparison tab](#p90-on-the-comparison-tab).

**Startup Time** is a grouped bar chart rather than a line — it reports one Cold and one Hot value per run, with the Cold and Hot SLA lines drawn across it. Its **Load Time** variant switches to per-page-label load times, plotted by label instead of by elapsed time.

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-comparison-startup.webp').default} alt="Startup Time comparison showing Cold and Hot bars per session with SLA lines and baseline deltas" width="768" className="doc_img"/>

### Baseline and Baseline Diff

One session is always the baseline, marked with a **Baseline** chip in the rail and in every stats table.

With **Baseline Diff.** enabled — it is on by default — every other session's stats show a coloured delta against the baseline: green where the session is better, red where it is worse. The direction that counts as "better" follows the metric, so a lower CPU figure and a higher frame rate are both green. In the Startup Time screenshot above, the two non-baseline runs start `142 ms` and `94 ms` faster than the baseline's cold start.

Turn **Baseline Diff.** off to read raw values with no deltas.

### Saved comparisons <NewTag/>

Your Comparison setup is **auto-saved per test at the organisation level**, the same way the Trends tab saves its filters and layout. There is no Save button. Reopening the tab restores:

- the rail filters — test names, OS, device, status and app build version,
- which sessions were selected for comparison,
- which session was the baseline,
- the **Baseline Diff.** toggle,
- any series you hid from a card's legend.

The date range is not part of the saved comparison — it is owned by the page's date picker and shared with the Trends tab, so both tabs always report over the same window.

## SLA thresholds

SLA thresholds are configured at the **organisation level** by an admin. Once set, the same threshold is applied everywhere a metric is rendered — Performance Overview cards, Performance Trends overlays, Device Performance Matrix cells, Label Page Load Time, and the per-metric trend widgets.

Default thresholds:

| Metric | Green | Amber | Red |
|---|---|---|---|
| CPU (App) | < 15% | 15–30% | > 30% |
| Memory (App) | < 300 MB | 300–400 MB | > 400 MB |
| FPS | > 50 | 30–50 | < 30 |
| Cold Startup | < 2000 ms | 2000–3000 ms | > 3000 ms |
| Hot Startup | < 500 ms | 500–1000 ms | > 1000 ms |
| Battery Temperature | < 40 °C | 40–45 °C | > 45 °C |
| Label Page Load | < 2.5 s | 2.5–3.0 s | > 3.0 s |

Thresholds render as:

- Horizontal reference lines on trend charts.
- Coloured background bands behind the chart area.
- Cell-level heatmap colouring on Device Performance Matrix.
- Coloured value text on Performance Overview cards.

Battery Utilization (mAh drain) is rendered without a threshold by default — drain varies widely by device hardware and there is no industry-standard band.

:::note
Admins can override the defaults at the organisation level. Regular users see the configured thresholds applied but cannot modify them.
:::

## Threshold breach alerts <NewTag/>

When a session breaches a configured App Profiling threshold, <BrandName /> automatically notifies your team over **email** and **Slack** — so you can catch performance regressions without opening the dashboard after every run.

Each alert identifies the run (Test ID, Test Name, Build Name, OS, Device and date) and lists every breached metric with its observed value against the configured threshold, along with a **View Test Details** link that opens the run's App Profiling tab. Metrics that can trigger an alert include Cold Startup, Hot Startup, CPU Utilization, Frame Rate, Memory Usage, Temperature and per-label Page Load.

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-email-alert.png').default} alt="App Profiling threshold breach email alert" width="768" className="doc_img"/>

The Slack notification carries the same details:

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-slack-alert.png').default} alt="App Profiling threshold breach Slack alert" width="480" className="doc_img"/>

:::note
Alerts fire against the same SLA thresholds described above, which are configured at the organisation level by an admin.
:::

## Sharing a dashboard

The URL of the dashboard preserves the test it was opened against, and which of the two tabs you are on — a link copied from the Comparison tab reopens on Comparison. To share a specific view with a teammate, apply the filters you want and copy the URL — the shared dashboard opens with the same test in scope. Filter selections beyond Test Name are not round-tripped through the URL; they are restored from your own saved filters instead.

## Related

- [App Performance Analytics](/support/docs/appium-app-performance-analytics/) — how to enable App Profiling on Appium tests and review per-session metrics.
- [Analytics Overview](/support/docs/analytics-overview/) — the broader Insights module.
