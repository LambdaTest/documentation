---
id: new-relic-integration
title: New Relic Integration With TestMu AI
hide_title: true
sidebar_label: New Relic
description: View your TestMu AI test results in a custom New Relic dashboard. Gain deep insights into your automation scripts and identify gaps to ship quality products at light speed.
keywords:
  - testmu ai integrations
  - testmu ai integration with new relic
  - new relic integration 
url: https://www.testmu.ai/support/docs/new-relic-integration
site_name: LambdaTest
slug: new-relic-integration
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
          "name": "New Relic Integration",
          "item": `${BRAND_URL}/support/docs/new-relic-integration/`
        }]
      })
    }}
></script>

# New Relic Integration
***

New Relic is a comprehensive observability platform that helps you monitor, troubleshoot, and optimize your software systems. It collects data from all your applications, infrastructure, and logs and provides insights into how your system is performing and where potential problems lie.

<div className="ytframe"> 
<div className="youtube" data-embed="dv1Dy7Ioc4E">
    <div className="play-button"></div>
</div>
</div>

<BrandName /> and New Relic enable you to view <BrandName /> results in a custom New Relic dashboard and gain deeper insight into your automation scripts to ship quality products at light speed.

## Prerequisites
***

- A <BrandName /> account. If you don't have an account, [sign up for free](https://accounts.lambdatest.com/register).
- A New Relic account, If you don't have an account, [sign up for free](https://newrelic.com/signup)

## Integrating New Relic with <BrandName />
***

**Step 1:** Visit the New Relic UI. Click on [**Add Data**](https://one.newrelic.com/marketplace) button on the left navigation.

**Step 2:** Search **<BrandName />**, select the tile, and click on:
  1. **See installation docs** if you have not configured your <BrandName /> account.
  2. **Skip this step** if you have already instrumented <BrandName /> (from Step 3 to Step 5).

You can copy the Licence key details from the side bar which will be required in the **Step 5**.

This will automatically deploy a pre-built dashboard for you in New Relic. Click on **See your data** button to check the <BrandName /> Dashboards.

<img loading="lazy" src={require('../assets/images/new-relic/6.png').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

**Step 3:** Visit the <BrandName /> Dashboard. Go to the **Settings** page.

**Step 4:** Click on the **Integrations** tab. Select **New Relic** from the **Analytics** section.

<img loading="lazy" src={require('../assets/images/new-relic/1.png').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

**Step 5:** Now enter the **License Key/API Key** and select your **Region**

- In order to get the New Relic **License/API** Key, refer to the New Relic UI from Step 2.

Alternatively, you can go to your **New Relic** account > **Profile** > [**API Keys**](https://one.newrelic.com/api-keys).

> You can either use the existing API keys or you can create a new one.

- Paste the License/API Key and Region in the required field.

- Click on **Install** button.

The New Relic will be integrated with your <BrandName /> account.

<img loading="lazy" src={require('../assets/images/new-relic/2.png').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

- After successful integration, New Relic will trigger the log ingestion that will now create the <BrandName /> dashboards (<BrandName /> - Test Overview and <BrandName /> - Test Error Overview) to your directory.

## <BrandName /> Dashboards - Test Overview and Test Error Overview

- Click on the **<BrandName /> Test Overview** dashboard to get an overall insight about your testing trends.

<img loading="lazy" src={require('../assets/images/new-relic/3.png').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

- Click on the **<BrandName /> Test Error Overview** dashboard to understand your test error trends.

<img loading="lazy" src={require('../assets/images/new-relic/4.jpeg').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

## Removing The New Relic Integration

**Step 1:** Login to your <BrandName /> account and visit **Integrations** from the left sidebar.

**Step 2:** From the **MY INTEGRATIONS** category, navigate to **NEW RELIC** and click REMOVE.

<img loading="lazy" src={require('../assets/images/new-relic/5.png').default} alt="Gitpod popup" width="1215" height="625" className="doc_img img_center"/><br/>

The New Relic integration will be uninstalled.
