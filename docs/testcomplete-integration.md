---
id: testcomplete-integration
title: TestComplete
hide_title: false
sidebar_label: TestComplete
description: TestMu AI offers integration with TestComplete to help you perform web and app automation testing on 3000+ real browsers, devices, and operating systems combinations.
keywords:
- testmu ai integrations
- testmu ai integrations with testcomplete
- testcomplete integration
- testcomplete integration with testmu ai
- testmu ai integration with testcomplete
- testcomplete testmu ai
url: https://www.testmu.ai/support/docs/testcomplete-integration
site_name: LambdaTest
slug: testcomplete-integration
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
          "name": "TestComplete",
          "item": `${BRAND_URL}/support/docs/testcomplete-integration/`
        }]
      })
    }}
></script>
TestComplete, from SmartBear, streamlines automated testing across desktop, web, and mobile applications. It goes beyond recording clicks—build readable tests with keywords, identify UI elements for reliability, and leverage data-driven testing for comprehensive coverage.

<BrandName /> integration with TestComplete lets you perform web and app automation testing across 3000+ real browsers, devices, and OS combinations.

> The TestComplete application will only work on the **Windows** operating system.

## Prerequisites

- <BrandName /> account. You can [sign up for free.](https://accounts.lambdatest.com/login)
- <BrandName /> [Username and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/).
- Download TestComplete from its official website and complete the signup process.
- Generate your App Id by uploading it to the <BrandName /> Server.

<!-- ## Web Automation Using TestComplete And <BrandName />
---

:::info Note

- **Single Test**: To run a single test, you can use `Browsers.RemoteItem(server, capabilities).Run(url)` function in the test script. 
- **Parallel Test**: To run the parallel tests, you can use `Parallel.RunEnvironments(tests, browser_caps, url, server);` function in the test script.
:::

1. Launch TestComplete and open your test script. 

<img loading="lazy" src={require('../assets/images/testcomplete-integration/1.png').default} alt="Synapse Architecture" width="1912" height="996" className="doc_img"/>

2. Visit [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) and copy the <BrandName /> Hub URL.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/2.png').default} alt="Synapse Architecture" width="1908" height="846" className="doc_img"/>

3. In your test script, paste the Hub URL to the " server".

<img loading="lazy" src={require('../assets/images/testcomplete-integration/3.png').default} alt="Synapse Architecture" width="1920" height="1080" className="doc_img"/>

4. Visit <BrandName /> Automation Capabilities Generator. Select Selenium version, choose desired language, and the select the required browser and OS combinations to run the test on <BrandName />.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/web-caps.png').default} alt="Synapse Architecture" width="1225" height="565" className="doc_img"/>

5. Copy the generated desired capabilities and paste in your test script.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/4.png').default} alt="Synapse Architecture" width="1912" height="992" className="doc_img"/>

6. Now run the test.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/5.png').default} alt="Synapse Architecture" width="1340" height="617" className="doc_img"/>

7. Go to <BrandName /> Automation Dashboard to view your test results.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/6.png').default} alt="Synapse Architecture" width="1904" height="829" className="doc_img"/>

You can also see the video recording and logs for individual test session in the Automation Dashboard. 

<img loading="lazy" src={require('../assets/images/testcomplete-integration/7.png').default} alt="Synapse Architecture" width="1910" height="844" className="doc_img"/> -->

## Steps to Automate your Application

**Step 1:** Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val" groupId="os">
<TabItem value="macos" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' --form 'name="Android_App"' --form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"' 
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

**Step 2 :** Click on the Record Test button.

**Step 3 :** Enter your project name, select project location and select your desired test type. In this demo we are selecting the Javascript. Click on the Next button.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/7.png').default} alt="configuration" className="doc_img"/>

**Step 4 :** Now select Mobile as your application type and click on Record button.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/8.png').default} alt="configuration" className="doc_img"/>

**Step 5 :** Now your recording will start and a modal window will pop-up to enter the required capabilities in the parameters section as shown below. Click on OK button.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/9.png').default} alt="configuration" className="doc_img"/> <br /><br />

:::info
Update your **APP_ID**, **YOUR_LAMBDATEST_USERNAME**, and **YOUR_LAMBDATEST_ACCESS_KEY** while passing the capabilities.
:::

```bash title="Sample code for capabilities"
{
    "platformName": "android",
		"deviceName": "Galaxy s21 5G",
	"lt:options": {
		"w3c": true,
		"platformName": "android",
		"deviceName": "Galaxy s21 5G",
		"platformVersion": "12",
		"isRealMobile": true,
                 "app":"<APP_ID>",
                 "user":"<YOUR_LAMBDATEST_USERNAME>",
                 "accessKey":"<YOUR_LAMBDATEST_ACCESS_KEY>"
	}
}
```

**Step 6 :** Now whatever steps you will perform in the application will get recorded. Click on the stop button when you are completed with your testing.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/10.png').default} alt="configuration" className="doc_img" style={{height:'40rem'}}/> <br /><br />

**Step 7 :** This will start processing the complete recording and within no time-stamp you will be able to check your recordings.

Click on the run button to check your script.

<img loading="lazy" src={require('../assets/images/testcomplete-integration/11.png').default} alt="configuration" className="doc_img"/>

Your test results would be displayed on on the [**<BrandName /> App Automation Dashboard**](https://appautomation.lambdatest.com/build).


> In case you have any questions, feel free to share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Portal**</span> or by mailing to us on [**support@lambdatest.com**](mailto:support@lambdatest.com). <br />

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">TestComplete Integration</span>
    </li>
  </ul>
</nav>
