---
id: mobilewright-references
title: Mobilewright References on TestMu AI
sidebar_label: References
description: Reference for the TestMu AI driver for Mobilewright and the mobilewright.config.ts options, plus troubleshooting and known differences from local runs.
keywords:
  - mobilewright reference
  - testMuDriver options
  - mobilewright.config.ts
  - mobilewright troubleshooting
  - mobilewright known issues
url: https://www.testmuai.com/support/docs/mobilewright-references/
site_name: TestMu AI
slug: mobilewright-references/
canonical: https://www.testmuai.com/support/docs/mobilewright-references/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import RealDeviceTag from '../src/component/realDevice';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Mobilewright References",
          "item": `${BRAND_URL}/support/docs/mobilewright-references/`
        }]
      })
    }}
></script>

# Mobilewright References

<RealDeviceTag value="Real Device" />

This page is the reference for running Mobilewright on <BrandName />: the options of the <BrandName /> driver, the options of the Mobilewright test runner, and help with errors and known differences.

:::info Currently in BETA
Mobilewright testing on <BrandName /> is currently in **Beta**. To share feedback or report an issue, contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.
:::

## Driver options

These are the options you can pass to `testMuDriver()` from the `@testmuai/mobilewright` package. All options are optional, but every session needs an app, from either the options or an environment variable.

```ts title="mobilewright.config.ts"
import { defineConfig } from 'mobilewright';
import { testMuDriver } from '@testmuai/mobilewright';

export default defineConfig({
  driver: testMuDriver({
    app: 'lt://APP123456789123456789',
    build: 'Nightly regression',
    networkLog: true,
    geoLocation: 'US',
  }),
  use: { platform: 'android', bundleId: 'com.example.app', deviceType: 'real' },
});
```

### Credentials

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `username` | `string` | `TESTMU_USERNAME`, then `LT_USERNAME` | Your <BrandName /> username. |
| `accessKey` | `string` | `TESTMU_ACCESS_KEY`, then `LT_ACCESS_KEY` | Your <BrandName /> access key. |

### App

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `app` | `string` | `TESTMU_APP`, then `LT_APP` | The app under test: an `lt://` app ID, a local `.apk`, `.aab`, or `.ipa` path (uploaded once per run), or a public https URL. |
| `apps` | `object` | – | Per-platform apps, keyed `android`, `ios`, `android-real`, or `ios-real`. A `-real` key takes precedence when `deviceType` is `'real'`. Each value can be a string or an array; extra entries in an array are installed as helper apps (up to 3). Takes precedence over `app`. |

