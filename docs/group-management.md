---
id: group-management
title: Group Management
hide_title: true
sidebar_label: Group Management
description: This documentation will help you create groups and allocate concurrency across them on TestMu AI.
keywords:
- group management
- testmu ai
url: https://www.testmuai.com/support/docs/group-management/
site_name: TestMu AI
slug: group-management/
canonical: https://www.testmuai.com/support/docs/group-management/
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
          "name": "Group Management",
          "item": `${BRAND_URL}/support/docs/group-management/`
        }]
      })
    }}
></script>

# Group Management
---

<BrandName /> **Group Management** lets you create groups and allocate concurrency across them, so test automation workloads can be distributed and isolated between teams or projects.

:::note
This feature is available exclusively on the **Enterprise plan**. To enable it for your organization, please reach out to your account manager.
:::

## Before You Begin
---

Sign in to your <BrandName /> account. Open the **Profile** icon in the top-right corner and select **Organization Settings** to access the **Groups** tab. All steps below assume you have this page open.

## Create a New Group
---

**Step 1:** Open the **Groups** tab and click **+ Create**.

<img loading="lazy" src={require('../assets/images/group-management/step-2.png').default} alt="Select Groups tab and click Create"  className="doc_img"/>

**Step 2:** Enter a name for your group and set the maximum concurrency using the sliders. Click **Next**.

<img loading="lazy" src={require('../assets/images/group-management/step-3.png').default} alt="Define group name and manage concurrency"  className="doc_img"/>

**Step 3:** Select the users you want to add to the group, then click **Next**.

<img loading="lazy" src={require('../assets/images/group-management/step-4.png').default} alt="Select users to add to the group"  className="doc_img"/>

**Step 4:** Review the list of users you have selected, then click **Finish**.

<img loading="lazy" src={require('../assets/images/group-management/step-5.png').default} alt="Review added users and finish creating group"  className="doc_img"/>

Your new group is created.

## View and Edit a Group
---

**Step 1:** Open the **Groups** tab. Click the **three-dot (⋮) menu** next to the group you want to view or edit, and select **Edit**.

<img loading="lazy" src={require('../assets/images/group-management/step-6.png').default} alt="Select group and click Edit from context menu"  className="doc_img"/>

**Step 2:** Update the **Group Name** and **Concurrency** settings as needed, then click **Next**.

<img loading="lazy" src={require('../assets/images/group-management/step-7.png').default} alt="Edit group name and manage concurrency"  className="doc_img"/>

**Step 3:** Select or deselect users to add or remove them from the group, then click **Add Users** (when adding) or **Save Changes** to apply your modifications.

<img loading="lazy" src={require('../assets/images/group-management/step-8.png').default} alt="Add or remove users from the group"  className="doc_img"/>

## Delete a Group
---

**Step 1:** Open the **Groups** tab. Click the **three-dot (⋮) menu** next to the group you want to remove, and select **Delete**.

<img loading="lazy" src={require('../assets/images/group-management/step-9.png').default} alt="Select group and click Delete from context menu"  className="doc_img"/>

**Step 2:** In the confirmation dialog, click **Delete** to confirm. The selected group is deleted.

<img loading="lazy" src={require('../assets/images/group-management/step-10.png').default} alt="Confirm deletion of the group"  className="doc_img"/>

<br />

> If you have any questions, please reach out via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us at [support@testmuai.com](mailto:support@testmuai.com).

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
        Group Management
      </span>
    </li>
  </ul>
</nav>
