# How to Test Authentication With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI tests authentication flows in natural language, including login, multi-factor authentication (MFA/2FA), TOTP, session handling, and authentication edge cases. It shows the patterns for each, plus how to store credentials securely and reuse a login across tests.

## Prerequisites



Before you begin, make sure you have an active KaneAI authoring session (Web or Mobile App).


## Basic Login Flows


These patterns cover the most common username and password login scenarios.

### Standard Username/Password Login


```
go to https://app.example.com/login
type "admin@example.com" in the email input field
type "SecurePassword123!" in the password field
click on the "Sign In" button
wait for 5 seconds
assert the current URL contains "/dashboard"
assert "Welcome, Admin" is visible
```

### Login With "Remember Me"


```
type "admin@example.com" in the email field
type "SecurePassword123!" in the password field
check the "Remember me" checkbox
click on the "Sign In" button
wait for 5 seconds
assert the current URL contains "/dashboard"
```

### Reusable Login Module


If most of your tests start with a login, create a [KaneAI Modules](/support/docs/kane-ai-modules/) to avoid repeating the login steps in every test:

1. Author the login steps in a test
2. Pause the test
3. Select the login steps
4. Click **Create Module** → Name it "Login Flow"
5. In future tests, use `/` → Select your "Login Flow" module

```
-- In any new test: --
-- Use / command → Add Module → "Login Flow" --
-- The module executes all login steps automatically --
assert "Welcome" is visible
-- Continue with your test-specific steps --
```


Use **environment variables** for credentials so the same login module works across staging, QA, and production environments. Set `{{env.login_email}}` and `{{env.login_password}}` per environment.


## Using Variables for Credentials


Store credentials in variables or secrets instead of hardcoding them in test steps.

### Environment Variables (Recommended)


Create environment-specific variables to test login across different environments:

```
type {{env.login_email}} in the email field
type {{env.login_password}} in the password field
click "Sign In"
```

Set different values for each environment:
- **Staging**: `login_email` = `test@staging.example.com`
- **Production**: `login_email` = `readonly@example.com`


