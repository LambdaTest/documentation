---
id: team-management
title: Team Management
hide_title: false
sidebar_label: Team Management
description: This documentation will help you create and manage teams on TestMu AI.
keywords:
- teams management testmu ai
- manage teams
url: https://www.testmuai.com/support/docs/team-management/
site_name: TestMu AI
slug: team-management/
canonical: https://www.testmu.ai/support/docs/team-management/
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

The <BrandName /> Team Management empowers organizations to collaborate effectively on their Web and App Automation testing by creating isolated testing environments.

This functionality addresses the need for:

- **Organized Test Management:** Group users and corresponding tests based on specific projects, teams, or departments.
- **Improved Visibility and Control:** Admins can control user access to specific test data, preventing unauthorized viewing of confidential tests.
- **Enhanced Team Collaboration:** Facilitate communication and knowledge sharing within designated teams.

## Create an Organization

- Go to the **Settings** page > select **Organization Settings** section.
- Click on the **Teams** tab and edit your **Organization Name**.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/1.mp4').default} type="video/mp4" />
</video>

## Create your First Team

- Click on the **Create Team** button in the Teams page.
- Enter the name of your team.
:::info
You cannot leave the Team name as empty. It is mandatory to enter the name of your team.
:::
- Select all the **users** you want to add to your team and click on **Finish** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/2.mp4').default} type="video/mp4" />
</video>

## Edit your Team Settings

- Go to your **Teams** section.
- Click on the **three dots (...)** > **Edit** button.
- Edit your team setting by updating your teams name or by adding/removing the users from the team.
- Click on the **Finish** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/3.mp4').default} type="video/mp4" />
</video>

## Delete your Team

- Go to your **Teams** section.
- Click on the **three dots (...)** > **Delete** button.

Your created team will be permanently deleted.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/team-management/4.mp4').default} type="video/mp4" />
</video>

## Access Rules for Builds, Tests, and Test Details

This section outlines a series of cases designed to verify test visibility within the system.

:::info
- All the user roles (admin, user, guest) are independent of the tests visibility in teams.
:::

The following scenarios explain who can see the test results and under what circumstances:

> - To restrict any user from accessing all tests, please ensure to add that user to a team.
- A user can be a part of multiple teams.

### Scenario 1: No Teams are Created
In this case, any of the user can see all test results.

### Scenario 2: Teams are Created
If you create a team, only members of that team and users who are not part of any team can see the test results for that team. Additionally, team members can view their own team's tests as well as the tests run by users who are not associated with any team.

- #### Users are in Different Teams
  Suppose if you have created two teams, each having five users, then neither can see each other's team's test results.

- #### Users are in the Same Team
  If you have created a team, then all the users of the same team can see each other's test results.

- #### Users are not in a Team, but Teams exist
  If any of the users aren't assigned to any team, but there are teams in the organization, they can still see all test results.

### Scenario 3: Users Switches Teams
When a user is switched from one team (Team A) to another (Team B), they will no longer see test results from Team A. They will only have access to test results associated with their new team, Team B.

### Scenario 4: All Teams are Deleted
If all teams are removed, then all users can view all test results again.
