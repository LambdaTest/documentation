---
id: insights-app-profiling
title: App Profiling Insights
sidebar_label: App Profiling
description: App Profiling Insights surface CPU, memory, frame rate, battery, network and startup metrics across devices, builds and page transitions, with org-level SLA thresholds and per-widget compare mode.
keywords:
  - analytics
  - test insights
  - app profiling
  - mobile app performance
  - cpu memory fps insights
  - device performance matrix
  - page load time
  - sla thresholds

url: https://www.testmuai.com/support/docs/insights-app-profiling/
site_name: TestMu AI
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

Clearing the Test Name filter and clicking Apply restores the test you opened — the dashboard is never scoped to zero tests.

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

A single time-series chart that overlays selected metrics on dual Y-axes. The **KPIs** selector in the widget header controls which series are visible — CPU, FPS, Memory, Temperature, Battery, Network Upload and Network Download are available; CPU and Memory are on by default. Each visible KPI gets a Min / Max / Avg row in the stats panel below the chart.

The X-axis bucket size is derived from the selected date range — sub-day windows render at 5-minute or 15-minute buckets, multi-week windows aggregate to hours, and multi-month windows aggregate to days.

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

## Sharing a dashboard

The URL of the dashboard preserves the test it was opened against. To share a specific view with a teammate, apply the filters you want and copy the URL — the shared dashboard opens with the same test in scope. Filter selections beyond Test Name are not round-tripped through the URL.

## Related

- [App Performance Analytics](/support/docs/appium-app-performance-analytics/) — how to enable App Profiling on Appium tests and review per-session metrics.
- [Analytics Overview](/support/docs/analytics-overview/) — the broader Insights module.
