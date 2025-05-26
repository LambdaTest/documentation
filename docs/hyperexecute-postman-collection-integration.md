---
id: hyperexecute-postman-collection-integration
title: Integrate Postman Collection with HyperExecute
hide_title: false
sidebar_label: Postman
description: To ensure effective API test execution, integrate your postman collection with HyperExecute by exporting your Postman collection and executing on HyperExecute.
keywords:
    - hyperexecute integrations
    - hyperexecute integrations with products
    - products
    - postman apis
    - postman integration
    - postman collection integration
url: https://www.lambdatest.com/support/docs/hyperexecute-postman-collection-integration/
site_name: LambdaTest
slug: hyperexecute-postman-collection-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Postman Collection Integration with HyperExecute",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-postman-collection-integration/"
        }]
      })
    }}
></script>
This guide walks you through the complete process of executing a Postman collection on the LambdaTest HyperExecute platform — from exporting your collection in Postman to viewing Allure reports on the LambdaTest Analytics dashboard.

## Prerequisite
Before you begin, make sure you have the following:

- A configured Postman Collection
- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)

## Step 1: Export the Postman Collection

- On your postman workspace, right-click on your desired collection and select Export.
- Choose the Collection v2.1 format and click Export.
- Save the downloaded JSON file locally (e.g., collection.json).

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Postman from the LambdaTest GitHub repository to run the APIs on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-postman-collection-integration-using-newman" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

## Step 2: Set Up Your HyperExecute Project
### 1. Create a Project Folder
- Create a new directory to house your project files.
- Move the exported Postman JSON file into this folder.
- Replace the placeholder `<NAME_OF_JSON_FILE>` with the actual filename (e.g., collection.json) in both `discoveryCommand` and `testRunnerCommand` fields.

### 2. Add the Discovery Script
- Create a new file named `discovery.js`.

```yaml reference
https://github.com/LambdaTest/hyperexecute-postman-collection-integration-using-newman/blob/main/discovery.js
```

### 3. Add the HyperExecute Binary
The CLI binary is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

Download the appropriate binary for your OS and setup the environment variables. Place the binary (e.g., hyperexecute or hyperexecute.exe) in the project folder.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile). Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure YAML in your Test Suite

```yaml reference
https://github.com/LambdaTest/hyperexecute-postman-collection-integration-using-newman/blob/main/hyperexecute.yaml
```

## Step 4: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

## Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 