For details, see [Provide your app](/support/docs/mobilewright-set-up-test-environment/#provide-your-app).

### Build and session details

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `build` | `string` | `TESTMU_BUILD`, then `LT_BUILD`, then the CI build name | Build name on the dashboard. |
| `project` | `string` | – | Project name on the dashboard. |
| `name` | `string` | Names of the tests that ran | Fixed session name for every session. |
| `tags` | `string[]` | – | Tags added to every session. |
| `testResults` | `boolean` | `true` | Push the pass or fail status of each session to the dashboard. |

See [Test status and reports](/support/docs/getting-started-with-mobilewright-testing/#test-status-and-reports).

### Timeouts

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `allocationTimeout` | `number` (ms) | `900000` | How long to wait for a device, including time in the <BrandName /> queue. |
| `queueTimeout` | `number` (s) | `600` | How long <BrandName /> holds a queued session request. Accepts `300` to `900`. |
| `commandTimeout` | `number` (ms) | `120000` | Timeout for each command sent to the device. |
| `idleTimeout` | `number` (s) | `900` | How long a session can stay idle before it ends. The driver raises this from the platform default of 120 seconds because a worker's session sits idle between tests, and it keeps the session alive with a periodic ping. |
| `maxDuration` | `number` (s) | – | Maximum length of a session. |

### Device and network settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `region` | `'US' \| 'EU' \| 'AP'` | Nearest data center | Data center the session runs in. |
| `tunnel` | `boolean` | – | Route device traffic through a <BrandName /> Tunnel. |
| `tunnelName` | `string` | – | Name of the tunnel to use. |
| `geoLocation` | `string` | – | Two-letter country code for [IP geolocation](/support/docs/appium-ip-geolocation/). |
| `timezone` | `string` | Device default | Device timezone. See [Supported Timezones](/support/docs/supported-timezone/). |
| `networkLog` | `boolean` | – | Capture network logs. Maps to the `network` capability. |
| `deviceLog` | `boolean` | – | Capture device logs. Maps to the `devicelog` capability. |
| `video` | `boolean` | – | Record a video of the session. |
| `disableAnimation` | `boolean` | – | Turn off system animations on the device. |
| `autoGrantPermissions` | `boolean` | – | Android only. Grant all app permissions at install. |
| `autoAcceptAlerts` | `boolean` | – | iOS only. Accept system alerts automatically. |
| `autoDismissAlerts` | `boolean` | – | iOS only. Dismiss system alerts automatically. |
| `appiumVersion` | `string` | Platform default | Automation server version used for the session. |

See [Test features](/support/docs/mobilewright-set-up-test-environment/#test-features) for examples.

### Element visibility and snapshots

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `visibility` | `'native' \| 'bounds'` | `'native'` | How iOS element visibility is judged. `'native'` uses the visibility reported by iOS. `'bounds'` treats any element with on-screen size as visible, which matches local Mobilewright runs. See [Known differences](/support/docs/mobilewright-references/#known-differences-from-local-runs). |
| `snapshotTuning` | `object \| false` | `{ waitForIdleTimeout: 0, animationCoolOffTimeout: 0 }` | Speeds up reading the screen hierarchy. Pass `false` to keep the device's default settings. |

`snapshotTuning` accepts these fields:

| Field | Default | Description |
|-------|---------|-------------|
| `waitForIdleTimeout` | `0` | Time to wait for the app to go idle before each hierarchy read. Mobilewright already checks that elements are stable, so the driver turns this wait off. |
| `animationCoolOffTimeout` | `0` | iOS only. Time to wait for animations to finish before each hierarchy read. |
| `snapshotMaxDepth` | – | Maximum depth of the hierarchy to read. Useful for very deep SwiftUI or React Native screens. |
| `customSnapshotTimeout` | – | Maximum time, in seconds, for one hierarchy read before it fails. |

### Capability overrides

| Option | Type | Description |
|--------|------|-------------|
| `capabilities` | `object` | Any <BrandName /> App Automation capability. Applied last, so it overrides the named options. |
| `ltOptions` | `object` | Same as `capabilities`, merged before it. |

### Advanced

These options are for development and debugging. You do not need them for normal runs on <BrandName />.

| Option | Type | Description |
|--------|------|-------------|
| `hubUrl` | `string` | Overrides the automation hub URL, for example to point at a local Appium server while developing. |
| `apiBase` | `string` | Overrides the base URL of the App Automation REST API. |
| `uploadUrl` | `string` | Overrides the app upload endpoint. |
| `capabilityStyle` | `'testmu' \| 'w3c'` | Forces the capability format. By default it is inferred from `hubUrl`. |

## Mobilewright configurations

These are the options of the Mobilewright test runner itself, set in `mobilewright.config.ts`.

### Config file

Mobilewright looks for `mobilewright.config.ts`, `mobilewright.config.js`, or `mobilewright.config.mjs` in the current directory and uses the first one it finds. To use a file at another path, pass `--config`:

```bash
npx mobilewright test --config configs/testmu.config.ts
```

### Top-level options

| Option | Type | Default | Description | On <BrandName /> |
|--------|------|---------|-------------|------------------|
| `driver` | driver | Local device | The device driver. Set it to `testMuDriver()` to run on <BrandName />. | Required |
| `platform` | `'ios' \| 'android'` | – | Default platform. | Required here or in `use` |
| `bundleId` | `string` | – | iOS bundle ID or Android package name of the app. | Supported |
| `deviceName` | `RegExp` | – | Pattern matched against device names. | Supported |
| `deviceType` | `'real' \| 'emulator' \| 'simulator'` | – | Kind of device. | Only `'real'` |
| `osVersion` | `string` | – | Exact OS version or range, such as `'>=17 <19'`. | Supported |
| `deviceId` | `string` | – | A specific device ID. | Not supported (local drivers only) |
| `installApps` | `string \| string[]` | – | Apps to install before the tests. | Supported. Set the app under test with the driver's `app` or `apps` option; use `installApps` only for extra apps |
| `autoAppLaunch` | `boolean` | `true` | Relaunch the app identified by `bundleId` before each test. | Supported |
| `viewTree` | `'on-failure' \| 'off'` | `'off'` | Attach the accessibility tree to the report when a test fails. | Supported |
| `testDir` | `string` | Config file directory | Folder that contains your tests. | Supported |
| `testMatch` | glob or RegExp | `**/*.{test,spec}.{js,ts,mjs}` | Files treated as test files. | Supported |
| `testIgnore` | glob or RegExp | – | Files skipped during test discovery. | Supported |
| `outputDir` | `string` | `test-results` | Folder for test artifacts. | Supported |
| `timeout` | `number` (ms) | – | Timeout for each test. | Supported |
| `globalTimeout` | `number` (ms) | – | Maximum time for the whole run. | Supported |
| `retries` | `number` | – | Retries for failing tests. | Supported |
| `workers` | `number \| string` | – | Number of parallel workers. Each worker uses one device. | Supported, capped by your plan's parallel limit |
| `fullyParallel` | `boolean` | `false` | Spread individual tests across workers, not only files. | Supported |
| `forbidOnly` | `boolean` | – | Fail the run if `test.only` is present. Useful in CI. | Supported |
| `reporter` | `'list' \| 'html' \| 'json' \| 'junit'` or array | `'list'` | Report format. | Supported |
| `globalSetup` / `globalTeardown` | `string \| string[]` | – | Files run once before or after all tests. | Supported |
| `projects` | array | – | Device and platform matrix. See [Projects](#projects). | Supported |
| `use` | object | – | Shared defaults for every test. See [use options](#use-options). | Supported |
| `expect` | object | – | Defaults for assertions. See [expect options](#expect-options). | Supported |

### `use` options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `platform` | `'ios' \| 'android'` | – | Platform for the tests. |
| `bundleId` | `string` | – | App bundle ID or package name. |
| `deviceName` | `RegExp` | – | Pattern matched against device names. |
| `deviceType` | `'real'` | – | Must be `'real'` or left out on <BrandName />. |
| `osVersion` | `string` | – | Exact OS version or range. |
| `actionTimeout` | `number` (ms) | `5000` | Timeout for each locator action, such as `tap()` or `fill()`. |
| `appLaunchTimeout` | `number` (ms) | `20000` | Time to wait for the app to reach the foreground after launch. |
| `installTimeout` | `number` (ms) | `60000` | Timeout for installing an app. |
| `allocationTimeout` | `number` (ms) | `900000` | Time to wait for a device to be allocated. |
| `animations` | `'on' \| 'off'` | – | Has no effect on <BrandName />. Use the driver's `disableAnimation` option instead. |

### `expect` options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `timeout` | `number` (ms) | `5000` | How long assertions such as `toBeVisible()` keep retrying before they fail. |

### Projects

Each project runs the matching tests with its own settings. A project accepts `name` (required), `use`, `timeout`, `testDir`, `testMatch`, `testIgnore`, `outputDir`, `retries`, `grep`, `grepInvert`, and `dependencies`.

```ts title="mobilewright.config.ts"
import { defineConfig } from 'mobilewright';
import { testMuDriver } from '@testmuai/mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  retries: 1,
  workers: 4,
  reporter: 'html',
  use: { actionTimeout: 10_000 },
  expect: { timeout: 10_000 },
  driver: testMuDriver({
    apps: { android: './build/app.apk', ios: './build/app.ipa' },
  }),
  projects: [
    { name: 'android', use: { platform: 'android', bundleId: 'com.example.app', deviceType: 'real' } },
    { name: 'ios', use: { platform: 'ios', bundleId: 'com.example.app', deviceType: 'real', osVersion: '>=17' } },
  ],
});
```

Run a single project with `--project`:

```bash
npx mobilewright test --project android
```

### Per-file settings

Use `test.use()` in a test file to override settings for that file or for a `test.describe` block:

```ts
import { test, expect } from '@mobilewright/test';

test.use({ bundleId: 'com.example.app', viewTree: 'on-failure' });
```

## Troubleshooting

Use this section to fix common errors and to see where a Mobilewright run on <BrandName /> real devices behaves differently from a run on your local simulator or emulator.

### Turn on debug logs

Set the `DEBUG` environment variable to see what the driver is doing. The logs show device allocation, every command sent to the device, app uploads, and status updates.

```bash
DEBUG=testmu:* npx mobilewright test
```

Include these logs and the session ID when you contact support.

### Common errors

| Error or symptom | Cause | Fix |
|------------------|-------|-----|
| `credentials are missing` | The driver cannot find your username or access key. | Set `LT_USERNAME` and `LT_ACCESS_KEY` (or `TESTMU_USERNAME` and `TESTMU_ACCESS_KEY`), or pass `username` and `accessKey` to the driver. |
| `A platform ("ios" or "android") is required` | No `platform` is set for the project. | Set `platform` at the top level of the config or in each project's `use` block. |
| `A TestMu.Ai session must start with an app` | No app was found for the platform being requested. | Set the driver's `app` option, an `apps` entry for that platform, or the `LT_APP` environment variable. |
| `real devices only (requested deviceType "simulator")` | `deviceType` is set to `'simulator'` or `'emulator'`. | Set `deviceType: 'real'` or remove it. |
| `installs at most 3 additional apps per session` | More than three helper apps are listed. | Keep the app under test plus at most three helper apps. |
| `Plan concurrency is N; further workers will queue` | You started more workers than your plan's parallel session limit. | Lower `workers`, or expect the extra workers to wait for a free device. |
| The run waits a long time before the first test | No matching device was free, so the request is queued. | Widen your `deviceName` pattern or `osVersion` range. The driver waits up to 15 minutes by default (`allocationTimeout`). |
| `Cannot install "..." mid-session` | An app passed to `installApps` or `device.installApp()` could not be uploaded. | Upload the app first and pass its `lt://` ID, or declare it in the driver's `app` or `apps` option. |

### Known differences from local runs

The driver runs your tests on the same automation stack that <BrandName /> uses for Appium: XCUITest on iOS and UiAutomator2 on Android. A few Mobilewright behaviors differ from a local run because of this.

| Area | Behavior on <BrandName /> | What to do |
|------|---------------------------|------------|
| **iOS visibility** | iOS reports an element as not visible when another element is drawn over it, even if it is on screen. For example, a SwiftUI `Stepper` drawn over its own label. `toBeVisible()` can fail on such elements where it passed locally. | Set the driver option `visibility: 'bounds'` to judge visibility by on-screen size, which matches local runs. |
| **`getByType()`** | Matches the raw native type, such as `XCUIElementTypeSwitch` on iOS. Local runs strip the prefix. | Prefer `getByRole()`, for example `getByRole('switch')`, which works the same everywhere. |
| **`toBeChecked()` on iOS** | Works on switches. | No action needed. |
| **Element screenshots** | `locator.screenshot()` returns an image cropped to the element. | No action needed. |
| **`screen.goBack()` on iOS** | iOS has no back button, so the driver performs the system back swipe from the left edge. | No action needed. Make sure the screen supports the back swipe. |
| **Webviews** | Hybrid app webviews are only visible to the test if the app makes them inspectable: a debug build, or `isInspectable = true` on iOS 16.4 and later. In a release build, `getByWebView()` finds no webviews. | Test webviews with a debug build, or set the webview as inspectable. |
| **`device.listApps()`** | Returns only the apps launched in the current session. | Do not rely on it to list every installed app. |
| **Device animations** | Mobilewright's `animations` setting has no effect. | Use the driver option `disableAnimation: true`. |
| **Rapid repeated taps** | Two taps in quick succession can be handled differently than on a local device. | Add an assertion between the taps. |

### Current limitations

- Only real devices are supported. Emulators and simulators are not available for Mobilewright on <BrandName />.
- Mobilewright `0.0.56` or later, below `0.1.0`, is required.
- Mobilewright testing on <BrandName /> is in Beta. Behavior may change as the integration matures.

## Related docs

- [Mobilewright testing overview](/support/docs/mobilewright-overview/)
- [Run your first test](/support/docs/getting-started-with-mobilewright-testing/)
- [Set up your test environment](/support/docs/mobilewright-set-up-test-environment/)
- [Mobilewright on GitHub](https://github.com/mobile-next/mobilewright)
