---
id: scim
title: "SCIM Provisioning: Users & Groups"
hide_title: false
sidebar_label: SCIM
description: Automate user and group lifecycle management with SCIM 2.0. Provision users, sync groups, map to teams, concurrency groups, and sub-organizations, all from your Identity Provider.
keywords:
    - TestMu AI SCIM
    - SCIM Provisioning
    - SCIM 2.0
    - User Provisioning
    - Group Provisioning
    - IDP Groups
    - Okta SCIM
    - Azure AD SCIM
    - JumpCloud SCIM
    - Team Mapping
    - Role Mapping
    - SCIM RBAC
    - Custom Roles
    - Concurrency Groups
url: https://www.testmuai.com/support/docs/scim/
site_name: TestMu AI
slug: scim/
canonical: https://www.testmuai.com/support/docs/scim/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/scim/"
    },
    "headline": "SCIM Provisioning: Users & Groups",
    "description": "Automate user and group lifecycle management with SCIM 2.0. Provision users, sync groups, map to teams, concurrency groups, and sub-organizations, all from your Identity Provider.",
    "url": "https://www.testmuai.com/support/docs/scim/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Setting and Security",
    "keywords": [
      "TestMu AI SCIM",
      "SCIM Provisioning",
      "SCIM 2.0"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Schema & Attributes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:User\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\"\n  ],\n  \"userName\": \"jane@company.com\",\n  \"active\": true,\n  \"name\": { \"givenName\": \"Jane\", \"familyName\": \"Doe\", \"formatted\": \"Jane Doe\" },\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\": {\n    \"OrganizationRole\": \"User\",\n    \"LambdatestGroup\": \"Engineering\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "User API Operations (Create)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:User\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\"\n  ],\n  \"userName\": \"jane@company.com\",\n  \"active\": true,\n  \"name\": { \"givenName\": \"Jane\", \"familyName\": \"Doe\", \"formatted\": \"Jane Doe\" },\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\": {\n    \"OrganizationRole\": \"User\",\n    \"LambdatestGroup\": \"Engineering\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "User API Operations (Create)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:User\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\"\n  ],\n  \"id\": \"23123\",\n  \"userName\": \"jane@company.com\",\n  \"active\": true,\n  \"name\": { \"givenName\": \"Jane\", \"familyName\": \"Doe\", \"formatted\": \"Jane Doe\" },\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\": {\n    \"OrganizationRole\": \"User\",\n    \"LambdatestGroup\": \"Engineering\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get by ID",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:User\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\"\n  ],\n  \"id\": \"23123\",\n  \"userName\": \"jane@company.com\",\n  \"active\": true,\n  \"name\": { \"givenName\": \"Jane\", \"familyName\": \"Doe\", \"formatted\": \"Jane Doe\" },\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\": {\n    \"OrganizationRole\": \"User\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "List / Filter",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:ListResponse\"],\n  \"totalResults\": 1,\n  \"startIndex\": 1,\n  \"itemsPerPage\": 20,\n  \"Resources\": [\n    {\n      \"schemas\": [\n        \"urn:ietf:params:scim:schemas:core:2.0:User\",\n        \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\"\n      ],\n      \"id\": \"23123\",\n      \"userName\": \"jane@company.com\",\n      \"active\": true,\n      \"name\": { \"givenName\": \"Jane\", \"familyName\": \"Doe\", \"formatted\": \"Jane Doe\" },\n      \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\": {\n        \"OrganizationRole\": \"User\"\n      }\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update (PUT)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:schemas:core:2.0:User\"],\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User\": {\n    \"OrganizationRole\": \"Admin\"\n  },\n  \"active\": true\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update (PATCH)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\n  \"Operations\": [\n    { \"op\": \"Replace\", \"path\": \"active\", \"value\": false },\n    { \"op\": \"Replace\", \"path\": \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole\", \"value\": \"Guest\" },\n    { \"op\": \"Replace\", \"path\": \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:LambdatestGroup\", \"value\": \"QA-Team\" }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Disable",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\n  \"Operations\": [\n    { \"op\": \"Replace\", \"path\": \"active\", \"value\": false }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Group Schema & Attributes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:Group\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\"\n  ],\n  \"displayName\": \"eng-backend\",\n  \"members\": [{ \"value\": \"12345\" }, { \"value\": \"67890\" }],\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\": {\n    \"LambdatestRoles\": [\"User\"]\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Group API Operations (Create)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:Group\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\"\n  ],\n  \"displayName\": \"eng-backend\",\n  \"members\": [\n    { \"value\": \"23123\" },\n    { \"value\": \"23456\" }\n  ],\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\": {\n    \"LambdatestRoles\": [\"User\"]\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Group API Operations (Create)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\n    \"urn:ietf:params:scim:schemas:core:2.0:Group\",\n    \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\"\n  ],\n  \"id\": \"50001\",\n  \"displayName\": \"eng-backend\",\n  \"members\": [\n    { \"value\": \"23123\", \"display\": \"jane@company.com\" },\n    { \"value\": \"23456\", \"display\": \"bob@company.com\" }\n  ],\n  \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\": {\n    \"LambdatestRoles\": [\"User\"]\n  },\n  \"meta\": {\n    \"resourceType\": \"Group\",\n    \"created\": \"2025-01-15T10:30:00Z\",\n    \"lastModified\": \"2025-01-15T10:30:00Z\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "List / Filter",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:ListResponse\"],\n  \"totalResults\": 1,\n  \"startIndex\": 1,\n  \"itemsPerPage\": 20,\n  \"Resources\": [\n    {\n      \"schemas\": [\n        \"urn:ietf:params:scim:schemas:core:2.0:Group\",\n        \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\"\n      ],\n      \"id\": \"50001\",\n      \"displayName\": \"eng-backend\",\n      \"members\": [\n        { \"value\": \"23123\", \"display\": \"jane@company.com\" },\n        { \"value\": \"23456\", \"display\": \"bob@company.com\" }\n      ],\n      \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group\": {\n        \"LambdatestRoles\": [\"User\"]\n      },\n      \"meta\": {\n        \"resourceType\": \"Group\",\n        \"created\": \"2025-01-15T10:30:00Z\",\n        \"lastModified\": \"2025-01-15T10:30:00Z\"\n      }\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PATCH (partial) to https://auth.lambdatest.com/api/scim/Groups/{id} (Add Members)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\n  \"Operations\": [\n    {\n      \"op\": \"Add\",\n      \"path\": \"members\",\n      \"value\": [{ \"value\": \"99999\" }]\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Remove Members",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\n  \"Operations\": [\n    {\n      \"op\": \"Remove\",\n      \"path\": \"members\",\n      \"value\": [{ \"value\": \"12345\" }]\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rename",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\n  \"Operations\": [\n    {\n      \"op\": \"Replace\",\n      \"path\": \"displayName\",\n      \"value\": \"eng-platform\"\n    }\n  ]\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update Roles",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"schemas\": [\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\n  \"Operations\": [\n    {\n      \"op\": \"Replace\",\n      \"path\": \"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group:LambdatestRoles\",\n      \"value\": [\"Admin\"]\n    }\n  ]\n}"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Setup",
      "description": "What you need: Enterprise plan, SSO configured, Admin access, and an IDP that supports SCIM 2.0 (Okta, Azure AD, JumpCloud, etc.).",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Copy SCIM Credentials",
          "text": "Go to Settings > Organization Settings > Security > SCIM Provisioning. Copy the SCIM Base URL and Bearer Token.",
          "url": "https://www.testmuai.com/support/docs/scim/#step-1-copy-scim-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure Your IDP",
          "text": "Paste the SCIM Base URL and Bearer Token into your IDP's provisioning settings. Full walkthrough: Okta SCIM Guide Applications > your TestMu AI app > Provisioning tab > Configure API Integration Check Enable API Integration, paste credentials, click Test API Credentials > Save Under To App, enable: Create Users, Update User Attributes, Deactivate Users Assignments tab > assign users or groups (For groups) Push Groups tab > Push Groups > Find by name or rule Member changes in pushed Okta groups are automatically synced to TestMu AI. Full walkthrough: Azure AD SCIM Guide Enterprise Applications > your TestMu AI app > Provisioning > set to Automatic Under Admin Credentials, paste SCIM Base URL (Tenant URL) and Bearer Token (Secret Token) > Test Connection > Save Under Mappings, enable user and group provisioning Under Users and groups, assign what you want to provision Start a provisioning cycle (or wait for the 40-minute auto sync) Full walkthrough: JumpCloud SCIM Guide SSO Applications > your TestMu AI app > Identity Management tab Enable SCIM Provisioning, paste credentials Configure attribute mappings (userName, name, active) User Groups tab > select groups > Activate > Save Full walkthrough: PingOne SCIM Guide In PingOne, go to Integrations > Provisioning > create a new SCIM Outbound connection Enter the SCIM Base URL and Bearer Token from TestMu AI Configure preferences: set User Identifier to workEmail and enable Create, Update, Disable users Create a provisioning Rule...",
          "url": "https://www.testmuai.com/support/docs/scim/#step-2-configure-your-idp"
        }
      ]
    }
  ]) }}
