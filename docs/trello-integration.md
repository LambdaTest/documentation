---
id: trello-integration
title: Integrate TestMu AI with Trello | TestMu AI
hide_title: true
sidebar_label: Trello
description: TestMu AI provides integrations with Trello to help you log bugs directly from the middle of your test session on TestMu AI to your Trello card.
keywords:
  - TestMu AI integrations
  - TestMu AI Trello integration
  - Push issues to Trello
url: https://www.testmu.ai/support/docs/trello-integration
site_name: LambdaTest
slug: trello-integration
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
          "name": "Trello Integration",
          "item": `${BRAND_URL}/support/docs/trello-integration/`
        }]
      })
    }}
></script>

# Trello Integration
***

> Trello – A project management tool that was acquired by Atlassian in 2017. It helps in project management under agile development. Providing a highly usable dashboard, where you can easily comprehend on who is working on what? Allowing a team to pinpoint the areas where they feel they are missing something out. Team can plan every sprint in an organized manner by creating and updating cards, lists & boards. Along with project management, Trello also aids in effective bug tracking by providing a space where all your bugs can be logged and prioritized according to your release bandwidth.

The <BrandName /> Trello Integration allows you to create a card directly in Trello dashboard from <BrandName /> platform. Push an issue to your respective project anytime, even in the middle of your test session. The fields populated by you when marking as bug through <BrandName /> are displayed as information on the card in Trello dashboard for a testing instance.

**Trello Integration with <BrandName />, like all of our other integrations to 3rd party applications, is available for freemium as well as premium plan.**

## How To Integrate Trello With Your <BrandName /> Account?

***

**Step 1:** Login to your <BrandName /> account. You would need to have Admin or User level access to see and install integrations.

**Step 2:** Select **'Integration'** from the left navigation menu bar. This will guide you to a screen where you will find a list of 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'Add'** under the block that says 'Trello'.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-1.webp').default} alt="trello-integration"  width="1357" height="650" className="doc_img"/>

**Step 4:** Once you click on add, you'll redirected to the below screen if you are already logged into Trello. Click on the green button that says **'Allow'**.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-2.webp').default} alt="trello-integration"  width="800" className="doc_img"/>

---

* **Why do you require a login with Trello?**

The purpose of logging in is to bypass the authentication that is applied when two different applications interact using their respective APIs.

Trello API make use of token-based authentication for integrating with third-party applications. Once a user clicks on **'Allow'** to grant the third-party application to access user-owned resources from API, then that third-party application is provided a token for communicate with the same on behalf of the user.

Another way through which a client access can authorize is by using basic [OAuth 1.0](https://tools.ietf.org/html/rfc5849).

* **What is Token-based authentication?**

Once the user allows a third-party application to fetch user owned resources from the server to which the third-party application was making requests, then a token gets generated. This token allows third-party application to exchange information with the server API on behalf of the user.

If you are logging into Trello for the first time, then you can generate a token for yourself with the help of API key & the URL:
```javascript
https://trello.com/1/authorize?expiration=1day&name=MyPersonalToken&scope=read&response_type=token&key={YourAPIKey}
```
---
If you are not logged into Trello then you will be redirected to the below screen. Kindly login to your account via gmail or create your account by given option.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-3.webp').default} alt="trello-integration"  width="1363" height="647" className="doc_img"/>

**Step 5:** That's it! Go to Integrations again and you will be able to notice a **green tick** indicating that Trello is successfully **installed**. You can now create cards in a fly from any of your running test session in Lambdatest to your Trello dashboard directly by a single click.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-4.webp').default} alt="trello-integration"  width="1349" height="653" className="doc_img"/>

## How To Log Your First Bug Through Trello Integration?
***
**Step 1:** Go for any of the test from the left navigation menu. For demo, we will be taking "**Real Time Testing**" option.

**Step 2:** Present a URL of the web-app you need to test in the dialog box. After that, select any configuration for browser and operating system of your choice & hit '**Start**'.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-5.webp').default} alt="trello-integration"  width="800" className="doc_img"/>

**Step 3:** After the VM is launched and operable. You can perform testing on your web-app for finding bugs. If a bug gets revealed, then you need to click on the **Bug icon** from the left panel for capturing a screenshot of the same. We have highlighted that option with yellow in the below image.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-6.webp').default} alt="trello-integration"  width="1348" height="619" className="doc_img"/>

**Step 4:** After a screenshot is captured, you can annotate any issue or a task with an **in-built image editor**. Once you are done highlighting the bug, click on the button that says **"Mark as Bug"**.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-7.webp').default} alt="trello-integration"  width="1320" height="618" className="doc_img"/>

**Step 5:** After clicking on **"Mark as Bug"** button a form would open up. Fill the fields as per your requirement.

---

* You can select which **board** should the card go under.
* You can select the **list** for that particular card.
* You can assign the bug to a colleague by populating the field **'Assignee'**.
* You also get to post a **description** to help relate the cause of the issue or the card.

---

<img loading="lazy" src={require('../assets/images/trello-integration/trello-integration-8.webp').default} alt="trello-integration"  width="1353" height="658" className="doc_img"/>

**Step 6:** Click on **"Create Issue"** & observe it being successfully marked through a single click effort. Once you hit the button, you will get **prompt messages** on top of your Virtual Machine indicating the progress of bug logging. You will get a prompt message in few seconds mentioning "**Bug successfully marked**" indicating that the card has been generated in your dashboard.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-integration-9.webp').default} alt="trello-integration"  width="347" height="75" className="doc_img"/>

**Step 7:** Visit your dashboard. You will be able to notice the logged issue right away! 

<img loading="lazy" src={require('../assets/images/trello-integration/trello-integration-10.webp').default} alt="trello-integration"  width="800" className="doc_img"/>

Click on the recent card and you will find all the data that you provided through Lambdatest already presented in it. <BrandName /> automatically includes test environment details and related screenshots in the card as attachments.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-integration-11.webp').default} alt="trello-integration"   width="800" className="doc_img"/>

## How To Remove Trello Integration?

* * *

> You can work with one integration at a time. So if you would want to integrate to a similar 3rd party application, then you would have to **remove** your current integration. Here is how you can do that.

**Step 1:** Login to your <BrandName /> account.

**Step 2:** Select 'Settings' from the left navigation menu bar & click on 'Integrations'. This will guide you to a screen where you will find 3rd party applications, available to integrate with your <BrandName /> account.

**Step 3:** Click on **'REMOVE'**. You can find the remove button right under the **'Trello'** block which would be highlighted with a green tick.

<img loading="lazy" src={require('../assets/images/trello-integration/trello-8.webp').default} alt="trello-integration"  width="1364" height="650" className="doc_img"/>

That was all you need to know for <BrandName /> + Trello Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**available on chat**</span> to help you out with any roadblock regarding our product. Happy testing!

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
        Trello Integration
      </span>
    </li>
  </ul>
</nav>
