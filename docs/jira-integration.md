---
id: jira-integration
title: Integrate LambdaTest with Jira | LambdaTest
hide_title: true
sidebar_label: Jira Integration
description: LambdaTest provides integrations with JIRA to help you log bugs directly from the middle of your test session on LambdaTest to JIRA platform.
keywords:
  - LambdaTest integrations
  - Push issues to Jira
  - LambdaTest Jira integration
image: /assets/images/og-images/default-user-image.png
url: https://www.lambdatest.com/support/docs/jira-integration/
site_name: LambdaTest
slug: jira-integration/
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
***

> Developed by Atlassian, Jira is one of the most popular enterprise project management tool. Equipped with a highly usable dashboard, task management features, and project analytics. It is used by development as well as testing teams to track user stories & progress on every sprint. Along with project management, Jira also aids in effective bug tracking by providing a space where you can log bugs and prioritized them according to your release bandwidth.

LambdaTest Jira integration helps you in creating issues in Jira directly from LambdaTest platform itself. With simple one-click integration you can push annotated issues to project of your choice, assign it to the required team mate, and attach screenshots. And you can do all that while in the middle of a test session in LambdaTest platform. The fields populated by you when marking as bug through LambdaTest are displayed as information on the Jira ticket for a testing instance.

**Jira Integration with LambdaTest, like all of the integrations to 3rd party applications, is available for freemium as well as premium plan.**

<img loading="lazy" src={require('../assets/images/jira-integration/jira-integration-1.webp').default} alt="jira"  className="doc_img" width="371" height="441"/>

## How To Establish Integration With Jira From Your LambdaTest Account?

* * *

**Step 1:** Login to your LambdaTest account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'ADD'** under the block that says **'Jira'**.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-1.webp').default} alt="jira"  className="doc_img" width="1346" height="610"/>

**Step 4:** Once you click on **Install**, you will be redirected to the below screen. Provide your credentials in the highlighted fields to establish integration with Jira. If you have a **Self Hosted Jira** instance, you can skip next steps and move on to **Step 8**.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-2.webp').default} alt="jira"  className="doc_img" width="1365" height="624"/>

---
* **What is my Jira host?**

  **Jira host** would be the domain name of your workspace. Log into your **Jira Dashboard** and you will find it in the **URL** on top. For Example: https://**mysite**.atlassian.net. In this example, the text highlighted in **bold** will be your specific domain name.
 
 * **What is my Jira Email?**

   In this field you need to specify the **email id** through which you sign into your **Jira account**.

* **What is an API token?**

 When two different applications interact with each other, a server-to-server communication is established. API token is needed for authenticating user identity from one server to another, by fetching user-owned resources available on the server from where the communication is initiated. API token has been a necessity for maintaining security and data integrity of any application. They are just as vital to an end user as they are to an application. API tokens are relevant if an end user logs in an application through a 2-step verification process.
 
 ---

>
**IMPORTANT**: In order to integrate JIRA with LambdaTest, you need to generate API token with an administrative access.

**Step 5:** Visit [https://id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens). Navigate to "**API tokens**" on the left & click on the button "**Create API token**" for generating the access key required to authenticate your user identification on LambdaTest server, with respect to your user-owned resources declared on Jira server. 

**NOTE:** If you are using Self Hosted Jira instance, you would not need the API keys.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-3.webp').default} alt="jira-integration"  className="doc_img" width="1366" height="628"/>

**Step 6:** Enter the label and click on '**Create**' button. Make sure to go for a label that is easy to remember, as your API token will be derived from it. Remember, API token is just as important as your own password!

<img loading="lazy" src={require('../assets/images/jira-integration/jira-4.webp').default} alt="jira-integration"  className="doc_img" width="1323" height="627"/>

**Step 7:** Once your API token is generated, copy the same by clicking on "**Copy to clipboard**". You can keep a note of this API token with you for future authentication. Although, in case you forget to do so, or you end up neglecting it due to some reason! Then there is no need to panic, as you can create a new token by defining a new label. You can also **revoke** a previously declared label, in case you feel that your API token has been placed in some wrong hands.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-5.webp').default} alt="jira-integration"  className="doc_img" width="1304" height="589"/>

**Step 8:** Paste the API token into the field provided at LambdaTest & hit the **'Next'** button. If you are using **Self hosted Jira** instance, instead of API token, you would just have to add your Personal Access Token (PAT) for Jira.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-6.webp').default} alt="jira-integration"  className="doc_img" width="1361" height="609"/>

That's it! Go to Integrations again and you will be able to notice a **green tick** indicating that Jira is successfully **installed**. You are all set to experience **one-click bug logging** to share your issues directly from your LambdaTest account to your teammates on Jira project.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-7.webp').default} alt="jira-integration"  className="doc_img" width="1337" height="613"/>

