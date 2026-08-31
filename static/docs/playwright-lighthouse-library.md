# How to Generate Lighthouse Reports With Playwright on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you run Playwright tests and want to measure page quality in the same run, you can generate Lighthouse reports on TestMu AI without a separate audit step. A Lighthouse report scores performance, accessibility, SEO, and best practices using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), the open-source auditing tool from Google. You add the Playwright Lighthouse Library to your project and call the `lighthouseReport` action from within a test to produce the report on the cloud machine.

> Lighthouse reports are supported on **Chrome**, **MicrosoftEdge**, and **Chromium** browsers.

**Sample repository**
The code sample for generating Lighthouse performance metrics in a Playwright test is available in the TestMu AI GitHub repository. Download or clone the repository to run the tests as shown.  View on GitHub


## Prerequisites


Before you write the test, install the library and enable Lighthouse in your project environment.

- Ensure that you have the Playwright Lighthouse Library installed in your web project.
```bash
npm install playwright-lighthouse
```

- Export the *LIGHTHOUSE_LAMBDATEST* environment variable to your project environment.
```bash
export LIGHTHOUSE_LAMBDATEST='true'
```

## Write Your Test Script


Add the `lighthouseReport` action to a Playwright test to capture Lighthouse metrics for a target URL during the run.


Generating a Lighthouse report within the test can increase the test duration. Generate Lighthouse reports only in the tests that need them.


The JavaScript snippet below runs the `lighthouseReport` action against a URL from inside the test.
```js title="playwright-lighthouse-report.js"
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
action: 'lighthouseReport',
arguments: { url: 'https://www.example.com' }
})}`)
```

### Generate Reports for Authenticated Pages


Use this approach to audit pages that require a login by passing an authentication token to Lighthouse. It lets you measure performance, accessibility, and SEO for restricted pages in your Playwright tests. This feature is supported on **Windows** and **macOS** platforms only.

> This feature is only supported on **Windows** and **macOS** platforms.




```javascript
await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({
action: 'lighthouseReport',
arguments: { url: 'https://www.example.com',
args: `--extra-headers
${JSON.stringify({ authtoken: "YOUR_AUTH_TOKEN" })}`
} })}` );
```




```javascript
await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({
action: 'lighthouseReport',
arguments: { url: 'https://www.example.com',
args: '--extra-headers
"{\\"authtoken\\": \\"YOUR_AUTH_TOKEN\\"}"'
} })}`);
```



### Sample Test Script


The script below runs Playwright automation with the Lighthouse library on TestMu AI. It navigates to the DuckDuckGo search engine, searches for the term "Playwright", then runs a Lighthouse audit on `https://duckduckgo.com` with defined performance thresholds and report formats.

```javascript reference title="playwright-lighthouse-report.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js
```

## Trigger Your Test on TestMu AI


With the script ready, set your credentials and run the test so the report is generated on the TestMu AI cloud machine.

### Set Up Your Authentication


You need your TestMu AI credentials to run automation scripts on TestMu AI. To obtain access credentials, [purchase a TestMu AI plan](https://billing.lambdatest.com/billing/plans) or open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then set your TestMu AI `Username` and `Access Key` in environment variables with the following commands.






  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}









  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}






### Run Your Test


Run the following command in the terminal, replacing the placeholder with the path to your test file.

```bash
node RELATIVE_PATH_OF_YOUR_TEST_FILE
```

### View Your Test Results


To review runs that use the Playwright Lighthouse Library, open the TestMu AI [Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).



## Related Playwright Guides


Continue with the guides below to build out your Playwright test coverage on TestMu AI.

- [Get started with Playwright testing on TestMu AI](/support/docs/playwright-testing/) covers the base setup for cloud runs.
- [Set up Playwright test execution on TestMu AI](/support/docs/playwright-test-execution-setup/) walks through configuring a cloud run.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) lists every capability you can set for a test.
