---
id: appium-troubleshooting
title: How To Troubleshoot Appium App Automation on TestMu AI
hide_title: true
sidebar_label: Troubleshooting Appium Tests
description: Fix the most common Appium failures on the TestMu AI real device cloud, including session-not-created errors, authentication failures, app upload issues, the wrong hub endpoint, and unavailable device or OS versions.
keywords:
  - appium troubleshooting testmu ai
  - appium session not created
  - appium authentication failed
  - appium app upload testmu ai
  - appium mobile-hub endpoint
  - appium real device cloud errors
url: https://www.testmuai.com/support/docs/appium-troubleshooting/
site_name: TestMu AI
slug: appium-troubleshooting/
canonical: https://www.testmuai.com/support/docs/appium-troubleshooting/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Troubleshooting Appium Tests",
          "item": `${BRAND_URL}/support/docs/appium-troubleshooting/`
        }]
      })
    }}
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
      "@id": "https://www.testmuai.com/support/docs/appium-troubleshooting/"
    },
    "headline": "How To Troubleshoot Appium App Automation on TestMu AI",
    "description": "Fix the most common Appium failures on the TestMu AI real device cloud, including session-not-created errors, authentication failures, app upload issues, the wrong hub endpoint, and unavailable device or OS versions.",
    "url": "https://www.testmuai.com/support/docs/appium-troubleshooting/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "appium troubleshooting testmu ai",
      "appium session not created",
      "appium authentication failed"
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
        "name": "A minimal working Android configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"LT:Options\": {\n    \"w3c\": true,\n    \"platformName\": \"android\",\n    \"deviceName\": \"Galaxy S20\",\n    \"platformVersion\": \"11\",\n    \"isRealMobile\": true,\n    \"app\": \"lt://APP123456789123456789\",\n    \"user\": \"<YOUR_LT_USERNAME>\",\n    \"accessKey\": \"<YOUR_LT_ACCESS_KEY>\",\n    \"build\": \"Appium Build\",\n    \"name\": \"Appium Test\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Authentication fails or the session returns 401 Unauthorized",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# macOS / Linux\nexport LT_USERNAME=\"<YOUR_LT_USERNAME>\"\nexport LT_ACCESS_KEY=\"<YOUR_LT_ACCESS_KEY>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "macOS / Linux",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "# Windows\nset LT_USERNAME=\"<YOUR_LT_USERNAME>\"\nset LT_ACCESS_KEY=\"<YOUR_LT_ACCESS_KEY>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The real-device endpoint expects credentials inline",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "http://<LT_USERNAME>:<LT_ACCESS_KEY>@mobile-hub.lambdatest.com/wd/hub"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Fix: Use the real-device app-automation endpoint for Appium",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "https://mobile-hub.lambdatest.com/wd/hub"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Upload a local binary",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -u \"<YOUR_LT_USERNAME>:<YOUR_LT_ACCESS_KEY>\" \\\n  -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" \\\n  -F \"appFile=@/path/to/your/app.apk\" \\\n  -F \"name=ProverbialApp\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Or register a hosted build by URL",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -u \"<YOUR_LT_USERNAME>:<YOUR_LT_ACCESS_KEY>\" \\\n  -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" \\\n  -F \"url=:https://example.com/path/to/your/app.apk\" \\\n  -F \"name=ProverbialApp\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Session times out or drops mid-run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"LT:Options\": {\n    \"idleTimeout\": 300\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Fix: Start the tunnel, then enable it in your capabilities so the device routes local traffic through it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"LT:Options\": {\n    \"tunnel\": true,\n    \"tunnelName\": \"<YOUR_TUNNEL_NAME>\"\n  }\n}"
      }
    ],
    "dateModified": "2026-09-10T15:46:57+05:30"
  }) }}
/>

# Troubleshooting Appium App Automation on TestMu AI
***

Most Appium failures on the <BrandName /> real device cloud trace back to five causes: incomplete capabilities, the wrong hub endpoint, missing authentication, an unresolved `app` URL, or an unavailable device and OS-version combination. Each issue below maps the behavior you see to its cause and fix.

:::tip
Generate a known-good capabilities block for your device and OS combination from the [Appium desired capabilities reference](/support/docs/desired-capabilities-in-appium/) before debugging by hand. A mistyped `deviceName` or `platformVersion` is the single most common cause of a failed session.
:::

## Common Issues

### Session fails to start with SessionNotCreatedException

**Why it happens:** The remote session could not be created because a required capability is missing or misspelled, the capabilities are not wrapped in the `LT:Options` object for a W3C client, or the requested `deviceName` + `platformVersion` pair is not available on the cloud.

