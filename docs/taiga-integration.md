---
id: taiga-integration
title: Taiga Integration with TestMu AI
hide_title: false
sidebar_label: Taiga
description: TestMu AI helps you manage your bugs in Taiga by moving them to your project in a single click. All the details you provide in TestMu AI like task list, assignee, title, and description would automatically be presented in the project on Taiga.
keywords:
  - testmu ai integrations
  - push issues to taiga
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai taiga integration
  - integrate taiga with testmu ai
  - create issue in taiga from testmu ai
  - taiga integration with testmu ai
  - create taiga issues from testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmu.ai/support/docs/taiga-integration
site_name: LambdaTest
slug: taiga-integration
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Taiga Integration",
          "item": "https://www.lambdatest.com/support/docs/taiga-integration/"
        }]
      })
    }}
></script>

Taiga is an open-source project management platform that supports agile methodologies like Scrum and Kanban. Integrating Taiga with LambdaTest enables you to log bugs directly from your testing sessions into Taiga, streamlining your workflow and enhancing team collaboration.

> Taiga Integration with LambdaTest is available for both freemium and premium plans.

## Integrate Taiga from your LambdaTest Account

**Step 1:** Log in to your [LambdaTest](https://accounts.lambdatest.com/) account. Ensure you have Admin or User level access to manage integrations.

**Step 2:** Navigate to `Settings` -> `Integrations` -> `Bug Tracker`.

**Step 3:** Click on the **Connect** button of the Taiga block.

**Step 4:** In the integration setup form, select your Taiga type using the radio buttons:

- **Cloud-based Taiga:** Select this option if you are using the cloud-hosted version of Taiga. The `Taiga Hosted URL` field will not be shown.
- **On-premise/Self-hosted Taiga:** Select this option if you are using a self-hosted Taiga instance. You will need to provide the URL of your Taiga instance (e.g., `https://your-taiga-instance.com`).

After selecting the appropriate option, enter the following details:

- **Taiga Username:** Your Taiga account username.
- **Taiga Password:** Your Taiga account password.

:::info
We do not store your password. It is only used for initial authentication during the integration setup.
:::

- **Taiga Hosted URL:** This field will only appear if you select the **On-premise/Self-hosted Taiga** option.

After filling in the details, click on the **Install** button to establish the integration.

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/videos/integration/bug-tracking/taiga/install.mp4').default} type="video/mp4" />
</video>

## Lodge your First Bug

**Step 1:** Ensure you have an active project set up in your Taiga account.

**Step 2:** While working on LambdaTest, if you encounter a bug, click on the **Mark as Bug** button available on difderent products.

**Step 3:** In the bug logging form, provide the necessary details such as:

- **Subject:** A concise summary of the bug.
- **Description:** Detailed information about the issue.
- **Project:** Select the Taiga project where the bug should be logged.
- **Assignee:** The user in Taiga to whom ticket should be assigned.
- **Type:** Select if its Issue or a Task

**Step 4:** Click on the **Create Issue** button. The bug will be logged into your selected Taiga project, and you can view it directly from your Taiga dashboard.

<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/videos/integration/bug-tracking/taiga/issue-creation.mp4').default} type="video/mp4" />
</video>

## Resync Taiga Integration

To ensure that the latest projects and users from your Taiga system are available in LambdaTest, you can resync the integration.

**Step 1:** Navigate to `Settings` -> `Integrations` in your LambdaTest account.

**Step 2:** Locate the Taiga integration and click on the **Resync** button.

- This will fetch the latest projects and users from your Taiga system.

<img loading="lazy" src={require('../assets/images/integrations/taiga/1.png').default} alt="1" className="doc_img"/>

- If your authentication token has expired, you will be prompted to re-enter your Taiga password to authenticate again.
<video class="right-side" width="100%" controls id="vid">
<source src={require('../assets/videos/integration/bug-tracking/taiga/resync.mp4').default} type="video/mp4" />
</video>

Once resynced, the latest data will be available for use.

## Uninstall Taiga Integration

**Step 1:** Navigate to `Settings` -> `Integrations` in your LambdaTest account.

**Step 2:** Locate the Taiga integration and click on the **Remove** button  to uninstall the integration.

> That was all you need to know for LambdaTest + Taiga Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock.
