---
id: team-management
title: Team Management
hide_title: false
sidebar_label: Team Management
description: This documentation will help you create and manage teams on LambdaTest.
keywords:
- teams management lambdatest
- manage teams
url: https://www.lambdatest.com/support/docs/team-management/
site_name: LambdaTest
slug: team-management/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Settings and Security",
          "item": "https://www.lambdatest.com/support/docs/team-management/"
        }]
      })
    }}
></script>

The LambdaTest Team Management empowers organizations to collaborate effectively on their Web and App Automation testing by creating isolated testing environments.

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

This section outlines a series of test cases (TC) designed to verify test visibility within the system under various user roles and team configurations:

- **Admin Role:** Has full access to all builds, tests, and test details.
- **User Role:** Limited access based on team membership.
- **Guest Role:** The scope of a "**Guest Role**" user is identical to that of a "**User Role**" user.

The following scenarios explain who can see the test results and under what circumstances:

### Scenario 1: No Teams Created

In this case, users having any of the **Admin Role** and **User Role** access can see all test results, regardless of any team affiliation.

### Scenario 2: Teams Created with:

#### Only the "Admin Role" user is a part of the Team

In this case, if you have **Admin Role** access, then only you can see the test results for that particular team. Anyone with **User Role** access cannot see any test results.

#### Only the "User Role" user is a part of the Team

In this case, if you have **User Role** access, then only you can see the test results for that particular team. Anyone with the **Admin Role** access cannot see any test results.

### Scenario 3: Teams are Created, Users in Different Teams

If both the **Admin Role** and **User Role** users are on separate teams, neither can see each other's team's test results.

### Scenario 4: Teams are Created, Users in the Same Team

When both the **Admin Role** and **User Role** users are part of the same team, they can both see all test results for that team.

### Scenario 5: All Teams Deleted
If all teams are deleted, both the **Admin Role** and **User Role** users can see all test results again, similar to Scenario 1.

### Scenario 6: Users/Admins Not in a Team, But Teams Exist
If any of the users with **Admin Role** and **User Role** access aren't assigned to any team, but there are teams in the organization, they can still see all test results.

### Scenario 7: User/Admin Switches Teams
When a user with **Admin Role** or **User Role** access is switched from one team (Team A) to another (Team B), they will no longer see test results from Team A. They will only have access to test results associated with their new team, Team B.