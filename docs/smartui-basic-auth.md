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
url: https://www.lambdatest.com/support/docs/smartui-basic-auth/
slug: smartui-cli-basic-auth/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smartui-basic-auth/"
        }]
      })
    }}
></script>

When capturing screenshots of applications or websites that are protected with authentication, you need to configure SmartUI to pass the necessary authentication headers. This ensures that SmartUI can access and properly render all assets on the page.

## Why Basic Authentication is Needed

Without proper authentication configuration:
- Protected assets may fail to load
- Screenshots might be incomplete or broken
- CSS and other resources behind authentication may not be accessible

## Configuration

Add the following configuration to your `.smartui.json` file to enable basic authentication:

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

```json
{
  "basicAuthorization": {
    "username": "${AUTH_USERNAME}",
    "password": "${AUTH_PASSWORD}"
  }
}
```

Then set your environment variables:

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
   - Verify that the authentication endpoint is accessible from LambdaTest's infrastructure

:::tip
When using basic authentication:
1. Test your credentials manually before running SmartUI tests
2. Ensure all required assets are accessible with the provided credentials
3. Use secure methods to manage your authentication credentials
4. Consider implementing a test user specifically for visual testing
:::