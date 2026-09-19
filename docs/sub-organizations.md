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

**Step 2:** From the dashboard, go to **Settings** and select **Organization Settings**.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/navigate-to-organization-settings.png').default} alt="Selecting Organization Settings from the Settings menu" width="1920" height="385"  className="doc_img img_center"/><br/>

**Step 3:** Open the **Sub Organizations** tab.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sub-organizations-tab.png').default} alt="Sub Organizations tab in Organization Settings with the Create button" width="1920" height="577"  className="doc_img img_center"/><br/>

**Step 4:** Click **Create** in the top-right corner. Enter a name for your sub-organization.

Allocate concurrency to at least one product using the sliders. Each row shows the concurrency allocated against your organization's total, for example `0/50`. You cannot create a sub-organization without allocating concurrency to at least one product.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/create-new-sub-organization-modal.png').default} alt="Create New Sub Organization dialog with a name field and per-product concurrency sliders" width="1920" height="917"  className="doc_img img_center"/><br/>

**Step 5:** Click **Create**.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sub-organization-created-success.png').default} alt="New sub-organization listed with its user and service account counts" width="1920" height="649"  className="doc_img img_center"/><br/>

Your **sub-organization** appears in the list with its user and service account counts, and is ready to configure.



## Manage Your Sub-Organization
---

The Sub Organizations list shows each sub-organization along with its user count and service account count.

To manage a sub-organization, click the **three-dot (⋯) menu** at the end of its row. From this menu, you can **View**, **Edit**, or **Delete** the sub-organization.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sub-organization-actions-menu.png').default} alt="Sub-organization row menu with View, Edit, and Delete options" width="1920" height="766"  className="doc_img img_center"/><br/>

You can also rename a sub-organization from inside it, using the **pencil icon** next to its name.

## Manage Users in Your Sub-Organization
---

Open the sub-organization from the list to manage its users. The **Users** tab is selected by default and lets you search the user list, filter by role, review pending invitations, export the list, and invite new users.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/sub-organization-users-empty.png').default} alt="Users tab inside a sub-organization with Search, All Roles filter, Pending Invitations, Export, and Invite options" width="1920" height="758"  className="doc_img img_center"/><br/>

Use the **All Roles** dropdown to filter the list to only **Admin**, **User**, or **Guest** members.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/filter-sub-organization-users-by-role.png').default} alt="All Roles dropdown showing Admin, User, and Guest filter options" width="1920" height="629"  className="doc_img img_center"/><br/>

Click **Pending Invitations** to review invitations that have been sent but not yet accepted. You can search by email address and filter by status or role.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/search-pending-invitations.png').default} alt="List of invited users dialog for searching pending invitations" width="1920" height="775"  className="doc_img img_center"/><br/>

### Invite a User

To **invite users** to your sub-organization, open the newly created sub-organization from the list. 

**Step 1:** Click **Invite**. 

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/invite.png').default} alt="Invite user button in the Users tab" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:** Enter the **email address** of the user you want to add, select a **role** from the dropdown, and click **Submit**.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/submit-email.png').default} alt="Invite user dialog" width="404" height="206"  className="doc_img img_center"/><br/>

### Manage Existing Users

After users have joined, you can manage them directly from the **Users** tab inside the sub-organization.

<img loading="lazy" src={require('../assets/images/sub-organizations/users-list.webp').default} alt="Users list inside a sub-organization" width="404" height="206"  className="doc_img img_center"/><br/>

Each user row has a **three-dot (⋯) menu** that provides the following actions:

- **View Username & Access Key:** View the user's username and access key for use in automation or scripts.
- **Change Password:** Reset the password for the selected user.
- **Login As:** Sign in to <BrandName /> as the selected user (see [Login As](#login-as) below).
- **Delete:** Remove the user from the sub-organization.

<img loading="lazy" src={require('../assets/images/sub-organizations/user-kebab-menu.webp').default} alt="User row actions menu options" width="404" height="206"  className="doc_img img_center"/><br/>

### Login As

The **Login As** action lets administrators sign in to <BrandName /> as another user within the sub-organization. This is useful for troubleshooting access issues, validating role-based permissions, or reproducing problems reported by a team member.

**Step 1:** Open the **three-dot (⋯) menu** next to the user and select **Login As**.

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

<img loading="lazy" src={require('../assets/images/sub-organizations/create-service-acc.webp').default} alt="Create button on the Service Accounts tab" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:** Enter a name for your **Service Account** and click **Create**. 

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-name.webp').default} alt="Create Service Account dialog with a name field" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 3:** Your **Service Account credentials** are displayed. Save them securely, as they will not be shown again. 

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-credentials.webp').default} alt="Service account username and access key dialog" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/sub-organizations/service-acc-created.webp').default} alt="New service account listed after creation" width="404" height="206"  className="doc_img img_center"/><br/>

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



