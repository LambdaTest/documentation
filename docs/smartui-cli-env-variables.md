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

url: https://www.lambdatest.com/support/docs/smartui-cli-env-variables/
slug: smartui-cli-env-variables/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

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
          "item": "https://www.lambdatest.com/support/docs/smartui-cli-env-variables/"
        }]
      })
    }}
></script>

Welcome to the world of simplified visual testing with the SmartUI SDK.

This guide is designed to provide you with comprehensive information about the various environment variables options available within the SmartUI SDK. SmartUI retrieves additional details from the environment it is running in, like the branch name, baseline branch,proxies etc. You can modify certain aspects of SmartUI behavior by configuring these environment variables within your CI environment:

## 1. Setting the Project Name

Set the Project Name you want to add the current build run to by exporting these environment variables:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_USERNAME="YOUR USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
export PROJECT_NAME="Required Project Name"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set LT_USERNAME="YOUR USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
set PROJECT_NAME="Required Project Name"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: LT_USERNAME="YOUR USERNAME"
$env: LT_ACCESS_KEY="YOUR ACCESS KEY"
$env: PROJECT_NAME="Required Project Name"
```

</TabItem>
</Tabs>

> If you specify a project name that doesn't already exist, a new project will be created by the user whose authentication is added in the environment.


## 2: Set your Project Token

Setup your project token show in the **SmartUI** app after, creating your project.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env:PROJECT_TOKEN="123456#1234abcd-****-****-****-************"
```

</TabItem>
</Tabs>

> Setting the project token environment variable does not require any user level authentication.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/project-token-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## 3. Setting the Baseline Branch

Set the baseline branch for `CLI` projects:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export BASELINE_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set BASELINE_BRANCH="Required branch"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: BASELINE_BRANCH="Required branch"
```

</TabItem>
</Tabs>

## 4. Setting the current branch

Set the current branch for `CLI` projects:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set CURRENT_BRANCH="Required branch"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: CURRENT_BRANCH="Required branch"
```

</TabItem>
</Tabs>

## 5. Setting proxies

In case you are accessing your network using corporate proxies, set the proxies in the environment variables as follows

#### HTTP_PROXY:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: HTTP_PROXY="http://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
</Tabs>


#### HTTPS_PROXY:

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
<TabItem value="Windows" label="Windows - CMD">

```bash
set HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: HTTPS_PROXY="https://<username>:<password>@<domain.com>:<port>/"
```

</TabItem>
</Tabs>

> **NOTE :** In most cases setting only HTTP_PROXY should be enough, but if you have different proxies for HTTP and HTTPS, you can set both.The format for proxy’s is `http[s]://<username>:<password>@<domain.com>:<port>/` [username and password is optional].

## 6. Enabling Debug mode

To enable SmartUI CLI Debug mode, use the following environment variable.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```bash
export LT_SDK_DEBUG=true
```
</TabItem>
<TabItem value="Windows" label="Windows - CMD" default>

```bash
set LT_SDK_DEBUG=true
```
</TabItem>

<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: LT_SDK_DEBUG="true"
```

</TabItem>

</Tabs>

## 7. Ignoring captured cookies

Set the following variable to true, to stop the use of cookies captured automatically. The default is set to `false`.

<Tabs className="docs__val" groupId="language">
<TabItem value="MacOS/Linux" label="MacOS/Linux" default>

```shell
export SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true
```
</TabItem>
<TabItem value="Windows" label="Windows - CMD" default>

```shell
set SMARTUI_DO_NOT_USE_CAPTURED_COOKIES=true
```
</TabItem>

<TabItem value="PowerShell" label="PowerShell">

```powershell
$env: SMARTUI_DO_NOT_USE_CAPTURED_COOKIES="true"
```

</TabItem>
</Tabs>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link"> SmartUI Environment Variables </span>
    </li>
  </ul>
</nav>
