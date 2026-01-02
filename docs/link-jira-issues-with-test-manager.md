---
id: link-jira-issues-with-test-manager
title: Link Jira Issues with Test Manager
hide_title: true
sidebar_label: Link Jira Issues with Test Manager
description: Effortlessly link Jira issues with Test Manager using TestMu AI to streamline workflows and enhance project management efficiency.
keywords:
  - link jira issues
  - link jira issues with test manager
url: https://www.testmu.ai/support/docs/link-jira-issues-with-test-manager
site_name: LambdaTest
slug: link-jira-issues-with-test-manager
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Link Jira Issues with Test Manager",
          "item": `${BRAND_URL}/support/docs/link-jira-issues-with-test-manager/`
        }]
      })
    }}
></script>

# Link Jira Issues with Test Manager

Test Manager enhances its functionality by seamlessly linking test cases with Jira issues. This integration ensures a reliable connection between your testing activities and Jira tasks, optimizing project management and collaboration across teams.

### Initial Setup and Configuration

> **Note:** If you have already integrated Jira with your <BrandName /> account, you can skip this section and proceed directly to [Linking Jira Issues](#linking-jira-issues-in-test-manager)

1. Navigate to the [Integration page](https://integrations.lambdatest.com/) to integrate your <BrandName /> account with Jira. Search for Jira and click on **Connect**.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/Jira-Connect.png').default} alt="Real "  className="doc_img" width="1366" height="629"/>

2. A side drawer will open to initiate Jira integration. Click on **Install** to proceed.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/install-jira.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

3. A prompt will appear requesting access to your Atlassian account. Click on **Accept** to proceed.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/accept-the-request.webp').default} alt="Real "  className="doc_img" width="1366" height="629"/>

4. Select your Jira instance site, click on **Select Site & Proceed**, then select your preferred project and click **Integrate Projects & Install**.

### Linking Jira Issues in Test Manager

Once the integration is complete, follow these steps to link issues with your test cases or test runs:

1. Head to the issues section in Test Manager, click on **Link Issue** and go to Jira.
> Note: Issue linking is supported in both Test Cases and Test Runs. To link issues, go to the Issues tab within a Test Case or a Test Run.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/4.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

2. Enter the Jira Issue ID or URL in the input field and click on **Link Issue**.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/Jira-linkIssue-enterId.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

3. The Jira issue from your integrated Jira Project is successfully linked and listed. You can view the Issue summary, ID, type, status, priority, and creator.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/Jira-Issue-Listed.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>

4. To **unlink an issue**, click on the unlink button located on the right side of the Jira Issue.

<img loading="lazy" src={require('../assets/images/ado-linking-test-manager/Jira-Unlink-Issue.png').default} alt="Link Azure DevOps Issue" className="doc_img" width="1366" height="629"/>



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
       Link Jira Issues with Test Manager
      </span>
    </li>
  </ul>
</nav>
