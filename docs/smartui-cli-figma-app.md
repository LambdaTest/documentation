---
id: smartui-cli-figma-app
title: Getting Started with TestMu AI's SmartUI Figma-App CLI
sidebar_label: Figma-App CLI
description: Learn how to compare your Figma mobile designs with native app screenshots on real devices using SmartUI CLI.
keywords:
  - Visual Regression
  - Mobile App Visual Testing
  - Figma to App Comparison
  - SmartUI CLI
  - TestMu AI Mobile
  - Design to Production Validation
url: https://www.testmuai.com/support/docs/smartui-cli/
slug: smartui-cli-figma-app/
canonical: https://www.testmu.ai/support/docs/smartui-cli-figma-app/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

---

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
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-cli-figma-app/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-cli-figma-app/"
    },
    "headline": "Getting Started with TestMu AI's SmartUI Figma-App CLI",
    "description": "Learn how to compare your Figma mobile designs with native app screenshots on real devices using SmartUI CLI.",
    "url": "https://www.testmuai.com/support/docs/smartui-cli-figma-app/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Mobile App Visual Testing",
      "Figma to App Comparison"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Node.js and npm installed; TestMu AI SmartUI account with App Automation plan; Your TestMu AI Username and Access Key from the Account Settings page; Figma Personal Access Token (how to get one); An Appium test suite for your app; Your app uploaded to the real device cloud so you have an app_url. See Upload your app.",
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
        "name": "2. Install SmartUI CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g @lambdatest/smartui-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the following to create your initial design file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui config:create-figma-app designs.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sample designs.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### Configuration Options\n\n| Config Key | Description | Usage |\n| ---------- | ----------- | ----- |\n| `mobile[].name` | Device name. This must be an exact match for a supported device, and the same device you run your Appium test on. An unsupported value fails validation with `unsupported mobile device name`. The generated config seeds valid examples you can start from. | Mandatory |\n| `mobile[].platform` | Operating system and version for the device, for example `[\"android 14\"]` or `[\"ios 17\"]`. | Optional |\n| `mobile[].orientation` | Either `portrait` or `landscape`. No other value is accepted. | Optional |\n| `figma.depth` | Positive integer controlling how deep into the Figma document tree the fetch traverses. The generated config uses `1`. | Optional |\n| `figma.configs[].figma_file_token` | File token for your Figma file. You can list multiple files in the same configuration. | Mandatory |\n| `figma.configs[].figma_ids` | List of node or frame IDs you want to compare. Values must be unique. | Mandatory |\n| `figma.configs[].screenshot_names` | Names given to the uploaded frames. If you supply this array it must have exactly the same number of entries as `figma_ids`, in the same order. Names must be unique across the whole file. | Optional |\n| `smartIgnore` | Top level boolean accepted by the config schema and forwarded with the upload. | Optional |\n\n:::note\n\nIf you add a property that is not listed above, the CLI logs `Additional property \"<name>\" is not allowed` as a warning and then continues with the upload. The extra key is ignored rather than applied, so check for this warning if a setting you added appears to have no effect.\n\n:::\n\n---\n\n### 4. Set Environment Variables\n\nSet all four values before running the upload.\n\n<Tabs className='docs__val' groupId='language'>\n<TabItem value='MacOS/Linux' label='MacOS/Linux' default>\n\n```bash\nexport PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\"\nexport FIGMA_TOKEN=\"figd_****************************************\"\nexport LT_USERNAME=\"YOUR_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Set Environment Variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\"\nset FIGMA_TOKEN=\"figd_****************************************\"\nset LT_USERNAME=\"YOUR_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Set Environment Variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\"\n$env:FIGMA_TOKEN=\"figd_****************************************\"\n$env:LT_USERNAME=\"YOUR_USERNAME\"\n$env:LT_ACCESS_KEY=\"YOUR_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "5. Upload your Figma designs as the baseline",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma-app designs.json --buildName \"figma-baseline\" --markBaseline"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma-app designs.json --buildName \"v1.0.0\" --markBaseline --fetch-results results.json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "6. Upload your app",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -u \"$LT_USERNAME:$LT_ACCESS_KEY\" \\\n-X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" \\\n-F \"appFile=@/path/to/your/app.apk\" \\\n-F \"name=YourAppName\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 9",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n:::warning\n\nThe app side is identified by `smartUI.project`, which takes the project **name**. The `PROJECT_TOKEN` you exported in Step 4 authenticates the CLI upload only. It is not used by the Appium capabilities.\n\n:::\n\n:::warning\n\n`visual: true` is mandatory. Without it no screenshots are sent to SmartUI and the build is reported with an `Error` status.\n\n:::\n\n---\n\n### 8. Capture screenshots with matching names\n\nAdd the screenshot hook after the point in your script where the screen you care about is rendered.\n\n**Critical**: Figma frames are stored with `.png` appended, so your app screenshot names must include the extension to line up with them.\n\n```javascript\n// \u274c Wrong, will not match the Figma frame\nawait driver.execute(\"smartui.takeScreenshot=homepage\");\n\n// \u2705 Correct, matches the Figma frame homepage.png\nawait driver.execute(\"smartui.takeScreenshot=homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "8. Capture screenshots with matching names",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// \u274c Wrong, throws\nawait driver.execute(\"smartui.takeScreenshot\", {name: \"homepage.png\"});\n\n// \u2705 Correct\nawait driver.execute(\"smartui.takeScreenshot\", {screenshotName: \"homepage.png\"});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 11",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// simple form\nawait driver.execute(\"smartui.takeScreenshot=homepage.png\");\n\n// config form\nawait driver.execute(\"smartui.takeScreenshot\", {screenshotName: \"homepage.png\"});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 12",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// the Selenium interface is JavascriptExecutor, with a lower case s in script\n((JavascriptExecutor) driver).executeScript(\"smartui.takeScreenshot=homepage.png\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 13",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "driver.execute_script(\"smartui.takeScreenshot=homepage.png\")"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm i && node your_test_script.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Best Practices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui upload-figma-app designs.json --buildName \"v1.0.0\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Uploads fail with an authentication error",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "echo $PROJECT_TOKEN\necho $FIGMA_TOKEN\necho $LT_USERNAME\necho $LT_ACCESS_KEY"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The upload authenticates and then fails during Processing App Figma with a message like",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Failed to retrieve figma files, Figma API rate limit reached for your token.\nYour file is on the 'starter' plan tier, and your token's rate-limit bucket is 'low'."
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

