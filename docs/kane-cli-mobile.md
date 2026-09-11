---
id: kane-cli-mobile
title: Mobile Testing with Kane CLI
sidebar_label: Mobile Testing
description: Run Kane CLI tests against local mobile virtual devices. Set up the iOS Simulator or the Android Emulator, then drive a native app on macOS Apple Silicon.
keywords:
  - kane cli mobile
  - kane cli emulator
  - kane cli simulator
  - kane cli ios simulator
  - kane cli android emulator
  - mobile app testing
  - android emulator testing
  - ios simulator testing
  - ios simulator setup
  - android emulator setup
  - xcode simctl
  - arm64-v8a system image
  - avdmanager
  - kane cli doctor
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-mobile/
site_name: TestMu AI
slug: kane-cli-mobile/
canonical: https://www.testmuai.com/support/docs/kane-cli-mobile/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Mobile Testing with Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-mobile/"
        }]
      })}}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-cli-mobile/"
    },
    "headline": "Mobile Testing with Kane CLI",
    "description": "Run Kane CLI tests against local mobile virtual devices. Set up the iOS Simulator or the Android Emulator, then drive a native app on macOS Apple Silicon.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-mobile/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli mobile",
      "kane cli emulator",
      "kane cli simulator"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Point the Command Line Tools at Xcode",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "sudo xcode-select -s /Applications/Xcode.app/Contents/Developer\nsudo xcodebuild -license accept   # accept the license non-interactively"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Confirm Xcode and simctl are reachable",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "xcodebuild -version                # should report 16.x or newer\nxcrun simctl list devices available"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "From the command line",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "sdkmanager \"system-images;android-35;google_apis;arm64-v8a\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "From the command line",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "avdmanager create avd -n kane_pixel \\\n  -k \"system-images;android-35;google_apis;arm64-v8a\" \\\n  -d pixel"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If your SDK lives somewhere else, point Kane CLI at it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export ANDROID_HOME=\"/path/to/your/Android/sdk\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "This is the same for both platforms",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli login\nkane-cli doctor --install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Confirm Kane CLI sees a ready toolchain and, optionally, the devices on your machine",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli doctor              # required checks, each with a fix if it fails\nkane-cli doctor --targets    # also list the simulators and emulators Kane CLI can run against"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Once a target is set up, point a run at it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# one-off, from the command line\nkane-cli run \"Sign in and open the account tab\" --target simulator --app ./builds/MyApp.zip\nkane-cli run \"Add the first item to the cart\" --target emulator --app ./builds/app-debug.apk\n\n# or set a default target once, then just run\nkane-cli config set-target emulator\nkane-cli run \"Add the first item to the cart\" --app ./builds/app-debug.apk"
      }
    ],
    "dateModified": "2026-09-07T15:23:26+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Setup",
      "description": "Run Kane CLI tests against local mobile virtual devices. Set up the iOS Simulator or the Android Emulator, then drive a native app on macOS Apple Silicon.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Prepare the Virtual Device",
          "text": "Follow the tab for the platform you intend to test. Set up both if you test on both. The exact iOS runtime versions and simulator device models in the supported matrix are pinned by the product team. The versions shown below are current, working examples. Confirm the officially supported set before you rely on a specific one. Kane CLI requires Xcode 16 or newer, which bundles the iOS Simulator, the simctl tool, and at least one iOS runtime. Kane CLI talks to the simulator through simctl, so make sure the developer directory resolves to the full Xcode install, not the standalone Command Line Tools: Confirm Xcode and simctl are reachable: You should see one or more iOS devices grouped under an iOS runtime. Xcode ships with default simulators. If none are listed, add one from Xcode \u2192 Settings \u2192 Platforms, or Xcode \u2192 Window \u2192 Devices and Simulators. On Apple Silicon, always use an arm64-v8a system image. The x86 and x86_64 images do not run natively and are effectively unusable. This is the single most common setup mistake. The exact Android API levels and device profiles in the supported matrix are pinned by the product team. The values shown below, API 35 and Pixel, are current, working examples. Confirm the officially supported set before you rely on a specific one. Android Studio bundles the Android SDK, the emulator, the system image manager, and the Device Manager, which are the pieces the steps below use. If you prefer a headless setup, install the command line SDK tools...",
          "url": "https://www.testmuai.com/support/docs/kane-cli-mobile/#step-1-prepare-the-virtual-device"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Install the Kane CLI Test Tooling",
          "text": "Sign in and let Kane CLI install the tooling it manages. This is the same for both platforms: You do not need to boot a simulator, boot an emulator, or run adb yourself. Kane CLI discovers the device, boots it, installs your app, and runs the test.",
          "url": "https://www.testmuai.com/support/docs/kane-cli-mobile/#step-2-install-the-kane-cli-test-tooling"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Ready Check",
          "text": "Confirm Kane CLI sees a ready toolchain and, optionally, the devices on your machine: When the checks for your platform pass, setup is complete. On Android, confirm your AVD is listed by --targets.",
          "url": "https://www.testmuai.com/support/docs/kane-cli-mobile/#step-3-ready-check"
        }
      ]
    }
  ]) }}
