---
id: rbac-roles-and-permissions
title: Roles and Permissions (RBAC)
hide_title: false
sidebar_label: Roles and Permissions (RBAC)
description: Learn how to use Custom Roles and Permissions (RBAC) on LambdaTest to control product-level access and granular permissions across your organization.
keywords:
  - rbac
  - roles and permissions
  - custom roles
  - access control
  - lambdatest rbac
  - product access
  - granular permissions
url: https://www.lambdatest.com/support/docs/rbac-roles-and-permissions/
site_name: LambdaTest
slug: rbac-roles-and-permissions/
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
          "name": "Roles and Permissions (RBAC)",
          "item": `${BRAND_URL}/support/docs/rbac-roles-and-permissions/`
        }]
      })
    }}
></script>

<BrandName /> **Roles and Permissions (RBAC)** allows organization admins to define fine-grained access control across products, projects, and features. With Custom Roles and Permissions, you can control which team members have access to specific products, what actions they can perform, and ensure that each user only sees what is relevant to their role.

This is especially useful for large enterprises with multiple teams where different groups need access to different parts of the platform, for example, one team working exclusively with KaneAI and Test Manager, while another only needs access to SmartUI and Automation.

:::info
Custom Roles and Permissions is an enterprise-level feature. Please contact your account manager or reach out to [support@lambdatest.com](mailto:support@lambdatest.com) to get it enabled for your organization.
:::

## Prerequisites

- You must be an **Admin** of your <BrandName /> organization.
- Ensure your organization has the RBAC feature enabled by the <BrandName /> team.
- Familiarity with [User Management](/support/docs/user-management/) and [Team Management](/support/docs/team-management/) is recommended.

## Understanding Default Roles

Navigate to **Organization Settings** > **Custom Roles & Permissions** from the left sidebar. You will see the **Custom Roles & Permissions** page displaying all existing roles in your organization.

<img loading="lazy" src={require('../assets/images/rbac-roles-and-permissions/roles-and-permissions-page.png').default} alt="Roles and Permissions page showing default roles" className="doc_img"/>

<BrandName /> provides three default roles out of the box:

| Role | Description | Product Access | Entity Permissions |
|------|-------------|----------------|-------------------|
| **Admin** | Full access to all products and entities with complete permissions. | All Products (Accessibility, Insights, KaneAI, Automation, SmartUI, HyperExecute, Test Manager, and more) | List, Read, Create, Update, Delete, Execute on all entities |
| **User** | Standard access with full permissions on most products and entities. | All Products (Test Manager, KaneAI, Real Time, Automation, Accessibility, Web Scanner, and more) | List, Read, Create, Update, Delete, Execute on all entities |
| **Guest** | Read-only access across products with limited entity permissions. | All Products (SmartUI, HyperExecute, Test Manager, More Tools, KaneAI, Real Time, Real Device, and more) | List, Read only on entities |

:::tip
Roles are auto-applied at login. By default, the **User** role has all permissions enabled. Permission changes take effect the next time a user logs in.
:::

## Create a Custom Role

**Step 1:** On the **Custom Roles & Permissions** page, click the **Create New Role** button in the top-right corner.

<img loading="lazy" src={require('../assets/images/rbac-roles-and-permissions/roles-and-permissions-page.png').default} alt="Roles and Permissions page showing default roles and Create New Role button" className="doc_img"/>

**Step 2:** In the **Create New Role** dialog, enter a **Role Name** that clearly describes the role's purpose (e.g., "SmartUI Tester", "KaneAI Developer", "QA Lead").

**Step 3:** You can configure product-level access or entity-level access based on your requirements.

<img loading="lazy" src={require('../assets/images/rbac-roles-and-permissions/create-new-role.png').default} alt="Create New Role dialog with entity dropdown showing Select Specific, Product Access, and Granular Control sections" className="doc_img"/>

**Step 4:** Click **Create** to complete the process.

## Product Level Access

Product-level access lets you control which <BrandName /> products a user can see and interact with. This is the most impactful RBAC setting as it determines what shows up on a user's dashboard, sidebar, and which URLs they can visit.

When creating or editing a role, add **List of Products** as an entity and select only the products this role should have access to, such as KaneAI, HyperExecute, SmartUI, and more.

### What happens when a product is restricted?

- The product is **hidden from the sidebar** and **dashboard** for the user.
- If a user tries to directly access a restricted product URL, they are redirected to a **403 page**.


### When to use Product Level Access

- **Team isolation**:Your organization has separate QA, development, and design teams. The QA team needs KaneAI, Test Manager, and HyperExecute, while the design team only needs SmartUI for visual regression reviews.
- **Security & compliance**:Restrict sensitive products like Insights or Settings to admins and leads only, ensuring regular testers don't have access to org-level analytics or configurations.
- **Onboarding new members**:New team members can be given a limited role with access to only Real Time and Automation while they ramp up, then gradually expanded to include KaneAI and HyperExecute.
- **Client or vendor access**:External contractors working on a specific product area (e.g., mobile testing) can be restricted to only Real Device and Automation without exposing the rest of the platform.

## Entity Level Access

Entity-level access allows you to configure granular permissions for specific items and product areas within the platform.

### Select Specific

Assign permissions to specific items within the platform:

| Entity | Description |
|--------|-------------|
| **Projects** | Grant access to specific Test Manager projects. |
| **Workflows** | Grant access to specific workflows. |
| **Test Runs** | Grant access to specific test runs. |

### Granular Control

Configure fine-grained permissions within specific product areas:

| Entity | Description |
|--------|-------------|
| **HyperExecute** | Control permissions for jobs, tasks, stages, and configurations within HyperExecute. |
| **KaneAI and Test Manager** | Control permissions for test cases, test plans, builds, milestones, and other Test Manager entities. |
| **Automation** | Control permissions for builds, sessions, and automation-related resources. |
| **Analytics** | Control permissions for dashboards, widgets, and reporting features. |
| **Organization** | Control permissions for organization-level settings, user management, and team management. |

Each granular entity expands into sub-entities with specific permission levels:

- **List**:View items in a list.
- **Read**:View item details.
- **Create**:Create new items.
- **Update**:Modify existing items.
- **Delete**:Remove items.
- **Execute**:Run or trigger items (e.g., execute test runs, trigger jobs).


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
        Roles and Permissions (RBAC)
      </span>
    </li>
  </ul>
</nav>