/>

<BrandName /> supports SCIM 2.0 (System for Cross-domain Identity Management) for user and group provisioning. After you connect your identity provider (IDP), the users and groups you manage there are created, updated, and deactivated in your <BrandName /> organization automatically.

## Supported Features {#supported-features}

| Feature | Description |
|---|---|
| **User provisioning** | Create, update, and deactivate user accounts from your IDP. See [User Provisioning](#user-provisioning) |
| **Group provisioning** | Sync IDP groups and map each group to teams, a concurrency group, or a sub-organization, manually or with rules. See [Group Provisioning](#group-provisioning) |
| **Organization roles** | Set each user's organization role (Admin, User, or Guest) from your IDP. See [Role Assignment](#roles) |
| **Custom roles** | Assign custom roles to the teams a rule creates and to new SCIM users. Available only if your organization has **Custom Roles & Permissions** (RBAC) enabled. See [Custom Roles with SCIM](#custom-roles) |

## Prerequisites {#prerequisites}

- An Enterprise plan
- [Single sign-on (SSO)](/support/docs/single-sign-on/) configured for your organization
- Admin access to your <BrandName /> organization
- An identity provider that supports SCIM 2.0
- *(Optional)* **Custom Roles & Permissions** (RBAC) enabled, only if you want SCIM to assign custom roles

Group provisioning has additional requirements. See [Before You Start](#group-prerequisites).

## Supported Identity Providers {#supported-idps}

<BrandName /> works with any identity provider that supports SCIM 2.0. Step-by-step guides are available for:

- [Okta](/support/docs/scim/okta/)
- [Microsoft Entra ID (Azure AD)](/support/docs/scim/azure/)
- [JumpCloud](/support/docs/jumpcloud-scim/)
- [PingOne](/support/docs/pingone-scim/)

For any other identity provider, follow [Setup](#setup).

## How Provisioning Works {#end-to-end}

Once SCIM is set up, you manage access in your IDP and <BrandName /> stays in sync. Users sign in with SSO and do not need an invitation.

| When you | <BrandName /> |
|---|---|
| Assign a user to the <BrandName /> app | Creates the account in your organization with an [organization role](#roles). With custom roles: the user also gets the [default roles](#custom-roles), if they are turned on |
| Add the user to a group that is pushed to <BrandName /> | Adds the user to the teams, concurrency group, or sub-organization the group is [mapped](#mapping-groups-to-lambdatest-entities) to. With custom roles: the user also gets the custom roles of each team |
| Move the user between groups, or change a group's roles | Updates the user's teams and roles on the next sync. See [What Happens When...](#sync-behavior) |
| Unassign or deactivate the user | Deactivates the account and frees the license seat. The account is not deleted. With custom roles: default custom roles are removed |

:::note Custom roles need RBAC
Custom roles are part of **Custom Roles & Permissions** (RBAC), which is not enabled for every organization. Without it, SCIM still provisions users and groups, sets organization roles (Admin, User, Guest), and maps groups to teams, concurrency groups, and sub-organizations. The role options described on this page (**Roles in the team** on a rule, the **Roles** column on the Rules tab, and **Auto-assign roles to new SCIM users**) are shown only when Custom Roles & Permissions is enabled.
:::

---

## Setup {#setup}

Complete the [prerequisites](#prerequisites) before you start.

### Step 1: Copy SCIM Credentials

Go to **Settings** > **Organization Settings** > **Security** > **SCIM Provisioning**. Copy the **SCIM Base URL** and **Bearer Token**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="SCIM Base URL and Bearer Token" width="404" height="206" className="doc_img img_center"/><br/>

### Step 2: Configure Your IDP

Paste the SCIM Base URL and Bearer Token into your IDP's provisioning settings.

<Tabs className="docs__val" groupId="idp-provider" queryString="idp">
<TabItem value="okta" label="Okta" default>

Full walkthrough: [Okta SCIM Guide](/support/docs/scim/okta/)

1. **Applications** > your <BrandName /> app > **Provisioning** tab > **Configure API Integration**
2. Check **Enable API Integration**, paste credentials, click **Test API Credentials** > **Save**
3. Under **To App**, enable: Create Users, Update User Attributes, Deactivate Users
4. **Assignments** tab > assign users or groups
5. *(For groups)* **Push Groups** tab > **Push Groups** > Find by name or rule

:::tip
Member changes in pushed Okta groups are automatically synced to <BrandName />.
:::

</TabItem>
<TabItem value="azure" label="Microsoft Entra ID">

Full walkthrough: [Microsoft Entra ID SCIM Guide](/support/docs/scim/azure/)

1. **Enterprise Applications** > your <BrandName /> app > **Provisioning** > set to **Automatic**
2. Under **Admin Credentials**, paste SCIM Base URL (Tenant URL) and Bearer Token (Secret Token) > **Test Connection** > **Save**
3. Under **Mappings**, enable user and group provisioning
4. Under **Users and groups**, assign what you want to provision
5. Start a provisioning cycle (or wait for the 40-minute auto sync)

</TabItem>
<TabItem value="jumpcloud" label="JumpCloud">

Full walkthrough: [JumpCloud SCIM Guide](/support/docs/jumpcloud-scim/)

1. **SSO Applications** > your <BrandName /> app > **Identity Management** tab
2. Enable **SCIM Provisioning**, paste credentials
3. Configure attribute mappings (userName, name, active)
4. **User Groups** tab > select groups > **Activate** > **Save**

</TabItem>
<TabItem value="pingone" label="PingOne">

Full walkthrough: [PingOne SCIM Guide](/support/docs/pingone-scim/)

1. In PingOne, go to **Integrations** > **Provisioning** > create a new **SCIM Outbound** connection
2. Enter the **SCIM Base URL** and **Bearer Token** from <BrandName />
3. Configure preferences: set **User Identifier** to `workEmail` and enable **Create**, **Update**, **Disable** users
4. Create a provisioning **Rule** to select which users and groups to sync

</TabItem>
<TabItem value="other" label="Other IDPs">

Any SCIM 2.0-compliant IDP works. Use these settings:

| Setting | Value |
|---|---|
| **SCIM Base URL** | From Organization Settings > Security > SCIM Provisioning |
| **Authentication** | Bearer Token (HTTP Header) |
| **SCIM Version** | 2.0 |
| **Users Resource** | `/Users` |
| **Groups Resource** | `/Groups` |

**Custom Attribute Schema URNs**: add these to your IDP's SCIM custom attribute configuration to send role and group assignments:

| Purpose | Schema URN |
|---|---|
| **User extension** | `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User` |
| **Group extension** | `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group` |

- **User extension attributes:** `OrganizationRole` (Admin / User / Guest), `LambdatestGroup` (concurrency group name)
- **Group extension attributes:** `LambdatestRoles` (array of Admin / User / Guest, applied to all group members, plus optional [custom role names](#custom-roles) granted to the group's mapped team)

</TabItem>
</Tabs>

<br />

---

## User Provisioning {#user-provisioning}

### How It Works

| Scenario | What happens |
|---|---|
| New user (email doesn't exist) | Account created and added to your org. With Custom Roles & Permissions enabled, the user also gets any [default SCIM roles](#custom-roles) you have turned on |
| Existing user (same org) | Attributes (role, active) updated |
| Existing user (different org) | **Not** provisioned (`400 Bad Request`). Invite the user to your organization first, then SCIM can manage them |
| User deactivated (`active: false` or `DELETE`) | Account deactivated, license seat freed, default SCIM roles removed. The account is not deleted |
| User reactivated (`active: true`) | Account reactivated. Default SCIM roles granted again |

### Schema & Attributes

<VerifiedTag value="Verified" />

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "userName": "jane@company.com",
  "active": true,
  "name": { "givenName": "Jane", "familyName": "Doe", "formatted": "Jane Doe" },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole": "User",
    "LambdatestGroup": "Engineering"
  }
}
```

**Standard Attributes**

| Attribute | Required | Notes |
|---|---|---|
| `userName` | Yes | Must be a valid email. **Cannot be changed after creation.** |
| `active` | Yes | `true` = enabled, `false` = deactivated |
| `name` | Yes | `givenName`, `familyName`, `formatted` |

**Custom Attributes** (TestMu AI Extension)

These attributes are part of the `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User` extension schema. To send them from your IDP, add this schema URN to your IDP's custom attribute configuration.

| Attribute | Required | Values | Notes |
|---|---|---|---|
| `OrganizationRole` | No | `Admin`, `User`, `Guest` | Sets the user's [organization role](#roles). Defaults to `User` if not provided. |
| `LambdatestGroup` | No | _(concurrency group name)_ | Assigns the user to a concurrency group by name. The group must already exist. Contact support to enable concurrency groups. |

For PATCH operations, use the fully qualified SCIM path:
- **OrganizationRole:** `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole`
- **LambdatestGroup:** `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:LambdatestGroup`

> **What can be updated:** `OrganizationRole`, `LambdatestGroup`, and `active` can be updated via SCIM. `userName` is immutable after creation. `name` can only be changed from <BrandName /> Account Settings.

### User API Operations

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="user-op" queryString="user-op">
<TabItem value="create-user" label="Create" default>

**Request:** POST `https://auth.lambdatest.com/api/scim/Users`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "userName": "jane@company.com",
  "active": true,
  "name": { "givenName": "Jane", "familyName": "Doe", "formatted": "Jane Doe" },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole": "User",
    "LambdatestGroup": "Engineering"
  }
}
```

**Response:** `201 Created`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "jane@company.com",
  "active": true,
  "name": { "givenName": "Jane", "familyName": "Doe", "formatted": "Jane Doe" },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole": "User",
    "LambdatestGroup": "Engineering"
  }
}
```

</TabItem>
<TabItem value="get-user" label="Get by ID">

**Request:** GET `https://auth.lambdatest.com/api/scim/Users/{id}`

**Response:** `200 OK`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
  ],
  "id": "23123",
  "userName": "jane@company.com",
  "active": true,
  "name": { "givenName": "Jane", "familyName": "Doe", "formatted": "Jane Doe" },
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole": "User"
  }
}
```

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="list-users" label="List / Filter">

**Request:** GET `https://auth.lambdatest.com/api/scim/Users`

Filter by email: `?filter=userName eq "jane@company.com"`

**Response:** `200 OK`

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
  "totalResults": 1,
  "startIndex": 1,
  "itemsPerPage": 20,
  "Resources": [
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User"
      ],
      "id": "23123",
      "userName": "jane@company.com",
      "active": true,
      "name": { "givenName": "Jane", "familyName": "Doe", "formatted": "Jane Doe" },
      "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
        "OrganizationRole": "User"
      }
    }
  ]
}
```

**Zero results:** Returns `"totalResults": 0` with empty `"Resources": []`.

**Errors:** `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="update-put" label="Update (PUT)">

**Request:** PUT `https://auth.lambdatest.com/api/scim/Users/{id}`

```json
{
  "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User": {
    "OrganizationRole": "Admin"
  },
  "active": true
}
```

**Response:** `200 OK`, returns the full updated user object.

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="update-patch" label="Update (PATCH)">

**Request:** PATCH `https://auth.lambdatest.com/api/scim/Users/{id}`

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    { "op": "Replace", "path": "active", "value": false },
    { "op": "Replace", "path": "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole", "value": "Guest" },
    { "op": "Replace", "path": "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:LambdatestGroup", "value": "QA-Team" }
  ]
}
```

**Patchable paths:**

| Path | Value |
|---|---|
| `active` | `true` / `false` |
| `urn:ietf:params:scim:schemas:extension:`<br/>`LambdaTest:2.0:User:OrganizationRole` | `Admin`, `User`, `Guest` |
| `urn:ietf:params:scim:schemas:extension:`<br/>`LambdaTest:2.0:User:LambdatestGroup` | _(concurrency group name)_ |

**Response:** `200 OK`, returns the full updated user object.

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="disable-user" label="Disable">

**Request:** PATCH `https://auth.lambdatest.com/api/scim/Users/{id}`

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    { "op": "Replace", "path": "active", "value": false }
  ]
}
```

**Response:** `200 OK`, returns user object with `"active": false`.

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="delete-user" label="Delete">

**Request:** DELETE `https://auth.lambdatest.com/api/scim/Users/{id}`

