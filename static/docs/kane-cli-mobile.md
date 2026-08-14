# Mobile Testing with Kane CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Kane CLI can run tests against local mobile virtual devices: Apple's **iOS Simulator** and Google's **Android Emulator**. You author and run mobile tests the same way you already do for the browser. The differences are that a mobile test runs against an **app you provide**, and that the target device is a simulator or emulator on your machine.

This release supports **macOS on Apple Silicon (arm64) only**. Mobile testing is not yet available on Intel Macs, Linux, or Windows. Everything below assumes a mac-arm64 host.

## What Mobile Means Here

**Native app testing.** A mobile test drives an installed app. You pass a build, or an app id from a previous upload, with `--app`. Kane CLI installs it on the device and runs your objective against it. WebViews inside the app under test are handled.

Pointing a mobile run at a website is not supported yet. Mobile runs target a native app, not a mobile web page.

**Two targets.** `emulator` is a virtual Android device and `simulator` is a virtual iOS device. The default target stays **desktop**, the browser, so nothing changes for your existing web runs.

## Why a Single Architecture

Apple Silicon runs both mobile stacks natively. The iOS Simulator is a first-class Apple target, and Android ships `arm64-v8a` emulator images that run on the Mac's built-in hypervisor with hardware acceleration.

Standardising on one host architecture for the first release keeps setup predictable and runs fast, with no cross-architecture translation in the path. Support for other hosts will follow in a later release.

## How Setup Works

There are two halves, and Kane CLI owns the second.

**1. You provide the virtual device.** Install Apple's or Google's tooling, Xcode or Android Studio, and for Android create one virtual device. These are the same tools Apple and Google already ship for building simulators and emulators.

**2. Kane CLI installs its own test tooling and drives the device.** Sign in and run one command:

```bash
kane-cli login
kane-cli doctor --install
```

This downloads the test tooling Kane CLI manages for you. From then on, Kane CLI discovers the device, boots it, installs your app, and runs the test. You do not boot the simulator or emulator by hand.

Run `kane-cli doctor` at any time to check what is ready and what is missing. It prints one line per required check, each with a fix.

## Prerequisites at a Glance

| Target | Virtual device | You install | Setup guide |
|--------|----------------|-------------|-------------|
| iOS | iOS Simulator | Xcode, the full app, version 16 or newer | [iOS Simulator setup](/support/docs/kane-cli-mobile-simulator/) |
| Android | Android Emulator | Android Studio or the Android SDK, plus one `arm64-v8a` AVD | [Android Emulator setup](/support/docs/kane-cli-mobile-emulator/) |

Both require macOS on Apple Silicon and a one-time `kane-cli doctor --install`. You only need to set up the platform you intend to test. Set up both if you test on both.

## Running a Mobile Test

Once a target is set up, point a run at it:

```bash
# one-off, from the command line
kane-cli run "Sign in and open the account tab" --target simulator --app ./builds/MyApp.zip

# or set a default target once, then just run
kane-cli config set-target emulator
kane-cli run "Add the first item to the cart" --app ./builds/app-debug.apk
```

In the interactive TUI, switch targets with `/mobile` and `/desktop`, and run `/doctor` to check mobile tooling and devices.

For the full flag list and the app formats each target accepts, see the [CLI Reference](/support/docs/kane-cli-cli-reference/#kane-cli-run). To save a default target, device, and app instead of passing flags every time, see [Configuration](/support/docs/kane-cli-configuration/#mobile-target). To run a mobile test from a file, see [Test.md](/support/docs/kane-cli-testmd/#mobile-target).

## Evidence for a Mobile Run

The result summary records the **device** in the run environment, for example the device model and OS version, and the per-step logs include **device logs** from the emulator or simulator alongside the usual browser logs.

## Next Steps

- [iOS Simulator setup](/support/docs/kane-cli-mobile-simulator/)
- [Android Emulator setup](/support/docs/kane-cli-mobile-emulator/)
- [CLI Reference](/support/docs/kane-cli-cli-reference/) for the full flag and command list
