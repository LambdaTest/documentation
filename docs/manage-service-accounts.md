---
id: service-accounts
title: How to Create and Manage Service Accounts
hide_title: true
sidebar_label: Service Accounts
description: This documentation will help you create and manage service accounts on TestMu AI.
keywords:
- service account lambdatest
- manage service account
- create service account
url: https://www.lambdatest.com/support/docs/service-accounts/
site_name: LambdaTest
slug: service-accounts/
---

# Creating and Managing Service Accounts
---

Service accounts are a distinct type of user that you can use with command line interfaces. They are primarily used to perform tests through pipelines like Jenkins or GitHub Actions. Service accounts are not granted login or dashboard viewing privileges. Instead, they are helpful in monitoring and reporting test execution at the user level.


The service account has the following benefits:

* Run tests via CI/CD pipelines like Jenkins, GitHub Actions, etc. 

* Track and report of test execution at the user level.

* User Access Key doesn't need to be shared across the organization.

<img loading="lazy" src={require('../assets/images/service-accounts/flow.png').default} alt="Image" width="585" height="674" className="doc_img img_center"/>


## Creating a Service Account
---

:::info Note
Service accounts can only be created by Admins.
:::

To create a service account on LambdaTest, you can follow these steps:


**Step 1:** Sign in to your LambdaTest account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/dashboard.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>

**Step 2:**  Head to **Settings** and select **Organization Settings** from the dropdown.

<img loading="lazy" src={require('../assets/images/lambdatest-mfa/org-settings.webp').default} alt="Image" width="404" height="206"  className="doc_img img_center"/><br/>


**Step 3:** Under the **Members** tab, click on **Service Accounts**.

<img loading="lazy" src={require('../assets/images/service-accounts/members-tab.webp').default} alt="Image" width="958" height="288"  className="doc_img img_center"/><br/>

**Step 4:** Click on **Create**.

<img loading="lazy" src={require('../assets/images/service-accounts/click-create.webp').default} alt="Image" width="958" height="300"  className="doc_img img_center"/><br/>

**Step 5:** Enter your preferred **Service Account Name** and click **Create**.

<img loading="lazy" src={require('../assets/images/service-accounts/enter-service-account-name.webp').default} alt="Image" width="958" height="360"  className="doc_img img_center"/><br/>

**Step 6:** After creating your account, you will be presented with your **Service Account Credentials**. You can use these credentials to login to your service account. 

<img loading="lazy" src={require('../assets/images/service-accounts/service-account-credentials.webp').default} alt="Image" width="492" height="264"  className="doc_img img_center"/><br/>

>*You can also find service account credentials from the service account dashboard. Just click on the three dots menu and select **View Username & Access Token**.*
<img loading="lazy" src={require('../assets/images/service-accounts/credentials-two.webp').default} alt="Image" width="588" height="335"  className="doc_img img_center"/><br/>

Once you have created the service account, it will appear under the **Service Accounts** tab.

<img loading="lazy" src={require('../assets/images/service-accounts/creation-complete.webp').default} alt="Image" width="958" height="340"  className="doc_img img_center"/><br/>

## Deleting Your Service Account
---

In case, you wish to delete your service account, follow the given below steps:

1. Click on the three dots menu and click **Delete**.

<img loading="lazy" src={require('../assets/images/service-accounts/account-deletion.webp').default} alt="Image" width="958" height="340"  className="doc_img img_center"/><br/>

2. A pop-up box will show up. Click **Delete**.

<img loading="lazy" src={require('../assets/images/service-accounts/confirm-delete.webp').default} alt="Image" width="958" height="340"  className="doc_img img_center"/><br/>

Your service account associated with you will be deleted.

---
























