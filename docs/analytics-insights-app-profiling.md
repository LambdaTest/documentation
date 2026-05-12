---
id: insights-app-profiling
title: App Profiling Insights
sidebar_label: App Profiling
description: Discover TestMu AI's App Profiling Insights for comprehensive test cases insights. Optimize your testing efforts today.
keywords:
  - analytics
  - test insights
  - App Profiling
  - Desktop insights
  - Desktop trends
  - Desktop status ratio

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
          "name": "Linear App Integration",
          "item": `${BRAND_URL}/support/docs/insights-app-profiling/`
        }]
      })
    }}
></script>

---

import NewTag from '../src/component/newTag';

## Overview

The App Profiling dashboard provides comprehensive performance metrics to help you identify bottlenecks and optimize your application. This documentation explains each widget's purpose and how to interpret the data to improve app performance.

The data on this dashboard comes from the App Profiling capability on Appium tests. To enable App Profiling on your test runs and review per-session metrics, see [App Performance Analytics](/support/docs/appium-app-performance-analytics/).

<img loading="lazy" src={require('../assets/images/analytics/app-profiling-screenshot2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

## How to access

1. Open the **Insights** section from the left sidebar of the <BrandName /> dashboard.
2. Select **App Profiling**. The landing page lists every test that has App Profiling data.
3. Click a test name to open its dashboard.

The page is always scoped to the test you opened. Use the **Test Name** filter to add more tests to the comparison without leaving the dashboard or reset to revert.

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

| Metric | Green(Ok) | Amber(Warning) | Red(Critical) |
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

:::note
Admins can override the defaults at the organisation level. Regular users see the configured thresholds applied but cannot modify them.
:::

## Understanding Performance Metrics Widgets

### 1. Performance Overview

A strip of KPI cards summarising the headline metrics over the selected window.

- **Avg CPU (%)** — application CPU usage averaged across sessions in scope.
- **Avg Memory (MB)** — application memory usage averaged across sessions in scope.
- **Avg FPS** — frames per second averaged across sessions in scope.
- **Avg Cold Startup (ms)** — cold-start duration averaged across sessions in scope.
- **Avg Crashes per Crashed Session** — `avg(crash_count)` over sessions that reported at least one crash. This is the mean crash count among already-crashed sessions, not a crash rate.

> Cards are hidden automatically when the underlying metric are not recorded for the test session.

### 2. Performance Trends

A single time-series chart that overlays selected metrics on dual Y-axes. The **KPIs** selector in the widget header controls which series are visible — CPU, FPS, Memory, Temperature, Battery, Network Upload and Network Download are available; CPU and Memory are on by default. Each visible KPI gets a Min / Max / Avg row in the stats panel below the chart.

### 3. Device Performance Matrix

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

### 4. Label Page Load Time

Duration per page transition label, captured from the `label` events recorded inside the test. Each visible label is plotted as a horizontal bar showing its average duration; the widget shows the top labels by session count by default, and a label selector inside the widget lets you add or remove labels from the chart.

SLA thresholds render as vertical green/amber/red bands behind the bars, with the configured threshold drawn as a dashed reference line — bars that extend into the red band are out of SLA. The stats panel below the chart reports Min / Max / Avg duration across the visible labels.

### 5. CPU Utilization Trend

**Widget Purpose:**
This graph tracks CPU consumption over time, separating system-level processing from app-specific usage.

**Metrics Explained:**
- **CPU System (%)**: Total system CPU resources being used
- **CPU App (%)**: CPU resources specifically consumed by your application

**How to Analyze:**
- Look for consistent app CPU usage above 15-20%, which may indicate inefficient algorithms or background tasks
- Watch for correlations between high CPU usage and other performance issues
- Identify patterns: gradual increases could signal memory leaks; sudden spikes might indicate intensive operations

**Optimization Strategies:**
- Offload intensive tasks to background threads
- Implement lazy loading for resource-heavy features
- Use caching mechanisms for repetitive operations
- Optimize algorithms with high computational complexity
- Consider using more efficient data structures

### 6. Frame Rate Trends

**Widget Purpose:**
Visualizes rendering performance, highlighting both smooth operation and problematic frames.

**Metrics Explained:**
- **Current FPS**: Frames rendered per second (higher is better, 60+ ideal for smooth animation)
- **Jank Frames**: Frames taking excessive time to render, causing visual stuttering
- **Frozen Frames**: Completely dropped frames that cause noticeable pauses

**How to Analyze:**
- Identify sections where FPS consistently drops below target (60 FPS for most applications)
- Pay attention to clusters of jank frames, which indicate UI thread blockage
- Look for correlations between frozen frames and specific user interactions

**Optimization Strategies:**
- Move heavy operations off the UI thread
- Simplify complex layouts and view hierarchies
- Reduce overdraw by flattening view layers
- Optimize or defer expensive drawing operations
- Implement hardware acceleration where appropriate
- Use profiling tools to identify specific rendering bottlenecks

### 7. Memory Usage

**Widget Purpose:**
Monitors memory allocation patterns to identify potential leaks and inefficient resource usage.

**Metrics Explained:**
- **App Memory (MB)**: Direct memory consumed by your application
- **System Memory (MB)**: Overall system memory usage

**How to Analyze:**
- Look for steadily increasing app memory over time (indicates potential leaks)
- Identify memory spikes during specific operations
- Pay attention to how memory behaves after screen transitions or intensive tasks
- Watch for memory that doesn't return to baseline after operations complete

**Optimization Strategies:**
- Implement proper object lifecycle management
- Use weak references for observer patterns
- Optimize image loading and caching
- Dispose of resources when moving between screens
- Consider using object pools for frequently created/destroyed objects
- Implement memory leak detection in development builds

### 8. Battery Utilization

**Widget Purpose:**
Tracks energy consumption to identify processes that may drain battery excessively. This data is for Android only and rendered only when the session recorded battery samples

**Metrics Explained:**
- **Battery (mAh)**: Energy consumption rate in milliampere-hours

**How to Analyze:**
- Identify patterns of high battery usage
- Look for correlation between battery drain and specific app features
- Compare battery usage across different app states (active, background, idle)

**Optimization Strategies:**
- Optimize network calls (batch requests, compress data)
- Reduce location service usage when not essential
- Implement efficient background processing
- Optimize wake locks and sensor usage
- Use dark mode or darker UI for OLED screens
- Batch CPU-intensive operations

### 9. Network Utilization

**Widget Purpose:**
Monitors data transfer to identify inefficient network operations.

**Metrics Explained:**
- **Network Upload (KB)**: Data sent by the application
- **Network Download (KB)**: Data received by the application

**How to Analyze:**
- Look for unexpected or excessive data transfers
- Identify patterns in network activity (constant polling vs. event-based)
- Compare network usage against expected data requirements

**Optimization Strategies:**
- Implement efficient caching strategies
- Compress network payloads
- Use incremental data loading
- Optimize API requests (GraphQL, partial responses)
- Batch network requests when possible
- Implement offline capabilities
- Use efficient image formats and compression

### 10. Battery Temperature

**Widget Purpose:**
Measures device thermal performance to identify processes causing overheating.

**Metrics Explained:**
- **Avg. Temperature (°C)**: Current average temperature of the device

**How to Analyze:**
- Track temperature increases during specific operations
- Identify features that consistently raise device temperature
- Look for sustained high temperatures that could lead to thermal throttling

**Optimization Strategies:**
- Optimize CPU-intensive algorithms
- Reduce sustained high CPU/GPU operations
- Space out intensive tasks rather than running simultaneously
- Implement adaptive performance based on device temperature
- Consider lower quality graphics or processing when temperature is high

### 11. Cold Startup Time

**Widget Purpose:**
Measures application launch performance from a completely shut down state.

**Metrics Explained:**
- **Cold Startup (ms)**: Time taken to launch app when not in memory

**How to Analyze:**
- Look for consistently high startup times
- Identify variations in startup performance
- Compare against industry benchmarks (1-2 seconds is typically acceptable)

**Optimization Strategies:**
- Implement lazy initialization of non-critical components
- Defer heavy operations until after UI is visible
- Optimize database and storage access during startup
- Use app startup libraries to manage initialization
- Consider using a splash screen for perceived performance
- Reduce app dependencies and initialization chain

### 12. Hot Startup Time

**Widget Purpose:**
Measures application launch performance when re-opening from background.

**Metrics Explained:**
- **Hot Startup (ms)**: Time taken to resume app when already in memory

**How to Analyze:**
- Look for hot startup times exceeding 500ms
- Identify inconsistency in resume performance
- Compare against cold startup to ensure significant improvement

**Optimization Strategies:**
- Optimize saved state management
- Implement efficient view restoration
- Use lightweight persistence mechanisms
- Consider UI state caching strategies
- Prioritize restoring visible elements first

## Advanced Analysis Techniques

### Correlation Analysis

To gain deeper insights, analyze relationships between different metrics:

1. **CPU vs. Frame Rate**: High CPU often correlates with frame drops
2. **Memory vs. Startup Time**: Increasing memory usage may slow startup
3. **Battery vs. Network**: Excessive network activity typically increases battery consumption
4. **Temperature vs. Performance**: High temperatures often lead to throttling and reduced performance

### Benchmark Comparison

Establish baseline metrics for your application:

1. **Competitor Analysis**: Compare your metrics against similar apps
2. **Version Comparison**: Track metrics across your app versions
3. **Device Variation**: Compare performance across different device models
4. **User Scenario Testing**: Create specific user flows and measure performance

### Performance Budgeting

Set target thresholds for critical metrics:

1. **Startup Budget**: Cold start < 2 seconds, hot start < 500ms
2. **Frame Rate Budget**: Maintain 60+ FPS during animations
3. **Memory Budget**: Keep peak memory under device-specific thresholds
4. **Network Budget**: Limit payload sizes and request frequency
5. **Battery Budget**: Limit battery consumption per hour of active use

## Implementing Performance Improvements

### Prioritization Framework

When addressing performance issues:

1. **User Impact**: Prioritize issues directly affecting user experience
2. **Frequency**: Address problems that occur most frequently
3. **Severity**: Focus on severe performance degradations first
4. **Complexity**: Balance effort required against potential improvements
5. **Business Impact**: Consider effects on retention, conversion, and engagement

### Testing Methodology

Verify improvements through rigorous testing:

1. **A/B Testing**: Compare metrics between old and new implementations
2. **Progressive Rollout**: Deploy changes to a small percentage of users first
3. **Real-World Testing**: Test across various network conditions and devices
4. **Automated Performance Testing**: Implement CI/CD performance checks

## Continuous Monitoring

For ongoing performance optimization:

1. **Real User Monitoring**: Collect performance data from production users
2. **Performance Regressions**: Set up alerts for metric degradations
3. **Periodic Audits**: Schedule regular performance reviews
4. **User Feedback Analysis**: Correlate performance metrics with user sentiment

By leveraging these widgets and analysis techniques, you can systematically identify and address performance bottlenecks, resulting in a faster, more efficient, and battery-friendly application that provides an excellent user experience.
