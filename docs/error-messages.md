---
id: error-messages
title: Common Error Messages That May Happen During Test Execution
hide_title: true
sidebar_label: Error Messages During Test Execution
description: Here is a list of various error messages that may happen during test execution.
keywords:
  - supported browsers
  - test cancellation
  - max duration exceeded an error
  - firefox
  - authentication error
  - common error messages
  - exceeded queue limit error

url: https://www.testmu.ai/support/docs/error-messages/
site_name: LambdaTest
slug: error-messages/
canonical: https://www.testmu.ai/support/docs/error-messages/
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
Below is a list of various error messages that may happen during test execution.

## Authentication Error At The Time of Test Execution

* * *

This happens due to Username or Access Key passed by you is missing or invalid.

### How To Resolve?

1. Go to <BrandName /> Automation Dashboard.
2. Click on the key icon at the right top of the dashboard.
3. Copy username and access key.

## Max duration exceeded an error

* * *

The test was terminated because it exceeded the maximum duration allowed. (default is 1800 seconds).

### Possible Cause:

This might be caused by several issues: 

* Your test is too long. A single test case may be composed of multiple tests.
* Test stucks in the endless loop, where test keeps sending commands.

### Possible Solution:

* Consider breaking up your test into smaller, atomic tests.
* You can use the maxDuration desired capability option to indicate how long you want to wait for your test to complete.
* In your test check for endless loops.

## Test Cancellation – Status: Error

* * *

When a test is placed under a queue but gets cancelled before execution.

### Possible Cause:

This might occur due to various reasons:

* The connection between the local machine of the user and <BrandName /> cloud server is aborted.
* High latency may also lead your test script to test cancellation.
* User cancels the test manually after placing it in queue.

## Exceeded Queue Limit Error

* * *

Your test runner started a new test on <BrandName />, but then closed the connection before we could make a new test session available.

### Possible Cause:

This might occur due to several things:

* Client timeout with browser tests. Please make sure to set the connection timeout in your test runner/framework high enough, as old browsers take a while to start up. It would be best to wait for at least a couple minutes.
* You might be running too many tests at once. If you're exceeding the total number of concurrent test limit, we still queue the tests as per your plan. If this queueing takes too long, your test runner might disconnect before the test started.

### Possible Solutions:

* Increase the connection timeout setting in your test runner/framework. For example, for WebdriverIO, you can set connectionRetryTimeout: 210000.
* Make sure you're not exceeding the total allowed concurrent test limit as per <BrandName /> Automation plan you're subscribed to.

## Lambda Error

* * *

There are times when you may encounter Lambda Error stating the below message.

> **Lambda Error:** Uh Oh! Looks like our Grid failed to recognize your test input.

### Possible Cause:

There could be numerous reasons behind this error messages. The most common ones are listed below:

* Infrastructure Unavailability: In case of too many incoming requests, sometimes our cloud server may fail to allocate a VM as per your request.
* Incorrect Data Type for Desired Capabilities: If you send a string input for an integer data type capability then you may encounter Lambda Error.
* Excessive web-traffic spikes may also lead to Lambda Error.

## Element click intercepted - 400

* * *

