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

url: https://www.lambdatest.com/support/docs/dashboards-custom-widgets/
site_name: LambdaTest
slug: dashboards-custom-widgets/
---

import NewTag from '../src/component/newTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Linear App Integration",
          "item": "https://www.lambdatest.com/support/docs/dashboards-custom-widgets/"
        }]
      })
    }}
></script>
Custom widgets <NewTag value="BETA" bgColor="#ffec02" color="#000" /> &nbsp;in LambdaTest Analytics Dashboards allow you to create personalized visualizations of your test data. This feature enables you to gain insights into your testing process and make data-driven decisions.

<iframe width="800" height="450" src="https://www.youtube.com/embed/DEY1hhEme6Q?si=hBN9X2hK-QHvgHIA" title="Exploring Custom Widgets for Dashboards in Lambdatest Insights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Creating Custom Widgets

:::info
The <NewTag value="BETA" bgColor="#ffec02" color="#000" /> features are available for limited users only. If you wish to try them out, please reach out to our [24/7 customer support](mailto:support@lambdatest.com).
:::

To create a custom widget, follow these steps:
1. **Log in to your LambdaTest account** and navigate to the Insights section.
2. **Select the Dashboards tab** from the left sidebar.
3. **Click on the Create New Dashboard button** to create a new dashboard or select an existing one.
4. **Click on the Custom Widget Option** to add a new widget to your dashboard.
5. **Choose the type of widget** you want to create (e.g., bar chart, line chart, pie chart, etc.) from the available options.
6. **Configure the widget settings** by selecting the data source, filters, and visualization options. You can customize the appearance of the widget and label it according to your preferences.
7. **Provide a widget name** and description to help identify the widget later.
8. **Provide the Dashboard Name** and click on the Create Dashboard button to save your custom widget.
9. **Once created, you can drag and drop the widget** to rearrange its position on the dashboard or add more widgets.

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

## Visualization Options

- **Bar Chart**: Visualize your data using a bar chart to compare different values across categories.
- **Line Chart**: Use a line chart to visualize trends in your data over time. This is useful for tracking changes in test execution times or pass/fail rates.
- **Pie Chart**: Create a pie chart to visualize the distribution of values across categories. This is useful for understanding the proportion of different test results or device usage.
- **Table**: Use a table to display your data in a structured format. This is useful for comparing multiple values across different categories or time periods.
- **Billboard**: Create a billboard-style widget to display key metrics prominently on your dashboard. This is useful for highlighting important test results or performance metrics.

## Configuration Widget Options

- **Sources**: Choose the data source that powers your custom widget. The source determines what kind of data will be visualized and what insights you can extract. The currently supported sources are:
  1. **Tests**: This source provides access to all your test execution data, including test results, execution times, pass/fail rates, and other key metrics. Selecting this source allows you to build widgets that focus on test performance, trends, and outcomes. You can filter and visualize data such as the number of tests run, success/failure rates, test durations, and more.
  2. **Auto Heal**: This source enables you to visualize data related to LambdaTest's Auto Heal feature, which automatically detects and fixes broken test steps. By selecting Auto Heal as your source, you can create widgets that track the number of auto-healed steps, success rates of healing, impacted test cases, and trends over time. This helps you monitor the effectiveness of Auto Heal and identify areas where your tests benefit from automated healing.

  > **Note:** These sources are currently available for **Web Automation** and **HyperExecute** products only. When you select a source, the widget will render data specific to that source, ensuring that your visualizations are relevant and actionable. For example, if you select "Tests" as the source, your widget will display test execution metrics; if you select "Auto Heal," it will show auto-healing statistics and trends. You can switch between sources to compare different aspects of your testing process within the same dashboard.

- **Custom Axis**: Customize the keys and values displayed on the x-axis and y-axis of your widget. This allows you to create a more meaningful visualization of your data.
- **Custom Labels**: Provide custom labels for your widget to make it easier to understand. This is useful for providing context for your data and helping users interpret the results.
- **Custom Grouping**: Group your data by specific keys or values to create a more focused view of your data. This is useful for comparing different test results or device usage across different categories.


## Use Cases for Custom Widgets

Custom widgets can be used for various purposes, including:
- **Tracking Test Execution**: Visualize the number of tests executed, passed, and failed over time to monitor your testing progress.
- **Analyzing Test Performance**: Identify trends in test execution times and pinpoint areas for improvement.
- **Monitoring Browser and OS Usage**: Gain insights into the most popular browsers and operating systems used in your tests to optimize your testing strategy.
- **Comparing Test Results**: Compare test results across different environments or configurations to identify discrepancies and ensure consistent performance.
- **Visualizing Test Coverage**: Create visualizations to understand the coverage of your tests across different features or components of your application.
- **Tracking Bug Reports**: Monitor the number of bugs reported and their severity levels to prioritize bug fixes and improve software quality.
- **Analyzing User Feedback**: Visualize user feedback and ratings to understand user satisfaction and identify areas for improvement.
- **Monitoring Test Automation**: Track the progress of your test automation efforts and identify areas for improvement in your automation strategy.
- **Visualizing Test Data**: Create custom visualizations to represent your test data in a way that is meaningful to your team and stakeholders.
- **Creating Dashboards for Different Teams**: Create separate dashboards for different teams (e.g., development, QA, product management) to provide tailored insights and metrics relevant to each team’s needs.
- **Sharing Insights with Stakeholders**: Use custom widgets to create dashboards that can be shared with stakeholders, providing them with insights into the testing process and results.
- **Creating Reports**: Use custom widgets to create reports that can be shared with stakeholders, providing them with insights into the testing process and results.

> If you have any questions or need assistance with creating custom widgets, please reach out to our support team at [support@lambdatest.com](mailto:support@lambdatest.com) or visit our [Support Center](https://www.lambdatest.com/support/).

