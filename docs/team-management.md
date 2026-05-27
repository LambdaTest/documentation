---
id: team-management
title: Team Management
hide_title: true
sidebar_label: Team Management
description: This documentation will help you create and manage teams on TestMu AI.
keywords:
- team management testmu ai
- manage teams
url: https://www.testmuai.com/support/docs/team-management/
site_name: TestMu AI
slug: team-management/
canonical: https://www.testmuai.com/support/docs/team-management/
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
          "name": "Settings and Security",
          "item": `${BRAND_URL}/support/docs/team-management/`
        }]
      })
    }}
></script>

# Team Management
---

<BrandName /> **Team Management** lets organizations collaborate on Web and App automation testing by creating isolated environments where users and their tests are grouped together.

:::note
This feature is available exclusively on the **Enterprise plan**. To enable it for your organization, please reach out to your account manager.
:::

This functionality addresses the need for:

- **Organized test management:** Group users and their tests by specific projects, teams, or departments.
- **Improved visibility and control:** Admins can control which users access specific test data, preventing unauthorized viewing of confidential tests.
- **Enhanced team collaboration:** Facilitate communication and knowledge sharing within designated teams.

## Set Your Organization Name
---

**Step 1:** Navigate to **Settings** and select **Organization Settings**.

**Step 2:** Open the **Teams** tab and edit your **Organization Name**.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/1.mp4').default} type="video/mp4" />
</video>

## Create Your First Team
---

**Step 1:** On the **Teams** page, click **Create Team**.

**Step 2:** Enter a name for your team.

:::info
Team name is required and cannot be empty.
:::

**Step 3:** Select the **users** you want to add to the team and click **Finish**.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/2.mp4').default} type="video/mp4" />
</video>

## Edit Your Team Settings
---

**Step 1:** Open the **Teams** section.

**Step 2:** Click the **three-dot (⋮) menu** next to the team and select **Edit**.

**Step 3:** Update the team's name, or add and remove users.

**Step 4:** Click **Finish**.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/3.mp4').default} type="video/mp4" />
</video>

## Delete Your Team
---

**Step 1:** Open the **Teams** section.

**Step 2:** Click the **three-dot (⋮) menu** next to the team and select **Delete**.

The team is permanently deleted.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/4.mp4').default} type="video/mp4" />
</video>

## Access Rules for Builds, Tests, and Test Details
---

This section explains who can see which test results based on team membership.

:::info
Test visibility within teams is independent of user roles (Admin, User, Guest).

- To restrict a user from accessing all tests, add the user to a team.
- A user can belong to multiple teams.
:::

### Scenario 1: No Teams Exist

All users can see all test results.

### Scenario 2: Teams Exist

Only members of a team can see that team's test results. Users who are not assigned to any team can see test results from all users who are also not in a team — and team members can additionally see those unassigned users' tests.

#### Users in Different Teams

If two teams each have five users, neither team can see the other's test results.

#### Users in the Same Team

All users in the same team can see one another's test results.

#### Users Not in Any Team (When Teams Exist)

Users who are not assigned to any team can still see all test results.

### Scenario 3: A User Switches Teams

When a user is moved from one team (Team A) to another (Team B), they lose access to Team A's test results and gain access to Team B's test results.

### Scenario 4: All Teams Are Deleted

If all teams are removed, every user can view all test results again.

> If you have any questions, please reach out via our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or email us at [support@testmuai.com](mailto:support@testmuai.com).
