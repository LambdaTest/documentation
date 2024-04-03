---
id: lambda-hooks
title: Lambda Hooks For Selenium Automation | LambdaTest
sidebar_label: Lambda Hooks
hide_title: true
description: LambdaTest offers a set of Lambda Hooks that you can leverage to modify your automation test cases and perform multiple operations in your selenium testing scripts.
keywords:
  - lambda hooks for selenium automation
  - lambda hooks
  - lambda hooks automation
  - lambda hooks automation testing
  - selenium lambda hooks
image: /assets/images/og-images/default-user-image.png
url: https://www.lambdatest.com/support/docs/lambda-hooks/
site_name: LambdaTest
slug: lambda-hooks/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Lambda Hooks",
          "item": "https://www.lambdatest.com/support/docs/lambda-hooks/"
        }]
      })
    }}
></script>

# Lambda Hooks For Selenium Automation
* * *
LambdaTest Selenium Grid offers a set of hooks also known as Lambda Hooks that you can leverage to modify your automation test cases and perform multiple operations in your automation scripts. 

Below is the representation of the available Lambda Hooks along with the function it performs.

| Lambda Hooks | Descriptions |
| ------------- | ------------ |
| *lambda-status* | Check whether the test is passed or failed.<br />For Passed Test:<br />`driver.executeScript("lambda-status=passed");`<br />For Failed Test:<br />`driver.executeScript('lambda-status=failed');`<br />  <br /> `((JavascriptExecutor) driver).executeScript("lambda-status=" + "passed");` <br /><br /> Here are some newly added status you can use for interpreting test execution results: `skipped`, `ignored`, `unknown`, `error` |
| *lambda-file-exists*  | Check whether the downloaded file exists in the test machine.<br />`((JavascriptExecutor) driver).executeScript("lambda-file-exists=file-name.file_format");` |
| *lambda-file-stats*  |  Retrieve file metadata such as md5 code, modified time, name and size.<br />`((JavascriptExecutor) driver).executeScript("lambda-file-stats=file-name.file_format");` |
| *lambda-file-content*  |  Download file content using base64 encoding.<br />`((JavascriptExecutor) driver).executeScript("lambda-file-content=file-name.file_format");` |
| *lambda-file-list*  |  List down the file in download directory.<br />`print driver.execute_script("lambda-file-list={match string with filename}");` <br />`ie:print driver.execute_script("lambda-file-list=sample");Response: List of files in downloads dir starting with sample` |
| *lambda-name*  |  For changing the test name.<br />`((JavascriptExecutor) driver).executeScript("lambda-name=TestName");` <br /> <br />`((JavascriptExecutor) driver).executeScript("lambda-name=" + "name from hooks");` |
| *lambda-build*  |  For updating the build name.<br />`executeScript("lambda-build=BUILD_NAME");` |
| *lambda-action*  |  Used to mark a test as passed/failed. Moreover, it allows the option to include a failure reason, which will be visible on the LambdaTest Automation Dashboard inside the session view.<br />`Map<String, String> action = new HashMap();action.put("status", "failed"); action.put("reason", "tmp reason"); driver.executeScript("lambda-action", action);` <br /> <br />`((JavascriptExecutor) driver).executeScript("lambda-action=" + "Lambda Error");` |
| *lambda-perform-keyboard-events* | You can seamlessly simulate keyboard shortcuts like **ctrl + c**, **ctrl + v** in automation test scenarios. This hook is supported on both Windows and MacOS. <br /> `js.executeScript("lambda-perform-keyboard-events:tab");`|
| *lambda_breakpoint*          | Aborts the test execution to use the live interaction feature. <br/>`driver.executeScript("lambda-breakpoint=true");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| *lambda_screenshot*          | Captures the async screenshot during test execution. <br/>`driver.executeScript("lambda-screenshot=true");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| *lambda_files_delete*        | Deletes the file in the download directory in the virtual machines (VMs).<br/>`driver.executeScript("lambda-files-delete=file1.csv,file2.csv);`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| *lambda_network_throttle*    | Throttles network speed during test execution.<br/>`executeScript("lambda-throttle-network","Regular 4G")`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| *lambda_ping*                | Fetches the IPs of the domain.<br/>`driver.executeScript("lambda-ping=lambdatest.com");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| *lambda_exceptions*          | Uploads the exceptions for tests that are captured on the console.<br/>`driver.executeScript('lambda-exceptions', [[message]])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| *lambda_get_clipboard*       | Prints the clipboard data on the console.<br/>`driver.executeScript("lambda-get-clipboard");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| *lambda_set_clipboard*       | Sets the clipboard data.<br/>`driver.executeScript("lambda-set-clipboard= Amit");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| *lambda_clear_clipboard*     | Clears the data of the clipboard.<br/>`driver.executeScript("lambda-clear-clipboard");`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| *lambda_unbound_ping*        | Fetches the IPs from the outbound domain.<br/>`driver.executeScript("lambda-unbound-ping=lambdatest.com");`     

> **Note**: These hooks will only work if you're connected to your [LambdaTest Hub URL](/support/docs/hyperexecute-general-faqs/#17-how-can-i-access-my-lambdatest-hub-url). If you use these hooks on any other platform, you might see the error: `javascript error: Invalid left-hand side in assignment` 

Got Questions? Give a **<span className="doc__lt" onClick={() => window.openLTChatWidget()}>Shout</span>** to us. We're here for you 24/7. <br />Happy testing! :)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Lambda Hooks
      </span>
    </li>
  </ul>
</nav>