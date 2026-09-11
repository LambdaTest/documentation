---
id: browser-cloud-profiles
title: Profiles - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Stay Logged in Across Runs
description: Persist browser state across sessions and script runs. Reuse auth, cookies, and browser settings across sessions.
keywords:
  - browser cloud profiles
  - persistent browser state
  - session persistence
  - cookie persistence
  - browser identity
url: https://www.testmuai.com/support/docs/browser-cloud-profiles/
site_name: TestMu AI
slug: browser-cloud-profiles/
canonical: https://www.testmuai.com/support/docs/browser-cloud-profiles/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Browser Cloud",
          "item": `${BRAND_URL}/support/docs/what-is-browser-cloud/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Profiles",
          "item": `${BRAND_URL}/support/docs/browser-cloud-profiles/`
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-profiles/"
    },
    "headline": "Profiles - TestMu AI Browser Cloud",
    "description": "Persist browser state across sessions and script runs. Reuse auth, cookies, and browser settings across sessions.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-profiles/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud profiles",
      "persistent browser state",
      "session persistence"
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
        "name": "Getting Started",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// Run 1: Your agent logs in. Profile is saved automatically on close.\nconst session = await client.sessions.create({\n    adapter: 'puppeteer',\n    profileId: 'my-app-login',    // This ID enables auto-save\n    lambdatestOptions: { ... }\n});\n\nconst browser = await client.puppeteer.connect(session);\nconst page = (await browser.pages())[0];\n\nawait page.goto('https://app.example.com/login');\n// ... agent logs in ...\n\nawait browser.close();  // \u2190 Profile auto-saved here\nawait client.sessions.release(session.id);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Getting Started",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// Run 2 (days later): Agent loads saved state. No login needed.\nconst session2 = await client.sessions.create({\n    adapter: 'puppeteer',\n    profileId: 'my-app-login',   // Same ID = loads saved cookies\n    lambdatestOptions: { ... }\n});\n\nconst browser2 = await client.puppeteer.connect(session2);\nconst page2 = (await browser2.pages())[0];\n\nawait page2.goto('https://app.example.com/dashboard');\n// Already logged in - cookies were restored from the profile"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Profiles are stored as JSON files at .profiles/{profileId}.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n    \"id\": \"my-app-login\",\n    \"cookies\": [\n        {\n            \"name\": \"session_token\",\n            \"value\": \"abc123...\",\n            \"domain\": \".example.com\",\n            \"path\": \"/\",\n            \"expires\": 1735689600,\n            \"httpOnly\": true,\n            \"secure\": true\n        }\n    ],\n    \"updatedAt\": \"2024-01-15T10:30:00.000Z\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Beyond the automatic profileId flow, you can manage profiles directly",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// Save a profile manually\nawait client.profiles.saveProfile('my-profile', page, { note: 'after login' });\n\n// Load a profile into a page\nawait client.profiles.loadProfile('my-profile', page);\n\n// List all saved profiles\nconst profiles = await client.profiles.listProfiles();\n\n// Delete a profile\nawait client.profiles.deleteProfile('my-profile');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": ".profiles/ to your .gitignore",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ".profiles/"
      }
    ],
    "dateModified": "2026-03-26T15:05:31+05:30"
  }) }}
/>

# Stay Logged In Across Runs with Profiles

Persist and reuse browser state - cookies, auth, and settings - across separate script runs. Profiles auto-save when the browser closes and auto-load when you use the same profile ID.


## Why You Need This

The [Context service for cookies](/support/docs/browser-cloud-context/) transfers state between sessions
within a single script run. But what if your agent runs on a cron schedule, or
as a serverless function, or is manually triggered days apart? The in-memory
context is lost between runs.

Profiles solve this by saving your browser's state - cookies, localStorage,
sessionStorage - to disk. Think of a profile as a saved browser identity: a set
of credentials, preferences, and session data that your agent can load each
time it runs. Your agent logs in once, the profile saves the auth state to
disk, and every future run - hours, days, or weeks later - loads the saved
state and skips login entirely.

You might have a "salesforce-login" profile, a "github-login" profile, or a
"competitor-research" profile - each maintaining its own authentication state
and preferences.


## How It Works

1. You set `profileId` in your session config
2. On connect, the adapter checks for a saved profile at `.profiles/{profileId}.json`
3. If found, the saved cookies are loaded into the browser
4. On `browser.close()`, the current cookies are automatically saved back to the file
5. Next time you create a session with the same `profileId`, the saved state is restored


## Getting Started

```typescript
// Run 1: Your agent logs in. Profile is saved automatically on close.
const session = await client.sessions.create({
    adapter: 'puppeteer',
    profileId: 'my-app-login',    // This ID enables auto-save
    lambdatestOptions: { ... }
});

const browser = await client.puppeteer.connect(session);
const page = (await browser.pages())[0];

await page.goto('https://app.example.com/login');
// ... agent logs in ...

await browser.close();  // ← Profile auto-saved here
await client.sessions.release(session.id);
```

```typescript
// Run 2 (days later): Agent loads saved state. No login needed.
const session2 = await client.sessions.create({
    adapter: 'puppeteer',
    profileId: 'my-app-login',   // Same ID = loads saved cookies
    lambdatestOptions: { ... }
});

const browser2 = await client.puppeteer.connect(session2);
const page2 = (await browser2.pages())[0];

await page2.goto('https://app.example.com/dashboard');
// Already logged in - cookies were restored from the profile
```

> **First run note:** On the very first run, there's no saved profile yet.
> This is normal. The profile file is created when `browser.close()` is called.
> Subsequent runs will find and load it.


## Profile File Format

Profiles are stored as JSON files at `.profiles/{profileId}.json`:

```json
{
    "id": "my-app-login",
    "cookies": [
        {
            "name": "session_token",
            "value": "abc123...",
            "domain": ".example.com",
            "path": "/",
            "expires": 1735689600,
            "httpOnly": true,
            "secure": true
        }
    ],
    "updatedAt": "2024-01-15T10:30:00.000Z"
}
```


## Manual Profile Management

Beyond the automatic `profileId` flow, you can manage profiles directly:

```typescript
// Save a profile manually
await client.profiles.saveProfile('my-profile', page, { note: 'after login' });

// Load a profile into a page
await client.profiles.loadProfile('my-profile', page);

// List all saved profiles
const profiles = await client.profiles.listProfiles();

// Delete a profile
await client.profiles.deleteProfile('my-profile');
```


## Profiles vs Context Service

| | Context Service | Profile Service |
|---|---|---|
| **Where state lives** | In memory (JS object) | On disk (`.profiles/` directory) |
| **Lifetime** | Single script run | Across runs (days/weeks) |
| **Use case** | Transfer state between sessions in the same script | Maintain login state between separate agent invocations |
| **How to use** | Manual `getContext()` / `setContext()` | Automatic via `profileId` in session config |

**Use Context** when your agent creates multiple sessions in one run.
**Use Profiles** when your agent runs on a schedule and needs to stay logged in
between invocations.


## Works With All CDP Adapters

- **Puppeteer:** Saves/loads cookies via CDP page methods
- **Playwright:** Saves/loads cookies via `context.addCookies()` / `context.cookies()`
- **Selenium:** Saves/loads cookies via `driver.manage().addCookie()`, grouped by domain


## Security Note

Profile files contain session cookies and tokens in plain text. Add
`.profiles/` to your `.gitignore`:

```
.profiles/
```


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="/support/docs/what-is-browser-cloud/">
        Browser Cloud
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Profiles
      </span>
    </li>
  </ul>
</nav>
