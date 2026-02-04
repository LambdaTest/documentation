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
site_name: LambdaTest
slug: user-management/
canonical: https://www.testmu.ai/support/docs/user-management/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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

To access the organization settings, head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

This page shows a list of users in your organization with options to invite new users, update an user, change their password etc.

## Invite Users To Your <BrandName /> Account
---

Enter **one or multiple email addresses** along with a **role** for these users and system would send **email invitations** for the invitee to accept invitations to join <BrandName />.

<img loading="lazy" src={require('../assets/images/sub-organizations/add-user.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

They would be granted access to <BrandName /> with the role you selected while inviting.


## View Sent Invitations
---

Click on **Pending Invitations** to see the list of invitations sent from your account. Default filter would show only the pending invitations. To see all statuses you can change to a different filter.

<img loading="lazy" src={require('../assets/images/user-management/pending-invite.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


## Managing Users
---

As an administrator you can do the following:

1. See the list of users.
2. View username & access token of a User.
3. Change password of your users.
4. Delete a user from your team.
5. Reset MFA of a user.


### 1. List of Users
---

Head to the **Organization Settings** tab to see a list of users. Under the **Members** tab, you can see a list of users in your account.

<img loading="lazy" src={require('../assets/images/user-management/team-org.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 2. View username & access token of a user
---

As an Admin, you can view the **access token** of a user to be used in your CI/CD systems. Click on the **three dots** and select **View username & access token** to open a modal.

<img loading="lazy" src={require('../assets/images/user-management/user-id-one.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/user-management/user-id-two.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 3. Change password of a user
---

As an Admin, you can change a user's password in your <BrandName /> account. Click on the **three dots** and select **Change Password** would open a modal where you can set a new password.

<img loading="lazy" src={require('../assets/images/user-management/change-password-one.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/user-management/change-password-two.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 4. Delete a user
---

As an Admin you can **delete** users from your <BrandName /> account. Click on the **three dots** and select **Delete User** option which would ask for a reconfirmation. Confirming the same would remove the selected user from your account.

<img loading="lazy" src={require('../assets/images/user-management/delete-one.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/user-management/delete-two.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### 5. Export
---

You can **export** list of **users, service accounts and invitations** sent from your <BrandName /> account.

<img loading="lazy" src={require('../assets/images/user-management/export.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