**Fix:** Send a complete `LT:Options` block with every required key present, and confirm the device and OS version exist (see [Device or OS version is unavailable](#device-or-os-version-is-unavailable)). A minimal working Android configuration:

<VerifiedTag value="Verified" />

```json
{
  "LT:Options": {
    "w3c": true,
    "platformName": "android",
    "deviceName": "Galaxy S20",
    "platformVersion": "11",
    "isRealMobile": true,
    "app": "lt://APP123456789123456789",
    "user": "<YOUR_LT_USERNAME>",
    "accessKey": "<YOUR_LT_ACCESS_KEY>",
    "build": "Appium Build",
    "name": "Appium Test"
  }
}
```

Keep `deviceName`, `platformVersion`, `platformName`, `isRealMobile`, and `app` together. Omitting any one of them is enough to fail session creation.

### Authentication fails or the session returns 401 Unauthorized

**Why it happens:** `LT_USERNAME` or `LT_ACCESS_KEY` is unset, stale, or not interpolated into the hub URL, so the grid rejects the connection before a device is allocated.

**Fix:** Set both credentials as environment variables (copy them from the **Access Key** button on the Automation Dashboard), then build the hub URL from them.

<VerifiedTag value="Verified" />

```bash
# macOS / Linux
export LT_USERNAME="<YOUR_LT_USERNAME>"
export LT_ACCESS_KEY="<YOUR_LT_ACCESS_KEY>"
```

<VerifiedTag value="Verified" />

```bash
# Windows
set LT_USERNAME="<YOUR_LT_USERNAME>"
set LT_ACCESS_KEY="<YOUR_LT_ACCESS_KEY>"
```

The real-device endpoint expects credentials inline:

<VerifiedTag value="Verified" />

```text
http://<LT_USERNAME>:<LT_ACCESS_KEY>@mobile-hub.lambdatest.com/wd/hub
```

If the values are correct but auth still fails, confirm your shell actually exported them (`echo $LT_USERNAME`) — a common cause is running the test from an IDE that does not inherit the terminal environment.

### The test connects but never allocates a mobile device

**Why it happens:** The test points at the browser grid endpoint `hub.lambdatest.com/wd/hub` instead of the app-automation endpoint. The two are different services: `hub.lambdatest.com` serves Selenium browser sessions, while Appium app automation runs on the mobile hub.

**Fix:** Use the real-device app-automation endpoint for Appium:

<VerifiedTag value="Verified" />

```text
https://mobile-hub.lambdatest.com/wd/hub
```

Do not reuse a Selenium browser hub URL for an Appium app session, even though the `/wd/hub` path looks identical.

### App not found or the app capability is rejected

**Why it happens:** The `app` capability is empty, points at a local file path, or uses an ID that was never uploaded. The cloud can only launch an app it already hosts, referenced by its `lt://` URL.

**Fix:** Upload the build first, then pass the returned `lt://` URL as the `app` capability. Upload a local binary:

<VerifiedTag value="Verified" />

```bash
curl -u "<YOUR_LT_USERNAME>:<YOUR_LT_ACCESS_KEY>" \
  -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
  -F "appFile=@/path/to/your/app.apk" \
  -F "name=ProverbialApp"
```

Or register a hosted build by URL:

<VerifiedTag value="Verified" />

```bash
curl -u "<YOUR_LT_USERNAME>:<YOUR_LT_ACCESS_KEY>" \
  -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
  -F "url=:https://example.com/path/to/your/app.apk" \
  -F "name=ProverbialApp"
```

The response is a JSON object containing an `APP_URL` in the format `lt://APP123456789123456789`. Set that exact value as the `app` capability. A fresh upload is required whenever the binary changes.

### Test runs on the wrong device type (real vs virtual)

**Why it happens:** The `isRealMobile` capability controls whether the session lands on a physical device or an emulator/simulator. A mismatch sends the test to the wrong pool, which can surface as unexpected behavior or a device-not-available error.

**Fix:** Set `isRealMobile` to match your intent:

| Value | Runs on |
|---|---|
| `true` | Physical real devices |
| `false` | Virtual devices (emulators / simulators) |

Confirm the value is a boolean, not the string `"true"`, in clients that distinguish the two.

### Device or OS version is unavailable

**Why it happens:** The requested `deviceName` and `platformVersion` combination is not offered, or the exact string does not match the platform's naming (for example `"Galaxy S20"` with `platformVersion "11"`). An unmatched combination fails session creation.

**Fix:** Pick a device and version that exist on the platform and copy the exact strings rather than guessing. Cross-check your `deviceName` and `platformVersion` against the [Appium desired capabilities reference](/support/docs/desired-capabilities-in-appium/). Real Android and iOS device names and versions must be spelled exactly as the platform lists them.

### Session times out or drops mid-run

**Why it happens:** A session with no incoming Appium commands is reclaimed after the idle window so the device can be freed for other users. That window is controlled by the `idleTimeout` capability, which defaults to **120 seconds**. Long waits, manual breakpoints while debugging, or a hung step can cross it.

**Fix:** Keep the session active with regular commands, and raise the idle window with the `idleTimeout` capability when a legitimate step needs longer:

<VerifiedTag value="Verified" />

```json
{
  "LT:Options": {
    "idleTimeout": 300
  }
}
```

`idleTimeout` is an integer in seconds (default `120`). Set it to cover your longest legitimate gap between commands, but avoid an excessively high value in CI, since an idle session still holds a device you are billed for. Do not leave sessions parked on breakpoints in automated runs.

### Tests against a local or staged app cannot reach your network

**Why it happens:** Real devices in the cloud cannot see `localhost`, private staging URLs, or a backend behind your firewall unless traffic is routed through <BrandName /> Tunnel.

**Fix:** Start the tunnel, then enable it in your capabilities so the device routes local traffic through it:

<VerifiedTag value="Verified" />

```json
{
  "LT:Options": {
    "tunnel": true,
    "tunnelName": "<YOUR_TUNNEL_NAME>"
  }
}
```

`tunnelName` is only required when you run more than one named tunnel; a single default tunnel needs `tunnel: true` alone. For connection failures on the tunnel itself, see [Troubleshooting TestMu AI Tunnel](/support/docs/troubleshooting-lambda-tunnel/).

---

That's all! If you are still blocked, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or mail us at [support@testmuai.com](mailto:support@testmuai.com).
