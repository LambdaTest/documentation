# How to Test Locally Hosted Pages With Playwright on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

{\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'tunnel': true, // Add tunnel configuration if testing a locally hosted webpage\n      'tunnelName': '' // Optional\n    }\n  }\n})()"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Test Locally Hosted Pages With Playwright on TestMu AI

The TestMu AI Tunnel lets you test private server URLs, locally hosted web apps, and websites on real browsers and operating systems. On TestMu AI, you can test plain HTML, CSS, PHP, Python, and other similar web files saved locally. When connecting through corporate firewalls or proxy settings, no restrictions apply to the TestMu AI Tunnel binary. To establish a secure and unique tunnel connection between your system and the TestMu AI cloud servers, the TestMu AI Tunnel uses protocols such as Web Sockets, HTTPS, and SSH (Secure Shell).

This guide walks you through running Playwright tests against locally hosted pages across real browsers and operating systems.

## Playwright Testing Of Locally Hosted Websites

You can run Playwright tests against locally hosted websites and web apps by routing traffic through the TestMu AI Tunnel binary.

**Sample repo**

Clone the TestMu AI Playwright sample repository used in this document to follow along with the same files shown here.  View on GitHub

1. Clone the TestMu AI Playwright repository on your system.

2. Install the npm dependencies.

```bash
npm install
```

3. To run your Playwright tests, set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find both values.

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

4. To establish a tunnel connection between your local device and TestMu AI, download the binary file for your OS.

- Windows **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/windows/32bit/LT_Windows.zip)**
- macOS **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/mac/32bit/LT_Mac.zip)**
- Linux **[64 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip) | [32 Bit](https://downloads.lambdatest.com/tunnel/v3/linux/32bit/LT_Linux.zip)**

5. Extract the downloaded binary file.

6. In the command prompt, navigate to the directory where you extracted the binary file.

7. Run the command below in the terminal to start the tunnel.

```bash
./LT --user {user's login email} --key {user's access key} --tunnelName {user's tunnel name}
```

8. In your desired capabilities, add the capability `tunnel: true`. If multiple tunnels are running, add both the `tunnel` and `tunnelName` capabilities to target the correct one.

```js
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'tunnel': true, // Add tunnel configuration if testing a locally hosted webpage
      'tunnelName': '' // Optional
    }
  }
})()
```

Once the test runs, you can view the reports for your local tests on the TestMu AI Automation Dashboard.
