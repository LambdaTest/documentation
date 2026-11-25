---
id: browser-cloud-stagehand
title: Stagehand Integration - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Run Stagehand Agents
description: Connect Stagehand 3 to a TestMu AI Browser Cloud session through its CDP URL, then run act(), extract() and observe() in a cloud Chrome.
keywords:
  - stagehand browser cloud
  - stagehand cdp url
  - stagehand remote browser
  - stagehand cloud browser
  - browser cloud integration
url: https://www.testmuai.com/support/docs/browser-cloud-stagehand/
site_name: TestMu AI
slug: browser-cloud-stagehand/
canonical: https://www.testmuai.com/support/docs/browser-cloud-stagehand/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-stagehand/"
    },
    "headline": "Run Stagehand on TestMu AI Browser Cloud",
    "description": "Connect Stagehand 3 to a TestMu AI Browser Cloud session through its CDP URL, then run act(), extract() and observe() in a cloud Chrome.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-stagehand/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "stagehand browser cloud",
      "stagehand cdp url",
      "stagehand remote browser"
    ],
    "proficiencyLevel": "Intermediate",
    "dependencies": "Node.js 20.19+ or 22.12+; npm install @browserbasehq/stagehand@3 zod @testmuai/browser-cloud; LT_USERNAME and LT_ACCESS_KEY set; an API key for the model Stagehand calls, such as OPENAI_API_KEY.",
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
      "url": "https://www.testmuai.com/",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
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
        "name": "Run Stagehand 3 in a Browser Cloud session",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// stagehand-browser-cloud.mjs\nimport { Browser } from '@testmuai/browser-cloud';\nimport { Stagehand } from '@browserbasehq/stagehand';\nimport { z } from 'zod';\n\nconst client = new Browser();\n\n// 1. Create a Browser Cloud session. The puppeteer adapter gives\n//    session.websocketUrl as a Chrome DevTools Protocol (CDP) URL.\nconst session = await client.sessions.create({\n  adapter: 'puppeteer',\n  lambdatestOptions: {\n    build: 'Stagehand on Browser Cloud',\n    name: 'Search the demo store',\n    'LT:Options': {\n      username: process.env.LT_USERNAME,\n      accessKey: process.env.LT_ACCESS_KEY,\n    },\n  },\n});\n\n// 2. Attach Stagehand to the cloud browser instead of launching Chrome.\n//    The URL contains your access key, so never print or log it.\nconst stagehand = new Stagehand({\n  env: 'LOCAL',\n  localBrowserLaunchOptions: { cdpUrl: session.websocketUrl },\n  model: 'openai/gpt-4.1-mini',\n});\n\ntry {\n  await stagehand.init();\n  const page = stagehand.context.pages()[0];\n  await page.goto('https://ecommerce-playground.lambdatest.io/');\n\n  // 3. act() and extract() work as they do on a local browser.\n  await stagehand.act('type \"iPhone\" into the search box and press Enter');\n  const { products } = await stagehand.extract(\n    'the names of the first three products in the search results',\n    z.object({ products: z.array(z.string()) }),\n  );\n  console.log(products);\n} finally {\n  // 4. stagehand.close() only disconnects. Browser.close ends the cloud browser.\n  await stagehand.context?.conn.send('Browser.close').catch(() => {});\n  await stagehand.close();\n  await client.sessions.release(session.id);\n}"
      }
    ],
    "datePublished": "2026-11-23",
    "dateModified": "2026-11-23"
  }) }}
/>

# Run Stagehand on TestMu AI Browser Cloud

Stagehand drives a browser over the Chrome DevTools Protocol (CDP), so it can work in a TestMu AI Browser Cloud session instead of a Chrome on your machine. Create the session with the TestMu AI Browser SDK, give its CDP URL to Stagehand as `cdpUrl`, and keep your `act()`, `extract()` and `observe()` calls as they are. The run happens in a cloud Chrome, and the session is recorded on the Web Automation Dashboard with its video, console logs and network requests.