SmartUI Figma-App CLI lets you compare **mobile app screenshots captured on real devices** with your **Figma design frames** to detect visual mismatches and ensure accurate implementation of mobile UI.

---

## Prerequisites

- Node.js and npm installed
- <BrandName /> SmartUI account with App Automation plan
- Real device screenshots captured via Appium, SDK, or SmartUI platform
- Figma Personal Access Token ([how to get one](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens))

---

## Understanding Figma Tokens

| Token                | Where It’s Used | Description                                                                 |
|----------------------|------------------|-----------------------------------------------------------------------------|
| `FIGMA_TOKEN`        | Env Variable     | Your Figma **Personal Access Token** to authenticate with the Figma API    |
| `figma_file_token`   | `designs.json`   | Figma **file ID**, extracted from the Figma file URL                       |
| `figma_ids`          | `designs.json`   | List of **frame or node IDs** you want to compare visually                 |

> Example Figma URL:
> `https://www.figma.com/file/abc12345/file-name?node-id=2417-58969`
> - `figma_file_token`: `abc12345`
> - `figma_ids`: `2417-58969`

---

## Step-by-Step Guide

### 1. Create a SmartUI Project

1. Visit [smartui.lambdatest.com](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com)
2. Click **New Project**
3. Select **Real Devices** as the platform
4. Enter:
   - Project Name
   - Approvers (optional)
   - Tags (optional)
5. Click **Submit**

---

### 2. Install SmartUI CLI

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/smartui-cli
````

---

### 3. Generate and Edit Configuration

Run the following to create your initial design file:

<VerifiedTag value="Verified" />

```bash
npx smartui config:create-figma-app designs.json
```

#### Sample `designs.json`

<VerifiedTag value="Verified" />

