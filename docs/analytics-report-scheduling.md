---
id: analytics-report-scheduling
title: Schedule Analytics Widget Reports
sidebar_label: Report Scheduling
description: Customize the delivery time for your analytics widget reports. Schedule reports at your preferred time for timely business insights.
keywords:
  - analytics
  - report scheduling
  - widget reports
  - scheduled reports
  - analytics notifications
url: https://www.testmuai.com/support/docs/analytics-report-scheduling/
site_name: TestMu AI
slug: analytics-report-scheduling/
canonical: https://www.testmuai.com/support/docs/analytics-report-scheduling/
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
          "name": "Report Scheduling",
          "item": `${BRAND_URL}/support/docs/analytics-report-scheduling/`
        }]
      })
    }}
></script>

Analytics report scheduling allows you to customize the delivery time for your dashboard widget reports. Instead of receiving reports at a fixed default time, you can choose a specific time that aligns with your team's workflow.

## Overview

With the customizable scheduling feature, you can:

- Set a preferred delivery time for each dashboard's email reports.
- Configure notification frequency (Daily, Weekly, or Monthly).
- Choose the data range included in each report.
- Manage email recipients for scheduled reports.

## Prerequisites

- You must be logged in to your <BrandName /> account.
- You must have at least one [Insights dashboard](/docs/analytics-create-dashboard/) created.
- You must be the dashboard creator or an admin user to modify scheduling settings.

## Schedule a Report

### Step 1: Open Dashboard Settings

1. Navigate to your Insights dashboard.
2. Click the **Settings** icon in the dashboard toolbar to open the **Dashboard Settings** panel.

### Step 2: Enable Email Notifications

In the **Dashboard Settings** panel, expand the **Email Notifications** section and toggle the switch to enable notifications for the dashboard.

### Step 3: Set the Delivery Schedule

1. Under **Frequency**, select your preferred schedule from the dropdown:
   - **Daily** — Receive reports every day at your chosen time.
   - **Weekly** — Receive reports once a week.
   - **Monthly** — Receive reports once a month.

2. Under **Time**, select the hour from the dropdown (e.g., `9:00`).

3. Under **Period**, select **AM** or **PM** from the dropdown.

### Step 4: Configure the Date Range

Select the date range for the data included in each report:

- **Default** — Uses the platform's default date range.
- **Custom** — Specify a custom number of days. For example, setting this to `7` includes data from the last 7 days in each report.

### Step 5: Add Recipients

1. Under **Emails**, enter the email address in the **Enter Email address** field.
2. Click **+ Add** to include the recipient.
3. Repeat to add multiple recipients.

### Step 6: Save Your Settings

Click **Update** to save your scheduling preferences. The changes take effect immediately.

:::tip
Each dashboard has its own independent scheduling settings. You can configure different delivery times and recipients for different dashboards to match each team's needs.
:::

## Update an Existing Schedule

1. Navigate to the dashboard whose schedule you want to modify.
2. Open the **Dashboard Settings** panel.
3. Adjust the frequency, time, period, date range, or recipients as needed.
4. Click **Update** to save your changes.

:::note
When you update the delivery time for a dashboard, the new schedule applies only to that dashboard. Other dashboards retain their existing schedules.
:::

## Disable Scheduled Reports

To stop receiving scheduled reports for a dashboard:

1. Open the **Dashboard Settings** panel.
2. Toggle the **Email Notifications** switch to the off position.
3. Click **Update** to confirm.

The notification preferences (time, recipients) are preserved so you can re-enable them later without reconfiguring.

## Common Issues

| Issue | Solution |
|---|---|
| Email notification toggle appears disabled | Ensure you have saved the dashboard after creation. Try refreshing the page and toggling again. |
| Delivery time reverts after clicking Update | Verify you selected the time and period before clicking Update. If the issue persists, refresh the page and try again. |

## Related Docs

- [Create Your Custom Dashboard](/docs/analytics-create-dashboard/)
- [Dashboard Settings](/docs/analytics-dashboard-settings/)
- [Dashboard Features](/docs/analytics-dashboard-features/)

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
      Report Scheduling
      </span>
    </li>
  </ul>
</nav>
