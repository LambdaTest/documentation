---
id: kaneai-custom-headers
title: How to Add Custom Headers With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Custom Headers
description: Configure custom HTTP headers in KaneAI for desktop web and mobile browser tests, including headers backed by secrets.
keywords:
  - Custom Headers
  - Headers
  - secrets
  - mobile browser
  - desktop web
url: https://www.testmuai.com/support/docs/kaneai-custom-headers/
site_name: TestMu AI
slug: kaneai-custom-headers/
canonical: https://www.testmuai.com/support/docs/kaneai-custom-headers/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Custom Headers",
          "item": `${BRAND_URL}/support/docs/kaneai-custom-headers/`
        }]
      })
    }}
></script>

# Custom Headers in KaneAI
***

Custom headers inject additional HTTP header information into your test sessions, letting you send tokens, session IDs, content-type overrides, or other metadata with requests. You configure them in **Advanced Settings** for both **Desktop Web** and **Mobile Browser** tests.

## Configure for Desktop Web
***

Follow these steps to add custom headers to a Desktop Web test.

### Step 1: Create a Web Test
***

Navigate to the [KaneAI login page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective) and click **Desktop Browser** to create a new web test.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/create_web_test_custom_headers.png').default} alt="KaneAI objective page" className="doc_img"/>

**Result:** The web test configuration opens in **Advanced Settings**.

### Step 2: Add Custom Headers
***

Enable the **Custom Headers** toggle. For each row, enter a **Header Name** and **Header Value**. Click the **+** button to add more rows.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/add-custom-headers.png').default} alt="Add custom headers in web test" className="doc_img"/>

:::note
You can add up to 10 custom headers per session. If you provide a default header (for example, `Accept`), it overrides the browser's default value for that header.
:::

**Result:** Your headers are queued to apply when the session starts.

### Step 3: Start the Test Session
***

Click **Start Testing** to launch the session.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/custom_headers_appliend.png').default} alt="Custom headers applied in API call" className="doc_img"/>

**Result:** The configured headers apply to all HTTP requests made during the session, including navigation requests and API calls.

## Configure for Mobile Browser
***

Custom headers work the same way for Mobile Browser tests, with an added **Type** column to choose between **String** and **Secret** values.

### Step 1: Open Advanced Settings
***

Open **Advanced Settings** for your Mobile Browser test and enable the **Custom Headers** toggle.

**Result:** The custom headers section is ready for input.

### Step 2: Add Headers With a Type
***

For each header, enter the name and value, then select the value **Type**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/add-cutom-headers-mobile-browser.png').default} alt="Custom headers in mobile browser" className="doc_img"/>

**Result:** The headers apply to the session when it starts.

## Header Value Types
***

Each custom header has a **Type** field that determines how the value is handled:

| Type | Description |
|---|---|
| **String** | A plain-text value that is sent as-is with the request (for example, `1234567890`). |
| **Secret** | A reference to an organization-level secret stored in KaneAI, using the `{{secrets.org.<secret_name>}}` syntax to keep sensitive values like tokens or API keys out of plain text. See [secrets](/support/docs/kane-ai-using-variables/#secrets) for details. |

### Example Headers
***

- **Session management**: track user sessions across requests:
  ```
  X-Session-ID: 1234567890
  ```
- **Authentication tokens**: use the **Secret** type to inject API keys or bearer tokens without exposing them in plain text:
  ```
  Authorization: {{secrets.org.BearerToken}}
  ```
- **Content negotiation**: override the `Accept` header to test specific response formats:
  ```
  Accept: application/json
  ```

## View Applied Headers
***

You can view the headers applied to a session in the following places:

- **During authoring:** Click **Advanced Settings** in the top navigation bar to view the headers applied to the current session. Secret values are shown in their `{{secrets.org.<name>}}` format.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/view_custom_headers_while_authoring.png').default} alt="Advanced Settings link in authoring session" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/custom_headers_modal.png').default} alt="Custom headers in Advanced Settings panel" className="doc_img"/>

- **On the Test Summary page:** After the session completes, click **Advanced Settings** to expand the panel and view the headers used. You can also click **View details** in the test case sidebar to see the full list of advanced settings in a side drawer.

<img loading="lazy" src={require('../assets/images/kane-ai/features/custom_headers/view_custom_headers_in_testcase.png').default} alt="Custom headers on test summary page" className="doc_img"/>

## Next Steps
***

Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/)
