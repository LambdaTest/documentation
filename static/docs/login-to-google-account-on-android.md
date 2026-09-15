# Login to Google account on Android

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

();\n        playstorelogin.put(\"email\", \"EMAIL_ID@gmail.com\"); //Add in your Google account ID \n        playstorelogin.put(\"password\", \"GOOGLE_PASSWORD\"); //Add in your Google account Password"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Logging into Google Account",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"playStoreLogin\", playstorelogin);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A sample code showing the addition of Google Account is shown below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import io.appium.java_client.AppiumDriver;\nimport org.openqa.selenium.remote.DesiredCapabilities;\n\nimport java.net.MalformedURLException;\nimport java.net.URL;\nimport java.util.HashMap;\n\npublic class gmailLoginCap {\n  //highlight-next-line\n    public static String userName = System.getenv(\"LT_USERNAME\") == null ? \"LT_USERNAME\"  //Add LambdaTest username here\n    : System.getenv(\"LT_USERNAME\");\n//highlight-next-line\n    public static String accessKey = System.getenv(\"LT_ACCESS_KEY\") == null ? \"LT_ACCESS_KEY\" //Add LambdaTest accessKey here\n    : System.getenv(\"LT_ACCESS_KEY\");\n\n    private static AppiumDriver driver;\n\n    public static void main(String[] args) throws MalformedURLException, InterruptedException {\n        DesiredCapabilities capabilities = new DesiredCapabilities();\n\n        capabilities.setCapability(\"deviceName\", \"Pixel 5\");\n        capabilities.setCapability(\"platformVersion\", \"11\");\n        capabilities.setCapability(\"platformName\", \"android\");\n        capabilities.setCapability(\"isRealMobile\", true);\n        capabilities.setCapability(\"video\", true);\n        capabilities.setCapability(\"visual\", true);\n        capabilities.setCapability(\"network\", false);\n        capabilities.setCapability(\"devicelog\", true);\n        capabilities.setCapability(\"console\", true);\n        capabilities.setCapability(\"project\", \"labs\");\n        capabilities.setCapability(\"build\", \"gmailLoginCap\");\n        capabilities.setCapability(\"unicodeKeyboard\", true);\n        capabilities.setCapability(\"autoGrantPermissions\", true);\n        capabilities.setCapability(\"app\", \"APP_URL\");               //Add in your app ID\n        capabilities.setCapability(\"autoGrantPermissions\", true);\n        HashMap playstorelogin = new HashMap<>();\n        playstorelogin.put(\"email\", \"EMAIL_ID@gmail.com\");          //Add in your Google account ID \n        playstorelogin.put(\"password\", \"GOOGLE_PASSWORD\");          //Add in your Google account Password\n        capabilities.setCapability(\"playStoreLogin\", playstorelogin);\n\n        AppiumDriver appiumDriver = new AppiumDriver(\n                new URL(\"https://\" +userName + \":\" + accessKey + \"@mobile-hub.lambdatest.com/wd/hub\"), capabilities);\n\n        try {\n            Thread.sleep(5000);\n            appiumDriver.findElementById(\"google\").click();\n            Thread.sleep(15000);\n            appiumDriver.quit();\n\n        } catch (Exception e) {\n            appiumDriver.quit();\n        }\n    }\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

This documentation will guide you to log in to your Google Account on an Android Device on TestMu AI so you can test features/services that are linked to your Google Account.

## Objective

To log in to Google Account on Real Devices [Android], and perform testing using Google account-related tasks.

## Prerequisites

1. TestMu AI App Automation Account.
2. Automation script for testing.

## Logging into Google Account

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

**Note**

Since we clean the Device after each session, ensure you are logging in to the account during each session.