## How To Log Your First Bug Through Jira Integration?

* * *

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "**Real Time Testing**" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-8.webp').default} alt="jira-integration"  className="doc_img" width="1342" height="575"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-9.webp').default} alt="jira-integration"  className="doc_img" width="1348" height="619"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **"Mark as Bug"**.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-10.webp').default} alt="jira-integration"  className="doc_img" width="1320" height="618"/>

**Step 5:** After clicking on **"Mark as Bug"** button a Jira specific form would open up. Fill the fields as per your requirement.

* You can select which **project** should the ticket go under, along with the **Issue type**.
* You can set the **priority** of the bug.
* You can assign the bug to a colleague by populating the field '**Assignee**'.
* You also get to post a **description** to help relate the cause of the issue or the task.

>
Note: Only projects with **work type as BUG** enabled will be seen in the project dropdown. If you don't see a project in the dropdown, please add work type as BUG for your Jira project and resync the integration from the integrations page.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-11.webp').default} alt="jira-integration"  className="doc_img" width="1364" height="615"/>

**Step 6:** Click on **"Create Bug"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning "**Bug successfully marked**" indicating that the issue has been successfully pushed to the respective workspace.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-integration-13.webp').default} alt="jira-integration"  className="doc_img" width="347" height="75"/>

**Step 7:** Log in to your Jira dashboard. You will be able to notice the logged issue right away! All the data you provided through Lambdatest would already be presented in it. LambdaTest automatically includes test environment details and related screenshots in the ticket as attachments.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-integration-14.webp').default} alt="jira-integration"  className="doc_img" width="1365" height="728"/>

## How To Share Multiple Screenshots In Jira While Bug Logging?
***
After capturing multiple screenshots for issues, you can easily share them directly to your Jira dashboard.

**Step 1**: Once you’re in the VM, click on the **Gallery icon** from left in-built editor tools.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-12.webp').default} alt="jira-integration"  className="doc_img" width="1352" height="599"/>

**Step 2**: Select the captured screenshots that you want to share and click on **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-15.webp').default} alt="jira-integration"  className="doc_img" width="1354" height="598"/>

**Step 3**: A Jira specific form would pop up. Fill the form fields as per your requirement and click on **Create Issue**, your bug will be marked successfully.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-13.webp').default} alt="jira-integration"  className="doc_img" width="1352" height="625"/>

**Step 4**: Visit your Jira dashboard. You’ll find your marked issues right away.

<img loading="lazy" src={require('../assets/images/jira-integration/Screenshot-96.webp').default} alt="jira-integration"  className="doc_img" width="1338" height="592"/>

## How To Remove Jira Integration?

* * *

> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **uninstall** your current integration. Here is how you can do that.

**Step 1:** Login to your LambdaTest account.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find 3rd party applications, available to integrate with your LambdaTest account.

**Step 3:** Click on **'Remove'**. You can find the **Remove** button right under the **'Jira'** block which would be highlighted with a **green tick**.

<img loading="lazy" src={require('../assets/images/jira-integration/jira-14.webp').default} alt="jira-integration"  className="doc_img" width="1345" height="609"/>

---

That was all you need to know for LambdaTest + Jira Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

---

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