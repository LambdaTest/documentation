---
id: hyperexecute-api-testing
title: How to Perform API Testing With REST Assured on HyperExecute
hide_title: false
sidebar_label: "REST Assured"
description: Run a REST Assured (Java + Maven) API test suite on HyperExecute. Download the CLI, set your credentials, configure hyperexecute.yaml, and trigger a cloud run.
keywords:
  - hyperexecute api testing
  - api automation hyperexecute
  - run api tests hyperexecute
  - automate api testing with hyperexecute cloud platform
  - integrating hyperexecute with ci/cd for api testing
  - troubleshooting api tests in hyperexecute
  - api testing tools hyperexecute
  - api test scripts hyperexecute
url: https://www.testmuai.com/support/docs/hyperexecute-api-testing/
site_name: TestMu AI
slug: hyperexecute-api-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-api-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import DocCard from '@site/src/component/DocCard';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Languages and Frameworks",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "API Testing",
          "item": `${BRAND_URL}/support/docs/hyperexecute-api-testing/`
        }]
      })
    }}
></script>

To run REST Assured API tests on HyperExecute, download the HyperExecute CLI, set your TestMu AI credentials, point the CLI at a `hyperexecute.yaml` configuration, and trigger the run. REST Assured is a Java library for testing REST APIs, and HyperExecute is the TestMu AI test orchestration platform that discovers your tests, runs the suite on its cloud grid, and reports the results in the dashboard.

Run your own REST Assured (Java + Maven) project or the ready-made sample used in the steps below.

## Prerequisites

Before you start, make sure you have:

- **Java (JDK 8 or above)** and **Maven** installed and on your `PATH` (`java -version` and `mvn -version` should both succeed). REST Assured is a Java library, so the suite builds with Maven.
- **Git**, to clone the sample repository.
- **A TestMu AI account.** Get your `LT_USERNAME` and `LT_ACCESS_KEY` from the [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile). You will export them in Step 3.

## How the REST Assured sample works

The sample is a Java + Maven project that uses REST Assured with TestNG. REST Assured sends HTTP requests (GET, POST, PUT, DELETE) and asserts on the responses using a readable `given().when().then()` syntax. For example, this call fetches a resource and asserts that the API returns a `200` status code:

```java
given().when().get(url).then().assertThat().statusCode(200);
```

- `RestAssured.baseURI` sets the common part of your endpoints so you don't repeat it.
- `given()` sets up the request, `when()` sends it, and `then()` handles the response and assertions.
- `log().all()` prints the request and response for debugging, and `extract().response().asString()` returns the response body as a string.

You don't need to change the test code to run it on HyperExecute. The steps below build the suite with Maven and hand execution to the HyperExecute grid through `hyperexecute.yaml`.

## Run the REST Assured suite on HyperExecute

### Step 1: Clone the sample repository

Clone the REST Assured API testing sample from the TestMu AI GitHub repository, or use your own project.

:::tip Sample repo

Download or clone the REST Assured API testing sample from the TestMu AI GitHub repository to run the tests on HyperExecute.

<a href="https://github.com/LambdaTest/hyp-api-testing" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

### Step 2: Download the HyperExecute CLI

The CLI triggers your tests on HyperExecute. Download the binary for your platform and keep it in the **root directory** of the test suite.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Step 3: Set your TestMu AI credentials

Export the `LT_USERNAME` and `LT_ACCESS_KEY` from your TestMu AI Profile (linked in the [Prerequisites](#prerequisites)) as environment variables. The CLI reads these to authenticate your run.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / macOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows (PowerShell)">

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`$env:LT_USERNAME = "${ YOUR_LAMBDATEST_USERNAME()}"
$env:LT_ACCESS_KEY = "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 4: Review the hyperexecute.yaml

The `hyperexecute.yaml` at the repository root tells HyperExecute how to build the suite, discover tests, and run them. It ships ready to use. Review it to see the `pre` (Maven build), `testDiscovery`, and `testRunnerCommand` steps.

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyp-api-testing/blob/master/hyperexecute.yaml
```

### Step 5: Trigger the run from the CLI

From the root folder of the project, run the CLI against your YAML file:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

If you did not export your credentials in Step 3, pass them inline instead:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

:::note macOS permissions

If macOS reports **permission denied** when you run the CLI, make it executable with `chmod u+x ./hyperexecute`. If a security popup appears, allow the binary from **System Preferences** → **Security & Privacy** → **General**.

:::

### Step 6: Monitor the run in the dashboard

Open the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and find your job. A successful run shows the job as **Completed** with passing tests, and the **pre**, **scenario**, and **post** stages available as logs. Open each stage to validate the API responses your suite tested.

#### Pre-run logs

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/api/1.png').default} alt="HyperExecute dashboard showing pre-run logs"  width="1920" height="868" className="doc_img"/>

#### Scenario logs

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/api/2.png').default} alt="HyperExecute dashboard showing scenario logs"  width="1920" height="868" className="doc_img"/>

#### Post-run logs

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/api/3.png').default} alt="HyperExecute dashboard showing post-run logs"  width="1920" height="868" className="doc_img"/>

## Related resources

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
  <DocCard heading="Getting started with HyperExecute" link="/support/docs/getting-started-with-hyperexecute/" description="Set up HyperExecute and trigger your first job on the grid." />
  <DocCard heading="hyperexecute.yaml parameters" link="/support/docs/hyperexecute-yaml-parameters/" description="Reference for every YAML key, with examples you can copy." />
</div>

<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
  <DocCard heading="Auto-split test execution" link="/support/docs/hyperexecute-auto-split-strategy/" description="Distribute tests across parallel machines automatically." />
  <DocCard heading="HyperExecute FAQs" link="/support/docs/hyperexecute-faqs/" description="Common questions on YAML, the CLI, and the platform." />
</div>
