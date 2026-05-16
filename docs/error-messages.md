---
id: error-messages
title: Error Messages During Test Execution
sidebar_label: Fix Error Messages
description: Identify and resolve common error messages that occur during Selenium test execution on the cloud grid.
keywords:
  - selenium test execution errors
  - authentication error fix
  - max duration exceeded
  - element click intercepted
  - stale element reference fix
  - session not created error
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/error-messages/
site_name: TestMu AI
slug: error-messages/
canonical: https://www.testmuai.com/support/docs/error-messages/
---
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
          "name": "Error Messages During Test Execution",
          "item": `${BRAND_URL}/support/docs/error-messages/`
        }]
      })
    }}
></script>

# Error Messages During Test Execution

***
Below is a list of error messages that may occur during test execution, along with their causes and solutions.

## Authentication Error at the Time of Test Execution
---
This error occurs when your Username or Access Key is missing or invalid.

This happens when the Username or Access Key you passed is missing or invalid.

### How to Resolve?

1. Go to the TestMu AI [Automation Dashboard](https://accounts.lambdatest.com/dashboard).
2. Click the key icon at the top-right of the dashboard.
3. Copy your username and access key.

## Max Duration Exceeded Error
---
The test was terminated because it exceeded the maximum allowed duration.

The test was terminated because it exceeded the maximum duration allowed (default is 1800 seconds).

### Possible Cause

This might result from several issues: 

* Your test is too long. A single test case may contain multiple tests.
* The test gets stuck in an endless loop, continuously sending commands.

### Possible Solution

* Break your test into smaller, atomic tests.
* Use the maxDuration desired capability option to set how long you want to wait for your test to complete.
* Check your test for endless loops.

## Test Cancellation - Status: Error
---
A queued test gets cancelled before execution starts.

When a test is placed in a queue but gets cancelled before execution.

### Possible Cause

This might occur due to various reasons:

* The connection between your local machine and the TestMu AI cloud server is aborted.
* High latency may also cause your test script to get cancelled.
* You cancel the test manually after placing it in the queue.

## Exceeded Queue Limit Error
---
Your test runner closed the connection before a new session became available.

Your test runner started a new test on TestMu AI, but then closed the connection before a new test session became available.

### Possible Cause

This might occur due to several things:

* Client timeout with browser tests. Make sure to set the connection timeout in your test runner or framework high enough, as older browsers take a while to start up. Wait for at least a couple of minutes.
* You might be running too many tests at once. If you exceed the total concurrent test limit, tests are queued per your plan. If this queueing takes too long, your test runner might disconnect before the test starts.

### Possible Solutions

* Increase the connection timeout setting in your test runner or framework. For example, for WebdriverIO, set `connectionRetryTimeout: 210000`.
* Make sure you are not exceeding the total allowed concurrent test limit for your TestMu AI Automation plan.

## Lambda Error
---
The grid failed to recognize your test input.

You may encounter a Lambda Error with the below message.

> **Lambda Error:** Uh Oh! Looks like our Grid failed to recognize your test input.

### Possible Cause

There could be several reasons behind this error. The most common ones include:

* Infrastructure Unavailability: With too many incoming requests, the cloud server may fail to allocate a VM for your request.
* Incorrect Data Type for Desired Capabilities: Sending a string input for an integer data type capability triggers a Lambda Error.
* Excessive web-traffic spikes may also cause Lambda Error.

## Element Click Intercepted - 400
---
Another element is obscuring the element you want to click.

The Element Click command could not complete because another element is obscuring the target element.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element <label _ngcontent-yrc-c26="" formcontrolname="reportingDealPermission" nz-checkbox="" class="ant-checkbox-wrapper ng-untouched ng-pristine ng-valid" ng-reflect-name="reportingDealPermission">...</label> is not clickable at point (161, 562). Other element would receive the click: <div _ngcontent-yrc-c26="" class="footer">...</div>
`}
</CodeBlock>
</div>

### Possible Cause

* This usually occurs when the target element is overlaid by another element in the web page.


### Possible Solutions

* There are multiple ways to solve this issue. Check <a href="https://stackoverflow.com/questions/62260511/org-openqa-selenium-elementclickinterceptedexception-element-click-intercepted">StackOverflow for more information</a>.


## Element Not Interactable - 400
---
The element is not ready for pointer or keyboard interaction.

A command could not complete because the element is not pointer- or keyboard interactable.

### Possible Cause

1. The element has not rendered yet.

2. The element has rendered but is not in the visible part of the screen.


### Possible Solutions

For 1. -> Use implicit or explicit wait:
  - Implicit wait:
    <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
    {`driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);`}
    </CodeBlock>
    </div>
      

  - Explicit wait:
    <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
    {`WebDriverWait wait=new WebDriverWait(driver, 20); element1 = wait.until(ExpectedConditions.elementToBeClickable(By.className("fa-stack-1x")));`}
    </CodeBlock>
    </div>

For 2. -> Scroll to the element. Based on the Selenium version, this can be handled in different ways. For more information, refer to this <a href= "https://stackoverflow.com/questions/45183797/element-not-interactable-exception-in-selenium-web-automation">link.</a>



## Insecure Certificate - 400
---
Navigation triggered a certificate warning due to an expired or invalid TLS certificate.

Navigation caused the user agent to hit a certificate warning, usually resulting from an expired or invalid TLS certificate.

### Possible Cause

* SSL works through a combination of programs and encryption/decryption routines on the web server and browser.
* When a secure connection is not established between the server and client due to the certificate, an SSL certificate error appears.
* If you send an HTTPS request in the browser and get a prompt such as "This connection is untrusted" or "The site's security certificate is not trusted" (which varies by browser), this indicates an SSL certificate error.


### Possible Solutions

You can adjust your script to handle the SSL exception automatically using Selenium WebDriver.

* For understanding and handling SSL errors, check <a href="https://www.toolsqa.com/selenium-webdriver/ssl-certificate-in-selenium/">this site</a> for more information.


## Invalid Argument - 400
---
The arguments passed to a command are invalid or malformed.

The arguments passed to a command are either invalid or malformed.
Example:

You cannot set a window size to a negative value:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`from selenium import webdriver from selenium.common import exceptions session = webdriver.Firefox()
  try: 
    session.set_window_size(-10, 0)
  except 
    exceptions.InvalidArgumentException as e: print(e.message) `}
</CodeBlock>
</div>

Output:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`InvalidArgumentException: Expected -10 to be >= 0`}
</CodeBlock>
</div>

### Possible Cause

* The invalid argument error is a WebDriver error that occurs when the arguments passed to a command are invalid or malformed.
* Invalid argument errors are similar to TypeErrors in JavaScript. They can occur for many APIs when the input value is not the expected type or is malformed.


### Possible Solutions

* Check the values in your input and verify they are valid.


## Invalid Cookie Domain - 400
---
You attempted to set a cookie under a domain different from the current page.

An illegal attempt was made to set a cookie under a different domain than the current page.

### Possible Cause

* The invalid cookie domain error occurs when you attempt to set a cookie under a different domain than the current browsing context. WebDriver does not permit setting cookies for other domains.
Example:
If the current domain is 'example.com', you cannot add a cookie for 'example.org':

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`from selenium import webdriver
  from selenium.common import exceptions
  session = webdriver.Firefox()
  session.get("https://example.com/")
  try:
    cookie = {"name": "foo",
              "value": "bar",
              "domain": "example.org"}
    session.add_cookie(cookie)
  except exceptions.InvalidCookieDomainException as e: print(e.message)
