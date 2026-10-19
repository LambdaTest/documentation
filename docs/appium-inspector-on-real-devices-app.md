---
id: appium-inspector-on-real-devices-app
title: Appium Inspector on Real Devices
sidebar_label: Appium Inspector
description: Use the built-in Appium Inspector inside a manual app testing session on TestMu AI real devices to inspect the app hierarchy, find locators, and run element actions without leaving the session.
keywords:
  - appium inspector
  - appium inspector real devices
  - app inspector
  - inspect mobile app elements
  - find locators
  - xpath
  - manual app testing
  - app live
  - testmu ai real devices
url: https://www.testmuai.com/support/docs/appium-inspector-on-real-devices-app/
site_name: TestMu AI
slug: appium-inspector-on-real-devices-app/
canonical: https://www.testmuai.com/support/docs/appium-inspector-on-real-devices-app/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


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
          "name": "Appium Inspector on Real Devices",
          "item": `${BRAND_URL}/support/docs/appium-inspector-on-real-devices-app/`
        }]
      })
    }}
></script>

<BrandName /> integrates the open-source **Appium Inspector** directly into manual app testing sessions on real devices. You can inspect your app's element hierarchy, find locators, and run element actions from the same session panel, without installing Appium Inspector on your machine or configuring desired capabilities.

Appium Inspector opens next to [UI Inspector](/support/docs/ui-inspector/) in the same docked panel, so the device screen stays visible and your session layout doesn't change. The integrated version works the same as the standalone tool, so locators and workflows you already use carry over unchanged.

## Use Cases

- Find reliable locators (`id`, `-android uiautomator`, `xpath`, and more) for your automation scripts while you test manually.
- Understand the structure of your app screen by browsing the full element tree.
- Verify that an element can be found and interacted with before you add it to a test.
- Run quick element actions such as tap, send keys, and clear on the live device.
- Inspect hybrid apps by switching between native and web contexts.

## Appium Inspector vs. UI Inspector

Both inspectors are available in the same panel, and you can switch between them at any time.

| | UI Inspector | Appium Inspector |
|---|---|---|
| Built by | <BrandName /> | Appium open-source project |
| Best for | Quick element lookup and XPath generation | Full Appium workflow: locator strategies, commands, gestures, and session details |
| Element selection | Tap elements on the device screen | Click elements on the captured screenshot in the panel |
| Setup | Available as soon as the session starts | Click **Start Appium Inspector** once per session |

## Steps to use Appium Inspector

**Step 1:** Start a manual app testing session on a real device. For more information, see [App Testing on Real Devices](/support/docs/app-testing-on-real-devices/).

**Step 2:** In the top toolbar of the session, click the **Inspect** icon to open the inspector panel.

**Step 3:** Select the **Appium Inspector** tab. The tab shows the Appium Inspector version available in your session.

**Step 4:** Click **Start Appium Inspector**.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/appium-inspector/start-appium-inspector.png').default} alt="Appium Inspector tab with the Start Appium Inspector button in a real device app testing session" className="doc_img"/>

**Step 5:** Appium Inspector loads in the same panel and shows a screenshot of the current screen with the app source tree next to it. Click any element on the screenshot or in the tree to inspect it.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/appium-inspector/appium-inspector-session.png').default} alt="Appium Inspector showing the app screenshot, App Source tree, and Selected Element locators for a button" className="doc_img"/>

## Appium Inspector interface

### Top toolbar

- **App mode:** Switch between **Native App Mode** and **Web/Hybrid App Mode** to inspect native views or web views in a hybrid app.
- **Refresh Source & Screenshot:** Capture the current screen again after you navigate in the app.
- **Search for element:** Find elements by locator strategy and selector.
- **Start Recording:** Record the actions you perform in the inspector.

### Screenshot view

The screenshot view shows the app screen at the time of the last capture. Click an element on the screenshot to select it in the App Source tree and in the Selected Element section. Use the controls above the screenshot to:

- Show element handles on the screenshot.
- Select elements (default mode).
- Tap or swipe by coordinates.
- Download the screenshot.

### Source tab

- **App Source:** The element hierarchy of the current screen as an expandable tree. You can search the source, copy it, or download it as XML.
- **Selected Element:** Details of the element you selected:
  - **Element actions:** Tap the element, send keys to it, clear its value, or get the time taken to find it.
  - **Find By / Selector:** Locators for the element, such as `id`, `-android uiautomator`, and `xpath`. Copy these into your automation scripts.
  - **Box Model:** The element's coordinates, width, and height on the screen.
  - **Attributes:** All attributes of the element, such as `text`, `resource-id`, `class`, `enabled`, and `bounds`.

### Other tabs

| Tab | What it does |
|---|---|
| **Commands** | Run Appium commands against the session, such as device, app, and context commands. |
| **Gestures** | Create and run custom touch gestures, such as swipes and multi-finger actions. |
| **Recorder** | View the actions you recorded and the matching code in your chosen language. |
| **Session Information** | View the session details and the capabilities the session is running with. |

:::tip

- The screenshot and source don't update automatically. After you navigate to a new screen in the app, click **Refresh Source & Screenshot** to inspect it.
- Closing the inspector panel ends the Appium Inspector view. When you reopen it, click **Start Appium Inspector** again.
- For details on any Appium Inspector feature, see the [Appium Inspector documentation](https://appium.github.io/appium-inspector/latest/).

:::

## Related docs

- [UI Inspector](/support/docs/ui-inspector/)
- [DevTools on Real Devices](/support/docs/devtools-on-real-devices-app/)
- [Appium Inspector Integration with App Automation](/support/docs/appium-inspector-integration/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Appium Inspector on Real Devices
      </span>
    </li>
  </ul>
</nav>