The Element Click command could not be completed because the element receiving the events is obscuring the element that was requested clicked.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element <label _ngcontent-yrc-c26="" formcontrolname="reportingDealPermission" nz-checkbox="" class="ant-checkbox-wrapper ng-untouched ng-pristine ng-valid" ng-reflect-name="reportingDealPermission">...</label> is not clickable at point (161, 562). Other element would receive the click: <div _ngcontent-yrc-c26="" class="footer">...</div>
`}
</CodeBlock>
</div>

### Possible Cause:

* It usually occurs when the target element that you want to click is overlaid by some other element in the web page.


### Possible Solutions:

* There are multiple ways to solve the given issue - check <a href="https://stackoverflow.com/questions/62260511/org-openqa-selenium-elementclickinterceptedexception-element-click-intercepted">StackOverFlow for more information </a>


## Element not interactable - 400

* * *

A command could not be completed because the element is not pointer- or keyboard interactable.

### Possible Cause:

1. Element has not properly rendered

2. Element has rendered but it is not in the visible part of the screen


### Possible Solutions:

For 1. -> Use implicit /explicit wait:
  - Implicit wait :
    <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
    {`driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);`}
    </CodeBlock>
    </div>
      

  - Explicit wait :
    <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
    {`WebDriverWait wait=new WebDriverWait(driver, 20); element1 = wait.until(ExpectedConditions.elementToBeClickable(By.className("fa-stack-1x")));`}
    </CodeBlock>
    </div>

For 2. -> Solution is just to scroll till the element. Based on the version of Selenium it can be handled in different ways. For more information, refer this <a href= "https://stackoverflow.com/questions/45183797/element-not-interactable-exception-in-selenium-web-automation">link.</a>



## Insecure certificate - 400

* * *

Navigation caused the user agent to hit a certificate warning, which is usually the result of an expired or invalid TLS certificate.

### Possible Cause:

* SSL works through a combination of programs and encryption/decryption routine that exist on the web server computer and web server browser.
* When a secure connection is not established between the server and client due to the certificate, following SSL certificate error will be manifested.
* Suppose you provide some https request in the browser and get a prompt such as "This connection is untrusted" or the "The site’s security certificate is not trusted" (which varies as per the browser being used). Then such an error is subject to SSL certificate error.


### Possible Solutions:

We can essentially adjust our script such that the SSL exception is handled by itself, using Selenium Webdriver.

* For understanding and handling SSL errors - check <a href="https://www.toolsqa.com/selenium-webdriver/ssl-certificate-in-selenium/">this site</a> for more information 


## Invalid Argument - 400

* * *

The arguments passed to a command are either invalid or malformed.
Example:

It is for example not possible to set a window size to a negative value:

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

### Possible Cause:

* The invalid argument error is a WebDriver error that occurs when the arguments passed to a command are either invalid or malformed.
* Invalid argument errors can be likened to TypeErrors in JavaScript, in that they can occur for a great many APIs when the input value is not of the expected type or malformed in some way.


### Possible Solutions:

* Check the values in your input and ensure they are actually valid.


## Invalid cookie domain - 400

* * *

An illegal attempt was made to set a cookie under a different domain than the current page.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element <label _ngcontent-yrc-c26="" formcontrolname="reportingDealPermission" nz-checkbox="" class="ant-checkbox-wrapper ng-untouched ng-pristine ng-valid" ng-reflect-name="reportingDealPermission">...</label> is not clickable at point (161, 562). Other element would receive the click: <div _ngcontent-yrc-c26="" class="footer">...</div>
`}
</CodeBlock>
</div>

### Possible Cause:

* The invalid cookie domain error is a WebDriver error that occurs when an illegal attempt was made to set a cookie under a different domain than that of the current document. In WebDriver it is not permissible to set cookies for other domains than the domain of the current browsing context's document's domain.
Example:
If the current domain were to be 'example.com', it would not be possible to add a cookie for the domain 'example.org':

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

## Invalid element state - 400

* * *

A command could not be completed because the element is in an invalid state, e.g. attempting to clear an element that isn't both editable and resettable.


### Possible Cause:

* When we try to perform some operation which is not applicable then it will throw InvalidElementStateException.
* Let’s assume if the textbox is disabled and if you try to perform type operation then it will throw an exception.
* If radio button,checkbox or any other web element is disabled and if you try to perform click event then it will throw an exception.
* If any element supports only click events and if you try to perform type events then again it will throw an exception


### Possible Solutions:

* Ensure performing the required operation based on element state.
* If it is clickable element then perform click and if it supports type event then perform sendkeys.
* If the element is disabled then  enable it first and then perform operations.

For more, refer this <a href = "https://learn-automation.com/invalidelementstateexception-in-selenium-webdriver/">link (learn-automation.com) </a>.

## Invalid selector - 400

* * *