```json title="designs.json"
{
  "mobile": [
    {
      "name": "Pixel 8",
      "platform": ["Android 14"],
      "orientation": "portrait"
    }
  ],
  "figma": {
    "depth": 2,
    "configs": [
      {
        "figma_file_token": "abc12345",
        "figma_ids": ["2417-58969"],
        "screenshot_names": ["homepage"]
      }
    ]
  }
}
```
---

### 4. Set Environment Variables

Set all four values before running the upload.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="your_smartui_project_token"
export FIGMA_TOKEN="your_figma_personal_token"
```

---

### 5. Run the Comparison

<VerifiedTag value="Verified" />

```bash
npx smartui upload-figma-app designs.json
```

#### Optional Flags

| Flag             | Description                                       |
| ---------------- | ------------------------------------------------- |
| `--markBaseline` | Mark this build as a new baseline for future runs |
| `--buildName`    | Assign a custom name to this comparison build     |

#### Example

<VerifiedTag value="Verified" />

```bash
npx smartui upload-figma-app designs.json --buildName "v1.0.0" --markBaseline
```

---

### 6. Upload your app

Your Appium test needs an app that lives on the real device cloud. Upload your `.apk` or `.ipa` and note the `app_url` that is returned.

<VerifiedTag value="Verified" />

```bash
curl -u "$LT_USERNAME:$LT_ACCESS_KEY" \
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
-F "appFile=@/path/to/your/app.apk" \
-F "name=YourAppName"
```

The response contains an `app_url` field, already in `lt://APP...` form, which is the value you pass as the `app` capability in the next step. For other upload options see [Upload your app](/support/docs/upload-apps-on-real-device-cloud/).

---

### 7. Configure your Appium capabilities

This is the half that produces the app screenshots. Use the same device here as in `designs.json` so both sides are captured at the same viewport.

<VerifiedTag value="Verified" />

```javascript title="NodeJS example"
let capabilities = {
  deviceName: "Pixel 8",          // must match mobile[].name in designs.json
  platformName: "android",
  platformVersion: "14",          // must match mobile[].platform
  isRealMobile: true,             // Mandatory
  app: "lt://APP_ID",             // Mandatory
  //highlight-next-line
  visual: true,                   // Mandatory
  name: "Figma app comparison",
  build: "Real Device App Build",
  //highlight-start
  "smartUI.project": "<Your Project Name>", // Mandatory, the project NAME not the project token
  "smartUI.build": "<Your Build Name>",     // Optional
  "smartUI.baseline": false,                // Leave false, your Figma build is the baseline
  //highlight-end
};

let gridUrl =
  "https://" +
  "<Your Username>" +
  ":" +
  "<Your Access Key>" +
  `@mobile-hub.lambdatest.com/wd/hub`;

let driver = await new webdriver.Builder()
  .usingServer(gridUrl)
  .withCapabilities(capabilities)
  .build();
```

:::warning

The app side is identified by `smartUI.project`, which takes the project **name**. The `PROJECT_TOKEN` you exported in Step 4 authenticates the CLI upload only. It is not used by the Appium capabilities.

:::

:::warning

`visual: true` is mandatory. Without it no screenshots are sent to SmartUI and the build is reported with an `Error` status.

:::

---

### 8. Capture screenshots with matching names

Add the screenshot hook after the point in your script where the screen you care about is rendered.

**Critical**: Figma frames are stored with `.png` appended, so your app screenshot names must include the extension to line up with them.

<VerifiedTag value="Verified" />

```javascript
// ❌ Wrong, will not match the Figma frame
await driver.execute("smartui.takeScreenshot=homepage");

// ✅ Correct, matches the Figma frame homepage.png
await driver.execute("smartui.takeScreenshot=homepage.png");
```

:::warning

When you pass a config object, the screenshot name key is `screenshotName`. Passing `name` throws
`Error response status: 1` and the test fails.

<VerifiedTag value="Verified" />

```javascript
// ❌ Wrong, throws
await driver.execute("smartui.takeScreenshot", {name: "homepage.png"});

// ✅ Correct
await driver.execute("smartui.takeScreenshot", {screenshotName: "homepage.png"});
```

