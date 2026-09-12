---
id: smartui-cli-env-variables
title: SmartUI SDK Environment Variables
sidebar_label: Set Environment Variables
description: In this documentation, learn about the various environment variables available in SmartUI
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.testmuai.com/support/docs/smartui-cli-env-variables/
slug: smartui-cli-env-variables/
canonical: https://www.testmuai.com/support/docs/smartui-cli-env-variables/

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
          "item": `${BRAND_URL}/support/docs/smartui-cli-env-variables/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-cli-env-variables/"
    },
    "headline": "SmartUI SDK Environment Variables",
    "description": "In this documentation, learn about the various environment variables available in SmartUI",
    "url": "https://www.testmuai.com/support/docs/smartui-cli-env-variables/",
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
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
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
        "name": "Set the Project Name you want to add the current build run to by exporting these enviroment variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR ACCESS KEY\"\nexport PROJECT_NAME=\"Required Project Name\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Setting the Project Name",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"YOUR USERNAME\"\nset LT_ACCESS_KEY=\"YOUR ACCESS KEY\"\nset PROJECT_NAME=\"Required Project Name\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Setting the Project Name",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME=\"YOUR USERNAME\"\n$env:LT_ACCESS_KEY=\"YOUR ACCESS KEY\"\n$env:PROJECT_NAME=\"Required Project Name\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2: Set your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2: Set your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2: Set your Project Token",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:PROJECT_TOKEN=\"123456#1234abcd-****-****-****-************\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the baseline branch for CLI projects",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export BASELINE_BRANCH=\"Required branch\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Setting the Baseline Branch",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set BASELINE_BRANCH=\"Required branch\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Setting the Baseline Branch",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:BASELINE_BRANCH=\"Required branch\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the current branch for CLI projects",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export CURRENT_BRANCH=\"Required branch\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Setting the current branch",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set CURRENT_BRANCH=\"Required branch\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Setting the current branch",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:CURRENT_BRANCH=\"Required branch\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HTTP_PROXY:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export HTTP_PROXY=\"http://<username>:<password>@<domain.com>:<port>/\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HTTP_PROXY:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set HTTP_PROXY=\"http://<username>:<password>@<domain.com>:<port>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HTTP_PROXY:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:HTTP_PROXY=\"http://<username>:<password>@<domain.com>:<port>/\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HTTPS_PROXY:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export HTTPS_PROXY=\"https://<username>:<password>@<domain.com>:<port>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HTTPS_PROXY:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set HTTPS_PROXY=\"https://<username>:<password>@<domain.com>:<port>\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "HTTPS_PROXY:",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:HTTPS_PROXY=\"https://<username>:<password>@<domain.com>:<port>/\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "6. Enabling Debug mode",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_SDK_DEBUG=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "6. Enabling Debug mode",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_SDK_DEBUG=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "6. Enabling Debug mode",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_SDK_DEBUG=\"true\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "7. Ignoring captured cookies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "7. Ignoring captured cookies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "7. Ignoring captured cookies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=\"true\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For SDK integrations (non-Selenium), set the SmartUI server address",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export SMARTUI_SERVER_ADDRESS=\"http://localhost:8080\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "8. Setting Server Address",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set SMARTUI_SERVER_ADDRESS=\"http://localhost:8080\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "8. Setting Server Address",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:SMARTUI_SERVER_ADDRESS=\"http://localhost:49152\""
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

Welcome to the world of simplified visual testing with the SmartUI SDK.

This guide is designed to provide you with comprehensive information about the various environment variables options available within the SmartUI SDK. SmartUI retrieves additional details from the environment it is running in, like the branch name, baseline branch,proxies etc. You can modify certain aspects of SmartUI behavior by configuring these environment variables within your CI environment:

## 1. Setting the Project Name

Set the Project Name you want to add the current build run to by exporting these enviroment variables:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux' label='MacOS/Linux' default>

```bash
export LT_USERNAME="YOUR USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
export PROJECT_NAME="Required Project Name"
```

</TabItem>
<TabItem value='Windows' label='Windows - CMD'>

```bash
set LT_USERNAME="YOUR USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
set PROJECT_NAME="Required Project Name"
```

</TabItem>
<TabItem value='PowerShell' label='PowerShell'>

```powershell
$env:LT_USERNAME="YOUR USERNAME"
$env:LT_ACCESS_KEY="YOUR ACCESS KEY"
$env:PROJECT_NAME="Required Project Name"
```

</TabItem>
</Tabs>

> If you specify a project name that doesn't already exist, a new project will be created by the user whose authentication is added in the environment.

## 2: Set your Project Token

Setup your project token shown in the **SmartUI** app after creating your project.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-1' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows-1" label='Windows - CMD'>

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell-1" label='PowerShell'>

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

> Setting the project token environment variable does not require any user level authentication.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

## 3. Setting the Baseline Branch

Set the baseline branch for `CLI` projects:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-2' label='MacOS/Linux' default>

```bash
export BASELINE_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows-2" label='Windows - CMD'>

```bash
set BASELINE_BRANCH="Required branch"
```

</TabItem>
<TabItem value="PowerShell-2" label='PowerShell'>

