---
id: kaneai-kb-authentication-and-session-management
title: Authentication & Session Management
hide_title: false
sidebar_label: Authentication & Session Management
description: Test login flows, TOTP/MFA, SSO, session persistence, and secure authentication patterns in KaneAI
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai authentication
  - kaneai TOTP
  - kaneai MFA
  - kaneai login testing
  - kaneai session
url: https://www.testmuai.com/support/docs/kaneai-kb-authentication-and-session-management/
site_name: TestMu AI
slug: kaneai-kb-authentication-and-session-management/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Authentication & Session Management",
          "item": "https://www.testmuai.com/support/docs/kaneai-kb-authentication-and-session-management/"
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-kb-authentication-and-session-management/"
    },
    "headline": "Authentication & Session Management",
    "description": "Test login flows, TOTP/MFA, SSO, session persistence, and secure authentication patterns in KaneAI",
    "url": "https://www.testmuai.com/support/docs/kaneai-kb-authentication-and-session-management/",
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
      "testmu ai kaneai",
      "kaneai authentication"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Standard Username/Password Login",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "go to https://app.example.com/login\ntype \"admin@example.com\" in the email input field\ntype \"SecurePassword123!\" in the password field\nclick on the \"Sign In\" button\nwait for 5 seconds\nassert the current URL contains \"/dashboard\"\nassert \"Welcome, Admin\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Login with \"Remember Me\"",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "type \"admin@example.com\" in the email field\ntype \"SecurePassword123!\" in the password field\ncheck the \"Remember me\" checkbox\nclick on the \"Sign In\" button\nwait for 5 seconds\nassert the current URL contains \"/dashboard\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If most of your tests start with a login, create a Module to avoid repeating the login steps in every test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-- In any new test: --\n-- Use / command \u2192 Add Module \u2192 \"Login Flow\" --\n-- The module executes all login steps automatically --\nassert \"Welcome\" is visible\n-- Continue with your test-specific steps --"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create environment-specific variables to test login across different environments",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "type {{env.login_email}} in the email field\ntype {{env.login_password}} in the password field\nclick \"Sign In\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step-by-Step: Testing a TOTP Login Flow",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-- Login with username/password first --\ntype \"admin@example.com\" in the email field\ntype {{secret.admin_password}} in the password field\nclick \"Sign In\"\n\n-- MFA screen appears --\nwait for 3 seconds\nenter {{totp}} in the verification code field\nclick \"Verify\"\n\n-- Authenticated --\nwait for 5 seconds\nassert the current URL contains \"/dashboard\"\nassert \"Welcome, Admin\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TOTP smart variables work identically on mobile tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "type {{env.login_email}} in the email field\ntype {{secret.login_password}} in the password field\nclick \"Login\"\nwait for 3 seconds\nenter {{totp}} in the OTP field\nclick \"Verify\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Invalid Credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "type \"admin@example.com\" in the email field\ntype \"wrong_password\" in the password field\nclick \"Sign In\"\nwait for 2 seconds\nassert \"Invalid email or password\" error message is visible\nassert the current URL still contains \"/login\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Empty Field Validation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click \"Sign In\" without entering any credentials\nassert \"Email is required\" error is visible\nassert \"Password is required\" error is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Account Lockout After Failed Attempts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-- Attempt 1 --\ntype \"admin@example.com\" in the email field\ntype \"wrong1\" in the password field\nclick \"Sign In\"\nwait for 2 seconds\n\n-- Attempt 2 --\ntype \"wrong2\" in the password field\nclick \"Sign In\"\nwait for 2 seconds\n\n-- Attempt 3 --\ntype \"wrong3\" in the password field\nclick \"Sign In\"\nwait for 2 seconds\n\nassert \"Account locked\" message is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Session Persistence After Page Refresh",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-- Login first --\ntype \"admin@example.com\" in the email field\ntype \"password123\" in the password field\nclick \"Sign In\"\nwait for 5 seconds\nassert \"Dashboard\" is visible\n\n-- Refresh the page --\nrefresh the page\nwait for 3 seconds\n\n-- Should still be logged in --\nassert \"Dashboard\" is visible\nassert \"Welcome, Admin\" is visible"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Logout Flow",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "click on the user avatar in the top right corner\nclick on \"Sign Out\"\nwait for 3 seconds\nassert the current URL contains \"/login\"\n\n-- Verify session is cleared --\ngo to https://app.example.com/dashboard\nwait for 3 seconds\nassert the current URL contains \"/login\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For applications with session timeouts, combine explicit waits with assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "-- Login --\n-- ... login steps ... --\nassert \"Dashboard\" is visible\n\n-- Wait for session timeout (if timeout is 60 seconds in test env) --\nwait for 65 seconds\n\n-- Try to navigate --\nclick on \"Reports\" in the sidebar\nwait for 3 seconds\nassert \"Session expired\" is visible"
      }
    ],
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>

Authentication testing is one of the most critical areas for any QA team. This guide covers how to test login flows, multi-factor authentication (MFA/2FA), TOTP, session handling, and authentication-related edge cases in KaneAI.

## Basic Login Flows

### Standard Username/Password Login

<VerifiedTag value="Verified" />

```
go to https://app.example.com/login
type "admin@example.com" in the email input field
type "SecurePassword123!" in the password field
click on the "Sign In" button
wait for 5 seconds
assert the current URL contains "/dashboard"
assert "Welcome, Admin" is visible
```

### Login with "Remember Me"

<VerifiedTag value="Verified" />

```
type "admin@example.com" in the email field
type "SecurePassword123!" in the password field
check the "Remember me" checkbox
click on the "Sign In" button
wait for 5 seconds
assert the current URL contains "/dashboard"
```