:::

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='framework'>
<TabItem value='appium' label='Appium NodeJS' default>

```javascript
// simple form
await driver.execute("smartui.takeScreenshot=homepage.png");

// config form
await driver.execute("smartui.takeScreenshot", {screenshotName: "homepage.png"});
```

</TabItem>
<TabItem value='appium-java' label='Appium Java'>

```java
// the Selenium interface is JavascriptExecutor, with a lower case s in script
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot=homepage.png");
```

</TabItem>
<TabItem value='appium-python' label='Appium Python'>

```python
driver.execute_script("smartui.takeScreenshot=homepage.png")
```

</TabItem>
</Tabs>

Run your test suite as you normally would.

<VerifiedTag value="Verified" />

```bash
npm i && node your_test_script.js
```

---

### 9. View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Best Practices

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='build-names' label='Build Names' default>

**Build Names**

```bash
   npx smartui upload-figma-app designs.json --buildName "v1.0.0"
   ```

</TabItem>
<TabItem value='screenshot-names' label='Screenshot Names' >

**Screenshot Names**

- Good: `homepage-screen`, `login-form`, `dashboard-tab`
   - Avoid: `test1`, `screenshot`, `design-1`
   - Ensure `screenshot_names` in your config match the order of `figma_ids`

</TabItem>
<TabItem value='device-names' label='Device Names' >

**Device Names**

**Screenshot Naming for SDK Comparisons**

**Critical**: When comparing Figma designs with app screenshots captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your Appium/SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
driver.execute("smartui.takeScreenshot", {name: "homepage"});

// ✅ Correct - matches Figma screenshot name
driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

**Example for different frameworks:**

<Tabs className='docs__val' groupId='framework'>
<TabItem value='appium' label='Appium' default>

```javascript
// JavaScript
await driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

</TabItem>
<TabItem value='appium-java' label='Appium Java'>

```java
// Java
driver.execute("smartui.takeScreenshot", Map.of("name", "homepage.png"));
```

</TabItem>
</Tabs>

This ensures that Figma screenshots (e.g., `homepage.png`) match app screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
<TabItem value='device-names-1' label='Device Names' >

**Device Names**

**Screenshot Naming for SDK Comparisons**

**Critical**: When comparing Figma designs with app screenshots captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your Appium/SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
driver.execute("smartui.takeScreenshot", {name: "homepage"});

// ✅ Correct - matches Figma screenshot name
driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

**Example for different frameworks:**

<Tabs className='docs__val' groupId='framework'>
<TabItem value='appium-1' label='Appium' default>

```javascript
// JavaScript
await driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

</TabItem>
<TabItem value="appium-java-1" label='Appium Java'>

```java
// Java
driver.execute("smartui.takeScreenshot", Map.of("name", "homepage.png"));
```

</TabItem>
</Tabs>

This ensures that Figma screenshots (e.g., `homepage.png`) match app screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='verify-figma-token' label='Verify Figma Token' default>

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting-auth'>
<TabItem value='verify-env-vars' label='Verify Environment Variables' default>

Check that all four values are set in the shell you are running from.

