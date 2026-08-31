# Mobile App Accessibility Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Mobile app accessibility testing enables automated accessibility scanning for native mobile applications in KaneAI. This feature performs accessibility checks during test execution, helping identify accessibility issues and ensure compliance with accessibility standards.


Scanning from a **KaneAI-authored** flow is one of three entry points for mobile accessibility. To trigger scans from Appium code, see [Accessibility Native App Automation Test](/support/docs/accessibility-native-app-automation-test/); for manual, screen-by-screen validation on a real device, use the [Accessibility App Scanner](/support/docs/accessibility-app-scanner/).


## Prerequisites



Before you add an accessibility scan, make sure you have:
- A KaneAI mobile app test authoring session (Android or iOS).
- For accessibility reports on iOS, a device running iOS 17.0 or above (see the platform support table below).


## Platform Support


Report generation depends on the platform version, as shown below.

| Platform | Supported Versions | Notes |
|----------|-------------------|-------|
| **iOS** | 17.0 and above | Versions below 17.0 will pass tests but won't generate accessibility reports |
| **Android** | All versions | Full support for accessibility scanning |

## How It Works


Follow these steps to add a scan instruction during authoring and review its report after execution.

During test authoring, add the accessibility scan instruction:


During test authoring, add the accessibility scan instruction to the screen you want to check.

### Step 2: Instruction Recording



**Result:** The scan instruction is added and the current screen is marked for scanning.

- The instruction is recorded in the test execution flow
- The current screen is marked to be scanned using the app scanner hook for accessibility
- The scan hook is triggered during test execution at the corresponding screen


Once added, the scan instruction is recorded in the test execution flow.

Once the test is saved:



**Result:** The scan hook is bound to the marked screen and will run at execution time.

To view the screenshot of the screen where the accessibility scan was performed, click the (•••) icon.


When you save the test, KaneAI creates the test case with an accessibility tag.

During automated test execution:



To view the screenshot of the scanned screen, click the (•••) icon.



**Result:** A tagged test case is saved with the scan instruction in its summary.

### Step 4: Execute and Review the Report


During automated execution, KaneAI runs the scan and reports issues.

- The accessibility scan runs at the marked screen.
- Detected issues are categorized.
- The accessibility report appears in the test execution results on the Automation dashboard.

**Result:** The run produces a categorized accessibility report in the automation results.


## What the Scan Provides


The accessibility scan gives you the following in a KaneAI mobile test.

| Feature | Description |
|---------|-------------|
| **Native App Scanning** | Uses platform-native accessibility scan hooks |
| **Automatic Tagging** | Tests are automatically tagged with `accessibility-scan` for easy identification |
| **Test Case Integration** | Accessibility instructions are visible in test case summaries |
| **Automated Reporting** | Accessibility reports are generated during test execution |
| **Cross-Platform Support** | Works on iOS 17+ and all Android versions |

## Troubleshooting


Use this section to resolve the common scan failures.

**Possible Cause:**
- iOS version is below 17.0 (tests will execute but no report is generated)


**What you see:** the test passes but no accessibility report appears in the results.

**Possible Causes:**
- Instruction not properly added during authoring
- Test not saved after adding the instruction

**Fix:** run the test on a device with iOS 17.0 or above.

### The Scan Instruction Is Not Recorded


**What you see:** the `accessibility-scan` tag or the scan step is missing from the test case.

**Why it happens:** the instruction was not added correctly during authoring, or the test was not saved after adding it.

**Fix:**
1. Verify the instruction was added during authoring.
2. Save the test after adding the accessibility instruction.
3. Confirm the scan instruction appears in the test case summary.

## Next Steps


Extend accessibility coverage across your mobile tests.

- Apply platform-specific patterns from [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/).
- Reach a specific screen to scan with [KaneAI Deeplink Support](/support/docs/kane-ai-deeplink-support/).
