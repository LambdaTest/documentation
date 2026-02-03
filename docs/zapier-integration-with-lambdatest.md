---
id: zapier-integration-with-lambdatest
title: Zapier Integration With TestMu AI
sidebar_label: Zapier 
description: TestMu AI integration with Zapier enable you to create a smarter and more customized workflow, helping you save time to focus on the important things to ship quality products at light speed. 
keywords:
  - Zapier
  - testmu ai intigration with zapier
  - cross browser testing
  - zapier dashboard
  - automation on zapier 
url: https://www.testmuai.com/support/docs/zapier-integration-with-testmu/
site_name: LambdaTest
slug: zapier-integration-with-testmu/
canonical: https://www.testmuai.com/support/docs/zapier-integration-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

-----------------------------------------------------------------------------------------------------------------------------
Zapier is a cloud-based platform that allows you to easily automate workflows between your apps and your services without having to build this integration yourself or hire someone to do it for you. Zapier works with Zaps, which you can create by combining multiple apps and services. These Zaps help you streamline your workflow and save time and effort.

<BrandName /> and Zapier enable you to create a smarter and more customized workflow, helping you save time to focus on the important things to ship quality products at light speed. 

<BrandName /> is the only platform in the market with deep integration with Zapier to make automating workflows a piece of cake for you.  

## Prerequisites
-----------------------------------------------------------------------------------------------------------------------------
1. A <BrandName /> account. If you don't have an account, [sign up for free](https://accounts.lambdatest.com/dashboard).
2. A Zapier account.

## Integrating Zapier With <BrandName />
-----------------------------------------------------------------------------------------------------------------------------

1. Open your [Zapier dashboard](https://zapier.com/app/dashboard) after logging in to your Zapier account.

***

<img loading="lazy" src={require('../assets/images/zapier/1.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

2. Click on **+ Create Zap** on the top left-hand side of your screen to navigate to the Zapier editor.
    
3.  Select <BrandName /> as the app that gets triggered and proceed to choosing an event.

***

<img loading="lazy" src={require('../assets/images/zapier/2.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

4. Select the event that will trigger the integrated alert and click on **Continue**. <BrandName /> offers you three options in this field:

-   **New Build:** The integrations is triggered every time a new build is created.
    
-   **Marked New Issue:** The integration is triggered every time a new issue is created at <BrandName />.
    
-   **New Test:** The integration is triggered every time a new test is executed.

***

<img loading="lazy" src={require('../assets/images/zapier/3.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

5. Choose your <BrandName /> account and click on **Continue** to navigate to testing your trigger.

***

<img loading="lazy" src={require('../assets/images/zapier/4.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

6. Test your <BrandName /> trigger and click on **Continue** after the test is concluded.

***

<img loading="lazy" src={require('../assets/images/zapier/5.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

7. Proceed to configuring the action that gets triggered by the trigger. Select a tool from the myriad of option that Zapier provides. (We selected Gmail to demonstrate this entire process).

***

<img loading="lazy" src={require('../assets/images/zapier/6.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

8. Choose an event from the options that Zapier provides and click on **Continue.**

***

<img loading="lazy" src={require('../assets/images/zapier/7.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

9. Connect your Gmail account with Zapier and click on **Continue** to set up your event.

***

<img loading="lazy" src={require('../assets/images/zapier/8.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

10. Finish the required fields and click on **Continue.**

***

<img loading="lazy" src={require('../assets/images/zapier/9.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

  **Note:** Zapier also allows you to use dynamic text fields from <BrandName />, such as the Test Details, Test ID, Test Browser and more.

  ***

  <img loading="lazy" src={require('../assets/images/zapier/10.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

  ***

11. Verify your Email and click on **Test action** to test if your action and trigger are working correctly. You can also skip this test.

***

<img loading="lazy" src={require('../assets/images/zapier/11.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

12. Your Integration is ready and you can publish it to make it functional. After publishing, you will receive an email whenever a new build is created.

***

<img loading="lazy" src={require('../assets/images/zapier/12.png').default} alt="Image"  style={{width: '1000px',}} className="doc_img"/>

***

You have successfully integrated Gmail with <BrandName /> via Zapier. Zapier has many useful tools like Gmail, and you can use them all to optimize your testing process with <BrandName />. Happy testing!
 

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
        Zapier Integration
      </span>
    </li>
  </ul>
</nav>