```bash
   echo $FIGMA_TOKEN
   ```
   Ensure the token is valid and has not expired. Generate a new token from [Figma Settings](https://www.figma.com/settings).

</TabItem>
<TabItem value='check-file-token' label='Check File Token' >

Check File Token

- Verify the `figma_file_token` in your `designs.json` matches the file ID from the Figma URL
   - Ensure you have access to the Figma file

</TabItem>
<TabItem value='validate-node-ids' label='Validate Node IDs' >

Validate Node IDs

- Confirm `figma_ids` in your configuration are valid
   - Check that the nodes exist in the Figma file
**Symptoms**:
- Figma screenshots don't match app screenshots
- Comparison shows mismatches even when designs are identical
**Solutions**:

</TabItem>
<TabItem value='check-screenshot-names' label='Check Screenshot Names' >

Check Screenshot Names

</TabItem>
<TabItem value='unknown-keys' label='Unknown Properties' >

An unrecognised key does not stop the upload, it only logs `Additional property "<name>" is not allowed` and is then ignored. If a setting seems to have no effect, look for that warning and check it against the Configuration Options table above.

</TabItem>
</Tabs>

### The upload fails while fetching from Figma

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting-figma-api'>
<TabItem value='rate-limit' label='Figma rate limit' default>

The upload authenticates and then fails during **Processing App Figma** with a message like:

```
Failed to retrieve figma files, Figma API rate limit reached for your token.
Your file is on the 'starter' plan tier, and your token's rate-limit bucket is 'low'.
```

Figma applies the lowest rate-limit bucket to tokens that act as a Viewer or Collab seat on a file, which includes free Starter workspaces. A handful of uploads in quick succession is enough to exhaust it.

What helps:

- Wait before retrying. Short backoff often is not enough, so leave a longer gap between attempts
- Reduce how many `figma_ids` you fetch per run, and avoid re-running the upload while iterating on unrelated config
- Use a token belonging to an Editor seat on a paid Figma tier, which is placed in a higher bucket

A direct call to the Figma REST API can still succeed while the upload fails, because the upload makes several calls per run.

</TabItem>
<TabItem value='figma-access' label='Token cannot see the file' >

If the message is `Invalid token` rather than a rate limit, the token itself is being rejected. Regenerate it from [Figma Settings](https://www.figma.com/settings) and make sure it carries the `file_content:read` scope, which is what allows reading file contents and rendering images.

</TabItem>
</Tabs>

### Figma frames and app screenshots are not being compared

<Tabs className='docs__val' groupId='troubleshooting-compare'>
<TabItem value='check-screenshot-names' label='Check Screenshot Names' default>

- Ensure app screenshots include the `.png` extension, for example `homepage.png`
- Verify names match exactly between the Figma config and your Appium code, including case
- Ensure `screenshot_names` matches the order of `figma_ids`

</TabItem>
<TabItem value='check-project-match' label='Check Project Match' >

- Verify `smartUI.project` in your capabilities is the project **name** for the same project whose token you used for the CLI upload
- Confirm the Figma build was marked as the baseline, either with `--markBaseline` or by approving it on the dashboard

</TabItem>
<TabItem value='verify-device-sizes' label='Verify Device Sizes' >

Verify Device Sizes

- Ensure device dimensions match Figma frame sizes
   - Check that device names in config match actual device capabilities
   - Verify orientation (portrait/landscape) matches between Figma and device

</TabItem>
<TabItem value='check-build-names' label='Check Build Names' >

Check Build Names

- Ensure both Figma and SDK uploads use the same `--buildName`
   - Verify builds are in the same project

</TabItem>
<TabItem value='project-type' label='Project Type' >

Project Type

- Ensure project is created as **Real Devices** type (not CLI)
   - Verify project exists in SmartUI dashboard
**Symptoms**:
- "Invalid project token" error
- Uploads fail with authentication errors
**Solutions**:

</TabItem>
<TabItem value='verify-project-token' label='Verify Project Token' >

Verify Project Token

```bash
   echo $PROJECT_TOKEN
   ```
   Ensure the token is set correctly and matches your SmartUI project.

</TabItem>
<TabItem value='check-project-type' label='Check Project Type' >

Check Project Type

- Ensure project is created as **Real Devices** type
   - Verify project exists in SmartUI dashboard
If you encounter issues not covered here:
- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [Figma CLI Documentation](/support/docs/smartui-cli-figma) for basic Figma workflows
- Check [Figma-Web CLI Documentation](/support/docs/smartui-cli-figma-web) for web comparison workflows
- Visit [TestMu AI Support](https://www.testmuai.com/support) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Figma CLI Documentation](/support/docs/smartui-cli-figma)
- [Figma-Web CLI Documentation](/support/docs/smartui-cli-figma-web)
- [Appium Hooks Documentation](/support/docs/smartui-appium-hooks)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)
- [How to generate a Figma token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
- [SmartUI CLI Docs](/support/docs/smartui-cli/)
- [Appium + SmartUI Node Sample](https://github.com/LambdaTest/smartui-appium-nodejs)

---

**Run seamless visual comparisons between real device screenshots and Figma designs with SmartUI CLI. Start validating your mobile UI today!**
