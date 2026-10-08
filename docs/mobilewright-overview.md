---
id: mobilewright-overview
title: Mobilewright Testing on TestMu AI
sidebar_label: Overview
description: Run your Mobilewright tests on real Android and iOS devices on TestMu AI. Learn how the TestMu AI driver for Mobilewright works and what it supports.
keywords:
  - mobilewright
  - mobilewright testing
  - mobilewright real devices
  - mobilewright testmu ai
  - mobilewright cloud
  - playwright style mobile testing
  - app automation
url: https://www.testmuai.com/support/docs/mobilewright-overview/
site_name: TestMu AI
slug: mobilewright-overview/
canonical: https://www.testmuai.com/support/docs/mobilewright-overview/
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
          "name": "Mobilewright Testing on TestMu AI",
          "item": `${BRAND_URL}/support/docs/mobilewright-overview/`
        }]
      })
    }}
></script>

# Mobilewright Testing on <BrandName />

<RealDeviceTag value="Real Device" />

[Mobilewright](https://github.com/mobile-next/mobilewright) is an open-source mobile UI test framework with a Playwright-style API. You write tests in TypeScript or JavaScript against the `device`, `screen`, and `expect` fixtures, and Mobilewright drives your Android or iOS app with auto-waiting locators and retrying assertions.

With the <BrandName /> driver for Mobilewright, you can run your existing Mobilewright suite on real Android and iOS devices in the <BrandName /> cloud by changing one line of configuration. Your tests stay the same.

:::info Currently in BETA
Mobilewright testing on <BrandName /> is currently in **Beta**. To share feedback or report an issue, contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span>.
:::

## Why run Mobilewright tests on <BrandName />

- **Real devices:** Run your tests on real Android and iOS phones and tablets instead of local simulators and emulators.
- **Parallel execution:** Each Mobilewright worker gets its own device, so you can spread a suite across many devices and cut the run time.
- **No test changes:** Point `mobilewright.config.ts` at the <BrandName /> driver. Locators, assertions, and fixtures work as they do locally.
- **Debugging artifacts:** Every session records a video, device logs, and optional network logs on the App Automation dashboard.
- **Automatic reporting:** Sessions are named after the tests they ran and marked passed or failed without any extra code.
- **Real-world conditions:** Test behind a tunnel, from another country with IP geolocation, in a different timezone, or on a throttled network.

## How it works

The `@testmuai/mobilewright` package is a Mobilewright driver. When you run `npx mobilewright test`:

1. The driver uploads your app (if you pass a local file) and requests a real device for each Mobilewright worker.
2. <BrandName /> allocates a device that matches the platform, device name, and OS version in your config, and starts an automation session on it.
3. Every Mobilewright action, such as a tap, a swipe, or a hierarchy read, is sent to the device over that session. Nothing is installed on the device apart from your app.
4. When the run ends, the driver names each session after the tests it ran and pushes the pass or fail status to the dashboard.

## Supported configuration

| Item | Support |
|------|---------|
| **Platforms** | Android and iOS real devices |
| **Device types** | Real devices only. Emulators and simulators are not supported. |
| **Mobilewright version** | `0.0.56` or later, below `0.1.0` |
| **Node.js version** | `22.12` or later |
| **Languages** | TypeScript and JavaScript |
| **App formats** | `.apk` and `.aab` for Android, `.ipa` for iOS |
| **Dashboard** | Sessions appear on the App Automation dashboard with the framework shown as **Mobilewright** |

## Get started

- [Run your first test](/support/docs/getting-started-with-mobilewright-testing/): run the sample project on a real device, run tests in parallel, read the results, and set up CI/CD.
- [Set up your test environment](/support/docs/mobilewright-set-up-test-environment/): manage credentials, apps, device selection, and test features such as tunnels, geolocation, and network throttling.
- [References](/support/docs/mobilewright-references/): every driver and config option, common errors, and known differences from local runs.
