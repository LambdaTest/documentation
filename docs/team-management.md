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

## Access Rules for Builds, Tests & Test Details

This section outlines a series of test cases (TC) designed to verify test visibility within the system under various user role and team configurations:

- **Admin Role:** Has full access to all builds, tests, and test details.
- **User Role:** Limited access based on team membership.

### Scenario 1: No Teams Created

- **Case 1:** An Admin user can see all builds, tests, and test details.
- **Case 2:** A User cannot see any builds, tests, or test details, regardless of the Admin running a test.

### Scenario 2: Team Created with Admin User Only

- **Case 3:** Test run by the Admin user is visible to both the Admin and User.
- **Case 4:** Test run by the User is not visible to anyone.

### Scenario 3: Team Created with User Only

- **Case 5:** Test run by the User is visible to both the Admin and User.
- **Case 6:** Test run by the Admin is not visible to the User.

### Scenario 4: Teams Created, Separate Teams for Each User

- **Case 7:** Test run by the User is not visible to the Admin.
- **Case 8:** Test run by the Admin is not visible to the User.

### Scenario 5: Teams Created, Same Team for Both Users

- **Case 9:** Test run by one user is visible to the other user.

### Scenario 6: All Teams Deleted

- **Case 10:** All previously run tests are visible to both users, regardless of their prior team assignments.