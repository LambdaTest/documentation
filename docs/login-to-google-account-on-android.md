---
id: login-google-android
title: Login to Google account on Android
# hide_title: true
sidebar_label: Login To Google Account (Android)
description: Learn how to login to Google Account on an Android device for App automation to test features or services that are linked to your Google Account.
keywords:
  - login with google on android app automation
  - login to google account on android app automation
  - login to google account
url: https://www.testmuai.com/support/docs/login-to-google-account-on-android/
site_name: LambdaTest
slug: login-to-google-account-on-android/
canonical: https://www.testmuai.com/support/docs/login-to-google-account-on-android/
---
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
          "name": "Login To Google Account (Android)",
          "item": `${BRAND_URL}/support/docs/login-to-google-account-on-android/`
        }]
      })
    }}
></script>

<!-- # Login to Google Account on Android Device
--- -->

This documentation will guide you to log in to your Google Account on an Android Device on <BrandName /> so you can test features/services that are linked to your Google Account.


## Objective
---

To log in to Google Account on Real Devices [Android], and perform testing using Google account-related tasks.

## Prerequisites
---

1. <BrandName /> App Automation Account.
2. Automation script for testing.

## Logging into Google Account
---

Add the following HashMap structure to store the credentials:

```java
  HashMap<String, String> playstorelogin = new HashMap<>();
        playstorelogin.put("email", "EMAIL_ID@gmail.com"); //Add in your Google account ID 
        playstorelogin.put("password", "GOOGLE_PASSWORD"); //Add in your Google account Password
```

Once we have added this HashMap, we can now add the capability linking this HashMap to the capability.

```java
capabilities.setCapability("playStoreLogin", playstorelogin);
```

As shown, please add your Google Account ID and password in the fields that correspond to the same.

Once you have done that, run the App Automation test and the test will start with the device already logged into the account with the mentioned credentials.

Once the test has started, you can also verify the same by opening Google Play Store.

A sample code showing the addition of Google Account is shown below:

```java
import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

public class gmailLoginCap {
  //highlight-next-line
    public static String userName = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"  //Add LambdaTest username here
    : System.getenv("LT_USERNAME");
//highlight-next-line
    public static String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY" //Add LambdaTest accessKey here
    : System.getenv("LT_ACCESS_KEY");

    private static AppiumDriver driver;

    public static void main(String[] args) throws MalformedURLException, InterruptedException {
        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("deviceName", "Pixel 5");
        capabilities.setCapability("platformVersion", "11");
        capabilities.setCapability("platformName", "android");
        capabilities.setCapability("isRealMobile", true);
        capabilities.setCapability("video", true);
        capabilities.setCapability("visual", true);
        capabilities.setCapability("network", false);
        capabilities.setCapability("devicelog", true);
        capabilities.setCapability("console", true);
        capabilities.setCapability("project", "labs");
        capabilities.setCapability("build", "gmailLoginCap");
        capabilities.setCapability("unicodeKeyboard", true);
        capabilities.setCapability("autoGrantPermissions", true);
        capabilities.setCapability("app", "APP_URL");               //Add in your app ID
        capabilities.setCapability("autoGrantPermissions", true);
        HashMap<String, String> playstorelogin = new HashMap<>();
        playstorelogin.put("email", "EMAIL_ID@gmail.com");          //Add in your Google account ID 
        playstorelogin.put("password", "GOOGLE_PASSWORD");          //Add in your Google account Password
        capabilities.setCapability("playStoreLogin", playstorelogin);

        AppiumDriver appiumDriver = new AppiumDriver(
                new URL("https://" +userName + ":" + accessKey + "@mobile-hub.lambdatest.com/wd/hub"), capabilities);

        try {
            Thread.sleep(5000);
            appiumDriver.findElementById("google").click();
            Thread.sleep(15000);
            appiumDriver.quit();

        } catch (Exception e) {
            appiumDriver.quit();
        }
    }
}
```


**Important**:

1. The account should not be using any kind of 2-factor authentication, otherwise, the test can fail.
2. The account should not require you to allow login using a trusted device using a pop-up or OTP.

:::info Note

Since we clean the Device after each session, ensure you are logging in to the account during each session.

:::

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
        Login To Google Account On Android
      </span>
    </li>
  </ul>
</nav>