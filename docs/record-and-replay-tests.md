---
id: record-and-replay
title: How to Record and Replay Tests using LT Debug
hide_title: true
sidebar_label: LT Debug
description: Learn how to use LT Debug to replay or retest user flow as an automated test on 10,000+ browser/device combinations.
keywords:
  - lt debug
  - record replay tests
  - chrome devtools recorder
  - lt debug 2

url: https://www.testmuai.com/support/docs/record-and-replay-tests/
site_name: TestMu AI
slug: record-and-replay-tests/
canonical: https://www.testmuai.com/support/docs/record-and-replay-tests/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';

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
          "name": "How to Record and Replay Tests using LT Debug",
          "item": `${BRAND_URL}/support/docs/record-and-replay-tests/`
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
      "@id": "https://www.testmuai.com/support/docs/record-and-replay-tests/"
    },
    "headline": "How to Record and Replay Tests using LT Debug",
    "description": "Learn how to use LT Debug to replay or retest user flow as an automated test on 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/record-and-replay-tests/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Integration",
    "keywords": [
      "lt debug",
      "record replay tests",
      "chrome devtools recorder"
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
    "dateModified": "2026-08-14T19:24:28+05:30"
  }) }}
/>

# Record and Replay Tests using LT Debug 2.0
---

With LT Debug 2.0, you now have the ability to record user interactions through the Chrome Recorder Panel and replay or retest them as automated tests on a cloud grid on over 10,000+ browser/device combinations. This eliminates the need to download code or manually run tests on your local machine, thus streamlining and optimizing your testing process.

<div className="ytframe"> 
<div className="youtube" data-embed="vSpgplIYSUQ">
    <div className="play-button"></div>
</div>
</div>

## Prerequisites
---

1. Install the [LT Debug Chrome Extension](https://chrome.google.com/webstore/detail/lt-debug/kofahhnmgobkidipanhejacffiigppcd).
2. Login to your <BrandName /> Account via LT Debug Dashboard. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/record-replay/login.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

## Recording User Interactions with Chrome Recorder
---

1. To initiate a recording in Chrome DevTools, first, open the developer tools panel by inspecting the webpage.

<img loading="lazy" src={require('../assets/images/record-replay/inspect.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

2. Once the panel is open, navigate to the **Recorder** tab. 

<img loading="lazy" src={require('../assets/images/record-replay/recorder.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

3. From there, select **Create a new recording**.

<img loading="lazy" src={require('../assets/images/record-replay/createrec.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

4. Now click **Start recording** to begin capturing user interactions on the page.

<img loading="lazy" src={require('../assets/images/record-replay/start.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

5. Once you have completed recording the user flow in Chrome DevTools, you can end the recording process by clicking on **End recording**. 

<img loading="lazy" src={require('../assets/images/record-replay/end.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

## Recording and Replaying Tests on <BrandName />
---

After ending the recording process in Chrome DevTools, you will notice a <BrandName /> button appear on the screen. 

1. To replay or retest the recorded user flow on <BrandName />, simply click on the <BrandName /> button. 

<br/><img loading="lazy" src={require('../assets/images/record-replay/lt.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

2. Configure your test capabilities like Browser/OS Version, Build Name, and Test Name, etc, on which you wish to run the recorded interactions, and click **Start Test**.

<img loading="lazy" src={require('../assets/images/record-replay/caps.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

3. Once the test successful runs, it will generate the test IDs and a link to <BrandName /> Automation Dashboard.

<img loading="lazy" src={require('../assets/images/record-replay/dash.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>

4. To view your record automated test results, visit the [<BrandName /> Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

<img loading="lazy" src={require('../assets/images/record-replay/results.png').default} alt="image"  className="doc_img" width="1341" height="498"/>

---

