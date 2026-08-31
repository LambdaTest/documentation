# Native App Automation with MCP

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Two different MCP servers cover native mobile app workflows on TestMu AI, and they do very different jobs. Pick the right one before you start, because the setup, transport, and tools are not interchangeable.

| You want to...                                                                                     | Use this server                    | What it does                                                        |
| -------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| Triage or debug an app-automation test that **already ran** on TestMu AI (pull failure reason, command logs) | **TestMu AI MCP Server** (Automation tool) | Reads test execution data from the cloud. No live device control.   |
| **Drive a device or simulator live**: open apps, tap, type, screenshot, read on-screen text, generate tests | **Appium MCP server**              | Controls a real or virtual device through Appium in real time.      |

If you are not sure which one you need, use this rule of thumb: if the test has a **TestID** on TestMu AI and you want to know why it failed, that is the TestMu AI MCP Server. If you want the agent to physically interact with an app on a device right now, that is the Appium MCP server.

The rest of this page covers each server in turn, then a shared troubleshooting section drawn from real customer setups.

## Part 1: Debug App Automation Tests with the TestMu AI MCP Server



The [TestMu AI MCP Server](/support/docs/testmu-mcp-server/) connects your AI client to test execution data on TestMu AI. Its [Automation tool](/support/docs/automation-mcp-server/) now supports **app automation** tests in addition to web and desktop, so you can triage a failed mobile app run without leaving your IDE.

### What you can do

Point the Automation tool at a mobile app-automation TestID and ask it to:

- Fetch the failure reason and root cause of a specific app-automation test.
- Retrieve command logs for a mobile session to see the exact step where the run failed.
- Retrieve network logs for a mobile session to inspect traffic during the run.
- Generate a fix for your test code based on the identified cause.

Browser console logs apply to web tests only and are not available for mobile app automation tests.

