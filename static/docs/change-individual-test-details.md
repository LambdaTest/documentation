# Changing Individual Test Details

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

executeScript(\"lambda-status=passed\");\n\n// Mark test as failed\n$driver->executeScript(\"lambda-status=failed\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "# Mark test as passed\ndriver.execute_script(\"lambda-status=passed\")\n\n# Mark test as failed\ndriver.execute_script(\"lambda-status=failed\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass the new name through JavascriptExecutor (Java)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rename Your Test (JavaScript)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await driver.executeScript('lambda-name=Your_test_name');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rename Your Test (Python)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "driver.execute_script(\"lambda-name=Your_test_name\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "((IJavaScriptExecutor)driver).ExecuteScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "PHP",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PHP",
        "text": "$driver->executeScript(\"lambda-name=Your_test_name\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ruby",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Ruby",
        "text": "driver.execute_script(\"lambda-name=Your_test_name\")"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Changing Individual Test Details

You can modify individual test details from your automation test build while running Selenium tests on TestMu AI. This guide covers marking test status and renaming tests during execution.

## Mark Test Status as Pass or Fail

Use the `lambda-status` hook via JavascriptExecutor to set the final status of a test on the TestMu AI dashboard.

When you run Selenium tests on the TestMu AI grid, a test that your local assertions marked as failed may show as completed on the dashboard. Use the `lambda-status` hook to explicitly set the correct status.

You can set these status values: `passed`, `failed`, `skipped`, `ignored`, `unknown`, `error`.

### Code Samples

```java
// Mark test as passed
((JavascriptExecutor) driver).executeScript("lambda-status=passed");

// Mark test as failed
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
```

```javascript
// Mark test as passed
await driver.executeScript('lambda-status=passed');

// Mark test as failed
await driver.executeScript('lambda-status=failed');
```

```python
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

```csharp
// Mark test as passed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=passed");

// Mark test as failed
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=failed");
```

```php
// Mark test as passed
$driver->executeScript("lambda-status=passed");

// Mark test as failed
$driver->executeScript("lambda-status=failed");
```

```ruby
# Mark test as passed
driver.execute_script("lambda-status=passed")

# Mark test as failed
driver.execute_script("lambda-status=failed")
```

Place the `lambda-status` call inside your test's teardown or `@AfterMethod` block so the status is set before the session ends. For the full list of Lambda Hooks, see [Lambda Hooks](/support/docs/lambda-hooks/).

## Rename Your Test

Use the `lambda-name` hook to update the test name after execution has started.

You can rename a running test to reflect dynamic data such as iteration count or data-driven parameters. Pass the new name through JavascriptExecutor:

```java
((JavascriptExecutor) driver).executeScript("lambda-name=Your_test_name");
```

```javascript
await driver.executeScript('lambda-name=Your_test_name');
```

```python
driver.execute_script("lambda-name=Your_test_name")
```

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("lambda-name=Your_test_name");
```

```php
$driver->executeScript("lambda-name=Your_test_name");
```

```ruby
driver.execute_script("lambda-name=Your_test_name")
```
