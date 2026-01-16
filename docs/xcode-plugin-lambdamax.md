---
id: xcode-plugin-lambdamax
title: LambdaMax XCode Plugin
sidebar_label: LambdaMax XCode Plugin
description: TestMu AI XCode plugin to run automated tests directly on the TestMu AI grid. 
keywords:
  - xcode
  - lambdamax
  - automation testing 
url: https://www.testmu.ai/support/docs/xcode-plugin-testmu/
site_name: LambdaTest
slug: xcode-plugin-testmu/
canonical: https://www.testmu.ai/support/docs/xcode-plugin-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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

7. In the above code, update the required <BrandName /> credentials - `{Username:AccessKey}`. You can access your credentials under the [profile section](https://accounts.lambdatest.com/detail/profile).

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
