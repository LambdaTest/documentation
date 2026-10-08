---
id: mobilewright-set-up-test-environment
title: Set Up Your Mobilewright Test Environment on TestMu AI
sidebar_label: Set Up Test Environment
description: Configure credentials, upload and manage apps, and select real Android and iOS devices for your Mobilewright tests on TestMu AI.
keywords:
  - mobilewright setup
  - mobilewright credentials
  - mobilewright app upload
  - mobilewright device selection
  - mobilewright testmu ai
url: https://www.testmuai.com/support/docs/mobilewright-set-up-test-environment/
site_name: TestMu AI
slug: mobilewright-set-up-test-environment/
canonical: https://www.testmuai.com/support/docs/mobilewright-set-up-test-environment/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import RealDeviceTag from '../src/component/realDevice';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Set Up Your Mobilewright Test Environment",
          "item": `${BRAND_URL}/support/docs/mobilewright-set-up-test-environment/`
        }]
      })
    }}
></script>

# Set Up Your Mobilewright Test Environment

<RealDeviceTag value="Real Device" />

This page explains how the <BrandName /> driver for Mobilewright finds your credentials, which app it installs, and which device it requests. Configure these once in `mobilewright.config.ts` and every test in the suite uses them.

:::info Currently in BETA
Mobilewright testing on <BrandName /> is currently in **Beta**. To share feedback or report an issue, contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.
:::

## Configure credentials

The driver needs your <BrandName /> Username and Access Key. You can set them as environment variables or pass them to the driver.

### Environment variables

| Variable | Fallback | Purpose |
|----------|----------|---------|
| `TESTMU_USERNAME` | `LT_USERNAME` | Your <BrandName /> username |
| `TESTMU_ACCESS_KEY` | `LT_ACCESS_KEY` | Your <BrandName /> access key |
| `TESTMU_APP` | `LT_APP` | Default app, used when the `app` and `apps` options are not set |
| `TESTMU_BUILD` | `LT_BUILD` | Default build name, used when the `build` option is not set |

The driver reads the `TESTMU_` variable first and falls back to the `LT_` variable. Both names are supported, and you can mix them.

### Driver options

You can also pass credentials directly. Options passed to the driver take precedence over environment variables.

```ts
driver: testMuDriver({
  username: process.env.MY_USERNAME,
  accessKey: process.env.MY_ACCESS_KEY,
  app: 'lt://APP123456789123456789',
}),
```

:::warning
Do not commit your access key to source control. Read it from an environment variable or a secret store.
:::

## Provide your app

Every session starts with your app installed. If the driver cannot find an app for a session, the run stops with an error.

### Pass a single app

Set the `app` option to one of these values:

| Value | Example | Behavior |
|-------|---------|----------|
| <BrandName /> app ID | `lt://APP123456789123456789` | Uses an app you have already uploaded. This is the fastest option because nothing is uploaded at run time. |
| Local file path | `./build/app.apk` | The driver uploads the file once per run and reuses it across all workers. Uploads are cached by file content, so an unchanged build is not uploaded twice. |
| Public URL | `https://example.com/app.ipa` | <BrandName /> fetches the app from the URL. |

### Pass a different app per platform

When your suite runs on both Android and iOS, use `apps` instead of `app`. The driver picks the entry that matches the platform of the device being requested.

```ts
driver: testMuDriver({
  apps: {
    android: './build/app.apk',
    ios: './build/app.ipa',
  },
}),
```

The `apps` option accepts the keys `android`, `ios`, `android-real`, and `ios-real`. When `deviceType` is set to `'real'`, a key with the `-real` suffix takes precedence over the plain platform key. This lets you share one config with a local run that uses a simulator build: put the simulator build under `ios` and the device build under `ios-real`.

### Install helper apps

If your test needs other apps on the device, such as a companion app or a test authenticator, pass an array. The first entry is the app under test and the rest are installed alongside it.

```ts
driver: testMuDriver({
  apps: {
    android: ['./build/app.apk', 'lt://APP_ID_OF_HELPER_APP'],
  },
}),
```

You can install up to **3** helper apps per session.

### Upload your app

To get an `lt://` app ID before the run, upload your app with the <BrandName /> REST API. This is useful in CI, where you can upload once and reuse the ID across several runs.

<Tabs className="docs__val">

<TabItem value="file" label="Upload a file" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/path/to/app.apk"" -F "name="sample_app""`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="url" label="Upload from a URL">

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=sample_app"`}
</CodeBlock>
</div>

</TabItem>

</Tabs>

The response is a JSON object that contains an `app_url` of the form `lt://APP123456789123456789`. Pass this value to the `app` option. For more ways to upload and manage apps, see [Upload Apps on Real Device Cloud](/support/docs/upload-apps-on-real-device-cloud/).

## Select devices

You describe the device you want in the `use` block of your config, either at the top level or per project. The driver turns these fields into a device request on <BrandName />.

| Field | Required | Description |
|-------|----------|-------------|
| `platform` | Yes | `'android'` or `'ios'`. The driver cannot request a device without it. |
| `deviceType` | No | Must be `'real'` or left out. `'emulator'` and `'simulator'` are not supported on <BrandName /> and fail the run. |
| `deviceName` | No | A regular expression matched against the device name, for example `/iPhone 1[56]/` or `/Pixel 9/`. When left out, any available device for the platform can be allocated. |
| `osVersion` | No | An exact version or a version range, for example `'17'`, `'14.0'`, or `'>=17 <19'`. |
| `bundleId` | Recommended | The iOS bundle ID or Android package name of your app. Mobilewright uses it to relaunch the app before each test. |

