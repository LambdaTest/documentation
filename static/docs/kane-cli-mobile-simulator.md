# iOS Simulator Setup for Kane CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Set up Apple's iOS Simulator once, and Kane CLI can run mobile tests against it. This guide targets **macOS on Apple Silicon (arm64)**, the only supported host for this release. See [Mobile Testing](/support/docs/kane-cli-mobile/) for the full picture.


The exact iOS runtime versions and simulator device models in the supported matrix are pinned by the product team. The versions shown below are current, working examples. Confirm the officially supported set before you rely on a specific one.


## 1. Install Xcode 16 or Newer

Install the full **Xcode** app from the Mac App Store. The standalone Command Line Tools are not enough. Kane CLI requires Xcode 16 or newer, which bundles the iOS Simulator, the `simctl` tool, and at least one iOS runtime. The download is large, several GB, so allow time on the first install.

Launch Xcode once after installing so it can finish installing its additional components.

## 2. Point the Command Line Tools at Xcode

Kane CLI talks to the simulator through Apple's `simctl`, which ships inside Xcode. Make sure the developer directory resolves to the full Xcode install, not the standalone Command Line Tools:

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

## 3. Install the Kane CLI Test Tooling

Sign in and let Kane CLI install the tooling it manages for the simulator:

```bash
kane-cli login
kane-cli doctor --install
```

You do not need to boot a simulator yourself. Kane CLI discovers the simulator, boots it, installs your app, and runs the test.

## Ready Check

Confirm Kane CLI sees a ready iOS toolchain and, optionally, the simulators on your machine:

```bash
kane-cli doctor              # required checks, each with a fix if it fails
kane-cli doctor --targets    # also list the simulators Kane CLI can run against
```

When the iOS checks pass, your simulator setup is complete.

## Run a Test

```bash
kane-cli run "Sign in and open the account tab" --target simulator --app ./builds/MyApp.zip
```

The simulator target accepts a `.zip` build or an uploaded app id, `APP` followed by six or more digits.

## Common Failures

| Symptom | Cause | Fix |
|---------|-------|-----|
| `doctor` reports Xcode is too old | Xcode older than 16 | Update Xcode to 16 or newer from the App Store |
| `xcrun: error: unable to find utility "simctl"` | Developer directory points at the standalone Command Line Tools, not Xcode | Run `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` |
| `doctor` reports no developer directory | Full Xcode not installed, or never launched | Install Xcode from the App Store, launch it once, then run `xcode-select --install` |
| "No iOS simulator found" when picking a device | No simulator device exists yet | Add one in **Xcode → Window → Devices and Simulators**, then reopen the list |

## Next Steps

- [Android Emulator setup](/support/docs/kane-cli-mobile-emulator/)
- [Mobile Testing overview](/support/docs/kane-cli-mobile/)
