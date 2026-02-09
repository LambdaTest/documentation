---
id: analytics-report-scheduling
title: Schedule Analytics Widget Reports
sidebar_label: Report Scheduling
description: Customize the delivery time for your analytics widget reports. Schedule reports at your preferred time and timezone for timely business insights.
keywords:
  - analytics
  - report scheduling
  - widget reports
  - scheduled reports
  - analytics notifications
url: https://www.testmuai.com/support/docs/analytics-report-scheduling/
site_name: LambdaTest
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

Analytics report scheduling allows you to customize the delivery time for your dashboard widget reports. Instead of receiving reports at a fixed default time, you can choose a specific time and timezone that aligns with your team's workflow.

## Overview

By default, analytics widget reports are delivered at 12:00 PM IST. With the customizable scheduling feature, you can:

- Set a preferred delivery time for each dashboard's reports.
- Choose a timezone that matches your business location.
- Configure notification frequency (daily, weekly, or custom intervals).
- Manage email recipients for scheduled reports.

## Prerequisites

- You must be logged in to your <BrandName /> account.
- You must have at least one [analytics dashboard](/docs/analytics-create-dashboard/) created.
- You must be the dashboard creator or an admin user to modify scheduling settings.

## Schedule a Report

### Step 1: Open Dashboard Settings

Navigate to your analytics dashboard and click the **Settings** gear icon in the upper-right corner.

### Step 2: Enable Email Notifications

In the settings panel, toggle the **Email Notification** switch to enable notifications for the dashboard.

### Step 3: Set the Delivery Schedule

1. Under **Notification Frequency**, select your preferred schedule:
   - **Daily** — Receive reports every day at your chosen time.
   - **Weekly** — Receive reports once a week on your selected day and time.
   - **Custom** — Define a custom interval by specifying the number of days between reports. Enter a value between 1 and 60 days.

2. Select your preferred **delivery time** from the time picker. This is the time at which the report will be generated and sent to the configured recipients.

3. Choose the **timezone** that corresponds to your business location. The report will be delivered at the selected time in the chosen timezone.

### Step 4: Configure the Date Range

Select the date range for the data included in each report:

- **Default** — Uses the platform's default date range.
- **Custom** — Specify a custom number of days. For example, setting this to 7 includes data from the last 7 days in each report.

### Step 5: Add Recipients

1. Enter the email addresses of the users who should receive the scheduled reports.
2. Click **Add** after each email address to include it in the recipient list.
3. You can add multiple recipients to ensure all stakeholders receive the report.

### Step 6: Save Your Settings

Click **Update** to save your scheduling preferences. The changes take effect immediately.

:::tip
Each dashboard has its own independent scheduling settings. You can configure different delivery times and recipients for different dashboards to match each team's needs.
:::

## Update an Existing Schedule

1. Navigate to the dashboard whose schedule you want to modify.
2. Click the **Settings** gear icon.
3. Adjust the notification frequency, delivery time, timezone, date range, or recipients as needed.
4. Click **Update** to save your changes.

:::note
When you update the delivery time for a dashboard, the new schedule applies only to that dashboard. Other dashboards retain their existing schedules.
:::

## Disable Scheduled Reports

To stop receiving scheduled reports for a dashboard:

1. Open the dashboard's **Settings**.
2. Toggle the **Email Notification** switch to the off position.
3. Click **Update** to confirm.

The notification preferences (time, timezone, recipients) are preserved so you can re-enable them later without reconfiguring.

## Common Issues

| Issue | Solution |
|---|---|
| Email notification toggle appears disabled | Ensure you have saved the dashboard after creation. Try refreshing the page and toggling again. |
| Custom frequency input accepts invalid values | Only numeric values between 1 and 60 are allowed. Alphabetical characters are not accepted. |
| Delivery time reverts after clicking Update | Verify you selected the time before clicking Update. If the issue persists, refresh the page and try again. |
| Report not delivered at the scheduled time | Confirm the correct timezone is selected. Reports are sent at the configured time in the chosen timezone. |

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