### How device names are matched

The `deviceName` pattern is sent to <BrandName /> as a regular expression, so you do not need to look up exact device names. For example:

| Pattern | Matches |
|---------|---------|
| `/iPhone 16/` | iPhone 16, iPhone 16 Plus, iPhone 16 Pro, iPhone 16 Pro Max |
| `/iPhone 1[56]/` | Any iPhone 15 or iPhone 16 model |
| `/Galaxy S2[34]/` | Any Galaxy S23 or Galaxy S24 model |
| `/Pixel/` | Any Pixel device |

For more on regular expressions in device names, see [Regular Expressions in Appium](/support/docs/regular-expression-appium/).

### How OS versions are matched

| `osVersion` value | Meaning |
|-------------------|---------|
| `'17'` | Any 17.x version |
| `'17.4'` | Version 17.4 |
| `'>=17'` | Version 17 or later |
| `'>=17 <19'` | Any 17.x or 18.x version |
| `'<=15'` | Version 15 or earlier |

A range is converted into a list of whole major versions before the request is sent. For example, `'>=17 <19'` becomes a request for any 17.x or 18.x device. Minor-version bounds are rounded out to the whole major version, so a range like `'<19.5'` can also match 19.6.

:::tip
Broad patterns allocate faster because more devices qualify. Use a narrow pattern only when your test depends on a specific model or OS version.
:::

### Choose a data center

By default, sessions run in the data center nearest to you. To run in a specific region, set the `region` option to `'US'`, `'EU'`, or `'AP'`:

```ts
driver: testMuDriver({ app: 'lt://APP123456789123456789', region: 'EU' }),
```

## Test features

The driver exposes the device and session settings of <BrandName /> App Automation as driver options. You set them once on `testMuDriver()` and they apply to every session in the run.

### Test apps that use local or private servers

If your app talks to a backend on `localhost`, a staging server, or a server behind a firewall, route the device traffic through a <BrandName /> Tunnel.

1. Download the tunnel binary and start it with a name of your choice:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`./LT --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --tunnelName my-tunnel`}
</CodeBlock>
</div>

2. Enable the tunnel in the driver and pass the same name:

```ts title="mobilewright.config.ts"
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  //highlight-start
  tunnel: true,
  tunnelName: 'my-tunnel',
  //highlight-end
}),
```

For download links and tunnel flags, see [Testing Locally Hosted Apps](/support/docs/testing-locally-hosted-apps/).

### Test from another country

Set `geoLocation` to a two-letter country code to route the device's traffic through that country. Use this to test region-specific content, pricing, or availability.

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  //highlight-next-line
  geoLocation: 'FR',
}),
```

For the list of supported countries, see [IP Geolocation](/support/docs/appium-ip-geolocation/).

### Set the device timezone

Set `timezone` to run your tests with the device clock in a specific timezone:

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  //highlight-next-line
  timezone: 'London',
}),
```

For the list of supported values, see [Supported Timezones](/support/docs/supported-timezone/).

### Capture network logs

Set `networkLog: true` to record the device's network traffic. The logs appear in the **Network** tab of the session on the App Automation dashboard.

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  //highlight-next-line
  networkLog: true,
}),
```

### Throttle the network

To test your app on a slow or unreliable connection, enable network logs and pass a network profile through the `capabilities` option:

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  networkLog: true,
  //highlight-start
  capabilities: {
    networkProfile: '3g-umts-good',
  },
  //highlight-end
}),
```

Set `networkProfile` to `'offline'` to start the session with no network. For the list of profiles and how to set custom speeds, see [Network Throttling](/support/docs/app-auto-network-throttling/).

### Video and device logs

Video recordings and device logs help you debug failures. Set these options to control whether they are captured:

| Option | Description |
|--------|-------------|
| `video` | Records a video of the session. |
| `deviceLog` | Captures the device logs for the session. |

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  video: true,
  deviceLog: true,
}),
```

### Handle permissions and system alerts

Permission prompts and system alerts can block your test before it reaches your app's screens. Use these options to handle them automatically:

| Option | Platform | Description |
|--------|----------|-------------|
| `autoGrantPermissions` | Android | Grants all permissions the app requests when it is installed. |
| `autoAcceptAlerts` | iOS | Accepts system alerts, such as location or notification prompts, as they appear. |
| `autoDismissAlerts` | iOS | Dismisses system alerts as they appear. |

```ts
driver: testMuDriver({
  apps: { android: './build/app.apk', ios: './build/app.ipa' },
  autoGrantPermissions: true,
  autoAcceptAlerts: true,
}),
```

The driver sends each option only to the platform it applies to, so you can set Android and iOS options in the same config.

### Turn off animations

Set `disableAnimation: true` to turn off system animations on the device. This makes tests faster and less flaky on screens with heavy transitions.

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  disableAnimation: true,
}),
```

:::note
Mobilewright's own `use.animations` setting has no effect on <BrandName /> devices. Use the driver's `disableAnimation` option instead.
:::

### Pass other capabilities

The driver covers the common settings as named options. To use any other <BrandName /> App Automation capability, pass it through `capabilities`. Values in `capabilities` are applied last, so they override the named options.

```ts
driver: testMuDriver({
  app: 'lt://APP123456789123456789',
  capabilities: {
    // any capability from the TestMu AI capabilities generator
  },
}),
```

For the list of available capabilities, see [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/).

## Related docs

- [Run your first test](/support/docs/getting-started-with-mobilewright-testing/)
- [Driver options](/support/docs/mobilewright-references/#driver-options)
- [Troubleshooting](/support/docs/mobilewright-references/#troubleshooting)
