---

id: getting-started-with-appium-testing
title: "Run Appium Tests on TestMu AI: Getting Started"
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Run First Test"
description: "Run your first Appium test on real Android and iOS devices on TestMu AI: clone a sample project, upload your app, set capabilities, and view results."
keywords:

  - appium

  - java

  - testmu ai java

  - framework on testmu ai

  - testng

  - app testing

  - real devices

url: https://www.testmuai.com/support/docs/getting-started-with-appium-testing/

site_name: TestMu AI

slug: getting-started-with-appium-testing/

canonical: https://www.testmuai.com/support/docs/getting-started-with-appium-testing/

---



import CodeBlock from '@theme/CodeBlock';

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';








<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/getting-started-with-appium-testing/"
    },
    "headline": "Run Appium Tests on TestMu AI: Getting Started",
    "description": "Getting Started with Appium Testing on TestMu AI Upload, Script, Execute, View - Run your automation scripts seamlessly on 50,000+ real browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/getting-started-with-appium-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [],
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
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Getting Started: Run Appium Tests on TestMu AI
---

Running your first [Appium](https://www.testmuai.com/appium/) test on TestMu AI executes native and hybrid mobile app End-to-End (E2E) testing on real Android and iOS devices. Clone a sample project, set credentials, upload your app, configure desired capabilities, and view detailed results on the dashboard.

1. A TestMu AI account. [Sign up](https://www.testmuai.com/register/) if you don't have one.
2. Your **Username** and **Access Key** from the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
3. An Android app (`.apk` or `.aab`) or an iOS app (`.ipa`). No app yet? Use the sample [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
4. The Appium client for your language:
   - **Python:** Python 3 and the Appium Python Client 2.3.0 or later.
   - **Java:** a JDK and the [Appium Java client](https://github.com/appium/java-client) (`io.appium:java-client`) in your Maven or Gradle project. Use the latest release: this sample was tested with java-client 11.0.0.

Appium is an open-source framework that lets you perform End-to-End (E2E) testing of mobile applications. It works across different platforms like Android and iOS, enabling you to write tests once and run them on various devices.  



<div className="ytframe"> 

<div className="youtube" data-embed="7dczd7AfPFs" data-loading-attribute="eager">

  <div className="play-button"></div>

</div>

</div>



Appium leverages the WebDriver protocol, similar to how Selenium automates web applications. This makes it compatible with [popular programming languages](/support/docs/appium-languages-and-frameworks/) for writing test scripts.



Here is a list of languages and frameworks that are supported by the <BrandName /> to run Appium automation tests on [<BrandName /> Real Device Cloud Platform](https://www.testmuai.com/real-device-cloud).



<div className="lt_row lt_framework_list_row">

    <div className="lt_col lt_framework_wrapper"> 

      <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>

      <ul className="lt_framework_list">

        <li>

          <a className="lt_primary" href="/support/docs/appium-java/">Java</a>

        </li>

        <li>

          <a href="/support/docs/appium-java-junit/">JUnit</a>

        </li>

        <li>

          <a href="/support/docs/appium-java-jbehave/">JBehave</a>

        </li>

        <li>

          <a href="/support/docs/appium-java-cucumber/">Cucumber</a>

        </li>

        <li>

          <a href="/support/docs/appium-java-testng/">TestNG</a>

        </li>

      </ul>

    </div>

        <div className="lt_col lt_framework_wrapper">

       <img loading="lazy" src={require('../assets/images/getting-started/color-js.webp').default} alt="Javascript" width="181" height="200" className="language-icon"/>

      <ul className="lt_framework_list">

        <li>

          <a className="lt_primary" href="/support/docs/appium-nodejs/">JavaScript</a>

        </li>

        <li>

          <a href="/support/docs/appium-nodejs-webdriverio/">WebDriverIO</a>

        </li>

        <li>

          <a href="/support/docs/appium-nodejs-mocha/">Mocha</a>

        </li>

      </ul>

    </div>

    <div className="lt_col lt_framework_wrapper">

      <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>

      <ul className="lt_framework_list">

      <li>

          <a className="lt_primary" href="/support/docs/appium-python/">Python</a>

        </li>

        <li>

          <a href="/support/docs/appium-python-behave/">Behave</a>

        </li>

        <li>

          <a href="/support/docs/appium-python-robot/">Robot</a>

        </li>

        <li>

          <a href="/support/docs/appium-python-gauge/">Gauge</a>

        </li>

        <li>

          <a href="/support/docs/appium-python-pytest/">PyTest</a>

        </li>

      </ul>

    </div>

    <div className="lt_col lt_framework_wrapper">

       <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>

      <ul className="lt_framework_list">

        <li>

          <a className="lt_primary" href="/support/docs/appium-ruby/">Ruby</a>

        </li>

        <li>

          <a href="/support/docs/appium-ruby-cucumber/">Cucumber</a>

        </li>

        <li>

          <a href="/support/docs/appium-ruby-rspec/">RSpec</a>

        </li>

      </ul>

    </div>

    <div className="lt_col lt_framework_wrapper">

      <img loading="lazy" src={require('../assets/images/getting-started/php-icon.webp').default} alt="PHP" width="2500" height="1250" className="language-icon"/>

      <ul className="lt_framework_list">

        <li>

          <a className="lt_primary" href="/support/docs/appium-php/">PHP</a>

        </li>

        <li>

          <a href="/support/docs/appium-php-behat/">Behat</a>

        </li>

        </ul>

    </div>

    <div className="lt_col lt_framework_wrapper">

     <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>

      <ul className="lt_framework_list">

        <li>

          <a className="lt_primary" href="/support/docs/appium-csharp/">C#</a>

        </li>

        <li>

          <a href="/support/docs/appium-csharp-nunit/">NUnit</a>

        </li>

      </ul>

    </div>

  </div>

  <div className="lt-framework-list-footer">

    <p>We support all languages and frameworks that are compatible with Appium, so in case your favorite isn't in the table.<br/>Don't worry, you can still run the test. <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span> for any help.</p>

  </div>



:::info

We support all languages and frameworks that are compatible with Selenium, so in case your favorite isn't in the table.<br/>Don't worry, you can still run the test. <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span> for any help.

:::











  <VerifiedTag value="Verified" />

```python title="first_test.py"
import os
from appium import webdriver
from appium.options.common import AppiumOptions



## Related app automation guides

try:
    # Add your test steps here
    driver.execute_script("lambda-status=passed")
except Exception:
    driver.execute_script("lambda-status=failed")
    raise
finally:
    driver.quit()
```

</TabItem>

<TabItem value="java" label="Java">

  <VerifiedTag value="Verified" />

```java title="FirstAppiumTest.java"
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.MutableCapabilities;

import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class FirstAppiumTest {
    public static void main(String[] args) throws Exception {
        Map<String, Object> ltOptions = new HashMap<>();
        ltOptions.put("platformName", "android");
        ltOptions.put("deviceName", "Galaxy S23");
        ltOptions.put("platformVersion", "14");
        ltOptions.put("app", System.getenv("LT_APP_URL"));
        ltOptions.put("isRealMobile", true);
        ltOptions.put("build", "Appium quickstart");
        ltOptions.put("name", "First Appium test");
        ltOptions.put("devicelog", true);
        ltOptions.put("w3c", true);

        MutableCapabilities caps = new MutableCapabilities();
        caps.setCapability("platformName", "android");
        caps.setCapability("LT:Options", ltOptions);

        String hub = "https://" + System.getenv("LT_USERNAME") + ":" + System.getenv("LT_ACCESS_KEY")
                + "@mobile-hub.lambdatest.com/wd/hub";
        AndroidDriver driver = new AndroidDriver(new URL(hub), caps);

        try {
            // Add your test steps here
            driver.executeScript("lambda-status=passed");
        } catch (Exception e) {
            driver.executeScript("lambda-status=failed");
            throw e;
        } finally {
            driver.quit();
        }
    }
}
```

</TabItem>

</Tabs>

Replace the `# Add your test steps here` comment with your own steps. `lambda-status` marks the session passed or failed on the dashboard.

To run on iOS, upload an `.ipa` in Step 2, set `platformName` to `ios` in both places, and set `deviceName` and `platformVersion` to an iPhone model and iOS version from the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). In Java, use `IOSDriver` (`io.appium.java_client.ios.IOSDriver`) in place of `AndroidDriver`.

## Capabilities Used in This Test
---

| Key | Example | Purpose |
|---|---|---|
| `platformName` | `android` or `ios` | OS family. Set it at the top level and inside `LT:Options`. |
| `deviceName` | `Galaxy S23` | Device model, spelled exactly as the Capabilities Generator lists it. |
| `platformVersion` | `14` | OS version of that device. |
| `app` | `lt://APP123456789123456789` | The `app_url` from Step 2, read from `LT_APP_URL`. |
| `isRealMobile` | `true` | Runs on a real device. Set it to `false` to run on an emulator or simulator. |
| `build` / `name` | `Appium quickstart` / `First Appium test` | Build and test names on the dashboard. |
| `devicelog` | `true` | Captures device logs. Off by default. |
| `w3c` | `true` | Uses the W3C WebDriver protocol. |

Video recording (`video`) is on by default, and Appium logs are always captured. Set `network` to `true` for network logs. Generate a capability set for any device and OS version with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/), and see [Appium desired capabilities on TestMu AI](/support/docs/desired-capabilities-in-appium/) for every supported key.

## Run the Test and View Results
---

<Tabs className="docs__val">

<TabItem value="python" label="Python" default>

```bash
pip install Appium-Python-Client
python3 first_test.py
```

If `python3` is not recognized, use `python` instead.

</TabItem>

<TabItem value="java" label="Java">

Add `io.appium:java-client` to your `pom.xml` or `build.gradle`, then run the `FirstAppiumTest` class from your IDE or build tool. Start it from the same shell that holds `LT_USERNAME`, `LT_ACCESS_KEY` and `LT_APP_URL`, or set them in your IDE's run configuration.

</TabItem>

</Tabs>

Open the [App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build). The run appears under the build **Appium quickstart** with the test **First Appium test**, marked passed or failed by `lambda-status`. The session holds the video recording, the Appium logs and the device logs. For a tour of the dashboard, see [App Automation Dashboard](/support/docs/app-automation-dashboard/).

## Test a Locally Hosted App With the Tunnel
---

A real device in the cloud can't reach `localhost`, a private staging server or a backend behind your firewall. Route the session through TestMu AI Tunnel so the device can reach them.

1. Download the Tunnel binary for your operating system:
   - Windows: **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
   - macOS: **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
   - Linux: **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**
2. Extract the file, open a terminal in that folder and start the Tunnel. On Windows, run `LT` with the same flags.

```bash
./LT --user "$LT_USERNAME" --key "$LT_ACCESS_KEY" --tunnelName my-tunnel
```

3. With the Tunnel running, add these keys to `LT:Options` and run the test again:

| Key | Example | Purpose |
|---|---|---|
| `tunnel` | `true` | Routes the session through the Tunnel. |
| `tunnelName` | `my-tunnel` | The name you passed to `--tunnelName`. With a single tunnel, `tunnel: true` alone is enough. |

For proxies, several tunnels and other options, see [testing locally hosted apps](/support/docs/testing-locally-hosted-apps/) and [TestMu AI Tunnel](/support/docs/testmu-tunnel/).

## Run Appium Tests in CI
---

In CI, store your username and access key as secrets, expose them as `LT_USERNAME` and `LT_ACCESS_KEY`, upload each new build, and pass its `app_url` to the test as `LT_APP_URL`. The test code from Step 3 doesn't change. This GitHub Actions workflow runs the Python test on every push:

```yaml title=".github/workflows/appium.yml"
name: Appium tests

on: [push]

jobs:
  appium:
    runs-on: ubuntu-latest
    env:
      LT_USERNAME: ${{ secrets.LT_USERNAME }}
      LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install Appium-Python-Client
      - name: Upload the app
        run: |
          APP_URL=$(curl -s -u "$LT_USERNAME:$LT_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@path/to/your-app.apk" -F "name=ci-build" | jq -r '.app_url')
          echo "LT_APP_URL=$APP_URL" >> "$GITHUB_ENV"
      - run: python first_test.py
```

Replace `path/to/your-app.apk` with your build output. For Jenkins, GitLab CI, CircleCI, Bitbucket Pipelines and other tools, see [CI/CD integrations](/support/docs/integrations-with-ci-cd-tools/).

## Troubleshooting
---

| Error | Cause | Fix |
|---|---|---|
| `401 Unauthorized` | `LT_USERNAME` or `LT_ACCESS_KEY` is unset, stale or missing from the hub URL. | Run `echo $LT_USERNAME`, then copy both values again from the **Access Key** button on the dashboard. A test started from an IDE may not inherit your terminal's variables. |
| App not found, or the `app` capability is rejected | `LT_APP_URL` is empty, a local file path, or an `lt://` ID that no longer exists. Apps unused for 30 days are removed automatically. | Upload the app again and set `LT_APP_URL` to the new `app_url`. |
| `SessionNotCreatedException` or device not available | A capability is missing or misspelled, or the `deviceName` and `platformVersion` pair isn't offered. | Copy the exact device name and OS version from the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/). |
| The session connects but no device is allocated | The test points at the browser hub, `hub.lambdatest.com`. | Use `https://mobile-hub.lambdatest.com/wd/hub`. |
| The session ends in the middle of a run | No command arrived within `idleTimeout`, which defaults to 120 seconds. | Raise `idleTimeout` in `LT:Options`, for example to `300`. |
| Python rejects the `desired_capabilities` argument | Appium Python Client 3 and later removed it. | Build the driver with `AppiumOptions`, as in Step 3. |
| The app can't reach `localhost` or staging | The cloud device can't see your private network. | Start the Tunnel and add `"tunnel": true` to `LT:Options`. |

For more errors and fixes, see [troubleshooting Appium tests on TestMu AI](/support/docs/appium-troubleshooting/).

## FAQ
---

### How do I run Appium tests on iOS with TestMu AI?

Upload your `.ipa` in Step 2. In Step 3, set `platformName` to `ios`, and set `deviceName` and `platformVersion` to an iPhone model and iOS version from the Capabilities Generator. In Java, use `IOSDriver` in place of `AndroidDriver`. The rest of the test stays the same.

### Can I run Appium tests on emulators and simulators?

Yes. Upload the app to `https://manual-api.lambdatest.com/app/upload/virtualDevice` and set `isRealMobile` to `false`. For an iOS simulator, upload a `.zip` of the app instead of an `.ipa`. See [app upload with the REST API](/support/docs/application-setup-via-api/).

### Do I need a local Appium server?

No. Your test sends its commands to the TestMu AI mobile hub at `mobile-hub.lambdatest.com`, which runs the session on the cloud device. You only install the Appium client for your language.

### Where do I find the capabilities for a specific device?

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capability set for any device and OS version. [Appium desired capabilities on TestMu AI](/support/docs/desired-capabilities-in-appium/) lists every supported key.

### How do I run tests on several devices at once?

Start one Appium session per device. Each device runs one automation session at a time, and your plan's concurrent session limit sets how many run in parallel. Tests above that limit wait in a queue. See [queuing Appium tests](/support/docs/queuing-appium-tests/).

## Related Docs
---

- [Set Appium desired capabilities for real devices](/support/docs/desired-capabilities-in-appium/)
- [Upload apps to the real device cloud](/support/docs/upload-apps-on-real-device-cloud/)
- [Upload and manage apps with the REST API](/support/docs/application-setup-via-api/)
- [Troubleshoot Appium tests on TestMu AI](/support/docs/appium-troubleshooting/)
- [Run Appium tests in your language and framework](/support/docs/appium-languages-and-frameworks/)
- [Read results in the App Automation Dashboard](/support/docs/app-automation-dashboard/)
- [Test locally hosted apps with the Tunnel](/support/docs/testing-locally-hosted-apps/)
- [Appium testing tutorial](https://www.testmuai.com/appium/)

To test your app on real Android and iOS devices in the cloud, see the [TestMu AI Real Device Cloud](https://www.testmuai.com/real-device-cloud/).
