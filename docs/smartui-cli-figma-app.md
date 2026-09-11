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

```bash
npm install @lambdatest/smartui-cli
````

---

### 3. Generate and Edit Configuration

Run the following to create your initial design file:

```bash
npx smartui config:create-figma-app designs.json
```

#### Sample `designs.json`

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

```bash
export PROJECT_TOKEN="your_smartui_project_token"
export FIGMA_TOKEN="your_figma_personal_token"
```

---

### 5. Run the Comparison

```bash
npx smartui upload-figma-app designs.json
```

#### Optional Flags

| Flag             | Description                                       |
| ---------------- | ------------------------------------------------- |
| `--markBaseline` | Mark this build as a new baseline for future runs |
| `--buildName`    | Assign a custom name to this comparison build     |

#### Example

```bash
npx smartui upload-figma-app designs.json --buildName "v1.0.0" --markBaseline
```

---

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## Best Practices

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

Verify Figma Token

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

- Ensure SDK screenshots include `.png` extension (e.g., `homepage.png`)
   - Verify screenshot names match exactly between Figma config and SDK code
   - Ensure `screenshot_names` array matches the order of `figma_ids`

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
