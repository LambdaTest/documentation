# DevTools On Real Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

> To enable it for your organization, please contact us via **24×7 chat support** or you can also drop a mail to **support@testmuai.com**.

Testing hybrid apps or mobile websites that rely on embedded web views often requires advanced debugging capabilities. With TestMu AI, you can inspect and debug these web views directly on **real Android and iOS devices** using familiar tools like [**Chrome DevTools**](https://developer.chrome.com/docs/devtools/) and [**Safari Web Inspector**](https://developer.apple.com/safari/tools/#current).

This enables seamless inspection of DOM elements, console logs, network activity, and JavaScript execution giving developers the same debugging power they enjoy on desktop browsers.

## Access DevTools on TestMu AI Real Devices

**Step 1:** Log into your TestMu AI dashboard and navigate to **Real Devices** > **App Testing**.

**Step 2:** Choose a real Android or iOS device, upload your app (APK/IPA) or open a browser URL, and click **Start** to launch your session.

**Step 3:** Once your app or mobile website loads, go to the screen with the WebView content.

**Step 4:** In the session toolbar, click on the **Chrome DevTools** button.

**Step 5:** A debugging window will open:
- On **Android**, this launches Chrome DevTools.
- On **iOS**, you can choose between Safari Web Inspector or Chrome DevTools.

Use the DevTools interface to inspect HTML structure, debug JavaScript, monitor network requests, and view console logs in real time.

## Supported Platforms

| Platform | Debugging Tools Available | OS Versions Supported |
|----------|---------------------------|------------------------|
| Android  | Chrome DevTools           | Android 9 and above    |
| iOS      | Safari Web Inspector, Chrome DevTools | iOS 13 and above    |

With Hybrid application, release builds must enable the ability to inspect web views in your application.

- On Android 4.4*, call WebView.setWebContentsDebuggingEnabled.
- On iOS 16.4+, set isinspectable to true on on the Webkit/WKWebView instance.

## Use Cases

-  Inspect embedded content in hybrid mobile apps
-  Debug JavaScript errors or performance issues
-  Test mobile websites inside native wrappers
-  Validate responsive design and layout within WebViews
-  Troubleshoot third-party widget rendering or data fetching
-  Test ad placements or dynamic content in app containers
-  Analyze network requests, responses, and timings to optimize your network.
-  View and edit DOM elements.
