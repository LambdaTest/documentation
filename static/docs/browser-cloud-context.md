# Reusing Context & Auth - TestMu AI Browser Cloud

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

;\n    sessionStorage?: Record>;\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get all browser state from a page",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "const context = await client.context.getContext(page);\n\ncontext.cookies;        // Array of cookies\ncontext.localStorage;   // { \"origin\": { \"key\": \"value\" } }\ncontext.sessionStorage; // { \"origin\": { \"key\": \"value\" } }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Or extract individual parts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "const cookies = await client.context.getCookies(page);\nconst localStorage = await client.context.getLocalStorage(page);\nconst sessionStorage = await client.context.getSessionStorage(page);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set browser state on a new page",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "await client.context.setContext(page, {\n    cookies: [\n        { name: 'session_id', value: 'abc123', domain: '.example.com', path: '/' }\n    ],\n    localStorage: {\n        'https://example.com': { theme: 'dark', lang: 'en' }\n    },\n});"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Or set individual parts",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "await client.context.setCookies(page, cookies);\nawait client.context.setLocalStorage(page, localStorageData);\nawait client.context.setSessionStorage(page, sessionStorageData);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clearing Context",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "await client.context.clearContext(page);    // Clear everything\nawait client.context.clearCookies(page);    // Just cookies\nawait client.context.clearStorage(page);    // localStorage + sessionStorage"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The most common use case - log in once, reuse the auth state",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// Session 1: Log in and capture\nconst session1 = await client.sessions.create({ adapter: 'puppeteer', ... });\nconst browser1 = await client.puppeteer.connect(session1);\nconst page1 = (await browser1.pages())[0];\n\nawait page1.goto('https://app.example.com/login');\nawait page1.type('#email', 'user@example.com');\nawait page1.type('#password', 'password');\nawait page1.click('#login-button');\nawait page1.waitForNavigation();\n\nconst savedContext = await client.context.getContext(page1);\nawait browser1.close();\nawait client.sessions.release(session1.id);\n\n// Session 2: Skip login entirely\nconst session2 = await client.sessions.create({ adapter: 'puppeteer', ... });\nconst browser2 = await client.puppeteer.connect(session2);\nconst page2 = (await browser2.pages())[0];\n\nawait client.context.setContext(page2, savedContext);\nawait page2.goto('https://app.example.com/dashboard');\n// Already logged in!"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

# Transfer Cookies and Storage Between Sessions

Extract and inject browser state - cookies, localStorage, and sessionStorage - across sessions to preserve login and user data without re-authenticating.

## Why You Need This

Your agent needs to stay logged in across sessions. Without a way to preserve
authentication state, every new session starts from scratch - your agent has to
repeat the login flow each time. That wastes time, risks triggering security
alerts from frequent logins, breaks on MFA prompts, and burns LLM tokens if
your agent uses AI to navigate login pages.

The Context Service solves this. It captures everything the browser remembers
about a user's session - login cookies, user preferences in localStorage,
shopping cart data in sessionStorage - and lets you inject that state into a
new session. Your agent logs in once, saves the context, and skips login
entirely in every future session.

```typescript
interface SessionContext {
cookies?: Cookie[];
localStorage?: Record<string, Record<string, string>>;
sessionStorage?: Record<string, Record<string, string>>;
}
```

## Before You Begin

You need an active session with a connected page before you can extract or
inject context. If you have not set that up yet, see
[Connect to a session](/support/docs/connect-to-session/).

## Framework Agnostic

The Context Service auto-detects whether you pass a Puppeteer `Page` or a
Playwright `Page`/`BrowserContext`. The same API works with both - you never
need to specify which adapter you're using.

## Extracting Context

Get all browser state from a page:

```typescript
const context = await client.context.getContext(page);

context.cookies;        // Array of cookies
context.localStorage;   // { "origin": { "key": "value" } }
context.sessionStorage; // { "origin": { "key": "value" } }
```

Or extract individual parts:

```typescript
const cookies = await client.context.getCookies(page);
const localStorage = await client.context.getLocalStorage(page);
const sessionStorage = await client.context.getSessionStorage(page);
```

## Injecting Context

Set browser state on a new page:

```typescript
await client.context.setContext(page, {
cookies: [
{ name: 'session_id', value: 'abc123', domain: '.example.com', path: '/' }
],
localStorage: {
'https://example.com': { theme: 'dark', lang: 'en' }
},
});
```

Or set individual parts:

```typescript
await client.context.setCookies(page, cookies);
await client.context.setLocalStorage(page, localStorageData);
await client.context.setSessionStorage(page, sessionStorageData);
```

## Clearing Context

```typescript
await client.context.clearContext(page);    // Clear everything
await client.context.clearCookies(page);    // Just cookies
await client.context.clearStorage(page);    // localStorage + sessionStorage
```

## Example: Transfer Login Between Sessions

The most common use case - log in once, reuse the auth state:

```typescript
// Session 1: Log in and capture
const session1 = await client.sessions.create({ adapter: 'puppeteer', ... });
const browser1 = await client.puppeteer.connect(session1);
const page1 = (await browser1.pages())[0];

await page1.goto('https://app.example.com/login');
await page1.type('#email', 'user@example.com');
await page1.type('#password', 'password');
await page1.click('#login-button');
await page1.waitForNavigation();

const savedContext = await client.context.getContext(page1);
await browser1.close();
await client.sessions.release(session1.id);

// Session 2: Skip login entirely
const session2 = await client.sessions.create({ adapter: 'puppeteer', ... });
const browser2 = await client.puppeteer.connect(session2);
const page2 = (await browser2.pages())[0];

await client.context.setContext(page2, savedContext);
await page2.goto('https://app.example.com/dashboard');
// Already logged in!
```

## How It Works

- **Puppeteer:** Uses CDP `Network.getAllCookies` / `Network.setCookie` for cookies, and `page.evaluate()` for localStorage/sessionStorage
- **Playwright:** Uses `context.cookies()` / `context.addCookies()` for cookies, and `page.evaluate()` for storage
- Framework detection is automatic based on the page object's available methods

## Context vs Profiles

The Context Service transfers state **within a single script run** (in memory).
If you need state to persist **across separate script runs** (on disk), use the
[Profiles for persistent state](/support/docs/browser-cloud-profiles/) instead.
