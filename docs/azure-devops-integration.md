---
id: azure-devops-integration
title: Integrate TestMu AI with Azure DevOps | TestMu AI
hide_title: true
sidebar_label: Azure DevOps
description: TestMu AI provides integrations with Azure DevOps to help you log bugs directly from the middle of your test session on TestMu AI to your Azure DevOps project.
keywords:
  - TestMu AI integrations
  - TestMu AI Azure DevOps integration
  - Push issues to Azure DevOps
url: https://www.testmu.ai/support/docs/vsts-integration
site_name: LambdaTest
slug: vsts-integration
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
          "name": "Azure DevOps Integration",
          "item": `${BRAND_URL}/support/docs/vsts-integration/`
        }]
      })
    }}
></script>

# Azure DevOps Integration
***

Azure DevOps, previously known as **VSTS: Visual Studio Team Services** – A software developed by Microsoft Corporations to provide an IDE(Integrated Development Environment) for facilitating management & development regarding a software project. Azure DevOps provides a set of specific, cloud-based collaboration tools for developers, testers & software architects. So you can plan smarter and ship even faster with the help of effective collaboration. With their **Azure Pipelines** you can deploy your development to any Git provider cloud.

The <BrandName /> Azure DevOps Integration allows you to create a work item directly in your project from <BrandName /> platform. Push a bug, epic, task, story to your respective project anytime, even in the middle of your test session. The fields populated by you when marking as a bug through <BrandName /> are displayed as information on the work item in Azure DevOps project for that testing instance.

:::info
We recently added support for custom fields to our integration. From now on, all required custom fields in your Azure Devops account will be visible in your bug marking form on lambdatest.
:::

**Azure DevOps Integration with <BrandName />, like all of our other integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Integrate Azure DevOps With Your <BrandName /> Account?

* * *

**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'Add'** under the block that says 'Azure DevOps'.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-1.webp').default} alt="azure-devops-integration" width="1350" height="621" className="doc_img"/>

**Step 4:** As you hit **"INSTALL"**, you will be directed to a page where you have to provide your **Azure DevOps URL**, your **Azure DevOps Email** & your **Azure DevOps Access Token**. By doing so you will grant <BrandName /> the access to your user-owned resources on Microsoft's Visual Studio Team Services account. This is necessary for authorization purpose between APIs of two different applications.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-282.webp').default} alt="azure-devops-integration" width="1345" height="622" className="doc_img"/>

> **Note:** For **Self-Hosted** Azure DevOps instance, you need to whitelisted IP address of your privately hosted projects. To get your IP whitelisted, please contact our customer support. 

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-3.webp').default} alt="azure-devops-integration" width="1891" height="705" className="doc_img"/>

---
* **What is my Azure DevOps URL?**

**Azure DevOps URL** would be the domain name. Log into your Azure DevOps account and you will find it under your organization.
 ---
<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-286.webp').default} alt="azure-devops-integration" width="1919" height="800" className="doc_img"/>

**Step 5:** If you are already inside a project in your Azure DevOps account, then you will find it in the URL. For example: https://dev.azure.com/ **salmank0856**

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-284.webp').default} alt="azure-devops-integration" width="1919" height="987" className="doc_img"/>

---
* **What is my Azure DevOps Email?**

In this field you need to specify the **email id** through which you sign into your **Azure DevOps account**.
* **What is my Azure DevOps Access Token?**
---
You can generate your Azure DevOps access token under **'Personal access tokens'** by clicking on setiings icon next to top right corner where your user avatar is displayed and click on **'+ New Token'**.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-277.webp').default} alt="azure-devops-integration" width="1364" height="623" className="doc_img"/>

---

* **What are access tokens?**

Access tokens are strings with authorization key required to access an API. They are issued to the client server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.

---

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-278.webp').default} alt="azure-devops-integration" width="1365" height="648" className="doc_img"/>

**Step 6:** After you click on **'+ New Token'**, mention a **name** for the access token. Define the **scopes** for authorizing access. By doing so, you will be providing the level of access you want to provide to any 3rd party API. For TestMu AI integration with Azure DevOps, select the radio button for **'Full access'** & click on **'Create'**.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-279.webp').default} alt="azure-devops-integration" width="1365" height="650" className="doc_img"/>

