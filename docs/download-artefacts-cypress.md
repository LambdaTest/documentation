---
id: download-artefacts-cypress
title: How to Download Artefacts for Cypress Tests on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Download Artefacts"
description: Download the screenshots, videos, logs, and files your Cypress tests generate on the TestMu AI cloud machine using the downloads capability.
keywords:
  - download cypress artefacts testmu ai
  - cypress test artefacts
  - download cypress screenshots and videos
  - lambdatest-artifacts folder
  - cypress downloads capability
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/download-artefacts-cypress/
site_name: TestMu AI
slug: download-artefacts-cypress/
canonical: https://www.testmuai.com/support/docs/download-artefacts-cypress/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# How to Download Artefacts for Cypress Tests on TestMu AI
***

When your Cypress tests run on the TestMu AI cloud machine, the screenshots, videos, logs, and downloaded files they produce stay on that remote machine. You can pull those artefacts back into your local project to debug failures, attach evidence to a report, or archive a run. You do it by adding a `downloads` capability to `lambdatest-config.json`, running the test with `--sync`, then generating a report that fetches everything into a local `lambdatest-artifacts` folder.

:::tip Sample repo
This guide uses the TestMu AI [sample Cypress Cloud repository](https://github.com/LambdaTest/Cypress-Cloud). Clone it to follow along with the same files shown here.
:::

## Download Artefacts From the TestMu AI Cloud Machine
***

These steps assume you have already run a Cypress test on TestMu AI. If you have not, see [how to run your first Cypress test](/support/docs/getting-started-with-cypress-testing/) first, then return here to fetch its artefacts.

### Update the TestMu AI Cypress CLI
***

Update the CLI first so the `--sync` and `generate-report` commands are available. Install the latest version:

```bash
npm install -g lambdatest-cypress-cli
```

### Add the downloads Capability
***

Tell TestMu AI which files to bring back by adding a `downloads` capability to `lambdatest-config.json`. List each file or directory path you want, separated by commas.

<img loading="lazy" src={require('../assets/images/cypress/cypress4.png').default} alt="downloads capability defined in the lambdatest-config.json file" width="1282" height="722" className="doc_img"/>

### Add the --sync Flag
***

Run the test with the `--sync` flag so the CLI waits for execution to finish before it fetches the artefacts:

```bash
lambdatest-cypress run --sync=true
```

Once the run completes, the console prints a `build_id` for the executed test.

<img loading="lazy" src={require('../assets/images/cypress/cypress5.png').default} alt="build_id printed in the console after a synced Cypress run" width="1282" height="722" className="doc_img"/>

### Get the session_id
***

Open `lambdatest_run.json` in your project and copy the `session_id`:

```json title="lambdatest_run.json"
{
   "build_id": "7724863",
   "session_id": "6c899177-047e-4432-a9a7-17776e23aae3"
}
```

Pass that `session_id` to the `generate-report` command to pull the artefacts:

```bash
lambdatest-cypress generate-report --session_id 6c899177-047e-4432-a9a7-17776e23aae3
```

### View the Downloaded Folder
***

The CLI creates a `lambdatest-artifacts` folder in your project root and downloads every requested file into it.

<img loading="lazy" src={require('../assets/images/cypress/cypress6.png').default} alt="lambdatest-artifacts folder created in the project root directory" width="1282" height="722" className="doc_img"/>

Each file is named with the `session_id` combined with the browser name, browser version, and test id it came from, so you can trace every artefact back to its session.

<img loading="lazy" src={require('../assets/images/cypress/cypress7.png').default} alt="Downloaded artefact file named with session id, browser name, version, and test id" width="1282" height="722" className="doc_img"/>

## Related Cypress Guides
***

Continue with the guides below to configure and debug your Cypress runs on TestMu AI.

- [Configure Cypress run settings](/support/docs/run-settings/) covers the downloads capability, the sync flag, and every other run option.
- [Run Cypress tests with private dependencies](/support/docs/private-dependencies-cypress/) handles tests that install from a private registry.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents `generate-report` and the other commands used here.

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
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Download Artefacts for Cypress Tests
      </span>
    </li>
  </ul>
</nav>
