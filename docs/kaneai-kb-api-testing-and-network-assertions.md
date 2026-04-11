---
id: kaneai-kb-api-testing-and-network-assertions
title: API Testing & Network Assertions
hide_title: false
sidebar_label: API Testing & Network Assertions
description: Combine API testing with UI testing in KaneAI — make API calls, assert network responses, validate backend behavior alongside frontend interactions
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai api testing
  - kaneai network assertions
  - kaneai curl
  - api ui testing
url: https://www.testmuai.com/support/docs/kaneai-kb-api-testing-and-network-assertions
site_name: TestMu AI
slug: kaneai-kb-api-testing-and-network-assertions/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "API Testing & Network Assertions",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-api-testing-and-network-assertions"
        }]
      })
    }}
></script>

KaneAI isn't just a UI testing tool — it also supports API testing and network-level assertions, allowing you to validate both frontend behavior and backend responses in a single test flow. This is critical for scenarios where the UI depends on API data, or where you need to verify that the correct API calls are being made behind the scenes.

## API Testing in KaneAI

### Adding an API Call

You can add API calls to your test using the `/` (slash) command:

1. Type `/` in the input field
2. Select **API** from the options
3. Paste your **curl command** — KaneAI will auto-populate all request details (URL, method, headers, body)
4. Click **Validate** to execute the API and see the response
5. If the response is successful (2xx), click **Add to Test** to include it as a test step

### Supported HTTP Methods

KaneAI supports all standard HTTP methods:

| Method | Use Case |
|---|---|
| **GET** | Retrieve data (fetch user, list products) |
| **POST** | Create data (register user, create order) |
| **PUT** | Update data (update profile, modify settings) |
| **PATCH** | Partial update (change email, update single field) |
| **DELETE** | Remove data (delete user, cancel order) |

### Example: GET Request

```bash
curl -X GET "https://api.example.com/users/123" \
  -H "Authorization: Bearer {{secret.api_token}}" \
  -H "Content-Type: application/json"
```

### Example: POST Request

```bash
curl -X POST "https://api.example.com/users" \
  -H "Authorization: Bearer {{secret.api_token}}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin"
  }'
```

## API Response Variables

After a successful API call, the response is automatically stored as a **JSON variable**. You can reference it in subsequent steps using `{{variable_name}}` syntax.

### Accessing Response Data

```
-- After making a GET /users/123 API call --
-- Response stored as {{api_users}} --

assert {{api_users.response.name}} is "John Doe"
assert {{api_users.response.email}} is "john@example.com"
assert {{api_users.response.status}} is "active"
```

### Accessing Nested Data

Use dot notation to reach nested properties:

```
assert {{api_users.response.address.city}} is "New York"
assert {{api_users.response.orders[0].total}} is "150.00"
```

### Using API Data in UI Steps

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

## Network Logs Assertions

The **Network Logs Assertions** feature lets you validate actual network calls that your application makes during a test session. This is different from making your own API calls — it captures what the app itself is doing behind the scenes.

### How It Works

1. During a test session, **all network calls are recorded automatically** in the background
2. Use `/` → **Assert Network Logs** to view them
3. Filter by **Status Code** (200, 404, 500, etc.) or **HTTP Method** (GET, POST, etc.)
4. Select the specific request you want to assert on
5. Choose which **request headers**, **request body**, or **response body** keys to validate
6. Click **Add Assertion** — all chosen values are validated in a single step

### Accessing Network Data as Variables

Once you add a network assertion, the request data is stored as a **variable** in JSON format. You can reuse it later with `{{variable}}` syntax and access nested values with dot notation (e.g., `{{network_req.response.data.userId}}`).

:::note
Network log assertions are currently only supported on desktop web authoring in KaneAI. You can find more details in [Network Logs Assertion](/support/docs/kane-ai-network-assertions/) guide.
:::

## Real-World API + UI Scenarios

### Scenario: Create User via API, Verify in UI

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

### Scenario: Verify UI Action Triggers Correct API Call

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

### Scenario: E-Commerce Checkout with Backend Validation

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

### Scenario: Test API Error Handling in UI

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

### Scenario: API-Driven Test Data Setup

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

### Scenario: Validate API Response Headers

```
-- Make an API call --
-- GET /api/users with Authorization header --

-- Assert response headers --
assert {{api_users.headers.content-type}} contains "application/json"
assert {{api_users.headers.x-ratelimit-remaining}} is not "0"
```

## Combining API Testing with Database Queries

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

For database testing details, see [Database Connections](/support/docs/kaneai-database).

## Best Practices

| Practice | Details |
|---|---|
| **Use API calls for test data setup** | Faster and more reliable than creating data through the UI |
| **Store API tokens as secrets** | Never hardcode tokens; use `{{secret.api_token}}` |
| **Validate both UI and API** | A test that only checks UI can miss backend errors |
| **Use network assertions for passive validation** | Verify what the app is doing under the hood without making separate calls |
| **Filter network logs by status code** | Quickly find 4xx/5xx errors your app might be making silently |
| **Chain API response variables** | Use output from one API call as input to the next |
| **Test error scenarios via API** | Set up invalid data via API, then verify UI handles it gracefully |
