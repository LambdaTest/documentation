---
id: scim
title: SCIM Provisioning — Users & Groups
hide_title: false
sidebar_label: SCIM
description: Automate user and group lifecycle management with SCIM 2.0. Provision users, sync groups, map to teams, concurrency groups, and sub-organizations — all from your Identity Provider.
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
    - Concurrency Groups
url: https://www.testmuai.com/support/docs/scim/
site_name: TestMu AI
slug: scim/
canonical: https://www.testmuai.com/support/docs/scim/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "SCIM Provisioning",
          "item": `${BRAND_URL}/support/docs/scim/`
        }]
      })
    }}
></script>

SCIM (System for Cross-domain Identity Management) lets your Identity Provider (IDP) automatically manage users and groups within your <BrandName /> organization — no manual account setup required.

| Capability | What it does |
|---|---|
| **User Provisioning** | Auto-create, update, and deactivate user accounts |
| **Group Provisioning** | Sync IDP groups and map them to <BrandName /> teams, concurrency groups, or sub-orgs |
| **Role Assignment** | Set organization roles (Admin / User / Guest) from your IDP |

> **SSO is required.** If you haven't set up SSO yet, see [Getting Started with SSO](/support/docs/single-sign-on/) first.

<br />

---

## Setup {#setup}

**What you need:** Enterprise plan, SSO configured, Admin access, and an IDP that supports SCIM 2.0 (Okta, Azure AD, JumpCloud, etc.).

### Step 1 — Copy SCIM Credentials

Go to **Settings** > **Organization Settings** > **Security** tab. Copy the **SCIM Base URL** and **Bearer Token**.

<img loading="lazy" src={require('../assets/images/lambdatest-scim/scim-base-url.png').default} alt="SCIM Base URL and Bearer Token" width="404" height="206" className="doc_img img_center"/><br/>

### Step 2 — Configure Your IDP

Paste the SCIM Base URL and Bearer Token into your IDP's provisioning settings.

<Tabs className="docs__val" groupId="idp-provider">
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
<TabItem value="azure" label="Azure AD">

Full walkthrough: [Azure AD SCIM Guide](/support/docs/scim/azure/)

1. **Enterprise Applications** > your <BrandName /> app > **Provisioning** > set to **Automatic**
2. Under **Admin Credentials**, paste SCIM Base URL (Tenant URL) and Bearer Token (Secret Token) > **Test Connection** > **Save**
3. Under **Mappings**, enable user and group provisioning
4. Under **Users and groups**, assign what you want to provision
5. Start a provisioning cycle (or wait for the 40-minute auto sync)

</TabItem>
<TabItem value="jumpcloud" label="JumpCloud">

Full walkthrough: [JumpCloud SCIM Guide](/support/docs/scim/jumpcloud/)

1. **SSO Applications** > your <BrandName /> app > **Identity Management** tab
2. Enable **SCIM Provisioning**, paste credentials
3. Configure attribute mappings (userName, name, active)
4. **User Groups** tab > select groups > **Activate** > **Save**

</TabItem>
<TabItem value="other" label="Other IDPs">

Any SCIM 2.0-compliant IDP works. Use these settings:

| Setting | Value |
|---|---|
| **SCIM Base URL** | From Organization Settings > Security |
| **Authentication** | Bearer Token (HTTP Header) |
| **User Schema** | `urn:ietf:params:scim:schemas:core:2.0:User` |
| **Group Schema** | `urn:ietf:params:scim:schemas:core:2.0:Group` |
| **LambdaTest User Extension** | `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User` |
| **LambdaTest Group Extension** | `urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:Group` |

</TabItem>
</Tabs>

<br />

---

## User Provisioning {#user-provisioning}

### How It Works

