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
* **WebKit**: Supported on Windows 10 and 11, and macOS Big Sur and Monterey. See [how to test Cypress on WebKit](#test-on-webkit) below.

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

## Supported Cypress Versions

TestMu AI supports every major, minor, and patch release of Cypress across both release lines: Cypress 10 and above, and Cypress 9 and below. Use the latest version where possible to benefit from recent fixes and improvements.

Set the version in any of three ways (each option overrides the ones before it):

1. **`package.json`:** TestMu AI picks the Cypress version from your project's `package.json` dev dependencies.
2. **`npm_dependencies`:** set `cypress` under `run_settings.npm_dependencies` in `lambdatest-config.json`; this takes priority over `package.json`.
3. **`cypress_version`:** set `cypress_version` in `lambdatest-config.json` to override the version from `npm_dependencies` or `package.json`.

The example below sets both `npm_dependencies` and `cypress_version` in `lambdatest-config.json`, with `cypress_version` taking priority.

```json title="lambdatest-config.json"
"run_settings": {
"npm_dependencies": {
"cypress": "10.0.0"
},
"cypress_version": "10.0.0"
}
```

## Test on WebKit

WebKit is Safari's browser engine, so running your Cypress tests on WebKit shows how your site behaves in Safari. To target it, set the browser to `Webkit` in the `browsers` array of `lambdatest-config.json`, as shown below.

```js
"browsers": [
{ "browser": "Webkit", "platform": "Windows 11",     "versions": ["latest"] },
{ "browser": "Webkit", "platform": "Windows 10",     "versions": ["latest"] },
{ "browser": "Webkit", "platform": "MacOS Monterey", "versions": ["latest"] },
{ "browser": "Webkit", "platform": "MacOS Big Sur",  "versions": ["latest"] }
]
```

WebKit runs on **Cypress v10.8.0 only**, so pin both Cypress and `playwright-webkit` under `run_settings.npm_dependencies`, as shown below.

```js
"npm_dependencies": {
"cypress": "10.8.0",
"playwright-webkit": "^1.28.1"
}
```

**Limitations:**
- WebKit supports only the **latest** version.
- Works only with **Cypress v10.8.0**.
- Supported on **Windows 10 and 11**, and **macOS Big Sur and Monterey**.

## Related Cypress Guides

Continue with the guides below to configure and run your Cypress tests on TestMu AI.

- [Configure Cypress run settings](/support/docs/run-settings/) covers every run setting and CLI flag, including resolution and environment variables.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents the full lambdatest-cypress command reference.
- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) covers cloning the sample project and running a test.
