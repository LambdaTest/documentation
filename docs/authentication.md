---
id: authentication
title: Authentication
sidebar_label: Authentication
description: Explore comprehensive documentation on Cypress Automation and Testing for building robust, secure authentication systems. Understand authentication processes and bolster your testing efficiency.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Testing Online
  - Run Cypress
  - Cypress Run Specific Test
  - Cypress Testing Environment
  - How to Run Cypress Tests

url: https://www.testmu.ai/support/docs/authentication
site_name: LambdaTest
slug: authentication
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

Authenticate your Cypress test runs in the following ways -

1. Set up the **environment variables**. (or)
2. Utilizing the **CLI params**. (or)
3. Mention your **username** and **access key** in the **lambdatest-config.json**.

:::important Note
We use the following order of precedence to determine which auth credentials to use if you use more than one option to pass your auth credentials:
CLI arguments > Options set in lambdatest-config.json > Environment variables
:::

## Utilizing CLI Params:

---

The following args can be used while running tests using the run command.

| Arg        | Shorthand | Accepted values            |
| ---------- | --------- | -------------------------- |
| --username | --user        | Your <BrandName /> username   |
| --access_key      | --ak        | Your <BrandName /> access key |

For example -

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`lambdatest-cypress run --username=${ YOUR_LAMBDATEST_USERNAME()} --ak=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

  </CodeBlock>
</div>

## Using lambdatest-config.json:

---

The auth option will help you in specifying your username and access key. You can find your username and access key in the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build). Both, the auth credentials set in environment variables and the ones mentioned in the lambdatest-config.json file will get overridden.

<img loading="lazy" src={require('../assets/images/cypress/cypress3.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The options supported in the auth are as follows:

| Arg            | Accepted values            |
| -------------- | -------------------------- |
| **username**   | Your <BrandName /> username   |
| **access_key** | Your <BrandName /> access key |

For example -

```json title="lambdatest-config.json"
"lambdatest_auth": {
      "username": "<your username>",
      "access_key": "<your access key>"
   },
```


## Setup the Environment Variables:

---

While utilizing the CLI params, you can set up the following environment variables.

| Env variable      | Accepted values            |
| ----------------- | -------------------------- |
| **LT_USERNAME**   | Your <BrandName /> username   |
| **LT_ACCESS_KEY** | Your <BrandName /> access key |

Or you can also set environment variables using following commands:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \\
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>


</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}" \`
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::tip Note
By doing so, the auth credentials you use in your **lambdatest-config.json** file will get overridden only if these options are not provided in **lambdatest-config.json** file.
:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Authentication
      </span>
    </li>
  </ul>
</nav>

