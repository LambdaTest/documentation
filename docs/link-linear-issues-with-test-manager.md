---
id: link-linear-issues-with-test-manager
title: Link Linear Issues with Test Manager
hide_title: true
sidebar_label: Link Linear Issues with Test Manager
description: Link Linear issues to test cases, test runs, test run instances, and steps in Test Manager, view live issue details, and unlink them when the defect no longer applies.
keywords:
  - link linear issues
  - link linear issues with test manager
  - linear test manager integration
  - linear issue tracking
url: https://www.testmuai.com/support/docs/link-linear-issues-with-test-manager/
site_name: TestMu AI
slug: link-linear-issues-with-test-manager/
canonical: https://www.testmuai.com/support/docs/link-linear-issues-with-test-manager/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Link Linear Issues with Test Manager",
          "item": `${BRAND_URL}/support/docs/link-linear-issues-with-test-manager/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/link-linear-issues-with-test-manager/"
    },
    "headline": "Link Linear Issues with Test Manager",
    "description": "Link Linear issues to test cases, test runs, test run instances, and steps in Test Manager, view live issue details, and unlink them when the defect no longer applies.",
    "url": "https://www.testmuai.com/support/docs/link-linear-issues-with-test-manager/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Test Manager",
    "keywords": [
      "link linear issues",
      "link linear issues with test manager",
      "linear test manager integration"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T21:31:00+05:30"
  }) }}
/>

# Link Linear Issues with Test Manager

Test Manager connects your testing work to the issues your team already tracks in Linear. Link a Linear issue to a test case, a test run, a test run instance, or an individual step, and the issue's current details travel with the test artifact, so you can trace a failing test back to the work item behind it without leaving Test Manager.

### Before you begin

- Integrate Linear with your <BrandName /> account. Follow the steps in [Linear App Integration](/support/docs/linear-app-integration/).
- Until Linear is connected, it cannot be selected as a source in the **Link Issue** dialog. The dialog shows the connection state of each tracker.
- Searching and linking are limited to the Linear projects you selected during setup. Issues from any other project are not returned.

### Linking Linear Issues in Test Manager

Once the integration is complete, follow these steps to link issues with your test cases or test runs:

1. Head to the issues section in Test Manager and click on **Link Issue**.
> Note: Issue linking is supported at the Test Case, Test Run, Test Case instance, and step level. To link issues, go to the Issues tab within a Test Case or a Test Run. For linking at the instance and step level within a Test Run, see [Track Bugs and Issues in Test Runs](/support/docs/track-issues-in-test-runs/).

<img loading="lazy" src={require('../assets/images/test-manager/linear/link-issue-dialog-linear.png').default} alt="issues-tab-with-link-issue-button" className="doc_img"/>

2. Select **Linear** as the source, enter the Linear issue ID or URL in the input field, and click on **Link Issue**.

<img loading="lazy" src={require('../assets/images/test-manager/linear/enter-linear-issue-id.png').default} alt="link-issues-dialog-with-linear-selected-and-issue-id-entered" className="doc_img"/>

3. The Linear issue from your integrated Linear project is successfully linked and listed.

<img loading="lazy" src={require('../assets/images/test-manager/linear/linear-issue-listed.png').default} alt="linked-linear-issue-listed" className="doc_img"/>

### What a linked Linear issue shows

A linked issue lists its title, identifier, issue type, status, priority, creation date, and creator. Click the linked issue to open it directly in Linear.

Linked issues are grouped by tracker, so Linear issues are listed under Linear alongside any Jira or Azure DevOps issues on the same test artifact. Use the search box and the **Status** and **Issue Type** filters to narrow a long list.

Test Manager does not store any of these details. They are fetched from Linear every time you view the test case, test run, or instance, so what you see always reflects the current state of the issue in Linear.

Linking is repeatable and many-to-many:

- Linking the same issue to the same test artifact again does not create a duplicate.
- One Linear issue can be linked to any number of test cases, test runs, and instances, and one test artifact can carry any number of Linear issues.

### Unlinking a Linear issue

To **unlink an issue**, click on the unlink button located on the right side of the Linear issue.

Unlinking removes the association in Test Manager only. The issue itself stays in Linear.

<img loading="lazy" src={require('../assets/images/test-manager/linear/unlink-linear-issue.png').default} alt="unlink-linear-issue" className="doc_img"/>

### Behaviour in specific situations

| Situation | What happens |
|---|---|
| Linear is not connected to your <BrandName /> account | Linear cannot be selected in the **Link Issue** dialog until you connect it |
| The issue belongs to a Linear project you did not select during setup | It is not returned in results and cannot be linked |
| Linear is temporarily unreachable | The issue is shown with the details last retrieved, along with a notice that they could not be refreshed. The next view retries |
| The issue is archived in Linear | The issue is identified as archived and can still be linked |
| The issue has been deleted in Linear | The issue is reported as unavailable and can be unlinked |
| Linear is disconnected from your account | Linked Linear issues are no longer shown. They become visible again if you reconnect the same Linear workspace and projects |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
       Link Linear Issues with Test Manager
      </span>
    </li>
  </ul>
</nav>
