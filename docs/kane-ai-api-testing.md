---
id: kane-ai-api-testing
title: How to Test APIs With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: API Testing
description: Add and validate backend API calls inside a KaneAI test and reference the responses in later UI steps.
keywords:
  - testmu ai automation
  - testmu ai kaneai
url: https://www.testmuai.com/support/docs/kane-ai-api-testing/
site_name: TestMu AI
slug: kane-ai-api-testing/
canonical: https://www.testmuai.com/support/docs/kane-ai-api-testing/
---

import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "How to Test APIs in KaneAI",
          "item": `${BRAND_URL}/support/docs/kane-ai-api-testing/`
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
      "@id": "https://www.testmuai.com/support/docs/kane-ai-api-testing/"
    },
    "headline": "How to Test APIs With KaneAI",
    "description": "Add and validate backend API calls inside a KaneAI test and reference the responses in later UI steps.",
    "url": "https://www.testmuai.com/support/docs/kane-ai-api-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai"
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
    "dateModified": "2026-10-24T18:00:00+05:30"
  }) }}
/>

# How to Test APIs With KaneAI
***

Test backend endpoints in KaneAI using natural language, alongside your UI steps in the same flow. Paste a curl command, validate the response, and add the call as a test step. The examples below use the PetStore API, a common sample endpoint.

## Prerequisites
***

Before you begin, make sure you have:

:::note
Before you add an API call, make sure you have the following.
- A KaneAI web test session open for authoring.
- The curl command for the endpoint you want to test.
:::

## Add and Test an API Call
***

Follow these steps to add API calls to a test and validate their responses.

### Step 1: Add an API to the Test
***

In a KaneAI web test session, add an API through the slash command, then go to the **API** module. The PetStore API works well for a first walkthrough.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image1.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** The API module opens, ready for a curl command.

### Step 2: Paste a Curl Command
***

In the API module, paste your curl command into the input area. KaneAI parses it and populates the method, URL, headers, and body automatically. You can then validate the response or add the call directly to your test steps.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image2.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** The API request fields are filled in from the curl command.

### Step 3: Validate the API Response
***

Click **Validate** to send the request and check the response. A 200 status confirms the call succeeded and adds it to your test steps automatically.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image3.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** A successful call becomes a test step. You can now add more APIs.

### Step 4: Add Non-Success APIs Manually
***

KaneAI does not auto-add a call that returns an error. If the API returns a 400 Bad Request or another non-200 status, review the response body and add the call manually when you need to test the error path.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image8.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** The error-returning call is added to your test steps for negative testing.

### Step 5: Add Multiple APIs at Once
***

To batch several calls, click the plus icon and select each API, or paste multiple curl commands to add them together. This suits flows that run several API calls in succession.

  <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image10.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** All selected or pasted calls are added to the test steps in one action.

### Step 6: Use Different HTTP Methods
***

KaneAI supports GET, POST, PUT, and DELETE. Add a call with any of these methods, validate it as before, and a successful call is included in your test steps.

    <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image6.jpg').default} alt="KaneAI API testing" className="doc_img"/>

    <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image9.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** Calls using different methods are validated and added to the flow.

### Step 7: Execute and Review the Steps
***

Once all APIs are added, click to execute them together. KaneAI reports the method used, response status, and execution time for each call.

    <img loading="lazy" src={require('../assets/images/kane-ai/knowledge-base/api-testing/image13.jpg').default} alt="KaneAI API testing" className="doc_img"/>

**Result:** Every call runs and returns its response details, so you can review performance and data in one place.


## Inspect API Requests in the Console
***

The Console shows the exact request KaneAI sent and how the call went. It sits in the response section of the API modal, alongside Body, Cookies, and Headers, and is available after you validate an API or reopen an API step from the test steps. Use it to debug an API step that returns an unexpected response, or one that returns no response at all, because the Console still shows what was sent.

