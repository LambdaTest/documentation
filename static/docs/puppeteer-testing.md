# How to Run Your First Puppeteer Test on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

{    \n    const capabilities = {\n        'browserName': 'Chrome',\n        'browserVersion': 'latest',\n        'LT:Options': {\n            'platform': 'Windows 10',\n            'build': 'puppeteer-build-1',\n            'name': 'My first Puppeteer test',\n            'resolution':'1366x768',\n            'user': process.env.LT_USERNAME || \"Your Username\",\n            'accessKey': process.env.LT_ACCESS_KEY || \"Your Access Key\",\n            'network': true\n        }\n   };\n    \n    try {\n        const browser = await puppeteer.connect({\n            browserWSEndpoint:\n                `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,\n        });\n\n        const page = await browser.newPage();\n        await page.setViewport({\n            width: 1024,\n            height: 768,\n            deviceScaleFactor: 1,\n          });\n        console.log(\"Navigating to LambdaTest\");\n        await page.goto('https://www.lambdatest.com/');\n        console.log(\"Navigating to Pricing\");\n        await page.goto('https://www.lambdatest.com/pricing');\n        console.log(\"Navigating to Automation\");\n        await page.goto('https://www.lambdatest.com/automation-testing');\n        console.log(\"Closing browser\");\n        await browser.close();\n\n    } catch (e) {\n        console.log(\"Error - \", e);\n    }\n})();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Your First Puppeteer Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "node navigation.js"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# How to Run Your First Puppeteer Test on TestMu AI

If you automate Chrome with Puppeteer over the DevTools Protocol, you can run those same tests against real browsers and operating systems by connecting to TestMu AI. This gives your Puppeteer scripts access to a browser farm of real browser and OS combinations instead of a single local machine. You point Puppeteer's `connect` call at the TestMu AI CDP WebSocket endpoint, pass your capabilities, then view every run in the Automation Dashboard.

## Prerequisites

Before you run a test, set up the sample project and your credentials.

**Sample repo**
 View on GitHub

1. Clone the TestMu AI Puppeteer repository on your system.

2. Install the npm dependencies.

```bash
npm install
```

3. Add `browserWSEndpoint` (the browser endpoint URL) in your test script.

```js
`wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

**Windows**

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Your First Puppeteer Test

With the project cloned and your credentials set, follow these steps to run a Puppeteer test on the TestMu AI platform.

1. Clone the [TestMu AI Puppeteer sample repository](https://github.com/LambdaTest/puppeteer-sample) and switch to the cloned directory.

```bash
git clone https://github.com/LambdaTest/puppeteer-sample.git
cd puppeteer-sample
```

2. Ensure you have npm dependencies installed.

3. Configure your TestMu AI authentication credentials.

Once these steps are complete, you can run your first Puppeteer test on TestMu AI.

>**Test Scenario**: The below test script runs on the Chrome browser on Windows 10. It visits the TestMu AI platform, opens the Pricing page, then navigates to the Automation Testing page.

```js
'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {
    const capabilities = {
        'browserName': 'Chrome',
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'puppeteer-build-1',
            'name': 'My first Puppeteer test',
            'resolution':'1366x768',
            'user': process.env.LT_USERNAME || "Your Username",
            'accessKey': process.env.LT_ACCESS_KEY || "Your Access Key",
            'network': true
        }
   };

    try {
        const browser = await puppeteer.connect({
            browserWSEndpoint:
                `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
        console.log("Navigating to LambdaTest");
        await page.goto('https://www.lambdatest.com/');
        console.log("Navigating to Pricing");
        await page.goto('https://www.lambdatest.com/pricing');
        console.log("Navigating to Automation");
        await page.goto('https://www.lambdatest.com/automation-testing');
        console.log("Closing browser");
        await browser.close();

    } catch (e) {
        console.log("Error - ", e);
    }
})();
```

4. Run the test with the command below.

```bash
node navigation.js
```

## View Your Puppeteer Test Results

After a run finishes, the TestMu AI Automation Dashboard is where you see the results of your Puppeteer tests. Click the session name of a test to view the details of the Puppeteer session you just executed. The session view shows Test Name, Test ID, selected configurations, test logs, basic info, input config, and the test session video.

## Related Puppeteer Guides

Continue with these related guides to configure and extend your Puppeteer runs on TestMu AI.

- [Configure your environment to execute Puppeteer tests](/support/docs/puppeteer-test-execution-setup/) walks through the setup needed before a cloud run.
- [Set browser, OS, and build capabilities for Puppeteer](/support/docs/capabilities-for-puppeteer/) covers the full capabilities reference.
- [Run Puppeteer tests with the Mocha framework](/support/docs/puppeteer-testing-with-mocha/) shows how to structure tests with Mocha.
