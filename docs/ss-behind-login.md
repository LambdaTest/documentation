---
id: ss-behind-login
title: Taking Screenshots of Pages Behind Login
hide_title: true
sidebar_label: Taking Screenshots Behind Login
description: With TestMu AI, now you can capture bulk screenshots of your web app or webpages, whether they behind a sign-in form or on a private staging server, for different browsers to measure the cross-browser compatibility.
keywords:
  - screenshot behind login
  - screenshot after login
  - take screenshots of pages behind login screen
  - screenshot of a webpage behind sign-in form
  - screenshot testing after login page


url: https://www.lambdatest.com/support/docs/taking-screenshots-of-pages-behind-login/
site_name: LambdaTest
slug: taking-screenshots-of-pages-behind-login/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Taking Screenshots of Pages Behind Login",
          "item": "https://www.lambdatest.com/support/docs/taking-screenshots-of-pages-behind-login/"
        }]
      })
    }}
></script>

# Taking Screenshots of Pages Behind Login
***
LambdaTest offers Screenshot testing, a feature to automatically capture bulk, full-paged screenshots of any URL over different browsers. You can perform [cross browser compatibility testing](https://www.lambdatest.com/feature) on both mobile and desktop browsers at the same time. Also, you can capture up to 25 screenshots in a single test session.

<div className="ytframe"> 
<div className="youtube" data-embed="HT8ODEExxZM">
    <div className="play-button"></div>
</div>
</div>

This document will help you understand how you can capture bulk screenshots of your web-application **after the login page** for different browsers to measure the cross browser compatibility. Refer to our [Automated Screenshot](https://www.lambdatest.com/automated-screenshot) testing document to know more.

## Understanding The Basics Of Login Profile
***

To capture screenshots after your website's login page, you are required to configure a **login profile** in your LambdaTest account. This login profile will help you store the values for respective login fields such as ID, E-mail, along with the **submit** button using the **Locators**.

**What are locators?**

Locators are used to find HTML elements of a web page in your automation test script. Selenium offers 8 locators to help you identify the particular HTML element you are looking for:

1. [ID](https://www.lambdatest.com/blog/making-the-move-with-id-locator-in-selenium-webdriver/)
2. [Name](https://www.lambdatest.com/blog/how-to-use-name-locator-in-selenium-automation-scripts/)
3. [TagName](https://www.lambdatest.com/blog/locating-elements-by-tagname-in-selenium/)
4. [CSS Selector](https://www.lambdatest.com/blog/how-pro-testers-use-css-selectors-in-selenium-automation-scripts/)
5. [XPath](https://www.lambdatest.com/blog/complete-guide-for-using-xpath-in-selenium-with-examples/)
6. [Class Name](https://www.lambdatest.com/blog/selenium-java-tutorial-class-name-locator-in-selenium/)
7. [Link Text](https://www.lambdatest.com/blog/using-link-text-and-partial-link-text-in-selenium/)
8. [Partial Link Text](https://www.lambdatest.com/blog/using-link-text-and-partial-link-text-in-selenium/)

## How This Works?
***

A Login URL is fed into the browser. This URL is going to be the one pointing towards the login page of the website your wish to test and would be different from the Screenshot Test URL.

Then the locators(Username, Password, Submit button) specified by you for your login page are searched by the Screenshot driver. If all fields are correct, your test will pass onto the next stage; if fields are incorrect, then the test is marked as a fail.

Now, the form gets submitted, and your browser will wait for the new page to render.

Finally, the Screenshot test URL is fed into the Screenshot driver, allowing it to start generating automated screenshots in bulk on your desired test configurations.

**Note: We recommend using your Login profile for a single test session before attempting multiple screenshots for cross browser testing.**

## Getting Started With Automated Screenshot After Login
***

To begin, we need to configure a login profile that would specify the website under test, locators, and login credentials. This is a one-time process. Without further ado, let’s configure the Login profile.

Login into your LambdaTest account and go to **Screenshot** by clicking on the drop down for Visual UI Testing from the left-navigation menu.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-1.webp').default} alt="Image"  width="1344" height="644" className="doc_img"/>

### Set Up Login Profile

Configure the Login profile by clicking on the **Login** button and selecting a **New Login+**.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-2.webp').default} alt="Image"  width="1344" height="644" className="doc_img"/>

### Provide The Login URL

A window would pop-up where you need to fill in the details, starting from the **Login URL**. Kindly ensure that you provide the URL of the login page for the website under test. Now, hit **next**.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-3.webp').default} alt="Image"  width="1344" height="644" className="doc_img"/>

### Provide The Locators

Select the **locator** as per your respective fields in the Login form.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-4.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

For the demonstration, let us capture the details for [LambdaTest Login](https://accounts.lambdatest.com/login).
>
**Note:** If you are already logged in to [LambdaTest](https://www.lambdatest.com), make sure to perform this drill in **incognito mode**.

**Step 1:** Go to [https://accounts.lambdatest.com/login](https://accounts.lambdatest.com/login). Right-click and select the option to open the inspection tools. For demonstration, we are using Google Chrome’s Dev Tools.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-5.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 2:** Click on the highlighted arrow to help you select any element on your page to inspect.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-6.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 3:** Now, click on the **Email** field in the login form, and you will notice that the name locator is populated with the value ’**email**’.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-7.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 4:** Switch to your normal browser where you are logged into the LambdaTest application. Provide the Email field details in the **Username Locators**.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-8.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 5:** Switch back to incognito mode and inspect the **password** field in the LambdaTest login form.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-9.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 6:** Provide the Password field details in the **Password Locators**.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-10.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 7:** Back to incognito mode, and inspect the Login button. Perform a right click on the piece of code highlighted for the login button, go to **copy**, and click **copy XPath**.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-11.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>


>
**Note:** In the above demonstration, you will find the class name placed for the login button in the LambdaTest login.  However, the class name may be similar for multiple HTML elements located in a login form, so it is considered a best practice to copy the XPath for such scenarios.

**Step 8:** Now, on your normal browser, Select the XPath locator and paste the copied XPath for the **Login button locator**, and hit **Next**.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/Screenshots_of_Pages_Behind_Login12.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

### Leveraging AutonomIQ ChroPath To Easily Locate Elements For Selenium Testing
***

[ChroPath](https://www.autonomiq.io/deviq-chropath.html) is a productive Browser extension that instantly locates the elements over your web page inside the developer tool. Add the extension to your browser and visit your web-application. After that, open the Developer tools while inspecting the element for which you need the locators value. Select **ChroPath** from the sidebar.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/Screenshots_of_Pages_Behind_Login13.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

Once you select ChroPath, you can copy the locator value. For example, in the shared image, we are copying the relative XPath.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/Screenshots_of_Pages_Behind_Login14.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

### Provide The Login Credentials

Under the credentials, provide your login details for the website you wish to test and hit **Next**. For a demonstration, you can provide your LambdaTest login details.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-15.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

### Save The Login Profile

When you are done configuring the Login URL, Locators, and Credentials for your web-application under test, you only need to provide a name to save this login profile.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-16.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

Once you hit the save button, you will find the below prompt indicating that the profile has been successfully created.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-17.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

Kudos, you have successfully configured the Login profile. This profile will be saved in your LambdaTest account, so the next time you need to run a similar test, all you need is to enable the flag for this Login profile.


<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-18.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

## Running Automated Screenshot After The Login Page
***
**Step 1:** Login to LambdaTest and go to [Screenshot Testing](/support/docs/automated-screenshot-testing/). Enable the flag for the profile you wish to test.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-19.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 2:** Now, enter the Screenshot Test URL and hit the capture button. To carry out the above demonstration, we are making use of the Test URL: [https://integrations.lambdatest.com/](https://integrations.lambdatest.com)

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-20.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

**Step 3:** You will find all the screenshots generated for the web page that is accessible after login.

<img loading="lazy" src={require('../assets/images/screenshots_of_pages_behind_login/final/screenshot-pages-behind-21.webp').default} alt="Image" width="1344" height="644" className="doc_img"/>

>
In case you have any questions, drop us an email at support@lambdatest.com or simply give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}> shout</span>. We are here to help you speed your test suites 24/7. Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Taking Screenshots of Pages Behind Login
      </span>
    </li>
  </ul>
</nav>
