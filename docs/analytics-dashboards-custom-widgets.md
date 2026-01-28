---
id: dashboards-custom-widgets
title: Custom Widgets in TestMu AI Analytics Dashboards
sidebar_label: Create Custom Widgets
description: A powerful tool to visualize your test data and gain insights into your testing process.
keywords:
  - analytics
  - dashboards
  - custom widgets
  - data visualization
  - custom dashboards
  - test data

url: https://www.testmuai.com/support/docs/dashboards-custom-widgets/
site_name: LambdaTest
slug: dashboards-custom-widgets/
canonical: https://www.testmuai.com/support/docs/dashboards-custom-widgets/
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
          "name": "Linear App Integration",
          "item": `${BRAND_URL}/support/docs/dashboards-custom-widgets/`
        }]
      })
    }}
></script>
Custom widgets in <BrandName /> Analytics Dashboards allow you to create personalized visualizations of your test data. This feature enables you to gain insights into your testing process and make data-driven decisions.

<iframe width="800" height="450" src="https://www.youtube.com/embed/DEY1hhEme6Q?si=hBN9X2hK-QHvgHIA" title="Exploring Custom Widgets for Dashboards in Lambdatest Insights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Prerequisites

Before creating a custom widget, ensure you have:

1. An active LambdaTest account with access to Insights
2. Executed tests on the LambdaTest platform to generate data
3. Access to the Custom Widgets feature

## Common Steps for Creating Custom Widgets

The following steps are common to all custom widget types. After completing these steps, proceed to the widget-specific configuration based on your chosen visualization type.

### Step 1: Navigate to Insights

