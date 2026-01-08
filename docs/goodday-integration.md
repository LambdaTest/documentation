---
id: goodday-integration
title: GoodDay Integration
hide_title: true
sidebar_label: GoodDay 
description: TestMu AI helps you manage your bugs in GoodDay by moving them to project in a single click. All the details you provide in TestMu AI like task list, assignee, title and description would automatically be presented in the project on GoodDay.
keywords:
  - testmu ai integrations
  - push issues to GoodDay
  - free cross browser testing tool
  - cross platform testing tools
  - check browser compatibility online
  - testmu ai GoodDay integration
  - integrate GoodDay with testmu ai
  - create issue in GoodDay from testmu ai
  - GoodDay integration with testmu ai
  - create GoodDay issues from testmu ai
  - bug tracking tools
  - project management tools
url: https://www.testmu.ai/support/docs/goodday-integration
site_name: LambdaTest
slug: goodday-integration
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
          "name": "GoodDay Integration",
          "item": `${BRAND_URL}/support/docs/goodday-integration/`
        }]
      })
    }}
></script>

# GoodDay Integration
***
> GoodDay is a comprehensive work management platform that offers tools for project management, task organization, and productivity growth with features that boost transparency, agility, and motivation. With GoodDay as the bug tracking tool, project teams can easily avoid the hassle of digging through bug logs for hours. Bugs are a part of the software development process, which is unlikely to change. As software projects grow in features, their complexity also increases, which increases the number of bugs. The GoodDay bug tracker lets users capture, log, and prioritize the bugs that require fixing on priority. GoodDay integrates with the tools you use daily, letting you work faster and deliver more quality software on time. The GoodDay bug tracker template has a Kanban board to represent all the relevant information about each bug. It shows who is responsible for fixing the bug and when, so you can assign the bug to the person responsible. You can even set a deadline or schedule the task to have all the bugs resolved. 

The <BrandName /> GoodDay integration helps you in filing bug-related issues to your project in GoodDay directly from the <BrandName /> platform. With one-click integration, you can push annotated bug issues to the project of your choice, assign them to the required teammate, and attach necessary screenshots. You can do all that while in the middle of a test session in the <BrandName /> platform. The fields populated by you when marking as a bug through <BrandName /> are displayed as information on the GoodDay platform for a testing instance.

> GoodDay Integration with <BrandName />, like all of the integrations to 3rd party applications, is available for freemium as well as premium plans.

## How To Establish Integration With GoodDay From Your <BrandName /> Account?
***
**Step 1:** Log in to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select ‘Integrations’ from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on ‘ADD’ under the block that says ‘GoodDay’.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-1.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

**Step 4:** Once you click on Add icon, you will be redirected to the below screen. You will be asked to provide your GoodDay API Token credentials in the highlighted fields to establish integration with <BrandName />.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-2.webp').default} alt="api token" width="1365" height="641" className="doc_img"/>

> **What is an API token?**
What is an API token? When two different applications interact with each other, a server-to-server communication is established. API token is needed for authenticating user identity from one server to another, by fetching user-owned resources available on the server from where the communication is initiated. API token has been a necessity for maintaining security and data integrity of any application. They are just as vital to an end user as they are to an application. API tokens are relevant if an end user logs in an application through a 2-step verification process.

**Step 5:** You can find your API token from your GoodDay account. If you have not generated one before, you can generate an API token by going to the settings. You will find the "Settings" icon on the top right corner of your dashboard. 

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-3.webp').default} alt="settings" width="1361" height="649" className="doc_img"/>

**Step 6:** As you click on "Settings", you will see a section named "Integrations" on the left side navigation bar. Upon clicking "Integrations", you need to select "API" from the drop-down.  

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-4.webp').default} alt="generate token" width="1365" height="645" className="doc_img"/>

**Step 7:** Now click on the button "Generate" in order to generate your API token. 

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-5.webp').default} alt="copy api token" width="1365" height="642" className="doc_img"/>

> You can keep a note of this API token with you for future authentication. Although, in case you forget to do so, or you end up neglecting it due to some reason. Then there is no need to panic! You can create a new token by defining a new label. You can also delete a previously declared API Key, in case you feel that your API Key has been placed in some wrong hands. You can delete an API Key by hovering over the label and clicking on the bin icon.

**Step 8:** Copy the newly generated API token.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-6.webp').default} alt="hover" width="1365" height="642" className="doc_img"/>

**Step 9:** Paste the API token into the field provided at <BrandName /> & hit the ‘Install’ button. You are all set to experience one-click bug logging to share your issues directly from your <BrandName /> account to your project on GoodDay.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-7.webp').default} alt="next" width="1364" height="646" className="doc_img"/>

That’s it! Go to Integrations again and you will be able to notice a green tick indicating that GoodDay is successfully installed.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-8.webp').default} alt="installed" width="1350" height="643" className="doc_img"/>

## How To Log Your First Bug Through GoodDay Integration?
***
**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "Real Time Test" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit ‘Start‘.

<img loading="lazy" src={require('../assets/images/shortcut-integration/select-config.webp').default} alt="start" width="1365" height="660" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the Bug icon from the left panel for capturing a screenshot of the same. 

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-9.webp').default} alt="VM launched" width="1348" height="619" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an in-built image editor. Once you are done highlighting the bug, click on the button that says "Mark as Bug".

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-10.webp').default} alt="mark as bug" width="1320" height="618" className="doc_img"/>

**Step 5:** After clicking on "Mark as Bug" button a GoodDay specific form would open up. Fill the fields as per your requirement. Click on "Create Issue" & observe it being successfully marked through a single click effort. You can select the following: 

* You can select which **Project** should the ticket go under.
* You can set the particular **Story Type**.
* You can assign the bug to a colleague by populating the **Assignee** field.
* You can mention the **Summary** as well to easily organize your bugs.
* You also get to post a **Description** to help relate the cause of the issue or the task.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-11.webp').default} alt="details" width="1365" height="616" className="doc_img"/>

**Step 6:** Visit your GoodDay dashboard. Under "Pinned Projects", you will find the recently raised issue being highlighted. 


<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-12.webp').default} alt="story" width="1365" height="644" className="doc_img"/>

**Step 8:** As you click on the recently raised issue under the "Not Started" tab, you will notice that all the data which you provided through <BrandName /> would already be presented in it. <BrandName /> automatically includes test environment details and related screenshots in the ticket as attachments. 

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-13.webp').default} alt="story" width="1365" height="644" className="doc_img"/>


## How To Uninstall GoodDay Integration?

***
> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to `uninstall` your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select ‘Integration’ from the left navigation menu bar. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on ‘REMOVE’. You can find the remove button right under the ‘GoodDay’ block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/goodday-integration/goodday-integration-14.webp').default} alt="remove" width="1347" height="644" className="doc_img"/>

> That was all you need to know for <BrandName /> + GoodDay Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        GoodDay Integration
      </span>
    </li>
  </ul>
</nav>
