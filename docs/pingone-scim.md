---
id: pingone-scim
title: PingOne SCIM User & Group Provisioning
hide_title: false
sidebar_label: PingOne
description: Integrating TestMu AI SCIM with PingOne (PingIdentity)
keywords:
    - TestMu AI SCIM
    - PingOne
    - PingIdentity
    - PingFederate
url: https://www.testmuai.com/support/docs/pingone-scim/
site_name: TestMu AI
slug: pingone-scim/
canonical: https://www.testmuai.com/support/docs/pingone-scim/
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
          "name": "Scim",
          "item": `${BRAND_URL}/support/docs/pingone-scim/`
        }]
      })
    }}
></script>

PingOne (by PingIdentity) is a cloud-based identity platform that provides SSO, MFA, and directory services. It supports SCIM 2.0 Outbound provisioning to automatically sync users and groups to external applications.

In this guide, we will walk through integrating PingOne SCIM provisioning with <BrandName />.

## Prerequisites

- You will need an Enterprise plan with <BrandName />.
- The SSO connection must be already established with <BrandName />. Learn how to [create a SSO Connection with <BrandName />](/support/docs/testmu-sso-self-serve/).

## Integrating SCIM User Provisioning with PingOne

### Step 1 — Copy SCIM Credentials from <BrandName />

Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

Head to **Settings** > **Organization Settings** > **Security** > **SCIM Provisioning** tab. Copy the **SCIM Base URL** and **Bearer Token**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/10.png').default} alt="Copy SCIM Base URL and Bearer Token from LambdaTest" className="doc_img"/>

### Step 2 — Create a SAML Application in PingOne (if not already done)