This guide is written against Stagehand 3.7.4, `@testmuai/browser-cloud` 1.0.1 and Node.js 22.

:::info Use Stagehand 3 with Browser Cloud
Stagehand 4 attaches to a browser differently. Its `localBrowser.connect()` looks for the Stagehand Runtime extension inside the connected browser, and when the extension is missing, it loads it from a folder in your local `node_modules`. A Browser Cloud session runs on a TestMu AI machine that cannot read that folder. Stagehand 3 attaches to a CDP URL without an extension, so install it with `npm install @browserbasehq/stagehand@3`.
:::

## Requirements for Running Stagehand on Browser Cloud

- **Node.js 20.19 or later, or 22.12 or later.** Stagehand 3.7.4 declares these versions in its `engines` field.
- **Your TestMu AI username and access key.** [Launch Your First Browser Session](/support/docs/launch-first-session/) shows where to find them.
- **An API key for the model Stagehand calls.** The example uses `openai/gpt-4.1-mini`, which reads `OPENAI_API_KEY`. To use another provider, change `model` to that provider's `provider/model` name and set its key, for example `ANTHROPIC_API_KEY` for an `anthropic/...` model.

## Step 1: Install Stagehand 3, Zod and the Browser Cloud SDK

```bash
npm install @browserbasehq/stagehand@3 zod @testmuai/browser-cloud
```

Zod is a peer dependency of Stagehand: `extract()` uses a Zod schema to describe the data it returns. The SDK also installs the Puppeteer, Playwright and Selenium client libraries as its own peer dependencies.

## Step 2: Set Your TestMu AI Credentials and Stagehand's LLM API Key

<Tabs groupId="os">
<TabItem value="unix" label="macOS / Linux" default>

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
export OPENAI_API_KEY="your_openai_api_key"
```

</TabItem>
<TabItem value="powershell" label="Windows (PowerShell)">

```powershell
$env:LT_USERNAME="your_username"
$env:LT_ACCESS_KEY="your_access_key"
$env:OPENAI_API_KEY="your_openai_api_key"
```

</TabItem>
</Tabs>

## Step 3: Create a Browser Cloud Session and Pass Its CDP URL to Stagehand

Save this script as `stagehand-browser-cloud.mjs`:

```javascript
// stagehand-browser-cloud.mjs
import { Browser } from '@testmuai/browser-cloud';
import { Stagehand } from '@browserbasehq/stagehand';
import { z } from 'zod';

const client = new Browser();

// 1. Create a Browser Cloud session. The puppeteer adapter gives
//    session.websocketUrl as a Chrome DevTools Protocol (CDP) URL.
const session = await client.sessions.create({
  adapter: 'puppeteer',
  lambdatestOptions: {
    build: 'Stagehand on Browser Cloud',
    name: 'Search the demo store',
    'LT:Options': {
      username: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
    },
  },
});

// 2. Attach Stagehand to the cloud browser instead of launching Chrome.
//    The URL contains your access key, so never print or log it.
const stagehand = new Stagehand({
  env: 'LOCAL',
  localBrowserLaunchOptions: { cdpUrl: session.websocketUrl },
  model: 'openai/gpt-4.1-mini',
});

