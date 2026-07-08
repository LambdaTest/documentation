# Lambda Hooks for Selenium Automation

## Available Lambda Hooks

Use these hooks via JavascriptExecutor to control test behavior, manage files, and capture logs.

TestMu AI Selenium Grid offers a set of hooks (Lambda Hooks) that you can use to modify your automation test cases and perform multiple operations in your automation scripts.

Below is the list of available Lambda Hooks and the function each performs.

| Lambda Hooks | Descriptions |
| ------------- | ------------ |
| *lambda-status* | Check whether the test is passed or failed.For Passed Test:`driver.executeScript("lambda-status=passed");`For Failed Test:`driver.executeScript('lambda-status=failed');`   `((JavascriptExecutor) driver).executeScript("lambda-status=" + "passed");`  Here are some newly added status you can use for interpreting test execution results: `skipped`, `ignored`, `unknown`, `error` |
| *lambda-file-exists*  | Check whether the downloaded file exists in the test machine.`((JavascriptExecutor) driver).executeScript("lambda-file-exists=file-name.file_format");` |
| *lambda-file-stats*  |  Retrieve file metadata such as md5 code, modified time, name and size.`((JavascriptExecutor) driver).executeScript("lambda-file-stats=file-name.file_format");` |
| *lambda-file-content*  |  Download file content using base64 encoding.`((JavascriptExecutor) driver).executeScript("lambda-file-content=file-name.file_format");` |
| *lambda-file-list*  |  List down the file in download directory.`print driver.execute_script("lambda-file-list={match string with filename}");` `ie:print driver.execute_script("lambda-file-list=sample");Response: List of files in downloads dir starting with sample` |
| *lambda-name*  |  For changing the test name.`((JavascriptExecutor) driver).executeScript("lambda-name=TestName");`  `((JavascriptExecutor) driver).executeScript("lambda-name=" + "name from hooks");` |
| *lambda-build*  |  For updating the build name.`executeScript("lambda-build=BUILD_NAME");` |
| *lambda-action*  |  Used to mark a test as passed/failed. Moreover, it allows the option to include a failure reason, which will be visible on the TestMu AI Automation Dashboard inside the session view.`Map action = new HashMap();action.put("status", "failed"); action.put("reason", "tmp reason"); driver.executeScript("lambda-action", action);`  `((JavascriptExecutor) driver).executeScript("lambda-action=" + "Lambda Error");` |
| *lambda-perform-keyboard-events* | You can simulate keyboard shortcuts like **ctrl + c**, **ctrl + v** in automation test scenarios. This hook is supported on both Windows and MacOS.  `js.executeScript("lambda-perform-keyboard-events:tab");`|
| *lambda_breakpoint*          | Aborts the test execution to use the live interaction feature. `driver.executeScript("lambda-breakpoint=true");`|
| *lambda_screenshot*          | Captures the async screenshot during test execution. `driver.executeScript("lambda-screenshot=true");`|
| *lambda_files_delete*        | Deletes the file in the download directory in the virtual machines (VMs).`driver.executeScript("lambda-files-delete=file1.csv,file2.csv);`|
| *lambda_network_throttle*    | Throttles network speed during test execution.`executeScript("lambda-throttle-network","Regular 4G")`|
| *lambda_ping*                | Fetches the IPs of the domain.`driver.executeScript("lambda-ping=lambdatest.com");`|
| *lambda_exceptions*          | Uploads the exceptions for tests that are captured on the console.`driver.executeScript('lambda-exceptions', [[message]])`|
| *lambda_get_clipboard*       | Prints the clipboard data on the console.`driver.executeScript("lambda-get-clipboard");`|
| *lambda_set_clipboard*       | Sets the clipboard data.`driver.executeScript("lambda-set-clipboard= Amit");`|
| *lambda_clear_clipboard*     | Clears the data of the clipboard.`driver.executeScript("lambda-clear-clipboard");`|
| *lambda_unbound_ping*        | Fetches the IPs from the outbound domain.`driver.executeScript("lambda-unbound-ping=lambdatest.com");`
| *lambda:network*        | Fetches the network log entries in array format during session.`driver.execute_script("lambda:network");`- Fetch the network log from last fetch request time to current time.`driver.execute_script("lambda:network=all");`- Fetch from start of test session to current time.
| *lambdaUpdateName*        | Sets the test name during test execution.`driver.executeScript("lambdaUpdateName=TestName");` |
| *lambda-test-tags* | Dynamically update your test tags for a test session which can be used to organize and filter your test results.  **Syntax :** `driver.executeScript("lambda-test-tags", "Tag 1,Tag 3,Tag 2");`   **Limitations :**  **1. Maximum Character Length per Tag:** Each tag can have up to 50 characters.   **2. Maximum Number of Tags:** A maximum of 15 tags can be assigned to a single test session. |

> **Note**: These hooks only work if you are connected to your [TestMu AI Hub URL](/support/docs/hyperexecute-general-faqs/#17-how-can-i-access-my-lambdatest-hub-url). If you use these hooks on any other platform, you might see the error: `javascript error: Invalid left-hand side in assignment`
