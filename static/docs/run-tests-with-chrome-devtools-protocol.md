# How to Run Web Automation Tests With Chrome DevTools Protocol (CDP)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Chrome DevTools Protocol (CDP) is the interface Chrome and Chromium-based browsers expose for automation and inspection. A CDP client navigates pages, controls the DOM, intercepts network traffic, and reads performance data directly.

On TestMu AI, you connect to a cloud Chrome browser over CDP and run your web automation there instead of on your local machine, and an AI agent can drive the same browser.

## Prerequisites

Before you start, make sure you have the following in place.

1. A TestMu AI account. [Sign up on TestMu AI](https://www.testmuai.com/register/) if you do not have one.
2. Node.js 18 or later installed.

## Running Web Automation Tests With CDP

Puppeteer is a CDP client. It connects to a TestMu AI cloud browser over a CDP WebSocket, so no Browser SDK is required. The example opens a product listing on the [E-Commerce Playground](https://ecommerce-playground.lambdatest.io/) and reads it; swap the URL and selectors for your own target.

**1. Install the Puppeteer client.** `puppeteer-core` connects to a remote browser without downloading a local one.

```bash
npm install puppeteer-core
```

**2. Set your credentials.** Copy your **Username** and **Access Key** from **Settings → Account Settings**, then set them as environment variables.

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
```

```powershell
$env:LT_USERNAME="your_username"
$env:LT_ACCESS_KEY="your_access_key"
```

```batch
set LT_USERNAME=your_username
set LT_ACCESS_KEY=your_access_key
```

**3. Create `cdp-test.ts`.** It builds the CDP endpoint from your credentials, connects Puppeteer to the cloud browser, pages through the listing, and disconnects.

```typescript
// cdp-test.ts
import puppeteer from 'puppeteer-core';

const capabilities = {
browserName: 'Chrome',
browserVersion: 'latest',
'LT:Options': {
platformName: 'Windows 10',
build: 'CDP Web Automation',
name: 'Product Listing',
username: process.env.LT_USERNAME,
accessKey: process.env.LT_ACCESS_KEY,
},
};

const endpoint =
`wss://${process.env.LT_USERNAME}:${process.env.LT_ACCESS_KEY}` +
`@cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`;

const BASE =
'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25';

async function run() {
const browser = await puppeteer.connect({ browserWSEndpoint: endpoint });
const products: Array<Record<string, string | null>> = [];
try {
const page = (await browser.pages())[0];

for (let pageNo = 1; pageNo <= 5; pageNo++) {
await page.goto(`${BASE}&page=${pageNo}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('.product-thumb');

const pageProducts = await page.evaluate(() =>
Array.from(document.querySelectorAll('.product-thumb')).map((card) => {
const link = card.querySelector<HTMLAnchorElement>('.caption .title a');
const priceEl =
card.querySelector<HTMLElement>('.price-new') ??
card.querySelector<HTMLElement>('.price');
return {
name: link?.textContent?.trim() ?? null,
price: priceEl?.textContent?.trim() ?? null,
url: link?.href ?? null,
};
})
);

console.log(`Page ${pageNo}: ${pageProducts.length} products`);
products.push(...pageProducts);
}
} finally {
await browser.close();
}

console.log(`Collected ${products.length} products total`);
console.table(products.slice(0, 5));
}

run().catch((e) => {
console.error('Run failed:', e.message);
process.exit(1);
});
```

**4. Run it** with a TypeScript runner:

```bash
npx tsx cdp-test.ts
```

To view your test results, navigate to the TestMu AI Web Automation dashboard.

## Running Web Automation With CDP From an AI Agent

AI agent workloads need more than a raw connection: stealth so a site does not flag the browser as automated, session persistence so a logged-in agent does not start cold, and managed cleanup.

The TestMu AI Browser SDK wraps the same CDP connection and adds these, so it is the path to use for agents.

**1. Install the TestMu AI Browser SDK.** It includes the Puppeteer client and manages the CDP session for you.

```bash
npm install @testmuai/browser-cloud
```

**2. Create `agent-scrape.ts`.** It creates a stealth session, connects over CDP, runs the same listing scan, and releases the session.

```typescript
// agent-scrape.ts
import { Browser } from '@testmuai/browser-cloud';

const BASE =
'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25';

const client = new Browser();

async function run() {
let session;
const products: Array<Record<string, string | null>> = [];
try {
session = await client.sessions.create({
adapter: 'puppeteer',
stealthConfig: { humanizeInteractions: true, randomizeUserAgent: true },
lambdatestOptions: {
build: 'CDP Web Automation',
name: 'Agent Product Listing',
'LT:Options': {
username: process.env.LT_USERNAME,
accessKey: process.env.LT_ACCESS_KEY,
},
},
});

const browser = await client.puppeteer.connect(session);
const page = (await browser.pages())[0];

for (let pageNo = 1; pageNo <= 5; pageNo++) {
await page.goto(`${BASE}&page=${pageNo}`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('.product-thumb');

const pageProducts = await page.evaluate(() =>
Array.from(document.querySelectorAll('.product-thumb')).map((card) => {
const link = card.querySelector<HTMLAnchorElement>('.caption .title a');
const priceEl =
card.querySelector<HTMLElement>('.price-new') ??
card.querySelector<HTMLElement>('.price');
return {
name: link?.textContent?.trim() ?? null,
price: priceEl?.textContent?.trim() ?? null,
url: link?.href ?? null,
};
})
);

console.log(`Page ${pageNo}: ${pageProducts.length} products`);
products.push(...pageProducts);
}

await browser.close();
} finally {
if (session) await client.sessions.release(session.id);
}

console.log(`Collected ${products.length} products total`);
}

run().catch((e) => {
console.error('Run failed:', e.message);
process.exit(1);
});
```

**3. Run it:**

```bash
npx tsx agent-scrape.ts
```

With stealth on, the SDK sets a randomized user-agent and viewport. To keep an agent logged in across runs, add a `profileId` to persist cookies and session state.

Any AI agent that can call the SDK drives the browser this way, including Claude, Cursor, Gemini, OpenAI Computer Use, and custom agents. See [how to configure session options](/support/docs/browser-cloud-session-configuration/) for stealth, profiles, and tunnels.

To see your test results, open the TestMu AI Web Automation dashboard.

## Related TestMu AI Guides

- [How to launch your first Browser Cloud session](/support/docs/launch-first-session/) to verify credentials before your first run.
- [How to connect Puppeteer, Playwright, or Selenium to a session](/support/docs/connect-to-session/) for the full SDK adapter reference.
- [How to install and use Browser Cloud agent skills](/support/docs/browser-cloud-skills/) to let a coding assistant write the integration.
- [How to get started with Kane CLI](/support/docs/kane-cli-introduction/) to run browser tasks from natural language.
