# How to Set Browsers and OS for Cypress Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

When you run Cypress tests on the cloud, you need to know which browser and OS combinations are available and how to target them. TestMu AI runs Cypress on Chrome, Firefox, Edge, Electron, and WebKit across a range of macOS and Windows versions. You pick a combination either by adding a `browsers` object to `lambdatest-config.json` or by passing the `--browsers` flag to the CLI.

TestMu AI supports the browsers, browser versions, and operating systems listed below for Cypress testing.

| OPERATING SYSTEM | CHROME                   | FIREFOX      | EDGE                     |
| ---------------- | ------------------------ | ------------ | ------------------------ |
| macOS Ventura    | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Monterey   | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Big Sur    | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Mojave     | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| macOS Catalina   | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 11       | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 10       | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 8.1      | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 8        | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |
| Windows 7        | 66 and above (Except 82) | 60 and above | 80 and above (Except 82) |

>**Note**: TestMu AI Automation also supports Cypress testing on the Electron browser and in WebKit.
* **Electron**: Supported on all OS.
* **WebKit**: Supported on Windows 10 and 11, and macOS Big Sur and Monterey. See [how to run Cypress tests on WebKit](/support/docs/cypress-testing-using-webkit/).

You can run Cypress tests across multiple browser and OS combinations in two ways.

1. Configuring the browser and platform keys in `lambdatest-config.json`
2. Using the **--browsers** flag

## Configuring the Browser and Platform Keys in lambdatest-config.json

To run Cypress tests on multiple browser and OS configurations, add the `browsers` object to `lambdatest-config.json` and define a list of browsers, browser versions, and platforms. Each entry sets one browser, its platform, and the versions to run, as shown in the syntax below.

```js
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      },
   ],
```

## Using the Cypress CLI Command

You can also select the browser and platform at run time with the Cypress CLI instead of editing `lambdatest-config.json`. The `--browsers` flag takes one or more `platform:browser:version` values, as described below.

| Flag | Purpose | Type |
|------|---------|------|
| **--brs, --browsers**  | Test will be run on the specified browsers in the format: `platform:browser:version` |String |

Pass each combination to the `--brs, --browsers` flag using the `platform:browser:version` format shown below.

```js
lambdatest-cypress run --browsers "platform:browser:version"
```

For the Cypress versions TestMu AI supports and how to set them, see [Supported Cypress Versions](/support/docs/supported-cypress-versions/).

## Related Cypress Guides

Continue with the guides below to configure and run your Cypress tests on TestMu AI.

- [Configure Cypress run settings](/support/docs/run-settings/) covers every run setting and CLI flag, including resolution and environment variables.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents the full lambdatest-cypress command reference.
- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) covers cloning the sample project and running a test.
