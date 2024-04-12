---
id: team-management
title: Team Management
hide_title: true
sidebar_label: Team Management
description: This documentation will help you create and manage team on LambdaTest.
keywords:
- team management lambdatest
- manage team
url: https://www.lambdatest.com/support/docs/team-management/
site_name: LambdaTest
slug: team-management/
---

# Team Management
---

With Organization Settings in LambdaTest, you have the ability to effortlessly invite your team members to your LambdaTest Account. LambdaTest offers a range of roles that can be assigned to users.

At present, LambdaTest supports the following roles:

**Admin:** This role grants full access to all the features and functionalities of LambdaTest, enabling the user to administer the account effectively.

**User:** Users with this role have access to all the subscribed products and are able to execute and stop their own tests. However, certain Organization Settings, such as Team Management, Subscriptions & Invoices, Authentication & SSO, remain inaccessible.

**Guest:** This role provides the ability to view test logs, analytics, and other reports. However, guests do not have the privilege to initiate test runs.

By leveraging the flexibility of Organization Settings, you can seamlessly manage your team members and their respective roles within your LambdaTest Account.



## Access Organization Settings
---

To access the organization settings, head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

This page shows a list of users in your organization with options to invite new users, update an user, change their password etc.

## Invite Users To Your LambdaTest Account
---

Enter **one or multiple email addresses** along with a **role** for these users and system would send **email invitations** for the invitee to accept invitations to join LambdaTest.

<img loading="lazy" src={require('../assets/images/sub-organizations/add-user.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

They would be granted access to LambdaTest with the role you selected while inviting.


This section outlines a series of cases designed to verify test visibility within the system under various user roles and team configurations:

- **Admin:** Has full access to all builds, tests, and test details.
- **User:** Limited access based on team membership.
- **Guest:** The scope of a "**Guest**" user is identical to that of a "**User**" access.

:::info
- Users with **Admine** and **User** level access can be a part of multiple teams.
- All the users are independent of the tests visibility.
:::

<img loading="lazy" src={require('../assets/images/team-management/pending-invite.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

### Scenario 1: No Teams are Created

In this case, any of the user can see all test results, regardless of any team affiliation.

### Scenario 2: Teams are Created by:

If you have created the teams for the admins access, then only they can see the test results for that particular team and vice versa.

### Scenario 3: Teams are Created but Users are in Different Teams

Suppose if you have created two teams, each having five users, then neither can see each other's team's test results.

### Scenario 4: Teams are Created and Users are in the Same Team

If you have created a team, then all the users can see each other's test results.

### Scenario 5: All Teams are Deleted
If all teams are removed, then all users can view all test results again, similar to Scenario 1.

### Scenario 6: Users are Not in a Team, But Teams Exist
If any of the users aren't assigned to any team, but there are teams in the organization, they can still see all test results.

### Scenario 7: Users Switches Teams
When a user is switched from one team (Team A) to another (Team B), they will no longer see test results from Team A. They will only have access to test results associated with their new team, Team B.
