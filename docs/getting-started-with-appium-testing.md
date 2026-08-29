---
id: getting-started-with-appium-testing
title: How to Run Your First Appium Test on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Run First Test"
description: "Run your first Appium test on real Android and iOS devices on TestMu AI: clone a sample project, upload your app, set capabilities, and view results."
keywords:
  - appium first test
  - run appium test on real devices
  - appium python testmu ai
  - mobile app automation appium
  - appium cloud testing
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/getting-started-with-appium-testing/
site_name: TestMu AI
slug: getting-started-with-appium-testing/
canonical: https://www.testmuai.com/support/docs/getting-started-with-appium-testing/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "How to Run Your First Appium Test on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-appium-testing/`
        }]
      })
    }}
></script>

# How to Run Your First Appium Test on TestMu AI
---

Running your first Appium test on TestMu AI executes native and hybrid mobile app automation on real Android and iOS devices. Clone a sample project, set credentials, upload your app, configure desired capabilities, and view detailed results on the dashboard.


:::tip Sample repo
All the code is in the TestMu AI sample repository. Clone it to follow along with the same files.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/LT-appium-python" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Appium Python sample project on the TestMu AI GitHub repository" className="doc_img"/> View on GitHub</a>
</div>
:::

Prefer another language? See [all supported Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks).

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
3. Install [Python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installation/).

## Step 1: Clone the Sample Project
---

Pull the sample repo to your machine, move into it, and install its dependencies.

```bash
git clone https://github.com/LambdaTest/LT-appium-python
cd LT-appium-python
pip install -r requirements.txt
```

## Step 2: Set Your Credentials
---

Export your TestMu AI **Username** and **Access Key** as environment variables so the test can authenticate with the device cloud.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Upload Your App
---

Upload your Android (`.apk`/`.aab`) or iOS (`.ipa`) app to TestMu AI with the REST API. Pass your credentials as `Username:AccessKey` for authentication, and point `appFile` at your app.

<Tabs className="docs__val">

<TabItem value="appfile" label="Upload a local file" default>
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@/Users/macuser/Downloads/proverbial_android.apk" -F "name=proverbial_app"`}
    </CodeBlock>
  </div>
</TabItem>

<TabItem value="appurl" label="Upload from a URL">
  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}
    </CodeBlock>
  </div>
</TabItem>

</Tabs>

:::tip
- No app of your own yet? Use a sample app: [Android](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or [iOS](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- The response is a JSON object with an `app_url` of the form `lt://APP123456789123456789`. Copy it for the next step.
:::

## Step 4: Configure the Test
---

The sample test builds a `desired_caps` object with the device, platform, and app, then connects to the TestMu AI hub at `mobile-hub.lambdatest.com/wd/hub`. Set the `app` value to the `app_url` from Step 3. Pick your platform:

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>

```python title="android.py"
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

desired_caps = {
    "deviceName": "Galaxy S20",
    "platformName": "Android",
    "platformVersion": "10",
    # highlight-next-line
    "app": "APP_URL",  # Enter app (.apk) url
    "isRealMobile": True,
    "build": "Python Vanilla Android",
    "name": "Sample Test - Python",
    "network": False,
    "visual": True,
    "video": True
}


def startingTest():
    if os.environ.get("LT_USERNAME") is None:
        username = "username"  # Add username here
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
        accesskey = "accesskey"  # Add accessKey here
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    try:
        driver = webdriver.Remote(desired_capabilities=desired_caps, command_executor="https://" +
                                  username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub")
        colorElement = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/color")))
        colorElement.click()

        textElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ID, "com.lambdatest.proverbial:id/Text")))
        textElement.click()

        toastElement = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/toast")))
        toastElement.click()

        notification = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
            (MobileBy.ID, "com.lambdatest.proverbial:id/notification")))
        notification.click()

        driver.quit()
    except Exception as e:
        print(e)
        driver.quit()


startingTest()
```

</TabItem>

<TabItem value="ios" label="iOS">

```python title="ios.py"
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

desired_caps = {
    "deviceName": "iPhone 12",
    "platformName": "ios",
    "platformVersion": "14",
    "isRealMobile": True,
    # highlight-next-line
    "app": "APP_URL",  # Enter app (.ipa) url
    "build": "Python Vanilla iOS",
    "name": "Sample Test - Python",
    "network": False,
    "visual": True,
    "video": True
}


def startingTest():
    if os.environ.get("LT_USERNAME") is None:
        username = "username"  # Add username here
    else:
        username = os.environ.get("LT_USERNAME")
    if os.environ.get("LT_ACCESS_KEY") is None:
        accesskey = "accesskey"  # Add accessKey here
    else:
        accesskey = os.environ.get("LT_ACCESS_KEY")

    try:
        driver = webdriver.Remote(desired_capabilities=desired_caps, command_executor="https://" +
                                  username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub")
        colorElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "color")))
        colorElement.click()
        textElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Text")))
        textElement.click()
        toastElement = WebDriverWait(driver, 20).until(
            EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "toast")))
        toastElement.click()
        driver.quit()
    except Exception as e:
        print(e)
        driver.quit()


startingTest()
```

</TabItem>

</Tabs>

:::info
- Add the `app_url` from Step 3 to the `app` capability.
- Set `isRealMobile` to `False` to run on virtual devices instead of real ones.
- Generate a capabilities set for any device/OS with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). For every supported key, see [Appium automation capabilities](/support/docs/desired-capabilities-in-appium/).
:::

## Step 5: Run the Test
---

Run the script for your platform from the project directory.

<Tabs className="docs__val">

<TabItem value="android" label="Android" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`python3 android.py`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="ios" label="iOS">

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`python3 ios.py`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

:::tip
If `python3` is not recognized, use `python` instead.
:::

## Step 6: View Your Results
---

Open the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) to see your test. Each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Test Locally Hosted Apps
---

To test an app hosted on your local machine, a private staging server, or a host behind your firewall, route the test through the TestMu AI tunnel. The tunnel opens a secure connection between your machine and the TestMu AI device cloud so the test can reach apps it cannot access directly.

### Set Up the Tunnel
---

Download and start the tunnel binary before you run the test.

1. Download the binary for your operating system:
   - Windows: **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
   - macOS: **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
   - Linux: **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**
2. Extract the downloaded file.
3. Open a terminal in the folder where you extracted the binary and start the tunnel:

```bash
./LT --user {your login email} --key {your access key} --tunnelName {your tunnel name}
```

### Enable the Tunnel Capability
---

With the tunnel running, set the `tunnel` capability to `true` in your `desired_caps` object so the test routes through it.

| Capability | Values | Description |
| --- | --- | --- |
| `tunnel` | `true` / `false` | Route the test through the TestMu AI tunnel to reach a locally hosted app. |

You can also add the `tunnel` capability from the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Next Steps
---

Continue with these related guides:

- [Appium automation capabilities](/support/docs/desired-capabilities-in-appium/)
- [Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks)
- [Upload apps to the real device cloud](/support/docs/application-setup-via-api/)
- [App Automation Dashboard](/support/docs/app-automation-dashboard/)

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
        How to Run Your First Appium Test on TestMu AI
      </span>
    </li>
  </ul>
</nav>
