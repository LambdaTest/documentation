---
id: bugasura-integration
title: Bugasura Integration
hide_title: true
sidebar_label: Bugasura 
description: Integrate TestMu AI with Bugasura for efficient one-click bug logging of your web applications and avoid the hassle of maintaining bugs and tasks manually.
keywords:
  - testmu ai integration with bugasura
  - testmu ai and bugasura integration 
  - bugasura integration
url: https://www.testmuai.com/support/docs/bugasura-integration/
site_name: TestMu AI
slug: bugasura-integration/
canonical: https://www.testmuai.com/support/docs/bugasura-integration/
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
          "name": "Bugasura Integration",
          "item": `${BRAND_URL}/support/docs/bugasura-integration/`
        }]
      })
    }}
></script>

# Bugasura Integration
***

Bugasura is a simple and collaborative bug-tracking platform for modern SaaS teams. It comes with the ability to customize workflows and uses an agile approach to report, track and close issues.

Using <BrandName /> and Bugasura integration, you can file bugs while performing [online browser testing](https://www.lambdatest.com) of your web applications from the <BrandName /> platform to your Bugasura instance and avoid the hassle of maintaining bugs and tasks manually.

## Integrating Bugasura With <BrandName />
***

:::info Note
Before enabling integrations, ensure you have administrator or user level access.
:::

1. Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

2. Select **Integrations** from the left sidebar and then **Bugasura**.

<img loading="lazy" src={require('../assets/images/bugasura-integration/select_bs.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

3. It will route you to the installing console where you need to enter your Bugasura API Key.

<img loading="lazy" src={require('../assets/images/bugasura-integration/enter_key.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

### Getting The Bugasura User API Key

1. Login to your Bugasura account.

2. From the left sidebar menu, click avatar icon.

<img loading="lazy" src={require('../assets/images/bugasura-integration/avatar.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

3. Scroll down and copy your user API key.

<img loading="lazy" src={require('../assets/images/bugasura-integration/copy_api.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. Paste the user API key that you just copied into the provided field and press **Install**.

<img loading="lazy" src={require('../assets/images/bugasura-integration/paste_key.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

The Bugasura will be integrated with your <BrandName /> account. 

## One-Click Bug Logging With Bugasura
***

1. Once you are in the <BrandName /> Dashboard, navigate to **Real Time Testing > Browser Testing** from the left sidebar menu.

2. To perform live-interactive testing of your website or a web app, enter the web URL, select testing type (Desktop/Mobile), select the browser **VERSION**, **OS**, **RESOLUTION**, and click **START**.

<img loading="lazy" src={require('../assets/images/bugasura-integration/test_env.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

A cloud-based virtual machine will fire up running real browsers and operating system where you can test websites and web apps for filing bugs.

3. If you come across any issue or bug, from the left in-session tool bar, click the **Bug** icon to take a screenshot of a web page.

<img loading="lazy" src={require('../assets/images/bugasura-integration/vm.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. Using the in-built annotation tool bar, you can mark any issues, bugs and tasks on a web page. Once you have marked the bugs, click **Mark as Bug**.

<img loading="lazy" src={require('../assets/images/bugasura-integration/mab.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

5. In the Bugasura ticket, fill the bug details like Teams, Summary, Description, Project, Assignee and Sprint. After filling all the bug details, click **CREATE ISSUE** to log the bugs in Bugasura.

<img loading="lazy" src={require('../assets/images/bugasura-integration/create-issue.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>

6. Visit <BrandName /> Dashboard. From the left sidebar menu, select **Manage > Issue Tracker**. 

8. In Issue Tracker, you'll notice the logged bugs along with their test environment details. To view your logged bugs in Bugasura, click **upper right arrow in square** button.

<img loading="lazy" src={require('../assets/images/bugasura-integration/issue_tracker.webp').default} alt="Image" width="1127" height="425"  className="doc_img"/>


It will re-direct you to the Bugasura dashboard where you can find your filed bugs along with their test environment details.

<img loading="lazy" src={require('../assets/images/bugasura-integration/logged_issue.webp').default} alt="Image" width="1366" height="625"  className="doc_img"/>

## Uninstalling The Bugasura Integration
***

1. Sign in to your <BrandName /> account and visit **Integrations** from the left sidebar menu.

2. From **My Integrations**, click **REMOVE** under the Bugasura block.

<img loading="lazy" src={require('../assets/images/bugasura-integration/remove.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>


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
        Bugasura Integration
      </span>
    </li>
  </ul>
</nav>

