---
id: fastlane-plugin
title: Integration With fastlane Plugin
hide_title: true
sidebar_label: fastlane Plugin
description: Upload Android and iOS apps using the TestMu AI fastlane plugin and test your app on TestMu AI real devices.
keywords:
  - fastlane plugin
  - testmu ai integrations with ci/cd tools
  - continuous integration
  - testmu ai fastlane plugin
url: https://www.testmuai.com/support/docs/fastlane-with-testmu/
site_name: TestMu AI
slug: fastlane-with-testmu/
canonical: https://www.testmuai.com/support/docs/fastlane-with-testmu/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.testmuai.com/"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "fastlane Integration With TestMu AI",
          "item": `${BRAND_URL}/support/docs/fastlane-with-testmu/`
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
      "@id": "https://www.testmuai.com/support/docs/fastlane-with-testmu/"
    },
    "headline": "Integration With fastlane Plugin",
    "description": "Upload Android and iOS apps using the TestMu AI fastlane plugin and test your app on TestMu AI real devices.",
    "url": "https://www.testmuai.com/support/docs/fastlane-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "fastlane plugin",
      "testmu ai integrations with ci/cd tools",
      "continuous integration"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Make sure you have fastlane installed on the machine. Please refer fastlane docs for installation.; TestMu AI Credentials; Please ensure that you have your TestMu AI credentials handy, including your TestMu AI username and access key. You will need to set them up in the Fastfile. To retrieve these credentials, simply click on the key icon located near the help button on your TestMu AI automation dashboard..",
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/fastlane-android-sample",
        "text": "git clone https://github.com/LambdaTest/fastlane-android-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Installing <BrandName /> fastlane Plugin\n***\n\n**Step 1:** Add <BrandName /> [fastlane](https://rubygems.org/gems/fastlane-plugin-lambdatest) plugin by running."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Installing TestMu AI fastlane Plugin",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Step 2:** Add the below action in fastfile in desired lane to upload the app to <BrandName />.   "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Installing TestMu AI fastlane Plugin",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "or if you want to used custom_id.\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Installing TestMu AI fastlane Plugin",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "**_NOTE:_**  custom_id is an optional field.\n\n**Step 3:** Once the app is uploaded to <BrandName />, this action will set an identifier to the uploaded app as APP_URL in the environment variable and can be accessed in the test.\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n**Step 4:**  Execute the below command to upload app and run tests.\n"
      }
    ],
    "dateModified": "2026-06-09T15:09:24+05:30"
  }) }}
/>
# Integration With fastlane Plugin
***
fastlane is a CI/CD tool to automate beta deployments and releases for Android and iOS apps. It is an open-source platform for Android and iOS app deployment. It will take care of all the tasks like testing, generating screenshots, dealing with code signing, and releasing your application. Provides integration support with all the major CI systems. Adding the <BrandName /> fastlane plugin in Fastfile will help you upload the app to the server and run tests on <BrandName /> real devices.

## Prerequisites

:::tip Github Sample

To get started, please try our **[fastlane Sample](https://github.com/LambdaTest/fastlane-android-sample)** GitHub repository..

```bash
git clone https://github.com/LambdaTest/fastlane-android-sample
```

:::

***
To upload an app to <BrandName /> for app testing, you would need the following things :

* Make sure you have fastlane installed on the machine. Please refer fastlane docs for installation.

* <BrandName /> Credentials

    * Please ensure that you have your <BrandName /> credentials handy, including your <BrandName /> username and access key. You will need to set them up in the Fastfile. To retrieve these credentials, simply click on the key icon located near the help button on your <BrandName /> automation [dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

    <img loading="lazy" src={require('../assets/images/fastlane/lambdatest_creds.png').default} alt="add" width="100" height="100" className="doc_img"/>

    ``` bash
    LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
    LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
    ```

## Installing <BrandName /> fastlane Plugin
***

**Step 1:** Add <BrandName /> [fastlane](https://rubygems.org/gems/fastlane-plugin-lambdatest) plugin by running.
```
fastlane add_plugin lambdatest
```

**Step 2:** Add the below action in fastfile in desired lane to upload the app to <BrandName />.   
```
upload_to_lambdatest(
    lt_username: ENV["LT_USERNAME"],
    lt_access_key: ENV["LT_ACCESS_KEY"],
    file_path: "app_file_path"
)
```
or if you want to used custom_id.

```
upload_to_lambdatest(
    lt_username: ENV["LT_USERNAME"],
    lt_access_key: ENV["LT_ACCESS_KEY"],
    file_path: "<app_file_path>",
    custom_id: "<custom_id>
)
```
**_NOTE:_**  custom_id is an optional field.

**Step 3:** Once the app is uploaded to <BrandName />, this action will set an identifier to the uploaded app as APP_URL in the environment variable and can be accessed in the test.

```
String app = System.getenv("APP_URL");
capabilities.setCapability("app", app);
```

**Step 4:**  Execute the below command to upload app and run tests.

```
fastlane <lane>
```

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">fastlane Integration With <BrandName /></span>
    </li>
  </ul>
</nav>
