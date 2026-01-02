---
id: youtrack-integration
title: YouTrack Integration
hide_title: true
sidebar_label: YouTrack 
description: TestMu AI provides YouTrack integration to help you perform one-click bug logging from the TestMu AI to your YouTrack dashboard right away.
keywords:
  - TestMu AI integration with YouTrack 
  - TestMu AI and YouTrack integration 
  - YouTrack integration
  
url: https://www.testmu.ai/support/docs/youtrack-integration
site_name: LambdaTest
slug: youtrack-integration
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "YouTrack Integration",
          "item": `${BRAND_URL}/support/docs/youtrack-integration/`
        }]
      })
    }}
></script>

# YouTrack Integration
* * *

YouTrack is a bug tracking and project management tool developed by JetBrains. It allows you to create agile boards, use reports and Gantt charts, dashboards, and time tracking. With YouTrack, you can find issues easily based on autocomplete queries and manipulate them in batches, customize all problem attributes, and create custom workflows.

With <BrandName /> and YouTrack integration, you can push bugs directly from <BrandName /> to your YouTrack's project. Also, capture screenshots, annotate bugs, and share them with your teammates and colleagues.

## How To Integrate YouTrack With Your <BrandName /> Account?

* * *

**Step 1**: Login to your <BrandName /> account. To install integrations, you need to have admin or user level access.

**Step 2**: Go to **'Integrations'** from the left menu bar. You will be routed to the integration page where you can find list of third-party applications.

**Step 3**: From the **'Bug Tracker'** category, click on the **'YouTrack'** block.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-172.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

>
**Note:** If you already have an existing <BrandName /> integration with any project management tool then you will be asked to uninstall the existing <BrandName /> integration.


**Step 4**: You will come across two different options to choose from - **Cloud** and **Self Hosted**.

**Step 5:** When you select the **Cloud** option, you need to enter your YouTrack URL as shown below.

<img loading="lazy" src={require('../assets/images/uploads/youtrack-cloud.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-173.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

**Step 6:** When you select the **Self Hosted** option, you need to enter YouTrack Host as shown below.

<img loading="lazy" src={require('../assets/images/uploads/self-hosted-youtrack.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>
*   **What is YouTrack URL?**<br />
YouTrack is the organization's domain name on your YouTrack Projects. It is included in the URL.<br />
<img loading="lazy" src={require('../assets/images/uploads/youtrack-url.webp').default} alt="Image" width="1343" height="592"  className="doc_img"/>
*   **What is an API Token?**<br/>
An API token is required to authenticate a user's identity from one server to another by retrieving client resources from the server where the connection is initiated. To ensure its security and data integrity, API tokens are important when an end user connects into an application via a two-step verification process.

**Step 5**: To get the API token, log in to your YouTrack account and navigate to Profile on the top-right.

<img loading="lazy" src={require('../assets/images/uploads/profile.webp').default} alt="Image" width="1341" height="577"  className="doc_img"/>

**Step 6**: Click on the link that says _**'Update personal information and manage logins'**_.

<img loading="lazy" src={require('../assets/images/uploads/hub-account.webp').default} alt="Image" width="1349" height="589"  className="doc_img"/>

**Step 7**: Select the **'Authentication'** tab.

<img loading="lazy" src={require('../assets/images/uploads/auth.webp').default} alt="Image" width="1366" height="551"  className="doc_img"/>

**Step 8**: Click on **'New Token'**.

<img loading="lazy" src={require('../assets/images/uploads/new-token.webp').default} alt="Image" width="1366" height="614"  className="doc_img"/>

**Step 9**: Enter the token name and click on **'Create'**.

<img loading="lazy" src={require('../assets/images/uploads/token-name.webp').default} alt="Image" width="1351" height="622"  className="doc_img"/>

**Step 10**: Your new token will be generated. Click on **'Copy Token'**. <img loading="lazy" src={require('../assets/images/uploads/copy-token.webp').default} alt="Image" width="1351" height="622" className="doc_img"/>

**Step 11**: Enter the Youtrack Domain and copied API token in the provided field and then press **'Install'**.

<img loading="lazy" src={require('../assets/images/uploads/install.webp').default} alt="Image" width="1351" height="622" className="doc_img"/>

You have successfully integrated YouTrack with your <BrandName /> account. Visit the **'Integrations'** again and you'll notice a green check on YouTrack block under the category _My Integrations_.

<img loading="lazy" src={require('../assets/images/uploads/youtrack-added.webp').default} alt="Image" width="1351" height="622" className="doc_img"/>

## Logging First Bug Through YouTrack Integration

* * *

For demonstration, we will log bugs while performing Real time testing.

**Step 1**: Select the Real Time Testing from the left menu.

**Step 2**: Enter the test URL, select browser, browser version, operating system and resolutions. Then press **'START'**. <img loading="lazy" src={require('../assets/images/uploads/configs.webp').default} alt="Image" width="1191" height="576" className="doc_img"/>

**Step 3**: A new virtual machine will fire up where you can perform live interactive testing of websites & web apps for filing bugs. To file a bug, click on the Bug icon to capture a screenshot.

<img loading="lazy" src={require('../assets/images/uploads/mark-as-bug.webp').default} alt="Image" width="1341" height="622" className="doc_img"/>

**Step 4**: Once the screenshot is captured, you can annotate any bugs or tasks by using in-built image editor tools. Then click on **'Mark As Bug'**. <img loading="lazy" src={require('../assets/images/uploads/Screenshot-185.webp').default} alt="Image" width="1349" height="624" className="doc_img"/>

**Step 5**: You will get a YouTrack ticket where you are required to fill up your bug details as per your requirement and then click on **'Create Issue'**.

>
*   You can select the **Project**.
*   You can choose the **Board** to manage your tasks.
*   You can select the **Assignee** of the bug or task.
*   You can specify the **Title** to your test.
*   You can provide the **Description** of the issue.
*   You can also choose **Task type**, **Task Priority**, **Task State**.


Your bug will be marked successfully.

**Step 6**: Visit your YouTrack agile board, you'll notice your marked bugs and tasks.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-197.webp').default} alt="Image" width="1351" height="622" className="doc_img"/>

Click on your Project, you'll find all the test environment details along with captured screenshots.

<img loading="lazy" src={require('../assets/images/uploads/Screenshot-198.webp').default} alt="Image" width="1351" height="622" className="doc_img"/>

## Uninstalling The YouTrack Integration

* * *

**Step 1**: Login to your <BrandName /> account. Visit Integrations and navigate to **'My Integrations'**.

**Step 2**: Click on **'REMOVE'** adjacent to YouTrack block. <img loading="lazy" src={require('../assets/images/uploads/remove.webp').default} alt="Image"  width="1351" height="622" className="doc_img"/> Your YouTrack integration will be removed successfully.

>
That's all about YouTrack integration with <BrandName />. In case, you have any questions or want any further integration with your favorite integration tools, please feel free to reach us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Support**</span> or email us at [support@lambdatest.com](mailto:support@lambdatest.com). <br />
 **Happy testing!**

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
        YouTrack integration
      </span>
    </li>
  </ul>
</nav>
