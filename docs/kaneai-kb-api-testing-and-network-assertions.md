---
id: kaneai-kb-api-testing-and-network-assertions
title: How to Assert Network Logs With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Network
description: Assert on the network calls your app makes during a KaneAI test session to validate backend behavior alongside the UI.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai api testing
  - kaneai network assertions
  - kaneai curl
  - api ui testing
  - network
  - network logs assertion
  - assertion
url: https://www.testmuai.com/support/docs/kaneai-kb-api-testing-and-network-assertions/
site_name: TestMu AI
slug: kaneai-kb-api-testing-and-network-assertions/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Network Logs Assertions in KaneAI",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-api-testing-and-network-assertions/"
        }]
      })
    }}
></script>

# How to Assert Network Logs With KaneAI
***

Network logs assertions let you validate the network calls your application makes during a test session. KaneAI captures every request and response in the background, so you can verify backend behavior alongside frontend interactions, useful when the UI depends on API data or when you need to confirm the correct calls are made behind the scenes.

## Network Logs Assertions
***

Unlike making your own API calls, this validates what the app itself does behind the scenes, capturing every request and response during the session.

Network logs assertions work in **Desktop Web**, **Mobile Web**, and **Mobile App** sessions. Desktop Web captures automatically; for **Mobile Web** and **Mobile App**, first enable the **Capture Network Logs** toggle under **Advanced Settings → Session Settings**.

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/capture-network-logs.png').default} alt="Enable Capture Network Logs in Advanced Settings" className="doc_img img_center"/>

### How It Works
***

1. During a test session, **all network calls are recorded automatically** in the background. Open them with `/` → **Assert Network Logs**.

   <img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/hit-network-req.png').default} alt="Assert Network Logs option in the slash command menu" className="doc_img img_center"/>

2. Filter the recorded requests by **Status Code** (200, 404, 500, etc.) or **HTTP Method** (GET, POST, etc.). Requests are shown in JSON format.

   <img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-logs.png').default} alt="Recorded network requests filtered by status code and HTTP method" className="doc_img img_center"/>

3. Select the request, then choose which **request header**, **request body**, or **response body** keys to validate.

   <img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-log-headers.png').default} alt="Select request header keys for the assertion" className="doc_img img_center"/>

4. Click **Add Assertion** to add the **request** or **response** blocks. All chosen values are validated in a single step.

   <img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-log-response.png').default} alt="Add request and response blocks with the Add Assertion button" className="doc_img img_center"/>

5. Once added, the request is stored as a **variable**, and KaneAI asserts against it.

   <img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-assertion-block.png').default} alt="Network assertion stored as a variable" className="doc_img img_center"/>

### Accessing Network Data as Variables
***

Once you add a network assertion, the request data is stored as a **variable** in JSON format. You can reuse it later with `{{variable}}` syntax.

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/network-req-variable.png').default} alt="Reuse the stored request with double-curly-brace variable syntax" className="doc_img img_center"/>

Access nested values with dot notation (e.g., `{{network_req.response.data.userId}}` or `header.status`).

<img loading="lazy" src={require('../assets/images/kane-ai/features/network-assertions/child-variables.png').default} alt="Access nested JSON values with dot notation" className="doc_img img_center"/>

## Reuse an Assertion Across Tests
***

A network assertion can be included in a reusable **module**, so the same network-layer check runs in every test that imports it instead of being authored again each time. The assertion travels as a single step with all of its conditions, and it is re-evaluated against each importing test's own live traffic on every run.

:::note
Available on **Desktop Web**, **Mobile Web**, and **Mobile App** sessions in the Classic experience.
:::

See [Include a Network Assertion in a Module](/support/docs/kane-ai-modules/#include-a-network-assertion).

## Best Practices
***

Follow these practices for reliable tests:

| Practice | Details |
|---|---|
| **Use API calls for test data setup** | Faster and more reliable than creating data through the UI |
| **Store API tokens as secrets** | Never hardcode tokens; use `{{secret.api_token}}` |
| **Validate both UI and API** | A test that only checks UI can miss backend errors |
| **Use network assertions for passive validation** | Verify what the app is doing under the hood without making separate calls |
| **Filter network logs by status code** | Quickly find 4xx/5xx errors your app might be making silently |
| **Chain API response variables** | Use output from one API call as input to the next |
| **Test error scenarios via API** | Set up invalid data via API, then verify UI handles it gracefully |

## Next Steps
***

Continue with these guides:

- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [KaneAI Modules](/support/docs/kane-ai-modules/)
- [KaneAI Dynamic Content Waits and Page State](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)
- [KaneAI API Testing](/support/docs/kane-ai-api-testing/), make and validate your own API calls in a test.
