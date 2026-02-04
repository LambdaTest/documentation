---
id: password-and-access-key-expiration-policy
title: Password and Access Key Expiration Policy
hide_title: true
sidebar_label: Password and Access Key Expiration Policy
description: Guide to Manage your Password and Access Key Expiration Policies.
keywords:
  - testmu ai automation
  - testmu ai hyperexecute
  - hyperexecute automation grid
  - hyperexecute online
  - online hyperexecute
  - hyperexecute automation grid online
  - hyperexecute getting started
url: https://www.testmuai.com/support/docs/password-and-access-key-expiration-policy/
site_name: LambdaTest
slug: password-and-access-key-expiration-policy/
canonical: https://www.testmu.ai/support/docs/password-and-access-key-expiration-policy/
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
          "name": "Password and Access Key Expiration Policy",
          "item": `${BRAND_URL}/support/docs/password-and-access-key-expiration-policy/`
        }]
      })
    }}
></script>

# Password and Access Key Expiration Policy

<BrandName /> allows you to set an expiry policy to passwords and access keys for users in your organisation. This means that your password and access keys will expire after a certain number of days, and you will be required to change them or update them, respectively.

> **Note:** Only organization administrators are able to view and manage the Password and Access Key Expiration Policy.

## Why are Password and Access Key Expiry Important?

Password expiration and access key expiration are important security features that can help protect your account from unauthorized access. If your password or access key expires, it will prevent unauthorized users from accessing your account, even if they have your username and old password.

## Setup Password Expiry Policy

By default, password expiration policy is set to **Never**. To change this, follow the below mentioned steps:

**Step 1:** Go to the [LambdaTest](https://accounts.lambdatest.com/dashboard) Dashboard.

**Step 2:** Click on the Settings -> **Organization Settings**, navigate to **Security** tab and click on the **Password Expiry** button

<img loading="lazy" src={require('../assets/images/password-access-key/p1.png').default} alt="Image"  className="doc_img"/>

**Step 2:** Click on the Edit Button to edit your Password Expiry duration.

<img loading="lazy" src={require('../assets/images/password-access-key/p2.png').default} alt="Image"  className="doc_img"/>

**Step 3:** Select the number of days after which your password will expire. Click on the **Save** button.

<img loading="lazy" src={require('../assets/images/password-access-key/p3.png').default} alt="Image"  className="doc_img"/>

**Step 4:** If you have selected any number of days, and if there are users who have already passed the timeline, they will be immediately logged out. But they will be able to reset their password.

<img loading="lazy" src={require('../assets/images/password-access-key/p4.png').default} alt="Image"  className="doc_img"/>

You can also view the password expiration policy for **All the Users** and when their password will expire. You can also add users to the **Excluded Users** list, whose password will never expire (For example, an admin user). You can filter the data based on their specific **Role** as well by clicking on the drop-down menu.

<img loading="lazy" src={require('../assets/images/password-access-key/p5.png').default} alt="Image"  className="doc_img"/>

:::info
You will receive a mail 3 days before the expiration of your password to set a new password. If this action is not performed before the expiration date, your password will expire. After expiration, you will receive a mail that your password has expired with a link to set your new password. Until this action is performed, you will not be able to access your account.
:::


## Setup Access Key Expiry Policy

By default, access key expiration policy is set to Never. To change this, follow the below mentioned steps:

**Step 1:** Go to the [LambdaTest](https://accounts.lambdatest.com/dashboard) Dashboard.

**Step 2:** Click on the Settings -> **Organization Settings**, navigate to **Security** tab and click on the **Access Key Expiry** button

<img loading="lazy" src={require('../assets/images/password-access-key/a1.png').default} alt="Image"  className="doc_img"/>

**Step 2:** Click on the Edit Button to edit your Access Key Expiry duration.

<img loading="lazy" src={require('../assets/images/password-access-key/a2.png').default} alt="Image"  className="doc_img"/>

**Step 3:** Select the number of days after which your Access Key will expire. Click on the **Save** button.

<img loading="lazy" src={require('../assets/images/password-access-key/a3.png').default} alt="Image"  className="doc_img"/>

**Step 4:** If you have selected any number of days, and if there are users who have already passed the timeline, they will be immediately get unauthorized.

> After the expiration of the access key, it will be regenerated automatically.

<img loading="lazy" src={require('../assets/images/password-access-key/a4.png').default} alt="Image"  className="doc_img"/>

**Step 5:** Select the user for whom you want to regenerate the access key, click on the three dots and then select the **Regenerate Key** button.

<img loading="lazy" src={require('../assets/images/password-access-key/a5.png').default} alt="Image"  className="doc_img"/>

You can also check the access key expiration policy for **All the Users** of the organization. You can filter the data based on the **User Type** as well by clicking on the drop-down menu.

> **Excluded User** are those users for whom there are no aceess key expiration policy.

<img loading="lazy" src={require('../assets/images/password-access-key/a6.png').default} alt="Image"  className="doc_img"/>

:::info
You will receive a mail 3 days before the expiration of your access key. You can regenerate this key on your account dashboard. If this action is not performed before the expiration date, your access key will expire. After expiration, your access key will be regenerated automatically, and you will receive an email to get your new access key from the dashboard. For service accounts, admins will receive the mail regarding expiry, and the access keys for service accounts can be found on the members page in organization settings.
:::