try {
  await stagehand.init();
  const page = stagehand.context.pages()[0];
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  // 3. act() and extract() work as they do on a local browser.
  await stagehand.act('type "iPhone" into the search box and press Enter');
  const { products } = await stagehand.extract(
    'the names of the first three products in the search results',
    z.object({ products: z.array(z.string()) }),
  );
  console.log(products);
} finally {
  // 4. stagehand.close() only disconnects. Browser.close ends the cloud browser.
  await stagehand.context?.conn.send('Browser.close').catch(() => {});
  await stagehand.close();
  await client.sessions.release(session.id);
}
```

Run it:

```bash
node stagehand-browser-cloud.mjs
```

The script prints the product names that `extract()` returns. What each part does:

- **`adapter: 'puppeteer'`** makes `session.websocketUrl` a CDP URL on `cdp.lambdatest.com/puppeteer`. The `'playwright'` adapter returns a Playwright protocol URL, which Stagehand cannot attach to.
- **`env: 'LOCAL'` with `cdpUrl`** tells Stagehand to attach to a running browser instead of launching Chrome. The rest of your Stagehand code does not change.
- **`client.sessions.create()`** builds the session URL on your machine without contacting Browser Cloud. The cloud browser starts when Stagehand connects in `stagehand.init()`.
- **`Browser.close`** ends the cloud browser when the run finishes. `stagehand.close()` on its own closes only Stagehand's connection and leaves an attached browser running.

:::caution
`session.websocketUrl` contains your username and access key. Do not print it, and keep it out of logs and error reports.
:::

## Step 4: Watch Each Stagehand Run on the TestMu AI Web Automation Dashboard

Open the [Web Automation Dashboard](https://automation.lambdatest.com/logs/) and look for the build name you set, `Stagehand on Browser Cloud` in the example. The session holds the video of the run, the console logs and the network requests, so you can see which page Stagehand was on when an `act()` call failed. [Replay and Debug Sessions](/support/docs/browser-cloud-debugging/) covers what each view shows.

## Browser Cloud Session Options That Apply When Stagehand Connects

Stagehand connects to the session URL directly, without the SDK's Puppeteer adapter. Options that the SDK writes into the session URL take effect. Options that the adapter applies after it connects do not.

| Option in `sessions.create()` | Applies with Stagehand | Reason |
|---|---|---|
| `tunnel`, `tunnelName` | Yes | Written into the session capabilities. See [Access Localhost and Internal Networks](/support/docs/browser-cloud-tunnel/). |
| `geoLocation`, `region` | Yes | Written into the session capabilities. |
| `dimensions` | Yes | Sent as the session resolution. |
| `headless` | Yes | Written into the session capabilities. |
| `extensionIds` | Yes | Loaded through the `lambda:loadExtension` capability. See [Load Chrome Extensions](/support/docs/browser-cloud-extensions/). |
| `stealthConfig` | No | The SDK applies stealth settings inside its own Puppeteer and Playwright adapters. |
| `profileId` | No | The SDK adapters load and save profiles on the page they open. |

## Troubleshoot Stagehand on Browser Cloud

### Browser Cloud Rejects Stagehand With "Unexpected server response: 401"

Browser Cloud rejected the credentials in the session URL. When `LT_USERNAME` or `LT_ACCESS_KEY` is not set, the SDK builds the URL with the placeholder credentials `generic_user` and `generic_key`, and `stagehand.init()` fails with this error. Set both variables in the shell that runs the script, as in Step 2.

### Stagehand Connects to Browser Cloud but Reports a Missing OpenAI API Key

When `OPENAI_API_KEY` is not set, the first call that needs the model (`act()` in the example) throws `LoadAPIKeyError: OpenAI API key is missing`. The browser connection works at that point, so only the model key is missing. Set the key, or change `model` to a provider whose key you have set.

### Stagehand 4 Fails While Attaching to a Browser Cloud Session

Install Stagehand 3 with `npm install @browserbasehq/stagehand@3` and use the `new Stagehand({ env: 'LOCAL', localBrowserLaunchOptions: { cdpUrl } })` form shown in Step 3. Stagehand 4's `localBrowser.connect()` needs its Runtime extension in the browser, as the note at the top of this guide explains.

## Related Guides

- [Connect to a Session](/support/docs/connect-to-session/): drive Browser Cloud sessions with Puppeteer, Playwright or Selenium through the SDK adapters.
- [Run Kane CLI Tests on Browser Cloud](/support/docs/browser-cloud-kane-cli/): point Kane CLI at a Browser Cloud session with `--ws-endpoint`.
- [Run Web Automation Tests With CDP](/support/docs/run-tests-with-chrome-devtools-protocol/): build a CDP URL by hand and set the session capabilities yourself.
- [Configure Session Options](/support/docs/browser-cloud-session-configuration/): every option `sessions.create()` accepts.
