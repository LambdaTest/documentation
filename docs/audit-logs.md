---
id: audit-logs
title: Audit Logs
hide_title: true
sidebar_label: Audit Logs
description: Guide to Access, Filter and Download Audit Logs
keywords:
  - testmu ai automation
  - testmu ai hyperexecute
  - hyperexecute automation grid
  - hyperexecute online
  - online hyperexecute
  - hyperexecute automation grid online
  - hyperexecute getting started
url: https://www.testmu.ai/support/docs/audit-logs/
site_name: LambdaTest
slug: audit-logs
canonical: https://www.testmu.ai/support/docs/audit-logs/
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
          "name": "Audit Logs",
          "item": `${BRAND_URL}/support/docs/audit-logs/`
        }]
      })
    }}
></script>

# Audit Logs

Audit logs serve as a record of every **User** and **Organization** Level activities in a <BrandName /> account.

> **Note:** Only organization administrators are able to view and manage the audit logs.

## Why are Audit Logs important?

Audit logs can be used to:

- Monitor account activity and detect unauthorized access.
- Investigate security incidents.
- Track user-level and organization-level activity histories.
- Audit compliance with security policies.

## How to Access Audit Logs?

**Step 1:** Go to the [LambdaTest](https://accounts.lambdatest.com/dashboard) Dashboard.

**Step 2:** Click on Settings -> **Organization Settings** and navigate to the **Audit Logs** tab.

<img loading="lazy" src={require('../assets/images/audit-logs/1.png').default} alt="Image"  className="doc_img"/>

### Audit Logs details

Each log in the audit logs section has detailed information regarding who performed the action, when the action was performed, the scope of the action, the entities involved and affected by the action etc. The following sections provide a general overview of how to read and interpret the data.

The following table contains the list of activities and their definition:

|Sl no.|Event |Event Name                                         |Event Description                             |
|------|------------------------------------------|---------------------------------------------------|----------------------------------------------|
|1     |user.password.changed                     |User - Password Changed                            |User changed their password                   |
|2     |user.access-key.regenerated               |User - Access Key Regenerated                      |User regenerated their access key             |
|3     |org.user.role.updated                     |Organization - User Role Updated                   |Admin updated user's role                     |
|4     |org.user.password.changed                 |Organization - User Password Changed               |Admin changed user's password                 |
|5     |org.user.access-key.regenerated           |Organization - User Access Key Generated           |Admin regenerated user's access key           |
|6     |org.service-account.access-key.regenerated|Organization - Service Account Access Key Generated|Admin regenerated service account's access key|
|7     |user.email-preference.updated             |User - Email Preference Updated                    |User updated their email preferenece          |
|8     |user.profile.deletion-request             |User - Account Deletion Request Raised             |User requested their account deletion         |
|9     |org.user.deleted                          |Organization - User Removed from Organization      |Admin removed a user from their organization  |
|10    |user.password.forgot                      |User - Password Reset                              |User password reset                           |
|11    |org.support-access.granted                |Organization - Support Access Granted              |Admin granted <BrandName /> Support Access       |
|12    |org.support-access.revoked                |Organization - Support Access Revoked              |Admin revoked <BrandName /> Support Access       |
|13    |org.service-account.created               |Organization - Service Account Created             |Admin created a new Service Account           |
|14    |org.service-account.deleted               |Organization - Service Account Deleted             |service-account deleted                       |
|15    |user.profile.updated                      |User - Profile Updated                             |User updated their profile                    |
|16    |user.login                                |User - Logged In                                   |User - Logged In                              |
|17    |org.invitation.sent                       |Organization - Invitation Sent                     |Admin invited users to their organization     |
|18    |user.email.verified                       |User - Email Address Verified                      |User verified their email address             |
|19    |org.invitation.accepted                   |Organization - Invitation Accepted                 |Invitation was accepted                       |
|20    |org.invitation.declined                   |Organization - Invitation Declined                 |Invitation was declined                       |
|21    |user.logout                               |User - Logged Out                                  |User Logged Out                               |
|22    |org.details.updated                       |Organization - Details Updated                     |Organization details was updated              |
|23    |org.user.profile.updated                  |Organization - User Profile Updated                |Admin updated user's profile                  |
|24    |org.service-account.profile.updated       |Organization - Service Account Profile Updated     |Admin updated service account's profile       |
|25    |org.invitation.resent                     |Organization - Invitation Resent                   |Admin invited users to their organization     |
|26    |org.invitation.withdrawn                  |Organization - Invitation Withdrawn                |Invitation was withdrawn                      |
|27    |org.auth.mfa                              |Organization - MFA Enforced                        |MFA enforced by admin                         |
|28    |user.auth.mfa                             |User - MFA Settings Updated                        |MFA settings updated by user                  |
|29    |org.user.auth.mfa                         |Organization - MFA Settings Updated                |Admin update user's MFA settings              |
|30    |org.subscription.created                  |Organization - Subscription Created                |Organization subscription created             |
|31    |org.subscription.updated                  |Organization - Subscription Updated                |Organization subscription updated             |
|32    |org.subscription.cancelled                |Organization - Subscription Cancelled              |Organization subscription cancelled           |
|33    |org.subscription.revoked                  |Organization - Subscription Revoked                |Organization subscription revoked             |
|34    |org.payment-method.added                  |Organization - Payment Method Added                |Payment method added                          |
|35    |org.payment-method.deleted                |Organization - Payment Method Deleted              |Payment method deleted                        |
|36    |org.payment-method.default-updated        |Organization - Default Payment Method Updated      |Default payment method updated                |


<img loading="lazy" src={require('../assets/images/audit-logs/7.png').default} alt="Image"  className="doc_img"/>

As highlighted in the above screenshot, this section contains details that include the event ID, the email address of the **user who performed the action**, the time of the change/action, the IP address of the user and the user agent used.

<img loading="lazy" src={require('../assets/images/audit-logs/8.png').default} alt="Image"  className="doc_img"/>

As highlighted in the above screenshot, details of the user affected by the change/action are shown. This includes an identifier - email address, and additional details such as the original value and the changed value if present.


### Filter your Audit Logs

You can filter the logs based on Action Performed either on User or Organization level Events, User Name and Date.

#### Filter By Events

You can select the type of event for which you want to check the logs. You can also filter it by what level you want to check the audit logs at, i.e., User level or Organization level.

<!-- Below mentioned are the following events you can check on the respective levels. -->

- **User Level ->** Logged In, Access Key Regenerated, Password Reset, Profile Update, Password Changed.

- **Organization Level ->**Invitation Sent, Invitation Accepted, User Role Updated, User Profile Updated, User Removed from the Organization.

<img loading="lazy" src={require('../assets/images/audit-logs/2.png').default} alt="Image"  className="doc_img"/>


#### Filter By Date

You can view the logs of the users for a particular date range as well. Select the start date and end dates from the date filter.

> You can view Audit Logs for a maximum of 60 days. Please contact support for higher retention period (Supported in Enterprise Plan).

<img loading="lazy" src={require('../assets/images/audit-logs/4.png').default} alt="Image"  className="doc_img"/>

#### Filter By User

Based on the given date range, you can review the logs for each individual user in your company as well as for all users at once.

<img loading="lazy" src={require('../assets/images/audit-logs/3.png').default} alt="Image"  className="doc_img"/>

### Download your Audit Logs

Click on the **Export Button** displayed in the screenshot below, and your logs will be downloaded in **.csv** format.

<img loading="lazy" src={require('../assets/images/audit-logs/5.png').default} alt="Image"  className="doc_img"/>

## FAQs

**Q: Is comprehensive audit logging for all system and user activities supported?**
 
 Yes, it provides comprehensive audit logging of all activities, ensuring full traceability across conversations, workflows, operations, test executions, and database actions. It maintains detailed audit trails with timestamps, metadata, and historical records, supporting compliance, security, and validation of AI agent capabilities.

**Key capabilities include:**

- Conversation history tracking, including timestamped conversations, message metadata, file upload and download activity, session tracking, and complete conversation audit trails.

- Workflow state tracking with full state persistence, state change history, metadata preservation, and workflow execution audit trails.

- Operation logging for all API operations, including error tracking, performance metrics logging, and operation-level audit records.

- Test execution logging covering test scenario execution, test result tracking, evaluation result logging, and audit logging as a supported test category for agent validation.

- Database audit trail with timestamped database operations, organization-level data isolation, user-level activity tracking, and long-term historical data preservation.
---
