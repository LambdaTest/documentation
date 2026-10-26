# Basic Authentication for Safari Web Automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## Introduction

Basic Authentication is a method for an HTTP user agent to provide a username and password when making a request. In basic HTTP authentication, a request contains a header field in the form of `Authorization: Basic `, where credentials is the **Base64** encoding of ID and password joined by a single colon `:`.

To provide support for Basic Authentication in Safari during Web Automation, we have introduced a new lambda hook in our `iOS` Real Device (RD) web sessions.

1. This hook is not compatible with any app-based sessions.
2. The capability `autoAcceptAlerts` must be set to `false`.

## How to Use

### With Hooks (for Selenium)

Here is an example of how to use the Basic Authentication hook in Python:

* It is important to note that all three parameters (username, password, URL) are mandatory and must be passed to the script.
* The HTTP Basic Auth hook is not supported for Playwright iOS. To handle Basic Authentication in Playwright, follow these [steps](/support/docs/basic-authentication-for-web-automation/#for-playwright).

```python
data = {
  "username": "admin",
  "password": "admin",
  "url": "https://the-internet.herokuapp.com/basic_auth",
}
driver.execute_script("lambda-ios-set-basic-auth", data)
```

### For Playwright

On iOS real devices, standard Playwright approaches such as `httpCredentials` may not work because Safari/WebKit can block or fail to resolve the authentication prompt. Instead, pass the credentials as an `Authorization` header using the `customHeaders` capability which will be handled by our proprietary implementation.

**Step 1:** Combine your username and password in the format `username:password` and Base64-encode the combined string using below command:

```bash
echo -n 'username:password' | base64
```

For example, `username:password` becomes `dXNlcm5hbWU...`

**Step 2:** To enable Basic authentication, add a customHeaders capability to your Playwright capabilities and set the Authorization header to `Basic `.

```json
"customHeaders": {
  "Authorization": "Basic dXNlcm5hbWU..."
}
```

**Step 3:** Run your test. The `Authorization` header is sent with each request, so the Basic Auth–protected URL loads without an authentication prompt.

### HTTP Basic Authentication in Safari - Real Device (Using Tunnel)

Basic Authentication is natively supported on Google Chrome. For manual testing on Safari, use the following workaround with the TestMu AI Tunnel.

**Step 1:** Download the tunnel binary from the TestMu AI dashboard. For detailed instructions, refer to the [TestMu AI Tunnel](/support/docs/testmu-tunnel/) documentation.

**Step 2:** After installing the tunnel binary, start the tunnel using the following command:

```bash
LT --user <username> --key <access_key> -b https://admin:admin@the-internet.herokuapp.com/basic_auth --mitm
```

* Replace `` and `` with your TestMu AI credentials.
* Replace `admin:admin` with your website's Basic Authentication username and password, and replace the URL with your website's URL.

**Step 3:** Once the tunnel is active, navigate to the TestMu AI Real Device → Browser Testing dashboard and enter your website URL in the URL field.

**Step 4:** Launch a Safari browser session.

The tunnel handles Basic Authentication automatically, so you are logged in and taken directly to your webpage.

## Limitations

Please note, this hook is designed to be used exclusively with Safari on iOS Real Device (RD) web sessions and is not compatible with Android sessions or any app-based sessions.