For more on environment variables, see [using variables](/support/docs/kane-ai-using-variables/#environments).


### Secrets (For Sensitive Data)


Store passwords securely using [secrets](/support/docs/kane-ai-using-variables/#secrets) (backed by HashiCorp Vault):

1. Go to [KaneAI Variables](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables)
2. Create a secret variable for the password
3. Reference it in your test: `type {{secret.admin_password}} in the password field`

Secrets are:
- Encrypted at rest and in transit
- Never exposed in logs or generated code
- Not visible in the test step output

## Multi-factor Authentication (TOTP)


For MFA-protected logins, KaneAI generates time-based one-time passwords (TOTP) natively from the shared secret key, with no external scripts or servers. The whole login journey stays inside KaneAI, with identical behavior in Replay, generated code, and CI. TOTP variables are **global by default**: create one once and reuse it across all test cases and modules in your organization.

### How TOTP Works


1. **Create a global TOTP variable** from the **Variables > TOTP Variables** page or via the `/totp` slash command during authoring.
2. Give the variable a name (for example, `sso_totp`) and supply the Base32 secret key.
3. At runtime KaneAI calculates the correct six-digit code every 30 seconds.
4. Reference the code in any test step using `{{totp.variable_name}}`.



### TOTP Prerequisites


- A TOTP-compatible login flow (for example, Google Authenticator, Okta Verify, Microsoft Authenticator).
- The **Base32-encoded secret key** for the account you want KaneAI to log in as.

### Create and Use a TOTP Variable


Create a global TOTP variable, then reference it in your test steps.

**Create a global TOTP variable, from the Variables page:**

1. Open **Test Manager** and navigate to **Variables > TOTP Variables**.
2. Click **+ Create new**.
3. Enter a **Variable Name** (for example, `sso_totp`).
4. Enter the **TOTP Secret Key**: paste the Base32 secret directly or reference an org secret using `{{` syntax.
5. Click **Create TOTP Variable**.



**Or create it from an authoring session:**

1. Start a KaneAI authoring session and press **/**.
2. Choose **Add TOTP Authentication Key**.
3. Provide a **Variable Name** and the **Base32 secret key**.
4. Click **Save**. The variable is created globally and is immediately available across all test cases and modules.

**Use the variable in a test:**

1. Navigate to the OTP input field in your application.
2. Reference the variable in your instruction, for example, "Enter `{{totp.sso_totp}}` in verify field".
3. KaneAI generates and inserts the current six-digit code automatically.

### Migrating Existing Local TOTP Variables



Test cases created before 10 March 2026 may contain **local** TOTP variables scoped to a single session. These continue to work in existing test runs, but when you open such a test case in the KaneAI playground for editing, you are prompted to convert the local variables to global.


When you open a test case that contains local TOTP variables, KaneAI shows a **Convert Local TOTP to Global** dialog:

1. Review the listed local variables.
2. Assign a **TOTP variable name** for each one (this becomes the global identifier).
3. Optionally reference an existing global TOTP variable using `{{` syntax instead of creating a new one.
4. Click **Convert All**.



**Important**
- **Existing test runs are not affected.** Scheduled jobs, CI pipelines, and previously generated code keep working.
- Conversion is triggered only when you **edit the test case in the KaneAI playground**. Until then, the test case uses its original local variables.
- After conversion, the test case uses `{{totp.variable_name}}` syntax and the variable is available across all test cases and modules.


### TOTP FAQ


- **Are TOTP secrets stored securely?** Yes. Secrets are encrypted, stored in Vault, and never exposed in logs or generated code.
- **Does TOTP work on mobile tests?** Yes. The `{{totp.variable_name}}` syntax works in both Web and Mobile test steps.
- **Can I reuse a TOTP variable across test cases?** Yes. Because TOTP variables are global, any test case or module can reference the same variable by name.
- **What about existing tests using the old `{{totp}}` syntax?** Existing test runs execute unchanged. When you open the test case for editing, you are prompted to convert local variables to global and adopt the `{{totp.variable_name}}` syntax.

## SSO (Single Sign-On) Flows


SSO flows typically redirect to an identity provider (Okta, Azure AD, Google Workspace) and then back to the application.


KaneAI does not currently support testing SSO flows. SSO involves cross-domain redirects and third-party identity provider pages, which are outside the scope of KaneAI's natural language automation at this time.


### Recommended Alternatives


- **Bypass SSO in test environments:** Configure your application to allow direct login (username/password) in staging/test environments, bypassing the SSO redirect entirely.
- **Use API-based authentication:** Obtain a session token or auth cookie via API calls before launching KaneAI, and inject it into the browser session.
- **Pre-authenticated sessions:** Work with your identity provider to set up test accounts with persistent sessions that don't require interactive login.

## Login Validation & Edge Cases


These patterns test how your application responds to invalid or incomplete login attempts.

### Invalid Credentials


```
type "admin@example.com" in the email field
type "wrong_password" in the password field
click "Sign In"
wait for 2 seconds
assert "Invalid email or password" error message is visible
assert the current URL still contains "/login"
```

### Empty Field Validation


```
click "Sign In" without entering any credentials
assert "Email is required" error is visible
assert "Password is required" error is visible
```

### Account Lockout After Failed Attempts


```
-- Attempt 1 --
type "admin@example.com" in the email field
type "wrong1" in the password field
click "Sign In"
wait for 2 seconds

-- Attempt 2 --
type "wrong2" in the password field
click "Sign In"
wait for 2 seconds

-- Attempt 3 --
type "wrong3" in the password field
click "Sign In"
wait for 2 seconds

assert "Account locked" message is visible
```

## Session Management Testing


These patterns verify how your application maintains and clears user sessions.

### Session Persistence After Page Refresh


```
-- Login first --
type "admin@example.com" in the email field
type "password123" in the password field
click "Sign In"
wait for 5 seconds
assert "Dashboard" is visible

-- Refresh the page --
refresh the page
wait for 3 seconds

-- Should still be logged in --
assert "Dashboard" is visible
assert "Welcome, Admin" is visible
```

### Logout Flow


```
click on the user avatar in the top right corner
click on "Sign Out"
wait for 3 seconds
assert the current URL contains "/login"

-- Verify session is cleared --
go to https://app.example.com/dashboard
wait for 3 seconds
assert the current URL contains "/login"
```

### Testing Session Timeout


For applications with session timeouts, combine explicit waits with assertions:

```
-- Login --
-- ... login steps ... --
assert "Dashboard" is visible

-- Wait for session timeout (if timeout is 60 seconds in test env) --
wait for 65 seconds

-- Try to navigate --
click on "Reports" in the sidebar
wait for 3 seconds
assert "Session expired" is visible
```


For session timeout testing, consider setting a short timeout in your test environment (e.g., 60 seconds) rather than waiting for production-length timeouts (30 minutes).


## Custom Headers for Authentication


For applications that require auth tokens in headers, use [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/):

1. In session settings, add custom headers
2. Example: `Authorization: Bearer `
3. All requests from the browser will include this header

This is useful for:
- Bypassing login in test environments
- Testing API-authenticated applications
- Injecting test-user tokens

## Best Practices for Authentication Testing


Follow these practices for reliable tests:

| Practice | Details |
|---|---|
| **Use environment variables for credentials** | Never hardcode passwords in test steps |
| **Store passwords as secrets** | Use KaneAI Secrets (HashiCorp Vault) for encrypted storage |
| **Create a login module** | Avoid repeating login steps in every test |
| **Test negative cases** | Always test invalid credentials, empty fields, and lockout |
| **Use TOTP smart variables for MFA** | Don't use hardcoded OTPs that expire |
| **Add waits after SSO redirects** | SSO flows involve multiple page loads |
| **Test session persistence** | Refresh the page after login to verify session |
| **Test logout properly** | Verify that navigating to protected pages redirects to login |

## Next Steps


Continue with these guides:

- [KaneAI Assertions and Validation](/support/docs/kaneai-kb-assertions-and-validation/)
- [KaneAI Dynamic Content Waits and Page State](/support/docs/kaneai-kb-dynamic-content-waits-and-page-state/)
- [KaneAI API Testing](/support/docs/kane-ai-api-testing/)
- [KaneAI Database](/support/docs/kaneai-database/)
