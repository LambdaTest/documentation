---
id: sumo-logic-integration
title: Sumo Logic Integration With TestMu AI
hide_title: true
sidebar_label: Sumo Logic
description: View your TestMu AI test results in a custom Sumo Logic dashboard. Gain deep insights into your automation scripts and identify gaps to ship quality products at light speed.
keywords:
  - testmu ai integrations
  - testmu ai integration with sumo logic
  - sumo logic integration 
url: https://www.testmu.ai/support/docs/sumo-logic-integration/
site_name: LambdaTest
slug: sumo-logic-integration/
canonical: https://www.testmu.ai/support/docs/sumo-logic-integration/
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
          "name": "Sumo Logic Integration",
          "item": `${BRAND_URL}/support/docs/sumo-logic-integration/`
        }]
      })
    }}
></script>

# Sumo Logic Integration
* * *

Sumo Logic is a cloud-based platform that modernizes your security operations. By analyzing security and operational issues with Sumo Logic, you can make smarter decisions and free up resources for other critical functions.

<BrandName /> and Sumo Logic enables you to view <BrandName /> results in a custom Sumo Logic dashboard and gain deeper insight into your automation scripts to ship quality products at light speed.

## Prerequisites
***

1. A <BrandName /> account. If you don't have an account, [sign up for free](https://accounts.lambdatest.com/register).
2. A Sumo Logic account.

## Configuring A Sumo Logic Collector
***

In order to push test data from <BrandName /> to Sumo Logic dashboard, you will need to create a collector in Sumo Logic.

### Adding A Collector

:::info note
If you already have an existing collector, please refer to [Adding A Source](#adding-a-source) section.

:::

1. Login to your Sumo Logic account. From the left sidebar, navigate to **Manage Data > Collection**.

<img loading="lazy" src={require('../assets/images/sumologic/dashboard-sumo.webp').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

2. To add a new collector, click **Add Collector** on the top-right corner.

<img loading="lazy" src={require('../assets/images/sumologic/add-collector.webp').default} alt="Gitpod popup" width="1092" height="285" className="doc_img img_center"/><br/>

3. A *Select Collector Type* pop-up will appear. Select **Hosted Collector**.

<img loading="lazy" src={require('../assets/images/sumologic/3.webp').default} alt="Gitpod popup" width="747" height="625" className="doc_img img_center"/><br/>

4. In the provided fields, enter the collector details like Name, Description, Category, Fields/Metadata, Budget, and, Time Zone. Then click **Save**.

<img loading="lazy" src={require('../assets/images/sumologic/collector.webp').default} alt="Gitpod popup" width="679" height="521" className="doc_img img_center"/><br/>

### Adding A Source

1. From Sumo Logic Home page, navigate to **Manage Data > Collection**.

<img loading="lazy" src={require('../assets/images/sumologic/dashboard-sumo.webp').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

2. Click **Add Source**. If you create a new collector, it will directly route you here.

<img loading="lazy" src={require('../assets/images/sumologic/source.webp').default} alt="Gitpod popup" width="1100" height="298" className="doc_img img_center"/><br/>

3. Select **HTTP Logs and Metrics**.

<img loading="lazy" src={require('../assets/images/sumologic/https-logs.webp').default} alt="Gitpod popup" width="1037" height="609" className="doc_img img_center"/><br/>

4. Enter the Source details like **Name**, **Description**, **Source Host**, **Source Category** and click **Save**.

<img loading="lazy" src={require('../assets/images/sumologic/collector-field.webp').default} alt="Gitpod popup" width="956" height="473" className="doc_img img_center"/><br/>

> The **Source Category** field is required. Otherwise, the test data will not get reflected in your Sumo Logic dashboard.

5. A *HTTP Source URL* will be generated that you need to provide while configuring the <BrandName /> Sumo Logic webhook. Copy the generated HTTP Source URL.

<img loading="lazy" src={require('../assets/images/sumologic/url.webp').default} alt="Gitpod popup" width="517" height="308" className="doc_img img_center"/><br/>


## Configuring The Sumo Logic Integration
***

1. Login to your <BrandName /> account and visit **Integrations** from the left sidebar.

2. From the ANALYTICS category, select **SUMO LOGIC**.

<img loading="lazy" src={require('../assets/images/sumologic/select-sumologic.webp').default} alt="Gitpod popup" width="866" height="386" className="doc_img img_center"/><br/>

3. In the Collector endpoint URL field, paste the copied HTTP Source URL and press **Install**.

<img loading="lazy" src={require('../assets/images/sumologic/install-sl.webp').default} alt="Gitpod popup" width="956" height="437" className="doc_img img_center"/><br/>

The Sumo Logic will be integrated with your <BrandName /> account.

## Installing the <BrandName /> App in Sumo Logic
---

1. Navigate to Sumo Logic Home and select **App Catalog** from the left navigation panel.

<img loading="lazy" src={require('../assets/images/sumologic/catalog.webp').default} alt="Gitpod popup" width="956" height="444" className="doc_img img_center"/><br/>

2. Find and select the <BrandName /> App using the search bar.

3. Click **Add Integration** to install the <BrandName /> app into your Sumo Logic account. It will then add the <BrandName /> dashboards (<BrandName /> - Test Overview and <BrandName /> - Test Error Overview) to your directory.

4. Click on the <BrandName /> **Test Overview** dashboard to get an overall insight about your testing trends.

<img loading="lazy" src={require('../assets/images/sumologic/test_overview.webp').default} alt="Gitpod popup" width="956" height="444" className="doc_img img_center"/><br/>

5. Click on the <BrandName /> **Test Error Overview** dashboard to understand your test error trends.

<img loading="lazy" src={require('../assets/images/sumologic/error_overview.webp').default} alt="Gitpod popup" width="956" height="444" className="doc_img img_center"/><br/>


## Removing The Sumo Logic Integration
***

1. Login to your <BrandName /> account and visit **Integrations** from the left sidebar.

2. From the MY INTEGRATIONS category, navigate to SUMO LOGIC and click **REMOVE**.

<img loading="lazy" src={require('../assets/images/sumologic/remove.webp').default} alt="Gitpod popup" width="956" height="444" className="doc_img img_center"/><br/>

The Sumo Logic integration will be uninstalled.

---

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
      <span className="breadcrumbs__link"> Sumo Logic Integration</span>
    </li>
  </ul>
</nav>