`}
</CodeBlock>
</div>

Output: 
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`InvalidCookieDomainException: https://example.org/
`}
</CodeBlock>
</div>

## Invalid Element State - 400
---
The element is in a state that does not support the requested operation.

A command could not complete because the element is in an invalid state, e.g. attempting to clear an element that is not both editable and resettable.


### Possible Cause

* When you try to perform an operation that does not apply to the element, it throws InvalidElementStateException.
* If a textbox is disabled and you try to type into it, it throws an exception.
* If a radio button, checkbox, or other web element is disabled and you try to click it, it throws an exception.
* If an element supports only click events and you try to perform type events, it throws an exception.


### Possible Solutions

* Verify you are performing the correct operation based on the element state.
* If the element is clickable, perform a click. If it supports type events, use sendkeys.
* If the element is disabled, enable it first before performing operations.

For more, refer to this <a href = "https://learn-automation.com/invalidelementstateexception-in-selenium-webdriver/">link (learn-automation.com)</a>.

## Invalid Selector - 400
---
The provided selector strategy is unknown or incorrect.

Argument was an invalid selector.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.InvalidSelectorException: invalid selector
`}
</CodeBlock>
</div>

### Possible Cause

* The invalid selector error occurs when an element retrieval command uses an unknown web element selector strategy.

