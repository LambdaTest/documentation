---
id: kane-ai-smart-variables
title: 'Utilizing KaneAI Smart Variables Feature: A Step-by-Step Guide'
hide_title: false
sidebar_label: Smart Variables
description: Learn how to utilize Smart Variables to dynamically adapt to various environments and conditions
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai smart variables
  - kaneai parameters
url: https://www.testmu.ai/support/docs/kane-smart-variables/
site_name: LambdaTest
slug: kane-ai-smart-variables
canonical: https://www.testmu.ai/support/docs/kane-ai-smart-variables/
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
          "name": "KaneAI Smart Variables",
          "item": `${BRAND_URL}/support/docs/kane-ai-smart-variables/`
        }]
      })
    }}
></script>

KaneAI's Smart Variables feature enhances test automation by providing predefined, dynamic variables that can be used across test steps, modules, and test cases. These variables enable dynamic adaptation to various environments and conditions, improving test reliability, reusability, and efficiency. 

They cover categories such as date & time, system information, location, connectivity, randomization, and device-specific details, allowing users to create flexible and robust test scenarios that adapt to real-time conditions without manual input.

:::note
 Smart variables are predefined and cannot be created or deleted by users. They are accessible in test steps, modules, and test cases.
 When typing `{{` in the Web/App Agent, an overlay displays all available variables, including regular, secret, and smart variables, with smart variables labeled as "Smart" and accompanied by descriptions.
:::

Smart Variables are listed under the variables section within an authoring session.

<img loading="lazy" src={require('../assets/images/kane-ai/features/smart-variables/smart-variables-list.png').default} className="doc_img"/> 

## How to Use Smart Variables in Your Tests?

Smart variables can be referenced in test steps, modules, and test cases using the `{{smart.variable_name}}` syntax. Follow these steps to integrate them into your tests:

### Step 1: Access the Test Environment

Enter the Authoring or Editing mode for a KaneAI test case

### Step 2: Reference a Smart Variable

In the "Write a Step" field type `{{` to trigger the variable overlay. This will display a list of all available variables, including smart variables labeled with "Smart".

For example, to use the current date in a test step:

Use `{{` syntax to get the list of smart variables listed and type to search and filter them out then select the desired one.
```
Enter the value of {{smart.current_date}} in the date field
```

<img loading="lazy" src={require('../assets/images/kane-ai/features/smart-variables/smart-variables-fetching.png').default} className="doc_img"/> 

### Step 3: Select a Smart Variable

From the overlay, select the desired smart variable. The variable will be inserted into the test step in the correct syntax (e.g., `{{smart.current_date}}`).

### Step 4: Run Your Test

Once the test step is executed the smart variable will dynamically resolve to its corresponding value based on the current environment or condition (e.g., `2025-04-29` for `{{smart.current_date}}`).

## Supported Smart Variables

Below is a comprehensive list of supported smart variables, organized by category, along with their syntax and descriptions:

| Category              | Variable Name         | Syntax                        | Description                                                                 |
|-----------------------|-----------------------|-------------------------------|-----------------------------------------------------------------------------|
| **Date & Time**       | `current_date`        | `{{smart.current_date}}`      | Current date in YYYY-MM-DD format                                           |
|                       | `current_day`         | `{{smart.current_day}}`       | Current day of the week (Monday, Tuesday, etc.)                             |
|                       | `current_month`       | `{{smart.current_month}}`     | Current month name (January, February, etc.)                                |
|                       | `current_month_number`| `{{smart.current_month_number}}`| Current month number (01, 02, ..., 12)                                      |
|                       | `current_year`        | `{{smart.current_year}}`      | Current year (YYYY)                                                         |
|                       | `current_hour`        | `{{smart.current_hour}}`      | Current hour in 24-hour format (00 to 23)                                   |
|                       | `current_minute`      | `{{smart.current_minute}}`    | Current minute (00 to 59)                                                   |
|                       | `current_timestamp`   | `{{smart.current_timestamp}}` | Current timestamp in epoch milliseconds                                     |
|                       | `current_timezone`    | `{{smart.current_timezone}}`  | Current timezone name (e.g., GMT, UTC+5:30)                                 |
|                       | `next_day`            | `{{smart.next_day}}`          | Date of the next day in YYYY-MM-DD format                                   |
|                       | `previous_day`        | `{{smart.previous_day}}`      | Date of the previous day in YYYY-MM-DD format                               |
|                       | `start_of_week`       | `{{smart.start_of_week}}`     | Date of the first day of the current week (YYYY-MM-DD)                      |
|                       | `end_of_week`         | `{{smart.end_of_week}}`       | Date of the last day of the current week (YYYY-MM-DD)                       |
|                       | `start_of_month`      | `{{smart.start_of_month}}`    | Date of the first day of the current month (YYYY-MM-DD)                     |
|                       | `end_of_month`        | `{{smart.end_of_month}}`      | Date of the last day of the current month (YYYY-MM-DD)                      |
| **User/System Information** | `os_type`       | `{{smart.os_type}}`           | Operating system name on which test is running (e.g., Windows, macOS, Linux)|
|                       | `os_version`          | `{{smart.os_version}}`        | Operating system version on which test is running (e.g., 10.0, 14.2)        |
|                       | `browser_name`        | `{{smart.browser_name}}`      | Browser name on which test is running (e.g., Chrome, Firefox, Safari)       |
|                       | `browser_version`     | `{{smart.browser_version}}`   | Browser version on which test is running (e.g., 112.0, 101.0.1)             |
|                       | `user_name`           | `{{smart.user_name}}`         | Current user name on <BrandName /> who trigger the test                        |
| **Randomized**        | `random_int`          | `{{smart.random_int}}`        | Random 3 digit integer                                                      |
|                       | `random_float`        | `{{smart.random_float}}`      | Random 2 digit float                                                        |
|                       | `random_string_8`     | `{{smart.random_string_8}}`   | Random alphanumeric string of specified length                              |
|                       | `random_string_56`    | `{{smart.random_string_56}}`  | Random alphanumeric string of specified length                              |
|                       | `random_email`        | `{{smart.random_email}}`      | Random email address                                                        |
|                       | `random_phone`        | `{{smart.random_phone}}`      | Random phone number                                                         |
| **Device-Specific**   | `device_name`         | `{{smart.device_name}}`       | Name of the mobile device under test                                        |
|                       | `device_model`        | `{{smart.device_model}}`      | Model of the mobile device                                                  |
|                       | `device_os`           | `{{smart.device_os}}`         | Operating system of the mobile device (iOS, Android)                        |
|                       | `device_os_version`   | `{{smart.device_os_version}}` | Version of the operating system (14.4, 11.0)                                |
|                       | `device_orientation`  | `{{smart.device_orientation}}`| Orientation of the device (Portrait, Landscape)                             |
|                       | `app_version`         | `{{smart.app_version}}`       | Version of the app under test                                               |
|                       | `app_package_name`    | `{{smart.app_package_name}}`  | Package name of the app under test                                          |

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/kane-ai/features/smart-variables/smart-variables-guide.mp4').default} type="video/mp4" />
</video>
