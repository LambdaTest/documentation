---
id: accessibility-report-bug
title: Report Bugs on your Integration tools from TestMu AI Accessibility Testing
hide_title: false
sidebar_label: Report Bugs
description: Report the bugs that you are expereinceing
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Bug Reporting
    - Reports
url: https://www.testmu.ai/support/docs/accessibility-report-bug/
site_name: LambdaTest
slug: accessibility-report-bug
canonical: https://www.testmu.ai/support/docs/accessibility-report-bug/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Navigating Dashboard",
          "item": `${BRAND_URL}/support/docs/accessibility-report-bug/`
        }]
      })
    }}
></script>
The Bug Reporting feature in <BrandName /> Accessibility Testing helps you to efficiently log, track, and manage accessibility issues identified during testing. This feature ensures seamless collaboration between testers and developers by integrating with popular issue tracking tools.

## Key Features
- **Integration with Issue Tracking Tools :** Supports integrations with Jira, Trello, Asana, GitHub, GitLab, and Slack.
- **Detailed Issue Reports :** Capture essential details such as element selectors, contrast issues, ARIA violations, and WCAG compliance errors.
- **Team Collaboration :** Assign bugs to team members, set priorities, and track resolution status.

## Steps to Report a Bug
### Prerequisite
- Integrate your <BrandName /> account with your required [Bug Tracker platform](/support/docs/bug-tracking-tools/).

### Step 1. Navigating to Accessibility Test Report
- Navigate to **Accessibility** section in your <BrandName /> dashboard.
- Go to the **Manual/Automation** Reports.
- Select the report for which you want to mark it as **Bug**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/mark-bug/01.png').default} alt="accessibility-mark-bug" className="doc_img"/>

### Step 2. Reporting an Issue
- Click on the **Report Bug** icon in the top right cornter.
- A pop-up window will open, fill up the details and create a issue for the same.
- The issue will be notified in your selected bug reporting platform.

<img loading="lazy" src={require('../assets/images/accessibility-testing/mark-bug/02.png').default} alt="accessibility-mark-bug" className="doc_img"/>