Argument was an invalid selector.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.InvalidSelectorException: invalid selector
`}
</CodeBlock>
</div>

### Possible Cause:

* The invalid selector error is a WebDriver error that occurs when an element retrieval command is used with an unknown web element selector strategy.

* The available selector strategies are CSS, link text, partial link text, tag name, and XPath. Any other selector strategy is rejected with this error.

### Possible Solutions:

* Do check the punctuation's such as @, ', and [].
* Make sure that there is only one field name with that path; else, use the contains() method


## The case where session not generated - invalid session id 404, session not created 500

* * *

### Invalid session id - 404

Occurs if the given session id is not in the list of active sessions, meaning the session either does not exist or that it's not active.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`ERROR webdriver: Request failed with status 404 due to invalid session id: invalid session
`}
</CodeBlock>
</div>

### Possible Cause:

* As of 04/2021, sync mode will not be supported anymore starting from Node.js v16 due to changes in Chromium.
* It is therefore advisable to use async to solve this error
* The WebdriverIO site has an official guideline for the same - "How to enable/disable sync mode". Please take a look on this: <a href= "https://webdriver.io/docs/sync-vs-async#async-mode"> WebdriverIO </a> 

### Session not created - 500

A new session could not be created.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.SessionNotCreatedException: Message:  Could not start a new session. Response code 500. Message: session not created
`}
</CodeBlock>
</div>

### Possible Cause:

* Incompatibility between version of the binaries being used 

### Possible Solutions:

* Can be primarily solved by ensuring Chrome version being used and the JDK, driver versions are compatible. Refer this link - <a href = "https://stackoverflow.com/questions/71571616/org-openqa-selenium-sessionnotcreatedexception-message-could-not-start-a-new-s"> stackoverflow</a>


## JavaScript error - 500

* * *

The Javascript error is a WebDriver error that occurs when a script the supplied by the user fails to execute.

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

### Possible Cause:

* The underlying cause of the execution error is often supplied in the error message, along with a stacktrace provided by the JavaScript engine in the browser.

### Possible Solutions:

* Check for invalid declarations and definitions in your code

## Invalid selector - 400

* * *

Argument was an invalid selector.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.InvalidSelectorException: invalid selector
`}
</CodeBlock>
</div>

### Possible Cause:

* The invalid selector error is a WebDriver error that occurs when an element retrieval command is used with an unknown web element selector strategy.

* The available selector strategies are CSS, link text, partial link text, tag name, and XPath. Any other selector strategy is rejected with this error.

### Possible Solutions:

* Do check the punctuation's such as @, ', and [].
* Make sure that there is only one field name with that path; else, use the contains() method


## Move target out of bounds - 500

* * *

The target for mouse interaction is not in the browser’s viewport and cannot be brought into that viewport.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`MoveTargetOutOfBoundsException: Element cannot be scrolled into view
`}
</CodeBlock>
</div>

### Possible Cause:

* Selenium enables replication for exact human behavior, so if code failure indicates element is not visible, then it is actually a case of element not being visible.

### Possible Solutions:

* For a concise explanation regarding this error - <a href = "https://sqa.stackexchange.com/questions/45719/selenium-throws-movetargetoutofboundsexception-while-using-negative-value-in-the">refer here. </a>


## No such alert - 404

* * *

An attempt was made to operate on a modal dialog when one was not open.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`Exception in thread "main" org.openqa.selenium.UnhandledAlertException: Unexpected modal dialog (text: You need to use IE 6.0 for viewing this application. Else some features may not work): You need to use IE 6.0 for viewing this application. Else some features may not work
`}
</CodeBlock>
</div>

### Possible Cause/explanation:

Refer these links for one of the possible explanations:
* <a href= "https://stackoverflow.com/questions/7722940/no-alert-is-present-no-modal-dialog-found-webdriver-unable-to-catch-js-error"> no-alert-is-present-no-modal-dialog-found-webdriver-unable-to-catch-js-error </a>
* <a href= "https://stackoverflow.com/questions/30771067/selenium-webdriver-unexpected-modal-dialog-alert"> selenium-webdriver-unexpected-modal-dialog-alert </a>


## No such cookie - 404

* * *

No cookie matching the given path name was found amongst the associated cookies of the current browsing context's active document.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`org.openqa.selenium.UnableToSetCookieException: Unable to set cookie (WARNING: The server did not provide any stacktrace information)
`}
</CodeBlock>
</div>

### Possible Cause:

* Creating a cookie before navigation to the site

### Possible Solutions:

* For a concise explanation regarding this error - <a href = "https://stackoverflow.com/questions/45842709/unable-to-set-cookies-in-selenium-webdriver">refer here. </a>



## No such element - 404

* * *

An element could not be located on the page using the given search parameters.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`exception selenium.common.exceptions.NoSuchElementException(msg=None, screen=None, stacktrace=None)
`}
</CodeBlock>
</div>

### Possible Cause:

Majorly in two cases

* When using `webdriver.find_element_by_*("expression") //example : my_element = driver.find_element_by_xpath("xpath_expression")`

