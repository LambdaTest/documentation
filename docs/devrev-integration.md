---
id: devrev-integration
title: DevRev Integration
hide_title: true
sidebar_label: DevRev
description: Integrate TestMu AI with DevRev for efficient one-click bug logging of your web applications and eliminate the painpoint of maintaining bugs and tasks manually.
keywords:
  - testmu ai integration with devrev
  - testmu ai and devrev integration 
  - devrev integration
url: https://www.testmu.ai/support/docs/devrev-integration/
site_name: LambdaTest
slug: devrev-integration
canonical: https://www.testmu.ai/support/docs/devrev-integration/
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
          "name": "DevRev Integration",
          "item": `${BRAND_URL}/support/docs/devrev-integration/`
        }]
      })
    }}
></script>

# DevRev Integration
***

DevRev is a customer relationship management (CRM) system that seamlessly integrates customer support conversations and tickets with developer issues and product enhancements.

With the help of <BrandName /> and DevRev Integration, you can file bugs while performing live-interactive testing of your web applications from the <BrandName /> platform to your DevRev instance, thus saving time and effort.

## Integrating DevRev With <BrandName />
***

:::info Note
Before enabling <BrandName /> and DevRev integration, ensure you have administrator or user level access.
:::

1. Sign in to your <BrandName /> account. Don't have an account, [register for free](https://accounts.lambdatest.com/register).

2. Select **Integrations** from the left sidebar. Then choose **DevRev** from the BUG TRACKER section.

<img loading="lazy" src={require('../assets/images/devrev-integration/select_devrev.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

3. It will route you to the <BrandName /> installing console where you need to enter DevOrg URL and DevRev Personal Access Token.

<img loading="lazy" src={require('../assets/images/devrev-integration/2.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

### Getting The DevOrg URL

1. Login to your DevRev account.

2. Click on the avatar icon on the top-right and select **Settings**.

<img loading="lazy" src={require('../assets/images/devrev-integration/settings.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

3. Navigate to **General**.

<img loading="lazy" src={require('../assets/images/devrev-integration/general.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. You will notice the DevOrg URL. Copy this URL and paste it in the <BrandName /> installing console.

<img loading="lazy" src={require('../assets/images/devrev-integration/devorg_url.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

### Getting The DevRev Personal Access Token


1. Click on the avatar icon on the top-right and select **Settings**.

<img loading="lazy" src={require('../assets/images/devrev-integration/settings.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

2. From the Personal Access Tokens, click **New Token**.

<img loading="lazy" src={require('../assets/images/devrev-integration/new_token.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

3. Enter the token name and choose its validity. Then click **Generate**.

<img loading="lazy" src={require('../assets/images/devrev-integration/generate.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. Copy the generated DevRev Personal Access Token.

<img loading="lazy" src={require('../assets/images/devrev-integration/token.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

5. Paste the copied API token in the <BrandName /> installing console.

<img loading="lazy" src={require('../assets/images/devrev-integration/install.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

It will now integrate your <BrandName /> account with DevRev.

## One-Click Bug Logging With DevRev
***

1. Once you are in the <BrandName /> Dashboard, navigate to **Real Time Testing > Browser Testing** from the left sidebar menu.

<img loading="lazy" src={require('../assets/images/devrev-integration/browser_testing.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

2. Enter the web URL that you wish to test, select testing type (Desktop/Mobile), select the browser **VERSION**, **OS**, **RESOLUTION**, and click **START**.

<img loading="lazy" src={require('../assets/images/devrev-integration/configuration.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

A cloud-based real operating system will fire up running real browsers where you can test websites and web apps for logging bugs.

3. If you come across any issue, click the **Bug** icon from the left in-session tool bar to capture screenshot of a web page.

<img loading="lazy" src={require('../assets/images/devrev-integration/vm.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

4. Using the in-built annotation tool bar, mark any issues, and tasks on a web page. Once you have marked the bugs, click **Mark as Bug** icon under the INTEGRATIONS section.

<img loading="lazy" src={require('../assets/images/devrev-integration/ticket.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

5. To log a bug in DevRev, fill out the required information in the DevRev ticket, such as Type, Part, Priority, Summary and Description. Click **Mark As Bug**.

<img loading="lazy" src={require('../assets/images/devrev-integration/mab.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

It will log your bugs to the DevRev instance.

6. Navigate to the <BrandName /> Dashboard and go to **Manage > Issue Tracker**. 

8. In Issue Tracker, you will see the bugs that you just logged in DevRev along with their associated test environment details. To view your logged bugs, click on the **upper right arrow in the square button**.

<img loading="lazy" src={require('../assets/images/devrev-integration/arrow_icon.png').default} alt="Image" width="1127" height="425"  className="doc_img"/>

It will redirect to the DevRev instance where you can view your filed bugs along with their test environment details such as Test ID, Reproduce on <BrandName /> link, Test URL, Operating System, Browser, and Resolution.

<img loading="lazy" src={require('../assets/images/devrev-integration/logged_issue.png').default} alt="Image" width="1366" height="625"  className="doc_img"/>

## Uninstalling The DevRev Integration
***

1. Sign in to your <BrandName /> account and visit **Integrations** from the left sidebar menu.

2. From **My Integrations**, click **REMOVE** under the DevRev block.

<img loading="lazy" src={require('../assets/images/devrev-integration/remove.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>


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
        DevRev Integration
      </span>
    </li>
  </ul>
</nav>

