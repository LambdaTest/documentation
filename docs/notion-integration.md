---
id: notion-integration
title: Notion Integration
hide_title: true
sidebar_label: Notion
description: Perform one-click bug logging while performing cross browser testing with TestMu AI and Notion integration. Capture screenshots, annotate issues, and share them directly from the TestMu AI platform to your Notion pages.
keywords:
  - TestMu AI integration with Notion
  - TestMu AI and Notion Integration
  - Notion Integration
url: https://www.testmu.ai/support/docs/notion-integration
site_name: LambdaTest
slug: notion-integration
canonical: https://www.testmu.ai/support/docs/notion-integration/
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
          "name": "Bugzilla Integration",
          "item": `${BRAND_URL}/support/docs/notion-integration/`
        }]
      })
    }}
></script>

# Notion Integration
***

Notion is an all-in-one workspace for the teams where you can write, plan, collaborate, and get organized. You can take notes, assign tasks, manage projects, and much more. Notion has customized markdown support that integrates kanban boards, tasks, wikis, and databases.

The <BrandName /> and Notion integration allows you to perform one-click bug logging while perform [cross browser testing](https://www.lambdatest.com/) of your websites (and web apps). You can mark and share bugs directly from the <BrandName /> to your Notion pages.

## Integrating Notion With <BrandName /> Account
***

### For existing users: Re-Sync your Integration

If you are already an existing user and have integrated Notion with <BrandName /> earlier, then you have to re-sync the integration to update the changes.

Follow the below-mentioned method to re-sync the changes:

**Step 1:** Go to the Integrations page.

**Step 2:** Click on the **Resync** button to re-sync the changes made.

<img loading="lazy" src={require('../assets/images/notion-integration/resync-notion.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

***

### For new users: Install the Integration

> If you already have a <BrandName /> integration with any third-party tool then you will be asked to uninstall the existing <BrandName /> integration.

1. Login to your <BrandName /> account. To install integrations, ensure you have admin or user level access.

2. Visit 'Integrations' from the left menu and select **'Notion'** from the **'BUG TRACKER'** section.

<img loading="lazy" src={require('../assets/images/notion-integration/select-notion.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>**Note**: Make sure you have created an account on Notion.

3. You will be taken to OAuth Page. Click on **Select Pages**. 

<img loading="lazy" src={require('../assets/images/notion-integration/select-pages.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. Choose the page on which you want to give an access. For example, in the below screenshot, we select *DemoTest1* page.

<img loading="lazy" src={require('../assets/images/notion-integration/choose-pages.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. After selecting the pages, click on **Allow Access**.

<img loading="lazy" src={require('../assets/images/notion-integration/allow-access.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Notion will be successfully integrated with your <BrandName /> account. You'll also receive the confirmation message and an email of the same. 

## Creating A Kanban Board
***

1. Open Notion dashboard. From the left menu, click **Add a page**.

<img loading="lazy" src={require('../assets/images/notion-integration/addpage.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

2. Select **Board**.

<img loading="lazy" src={require('../assets/images/notion-integration/board.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. Give a relevant title and add your desired properties in the board.

<img loading="lazy" src={require('../assets/images/notion-integration/kanban.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Your Kanban board is now configured to store bugs.

## One-Click Bug Logging Through Notion
***
We will perform one-click bug looging while perform Real Time Testing.

1. Select **Real Time Testing** from the left menu.

2. Enter the test URL, select the test environment details like Browser, Browser versions, OS and Resolution. Then click on **'START'**.

<img loading="lazy" src={require('../assets/images/notion-integration/select-config.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. A cloud-based virtual machine will launch where you can perform real time testing of websites and web apps. If you found a bug, click on the **'Mark as Bug'** icon from the left tool bar to grab the screenshot.  

<img loading="lazy" src={require('../assets/images/notion-integration/spider-icon.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. Once the screenshot is captured, annotate issues or tasks that you have encountered using in-built image editor tools. After annotating the bugs, click on **'Mark As Bug'**.

<img loading="lazy" src={require('../assets/images/notion-integration/mark-as-bug.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. A Notion ticket will open up. Fill the details like Board, Status, Assignee, Summary and Description. After providing the details in the ticket, click on **'Create Issue"**.

<img loading="lazy" src={require('../assets/images/notion-integration/create-issue.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Once you click on Create Issue, your bugs will be marked successfully.

6. To view your logged issues, visit **Issue Tracker** from the <BrandName /> left menu. You'll notice the marked bugs along with the Test environment details on the right.

<img loading="lazy" src={require('../assets/images/notion-integration/visit-issuetracker.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. To view your marked bugs in Notion, click on the right diagonal arrow icon. 

<img loading="lazy" src={require('../assets/images/notion-integration/rd-arrowicon.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

You'll be routed to the Notion dashboard where you can find your marked issues along with the test environment details.

<img loading="lazy" src={require('../assets/images/notion-integration/marked-issue.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>



## Uninstalling The Notion Integration
***

1. Login to your <BrandName /> account and visit Integrations from the left menu.

2. Navigate to 'My Integrations'and click on **'REMOVE'** under the Notion block.

<img loading="lazy" src={require('../assets/images/notion-integration/remove-notion.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Notion integration will be uninstalled.

>
In case you have any doubts or questions, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us directly at **[support@testmu.ai](mailto:support@testmu.ai)**.

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
       Notion Integration
      </span>
    </li>
  </ul>
</nav>