* A token is generated, copy the token to your clipboard and make sure to store it safely with you.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-280.webp').default} alt="azure-devops-integration" width="1350" height="544" className="doc_img"/>

Access tokens are just as important as your passwords and shall not be misplaced into wrong hands. If by any chance you lose it in future or it gets shared to someone whom you don't trust, then you can always revoke the token and create a new one.

For revoking a token, click on any personal access token and hit the **'Revoke'**.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-281.webp').default} alt="azure-devops-integration" width="1365" height="537" className="doc_img"/>

**Step 7:** Enter your Azure DevOps URL, E-mail and Access token in the provided field and & press **Install**.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-282.webp').default} alt="azure-devops-integration" width="1345" height="622" className="doc_img"/>

**Step 8:** Now, you will notice a success message as below.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/Screenshot-275.webp').default} alt="azure-devops-integration" width="311" height="96" className="doc_img"/>

That's it! Go to Integrations again and you will be able to see Azure DevOps under 'My Integrations' section. You can now experience bug logging in a fly from any of your running test session in TestMu AI to your project directly by a single click.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-13.webp').default} alt="azure-devops-integration" width="1347" height="623" className="doc_img"/>

## How To Log Your First Bug Through Azure DevOps Integration?

* * *

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "**Real Time Testing**" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-14.webp').default} alt="azure-devops-integration" width="1342" height="575" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same. We have highlighted that option with red in the below image.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-15.webp').default} alt="azure-devops-integration" width="1348" height="619" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **"Mark as Bug"**.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-16.webp').default} alt="azure-devops-integration" width="1320" height="618" className="doc_img"/>

**Step 5:** Once you click on **"Mark as Bug"** button a form would open up. Fill the fields as per your requirement.

* You can choose out of your **'Projects'**, for logging your UI observation.
* You can select the appropriate **'Team'** to which you would like to share the UI observation.
* You can assign it to a colleague by populating the **'Member'** field.
* You can specify the number of **Iteration**.
* You can choose a the type of observation by selecting a **'Work Type'**.
* You can provide a **'Title'** when pushing the screenshot.
* You can also provide the steps to reproduce in the **'Repro Steps'** field.
* Specify the additional information in the **'System info'**.
* Select a **Priority** & **'Severity'** of the UI observation.
* Choose the concerned area from the list of **'Activity'**
* You also get to post a **'Description'** to help relate the cause of the issue or the task.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-17.webp').default} alt="azure-devops-integration" width="1354" height="650" className="doc_img"/>

**Step 6:** Click on **"Create Bug"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning "**Bug successfully marked**" indicating that the UI observation has been pushed to your project.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-18.webp').default} alt="azure-devops-integration" width="347" height="75" className="doc_img"/>

**Step 7:** Visit your Azure DevOps project. You will be able to notice the logged issue right away by navigating to **Boards** from the left navigation menu and heading to the **Work Items**.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-19.webp').default} alt="azure-devops-integration" width="1365" height="689" className="doc_img"/>

**Step 8:** Click on the **Title** to open the details. All the data you provided through TestMu AI would already be presented in it. <BrandName /> automatically includes test environment details and related screenshots in your work item on the respective project.

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-20.webp').default} alt="azure-devops-integration" width="1365" height="650" className="doc_img"/>

## How To Remove Azure DevOps Integration?

* * *

> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select '**Settings**' from the left navigation menu bar & click on '**Integrations**'. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Under '**My Integrations**',you'll now see '**Azure Devops**'. Click on '**REMOVE**'. You can find the remove button right next to **'Azure DevOps'.**

<img loading="lazy" src={require('../assets/images/azure-devops-integration/azure-devops-integration-21.webp').default} alt="azure-devops-integration" width="1347" height="623" className="doc_img"/>

---

That was all you need to know for <BrandName /> + Azure DevOps Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing!

---

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
        Azure DevOps Integration
      </span>
    </li>
  </ul>
</nav>