<img loading="lazy" src={require('../assets/images/kane-ai/features/api-console/console-overview.png').default} alt="Console tab in the KaneAI API modal showing the request sent, response received, timing, and network sections" className="doc_img"/>

### Pretty and Raw Views
***

The Console opens in the **Pretty** view, which groups the details into the collapsible sections described below. Switch to **Raw** to see the request and response as plain HTTP text, with the request line, headers, and body exactly as they went over the wire.

### Request Sent
***

This section shows the request after KaneAI has resolved every variable:

- **Method and URL**: The HTTP method and the fully resolved URL the request went to.
- **Values used**: Each `{{variable}}` in the request, the value it resolved to, and where that value came from, such as a variable, parameter, secret, or environment. A variable that had no value is flagged as empty, which helps you spot a missing environment or an unset variable.
- **Headers**: Every header sent with the request and its source: typed by you in the Headers tab, generated from the Authorization tab, or added by KaneAI. KaneAI adds standard headers such as `Host`, `User-Agent`, `Accept`, `Accept-Encoding`, `Connection`, and `Content-Length`.
- **Body**: The request body that was sent, if the request had one.

### Response Received
***

This section shows the response the API returned: the status code, the response headers, and the response body along with its format and size.

### Timing
***

The Console breaks the total request time into phases: preparing the request, DNS lookup, connecting, establishing the secure (TLS) connection, waiting for the first byte, and downloading the response. The total matches the time shown on the API step.

- If the request failed, the Console shows the phase where it stopped, so you can tell a DNS failure from a connection or TLS failure.
- If KaneAI reused an existing connection, the connection phases are marked as skipped.

### Network
***

The Console shows how the request traveled:

- The IP address and region the request was sent from.
- The server address the request reached.
- The route, such as a direct connection, a tunnel, or a proxy.
- Whether a new connection was opened or an existing one was reused.
- TLS and certificate details for HTTPS requests.

If the API only accepts requests from known IP addresses, share the sent-from address with the team that manages the API so they can add it to their allowlist.

### Copy cURL and Download HAR
***

- **Copy cURL**: Copy the resolved request as a cURL command to rerun it in a terminal or share it with your team outside KaneAI.
- **Download HAR**: Download the API call as a HAR (HTTP Archive) file. Open it in your browser's developer tools or any HAR viewer, or attach it to a bug report.

## API Response Variables
***

For importing a collection or specification instead of authoring requests individually, see [Bulk API Import](/support/docs/kaneai-bulk-api-import/). For JSONPath checks and JSON Schema validation, see [API Response Assertions](/support/docs/kaneai-api-response-assertions/).

After a successful API call, the response is automatically stored as a **JSON variable**. You can reference it in subsequent steps using `{{variable_name}}` syntax.

### Accessing Response Data
***

```
-- After making a GET /users/123 API call --
-- Response stored as {{api_users}} --

assert {{api_users.response.name}} is "John Doe"
assert {{api_users.response.email}} is "john@example.com"
assert {{api_users.response.status}} is "active"
```

### Accessing Nested Data
***

Use dot notation to reach nested properties:

```
assert {{api_users.response.address.city}} is "New York"
assert {{api_users.response.orders[0].total}} is "150.00"
```

### API Data in UI Steps
***

Combine API data with UI interactions:

```
-- Fetch user data from API --
-- (stored as {{api_user}}) --

-- Navigate to UI and verify data matches --
go to https://app.example.com/users/123
wait for 3 seconds
assert the name field shows {{api_user.response.name}}
assert the email field shows {{api_user.response.email}}
```

## API + UI Scenarios
***

These scenarios combine API calls with UI steps in a single test.

### Scenario: Create User via API
***

Use the API to set up test data, then verify it appears correctly in the UI.

```
-- Step 1: Create user via API --
-- (Use / → API → Paste curl for POST /api/users) --
-- Response stored as {{new_user}} --

-- Step 2: Verify in UI --
go to https://app.example.com/admin/users
wait for 3 seconds
type {{new_user.response.email}} in the search field
wait for 2 seconds
assert {{new_user.response.name}} is visible in the users table
```

