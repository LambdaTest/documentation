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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/group-and-filter-your-test-builds-using-build-tags/"
    },
    "headline": "Group and Filter Your Test Builds Using Build Tags",
    "description": "Create build tags in desired capabilities to group and filter test builds on the automation dashboard.",
    "url": "https://www.testmuai.com/support/docs/group-and-filter-your-test-builds-using-build-tags/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "create build tags selenium",
      "filter test builds by tag",
      "group automation builds"
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
        "name": "How to Create Build Tags",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "String[] buildTagList = { \"Regression\", \"Sanity\" };\n\nMutableCapabilities ltOptions = new MutableCapabilities();\nltOptions.setCapability(\"build\", \"Build Tags Demo\");\nltOptions.setCapability(\"buildTags\", buildTagList);\n\nChromeOptions browserOptions = new ChromeOptions();\nbrowserOptions.setCapability(\"browserVersion\", \"latest\");\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

* * *

With TestMu AI, you can group test builds with build tags. Add a `buildTags` capability with your tag names to a test, run it, then group and filter builds by those tags on the Automation Dashboard.

## How to Create Build Tags
---
Pass a `buildTags` capability with a String array of tag names inside `LT:Options`.

While building your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `buildTags` capability to a String array of the tag names you want on the build:

<VerifiedTag value="Verified" />

```java
// The build tags you want to apply (max 5 per build)
String[] buildTagList = { "Regression", "Sanity" };

// Add the buildTags capability inside LT:Options
MutableCapabilities ltOptions = new MutableCapabilities();
ltOptions.setCapability("build", "Build Tags Demo");
ltOptions.setCapability("buildTags", buildTagList);

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setCapability("browserVersion", "latest");
browserOptions.setCapability("LT:Options", ltOptions);
```

Run the test with these capabilities. The build then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) tagged with your build tags.

## Guidelines for Creating Build Tags
---
Follow these limits when creating build tags to avoid unexpected behavior.

While creating Build Tags, follow the below guidelines:

*   Add a maximum of 5 custom tags to a build.
*   You can update the existing build by specifying different tags.
*   If you change a tag name or number of tags, no new build is created. The existing build is updated with the new tag to avoid unnecessary build creation.

## How to Filter Builds Using Build Tags
---
Filter the Builds list by your build tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Build Tags**. Choose one or more of your build tags to show only the builds that carry them; selecting several combines them.

<img loading="lazy" src={require('../assets/images/uploads/builds-filter-build-tags.webp').default} alt="Build Tags filter on the Builds list showing build tag values to filter builds by" width="1601" height="890" className="doc_img"/>

To filter by tags set on individual tests instead, use the **Test Tags** filter. See [Group Tests Using Custom Tags](/support/docs/group-tests-using-custom-tags/) and [Organize Tests & Builds](/support/docs/filter-your-selenium-tests/).

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
