---
id: troubleshooting-ios-apps
title: How to build .app file for iOS App testing on Simulators
hide_title: true
sidebar_label: Troubleshooting iOS App Testing
description: Facing issues in uploading .app files on Simulators? Here is a quick guide to troubleshoot it.
keywords:
- how to upload .app files on ios simulators
- how to upload .app files on simulators
- how to upload .app files for ios simulator testing
url: https://www.testmuai.com/support/docs/troubleshooting-ios-app-testing/
site_name: TestMu AI
slug: troubleshooting-ios-app-testing/
canonical: https://www.testmu.ai/support/docs/troubleshooting-ios-app-testing/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Troubleshooting iOS App Testing",
          "item": `${BRAND_URL}/support/docs/troubleshooting-ios-app-testing/`
        }]
      })
    }}
></script>

# Troubleshooting iOS App Testing
***

While uploading `.app` files on Simulators, you may encounter issues such as the app crashing immediately or the error *"No .app found inside zip"*. These problems typically occur when the app is not built correctly for the Simulator platform.

:::tip
For a complete step-by-step guide on building your iOS app for Simulator testing, see [Building Your iOS App for Simulator Testing](/docs/build-ios-app-for-simulator-testing/).
:::

## Common Issues

### App crashes immediately with "App quit unexpectedly"

**Cause:** Your `.app` is built for physical iOS devices (Mach-O Platform 2 — `iphoneos`) instead of the iOS Simulator (Platform 7 — `iphonesimulator`).

**Solution:** Rebuild your app targeting the iOS Simulator SDK. In Xcode, select a **Simulator destination** (e.g., *iPhone 15 Pro*) instead of *Any iOS Device*, then build. For command line builds, use the `-sdk iphonesimulator` flag:

```bash
xcodebuild -project YourProject.xcodeproj \
           -scheme YourScheme \
           -configuration Debug \
           -sdk iphonesimulator \
           -arch arm64 \
           build
```

You can verify the platform using:

```bash
vtool -show-build YourApp.app/YourApp
```

The output should show `platform: IOSSIMULATOR` (Platform 7).

:::info
Your Simulator build must include the **arm64** architecture. There is no need to exclude it from Simulator builds.
:::

### "No .app found inside zip" error

**Cause:** The `.zip` archive structure is incorrect. The `.app` bundle should be at the root of the archive.

**Solution:**
1. Build your app for the Simulator (as described above).
2. Locate the `.app` file in Xcode: right-click the `.app` under **Products** and select **Show in Finder**.
3. Right-click the `.app` file in Finder and select **Compress** to create the `.zip` file.

 <img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/project-file.webp').default} alt="Open project in Xcode" width="1281" height="722" className="doc_img"/>

 <img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/show-in-finder.webp').default} alt="Show in Finder" width="1281" height="722" className="doc_img"/>

 <img loading="lazy" src={require('../assets/images/troubleshoot-ios-testing/zip-file.webp').default} alt="Compress to zip" width="1281" height="722" className="doc_img"/>

Your `.zip` file is now ready for upload on <BrandName /> servers.

### Build fails with architecture errors

**Cause:** The project may have incorrect architecture settings.

**Solution:** In Xcode **Build Settings**, verify:

| Setting | Value |
|---|---|
| **Architectures** | `$(ARCHS_STANDARD)` |
| **Base SDK** | iOS |
| **Supported Platforms** | iOS Simulator |

Ensure you are **not** excluding arm64 from Simulator builds.

---

That's all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.