### Scenario: Verify Triggered API Call
***

Test that clicking "Add to Cart" on the UI actually sends the right API call.

```
-- Browse to product page --
go to https://shop.example.com/products/laptop
click "Add to Cart"
wait for 3 seconds

-- Assert the network call was correct --
-- (Use / → Assert Network Logs → Find the POST /cart/items call) --
-- Assert the request body contains the correct product ID --
-- Assert the response status is 200 --
assert "Added to cart" success message is visible
```

### Scenario: Checkout Backend Validation
***

```
-- Step 1: Add items to cart via UI --
go to https://shop.example.com
click "Add to Cart" on "Wireless Mouse"
click "Add to Cart" on "USB Cable"

-- Step 2: Proceed to checkout --
click on "Cart" icon
click on "Checkout"

-- Step 3: Verify order total via API --
-- (Use / → Assert Network Logs → Find the POST /api/orders call) --
-- Assert the response total matches what the UI shows --
assert the order total on the page matches {{order_api.response.total}}
```

### Scenario: API Error Handling
***

Verify that the UI handles API errors gracefully.

```
-- Navigate to a page that fetches data --
go to https://app.example.com/reports/nonexistent
wait for 5 seconds

-- Assert Network Logs shows a 404 --
-- (Use / → Assert Network Logs → Find the GET /api/reports/nonexistent call) --
-- Assert status code is 404 --

-- Verify UI handles the error --
assert "Report not found" message is visible
assert no unhandled error or stack trace is shown on the page
```

### Scenario: API Test Data Setup
***

Before running a UI test, use APIs to set up the exact state you need.

```
-- Create test product via API --
-- POST /api/products with name "Test Product", price 29.99 --
-- Response stored as {{test_product}} --

-- Create test user via API --
-- POST /api/users with name "Test Buyer" --
-- Response stored as {{test_user}} --

-- Now run the UI test --
go to https://shop.example.com/login
type {{test_user.response.email}} in the email field
type "password123" in the password field
click "Sign In"
wait for 3 seconds

-- Search for the product we created --
type {{test_product.response.name}} in the search field and press Enter
wait for 3 seconds
assert {{test_product.response.name}} is visible in the results
click "Add to Cart"
assert cart count shows "1"
```

### Scenario: Validate Response Headers
***

```
-- Make an API call --
-- GET /api/users with Authorization header --

-- Assert response headers --
assert {{api_users.headers.content-type}} contains "application/json"
assert {{api_users.headers.x-ratelimit-remaining}} is not "0"
```

## API With Database Queries
***

KaneAI also supports database queries. You can combine API calls, UI interactions, and database validation in a single test:

```
-- Step 1: Create order via UI --
-- ... add items and checkout ... --

-- Step 2: Verify API response --
-- Assert the POST /orders response contains order ID --

-- Step 3: Verify in database --
-- (Use / → Database Query) --
-- Query: SELECT * FROM orders WHERE id = {{order_api.response.id}} --
-- Assert the database record matches the API response --
```

For database testing details, see database connections.

## Import Collections and Validate Responses

For file-based import and response validation, use these guides:

- [Bulk API Import](/support/docs/kaneai-bulk-api-import/): Import Postman collections or OpenAPI specifications, map variables from optional environment files, and add header assertions to the imported APIs.
- [API Response Assertions](/support/docs/kaneai-api-response-assertions/): Check response values with JSONPath or validate a response against a JSON Schema.

To validate network requests made by the application during UI interactions, see [Network Logs Assertions](/support/docs/kaneai-kb-api-testing-and-network-assertions/#network-logs-assertions).

## Next Steps
***

Extend your API tests with assertions and data-driven runs.

- Assert on response fields and reuse them with [KaneAI Using Variables](/support/docs/kane-ai-using-variables/).
- Run the same calls against many inputs with [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).
- Combine API and UI checks against live data using [KaneAI Database](/support/docs/kaneai-database/).
