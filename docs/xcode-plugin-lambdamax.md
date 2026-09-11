---
id: xcode-plugin-lambdamax
title: LambdaMax XCode Plugin
sidebar_label: LambdaMax XCode Plugin
description: TestMu AI XCode plugin to run automated tests directly on the TestMu AI grid. 
keywords:
  - xcode
  - lambdamax
  - automation testing 
url: https://www.testmuai.com/support/docs/xcode-plugin-testmu/
site_name: TestMu AI
slug: xcode-plugin-testmu/
canonical: https://www.testmu.ai/support/docs/xcode-plugin-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "LambdaMax XCode Plugin",
          "item": `${BRAND_URL}/support/docs/xcode-plugin-testmu/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/xcode-plugin-testmu/"
    },
    "headline": "LambdaMax XCode Plugin",
    "description": "TestMu AI XCode plugin to run automated tests directly on the TestMu AI grid.",
    "url": "https://www.testmuai.com/support/docs/xcode-plugin-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "xcode",
      "lambdamax",
      "automation testing"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Here is the sample code for the Xcode plugin",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "Xcode plugin:\nCustom Xcode Script and Images attached below:\n\n#!/bin/sh\n\n#  ci_post_xcodebuild.sh\n#  Debug/Release build name if required\n#\n#  Created by Ankit Agarwal on 08/11/22.\n#\n\nAppUploadResponse=$(curl -w --location --request POST 'https://{username}:{accessKey}@manual-api.lambdatest.com/app/upload/realDevice' --form 'name=\"{name}\"' --form 'appFile=@\"{filePathWithNameAndExtension}\"' --form 'custom_id=\"{custom_id}\"')\n\nappId=$(awk '{sub(/.*\\\"app_url\\\":\\\"/,\"\");sub(/\\\",\\\"url.*/,\"\");print}' <<< \"$AppUploadResponse\")\n\necho \"$appId\"\n\nTestAppUploadResponse=$(curl -w --location --request POST 'https://{username}:{accessKey}@manual-api.lambdatest.com/app/upload/realDevice' --form 'name=\"{name}\"' --form 'appFile=@\"{filePathWithNameAndExtension}\"' --form 'custom_id=\"{custom_id}\"')\n\ntestAppID=$(awk '{sub(/.*\\\"app_url\\\":\\\"/,\"\");sub(/\\\",\\\"url.*/,\"\");print}' <<< \"$TestAppUploadResponse\")\n\necho \"$testAppID\"\n\nTestExeuctionPayload=\"{\\\"app\\\": \\\"$appId\\\", \\\"testSuite\\\": \\\"$testAppID\\\", \\\"device\\\": [ \\\"iPhone X-14\\\" ], \\\"tunnel\\\": false, \\\"network\\\": true, \\\"devicelog\\\": true, \\\"queueTimeout\\\": 3000, \\\"idleTimeout\\\": 200, \\\"build\\\": \\\"otrium1\\\", \\\"project\\\": \\\"testerror\\\" }\"\n\necho \"$TestExeuctionPayload\"\n\nXCUITTestExecution=$(curl -w --location --request POST 'https://{username}:{accessKey}@mobile-api.lambdatest.com/framework/v1/xcui/build' --header 'Content-Type: application/json' --data-raw \"$TestExeuctionPayload\")\n\necho \"$XCUITTestExecution\""
      }
    ],
    "dateModified": "2026-06-02T12:20:54+05:30"
  }) }}
/>

-----------------------------------------------------------------------------------------------------------------------------
<BrandName /> have developed a new plugin to help developers execute tests on the <BrandName /> Grid directly from the XCode (via LambdaMax). The all-new <BrandName /> plugin will allow developers and testers to directly run automated tests based on XCUIT (XCode) framework on the <BrandName /> real device cloud.

XCUITest is a testing framework that can be used to automate UI tests for native iOS and macOS applications. The framework uses XCTest, an integrated testing framework developed by Apple. You can write automated UI tests using the XCUITest framework in Swift or Objective-C programming language.

With this new plugin, testers and developers never have to leave XCode to execute a test on <BrandName />’s real device cloud. Follow these steps to install LambdaMax plugin:

## How to Install LambdaMax Plugin
-----------------------------------------------------------------------------------------------------------------------------
1. On **Xcode** on your machine.

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-main.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/><br/>

2. Head to **Product** on the menu bar in the top-left corner.

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-menu.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

3. Hover on the **Scheme** option from the dropdown and click on the **Edit Scheme** from the dropdown list. 

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-dropdown.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

4. In the pop-up window, click and expland the **Build** option from the sidebar. 

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-build-option.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

5. Head to the **Post Actions** option from the sidebar and copy the sample code. 

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-build-dropdown.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

6. Click on **+** icon to add **"New Script Run Action"**. You can change the path and capabilities as per your preference, which will reflect directly on the <BrandName /> Grid.

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-build-code.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

Here is the sample code for the Xcode plugin:

<VerifiedTag value="Verified" />

```bash
Xcode plugin:
Custom Xcode Script and Images attached below:

#!/bin/sh

#  ci_post_xcodebuild.sh
#  Debug/Release build name if required
#
#  Created by Ankit Agarwal on 08/11/22.
#

AppUploadResponse=$(curl -w --location --request POST 'https://{username}:{accessKey}@manual-api.lambdatest.com/app/upload/realDevice' --form 'name="{name}"' --form 'appFile=@"{filePathWithNameAndExtension}"' --form 'custom_id="{custom_id}"')

appId=$(awk '{sub(/.*\"app_url\":\"/,"");sub(/\",\"url.*/,"");print}' <<< "$AppUploadResponse")

echo "$appId"

TestAppUploadResponse=$(curl -w --location --request POST 'https://{username}:{accessKey}@manual-api.lambdatest.com/app/upload/realDevice' --form 'name="{name}"' --form 'appFile=@"{filePathWithNameAndExtension}"' --form 'custom_id="{custom_id}"')

testAppID=$(awk '{sub(/.*\"app_url\":\"/,"");sub(/\",\"url.*/,"");print}' <<< "$TestAppUploadResponse")

echo "$testAppID"

TestExeuctionPayload="{\"app\": \"$appId\", \"testSuite\": \"$testAppID\", \"device\": [ \"iPhone X-14\" ], \"tunnel\": false, \"network\": true, \"devicelog\": true, \"queueTimeout\": 3000, \"idleTimeout\": 200, \"build\": \"otrium1\", \"project\": \"testerror\" }"

echo "$TestExeuctionPayload"

XCUITTestExecution=$(curl -w --location --request POST 'https://{username}:{accessKey}@mobile-api.lambdatest.com/framework/v1/xcui/build' --header 'Content-Type: application/json' --data-raw "$TestExeuctionPayload")

echo "$XCUITTestExecution"
```
>**Note:** By clicking on the **Play** button in the top left corner, the script will automatically run on the <BrandName /> Grid.

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-play.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/><br/>

7. In the above code, update the required <BrandName /> credentials - `{Username:AccessKey}`. You can access your credentials under the [profile section](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

<img loading="lazy" src={require('../assets/images/lambdamax/lambdamax-profile.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/><br/>

8. Along with this, you need to update the `{FilePathWithNameAndExtension}` with the path where your app and test suite is in local. 

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
        <BrandName /> XCode Plugin
      </span>
    </li>
  </ul>
</nav>
