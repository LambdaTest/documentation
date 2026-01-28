---
id: executing-tesbo-automation-script-over-online-selenium-grid
title: Run Tesbo Automation Script Over Selenium Grid Online
hide_title: true
sidebar_label: Tesbo
description: Tesbo is a hybrid framework that works on a keyword-driven approach, allowing you to write automation scripts in plain English &amp; run it over Selenium Grid online. Read this document to run Tesbo script on TestMu AI Selenium Grid on cloud.
keywords:
- testbo
- frameworks of selenium
- selenium supported programming language
- selenium testing framework
- selenium supported languages and frameworks
- automation testing framework
- test automation frameworks,
- selenium frameworks
- selenium grid online
- selenium testing
- test automation
- keyword driven testing

image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/
site_name: LambdaTest
slug: executing-tesbo-automation-script-over-online-selenium-grid/
canonical: https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/
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
          "name": "Executing Tesbo Test Automation Script Over Online Selenium Grid",
          "item": `${BRAND_URL}/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/`
        }]
      })
    }}
></script>

# Executing Tesbo Test Automation Script Over Online Selenium Grid
* * *

[Tesbo][1]is a hybrid framework for test automation that works on a keyword-driven approach. It allows you to write automation scripts in plain English like you'd do with a BDD framework. Built on top of Selenium, Tesbo helps you to perform [cross browser testing][2] over a Selenium Grid in parallel.

This document will help you run Tesbo automation scripts over online [Selenium Grid][3] offered by <BrandName />. That way, you could execute your Tesbo test builds on 3000+ real browsers for desktop & mobile over a cloud-based Selenium infrastructure.

Tesbo can help you run automation testing through all programming languages that supports Selenium. All you need to do is write your test files in plain english and define the capabilities in a `config.json` file. Let's get started.

## Prerequisites
* * *
>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/LamdaTest_Tesbo_Demo" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

* You would need Java development environment i.e. JDK 1.6 or higher. We recommend using the latest version.
* An IDE(Integrated Development Environment) such as Eclipse or IntelliJ.
* Clone the GitHub repository for <BrandName /> Tesbo Demo.

## Running The Tesbo Test Automation Script On Online Selenium Grid
***

**Test Scenario**: The *CheckBox.tests* file tests Check all button functionality whereas the **FormsAndList.tests** file tests AJAX input forms functionality.

After you download or clone the repository for <BrandName /> Tesbo Demo, you will find the test folder which would have your test files by the name `CheckBox.tests` & `FormsAndList.tests`. Here are these test files.

