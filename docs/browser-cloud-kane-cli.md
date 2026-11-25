---
id: browser-cloud-kane-cli
title: Kane CLI Integration - TestMu AI Browser Cloud
hide_title: true
sidebar_label: Run Kane CLI Tests
description: Point Kane CLI at a TestMu AI Browser Cloud session with --ws-endpoint, so kane-cli run and testmd run drive a cloud Chrome instead of a local one.
keywords:
  - kane cli browser cloud
  - kane-cli ws-endpoint
  - kane cli remote browser
  - kane cli without local chrome
  - browser cloud integration
url: https://www.testmuai.com/support/docs/browser-cloud-kane-cli/
site_name: TestMu AI
slug: browser-cloud-kane-cli/
canonical: https://www.testmuai.com/support/docs/browser-cloud-kane-cli/
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
      "@id": "https://www.testmuai.com/support/docs/browser-cloud-kane-cli/"
    },
    "headline": "Run Kane CLI Tests on TestMu AI Browser Cloud",
    "description": "Point Kane CLI at a TestMu AI Browser Cloud session with --ws-endpoint, so kane-cli run and testmd run drive a cloud Chrome instead of a local one.",
    "url": "https://www.testmuai.com/support/docs/browser-cloud-kane-cli/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Browser Cloud",
    "keywords": [
      "kane cli browser cloud",
      "kane-cli ws-endpoint",
      "kane cli remote browser"
    ],
    "proficiencyLevel": "Intermediate",
    "dependencies": "Kane CLI installed; Node.js 18+; npm install @testmuai/browser-cloud; LT_USERNAME and LT_ACCESS_KEY set.",
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
        "name": "Build a Browser Cloud session URL for kane-cli --ws-endpoint",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "// browser-cloud-url.mjs\nimport { Browser } from '@testmuai/browser-cloud';\n\n// The SDK logs progress with console.log. Send it to stderr so that\n// stdout carries only the URL.\nconsole.log = console.error;\n\nconst client = new Browser();\n\nconst session = await client.sessions.create({\n  adapter: 'playwright', // Kane CLI's --ws-endpoint expects a Playwright URL\n  lambdatestOptions: {\n    build: 'Kane CLI on Browser Cloud',\n    name: 'kane-cli run',\n    'LT:Options': {\n      username: process.env.LT_USERNAME,\n      accessKey: process.env.LT_ACCESS_KEY,\n    },\n  },\n});\n\n// The URL contains your access key: capture it, never print it to a log.\nprocess.stdout.write(session.websocketUrl);"
      }
    ],
    "datePublished": "2026-11-23",
    "dateModified": "2026-11-23"
  }) }}
/>

# Run Kane CLI Tests on TestMu AI Browser Cloud

Kane CLI opens a local Chrome for every run unless you give it a remote browser. Pass a TestMu AI Browser Cloud session URL with `--ws-endpoint`, and `kane-cli run` and `kane-cli testmd run` drive a cloud Chrome while Kane CLI itself keeps running on your machine or CI runner. Kane CLI skips its own Chrome launch when `--ws-endpoint` is set, and the browser session is recorded on the Web Automation Dashboard.

This guide is written against Kane CLI 0.10.8 and `@testmuai/browser-cloud` 1.0.1.

## When Should Kane CLI Use a Browser Cloud Session?

