---
id: group-tests-using-custom-tags
title: How to Create Custom Automation Tags
sidebar_label: Tag and Group Tests
description: Create custom tags in desired capabilities to group, view, and filter automation tests on the dashboard.
keywords:
  - create custom tags selenium
  - group automation tests by tag
  - filter tests using custom tags
  - selenium desired capabilities tags
  - automation dashboard tag filter
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/group-tests-using-custom-tags/
site_name: TestMu AI
slug: group-tests-using-custom-tags/
canonical: https://www.testmuai.com/support/docs/group-tests-using-custom-tags/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "Group Test Using Custom Tags",
          "item": `${BRAND_URL}/support/docs/group-tests-using-custom-tags/`
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
      "@id": "https://www.testmuai.com/support/docs/group-tests-using-custom-tags/"
    },
    "headline": "How to Create Custom Automation Tags",
    "description": "Create custom tags in desired capabilities to group, view, and filter automation tests on the dashboard.",
    "url": "https://www.testmuai.com/support/docs/group-tests-using-custom-tags/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "create custom tags selenium",
      "group automation tests by tag",
      "filter tests using custom tags"
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
        "name": "How to Create Custom Tags on the Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "        // In case for just 1 tag, just add 1 element in the array\n        String[] customTags = {\"Custom Tag\"};\n\n        // In case for multiple tags, add them in the array separated by comma\n        String[] customTags = {\"Tag 1\", \"Tag 2\", \"Tag 3\", ...};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "How to Create Custom Tags on the Selenium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "        DesiredCapabilities caps = new DesiredCapabilities();\n        .\n        .\n\n        // To create custom tags\n        caps.setCapability(\"tags\", customTags); "
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Group Tests Using Custom Tags

* * *

TestMu AI lets you group automation tests with custom tags. Add a `tags` capability with your tag names to a test, run it, then view and filter tests by those tags from the Builds list on the dashboard. The examples below use a [sample TestNG script](https://github.com/LambdaTest/Java-TestNG-Selenium).

## How to Create Custom Tags on the Selenium Grid
---
Pass a `tags` capability with a String array of tag names inside `LT:Options`.

Add custom tags while writing your Selenium test. When you build your [Selenium capabilities](/support/docs/selenium-automation-capabilities/), set the `tags` capability to a String array of the tag names you want on the test:

<VerifiedTag value="Verified" />

```java
// The tags you want to apply to this test
String[] customTags = { "Tag 1", "Tag 2", "Tag 3" };

// Add the tags capability inside LT:Options
MutableCapabilities ltOptions = new MutableCapabilities();
ltOptions.setCapability("tags", customTags);

ChromeOptions browserOptions = new ChromeOptions();
browserOptions.setCapability("LT:Options", ltOptions);
```

Run the test with these capabilities. Once it runs on the grid, view and filter your tests by these tags on the dashboard.

## How to View and Filter Tests by Custom Tags
---
Filter the Builds list by your custom tags from the Sort & Filters panel.

On the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build), open **Configure > Sort & Filters** and select **Test Tags**. Choose one or more of your tags to show only the tests that carry them; selecting several combines them.

<img loading="lazy" src={require('../assets/images/uploads/builds-filter-test-tags.webp').default} alt="Test Tags filter on the Builds list showing custom tag values to filter tests by" width="1601" height="702" className="doc_img"/>

To filter by tags applied to the build rather than the test, use the **Build Tags** filter. See [Group and Filter Builds Using Build Tags](/support/docs/group-and-filter-your-test-builds-using-build-tags/) and [Organize Tests & Builds](/support/docs/filter-your-selenium-tests/).

* * *

> You have successfully created a custom tag and grouped your tests based on the custom tag. If you have questions, share them with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or by mailing us at [support@testmuai.com](mailto:support@testmuai.com).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Group Test Using Custom Tags
      </span>
    </li>
  </ul>
</nav>