**Response:** `204 No Content`

:::warning
DELETE only **deactivates** the account. It does not permanently delete it. For permanent deletion, the user must request it from <BrandName /> Account Settings.
:::

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
</Tabs>

<br />

---

## Group Provisioning {#group-provisioning}

Group provisioning syncs groups from your IDP and maps each group to teams, a concurrency group, or a sub-organization in <BrandName />. Membership changes in your IDP are applied to the mapped entities automatically.

Setting up group provisioning takes five steps:

1. [Turn on group provisioning](#enabling-disabling).
2. [Create rules](#mapping-rules) that map new groups by name to a team, a concurrency group, or both.
3. [Push groups from your IDP](#check-groups) and review them on the **Groups** tab.
4. [Map or approve manually](#mapping-groups-to-lambdatest-entities) any group that a rule did not approve automatically.
5. [Change a group's mappings](#changing-groups) later, if needed.

### How It Works

<BrandName /> stores a group and its members as soon as your IDP pushes them, even before the group is mapped. The mapping determines which teams, concurrency group, or sub-organization the members are assigned to.

<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', margin: '2rem 0'}}>

  <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '16px 28px', textAlign: 'center', width: '100%', maxWidth: '500px', background: '#f9fafb'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', marginBottom: '4px'}}>Step 1: Your IDP (automatic)</div>
    <div style={{fontSize: '15px', fontWeight: 600, color: '#111827'}}>Groups & members pushed via SCIM</div>
  </div>

  <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↓</div>

  <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '16px 28px', textAlign: 'center', width: '100%', maxWidth: '500px', background: '#f9fafb'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', marginBottom: '4px'}}>Step 2: TestMu AI (automatic)</div>
    <div style={{fontSize: '15px', fontWeight: 600, color: '#111827'}}>Group stored & roles applied to members</div>
    <div style={{fontSize: '12px', color: '#6b7280', marginTop: '4px'}}>Organization roles apply to members immediately, even without mapping</div>
  </div>

  <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↓</div>

  <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '16px 28px', textAlign: 'center', width: '100%', maxWidth: '500px', background: '#f9fafb'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', marginBottom: '4px'}}>Step 3: Admin (manual) or Mapping Rules (automatic)</div>
    <div style={{fontSize: '15px', fontWeight: 600, color: '#111827'}}>Group mapped to teams, a concurrency group, or a sub-organization (plus custom roles for teams)</div>
  </div>

  <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '-4px'}}>
    <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↙</div>
    <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↓</div>
    <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↘</div>
  </div>

  <div style={{display: 'flex', gap: '12px', width: '100%', maxWidth: '600px', justifyContent: 'center', flexWrap: 'wrap'}}>
    <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '14px 18px', textAlign: 'center', flex: '1', minWidth: '150px', background: '#fff'}}>
      <div style={{fontSize: '14px', fontWeight: 600, color: '#111827'}}>Team</div>
      <span style={{display: 'inline-block', marginTop: '6px', background: '#e5e7eb', color: '#374151', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '2px 8px', borderRadius: '999px'}}>Additive</span>
      <div style={{fontSize: '11px', color: '#6b7280', marginTop: '6px'}}>Multiple teams allowed</div>
    </div>
    <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '14px 18px', textAlign: 'center', flex: '1', minWidth: '150px', background: '#fff'}}>
      <div style={{fontSize: '14px', fontWeight: 600, color: '#111827'}}>Concurrency Group</div>
      <span style={{display: 'inline-block', marginTop: '6px', background: '#e5e7eb', color: '#374151', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '2px 8px', borderRadius: '999px'}}>Exclusive</span>
      <div style={{fontSize: '11px', color: '#6b7280', marginTop: '6px'}}>User can only belong to one</div>
    </div>
    <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '14px 18px', textAlign: 'center', flex: '1', minWidth: '150px', background: '#fff'}}>
      <div style={{fontSize: '14px', fontWeight: 600, color: '#111827'}}>Sub-Organization</div>
      <span style={{display: 'inline-block', marginTop: '6px', background: '#e5e7eb', color: '#374151', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '2px 8px', borderRadius: '999px'}}>Exclusive</span>
      <div style={{fontSize: '11px', color: '#6b7280', marginTop: '6px'}}>User can only belong to one</div>
    </div>
  </div>