### Reusable Login Module

If most of your tests start with a login, create a **Module** to avoid repeating the login steps in every test:

1. Author the login steps in a test
2. Pause the test
3. Select the login steps
4. Click **Create Module** → Name it "Login Flow"
5. In future tests, use `/` → Select your "Login Flow" module

<VerifiedTag value="Verified" />

```
-- In any new test: --
-- Use / command → Add Module → "Login Flow" --
-- The module executes all login steps automatically --
assert "Welcome" is visible
-- Continue with your test-specific steps --
```

:::tip
Use **environment variables** for credentials so the same login module works across staging, QA, and production environments. Set `{{env.login_email}}` and `{{env.login_password}}` per environment.
:::

## Using Variables for Credentials

### Environment Variables (Recommended)

Create environment-specific variables to test login across different environments:

<VerifiedTag value="Verified" />

```
type {{env.login_email}} in the email field
type {{env.login_password}} in the password field
click "Sign In"
```

Set different values for each environment:
- **Staging**: `login_email` = `test@staging.example.com`
- **Production**: `login_email` = `readonly@example.com`

:::tip
You can find more information about environment variables in [this guide](/support/docs/kane-ai-using-variables/#environments).
:::

### Secrets (For Sensitive Data)

Store passwords securely using KaneAI Secrets (backed by HashiCorp Vault):

1. Go to [KaneAI Variables](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/variables)
2. Create a secret variable for the password
3. Reference it in your test: `type {{secret.admin_password}} in the password field`

Secrets are:
- Encrypted at rest and in transit
- Never exposed in logs or generated code
- Not visible in the test step output

## TOTP / Multi-Factor Authentication

KaneAI has native TOTP support, which means you can test applications protected by authenticator apps (Google Authenticator, Okta Verify, Microsoft Authenticator) without any external scripts.

### How It Works

1. KaneAI stores your TOTP **secret key** (Base32 encoded) securely
2. At runtime, KaneAI generates the correct 6-digit code every 30 seconds
3. You reference the code as a smart variable in your test steps

### Step-by-Step: Testing a TOTP Login Flow

**Step 1: Register the TOTP Secret Key**

1. Start a web authoring session
2. Type `/` and select **Add TOTP Authentication Key**
3. Enter the Base32 secret key (the one you'd normally scan as a QR code in an authenticator app)
4. You can also use a LambdaTest secret: `{{secret.totp_key}}`
5. Click **Save**
6. A smart variable (e.g., `{{totp}}`) is generated

**Step 2: Use the TOTP in Your Test**

<VerifiedTag value="Verified" />

```
-- Login with username/password first --
type "admin@example.com" in the email field
type {{secret.admin_password}} in the password field
click "Sign In"

-- MFA screen appears --
wait for 3 seconds
enter {{totp}} in the verification code field
click "Verify"

-- Authenticated --
wait for 5 seconds
assert the current URL contains "/dashboard"
assert "Welcome, Admin" is visible
```

:::note
The `{{totp}}` smart variable generates a time-based 6-digit code based on the registered secret key. KaneAI calculates the correct code at the moment the step executes, so you get a valid code for each step run. Since TOTP codes refresh every 30 seconds, ensure that the step entering the code and the step submitting it execute in quick succession. Avoid placing long waits between them.
:::

### TOTP on Mobile

TOTP smart variables work identically on mobile tests:

<VerifiedTag value="Verified" />

```
type {{env.login_email}} in the email field
type {{secret.login_password}} in the password field
click "Login"
wait for 3 seconds
enter {{totp}} in the OTP field
click "Verify"
```

### Where to Get the TOTP Secret Key

- Most authenticator setups show a "Can't scan QR?" link that reveals the Base32 secret key
- For enterprise SSO, ask your IT team for the TOTP secret associated with the test account

## SSO (Single Sign-On) Flows

SSO flows typically redirect to an identity provider (Okta, Azure AD, Google Workspace) and then back to the application.

:::warning
KaneAI does not currently support testing SSO flows. SSO involves cross-domain redirects and third-party identity provider pages, which are outside the scope of KaneAI's natural language automation at this time.
:::

### Recommended Alternatives

- **Bypass SSO in test environments:** Configure your application to allow direct login (username/password) in staging/test environments, bypassing the SSO redirect entirely.
- **Use API-based authentication:** Obtain a session token or auth cookie via API calls before launching KaneAI, and inject it into the browser session.
- **Pre-authenticated sessions:** Work with your identity provider to set up test accounts with persistent sessions that don't require interactive login.

## Testing Login Validation & Edge Cases

### Invalid Credentials

<VerifiedTag value="Verified" />

```
type "admin@example.com" in the email field
type "wrong_password" in the password field
click "Sign In"
wait for 2 seconds
assert "Invalid email or password" error message is visible
assert the current URL still contains "/login"
```

### Empty Field Validation

<VerifiedTag value="Verified" />

```
click "Sign In" without entering any credentials
assert "Email is required" error is visible
assert "Password is required" error is visible
```

### Account Lockout After Failed Attempts

<VerifiedTag value="Verified" />

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

### Session Persistence After Page Refresh

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

:::note
For session timeout testing, consider setting a short timeout in your test environment (e.g., 60 seconds) rather than waiting for production-length timeouts (30 minutes).
:::

## Custom Headers for Authentication

For applications that require auth tokens in headers, use KaneAI's [Custom Headers](/support/docs/kaneai-custom-headers) feature:

1. In session settings, add custom headers
2. Example: `Authorization: Bearer <your-token>`
3. All requests from the browser will include this header

This is useful for:
- Bypassing login in test environments
- Testing API-authenticated applications
- Injecting test-user tokens

## Best Practices for Authentication Testing

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
