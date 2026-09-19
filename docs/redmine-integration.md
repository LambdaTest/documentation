---
id: redmine-integration
title: Redmine Integration
hide_title: true
sidebar_label: Redmine
description: Using TestMu AI integration with Redmine, you’ll be able to log bugs in your Redmine project from TestMu AI in just one click. You can grab a screenshot of a problem, highlight an exception, annotate additional detail, select an assignee, include a fitting title and a summary to help convey further actions. You can do all of this directly from TestMu AI.
keywords:
  - redmine integration
  - bug reporting
  - issue tracking
  - testmu ai redmine integration
url: https://www.testmuai.com/support/docs/redmine-integration/
site_name: TestMu AI
slug: redmine-integration/
canonical: https://www.testmuai.com/support/docs/redmine-integration/
---
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
          "name": "Redmine Integration",
          "item": `${BRAND_URL}/support/docs/redmine-integration/`
        }]
      })
    }}
></script>

# Redmine Integration
* * *

>Redmine is an open-source, cross-platform, and cross-database project management tool. It is coded in Ruby on Rails, and it helps in collaboration, bug tracking, managing multiple projects, and allows users to have numerous roles. It has an issue tracking system that enables developers to identify each issue status and prioritize it accordingly. Besides, it has additional features such as email notification, feeds, wikis, forums, and time tracker. 

Using <BrandName /> integration with Redmine, you'll be able to log bugs in your Redmine project from <BrandName /> in just one click. You can grab a screenshot of a problem, highlight an exception, annotate additional detail, select an assignee, include a fitting title and a summary to help convey further actions. You can do all of this directly from <BrandName />.

## How to Integrate Redmine with your <BrandName /> account?
***
**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of third party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'Add'** under the block that says **'Redmine'**.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-284.webp').default} alt="add"  className="doc_img" width="1341" height="498"/>

**Step 4:** Once you click on add, you will be guided to the screen below. You will be prompted to enter your **'Domain'** and **'API token'**.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-292.webp').default} alt="api token"  className="doc_img" width="1351" height="47"/>

>* ** What is Domain?**   
The domain name is any website's name having unique IP address that the user enters in the URL tab. It helps you recall the name of the website. You can select a domain name based on your organization's work area.   
><img loading="lazy" src={require('../assets/images/redmine-integration/111111.webp').default} alt="select a domain"  className="doc_img" width="1360" height="379"/>   
>* ** What is an API Token?**   
When two different applications communicate, a server-to – server connection is established. The API token is used to authenticate user identity from one server to another by extracting user-owned resources accessible on the server from where the communication is initiated. The API token is required to preserve the protection and integrity of any application. They're just as valuable to the end user as they are to the application. API tokens are important if the end user logs to the application via a two step authentication process.   
>* **Where can I get my API Token?**    
Make sure you have your Redmine credentials. If not registered, you can register yourself by navigating to the **'Register'** button on the top-left, then login to your Redmine account and click on **'My Account'** on the top-left. Navigate to **'Show'** under **'API access key'** header on the left. Copy this API access token as you will need to provide it on the <BrandName /> application to integrate with Redmine. This API token is auto-generated though you can regenerate it as per your need.   
><img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-307-1.webp').default} alt="api access key"  className="doc_img" width="1352" height="436"/>   

**Step 5:** Then enter your **'Domain'** and paste the **'API Token'** into the field provided at <BrandName /> & press the **'Install'** button.   

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-308.webp').default} alt="install"  className="doc_img" width="1331" height="478"/>   

**Step 6:** Go to Integrations again and you will be able to notice a green tick indicating that Redmine is successfully installed. You are all set to experience one-click bug logging to share your issues directly from your <BrandName /> account to your teammates on Redmine project.

<img loading="lazy" src={require('../assets/images/redmine-integration/img1.webp').default} alt="bug logging"  className="doc_img" width="1349" height="506"/>