* The available selector strategies are CSS, link text, partial link text, tag name, and XPath. Any other selector strategy triggers this error.

### Possible Solutions

* Check punctuation such as @, ', and [].
* Make sure there is only one field name with that path. Otherwise, use the contains() method.


## Session Not Generated - Invalid Session ID 404 / Session Not Created 500
---
The session either does not exist, is not active, or could not be created.

### Invalid Session ID - 404

Occurs if the given session ID is not in the list of active sessions, meaning the session either does not exist or is not active.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`ERROR webdriver: Request failed with status 404 due to invalid session id: invalid session
`}
</CodeBlock>
</div>

### Possible Cause

* As of 04/2021, sync mode is no longer supported starting from Node.js v16 due to changes in Chromium.
* Use async to solve this error.
* The WebdriverIO site has an official guideline for this: <a href= "https://webdriver.io/docs/sync-vs-async#async-mode">WebdriverIO</a> 

### Session Not Created - 500

A new session could not be created.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.SessionNotCreatedException: Message:  Could not start a new session. Response code 500. Message: session not created
`}
</CodeBlock>
</div>

### Possible Cause

* Incompatibility between the versions of binaries being used.

### Possible Solutions

* Ensure the Chrome version and the JDK/driver versions are compatible. Refer to this link: <a href = "https://stackoverflow.com/questions/71571616/org-openqa-selenium-sessionnotcreatedexception-message-could-not-start-a-new-s">stackoverflow</a>


## JavaScript Error - 500
---
A user-supplied script failed to execute in the browser.

The JavaScript error occurs when a script supplied by the user fails to execute.

Example: 

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`from selenium import webdriver
  from selenium.common import exceptions
  session = webdriver.Firefox()
  try:
    session.execute_script("return foo")
  except exceptions.JavascriptException as e:
    print(e.message)
`}
</CodeBlock>
</div>

Output:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`JavascriptException: ReferenceError: foo is not defined
`}
</CodeBlock>
</div>

### Possible Cause

* The underlying cause of the execution error is often supplied in the error message, along with a stacktrace from the JavaScript engine in the browser.

### Possible Solutions

* Check for invalid declarations and definitions in your code.

## Move Target Out of Bounds - 500
---
The target for mouse interaction is outside the browser viewport.

The target for mouse interaction is not in the browser's viewport and cannot be brought into view.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`MoveTargetOutOfBoundsException: Element cannot be scrolled into view
`}
</CodeBlock>
</div>

### Possible Cause

* Selenium replicates exact human behavior, so if code failure indicates an element is not visible, the element is actually not visible.

### Possible Solutions

* For a detailed explanation, <a href = "https://sqa.stackexchange.com/questions/45719/selenium-throws-movetargetoutofboundsexception-while-using-negative-value-in-the">refer here.</a>


## No Such Alert - 404
---
You attempted to operate on a modal dialog when none was open.

An attempt was made to operate on a modal dialog when one was not open.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`Exception in thread "main" org.openqa.selenium.UnhandledAlertException: Unexpected modal dialog (text: You need to use IE 6.0 for viewing this application. Else some features may not work): You need to use IE 6.0 for viewing this application. Else some features may not work
`}
</CodeBlock>
</div>

### Possible Cause/Explanation

Refer to these links for possible explanations:
* <a href= "https://stackoverflow.com/questions/7722940/no-alert-is-present-no-modal-dialog-found-webdriver-unable-to-catch-js-error">no-alert-is-present-no-modal-dialog-found-webdriver-unable-to-catch-js-error</a>
* <a href= "https://stackoverflow.com/questions/30771067/selenium-webdriver-unexpected-modal-dialog-alert">selenium-webdriver-unexpected-modal-dialog-alert</a>


## No Such Cookie - 404
---
No cookie matching the given path name was found in the current browsing context.

No cookie matching the given path name was found among the associated cookies of the current browsing context's active document.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.UnableToSetCookieException: Unable to set cookie (WARNING: The server did not provide any stacktrace information)
`}
</CodeBlock>
</div>