1. Log in to your [LambdaTest account](https://accounts.lambdatest.com/login).
2. Navigate to the **Insights** section from the left sidebar or visit [https://analytics.lambdatest.com/](https://analytics.lambdatest.com/).
3. Click on the **Dashboards** tab.

### Step 2: Create a New Dashboard or Select Existing

1. Click on the **+ Create New** button located at the top right of the dashboard list.
2. From the dropdown menu, select **Custom Widgets**.

### Step 3: Choose a Product

Select the product for which you want to create the widget. Available options include:

- **Web Automation**: Visualize web testing data
- **App Automation**: Analyze mobile testing data
- **HyperExecute**: Monitor HyperExecute test runs
- **Real Time Testing**: Visualize real-time testing data
- **Real Device Testing**: Analyze real device testing data
- **Smart UI Testing**: Visualize Smart UI testing data

### Step 4: Select Data Source

Choose the data source that will power your widget:

- **Tests**: Visualize test execution data including pass/fail rates, test counts, and execution times
- **Auto Heal**: Visualize Auto Heal statistics and trends (available for Web Automation and HyperExecute only)

### Step 5: Configure Filters (Optional)

Use filters to narrow down your data based on specific requirements:

1. Click **+ Add a Filter** to add filter criteria.
2. Select a **Key** from the dropdown (e.g., browser, OS, resolution, custom data).
3. Choose an **Operator** (equals, contains, greater than, etc.).
4. Select or enter the **Value** to filter by.
5. Add multiple filters as needed to refine your dataset.

:::tip
Use filters to focus on specific release versions, custom parameters, or other attributes. This helps create more targeted and actionable visualizations.
:::

### Next Steps: Widget-Specific Configuration

After completing the common steps above, proceed to configure your specific widget type:

- **[Heatmap Widgets](/docs/analytics-heatmap-widgets)**: Create heatmap visualizations to identify patterns across multiple dimensions
- **[Bar and Line Chart Widgets](/docs/analytics-bar-line-widgets)**: Create bar and line charts to visualize trends and comparisons
- **[Table Widgets](/docs/analytics-table-widgets)**: Create structured tables with multiple columns and aggregations

## Features of Custom Widgets

### Supported Products 

- **Web Automation**: Create custom widgets to visualize web testing data, including test execution times, pass/fail rates, and more.
- **App Automation**: Visualize mobile testing data, including device usage, OS versions, and app performance metrics.
- **HyperExecute**: Create custom widgets to monitor your HyperExecute test runs, including execution times, pass/fail rates, and more.
- **Real Time Testing**: Visualize real-time testing data, including browser and OS usage, test execution times, and more.
- **Real Device Testing**: Create custom widgets to monitor your real device testing data, including device usage, OS versions, and app performance metrics.
- **Smart UI Testing**: Visualize your Smart UI testing data, including test execution times, pass/fail rates, and more.

### Advanced Filters and Options

- **Select Keys**: Choose the keys you want to visualize in your custom widget. You can select multiple keys to create a more comprehensive view of your data.
- **Choose Operators**: Select the operators you want to apply to your data. This allows you to filter and manipulate your data to create the desired visualization.
- **Select Values**: Choose the values you want to visualize in your custom widget. This allows you to create a more focused view of your data.

## Available Visualization Types

Custom widgets support multiple visualization types, each optimized for different use cases:

- **[Heatmap Widgets](/docs/analytics-heatmap-widgets)**: Visualize data density and relationships across multiple dimensions using color intensity and box sizes
- **[Bar Chart Widgets](/docs/analytics-bar-line-widgets)**: Compare values across categories using rectangular bars
- **[Line Chart Widgets](/docs/analytics-bar-line-widgets)**: Track trends and changes over time using connected data points
- **[Table Widgets](/docs/analytics-table-widgets)**: Display structured data with multiple columns, aggregations, and grouping options
- **Pie Chart**: Visualize the distribution of values across categories (documentation coming soon)
- **Billboard**: Display key metrics prominently on your dashboard (documentation coming soon)


## Available Keys for Custom Widgets

The following keys are available for configuring custom widgets across all visualization types. The availability of specific keys depends on the selected product and data source. These keys can be used for filtering, grouping, axis configuration, and column definitions depending on your widget type.

:::note
Choose keys that represent categorical dimensions (like browser, OS, project name) for grouping and comparisons, and numeric or countable fields for aggregations. For time-based trends, use timestamp fields.
:::

<details>
<summary><strong>Web Automation Keys</strong></summary>

The following keys are available for Web Automation widgets:

| Key | Description | Recommended Use |
|-----|-------------|-----------------|
| `browser` | Browser name (Chrome, Firefox, Edge, Safari, etc.) | Grouping, filtering, X-axis |
| `browser_version` | Browser version number | Grouping, filtering |
| `build_name` | Build name identifier | Grouping, filtering, row identifier |
| `build_status` | Status of the build | Grouping |
| `buildtag_name` | Build tag name | Grouping, filtering |
| `create_timestamp` | Test creation timestamp | X-axis (time trends) |
| `custom_data.isFlakyTest` | Flaky test indicator from custom data | Grouping, filtering |
| `custom_data.product` | Product identifier from custom data | Grouping, filtering |
| `device` | Device name/type | Grouping, filtering |
| `duration` | Test execution duration | Y-axis (with aggregation), column (with aggregation) |
| `end_time` | Test end timestamp | X-axis (time trends) |
| `failure_category` | Category of test failures | Grouping |
| `os` | Operating system (Windows, macOS, Linux) | Grouping, filtering, X-axis |
| `os_version` | Operating system version | Grouping, filtering |
| `product` | Product name | Grouping, filtering |
| `project_name` | Project name | Grouping, filtering, row identifier |
| `resolution` | Screen resolution | Grouping, filtering |
| `start_time` | Test start timestamp | X-axis (time trends) |
| `status` | Test status (passed, failed, etc.) | Grouping (most common) |
| `test_id` | Test identifier | Y-axis (with Count aggregation), column (with Count aggregation) |
| `test_name` | Test case name | Row identifier, filtering |
| `test_type` | Type of test | Grouping, filtering |
| `testtag_name` | Test tag name | Grouping, filtering |
| `username` | User who executed the test | Grouping, filtering |

**Custom Data Keys**: Any custom data keys you've defined in your test capabilities can also be used.

</details>

<details>
<summary><strong>App Automation Keys</strong></summary>

The following keys are available for App Automation widgets:

| Key | Description | Recommended Use |
|-----|-------------|-----------------|
| `app_name` | Application name | Row identifier, grouping |
| `app_type` | Type of application | Grouping |
| `brand` | Device brand name | Grouping, filtering |
| `build_name` | Build name identifier | Row identifier, grouping |
| `build_status` | Status of the build | Grouping |
| `build_type` | Type of build | Grouping |
| `create_timestamp` | Test creation timestamp | X-axis (time trends) |
| `custom_data.isFlakyTest` | Flaky test indicator from custom data | Grouping, filtering |
| `device` | Device name/model | Row identifier, grouping |
| `duration` | Test execution duration | Y-axis (with aggregation), column (with aggregation) |
| `end_time` | Test end timestamp | X-axis (time trends) |
| `failure_category` | Category of test failures | Grouping |
| `os` | Mobile OS (Android, iOS) | Grouping, filtering, X-axis |
| `os_version` | OS version number | Grouping, filtering |
| `product` | Product name | Grouping, filtering |
| `project_name` | Project name | Row identifier, grouping |
| `start_time` | Test start timestamp | X-axis (time trends) |
| `status` | Test status (passed, failed, etc.) | Grouping (most common) |
| `test_id` | Test identifier | Y-axis (with Count aggregation), column (with Count aggregation) |
| `test_name` | Test case name | Row identifier, filtering |
| `test_type` | Type of test | Grouping, filtering |
| `username` | User who executed the test | Grouping, filtering |

**Custom Data Keys**: Any custom data keys you've defined in your test capabilities can also be used.

</details>

<details>
<summary><strong>HyperExecute Keys</strong></summary>

The following keys are available for HyperExecute widgets:

| Key | Description | Recommended Use |
|-----|-------------|-----------------|
| `app_name` | Application name (for app tests) | Row identifier, grouping |
| `app_type` | Type of application | Grouping |
| `browser` | Browser name | Grouping, filtering |
| `browser_version` | Browser version number | Grouping, filtering |
| `build_name` | Build name identifier | Row identifier, grouping |
| `build_status` | Status of the build | Grouping |
| `buildtag_name` | Build tag name | Grouping, filtering |
| `create_timestamp` | Test creation timestamp | X-axis (time trends) |
| `custom_data.product` | Product identifier from custom data | Grouping, filtering |
| `device` | Device name/type | Grouping, filtering |
| `duration` | Test execution duration | Y-axis (with aggregation), column (with aggregation) |
| `end_time` | Test end timestamp | X-axis (time trends) |
| `failure_category` | Category of test failures | Grouping |
| `job_created_at` | Job creation timestamp | X-axis (time trends) |
| `job_labels` | Job labels | Grouping |
| `job_status` | Status of the HyperExecute job | Grouping |
| `job_test_type` | Type of test in the job | Grouping |
| `os` | Operating system | Grouping, filtering |
| `os_version` | Operating system version | Grouping, filtering |
| `product` | Product name | Grouping, filtering |
| `project_name` | Project name | Row identifier, grouping |
| `resolution` | Screen resolution | Grouping, filtering |
| `stage_name` | Stage name in the job | Grouping |
| `stage_status` | Status of the stage | Grouping |
| `stage_type` | Type of stage | Grouping |
| `start_time` | Test start timestamp | X-axis (time trends) |
| `status` | Test status (passed, failed, etc.) | Grouping (most common) |
| `test_id` | Test identifier | Y-axis (with Count aggregation), column (with Count aggregation) |
| `test_name` | Test case name | Row identifier, filtering |
| `test_type` | Type of test | Grouping, filtering |
| `testtag_name` | Test tag name | Grouping, filtering |
| `username` | User who executed the test | Grouping, filtering |

**Custom Data Keys**: Any custom data keys you've defined in your test capabilities can also be used.

</details>

## Use Cases for Custom Widgets

Custom widgets can be used for various purposes, including:
- **Tracking Test Execution**: Visualize the number of tests executed, passed, and failed over time to monitor your testing progress.
- **Analyzing Test Performance**: Identify trends in test execution times and pinpoint areas for improvement.
- **Monitoring Browser and OS Usage**: Gain insights into the most popular browsers and operating systems used in your tests to optimize your testing strategy.
- **Comparing Test Results**: Compare test results across different environments or configurations to identify discrepancies and ensure consistent performance.
- **Visualizing Test Coverage**: Create visualizations to understand the coverage of your tests across different features or components of your application.

For detailed widget-specific use cases and examples, see:
- [Heatmap Widget Use Cases](/docs/analytics-heatmap-widgets#use-cases-for-heatmap-widgets)
- [Bar and Line Chart Use Cases](/docs/analytics-bar-line-widgets#use-cases-for-bar-and-line-chart-widgets)
- [Table Widget Use Cases](/docs/analytics-table-widgets#use-cases-for-table-widgets)

> If you have any questions or need assistance with creating custom widgets, please reach out to our support team at [support@testmuai.com](mailto:support@testmuai.com) or visit our [Support Center](https://www.lambdatest.com/support/).

