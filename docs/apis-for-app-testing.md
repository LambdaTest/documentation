---
id: app-testing-apis
title: Commonly Used APIs For Mobile App Testing
# hide_title: true
sidebar_label: APIs For App Testing
description: Quick guide on commonly used APIs for Mobile App testing.
keywords:
- apis for manual app testing
- api sfor app automation
- mobile app testing apis
url: https://www.lambdatest.com/support/docs/app-testing-apis/
site_name: LambdaTest
slug: app-testing-apis/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

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
          "name": "Commonly Used APIs For Mobile App Testing",
          "item": "https://www.lambdatest.com/support/docs/app-testing-apis"
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
In this documentation, we look at some APIs that will help you optimize your mobile app testing workflow. If you are performing live or automated app testing, you can use these APIs in your scripts to perform various actions.

## Fetching The Devices Available for Testing
<RealDeviceTag value="Real Device" />
To fetch the Devices that are available for running Tests.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/list?region=us"
`}
</CodeBlock>
</div>

| PARAMETER | EXAMPLE | DESCRIPTION |
|-----------|---------|-------------|
| `region` | `region=us` <br/> OR <br/> `region=ap` <br/> OR <br/> `region=eu`  | We can add a region parameter which will provide us the devices available in the relevant real device cloud. <br/> `us` - USA <br/> `ap` - Asia Pacific <br/> `eu` - Europe |

## Fetching the concurrency details

To get your concurrency details, run the below cURL command. 

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/org/concurrency"`}
</CodeBlock>
</div>

Shown below is the response to the above cURL request.

```javascript
{
  "data":{
    "created":0,
    "max_concurrency":10,
    "max_queue":150,
    "pqueued":0,
    "queued":0,
    "running":0
},
"status":"success"
}
```

## Generate publicly shareable build and test links
<RealDeviceTag value="Real Device" />
<VirtualDeviceTag value="Virtual Device" />
To generate public **shareable build link**, run the below cURL command. 

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl 'https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link' \
  -H 'Content-Type: application/json' \
  -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \
  --data-raw '{"entityIds":["buildID"],"entityType":"App Automation Build","expiresAt":7}'`}
</CodeBlock>
</div>


To generate public **shareable test link**, run the below cURL command. 

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl 'https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link' \
  -H 'Content-Type: application/json' \
  -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \
  --data-raw '{"entityIds":["testID"],"entityType":"App Automation Test","expiresAt":7}'
`}

</CodeBlock>
</div> 

| Type | Parameter | Description |
|------|-----------|-------------|
| Test | `entityIds` <br/>  <br/> `entityType` <br/>   <br/> `expiresAt`  | For tests, pass `entityIds` as the test id and pass `entityType` as "App Automation Test" <br/> `expiresAt` is the number of days after which the shareable test link will expire '|
| Build | `entityIds` <br/>  <br/> `entityType` <br/> <br/> `expiresAt`  | For builds, pass `entityIds` as the build id and pass `entityType` as "App Automation Build" <br/> `expiresAt` is the number of days after which the shareable build link will expire '|

:::note
The shareable links are valid for a period of 7, 15, or 30 days, after which they will expire.

:::

>That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
      Mobile App Testing APIs
      </span>
    </li>
  </ul>
</nav>