### Possible Cause

* Creating a cookie before navigating to the site.

### Possible Solutions

* For a detailed explanation, <a href = "https://stackoverflow.com/questions/45842709/unable-to-set-cookies-in-selenium-webdriver">refer here.</a>



## No Such Element - 404
---
The element could not be located on the page using the given search parameters.

An element could not be located on the page using the given search parameters.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`exception selenium.common.exceptions.NoSuchElementException(msg=None, screen=None, stacktrace=None)
`}
</CodeBlock>
</div>

### Possible Cause

This occurs mainly in two cases:

* When using `webdriver.find_element_by_*("expression") //example : my_element = driver.find_element_by_xpath("xpath_expression")`

* When using `element.find_element_by_*("expression")//example : my_element = element.find_element_by_*("expression")`

There are different possibilities for this error. Check the link below for more information.

### Possible Solutions

* For a detailed explanation, <a href = "https://stackoverflow.com/questions/47993443/selenium-selenium-common-exceptions-nosuchelementexception-when-using-chrome">refer here.</a>

## No Such Frame - 404
---
The command to switch to a frame could not find the specified frame.

A command to switch to a frame could not be satisfied because the frame could not be found.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`selenium.common.exceptions.NoSuchFrameException: Message: no such frame
`}
</CodeBlock>
</div>

### Possible Cause

* To switch to the desired frame, use WebDriverWait for the frame to become available and then switch to it.

### Possible Solutions
Implement suitable edits to either CSS selector or XPATH:

* `CSS Selector`: `WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.CSS_SELECTOR,"iframe[id^='layui-layer-iframe'][src^='fangyuan']")))`
* `XPATH`: `WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.XPATH,"//iframe[starts-with(@id,'layui-layer-iframe') and starts-with(@src,'fangyuan')]")))`

## No Such Window - 404
---
The command to switch to a window could not find the specified window.

A command to switch to a window could not be satisfied because the window could not be found.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`webdriver: Request failed with status 404 due to no such window: Currently focused window has been closed.
`}
</CodeBlock>
</div>

### Possible Solution

There are multiple approaches to this problem:
* In export configuration, to delete everything at the end, set `killinstances` to `true`.
* Check all required configurations for the corresponding web browser driver (especially for InternetExplorerDriver).
* Enabling protected mode for all zones often resolves this.

For more, refer to <a href="https://stackoverflow.com/questions/47388733/selenium-org-openqa-selenium-nosuchwindowexception-currently-focused-window-ha">Stack Overflow</a>.


## No Such Shadow Root - 404
---
The element does not have a shadow root attached.

The element does not have a shadow root.


### Explanation

For a `GET` request of Element Shadow Root with URI template `/session/{session id}/element/{element id}/shadow`, if `shadow root` is null, the error code `no such shadow root` is returned.

For an explanation on locator strategy, refer to this <a href= "https://stackoverflow.com/questions/65044870/how-to-extract-info-within-a-shadow-root-open-using-selenium-python/65055114#65055114">link</a>.


## Stale Element Reference - 404
---
The referenced element is no longer attached to the DOM.

