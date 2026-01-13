---
id: pre-loaded-extension
title: Pre-Loaded Extension for Chrome
hide_title: false
sidebar_label: Pre-Loaded Extension
description: Learn how to install and manage Chrome extensions during real-time testing on TestMu AI. Enhance your manual testing sessions with ad blockers, debugging tools, and more.
keywords:
  - testmu ai pre loaded chrome extension
  - testmu ai pre loaded extension for chrome 
  - testmu ai pre loaded extension
url: https://www.testmu.ai/support/docs/pre-loaded-chrome-extension
site_name: LambdaTest
slug: pre-loaded-chrome-extension
canonical: https://www.testmu.ai/support/docs/pre-loaded-chrome-extension/
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
          "name": "Pre-Loaded Chrome Extension",
          "item": `${BRAND_URL}/support/docs/pre-loaded-chrome-extension/`
        }]
      })
    }}
></script>
The Pre-Loaded Chrome Extensions feature in <BrandName />'s real-time testing allows users to install and use Chrome extensions during your testing sessions. This capability provides the flexibility to test web applications with various extensions, such as ad blockers, password managers, and developer tools, replicating real user environments more accurately.

> The Pre-Loaded Extension is only accessible on **Chrome** browsers.

## Prerequisites
- A <BrandName /> account.
- Access to the real-time testing feature in the <BrandName /> platform.
- Chrome extensions to be tested 

## Accessing the Chrome Extensions Feature

**Step 1:** Select on the **Real Time** > Desktop Web Browser Testing from the sidebar.

**Step 2:** Click on the Chrome Extension drop down button in the dashboard.

**Step 3:** Click on the **Add New Extension** button and then paste the url of the chrome extension that you want to apply and click on the + icon. Your chrome extension will be added.

**Step 4:** Now again click on the Chrome Extension drop down button and select all the extensions that you want to apply for your testing purpose and click on the **Apply** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/real-time-testing/key-features/add-chrome-extension.mp4').default} type="video/mp4" />
</video>

## Removing the Chrome Extension

**Step 1:** Navigate to Real Time Desktop Web Browser Testing console.

**Step 2:** Unselect all those extensions that you want to remove, and click on **Apply** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/real-time-testing/key-features/remove-chrome-extension.mp4').default} type="video/mp4" />
</video>

## Use Cases for Chrome Extensions in Real-Time Testing
- **Testing with Ad Blockers :** Ensure that your web application functions correctly when ad blockers are enabled.
- **Testing Third-Party Integrations:** Validate integrations with password managers, video downloaders, or custom automation scripts.
- **Debugging with Developer Tools :** Use developer-focused extensions like Lighthouse, React DevTools, or Web Developer to inspect your web application.
- **Accessibility Testing :** Install extensions such as Axe or WAVE to perform accessibility audits during manual testing.

> If you have any questions or need further information about Pre-Loaded Chrome Extension, please feel free to reach us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Support**</span> or email us at [support@testmu.ai](mailto:support@testmu.ai). <br />

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
        Pre-Loaded Chrome Extension
      </span>
    </li>
  </ul>
</nav>


