---
id: fogbugz-integration
title: FogBugz Integration
hide_title: true
sidebar_label: FogBugz
description: TestMu AI helps you manage your bugs in FogBugz by moving them to project in a single click. All the details you provide in TestMu AI like task list, assignee, title and description would automatically be presented in the project in your FogBugz dashboard.
keywords:
  - testmu ai integrations
  - push issues to fogbugz
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai fogbugz integration
  - integrate fogbugz with testmu ai
  - create issue in fogbugz from testmu ai
  - fogbugz integration with testmu ai
  - create fogbugz issues from testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmu.ai/support/docs/fogbugz-integration/
site_name: LambdaTest
slug: fogbugz-integration/
canonical: https://www.testmu.ai/support/docs/fogbugz-integration/
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
          "name": "FogBugz Integration",
          "item": `${BRAND_URL}/support/docs/fogbugz-integration/`
        }]
      })
    }}
></script>

# FogBugz Integration
***
FogBugz is a web-based project management tool with features like bug and issue tracking, discussion boards, wikis, customer relationship management, and more. It can help you manage your projects and communicate with your team. FogBugz is designed to streamline the software development process by enabling teams to easily track and manage issues, prioritize tasks, and communicate with team members.

<div className="ytframe"> 
<div className="youtube" data-embed="uOSRI6ZfeuA">
    <div className="play-button"></div>
</div>
</div>

<BrandName />'s integration with FogBugz allows you to avoid the hassle of maintaining issues and tasks manually and instead log bugs in a single click while performing [cross browser testing](https://www.lambdatest.com) of your website from the <BrandName /> platform to your FogBugz instance.


## Integrating FogBugz With <BrandName />
***

> **Note:** Before enabling integrations, ensure you have administrator or user-level access.

**Step 1:** Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

**Step 2:** Select **Integrations** from the left sidebar and then FogBugz.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-one.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 3:** It will route you to the installing console window, where you are required to enter your **FogBugz API Token**.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-two.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

## Getting The FogBugz User API Token
***

**Step 1:** Login to your **FogBugz** account.

**Step 2:** From the left sidebar menu, hover on the **avatar icon** and click the **User Options** tab. 

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-three.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 3:** After clicking on **User Options**, scroll down to the section of **API Tokens** and click on **Create API Token**.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-four.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 4:** Enter your **FogBugz Org URL** in the required field. Copy the generated **API Token** and paste it into the **FogBugz API Token** field and click **Install**. 


<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-five.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

After installing, **FogBugz will be integrated** with your <BrandName /> account.


## One-Click Bug Logging With Google Chat
***
To demonstrate, we take an example of Real-time testing.

**Step 1:** Select Real-Time Testing from the left menu.

**Step 2:** Provide your test URL, and select the configurations: Browser, Browser versions, OS, and Resolution. Click on **Start**.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogubgz-six.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Upon clicking, a cloud-based virtual machine will fire up, running real browsers and operating systems where you can test websites and web apps for filing bugs.

**Step 3:** Click on the **Bug** icon from the left in-session toolbar to take a screenshot of any bug you encounter. 

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-six.webp').default} alt="VM launched" width="1348" height="619" className="doc_img"/>

**Step 4:** After marking the bugs, click on the **Bug** icon in front of **FogBugz** under the integrations section.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-seven.webp').default} alt="mark as bug" width="1320" height="618" className="doc_img"/>

**Step 5:** In the FogBugz ticket, fill the bug details like **Project, Priority, Description, Project, Assignee, and Sprint**, and click **Mark As Bug** to log the bugs in FogBugz.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-eight.webp').default} alt="details" width="1365" height="616" className="doc_img"/>

**Step 6:** To view the logged issues, visit <BrandName /> Dashboard and head to **Manage > Issue Tracker** from the left navigation bar.

**Step 7:** Inside the **Issue Tracker**, you'll notice the logged bugs along with their test environment details. Click on the **upper right arrow** in the square button to view your logged bugs in FogBugz. 

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-nine.webp').default} alt="story" width="1365" height="644" className="doc_img"/>

**Step 8:** Upon clicking, you will be redirected to the FogBugz dashboard to find your **logged bugs**. 

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-ten.webp').default} alt="story" width="1365" height="644" className="doc_img"/>

## Uninstalling The FogBugz Integration

***

**Step 1:** Sign in to your <BrandName /> account and visit Integrations from the left sidebar menu.

**Step 2:** From the My Integrations section, click the remove option under the FogBugz block.

<img loading="lazy" src={require('../assets/images/fogbugz-integration/fogbugz-eleven.webp').default} alt="remove" width="1347" height="644" className="doc_img"/>

> That was all you need to know for <BrandName /> + Google Chat Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        FogBugz Integration
      </span>
    </li>
  </ul>
</nav>
