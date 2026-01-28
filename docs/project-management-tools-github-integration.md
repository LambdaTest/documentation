---
id: project-management-tools-github-integration
title: Integrate TestMu AI with GitHub | TestMu AI
hide_title: true
sidebar_label: GitHub
description: TestMu AI provides integrations with GitHub to help you log bugs directly from the middle of your test session on TestMu AI to your GitHub repository.
keywords:
  - testmu ai integrations
  - push issues to github
  - free cross browser testing tool
url: https://www.testmuai.com/support/docs/github-integration/
site_name: LambdaTest
slug: github-integration/
canonical: https://www.testmuai.com/support/docs/github-integration/
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
          "name": "GitHub Integration",
          "item": `${BRAND_URL}/support/docs/github-integration/`
        }]
      })
    }}
></script>

# GitHub Integration
***

GitHub is one of the most popular community among software developers. It helps you with version control by providing a code hosting platform for all. From open source to business, one can share their codes, discover new ideas and discuss about roadblocks, all in order to deliver a better software. GitHub also serves as a project management tool. It allows a team to collaborate from all around the globe.

The <BrandName /> GitHub Integration allows you to create a card directly in your repository from <BrandName /> platform. Push an issue to your respective repository anytime, even in the middle of your test session. The fields populated by you when marking as bug through <BrandName /> are displayed as information on the bug in GitHub repository for that testing instance.

**GitHub Integration with <BrandName />, like all of our other integrations to 3rd party applications, is available as freemium as well as premium plan.**

## How To Integrate GitHub With Your <BrandName /> Account?
***

**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **‘Integrations’** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **‘ADD’** under the block that says ‘Github’.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-70.webp').default} alt="github-integration" width="1345" height="609" className="doc_img"/>

**Step 4:** Step 4: Once you click on install, you’ll be redirected to a screen. There would be three options available for you to choose from in order to authenticate GitHub.

### How To Integrate GitHub With Your <BrandName /> Account Via OAuth?
***
**Step 1**: Select the radio button on **‘OAuth’** and click on **‘Install’**.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-71.webp').default} alt="github-integration" width="1338" height="610" className="doc_img"/>

You will be redirected to GitHub login page where you need to provide your login credentials.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image13.webp').default} alt="github-integration" width="1346" height="622" className="doc_img"/>

**Step 2**:  Enter your GitHub login credentials and click on **‘Sign in’**.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image8.webp').default} alt="github-integration" width="1339" height="613" className="image8"/>

**Step 3**: You’ll be redirected to the OAuth permission page. Click on **‘Authorize <BrandName />’**.

>
**What is OAuth?**<br />
The purpose of OAuth is to bypass the authentication when two different applications interact using their respective APIs. GitHub APIs use OAuth 2.0’s authorization code grant flow for generating access tokens on the user’s behalf.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-74.webp').default} alt="github-integration" width="1331" height="614" className="image8"/>

That’s it! Go to Integrations again and you will be able to notice a green tick indicating that GitHub is successfully installed. You can now experience bug logging in a fly from any of your running test sessions in <BrandName /> to your repository directly with a single click.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image-7.webp').default} alt="github-integration" width="1341" height="616" className="image8"/>


### How To Integrate GitHub With Your <BrandName /> Account Via Cloud?
***

**Step 1**: Select the radio button on **‘Cloud’**. This will ask you to enter your API token.

>
**What is an API Token?**
Access tokens are strings with an authorization key required to access an API. They are issued to the client-server and are usually opaque. They are used for requesting access to protected, user-specific resources. Access tokens are vital from a security point of view & can be generated in different formats, depending upon security requirements specified on the resource server.


<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image6-1.webp').default} alt="github-integration" width="1352" height="614" className="doc_img"/>

**Step 2**: Log in to your Github account and navigate to the **‘Settings’**.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image10.webp').default} alt="github-integration" width="1342" height="678" className="doc_img"/>

