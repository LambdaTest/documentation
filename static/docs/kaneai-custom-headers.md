# Custom Headers in KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Custom headers inject additional HTTP header information into your test sessions, letting you send tokens, session IDs, content-type overrides, or other metadata with requests. You configure them in **Advanced Settings** for both **Desktop Web** and **Mobile Browser** tests.

## Configure for Desktop Web

Follow these steps to add custom headers to a Desktop Web test.

### Step 1: Create a Web Test

Navigate to the [KaneAI login page](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective) and click **Desktop Browser** to create a new web test.

**Result:** The web test configuration opens in **Advanced Settings**.

### Step 2: Add Custom Headers

Enable the **Custom Headers** toggle. For each row, enter a **Header Name** and **Header Value**. Click the **+** button to add more rows.

You can add up to 10 custom headers per session. If you provide a default header (for example, `Accept`), it overrides the browser's default value for that header.

**Result:** Your headers are queued to apply when the session starts.

### Step 3: Start the Test Session

Click **Start Testing** to launch the session.

**Result:** The configured headers apply to all HTTP requests made during the session, including navigation requests and API calls.

## Configure for Mobile Browser

Custom headers work the same way for Mobile Browser tests, with an added **Type** column to choose between **String** and **Secret** values.

### Step 1: Open Advanced Settings

Open **Advanced Settings** for your Mobile Browser test and enable the **Custom Headers** toggle.

**Result:** The custom headers section is ready for input.

### Step 2: Add Headers With a Type

For each header, enter the name and value, then select the value **Type**.

**Result:** The headers apply to the session when it starts.

## Header Value Types

Each custom header has a **Type** field that determines how the value is handled:

| Type | Description |
|---|---|
| **String** | A plain-text value that is sent as-is with the request (for example, `1234567890`). |
| **Secret** | A reference to an organization-level secret stored in KaneAI, using the `{{secrets.org.}}` syntax to keep sensitive values like tokens or API keys out of plain text. See [secrets](/support/docs/kane-ai-using-variables/#secrets) for details. |

### Example Headers

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

You can view the headers applied to a session in the following places:

- **During authoring:** Click **Advanced Settings** in the top navigation bar to view the headers applied to the current session. Secret values are shown in their `{{secrets.org.}}` format.

- **On the Test Summary page:** After the session completes, click **Advanced Settings** to expand the panel and view the headers used. You can also click **View details** in the test case sidebar to see the full list of advanced settings in a side drawer.

## Next Steps

Continue with these guides:

- [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/)
- [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/)