</div>

### Before You Start {#group-prerequisites}

| You need | Where to check |
|---|---|
| [User provisioning](#user-provisioning) working, so the group's members exist in <BrandName /> | Your IDP's provisioning logs |
| Group provisioning activated for your organization | The **Enable SCIM Group Provisioning** toggle is visible on the SCIM Provisioning page |
| **Teams** enabled, and **Concurrency Groups** or **Sub-Organizations** if you want to map to them | You only see the options your organization has. Missing one? Ask support to enable it |
| *(Optional)* Custom roles created, if teams should get roles automatically | **Settings** > **Organization Settings** > **Members** > **Custom Roles & Permissions** |

:::note
Group provisioning, Teams, Concurrency Groups, and Sub-Organizations are not enabled by default. Reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email [support@testmuai.com](mailto:support@testmuai.com) to get them activated for your organization.
:::

### Step 1: Turn On Group Provisioning {#enabling-disabling}

1. Go to **Settings** > **Organization Settings** > **Security** > **SCIM Provisioning**
2. Turn on **Enable SCIM Group Provisioning**

The page now shows three tabs:

| Tab | What you do there |
|---|---|
| **Groups** | See every group your IDP has synced, and choose the teams its members join |
| **Rules** | Map new groups automatically by name. With Custom Roles & Permissions enabled, a rule can also assign roles to the team |
| **Settings** | Base URL, Bearer Token, and the group provisioning toggle. With Custom Roles & Permissions enabled, also the default roles for new users |

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/scim-settings.webp').default} alt="SCIM Provisioning page on the Settings tab with the Base URL, Bearer Token, Enable SCIM Group Provisioning toggle and Auto-assign roles to new SCIM users toggle with one role selected" width="1280" height="800" className="doc_img img_center"/><br/>

The screenshots on this page are from an organization with Custom Roles & Permissions enabled. Without it, the role fields are not shown.

> **When toggled OFF:** New IDP group operations (create/update/delete) are rejected with `403`. Existing groups, mappings, and assignments are preserved. Nothing is deleted. Toggle back ON to resume syncing.

### Step 2: Create Rules {#mapping-rules}

A rule maps new IDP groups automatically, based on the group name. Create rules before your IDP pushes the groups, because a rule applies only to groups that sync after the rule exists.

One rule can create a team and a concurrency group together, both named after the IDP group. With Custom Roles & Permissions enabled, the rule can also assign roles to the team.

**To create a rule:**

1. Open the **Rules** tab and click **Add rule**
2. Under **When the group name**, choose a match type and enter the pattern. See [Match types](#match-types)
3. Under **Map to**, select **Team**, **Concurrency group**, or both. **Sub-organization** can only be selected on its own
4. *(Optional. Shown only when **Team** is selected and Custom Roles & Permissions is enabled)* Under **Roles in the team**, select one or more roles. Every team this rule creates gets these roles. See [Custom Roles with SCIM](#custom-roles)
5. Turn on **Approve automatically** to map matching groups without admin review
6. Click **Add rule**

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/rule-add.webp').default} alt="Add rule dialog: when the group name starts with a prefix, Team and Concurrency group both selected, one role in the team, and Approve automatically on" width="1280" height="800" className="doc_img img_center"/><br/>

#### Match types {#match-types}

<Tabs className="docs__val" groupId="rule-type" queryString="rule">
<TabItem value="prefix" label="Starts with" default>

Matches group names that start with the text you enter (case-insensitive). Enter plain text without a wildcard: a trailing `*` is treated as a literal character.

`eng-` matches `eng-backend`, `eng-frontend`, `ENG-DevOps`

</TabItem>
<TabItem value="regex" label="Matches regex">

Matches group names against a **regular expression** (case-sensitive).

`^qa-.*-team$` matches `qa-mobile-team`, `qa-web-team`

</TabItem>
<TabItem value="all" label="Is any group">

Matches every group. Use it as a catch-all at the bottom of the list.

</TabItem>
</Tabs>

#### What a rule creates

| Map to | Result when **Approve automatically** is on |
|---|---|
| Team | Creates a team named after the group (or reuses a team with that name) and adds the members |
| Concurrency group | Creates a concurrency group named after the group (or reuses it) and moves the members into it. A newly created concurrency group starts with no concurrency allocated, so set it under **Members** > **Groups** |
| Team + Concurrency group | Does both of the above for the same group |
| Sub-organization | Maps the group to an **existing** sub-organization with the same name. Sub-organizations are never created automatically, and this option can't be combined with the other two |

When **Approve automatically** is off, nothing is created. The group stays in **Needs approval** until an admin [approves it](#mapping-groups-to-lambdatest-entities).

#### Rule order

Rules are evaluated from the top of the list. The first matching rule applies, and the rules below it are skipped. If no rule matches, the group stays **Not mapped** until an admin maps it manually.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/rules-table.webp').default} alt="Rules tab listing three rules: a prefix mapped to Team + Concurrency group, a prefix mapped to Team, and a catch-all that needs approval" width="1280" height="800" className="doc_img img_center"/><br/>

Place specific rules at the top and an **is any group** catch-all rule at the bottom. Click **Change order** to move rules up or down.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/change-order.webp').default} alt="Reorder Rules dialog with up and down arrows next to each rule" width="1280" height="800" className="doc_img img_center"/><br/>

:::note Rules apply to new groups only
A new, edited, or deleted rule affects only groups that sync after the change. Groups that are already mapped keep their teams, concurrency groups, and roles. To change those, [change the group](#changing-groups).
:::

### Step 3: Push Groups and Review Them {#check-groups}

Push or assign your groups in your IDP (see the guides for [Okta](/support/docs/scim/okta/), [Microsoft Entra ID](/support/docs/scim/azure/), [JumpCloud](/support/docs/jumpcloud-scim/), and [PingOne](/support/docs/pingone-scim/)). Each group appears on the **Groups** tab within a few seconds of the push.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/groups-tab.webp').default} alt="Groups tab listing synced IDP groups with their status, teams, concurrency group and last synced time" width="1280" height="800" className="doc_img img_center"/><br/>

| Status | What it means | What to do |
|---|---|---|
| **Approved** | The group is mapped and its members are synced | No action needed |
| **Needs approval** | A rule matched the group, but an admin has to approve it before members are added | [Approve it](#mapping-groups-to-lambdatest-entities) |
| **Not mapped** | No rule matched and no mapping is selected. Members are not assigned to any entity | [Map it manually](#mapping-groups-to-lambdatest-entities) |
| **Target deleted** | A mapped team, concurrency group, or sub-organization was deleted | See [Deleted Target](#target-deleted) |

The yellow banner in the example above appears only when a user is in two groups that can't share members. See [Conflicts](#conflicts).

Click a group to view its details. Entries that a rule created are marked **Added by a rule**. If the rule assigns roles, they are listed next to the team.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/group-mappings.webp').default} alt="Group details on the Mappings tab: a team added by a rule with its rule roles, and a concurrency group added by a rule" width="1280" height="800" className="doc_img img_center"/><br/>

- **Mappings** tab: the teams, concurrency group, or sub-organization the group maps to.
- **Roles** tab: roles your IDP sends for the group, and roles a rule added.
- **Members** tab: who is in the group.

The teams also appear under **Members** > **Teams** with their custom roles, if any, and the concurrency groups under **Members** > **Groups**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/teams-with-roles.webp').default} alt="Teams list showing SCIM-provisioned teams, each with its custom role in the Custom Roles column" width="1280" height="800" className="doc_img img_center"/><br/>

### Step 4: Map or Approve a Group Manually {#mapping-groups-to-lambdatest-entities}

Use this step for groups with the status **Not mapped** or **Needs approval**, or if you do not use rules.

1. On the **Groups** tab, click the group. Its details open on the **Mappings** tab
2. Under **Teams**, select one or more teams. Select a **Concurrency group** as well, if needed. Teams and concurrency groups must already exist, so create them first if required
3. Click **Save**. The group is approved and members are updated in a few seconds

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/needs-approval.webp').default} alt="Group details for a group that needs approval, with a banner asking the admin to pick teams and save" width="1280" height="800" className="doc_img img_center"/><br/>

If the group already lists its entries and shows **Waiting for your approval.**, click **Approve** there, or use **Approve** in the group's ⋯ menu on the Groups tab.

**What one group can map to**

| Field | How many | What happens |
|---|---|---|
| **Teams** | As many as you need | Members join every team listed |
| **Concurrency group** | One | Members move to this concurrency group |
| **Sub-organization** | One | Members move to this sub-organization. It can't be combined with teams or a concurrency group |

Select an entity type for details:

<Tabs className="docs__val" groupId="entity-type" queryString="entity">
<TabItem value="team" label="Team" default>

**Teams are additive**: a user can belong to multiple teams at once, so there are no conflicts.

| | |
|---|---|
| **Auto-create** | Yes, by a rule with **Approve automatically** on. A manual mapping needs an existing team |
| **On member removal** | Removed from team (unless another SCIM group also maps them there) |
| **On group rename** | A team that a rule created is **renamed** to match the IDP group name, unless another SCIM group also maps to it. Teams you selected manually keep their names |
| **Conflicts** | None, teams are never exclusive |

Team is the simplest mapping and the recommended starting point.

</TabItem>
<TabItem value="group" label="Concurrency Group">

**Concurrency groups are exclusive**: a user can only belong to one at a time.

| | |
|---|---|
| **Auto-create** | Yes, by a rule with **Approve automatically** on. A manual mapping needs an existing concurrency group |
| **On member removal** | User moved back to the org's **default concurrency group** |
| **On group rename** | A concurrency group that a rule created is **renamed** to match the IDP group name, unless another SCIM group also maps to it |
| **Conflicts** | Yes, if the same user is in two SCIM groups mapped to **different** concurrency groups. See [Conflicts](#conflicts). |

</TabItem>
<TabItem value="suborg" label="Sub-Organization">

**Sub-organizations are exclusive**: a user can only belong to one at a time. Sub-organizations also **conflict with concurrency groups and teams** from other SCIM groups (cross-type conflict).

| | |
|---|---|
| **Auto-create** | No, sub-organizations must be created manually first (they have billing and setup requirements) |
| **On member removal** | User moved back to the **root organization** |
| **On group rename** | Sub-organization is **not** renamed (sub-organizations have independent naming) |
| **Conflicts** | Yes, two types: (1) same user in two groups mapped to **different** sub-organizations, or (2) same user in a sub-organization group **and** a concurrency group/team group from a different SCIM group |

**Why cross-type conflicts?** Moving a user to a sub-organization removes them from the parent organization's resource pool. Team and concurrency group assignments in the parent org become invalid.

</TabItem>
</Tabs>

:::note
A team you add manually does not get a rule's roles. Grant custom roles to that team directly or send them from your IDP. See [Custom Roles with SCIM](#custom-roles).
:::

### Step 5: Change a Group's Mappings {#changing-groups}

A rule sets a group's initial mappings. You can change the mappings of any group afterwards: open the group, edit the **Mappings** tab, and click **Save**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/group-later.webp').default} alt="Group details on the Mappings tab after a second team was added manually next to the team and concurrency group the rule created" width="1280" height="800" className="doc_img img_center"/><br/>

| To | Do this on the Mappings tab | Result |
|---|---|---|
| Add the members to more teams | Add the teams | Members join every team listed. Entries the rule created stay |
| Use a different concurrency group | Remove the current one and pick another | Members move to the one you picked |
| Stop using a team | Remove the team | Members leave that team, unless another SCIM group still maps to it. If a rule created it, the rule's roles are removed from the team |
| Share one team between several groups | Add the same team on each group | A user stays in the team as long as one of their groups maps to it |

Rules do not overwrite changes you save here. Rules run only when a group is first pushed or renamed in your IDP.

### Map Several Groups to One Team

More than one SCIM group can map to the same team. A user stays in the team as long as at least one of their SCIM groups maps to it, and leaves it when the last one stops.

### Role Assignment {#roles}

This section covers **organization roles** (Admin / User / Guest). For custom RBAC roles, see [Custom Roles with SCIM](#custom-roles).

Organization roles can be set per-user (User extension `OrganizationRole`) or per-group (Group extension `LambdatestRoles`). They work **independently of mappings**: even unmapped groups apply their organization roles to members immediately.

When a user is in **multiple groups with different roles**, the highest-priority role wins: **Admin > User > Guest**

| Group | Role |
|---|---|
| `eng-team` | User |
| `org-admins` | Admin |
| **Effective role** | **Admin** (highest wins) |

**Roles can be upgraded and downgraded.** The effective role is always the **highest** across all current group memberships. Removing a user from one group only downgrades their role if no other group provides it.

| Scenario | What happens |
|---|---|
| User added to a group with `Admin` role | Role upgraded to Admin (if currently lower) |
| User removed from the `Admin` group | Role recomputed, drops to next highest (e.g., User) if no other group gives Admin |
| All groups removed, or no roles set | Role defaults to **User** |
| Group's `LambdatestRoles` changed from `Admin` to `Guest` | All members' roles recomputed, may downgrade |

### Custom Roles with SCIM {#custom-roles}

This section applies only to organizations with **Custom Roles & Permissions** (RBAC) enabled. If your organization does not use it, skip this section.

The roles above are **organization roles** (Admin / User / Guest). With Custom Roles & Permissions, SCIM can also grant **custom roles** automatically, so users have the right access as soon as they are provisioned.

:::info Prerequisites
Custom roles through SCIM need **Custom Roles & Permissions** enabled for your organization, and **SCIM Group Provisioning** enabled for team-based roles. Create the custom roles first under **Settings > Organization Settings > Members > Custom Roles & Permissions**. Reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> if you don't see these options.
:::

There are three ways to grant custom roles with SCIM. Use any one of them, or combine them:

| Method | Configured in | Who gets the role | Best for |
|---|---|---|---|
| **Roles in the team on a rule** | <BrandName /> (Rules tab) | Every team the rule creates, and so every member of those teams | Groups that follow a naming convention, with no role setup in your IDP |
| **Custom role names in `LambdatestRoles`** | Your IDP (group extension attribute) | The team the group is mapped to | Keeping all role assignment in your IDP |
| **Auto-assign roles to new SCIM users** | <BrandName /> (Settings tab of the SCIM Provisioning page) | Each user provisioned after you turn it on | A baseline role every new user should start with |

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/scim-settings.webp').default} alt="SCIM Provisioning page on the Settings tab with the Base URL, Bearer Token, Enable SCIM Group Provisioning toggle and Auto-assign roles to new SCIM users toggle with one role selected" width="1280" height="800" className="doc_img img_center"/><br/>

<Tabs className="docs__val" groupId="custom-role-source" queryString="custom-role">
<TabItem value="rule" label="Roles on a rule" default>

Pick **Roles in the team** on a rule that maps to **Team**. When a group matches the rule, <BrandName /> creates (or reuses) the team, attaches those roles to it, and adds the group's members. Everyone in the team inherits the roles.

**Example:** your IDP groups follow the convention `acme-qe-web-<squad>` and `acme-qe-mobile-<squad>`.

| Order | When group name | Maps to | Roles | Approval |
|---|---|---|---|---|
| 1 | Starts with `acme-qe-web-` | Team | `QE-Web-Tester` | Automatic |
| 2 | Starts with `acme-qe-mobile-` | Team | `QE-Mobile-Tester` | Automatic |

When your IDP pushes `acme-qe-web-payments`, the team **acme-qe-web-payments** is created with the `QE-Web-Tester` role and its members are added. No manual role assignment is needed. The **Custom Roles** column under **Members > Teams** shows the result.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/rule-roles-picker.webp').default} alt="Roles in the team picker listing the default Admin, User and Guest roles and the organization's custom roles, with one custom role selected" width="1280" height="800" className="doc_img img_center"/><br/>

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/teams-with-roles.webp').default} alt="Teams list showing SCIM-provisioned teams, each with its custom role in the Custom Roles column" width="1280" height="800" className="doc_img img_center"/><br/>

- The **Roles in the team** field appears only when **Team** is selected and Custom Roles & Permissions is enabled.
- You can select more than one role. Default roles (Admin, User, Guest) and your custom roles appear in one searchable list.
- With **Approve automatically OFF**, the group waits as **Needs approval**. The roles are attached when an admin approves it.
- The roles go to the team the rule creates. Teams you add to the group manually do not get them.
- If a mapped role is deleted later, the rule shows a warning. Edit the rule and reselect a role.

</TabItem>
<TabItem value="idp" label="Roles from your IDP">

The group extension attribute `LambdatestRoles` accepts **custom role names** as well as Admin / User / Guest. Custom role names are matched against the custom roles in your organization and granted to the team the group is mapped to.

```json
"urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group": {
  "LambdatestRoles": ["User", "QE-Web-Tester"]
}
```

- `User` sets the members' organization role (highest wins, as described in [Role Assignment](#roles)).
- `QE-Web-Tester` is granted to the group's mapped **team**. The group must be mapped to a team and approved.
- Role names must match the custom role name in <BrandName /> exactly. Names that don't match any role are ignored.
- When your IDP changes the list, <BrandName /> removes only the roles your IDP sent before and adds the new ones.

</TabItem>
<TabItem value="default" label="Default role for new users">

Turn on **Auto-assign roles to new SCIM users** on the **Settings** tab of the **SCIM Provisioning** page and select one or more roles. Every user your IDP provisions from then on gets these roles directly, on top of their organization role.

- Applies to users provisioned **after** you turn it on. Existing users are not changed.
- Works independently of groups and mapping rules.
- When your IDP **deactivates** a user, their default roles are removed. If the user is **reactivated**, the roles currently configured are granted again.
- Changing or turning off the setting doesn't remove roles from users who already received them.
- If a selected role is deleted later, the setting shows a warning. Reselect a role to fix it.

</TabItem>
</Tabs>

**How the sources work together**

- **All sources add up.** A team can hold roles from a rule and from your IDP at the same time. A user gets the roles of every team they belong to, plus any default roles.
- **Each source removes only what it granted.** Removing a role from a rule's team never strips the same role your IDP granted, and the other way round.
- **Rules are forward-only.** Editing or deleting a rule doesn't change roles on teams it already created. To change access for existing teams, edit the custom role itself under **Custom Roles & Permissions**. That change applies to everyone who holds the role.

**What happens to rule roles when things change**

| Change | Result |
|---|---|
| User added to the IDP group | Joins every team the group maps to and inherits their roles |
| User removed from the IDP group | Leaves those teams (unless another of their SCIM groups maps to the same team) and loses the roles that came from them |
| Group renamed, still matches the same rule | The team the rule created is renamed to match. Roles kept |
| Group renamed to match a different rule | Old rule's roles removed. The group returns to **Needs approval** under the new rule. Teams added manually are not affected |
| Group renamed so no rule matches | Rule's roles removed from the team. The group returns to **Needs approval**. Teams added manually are not affected |
| Group deleted in your IDP | Members leave the mapped teams. Rule's roles removed from the team |
| Admin removes the rule's team from the group's **Mappings** tab | Members leave the team (unless another SCIM group maps to it). Rule's roles removed from the team |
| Rule edited or deleted | No change to existing teams. Applies to new groups only |

### Conflicts {#conflicts}

:::note Teams don't have conflicts
If you map groups only to **Teams**, you can skip this section. A user can belong to several teams, so teams never conflict.
:::

A conflict occurs when a user belongs to several SCIM groups whose mappings cannot apply to the same user at once. The user keeps their current assignment until an admin resolves the conflict. Nothing changes automatically.

**When do conflicts happen?**

<Tabs className="docs__val" groupId="entity-type" queryString="entity">
<TabItem value="group" label="Concurrency Group" default>

When the same user is in two SCIM groups mapped to **different** concurrency groups. Example: Group A → "QA Pool" and Group B → "Dev Pool". The user can only be in one.

</TabItem>
<TabItem value="suborg" label="Sub-Organization">

When the same user is in two SCIM groups mapped to **different** sub-organizations. Example: Group X → "US Team" and Group Y → "EU Team". The user can only be in one.

</TabItem>
<TabItem value="crosstype" label="Cross-Type">

When a user is mapped to a **sub-organization** from one SCIM group and a **concurrency group or team** from another SCIM group. Example: Group A maps to sub-organization "US Team" and Group B maps to Concurrency Group "Dev Pool".

**Why does this conflict?** Moving a user to a sub-organization removes them from the parent organization's resource pool. Team and concurrency group assignments in the parent org become invalid.

</TabItem>
</Tabs>

---

**To resolve:**

1. Go to **Settings** > **Organization Settings** > **Security** > **SCIM Provisioning** and open the **Groups** tab. When conflicts exist, a banner shows how many users are in more than one group that can't share members
2. Click **Resolve**. The **Pending** tab lists open conflicts and **Resolved** lists past decisions
3. Each conflict card shows the **Current** group (where the user is now) and the **Incoming** group (the one trying to claim the user)
4. Click **Keep Current** or **Use Incoming**
5. <BrandName /> remembers this decision. The same combination won't create a new conflict

<img loading="lazy" src={require('../assets/images/lambdatest-scim/v2/conflict-resolution.webp').default} alt="Conflict Resolution panel showing one user with a current and an incoming group, and Keep Current and Use Incoming buttons" width="1280" height="800" className="doc_img img_center"/><br/>

:::tip To avoid conflicts
Prefer **teams** when users need to be in multiple groups. Teams never create conflicts. Only use concurrency groups and sub-organizations when you need exclusive assignment.
:::

### Deleted Target {#target-deleted}

If an admin deletes a team, concurrency group, or sub-organization that has an active SCIM mapping, the group's status changes to **Target deleted**.

:::warning Manual re-mapping required
When a target is deleted, <BrandName /> does not create a replacement automatically, even if a matching rule has **Approve automatically** on. An admin must update the mapping to point to a new or recreated target.
:::

**To fix a group with a deleted target:**

1. Go to **Settings** > **Organization Settings** > **Security** > **SCIM Provisioning** and open the **Groups** tab
2. Open the group with the **Target deleted** status. The deleted entry is no longer listed on its **Mappings** tab
3. Pick a replacement (create it first if needed), or leave it out
4. Click **Save**. Members are synced to what is listed

### Group Schema & Attributes

<VerifiedTag value="Verified" />

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:Group",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group"
  ],
  "displayName": "eng-backend",
  "members": [{ "value": "12345" }, { "value": "67890" }],
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group": {
    "LambdatestRoles": ["User"]
  }
}
```

**Standard Attributes**

| Attribute | Required | Notes |
|---|---|---|
| `displayName` | Yes | Must be **unique** within your org |
| `members` | No | Array of `{ "value": "<user_scim_id>" }` |

**Custom Attributes** (TestMu AI Extension)

These attributes are part of the `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group` extension schema. To send them from your IDP, add this schema URN to your IDP's custom attribute configuration.

| Attribute | Required | Values | Notes |
|---|---|---|---|
| `LambdatestRoles` | No | `Admin`, `User`, `Guest`, or [custom role names](#custom-roles) | `Admin` / `User` / `Guest` set the [organization role](#roles) of **all members**. Highest role wins if a user is in multiple groups. Custom role names are granted to the group's mapped **team**. |

For PATCH operations, use the fully qualified SCIM path:
- **LambdatestRoles:** `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group:LambdatestRoles`

### Group API Operations

<VerifiedTag value="Verified" />

<Tabs className="docs__val" groupId="group-op" queryString="group-op">
<TabItem value="create-group" label="Create" default>

**Request:** POST `https://auth.lambdatest.com/api/scim/Groups`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:Group",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group"
  ],
  "displayName": "eng-backend",
  "members": [
    { "value": "23123" },
    { "value": "23456" }
  ],
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group": {
    "LambdatestRoles": ["User"]
  }
}
```

**Response:** `201 Created`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:Group",
    "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group"
  ],
  "id": "50001",
  "displayName": "eng-backend",
  "members": [
    { "value": "23123", "display": "jane@company.com" },
    { "value": "23456", "display": "bob@company.com" }
  ],
  "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group": {
    "LambdatestRoles": ["User"]
  },
  "meta": {
    "resourceType": "Group",
    "created": "2025-01-15T10:30:00Z",
    "lastModified": "2025-01-15T10:30:00Z"
  }
}
```

</TabItem>
<TabItem value="list-groups" label="List / Filter">

**Request:** GET `https://auth.lambdatest.com/api/scim/Groups`

Filter by name: `?filter=displayName eq "eng-backend"` | Paginate: `?startIndex=1&count=20`

**Response:** `200 OK`

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
  "totalResults": 1,
  "startIndex": 1,
  "itemsPerPage": 20,
  "Resources": [
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:Group",
        "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group"
      ],
      "id": "50001",
      "displayName": "eng-backend",
      "members": [
        { "value": "23123", "display": "jane@company.com" },
        { "value": "23456", "display": "bob@company.com" }
      ],
      "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group": {
        "LambdatestRoles": ["User"]
      },
      "meta": {
        "resourceType": "Group",
        "created": "2025-01-15T10:30:00Z",
        "lastModified": "2025-01-15T10:30:00Z"
      }
    }
  ]
}
```

**Zero results:** Returns `"totalResults": 0` with empty `"Resources": []`.

</TabItem>
<TabItem value="update-group" label="Update">

**PUT** (full replace) to `https://auth.lambdatest.com/api/scim/Groups/{id}`. Replaces entire membership list. Members removed from the list are unassigned from all mapped entities.