This is a **read and analyze** capability. The Automation tool does not open apps, tap buttons, or take live screenshots. For that, see [Part 2](#part-2-drive-a-live-device-with-the-appium-mcp-server).

### Setup

The Automation tool is part of the TestMu AI MCP Server, so setup is identical to any other TestMu AI MCP tool. Follow the client configuration steps in [Set Up TestMu AI MCP Server](/support/docs/testmu-mcp-server/), then confirm the OAuth flow completes.

- **Server URL:** `https://mcp.lambdatest.com/mcp`
- **Authentication:** OAuth (you are redirected to testmuai.com on first use)

No extra configuration is required to enable app-automation support. The same tools now recognize mobile app tests.

### Specifying a mobile app test

Web and mobile tests live behind different data endpoints on TestMu AI. To route your request correctly, the Automation tool needs to know the test type. Every Automation tool call carries a required `platform` argument, and your AI client must set it to `"app"` for a mobile app-automation TestID so the tool targets the mobile test-detail path rather than the web one.

Most clients handle this for you: your AI client will either ask you to confirm whether the test is desktop or mobile, or infer it from the TestID and set `platform` on the tool call. When the tool runs, you will see arguments like this:

```json
{
"testId": "RMAA-IOS-585984-1767376885020815122FLT",
"platform": "app"
}
```

Command log and network log retrieval for app tests additionally takes the mobile `sessionId`, and command logs are paginated through a `pageNumber` argument. Your client fills these in from the test details.

If your client does not prompt you, state the test type explicitly in your prompt, for example: "This is a mobile app automation test. Pull the failure reason for TestID ``." This avoids the tool defaulting to the web endpoint, which returns a **404 (Unable to find test details)** for a mobile TestID. See [Troubleshooting](#404-unable-to-find-test-details) if you hit this.

### Example prompts

- "This is a mobile app automation test. What is the failure reason for TestID ``?"
- "Pull the command logs for app-automation TestID `` and tell me which step failed."
- "Analyze the result for TestID `` and highlight the root cause."

Your client routes the request to the Automation tool, pulls the relevant data from TestMu AI, and returns the analysis inline. A typical result looks like a root-cause summary, for example a `NoSuchElementException` where the test could not locate a UI element on the device screen, along with the point in the command log where it failed.

**A note on large logs**
App-automation command logs can be very large. Asking the agent to dump every page of logs into its context can exceed the model's context window and cause the run to stall or error out. Ask for the **failure reason** or a **specific page** of command logs rather than the entire log history. See [Requests stall or hit a context-length error](#requests-stall-or-hit-a-context-length-error) for details and settings.


## Part 2: Drive a Live Device with the Appium MCP Server



The **Appium MCP server** (the open-source [`appium/appium-mcp`](https://github.com/appium/appium-mcp) project) gives an AI assistant real-time control of a mobile device or simulator through Appium. This is the server to use when you want the agent to open apps, tap buttons, enter text, take screenshots, read on-screen text, and generate test code from natural language.

Unlike the TestMu AI MCP Server, the Appium MCP server runs **locally over stdio** and drives devices through your own Appium setup. It can target a local device or simulator by default, or a remote Appium endpoint such as a device farm (see [Targeting remote devices](#targeting-remote-devices-and-device-farms)).

### What you can do

Through natural language, the agent can:

- Launch, install, terminate, and query native apps by bundle ID (iOS) or package name (Android).
- Find elements using accessibility id, resource-id, platform-native predicates, or xpath.
- Perform gestures: tap, double tap, long press, scroll, swipe, and drag and drop.
- Enter text, read element text, and capture the page source.
- Take screenshots and record the screen.
- Read device state: orientation, geolocation, battery, clipboard, and device info.
- Generate Java/TestNG test code from a described scenario.

### Prerequisites

Because the Appium MCP server drives devices through your local toolchain, you need a working mobile automation environment:

- **Node.js** v22 or higher, and npm or yarn.
- **Java Development Kit (JDK)** 8 or higher.
- **Android SDK** with `ANDROID_HOME` set (for Android testing).
- **Xcode** and command line tools (for iOS testing, macOS only).

For Android, enable USB debugging and install the UiAutomator2 driver dependencies. For iOS, install simulators through Xcode. For real device testing, enable Developer Mode and sign in to your Apple ID in Xcode.

After the server is configured, you can ask your AI assistant to set up the remaining Appium driver prerequisites for you using the built-in `appium_skills` tool.

### Installation

The standard configuration works in most MCP clients. Add the following to your client's MCP configuration, updating `ANDROID_HOME` to match your Android SDK path:

```json
{
"mcpServers": {
"appium-mcp": {
"disabled": false,
"timeout": 100,
"type": "stdio",
"command": "npx",
"args": ["appium-mcp@latest"],
"env": {
"ANDROID_HOME": "/path/to/android/sdk",
"CAPABILITIES_CONFIG": "/path/to/your/capabilities.json"
}
}
}
}
```

**Claude Code CLI:**

```bash
claude mcp add appium-mcp -- npx -y appium-mcp@latest
```

**Gemini CLI:**

```bash
gemini mcp add appium-mcp npx -y appium-mcp@latest
```

Remember to set `ANDROID_HOME` in the resulting configuration for Android testing.

### Capabilities file

Create a `capabilities.json` file to define per-platform device capabilities, and point the `CAPABILITIES_CONFIG` environment variable at it:

```json
{
"android": {
"appium:app": "/path/to/your/android/app.apk",
"appium:deviceName": "Android Device",
"appium:platformVersion": "11.0",
"appium:automationName": "UiAutomator2",
"appium:udid": "your-device-udid"
},
"ios": {
"appium:app": "/path/to/your/ios/app.ipa",
"appium:deviceName": "iPhone 15 Pro",
"appium:platformVersion": "17.0",
"appium:automationName": "XCUITest",
"appium:udid": "your-device-udid"
}
}
```

### Core tools

The server exposes a broad tool set. The ones you will use most for native app automation:

| Tool                          | Purpose                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------- |
| `select_device`               | **Required first.** Discover available devices and select one (auto-selects if only one).   |
| `appium_session_management`   | Create, attach, list, select, or delete sessions. Supports remote Appium via `remoteServerUrl`. |
| `appium_app_lifecycle`        | Launch, install, terminate, uninstall, background, deep-link, or query the state of an app.  |
| `appium_find_element`         | Find an element using accessibility id, id, platform-native predicates, or xpath.            |
| `appium_gesture`              | Tap, double tap, long press, scroll, swipe, or scroll-to-element.                            |
| `appium_set_value`            | Enter text into an input field.                                                             |
| `appium_get_text`             | Read text content from an element.                                                          |
| `appium_screenshot`           | Capture a screenshot (full screen or a specific element).                                    |
| `appium_get_page_source`      | Retrieve the current screen's XML source.                                                    |
| `appium_generate_tests`       | Generate automated test code from a natural-language scenario.                               |

For the full catalog, including orientation, geolocation, clipboard, permissions, alerts, and screen recording, see the [`appium/appium-mcp` README](https://github.com/appium/appium-mcp/blob/main/README.md).

### Element finding: prefer stable locators

For reliable, fast automation, ask the agent to locate elements by stable identifier in priority order: `accessibility id` first, then `id`, then platform-native predicates (`-ios predicate string` or `-ios class chain` on iOS, `-android uiautomator` on Android). Use `xpath` only as a last resort, since it is slower and more brittle.

Vision-based element finding (locating an element from a natural-language visual description) is available as an opt-in tool, `appium_ai`, gated behind the `AI_VISION_ENABLED` environment variable. Leave it off unless you specifically need to locate elements by visual cue, as it is slower and calls a paid vision model.

### Targeting remote devices and device farms

By default the Appium MCP server drives a **local** device or simulator. To run against a remote Appium endpoint, pass `remoteServerUrl` plus explicit `capabilities` (device udid, app path or id, platform version) on `appium_session_management` with `action=create`. Prefer this over local device discovery for grids, cloud labs, and CI, where the target device is allocated rather than plugged in locally.

For security, you can restrict which remote servers are allowed with the `REMOTE_SERVER_URL_ALLOW_REGEX` environment variable.

### Example prompt

```
Open the Amazon app, search for "iPhone 15 Pro", select the first result,
add it to the cart, and take a screenshot of the cart screen.
```

The agent selects a device, launches the app, finds and interacts with elements, and captures the screenshot, without you writing any Appium code.

### Performance: NO_UI mode

Screenshots and page-source dumps embedded in tool responses can be large and expensive in tokens. For CI, batch runs, or any headless scenario, set the `NO_UI` environment variable to `true` to return lightweight text-only responses. Screenshots are still saved to disk. The base64 payload is simply omitted from the response. Keep the UI enabled for interactive debugging.

## Troubleshooting



### 404: Unable to find test details

**Symptom:** The Automation tool returns `Error fetching automation test details: Unable to find test details (Status: 404)` for a TestID you know is valid.

**Cause:** The request is being routed to the web test-detail endpoint, but the TestID belongs to a **mobile app** test, which lives behind a different endpoint.

**Fix:** Make the test type explicit. Tell your client the test is a mobile app automation test, or confirm the desktop-vs-mobile prompt when your client asks. The tool then targets the correct mobile path. The `platform` argument on the tool call should read `"app"` for mobile app tests.

Also confirm that the authenticated MCP user actually has access to that TestID. A 404 is also returned when the TestID belongs to a different user or organization than the one authenticated on the MCP server.

### The MCP tool times out

**Symptom:** Tool calls time out repeatedly, often on `getAutomationTestDetails`, while other MCP servers work fine.

**Causes and fixes:**

- **Cline client issue.** Some Cline updates broke direct connections. Use the `mcp-remote` transport and raise the timeout in your Cline configuration:

```json
{
"mcp-lambdatest": {
"autoApprove": [],
"disabled": false,
"timeout": 120,
"command": "npx",
"args": ["mcp-remote@latest", "https://mcp.lambdatest.com/mcp"],
"alwaysAllow": []
}
}
```

- **Large test payload.** A TestID with a very large volume of data can take longer than the default timeout to retrieve. Increasing the client timeout to `120` resolves most of these cases.

- **Confirm scope.** Check whether the timeout happens on **every** tool or only one. A timeout isolated to a single tool points to payload size or that specific endpoint, not a connectivity or auth problem.

### Requests stall or hit a context-length error

**Symptom:** A run gets stuck partway, often on the last page of a paginated log retrieval, or the client shows an error such as: input tokens longer than the model's context length.

**Cause:** App-automation command logs and device logs can be enormous. When the agent tries to pull every page of logs into a single model context, it exceeds the context window (for example, a 315k-token log against a ~197k-token limit) and the run fails or stalls.

**Fixes:**

- **Ask for the failure reason, not the full log.** Prompt specifically: "Highlight the failure reason for TestID ``," rather than "analyze all logs." This lets the tool return the relevant slice instead of the entire history.
- **Request a specific page** of command logs rather than iterating through all of them.
- **Use a model with a larger context window** in your client if you must analyze large logs.
- **For the Appium MCP server**, enable `NO_UI` mode to strip large base64 and XML payloads out of responses, which cuts per-request token usage substantially.

### OAuth flow does not open or fails

- Confirm pop-ups are not blocked in your default browser.
- If a previous connection has expired, clear the authentication in your client's MCP settings and reconnect.
- Verify your TestMu AI account has permissions for the workspace you are targeting.

### Tools not appearing after configuration

- Fully restart your client (quit and reopen, not just a window reload).
- For Continue, confirm you are in Agent Mode.
- Validate your configuration file for syntax errors, especially trailing commas and unescaped paths.

### Command not found: npx

Your MCP client cannot find Node.js on its PATH. Find the full path with `which npx` (macOS/Linux) or `where npx` (Windows), then replace `"command": "npx"` in your configuration with that full path.

## Which server, again?



- **TestMu AI MCP Server (Automation tool):** cloud test triage and RCA for app-automation runs that already executed. Remote, OAuth, no local setup. Reads data. Does not touch a device.
- **Appium MCP server:** live control of a real or virtual device. Local stdio, needs an Appium toolchain. Opens apps, taps, types, screenshots, and reads the screen.

Use them together: drive an exploratory flow with the Appium MCP server, and when a scheduled TestID fails on TestMu AI, triage it with the Automation tool.