- **Your CI image cannot install Chrome**, for example a minimal Node Alpine image. The runner needs Node.js for Kane CLI and the helper script, but no browser.
- **You want each run's video, console logs and network requests** on the Web Automation Dashboard, next to the sessions your agents run on Browser Cloud.
- **You run one objective or one saved test at a time.** To move a whole suite off your machine, including Kane CLI itself, use `kane-cli testrun run --remote` instead. The [comparison below](#ws-endpoint-or-remote) shows the difference.

## Requirements for Running Kane CLI on Browser Cloud

- **Kane CLI** installed as described in [Installing Kane CLI](/support/docs/kane-cli-installation/).
- **Node.js 18 or later** for the helper script that creates the session URL.
- **Your TestMu AI username and access key** in `LT_USERNAME` and `LT_ACCESS_KEY`. The same pair signs Kane CLI in through `--username` and `--access-key`. [Kane CLI Authentication](/support/docs/kane-cli-authentication/) shows where to find your access key.

## Step 1: Install the Browser Cloud SDK Next to Your Kane CLI Tests

In the folder that holds your tests, install the TestMu AI Browser SDK:

```bash
npm install @testmuai/browser-cloud
```

## Step 2: Build a Browser Cloud Session URL for Kane CLI

Save this script as `browser-cloud-url.mjs`. It prints a session URL and nothing else, so your shell can store it in a variable:

```javascript
// browser-cloud-url.mjs
import { Browser } from '@testmuai/browser-cloud';

// The SDK logs progress with console.log. Send it to stderr so that
// stdout carries only the URL.
console.log = console.error;

const client = new Browser();

const session = await client.sessions.create({
  adapter: 'playwright', // Kane CLI's --ws-endpoint expects a Playwright URL
  lambdatestOptions: {
    build: 'Kane CLI on Browser Cloud',
    name: 'kane-cli run',
    'LT:Options': {
      username: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
    },
  },
});

// The URL contains your access key: capture it, never print it to a log.
process.stdout.write(session.websocketUrl);
```

What each part does:

- **`adapter: 'playwright'`** returns a Playwright WebSocket URL on `cdp.lambdatest.com/playwright`, the kind of endpoint `--ws-endpoint` expects.
- **`console.log = console.error`** keeps stdout clean. The SDK prints `[EventsService] Started recording for session ...` when it creates a session, and that line would otherwise end up in the variable next to the URL.
- **`client.sessions.create()`** builds the URL on your machine without contacting Browser Cloud. The cloud browser starts when Kane CLI connects, not when the script runs.

:::caution
The URL contains your username and access key. Store it in a variable or a CI secret, and never print it to a build log.
:::

## Step 3: Run a Kane CLI Objective With --ws-endpoint

<Tabs groupId="os">
<TabItem value="unix" label="macOS / Linux" default>

```bash
export LT_BROWSER_WSS="$(node browser-cloud-url.mjs)"

kane-cli run "Search for iPhone and check that the results show at least one product" \
  --url https://ecommerce-playground.lambdatest.io/ \
  --ws-endpoint "$LT_BROWSER_WSS" \
  --username "$LT_USERNAME" \
  --access-key "$LT_ACCESS_KEY"
```

</TabItem>
<TabItem value="powershell" label="Windows (PowerShell)">

```powershell
$env:LT_BROWSER_WSS = node browser-cloud-url.mjs

kane-cli run "Search for iPhone and check that the results show at least one product" `
  --url https://ecommerce-playground.lambdatest.io/ `
  --ws-endpoint $env:LT_BROWSER_WSS `
  --username $env:LT_USERNAME `
  --access-key $env:LT_ACCESS_KEY
```

</TabItem>
</Tabs>

`--username` and `--access-key` sign Kane CLI in without the OAuth browser window. If you already signed in with `kane-cli login`, you can leave them out. Kane CLI prints the result in your terminal, and the browser session appears on the [Web Automation Dashboard](https://automation.lambdatest.com/logs/) under the build name `Kane CLI on Browser Cloud`.

## Replay a Saved Kane CLI Test on Browser Cloud

`kane-cli testmd run` takes the same flag, so a saved `*_test.md` file replays in a Browser Cloud session too:

```bash
export LT_BROWSER_WSS="$(node browser-cloud-url.mjs)"

kane-cli testmd run checkout_test.md \
  --ws-endpoint "$LT_BROWSER_WSS" \
  --username "$LT_USERNAME" \
  --access-key "$LT_ACCESS_KEY"
```

`kane-cli testrun run` does not accept `--ws-endpoint`. To run a suite without a local browser, use `--remote`.

## Choose Between --ws-endpoint With Browser Cloud and --remote for Kane CLI {#ws-endpoint-or-remote}

Both options keep Chrome off your machine. They differ in where Kane CLI itself runs.

| | `--ws-endpoint` with a Browser Cloud URL | `kane-cli testrun run --remote` |
|---|---|---|
| Commands | `kane-cli run`, `kane-cli testmd run` | `kane-cli testrun run` |
| Where Kane CLI runs | Your machine or CI runner | The TestMu AI grid |
| Where the browser runs | A Browser Cloud session | The TestMu AI grid |
| Chrome needed on your machine | No | No |
| Guide | This page | [Remote Runs](/support/docs/kane-cli-remote-execution/) |

## Run Kane CLI on Browser Cloud From GitHub Actions

Commit `browser-cloud-url.mjs` next to your tests and store `LT_USERNAME` and `LT_ACCESS_KEY` as repository secrets. GitHub masks secret values in logs, which covers the access key inside the URL.

```yaml
name: kane-cli-on-browser-cloud
on: [push]

jobs:
  e2e:
    runs-on: ubuntu-latest
    env:
      LT_USERNAME: ${{ secrets.LT_USERNAME }}
      LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - run: npm install -g @testmuai/kane-cli
      - run: npm install @testmuai/browser-cloud
      - name: Run the objective in a Browser Cloud session
        run: |
          export LT_BROWSER_WSS="$(node browser-cloud-url.mjs)"
          kane-cli run "Search for iPhone and check that the results show at least one product" \
            --url https://ecommerce-playground.lambdatest.io/ \
            --ws-endpoint "$LT_BROWSER_WSS" \
            --username "$LT_USERNAME" \
            --access-key "$LT_ACCESS_KEY" \
            --agent \
            --timeout 300
```

`--agent` prints NDJSON instead of the interactive view. Read the exit code before you parse the output: [Agent Mode](/support/docs/kane-cli-agent-mode/#exit-codes) lists what `0`, `1`, `2` and `3` mean. [CI/CD Integration](/support/docs/kane-cli-cicd/) covers GitLab CI, Jenkins, Bitbucket Pipelines and Docker.

## Troubleshoot Kane CLI Runs on Browser Cloud

### Kane CLI Rejects a Browser Cloud URL Passed to --cdp-endpoint

`--cdp-endpoint` is for a Chrome that answers HTTP DevTools requests, such as `http://localhost:9222`. Kane CLI requests `<url>/json/version` before it connects and stops when that request fails. A Browser Cloud session URL is a `wss://` Playwright endpoint, so pass it with `--ws-endpoint`.

### Kane CLI Receives a Log Line Instead of a Browser Cloud URL in LT_BROWSER_WSS

If the variable starts with `[EventsService]`, the helper script is missing its first line, `console.log = console.error;`. Add it back so the SDK's log lines go to stderr and only the URL reaches stdout.

### Kane CLI's Browser Cloud Connection Fails With a 401 Response

Browser Cloud rejected the credentials in the session URL. When `LT_USERNAME` or `LT_ACCESS_KEY` is not set, the SDK builds the URL with the placeholder credentials `generic_user` and `generic_key`. Set both variables in the shell that runs `browser-cloud-url.mjs`, then create a new URL.

## Related Guides

- [CI/CD Integration](/support/docs/kane-cli-cicd/): run Kane CLI in GitHub Actions, GitLab CI, Jenkins and Bitbucket Pipelines.
- [Remote Runs](/support/docs/kane-cli-remote-execution/): move a whole test suite to the TestMu AI grid with `--remote`.
- [Run Stagehand on Browser Cloud](/support/docs/browser-cloud-stagehand/): attach Stagehand to a Browser Cloud session through its CDP URL.
- [Replay and Debug Sessions](/support/docs/browser-cloud-debugging/): watch the video and read the logs of a Browser Cloud session.
