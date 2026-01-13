---
id: bugzilla-integration
title: Bugzilla Integration
hide_title: true
sidebar_label: Bugzilla 
description: Perform one-click bug logging with TestMu AI and Bugzilla integration. Capture screenshots, annotate issues, and share them directly from the TestMu AI platform to your Bugzilla products.
keywords:
  - TestMu AI integration with Bugzilla 
  - TestMu AI and Bugzilla Integration
  - Bugzilla Integration
url: https://www.testmu.ai/support/docs/bugzilla-integration
site_name: LambdaTest
slug: bugzilla-integration
canonical: https://www.testmu.ai/support/docs/bugzilla-integration/
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
          "item": `${BRAND_URL}/support/docs/bugzilla-integration/`
        }]
      })
    }}
></script>

# Bugzilla Integration
***

Bugzilla is an open-source bug tracking tool that allows you to keep track of software bugs. It is coded in Perl and uses the MYSQL database. By leveraging Bugzilla, users can stay linked with their customers or employees in order to communicate effectively about the product's issues. 

In this documentation, we look at how to integrate Bugzilla with <BrandName /> and perform one-click bug logging right away from the <BrandName /> platform to your Bugzilla products.

## Integrating Bugzilla With <BrandName /> Account
***

1. Login to your <BrandName /> account. To install integrations, make sure you have admin or user level access.

2. Visit 'Integrations' from the left menu and select **'Bugzilla'** under the **'BUG TRACKER'** category.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/select-bugzilla.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>If you already have a <BrandName /> integration with any bug tracking tool then you will be asked to uninstall the existing <BrandName /> integration.

3. You will be asked to enter your **Bugzilla Host**, **Bugzilla Email Address** and **Bugzilla Password**.

>**Note**: Make sure you have created an account on Bugzilla.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/enter-bugzilla-creds.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

---
* What is my **Bugzilla Host**?<br/>
Bugzilla host is the domain name of your workspace. Open Bugzilla in any web browser and you find the Bugzilla URL (or domain name) from the browser's address bar. For Example: `https://lambdatest.bugzilla.com`.

* What is my **Bugzilla Email Address** ?<br/>
Bugzilla Email Address is the address through which you sign into your Bugzilla account.

* What is my **Bugzilla Password** ?<br/>
Bugzilla password is the password that you provide while creating your Bugzilla account.
---

4. Enter your **Bugzilla Host**, **Bugzilla Email Address** and **Bugzilla Password** in the provided field and click on **'Install'**.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/install.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Bugzilla will be successfully integrated with your <BrandName /> account. You'll also receive the confirmation message and an email of the same. 

## One-Click Bug Logging Through Bugzilla
***
To demonstrate, we take an example of Real time testing.

1. Select the Real Time Testing from the left menu.

2. Provide your test URL, select the configurations that includes: Browser, Browser versions, OS and Resolution. Click on **'START'**.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/select-config.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. A virtual machine will launch where you can perform real time testing of websites and web apps. If you identify a bug, click on the **'Mark as Bug'** icon from the left bar to capture the screenshot.  

<img loading="lazy" src={require('../assets/images/bugzilla-integration/bug-icon.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. Once the screenshot is captured, annotate issues or tasks that you have encountered using in-built image editor tools. After annotating the bugs, click on **'Mark As Bug'**.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/mark-as-bug.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. A Bugzilla ticket will open up. Fill the details like Product, Component, Version, Priority, Operating System and so on. After populating the required fields, click on **'Create Issue"**.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/create-issue.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Once you click on Create Issue, your bugs will be marked successfully.

6. To view your logged bugs, visit **Issue Tracker** from the <BrandName /> left navigation menu. You'll notice the marked bugs along with the Test details.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/issue-tracker.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. To view your logged bugs in Bugzilla, click on the right diagonal arrow icon. 

<img loading="lazy" src={require('../assets/images/bugzilla-integration/rd-arrow.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

You'll be routed to the Bugzilla page where you can find the logged issue.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/logged-issue.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

Scroll down to view the complete details of the marked bugs: Screenshot, Test ID, Reproduce on <BrandName /> link, Test URL, OS, Browser and Resolution.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/my-issues.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>


## Uninstalling The Bugzilla Integration
***

1. Login to your <BrandName /> account and visit Integrations from the left menu.

2. Navigate to 'My Integrations'and click on **'REMOVE'**.

<img loading="lazy" src={require('../assets/images/bugzilla-integration/remove-integration.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Bugzilla integration will be uninstalled.

>
That's all! In case you have any doubts or questions for us, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us directly at **[support@testmu.ai](mailto:support@testmu.ai)**.

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
       Bugzilla Integration
      </span>
    </li>
  </ul>
</nav>