A command failed because the referenced element is no longer attached to the DOM.
Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed
`}
</CodeBlock>
</div>

### Possible Cause

* The stale element reference error occurs because the referenced web element is no longer attached to the DOM.

* Every DOM element is represented in WebDriver by a unique identifying reference, known as a web element. The web element reference is a UUID used to execute commands targeting specific elements, such as getting an element's tag name and retrieving a property off an element.

* When an element is no longer attached to the DOM (it has been removed from the document or the document has changed), it is said to be stale. Staleness occurs, for example, when you have a web element reference and the document it was retrieved from navigates.

### Possible Solutions
Common solutions include: 

* Refreshing the webpage:
`driver.navigate().refresh();
 driver.findElement(By.xpath("xpath here")).click();`

* Using 'try-catch' block within 'for loop':
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`for(int i=0; i<=2;i++){
  try{
     driver.findElement(By.xpath("xpath here")).click();
     break;
  }
  catch(Exception e){
     Sysout(e.getMessage());
  }
}`}
</CodeBlock>
</div>

* Using ExpectedConditions.refreshed:

Wait for the element until it is available. Use ExpectedConditions.refreshed to avoid StaleElementReferenceException and retrieve the element again. This method updates the element by redrawing it so you can access the referenced element.

`wait.until(ExpectedConditions.refreshed(ExpectedConditions.stalenessOf("table")));`

* Using POM (lazy initialization):
In POM, use initElements() which loads the element but does not initialize elements. initElements() takes the latest address.

For a detailed explanation:
* <a href= "http://darrellgrainger.blogspot.com/2012/06/staleelementexception.html">Link 1</a>
* <a href = "https://www.softwaretestingmaterial.com/stale-element-reference-exception-selenium-webdriver/">Link 2</a>


## Unsupported Operation - 500
---
The requested operation is not supported for the given class or data structure.

A command that should execute properly cannot be supported for some reason.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`import java.util.Arrays;
import java.util.List;
public class UnsupportedOperationExceptionExample {
    public static void main(String[] args) {
        String array[] = {"a", "b", "c"};
        List<String> list = Arrays.asList(array);
        list.add("d");
    }
}
`}
</CodeBlock>
</div>

(for Java)

### Possible Cause

An UnsupportedOperationException is thrown when a requested operation cannot be performed because it is not supported for that class. One common cause is using the `asList()` method of `java.util.Arrays`. Since this method returns a fixed-size unmodifiable `List`, the `add()` or `remove()` methods are unsupported. Trying to add or remove elements from such a `List` throws the `UnsupportedOperationException`.

Other cases where this exception can occur include:

Using wrappers between collections and primitive types.
Trying to remove elements using an `Iterator`.
Trying to add, remove, or set elements using `ListIterator`.

### Possible Solutions

* Resolve the `UnsupportedOperationException` by using a mutable collection, such as `ArrayList`, which can be modified. Do not attempt to modify an unmodifiable collection or data structure.

Refer to this explanation from Rollbar for more info: <a href="https://rollbar.com/blog/fixing-unsupportedoperationexception-errors-in-java/">Link</a>


## Unknown Method - 405
---
The request matched a known URL but used an unsupported HTTP method.

The requested command matched a known URL but did not match any method for that URL.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`exception selenium.common.exceptions.NoSuchElementException(msg=None, screen=None, stacktrace=None)
`}
</CodeBlock>
</div>

### Possible Cause

The unknown method error occurs when the driver does not recognize the HTTP request method used for the endpoint.

* WebDriver provides a largely REST-ish API and not all endpoints have `GET`, `POST`, and `DELETE` methods. This error occurs when you call an endpoint with an HTTP request method it does not support.

Refer to this example: <a href = "https://developer.mozilla.org/en-US/docs/Web/WebDriver/Errors/UnknownMethod">Unknown Method error</a>

## Unknown Error - 500
---
An unspecified error occurred in the driver while processing a command.

The unknown element error occurs when an unspecified error occurs in the driver while processing a command.

An unknown error is usually specific to a particular driver, so read the error message for an indication of what happened.

## Unknown Command - 404
---
The driver does not recognize the command or HTTP endpoint.

The unknown command error occurs when the driver does not recognize the command or HTTP endpoint.

Example:
The /session/&lbrace;session id&rbrace;/foo endpoint does not exist, and returns an unknown command error with a 404 Not Found HTTP status code.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`% curl -i -d '{}' http://localhost:4444/session/foo
HTTP/1.1 404 Not Found
Connection: close
Content-Type: application/json; charset=utf-8
Cache-Control: no-cache
Content-Length: 113
Date: Fri, 30 Mar 2018 15:30:51 GMT
{"value":{"error":"unknown command","message":"POST /session/asd did not match a known command","stacktrace":""}}
`}
</CodeBlock>
</div>

## Script Timeout - 500
---
A user-provided script did not complete before the session's script timeout expired.

An operation did not complete before its timeout expired.

The script timeout error occurs when a script you provided did not complete before the session's script timeout duration expired.

The script timeout duration is a configurable capability. You can change how long the driver waits before interrupting an injected script. The driver waits 30 seconds by default before interrupting the script and returning a script timeout error, but you can extend, limit, or set this to indefinite.

If you set the session script timeout duration to indefinite by using a `null` value, you risk putting the session into a non-recoverable state. Use this with caution.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`from selenium import webdriver
from selenium.common import exceptions
session = webdriver.Firefox()
try:
    session.execute_script("""
        let [resolve] = arguments;
        window.setTimeout(resolve, 35000);
        """)
