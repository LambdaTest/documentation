---
id: rally-integration
title: Rally Integration with TestMu AI
hide_title: false
sidebar_label: Rally
description: TestMu AI provides integration with Rally to help you log bugs directly from your test session on TestMu AI to Rally.
keywords:
  - TestMu AI integrations
  - Push issues to Rally
  - TestMu AI Rally integration
  - bug tracking tools
  - project management tools
  - integrate rally with testmu ai
  - create issue in rally from testmu ai
url: https://www.testmuai.com/support/docs/rally-integration/
site_name: LambdaTest
slug: rally-integration/
canonical: https://www.testmuai.com/support/docs/rally-integration/
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
          "name": "Rally Integration",
          "item": `${BRAND_URL}/support/docs/rally-integration/`
        }]
      })
    }}
></script>

Rally is a powerful cloud-based project management solution that streamlines project tracking, bug management, and team collaboration through its robust customization and automation capabilities.

The <BrandName /> integration enables you to capture and log bugs directly from your test sessions to Rally, complete with screenshots and test environment details, making your testing workflow more efficient.

> Rally Integration with <BrandName /> is available for both freemium and premium plans.

## Integrate Rally With <BrandName />

**Step 1:** Login to your <BrandName /> account. You should have administrator or user level access.

**Step 2:** Navigate to `Settings` -> `Integrations` -> `Bug Tracker`.

**Step 3:** Click on **Install** on the Rally block.

**Step 4:** Fill in the integration details:
   - **Rally API Key** - Required for authentication
   - **Host URL** - Required only for on-premises/self-hosted instances

**How to Generate API Key in Rally**

- Log in to your Rally workspace
- Go to User Settings → API Keys
- Click "Create New API Key"
- Set permissions to "Full Access"
- Copy the generated API key

> **Note**: By default, we use `https://rally1.rallydev.com` as host.


**Step 5:** Click **Install**. <BrandName /> will now be integrated with Rally.

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/videos/integration/bug-tracking/rally/install.mov').default} type="video/mp4" />
</video>

## Log your First Bug

**Step 1:** Ensure you have access to the appropriate Rally workspace and project.

**Step 2:** While testing on <BrandName />, if you encounter a bug, click on the **Mark as Bug** button available in the test session toolbar.

**Step 3:** In the bug logging form, provide the necessary details. The available fields are defined by the defect attributes in your Rally workspace:

- **Project:** Select the specific project in Rally (required)
- **Owner:** Assign the defect to a team member
- **Name:** Enter a concise summary of the bug (required)
- **Description:** Provide detailed information about the bug

- any other required fields defined in your rally attribute for defects

<img loading="lazy" src={require('../assets/images/integrations/rally/create-issue.png').default} alt="Create Rally Issue" width="1347" height="616"  className="doc_img"/>

**Step 4:** Click on the **Create Issue** button. The bug will be logged into your Rally, and you can view it directly from your Rally dashboard or the <BrandName /> Issue Tracker.

## Resync Rally Integration

To ensure that your Rally integration stays up-to-date with the latest workspaces and users:

**Step 1:** Navigate to `Settings` -> `Integrations` in your <BrandName /> account.

**Step 2:** Locate the Rally integration and click on the **Resync** button.

This will:
- Fetch the latest projects and data from your Rally
- Update any changes in project configurations

If your API key has expired, you will be prompted to update your Rally integration credentials.

<img loading="lazy" src={require('../assets/images/integrations/rally/api-expired.png').default}  alt="Resync Rally Integration" width="1347" height="616"  className="doc_img"/>

## Uninstall Rally Integration

**Step 1:** Navigate to `Settings` -> `Integrations` in your <BrandName /> account.

**Step 2:** Locate the Rally integration and click on the **Remove** button to uninstall the integration.

> That was all you need to know for <BrandName /> + Rally Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock.

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
        Rally Integration
      </span>
    </li>
  </ul>
</nav>