## How to Mark your First Bug through Redmine Integration?
***
**Step 1:** In order to log bugs from your <BrandName />, firstly you would have to create a Project in the Redmine environment by navigating to **'Projects>New Project>Create'**.

**Step 2:** Go for any of the test from the <BrandName />'s left navigation menu. For demo, we will be taking **'Real Time Testing'** option. After that, enter a URL of the web-app you need to test in the dialog box. Then, select any configuration for browser and operating system of your choice & click on **'Start'**.

<img loading="lazy" src={require('../assets/images/redmine-integration/img2.webp').default} alt="start"  className="doc_img" width="1341" height="486"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **'Bug icon'** from the left panel for capturing a screenshot of the same.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-296.webp').default} alt="screenshot" className="doc_img" width="1103" height="579"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **'Mark as Bug'**.

<img loading="lazy" src={require('../assets/images/redmine-integration/img3.webp').default} alt="mark as bug"  className="doc_img"  width="1320" height="618"/>

**Step 5:** After clicking on **'Mark as Bug'** button a form would open up. Fill the fields as per your requirement.
>
* You can select the name of your **'Project'**.
* You can choose the **'Assignee'** to whom you would assign your project.
* You can assign the **'Priority'** of your task.
* You can give suitable **'Subject'** for your test.
* You also get to post a **'Description'** to help relate the cause of the issue.
* You can select the issue **‘Status’** of the project.

---
**Note**: To mark bugs, you will need to change one of the your statuses to Default. To do this, navigate to **Administration > Issue Statuses**.

**Step 1**: Click on the status that you wish to change to Default.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-287.webp').default} alt="status" className="doc_img" width="1366" height="618"/>

**Step 2**: Mark the **‘Default value’** checkbox as checked and click on **‘Save’**.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-288.webp').default} alt="save" className="doc_img"  width="1366" height="616"/>

**Step 3**: After clicking the save button, you’ll notice a green tick that notifies your selected status is now set as default.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-289.webp').default} alt="set as default" className="doc_img" width="1366" height="595"/>

---

**Step 6:** Click on **'Create Issue'** & observe it being successfully marked through a single click effort. Once you press the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **Bug successfully marked** indicating that the card has been generated in your dashboard.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-290.webp').default} alt="create issue" className="doc_img" width="1354" height="609"/>

**Step 7:** Visit your Redmine dashboard by navigating to **'Home'** button on the top-left. Select your project and you will be able to notice the logged issue right away in the **'Issue tracking'** section.

<img loading="lazy" src={require('../assets/images/redmine-integration/issue-tracking.webp').default} alt="issue tracking"  className="doc_img" width="1346" height="292"/>

**Step 8:** To view the log bug details, navigate to **'Issues'**.

<img loading="lazy" src={require('../assets/images/redmine-integration/issues.webp').default} alt="issues"  className="doc_img" width="1346" height="292"/>

**Step 9:** Then click on the subject's name by navigating to **'Subject'**, that you have assigned while creating your ticket.

<img loading="lazy" src={require('../assets/images/redmine-integration/subject.webp').default} alt="subject"  className="doc_img" width="1349" height="415"/>

You will find all the data that you provided through <BrandName /> already presented in it. <BrandName /> automatically includes test environment details and related screenshots in the card as attachments.

<img loading="lazy" src={require('../assets/images/redmine-integration/defect.webp').default} alt="data"  className="doc_img" width="1348" height="583"/>

## How to Remove Redmine Integration?
***
>You can work with one integration at a time. So if you would want to integrate to a similar third party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select **'Settings'** from the left navigation menu bar & click on **'Integrations'**. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'REMOVE'**. You can find the remove button right under the **'Redmine'** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/redmine-integration/Screenshot-323.webp').default} alt="remove"  className="doc_img" width="1340" height="535"/>

>That was all you need to know for <BrandName /> + Redmine Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing! 

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
        Redmine Integration
      </span>
    </li>
  </ul>
</nav>
