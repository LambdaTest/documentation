---
id: browser-cloud-quickstart
title: Quickstart - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Launch Your First Session
description: Get up and running with your first TestMu AI Browser Cloud session in a few minutes using TypeScript and Puppeteer.
keywords:
  - browser cloud quickstart
  - browser cloud getting started
  - testmu sdk setup
  - puppeteer cloud browser
  - ai agent browser setup
url: https://www.testmuai.com/support/docs/launch-first-session/
site_name: TestMu AI
slug: launch-first-session/
canonical: https://www.testmuai.com/support/docs/launch-first-session/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
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
          "name": "Quickstart",
          "item": `${BRAND_URL}/support/docs/launch-first-session/`
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
      "@id": "https://www.testmuai.com/support/docs/launch-first-session/"
    },
    "headline": "Quickstart - TestMu AI Browser Cloud",
    "description": "Get up and running with your first TestMu AI Browser Cloud session in a few minutes using TypeScript and Puppeteer.",
    "url": "https://www.testmuai.com/support/docs/launch-first-session/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "browser cloud quickstart",
      "browser cloud getting started",
      "testmu sdk setup"
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
        "name": "Add your credentials",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "LT_USERNAME=your_username\nLT_ACCESS_KEY=your_access_key"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Installing the TestMu AI Browser SDK",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm i @testmuai/browser-cloud"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "and cleans up (Puppeteer)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// my-first-session.ts\n\nimport { Browser } from '@testmuai/browser-cloud';\n\nconst client = new Browser();\n\nasync function main() {\n    const session = await client.sessions.create({\n        adapter: 'puppeteer',\n        lambdatestOptions: {\n            build: 'Getting Started',\n            name: 'My First Session',\n            'LT:Options': {\n                username: process.env.LT_USERNAME,\n                accessKey: process.env.LT_ACCESS_KEY,\n            }\n        }\n    });\n\n    console.log('Session created:', session.id);\n    console.log('View live session at:', session.sessionViewerUrl);\n\n    // Connect and use the browser\n    const browser = await client.puppeteer.connect(session);\n    const page = (await browser.pages())[0];\n\n    await page.goto('https://example.com');\n    console.log('Title:', await page.title());\n\n    // Clean up\n    await browser.close();\n    await client.sessions.release(session.id);\n    console.log('Session released');\n}\n\nmain().catch(console.error);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Playwright",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// my-first-session.ts\n\nimport { Browser } from '@testmuai/browser-cloud';\n\nconst client = new Browser();\n\nasync function main() {\n    const session = await client.sessions.create({\n        adapter: 'playwright',\n        lambdatestOptions: {\n            build: 'Getting Started',\n            name: 'My First Session',\n            'LT:Options': {\n                username: process.env.LT_USERNAME,\n                accessKey: process.env.LT_ACCESS_KEY,\n            }\n        }\n    });\n\n    console.log('Session created:', session.id);\n    console.log('View live session at:', session.sessionViewerUrl);\n\n    // Connect and use the browser\n    const { browser, context, page } = await client.playwright.connect(session);\n\n    await page.goto('https://example.com');\n    console.log('Title:', await page.title());\n\n    // Clean up\n    await browser.close();\n    await client.sessions.release(session.id);\n    console.log('Session released');\n}\n\nmain().catch(console.error);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Selenium",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "// my-first-session.ts\n\nimport { Browser } from '@testmuai/browser-cloud';\n\nconst client = new Browser();\n\nasync function main() {\n    const session = await client.sessions.create({\n        adapter: 'selenium',\n        lambdatestOptions: {\n            build: 'Getting Started',\n            name: 'My First Session',\n            'LT:Options': {\n                username: process.env.LT_USERNAME,\n                accessKey: process.env.LT_ACCESS_KEY,\n            }\n        }\n    });\n\n    console.log('Session created:', session.id);\n    console.log('View live session at:', session.sessionViewerUrl);\n\n    // Connect and use the browser\n    const driver = await client.selenium.connect(session);\n\n    await driver.get('https://example.com');\n    console.log('Title:', await driver.getTitle());\n\n    // Clean up\n    await driver.quit();\n    await client.sessions.release(session.id);\n    console.log('Session released');\n}\n\nmain().catch(console.error);"
      }
    ],
    "dateModified": "2026-05-29T18:18:43+05:30"
  }) }}