| Scenario | What happens |
|---|---|
| New user (email doesn't exist) | Account created and added to your org |
| Existing user (same org) | Attributes (role, active) updated |
| Existing user (different org) | **Not** provisioned — invite via team invite first |

### Schema & Attributes

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
    "OrganizationRole": "User"
  }
}
```

| Attribute | Required | Notes |
|---|---|---|
| `userName` | Yes | Must be a valid email. **Cannot be changed after creation.** |
| `active` | Yes | `true` = enabled, `false` = deactivated |
| `name` | Yes | `givenName`, `familyName`, `formatted` |
| `OrganizationRole` | No | `Admin`, `User` (default), or `Guest` |

> **What can be updated:** Only `OrganizationRole` and `active` can be updated via SCIM. `userName` is immutable after creation. `name` can only be changed from <BrandName /> Account Settings.

### User API Operations

<Tabs className="docs__val">
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
    "OrganizationRole": "User"
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
    "OrganizationRole": "User"
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

**Response:** `200 OK` — returns the full updated user object.

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="update-patch" label="Update (PATCH)">

**Request:** PATCH `https://auth.lambdatest.com/api/scim/Users/{id}`

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:PatchOp"],
  "Operations": [
    { "op": "Replace", "path": "active", "value": false },
    { "op": "Replace", "path": "urn:ietf:params:scim:schemas:extension:LambdaTest:2.0:User:OrganizationRole", "value": "Guest" }
  ]
}
```

**Response:** `200 OK` — returns the full updated user object.

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

**Response:** `200 OK` — returns user object with `"active": false`.

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
<TabItem value="delete-user" label="Delete">

**Request:** DELETE `https://auth.lambdatest.com/api/scim/Users/{id}`

**Response:** `204 No Content`

:::warning
DELETE only **deactivates** the account — it does not permanently delete it. For permanent deletion, the user must request it from <BrandName /> Account Settings.
:::

**Errors:** `404 Not Found` if user doesn't exist. `400 Bad Request` if user belongs to a different org.

</TabItem>
</Tabs>

<br />

---

## Group Provisioning {#group-provisioning}

### How It Works

Groups and members are stored **as soon as your IDP pushes them** — even before any mapping is configured. Mapping only controls **where** members are assigned (which team, group, or sub-org).

