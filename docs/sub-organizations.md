---
id: sub-organizations
title: Sub Organizations
hide_title: true
sidebar_label: Sub Organizations
description: This documentation will help you create and manage sub-organizations on TestMu AI.
keywords:
- sub organizations testmu ai
- manage sub organizations
- create sub organizations
url: https://www.testmuai.com/support/docs/sub-organizations/
site_name: TestMu AI
slug: sub-organizations/
canonical: https://www.testmuai.com/support/docs/sub-organizations/
---

# Sub Organizations
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';

Sub-organizations let you segregate test data across multiple business units within your <BrandName /> account. You can also distribute the concurrency you have purchased among sub-organizations, so each operates independently with its own administrators, users, and settings.

:::note
This feature is available exclusively on the **Enterprise plan**. To enable it for your organization, please reach out to your account manager.
:::

## Things to Note
---

Before setting up sub-organizations, review the following constraints:

- **Single membership:** A user can belong to only one organization or sub-organization at a time. Cross-membership is not supported.
- **Concurrency ceiling:** You can allocate the concurrency you have subscribed to across sub-organizations. The total concurrency allocated across all sub-organizations cannot exceed the concurrency available at the root organization level, on a per-product basis.

## Create Your Sub-Organization
---

**Step 1:** Sign in to your <BrandName /> account. If you don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>register for free</a>.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:** Navigate to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:** Open the **Sub Organization** tab.

<img loading="lazy" src={require('../assets/images/sub-organizations/sub-org-tab.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 4:** Click **Create**. 

<img loading="lazy" src={require('../assets/images/sub-organizations/click-create.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 5:** Enter a name for your sub-organization and click **Create**.

<img loading="lazy" src={require('../assets/images/sub-organizations/enter-name.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/sub-organizations/sub-org-created.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

Your **sub-organization** has been created and is ready to configure.



## Manage Your Sub-Organization
---

To manage a sub-organization, click the **three-dot (⋮) menu** next to its name. From this menu, you can **view, edit, or delete** the sub-organization. 

<img loading="lazy" src={require('../assets/images/sub-organizations/manage-org.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

## Manage Users in Your Sub-Organization
---

### Invite a User

To **invite users** to your sub-organization, open the newly created sub-organization from the list. 

**Step 1:** Click **Invite**. 

<img loading="lazy" src={require('../assets/images/sub-organizations/invite-user.webp').default} alt="Invite user button in the Users tab" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:** Enter the **email address** of the user you want to add, select a **role** from the dropdown, and click **Submit**.

<img loading="lazy" src={require('../assets/images/sub-organizations/add-user.webp').default} alt="Invite user dialog" width="404" height="206"  className="doc_img img_center"/><br/>

### Manage Existing Users

After users have joined, you can manage them directly from the **Users** tab inside the sub-organization.

<img loading="lazy" src={require('../assets/images/sub-organizations/users-list.webp').default} alt="Users list inside a sub-organization" width="404" height="206"  className="doc_img img_center"/><br/>

Each user row has a **three-dot (⋮) menu** that provides the following actions:

- **View Username & Access Key:** View the user's username and access key for use in automation or scripts.
- **Change Password:** Reset the password for the selected user.
- **Login As:** Sign in to <BrandName /> as the selected user (see [Login As](#login-as) below).
- **Delete:** Remove the user from the sub-organization.

<img loading="lazy" src={require('../assets/images/sub-organizations/user-kebab-menu.webp').default} alt="User row actions menu options" width="404" height="206"  className="doc_img img_center"/><br/>

### Login As

The **Login As** action lets administrators sign in to <BrandName /> as another user within the sub-organization. This is useful for troubleshooting access issues, validating role-based permissions, or reproducing problems reported by a team member.

**Step 1:** Open the **three-dot (⋮) menu** next to the user and select **Login As**.

<img loading="lazy" src={require('../assets/images/sub-organizations/login-as.webp').default} alt="Login As option in the user actions menu" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:** You are now signed in as the selected user and will see <BrandName /> exactly as they do. An **Assumed Identity** indicator appears in the top-right corner showing whose account you are using.

<img loading="lazy" src={require('../assets/images/sub-organizations/assumed-identity.webp').default} alt="Assumed Identity indicator with Go Back to your session option" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:** To return to your own account, click the **Assumed Identity** indicator and select **Go Back to your session**.

:::tip
Use the **Login As** action responsibly. Any changes you make while impersonating another user are recorded against that user's account.
:::

## Manage Service Accounts
---

A **service account** lets you generate an **access key** that can be used in automated systems (such as CI/CD pipelines) to trigger tests and make API calls. Unlike a regular user, a service account is not linked to any individual and can be managed by administrators.

<img loading="lazy" src={require('../assets/images/sub-organizations/service-account-info.webp').default} alt="Service Accounts tab with overview banner" width="404" height="206"  className="doc_img img_center"/><br/>

### Create a Service Account

To create a new service account, open the **Service Account** tab within your sub-organization. 

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-tab.webp').default} alt="Service Account tab" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 1:** Click **Create**. 

<img loading="lazy" src={require('../assets/images/sub-organizations/create-service-acc.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:** Enter a name for your **Service Account** and click **Create**. 

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-name.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:** Your **Service Account credentials** are displayed. Save them securely, as they will not be shown again. 

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-credentials.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-created.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

Your new **Service Account** is now ready to use. 

> That covers everything you need to know about the sub-organizations feature. If you have any questions, please reach out via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us at [support@testmuai.com](mailto:support@testmuai.com).

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
       Sub Organization
      </span>
    </li>
  </ul>
</nav>



