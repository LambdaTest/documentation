---
id: datadog-integration
title: Datadog Integration
hide_title: true
sidebar_label: Datadog
description: With TestMu AI and Datadog, you can log bugs with a single click while performing cross-browser testing. Capture screenshots, highlight bugs, and send them directly from the TestMu AI platform to Datadog.
keywords:
  - TestMu AI integration with Datadog
  - TestMu AI and Datadog Integration
  - Datadog Integration
url: https://www.testmu.ai/support/docs/datadog-integration/
site_name: LambdaTest
slug: datadog-integration
canonical: https://www.testmu.ai/support/docs/datadog-integration/
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
          "name": "Datadog Integration",
          "item": `${BRAND_URL}/support/docs/datadog-integration/`
        }]
      })
    }}
></script>

# Datadog Integration
***

Datadog is a cloud application monitoring and analytics tool. You can use it to compute performance metrics and event monitoring for infrastructure and cloud services. In addition, Datadog can monitor services such as servers, databases and tools. With <BrandName /> and Datadog integration, you can log bugs while perform [cross browser testing](https://www.lambdatest.com/) of your websites (and web apps) from the <BrandName /> platform to Datadog.

## Integrating Datadog With <BrandName /> Account
***

1. To begin, sign in to your <BrandName /> account. To setup integrations, make sure you have admin or user level access.

2. Visit **Integrations** from the left menu and select **DATADOG** from the ANALYTICS section.

<img loading="lazy" src={require('../assets/images/datadog-integration/select-datadog.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

>**Note**: For logging bugs to Datadog, make sure you a Datadog account.

3. It will redirect you to a Datadog OAuth authorization page. Click **Authorize**.

<img loading="lazy" src={require('../assets/images/datadog-integration/oauth.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>


The Datadog will be successfully integrated with your <BrandName /> account.

<img loading="lazy" src={require('../assets/images/datadog-integration/success.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>


## One-Click Bug Logging With Datadog
***

1. Select **Real Time Testing** from the left menu.

2. Enter the test URL, select browser, browser versions, OS and resolution and press **START**.

<img loading="lazy" src={require('../assets/images/datadog-integration/test-environments.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

3. A cloud-based virtual machine will be launched, allowing you to conduct real-time testing of websites. After you've identified the issues, click on **Mark as Bug** icon in the left menu to capture a screenshot.  

<img loading="lazy" src={require('../assets/images/datadog-integration/mark-as-bug.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

4. After you've grabbed the screenshot, use the in-built image editor tools to mark any issues or tasks you've observed. After annotating the bugs, click on **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/datadog-integration/mab.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

5. A Datadog ticket will open up. Fill the details like Service, Team, Assignee, Severity, State, Summary and Description. Then click on **Create Issue** and your bugs will be marked right away.

<img loading="lazy" src={require('../assets/images/datadog-integration/create-issue.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>


6. To view your marked bugs, visit **Issue Tracker** from the <BrandName /> left navigation menu. You'll notice the marked bugs along with the Test environment details.

<img loading="lazy" src={require('../assets/images/datadog-integration/issue-tracker.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

7. Click on the right diagonal arrow icon to view the logged issues in Datadog. 

<img loading="lazy" src={require('../assets/images/datadog-integration/diagarrow.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

You'll be taken to the Datadog interface where you can find your marked issues right away. 

<img loading="lazy" src={require('../assets/images/datadog-integration/datadog-bugs.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

## Uninstalling The Datadog Integration
***

1. Login to your <BrandName /> account and visit Integrations from the left menu.

2. Navigate to 'My Integrations'and click on **REMOVE** under the Datadog block.

<img loading="lazy" src={require('../assets/images/datadog-integration/remove-datadog.webp').default} alt="Image" width="1353" height="622"  className="doc_img"/>

The Datadog integration will be uninstalled.

>
For any queries, feel free to drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us directly at **[support@testmu.ai](mailto:support@testmu.ai)**.

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
       Datadog Integration
      </span>
    </li>
  </ul>
</nav>








