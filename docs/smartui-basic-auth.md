---
id: smartui-cli-basic-auth
title: Basic Authentication in SmartUI CLI
sidebar_label: Capturing assets protected with authentication
description: Learn how to capture screenshots of assets protected behind authentication using SmartUI CLI
keywords:
  - Visual Regression
  - SmartUI SDK
  - Basic Authentication
  - Protected Assets
  - Authentication Headers
url: https://www.testmuai.com/support/docs/smartui-basic-auth/
slug: smartui-cli-basic-auth/
canonical: https://www.testmuai.com/support/docs/smartui-cli-basic-auth/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "item": `${BRAND_URL}/support/docs/smartui-basic-auth/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-cli-basic-auth/"
    },
    "headline": "Basic Authentication in SmartUI CLI",
    "description": "Learn how to capture screenshots of assets protected behind authentication using SmartUI CLI",
    "url": "https://www.testmuai.com/support/docs/smartui-cli-basic-auth/",
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
      "SmartUI SDK",
      "Basic Authentication"
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
        "name": "Add the following configuration to your .smartui.json file to enable basic authentication",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"basicAuthorization\": {\n    \"username\": \"username\",\n    \"password\": \"password\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Here's a complete example of a SmartUI configuration file with basic authentication",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"web\": {\n    \"browsers\": [\"chrome\", \"firefox\"],\n    \"viewports\": [\n      [1920, 1080],\n      [1366, 768]\n    ]\n  },\n  \"basicAuthorization\": {\n    \"username\": \"your-username\",\n    \"password\": \"your-password\"\n  },\n  \"waitForTimeout\": 1000\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For better security, you can use environment variables for your authentication credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"basicAuthorization\": {\n    \"username\": \"${AUTH_USERNAME}\",\n    \"password\": \"${AUTH_PASSWORD}\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Then set your environment variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export AUTH_USERNAME=\"your-username\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Using Environment Variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set AUTH_USERNAME=\"your-username\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:AUTH_USERNAME=\"your-username\""
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

When capturing screenshots of applications or websites that are protected with authentication, you need to configure SmartUI to pass the necessary authentication headers. This ensures that SmartUI can access and properly render all assets on the page.

## Why Basic Authentication is Needed

Without proper authentication configuration:
- Protected assets may fail to load
- Screenshots might be incomplete or broken
- CSS and other resources behind authentication may not be accessible

## Configuration

Add the following configuration to your `.smartui.json` file to enable basic authentication:

<VerifiedTag value="Verified" />

```json
{
  "basicAuthorization": {
    "username": "username",
    "password": "password"
  }
}
```

### Configuration Parameters

- **username**: Your authentication username
- **password**: Your authentication password

## Example Usage

Here's a complete example of a SmartUI configuration file with basic authentication:

<VerifiedTag value="Verified" />

```json
{
  "web": {
    "browsers": ["chrome", "firefox"],
    "viewports": [
      [1920, 1080],
      [1366, 768]
    ]
  },
  "basicAuthorization": {
    "username": "your-username",
    "password": "your-password"
  },
  "waitForTimeout": 1000
}
```

## Using Environment Variables

For better security, you can use environment variables for your authentication credentials:

<VerifiedTag value="Verified" />

```json
{
  "basicAuthorization": {
    "username": "${AUTH_USERNAME}",
    "password": "${AUTH_PASSWORD}"
  }
}
```

Then set your environment variables:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export AUTH_USERNAME="your-username"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set AUTH_USERNAME="your-username"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:AUTH_USERNAME="your-username"
```

</TabItem>
</Tabs>

## Common Issues and Solutions

1. **Assets Not Loading**
   - Verify that the provided credentials have access to all required resources
   - Check if any assets are served from different domains requiring separate authentication

2. **Authentication Failures**
   - Ensure credentials are correct and active
   - Verify that the authentication endpoint is accessible from <BrandName />'s infrastructure

:::tip
When using basic authentication:
1. Test your credentials manually before running SmartUI tests
2. Ensure all required assets are accessible with the provided credentials
3. Use secure methods to manage your authentication credentials
4. Consider implementing a test user specifically for visual testing
:::