**Step 3**: Click on the **‘Developer Settings’** from the bottom-left.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image2.webp').default} alt="github-integration" width="1341" height="623" className="doc_img"/>

**Step 4**: Click on the **‘Personal access tokens’** from the left menu and click on **‘Generate new token’**.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image1-1.webp').default} alt="github-integration" width="1361" height="594" className="doc_img"/>

**Step 5**: Provide a token description, select the checkboxes for **‘repo’** & **‘user’** as scopes. These scopes will define the access to authenticate API over Basic OAuth for their respective personal token. After selecting the scopes click on **‘Generate token’**.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image5.webp').default} alt="github-integration" width="1029" height="1522" className="doc_img"/>

**Step 6**: Your personal access token will be generated. Copy the generated token & store it safely with you, as you will not be able to see this token again.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image3-1.webp').default} alt="github-integration" width="1359" height="469" className="doc_img"/>

**Step 7**: Paste the copied token into <BrandName /> GitHub Authentication and click on **‘Install’**.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image12.webp').default} alt="github-integration" width="1342" height="617" className="doc_img"/>

Go to Integrations again and you will be able to notice a green tick indicating that GitHub is successfully installed. You can now experience one-click bug logging from any of your running test sessions in <BrandName /> to your GitHub repository directly with a single click.


<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image-7.webp').default} alt="github-integration" width="1341" height="616" className="doc_img"/>

## Logging Your First Bug Through GitHub Integration
***

**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking **"Real Time Test"** option.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-112.webp').default} alt="github-integration" width="1348" height="566" className="doc_img"/>

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit **‘Start’.**

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-107.webp').default} alt="github-integration" width="1347" height="560" className="doc_img"/>

**Step 3**: After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-108.webp').default} alt="github-integration" width="1366" height="574" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor.** Once you are done highlighting the bug, click on the button that says **"Mark as Bug".**

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-109.webp').default} alt="github-integration" width="1366" height="562" className="doc_img"/>

**Step 5**: After clicking on **"Mark as Bug"** button a GitHub specific form would open up. Fill the fields as per your requirement.

 - You can select which repo should the observation be marked under.
 - You can select a relevant label for the same UI observation.
 - You can select the Issue’s title.
 - You also get to post a description to help relate the cause of the issue or the card.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-110.webp').default} alt="github-integration" width="1366" height="566"  className="doc_img"/>

**Step 6**: Click on **"Create Issue"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get prompt messages on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning **"Bug successfully marked"** indicating that the bug has been pushed to the desired GitHub repository.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Capture15.webp').default} alt="github-integration" width="347" height="75" className="doc_img"/>


**Step 7:** Visit your GitHub repository. You will be able to notice the bug logged right away under your recent activity.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image.webp').default} alt="github-integration" width="1581" height="747" className="doc_img"/>

Click on the **description** of bug and you will be redirected to the detail page of the bug. You will find all the data that you provided through <BrandName /> already presented in the bug. <BrandName /> automatically includes test environment details and related screenshots in the GitHub repository as attachments.

<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/image1-1.webp').default} alt="github-integration" width="1576" height="780" className="doc_img"/>

## How To Remove GitHub Integration?
***

You can work with one integration at a time. So if you would want to integrate to some 3rd party application of the similar type, other than the GitHub then you would have to remove your present integration. Here is how you can do it.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select **‘Integrations’** from the left navigation menu bar. This will guide you to the same screen from where you initiated GitHub installation. You will also find other third party applications, available to integrate with your <BrandName /> account.

**Step 3:** To remove the GitHub integration, click on **‘REMOVE’** under the category My Integrations.


<img loading="lazy" src={require('../assets/images/project-management-tools-github-integration/Screenshot-111.webp').default} alt="github-integration" width="1366" height="564" className="doc_img"/>

That was all you need to know for <BrandName /> + GitHub Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. **Happy testing!**

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
        GitHub Integration
      </span>
    </li>
  </ul>
</nav>
