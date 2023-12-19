---
id: hyperexecute-environment-variable-setup
title: HyperExecute Environment Variable Setup
hide_title: true
sidebar_label: HyperExecute Environment Variable Setup
description: Find out how to get access to Hyperexecute authentication credentials, fetching them from the Automation tab in your LambdaTest profile, and configuring them on Mac OSX/Linux, Windows systems.
keywords:
- LambdaTest automation
- LambdaTest environment variables
- LambdaTest setup
- Hyperexecute environment variables
url: https://www.lambdatest.com/support/docs/hyperexecute-environment-variable-setup/
site_name: LambdaTest
slug: hyperexecute-environment-variable-setup/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Hyperexecute Environment Variable Setup",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-environment-variable-setup/"
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

# HyperExecute Environment Variable Setup
***

To provide you with a secure [cross-browser testing](https://www.lambdatest.com) environment on-cloud, we recommend integrating LambdaTest Authentication Credentials in your test scripts. This would allow our cloud servers to establish a secure connection between your local system and [HyperExecute](https://hyperexecute.lambdatest.com/). This document will help you understand how to set up HyperExecute environment variable for your respective operating system. This set up would also help authenticate your colleague's test cases when executed against an individual account.

## Where to find LambdaTest Authentication Credentials?
***

LambdaTest Authentication Credentials consists of two fields:

1. LambdaTest Username
2. LambdaTest Access Key

>You can find these authentication credentials by either visiting the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/) or your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile).

### Fetching Authentication Credential from the HyperExecute tab
***

**Step 1**: Visit the HyperExecute tab from the left navigation menu.

**Step 2**: Click on the key icon from the top-right corner of your screen and copy the Access Key and Username.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/env-variable/Hyperexecute-dashboard.png').default} alt="Image" width="1919" height="878" className="doc_img"/>

### Fetching Authentication Credential from your LambdaTest Profile
***

**Step 1**: Visit your LambdaTest Profile by clicking on the user icon on the top-right followed by clicking on Profile.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/env-variable/Hyperexecute-profile-snap.png').default} alt="Image" width="1363" height="544" className="doc_img"/>

**Step 2**: You will find your Username & Access Key.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/env-variable/environment-variables-3.webp').default} alt="Image" width="521" height="268" className="doc_img"/>

## Configuring Environment Variables On Mac OSX/Linux Systems/Windows
***

Before the tests are run, please set the environment variables LT_USERNAME & LT_ACCESS_KEY from the terminal. The account details are available on your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) page.

For macOS:

```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=LT_USERNAME
export LT_ACCESS_KEY=LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=LT_USERNAME
set LT_ACCESS_KEY=LT_ACCESS_KEY
```


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
      <span className="breadcrumbs__link">
      HyperExecute Environment Variable Setup
      </span>
    </li>
  </ul>
</nav>