**PATCH** (partial) to `https://auth.lambdatest.com/api/scim/Groups/{id}`:

<Tabs className="docs__val">
<TabItem value="patch-add" label="Add Members" default>

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "Add",
      "path": "members",
      "value": [{ "value": "99999" }]
    }
  ]
}
```

</TabItem>
<TabItem value="patch-remove" label="Remove Members">

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "Remove",
      "path": "members",
      "value": [{ "value": "12345" }]
    }
  ]
}
```

</TabItem>
<TabItem value="patch-rename" label="Rename">

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "Replace",
      "path": "displayName",
      "value": "eng-platform"
    }
  ]
}
```

</TabItem>
<TabItem value="patch-roles" label="Update Roles">

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    {
      "op": "Replace",
      "path": "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group:LambdatestRoles",
      "value": ["Admin"]
    }
  ]
}
```

</TabItem>
</Tabs>

**Response:** `200 OK`, returns the updated group object with new membership and `meta.lastModified` timestamp.

**Errors:** `404 Not Found` if group doesn't exist. `409 Conflict` if renamed to an existing `displayName`.

</TabItem>
<TabItem value="delete-group" label="Delete">

**Request:** DELETE `https://auth.lambdatest.com/api/scim/Groups/{id}`

**Response:** `204 No Content`