<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', margin: '2rem 0'}}>

  <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '16px 28px', textAlign: 'center', width: '100%', maxWidth: '500px', background: '#f9fafb'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', marginBottom: '4px'}}>Step 1 — Your IDP (automatic)</div>
    <div style={{fontSize: '15px', fontWeight: 600, color: '#111827'}}>Groups & members pushed via SCIM</div>
  </div>

  <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↓</div>

  <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '16px 28px', textAlign: 'center', width: '100%', maxWidth: '500px', background: '#f9fafb'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', marginBottom: '4px'}}>Step 2 — LambdaTest (automatic)</div>
    <div style={{fontSize: '15px', fontWeight: 600, color: '#111827'}}>Group stored & roles applied to members</div>
    <div style={{fontSize: '12px', color: '#6b7280', marginTop: '4px'}}>Members get roles immediately, even without mapping</div>
  </div>

  <div style={{fontSize: '22px', lineHeight: '1', color: '#9ca3af', userSelect: 'none'}}>↓</div>

  <div style={{border: '1px solid #d1d5db', borderRadius: '10px', padding: '16px 28px', textAlign: 'center', width: '100%', maxWidth: '500px', background: '#f9fafb'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280', marginBottom: '4px'}}>Step 3 — Admin (manual) or Mapping Rules (automatic)</div>
    <div style={{fontSize: '15px', fontWeight: 600, color: '#111827'}}>Group mapped to a LambdaTest entity</div>
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

### Enabling & Disabling

:::note
Group provisioning is not enabled by default. Reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email [support@testmuai.com](mailto:support@testmuai.com) to get it activated for your organization.
:::

Once activated, you can control it from **Settings** > **Organization Settings** > **Security** > **SCIM Group Provisioning**.

<!-- <img loading="lazy" src={require('../assets/images/lambdatest-scim/group-provisioning-toggle.png').default} alt="SCIM Group Provisioning toggle" width="404" height="206" className="doc_img img_center"/><br/> -->

> **When toggled OFF:** New IDP group operations (create/update/delete) are rejected with `403`. Existing groups, mappings, and assignments are preserved — nothing is deleted. Toggle back ON to resume syncing.

### Group Schema & Attributes

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

| Attribute | Required | Notes |
|---|---|---|
| `displayName` | Yes | Must be **unique** within your org |
| `members` | No | Array of `{ "value": "<user_scim_id>" }` |
| `LambdatestRoles` | No | `Admin`, `User`, or `Guest` — applied to all members |

### Mapping Groups to LambdaTest Entities

Once a group is pushed, it needs to be **mapped** to tell <BrandName /> what to do with its members. A single group can have **multiple mappings** — e.g., map `eng-backend` to both a Team and a Concurrency Group simultaneously.

| Target | Type | On member removal | Auto-create | Conflicts |
|---|---|---|---|---|
| **Team** | `Additive` — user can be in multiple teams | Removed from team (unless another SCIM group maps them there) | Yes | No |
| **Concurrency Group** | `Exclusive` — user can only belong to one | Moved back to org default group | Yes | Yes — if same user maps to two different groups |
| **Sub-Organization** | `Exclusive` — user can only belong to one | Moved back to root org | No (requires manual setup) | Yes — if same user maps to two different sub-orgs |

> **Mapping statuses:** `Pending` → `Approved` / `Auto-Approved` (members synced) or `Rejected` (no sync)

**Entity rename sync:** When a SCIM group is renamed in your IDP, the mapped <BrandName /> entity (team or concurrency group) is **automatically renamed to match**. This keeps names consistent between your IDP and <BrandName /> without manual intervention. Sub-organizations are not renamed (they have independent naming).

**Deleted target handling:** If an admin deletes a team, concurrency group, or sub-org that has an active SCIM mapping, the mapping is flagged with `target_deleted: true` and reverts to **Pending** status on the next sync. The admin needs to re-approve the mapping with a new target.

**To map manually:** Go to **SCIM Group Provisioning** dashboard > click a Pending group > select target type and entity > **Approve**.

<!-- <img loading="lazy" src={require('../assets/images/lambdatest-scim/group-approve-mapping.png').default} alt="Approving a SCIM group mapping" width="404" height="206" className="doc_img img_center"/><br/> -->

### Mapping Rules (Automatic Mapping)

Instead of mapping each group manually, create rules that auto-match groups by name.

<Tabs className="docs__val">
<TabItem value="prefix" label="Prefix" default>

Matches group names **starting with** a pattern (case-insensitive).

`eng-` matches `eng-backend`, `eng-frontend`, `ENG-DevOps`

</TabItem>
<TabItem value="regex" label="Regex">

Matches group names against a **regular expression**.

`^qa-.*-team$` matches `qa-mobile-team`, `qa-web-team`

</TabItem>
<TabItem value="all" label="Match All">

Matches **every group**. Use as a low-priority catch-all fallback.

</TabItem>
</Tabs>

**Each rule has an auto-approve toggle:**
- **ON** → finds (or creates) the target entity by name → mapping approved → members synced immediately.
- **OFF** → creates a Pending mapping → admin approves manually.

**Rules are evaluated by priority** (highest first). First match wins.

| Priority | Rule | Target | Auto-Approve | Example match |
|---|---|---|---|---|
| 3 | Prefix: `eng-` | Team | ON | `eng-backend` → auto-approved Team |
| 2 | Prefix: `qa-` | Team | ON | `qa-mobile` → auto-approved Team |
| 1 | Match All | Concurrency Group | OFF | `design-ops` → Pending |

**To create a rule:**

1. Go to **SCIM Group Provisioning** dashboard
2. Click **Add Mapping Rule**
3. Select a **rule type** (Prefix, Regex, or Match All)
4. Enter the **pattern** to match group names against
5. Choose the **target type** (Team, Concurrency Group, or Sub-Organization)
6. Toggle **auto-approve** ON if you want matched groups to be approved automatically
7. Click **Save**


### Role Assignment {#roles}

Roles can be set per-user (User extension `OrganizationRole`) or per-group (Group extension `LambdatestRoles`). Roles work **independently of mappings** — even unmapped groups apply their roles to members immediately.

When a user is in **multiple groups with different roles**, the highest-priority role wins: **Admin > User > Guest**

| Group | Role |
|---|---|
| `eng-team` | User |
| `org-admins` | Admin |
| **Effective role** | **Admin** (highest wins) |

**Role changes are applied in both directions** — roles can be upgraded *and* downgraded:

| Scenario | What happens |
|---|---|
| User added to a group with `Admin` role | Role upgraded to Admin (if currently lower) |
| User removed from the `Admin` group | Role **downgraded** to the next highest across remaining groups (e.g., User) |
| All groups removed, or no roles set | Role defaults to **User** |
| Group's `LambdatestRoles` changed from `Admin` to `Guest` | All members' roles recomputed — may downgrade |

:::note
Roles are recomputed across **all** of a user's SCIM groups whenever any group membership or role changes. The effective role is always the highest across all current group memberships.
:::

### One Group per Entity

Each <BrandName /> entity (team, concurrency group, or sub-org) can only be mapped from **one SCIM group at a time**. If you try to create a second mapping to the same entity, the request is rejected. This ensures a clear ownership model — one IDP group controls one <BrandName /> entity.

### Conflicts {#conflicts}

Conflicts happen when a user belongs to multiple SCIM groups whose mappings compete for the **same exclusive slot**. There are three types:

| Conflict Type | When it happens | Example |
|---|---|---|
| **Exclusive Group** | User mapped to two different **concurrency groups** | Group A → "QA Pool", Group B → "Dev Pool" — user can only be in one |
| **Exclusive Sub-Org** | User mapped to two different **sub-organizations** | Group X → "US Team", Group Y → "EU Team" — user can only be in one |
| **Cross-Type Exclusive** | User mapped to a **sub-org** from one group and a **concurrency group or team** from another | Group A → Sub-Org "US Team", Group B → Concurrency Group "Dev Pool" — sub-org assignment is exclusive with other entity types |

:::info What happens during a conflict
The user **keeps their current assignment** until an admin resolves the conflict. No automatic changes are made — SCIM does not silently override existing assignments when there's ambiguity.
:::

**To resolve:**

1. Go to **SCIM Group Provisioning** dashboard > **Conflicts** tab
2. Each conflict card shows the **Current** group (the one the user is already assigned to) and the **Incoming** group (the one trying to claim the user)
3. Click **Keep Current** to keep the existing assignment, or **Use Incoming** to switch the user to the new group's target
4. <BrandName /> remembers this decision — if the IDP pushes the same combination again, no new conflict is created

<!-- <img loading="lazy" src={require('../assets/images/lambdatest-scim/conflict-resolution.png').default} alt="Resolving a SCIM group conflict" width="404" height="206" className="doc_img img_center"/><br/> -->

:::tip To avoid conflicts
- Don't put the same user in two SCIM groups that map to **different concurrency groups**.
- Don't put the same user in two SCIM groups that map to **different sub-organizations**.
- Don't put the same user in a sub-org group **and** a concurrency group / team group — sub-orgs are exclusive with other entity types.
- Prefer **teams** when users need to be in multiple groups — teams never create conflicts.
:::

### Group API Operations

<Tabs className="docs__val">
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

**PUT** (full replace) to `https://auth.lambdatest.com/api/scim/Groups/{id}` — replaces entire membership list. Members removed from the list are unassigned from all mapped entities.

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

**Response:** `200 OK` — returns the updated group object with new membership and `meta.lastModified` timestamp.

**Errors:** `404 Not Found` if group doesn't exist. `409 Conflict` if renamed to an existing `displayName`.

</TabItem>
<TabItem value="delete-group" label="Delete">

**Request:** DELETE `https://auth.lambdatest.com/api/scim/Groups/{id}`

**Response:** `204 No Content`

**On delete:** group is soft-deleted, roles recomputed, members safely unassigned from all mapped entities (checking other group memberships first), mappings rejected, related conflicts auto-resolved.

**Errors:** `404 Not Found` if group doesn't exist.

</TabItem>
</Tabs>

<br />

---

## Side Effects & Behaviors {#side-effects}

Quick reference for what happens during common operations. These are handled automatically — no action required unless noted.

### Changes from Your IDP

| Action | What happens | Admin action needed? |
|---|---|---|
| **Group renamed** | Name updated. Mapped team/concurrency group **renamed to match**. Mapping rules re-evaluated — if a different rule matches, mapping reverts to **Pending**. Members unaffected. | Only if mapping status changed to Pending |
| **Group deleted** | Soft-deleted. Roles recomputed (may downgrade). Members safely unassigned (checks other groups first). Mappings rejected. Conflicts auto-resolved. | No |
| **Member added to group** | Added to all approved-mapped entities. Role recomputed. If assignment creates a conflict (exclusive entity), conflict raised for admin resolution. | Only if conflict created |
| **Member removed from group** | Unassigned from mapped entities — but only if no other SCIM group maps them to the same target. Role recomputed (may downgrade). If another group was waiting (lost a conflict), it may now be applied. | Only if conflict created |
| **Previously deleted group re-pushed** | Group restored. Members must be re-pushed. Mapping rules re-evaluated. | Depends on rules |
| **Roles changed on group** | All members' roles recomputed immediately (may upgrade or downgrade). | No |

### Changes from LambdaTest Admin

| Action | What happens | Important |
|---|---|---|
| **Team / group / sub-org renamed** | **Nothing breaks.** Mappings use internal IDs, not names. However, the next IDP group rename will overwrite the entity name to match the IDP group name. | Entity names follow the IDP |
| **Mapped entity deleted** | Mapping flagged as `target_deleted` and reverts to Pending on next sync. | Re-approve with a new target |
| **Member manually removed from team** | Removal is immediate but **temporary** — next IDP sync re-adds them. | To permanently remove, do it **in your IDP** |
| **Manual assignment to concurrency group / sub-org** | SCIM overrides non-SCIM assignments for exclusive entities on next sync. | Avoid conflicting manual + SCIM assignments |
| **Manual role change for a SCIM-managed user** | Role may be overwritten on next IDP sync if the user's SCIM groups have roles configured. | Manage roles via IDP groups instead |

<br />

---

## Troubleshooting {#troubleshooting}

### API Errors

| Error | Cause | Fix |
|---|---|---|
| `401 Unauthorized` | Invalid or expired Bearer Token | Regenerate in Organization Settings > Security |
| `403 Forbidden` | Group Provisioning is disabled | Enable the toggle in Security settings |
| `404 Not Found` | ID doesn't exist or belongs to a different org | Verify via a List call |
| `409 Conflict` | Group with same `displayName` already exists | Rename or delete the existing group |
| `400 Bad Request` | User exists in a different organization | Invite them via team invite first |

### Common Issues

| Issue | Solution |
|---|---|
| Members not appearing in teams or sub-orgs | Group mapping is still **Pending**. Approve it in the dashboard or create an auto-approve mapping rule. |
| User has an unexpected role | Roles follow highest-priority-wins (Admin > User > Guest). Check **all** SCIM group memberships — they may inherit Admin from another group. |
| User's role didn't change after updating the group | Roles are recomputed across all groups. If another group still has the higher role, the effective role won't change. Remove the role from **all** groups. |
| User keeps getting re-added after manual removal | SCIM is the source of truth. Remove the user from the group **in your IDP** instead. |
| Group mapping reverted to Pending | Group was renamed (rules re-evaluated) or the target entity was deleted. Re-approve with a valid target. |
| Auto-approve didn't create my sub-organization | Sub-orgs are **never** auto-created (billing/setup required). Create the sub-org first, then approve the mapping manually. |
| Conflict shows "Unknown conflict type" or empty type | The conflict was created before cross-type support was added. Ask support to run a data migration. |
| Can't map two SCIM groups to the same team | Each entity can only be mapped from one group. Use a single SCIM group, or merge the groups in your IDP. |
| Members are in the SCIM group but not in the sub-org | Check for **conflicts** in the dashboard. The user may belong to another group with a competing exclusive mapping. |
| IDP roles not showing in the groups list | Ensure the group has `LambdatestRoles` set in the IDP extension. Roles appear in the group detail and list views. |

### FAQ

| Question | Answer |
|---|---|
| Can a group be mapped to multiple targets? | Yes. A single group can map to a Team **and** a Concurrency Group simultaneously. Each mapping syncs independently. |
| Can two groups map to the same entity? | No. Each entity can only be owned by one SCIM group. This prevents conflicting membership lists. |
| Can I disable group provisioning without affecting users? | Yes. The toggle only blocks new IDP group operations. Existing groups, mappings, and assignments are preserved. |
| Can I restore a deleted group? | Push a group with the same `displayName` from your IDP — the soft-deleted record is restored. Members must be re-pushed. |
| Can roles be downgraded? | Yes. When a user is removed from a group with a higher role, their effective role is recomputed across remaining groups and may decrease. |
| What if a user is in no SCIM groups? | Their role defaults to **User**. No entity assignments are made. |
| Does the group search in the dashboard support partial matching? | Yes. Search is **case-insensitive** and matches anywhere in the group name (not just prefix). Leading/trailing spaces are trimmed. |
| What happens to a conflict if I delete one of the conflicting groups? | The conflict is **auto-resolved** in favor of the remaining group. No admin action needed. |
| Can I have both a mapping rule and a manual mapping? | Mapping rules only apply when a group is first created or renamed. Once a mapping exists (manual or auto), rules don't overwrite it. |
| What's the difference between Approved and Auto-Approved? | Both sync members identically. **Auto-Approved** means a mapping rule approved it automatically. **Approved** means an admin approved it manually. |

---

> That's all you need to know about SCIM Provisioning with <BrandName />. In case you have any questions please feel free to reach out to us via the <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us over [support@testmuai.com](mailto:support@testmuai.com).


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
        SCIM Provisioning
      </span>
    </li>
  </ul>
</nav>