```powershell
$env:BASELINE_BRANCH="Required branch"
```

</TabItem>
</Tabs>

## 4. Setting the current branch

Set the current branch for `CLI` projects:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-3' label='MacOS/Linux' default>

```bash
export CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows-3" label='Windows - CMD'>

```bash
set CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value='PowerShell-3' label='PowerShell'>

```powershell
$env:CURRENT_BRANCH="Required branch"
```

</TabItem>
</Tabs>

## 5. Setting proxies

In case you are accessing your network using corporate proxies, set the proxies in the environment variables as follows

#### HTTP_PROXY:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-4' label='MacOS/Linux' default>

```bash
export HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
<TabItem value="Windows-4" label='Windows - CMD'>

```bash
set HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>"
```

</TabItem>
<TabItem value='PowerShell-4' label='PowerShell'>

```powershell
$env:HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
</Tabs>

#### HTTPS_PROXY:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-5' label='MacOS/Linux' default>

```bash
export HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>"
```

</TabItem>
<TabItem value='Windows-5' label='Windows - CMD'>

```bash
set HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>"
```

</TabItem>
<TabItem value='PowerShell-5' label='PowerShell'>

```powershell
$env:HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
</Tabs>

> **NOTE :** In most cases setting only HTTP_PROXY should be enough, but if you have different proxies for HTTP and HTTPS, you can set both.The format for proxy’s is `http[s]://<username>:<password>@<domain.com>:<port>/` [username and password is optional].

## 6. Enabling Debug mode

To enable SmartUI CLI Debug mode, use the following environment variable.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-6' label='MacOS/Linux' default>

```bash
export LT_SDK_DEBUG=true
```

</TabItem>
<TabItem value='Windows-6' label='Windows - CMD' default>

```bash
set LT_SDK_DEBUG=true
```

</TabItem>
<TabItem value='PowerShell-6' label='PowerShell'>

```powershell
$env:LT_SDK_DEBUG="true"
```

</TabItem>

</Tabs>

## 7. Ignoring captured cookies

Set the following variable to true, to stop the use of cookies captured automatically. The default is set to `false`.

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-7' label='MacOS/Linux' default>

```shell
export SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true
```

</TabItem>
<TabItem value='Windows-7' label='Windows - CMD' default>

```shell
set SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true
```

</TabItem>
<TabItem value='PowerShell-7' label='PowerShell'>

```powershell
$env:SMARTUI_DO_NOT_USE_CAPTURED_COOKIES="true"
```

</TabItem>
</Tabs>

## 8. Setting Server Address

For SDK integrations (non-Selenium), set the SmartUI server address:

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='language'>
<TabItem value='MacOS/Linux-8' label='MacOS/Linux' default>

```bash
export SMARTUI_SERVER_ADDRESS="http://localhost:8080"
```

</TabItem>
<TabItem value='Windows-8' label='Windows - CMD'>

```bash
set SMARTUI_SERVER_ADDRESS="http://localhost:8080"
```

</TabItem>
<TabItem value='PowerShell-8' label='PowerShell'>

```powershell
$env:SMARTUI_SERVER_ADDRESS="http://localhost:49152"
```

</TabItem>
</Tabs>

## 9. Additional Environment Variables

The following environment variables are also available for advanced configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `FIGMA_TOKEN` | Figma API token for Figma integration | - |
| `NO_PROXY` | Comma-separated hosts to bypass proxy | - |
| `SMARTUI_HTTP_PROXY` | SmartUI-specific HTTP proxy | - |
| `SMARTUI_HTTPS_PROXY` | SmartUI-specific HTTPS proxy | - |
| `SMARTUI_API_PROXY` | API proxy configuration | - |
| `SMARTUI_CLIENT_API_URL` | Override API URL | `https://api.lambdatest.com/visualui/1.0` |
| `SMARTUI_UPLOAD_URL` | Override upload URL | `https://api.lambdatest.com` |
| `SMARTUI_GIT_INFO_FILEPATH` | Custom git info file path | - |
| `GITHUB_ACTIONS` | GitHub Actions environment flag | - |
| `SMARTUI_API_SKIP_CERTIFICATES` | Skip SSL certificate validation | `false` |
| `USE_REMOTE_DISCOVERY` | Use remote discovery mode | `false` |
| `SMART_GIT` | Enable Smart Git feature | `false` |
| `SHOW_RENDER_ERRORS` | Show render errors | `false` |
| `SMARTUI_SSE_URL` | Server-sent events URL | `https://server-events.lambdatest.com` |
| `LT_SDK_SKIP_EXECUTION_LOGS` | Skip execution logs | `false` |
| `MAX_CONCURRENT_PROCESSING` | Max concurrent processing threads | `0` (auto) |
| `DO_NOT_USE_USER_AGENT` | Disable user agent | `false` |


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [CLI Documentation](/support/docs/smartui-cli)
- [CLI Exec Commands](/support/docs/smartui-cli-exec)
- [CLI Upload](/support/docs/smartui-cli-upload)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.testmuai.com/support/api-doc/)

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI Environment Variables </span>
    </li>
  </ul>
</nav>