```javascript
 //CheckBox.tests
Test: Verify Check all button functionality
#CH1 #CheckBox #All
Step: pause until @No_Thanks_Button_On_Popup is display
Step: Click on @No_Thanks_Button_On_Popup
Verify: Page Title is equal to 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online'
Step: Scroll to Bottom
Verify: @Basic_Icon is displayed
Step: Click on @Basic_Icon
Verify: @Check_Box_Demo_Option is displayed
Step: Click on @Check_Box_Demo_Option
Verify: Current url is equal to 'https://www.seleniumeasy.com/test/basic-checkbox-demo.html'
Step: Scroll to Bottom
Verify: @Check_All_Button is displayed
Step: Click on @Check_All_Button
Verify: Get attribute 'value' of @Checked_All_Check_Box is equal to 'true'
Verify: @Uncheck_All_Button is displayed
End

Test: Verify Check single check box functionality
#CH2 #CheckBox #All
Step: pause until @No_Thanks_Button_On_Popup is display
Step: Click on @No_Thanks_Button_On_Popup
Verify: Page Title is equal to 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online'
Step: Scroll to Bottom
Verify: @Basic_Icon is displayed
Step: Click on @Basic_Icon
Verify: @Check_Box_Demo_Option is displayed
Step: Click on @Check_Box_Demo_Option
Verify: Current url is equal to 'https://www.seleniumeasy.com/test/basic-checkbox-demo.html'
Verify: @Single_Check_Box is displayed
Step: Click on @Single_Check_Box
Verify: @Checked_Successfully_Message text is equal to 'Success - Check box is checked'
End

Test: Verify Alert box functionality
#Al1 #AlertBox #All
Step: pause until @No_Thanks_Button_On_Popup is display
Step: Click on @No_Thanks_Button_On_Popup
Verify: Page Title is equal to 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online'
Step: Scroll to Bottom
Verify: @Basic_Icon is displayed
Step: Click on @Basic_Icon
Verify: @Javascript_Alerts_Option is displayed
Step: Click on @Javascript_Alerts_Option
Verify: @Alert_Box_Page_Heading text contains is 'JavaScript has three kind of popup boxes'
Step: Click on @Click_Me_Button_Of_Alert_Box
Step: Switch to alert then verify text with 'I am an alert box!'
Step: Switch to alert then accept
Step: Pause for 2 Sec
End
```
```javascript
//FormsAndList.tests
Test: Verify Ajax input forms functionality
#FO1 #Forms #All
Step: pause until @No_Thanks_Button_On_Popup is display
Step: Click on @No_Thanks_Button_On_Popup
Verify: Page Title is equal to 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online'
Step: Scroll to Bottom
Verify: @Intermediate_Icon is displayed
Step: Click on @Intermediate_Icon
Verify: @Ajax_Form_Submit_Option is displayed
Step: Click on @Ajax_Form_Submit_Option
Verify: @Page_Heading text is equal to ignore case 'ajax form submit with Loading Icon'
Step: Enter 'Tesbo' in @Name_Text_Box_Field
Step: Enter 'Tesbo is the hybrid test framework that is built upon the keyword-driven.' in @Comment_Text_Box_Field
Step: Click on @Submit_Button
Verify: @Confirmation_message text is equal to 'Form submitted Successfully!'
End

Test: Verify JQuery List Box functionality
#LB1 #ListBox #All
Step: pause until @No_Thanks_Button_On_Popup is display
Step: Click on @No_Thanks_Button_On_Popup
Verify: Page Title is equal to 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online'
Step: Scroll to Bottom
Verify: @Intermediate_Icon is displayed
Step: Click on @Intermediate_Icon
Verify: @JQuery_List_Box_Option is displayed
Step: Click on @JQuery_List_Box_Option
Verify: @List_Box_Page_Heading text contains is 'JQuery Dual List'
Step: Select using index 3 from @Source_List_Box
Step: Click on @Add_Button
Verify: @Added_List_Value text is equal to 'Isabella'
Step: Select using text 'Alice' from @Source_List_Box
Step: Click on @Add_Button
Step: Select using index 0 from @Destination_List_Box
Step: Click on @Remove_Button
Verify: @Destination_List_Size has size of '1'
End
```



Now that you have your test scripts ready with you, a few edits to the `config.json` is all that is required to run your test files over <BrandName /> Selenium Grid. Let's have a look at these edits.

**Step 1:** You need to specify the Selenium Address in you `config.json` that would point your tests over to the Hub URL of <BrandName /> Selenium Grid. Your Selenium Address would be:

```javascript
https://{LambdaTest_Username}:{LambdaTest_Access_Key}@hub.lambdatest.com/wd/hub
```

**Step 2:** In your `config.json` there is a config called "**IsGrid**". By default, IsGrid is set to false, make sure you set it as **true**.
```javascript
"IsGrid": true
```
**Step 3:** Define your desired capabilities. By defining your desired capabilities, you are informing the <BrandName /> Selenium Grid about the configurations over which you wish your test automation script to run. You can take help from <BrandName /> [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator) to fetch the capabilities class.

<img loading="lazy" src={require('../assets/images/executing-tesbo-automation-script-over-online-selenium-grid/1.webp').default} alt="Image" width="1346" height="545" className="doc_img"/>

