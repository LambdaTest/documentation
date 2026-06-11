---
id: group-and-filter-your-test-builds-using-build-tags
title: Group and Filter Your Test Builds Using Build Tags
sidebar_label: Tag and Group Builds
description: Create build tags in desired capabilities to group and filter test builds on the automation dashboard.
keywords:
  - create build tags selenium
  - filter test builds by tag
  - group automation builds
  - buildTags capability selenium
  - automation dashboard build filter
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/group-and-filter-your-test-builds-using-build-tags/
site_name: TestMu AI
slug: group-and-filter-your-test-builds-using-build-tags/
canonical: https://www.testmuai.com/support/docs/group-and-filter-your-test-builds-using-build-tags/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Group and Filter Builds Using Build Tags",
          "item": `${BRAND_URL}/support/docs/group-and-filter-your-test-builds-using-build-tags/`
        }]
      })
    }}
></script>

* * *

With TestMu AI, you can group your test builds with Build tags. This document shows how to create Build tags and use them to group or filter your test builds on the TestMu AI Automation Dashboard.

## How to Create Build Tags
---
Add a buildTags capability with a String array to your desired capabilities.

While writing your automation tests, add another capability when you create the [Desired Capabilities](/docs/selenium-automation-capabilities/) via code. Follow the below steps:

*   Create an array of Strings that contains your Build tags, each separated by a comma.

    ```java
    // For example, when you have only 1 tag
    String[] buildTagList = {"Build Tag"};

    // For example, when you have multiple tags
    String[] buildTagList = {"Tag 1", "Tag 2", "Tag 3", ...};
    ```
    

*   Now add this Build tag array in your Desired Capabilities instance: **For example:** While creating a sample Desired Capabilities instance in Java, the code will be:

    ```java
    // Creating the Build Tags
    String[] buildTagList = {"Tag1", "Tag2", "Tag3", "BuildTagRishabh"};

    DesiredCapabilities caps = new DesiredCapabilities();
    caps.setCapability("browser", "Safari");
    caps.setCapability("version", "13");
    caps.setCapability("platform", "macos Catalina");
    caps.setCapability("build", "Build Tags Demo");
    caps.setCapability("name", "Sample Test");

    // To create custom tags
    caps.setCapability("buildTags", buildTagList); 

    System.out.println("Desired Caps: " + caps);
    driver = new RemoteWebDriver(new URL("https://" + username + ":" + authkey + hub), caps);
    ```

You have successfully created the Build tags. Run your test and navigate to [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/) to see the tags in that build:

<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags.webp').default} alt="Group/filter" width="1281" height="721" className="doc_img"/>

## Guidelines for Creating Build Tags
---
Follow these limits when creating build tags to avoid unexpected behavior.

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

## How to Filter Tests Using Build Tags
---
Select one or more build tags in the filter toolbar to narrow down your test builds.

To group or filter the tests on your automation dashboard with Build tags:

Navigate to [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/), and you can see a filter by name **Build Tags** on the right corner of the filter toolbar. 
<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags-2.webp').default} alt="Group/filter" width="1281" height="722" className="doc_img"/>

Select the Build tag by which you want to filter your test. For example, if we choose _Tag1_, only the test builds with the tag "Tag1" appear:

<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags-3.webp').default} alt="group/filter" width="930" height="524" className="doc_img"/>

You can choose multiple Build tags to filter your tests, as shown in the image below:

<img loading="lazy" src={require('../assets/images/group-and-filter-your-test-builds-using-build-tags/build-tags-4.webp').default} alt="group/filter" width="1282" height="722" className="doc_img"/>

* * *

> You have successfully created a Build tag and grouped and filtered your tests based on these Build tags. If you have questions, share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

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
        Group and Filter Builds Using Build Tags
      </span>
    </li>
  </ul>
</nav>
