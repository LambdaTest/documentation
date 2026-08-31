# API Testing & Network Assertions

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI isn't just a UI testing tool. It also supports API testing and network-level assertions, allowing you to validate both frontend behavior and backend responses in a single test flow. This is critical for scenarios where the UI depends on API data, or where you need to verify that the correct API calls are being made behind the scenes.

## API Testing in KaneAI

### Adding an API Call

You can add API calls to your test using the `/` (slash) command:

1. Type `/` in the input field
2. Select **API** from the options
3. Paste your **curl command**. KaneAI will auto-populate all request details (URL, method, headers, body)
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


Unlike making your own API calls, this validates what the app itself does behind the scenes, capturing every request and response during the session.

Network logs assertions work in **Desktop Web**, **Mobile Web**, and **Mobile App** sessions. Desktop Web captures automatically; for **Mobile Web** and **Mobile App**, first enable the **Capture Network Logs** toggle under **Advanced Settings → Session Settings**.



### How It Works


1. During a test session, **all network calls are recorded automatically** in the background. Open them with `/` → **Assert Network Logs**.



2. Filter the recorded requests by **Status Code** (200, 404, 500, etc.) or **HTTP Method** (GET, POST, etc.). Requests are shown in JSON format.



3. Select the request, then choose which **request header**, **request body**, or **response body** keys to validate.



4. Click **Add Assertion** to add the **request** or **response** blocks. All chosen values are validated in a single step.



5. Once added, the request is stored as a **variable**, and KaneAI asserts against it.



### Accessing Network Data as Variables


Once you add a network assertion, the request data is stored as a **variable** in JSON format. You can reuse it later with `{{variable}}` syntax.



Access nested values with dot notation (e.g., `{{network_req.response.data.userId}}` or `header.status`).



## Reuse an Assertion Across Tests


A network assertion can be included in a reusable **module**, so the same network-layer check runs in every test that imports it instead of being authored again each time. The assertion travels as a single step with all of its conditions, and it is re-evaluated against each importing test's own live traffic on every run.


Available on **Desktop Web**, **Mobile Web**, and **Mobile App** sessions in the Classic experience.


See [Include a Network Assertion in a Module](/support/docs/kane-ai-modules/#include-a-network-assertion).

## Best Practices


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


Continue with these guides:

- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Using Variables](/support/docs/kane-ai-using-variables/)
- [KaneAI Modules](/support/docs/kane-ai-modules/)
- [KaneAI Dynamic Content Waits and Page State](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)
- [KaneAI API Testing](/support/docs/kane-ai-api-testing/), make and validate your own API calls in a test.
