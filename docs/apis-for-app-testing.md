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
url: https://www.testmuai.com/support/docs/app-testing-apis/
site_name: TestMu AI
slug: app-testing-apis/
canonical: https://www.testmuai.com/support/docs/app-testing-apis/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "Commonly Used APIs For Mobile App Testing",
          "item": `${BRAND_URL}/support/docs/app-testing-apis`
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
|-----------------|-------------|------------|
| `region` | `region=us` <br/> OR <br/> `region=ap` <br/> OR <br/> `region=eu`  | Filter devices by region. <br/> `us` - USA <br/> `ap` - Asia Pacific <br/> `eu` - Europe |
| `os` | `os=android` <br/> OR <br/> `os=ios` | Filter devices by platform. Omit to get both Android and iOS devices. |

## Uploading your Application
***


| PARAMETER | EXAMPLE | DESCRIPTION |
|-----------------|-------------|------------|
| `custom_id` | `-F "custom_id="Proverbial_1.0"` | You do not have to remember the `app_URL` and only use the `custom_id` to run your automation on the same app. |
| `storage` | `-F "storage=file"` <br/> DEFAULT: `url` | Used to change the way <BrandName /> stores the link. <br/> Used when we Upload using App URL |
| `visibility` | `-F "visibility=team"` <br/> DEFAULT: `individual` | Used to change the visibility of the application being uploaded. Once the app is uploaded using the `team`, everyone in the organisation can use the same URL to run the tests. |

-----

**Using App File:**

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""
`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "appFile=@"/Users/macuser/Downloads/Appname.apk"" -F "name="appname""
`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

**Using App URL:**

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App" -F "custom_id=sampleName" -F "storage=url" -F "visibility=individual"`}
</CodeBlock>
</div>
</TabItem>

</Tabs>


:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789``

:::

## Fetching your Applications for Real Devices
***
<Tabs className="docs__val">

<TabItem value="android" label="Android" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=android&level=user"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=ios&level=user"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Fetching your Applications for Virtual Devices
***
<Tabs className="docs__val">

<TabItem value="android" label="Android" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=emulator&level=user"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`curl --location --request GET "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/data?type=simulator&level=user"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

Shown below is the response to the above cURL request.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`{
  "metaData": {
    "type": "ios",
    "total": 1
  },
  "data": [
    {
      "app_id": "APP100245789181570497850",
      "name": "proverbial_ios.ipa",
      "type": "ios",
      "updated_at": "2022-05-10T11:19:30.000Z",
      "shared": false,
      "source": "web-client"
    }
  ]
}`}
</CodeBlock>
</div>

## Deleting your Application
***

To delete your uploaded apps, run the below cURL command.

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request DELETE "https://${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}@manual-api.lambdatest.com/app/delete" \
--header 'Content-Type: application/json' \
--data-raw '{
    "appIds" : "APPID1,APPID2"
}'
`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

Shown below is the response to the above cURL request.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`{
  "message": "Deleted successfully."
}`}
</CodeBlock>
</div>

## Processing check for your Application
***

To unlock features such as network logs, image injection, and screenshotunblock feature for your application, app needs to undergo a processing phase. This processing takes a few minutes after the application is uploaded. You can verify if the processing is complete before running your automation script using the following API.

<Tabs className="docs__val">

<TabItem value="real" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl' \
--header 'Authorization: Basic <Basic>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl --location --request POST 'https://mobile-api.lambdatest.com/mobile-automation/api/v1/fetchpatchedapkurl/virtualDevice' \
--header 'Authorization: Basic <Basic>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appId": "APP10160161171698993659206876",
    "imageInjectionEnabled": true,
    "screenshotUnblockEnabled": true
}'`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

The payload allows you to check the processing status for specific features. If the **patched_url** is empty, the processing is still in progress. To check if the processing for image injection or screenshot unblock is complete, pass either **imageInjectionEnabled** or **screenshotUnblockEnabled** as `true` based on the feature you are testing.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`{
    "data": {
        "imageinjection_ready": false, //current processing status
        "patched_url": "",
        "screenshotunblock_ready": false, //current processing status
        "status": "success"
    },
    "status": "success"
}`}
</CodeBlock>
</div>


## Fetching the concurrency details
***

To get your concurrency details, run the below cURL command.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X GET "https://mobile-api.lambdatest.com/mobile-automation/api/v1/org/concurrency"`}
</CodeBlock>
</div>

Shown below is the response to the above cURL request.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`{
   "data":{
      "max_concurrency":10,
      "max_queue":150,
      "queued":0,
      "running":0
   },
   "status":"success"
}`}
</CodeBlock>
</div>

## Generate publicly shareable build and test links
<RealDeviceTag value="Real Device" />
<VirtualDeviceTag value="Virtual Device" />

To generate public shareable links, run the below cURL command.

<Tabs className="docs__val">

<TabItem value="build" label="Build Link" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl 'https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link' \
  -H 'Content-Type: application/json' \
  -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \
  --data-raw '{"entityIds":["buildID"],"entityType":"App Automation Build","expiresAt":7}'`}
</CodeBlock>
</div>
</TabItem>

<TabItem value="test" label="Test Link">
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl 'https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link' \
  -H 'Content-Type: application/json' \
  -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" \
  --data-raw '{"entityIds":["testID"],"entityType":"App Automation Test","expiresAt":7}'`}
</CodeBlock>
</div>
</TabItem>

</Tabs>

| PARAMETER | DESCRIPTION |
|-----------|-------------|
| `entityIds` | Pass the build ID or test ID |
| `entityType` | Use `App Automation Build` for builds or `App Automation Test` for tests |
| `expiresAt` | Number of days after which the shareable link will expire (7, 15, or 30) |

-----

:::note
The shareable links are valid for a period of 7, 15, or 30 days, after which they will expire.

:::

>That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmu.ai.

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
      Mobile App Testing APIs
      </span>
    </li>
  </ul>
</nav>