Here is the complete `config.json`.
```javascript
{
  "run": {
    "baseUrl": "https://www.seleniumeasy.com/test/",
    "seleniumAddress": "https://{userName}:{ApiKey}@hub.lambdatest.com/wd/hub",
    "by": {
      "tag": [
        "FO1"
      ]
    },
    "browser": {
      "name": [
        "chrome"
      ]
    },
    "capabilities": {
      "chrome": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "Windows 10",
        "browserName": "Chrome",
        "version": "83.0"
      }
    },

    "parallel": {
      "status": false,
      "count": "3"
    },
    "retryAnalyser":{
      "count":"0"
    },
    "binaries": {
      "chrome": ""
    },

    "highlightElement": true,
    "IsGrid": false
  },

  "cloudIntegration" : {
    "report": false,
    "apiKey": "d31129abe90e5e2086e56a26995cc1cc",
    "projectKey" : "5cd2e1f802d39139e8bf5092",
    "buildName":"QAbleTest001"
  }
}
```

That's it. Now just hit the run button and you will find your test automation scripts running over the <BrandName /> Selenium Grid.

## Performing Parallel Testing With Online Selenium Grid

* * *

You can leverage parallel testing to run multiple tests at the same time. To run parallel testing with Tesbo  
you need to specify the count of parallel test in the config.json & set the parallel status to true.

```javascript
 "parallel": {
      "status": true,
      "count": "3"
    },
```


Now, if you wish to perform cross browser testing using the same script over different browsers in parallel then you need to define more capabilities in the config.json. Let's run the same script on 3 different browsers, simultaneously. We will run the script on Google Chrome 81 & Mozilla Firefox 76 on Windows 10. For macOS, we will take Safari 13.

```javascript
"capabilities": {
      "chrome": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "Windows 10",
        "browserName": "Chrome",
        "version": "83.0"
      }
 
      "firefox": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "Windows 10",
        "browserName": "Firefox",
        "version": "76.0"
      }
      "safari": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "MacOS Catalina",
        "browserName": "Safari",
        "version": "13.0"
      }
    },
```

Here is the new config.json to run parallel testing with Tesbo & <BrandName />.

```javascript
{
  "run": {
    "baseUrl": "https://www.seleniumeasy.com/test/",
    "seleniumAddress": "https://{userName}:{ApiKey}@hub.lambdatest.com/wd/hub",
    "by": {
      "tag": [
        "FO1"
      ]
    },
    "browser": {
      "name": [
        "chrome"
      ]
    },
    "capabilities": {
      "chrome": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "Windows 10",
        "browserName": "Chrome",
        "version": "83.0"
      }

      "firefox": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "Windows 10",
        "browserName": "Firefox",
        "version": "76.0"
      }
      "safari": {
        "build" : "Tesbo_With_LambdaTest",
        "name" : "Tesbo",
        "platform": "MacOS Catalina",
        "browserName": "Safari",
        "version": "13.0"
      }
    },

    "parallel": {
      "status": true,
      "count": "3"
    },
    "retryAnalyser":{
      "count":"0"
    },
    "binaries": {
      "chrome": ""
    },

    "highlightElement": true,
    "IsGrid": false
  },

  "cloudIntegration" : {
    "report": false,
    "apiKey": "d31129abe90e5e2086e56a26995cc1cc",
    "projectKey" : "5cd2e1f802d39139e8bf5092",
    "buildName":"QAbleTest001"
  }
}
```

<div className="ytframe"> 
<div className="youtube" data-embed="Jhzs9rlgL0w" data-loading-attribute="eager">
    <div className="play-button"></div>
</div>
</div>


That was all you need to know for running Tesbo automation scripts over <BrandName /> Selenium Grid. If you have any questions or doubts, feel free to share them with out or by mailing us to [support@testmuai.com][7]. Happy testing!!! 🙂


[1]: https://tesbo.io/
[2]: https://www.lambdatest.com/
[3]: https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/
[4]: https://github.com/QAbleHQ/LamdaTest_Tesbo_Demo
[5]: https://www.lambdatest.com/capabilities-generator/
[6]: ../assets/images/uploads/desired-capabilities.png
[7]: mailto:support@testmuai.com

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
       Executing Tesbo Test Automation Script Over Online Selenium Grid
      </span>
    </li>
  </ul>
</nav>  
