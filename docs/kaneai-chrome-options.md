---
id: kaneai-chrome-options
title: How to Set Chrome Options With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Chrome Options
description: Pass Chrome command-line options to your KaneAI web test to change browser behavior during a session.
keywords:
  - modules versioning
  - enhancements
  - modules
  - dynamic url
  - chrome options
  - chrome arguments
url: https://www.testmuai.com/support/docs/kaneai-chrome-options/
site_name: TestMu AI
slug: kaneai-chrome-options/
canonical: https://www.testmuai.com/support/docs/kaneai-chrome-options/
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
          "name": "How to use Chrome Options in KaneAI",
          "item": `${BRAND_URL}/support/docs/kaneai-chrome-options/`
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-chrome-options/"
    },
    "headline": "Chrome Options",
    "description": "This documentation will help you to understand how to use the Chrome Options feature while testing your test cases via KaneAI.",
    "url": "https://www.testmuai.com/support/docs/kaneai-chrome-options/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "modules versioning",
      "enhancements",
      "modules"
    ],
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
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to use Chrome Options in KaneAI Web Agent",
      "description": "Using Chrome options in KaneAI Web Agent is simple and involves defining specific configurations before launching a test. Follow the steps below to add and manage Chrome options for your tests.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Navigate to the Test Configuration Page",
          "text": "Begin by accessing the Test Configuration page within the KaneAI Web Agent interface. Click on the Create a Web Test button.",
          "url": "https://www.testmuai.com/support/docs/kaneai-chrome-options/#step-1-navigate-to-the-test-configuration-page"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Locate the Chrome Options Section",
          "text": "Enable the toggle to add Chrome browser command-line options when launching your instance. Enter your Command line switches and you can provide the type of argument as well i.e. String or File for that particular command line. You can enter up to 10 Chrome options in the provided input fields. For example: --headless --disable-gpu --use-file-for-fake-audio-capture=/path/to/audio/file",
          "url": "https://www.testmuai.com/support/docs/kaneai-chrome-options/#step-2-locate-the-chrome-options-section"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Start the Web Agent",
          "text": "Once the configuration is done, initiate the Web Agent. The browser will launch with the specified Chrome options applied, allowing you to perform your tests under the customized environment.",
          "url": "https://www.testmuai.com/support/docs/kaneai-chrome-options/#step-3-start-the-web-agent"
        }
      ]
    }
  ]) }}
/>



# How to Set Chrome Options With KaneAI
***

Chrome options, also known as Chrome arguments, are command-line switches that change the default behavior of the Chrome browser, such as running headless or disabling GPU acceleration. In KaneAI Web Agent, you set Chrome options in **Advanced Settings** to configure the browser before a web test session starts.

## Configure Chrome Options
***

Follow these steps to add Chrome options to a web test session.

### Step 1: Create a Web Test
***

In the KaneAI Web Agent interface, click **Create a Web Test** to open **Advanced Settings**.

**Result:** The web test configuration opens, including the Chrome options section.

### Step 2: Add Chrome Options
***

Enable the Chrome options toggle, then enter each command-line switch. For each switch, select the argument type (**String** or **File**). You can enter up to 10 Chrome options. For example:

- `--headless`
- `--disable-gpu`
- `--use-file-for-fake-audio-capture=/path/to/audio/file`

<img loading="lazy" src={require('../assets/images/kane-ai/features/chrome-options/1.png').default} alt="Add Chrome Options" className="doc_img"/>

**Result:** The Chrome options are queued to apply when the session launches.

### Step 3: Start the Web Agent
***

Start the Web Agent to launch the session.

<img loading="lazy" src={require('../assets/images/kane-ai/features/chrome-options/2.png').default} alt="Start the Web Agent" className="doc_img"/>

**Result:** The browser launches with your Chrome options applied.

## Argument Types
***

Each Chrome option accepts one of the following argument types.

| Type | Description |
|---|---|
| **String** | A plain-text command-line value, such as `--headless` or `--disable-gpu`. |
| **File** | A command-line value that points to a file, such as `--use-file-for-fake-audio-capture`. KaneAI injects the Downloads folder path by default, so you do not have to specify the path manually. |

## Limitations
***

Keep these limitations in mind:

- You can configure up to 10 Chrome options per session.
- KaneAI validates the options you enter. If an option is unsupported, an error message prompts you to correct it.
- If you provide no Chrome options, the browser launches with its default configuration.

## Next Steps
***

Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/)