/>

Kane CLI can run tests against local mobile virtual devices: Apple's **iOS Simulator** and Google's **Android Emulator**. You author and run mobile tests the same way you already do for the browser. The differences are that a mobile test runs against an **app you provide**, and that the target device is a simulator or emulator on your machine.

:::note
This release supports **macOS on Apple Silicon (arm64) only**. Mobile testing is not yet available on Intel Macs, Linux, or Windows. Everything below assumes a mac-arm64 host.
:::

## What Mobile Means Here

**Native app testing.** A mobile test drives an installed app. You pass a build, or an app id from a previous upload, with `--app`. Kane CLI installs it on the device and runs your objective against it. WebViews inside the app under test are handled.

:::warning
Pointing a mobile run at a website is not supported yet. Mobile runs target a native app, not a mobile web page.
:::

**Two targets.** `emulator` is a virtual Android device and `simulator` is a virtual iOS device. The default target stays **desktop**, the browser, so nothing changes for your existing web runs.

## Why a Single Architecture

Apple Silicon runs both mobile stacks natively. The iOS Simulator is a first-class Apple target, and Android ships `arm64-v8a` emulator images that run on the Mac's built-in hypervisor with hardware acceleration.

Standardising on one host architecture for the first release keeps setup predictable and runs fast, with no cross-architecture translation in the path. Support for other hosts will follow in a later release.

## How Setup Works

There are two halves, and Kane CLI owns the second.

**1. You provide the virtual device.** Apple's and Google's own tooling, Xcode or Android Studio, supplies the simulator or emulator. These are the same tools Apple and Google already ship for building simulators and emulators. Kane CLI does not ship an iOS runtime, an Android SDK, an emulator, or a system image.