/>

# Launch Your First Browser Session
***

This guide walks you through setting up your <BrandName /> account, creating
your first browser session on <BrandName /> Browser Cloud, and driving it using
TypeScript/Puppeteer. In just a few minutes, you'll be programmatically
controlling a cloud browser.


## Prerequisites
***

**Step 1**: [Sign up on TestMu AI](https://www.testmuai.com/register/)

**Step 2**: Get your credentials:

1. After signing up, navigate to **Settings → Account Settings**
2. Find your **Username** and **Access Key**

**Step 3**: Set up environment variables:

1. Create a `.env` file in your project root (if you don't have one)
2. Add your credentials:

```
LT_USERNAME=your_username
LT_ACCESS_KEY=your_access_key
```

> Make sure to add `.env` to your `.gitignore` file to keep your credentials secure.


## Installing the TestMu AI Browser SDK
***

```bash
npm i @testmuai/browser-cloud
```

**Requirements:** Node.js 16+ (Node 18+ required if using the Playwright adapter)


## Create Your First Session
***

Let's create a simple script that launches a cloud browser, navigates to a page,
and cleans up:

<VerifiedTag value="Verified" />

<Tabs>
  <TabItem value="puppeteer" label="Puppeteer" default>

```typescript
// my-first-session.ts

import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

async function main() {
    const session = await client.sessions.create({
        adapter: 'puppeteer',
        lambdatestOptions: {
            build: 'Getting Started',
            name: 'My First Session',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log('Session created:', session.id);
    console.log('View live session at:', session.sessionViewerUrl);

    // Connect and use the browser
    const browser = await client.puppeteer.connect(session);
    const page = (await browser.pages())[0];

    await page.goto('https://example.com');
    console.log('Title:', await page.title());

    // Clean up
    await browser.close();
    await client.sessions.release(session.id);
    console.log('Session released');
}

main().catch(console.error);
```

  </TabItem>
  <TabItem value="playwright" label="Playwright">

:::note
Playwright requires **Node.js 18+**.
:::

```typescript
// my-first-session.ts

import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

async function main() {
    const session = await client.sessions.create({
        adapter: 'playwright',
        lambdatestOptions: {
            build: 'Getting Started',
            name: 'My First Session',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log('Session created:', session.id);
    console.log('View live session at:', session.sessionViewerUrl);

    // Connect and use the browser
    const { browser, context, page } = await client.playwright.connect(session);

    await page.goto('https://example.com');
    console.log('Title:', await page.title());

    // Clean up
    await browser.close();
    await client.sessions.release(session.id);
    console.log('Session released');
}

main().catch(console.error);
```

  </TabItem>
  <TabItem value="selenium" label="Selenium">

```typescript
// my-first-session.ts

import { Browser } from '@testmuai/browser-cloud';

const client = new Browser();

async function main() {
    const session = await client.sessions.create({
        adapter: 'selenium',
        lambdatestOptions: {
            build: 'Getting Started',
            name: 'My First Session',
            'LT:Options': {
                username: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
            }
        }
    });

    console.log('Session created:', session.id);
    console.log('View live session at:', session.sessionViewerUrl);

    // Connect and use the browser
    const driver = await client.selenium.connect(session);

    await driver.get('https://example.com');
    console.log('Title:', await driver.getTitle());

    // Clean up
    await driver.quit();
    await client.sessions.release(session.id);
    console.log('Session released');
}

main().catch(console.error);
```

  </TabItem>
</Tabs>







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
        Quickstart
      </span>
    </li>
  </ul>
</nav>