except exceptions.ScriptTimeoutException as e:
    print(e.message)
`}
</CodeBlock>
</div>

Output:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">

{`ScriptTimeoutException: Timed out after 35000 ms`}
</CodeBlock>
</div>

* A workaround is to use capabilities to extend the session's default script timeout.


## Unable to Set Cookies - 500
---
A command to set a cookie's value could not be satisfied.

`org.openqa.selenium.UnableToSetCookieException: Unable to set cookie (WARNING: The server did not provide any stacktrace information)`

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`System.setProperty("webdriver.edge.driver","C:\\Program Files\\Latest Webdriver\\MicrosoftWebDrive.exe" );
EdgeDriver = new EdgeDriver();
Thread.sleep(2000);
Cookie cookie = new Cookie("Testing", "11111");
EdgeDriver.manage().addCookie(cookie);
EdgeDriver.get("https://www.google.ca/?gws_rd=ssl"); // The link is an example
`}
</CodeBlock>
</div>

### Explanation

This error results from creating a cookie before navigating to the site.

If you need to create a cookie on the domain `www.example.com`, first navigate to some page on that domain, create the cookie, and then start your test.

Navigate to a page you know will not exist on the domain, e.g. `www.example.com/this404page`, then create the cookie. It loads faster since it is an error page with minimal content. After creating the cookie on the 404 page, start the test.

## Unable to Capture Screen - 500
---
A screen capture could not be completed.

Possible explanations: <a href="https://stackoverflow.com/questions/71526066/appium-unable-to-take-screenshot-on-xcode-13-3-and-ios-15-4">(For Appium)</a>


## Unexpected Alert Open - 500
---
A command could not execute because the remote end encountered an unexpected alert.

`org.openqa.selenium.UnhandledAlertException: unexpected alert open`

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.UnhandledAlertException: unexpected alert open
 (Session info: chrome=38.0.2125.111)
 (Driver info: chromedriver=2.9.248315,platform=Windows NT 6.1 x86) (WARNING: The server did not  provide any stacktrace information)
 Command duration or timeout: 16 milliseconds: null
 Build info: version: '2.42.2', revision: '6a6995d', time: '2014-06-03 17:42:30'
 System info: host: 'Casper-PC', ip: '10.0.0.4', os.name: 'Windows 7', os.arch: 'x86', os.version:  '6.1', java.version: '1.8.0_25'
 Driver info: org.openqa.selenium.chrome.ChromeDriver
`}
</CodeBlock>
</div>

### Explanation

This happens because of the default behavior of the driver when it encounters an alert. The default behavior was set to "ACCEPT", so the alert was closed automatically, and the switchTo().alert() could not find it explicitly.

The solution is to modify the default behavior of the driver to ("IGNORE"), so that it does not close the alert but just ignores it.

Then use try-catch to catch any errors.


* * *
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
        Error Messages
      </span>
    </li>
  </ul>
</nav>