* When using `element.find_element_by_*("expression")//example : my_element = element.find_element_by_*("expression")`

There are different possibilities for this error to occur. Check the link below for more information.

### Possible Solutions:

* A detailed explanation regarding this error - <a href = "https://stackoverflow.com/questions/47993443/selenium-selenium-common-exceptions-nosuchelementexception-when-using-chrome">refer here. </a>

## No such frame - 404

* * *

A command to switch to a frame could not be satisfied because the frame could not be found.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`selenium.common.exceptions.NoSuchFrameException: Message: no such frame
`}
</CodeBlock>
</div>

### Possible Cause:

* As per the HTML to switch to the desired frame you need to use WebDriverwait for the frame to be available and switch to it

### Possible Solutions:
Implement suitable edits to either css selector or XPATH

* `CSS Selector` : `WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.CSS_SELECTOR,"iframe[id^='layui-layer-iframe'][src^='fangyuan']")))`
* `XPATH`: `WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.XPATH,"//iframe[starts-with(@id,'layui-layer-iframe') and starts-with(@src,'fangyuan')]")))`

## No such window - 404

* * *

A command to switch to a window could not be satisfied because the window could not be found.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`webdriver: Request failed with status 404 due to no such window: Currently focused window has been closed.
`}
</CodeBlock>
</div>

### Possible Solution:

There are multiple approaches to this problem:
* In export configuration, to delete everything at the end, you have to set `killinstances` to `true`
* Check all the required configurations for the corresponding web browser driver (esp. for InternetExplorerDriver)
* Enabling protected mode for all zones often might do the trick.

For more, refer <a href="https://stackoverflow.com/questions/47388733/selenium-org-openqa-selenium-nosuchwindowexception-currently-focused-window-ha">Stack Overflow</a>


## No such shadow root - 404

* * *

The element does not have a shadow root.


### Explanation:

For `GET` request of Element Shadow Root - with URI template `/session/{session id}/element/{element id}/shadow`, if `shadow root` is null then error is returned with error code `no such shadow root`.

For explanation regarding locator strategy, refer this <a href= "https://stackoverflow.com/questions/65044870/how-to-extract-info-within-a-shadow-root-open-using-selenium-python/65055114#65055114">link</a>


## Stale element reference - 404

* * *

A command failed because the referenced element is no longer attached to the DOM.
Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`StaleElementReferenceException: The element reference of e75a1764-ff73-40fa-93c1-08cb90394b65 is stale either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed
`}
</CodeBlock>
</div>

### Possible Cause:

* The stale element reference error is a WebDriver error that occurs because the referenced web element is no longer attached to the DOM.

* Every DOM element is represented in WebDriver by a unique identifying reference, known as a web element. The web element reference is a UUID used to execute commands targeting specific elements, such as getting an element's tag name and retrieving a property off an element.

* When an element is no longer attached to the DOM, i.e. it has been removed from the document or the document has changed, it is said to be stale. Staleness occurs for example when you have a web element reference and the document it was retrieved from navigates.

### Possible Solutions:
Some common solutions include: 

* Refreshing the webpage - 
`driver.navigate().refresh();
 driver.findElement(By.xpath("xpath here")).click();`

* Using 'try-catch' block within 'for loop' -
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

* Using ExpectedConditions.refreshed

Wait for the element until its available. Use ExpectedConditions.refreshed to avoid StaleElementReferenceException and retrieve the element again. This method updates the element by redrawing it and we can access the referenced element.

`wait.until(ExpectedConditions.refreshed(ExpectedConditions.stalenessOf("table")));`

* Using POM (lazy initialization)
In POM, we use initElements() method which loads the element but it won’t initialize elements. initElements() takes latest address

For a detailed explanation regarding the approach to solve this error - 
* <a href= "http://darrellgrainger.blogspot.com/2012/06/staleelementexception.html"> Link 1 </a>
* <a href = "https://www.softwaretestingmaterial.com/stale-element-reference-exception-selenium-webdriver/">Link 2</a>


