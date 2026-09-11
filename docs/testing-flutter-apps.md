---
id: test-flutter-apps
title: How to test flutter apps using Appium framework
hide_title: true
sidebar_label: Testing Flutter Apps
description: Learn how to test flutter apps for Appium testing across 5000+ real Android and iOS devices.
keywords:
- how to test flutter apps
- how to test flutter apps on android
- test flutter apps on ios
- test flutter apps on iphone
- flutter test app
url: https://www.testmuai.com/support/docs/testing-flutter-apps/
site_name: TestMu AI
slug: testing-flutter-apps/
canonical: https://www.testmuai.com/support/docs/testing-flutter-apps/
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
          "name": "Testing Flutter Apps With Appium",
          "item": `${BRAND_URL}/support/docs/testing-flutter-apps/`
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
      "@id": "https://www.testmuai.com/support/docs/testing-flutter-apps/"
    },
    "headline": "How to test flutter apps using Appium framework",
    "description": "Learn how to test flutter apps for Appium testing across 5000+ real Android and iOS devices.",
    "url": "https://www.testmuai.com/support/docs/testing-flutter-apps/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "how to test flutter apps",
      "how to test flutter apps on android",
      "test flutter apps on ios"
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
        "name": "Testing Apps Using Appium Flutter Driver",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": " dev_dependencies:\n   test: Demo\n   flutter_test:\n     sdk: flutter\n   flutter_driver:\n     sdk: flutter"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing Apps Using Appium Flutter Driver",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "void main() {\n    enableFlutterDriverExtension();\n    init();\n    runApp(MyApp());\n }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing Apps Using Appium Flutter Driver",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": " desiredCapabilities.setCapability(\"automationName\", \"flutter\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "import os\n\nfrom appium.webdriver import Remote\nfrom appium_flutter_finder.flutter_finder import FlutterElement, FlutterFinder\n\n# Example\n\ndriver = Remote('http://<LT username>:<LT accesskey>@mobile-hub.lambdatest.com/wd/hub/', dict(\n    platformName='Android',\n    automationName='flutter',\n    platformVersion='11',\n    deviceName='Google Pixel 4',\n    app='<App URL>',\n    isRealMobile=True\n))\n\nfinder = FlutterFinder()\n\ntext_finder = finder.by_text('You have pushed the button this many times:')\ntext_element = FlutterElement(driver, text_finder)\nprint(text_element.text)\n\nkey_finder = finder.by_value_key(\"next_route_key\")\ngoto_next_route_element = FlutterElement(driver, key_finder)\nprint(goto_next_route_element.text)\ngoto_next_route_element.click()\n\nback_finder = finder.page_back()\nback_element = FlutterElement(driver, back_finder)\nback_element.click()\n\ntooltip_finder = finder.by_tooltip(\"Increment\")\ndriver.execute_script('flutter:waitFor', tooltip_finder, 100)\n\nfloating_button_element = FlutterElement(driver, tooltip_finder)\nfloating_button_element.click()\n\ncounter_finder = finder.by_value_key(\"counter\")\ncounter_element = FlutterElement(driver, counter_finder)\nprint(counter_element.text)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing Apps Using Appium Flutter Integration Driver",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "desired_caps = {\n  \"deviceName\": \"Galaxy S20\",\n  \"platformName\": \"Android\",\n  \"platformVersion\": \"15\",\n  \"isRealMobile\": True,   # Set False for virtual devices\n  \"app\": \"YOUR_APP_URL\",\n  \"build\": \"Sample Build\",\n  \"name\": \"Sample Test\",\n  \"automationName\": \"FlutterIntegration\"  # Use Flutter Integration Driver\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing Apps Using Appium Flutter Integration Driver",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "import org.openqa.selenium.remote.DesiredCapabilities;\nimport org.testng.annotations.Test;\nimport org.openqa.selenium.WebElement;\nimport org.testng.annotations.Parameters;\nimport java.net.URL;\nimport java.util.HashMap;\n\nimport io.appium.java_client.AppiumBy;\nimport io.appium.java_client.flutter.FlutterIntegrationTestDriver;\nimport io.appium.java_client.flutter.android.FlutterAndroidDriver;\n\npublic class AndroidApp_Flutter_Integration {\n\n    FlutterIntegrationTestDriver driver;\n\n    @Test\n    @Parameters(value = { \"device\", \"version\", \"platform\" })\n    public void AndroidApp1(String device, String version, String platform) {\n        try {\n            DesiredCapabilities capabilities = new DesiredCapabilities();\n            HashMap<String, Object> ltOptions = new HashMap<>();\n\n            ltOptions.put(\"automationName\", \"FlutterIntegration\");\n            ltOptions.put(\"nativeFlutterLaunch\", true);\n            ltOptions.put(\"platformName\", platform);\n            ltOptions.put(\"deviceName\", device);\n            ltOptions.put(\"platformVersion\", version);\n            ltOptions.put(\"isRealMobile\", true);\n\n            capabilities.setCapability(\"LT:Options\", ltOptions);\n\n            driver = new FlutterAndroidDriver(\n                new URL(\"https://username:accessKey@mobile-hub.lambdatest.com/wd/hub\"),\n                capabilities\n            );\n\n            WebElement username = driver.findElement(AppiumBy.flutterKey(\"username\"));\n            username.sendKeys(\"user@example.com\");\n\n            WebElement password = driver.findElement(AppiumBy.flutterKey(\"password\"));\n            password.sendKeys(\"password123\");\n\n            WebElement loginBtn = driver.findElement(AppiumBy.flutterKey(\"login_btn\"));\n            loginBtn.click();\n\n            driver.quit();\n        } catch (Exception e) {\n            driver.quit();\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The flutter-testing-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "flutter-testing-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Flutter Testing Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/flutter-testing-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/flutter-testing-skill .cursor/skills/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Testing Flutter Apps With Appium
***

Google's Flutter is an open-source tool for developing native mobile apps. It enables developers to create cross-platform apps for both Android and iOS using a single codebase and programming language.

You can now test Flutter apps on the <BrandName /> <a href={`${BRAND_URL}/appium/`}>Appium testing</a> platform across 5000+ real Android and iOS devices. <BrandName /> supports Appium's Flutter driver that lets you test Flutter apps using the Appium framework. To test Flutter apps, you will need to upload apps on <BrandName /> cloud servers and then run your automated tests. 

## Testing Apps Using Appium Flutter Driver
***

Before automating Flutter apps using Appium, make sure you have the following things configured.

1. Your Flutter App must be compiled in `debug` or `profile` mode, as  Appium Flutter Driver does not support Flutter App running in release mode. 

2. Add the below dependencies in Flutter app's `pubspec.yaml`

<VerifiedTag value="Verified" />

```
 dev_dependencies:
   test: Demo
   flutter_test:
     sdk: flutter
   flutter_driver:
     sdk: flutter
```

3. In `main.dart` file, ensure the app has `enableFlutterDriverExtension()` enabled before `runApp`.

<VerifiedTag value="Verified" />

```
void main() {
    enableFlutterDriverExtension();
    init();
    runApp(MyApp());
 }
 ```

 4. Set the `automationName` capability to `flutter` in Appium desired capabilities.

<VerifiedTag value="Verified" />

```
 desiredCapabilities.setCapability("automationName", "flutter");
```

Shown below is the test script for automating Flutter apps on <BrandName /> platform.

<VerifiedTag value="Verified" />

```py
import os

from appium.webdriver import Remote
from appium_flutter_finder.flutter_finder import FlutterElement, FlutterFinder

# Example

driver = Remote('http://<LT username>:<LT accesskey>@mobile-hub.lambdatest.com/wd/hub/', dict(
    platformName='Android',
    automationName='flutter',
    platformVersion='11',
    deviceName='Google Pixel 4',
    app='<App URL>',
    isRealMobile=True
))

finder = FlutterFinder()

text_finder = finder.by_text('You have pushed the button this many times:')
text_element = FlutterElement(driver, text_finder)
print(text_element.text)

key_finder = finder.by_value_key("next_route_key")
goto_next_route_element = FlutterElement(driver, key_finder)
print(goto_next_route_element.text)
goto_next_route_element.click()

back_finder = finder.page_back()
back_element = FlutterElement(driver, back_finder)
back_element.click()

tooltip_finder = finder.by_tooltip("Increment")
driver.execute_script('flutter:waitFor', tooltip_finder, 100)

floating_button_element = FlutterElement(driver, tooltip_finder)
floating_button_element.click()

counter_finder = finder.by_value_key("counter")
counter_element = FlutterElement(driver, counter_finder)
print(counter_element.text)
```

## Testing Apps Using Appium Flutter Integration Driver
---

The [Appium Flutter Integration Driver](https://www.testmuai.com/support/docs/appium-flutter-integration/) lets you write tests in languages like Java, Python, JavaScript, and others that Appium supports. It works by embedding a small server inside your Flutter app which talks back to Appium and drives UI interactions.

Check out this [Flutter Appium Java GitHub](https://github.com/LambdaTest/flutter-appium-java/) repository for a hands-on reference.


To run Appium tests using the Flutter Integration Driver on TestMu AI, set the *automationName* capability to *FlutterIntegration*.

<VerifiedTag value="Verified" />

```java
desired_caps = {
  "deviceName": "Galaxy S20",
  "platformName": "Android",
  "platformVersion": "15",
  "isRealMobile": True,   # Set False for virtual devices
  "app": "YOUR_APP_URL",
  "build": "Sample Build",
  "name": "Sample Test",
  "automationName": "FlutterIntegration"  # Use Flutter Integration Driver
}
```

The example below shows a basic login flow for an Android Flutter app using the Appium Flutter Integration Driver. It covers driver setup, Flutter-specific capabilities, and widget interaction using *ValueKey*.

<VerifiedTag value="Verified" />

```java
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.Test;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Parameters;
import java.net.URL;
import java.util.HashMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.flutter.FlutterIntegrationTestDriver;
import io.appium.java_client.flutter.android.FlutterAndroidDriver;

public class AndroidApp_Flutter_Integration {

    FlutterIntegrationTestDriver driver;

    @Test
    @Parameters(value = { "device", "version", "platform" })
    public void AndroidApp1(String device, String version, String platform) {
        try {
            DesiredCapabilities capabilities = new DesiredCapabilities();
            HashMap<String, Object> ltOptions = new HashMap<>();

            ltOptions.put("automationName", "FlutterIntegration");
            ltOptions.put("nativeFlutterLaunch", true);
            ltOptions.put("platformName", platform);
            ltOptions.put("deviceName", device);
            ltOptions.put("platformVersion", version);
            ltOptions.put("isRealMobile", true);

            capabilities.setCapability("LT:Options", ltOptions);

            driver = new FlutterAndroidDriver(
                new URL("https://username:accessKey@mobile-hub.lambdatest.com/wd/hub"),
                capabilities
            );

            WebElement username = driver.findElement(AppiumBy.flutterKey("username"));
            username.sendKeys("user@example.com");

            WebElement password = driver.findElement(AppiumBy.flutterKey("password"));
            password.sendKeys("password123");

            WebElement loginBtn = driver.findElement(AppiumBy.flutterKey("login_btn"));
            loginBtn.click();

            driver.quit();
        } catch (Exception e) {
            driver.quit();
        }
    }
}
```

Below is a screenshot showing Appium test automation running with the Flutter Integration Driver on the TestMu AI platform.

<img loading="lazy" src={require('../assets/images/appium-flutter-integration-driver.webp').default} alt="Running Appium tests with Flutter Integration Driver on TestMu AI" width="1365" height="650" className="doc_img"/>




>In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.



## Using the Flutter Testing Agent Skill with TestMu AI
***

The [flutter-testing-skill](https://github.com/LambdaTest/agent-skills/tree/main/flutter-testing-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The flutter-testing-skill package includes:

<VerifiedTag value="Verified" />

```
flutter-testing-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Flutter Testing Agent Skill
***

Install a Flutter Testing Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/flutter-testing-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/flutter-testing-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only flutter-testing-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
       Testing Flutter Apps With Appium
      </span>
    </li>
  </ul>
</nav>