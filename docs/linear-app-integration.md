---
id: linear-app-integration
title: Linear App Integration
hide_title: true
sidebar_label: Linear App 
description: With TestMu AI and Linear App integration, you can perform one-click bug logging to your Linear App projects and capture screenshots, annotate issues, and share them across your teammates and colleagues.
keywords:
  - TestMu AI integration with Linear App 
  - TestMu AI and Linear App integration 
  - Linear App integration
url: https://www.testmu.ai/support/docs/linear-app-integration/
site_name: LambdaTest
slug: linear-app-integration
canonical: https://www.testmu.ai/support/docs/linear-app-integration/
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
          "name": "Linear App Integration",
          "item": `${BRAND_URL}/support/docs/linear-app-integration/`
        }]
      })
    }}
></script>

# Linear App Integration
***

Linear App is a bug tracking tool built for high -performance teams. With Linear App, you can perform bug tracking, streamline software projects, sprints, tasks and more. <BrandName /> and Linear App integration allows you to perform one-click bug logging from <BrandName /> to your Linear App projects. 

<div className="ytframe"> 
<div className="youtube" data-embed="RS1cITz3W8w">
    <div className="play-button"></div>
</div>
</div>


In this documentation, we look at how to integrate Linear App with <BrandName /> and mark and share bugs from <BrandName /> to Linear App projects.

## How To Integrate Linear App With Your <BrandName /> Account?
***

1. Login to your <BrandName /> account. To install integrations, you need to have admin or user level access.

2. Visit 'Integrations' from the left menu bar. Once you are in the integration page, select **LINEAR APP** under the **BUG TRACKER** category.

<img loading="lazy" src={require('../assets/images/linear-app-integration/select-app.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>**Note**: If you already have a <BrandName /> integration with any project management tool then you will be asked to uninstall the existing <BrandName /> integration.

3. You will be asked to enter your Linear App **API Token**.

>
*   **What is an API Token?**<br/>
An API token is needed to validate a user's identity from one server to another by retrieving client resources from the server where the connection is made. API tokens are essential when an end user interacts to an application via a two-step verification process to ensure its security and data integrity.

<img loading="lazy" src={require('../assets/images/linear-app-integration/enter-api-token.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>


4. To get the API token, log in to your Linear App account. Click on the Profile avatar and select **Settings**.

<img loading="lazy" src={require('../assets/images/linear-app-integration/settings.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. From the left sidebar menu, click on **API**.

<img loading="lazy" src={require('../assets/images/linear-app-integration/api.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

6. Under the **Personal API Keys**, provide your desired label name and click on **Create key**.

<img loading="lazy" src={require('../assets/images/linear-app-integration/create-key.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. Your Linear App API token will be generated. Copy the generated API token.

<img loading="lazy" src={require('../assets/images/linear-app-integration/copy-token.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

8. Paste the copied API token in the provided field and click on **Install**.

<img loading="lazy" src={require('../assets/images/linear-app-integration/install.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Linear App will be successfully integrated with your <BrandName /> account. You'll also receive the confirmation message and an email of the same. 

Visit the Integrations page, under **MY INTEGRATION**, you'll find the installed Linear App.

<img loading="lazy" src={require('../assets/images/linear-app-integration/integration-success.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

## Logging First Bug Through Linear App Integration
***
Let's perform one-click bug logging while performing Real time testing.

1. Select the Real Time Testing from the left menu.

2. Enter the test URL, select the configurations like browser, browser versions, OS and resolutions and then click on **START**.

<img loading="lazy" src={require('../assets/images/linear-app-integration/select-browsers-os.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. A virtual machine will be launched where you can perform live testing of websites and web apps. If you encounter a bug, click on the Bug icon from the left bar to grab the screenshot.  

<img loading="lazy" src={require('../assets/images/linear-app-integration/mark-as-bug.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. The screenshot will be captured on which you can annotate bugs or tasks by using in-built image editor tools. After annotating the bugs/tasks, click on Mark As Bug icon.

<img loading="lazy" src={require('../assets/images/linear-app-integration/create-issue.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. A Linear App ticket will open up where you need to fill the details like Team, Assignee, Summary, Priority and so on. After furnishing the required details, click on **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/linear-app-integration/annotate.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Once you click on Mark As Bug, your bugs will be marked successfully.

6. To view your logged bugs, log into your Linear App account and click on **My Issues** from the left menu bar.

<img loading="lazy" src={require('../assets/images/linear-app-integration/my-issues.png').default} alt="Image" width="1353" height="622"  className="doc_img"/><br/><br/>

You will notice the marked issue right away. 

<img loading="lazy" src={require('../assets/images/linear-app-integration/marked-issues.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. To view the issue's details, click on the issue. You can view the issue's attachments like screenshots, test id, reproduce on <BrandName /> link, test URL, OS, browser and browser versions.

<img loading="lazy" src={require('../assets/images/linear-app-integration/issue-linearapp.png').default} alt="Image" width="1353" height="622"  className="doc_img"/>

## Uninstalling The Linear App Integration
***

1. Login to your <BrandName /> account. Select Integrations and navigate to 'My Integrations'.

2. Click on **REMOVE** adjacent to Linear App icon.

<img loading="lazy" src={require('../assets/images/linear-app-integration/remove-integration.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Linear App integration will be uninstalled successfully.

-------

