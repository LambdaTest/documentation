---
id: kane-ai-geolocation-tunnel-proxy
title: KaneAI - Geolocation, Tunnel and Proxy Support
hide_title: false
sidebar_label: Geolocation, Tunnel, and Proxy
description: Learn how to run your web tests on KaneAI using geolocation, tunnel, and dedicated proxy configurations.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai geolocation support
  - kaneai tunnel support
  - kaneai proxy support
url: https://www.testmu.ai/support/docs/kane-ai-geolocation-tunnel-proxy/
site_name: LambdaTest
slug: kane-ai-geolocation-tunnel-proxy/
canonical: https://www.testmu.ai/support/docs/kane-ai-geolocation-tunnel-proxy/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "KaneAI Geolocation, Tunnel, and Proxy Support",
          "item": `${BRAND_URL}/support/docs/kane-ai-geolocation-tunnel-proxy/`
        }]
      })
    }}
></script>

Now you can start your web tests on Kane AI using advanced configurations like geolocation, tunnel, and dedicated proxy support.

## Geolocation Support

With KaneAI's geolocation feature, you can simulate user interactions from different regions to ensure your website works as expected worldwide.

### Steps to Use Geolocation

**Step 1 :** Select the **Geolocation** option from the **Advanced Settings** and choose your desired region.

**Step 2 :** Run your web test on KaneAI with traffic proxied through the selected region.

**Step 3 :** Once the test is saved, the generated code will include geolocation details automatically, making it easier to 
replicate the test across different regions.

<img loading="lazy" src={require('../assets/images/kane-ai/geolocation.png').default} alt="Image" width="1200" height="550" className="doc_img"/>

## Tunnel Support

KaneAI also supports tunneling to allow you to test websites hosted locally or behind a firewall.

### Steps to Use Tunnel

**Step 1 :** Configure the tunnel using the [LT tunnel binary](/support/docs/testing-locally-hosted-pages/#lambdatest-tunnel-guide) with `--env ht-prod` mode enabled. You can use the following command to trigger your tunnel:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()}  --env ht-prod -v -n TUNNEL_NAME`}
</CodeBlock>
</div>

**Step 2 :** Select the tunnel from the **Advanced Settings** on KaneAI and choose the tunnel that you have spun up.

**Step 3 :** Run your web test on KaneAI from a locally hosted webpage.

**Step 4 :** Once the test is saved, the generated code will include tunnel details automatically for easy replication.

## Dedicated Proxy Support (Enterprise only)

KaneAI offers support for dedicated proxy usage, exclusively available for enterprise accounts with dedicated proxy enabled.

### Steps to Use Dedicated Proxy

**Step 1 :** Select the **Dedicated Proxy** option from the **Advanced Settings** and choose the region.

**Step 2 :** Run your web test on KaneAI with traffic routed through the dedicated proxy IP configured for your organization.

**Step 3 :** Once the test is saved, the generated code will include proxy details automatically, allowing seamless future executions.

<img loading="lazy" src={require('../assets/images/kane-ai/dedicated-proxy.png').default} alt="Image" width="1200" height="550" className="doc_img"/>
