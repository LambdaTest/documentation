---
id: zohoproject-integration
title: Zoho Project Integration with TestMu AI
hide_title: false
sidebar_label: Zoho Project
description: TestMu AI provides integration with Zoho Project to help you log bugs directly from your test session on TestMu AI to Zoho Projects.
keywords:
  - TestMu AI integrations
  - Push issues to Zoho Project
  - TestMu AI Zoho Project integration
  - bug tracking tools
  - project management tools
  - integrate zoho project with testmu ai
  - create issue in zoho project from testmu ai
url: https://www.testmuai.com/support/docs/zohoproject-integration/
site_name: TestMu AI
slug: zohoproject-integration/
canonical: https://www.testmuai.com/support/docs/zohoproject-integration/
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
          "name": "Zoho Project Integration",
          "item": `${BRAND_URL}/support/docs/zohoproject-integration/`
        }]
      })
    }}
></script>

Zoho Project is a powerful cloud-based project management solution that streamlines project tracking, bug management, and team collaboration through its robust customization and automation capabilities.

The <BrandName /> integration enables you to capture and log bugs directly from your test sessions to Zoho Project, complete with screenshots and test environment details, making your testing workflow more efficient.

> Zoho Project Integration with <BrandName /> is available for both freemium and premium plans.

## Integrate Zoho Project With <BrandName />

**Step 1:** Login to your <BrandName /> account. You should have administrator or user level access.

**Step 2:** Navigate to `Settings` -> `Integrations` -> `Bug Tracker`.

**Step 3:** Click on **Install** on the Zoho Project block.

**Step 4:** Select the region where your Zoho Project account is located.

**Step 5:** Sign in to your Zoho Project account.

**Step 6:** Click **Accept** when Zoho Project requests permission to access your Zoho account data.

**Step 7:** Select your portal and then projects you want to integrate.

**Step 8:** Click **Install**. <BrandName /> will now be integrated with Zoho Project.

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/videos/integration/bug-tracking/zohoproject/install.mp4').default} type="video/mp4" />
</video>

## Log your First Bug

**Step 1:** Ensure you have access to the appropriate Zoho Project workspace and project.

**Step 2:** While testing on <BrandName />, if you encounter a bug, click on the **Mark as Bug** button available.

**Step 3:** In the bug logging form, provide the necessary details.

<img loading="lazy" src={require('../assets/images/integrations/zohoproject/1.png').default} alt="4" className="doc_img"/>

**Step 4:** Click on the **Create Issue** button. The bug will be logged into your Zoho Project, and you can view it directly from your Zoho Project dashboard.

<img loading="lazy" src={require('../assets/images/integrations/zohoproject/2.png').default} alt="4" className="doc_img"/>

## Resync Zoho Project Integration

To ensure that your Zoho Project integration stays up-to-date with the latest projects and users:

**Step 1:** Navigate to **Settings** -> **Integrations** in your <BrandName /> account.

**Step 2:** Locate the Zoho Project integration and click on the **Resync** button.

If your refresh token has expired, you will be prompted to reauthorize your Zoho Project integration.

<img loading="lazy" src={require('../assets/images/integrations/zohoproject/3.png').default} alt="4" className="doc_img"/>

## Uninstall Zoho Project Integration

**Step 1:** Navigate to `Settings` -> `Integrations` in your <BrandName /> account.

**Step 2:** Locate the Zoho Project integration and click on the **Remove** button to uninstall the integration.

> That was all you need to know for <BrandName /> + Zoho Project Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock.

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
        Zoho Project Integration
      </span>
    </li>
  </ul>
</nav>