**2. Kane CLI installs its own test tooling and drives the device.** After a one-time `kane-cli doctor --install`, covered in [Setup](#setup) below, Kane CLI discovers the device, boots it, installs your app, and runs the test. You do not boot the simulator or emulator by hand.

Run `kane-cli doctor` at any time to check what is ready and what is missing. It prints one line per required check, each with a fix.

## Prerequisites

| Target | Virtual device | You provide | App formats |
|--------|----------------|-------------|-------------|
| iOS | iOS Simulator | Xcode, the full app, version 16 or newer. The standalone Command Line Tools are not enough | `.zip` build, or an uploaded app id |
| Android | Android Emulator | Android Studio or the command line Android SDK tools, plus one `arm64-v8a` AVD | `.apk` build, or an uploaded app id |

An uploaded app id is `APP` followed by six or more digits.

Both targets require macOS on Apple Silicon and a one-time `kane-cli doctor --install`.

## Setup

### Step 1: Prepare the Virtual Device

Follow the tab for the platform you intend to test. Set up both if you test on both.

<Tabs>
<TabItem value="simulator" label="iOS Simulator" default>

:::note
The exact iOS runtime versions and simulator device models in the supported matrix are pinned by the product team. The versions shown below are current, working examples. Confirm the officially supported set before you rely on a specific one.
:::

#### Point the Command Line Tools at Xcode

Kane CLI requires Xcode 16 or newer, which bundles the iOS Simulator, the `simctl` tool, and at least one iOS runtime. Kane CLI talks to the simulator through `simctl`, so make sure the developer directory resolves to the full Xcode install, not the standalone Command Line Tools:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept   # accept the license non-interactively
```

Confirm Xcode and `simctl` are reachable:

```bash
xcodebuild -version                # should report 16.x or newer
xcrun simctl list devices available
```

You should see one or more iOS devices grouped under an iOS runtime. Xcode ships with default simulators. If none are listed, add one from **Xcode → Settings → Platforms**, or **Xcode → Window → Devices and Simulators**.

</TabItem>
<TabItem value="emulator" label="Android Emulator">

:::warning
On Apple Silicon, always use an **`arm64-v8a`** system image. The x86 and x86_64 images do not run natively and are effectively unusable. This is the single most common setup mistake.
:::

:::note
The exact Android API levels and device profiles in the supported matrix are pinned by the product team. The values shown below, API 35 and Pixel, are current, working examples. Confirm the officially supported set before you rely on a specific one.
:::

Android Studio bundles the Android SDK, the emulator, the system image manager, and the Device Manager, which are the pieces the steps below use. If you prefer a headless setup, install the command line SDK tools instead and use `sdkmanager` and `avdmanager` directly.

#### Install an arm64 System Image

Install a system image with the **`arm64-v8a`** ABI. In the Android Studio SDK Manager, tick an API level image whose ABI is `arm64-v8a`. From the command line:

```bash
sdkmanager "system-images;android-35;google_apis;arm64-v8a"
```

#### Create a Virtual Device

Kane CLI runs against an existing AVD. It does not create one for you. Create an Android Virtual Device from that image. In Android Studio, use **Device Manager → Create Device** and pick the arm64 image. From the command line:

```bash
avdmanager create avd -n kane_pixel \
  -k "system-images;android-35;google_apis;arm64-v8a" \
  -d pixel
```

#### Point Kane CLI at a Non-Default SDK Location

This step is only needed if your SDK is not in the default location.

Kane CLI uses its own managed `adb`, so you do not need `platform-tools` or `adb` on your `PATH`. It only needs to find the **emulator binary and your AVDs**, which it looks for in the default SDK location `~/Library/Android/sdk`. If your SDK lives somewhere else, point Kane CLI at it:

```bash
export ANDROID_HOME="/path/to/your/Android/sdk"
```

If your SDK is at the default path, skip this step.

</TabItem>
</Tabs>

### Step 2: Install the Kane CLI Test Tooling

Sign in and let Kane CLI install the tooling it manages. This is the same for both platforms:

```bash
kane-cli login
kane-cli doctor --install
```

You do not need to boot a simulator, boot an emulator, or run `adb` yourself. Kane CLI discovers the device, boots it, installs your app, and runs the test.

### Step 3: Ready Check

Confirm Kane CLI sees a ready toolchain and, optionally, the devices on your machine:

```bash
kane-cli doctor              # required checks, each with a fix if it fails
kane-cli doctor --targets    # also list the simulators and emulators Kane CLI can run against
```

When the checks for your platform pass, setup is complete. On Android, confirm your AVD is listed by `--targets`.

## Running a Mobile Test

Once a target is set up, point a run at it:

```bash
# one-off, from the command line
kane-cli run "Sign in and open the account tab" --target simulator --app ./builds/MyApp.zip
kane-cli run "Add the first item to the cart" --target emulator --app ./builds/app-debug.apk

# or set a default target once, then just run
kane-cli config set-target emulator
kane-cli run "Add the first item to the cart" --app ./builds/app-debug.apk
```

`--app` is required for every mobile run. The simulator target accepts a `.zip` build, the emulator target accepts an `.apk` build, and both accept an uploaded app id, `APP` followed by six or more digits.

You also need a device. In the interactive TUI, leaving `--device` off opens a one-time picker and saves your choice. A non-interactive run, such as one in CI, needs a device already set with `--device` or `kane-cli config set-device`, or the run exits and prints the fix. On the `desktop` target, `--device` and `--app` are ignored.

In the interactive TUI, switch targets with `/mobile` and `/desktop`, and run `/doctor` to check mobile tooling and devices.

For the full flag list and the app formats each target accepts, see the [CLI Reference](/support/docs/kane-cli-cli-reference/#kane-cli-run). To save a default target, device, and app instead of passing flags every time, see [Configuration](/support/docs/kane-cli-configuration/#mobile-target). To run a mobile test from a file, see [Test.md](/support/docs/kane-cli-testmd/#mobile-target).

## Evidence for a Mobile Run

The result summary records the **device** in the run environment, for example the device model and OS version, and the per-step logs include **device logs** from the emulator or simulator alongside the usual browser logs.

## Common Failures

| Platform | Symptom | Cause | Fix |
|----------|---------|-------|-----|
| iOS | `doctor` reports Xcode is too old | Xcode older than 16 | Update Xcode to 16 or newer from the App Store |
| iOS | `xcrun: error: unable to find utility "simctl"` | Developer directory points at the standalone Command Line Tools, not Xcode | Run `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` |
| iOS | `doctor` reports no developer directory | Full Xcode not installed, or never launched | Install Xcode from the App Store, launch it once, then run `xcode-select --install` |
| iOS | "No iOS simulator found" when picking a device | No simulator device exists yet | Add one in **Xcode → Window → Devices and Simulators**, then reopen the list |
| Android | Emulator boots extremely slowly or hangs | An x86 or x86_64 image on Apple Silicon | Recreate the AVD from an `arm64-v8a` system image |
| Android | `doctor` cannot find the emulator, or "No Android emulator found" when picking a device | SDK in a non-default location, or no AVD created yet | Set `ANDROID_HOME`, and create an AVD in **Android Studio → Device Manager** |
| Android | Prompts to install Intel HAXM | Following an Intel Mac guide | Not needed on Apple Silicon. It uses the built-in Hypervisor framework, so skip HAXM |

## Next Steps

- [CLI Reference](/support/docs/kane-cli-cli-reference/) for the full flag and command list
- [Configuration](/support/docs/kane-cli-configuration/) to save a default target, device, and app
- [Troubleshooting](/support/docs/kane-cli-troubleshooting/) for wider setup and run problems
