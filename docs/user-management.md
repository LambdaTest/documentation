---
id: user-management
title: User Management
hide_title: true
sidebar_label: User Management
description: This documentation will help you create and manage users on TestMu AI.
keywords:
- users management testmu ai
- manage user
url: https://www.testmuai.com/support/docs/user-management/
site_name: TestMu AI
slug: user-management/
canonical: https://www.testmu.ai/support/docs/user-management/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/user-management/"
    },
    "headline": "User Management",
    "description": "This documentation will help you create and manage users on TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/user-management/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Setting and Security",
    "keywords": [
      "users management testmu ai",
      "manage user"
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
    "dateModified": "2026-02-12T19:51:34+05:30"
  }) }}
/>

# User Management
---

With Organization Settings in <BrandName />, you have the ability to effortlessly invite your team members to your <BrandName /> Account. <BrandName /> offers a range of roles that can be assigned to users.

At present, <BrandName /> supports the following roles:

**Admin:** This role grants full access to all the features and functionalities of <BrandName />, enabling the user to administer the account effectively.

**User:** Users with this role have access to all the subscribed products and are able to execute and stop their own tests. However, certain Organization Settings, such as Team Management, Subscriptions & Invoices, Authentication & SSO, remain inaccessible.

**Guest:** This role provides the ability to view test logs, analytics, and other reports. However, guests do not have the privilege to initiate test runs.

By leveraging the flexibility of Organization Settings, you can seamlessly manage your team members and their respective roles within your <BrandName /> Account.



## Access Organization Settings
---

To open Organization Settings:

1. From the <BrandName /> dashboard, click **Settings** in the left menu.
2. Select **Organization Settings**.

<img loading="lazy" src={require('../assets/images/user-management/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

The **Members** tab lists everyone in your organization. From here you can invite users, view a user's credentials, change a password, or remove a user.

## Invite Users To Your <BrandName /> Account
---

To invite one or more teammates to your <BrandName /> account:

1. On the **Users** page, click **Invite Users**.
2. In the **Email Address** field, type an email and press **Enter** to add it. Repeat to invite several people at once.
3. Select a **Role** for the invitees: Admin, User, or Guest.
4. Select a **Group** to control the test concurrency available to them.
5. (Optional) Add one or more **Teams** to apply their predefined permissions.
6. Click **Set Roles & Permissions** to configure access, then confirm to send the invitations.

<img loading="lazy" src={require('../assets/images/user-management/add-user.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

They would be granted access to <BrandName /> with the role you selected while inviting.


## View Sent Invitations
---

To review the invitations you have already sent:

1. In Organization Settings, open the **Members** tab and select **Invitations** from the left menu.
2. The list opens on the **Pending** filter. Change the status filter to view invitations in other states.

Each row shows the invitee's email, assigned role, status, who sent the invite, and when it was sent.

<img loading="lazy" src={require('../assets/images/user-management/pending-invite.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


## Managing Users
---

As an administrator, you can:

1. View the list of users.
2. View a user's username and access key.
3. Change a user's password.
4. Delete a user.
5. Export users, service accounts, and invitations.
6. Change how many users appear per page.


### 1. View the list of users
---

In Organization Settings, open the **Members** tab and select **Users** from the left menu. Every user is listed with their **Name**, **Last Login**, **Role**, **Group**, **Custom Roles**, **Teams**, and **Approver**. Use the search box or the role and group filters to find a specific user.

<img loading="lazy" src={require('../assets/images/user-management/team-org.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 2. View a user's username and access key
---

A user's username and access key authenticate their tests on <BrandName />, for example in CI/CD pipelines. To view them:

1. In the **Users** list, click the **⋯** (more) icon in the user's row.
2. Select **View Username & Access Key**.
3. Use the copy icon to copy the **Username** or **Access Key**, or click the regenerate icon to reset the access key.

<img loading="lazy" src={require('../assets/images/user-management/user-id-one.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

Selecting **View Username & Access Key** opens a modal with the user's **Username** and **Access Key**.

<img loading="lazy" src={require('../assets/images/user-management/user-id-two.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 3. Change a user's password
---

As an Admin, you can set a new password for any user in your <BrandName /> account:

1. In the **Users** list, click the **⋯** (more) icon in the user's row.
2. Select **Change Password**.
3. Enter the new password in **New Password**, re-enter it in **Confirm Password**, then click **Update Password**.

<img loading="lazy" src={require('../assets/images/user-management/change-password-one.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

Selecting **Change Password** opens a modal where you set the new password.

<img loading="lazy" src={require('../assets/images/user-management/change-password-two.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 4. Delete a user
---

As an Admin, you can remove a user from your <BrandName /> account:

1. In the **Users** list, click the **⋯** (more) icon in the user's row.
2. Select **Delete User**.
3. In the confirmation prompt, confirm the deletion. The user is removed from your organization immediately.

<img loading="lazy" src={require('../assets/images/user-management/delete-one.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 5. Export users, service accounts, and invitations
---

You can export your organization's data as a downloadable file:

1. On the **Users** page, click **Export** at the top-right of the table.
2. Choose what to export: **Users**, **Service Accounts**, or **Invitations**. The selected list downloads to your machine.

<img loading="lazy" src={require('../assets/images/user-management/export.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 6. Change how many users appear per page
---

Use the **per page** dropdown above the user table to control how many users are shown at once: **6**, **15**, **30**, or **50 per page**.

<img loading="lazy" src={require('../assets/images/user-management/users-per-page.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

When the list is longer than the selected page size, use the **Previous** and **Next** controls at the bottom of the table to move between pages.

<img loading="lazy" src={require('../assets/images/user-management/users-pagination.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


