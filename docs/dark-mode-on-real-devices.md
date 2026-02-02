---
id: dark-mode-on-real-devices
title: Dark Mode on Real Devices
sidebar_label: Dark Mode
description: Toggle and test dark mode themes during manual testing sessions on real iOS and Android devices.
keywords:
  - dark mode testing
  - dark theme
  - manual app testing
  - theme switching
  - ui validation
  - mobile app dark mode
  - web dark mode
  - testmu ai real devices
  - light mode testing
url: https://www.testmuai.com/support/docs/dark-mode-on-real-devices/
site_name: LambdaTest
slug: dark-mode-on-real-devices/
canonical: https://www.testmuai.com/support/docs/dark-mode-on-real-devices/
---
import CodeBlock from '@theme/CodeBlock';
import { YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY } from "@site/src/component/keys";

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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Dark Mode on Real Devices",
          "item": `${BRAND_URL}/support/docs/dark-mode-on-real-devices/`
        }]
      })
    }}
></script>


<BrandName />’s **Dark Mode** feature allows you to manually toggle between light and dark themes on **real iOS and Android devices** during manual testing sessions.  
This enables testers to validate UI appearance, color contrast, and theme switching for both mobile apps and web applications without writing automation scripts.

## Use Cases

- Validate app UI elements render correctly in dark mode.
- Test color contrast and readability in dark themes.
- Verify icon and image visibility on dark backgrounds.
- Ensure theme inheritance across multiple app screens.
- Check browser and web application dark mode behavior.

## Supported Devices

| Device Type             | Supported OS Version |
|-------------------------|----------------------|
| iPhone / iPad           | iOS 13 and above     |
| Android Phones/Tablets  | Android 11 and above |

## Steps to enable Dark Mode in Manual Testing

**Step 1:** Start a manual testing session on a real iOS or Android device in **App Live** or **Browser Live**.

**Step 2:** Go to the **Device Control tab** and turn the toggle **On** for Dark Mode.

![Dark Mode Settings](../assets/images/real-device-app-testing/Dark%20Mode/dark-mode-toggle.png)


:::tip

- Dark mode changes are applied at the **system/browser level** and may require refreshing the page for full effect.
- Some legacy websites may not fully support dark mode.
- Web applications must implement dark mode CSS for consistent theming beyond browser UI.
:::