If you already have a PingOne SAML application configured for <BrandName /> SSO, skip to [Step 3](#step-3).

Log in to the [PingOne Admin Console](https://admin.pingone.com). Go to **Applications** > **Applications** > click **+** (Add Application).

Enter a name (e.g., your org name), select **SAML Application**, and click **Save**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/3.png').default} alt="Create SAML Application in PingOne" className="doc_img"/>

### Step 3 — Create SCIM Provisioning Connection {#step-3}

In PingOne, go to **Integrations** > **Provisioning** > **Connections** tab.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/4.png').default} alt="PingOne Provisioning Connections tab" className="doc_img"/>

Click **+ (New Connection)**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/5.png').default} alt="New Connection button in PingOne" className="doc_img"/>

Select **Identity Store** (SCIM) and click **Next**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/6.png').default} alt="Select Identity Store connection type" className="doc_img"/>

Search for **SCIM** and select **SCIM** (Outbound). Click **Next**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/8.png').default} alt="Select SCIM Outbound connector" className="doc_img"/>

Enter a **Name** for the connection (e.g., your org name) and click **Next**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/9.png').default} alt="Name the SCIM connection" className="doc_img"/>

### Step 4 — Configure Authentication

| Field | Value |
|---|---|
| **SCIM Base URL** | Paste the Base URL copied from <BrandName /> |
| **Users Resource** | `/Users` |
| **SCIM Version** | `2.0` |
| **Groups Resource** | `/Groups` |
| **Authentication Method** | `OAuth 2 Bearer Token` |
| **OAuth Access Token** | Paste the Bearer Token from <BrandName /> |
| **Auth Type Header** | `Bearer` |

Click **Test Connection** to verify, then click **Next**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/12.png').default} alt="Configure SCIM authentication in PingOne" className="doc_img"/>

### Step 5 — Configure Preferences

| Field | Value |
|---|---|
| **User Filter Expression** | `userName eq "%s"` |
| **User Identifier** | `workEmail` |
| **Custom Attribute Schema URNs** | `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User` |
| **Group Membership Handling** | `Merge` (recommended) |

Enable the following user actions:
- **Create Users** — checked
- **Update Users** — checked
- **Disable Users** — checked

Click **Save**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/13.png').default} alt="Configure SCIM preferences in PingOne" className="doc_img"/>

:::tip
Add `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User` to the **Custom Attribute Schema URNs** field to enable sending `OrganizationRole` and `LambdatestGroup` from PingOne.
:::

### Step 6 — Create a User Provisioning Rule

Go to the **Rules** tab in your provisioning connection and click **Add Rule**.

Enter a **Rule Name** (e.g., "User Sync Rule") and click **Next**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/14.png').default} alt="Create provisioning rule in PingOne" className="doc_img"/>

Configure the **Directory** settings:
- Set a **User Filter** (e.g., `enabled Equals true` to only sync active users)

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/15.png').default} alt="Configure directory settings for provisioning rule" className="doc_img"/>

Review the **Attribute Mapping**. PingOne maps the following attributes by default:

| PingOne Directory | SCIM Attribute |
|---|---|
| Enabled | `active` |
| Family Name | `familyName` |
| Given Name | `givenName` |
| **Email Address** | **`userName`** |
| Email Address | `workEmail` |
| Formatted | `formattedName` |

:::warning Important
Make sure **Email Address** is mapped to **`userName`**. This is required — <BrandName /> uses `userName` as the unique identifier for SCIM users, and it must be a valid email address.
:::

Click **Save** to create the rule.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/17.png').default} alt="Attribute mapping in PingOne" className="doc_img"/>

Ensure the rule is **enabled** (toggle ON).

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/18.png').default} alt="Provisioning rule enabled in PingOne" className="doc_img"/>

Users assigned to the provisioning rule will now be automatically synced to <BrandName />.

---

## Provisioning Groups from PingOne

:::note Enable Group Provisioning First
Group provisioning is **not enabled by default**. Before proceeding, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email [support@testmuai.com](mailto:support@testmuai.com) to get it activated for your organization.
:::

Once group provisioning is enabled and user provisioning is working, follow these steps to push PingOne groups to <BrandName />.

### Step 1 — Add Groups to Your Provisioning Rule in PingOne

Go back to your SCIM provisioning connection in PingOne > **Rules** tab > edit your provisioning rule.

Under **Directory** settings, click **Add Groups** to select which PingOne groups to provision to <BrandName />.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/15.png').default} alt="Add groups to provisioning rule" className="doc_img"/>

Select the groups you want to push and click **Save**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/16.png').default} alt="Select groups to provision" className="doc_img"/>

### Step 2 — Configure Mapping Rules in <BrandName />

In <BrandName />, go to **Settings** > **Organization Settings** > **SCIM Group Provisioning** > **Mapping Rules** tab.

Click **Add Mapping Rule** to create a rule that determines how incoming groups are mapped.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/1.png').default} alt="Mapping rules tab in LambdaTest" className="doc_img"/>

Configure the rule:
- **Pattern** — match group names by prefix, regex, or match all
- **Target Entity Type** — Team, Concurrency Group, or Sub-Organization
- **Auto Approve** — toggle ON to automatically approve matching groups

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/2.png').default} alt="Add mapping rule modal" className="doc_img"/>

:::tip
Set a **Match All → Team** rule with auto-approve enabled to automatically map all incoming groups to teams without manual intervention.
:::

### Step 3 — Verify Groups in <BrandName />

Once PingOne pushes the groups, go to **SCIM Group Provisioning** > **SCIM Groups** tab to see the synced groups.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/21.png').default} alt="SCIM Groups synced from PingOne" className="doc_img"/>

If you configured an auto-approve mapping rule, the groups will be automatically approved and members synced.

Verify that the teams (or concurrency groups / sub-orgs) were created:

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/20.png').default} alt="Teams created from PingOne groups" className="doc_img"/>

Once the provisioning rule runs, group members will appear in the mapped entities.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/22.png').default} alt="Teams with synced members from PingOne" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/lambdatest-scim/pingone/23.png').default} alt="SCIM Groups with synced members" className="doc_img"/>

### What Happens After Group Provisioning

| PingOne Action | <BrandName /> Effect |
|---|---|
| Group included in provisioning rule | Group created, mapping rules evaluated, members synced |
| User added to group | Member added to all mapped <BrandName /> entities |
| User removed from group | Member removed (if no other group maps them there), role recomputed |
| Group renamed | Group renamed, mapped entity renamed to match, rules re-evaluated |
| Group removed from rule / deleted | Group soft-deleted, members safely unassigned, roles recomputed |

> For details on mapping, conflicts, and rules, see the [SCIM Provisioning guide](/support/docs/scim/#group-provisioning).

---

> That's all you need to know about <BrandName /> SCIM Provisioning with PingOne. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmuai.com](mailto:support@testmuai.com).


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
        PingOne SCIM Provisioning
      </span>
    </li>
  </ul>
</nav>
