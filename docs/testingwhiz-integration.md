---
id: testingwhiz-integration
title: Running Automation Tests Using TestingWhiz TestMu AI
hide_title: true
sidebar_label: TestingWhiz
description: Now perform cross-browser testing of your website or web app on 3000+ desktop & mobile browser and OS combinations, using TestMu AI and TestingWhiz integration
keywords:
 - TestMu AI integrations
 - Test Automation for GUI Testing
 - test automation 
 - integration with Lambdatest
 - testmu ai integration with testingwhiz
url: https://www.testmuai.com/support/docs/testingwhiz-integration/
site_name: TestMu AI
slug: testingwhiz-integration/
canonical: https://www.testmuai.com/support/docs/testingwhiz-integration/
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
          "name": "TestingWhiz LambdaTest Integration",
          "item": `${BRAND_URL}/support/docs/testingwhiz-integration/`
        }]
      })
    }}
></script>

# TestingWhiz Integration With <BrandName />
* * *

[TestingWhiz](https://www.testing-whiz.com/) is a codeless automation testing tool that can be used for Software testing, Web testing, Mobile testing, Database testing, Cloud testing, Web Services testing, and API testing.

<BrandName /> now integrates with TestingWhiz to help perform cross-browser testing of your website or web app, over 3000+ real desktop devices, mobile viewports, and operating system combinations. This document will help you learn how to integrate your TestingWhiz account with your <BrandName /> account.

## How To Integrate <BrandName /> With TestingWhiz?

* * *

Below is the step by step guide to help you integrate <BrandName /> with your TestingWhiz app.

1.  Go to **Configurations** from the Setting menu in your TestingWhiz app. A window will open with all the configuration settings in it, as shown below. <img loading="lazy" src={require('../assets/images/uploads/testingwhiz-1.webp').default} alt="TestingWhiz app configuration" width="1281" height="679" className="doc_img"/>
2.  Go to Cloud Execution menu from the left bar, and you will find **<BrandName />** there. <img loading="lazy" src={require('../assets/images/uploads/testingwhiz-2.webp').default} alt="Cloud Execution in TestingWhiz App" width="1281" height="682" className="doc_img"/>
3.  Now you need to provide access of your <BrandName /> account to your TestingWhiz app. To do so, click on **Add** button. <img loading="lazy" src={require('../assets/images/uploads/testingwhiz-3.webp').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>
4.  In the open dialog box, you need to enter your Profile name, username, and access key. You can use any name for your profile on TestingWhiz. <img loading="lazy" src={require('../assets/images/uploads/testingwhiz-4.webp').default} alt="TestingWhiz Profile" width="1281" height="679" className="doc_img"/>

    >To get your Username and Access Key, go to your <BrandName /> automation dashboard and click on the "key" icon left to the help button, on the top right corner. <img loading="lazy" src={require('../assets/images/uploads/profile-1.webp').default} alt="<BrandName /> username and access key" width="462" height="325" className="doc_img"/>

5.  Click on Validate and then on OK once the credentials are validated successfully.
6.  Now apply your changes by clicking on Apply and then press OK.

That's it. Your TestingWhiz account has been integrated successfully with your <BrandName /> account.

## Running First Test From Your TestingWhiz App On Your <BrandName /> Account

* * *

Consider a test scenario which includes:

```javascript
- Opening [LambdaTest ToDo App](https://lambdatest.github.io/sample-todo-app/)
- Check first item in the list
- Check second item in the list
- Add a new item in the list
```

In TestingWhiz, record your test scenario. Once done, click on the Execute button. <img loading="lazy" src={require('../assets/images/uploads/testingwhiz.webp').default} alt="recording test scenario in testingwhiz app" width="1281" height="684" className="doc_img"/>

As soon as you do, an automation test will start instantly, and you can view its build running directly on your <BrandName /> automation dashboard. Once the test is complete, you can view the result of the test on <BrandName />, with all its details, as shown in the image below: <img loading="lazy" src={require('../assets/images/uploads/testingwhiz-6.webp').default} alt="<BrandName /> Automation Logs" width="1281" height="582" className="doc_img"/>

You can view logs, [mark bugs](/docs/mark-as-bug-in-automation-testing/), and do much more for each executed test from your <BrandName /> platform.

* * *

> That's it folks! Now you can run your codefree automation testing super easily with this TestingWhiz and <BrandName /> integration. If you have any doubt or questions, feel free to contact our experts at **24/7 chat support** or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">TestingWhiz <BrandName /> Integration</span>
    </li>
  </ul>
</nav>
