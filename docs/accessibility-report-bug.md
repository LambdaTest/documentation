---
id: accessibility-report-bug
title: Report Bugs on your Integration tools from LambdaTest Accessibility Testing
hide_title: false
sidebar_label: Report Bugs
description: Report the bugs that you are expereinceing
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - Bug Reporting
    - Reports
url: https://www.lambdatest.com/support/docs/accessibility-report-bug/
site_name: LambdaTest
slug: accessibility-report-bug/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Navigating Dashboard",
          "item": "https://www.lambdatest.com/support/docs/accessibility-report-bug/"
        }]
      })
    }}
></script>
The Bug Reporting feature in LambdaTest Accessibility Testing helps you to efficiently log, track, and manage accessibility issues identified during testing. This feature ensures seamless collaboration between testers and developers by integrating with popular issue tracking tools.

## Key Features
- **Automated Bug Logging :** Report accessibility issues directly from the LambdaTest interface.
- **Integration with Issue Tracking Tools :** Supports integrations with Jira, Trello, Asana, GitHub, GitLab, and Slack.
- **Detailed Issue Reports :** Capture essential details such as element selectors, contrast issues, ARIA violations, and WCAG compliance errors.
- **Screenshots & Annotations :** Attach annotated screenshots for better issue reproduction.
- **Team Collaboration :** Assign bugs to team members, set priorities, and track resolution status.

## Steps to Report a Bug
LambdaTest enables seamless integration with third-party issue trackers to streamline bug management.

### Step 1. Navigating to Accessibility Test Report
- Navigate to **Accessibility** section in your LambdaTest dashboard.
- Go to the **Manual/Automation** Reports.
- Select the report for which you want to Mark it as Bug.

## Step 2. Reporting an Issue
- Click on the **Report Bug** button next to the identified issue.
- A bug reporting form will appear with pre-filled details, including:

Issue type (e.g., contrast error, missing ARIA attributes, keyboard navigation failure).

Affected elements and their selectors.

WCAG guideline references.

Automated screenshot with highlighted issue area.

(Optional) Add a custom description and additional screenshots.

Assign the bug to a specific team member.

Set the priority (Low, Medium, High, Critical).

Click Submit to log the bug.

3. Tracking and Managing Bugs

Navigate to the Bug Tracking Dashboard in LambdaTest.

View all reported bugs along with their statuses (Open, In Progress, Resolved, Closed).

Use filters to sort bugs by severity, assignee, or testing session.

Click on a bug to view detailed information and comments from the assignee.

Update the status or add further details as needed.

Integrations with Issue Tracking Tools

LambdaTest enables seamless integration with third-party issue trackers to streamline bug management.

1. Configuring Integrations

Navigate to Integrations in the LambdaTest dashboard.

Select the issue tracker you want to connect (e.g., Jira, Trello, GitHub, GitLab, Asana).

Authenticate using API keys or OAuth credentials.

Configure default project settings for bug reporting.

Save settings to enable automated issue logging.

2. Logging Bugs to External Tools

When reporting a bug, select Sync to [Issue Tracker].

The bug will be automatically pushed to the selected tool with all necessary details.

Updates in the external tracker will reflect in LambdaTest's Bug Tracking Dashboard.