# KaneAI - API Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This document provides a detailed guide to performing API testing using KaneAI. The API testing feature allows for comprehensive backend testing, complementing existing UI testing capabilities. Follow the instructions below to execute API tests using the PetStore API as an example.

## 1. Adding an API in a Web Test


Before you begin, make sure you have:


Before you add an API call, make sure you have the following.
- A KaneAI web test session open for authoring.
- The curl command for the endpoint you want to test.


## Add and Test an API Call


Follow these steps to add API calls to a test and validate their responses.

- **Step**: Paste your curl command into the designated area. KaneAI will populate all necessary details. You may choose to validate the API response or add it directly to the test steps.


In a KaneAI web test session, add an API through the slash command, then go to the **API** module. The PetStore API works well for a first walkthrough.



**Result:** The API module opens, ready for a curl command.

- **Step**: Click the 'validate' option to check the API response. A 200 response status indicates successful validation, automatically adding the API to your test steps. You can now proceed to submit multiple APIs simultaneously if needed.


In the API module, paste your curl command into the input area. KaneAI parses it and populates the method, URL, headers, and body automatically. You can then validate the response or add the call directly to your test steps.



**Result:** The API request fields are filled in from the curl command.

- **Step**: If the API returns a 400 Bad Request or another error, it will not be added automatically. Review the response and add the API manually if needed.


Click **Validate** to send the request and check the response. A 200 status confirms the call succeeded and adds it to your test steps automatically.



**Result:** A successful call becomes a test step. You can now add more APIs.

- **Step**: Add multiple APIs by clicking the plus icon and selecting each API, or paste multiple curl commands to add them automatically to the test steps.


KaneAI does not auto-add a call that returns an error. If the API returns a 400 Bad Request or another non-200 status, review the response body and add the call manually when you need to test the error path.



**Result:** The error-returning call is added to your test steps for negative testing.

- **Step**: Add APIs using different HTTP methods, such as a PUT or DELETE command. Validate each API as before, and if successful, they will be automatically included in the test steps.


To batch several calls, click the plus icon and select each API, or paste multiple curl commands to add them together. This suits flows that run several API calls in succession.



**Result:** All selected or pasted calls are added to the test steps in one action.

- **Step**: Click to execute all added APIs in one go and review the response details for insights into API performance and data returned.


KaneAI supports GET, POST, PUT, and DELETE. Add a call with any of these methods, validate it as before, and a successful call is included in your test steps.





**Result:** Calls using different methods are validated and added to the flow.

### Step 7: Execute and Review the Steps


Once all APIs are added, click to execute them together. KaneAI reports the method used, response status, and execution time for each call.



**Result:** Every call runs and returns its response details, so you can review performance and data in one place.


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

### API Data in UI Steps


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


These scenarios combine API calls with UI steps in a single test.

### Scenario: Create User via API


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


```
-- Make an API call --
-- GET /api/users with Authorization header --

-- Assert response headers --
assert {{api_users.headers.content-type}} contains "application/json"
assert {{api_users.headers.x-ratelimit-remaining}} is not "0"
```

## API With Database Queries


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

## Next Steps


Extend your API tests with assertions and data-driven runs.

- Assert on response fields and reuse them with [KaneAI Using Variables](/support/docs/kane-ai-using-variables/).
- Run the same calls against many inputs with [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).
- Combine API and UI checks against live data using [KaneAI Database](/support/docs/kaneai-database/).