## Unsupported operation - 500

* * *

Indicates that a command that should have executed properly cannot be supported for some reason.

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

(for java)

### Possible Cause:

An UnsupportedOperationException is thrown when a requested operation cannot be performed because it is not supported for that particular class. One of the most common causes for this exception is using the `asList()` method of the `java.util.Arrays` class. Since this method returns a fixed-size unmodifiable `List`, the `add()` or `remove()` methods are unsupported. Trying to add or remove elements from such a `List` will throw the `UnsupportedOperationException` exception.

Other cases where this exception can occur include:

Using wrappers between collections and primitive types.
Trying to remove elements using an `Iterator`.
Trying to add, remove or set elements using `ListIterator`.

### Possible Solutions:

* The `UnsupportedOperationException` can be resolved by using a mutable collection, such as `ArrayList`, which can be modified. An unmodifiable collection or data structure should not be attempted to be modified.

Refer this explanation from Rollbar for more info - <a href="https://rollbar.com/blog/fixing-unsupportedoperationexception-errors-in-java/"> Link </a>


## unknown method - 405

* * *

The requested command matched a known URL but did not match any method for that URL.

Example:
<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`exception selenium.common.exceptions.NoSuchElementException(msg=None, screen=None, stacktrace=None)
`}
</CodeBlock>
</div>

### Possible Cause:

The unknown method error is a WebDriver error that occurs when the driver does not recognize the HTTP request method used for the endpoint.

* WebDriver provides a largely REST-ish API and not all endpoints in this API has `GET`, `POST`, and `DELETE` methods. This error occurs when you try to call an endpoint with an HTTP request method it does not support.

Refer this example - <a href = "https://developer.mozilla.org/en-US/docs/Web/WebDriver/Errors/UnknownMethod"> Unknown Method error </a>

## Unknown Error - 500

* * *

The unknown element error is a WebDriver error that occurs when an unspecified error occurs in the driver whilst processing a command.

An unknown error will usually be specific to a particular driver, so it's a good idea to read the error message, if any, for an indication of what happened.

## unknown command - 404

* * *

The unknown command error is a WebDriver error that occurs when the driver does not recognize the command/HTTP endpoint.

Example:
The /session/&lbrace;session id&rbrace;/foo endpoint does not exist, and will return an unknown command error with a 404 Not Found HTTP status code

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

## Script timeout - 500

* * *

An operation did not complete before its timeout expired

The script timeout error is a WebDriver error that occurs when a script the user has provided did not complete before the session's script timeout duration expired.

The script timeout duration is a configurable capability, which means you can change how long it will take before the driver interrupts an injected script. The driver will by default wait 30 seconds before interrupting the script and returning with a script timeout error, but this can be both extended, limited, and be set to indefinite.

If the session script timeout duration is set to indefinite by using a `null` value, you are at risk of putting the session into a non-recoverable state. Be aware that this should be used with caution.

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

* A workaround would be to use capabilities to extend the session's default script timeout.


## unable to set cookies - 500

* * *

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

### Explanation:

Creation of a cookie before navigating to the site.

If you are trying to create a cookie on the domain `www.example.com`, then you would want to navigate to some page on that domain, create the cookie, and then start your test.

The best way to do this is to navigate to some page you know will not exist on the domain, e.g. `www.example.com/this404page`, then create the cookie. It should load a lot faster since it's an error page and shouldn't contain much content. After creating the cookie on the 404 page, start the test.

## Unable to capture screen - 500

* * *

A screen capture was made impossible.

Possible explanations - <a href="https://stackoverflow.com/questions/71526066/appium-unable-to-take-screenshot-on-xcode-13-3-and-ios-15-4"> (For Appium) </a>


## unexpected alert open - 500

* * *

A command could not be executed because the remote end is not aware of it.

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

### Explanation:

This is happening because of the default behaviour of the driver when it encounters an alert. The default behaviour was set to "ACCEPT", thus the alert was closed automatically, and the switchTo().alert() couldn't find it explicitly.

The solution is to modify the default behaviour of the driver to ("IGNORE"), so that it doesn't close the alert but just ignores it.

Thereafter you could use try-catch to catch the errors if any.


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