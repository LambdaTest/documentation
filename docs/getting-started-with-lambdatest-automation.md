---
id: getting-started-with-lambdatest-automation
title: Get Started With Selenium Testing
sidebar_label: Overview
description: Run Selenium tests on TestMu AI's cloud grid. 3000+ browser and OS combinations, parallel execution, video recordings, and built-in debugging.
keywords:
  - testmu ai automation
  - selenium automation grid
  - selenium grid online
  - online selenium automation
  - selenium automation grid online
  - testmu ai selenium automation grid
  - selenium tutorial
  - selenium getting started
  - testmu ai getting started
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/getting-started-with-testmu-automation/
site_name: TestMu AI
slug: getting-started-with-testmu-automation/
canonical: https://www.testmuai.com/support/docs/getting-started-with-testmu-automation/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import DocCard from '@site/src/component/DocCard';


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
          "name": "Getting Started With Selenium Automation Testing Using TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-testmu-automation/`
        }]
      })
    }}
></script>
---

Run your Selenium tests on TestMu AI's cloud grid of 3000+ browser and OS combinations. Point your tests at the hub URL, add capabilities, and get parallel execution, video recordings, logs, and screenshots for every session - no infrastructure to maintain.


## Before You Begin
---

1. You need a TestMu AI account. [Sign up free](https://accounts.lambdatest.com/register) if you don't have one.
2. Visit the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard) and navigate to the left sidebar and select **Credentials**. Your **Username** and **Access Key** will be visible there, along with options to copy them for use.
3. Set them as environment variables:

<Tabs>
  <TabItem value="maclinux" label="macOS / Linux" default>
  ```bash
  export LT_USERNAME="YOUR_USERNAME"
  export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
  ```
  </TabItem>
  <TabItem value="windows" label="Windows">
  ```powershell
  set LT_USERNAME="YOUR_USERNAME"
  set LT_ACCESS_KEY="YOUR_ACCESS_KEY"
  ```
  </TabItem>
</Tabs>

Your tests connect to the grid at:

```
https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
```

## Choose How to Start
---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
  <DocCard
    heading="Run Your First Test"
    link="/support/docs/testmu-running-your-first-selenium-test/"
    description="New to cloud testing? Clone a sample project, set credentials, and run your first Selenium script on the grid."
  />
  <DocCard
    heading="Migrate Your Test Suite"
    link="/support/docs/migrate-selenium-test-suite/"
    description="Already have Selenium tests? Change the hub URL, add credentials, and run them on the cloud."
  />
  <DocCard
    heading="Explore the Dashboard"
    link="/support/docs/inside-testmu-platform/"
    description="See where test results live - video playback, command logs, screenshots, and analytics."
  />
  <DocCard
    heading="Configure Capabilities"
    link="/support/docs/selenium-automation-capabilities/"
    description="Control which browser, version, OS, and advanced features your tests use."
  />
</div>





<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       Getting Started With Selenium Automation Testing Using TestMu AI
      </span>
    </li>
  </ul>
</nav>
