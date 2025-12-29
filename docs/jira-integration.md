---
id: jira-integration
title: Integrate TestMu AI with Jira | TestMu AI
hide_title: true
sidebar_label: Jira
description: TestMu AI provides integrations with JIRA to help you log bugs directly from the middle of your test session on TestMu AI to JIRA platform.
keywords:
  - TestMu AI integrations
  - Push issues to Jira
  - TestMu AI Jira integration
image: /assets/images/og-images/default-user-image.png
url: https://www.testmu.ai/support/docs/jira-integration
site_name: LambdaTest
slug: jira-integration
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
          "name": "Jira Integration",
          "item": "https://www.lambdatest.com/support/docs/jira-integration/"
        }]
      })
    }}
></script>

# Jira Integration

<!-- > Developed by Atlassian, Jira is one of the most popular enterprise project management tool. Equipped with a highly usable dashboard, task management features, and project analytics. It is used by development as well as testing teams to track user stories & progress on every sprint. Along with project management, Jira also aids in effective bug tracking by providing a space where you can log bugs and prioritized them according to your release bandwidth. -->

The LambdaTest Jira integration helps you create issues in Jira directly from the LambdaTest platform itself. With simple one-click integration, you can push annotated issues to the project of your choice, assign them to the required teammate, and attach screenshots. You can do all that while in the middle of a test session in the LambdaTest platform. The fields populated by you when marking as a bug through LambdaTest are displayed as information on the Jira ticket for a testing instance.

**Jira Integration with LambdaTest, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

<img loading="lazy" src={require('../assets/images/jira-integration/0.png').default} alt="jira"  className="doc_img" width="371" height="441"/>

## How to Establish Integration with Jira from Your LambdaTest Account?

**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

**Step 2:** Select 'Integration' from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on 'ADD' under the block that says 'Jira'.

<img loading="lazy" src={require('../assets/images/jira-integration/1.png').default} alt="jira"  className="doc_img" width="1346" height="610"/>

**Step 4:** Once you click on **Connect**, you will be redirected to the below screen. Where You have to select Instance type. If you have a **Self Hosted Jira** instance, you can prefer this document [Self-hosted](/support/docs/jira-self-hosted-integration/).

<img loading="lazy" src={require('../assets/images/jira-integration/2.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 5:** Click on the Install button to be redirected to the Jira dashboard.

**Step 6:** Click on Accept.

<img loading="lazy" src={require('../assets/images/jira-integration/3.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 7:** Once you click on Accept, you will be redirected to the screen below, where you have to select your site and click on the  Select Site and Proceed button.

<img loading="lazy" src={require('../assets/images/jira-integration/4.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 8:** When you click on the **Select and Proceed button**, you will be redirected to the below screen, where you have to select projects that you want to integrate and click on the **Integrate Projects and Install button.**

<img loading="lazy" src={require('../assets/images/jira-integration/5.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

That's it! Go to Integrations again, and you will be able to notice a **green tick** indicating that Jira is successfully **installed**. You are all set to experience **one-click bug logging** to share your issues directly from your LambdaTest account with our teammates on the Jira project.

<img loading="lazy" src={require('../assets/images/jira-integration/6.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>


<!-- ## How To Share Multiple Screenshots In Jira While Bug Logging?
***
After capturing multiple screenshots for issues, you can easily share them directly to your Jira dashboard.

**Step 1**: Once you’re in the VM, click on the **Gallery icon** from left in-built editor tools.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-12.webp').default} alt="jira-integration"  className="doc_img" width="1352" height="599"/>

**Step 2**: Select the captured screenshots that you want to share and click on **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-15.webp').default} alt="jira-integration"  className="doc_img" width="1354" height="598"/>

**Step 3**: A Jira specific form would pop up. Fill the form fields as per your requirement and click on **Create Issue**, your bug will be marked successfully.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-13.webp').default} alt="jira-integration"  className="doc_img" width="1352" height="625"/>

**Step 4**: Visit your Jira dashboard. You’ll find your marked issues right away.

<img loading="lazy" src={require('../assets/images/jira-integration/Screenshot-96.webp').default} alt="jira-integration"  className="doc_img" width="1338" height="592"/> -->

## How To Log Your First Bug Through Jira Integration?

**Step 1:** Go for any of the tests from the left navigation menu. For the demo, we will be taking the **"Real Time Testing"** option.

**Step 2:** Present the URL of the web app you need to test in the dialog box. After that, select any configuration for the browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/jira-integration/7.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the Bug icon from the left panel for capturing a screenshot of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/jira-integration/8.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an in-built image editor. Once you are done highlighting the bug, click on the **bug icon** which is beside Jira.

<img loading="lazy" src={require('../assets/images/jira-integration/9.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 5:** After clicking on "**Mark as Bug**" button a Jira specific form would open up. Fill the fields as per your requirement.

- You can select which project should the ticket go under, along with the **Issue type**.
- You can set the **priority** of the bug.
- You can assign the bug to a colleague by populating the field '**Assignee**'.
- You also get to post a **description** to help relate the cause of the issue or the task in Summary section.

> Note: Only projects with work type as BUG enabled will be seen in the project dropdown. If you don't see a project in the dropdown, please add **work type as BUG** for your Jira project and resync the integration from the integrations page.

<img loading="lazy" src={require('../assets/images/jira-integration/10.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 6:** Click on "**Mark As Bug**" & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning "**Your bug has been logged successfully**" indicating that the issue has been successfully pushed to the respective workspace.

<img loading="lazy" src={require('../assets/images/jira-integration/11.png').default} alt="jira"  className="doc_img" width="1365" height="624"/>

**Step 7:** Log in to your Jira dashboard. You will be able to notice the logged issue right away! All the data you provided through Lambdatest would already be presented in it. LambdaTest automatically includes test environment details and related screenshots in the ticket as attachments.

## How To Remove Jira Integration?

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select '**Integration**' from the left navigation menu bar. This will guide you to a screen where you will 
find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on '**Remove**'. You can find the **Remove** button when you click on  ellipsis in **‘Jira’** block.

<img loading="lazy" src={require('../assets/images/jira-integration/12.png').default} alt="jira" className="doc_img" width="1365" height="624"/>

---

That was all you need to know for LambdaTest + Jira Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Jira Integration
      </span>
    </li>
  </ul>
</nav>