**On delete:** the group is deleted, roles recomputed, members unassigned from all mapped entities (checking other group memberships first), mappings rejected, related conflicts auto-resolved.

**Errors:** `404 Not Found` if group doesn't exist.

</TabItem>
</Tabs>

<br />

---

## What Happens When... {#sync-behavior}

This section lists what <BrandName /> does when something changes in your IDP or in <BrandName />. No action is needed unless the last column says so.

<Tabs className="docs__val" groupId="sync-source" queryString="sync">
<TabItem value="idp-changes" label="Your IDP changes" default>

| You do this in your IDP | What happens in <BrandName /> | Action needed? |
|---|---|---|
| **Rename a group** | Group name updated. A team or concurrency group that a rule created is **renamed to match**. Rules re-evaluated. If the group now matches a different rule or no rule, [rule roles are removed](#custom-roles) and the group returns to **Needs approval**. Teams added manually are not affected. | Only if the group returned to Needs approval |
| **Delete a group** | Group deleted. Members unassigned from its mapped entities. Roles recomputed. Conflicts resolved automatically. | No |
| **Add a member to a group** | Added to all mapped entities. Role recomputed. | Only if a [conflict](#conflicts) is created |
| **Remove a member from a group** | Unassigned from mapped entities (only if no other group maps them there). Role recomputed. | No |
| **Re-push a previously deleted group** | Group restored. Members must be re-pushed. Mapping rules re-evaluated. | Depends on rules |
| **Change roles on a group** | All members' roles recomputed immediately. Custom role names are updated on the group's mapped team. | No |
| **Deactivate a user** | Account deactivated. License seat freed. [Default SCIM roles](#custom-roles) removed. | No |
| **Reactivate a user** | Account reactivated. Default SCIM roles granted again. | No |

</TabItem>
<TabItem value="admin-changes" label="TestMu AI Admin changes">

| You do this in <BrandName /> | What happens | Important |
|---|---|---|
| **Rename a team / group / sub-organization** | The new name is kept until the IDP group is next renamed, which overwrites it. | To control names, rename **in your IDP** |
| **Delete a mapped entity** | The group shows **Target deleted**. Auto-create is blocked. | [Pick a new target](#target-deleted) on the group |
| **Manually remove a member from a team** | Removal is immediate but **temporary**. Next IDP sync re-adds them. | Remove **in your IDP** instead |
| **Manually assign user to concurrency group / sub-organization** | SCIM overrides non-SCIM assignments on next sync. | Use SCIM groups for exclusive assignments |
| **Manually change a SCIM-managed user's role** | May be overwritten on next IDP sync. | Manage roles **in your IDP** |
| **Add, edit, or delete a rule** | Applies to groups that sync in afterwards. Existing teams and mappings keep what they have. | Edit the custom role to change access for existing teams |
| **Remove a team from a group's Mappings tab** | The group's members leave that team, unless another SCIM group maps to it. | No |
| **Delete a custom role used by a rule or the default-role setting** | The rule or setting shows a warning. No new grants for that role. | Reselect a role |

</TabItem>
</Tabs>

<br />

---

## Troubleshooting {#troubleshooting}

### API Errors

| Error | Cause | Fix |
|---|---|---|
| `401 Unauthorized` | Invalid or expired Bearer Token | Regenerate in Organization Settings > Security |
| `403 Forbidden` | Group Provisioning is disabled | Turn on **Enable SCIM Group Provisioning**. See [Enabling & Disabling](#enabling-disabling) |
| `404 Not Found` | ID doesn't exist or belongs to a different org | Verify via a List call |
| `409 Conflict` | Group with same `displayName` already exists | Rename or delete the existing group |
| `400 Bad Request` | User exists in a different organization | Invite them via team invite first |

### Common Issues

| Issue | Solution |
|---|---|
| Members not appearing in teams or sub-organizations | The group is **Not mapped** or **Needs approval**. [Map or approve it](#mapping-groups-to-lambdatest-entities) from the Groups tab, or create a [rule](#mapping-rules) with **Approve automatically** on. |
| Members are in the SCIM group but not in the sub-organization | Check for [conflicts](#conflicts). The user may belong to another group with a competing exclusive mapping. |
| User has an unexpected role | Check **all** SCIM group memberships. Roles follow highest-wins (Admin > User > Guest). The user may inherit Admin from another group. |
| User keeps getting re-added after manual removal | SCIM is the source of truth. Remove the user **in your IDP** instead. |
| Group went back to Needs approval, or shows Target deleted | The group was renamed (rules re-evaluated) or a mapped entity was deleted. If renamed, open the group and approve it. If deleted, [pick a new target](#target-deleted). |
| Tests don't run in parallel for a team a rule set up | A concurrency group that a rule creates starts with no concurrency allocated. Set it under **Members** > **Groups**. |
| Auto-approve didn't create my sub-organization | Sub-organizations are never created automatically, because they have billing and setup requirements. Create the sub-organization first, then approve the group manually. |
| **Roles in the team** field is missing on a rule | Select **Team** under **Map to**, and make sure Custom Roles & Permissions is enabled for your organization. |
| A rule with `eng-*` matches nothing | **Starts with** takes plain text. Remove the `*`. |
| Can't pick a sub-organization on a group | A sub-organization can't be combined with teams or a concurrency group. Remove those first. |
| A SCIM team has no custom role | Check that the group is **Approved**. Rules are forward-only, so a team created before the rule got its roles keeps its previous roles. Teams added to a group manually do not get rule roles. |
| A custom role from `LambdatestRoles` isn't applied | The name must match a custom role exactly, and the group must be mapped to an approved **team**. |
| New users don't get the default role | Check that **Auto-assign roles to new SCIM users** is ON with a role selected. Users provisioned before it was turned on are not updated. |

### FAQ

| Question | Answer |
|---|---|
| Can one rule create a team and a concurrency group? | Yes. Select both **Team** and **Concurrency group** under **Map to**. Each matching group gets a team and a concurrency group named after it. See [Create Rules](#mapping-rules). |
| Can a group be mapped to multiple targets? | Yes. A SCIM group can map to several teams and one concurrency group at the same time. A sub-organization mapping stands alone. See [Mapping Groups](#mapping-groups-to-lambdatest-entities). |
| Can two SCIM groups map to the same team? | Yes. A user stays in the team as long as one of their SCIM groups maps to it. |
| Can I disable group provisioning without losing data? | Yes. The toggle only blocks new IDP operations. Existing groups, mappings, and assignments are preserved. Toggle back ON to resume. |
| Can I restore a deleted group? | Yes. Push a group with the same `displayName` from your IDP. The group is restored. Members need to be re-pushed. |
| Can roles be downgraded? | Yes. Roles are recomputed across all groups. If the highest role is removed, the effective role drops to the next highest. Defaults to **User** if none set. |
| What happens to a conflict when one group is deleted? | The conflict is **auto-resolved** in favor of the remaining group. No admin action needed. |
| Does it matter whether a rule or an admin approved a group? | No. Members are synced the same way, and both show as **Approved**. |
| Do rules overwrite existing mappings? | No. Rules only apply when a group is first created or renamed. Mappings you set manually are not overwritten. |
| Does changing a rule's roles update existing teams? | No. Rule changes are forward-only. To change access for existing teams, edit the custom role itself. |
| Do rule roles replace roles sent by my IDP? | No. Both apply to the team, and removing one never removes the same role granted by the other. |
| Can I give every new user a starting role without group rules? | Yes. Turn on **Auto-assign roles to new SCIM users** and select the roles. |
| Can rule roles be used with Concurrency group or Sub-organization targets? | No. Rule roles apply to **Team** targets only. |

---

> That's all you need to know about SCIM Provisioning with <BrandName />. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmuai.com](mailto:support@testmuai.com).


